import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

import {
    Home,
    HomeOutlined,
    Add,
    AddOutlined,
    SearchOutlined,
    Search,
    AccountCircle,
    AccountCircleOutlined
} from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Header = () => {
  const {isAuthenticated} = useSelector(state => state.user)
  return (
    <div className='header'>
        <Link to={isAuthenticated && '/'}><Home/></Link>
        <Link to={isAuthenticated ? '/' : '/login'}><AccountCircle/></Link>
        
      
    </div>
  )
}

export default Header
