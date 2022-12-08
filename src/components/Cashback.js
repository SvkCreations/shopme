import React from 'react';
import { Link } from 'react-router-dom';
import card from '../card.png';

export default function Cashback() {
    return (
        <div className="container-fluid mt-5" style={{ backgroundColor: '#ffe7cd' }}>
            <div className='container px-4 pt-5 pb-3'>
                <div className="row featurette d-flex gap-4 gap-md-0 align-items-center justify-content-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-bold display-5 lh-1">Get upto 20% Off </h2>
                        <p className="lead">On (almost) all bank Credit Cards</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                        <Link type="button" className="btn btn-success btn-lg px-4 me-md-2" to='/product'>Shop now</Link>
                    </div>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={card}></img>

                    </div>
                </div>
            </div>
        </div>
    )
}
