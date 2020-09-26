import React from 'react';
import './HotelDetails.css'
import star from '../../Icon/star_1_.png'

const HotelDetails = (props) => {

    const { details, image, price, rating, title, unique } = props.hotel;
    const { guests, bedroms, beds, baths } = details;

    return (
        <div className="card mb-3 hotel-detail">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={image} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text"> <small>{`${guests} guests ${bedroms} bedrooms ${beds} beds ${baths} baths`}</small></p>
              <p className="card-text"><small className="text-muted">{unique}</small></p>
    <h5 className="d-flex justify-content-between"> <span> <img src={star} className="img-fluid" style={{ width: '35px', height: '35px' }} alt="" /> {rating}</span> <span>${price}/night</span> </h5>
            </div>
          </div>
      </div>
      </div>
      
    );
};




export default HotelDetails;