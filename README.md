### Access Locally
In order to run the application locally you have to execute the following queries.

```
$ git https://github.com/agileactors/training-creator-tool
$ cd training-creator-tool
$ nvm use
$ npm install
$ npm start //run the admin project

# Linux
$ GATSBY_TRAINING=<training name> npm start // run a specific training (currently example or javascript)

# Windows CMD
$ set GATSBY_TRAINING=javascript& npm start
```

Regardless the project you have started:

CMS: http://localhost:8000/admin/#/

Some credentials will be needed:

Production Url: https://admin--aa-trainings.netlify.app/

Ask Administrator to send you invitation for accessing the CMS

Project: http://localhost:8000/

GraphQL: http://localhost:8000/___graphql

## Debugging

Windows users, who aren't using [WSL](https://docs.microsoft.com/en-us/windows/wsl/about), might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp "NPM node-gyp page").

MacOS and WSL users who might also encounter some errors, check [node-gyp](https://github.com/nodejs/node-gyp) for more info. We recommend using the latest stable node version.

### Deployment
Whenever one or more files of the directory `content/versions` has changed and been pushed to master, the deployment process will be triggered.

If the `__core__.md` file has been changed, then all the projects will be redeployed.
If the `__core__.md` file has not been changed, then only the projects whose version file has been changed will be redeployed.

You can access the production application
Admin: [https://admin--training-app-test.netlify.app/admin/](https://admin--training-app-test.netlify.app/admin/)
Specific Training: [https://{{training}}--training-app-test.netlify.app/admin/](https://{{training}}--training-app-test.netlify.app/admin/)
`{{training}}` can be replaced with the name of each available training

### Use the application
If you want to create a new training you have to follow the following steps
1. Visit [https://admin--training-app-test.netlify.app/admin/#/collections/trainings](https://admin--training-app-test.netlify.app/admin/#/collections/trainings)
2. Login (If you do not have credentials contact the administrator)
3. Create a new training
4. Create a new version **using exactly the same title you used in the training**
5. Make sure that your changes are published
6. Wait for about 10 minutes
7. Visit [https://{{training-title}}--training-app-test.netlify.app/admin/#/collections/trainings](https://{{training-title}}--training-app-test.netlify.app/admin/#/collections/trainings)
8. Do whatever changenges you want
9. Whenever you want you changes to be deployed make a change in the Version collection. Ideally add the current date in the version.
10. It takes some minutes for your changes to appear in production
11. Visit [https://{{training-title}}--training-app-test.netlify.app/](https://{{training-title}}--training-app-test.netlify.app/)
12. Button `M` toggles the Menu and `Left` and `Right` arrows navigate you to previous or next page

# Gatsby + Netlify CMS Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-starter-netlify-cms-ci/deploys)

**Note:** This project uses [Gatsby v4](https://www.gatsbyjs.com/gatsby-4/).

This repo contains some trainings built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) along with custom [github actions](https://github.com/features/actions) for continuous deployment, and CDN distribution.

## Features

- A simple landing page with blog functionality built with Netlify CMS
- Editable Trainings with Netlify Form support
- Create Trainings from Netlify CMS
- Tags: Separate pages using tags for each page **(To be implemented in the future)**
- Basic directory organization
- Uses Bulma for styling, but size is reduced by `gatsy-plugin-purgecss` **(Check If we can remove it)**
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-plugin-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `netlify/functions` folder
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- ..and more

## Prerequisites

- Minimal Node.js version 14.15.0 **(It works only for verion 14 but it should be fixed)**
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
- [Netlify CLI](https://github.com/netlify/cli)

## How it started (Recommended)

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. The example here is the Kaldi coffee company template (adapted from [One Click Hugo CMS](https://github.com/netlify-templates/one-click-hugo-cms)). Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/gatsby-starter-netlify-cms&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

### Media Libraries (installed, but optional)

Media Libraries have been included in this starter as a default. If you are not planning to use `Uploadcare` or `Cloudinary` in your project, you **can** remove them from module import and registration in `src/cms/cms.js`. Here is an example of the lines to comment or remove them your project.

```javascript
import CMS from "netlify-cms-app";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
```

Note: Don't forget to also remove them from `package.json` and `yarn.lock` / `package-lock.json` using `yarn` or `npm`. During the build netlify-cms-app will bundle the media libraries as well, having them removed will save you build time.
Example:

```
yarn remove netlify-cms-media-library-uploadcare
```

OR

```
yarn remove netlify-cms-media-library-cloudinary
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting for production.

If you want use Netlify CMS locally, run the site in one terminal with `npm run start` and in another
Terminal you can use `npx netlify-cms-proxy-server` which proxy requests so you'll be automatically logged
in as a user on [http:localhost:3000/admin](http:localhost:3000/admin).

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

