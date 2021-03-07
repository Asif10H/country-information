import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            country.map(country => <Country country={country}></Country>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;