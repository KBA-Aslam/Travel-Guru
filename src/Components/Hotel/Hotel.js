import React, { useContext } from 'react';
import { PlaceContext } from '../../App';
import Header from '../Header/Header';
import HotelDetails from '../HotelDetails/HotelDetails';
import './Hotel.css'

const Hotel = () => {

        const [place, setPlace] = useContext(PlaceContext);
        console.log(place);
        const { name, hotel, map } = place;
        // console.log(name, hotel);

    return (
        <div>
             <div className="hotel-body">
            <Header></Header>
            <div className="container container-body">
                <div className="row">
                    <div className="col hotel-area">
                        <small>252 stays April 13-17 3 guests</small>
                        <h5>Stay in {place.name}</h5>
                        {
                            place.name && hotel.map(hotel => <HotelDetails hotel={hotel}></HotelDetails>)
                        }
                    </div>
                    <div className="col map-area">
                        <img src={map} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hotel;