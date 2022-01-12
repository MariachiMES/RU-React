import React, { useState } from "react";
import "./signup.scss";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_CASE_MANAGER } from "../../utils/mutations";
import Auth from "../../utils/auth";

export default function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addCaseManager, { error, data }] = useMutation(ADD_CASE_MANAGER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addCaseManager({
        variables: { ...formState },
      });

      Auth.login(data.addCaseManager.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="signup">
      <div className="signin">
        <div className="wrapper">
          <div className="left">
            <h1>Welcome!!</h1>
            <h3>If you are an existing user, you may sign-in below</h3>
            <a href="/">
              <h2>Login</h2>
            </a>
          </div>
          <div className="right">
            <div className="titles">
              <h2>Sign-Up</h2>
            </div>
            {data ? (
              <p>
                Success! You may now head <Link to="/">to Login.</Link>
              </p>
            ) : (
              <form className="login" onSubmit={handleFormSubmit}>
                Name:
                <input
                  placeholder="First and Last Name"
                  type="text"
                  name="username"
                  className="username"
                  value={formState.name}
                  onChange={handleChange}
                ></input>
                Email:
                <input
                  placeholder="Email"
                  type="text"
                  name="email"
                  className="email"
                ></input>
                Password:
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  className="password"
                  value={formState.email}
                  onChange={handleChange}
                ></input>
                <button type="submit">Sign-Up</button>
              </form>
            )}
            {error && <div className="">{error.message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
