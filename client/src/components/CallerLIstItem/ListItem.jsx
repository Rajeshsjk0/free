import React from "react";
import "./ListItem.css";

// import profilePic from "../../assets/profile.png";

const ListItem = ({ item, onNavigate }) => {
  return (
    <div className="item-container" onClick={() => onNavigate(item._id)}>
      <div className="image-name-container">
        <div className="image-container">
          <img src={item.image} alt="profile pic" />
        </div>
        <div className="name-address-container">
          <h4 style={{ padding: 0, margin: 0 }}>{item.name}</h4>
          <p style={{ color: "rgb(90, 89, 89)", padding: 0, margin: 0 }}>
            {item.phone_Num[0].type}
          </p>
        </div>
      </div>
      <div className="time-container">10:45</div>
    </div>
  );
};

export default ListItem;
