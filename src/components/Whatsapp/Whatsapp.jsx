import React from 'react'
import "./Whatsapp.css"
import whatsapp from "../../assets/images/whatsapp.png"

const Whatsapp = () => {
    return (
        <div className='whatsapp-div'>
            <a href="">
                <img src={whatsapp} alt="whatspp-photo" />
            </a>
        </div>
    )
}

export default Whatsapp
