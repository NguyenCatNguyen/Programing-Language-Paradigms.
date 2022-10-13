1. What is the different betweent "node", "Node", and "Node.js"?
    - **node** is an interpreter for JavaScript.
    - **Node**  was initially conceived for the purpose of making 
    asynchronous programming easy and convenient in JavaScript.
    - **Node.js** is a JavaScript runtime built on Chrome's V8 JavaScript engine.
2. What is the CommonJS module system?
    - CommonJS module system is a standard for JavaScript modules.
    - It is used to load: Built-in modules, Downloaded packages, Files 
    that are part of your own program.

3. What is JavaScript module?
    - A module is a peice of program that specifies which other pieces it relies 
    on and which functionality it provides for other modules to use (its interface).

4. What is a JavaScript package?
    - A JavaScript package is a directory or archive containing a JavaScript 
    program described by a package.json file.

5. What is the Node Package Manager (NPM)?
    - An online service where one can download (and update updates) JavaScript packages.
    - A program (bundled with Node.js) that helps you install and manage themt.
6. What is a package.json?
    - A package.json file contains human-readable metadata about a project.
7. Let's set up a small project consisting of two files.
- The first one, called main2.js, defines a script that can be called from 
the command line to echo a string.
    ```javascript
    $ node main2.js JavaScript
    JavaScript
    ```
- The second one, echo.js, defines a modele for echoing strings. It can be used both by the main2 command line tool (see below) and by other scripts.
    ```javascript
    $ node echo.js JavaScript
    JavaScript
    ```
    
- Write a package.json for echo.js.
    ```javascript
    {
        "name": "echo",
        "version": "1.0.0",
        "description": "Echoes a string",
        "main": "echo.js",
        "bin": {
            "echo": "main2.js"
        },
        "author": "Cat Nguyen",
    }
    ```