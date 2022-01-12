import "./App.scss";
import NewCaseManager from "./components/NewCaseManager/NewCaseManager";
import Census from "./components/census/Census";
import Dashboard from "./components/dashboard/Dashboard";
// import Navbar from "./components/navbar/Navbar";
// import Menu from "./components/menu/Menu";
import { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./components/Landing/Landing";

function App() {
  useEffect(() => {
    document.title = "Reunify";
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {" "}
      <div className="App">
        <Route path="/" exact component={Landing}></Route>
        <Route path="/signup" exact component={NewCaseManager}></Route>
        <Route path="/Census" exact component={Census}></Route>
        <Route path="/Dashboard" exact component={Dashboard}></Route>
        {/* <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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
        </div> */}
      </div>
    </Router>
  );
}

export default App;
