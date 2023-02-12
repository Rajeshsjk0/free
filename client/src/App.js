import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Contact from "../src/screens/contactScreen/Contact";
import ContactList from "../src/screens/contactList/Contacts";

import Footer from "../src/components/Footer/Footer";
// const Footer = React.lazy(() => import("../src/components/Footer/Footer"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ContactList />} />
        <Route exact path="/contact/:contactId" element={<Contact />} />
        <Route>404 Not Found!</Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
