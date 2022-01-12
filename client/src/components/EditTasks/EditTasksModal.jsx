import React from "react";
import "./EditTasksModal.scss";

export default function EditTasksModal({
  editTasksModalOpen,
  setEditTasksModalOpen,
}) {
  return (
    <div>
      <div className={"tasks-modal " + (editTasksModalOpen && "active")}>
        <div className="modal-background">
          <div className="modal-form">
            <div className="modal-form-header">
              <div className="modal-form-header-right">
                <h2>Edit Tasks</h2>
              </div>
              <div className="modal-form-header-left">
                <h2 onClick={() => setEditTasksModalOpen(false)}>X</h2>
              </div>
            </div>
            <div className="modal-form-body">
              <form method="POST">
                <h3>Sponsor Assessment</h3>
                <input
                  type="text"
                  className="a-number"
                  placeholder="Date Received"
                />
                <h3>FRP</h3>
                <input
                  type="text"
                  className="full-name"
                  placeholder="Date Received"
                />
                <h3>ARI</h3>
                <input
                  type="text"
                  className="dob"
                  placeholder="Date Received"
                />
                <h3>Proof of Relationship</h3>
                <input
                  type="text"
                  className="coo"
                  placeholder="Date Received"
                />
                <h3>Proof of Address</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date Received"
                />
                <h3>LOD</h3>
                <input
                  type="text"
                  className="Gender"
                  placeholder="Date Received"
                />
                <h3>LOPC</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date Received"
                />
                <h3>Sponsor Background Check</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date Completed"
                />
                <h3>Sponsor ID</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date Received"
                />
                <h3>Sponsor FP</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date Taken"
                />
                <h3>HHM ID</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date Received"
                />
                <h3>HHM Background Check</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date Completed"
                />
                <h3>Sex-Offender Check</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date Completed"
                />
                <h3>Caregiver Phone Call</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date Completed"
                />
                <h3>Prior Sponsorship</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date of Inquiry"
                />
                <h3>Previous Address Used</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date of Inquiry"
                />
                <h3>Criminal History</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date of Inquiry"
                />
                <h3>CA/N Check Requested</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date of Request"
                />
              </form>
            </div>
            <div className="modal-form-footer">
              <button>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
