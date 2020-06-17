This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is Splyt Tech Task. 
## Dependencies necessary:
- [Node.js (preferably the newest version)](https://nodejs.org/en/)
- [Yarn package manager](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [User created in Foursquare](https://developer.foursquare.com/docs/)

## Commands to run:

### `yarn install`

Run this command in projects home directory. It can be done via bash.
If you don't have bash tools and running on Windows, git bash is very useful tool for that.
- [Git bash](https://gitforwindows.org/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## IMPORTANT: Environment variable is needed
Since I'm using third party library with Google Maps, non-development version requires to have an API key. I believe it shouldn't be necessary if you don't have one but if you want to see the application as intended, I suggest grabbing one for free [https://cloud.google.com/maps-platform/](in Google Maps development page)
I personally use .env file with following variable:
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_VARIABLE_HERE

## Project structure:
Project is structured in a classic manner as follows:
- Actions - contains redux actions, works with calling API.
- Components - There you will find reusable components, used in more than one feature.
- Features - There you will find Taxi Map as only primary feature.
- Reducers - Most of data manipulation happens there. I would prefer using redux-saga in the future.
- Redux - Redux configuration
- Other files for configuration and main entry points.

## Thought process behind the slider:
I decided that slider should only fetch data whenever user releases the mouse button. Fetching it every time while slider is being moved is an expensive and dangerous operation, especially if many users do the same thing.

## Library choices:
I selected one of the most comprehensive google maps libraries for react, since I considered most of them are pretty much similiar anyway. So I decided to pick one of the popular ones, so I can trust it, as well as have support in cases of some problems I may encounter.

Styled components is widely used to style components. I haven't done much styling here in this challenge, but it's still better than shoving everything into a single .CSS file.

Jest/Enzyme is just for component testing. No advanced testing has been done for this challenge other than ensuring that required amount of components are being rendered via snapshots. As well as checking that actions/reducers are returning the expected results.

Immutability helper is a pretty decent tool to ensure that data is manipulated without any side effects.

Typescript for data typing and overall better coding experience.

And other tools for redux configuration, eslint management, etc.

## Author:
Justinas Masiulis - Developer