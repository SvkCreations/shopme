import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [latlang, setLatlang] = useState({})
  const [location, setLocation] = useState({
    result: [],
    loading: true
  })
  useEffect(() => {
    let getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        setLatlang({
          latitude: 'not found',
          longitude: 'not found'
        })
      }
    }
    let showPosition = (position) => {
      const fetchData = () => {
        try {
          fetch(`https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?json=1`)
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
      fetchData()
    }
    getLocation()
  }, [])

  return (
    <div>
      {/* Header */}
      <div className="container-fluid bg-success">
        <div className="row text-white p-2">
          <div className="col-auto col-md-4 d-flex px-md-5 align-items-center me-auto">
            <iconify-icon inline icon="ic:baseline-call" style={{ fontSize: "24px" }}></iconify-icon>
            <p className='px-2 pt-0 pb-0 m-0'>+91 8240703010</p>
          </div>
          <div className="col-auto d-flex col-md-4 align-items-center justify-content-center me-auto">
            <p className='px-2 pt-0 pb-0 m-0'>Get 50% off on Selected Items. <a className='text-white' href="/shop">Shop now</a> </p>
          </div>
          {location.loading &&
            <div className="col-auto col-md-4 d-flex px-md-5 align-items-center justify-content-center">
              <p className='px-2 pt-0 pb-0 m-0'>Getting Location...</p>
            </div>
          }
          {location.result.map((loc) => {
            return (
              <div className="col-auto col-md-4 d-flex px-md-5 align-items-center justify-content-center me-auto" key={loc.latt}>
                <p className='px-2 pt-0 pb-0 m-0'>{loc.staddress?loc.staddress:'Location not found'} {loc.city?(','+loc.city):''}</p>
              </div>
            )
          })}

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
