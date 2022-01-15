const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");

const MinorSchema = new Schema({
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
  coo: String,
  intake: String,
  gender: String,
  category: String,
  submitted: String,
  approved: String,
  remanded: String,
  discharged: String,
  exception: String,
  sponsor_assessment: String,
  frp: String,
  ari: String,
  por: String,
  poa: String,
  lod: String,
  lopc: String,
  sponsor_bgc: String,
  sponsor_id: String,
  sponsor_fp: String,
  hhm_id: String,
  hhm_checks: String,
  sex_offender_check: String,
  caregiver_date: String,
  prior_sponsorship_date: String,
  previous_address_date: String,
  criminal_history_date: String,
  can_check_requested: String,
  relationsip_narrative: String,
  release_type: String,
  sir: Number,
  sir_narrative: String,
  list_of_bcs: String,
  coo_narrative: String,
  self_disclosure: String,
  criminal_history: String,
  sponsor_id_type: String,
  hhm_id_list: String,
  fp_required: String,
  fp_results: String,
  can_check_required: {
    type: String,
    defaultValue: "CA/N Check not required",
  },
  can_check_received: String,
  can_check_results: String,
  coo_caregiver: String,
  prior_sponsorship: String,
  previous_address: String,
  release_reccomendation: String,
  home_study_prs: String,
  address_document: String,
  sponsor_name: String,
  sponsor_age: Number,
  sponsor_gender: String,
  sponsor_address: String,
  sponsor_city: String,
  sponsor_state: String,
  sponsor_zip: String,
  sponsor_relationship: String,
});

const Minor = model("Minor", MinorSchema);

module.exports = Minor;
