const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");

const UACSchema = new Schema({
  uac_id: {
    type: String,
    minlength: 1,
    maxlength: 280,
    trim: true,
    unique: true,
    required: true,
  },
  demographics: [
    {
      uacname: {
        type: String,
        required: true,
        trim: true,
      },
      a_number: {
        type: Number,
        required: true,
        trim: true,
        minlength: [9, "Too short"],
        maxlength: [9, "Too long"],
      },
      dob: {
        type: String,
        required: true,
      },
      uac_age: {
        type: Number,
        defaultValue: 0,
      },
      coo: {
        type: String,
      },
      intake: {
        type: String,
      },
      gender: {
        type: String,
      },
      category: {
        type: String,
      },
    },
  ],
  sponsor: [
    {
      sponsor_name: {
        type: String,
      },
      sponsor_age: {
        type: Number,
      },
      sponsor_gender: {
        type: String,
      },
      sponsor_address: {
        type: String,
      },
      sponsor_city: {
        type: String,
      },
      sponsor_state: {
        type: String,
      },
      sponsor_zip: {
        type: String,
      },
      sponsor_relationship: {
        type: String,
      },
    },
  ],

  tasks: [
    {
      sponsor_assessment: {
        type: String,
      },
      frp: {
        type: String,
      },
      ari: {
        type: String,
      },
      por: {
        type: String,
      },
      poa: {
        type: String,
      },
      lod: {
        type: String,
      },
      lopc: {
        type: String,
      },
      sponsor_bgc: {
        type: String,
      },
      sponsor_id: {
        type: String,
      },
      sponsor_fp: {
        type: String,
      },
      hhm_id: {
        type: String,
      },
      hhm_checks: {
        type: String,
      },
      sex_offender_check: {
        type: String,
      },
      caregiver_date: {
        type: String,
      },
      prior_sponsorship_date: {
        type: String,
      },
      previous_address_date: {
        type: String,
      },
      criminal_history_date: {
        type: String,
      },
      can_check_requested: {
        type: String,
      },
    },
  ],
  release_request: [
    {
      relationsip_narrative: {
        type: String,
      },
      release_type: {
        type: String,
      },
      sir: {
        type: String,
      },
      sir_narrative: {
        type: String,
      },
      list_of_bcs: {
        type: String,
      },
      coo_narrative: {
        type: String,
      },
      self_disclosure: {
        type: String,
      },
      criminal_history: {
        type: String,
      },
      sponsor_id_type: {
        type: String,
      },
      hhm_id_list: {
        type: String,
      },
      fp_required: {
        type: String,
      },
      fp_results: {
        type: String,
      },
      can_check_required: {
        type: String,
        defaultValue: "CA/N Check not required",
      },
      can_check_received: {
        type: String,
      },
      can_check_results: {
        type: String,
      },
      coo_caregiver: {
        type: String,
      },
      prior_sponsorship: {
        type: String,
      },
      previous_address: {
        type: String,
      },
      release_reccomendation: {
        type: String,
      },
      home_study_prs: {
        type: String,
      },
      address_document: {
        type: String,
      },
    },
  ],
  submitted: {
    type: String,
  },
  approved: {
    type: String,
  },
  remanded: {
    type: String,
  },
  discharged: {
    type: String,
  },
  exception: {
    type: String,
  },
});

const UAC = model("UAC", UACSchema);

module.exports = UAC;
