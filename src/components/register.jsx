import "../styles/register.css";

export const Register = () => {
  return (
    <div className="register-container">
      <h4>REGISTER</h4>
      <form action="">
        <input type="text" name="firstName" id="" placeholder="First Name" />
        <br />
        <input type="text" name="lastName" id="" placeholder="Last Name" />
        <br />
        <input type="text" name="email" id="" placeholder="Email" />
        <br />
        <input type="text" name="password" id="" placeholder="Password" />
        <br />
        <input
          type="text"
          name="confirmPassword"
          id=""
          placeholder="Confirm Password"
        />
        <br />
        <button className="btn-register">Register</button>
      </form>
    </div>
  );
};

export default Register;
