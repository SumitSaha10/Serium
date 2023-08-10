import React, { useEffect, useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
const Navbar = () => {
    const [divStyle, setDivStyle] = useState({

    })
    const handleOnclick = (e) => {
        e.preventDefault();
        console.log("clicked")
        if (divStyle?.display == "none") {
            setDivStyle({
                display: "flex"
            })
        }
        else {
            setDivStyle({
                display: "none"
            })
        }


    }
    return (
        <div className='navbar'>
            <div className='logo'>
                <div className='sub-logo'>
                    <img src={logo} alt='logo' />
                    <span>Serium</span>
                </div>
                <i class="fa-solid fa-bars" id='menu' onClick={handleOnclick}></i>
            </div>
            <ul id='lists' style={divStyle}>
                <li><a href='#home'>FEATURES</a></li>
                <li><a href='#feature'>EXPLORE</a></li>
                <li><a href='#learn'>COMMUNITY</a></li>
                <li><a href='#growth'>ABOUT</a></li>

            </ul>
            <div className='search' id='search' style={divStyle}>
                <div className='search-box'>
                    <input id='searchInput' type="text"></input>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <button className='btn'>GO TO DAPP</button>
            </div>

        </div>
    )
}

export default Navbar
