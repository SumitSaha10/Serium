import React from 'react'
import './Quote.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Quote = () => {
    AOS.init({
        offset: 200,
        duration: 1000
    })
    return (
        <div className='quote' data-aos="fade-right">
            <div className='box'>
                <p className='small-text'>WHY BITCONIN?</p>
                <p className='big-text'>CORRUPTION IS EVERYWHERE. THE SOLUTION IS DECENTRALIZATION.</p>
            </div>

        </div>
    )
}

export default Quote
