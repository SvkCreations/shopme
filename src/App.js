import './App.css';
import Categories from './components/Categories';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Signup from './components/Signup';
import ProductByCategory from './components/ProductByCategory';
import New from './components/New';
import Payments from './components/Payments';
import Cashback from './components/Cashback';
import ProductDesc from './components/ProductDesc';
import Cart from './components/Cart';
import Address from './components/Address';
import { useEffect, useState } from 'react';

function App() {
  // const [location, setLocation] = useState({
  //   lat:'',
  //   long:''
  // })
  // useEffect(async()=>{
  //   const getCoords = async () => {
  //     const pos = await new Promise((resolve, reject) => {
  //       navigator.geolocation.getCurrentPosition(resolve, reject);
  //     });
  
  //     return {
  //       long: pos.coords.longitude,
  //       lat: pos.coords.latitude,
  //     };
  // };

  // const coords = await getCoords();
  // setLocation(coords)
  // console.log(coords)

  // },[])
  return (
    <Router>
      <div className="App">
        <Navbar  />
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <Categories />
              <Signup/>
              <New/>
              <Payments/>
              <Cashback/>
            </>
          }></Route>
          <Route path='/shopme' element={
            <>
              <Hero />
              <Categories />
              <Signup/>
              <New/>
              <Payments/>
              <Cashback/>
            </>
          }></Route>
            <Route path='/product' element={
            <>
              <Products/>
              <Signup/>
            </>
          }></Route>
          <Route exact path='/:id' element={
            <>
              <ProductDesc/>
            </>
          }></Route>
          <Route path='/categories/:cat' element={
            <>
              <ProductByCategory/>
            </>
          }></Route>
          <Route path='/cart' element={
            <>
              <Cart/>
            </>
          }></Route>
          <Route path='/address' element={
            <>
              <Address/>
            </>
          }></Route>
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
