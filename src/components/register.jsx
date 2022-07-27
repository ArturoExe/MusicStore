import { useState, useEffect } from "react";
import "../styles/register.css";

export const Register = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({
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
      case "username":
        if (!value) {
          stateObj[id] = "Please enter Username.";
        }
        break;

      case "password":
        if (!value) {
          stateObj[id] = "Please enter Password.";
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
          id="username"
          placeholder="First Name"
          onChange={inputHandle}
          value={inputValues.username}
        />
        <br />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" />
        <br />
        <input 
          type="text" 
          name="email" 
          placeholder="Email" />
        <br />
        <input
          type="text"
          id="password"
          placeholder="Password"
          onChange={inputHandle}
          value={inputValues.password}
          onBlur={validateInput}/>
        {error.password && <span className='err'>{error.password}</span>}
        <br />
        <input
          type="text"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={inputHandle}
          value={inputValues.confirmPassword}
          onBlur={validateInput}
        />
        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
        <br />
        <button className="btn-register">Register</button>
      </form>
    </div>
  );
};

export default Register;
