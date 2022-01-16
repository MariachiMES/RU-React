import React from "react";
import "./newUacModal.scss";
import { useMutation } from "@apollo/client";
import { ADD_MINOR } from "../../utils/mutations";
import { useState } from "react";
import Auth from "../../utils/auth";

export default function NewUacModal({ newUacModalOpen, setNewUacModalOpen }) {
  const [addMinor, { error, data }] = useMutation(ADD_MINOR);
  const [newMinorFormState, setNewMinorFormState] = useState({
    uacname: "",
    a_number: "",
    intake: "",
    gender: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewMinorFormState({
      ...newMinorFormState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("clicked");
      const { data } = await addMinor({
        variables: { ...newMinorFormState },
      });
      Auth.login(data.addMinor.token);
    } catch (e) {
      console.log("this is not working at all, david");
      console.error(e);
    }
  };

  return (
    <div>
      <div className={"modal " + (newUacModalOpen && "active")}>
        <div className="modal-background">
          <div className="modal-form">
            <div className="modal-form-header">
              <div className="modal-form-header-right">
                <h2>Add New UAC</h2>
              </div>
              <div className="modal-form-header-left">
                <h2 onClick={() => setNewUacModalOpen(false)}>X</h2>
              </div>
            </div>
            <div className="modal-form-body">
              {data ? (
                <p>Success!</p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <h3>Full Name</h3>
                  <input
                    type="text"
                    name="uacname"
                    className="full-name"
                    placeholder="Enter UAC's Full Name"
                    value={newMinorFormState.uacname}
                    onChange={handleChange}
                  />
                  <h3>A#</h3>
                  <input
                    type="text"
                    name="a_number"
                    className="a-number"
                    placeholder="A Number"
                    value={newMinorFormState.a_number}
                    onChange={handleChange}
                  />

                  <h3>Date Admitted</h3>
                  <input
                    type="text"
                    name="intake"
                    className="date-admitted"
                    placeholder="Date of Intake"
                    value={newMinorFormState.inake}
                    onChange={handleChange}
                  />
                  <h3>Gender</h3>
                  <input
                    type="text"
                    name="gender"
                    className="Gender"
                    placeholder="Gender"
                    value={newMinorFormState.gender}
                    onChange={handleChange}
                  />
                  <button type="submit">Save</button>
                </form>
              )}
              {error && <div style={{ color: "red" }}>{error.message}</div>}
            </div>
            <div className="modal-form-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
