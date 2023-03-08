import React from 'react'

export default function ScrollTop() {
    let srcollToTop = () => document.documentElement.scrollTop = 0;
    return (
        <div>
            <div className='row d-flex align-items-center justify-content-center mt-5 py-4'>
                <p className="lead text-center">TAHIA & AALIF'S WEDDING</p>
                <button className="btn secondary-btn col-5 col-md-1" onClick={srcollToTop}>Back to top</button>
            </div>
        </div>
    )
}
