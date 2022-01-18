import "./login.scss";
import { useState } from "react";
import { LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

export default function Login() {
  const [formData, setFormData] = useState({ password: "", email: "" });
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
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

    try {
      const { data } = await loginUser({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
      console.log(`WHY DON'T YOU WORK YOU SONOFABITCH ${data}`);
      Auth.login(data.login.token);
      window.location.replace("/Census");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <h1>Reunify</h1>
          <h3>Case Manager Supplemental Workflow Platform</h3>
          <a href="/signup">
            <h2>SIGN-UP</h2>
          </a>
        </div>
        <div className="right">
          <div className="titles">
            <h2>Login</h2>
          </div>
          <form onSubmit={handleLogin} className="login-form">
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
            <button type="submit">LOGIN</button>
          </form>
          {error && <div style={{ color: "red" }}>{error.message}</div>}
        </div>
      </div>
    </div>
  );
}
