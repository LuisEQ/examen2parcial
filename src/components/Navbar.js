import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import "./Navbar.css";
const Navbar = ({ addeditems }) => {
    const [cartCounter, setCartCounter] = useState(0);

    useEffect(() => {
        let count = 0;
        addeditems.forEach(item => {
            count += item.qty;
        });
        setCartCounter(count);
    }, [addeditems, cartCounter])
    return (
        <nav className="navMenu">
            <Link to="/" className='Link1'>Tienda de Luis</Link>
            <Link to="/" className='Link1'>Shop</Link>
            <Link to="/cart" className='Link1'>Carrito {cartCounter}</Link>
        </nav >
    )
}

const mapStateToProps = state => {
    return {
        addeditems: state.addeditems
    }
}
export default connect(mapStateToProps)(Navbar);