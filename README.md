# Vistora Cart

## Project Overview
Vistora Cart is a React-based shopping cart application that utilizes Redux Toolkit for state management. The project is styled using Material-UI and includes various components to manage and display products, a shopping cart, and filters.

## Project Structure
vistora-cart/ ├── package.json ├── public/ │ ├── favicon.ico │ ├── index.html │ ├── logo192.png │ ├── logo512.png │ ├── manifest.json │ └── robots.txt ├── src/ │ ├── App.css │ ├── App.js │ ├── App.test.js │ ├── components/ │ │ ├── FilterComponent.jsx │ │ ├── Header.jsx │ │ ├── HeroSection.jsx │ │ ├── ProductList.jsx │ │ └── ShoppingCart.jsx │ ├── features/ │ │ └── cart/ │ │ └── cartSlice.js │ ├── images/ │ │ ├── bg.jpg │ │ └── logo.png │ ├── index.css │ ├── index.js │ ├── logo.svg │ ├── ProductsData/ │ │ └── products.js │ ├── reportWebVitals.js │ ├── setupTests.js │ └── store.js └── README.md

## Installation and Setup

1. **Clone the repository**:
   ```sh
   git clone <your-repo-url>
   cd vistora-cart

## Install dependencies

npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Make sure to replace `<your-repo-url>` with the actual URL of your GitHub repository. This `README.md` file provides clear instructions on how to set up and run your project, as well as an overview of the project structure and dependencies.
Make sure to replace `<your-repo-url>` with the actual URL of your GitHub repository. This `README.md` file provides clear instructions on how to set up and run your project, as well as an overview of the project structure and dependencies.

Dependencies
React: ^19.0.0
React DOM: ^19.0.0
React Redux: ^9.2.0
Redux Toolkit: ^2.6.0
React Router DOM: ^7.2.0
Material-UI: ^6.4.6
Emotion: ^11.14.0
Testing Library: ^16.2.0
