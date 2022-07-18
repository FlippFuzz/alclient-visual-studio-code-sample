# alclient-visual-studio-code-sample

Trying to get ALClient to work with Visual Studio Code

Instructions
1. Install Visual Studio Code.
2. Install Node JS 16.16.0.
3. Clone this repo to a directory
4. Open directory in Visual Studio Code
5. Create a `credentials.json`
6. Open terminal in Visual Studio Code (Ctrl + \`)
7. `npm install`
8. Compile: `npx tsc`.
9. Run: `node .\build\index.js`
```
file:///D:/Synced/AdventureLand/alclient-visual-studio-code-sample/build/index.js:41
Object.defineProperty(exports, "__esModule", { value: true });
                      ^

ReferenceError: exports is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and 'D:\Synced\AdventureLand\alclient-visual-studio-code-sample\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///D:/Synced/AdventureLand/alclient-visual-studio-code-sample/build/index.js:41:23
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:385:24)
    at async loadESM (node:internal/process/esm_loader:88:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12)
```