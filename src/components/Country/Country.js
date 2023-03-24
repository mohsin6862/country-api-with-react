import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const {area}=props.country;
    return (
        <div>
            <h1>Area: {area}</h1>
        </div>
    );
};

export default Country;