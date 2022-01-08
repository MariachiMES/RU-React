{{!-- EDIT TASKS MODAL --}}
        <div class="modal" id="edit-tasks-modal">
      <div class="modal-background" id="edit-tasks-BG"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit Tasks</p>
          <button class="delete" id="edit-tasks-close-x" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          Sponsor Assessment: <input class="input" name="sponsor_assessment" type="text" placeholder="Date Received" id="sponsor_assessment" value={{format_nice_date uac.sponsor_assessment}}>
          FRP: <input class="input" name="frp" type="text" placeholder="Date Received" id="frp" value={{format_nice_date uac.frp}}>
          ARI: <input class="input" name="ari" type="text" placeholder="Date Received" id="ari" value={{format_nice_date uac.ari}}>
          POR: <input class="input" name="por" type="text" placeholder="Date Received" id="por" value={{format_nice_date uac.por}}>
          POA: <input class="input" name="poa" type="text" placeholder="Date Received" id="poa" value={{format_nice_date uac.poa}}>
          LOD: <input class="input" name="lod" type="text" placeholder="Date Received" id="lod" value={{format_nice_date uac.lod}}>
          LOPC: <input class="input" name="lopc" type="text" placeholder="Date Received" id="lopc" value={{format_nice_date uac.lopc}}>
          Sponsor Background Check: <input class="input" name="sponsor_bgc" type="text" placeholder="Date Completed" id="sponsor_bgc" value = {{format_nice_date uac.sponsor_bgc}}>
          Sponsor ID: <input class="input" name="sponsor_id" type="text" placeholder="Date Received" id="sponsor_id" value = {{format_nice_date uac.sponsor_id}}>
          Sponsor FP: <input class="input" name="sponsor_fp" type="text" placeholder="Date Fingerprinted" id="sponsor_fp" value = {{format_nice_date uac.sponsor_fp}}>
          HHM ID: <input class="input" name="hhm_id" type="text" placeholder="Date Received" id="hhm_id" value = {{format_nice_date uac.hhm_id}}>
          HHM Background Check: <input class="input" name="hhm_checks" type="text" placeholder="Date Received" id="hhm_checks" value={{format_nice_date uac.hhm_checks}}>
          Sex-Offender Check: <input class="input" name="sex_offender_check" type="text" placeholder="Date Checked" id="sex_offender_check" value = {{format_nice_date uac.sex_offender_check}}>
          Caregiver In Home Country: <input class="input" name="coo_caregiver_date" type="text" placeholder="Date Call Made" id="coo_caregiver_date" value = {{format_nice_date uac.coo_caregiver_date}}>
          Prior Sponsorship: <input class="input" name="prior_sponsorship_date" type="text" placeholder="Date Received" id="prior_sponsorship_date" value = {{format_nice_date uac.prior_sponsorship_date}}>
          Previous Address: <input class="input" name="previous_address_date" type="text" placeholder="Date Received" id="previous_address_date" value = {{format_nice_date uac.previous_address_date}}>
          Criminal History: <input class="input" name="criminal_history_date" type="text" placeholder="Date Received" id="criminal_history_date" value = {{format_nice_date uac.criminal_history_date}}>
          CA/N Check Requested: <input class="input" name="can_check_requested_date" type="text" placeholder="Date Requested" id="can_check_requested_date" value = {{format_nice_date uac.can_check_requested_date}}>

        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" id="save-task-info">
            Save Changes
          </button>
          <button class="button" id="cancel-edit-task-modal">Cancel</button>
        </footer>
      </div>
    </div>
    {{!-- END EDIT TASKS MODAL --}}