import "./dashboard.scss";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="header">
        <h1>Enzo Enrique Ortiz</h1>
        <h3>A#234632456</h3>
      </div>
      <div className="wrapper">
        <div className="left">
          <div className="case-status"></div>
          <div className="exception"></div>
        </div>
        <div className="middle">
          <div className="demographics"></div>
          <div className="sponsor"></div>
          <div className="smarty-streets"></div>
        </div>
        <div className="right">
          <div className="taskbar"></div>
        </div>
      </div>
    </div>
  );
}
