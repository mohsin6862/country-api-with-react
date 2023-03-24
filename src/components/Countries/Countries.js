import React, { useEffect, useState } from 'react';

const Countries = () => {

    const [countries,SetCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => SetCountries(data))
    },[])
    return (
        <div>
            <h1>All Country Of The World</h1>
            {
                countries.map(country => console.log(country))
            }
            
        </div>
    );
};

export default Countries;