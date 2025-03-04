# Vistora Cart

## Project Overview
Vistora Cart is a React-based shopping cart application that utilizes Redux Toolkit for state management. The project is styled using Material-UI and includes various components to manage and display products, a shopping cart, and filters.

## Project Structure
vistora-cart/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── FilterComponent.jsx
│   │   ├── Header.jsx
│   │   ├── ShoppingCart.jsx
│   ├── features/           # Redux slices
│   │   └── cartSlice.js
│   ├── ProductsData/       # Mock product data
│   └── store.js            # Redux store configuration
├── README.md               # Project documentation

# Clone repository
git clone https://github.com/Amit14kumar/E-commerce-project
cd E-commerce-project

# Install dependencies
npm install

# Start development server
npm start

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000] to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Dependencies
Package	Version	Purpose
React	^19.0.0	Core framework
Redux Toolkit	^2.6.0	State management
React Router DOM	^7.2.0	Navigation
Material-UI	^6.4.6	UI components
Emotion	^11.14.0	CSS-in-JS styling

Key Technical Decisions
State Management:

Redux Toolkit ensures predictable cart updates

Slice pattern for maintainable state logic

Filter Component:

Sticky positioning for better UX

Dual-range price slider
