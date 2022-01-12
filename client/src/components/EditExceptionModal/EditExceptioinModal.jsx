import React from "react";
import "./EditExceptionModal.scss";

export default function EditExceptionModal({
  editExceptionModalOpen,
  setEditExceptionModalOpen,
}) {
  return (
    <div>
      <div
        className={"exception-modal " + (editExceptionModalOpen && "active")}
      >
        <div className="modal-background">
          <div className="modal-form">
            <div className="modal-form-header">
              <div className="modal-form-header-right">
                <h2>Exception/Notes</h2>
              </div>
              <div className="modal-form-header-left">
                <h2 onClick={() => setEditExceptionModalOpen(false)}>X</h2>
              </div>
            </div>
            <div className="modal-form-body">
              <form method="POST">
                <h3>Enter Exception</h3>
                <textarea
                  type="text"
                  className="excpetion"
                  rows="10"
                  cols="50"
                  value="Enter Exception/Notes For Case"
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
