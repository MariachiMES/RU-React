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
          <div className="case-status">
            <div className="case-status-header">
              <h2>Case Status</h2>
            </div>
            <div className="tile-contents">
              <h3>FUCK</h3>
              <ul>
                <li>DATE</li>
              </ul>
            </div>
          </div>
          <div className="exception">
            <div className="exception-header">
              <h2>Exception</h2>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="demographics">
            <div className="demographics-header">
              <h2>Demographics</h2>
            </div>
          </div>
          <div className="sponsor">
            <div className="sponsor-header">
              <h2>Sponsor</h2>
            </div>
          </div>
          <div className="smarty-streets">
            <div className="smarty-streets-header">
              <h2>Address Verification</h2>
            </div>
          </div>
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
