import React from 'react'
import './Learn.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Learn = () => {
    AOS.init({
        offset: 200,
        duration: 1000
    })
    return (
        <div className='learn' id='learn' data-aos='fade-right'>
            <div className='learn-box' >
                <p>THE SOLUTION</p>
                <div className='learn-box-heading'>
                    IT’S TIME TO TAKE BACK CONTROL
                </div>
                <div className='learn-box-description'>
                    Bitcoin redistributes control over money back to individuals. Sovryn is the next layer of technology for Bitcoin. Together we are decentralizing finance, the internet, and nations.
                </div>
                <div>
                    <a className='learn-box-btn'>
                        LEARN ABOUT SERIUM
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Learn
