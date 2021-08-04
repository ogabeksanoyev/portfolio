import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import React from 'react'
import OstenLogo from '../../images/osten.svg'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Header = () => {
    return (
       <div className="header_style">
         <div className="container d-flex justify-content-between align-items-center">
              <a href="#" className="header_logo">
                  <img src={OstenLogo} alt="" className="logo" />
              </a>
              <ul className="header_ul">
                <li> <NavLink className="link_item" activeClassName="active-class"  to="/">ГЛАВНАЯ</NavLink> </li>
                <li> <NavLink className="link_item" activeClassName="active-class"  to="/ОНАС">О НАС</NavLink> </li>
                <li> <NavLink className="link_item" activeClassName="active-class" to="/ПРОИЗВОДСТВО">ПРОИЗВОДСТВО</NavLink> </li>
                <li> <NavLink className="link_item" activeClassName="active-class" to="/УСЛУГИ">УСЛУГИ</NavLink> </li>
                <li> <NavLink className="link_item" activeClassName="active-class" to="/ПРОДУКЦИЯ">ПРОДУКЦИЯ</NavLink> </li>
                <li> <NavLink className="link_item" activeClassName="active-class" to="/КОНСТРУКТОР">КОНСТРУКТОР</NavLink> </li>
                <li> <NavLink className="link_item" activeClassName="active-class" to="/НОВОСТИ">НОВОСТИ</NavLink> </li>
                <li> <NavLink className="link_item" activeClassName="active-class" to="/КОНТАКТЫ">КОНТАКТЫ</NavLink> </li>
              </ul>
              <div className="header_btn">
                <div className="line_1"></div>
                <div className="line_2"></div>
                <div className="line_3"></div>
              </div>
         </div>
       </div>
    )
}



export default Header
