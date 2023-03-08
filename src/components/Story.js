import React from 'react'
import img from '../story-bg.jpg'
import Aos from 'aos';

export default function Story() {
        Aos.init()
    return (
        <div className='px-3 px-md-5 mx-md-4 my-3 my-md-5 py-5'>
            <div className="row d-flex mx-1 align-items-center">
                <div className="col-3 col-md-4 me-auto" style={{ height: ".1px", backgroundColor: '#000', opacity: '.2' }}></div>
                <div className="col-auto me-auto">
                    <h2 className="fw-bold text-center" style={{ color: '#70795D' }}>OUR STORY</h2>
                </div>
                <div className="col-3 col-md-4" style={{ height: ".1px", backgroundColor: '#000', opacity: '.2' }}></div>
            </div>
            <div className="row flex-lg-row align-items-center g-5 py-3 py-md-5 my-0 my-md-2" data-aos='fade-up'>
                <div className="col-12 col-sm-8 col-lg-6" data-aos='fade-up'>
                    <img src={img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy"/>
                </div>
                <div className="col-lg-6" data-aos='fade-up'>
                    <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                    <p className="lead" style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
                </div>
            </div>
        </div>
    )
}
