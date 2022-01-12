import React from "react";
import "./ReleaseRequestModal.scss";

export default function ReleaseRequestModal({
  releaseRequestOpen,
  setReleaseRequestOpen,
}) {
  return (
    <div>
      <div className={"release-modal " + (releaseRequestOpen && "active")}>
        <div className="modal-background">
          <div className="modal-form">
            <div className="modal-form-header">
              <div className="modal-form-header-right">
                <h2>Release Request</h2>
              </div>
              <div className="modal-form-header-left">
                <h2 onClick={() => setReleaseRequestOpen(false)}>X</h2>
              </div>
            </div>
            <div className="modal-form-body">
              <h3>
                <strong>Release Request</strong> Jahir Antonio Alonzo Arias
                220919055 <strong>SPONSOR/UAC RELATIONSHIP:</strong> Misael
                Filadelfo Del Cid Navichoque, Age 23, category 3, Unrelated
                requests sponsorship of Jahir Antonio Alonzo Arias (A#
                220919055), Male, age 17. Misael Filadelfo Del Cid Navichoque
                currently resides in Waltham, MA.{" "}
                <strong>FRP and Supporting Documents:</strong> The Case Manager
                received and reviewed Misael Filadelfo Del Cid Navichoque's
                family reunification packet, which includes: <br />
                --Sponsor ID: Guatemala Passport, Exp. 3/15/2025 <br />
                --Household Member ID: -HHM 1, Jose Alberto Munoz Ramirez,
                Guatemala Identification Consular, Exp. 9/10/2022 -HHM 2, Jose
                Antonio Vasquez Castellon, El Salvador Identification Card, Exp.
                1/7/2027 -HHM 3, Maynor Zaqueo Diaz Rodriguez, Guatemala
                Passport, Exp. 2/18/2023 -ACG ID: <br />
                --Proof of ability to provide housing, food, education: The
                sponsor adequately demonstrated that they are able to support
                the minor financially. <br />
                --Proof of Address: FedEx letter received on 12/29/2021 Verified
                through Smarty Streets on 12/29/2021 Verified through Google
                Maps and Google Earth on 12/29/2021.
                <br />
                --Proof of immigration/citizenship status: Guatemala Passport,
                Exp. 3/15/2025 received on 12/24/2021 <br />
                --Letter of Designation: Received on <br />
                --LOPC Packet: Sent on <br />
                --Sponsor Handbook: Sponsor confirmed reading Sponsor Handbook
                on 12/28/2021. <strong>Criminal:</strong> <br />
                --As of 12/30/2021, for Misael Filadelfo Del Cid Navichoque :{" "}
                <br />
                --Public Records Check: Clear <br />
                --Sex offender Check: Clear
                <br />
                --Fingerprint Check:
                <br />
                Fingerprints taken: 1/3/2021 Results Required Prior to Release:
                'Yes" Results Status: Clear <br />
                --CA/N check not required for anyone in the household. <br />
                --Self-Disclosure: This Case Manager asked the sponsor if he/she
                has any criminal history on 12/28/2021 Sponsor responded: . No{" "}
                <br />
                Birth Certificates: All birth certificates needed to prove the
                sponsor-UAC relationship were received on Sponsor is confirmed
                to be the UAC’s Unrelated. Birth certificates received are: UC's
                and Sponsor's <strong>PRIOR SPONSORSHIP:</strong> Verified on
                12/28/2021 that the sponsor did not previously sponsor or
                attempt to sponsor a child. <strong>PRIOR ADDRESS:</strong>{" "}
                Verified on 12/28/2021 that the sponsor’s address was not used
                in a previous case.
                <strong>CONTACT WITH PRIMARY CAREGIVER IN COO: </strong> Spoke
                with who was the primary caregiver in home country on
                12/30/2021. was able to verify information provided by the UAC
                and the sponsor.<strong> SPONSOR RESOURCES:</strong> The
                following emergency contact information was provided to the
                sponsor: 911, ORR Parent and Sponsor Hotline, information
                regarding health care and vaccinations, Department of Family and
                Protective Services (in state of residence), and National Human
                Trafficking Resource Center.
                <br /> Release Recommendation: release with Post-Release
                Services
              </h3>
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
