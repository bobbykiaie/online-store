import React, {useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';



const App = () => {

  const [currentUser, setCurrentUser] = useState(null)
  const [signInStatus, setSignInStatus] = useState(null);
  const userContext = React.createContext({
    user: null,
  })


  useEffect(() => {
    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        console.log(user);
    })
  }, []);



  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;