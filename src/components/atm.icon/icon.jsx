import React from 'react';
import menu from '../../icons/ic_menu.svg'
import cart from '../../icons/ic_cart.svg'


export const Icon = {
    Menu: props => <img src={menu} alt="menu" width={props.size}/>,
    Cart: props => <img src={cart} alt="menu" width={props.size}/>
}