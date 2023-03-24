import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

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
           <div className='countries'>
           {
                countries.map(country => <Country country={country}></Country>)
            }
            
           </div>
        </div>
    );
};

export default Countries;