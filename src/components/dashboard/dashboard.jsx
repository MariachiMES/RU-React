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
          <div className="taskbar">
            <div className="task-header">
              <h2>Taskbar</h2>
            </div>
            <div className="tasks">
              <ul>
                <li>Sponsor Assessment</li>
                <li>FRP</li>
                <li>ARI</li>
                <li>Proof of Relationship</li>
                <li>Proof of Address</li>
                <li>Letter of Designation</li>
                <li>LOPC</li>
                <li>Sponsor Background Check</li>
                <li>Sponsor ID Received</li>
                <li>Fingerprints Taken</li>
                <li>HHM ID's Received</li>
                <li>HHM Background Checks</li>
                <li>HHM Sex-Offender Checks</li>
                <li>Home Country Caregiver Contact</li>
                <li>CA/N Checks Requested</li>
                <li>Prior Sponsorship</li>
                <li>Previous Address</li>
                <li>Criminal History</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
