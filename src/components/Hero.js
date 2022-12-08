import React from 'react';
import { Link } from 'react-router-dom';
import img from '../hero-bg.png'
export default function Hero() {
    return (
        <div className='container-fluid d-flex align-items-center justify-content-center' style={{ backgroundColor: "#bee0ec" }}>
            <div className="row container featurette px-md-0 py-5 py-md-4 d-flex align-items-center justify-content-center gap-5 gap-md-0">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-bold display-6 text-success col-md-8">Clothing, Jewellery and Electronics</h2>
                    <p className="lead col-md-10">Shopping is a bit of relaxing hobby for me, which is sometimes troubling for the bank balance. Does that sound like you? Then you have come to the right place - the most pocket-friendly online shopping store.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <Link type="button" className="btn btn-success btn-lg px-4 me-md-2" to='/product'>Shop now</Link>
                        <button type="button" className="btn btn-outline-success btn-lg px-4">Learn more</button>
                    </div>
                </div>
                <div className="col-md-5 d-flex justify-content-end">
                    <img src={img} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"></img>

                </div>
            </div>
        </div>
    )
}
