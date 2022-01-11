import "./dashboard.scss";
import EditExceptionModal from "../EditExceptionModal/EditExceptioinModal";
import EditDemographicsModal from "../EditDemographicsModal/EditDemographicsModal";
import EditReleaseRequestModal from "../EditReleaseRequestModal/EditReleaseRequestModal";
import EditSponsorModal from "../EditSponsorModal/EditSponsorModal";
import EditStatusModal from "../EditStatusModal/EditStatusModal";
import EditTasksModal from "../EditTasks/EditTasksModal";
import ReleaseRequestModal from "../ReleaseRequestModal/ReleaseRequestModal";
import SmartyStreets from "../SmartyStreetsModal/SmartyStreets";
import { useState } from "react";
export default function Dashboard() {
  const [smartyStreetsOpen, setSmartyStreetsOpen] = useState(false);
  const [releaseRequestOpen, setReleaseRequestOpen] = useState(false);
  const [editTasksModalOpen, setEditTasksModalOpen] = useState(false);
  const [editStatusModalOpen, setEditStatusModalOpen] = useState(false);
  const [editSponsorModalOpen, setEditSponsorModalOpen] = useState(false);
  const [editDemographicsModalOpen, setEditDemographicsModalOpen] =
    useState(false);
  const [editExceptionModalOpen, setEditExceptionModalOpen] = useState(false);
  const [editReleaseRequestModalOpen, setReleaseRequestModalOpen] =
    useState(false);
  return (
    <div className="dashboard">
      <SmartyStreets
        smartyStreetsOpen={smartyStreetsOpen}
        setSmartyStreetsOpen={setSmartyStreetsOpen}
      />
      <ReleaseRequestModal
        releaseRequestOpen={releaseRequestOpen}
        setReleaseRequestOpen={setReleaseRequestOpen}
      />
      <EditTasksModal
        editTasksModalOpen={editTasksModalOpen}
        setEditTasksModalOpen={setEditTasksModalOpen}
      />
      <EditStatusModal
        editStatusModalOpen={editStatusModalOpen}
        setEditStatusModalOpen={setEditStatusModalOpen}
      />
      <EditExceptionModal
        editExceptionModalOpen={editExceptionModalOpen}
        setEditExceptionModalOpen={setEditExceptionModalOpen}
      />
      <EditDemographicsModal
        editDemographicsModalOpen={editDemographicsModalOpen}
        setEditDemographicsModalOpen={setEditDemographicsModalOpen}
      />
      <EditReleaseRequestModal
        editReleaseRequestModalOpen={editReleaseRequestModalOpen}
        setReleaseRequestModalOpen={setReleaseRequestModalOpen}
      />
      <EditSponsorModal
        editSponsorModalOpen={editSponsorModalOpen}
        setEditSponsorModalOpen={setEditSponsorModalOpen}
      />
      <div className="header">
        <h1>Enzo Enrique Ortiz</h1>
        <h3>A#234632456</h3>
      </div>
      <div className="wrapper">
        <div className="left">
          <div className="case-status">
            <div className="case-status-header">
              <h2>Case Status</h2>
              <h3
                onClick={() => {
                  setEditStatusModalOpen(!editStatusModalOpen);
                }}
              >
                EDIT
              </h3>
            </div>
            <div className="case-status-contents">
              <h3>STATUS</h3>
            </div>
          </div>
          <div className="exception">
            <div className="exception-header">
              <h2>Exception</h2>
              <h3
                onClick={() =>
                  setEditExceptionModalOpen(!editExceptionModalOpen)
                }
              >
                EDIT
              </h3>
            </div>
            <div className="exception-contents">
              <h2>Enter notes here</h2>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="demographics">
            <div className="demographics-header">
              <h2>Demographics</h2>
              <h3
                onClick={() =>
                  setEditDemographicsModalOpen(!editDemographicsModalOpen)
                }
              >
                EDIT
              </h3>
            </div>
            <div className="demographics-content">
              <table>
                <tr>
                  <td>DOB:</td>
                  <td>COO:</td>
                </tr>
                <tr>
                  <td>LOS:</td>
                  <td>Age:</td>
                </tr>
                <tr>
                  <td>Cagetgory:</td>
                  <td>Gender:</td>
                </tr>
                <tr>
                  <td>SIR:</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="sponsor">
            <div className="sponsor-header">
              <h2>Sponsor</h2>
              <h3
                onClick={() => setEditSponsorModalOpen(!editSponsorModalOpen)}
              >
                EDIT
              </h3>
            </div>
            <div className="sponsor-contents">
              <table>
                <tr>
                  <td>Name:</td>
                  <td>City:</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>Relationship:</td>
                </tr>
                <tr>
                  <td>State:</td>
                </tr>
                <tr>
                  <td>Zip:</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="smarty-streets">
            <div className="smarty-streets-header">
              <h2>Utilities/Release Request</h2>
              <h3
                onClick={() =>
                  setReleaseRequestModalOpen(!editReleaseRequestModalOpen)
                }
              >
                EDIT
              </h3>
            </div>
            <div className="smarty-streets-contents">
              <button
                className="smarty-button"
                onClick={() => setSmartyStreetsOpen(!smartyStreetsOpen)}
              >
                Smarty Streets
              </button>
              <button
                className="rr-button"
                onClick={() => setReleaseRequestOpen(!releaseRequestOpen)}
              >
                Release Request
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="taskbar">
            <div className="task-header">
              <h2>Taskbar</h2>
              <h3 onClick={() => setEditTasksModalOpen(!editTasksModalOpen)}>
                EDIT
              </h3>
            </div>
            <div className="tasks">
              <table>
                <tr>
                  <td>Spons. Assessment</td>
                  <td>11/12/22</td>
                </tr>
                <tr>
                  <td>FRP</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>ARI</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>LOD</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>Genogram Complete</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>Proof of Address</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>Sponsor Background</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>LOPC</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>Sponsor ID Received</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>Fingerprints Taken</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>HHM ID's Received</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>HHM Background</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>HHM SO Check</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>Caregiver Contact</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>Prior Sponsorship</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>Prior Address</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>Criminal History</td>
                  <td>DATE</td>
                </tr>
                <tr>
                  <td>CA/N Checks Req.</td>
                  <td>DATE</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
