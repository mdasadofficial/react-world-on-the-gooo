import React from 'react';
import './Countries/Country.css'


const Country = ({ country }) => {
    console.log(country); 
    return (
        <div className='country'>
            <p>Area : {country.area.area} </p>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <h3>Capital : {country.capital.capital}</h3>
            <p>Population : {country.population.population} </p>

        </div>
    );
};

export default Country;     