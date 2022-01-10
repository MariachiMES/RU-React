import "./App.scss";
import Census from "./components/census/Census";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import NewUacModal from "./components/newUACModal/NewUacModal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newUacModalOpen, setNewUacModalOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="Pages">
        <Header />
        <Login />
        <Signup />
        <Dashboard />
        <Census
          newUacModalOpen={newUacModalOpen}
          setNewUacModalOpen={setNewUacModalOpen}
        />
      </div>
    </div>
  );
}

export default App;
