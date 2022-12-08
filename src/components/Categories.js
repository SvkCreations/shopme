import React from 'react';
import mens from '../mens.jpg';
import womens from '../womens.jpg'
import electronics from '../electronics.jpg';
import { Link } from 'react-router-dom';

export default function Categories() {
  return (
    <div>
      <div className="container px-4 py-5" id="custom-cards">
    <h2 className='fw-bold'>Shop our best Categories</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-3">

      <Link className="col text-decoration-none" to="/categories/cat=men's clothing">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url('${mens}')`, backgroundSize:'cover', backgroundPosition:'center', minHeight:"350px",border:'none'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            
            <div className="d-flex mt-auto justify-content-center">
              <h4 className="fw-bold">Men's Wear</h4>
            </div>
          </div>
        </div>
      </Link>
      <Link className="col text-decoration-none" to="/categories/cat=women's clothing">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url('${womens}')`, backgroundSize:'cover', backgroundPosition:'center', minHeight:"350px", border:'none'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <div className="d-flex mt-auto justify-content-center">
            <h4 className="fw-bold">Women's Wear</h4>
            </div>
          </div>
        </div>
      </Link>

      <Link className="col text-decoration-none" to="/categories/cat=electronics">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url('${electronics}')`, backgroundSize:'cover', backgroundPosition:'center', minHeight:"350px", border:'none'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
            <div className="d-flex justify-content-center mt-auto">
            <h4 className="fw-bold">Electronics</h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
    </div>
  )
}
