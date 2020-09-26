import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PlaceDetails from '../../FakeData/PlaceDetails';
import Header from '../Header/Header';
import './Home.css'
import MainPage from '../../FakeData/MainPage/MainPage'
import { PlaceContext } from '../../App';

const Home = () => {
    let [place, setPlace] = useContext(PlaceContext);

    const [location, setLocation] = useState(PlaceDetails);

    const [item, setItem] = useState('SUNDARBAN');

    const handleClick = (click) => {
        setItem(click)
        }

    useEffect(() => {

        let choosed = PlaceDetails.find(area => area.name === (item))
        setPlace(choosed);
        }, [item])

    const { name, description } = place;
    const [coxBazar, sreemangal, sundarban] = location;
    return (
        <div className='body'>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-6">
                        <h2 className="name">{name}</h2>
                        <h5 className="name">{description}</h5>
                        <Link to="/booking">
                            <button className="booking-button text-white">Booking</button>
                        </Link>

                    </div>
                    <div className="col col-sm-6 place">

                        <div className="card-group">
                            <div className="card col-sm-12 text-white bg-dark">
                              <div classNameName="card-body" onClick={() => { handleClick(coxBazar.name) }}>
                                <img src={coxBazar.image} className="card-img" alt="..." />
                                <h5>{coxBazar.name}</h5>
                              </div>
                            </div>
                            <div className="card col-sm-12 text-white bg-dark">
                                <div classNameName="card-body" onClick={() => { handleClick(sreemangal.name) }}>
                                    <img className='crd-img' src={sreemangal.image} className=" card-img" alt="..." />
                                    <h5>{sreemangal.name}</h5>
                                </div>
                            </div>
                            <div className="card col-sm-12 text-white bg-dark">
                                <div classNameName="card-body" onClick={() => { handleClick(sundarban.name) }}>
                                    <img src={sundarban.image} className="card-img" alt="..." />
                                    <h5>{sundarban.name}</h5>
                                </div>
                            </div>
                        </div>

                        </div>
                        </div>
                        </div>
        </div>
    );
};

export default Home;