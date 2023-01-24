import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useKeyboardToggle } from '../../hooks/useKeyboardToggle';
import { useClickOutside } from '../../hooks/useClickOutside';
import { M_KEY_CODE } from '../../constants';
import { NestedList } from './../NestedList/NestedList';
import slugify from '../../../build-utils/slugify/slugify';

const useTrainingDataQuery = () => {
  const trainingToBuild = process.env.GATSBY_TRAINING || 'admin';

  // graphqlFilter = `(filter: {frontmatter: {title: {eq: "${trainingToBuild}"}}})`

  const trainingsQueryResult = useStaticQuery(graphql`
    query AA {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              uniqueName
              isActive
              sections {
                pages {
                  pageTitle
                  isActive
                }
                sectionTitle
                isActive
              }
            }
          }
        }
      }
    }
  `);

  const errors = trainingsQueryResult?.errors;

  if (errors) {
    return [];
  }

  const trainings = trainingsQueryResult?.allMarkdownRemark?.edges;

  if (!trainings) {
    return [];
  }

  const trainingSections = trainings.find(
    (training) => training.node?.frontmatter.uniqueName === trainingToBuild && training.node?.frontmatter.sections
  )?.node?.frontmatter.sections;

  if (!trainingSections) {
    return [];
  }

  return trainingSections
    .filter((section) => section.isActive)
    .map((section, sectionIndex, sections) => {
      // eslint-disable-next-line prettier/prettier
      const numberOfSectionsWithTheSameTitle = sections.filter(
        ({ sectionTitle }, index) => sectionTitle === section.sectionTitle && index < sectionIndex
      ).length;

      // eslint-disable-next-line prettier/prettier
      const sectionSlug =
        slugify(section.sectionTitle) +
        (numberOfSectionsWithTheSameTitle === 0 ? '' : `-${numberOfSectionsWithTheSameTitle}`);

      return {
        title: section.sectionTitle,
        pages:
          section.pages
            ?.filter((page) => page.isActive)
            ?.map((page, pageIndex, pages) => {
              // eslint-disable-next-line prettier/prettier
              const pagesWithTheSameTitle = pages.filter(
                ({ pageTitle }, index) => pageTitle === page.pageTitle && index < pageIndex
              ).length;

              // eslint-disable-next-line prettier/prettier
              const pageSlug =
                `/${sectionSlug}/${slugify(page.pageTitle)}` +
                (pagesWithTheSameTitle === 0 ? '' : `-${pagesWithTheSameTitle}`);

              return {
                title: page.pageTitle,
                slug: pageSlug
              };
            }) || []
      };
    });
};

export const SideNavigation = () => {
  const sections = useTrainingDataQuery();

  const { isOpen, setIsOpen } = useKeyboardToggle(M_KEY_CODE);

  const clickRef = React.useRef();
  useClickOutside(clickRef, () => {
    setIsOpen(false);
  });

  const closeMenu = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        aria-label="open"
        id="openMenuButton"
        className="menu-icon"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer className="menu-drawer" variant="temporary" open={isOpen} anchor="left">
        <div ref={clickRef}>
          <ListItem
            button
            component={Link}
            to={'/'}
            key={'/'}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <ListItemText primary={'Home'} />
            <IconButton aria-label="close" onClick={closeMenu}>
              <CloseIcon />
            </IconButton>
          </ListItem>
          <Divider />
          <List>
            {sections.map((section, index) => {
              return (
                <div key={section.title}>
                  <NestedList label={section.title} defaultOpen={index === 0}>
                    <List component="div" disablePadding>
                      {section?.pages?.map((page) => (
                        <ListItem
                          button
                          component={Link}
                          to={page.slug}
                          key={page.slug}
                          sx={{ pl: 4 }}
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          <ListItemText primary={page.title} />
                        </ListItem>
                      ))}
                    </List>
                  </NestedList>
                </div>
              );
            })}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default React.memo(SideNavigation);
