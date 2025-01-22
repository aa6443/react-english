# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<h1> Summary on how to use Redux ToolKit</h1>
<h2>
1. React-Redux: Connecting Redux with React : 
React-Redux is the official binding library that connects React with Redux. It provides hooks like useSelector, useDispatch, and Provider that allow React components to interact with the Redux store.
</h2>
<h3>
Key Features of React-Redux:
a. useSelector: Allows React components to read specific slices of the Redux state.
b. useDispatch: Provides a way for components to dispatch actions to update the Redux state.
c. Provider: Connects the React component tree to the Redux store, ensuring that all components can access the store.
d. React-Redux focuses on providing a seamless way to integrate React and Redux together, handling optimizations like preventing unnecessary re-renders of components when state changes.
</h3>