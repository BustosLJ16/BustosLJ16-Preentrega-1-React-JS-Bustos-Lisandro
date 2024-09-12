import './ItemListContainer.css'
import React from 'react'

const contenidoILC = {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className='container-fluid containerILC'>
                <h1 style={contenidoILC}>{greeting}</h1>
            </div>
        </>
    )
}

export default ItemListContainer