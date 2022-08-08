// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App/App";

// ReactDom.render(
//   // template string at vue or angular but in react jsx
//   React.createElement("div", null, React.createElement("h1",
//     { style: { color: "red" } }
//     , "Heading nesting")),
//   // <div>Hello React Rendering</div>,
//   document.getElementById("root")
// )

// ReactDom.render(
//   <div>
//     <h1>Hello JSX</h1>
//   </div>,
//   document.getElementById("root")
// )

ReactDom.render(
  <App />,
  document.getElementById("root")
)