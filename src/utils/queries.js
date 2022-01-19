import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_CENSUS = gql`
  query minors {
    minors {
      _id
      uacname
      a_number
      submitted
      approved
      remanded
      discharged
    }
  }
`;

export const QUERY_MINOR = gql`
  query minors($minorId: ID!) {
    minor(minorId: $minorId) {
      _id
      uacname
      a_number
      dob
      uac_age
      coo
      intake
      gender
      category
      submitted
      approved
      remanded
      discharged
      exception
      sponsor_assessment
      frp
      ari
      por
      poa
      lod
      lopc
      sponsor_bgc
      sponsor_id
      sponsor_fp
      hhm_id
      hhm_checks
      sex_offender_check
      caregiver_date
      prior_sponsorship_date
      previous_address_date
      criminal_history_date
      can_check_requested
      relationsip_narrative
      release_type
      sir
      sir_narrative
      list_of_bcs
      coo_narrative
      self_disclosure
      criminal_history
      sponsor_id_type
      hhm_id_list
      fp_required
      fp_results
      can_check_required
      can_check_received
      can_check_results
      coo_caregiver
      prior_sponsorship
      previous_address
      release_reccomendation
      home_study_prs
      address_document
      sponsor_name
      sponsor_age
      sponsor_gender
      sponsor_address
      sponsor_city
      sponsor_state
      sponsor_zip
      sponsor_relationship
    }
  }
`;
