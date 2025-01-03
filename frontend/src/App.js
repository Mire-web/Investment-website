import logo from './img/logo.png';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import useToken from './components/useToken';
import RequestPage from "./container/request.container";
import Login from "./container/login.container";
import MainPage from "./container/main.container";
import LogOut from "./container/logout.container";
import DashBoard from "./container/dashboard.container";
import AdminPage from "./container/admin.container";
import PersonalPage from "./container/personal.container";
import SignUp from './container/signup.container';

function App() {
  const { token, removeToken, setToken } = useToken();

  return (
		<Router>
		  <div className="App">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
			  <div className="container d-flex justify-content-between w-100">
				<Link className="navbar-brand d-flex align-items-center" to={"/"}>
				  <img
					src={logo}
					alt="Logo"
					width="40"
					height="40"
					className="me-2"
				  />
				  <span>MinersWealth</span>
				</Link>
				<button
				  className="navbar-toggler"
				  type="button"
				  data-bs-toggle="collapse"
				  data-bs-target="#navbarNav"
				  aria-controls="navbarNav"
				  aria-expanded="false"
				  aria-label="Toggle navigation"
				>
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
				  {!token && token !== "" && token !== undefined ? (
					<ul className="navbar-nav ms-auto ml-auto">
					  <li className="nav-item">
						<Link
						  className="nav-link"
						  to={"/sign-up"}
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Sign Up
						</Link>
					  </li>
					  <li className="nav-item">
						<Link
						  className="nav-link"
						  to={"/sign-in"}
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Login
						</Link>
					  </li>
					  <li className="nav-item">
						<Link
						  className="nav-link"
						  to="/#services"
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Services
						</Link>
					  </li>
					  <li className="nav-item">
						<Link
						  to="/#testimonials"
						  className="nav-link"
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Testimonials
						</Link>
					  </li>
					  <li className="nav-item">
						<Link
						  to="/#about"
						  className="nav-link"
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  About
						</Link>
					  </li>
					  <li className="nav-item">
						<Link
						  to="/contact"
						  className="nav-link"
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Contact
						</Link>
					  </li>
					</ul>
				  ) : (
					<ul className="navbar-nav ms-auto ml-auto">
					  <li className="nav-item">
						<Link
						  className="nav-link"
						  to={"/admin"}
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Admin
						</Link>
					  </li>
					  <li className="nav-item">
						<Link
						  className="nav-link"
						  to={"/personal"}
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Personal
						</Link>
					  </li>
					  <li className="nav-item">
						<Link
						  className="nav-link"
						  to={"/request"}
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Request
						</Link>
					  </li>
					  <li className="nav-item">
						<Link
						  className="nav-link"
						  to={"/dashboard"}
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Dashboard
						</Link>
					  </li>
					  <li className="nav-item">
						<Link
						  className="nav-link"
						  to={"/logout"}
						  data-bs-toggle="collapse"
						  data-bs-target="#navbarNav"
						>
						  Logout
						</Link>
					  </li>
					</ul>
				  )}
				</div>
			  </div>
			</nav>
			<div className="content">
			  <Switch>
				<Route exact path="/">
				  <MainPage token={token} />
				</Route>
				<Route exact path="/request">
				  <RequestPage token={token} />
				</Route>
				<Route exact path="/dashboard">
				  <DashBoard token={token} />
				</Route>
				<Route exact path="/sign-in">
				  <Login setToken={setToken} />
				</Route>
				<Route exact path="/sign-up">
				  <SignUp />
				</Route>
				<Route exact path="/logout">
				  <LogOut token={removeToken} />
				</Route>
				<Route exact path="/admin">
				  <AdminPage token={token} />
				</Route>
				<Route exact path="/personal">
				  <PersonalPage token={token} />
				</Route>
			  </Switch>
			</div>
		  </div>
		</Router>	
  );
}

export default App;
