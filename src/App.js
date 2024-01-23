import React, { useState } from "react";
import "./App.css";
import AlphabetForm from "./pages/AlphabetForm";
import Landing from "./pages/landing";
import "./styles/header.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AddQuotesPage from "./pages/AddQuotes";
import setLettersToGlobal from "./functions/HelperFunctions/setLettersToGlobal";
import setQuotesToGlobal from "./functions/HelperFunctions/setQuotesToGlobal";

let letters = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
  O: 0,
  P: 0,
  Q: 0,
  R: 0,
  S: 0,
  T: 0,
  U: 0,
  V: 0,
  W: 0,
  X: 0,
  Y: 0,
  Z: 0,
};

function App() {
  if (localStorage.getItem("GlobalLetters") === null) {
    setLettersToGlobal(letters);
  }
  if (localStorage.getItem("GlobalQuotes") === null) {
    setQuotesToGlobal(["taylor swift"]);
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/AlphabetForm" element={<AlphabetForm />} />
        <Route path="/AddQuotes" element={<AddQuotesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
