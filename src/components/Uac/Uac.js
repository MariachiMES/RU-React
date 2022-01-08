<div class="modal" id = "new-uac-modal">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Add New UAC</p>
            <button class="delete" id = "close-x" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <!-- Content ... -->
            <span>A#</span>
            <input class="input" name ="a-number" type="text" placeholder="A#" id="a-number">
            <span>Full Name</span>
            <input class="input" name = "uac-name" type="text" placeholder="UAC Name" id="uac-name">
            <span>DOB</span>
            <input class="input" name = "dob" type="text" placeholder="DOB" id="dob">
            <span>Country of Origin</span>
            <input class="input" name = "coo" type="text" placeholder="Country of Origin" id="coo">
            <span>Date Admitted</span>
            <input class="input" name = "date-admitted" type="text" placeholder="Date Admitted" id="date-admitted">
            <span>Gender</span>
            <input class="input" name = "gender" type="text" placeholder="Gender" id="gender">
            Case Manager User ID: <span id = "user-id"></span><br>
            <div class="dropdown is-up">
                <div class="dropdown-trigger">
                  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span id="selected-cm">Assign Case Manager</span>
                    <span class="icon is-small">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                  <div class="dropdown-content" id = "cm-dropdown">
                    {{#each cmSelector}}
                    <div class="dropdown-item" value = {{user_id}} id = {{user_id}}>
                      {{username}}
                    </div> {{/each}}
                    {{!-- <a class="dropdown-item">
                      Other dropdown item
                    </a>
                    <a href="#" class="dropdown-item is-active">
                      Active dropdown item
                    </a>
                    <a href="#" class="dropdown-item">
                      Other dropdown item
                    </a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">
                      With a divider
                    </a> --}}
                  </div>
                </div>
              </div>


          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" id = "save-new-uac">Save changes</button>
            <button class="button" id = "cancel-modal">Cancel</button>
          </footer>
        </div>
      </div>