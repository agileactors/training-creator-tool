import React from 'react';
import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import TrainingPage from '../components/TrainingPage/TrainingPage';
import slugify from '../../build-utils/slugify/slugify';
import './cms-utils';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

const TrainingPreview = ({ entry }) => {
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    // FIXME check if there is a better way for code styling (import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'; deckDeckGoHighlightElement();)
    // What we do right now is redeclaring the web component inside the preview iframe because it is not enought to have it declared in the parent document.
    const previewFrame = document.querySelector('#preview-pane');
    if (previewFrame) {
      const iframeDocument = previewFrame.contentWindow.document;
      const headEl = iframeDocument.querySelector('head');

      const scriptEl = iframeDocument.createElement('script');
      scriptEl.setAttribute('type', 'module');
      scriptEl.setAttribute(
        'src',
        'https://unpkg.com/@deckdeckgo/highlight-code@latest/dist/deckdeckgo-highlight-code/deckdeckgo-highlight-code.esm.js'
      );
      headEl.appendChild(scriptEl);
    }

    const editorEl = document.querySelector('.Pane1');

    const onEditorClick = (evt) => {
      const allPages = [];

      editorEl.querySelectorAll('[id^="pageTitle-field-"]').forEach((el) => allPages.push(el.id));

      const listElementClicked = evt.target.closest('[class*="ListItem"]');

      if (listElementClicked) {
        const pageTitleElementClicked = listElementClicked.querySelector('[id^="pageTitle-field-"]');

        if (pageTitleElementClicked) {
          const pageIndex = allPages.indexOf(pageTitleElementClicked.id);

          setCurrentPage(pageIndex + 1); // NOTE the +1 is because of the first page that is created automatically
        }
      }
    };

    editorEl.addEventListener('click', onEditorClick);

    return () => {
      editorEl.removeEventListener('click', onEditorClick);
    };
  }, []);

  let training = entry.getIn(['data']).toJS();

  let allPages = [
    {
      title: 'Home page',
      body: `
<div style="text-align: center">

# ${training.title} training

[Start Presentation]()
  </div>
   `
    }
  ];

  training = {
    ...training,
    sections: training?.sections?.map((s) => ({
      ...s,
      title: s.sectionTitle,
      pages: s?.pages?.map((p) => {
        allPages.push({
          ...p,
          title: p.pageTitle
        });

        return {
          ...p,
          title: p.pageTitle
        };
      })
    }))
  };

  if (allPages.length === 1) {
    allPages = [
      {
        title: 'Home page',
        body: `
<div style="text-align: center">

# ${training.title} training

This training is de-activated or it has no content
</div>
      `
      }
    ];
  }

  return (
    <div>
      {[allPages[currentPage]].map((page) => (
        <TrainingPage
          key={page.title}
          pageContext={{
            body: page.body,
            mode: 'preview'
          }}
        />
      ))}

      <hr />

      <button disabled={currentPage === 0} onClick={() => setCurrentPage((prev) => prev - 1)}>
        Previous
      </button>

      <button disabled={currentPage === allPages.length - 1} onClick={() => setCurrentPage((prev) => prev + 1)}>
        Next
      </button>
    </div>
  );
};

CMS.registerPreviewTemplate('trainings', TrainingPreview);

CMS.registerEventListener({
  name: 'preSave',
  handler: ({ entry }) => {
    const entryData = entry.getIn(['data']).toJS();

    // NOTE: If entryData contains a sections key then it means that the whole entry is training collection or we are in admin mode
    if (!Object.keys(entryData).includes('sections')) {
      return;
    }

    const sections = entryData?.sections?.map((section) => {
      return {
        title: section.sectionTitle,
        slugifiedTitle: slugify(section.sectionTitle),
        pages:
          section?.pages?.map((page) => {
            return {
              title: page.pageTitle,
              slugifiedTitle: slugify(page.pageTitle)
            };
          }) || []
      };
    });

    if (!sections?.length) {
      throw new Error(`There is no section in this training.`);
    }

    for (const section of sections) {
      if (!section.slugifiedTitle) {
        throw new Error(`There is a section with invalid Title.`);
      }

      if ((sections?.filter((_section) => _section.slugifiedTitle === section.slugifiedTitle) || []).length > 1) {
        throw new Error(`Section with Title "${section.title}" exists more than one times.`);
      }

      if (!section?.pages?.length) {
        throw new Error(`There is no page in section "${section.title}".`);
      }

      for (const page of section.pages) {
        if (!page.slugifiedTitle) {
          throw new Error(`There is a page in section "${section.title}" with invalid Title.`);
        }

        if (
          (section?.pages?.filter((_section) => _section.slugifiedTitle === section.slugifiedTitle) || []).length > 1
        ) {
          throw new Error(`Page with Title "${page.title}" exists more than one times in section "${section.title}".`);
        }
      }
    }
  }
});
