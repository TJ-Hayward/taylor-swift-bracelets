import React, { useState } from "react";
import setQuotesToGlobal from "../functions/HelperFunctions/setQuotesToGlobal";
import getQuotesFromGlobal from "../functions/HelperFunctions/getQuotesFromGlobal";
function AddQuotesPage() {
  const [quoteInput, setQuoteInput] = useState("");
  const [quotesList, setQuotesList] = useState([localStorage.getItem("GlobalQuotes")]);

  const handleQuoteChange = (event) => {
    setQuoteInput(event.target.value);
  };

  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    if (quoteInput.trim() !== "") {
      setQuotesList((prevQuotes) => [...prevQuotes, quoteInput]);
      setQuoteInput("");

      setQuotesToGlobal(quotesList);

      console.log("quotes from global", localStorage.getItem("GlobalQuotes"));
    }
  };

  let quote = "taylor swift";

  return (
    <>
      <h1>Add Quotes to your library.</h1>
      <form onSubmit={handleQuoteSubmit}>
        <label>
          Quote to add:
          <input type="text" value={quoteInput} onChange={handleQuoteChange} />
        </label>
        <button type="submit">Add</button>
      </form>

      <div>
        <h2>Your Quotes Library:</h2>
        <ul>
          {quotesList.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AddQuotesPage;
