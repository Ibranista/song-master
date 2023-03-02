import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import CollapsibleSidebar from "./components/SideBar";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <NavBar />
        <CollapsibleSidebar>
        <App />
        </CollapsibleSidebar>
      </Provider>
    </Router>
  </React.StrictMode>
);
