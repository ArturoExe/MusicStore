import "../styles/country.css";
import React from "react";
import CountryDropdown from "country-dropdown-with-flags-for-react";

export const Country = ({ updateCountry, inputValues }) => {
  function handleUpdate(e) {
    updateCountry(e);
    console.log("Some text");
  }

  return (
    <CountryDropdown
      id="country"
      className="country"
      preferredCountries={["gb", "us"]}
      value={inputValues.country}
      handleChange={handleUpdate}
    ></CountryDropdown>
  );
};

export default Country;
