import React from 'react'

export default function Payments() {
    return (
        <div className='container px-4 py-3 py-md-5'>
            <h2 className='fw-bold'>Accepted Payment Methods</h2>
            <div className="row row-cols-3 row-cols-lg-6 align-items-stretch g-4 py-3">
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden rounded-4">
                        <div className="d-flex flex-column h-100 text-shadow-1">
                            <div className="row d-flex align-items-center justify-content-center px-3 py-2 py-md-0 h-100">
                                <div className="col-auto">
                                    <img className='img-fluid' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden rounded-4">
                        <div className="d-flex flex-column h-100 text-shadow-1">
                            <div className="row d-flex align-items-center justify-content-center px-4 px-md-5 h-100">
                                <div className="col-auto">
                                    <img className='img-fluid' src='https://www.freepnglogos.com/uploads/visa-card-logo-9.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden rounded-4">
                        <div className="d-flex flex-column h-100 text-shadow-1">
                            <div className="row d-flex align-items-center justify-content-center px-4 px-md-5 h-100">
                                <div className="col-auto">
                                    <img className='img-fluid' src='https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden rounded-4">
                        <div className="d-flex flex-column h-100 text-shadow-1">
                            <div className="row d-flex align-items-center justify-content-center px-3 h-100">
                                <div className="col-auto">
                                    <img className='img-fluid' src='https://pngimg.com/uploads/paypal/paypal_PNG7.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden rounded-4">
                        <div className="d-flex flex-column h-100 text-shadow-1">
                            <div className="row d-flex align-items-center justify-content-center px-4 px-md-5 h-100">
                                <div className="col-auto">
                                    <img className='img-fluid' src='https://assets.stickpng.com/images/60e7f964711cf700048b6a6a.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden rounded-4">
                        <div className="d-flex flex-column h-100 text-shadow-1">
                            <div className="row d-flex align-items-center justify-content-center px-1 px-md-2 h-100">
                                <div className="col-auto">
                                    <img className='img-fluid' src='https://download.logo.wine/logo/Amazon_Pay/Amazon_Pay-Logo.wine.png' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
