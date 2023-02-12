import React from "react";
import ListItem from "../CallerLIstItem/ListItem";
import "./CallerList.css";
import { useNavigate } from "react-router-dom";

const CallerList = ({ data }) => {
  const navigate = useNavigate();

  const navigateTo = (id) => {
    navigate(`/contact/${id}`);
  };

  return (
    <ul style={{ padding: 0, display: "block", width: "100%" }}>
      {data.map((item) => (
        <ListItem key={item.id} item={item} onNavigate={navigateTo} />
      ))}
    </ul>
  );
};

export default CallerList;
