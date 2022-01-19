import "./census.scss";
import NewUacModal from "../newUACModal/NewUacModal";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import Menu from "../menu/Menu";
import { withRouter } from "react-router";

function Census() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newUacModalOpen, setNewUacModalOpen] = useState(false);

  return (
    <div className="census">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbar>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
      <NewUacModal
        newUacModalOpen={newUacModalOpen}
        setNewUacModalOpen={setNewUacModalOpen}
      />

      <div className="census-header">
        <div className="census-header-left">
          <div className="total">
            <h3 className="titles">TOTAL</h3>
            <h1>10</h1>
          </div>
          <div className="submitted">
            <h3 className="titles">SUBMITTED</h3>
            <h1>10</h1>
          </div>
          <div className="approved">
            <h3 className="titles">APPROVED</h3>
            <h1>10</h1>
          </div>
          <div className="remanded">
            <h3 className="titles">REMANDED</h3>
            <h1>10</h1>
          </div>
        </div>
        <div className="census-header-right">
          <button className="discharged-btn">DISCHARGED</button>
          <button className="logout-btn">LOGOUT</button>
          <h1
            className="add-uac"
            onClick={() => setNewUacModalOpen(!newUacModalOpen)}
          >
            +
          </h1>
        </div>
      </div>
      <div className="census-table">
        <table>
          <tr>
            <th>A#</th>
            <th>UAC</th>
            <th className="mobile-invisible">Case Manager</th>
            <th className="mobile-invisible">FRP</th>
            <th className="mobile-invisible">Sponsor Assessment</th>
            <th className="mobile-invisible">Submitted</th>
            <th className="mobile-invisible">Approved</th>
            <th className="mobile-invisible">Remanded</th>
          </tr>
          <tr>
            <td>233343540</td>
            <td>Enzo Enrique Ortiz De La Madre Y Media</td>
            <td className="mobile-invisible">David Ortiz</td>
            <td className="mobile-invisible">11/23/2021</td>
            <td className="mobile-invisible">11/23/2021</td>
            <td className="mobile-invisible">11/23/2021</td>
            <td className="mobile-invisible">11/23/2021</td>
            <td className="mobile-invisible">11/23/2021</td>
          </tr>
        </table>
      </div>
      <div className="census-table-mobile">
        <table>
          <tr>
            <th className="mobile">A#</th>
            <th className="mobile">UAC</th>
          </tr>
          <tr>
            <td className="mobile">233343540</td>
            <td className="mobile">Enzo Enrique Ortiz De La Madre Y Media</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default withRouter(Census);
