import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import About from './about/About'
import Features from './features/Features'
import Contacts from './contacts/Contacts'
import $ from 'jquery'
import Header from '../header/Header'
import Posibilities from './posibilities/Posibilities'
import './main.scss'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.About = React.createRef();
    this.Features = React.createRef();
    this.Contacts = React.createRef();
    this.scrollToElement = this.scrollToElement.bind(this);
  }

  scrollToElement(ref) {
    // $(document).ready(function () {
    //   let elementClick;
    //   if (ref === 'about') {
    //     elementClick = $('#about');
    //   } else if (ref === 'features') {
    //     elementClick = $('#features');
    //   } else if (ref === 'contacts') {
    //     elementClick = $('#contacts');
    //   }
    //   let destination = $(elementClick).offset().top;
    //   $('html').animate({ scrollTop: destination }, 1000);
    //   return false;
    // });
    let elementClick;
    if (ref === 'about') {
      elementClick = this.About;
    } else if (ref === 'features') {
      elementClick = this.Features;
    } else if (ref === 'contacts') {
      elementClick = this.Contacts;
    }
    let destination = ReactDOM.findDOMNode(elementClick.current).getBoundingClientRect().top;
    window.scroll({
      top: destination,
      behavior: 'smooth'
    });
    return false;
  }

  moveToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  render() {
    return (
      <div>
        <Header
          scrollToElement={this.scrollToElement}
        />

        <span className="btn move-to-top"
          onClick={this.moveToTop} >
          <span>&#171;</span></span>

        <main>
          <About />

          <div id="about" ref={this.About}>
            <Features />
          </div>

          <div id="features" ref={this.Features}>
            <Posibilities />
          </div>

          <div id="contacts" ref={this.Contacts}>
            <Contacts />
          </div>
        </main>
      </div>
    )
  }
}
