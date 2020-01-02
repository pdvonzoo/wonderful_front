import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth";

const Signup = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        role: "",
        error: "",
        success: false
    });

    const { email, password, role, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ email, password, role }).then(data => {
            if (data.error || data.err) {
                setValues({ ...values, error: data.error || data.err, success: false });
            } else {
                setValues({
                    ...values,
                    email: "",
                    password: "",
                    role: "",
                    error: "",
                    success: true
                });
            }
        });
    };

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control"
                    value={password}
                />
            </div>
            <div className="form-group">
                <label className="text-muted">성별</label>
                <select
                    onChange={handleChange("rold")}
                >
                    <option selected value="man">man</option>
                    <option value="woman">woman</option>
                </select>
            </div>
            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: success ? "" : "none" }}
        >
            New account is created. Please signin <Link to="/signin">Sign In</Link>
        </div>
    );

    return (
        <>
            {showError()}
            {showSuccess()}
            {signUpForm()}
        </>
    );
};

export default Signup;