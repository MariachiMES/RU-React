import React, { useState } from "react";
import "./newUacModal.scss";
import { useMutation } from "@apollo/client";
import { ADD_MINOR } from "../../utils/mutations";

export default function NewUacModal({ newUacModalOpen, setNewUacModalOpen }) {
  const [uacname, setUacname] = useState("");
  const [alien_number, setAlienNumber] = useState("");
  const [intake, setIntake] = useState("");
  const [gender, setGender] = useState("");
  const [addMinor, { data, error }] = useMutation(ADD_MINOR);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let a_number = parseInt(alien_number);
    try {
      const { data } = await addMinor({
        variables: { uacname, a_number, intake, gender },
      });

      console.log(data);
      window.location.replace("/Census");
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
              <form onSubmit={handleFormSubmit}>
                <h3>Full Name</h3>
                <input
                  type="text"
                  name="uacname"
                  className="full-name"
                  placeholder="Enter UAC's Full Name"
                  value={uacname}
                  onChange={(event) => setUacname(event.target.value)}
                />
                <h3>A#</h3>
                <input
                  type="text"
                  name="alien_number"
                  className="a-number"
                  placeholder="A Number"
                  value={alien_number}
                  onChange={(event) => setAlienNumber(event.target.value)}
                />

                <h3>Date Admitted</h3>
                <input
                  type="text"
                  name="intake"
                  className="date-admitted"
                  placeholder="Date of Intake"
                  value={intake}
                  onChange={(event) => setIntake(event.target.value)}
                />
                <h3>Gender</h3>
                <input
                  type="text"
                  name="gender"
                  className="Gender"
                  placeholder="Gender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                />
                <button type="submit">Save</button>
              </form>
              {data ? (
                <p>Success!</p>
              ) : (
                error && <div style={{ color: "red" }}>{error.message}</div>
              )}
            </div>
            <div className="modal-form-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
