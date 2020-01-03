import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../auth";
import { isEmail, isCelluar, isJobPassword } from '../../Utils/valid'
const SignUpComponent = () => {
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

    if (!isEmail(email)) {
      setValues({ ...values, email: '', error: true, })
      return alert("이메일 형식이 올바르지 않습니다....")
    }
    if (!isJobPassword(password)) {
      setValues({ ...values, password: '', error: true })
      return alert("비밀번호는  8 ~ 10자 영문, 숫자 조합의 형식이어야 합니다.")
    }

    signup({ email, password, role }).then(data => {
      console.log(data);
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
        <select onChange={handleChange("role")}>
          <option selected value="">
            유형을 선택해주세요
          </option>
          <option value="PASSENGER">사용자</option>
          <option value="DRIVER">운전자</option>
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

export default SignUpComponent;
