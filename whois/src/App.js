import React, { useEffect } from "react";
import Search from "./search/container/Search";
import "antd/dist/antd.min.css";
import User from "./user/container/User";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    bodyEl.removeChild(loadingEl);
  }, []);
  return (
    <>
      <Route exact path="/" component={Search} />
      <Route path="/user/:name" component={User} />
    </>
  );
}
