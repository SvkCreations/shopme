import React, { useState, useEffect } from 'react'

export default function Address() {
  // const [street, setStreet] = useState('')
  // const [pin, setPin] = useState('')

  let handleStreetChange=(e)=>{
    
  }
  let handlePinChange=(e)=>{
    
  }

  const [location, setLocation] = useState({
    result: [],
    loading: true
  })
  useEffect(() => {
    let getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        // setLatlang({
        //   latitude: 'not found',
        //   longitude: 'not found'
        // })
        
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
            console.log(location.result)
        } catch (error) {
          console.log("error", error);
        }
        
      };
      fetchData()
    }
    getLocation()
  }, [])
  return (
    <div className='container py-3 py-md-5 px-4'>
      <h2 className="fw-bold">Add an address</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">House or Apartment No. </label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Street, Locality or Area</label>
          <input type="text" className="form-control" id="exampleInputPassword1" value={location.result.region} onChange={handleStreetChange} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Landmark (Optional)</label>
          <input type="text" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Pincode</label>
          <input type="number" className="form-control" id="exampleInputPassword1" onChange={handlePinChange} />
        </div>
        <p className='py-2 m-0'>Mark address as</p>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1">
              Home
            </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label class="form-check-label" for="flexRadioDefault2">
              Office
            </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label class="form-check-label" for="flexRadioDefault2">
              Other
            </label>
        </div>
        <button type="submit" className="btn btn-success my-3 p-md-2 col-12">Confirm Address</button>
      </form>
    </div>
  )
}
