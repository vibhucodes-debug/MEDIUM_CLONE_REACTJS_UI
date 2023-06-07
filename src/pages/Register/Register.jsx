import "./Signup.scss"

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Register=()=>{

    
        const [inputs, setInputs] = useState({
          username: "",
          email: "",
          password: "",
        });
      
        const [err, setError] = useState(null);
      
        const navigate = useNavigate();
      
        const handleChange = (e) => {
          setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };
      
        const handleSubmit = async e => {
          e.preventDefault();
          try {
            const res = await axios.post("http://localhost:8800/api/auth/register", inputs);
            console.log(res);
            navigate("/login");
          } catch (err) {
            setError(err.response.data);
            console.log(err);
          }
        }


    return(
        <div className = "auth">
                <h1>Register</h1>
            <form>
                <input resuired type="text" placeholder="username" onChange={handleChange}/>
                <input required type="email" placeholder="email" onChange={handleChange}/>
                <input required type="password" placeholder="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Register</button>
                <span>Account already exists? <Link className ="link "to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register;