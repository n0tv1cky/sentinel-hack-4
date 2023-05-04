// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom'
import Header from "./Components/Header/Header.js";


function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Header/>

        </div>

      </Router>
    </>
  );
}

export default App;
