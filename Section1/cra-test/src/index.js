import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "core-js/features/string/pad-start";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//process.env.{변수이름}
//process.env.NODE_ENV
//``npm start``로 실행하면 development
//``npm test``로 실행하면 test
//``npm run build``로 실행하면 production
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL);

// set "REACT_APP_API_URL=api.myapp.com" && npm start
