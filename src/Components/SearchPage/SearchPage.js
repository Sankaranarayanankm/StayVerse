import React from "react";
import "./SearchPage.css";
import { Button } from "@mui/material";
import SearchResult from "../SearchResult/SearchResult";
const searchResults = [
  {
    img: "https://i.pinimg.com/736x/be/d5/8e/bed58e0fea0bec4c3924858a2a13cd5d.jpg",
    location: "New York, USA",
    title: "Cozy Apartment in NYC",
    description: "A nice and cozy apartment in the heart of New York City.",
    star: 4.5,
    price: "$150/night",
    total: "$450 total",
  },
  {
    img: "https://thermohouse.co.uk/wp-content/uploads/2019/04/hero-image.jpg",
    location: "Los Angeles, USA",
    title: "Luxury Villa in LA",
    description: "Spacious villa with a pool, located in a quiet neighborhood.",
    star: 4.8,
    price: "$350/night",
    total: "$1050 total",
  },
  {
    img: "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/3/2021/10/18115838/modern-house-design.jpg",
    location: "Paris, France",
    title: "Charming Studio in Paris",
    description: "Beautiful studio near the Eiffel Tower.",
    star: 4.7,
    price: "€120/night",
    total: "€360 total",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/edc100123egan-002-6500742f5feb7.jpg",
    location: "Tokyo, Japan",
    title: "Modern Apartment in Tokyo",
    description:
      "Centrally located, with easy access to public transportation.",
    star: 4.6,
    price: "¥15,000/night",
    total: "¥45,000 total",
  },
  {
    img: "https://foyr.com/learn/wp-content/uploads/2022/06/Swedish-country-style-house-1024x576.jpg",
    location: "London, UK",
    title: "Elegant Flat in London",
    description:
      "A stylish flat in central London, close to major attractions.",
    star: 4.4,
    price: "£200/night",
    total: "£600 total",
  },
];

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 augest to 30 august. 2 guests</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      {searchResults.map((item) => (
        <SearchResult {...item} key={item.title} />
      ))}
    </div>
  );
};

export default SearchPage;
