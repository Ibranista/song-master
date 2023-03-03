import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import NavBar from "./components/NavBar";
import CollapsibleSidebar from "./components/SideBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <NavBar />
        <CollapsibleSidebar>
          <Conditional>
            <App />
          </Conditional>
        </CollapsibleSidebar>
      </Provider>
    </Router>
  </React.StrictMode>
);

import { auth } from "./auth/firebase";
import { Toaster } from "react-hot-toast";

interface ConditionalProps {
  children: React.ReactNode;
}

function Conditional({ children }: ConditionalProps): JSX.Element | null {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const navigate = useNavigate();
 const [user, setUser] = useState<object|any | null>(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserSignedIn(true);
        setUser(user);
      } else {
        setIsUserSignedIn(false);
        navigate("/AccountCreation");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return <>
  <h1>signedin as: {user?.displayName}</h1>
  {children}</>;
}
