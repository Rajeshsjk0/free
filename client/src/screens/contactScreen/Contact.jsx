import React, { useEffect, useState } from "react";
import "./Contact.css";

import profilePic from "./../../assets/map.png";

import { useNavigate, useParams } from "react-router-dom";

import { FaChevronLeft, FaEdit } from "react-icons/fa";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { HiVideoCamera } from "react-icons/hi";
import { GrMail } from "react-icons/gr";

const personDetailsDummy = {
  id: "1",
  name: "Name",
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
};

const Contact = () => {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const [personDetails, setPersonDetails] = useState(personDetailsDummy);

  const fetchData = async () => {
    // const response = await fetch(
    //   `https://63e63fd9c8839ccc2854503d.mockapi.io/contacts/contacts/${contactId}`
    // );
    const response = await fetch(`contacts/${contactId}`);
    const data = await response.json();
    setPersonDetails(data);
    console.log(personDetails);
  };

  useEffect(() => {
    fetchData();
    console.log(personDetails);
  }, [contactId]);

  return (
    <div className="contact-container">
      <div className="top-icons-container">
        <FaChevronLeft
          color="white"
          onClick={() => {
            navigate("/");
          }}
        />
        <FaEdit color="blue" className="blue-icon2" />
      </div>
      <div className="contact-image-name-container">
        <div className="contact-image-container">
          <img src={personDetails.image} alt="profile pic" />
        </div>
        <div className="contact-name-container">
          <h4 style={{ padding: 0, margin: 0 }}>{personDetails.name}</h4>
          <p style={{ color: "rgb(90, 89, 89)", padding: 0, margin: 0 }}>
            {personDetails.modified}
          </p>
        </div>
      </div>
      <div className="Call-icons-container">
        <div style={{ backgroundColor: "green" }} className="icon-conatiner">
          <BiMessageRoundedMinus color="white" className="blue-icon2" />
        </div>
        <div style={{ backgroundColor: "blue" }} className="icon-conatiner">
          <MdCall color="white" className="blue-icon2" />
        </div>
        <div style={{ backgroundColor: "red" }} className="icon-conatiner">
          <HiVideoCamera color="white" className="blue-icon2" />
        </div>
        <div style={{ backgroundColor: "grey" }} className="icon-conatiner">
          <GrMail color="white" className="blue-icon2" />
        </div>
      </div>
      <div className="contact-number-details-container">
        {personDetails.phone_Num.map((contact) => {
          return (
            <>
              <div className="contact-numbers-container">
                <div className="contact-number-container">
                  <p
                    style={{
                      color: "rgb(90, 89, 89)",
                      padding: 0,
                      margin: 0,
                      paddingBottom: "5%",
                    }}
                    className="contact-number-type"
                  >
                    {contact.type}
                  </p>
                  <h4
                    style={{ padding: 0, margin: 0, paddingBottom: "5%" }}
                    className="contact-number"
                  >
                    {contact.number}
                  </h4>
                </div>
                <div className="contact-number-icon-conatiner">
                  <div style={{ paddingRight: "50%" }}>
                    <BiMessageRoundedMinus color="rgb(90, 89, 89)" size={25} />
                  </div>
                  <div style={{ paddingLeft: "10%" }}>
                    <MdCall color="rgb(90, 89, 89)" size={25} />
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="contact-details-container">
          <div className="location-distance-conatiner">
            <div className="location">
              <p
                style={{
                  color: "rgb(90, 89, 89)",
                  padding: 0,
                  margin: 0,
                  paddingBottom: "5%",
                }}
              >
                location
              </p>
              <h4 style={{ padding: 0, margin: 0 }}>
                {personDetails.location}
              </h4>
            </div>
            <div className="distance">
              <p
                style={{
                  color: "rgb(90, 89, 89)",
                  padding: 0,
                  margin: 0,
                  paddingBottom: "5%",
                }}
              >
                distance
              </p>
              <h4 style={{ padding: 0, margin: 0 }}>
                {personDetails.distance}
              </h4>
            </div>
          </div>
          <div className="location-image-conatiner">
            <img src={profilePic} alt="profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
