import React, { useState } from 'react'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let handleNameChange = (e) => {
    setName(e.target.value)
  }
  let handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  let handleNumberChange = (e) => {
    setNumber(e.target.value)
  }
  let handleUserChange = (e) => {
    setUsername(e.target.value)
  }
  let handlePassChange = (e) => {
    setPassword(e.target.value)
  }
  const postData = async () => {
    try {
      fetch('https://fakestoreapi.com/users', {
        method: "POST",
        body: JSON.stringify(
          {
            email: email,
            username: username,
            password: password,
            name: {
              firstname: name,
              lastname: 'NA'
            },
            address: {
              city: 'kilcoole',
              street: '7835 new road',
              number: 3,
              zipcode: '12926-3874',
              geolocation: {
                lat: '-37.3159',
                long: '81.1496'
              }
            },
            phone: number
          }
        )
      })
        .then(res => res.json())
        .then(json => console.log(json))
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div className="modal fade" id="signup" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Signup</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Enter your name</label>
                  <input type="text" value={name} onChange={handleNameChange} className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" value={email} onChange={handleEmailChange} className="form-control" id="email" aria-describedby="emailHelp" required />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">Enter your contact number</label>
                  <input type='tel' value={number} onChange={handleNumberChange} className="form-control" id="number" required />
                </div>
                <hr></hr>
                <p className="lead fw-bold text-success">Credentials</p>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Choose an username</label>
                  <input type="text" value={username} onChange={handleUserChange} className="form-control" id="username" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Choose a password</label>
                  <input type="password" value={password} onChange={handlePassChange} className="form-control" id="password" required />
                </div>
                <button className="btn btn-success" onClick={postData}>Signup</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
