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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;
