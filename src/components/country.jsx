import "./country.css";
import React from 'react'; 
import CountryDropdown from 'country-dropdown-with-flags-for-react';

export const Country = () => {
  return (
      <CountryDropdown  id="country-id" className='country' preferredCountries={['gb', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>
  );
};

export default Country;