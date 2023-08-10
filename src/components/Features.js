import React from 'react'
import './Features.css'

const Features = () => {
    return (
        <div className='features' id='feature'>
            <div className='box box1'>
                <i class="fa-brands fa-bitcoin"></i>
                <div className='sub-features'>
                    <p>0% INTEREST LOANS</p>
                    <a href='#'>BORROW NOW</a>
                </div>
            </div>
            <div className='box box2'>
                <i class="fa-solid fa-database"></i>
                <div className='sub-features'>
                    <p>EARN INTEREST</p>
                    <a href='#'>EARN NOW</a>
                </div>
            </div>
            <div className='box box3'>
                <i class="fa-solid fa-network-wired"></i>
                <div className='sub-features'>
                    <p>UNSTOPPABLE TRADING</p>
                    <a href='#'>TRADE NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Features
