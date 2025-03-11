
import React, { useState } from "react";
import "../styles/login.css";
import { IoCloseSharp } from "react-icons/io5";

const Login = ({ changeModal }) => {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <div className="formscontainer">
            <form className="forms">
                <IoCloseSharp className="iconclose" onClick={changeModal} />

                {isSignup ? (
                    <>
                        <h2>Register</h2>
                        <input type="text" placeholder="Enter username" required />
                        <input type="email" placeholder="Enter email" required />
                        <input type="password" placeholder="Enter password" required />
                        <button type="submit" className="button">Register</button>
                        <p>Already have an account?</p>
                        <a href="#" onClick={() => setIsSignup(false)}>Login here</a>
                    </>
                ) : (
                    <>
                        <h2>Login</h2>
                        <input type="text" placeholder="Enter username" required />
                        <input type="email" placeholder="Enter email" required />
                        <button type="submit" className="button">Login</button>
                        {/* <a href="#">Forgot password?</a> */}
                        <p>Do not have an account?</p>
                        <a href="#" onClick={() => setIsSignup(true)}>Sign up here</a>
                    </>
                )}
            </form>
        </div>
    );
}

export default Login;
