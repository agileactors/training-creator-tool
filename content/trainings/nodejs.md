---
uniqueName: nodejs
title: node.js
isActive: true
sections:
  - sectionTitle: Introduction
    isActive: true
    pages:
      - pageTitle: What is Node.js ?
        isActive: true
        body: >-
          Node.js is an open-source and cross-platform JavaScript runtime
          environment. It is a popular tool for almost any kind of project!

          <br /><br />


          The runtime uses an **event-driven, non-blocking I/O model** that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
      - pageTitle: The V8 JavaScript Engine
        isActive: true
        body: >-
          V8 is Google’s open source high-performance JavaScript and WebAssembly
          engine, written in C++. It is used in Chrome and in Node.js, among
          others.<br/><br/>


          Other browsers have their own JavaScript engine:


          - Firefox has [SpiderMonkey](https://spidermonkey.dev/)

          - Safari has [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore) (also called Nitro)


          https://v8.dev/
      - pageTitle: Differences between Node.js and the Browser
        isActive: true
        body: >+
          Both the browser and Node.js use JavaScript as their programming
          language. Building apps that run in the browser is a completely
          different thing than building a Node.js application. Despite the fact
          that it's always JavaScript, there are some key differences that make
          the experience radically different.<br/><br/>


          In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser.<br/><br/>


          And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.
---
