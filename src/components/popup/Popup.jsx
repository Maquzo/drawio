import React from 'react'
import './style.css'

const popup = () => {
    return (
        <div className="container" id="blur">
            toggle
        </div>
    )

    var blur = document.getElementById('blur')
    blur.classList.popup('active')
}

export default popup
