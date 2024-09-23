import React from "react";
import "./SearchPage.css";
import { Button } from "@mui/material";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <h1>I'm Search Page</h1>
      <div className="searchPage__info">
        <p>62 stays . 26 augest to 30 august. 2 guests</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
    </div>
  );
};

export default SearchPage;
