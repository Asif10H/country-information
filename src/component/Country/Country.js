import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    //console.log(props);
    const { name, flag } = props.country;
    
    return (
        <div className="col">
            <div className="card">
                <div className="card-img-top">
                    <h4 className="card-title country-name">Name: {name}</h4>
                </div>
                <Link to={`/country/${name}`}>
                    <div className="card-body">
                        <img src={flag} className="player-img img-thumbnail " alt="..." />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Country;