
import './App.css'
import React, { useState } from "react";

const First = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <>
      <div>
        <h1>Login & Sign up Page</h1>
        <div className="parent">
          <div className="main">
            {isLogin ? (
              <>
                <h3>Login</h3>
                <p>Email</p>
                <input type="text" placeholder="Enter your email" />
                <p>Password</p>
                <input type="text" placeholder="Enter your password" />
                <button className="buttonone">Login</button>
              </>
            ) : (
              <>
                <h3>Sign Up</h3>
                <p>Email</p>
                <input type="text" placeholder="Enter your email" />
                <p>Password</p>
                <input type="text" placeholder="Enter your password" />
                <button className="buttonone">Sign Up</button>
              </>
            )}
          </div>
        </div>
        <div className="fortwo">
          <button onClick={() => setLogin(!isLogin)} className="buttontwo">
            {isLogin ? "Create Account" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default First;
