import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Password from './components/Password';
import Main from './components/Main';
import Story from './components/Story';
import Timeline from './components/Timeline';
import ScrollTop from './components/ScrollTop';
import ExploreBrief from './components/ExploreBrief';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Password/>}></Route>
          <Route exact path='/shopme' element={<Password/>}></Route>
          <Route exact path='/welcome' element={
            <>
            <Navbar/>
            <Main/>
            <Story/>
            <Timeline/>
            <ExploreBrief/>
            <ScrollTop/>
            </>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
