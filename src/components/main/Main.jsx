import React, { Component } from "react";
import ReactDOM from "react-dom";
import About from "./about/About";
import Features from "./features/Features";
import Contacts from "./contacts/Contacts";
import $ from "jquery";
import Header from "../header/Header";
import Posibilities from "./posibilities/Posibilities";
import "./main.scss";

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.About = React.createRef();
		this.Features = React.createRef();
		this.Contacts = React.createRef();
		this.scrollToElement = this.scrollToElement.bind(this);
	}

	scrollToElement(ref) {
		let elementClick;
		if (ref === "about") {
			elementClick = this.About;
		} else if (ref === "features") {
			elementClick = this.Features;
		} else if (ref === "contacts") {
			elementClick = this.Contacts;
		}
		// let destination = ReactDOM.findDOMNode(elementClick.current).getBoundingClientRect().top;
		let destination = ReactDOM.findDOMNode(elementClick.current).offsetTop;
		window.scroll({
			top: destination,
			behavior: "smooth",
		});
		return false;
	}

	moveToTop() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	}

	render() {
		return (
			<div>
				<Header
					setLang={this.props.setLang}
					lang={this.props.lang.header}
					scrollToElement={this.scrollToElement}
				/>

				<span className="btn move-to-top" onClick={this.moveToTop}>
					<span>&#171;</span>
				</span>

				<main>
					<About
						lang={this.props.lang.main.block_1}
					/>

					<div id="about" ref={this.About}>
						<Features
							lang1={this.props.lang.main.block_2}
							lang2={this.props.lang.main.block_3}
						/>
					</div>

					<div id="features" ref={this.Features}>
						<Posibilities
							lang={this.props.lang.main.block_4}
						/>
					</div>

					<div id="contacts" ref={this.Contacts}>
						<Contacts
							lang={this.props.lang.main.block_5}
						/>
					</div>
				</main>
			</div>
		);
	}
}
