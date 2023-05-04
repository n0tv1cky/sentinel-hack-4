// import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
import Header from "./Components/Header/Header.js";


import MacBookPro141 from './Components/MacBookPro141';




function App() {
  return (
    <>

      <Router>
        
          <Header/>
          <Routes>
            <Route path='/login' element={<MacBookPro141 />} />
          </Routes>
          

        

      </Router>
      
 
    </>
  );
}

export default App;
