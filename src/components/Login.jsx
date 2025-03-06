import React from "react";
import { useState } from "react";
import"../styles/login.css";
import { IoCloseSharp } from "react-icons/io5";

const Login = ({changeModal})=> {
    const [isSignup, setIsSignup] = useState(false);
    return(
        
        <div className="formscontainer">
            <form className="forms" >
                <IoCloseSharp className="iconclose" onClick={changeModal} />
                <input type="text" placeholder="enter username" required/>
                <input type="email" placeholder="enter email" required/>
                <button type="login"className="button">Login</button>
                <a href="#">forgot password?</a>
                <p4 >Do not have an account</p4>
               
            </form>
            
            
        </div>
    );
} 
export default Login ;