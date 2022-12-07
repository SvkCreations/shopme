import React from 'react';
import loading from '../Loading.gif'

export default function Loading() {
    return (
        <div className='row d-flex align-items-cente justify-content-center'>
            <div className="col-12 col-md-4">
                <img src={loading} alt="" className="img-fluid" />
            </div>
            <div className="col-12">
                <p className="lead fw-bold text-center">Loading Products..</p>
            </div>
            <div className="row text-center mt-5">
                <i className="lead">" Patience is bitter but Fruit is sweet " </i>
            </div>
        </div>
    )
}
