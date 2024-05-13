import React, { Component } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css';


class Navbar extends Component {
  state = { menu: "shop", clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  handleMenuClick = (menu) => {
    this.setState({ menu });
  }

  render() {
    return (
      <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPING</p>
        </div>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li onClick={() => this.handleMenuClick("shop")}>
            <Link style={{ textDecoration: 'none',color: 'black' }} to='/'><i className="fa-solid fa-shop"></i> Shop</Link>
            {this.state.menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => this.handleMenuClick("mens")}>
            <Link style={{ textDecoration: 'none',color: 'black' }} to='/mens'><i className="fa-solid fa-person"></i> Men</Link>
            {this.state.menu === "mens" ? <hr /> : <></>}
          </li>
          <li onClick={() => this.handleMenuClick("womens")}>
            <Link style={{ textDecoration: 'none',color: 'black' }} to='/womens'><i className="fa-solid fa-person-dress"></i> Women</Link>
            {this.state.menu === "womens" ? <hr /> : <></>}
          </li>
          <li onClick={() => this.handleMenuClick("kids")}>
            <Link style={{ textDecoration: 'none',color: 'black' }} to='/kids'><i className="fa-solid fa-child-reaching"></i> Kids</Link>
            {this.state.menu === "kids" ? <hr /> : <></>}
          </li>
          <li onClick={() => this.handleMenuClick("offers")}>
            <Link style={{ textDecoration: 'none',color: 'black' }} to='/discount-offers'><i class="fa-solid fa-tag"></i> Offers</Link>
            {this.state.menu === "offers" ? <hr /> : <></>}
          </li>
          <li>
          <div className="nav-login-cart">
          <Link to='/signup'><button>Signup</button></Link>
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
      
      </li>
        </ul>
        </div>
    );
  }
}

export default Navbar;
