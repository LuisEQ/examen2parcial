import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'

import "./Home.css";
class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="card" key={item.id}>
                            <div className="card-image">
                                <img src={item.img} alt={item.img} className="image" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>
                                    <b>Cantidad: {item.qty}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><button className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>+</button></Link>
                                    <Link to="/cart"><button className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>-</button></Link>
                                </div>
                                <button className="" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <p>No hay nada en el carrito.</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5>Tu orden:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addeditems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)