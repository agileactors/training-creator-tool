// https://github.com/mui-org/material-ui/blob/master/examples/gatsby/plugins/gatsby-plugin-top-layout/gatsby-browser.js

import React, { useEffect } from 'react';
// import TopLayout from './../TopLayout/TopLayout';
import SideNavigation from './../SideNavigation/SideNavigation';
import { CacheProvider } from '@emotion/react';
import getEmotionCache from '../../utils/getEmotionCache';
import './_reset.css';
import './_elements.css';
import './themes.css';

const cache = getEmotionCache();

export const WrapRootElement = ({ children }) => {
  useEffect(() => {
    // NOTE: This is a div that is added by netlify CMS when it is a preview deploy.
    // We use these preview deployments for every training, so, we need to remove this div
    document.querySelector('[data-netlify-deploy-id]')?.remove();
  }, []);

  return (
    <CacheProvider value={cache}>
      {/* <TopLayout> */}
      <SideNavigation />
      {children}
      {/* </TopLayout> */}
    </CacheProvider>
  );
};
