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
} from '@mui/icons-material'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/'><Home/></Link>
        <Link to='/account'><AccountCircle/></Link>
        
      
    </div>
  )
}

export default Header
