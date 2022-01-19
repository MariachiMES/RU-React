import React from "react";
import "./menu.scss";
import { useQuery } from "@apollo/client";
import { QUERY_CENSUS } from "../../utils/queries";
import { useParams } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  const { _id, uacname, a_number, submitted, approved, remanded, discharged } =
    useParams();

  const { loading, data } = useQuery(QUERY_CENSUS, {
    variables: {
      _id,
      uacname,
      a_number,
      submitted,
      approved,
      remanded,
      discharged,
    },
  });
  const minor = data?.minors || {};
  console.log(minor);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="menu-header">
        <h1>Sign-Out</h1>
      </div>
      <ul>
        <li>
          <a href="/Census">Go To Table</a>
        </li>
        {minor.map((minor) => (
          <li key={minor._id} onClick={() => setMenuOpen(false)}>
            <a href={`/Dashboard/${minor._id}`}>A#{minor.a_number}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
