import React from "react";
import "./EditSponsorModal.scss";

export default function EditSponsorModal({
  editSponsorModalOpen,
  setEditSponsorModalOpen,
}) {
  return (
    <div>
      <div className={"sponsor-modal " + (editSponsorModalOpen && "active")}>
        <div className="modal-background">
          <div className="modal-form">
            <div className="modal-form-header">
              <div className="modal-form-header-right">
                <h2>Edit Sponsor Info</h2>
              </div>
              <div className="modal-form-header-left">
                <h2 onClick={() => setEditSponsorModalOpen(false)}>X</h2>
              </div>
            </div>
            <div className="modal-form-body">
              <form method="POST">
                <h3>Name</h3>
                <input
                  type="text"
                  className="a-number"
                  placeholder="Sponsor's Full Name"
                />
                <h3>Address</h3>
                <input
                  type="text"
                  className="full-name"
                  placeholder="Enter Street Address"
                />
                <h3>City</h3>
                <input type="text" className="dob" placeholder="City" />
                <h3>State</h3>
                <input type="text" className="coo" placeholder="State" />
                <h3>Zip</h3>
                <input
                  type="text"
                  className="date-admitted"
                  placeholder="Zip Code"
                />
                <h3>Relationship</h3>
                <input
                  type="text"
                  className="Gender"
                  placeholder="Relationship To UAC"
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
