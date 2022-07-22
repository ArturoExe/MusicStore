import { useState, useEffect } from "react";
import "../styles/register.css";

export const Register = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  function inputHandle(e) {
    const { id, value } = e.target;
    setInputValues({ ...inputValues, [id]: value });
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
        <input type="text" name="lastName" placeholder="Last Name" />
        <br />
        <input type="text" name="email" placeholder="Email" />
        <br />
        <input
          type="text"
          id="password"
          placeholder="Password"
          onChange={inputHandle}
          value={inputValues.password}
        />
        <br />
        <input
          type="text"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <br />
        <button className="btn-register">Register</button>
      </form>
    </div>
  );
};

export default Register;
