import React from "react";
import "./EditStatusModal.scss";

export default function EditStatusModal({
  editStatusModalOpen,
  setEditStatusModalOpen,
}) {
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
              <form method="POST">
                <h3>Submitted</h3>
                <input
                  type="text"
                  className="a-number"
                  placeholder="A Number"
                />
                <h3>Remanded</h3>
                <input
                  type="text"
                  className="full-name"
                  placeholder="Enter UAC's Full Name"
                />
                <h3>Approved</h3>
                <input
                  type="text"
                  className="dob"
                  placeholder="Enter UAC's Date of Birth"
                />
                <h3>Discharged</h3>
                <input
                  type="text"
                  className="dob"
                  placeholder="Enter UAC's Date of Birth"
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