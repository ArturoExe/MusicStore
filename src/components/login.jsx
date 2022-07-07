import "./login.css";

export const Login = () => {
return (
    <div className="login-container">
        <div className="login-image">
            <img src="img/musiccenter_login.JPG" alt="" /><br />
            <form action="">
                <input type="text" name="email" id="" placeholder="Email" /><br />
                <input type="text" name="password" id="" placeholder="Password" /><br />
                <div class="login">
                    <a href="" class="forgotPassword">Forgot password?</a>
                    <button class="btn-login">Log-in</button>
                </div><br />
                <a href="register" class="createAccount">New here? CREATE an account here</a>
            </form>
        </div>
    </div>
    );
};

export default Login;
