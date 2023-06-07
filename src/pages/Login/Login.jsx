import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/authContext";


const Login=()=>{

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
      });
      
      const [err, setError] = useState(null);
    
      const navigate = useNavigate();
    
      // const { login } = useContext(AuthContext);
    
    
      const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(inputs)
          navigate("/");
        } catch (err) {
          setError(err.response.data);
        }
      };

    return(
        <div className = "auth">
                <h1>Login</h1>
            <form>
                <input required type="text" placeholder="username" onChange={handleChange}/>
                <input required type="password" placeholder="password" onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
                <p>Error logging in</p>
                <span>Account doesn't exist?  <Link className="link" to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login;