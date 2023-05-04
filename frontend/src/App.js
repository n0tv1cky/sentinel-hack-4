// import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import Header from "./Components/Header/Header.js";

import Home from './Components/Home/Home'


import MacBookPro141 from './Components/MacBookPro141';
import { useSelector } from 'react-redux';




function App() {

  const {isAuthenticated} = useSelector(state => state.user)
  return (
    <>

      <Router>
        
          <Header/>

          <Routes>
            <Route path = '/' element = {<Home/>}/>
            
            <Route path='/login' element={<MacBookPro141 /> } />
            
          </Routes>
          

      </Router>
      
 
    </>
  );
}

export default App;
