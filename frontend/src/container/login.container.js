import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import swal from "sweetalert";
import "./Login.css";

function Login({ setToken }) {
  const history = useHistory();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleAccountChange = (e) => {
    setAccount(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const logMeIn = (e) => {
    e.preventDefault(); // Prevent form reload
    axios
      .post("/api/token", { account, password })
      .then((response) => {
        setToken(response.data.access_token);
        setAccount("");
        setPassword("");
        history.push("/");
      })
      .catch((error) => {
        swal({
          title: "Error",
          text: "Invalid User",
          icon: "error",
        });
      });
  };

  return (
    <div className="login-wrapper">
      <div className="login-container shadow-lg">
        <div className="login-header">
          <h2>Welcome Back!</h2>
          <p>Log in to your account to continue</p>
        </div>
        <form onSubmit={logMeIn}>
          <div className="form-group">
            <label htmlFor="account">Account</label>
            <input
              type="text"
              id="account"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleAccountChange}
              value={account}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              value={password}
              required
            />
          </div>
          <button type="submit" className="btn btn-gold btn-block">
            Log In
          </button>
        </form>
        <div className="login-footer">
          <p>
            Don’t have an account? <a href="/sign-up">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
