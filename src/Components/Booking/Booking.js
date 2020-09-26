import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PlaceContext } from '../../App';
import Header from '../Header/Header';
import './Booking.css'

const Booking = () => {

    const [place, setPlace] = useContext(PlaceContext)
    const history = useHistory()
    const handleBook = () => {
        history.push('/hotel');
    }
    const handleBookingDate = (e) => {
        const bookingInfo = { ...place }
        bookingInfo[e.target.name] = e.target.value;
        setPlace(bookingInfo);

    }

    return (
        <div>
             <div className="booking-body">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="name">{place.name}</h2>
                        <h5 className="name">{place.description}</h5>
                    </div>

                    <div className="col  card">
                        <form action="" onSubmit={handleBook}>
                            <div className="form-group">
                                <label htmlFor="FormInput1" >Origin</label>
                                <input type="text" className="form-control" onBlur={handleBookingDate} name="origin" id="FormInput1" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="FormInput1">Destination</label>
                                <input type="text" className="form-control" name="destination" id="FormInput1" onBlur={handleBookingDate} value={place.name} />
                            </div>

                            <div className="row">
                                <div className="col">
                                
                                    <label htmlFor="FormInput1">from</label>
                                    <input type="date" className="form-control" onBlur={handleBookingDate} name="from" id="FormInput1" required />
                                 
                                </div>
                                <div className="col">
                                   
                                    <label htmlFor="FormInput1"  >to</label>
                                    <input type="date" className="form-control" onBlur={handleBookingDate} name="to" id="FormInput1" required />
                                   
                                </div>
                            </div>

                            <label htmlFor="exampleInputEmail1"></label>
                            <input type="submit" className="form-control" style={{ color: 'black', backgroundColor: 'goldenrod' }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Booking;