What is NPM?
NPM or Node Package Manager is an open-source repository of tools engineers use to develop applications and websites.

- What is Parcel/Webpack? Why do we need it?
Parcel is an open-source bundler. It supports many popular languages like Typescript and SASS,and can also handle file types like images and fonts. Parcel comes with a few extra tools built-in:a development server, diagnostics, minification, and even image compression.

What is .parcel-cache.
The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

What is npx?
The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

What is difference between dependencies vs devDependencies?
The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. To save a dependency as a devDependency on installation we need to do an npm install --save-dev or -D ex. npm i parcel -D.

What is Tree Shaking?
Tree shaking is a term commonly used in the JavaScript context for dead-code elimination. It relies on the static structure of ES2015 module syntax, i.e. import and export.

What is Hot Module Replacement?
Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

Retain application state which is lost during a full reload.
Save valuable development time by only updating what's changed.
Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.
List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
Superpower of parcel are as follows.

HMR - Hot Module Replacement
File watcher algorithm - C++
Bundling
Minifying
Clean our code (Tree shaking)
Image optimization
Cache while development
Compression
Compatible with old version of browser.
Minifying - It minifies our code and make it production ready. Caching - It caches the build and make development faster. Compression - Compress your app before you deploy using Gzip and Brotli.

What is .gitignore? What should we add and not add into it?
In this file we mention the files and folders that we don't want to push to our git repository. The things that can be auto-generated should be added to .gitignore for example node_module as it can be regenerated by running npm install or npm i.

What is the difference between package.json and package-lock.json.
package.json maintains the dependency of our project and some other configurations related to project such as scripts, dependency, dev-dependency and more.
package-lock.json maintains the exact version of dependencies and there dependencies. It describes the exact tree that was generated to allow subsequent installs to have the identical tree.
Why should I not modify package-lock.json?
It is automatically generated file from npm, if we modify this file things might break or stop working.

What is node_modules ? Is it a good idea to push that on git?
It is a folder which contains dependencies of our project as well as dependencies of dependencies. As it is a auto generated folder it is not recommended to push it to git repository.

What is the dist folder?
It contains the build version of our code, which will be minified and production ready.

What is browserlists.
browserlists is used for making our application compatible to some specific browsers, this list will make our code runnable to that browsers.