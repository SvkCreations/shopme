import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className='px-3 px-md-5 mx-md-4'>
            <nav className="navbar navbar-expand-lg mt-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/welcome"><h2 className='fw-bold'>T&A</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="me-auto col-5"></div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item px-md-4">
                                <Link to='/welcome' className="nav-link py-2 p-md-0 active" aria-current="page" href="#">WELCOME</Link>
                            </li>
                            <li className="nav-item px-md-4">
                                <Link to='/' className="nav-link p-md-0" href="#">OUR STORY</Link>
                            </li>
                            <li className="nav-item px-md-4">
                                <Link to='/' className="nav-link py-2 p-md-0" href="#">TIMELINE</Link>
                            </li>
                            <li className="nav-item px-md-4 py-0">
                                <Link to='/' className="nav-link py-2 p-md-0" href="#">VENUES</Link>
                            </li>
                            <li className="nav-item px-md-4 py-0">
                                <Link to='/' className="nav-link py-2 p-md-0" href="#">EXPLORE</Link>
                            </li>
                            <li className="nav-item last px-md-4">
                                <Link to='/' className="nav-link py-2 p-md-0" href="#">DRESSS CODE</Link>
                            </li>
                            <li className="nav-item last px-md-4">
                                <Link to='/' className="nav-link py-2 p-md-0" href="#"><iconify-icon icon="material-symbols:share-outline"></iconify-icon></Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="col-auto">
                                <button className='btn primary-btn px-3'>RSVP NOW</button>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            <hr/>
        </div>
    )
}
