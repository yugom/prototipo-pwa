import React from 'react';
import menu from '../../icons/ic_menu.svg'
import cart from '../../icons/ic_cart.svg'
import close from '../../icons/ic_close.svg'
import profileImg from '../../images/img_profile.png'


export const Icon = {
    Menu: props => <img src={menu} alt="menu" width={props.size}/>,
    Cart: props => <img src={cart} alt="cart" width={props.size}/>,
    Close: props => <img src={close} alt="close" width={props.size}/>,
    Profile: props => <img src={profileImg} alt="profile" width={props.size}/>
}