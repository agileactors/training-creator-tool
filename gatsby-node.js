const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const generateSandbox = require('./build-utils/sandbox/generateSandbox');
const slugify = require('./build-utils/slugify/slugify');

const getSandboxUrl = (id) => `https://codesandbox.io/s/${id}`;

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images.

  const sandboxLinks = node?.context?.body?.match(/\[?.*\]\(?.*codesandbox-link:\/\/?.*\)/g);

  if (sandboxLinks) {
    sandboxLinks.forEach(async (l) => {
      let sandboxPath = l.split('codesandbox-link://')?.[1]?.replace(')', '');

      if (sandboxPath) {
        sandboxPath = `${__dirname}/__sandboxes__/_examples/${sandboxPath}`;
        const createdSandboxId = await generateSandbox(sandboxPath);

        if (createdSandboxId) {
          node.context.body = node.context.body.replace(
            l,
            l.split('codesandbox-link://')[0] + getSandboxUrl(createdSandboxId) + ')'
          );
        }
      }
    });
  }

  const sandboxIFrames = node?.context?.body?.match(/\[?.*\]\(?.*codesandbox-embed:\/\/?.*\)/g);

  if (sandboxIFrames) {
    sandboxIFrames.forEach(async (l) => {
      let sandboxPath = l.split('codesandbox-embed://')?.[1]?.replace(')', '');

      if (sandboxPath) {
        sandboxPath = `${__dirname}/__sandboxes__/_examples/${sandboxPath}`;
        const createdSandboxId = await generateSandbox(sandboxPath);

        if (createdSandboxId) {
          node.context.body = node.context.body.replace(
            l,
            `<iframe src="${getSandboxUrl(createdSandboxId)}"></iframe>`
          );
        }
      }
    });
  }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const trainingToBuild = process.env.GATSBY_TRAINING || 'admin';
  let graphqlFilter = '';

  if (trainingToBuild !== 'admin') {
    graphqlFilter = `(filter: {frontmatter: {uniqueName: {eq: "${trainingToBuild}"}}})`;
  } else {
    const availableTrainingsQuery = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: ASC, fields: frontmatter___title }
          filter: { frontmatter: { isActive: { eq: true } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                uniqueName
              }
            }
          }
        }
      }
    `);

    const listOfTrainings = availableTrainingsQuery?.data?.allMarkdownRemark?.edges.map((edge) => ({
      title: edge.node?.frontmatter?.title,
      url: `https://${edge?.node?.frontmatter?.uniqueName}--aa-trainings.netlify.app`
    }));

    createPage({
      path: '/', // FIXME: Check if slug already exists,
      component: path.resolve(`src/components/TrainingPage/TrainingPage.jsx`),
      context: {
        id: 1,
        title: 'Available Trainings',
        type: 'availableTrainings',
        prevSlug: '',
        nextSlug: '',
        currentPageIndex: -1,
        data: { listOfTrainings },
        numOfPages: 0,
        trainingsData: []
      }
    });

    return;
  }

  const trainingsQueryResult = await graphql(`
    {
      allMarkdownRemark${graphqlFilter} {
        edges {
          node {
            fields {
              slug
            }
            html
            id
            frontmatter {
              uniqueName
              isActive
              title
              sections {
                pages {
                  body
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
  const trainings = trainingsQueryResult?.data?.allMarkdownRemark?.edges?.filter((edge) =>
    edge.node?.fields?.slug?.startsWith('/trainings/')
  );

  const trainingsData = [];

  if (!trainings?.length) {
    // createPage({
    //   path: '/',
    //   component: path.resolve(`src/components/NoContent/NoContent.jsx`),
    // });

    // FIXME We need to create a new Page type which will create this page
    createPage({
      path: '/', // FIXME: Check if slug already exists,
      component: path.resolve(`src/components/TrainingPage/TrainingPage.jsx`),
      context: {
        id: 1,
        title: 'Home page',
        prevSlug: '',
        nextSlug: '',
        currentPageIndex: -1,
        body: `
<div style="text-align: center">

# Training

This training is de-activated or it has no content - 2
</div>
        `,
        numOfPages: 0,
        trainingsData: []
      }
    });

    return;
  }

  if (!errors) {
    trainings.forEach(({ node }) => {
      let allPages = [];
      const training = node;

      if (!training.frontmatter.isActive) {
        // FIXME We need to create a new Page type which will create this page
        createPage({
          path: '/', // FIXME: Check if slug already exists,
          component: path.resolve(`src/components/TrainingPage/TrainingPage.jsx`),
          context: {
            id: 1,
            title: 'Home page',
            prevSlug: '',
            nextSlug: '',
            currentPageIndex: -1,
            body: `
  <div style="text-align: center">

  # Training

  This training is de-activated or it has no content - 3
  </div>
            `,
            numOfPages: 0,
            trainingsData: []
          }
        });

        return;
      }

      training.frontmatter.sections
        .filter((section) => section.isActive)
        .forEach((section, sectionIndex, sections) => {
          const numberOfSectionsWithTheSameTitle = sections.filter(
            ({ sectionTitle }, index) => sectionTitle === section.sectionTitle && index < sectionIndex
          ).length;

          // eslint-disable-next-line operator-linebreak
          const sectionSlug =
            // eslint-disable-next-line operator-linebreak
            slugify(section.sectionTitle) +
            (numberOfSectionsWithTheSameTitle === 0 ? '' : `-${numberOfSectionsWithTheSameTitle}`);

          section.pages
            .filter((page) => page.isActive)
            .forEach((page, pageIndex, pages) => {
              if (pageIndex === 0) {
                allPages.push({
                  title: section.sectionTitle,
                  slug: `/${sectionSlug}`,
                  body:
                    // eslint-disable-next-line operator-linebreak
                    `# ${section.sectionTitle}\n` +
                    pages
                      .map((_page, _pageIndex, _pages) => {
                        const pagesWithTheSameTitle = _pages.filter(
                          ({ pageTitle }, index) => pageTitle === _page.pageTitle && index < _pageIndex
                        ).length;
                        // eslint-disable-next-line prettier/prettier
                        const pageSlug = `/${sectionSlug}/${slugify(_page.pageTitle)}` + (pagesWithTheSameTitle === 0 ? '' : `-${pagesWithTheSameTitle}`);

                        return `- [${_page.pageTitle}](${pageSlug})`;
                      })
                      .join('\n')
                });
              }

              const pagesWithTheSameTitle = pages.filter(
                ({ pageTitle }, index) => pageTitle === page.pageTitle && index < pageIndex
              ).length;

              // eslint-disable-next-line operator-linebreak
              const pageSlug =
                // eslint-disable-next-line operator-linebreak
                `/${sectionSlug}/${slugify(page.pageTitle)}` +
                (pagesWithTheSameTitle === 0 ? '' : `-${pagesWithTheSameTitle}`);

              allPages.push({
                title: page.pageTitle,
                slug: pageSlug,
                body: page.body
              });
            });
        });

      let numOfPages = allPages.length;

      if (!numOfPages) {
        // FIXME We need to create a new Page type which will create this page
        createPage({
          path: '/', // FIXME: Check if slug already exists,
          component: path.resolve(`src/components/TrainingPage/TrainingPage.jsx`),
          context: {
            id: 1,
            title: 'Home page',
            prevSlug: '',
            nextSlug: '',
            currentPageIndex: -1,
            body: `
  <div style="text-align: center">

  # ${training.frontmatter.title} training

  This training is de-activated or it has no content -4
  </div>
            `,
            numOfPages: 0,
            trainingsData: []
          }
        });

        return;
      }

      const homepage = {
        slug: '/',
        title: 'Home page',
        type: 'homepage',
        data: {
          title: training.frontmatter.title,
          startPresentationSlug: allPages[0].slug
        }
      };

      numOfPages++;

      allPages = [homepage].concat(allPages);

      allPages.forEach((page, index) => {
        const prevSlug = index === 0 ? '' : allPages[index - 1].slug;
        const nextSlug = index === numOfPages - 1 ? '' : allPages[index + 1].slug;
        const currentPageIndex = index + 1;

        createPage({
          path: page.slug, // FIXME: Check if slug already exists,
          component: path.resolve(`src/components/TrainingPage/TrainingPage.jsx`),
          context: {
            id: 1,
            title: page.title,
            prevSlug,
            nextSlug,
            currentPageIndex,
            body: page.body,
            numOfPages,
            type: page.type || 'content',
            data: page.data || {},
            trainingsData
          }
        });
      });

      console.log(`---- CHRISTOS MESSAGE: Training ${training.frontmatter.uniqueName} - ${numOfPages} pages`);
    });
  }
};
