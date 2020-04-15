import React, { Component } from 'react'
// import { Switch, Route } from 'react-router-dom'
import About from './about/About'
import Features from './features/Features'
import Contacts from './contacts/Contacts'
import $ from 'jquery'
import Header from '../header/Header'
import Posibilities from './posibilities/Posibilities'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.scrollToElement = this.scrollToElement.bind(this);
  }

  scrollToElement(ref) {
    $(document).ready(function () {
      let elementClick;
      if (ref === 'about') {
        elementClick = $('#about');
      } else if (ref === 'features') {
        elementClick = $('#features');
      } else if (ref === 'contacts') {
        elementClick = $('#contacts');
      }
      let destination = $(elementClick).offset().top;
      $('html').animate({ scrollTop: destination }, 1000);
      return false;
    });
  }

  render() {
    return (
      <div>
        <Header
          scrollToElement={this.scrollToElement}
        />

        <main>
          <About />

          <div id="about">
            <Features />
          </div>

          <div id="features">
            <Posibilities />
          </div>

          <div id="contacts">
            <Contacts />
          </div>
        </main>
      </div>
    )
  }
}
