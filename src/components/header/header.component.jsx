import React, { useState, useEffect, useContext } from "react";
import { connect } from 'react-redux';  //allows components access redux

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils.js";
import { AuthContext } from "../../App.js";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
  const [signInButton, setSignInButton] = useState();
  const signInStatus = useContext(AuthContext);

  //   function handleClick() {
  //     console.log(currentUser, "logging arse")
  //     currentUser === null ? setSignInButton("Sign In") : setSignInButton("Sign Out");
  //   }
  useEffect(() => {
    console.log("use effect was triggered");
  }, [signInStatus]);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
