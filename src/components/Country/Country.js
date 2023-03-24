import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const {area, flags,name,region,population}=props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <h3>Region: {region}</h3>
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default Country;