import React, { useState } from "react";

function SearchQuotesPage() {
  return (
    <>
      <h1>Search for Taylor Swift Quotes that you have the letters to make.</h1>
      <form>
        <label>
          Search:
          <input type="search" />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default QuotesPage;
