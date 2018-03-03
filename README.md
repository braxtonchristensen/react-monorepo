# Demo Monorepo for React Components

## The Tech
* [Lerna for package managment](https://lernajs.io/)
* [Yarn as npm client](https://yarnpkg.com/en/)
* [React v16](https://reactjs.org/)
* [styled-components for styling](https://www.styled-components.com/)
* [Jest test suite](https://facebook.github.io/jest/)
* [Enzyme to help](http://airbnb.io/enzyme/)
* [Storybooks for development](https://storybook.js.org/)
* [Babel for transforms and build](https://babeljs.io/)

## Lerna
#### Our Setting Explained
* `"packages": ["packages/*"]` - Tells Lerna where to look for packages
* `"version": "independent"` - ["Independent"](https://github.com/lerna/lerna#independent-mode---independent), increment package versions independently of each other.
* `"npmClient": "yarn"` - Use Yarn as a package manager for all packages

#### Bootstrapping
So an obvious drawback of having all our packages in one repository is having to go into each package and `yarn` as the Monorepo grows this would quickly become unmanageable and time consuming. Lerna has various built in commands to ease the drawbacks and [bootstrap](https://github.com/lerna/lerna#bootstrap) is one of them!

Simply run `lerna bootstrap` at the top level and Lerna will automatically install the required dependencies for each package as well as resolving internal dependencies by creating symlinks.

#### Building
Another great feature of Lerna is the exec command. Essentially Lerna allows us run a command within each of our packages. In our case this is really useful for building our components ready to be published onto npm.

Here’s an example of how we’d go about compiling each of our React components:

`lerna exec --parallel -- babel src -d dist --ignore spec.js,story.js`
Demonstrating this on a single package is probably fairly underwhelming but as the Monorepo grows you can easily see the benefit of being able to do this in a single line of code, again if your build process changes it’s in one place.

But I want a different build process for each package? - Simple, just use `lerna exec npm run build` and define a custom build script within each repositories `package.json`!


#### Publishing
So, we’ve got a great setup that’s all managed in one place, we have a great developer environment but the final piece of the puzzle is using [publish](https://github.com/lerna/lerna#publish).

Publish is another great time and hassle saver, it automatically pushes up all of your packages to Git and NPM, specifically Lerna documents it does the following:

* Run the equivalent of lerna update to determine which packages need to be published.
* If necessary, increment the version key in lerna.json.
* Update the package.json of all updated packages to their new versions.
* Update all dependencies of the updated packages with the new versions, specified with a caret (^).
* Create a new git commit and tag for the new version.
* Publish updated packages to npm.