import React from 'react';
import './App.css';

function App() {
  return (
    <div className="background">
      <div className="header">
        <h1 className="text">Login Page</h1>
      </div>
      <div className="box">
        <div >
        <center><input className type="text" name="findId" id = "IdInput" placeholder="Username or email" required autocapitalize="on" autofocus /></center>
        <center><input className type="password" name="password" id = "passwordInput" placeholder="Password" required autocapitalize="on" autofocus /></center>
        <center><input id = "loginBtn" type="submit" class="login-btn" value="Login" /></center>
        </div>
      </div>
      <footer className="footer"> 
      <p id = "footer-text"><center>Created with love by sojjyCodes ©2020</center></p>
      </footer>
    </div>
  );
}

export default App;