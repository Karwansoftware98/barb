import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React, { useEffect, useState } from "react";

import RestaurantLandingPage from "demos/RestaurantLandingPage.js";

/* Inner Pages */
import Login from "pages/Login.js";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Signup from "pages/Signup";
import { UserAuthContextProvider } from "context/UserAuthContext";
import Career from "pages/Career";
import Header from "components/headers/light";
import tw from "twin.macro";
import FindBarber from "pages/FindBarber";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const GlobalContainer = tw.div`flex flex-col items-stretch  box-border`;

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return (
    <UserAuthContextProvider>
      <Router>
        <GlobalContainer>
          <Header />
          <Switch>
            <Route path="/" exact>
              <RestaurantLandingPage />
            </Route>
            <Route  path="/About-Us" activeClassName="activelink">
              <AboutUs exact/>
            </Route>
            <Route path="/Contact-Us">
              <ContactUs />
            </Route>
            <Route path="/career">
              <Career />
            </Route>
            <Route path="/FindBarber">
              <FindBarber />
            </Route>

                  <Route
                    path="/Login">
                    <Login />
                  </Route>
            <Route path="/Signup">
              <Signup />
          
            </Route>
      
     
          </Switch>
        </GlobalContainer>
      </Router>
    </UserAuthContextProvider>
  );
}


