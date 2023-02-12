import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";

import profilePic from "./../../assets/profile.png";

import { AiFillPlusSquare } from "react-icons/ai";

import "./Contacts.css";
import CallerList from "../../components/CallerList/CallerList";

const itemsDummy = [
  {
    id: "1",
    name: "Name 1",
    modified: "yesterday",
    image:
      "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
    phone_Num: [
      {
        number: "23333111",
        type: "Home",
      },
      {
        number: "11111111",
        type: "cellular",
      },
    ],
    location: "san-fransisco",
    distance: "28 KM",
  },
  {
    id: "2",
    name: "Name 2",
    modified: "yesterday",
    image:
      "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
    phone_Num: [
      {
        number: "11111111",
        type: "cellular",
      },
      {
        number: "23333111",
        type: "Home",
      },
    ],
    location: "san-fransisco",
    distance: "28 KM",
  },
  {
    id: "3",
    name: "Name 3",
    modified: "yesterday",
    image:
      "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
    phone_Num: [
      {
        number: "23333111",
        type: "Home",
      },
      {
        number: "11111111",
        type: "cellular",
      },
    ],
    location: "san-fransisco",
    distance: "28 KM",
  },
  {
    id: "4",
    name: "Name 4",
    modified: "yesterday",
    image:
      "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
    phone_Num: [
      {
        number: "11111111",
        type: "cellular",
      },
      {
        number: "23333111",
        type: "Home",
      },
    ],
    location: "san-fransisco",
    distance: "28 KM",
  },
  {
    id: "5",
    name: "Name 5",
    modified: "yesterday",
    image:
      "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
    phone_Num: [
      {
        number: "23333111",
        type: "Home",
      },
      {
        number: "11111111",
        type: "cellular",
      },
    ],
    location: "san-fransisco",
    distance: "28 KM",
  },
  {
    id: "6",
    name: "Name 6",
    modified: "yesterday",
    image:
      "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
    phone_Num: [
      {
        number: "11111111",
        type: "cellular",
      },
      {
        number: "23333111",
        type: "Home",
      },
    ],
    location: "san-fransisco",
    distance: "28 KM",
  },
  {
    id: "7",
    name: "Name 7",
    modified: "yesterday",
    image:
      "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
    phone_Num: [
      {
        number: "11111111",
        type: "cellular",
      },
      {
        number: "23333111",
        type: "Home",
      },
    ],
    location: "san-fransisco",
    distance: "28 KM",
  },
  {
    id: "8",
    name: "Name 8",
    modified: "yesterday",
    image:
      "https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300",
    phone_Num: [
      {
        number: "23333111",
        type: "Home",
      },
      {
        number: "11111111",
        type: "cellular",
      },
    ],
    location: "san-fransisco",
    distance: "28 KM",
  },
];

const Contacts = () => {
  const [selectedOption, setSelectedOption] = useState("Recents");
  const [items, setItems] = useState(itemsDummy);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const fetchData = async () => {
    try {
      // const response = await fetch(
      //   `https://63e63fd9c8839ccc2854503d.mockapi.io/contacts/contacts`
      // );
      const response = await fetch("http://localhost:5000/contacts");
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="contacts-container">
      <Header>
        <div className="banner">
          <img src={profilePic} alt="profile pic" />
        </div>
        <h4>Phone</h4>
        <AiFillPlusSquare color="blue" className="blue-icon" />
      </Header>
      <Header
        style={{
          backgroundColor: "rgb(22, 20, 20)",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          color: "rgb(90, 89, 89)",
        }}
      >
        <p
          onClick={() => handleOptionClick("Recents")}
          className={`option ${selectedOption === "Recents" ? "selected" : ""}`}
        >
          Recents
        </p>
        <p
          onClick={() => handleOptionClick("Favorites")}
          className={`option ${
            selectedOption === "Favorites" ? "selected" : ""
          }`}
        >
          Favorites
        </p>
        <p
          onClick={() => handleOptionClick("Missed")}
          className={`option ${selectedOption === "Missed" ? "selected" : ""}`}
        >
          Missed
        </p>
      </Header>
      <div className="list-container">
        <CallerList data={items} />
      </div>
    </div>
  );
};

export default Contacts;
