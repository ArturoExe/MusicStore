import "../styles/login.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="img/musiccenter_login.JPG" alt="" />
        <br />
        <form onSubmit={loginUser}>
          <input type="text" name="username" placeholder="Enter username" />
          <br />
          <input type="password" name="password" placeholder="Enter Password" />
          <br />
          <div className="login">
            <a href="" className="forgotPassword">
              Forgot password?
            </a>
          </div>
          <br />
          <Link to="/register" className="createAccount">
            New here? CREATE an account here
          </Link>
          <button className="btn-login" type="submit">
            Log-in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
