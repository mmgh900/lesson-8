import React from "react";
import './cart-icon.styles.scss'
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='cart-icon__shopping-icon'/>
            <span className='cart-icon__item-count'>0</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);
