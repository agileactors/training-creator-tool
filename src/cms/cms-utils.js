// FIXME In this file many bad practices have been used. We should revisit it.

if (typeof window !== 'undefined') {
  let HelperInfoObserver;
  let DocumentationObserver;
  let WorkflowObserver;

  let TRAINING = '';

  if (window.location.origin.includes('--aa-trainings.netlify.app')) {
    TRAINING = window.location.origin.split('--aa-trainings.netlify.app')[0].split(window.location.protocol + '//')[1];
  }

  const style = document.createElement('style');

  style.innerHTML = /* css */ `
    /* https://github.com/netlify/netlify-cms/issues/5092 */
    [data-slate-editor] {
        -webkit-user-modify: read-write !important;
    }
  `;

  if (TRAINING) {
    style.innerHTML += /* css */ `
      [class*="-WorkflowList"] [draggable="true"] {
        display: none !important;
      }

      [class*="-columnHovered1"] [draggable="true"] {
        display: none !important;
      }
    `;
  }

  document.head.appendChild(style);

  const addHelperInfo = () => {
    const editor = document.querySelector('[class*="-ControlContainer"]');

    if (!editor) {
      return;
    }

    let trainingName = 'unique-name';

    const uniqueNameInput = document.querySelector('[id^=uniqueName]');

    if (uniqueNameInput) {
      trainingName = uniqueNameInput.value || 'unique-name';

      if (uniqueNameInput) {
        uniqueNameInput.addEventListener('input', (event) => {
          const tempTrainingName = event.target.value || 'unique-name';
          const adminUrlElement = document.querySelector('#admin-url');
          const trainingUrlElement = document.querySelector('#training-url');

          if (adminUrlElement) {
            adminUrlElement.href = `https://${tempTrainingName}--aa-trainings.netlify.app/admin`;
            adminUrlElement.innerHTML = adminUrlElement.href;
          }

          if (trainingUrlElement) {
            trainingUrlElement.href = `https://${tempTrainingName}--aa-trainings.netlify.app/`;
            trainingUrlElement.innerHTML = trainingUrlElement.href;
          }
        });
      }
    } else {
      trainingName = window.location.href.split('/').slice(-1)[0];
    }

    document.querySelector('.info-element')?.remove();

    // NOTE Add Info about the training
    const trainingUrl = document.createElement('a');
    trainingUrl.href = `https://${trainingName}--aa-trainings.netlify.app/`;
    trainingUrl.target = '_blank';
    trainingUrl.append(trainingUrl.href);
    trainingUrl.style = 'color: #0766d5';
    trainingUrl.id = 'training-url';

    const adminUrl = document.createElement('a');
    adminUrl.href = `https://${trainingName}--aa-trainings.netlify.app/admin`;
    adminUrl.target = '_blank';
    adminUrl.append(adminUrl.href);
    adminUrl.style = 'color: #0766d5';
    adminUrl.id = 'admin-url';

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
  };

  const addObservers = () => {
    HelperInfoObserver?.disconnect();
    DocumentationObserver?.disconnect();
    WorkflowObserver?.disconnect();

    // NOTE: If we are in a training editor, we want to display some info about the training
    const location = window.location.href;
    if (location.includes('collections/trainings/entries/') || location.endsWith('/collections/trainings/new')) {
      HelperInfoObserver = new MutationObserver(() => {
        if (document.querySelector('[class*="-ControlContainer"]')) {
          addHelperInfo();
          HelperInfoObserver.disconnect();
        }
      });

      HelperInfoObserver.observe(document.querySelector('body'), { subtree: true, childList: true });
    }

    if (window.location.href.endsWith('collections/trainings')) {
      DocumentationObserver = new MutationObserver(() => {
        if (document.querySelector('[class*="-SidebarHeading"]')) {
          addDocumentationInfo();
          DocumentationObserver.disconnect();
        }
      });

      DocumentationObserver.observe(document.querySelector('body'), { subtree: true, childList: true });
    }

    if (window.location.href.endsWith('/admin/#/workflow')) {
      WorkflowObserver = new MutationObserver(() => {
        if (document.querySelector('[class*="WorkflowListContainer"]')) {
          filterEntriesInWorkflow();
        }
      });

      WorkflowObserver.observe(document.querySelector('body'), { subtree: true, childList: true });
    }
  };

  const attachEventListenerForPreviewButton = () => {
    const location = window.location.href;

    if (location.includes('collections/trainings/entries/') || location.endsWith('/collections/trainings/new')) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach(() => {
          const previewButton = document.querySelector('[class*="-EditorToggle"]');
          if (previewButton) {
            previewButton.addEventListener('click', onPreviewButtonClick);
            observer.disconnect();
          }
        });
      });

      observer.observe(document.querySelector('body'), { subtree: true, childList: true });
    }
  };

  const addDocumentationInfo = () => {
    const sidebarHeader = document.querySelector('[class*="-SidebarHeading"]');

    document.querySelector('.doc-info-element')?.remove();

    if (!sidebarHeader) {
      return;
    }

    const documentationUrl = document.createElement('a');
    documentationUrl.href = `https://docs.google.com/document/d/1dDIEuZrmovezoQisif31Wu5YirBXxIAk4FwH01iihdo/edit?usp=sharing`;
    documentationUrl.target = '_blank';
    documentationUrl.append(documentationUrl.href);
    documentationUrl.style = 'color: #0766d5';

    const docElement = document.createElement('div');

    // eslint-disable-next-line prettier/prettier
    docElement.style = 'overflow-wrap: break-word; padding: 8px; background-color: #ffff5f; color: #000; border: 2px solid rgb(223, 223, 227); border-radius: 5px';
    docElement.className = 'doc-info-element';

    docElement.append('Documentation: ');
    docElement.appendChild(documentationUrl);

    sidebarHeader.insertAdjacentElement('beforebegin', docElement);
  };

  const filterEntriesInWorkflow = () => {
    const workflowListElement = document.querySelector('[class*="WorkflowListContainer"]');

    if (!workflowListElement) {
      return;
    }

    if (TRAINING) {
      workflowListElement.querySelectorAll('a').forEach((cardLink) => {
        const trainingInCard = cardLink.querySelector('h2')?.textContent;

        if (TRAINING === trainingInCard) {
          cardLink.parentElement.parentElement.setAttribute('style', 'display:block !important');
        }
      });
    }
  };

  window.addEventListener('popstate', addObservers);
  window.addEventListener('popstate', addHelperInfo);
  window.addEventListener('popstate', addDocumentationInfo);
  window.addEventListener('popstate', filterEntriesInWorkflow);
  addObservers();

  window.addEventListener('popstate', attachEventListenerForPreviewButton);
  attachEventListenerForPreviewButton();

  const onPreviewButtonClick = () => {
    addObservers();
  };

  // NOTE: This is a div that is added by netlify CMS when it is a preview deploy.
  // We use these preview deployments for every training, so, we need to remove this div
  document.querySelector('[data-netlify-deploy-id]')?.remove();
}
