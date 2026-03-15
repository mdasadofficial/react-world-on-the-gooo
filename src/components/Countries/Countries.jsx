import React, { use } from 'react';
import Country from '../Country';
import './Countries/Countries.css';
const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);
    

    return (
        <div className='countries'>
            <h1>In The Countries: {countries.length}</h1>
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}></Country>)
            }
        </div>
    );
};

export default Countries;