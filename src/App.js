import "./App.scss";
import { Census } from "./components/census/Census";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Signup />
      <Dashboard />
      <Census />
    </div>
  );
}

export default App;
