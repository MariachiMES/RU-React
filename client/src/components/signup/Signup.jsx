import "./signup.scss";

export default function Signup() {
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
            <form className="login">
              Name:
              <input
                placeholder="First and Last Name"
                type="text"
                className="username"
              ></input>
              Email:
              <input placeholder="Email" type="text" className="email"></input>
              Password:
              <input
                placeholder="Password"
                type="password"
                className="password"
              ></input>
              <button>Sign-Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
