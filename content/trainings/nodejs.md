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
        body: >
          Both the browser and Node.js use JavaScript as their programming
          language. Building apps that run in the browser is a completely
          different thing than building a Node.js application. Despite the fact
          that it's always JavaScript, there are some key differences that make
          the experience radically different.<br/><br/>


          In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser.<br/><br/>


          And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.
      - pageTitle: REPL
        isActive: true
        body: >-
          Node.js comes with a virtual environment called REPL (aka Node shell).
          REPL stands for Read-Eval-Print-Loop. It is a quick and easy way to
          test simple Node.js/JavaScript code.<br /><br />


          To launch the REPL (Node shell), open cmd (in Windows) or terminal (in Mac or UNIX/Linux) and type *node* as shown below. It will change the prompt to > in Windows and MAC.<br /><br />


          ```sh

          $ node

          Welcome to Node.js v19.xx.xx

          Type ".help" for more information.

          >

          ```
  - sectionTitle: Basics
    isActive: true
    pages:
      - pageTitle: Primitive Types
        isActive: true
        body: |-
          Node.js includes the following primitive types:

          - String
          - Number
          - Boolean
          - Undefined
          - Null
          - RegExp

          Everything else is an object in Node.js.
      - pageTitle: Objects
        isActive: true
        body: >-
          Object literal syntax is the same as the browser's JavaScript.<br
          /><br />


          ```js

          const obj = {
            authorName: 'Ryan Dahl',
            runtime: 'Node.js'
          };


          console.log(obj);

          ```
      - pageTitle: Functions
        isActive: true
        body: >-
          Functions are first class citizens in Node's JavaScript, similar to
          the browser's JavaScript. A function can have attributes and
          properties also. It can be treated like a class in JavaScript.<br
          /><br />


          ```js

          function printMessage(msg) { 
            console.log(msg);
          }


          printMessage('Hello there!!');

          ```
      - pageTitle: Buffers
        isActive: true
        body: >
          Node.js includes an additional data type called Buffer (not available
          in the browser's JavaScript). Buffer is mainly used to store binary
          data while reading from a file or receiving packets over the
          network.<br /><br />


          ```js

          const buffer = new Buffer.alloc(5, 'abcde');


          console.log(buffer); // Output: <Buffer 61 62 63 64 65>

          ```
      - pageTitle: Process Object
        isActive: true
        body: >
          Each Node.js script runs in a process. It includes a process object to
          get all the information about the current process of the Node.js
          application.<br><br>



          ```sh

          > process.pid

          > 1652

          > process.cwd()

          > "/Users/agile-actors/nodejs"

          ```
      - pageTitle: Scopes
        isActive: true
        body: Node's JavaScript is different from the browser's JavaScript when it comes
          to the global scope. In the browser's JavaScript, variables declared
          without the **var** keyword become global. In Node.js, everything
          becomes local by default.
---
