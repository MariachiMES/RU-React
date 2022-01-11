import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <h1>Reunification Flow</h1>
          <h3>Case Manager Supplemental Worflow Platform</h3>
          <a href="/signup">
            <h2>SIGN-UP</h2>
          </a>
        </div>
        <div className="right">
          <div className="titles">
            <h2>Login</h2>
          </div>
          <form className="login">
            Email:
            <input placeholder="Email" type="text" className="email"></input>
            Password:
            <input
              placeholder="Password"
              type="password"
              className="password"
            ></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
