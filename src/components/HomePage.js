import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions';
import "./Home.css";

class HomePage extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title} className="image" />
                        <span className="title">{item.title}</span>
                        <button to="/" className="button-1" role="button" onClick={() => { this.handleClick(item.id) }}>Agregar</button>
                    </div>
                </div>

            )
        })

        return (
            <div className="container">
                <h2 className="center">Producto disponibles:</h2>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)