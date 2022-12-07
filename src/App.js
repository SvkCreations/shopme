import './App.css';
import Categories from './components/Categories';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Signup from './components/Signup';

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
            </>
          }></Route>
          <Route path='/shopme' element={
            <>
              <Hero />
              <Categories />
              <Signup/>
            </>
          }></Route>
            <Route path='/product' element={
            <>
              <Products/>
              <Signup/>
            </>
          }></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
