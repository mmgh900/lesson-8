import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './card-dropdown.styles.scss'
const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-dropdown__cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);
export default CartDropdown;
