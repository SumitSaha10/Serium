import React from 'react'
import './LearnTech.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const LearnTech = () => {
    AOS.init({
        offset: 200,
        duration: 1000
    })
    return (
        <div className='learnTech' data-aos='fade-right'>
            <div className='learn-box2'>
                <p>TECHNOLOGY</p>
                <div className='learn-box2-heading'>
                    TECHNOLOGY
                </div>
                <div className='learn-box2-description'>
                    Sovryn is open-source technology for sovereign individuals. We are bringing smart contracts to Bitcoin to create sound finance, truly free markets, and a society based around ownership and freedom.
                </div>
                <div>
                    <a className='learn-box2-btn'>
                        LEARN MORE
                    </a>
                </div>
            </div>

        </div>
    )
}

export default LearnTech
