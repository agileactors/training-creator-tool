// FIXME In this file many bad practices have been used. We should revisit it.

if (typeof window !== 'undefined') {
  const style = document.createElement('style');

  style.innerHTML = /* css */ `
    /* https://github.com/netlify/netlify-cms/issues/5092 */
    [data-slate-editor] {
        -webkit-user-modify: read-write !important;
    }
  `;

  document.head.appendChild(style);

  const addHelperInfo = () => {
    // NOTE: If we are in a training editor, we want to display some info about the training
    if (window.location.href.includes('collections/trainings/entries/')) {
      // FIXME This interval is here because the content of the page is not available from the
      // begining. Check if we could find a way to execute the function when content is ready.
      const myInterval = setInterval(() => {
        const editor = document.querySelector('[class*="-ControlContainer"');

        if (editor) {
          clearInterval(myInterval);

          document.querySelector('.info-element')?.remove();

          // The string after the last slash in the url of an entry is the UNIQUE NAME of the entry.
          // And we know that the UNIQUE NAME of the entry is going to be used in order to be deployed to the appropriate alias url.
          const trainingName = window.location.href.split('/').slice(-1)[0];

          // NOTE Add Info about the training
          const trainingUrl = document.createElement('a');
          trainingUrl.href = `https://${trainingName}--aa-trainings.netlify.app/`;
          trainingUrl.target = '_blank';
          trainingUrl.append(trainingUrl.href);
          trainingUrl.style = 'color: #0766d5';

          const adminUrl = document.createElement('a');
          adminUrl.href = `https://${trainingName}--aa-trainings.netlify.app/admin`;
          adminUrl.target = '_blank';
          adminUrl.append(adminUrl.href);
          adminUrl.style = 'color: #0766d5';

          const infoElement = document.createElement('div');

          // eslint-disable-next-line prettier/prettier
          infoElement.style = 'margin-bottom: 16px; padding: 8px; background-color: #ffff5f; color: #000; border: 2px solid rgb(223, 223, 227); border-radius: 5px';
          infoElement.className = 'info-element';

          infoElement.append('You will find this training at: ');
          infoElement.appendChild(trainingUrl);

          infoElement.appendChild(document.createElement('br'));

          infoElement.append('You can edit this training at: ');
          infoElement.appendChild(adminUrl);

          editor.insertAdjacentElement('afterbegin', infoElement);
        }
      }, 2000);
    }
  };

  const attachEventListenerForPreviewButton = () => {
    if (window.location.href.includes('collections/trainings/entries/')) {
      const myInterval = setInterval(() => {
        const previewButton = document.querySelector('[class*="-EditorToggle"');

        if (previewButton) {
          clearInterval(myInterval);
          previewButton.addEventListener('click', onPreviewButtonClick);
        }
      }, 2000);
    }
  };

  const addDocumentationInfo = () => {
    // NOTE It checks if we are in the page with all trainings
    if (window.location.href.endsWith('collections/trainings')) {
      // FIXME This interval is here because the content of the page is not available from the
      // begining. Check if we could find a way to execute the function when content is ready.
      const myInterval = setInterval(() => {
        const sidebarHeader = document.querySelector('[class*="-SidebarHeading"');

        if (sidebarHeader) {
          clearInterval(myInterval);

          // NOTE Add Info about the documentation
          const documentationUrl = document.createElement('a');
          documentationUrl.href = `https://docs.google.com/document/d/1dDIEuZrmovezoQisif31Wu5YirBXxIAk4FwH01iihdo/edit?usp=sharing`;
          documentationUrl.target = '_blank';
          documentationUrl.append(documentationUrl.href);
          documentationUrl.style = 'color: #0766d5';

          const docElement = document.createElement('div');

          // eslint-disable-next-line prettier/prettier
          docElement.style = 'overflow-wrap: break-word; padding: 8px; background-color: #ffff5f; color: #000; border: 2px solid rgb(223, 223, 227); border-radius: 5px';
          docElement.className = 'info-element';

          docElement.append('Documentation: ');
          docElement.appendChild(documentationUrl);

          sidebarHeader.insertAdjacentElement('beforebegin', docElement);
        }
      }, 2000);
    }
  };

  window.addEventListener('popstate', addHelperInfo);
  window.addEventListener('popstate', attachEventListenerForPreviewButton);
  window.addEventListener('popstate', addDocumentationInfo);

  const onPreviewButtonClick = () => {
    addHelperInfo();
  };

  addHelperInfo();
  attachEventListenerForPreviewButton();
  addDocumentationInfo();

  // NOTE: This is a div that is added by netlify CMS when it is a preview deploy.
  // We use these preview deployments for every training, so, we need to remove this div
  document.querySelector('[data-netlify-deploy-id]')?.remove();
}
