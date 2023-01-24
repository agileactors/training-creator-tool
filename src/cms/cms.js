import React from 'react';
import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import TrainingPage from '../components/TrainingPage/TrainingPage';
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
          title: p.pageTitle,
          isActive: p.isActive && s.isActive && training.isActive
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
      {[allPages[currentPage]]?.map((page) => (
        <>
          {!page.isActive && typeof page.isActive === 'boolean' ? (
            <div
              style={{
                position: 'fixed',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'red',
                color: 'white',
                padding: '0.5rem'
              }}
            >
              Not Active
            </div>
          ) : null}
          <TrainingPage
            key={page.title}
            pageContext={{
              body: page.body,
              mode: 'preview'
            }}
          />
        </>
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
