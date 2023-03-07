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
  - sectionTitle: Modules
    isActive: true
    pages:
      - pageTitle: CommonJS
        isActive: true
        body: >+
          In Node.js, a module is a unit of functionality that can be either
          simple or complex and is organized into one or multiple JavaScript
          files. These modules can be reused throughout the Node.js application
          for greater efficiency and organization.<br><br>


          Each module in Node.js has its own context, so it cannot interfere with other modules or pollute the global scope.<br><br>


          Node.js implements the [CommonJS modules standard](https://requirejs.org/docs/commonjs.html).

      - pageTitle: Module Types
        isActive: true
        body: |-
          The types of modules included in Node.js are as follows:

          - Core Modules
          - Local Modules
          - Third-Party Modules (NPM)
      - pageTitle: Core Modules
        isActive: true
        body: >-
          Node.js is a lightweight framework. The core modules include the bare
          minimum functionalities of Node.js. These core modules are compiled
          into their binary distribution and load automatically when the Node.js
          process starts. However, you need to import the core module first in
          order to use it in your application.<br><br>


          Most used core modules: **http**, **url**, **path**, **fs**, **util**.
      - pageTitle: Loading Core Modules
        isActive: true
        body: >+
          In order to use any Node.js module, you first need to import it using
          the **require** function as shown below.<br><br>


          ```js

          const module = require('module_name');

          ```

      - pageTitle: Writing Simple Module
        isActive: true
        body: >+
          Let's write a simple logging module that logs the information,
          warning, or error to the console.<br><br>


          ```js

          const log = {
            info: function(message) {
              console.log(`Info: ${message}`);
            },
            warn: function(message) {
              console.log(`Warning: ${message}`);
            },
            error: function(message) {
              console.error(`Error: ${message}`);
            },
          };


          module.exports = log;

          ```

      - pageTitle: Module Exports
        isActive: true
        body: By default, every JavaScript file in a Node.js application contains a
          special object called **module.exports**. You can utilize this object,
          or its alias **exports**, to expose a function, object, or variable as
          a module in Node.js.
      - pageTitle: Loading Local Modules
        isActive: true
        body: >-
          In order to utilize local modules within your application, you must
          employ the **require()** function, similar to how you would for a core
          module. However, it's necessary to explicitly indicate the path to the
          JavaScript file for the module.<br><br>


          ```js

          const logger = require('./log.js');


          logger.info('Node.js rocks!!');

          ```
      - pageTitle: Export Literals
        isActive: true
        body: >-
          As previously stated, **exports** is an object that exposes whatever
          is assigned to it as a module. For instance, if you assign a string
          literal to it, the string literal will be exposed as a module.<br><br>


          ```js

          // message.js

          module.exports = 'Hello world';

          ```


          ```js

          // main.js

          const msg = require('./message.js');


          console.log(msg);

          ```
      - pageTitle: Export Objects
        isActive: true
        body: >-
          As an object, **exports** can have properties or methods attached to
          it. For instance, the code snippet below exposes an object with a
          string property in the **message.js** file:<br><br>


          ```js

          exports.SimpleMessage = 'Hello world';

          ```


          ```js

          const msg = require('./messages.js');


          console.log(msg.SimpleMessage);

          ```
      - pageTitle: Export Functions
        isActive: true
        body: >-
          You can attach an anonymous function to the exports object as shown
          below.


          ```js

          module.exports = function(msg) { 
            console.log(msg);
          };

          ```


          Now, you can use the above module, as shown below.


          ```js

          const msg = require('./log.js');


          msg('Hello World');

          ```
  - sectionTitle: NPM
    isActive: true
    pages:
      - pageTitle: Node Package Manager
        isActive: true
        body: >-
          Node Package Manager (NPM) is a command line tool that allows you to
          install, update, or uninstall Node.js packages within your
          application. In addition to this, it also serves as an online
          repository for open-source Node.js packages. The global node community
          contributes useful modules and publishes them as packages in this
          repository for others to use.<br><br>


          Official website: https://www.npmjs.com
      - pageTitle: Install Package Locally
        isActive: true
        body: >
          Use the following command to install any third-party module in your
          local Node.js project folder.


          ```js

          $ npm install <package_name>

          ```


          For example, the following command will install **express.js** into your **cwd**.


          ```js

          $ npm install express

          ```
      - pageTitle: Install Package Globally
        isActive: true
        body: >-
          NPM also has the capability to install packages globally, making them
          available for use in any Node.js application on the computer. Global
          packages are installed by NPM into the
          /Users/(name)/local/lib/node_modules folder.<br><br>


          ```js

          $ npm install -g express

          ```
      - pageTitle: Uninstall Packages
        isActive: true
        body: |-
          Use the following command to remove a local package from your project.

          ```js
          $ npm uninstall <package_name>
          ```

          The following command will uninstall express.js from the application.

          ```js
          $ npm uninstall express
          ```
---
