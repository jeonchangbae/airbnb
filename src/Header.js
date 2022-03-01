import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
    return ( 
        <div className='header'>
            <img className='header__icon' src='images/airbnb.png' alt='logo'/>
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>
            <div className='header__right'>
                <p>호스트 모드로 전환</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>
    );
}

export default Header;