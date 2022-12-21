import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const {lat, long} = props
  const [location, setLocation] = useState({
    result: [],
    loading: true
  })
  useEffect(() => {
      const fetchLocation = () => {
        try {
          fetch(`https://geocode.xyz/${lat},${long}?json=1`)
            .then(res => res.json())
            .then((json) => {
              console.log(json)
              setLocation({
                result: [json],
                loading: false
              })
            })
        } catch (error) {
          console.log("error", error);
        }
        
      };
      fetchLocation()
  }, [])

  return (
    <div>
      {/* Header */}
      <div className="container-fluid bg-success">
        <div className="row text-white p-2 align-items-center">
        {location.loading &&
            <div className="col-auto d-flex px-md-5 me-auto align-items-center">
              <p className='pt-0 pb-0 m-0'>Getting Location...</p>
            </div>
          }
          {location.result.map((loc) => {
            return (
              <div className="col-auto col-md-4 d-flex px-md-5 me-auto align-items-center" key={loc.latt}>
                <iconify-icon inline icon="material-symbols:location-on-outline" style={{ fontSize: "26px" }}></iconify-icon>
                <p className='pt-0 pb-0 my-0 mx-1 mx-md-2'>{loc.region?(loc.region):'Location not found'}</p>
              </div>
            )
          })}
          <div className="col-auto d-flex px-md-5 align-items-center justify-content-center">
          <Link to='/cart' className='text-white'><iconify-icon inline icon="material-symbols:shopping-cart-outline" style={{ fontSize: "26px" }}></iconify-icon></Link>
          </div>
          

        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white px-2 px-md-0 my-md-2">
        <div className="container-fluid px-md-5 mx-md-3">
          <Link className="navbar-brand" to="/">Shopme</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">My Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/new'>What's New</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About us</Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button type="button" className="btn btn-outline-success me-2">Login</button>
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#signup">Sign-up</button>
            </div>
          </div>
        </div>
      </nav>

    </div>


  )
}
