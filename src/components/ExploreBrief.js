import React from 'react'
import Aos from 'aos';
import img1 from '../burj-khalifa.jpg'
import img2 from '../louvre.webp'
import img3 from '../miracle-garden.jpg'


export default function ExploreBrief() {
    return (
        <div className='px-3 px-md-5 mx-md-4 my-3 my-md-5 py-5'>
            <div className="row d-flex mx-1 align-items-center">
                <div className="col-3 col-md-4 me-auto" style={{ height: ".1px", backgroundColor: '#000', opacity: '.2' }}></div>
                <div className="col-auto me-auto">
                    <h2 className="fw-bold text-center" style={{ color: '#70795D' }}>EXPLORE</h2>
                </div>
                <div className="col-3 col-md-4" style={{ height: ".1px", backgroundColor: '#000', opacity: '.2' }}></div>
            </div>
            <div className="row d-flex justify-content-end pt-4">
                <div className="col-auto mx-auto"></div>
                <div className="col-auto">
                    <h3 style={{ color: '#909C76' }}>Explore more</h3>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">
                <div class="col" data-aos='fade-up'>
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark" style={{
                        backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center'
                    }}>
                        <div class="overlay d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <div class="text">
                                <h2 className="display-6">BURJ KHALIFA</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col" data-aos='fade-up'>
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark" style={{
                        backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center'
                    }}>

                        <div class="overlay d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <div class="text">
                                <h2 className="display-6">THE LOUVRE</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col" data-aos='fade-up'>
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark" style={{
                        backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center'
                    }}>
                        <div class="overlay d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <div class="text">
                                <h2 className="display-6">THE MIRACLE GARDEN</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
