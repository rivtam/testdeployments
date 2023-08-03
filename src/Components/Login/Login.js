import "./Login.css";
import React from "react";
import {Navigate} from "react-router";
import logo from "../../Assets/Wizz.png";
import {useKeycloak} from "@react-keycloak/web";

const Login = (_) => {

    const {keycloak} = useKeycloak();
    if (keycloak.authenticated === true) {
        return <Navigate to="/home"/>;
    }


    return (
        <div className="login-container">
            <div className="login-card">
                <img src={logo} alt="Logo" className="logo"/>
                <h1>Login</h1>
                <div className="form-group button-container">
                    <button className="login-button"
                            onClick={() => keycloak.login()}>
                        <span>Sign In</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Login;
