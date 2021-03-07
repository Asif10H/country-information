import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryInfo.css';

const CountryInfo = () => {

    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    const { name, flag, area, alpha2Code, capital, region, timezones, population, subregion, callingCodes, topLevelDomain } = country;
    // console.log(country)

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    })
    
    return (
        <div className="d-flex row justify-content-center align-items-center">
            <div className="col-4">
                <div className="card">
                    <div className="card-img-top">
                        <img src={flag} className="player-img img-thumbnail " alt="country flag" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Name: {name}</h4>
                        <h4 className="card-title">Capital: {capital}</h4>
                        <h4 className="card-title">Area: {area}</h4>
                        <h4 className="card-title">Alpha2Code: {alpha2Code}</h4>
                        <h4 className="card-title">Time Zone: {timezones}</h4>
                        <h4 className="card-title">Region: {region}</h4>
                        <h4 className="card-title">Population: {population}</h4>
                        <h4 className="card-title">Subregion: {subregion}</h4>
                        <h4 className="card-title">Calling Code: {callingCodes}</h4>
                        <h4 className="card-title">Top Level Domain: {topLevelDomain}</h4>
                        <Link to="/home">
                            <button className="btn btn-primary">Home Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryInfo;