import React, { Component } from 'react'
import HeaderLogo from './image/header-logo.png'
import './header.scss'
import $ from 'jquery'

const HeaderHeadingStyles = {
  background: '#e2f3f7'
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.classListToggle = this.classListToggle.bind(this);
  }

  openNav() {
    $('.mobilBar').toggleClass("openNav");
    $('#nav').toggleClass('showNav');
  }

  classListToggle() {
    this.openNav();
    $('.mobilBar').toggleClass('active');
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  onNavItemClick(item) {
    this.props.scrollToElement(item);
    this.classListToggle();
  }

  render() {
    return (
      <header className="header">
        <div className="flex flex-column navbar navbar-expand-lg navbar-light p-0">
          <h2 style={HeaderHeadingStyles} className="w-100 py-3">
            <div className="p-0 m-0 w-100 navbar-brand d-flex align-content-center align-items-center">
              <span className="d-lg-inline-block d-md-none d-sm-none site-head font-weight-bold text-info pr-4"> ТЕНДЕР В</span>
              <img className="header-logo-prozorro" src={HeaderLogo} alt="PROZORRO" />
              <span className="d-lg-inline-block d-md-none d-sm-none site-head font-weight-bold text-info pl-4"> - ЭТО ПРОСТО!</span>
            </div>
          </h2>
        </div>
        <nav>
          <div>
            <svg className="ham hamRotate ham1 mobilBar" viewBox="0 0 100 100" width={80} onClick={this.classListToggle}>
              <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
              <path className="line middle" d="m 30,50 h 40" />
              <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
            </svg>
            <ul id="nav" className="">
              <li>
                <span className="list-item"
                  onClick={() => { this.onNavItemClick('about') }} >
                  Как это работает</span>
              </li>
              <li>
                <span className="scrollto list-item"
                  onClick={() => { this.onNavItemClick('features'); }} >
                  Дополнительные возможности</span>
              </li>
              <li>
                <span className="scrollto list-item"
                  onClick={() => { this.onNavItemClick('contacts'); }} >
                  Контакты</span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
