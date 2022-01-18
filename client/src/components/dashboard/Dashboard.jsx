import "./dashboard.scss";
import EditExceptionModal from "../EditExceptionModal/EditExceptioinModal";
import EditDemographicsModal from "../EditDemographicsModal/EditDemographicsModal";
import EditReleaseRequestModal from "../EditReleaseRequestModal/EditReleaseRequestModal";
import EditSponsorModal from "../EditSponsorModal/EditSponsorModal";
import EditStatusModal from "../EditStatusModal/EditStatusModal";
import EditTasksModal from "../EditTasks/EditTasksModal";
import ReleaseRequestModal from "../ReleaseRequestModal/ReleaseRequestModal";
import SmartyStreets from "../SmartyStreetsModal/SmartyStreets";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import { QUERY_MINOR, QUERY_USER } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@apollo/client";
export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
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
  const { minorId } = useParams();
  console.log(minorId);
  const { loading, data, error } = useQuery(QUERY_MINOR, {
    variables: { minorId: minorId },
  });
  console.log("this is the minor's data", data);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
      <div className="dashboard">
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
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
          <h1>{data.minor.uacname}</h1>
          <h3>A#{data.minor.a_number}</h3>
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
                <h2>{data.minor.exception}</h2>
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
                    <td>DOB: {data.minor.dob}</td>
                    <td>COO: {data.minor.coo}</td>
                  </tr>
                  <tr>
                    <td>LOS: {data.minor.intake}</td>
                    <td>Age: {data.minor.uac_age}</td>
                  </tr>
                  <tr>
                    <td>Category: {data.minor.category}</td>
                    <td>Gender: {data.minor.gender}</td>
                  </tr>
                  <tr>
                    <td>SIR: {data.minor.sir}</td>
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
                    <td>Name: {data.minor.sponsor_name}</td>
                    <td>City: {data.minor.sponsor_city}</td>
                  </tr>
                  <tr>
                    <td>Address: {data.minor.sponsor_address}</td>
                    <td>Relationship: {data.minor.sponsor_relationship}</td>
                  </tr>
                  <tr>
                    <td>State: {data.minor.sponsor_state}</td>
                  </tr>
                  <tr>
                    <td>Zip: {data.minor.sponsor_zip}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="smarty-streets">
              <div className="smarty-streets-header">
                <h2 id="utils">Utilities/Release Request</h2>
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
                    <td>{data.minor.sponsor_assessment}</td>
                  </tr>
                  <tr>
                    <td>FRP</td>
                    <td>{data.minor.frp}</td>
                  </tr>
                  <tr>
                    <td>ARI</td>
                    <td>{data.minor.ari}</td>
                  </tr>
                  <tr>
                    <td>LOD</td>
                    <td>{data.minor.lod}</td>
                  </tr>
                  <tr>
                    <td>Genogram Complete</td>
                    <td>{data.minor.list_of_bcs}</td>
                  </tr>
                  <tr>
                    <td>Proof of Address</td>
                    <td>{data.minor.poa}</td>
                  </tr>
                  <tr>
                    <td>Sponsor Background</td>
                    <td>{data.minor.sponsor_bgc}</td>
                  </tr>
                  <tr>
                    <td>LOPC</td>
                    <td>{data.minor.lopc}</td>
                  </tr>
                  <tr>
                    <td>Sponsor ID Received</td>
                    <td>{data.minor.sponsor_id}</td>
                  </tr>
                  <tr>
                    <td>Fingerprints Taken</td>
                    <td>{data.minor.sponsor_fp}</td>
                  </tr>
                  <tr>
                    <td>HHM ID's Received</td>
                    <td>{data.minor.hhm_id}</td>
                  </tr>
                  <tr>
                    <td>HHM Background</td>
                    <td>{data.minor.hhm_checks}</td>
                  </tr>
                  <tr>
                    <td>HHM SO Check</td>
                    <td>{data.minor.sex_offender_check}</td>
                  </tr>
                  <tr>
                    <td>Caregiver Contact</td>
                    <td>{data.minor.caregiver_date}</td>
                  </tr>
                  <tr>
                    <td>Prior Sponsorship</td>
                    <td>{data.minor.prior_sponsorship}</td>
                  </tr>
                  <tr>
                    <td>Prior Address</td>
                    <td>{data.minor.previous_address}</td>
                  </tr>
                  <tr>
                    <td>Criminal History</td>
                    <td>{data.minor.criminal_history_date}</td>
                  </tr>
                  <tr>
                    <td>CA/N Checks Req.</td>
                    <td>{data.minor.can_check_requested}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
