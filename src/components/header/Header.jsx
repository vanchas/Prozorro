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
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    $('.navbar-collapse').toggleClass('show');
  }

  render() {
    $(document).on('click', e => {
      if (!$(e.target).hasClass('navbar-toggler-icon')) {
        $('.navbar-collapse').removeClass('show');
      }
    });

    return (
      <header>
        <nav className="flex flex-column navbar navbar-expand-lg navbar-light p-0">
          <h2 style={HeaderHeadingStyles} className="w-100 py-2">
            <button className="btn p-0 m-0 w-100 navbar-brand d-flex justify-content-center justify-items-center align-content-center align-items-center">
              <span className="d-lg-inline-block d-md-none d-sm-none h1 font-weight-bold text-info pr-3"> ТЕНДЕР В</span>
              <img className="header-logo-prozorro" src={HeaderLogo} alt="PROZORRO" />
              <span className="d-lg-inline-block d-md-none d-sm-none h1 font-weight-bold text-info pl-3"> - ЭТО ПРОСТО!</span>
            </button>
          </h2>
          <button type="button"
            onClick={this.toggleNavbar}
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
            <ul className="info-navbar-list navbar-nav border-bottom border-light mx-auto my-2">
              <li className="nav-item px-3">
                <span
                  onClick={() => { this.props.scrollToElement('about'); }}
                >Как это работает</span>
              </li>
              <li className="nav-item px-3">
                <span
                  onClick={() => { this.props.scrollToElement('features'); }}
                >Дополнительные возможности</span>
              </li>
              <li className="nav-item px-3">
                <span
                  onClick={() => { this.props.scrollToElement('contacts'); }}
                >Контакты</span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
