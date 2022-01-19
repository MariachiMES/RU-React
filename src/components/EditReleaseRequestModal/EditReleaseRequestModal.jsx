import React from "react";
import "./EditReleaseRequestModal.scss";

export default function EditRRModal({
  editReleaseRequestModalOpen,
  setReleaseRequestModalOpen,
}) {
  return (
    <div>
      <div className={"rr-modal " + (editReleaseRequestModalOpen && "active")}>
        <div className="modal-background">
          <div className="modal-form">
            <div className="modal-form-header">
              <div className="modal-form-header-right">
                <h2>Edit Release Request</h2>
              </div>
              <div className="modal-form-header-left">
                <h2 onClick={() => setReleaseRequestModalOpen(false)}>X</h2>
              </div>
            </div>
            <div className="modal-form-body">
              <form method="POST">
                <h3>List of Birth Certificates</h3>
                <textarea
                  type="text"
                  className="a-number"
                  rows="5"
                  placeholder="List of Birth Certificates"
                />
                <h3>Home Country Narrative</h3>
                <textarea
                  type="text"
                  className="a-number"
                  rows="5"
                  placeholder="Include a brief paragraph about the daily life of the UA in the country of origin including who he/she lived with, infromation about school, why he or she traveled to the US, who traveled with the UAC and if he or she has a debt that is expected to be paid back gby the minor or family"
                />
                <h3>Criminal Self-Disclosure</h3>
                <textarea
                  type="text"
                  className="dob"
                  rows="2"
                  placeholder="YES or NO. If 'YES', describe the charges indicated and dates"
                />
                <h3>Sponsor ID Type</h3>
                <input
                  type="text"
                  className="coo"
                  placeholder="i.e. 'Guatemalan Consular ID'"
                />
                <h3>List Additional Household ID's</h3>
                <textarea
                  type="text"
                  rows="3"
                  className="date-admitted"
                  placeholder="List any Additional Household Member ID's and Expiration Dates"
                />
                <h3>Proof of Address Verification</h3>
                <input
                  type="text"
                  className="Gender"
                  placeholder="Enter the type of proof received to verify proof of address"
                />
                <h3>Fingerprint Results Required</h3>
                <input
                  type="text"
                  className="coo"
                  placeholder="Are Fingerprint results required for this sponsor?"
                />
                <h3>CA/N Check Required</h3>
                <input
                  type="text"
                  className="coo"
                  placeholder="Are CA/N Checks required for this sponsor?"
                />
                <h3>CA/N Checks Received</h3>
                <input
                  type="text"
                  className="coo"
                  placeholder="Date Received"
                />
                <h3>Home Country Caregiver</h3>
                <input
                  type="text"
                  className="coo"
                  placeholder="Name of Caregiver in Home Country"
                />
                <h3>The sponsor _____ previously attempt to sponsor a minor</h3>
                <input type="text" className="coo" placeholder="DID/DID NOT" />
                <h3>
                  The sponsor's address ______ previously used to sponsor
                  another UAC
                </h3>
                <input type="text" className="coo" placeholder="WAS/WAS NOT" />
                <h3>Release Reccomendation</h3>
                <textarea
                  type="text"
                  className="coo"
                  rows="5"
                  placeholder="Include the release recommendation for a straight release, release with PRS, release with a positive Home Study recommendation or denial"
                />
                <h3>Home Study/PRS</h3>
                <textarea
                  type="text"
                  className="coo"
                  rows="5"
                  placeholder="List the reasons for recommending a home study, and or, post release services.  The release request needs to state what the reason for the home study was, what kind of home study (TVPRA or Discretionary) if there are any special recommendations/conditions from the home study provider and if they were completed"
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
