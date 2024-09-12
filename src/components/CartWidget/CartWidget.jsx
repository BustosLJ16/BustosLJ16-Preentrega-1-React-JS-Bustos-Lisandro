import './CartWidget.css'
import React from 'react'

const CartWidget = () => {
    return (
        <>
            <div className="col d-flex align-items-center justify-content-end">
                <a href="#" className="text-dark text-decoration-none p-3 bg-light rounded-pill">
                    <i className="bi bi-basket3"></i> (<span id='k'>0</span>)
                </a>
            </div>
        </>
    )
}

export default CartWidget