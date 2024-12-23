import { useState } from 'react';
import { useHistory } from "react-router";
import axios from "axios";
import swal from "sweetalert";
import './signup.css';
import './Login.css';

function SignUp() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const registerUser = (e) => {
    axios({
      method: "POST",
      url: "/api/signup",
      data: {
        account: username,
		category: 1,
        email: email,
        password: password,
      },
    })
      .then((response) => {
        swal({
          title: "Success",
          text: "Account created successfully! Please log in.",
          icon: "success",
        });
        setUsername("");
        setEmail("");
        setPassword("");
        history.push("/sign-in");
      })
      .catch((error) => {
        if (error.response) {
          swal({
            title: "Error",
            text: error.response.data.message || "An error occurred. Please try again.",
            icon: "error",
          });
        }
      });

    e.preventDefault();
  };

  return (
	<div className='login-wrapper'>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>

          <button
            type="button"
            className="btn btn-gold btn-primary btn-block"
            onClick={registerUser}
          >
            Submit
          </button>
        </form>
        <div className="login-footer">
          <p>
            Already have an account? <a href="/sign-up">Sign In</a>
          </p>
        </div>
      </div>
    </div>
	</div>
  );
}

export default SignUp;
