// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom'
import Header from "./Components/Header/Header.js";


import MacBookPro141 from './Components/MacBookPro141';


function App() {
  return (
    <>

      <Router>
        <div className='app'>
          <Header/>

        </div>

      </Router>
      <MacBookPro141 />
 
    </>
  );
}

export default App;
