import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { Notify } from "notiflix";
import Register from "./Register";
import { IoClose } from "react-icons/io5";

const Login = ({ changeModal, setUser }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const { userEmail, userPassword } = data;
            const formData = new FormData();
            formData.append("userEmail", userEmail);
            formData.append("userPassword", userPassword);
            const response = await axios.post(`https://ecohub-2.onrender.com/user/login`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            Notify.success("Login successful");
            reset();
            localStorage.setItem("userToken", response.data?.user?.token);
            localStorage.setItem("user", JSON.stringify(response.data?.user?.user));
            const Role = response.data?.user?.user?.userRole;
            setUser(response.data?.user?.user);
            changeModal();
            if (Role === "user") { 
                 navigate("/Home");
            } else if (Role === "Admin") {
             navigate("/Post");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [isSignup, setIsSignup] = useState(true); 

    return (
        <div className="formscontainer">
           {isSignup ? (
        <form className="forms" onSubmit={handleSubmit(onSubmit)}>
            
            
            <h2>Login</h2>
            <IoClose className="iconclose" onClick={changeModal} />
            <input
                type="email"
                placeholder="Enter email"
                {...register("userEmail", { required: true })}
            />
            <input
                type="password"
                placeholder="Enter password"
                {...register("userPassword", { required: true })}
            />
            <button type="submit" className="button">
                Login
            </button>
            <p>Don't have an account?</p>
            <a href="#" onClick={() => setIsSignup(false)}>
                        signup here
                    </a>
        </form>
           ) : (
            <Register changeModal={changeModal} /> 
        )}
        </div>
    );
};

export default Login;