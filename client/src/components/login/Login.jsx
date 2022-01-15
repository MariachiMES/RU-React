import "./login.scss";
import { useState } from "react";
import { LOGIN_CASE_MANAGER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

export default function Login() {
  const [formData, setFormData] = useState({ password: "", email: "" });
  const [loginCaseManager, { data, loading, error }] =
    useMutation(LOGIN_CASE_MANAGER);
  //   variables: {
  //     email: formData.email,
  //     password: formData.password,
  //   },
  //   onCompleted: (login) => {
  //     console.log(login);
  //   },
  // });
  const handleLogin = async function (e) {
    e.preventDefault();

    loginCaseManager({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <h1>Reunify</h1>
          <h3>Case Manager Supplemental Worflow Platform</h3>
          <a href="/signup">
            <h2>SIGN-UP</h2>
          </a>
        </div>
        <div className="right">
          <div className="titles">
            <h2>Login</h2>
          </div>
          <form onSubmit={handleLogin} className="login">
            Email:
            <input
              onChange={handleChange}
              placeholder="Email"
              name="email"
              type="text"
              className="email"
            ></input>
            Password:
            <input
              onChange={handleChange}
              placeholder="Password"
              name="password"
              type="password"
              className="password"
            ></input>
            <input type="submit" id="login-btn"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
