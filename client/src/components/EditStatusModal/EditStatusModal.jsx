import React, { useEffect } from "react";
import "./EditStatusModal.scss";
import { QUERY_MINOR, QUERY_USER } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

export default function EditStatusModal({
  editStatusModalOpen,
  setEditStatusModalOpen,
}) {
  // const [state, dispatch] = useMinorContext();

  // useEffect(() => {
  //   if(data) {
  //     dispatch({
  //       type: UPDATE_STATUS,
  //       status: data.minor.submitted
  //     })
  //   }
  // })

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
    <div>
      <div className={"status-modal " + (editStatusModalOpen && "active")}>
        <div className="modal-background">
          <div className="modal-form">
            <div className="modal-form-header">
              <div className="modal-form-header-right">
                <h2>Edit Status</h2>
              </div>
              <div className="modal-form-header-left">
                <h2 onClick={() => setEditStatusModalOpen(false)}>X</h2>
              </div>
            </div>
            <div className="modal-form-body">
              <form>
                <h3>Submitted</h3>
                <input
                  name="submitted"
                  value={data.minor.submitted}
                  type="text"
                  className="a-number"
                  placeholder="Date Submitted"
                />
                <h3>Remanded</h3>
                <input
                  name="remanded"
                  value={data.minor.remanded}
                  type="text"
                  className="full-name"
                  placeholder="Date Remanded"
                />
                <h3>Approved</h3>
                <input
                  value="approved"
                  value={data.minor.approved}
                  type="text"
                  className="dob"
                  placeholder="Date Approved"
                />
                <h3>Discharged</h3>
                <input
                  value="discharged"
                  value={data.minor.discharged}
                  type="text"
                  className="dob"
                  placeholder="Date Discharged"
                />
                <button>Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
