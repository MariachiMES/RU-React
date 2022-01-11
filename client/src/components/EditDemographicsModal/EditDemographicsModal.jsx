import React from "react";
import "./EditDemographicsModal.scss";

export default function EditDemographicsModal({
  editDemographicsModalOpen,
  setEditDemographicsModalOpen,
}) {
  return (
    <div>
      <div className={"modal " + (editDemographicsModalOpen && "active")}>
        <div className="modal-background">
          <div className="modal-form">
            <div className="modal-form-header">
              <div className="modal-form-header-right">
                <h2>Edit Demographics</h2>
              </div>
              <div className="modal-form-header-left">
                <h2 onClick={() => setEditDemographicsModalOpen(false)}>X</h2>
              </div>
            </div>
            <div className="modal-form-body">
              <form method="POST">
                <h3>A#</h3>
                <input
                  type="text"
                  className="a-number"
                  placeholder="A Number"
                />
                <h3>Full Name</h3>
                <input
                  type="text"
                  className="full-name"
                  placeholder="Enter UAC's Full Name"
                />
                <h3>DOB</h3>
                <input
                  type="text"
                  className="dob"
                  placeholder="Enter UAC's Date of Birth"
                />
                <h3>Country of Origin</h3>
                <input
                  type="text"
                  className="coo"
                  placeholder="Enter UAC's Country of Origin"
                />
                <h3>Date Admitted</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Date of Intake"
                />
                <h3>Gender</h3>
                <input type="text" className="Gender" placeholder="Gender" />
                <h3>UAC Age</h3>
                <input type="text" className="age" placeholder="UAC Age" />
                <h3>SIR</h3>
                <input
                  type="text"
                  className="sir"
                  placeholder="Number of SIRs"
                />
                <h3>SIR Narrative</h3>
                <textarea
                  type="text"
                  className="sir-narrative"
                  value="SIR Narrative"
                  rows="2"
                  cols="50"
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
