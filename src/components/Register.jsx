import React, { useState } from "react";
import "../styles/login.css";
import axios from "axios";
import { Notify } from "notiflix";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Login from "../components/Login.jsx"; // Import the Login component

const Register = ({ changeModal }) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    
    const onSubmit = async (data) => {
        try {
            const { firstName, lastName, userEmail, userPassword } = data;
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("userEmail", userEmail);
            formData.append("userPassword", userPassword);

            const response = await axios.post(`http://localhost:5000/user/register`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            Notify.success("Registration successful");
            reset();

            const userToken = response.data;
            localStorage.setItem("userToken", JSON.stringify(userToken));

            // const Role = userToken?.User?.userRole;
            // if (Role === "Admin") {
            //     navigate("/Post");
            // } else {
            //     navigate("/Home");
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const [isSignup, setIsSignup] = useState(true); // Control state to switch between Login and Register forms

    return (
        <div className="formscontainer1">
            {isSignup ? (
                <form className="forms1" onSubmit={handleSubmit(onSubmit)}>
                    <IoCloseSharp className="iconclose" onClick={changeModal} />
                    <h2>Register</h2>
                    <input
                        type="text"
                        placeholder="Enter firstName"
                        {...register("firstName", { required: true })}
                    />
                    <input
                        type="text"
                        placeholder="Enter lastName"
                        {...register("lastName", { required: true })}
                    />
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
                        Register
                    </button>
                    <p>Already have an account?</p>
                    <a href="#" onClick={() => setIsSignup(false)}>
                        Login here
                    </a>
                </form>
            ) : (
                <Login changeModal={changeModal} /> // Show Login component when state is false
            )}
        </div>
    );
};

export default Register;
