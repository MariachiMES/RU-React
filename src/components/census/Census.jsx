import "./census.scss";
import NewUacModal from "../newUACModal/NewUacModal";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import Menu from "../menu/Menu";
import { useQuery } from "@apollo/client";
import { QUERY_CENSUS, QUERY_USER } from "../../utils/queries";
import { useParams } from "react-router-dom";

export default function Census() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newUacModalOpen, setNewUacModalOpen] = useState(false);
  const { _id, uacname, a_number, submitted, approved, remanded, discharged } =
    useParams();

  const { loading, data } = useQuery(QUERY_CENSUS, {
    variables: {
      _id,
      uacname,
      a_number,
      submitted,
      approved,
      remanded,
      discharged,
    },
  });
  const minor = data?.minors || {};
  console.log(minor);
  if (loading) {
    return <div>Loading...</div>;
  }
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
            <h3>TOTAL</h3>
            <h1>10</h1>
          </div>
          <div className="submitted">
            <h3>SUBMITTED</h3>
            <h1>10</h1>
          </div>
          <div className="approved">
            <h3>APPROVED</h3>
            <h1>10</h1>
          </div>
          <div className="remanded">
            <h3>REMANDED</h3>
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
          {minor.map((minor) => (
            <tr>
              <td key={minor._id}>
                <a href={`/Dashboard/${minor._id}`}>{minor.a_number}</a>
              </td>
              <td>{minor.uacname}</td>
              <td className="mobile-invisible">David Ortiz</td>
              <td className="mobile-invisible"></td>
              <td className="mobile-invisible"></td>
              <td className="mobile-invisible">{minor.submitted}</td>
              <td className="mobile-invisible">{minor.approved}</td>
              <td className="mobile-invisible">{minor.remanded}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="census-table-mobile">
        <table>
          <tr>
            <th className="mobile">A#</th>
            <th className="mobile">UAC</th>
          </tr>
          {minor.map((minor) => (
            <tr>
              <td key={minor._id} className="mobile">
                <a href={`/Dashboard/${minor._id}`}>{minor.a_number}</a>
              </td>
              <td className="mobile">{minor.uacname}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
