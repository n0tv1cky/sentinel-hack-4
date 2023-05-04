// import React from 'react'

// const Home = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Home


import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Home = () => {

    const navigate = useNavigate();
    const {isAuthenticated} = useSelector(state => state.user)

    const HandleClick = () => {
        isAuthenticated ? navigate('/loanApproval') : navigate('/login');
    }
    
  return (
    <div className="landing-page-container">
      <div className="header">
        <h1>Banking System</h1>
        <h2>Fast and secure loans approval and transaction verification</h2>
      </div>
      <div className="main-content">
        <div className="loan-approval">
          <h3>Loan Approval</h3>
          <p>Approve loans quickly and efficiently with our easy-to-use system. Our advanced algorithms and automated processes will help you make informed decisions in no time.</p>
          <button onClick={HandleClick}>Get Started</button>
        </div>
        <div className="transaction-verification">
          <h3>Transaction Verification</h3>
          <p>Prevent fraudulent activities with our state-of-the-art transaction verification system. Our system will alert you of any suspicious activities and help you take quick actions to protect your customers.</p>
          <button type="submit" >Get Started</button>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2023 Banking System</p>
      </div>
    </div>
  );
}

export default Home;
