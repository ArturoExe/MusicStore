import { useState, useEffect } from "react";
import "../styles/register.css";

export const Register = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  function inputHandle(e) {
    const { id, value } = e.target;
    setInputValues(prev => ({
      ...prev,
      [id]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    let { id, value } = e.target;
    setError(prev => {
    const stateObj = { ...prev, [id]: "" };

    switch (id) {
      case "firstName":
        if (!value) {
          stateObj[id] = "Please enter your first name.";
        }
        break;

      case "lastName":
          if (!value) {
            stateObj[id] = "Please enter your last name.";
          }
          break;

      case "email":
        if (!value) {
          stateObj[id] = "Please enter your email.";
        }
        break;

      case "password":
        if (!value) {
          stateObj[id] = "Please enter Password.";
        } else if (inputValues.password.length < 7) {
          stateObj[id] = "Password must be at least 8 characters long.";
        } else if (inputValues.confirmPassword && value !== inputValues.confirmPassword) {
          stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
        } else {
          stateObj["confirmPassword"] = inputValues.confirmPassword ? "" : error.confirmPassword;
        }
        
        break;

      case "confirmPassword":
        if (!value) {
          stateObj[id] = "Please enter Confirm Password.";
        } else if (inputValues.password && value !== inputValues.password) {
          stateObj[id] = "Password and Confirm Password does not match.";
        }
        break;

      default:
        break;
    }

    return stateObj;
  });
  }

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  let registerUser = async () => {
    let response = await fetch(`/api/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: inputValues.username,
        password: inputValues.password,
      }),
    });
    let data = response.json();
    console.log(data);
  };

  return (
    <div className="register-container">
      <h4>REGISTER</h4>
      <form onSubmit={registerUser}>
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          value={inputValues.username}
          onChange={inputHandle}
          onBlur={validateInput}
        />
        {error.firstName && <span className='err'>{error.firstName}</span>}
        <br />
        <input 
          type="text" 
          id="lastName" 
          placeholder="Last Name"
          onChange={inputHandle}
          onBlur={validateInput}
          value={inputValues.lastName} />
        {error.lastName && <span className='err'>{error.lastName}</span>}
        <br />
        <input 
          type="text" 
          id="email" 
          placeholder="Email"
          onChange={inputHandle}
          onBlur={validateInput}
          value={inputValues.email} />
        {error.email && <span className='err'>{error.email}</span>}
        <br />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={inputHandle}
          value={inputValues.password}
          onBlur={validateInput}
          minlength="8" 
          required/>
        {error.password && <span className='err'>{error.password}</span>}
        <br />
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={inputHandle}
          value={inputValues.confirmPassword}
          onBlur={validateInput}
          minlength="8" 
        />
        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
        <br />
        <button className="btn-register">Register</button>
      </form>
    </div>
  );
};

export default Register;
