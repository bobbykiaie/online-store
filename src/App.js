import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import firebase from "firebase/app";
import "firebase/firestore";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [signInStatus, setSignInStatus] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      const userRef = await createUserProfileDocument(userAuth);

      if (userRef === undefined) {
        return;
      }

      await userRef.onSnapshot((snapshot) => {

        
        console.log(
          "Logging snapshot from createUserProfielDovcument function"
        );
        console.log(snapshot.data(), snapshot.id);
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data(),
        });
       
      });
    });

    return unsubscribe;
  }, []);

  console.log("Current User", currentUser)

  return (
    <div>
      <Header currentUser={currentUser} />
    <h1>{currentUser === null ? "arse" : currentUser.displayName}</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
