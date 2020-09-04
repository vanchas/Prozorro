import React, { Component } from "react";
import Phone from "./image/phone.png";
import Mail from "./image/mail.png";
import "./footer.scss";

export default class Footer extends Component {
	render() {
		return (
			<div className="footer" style={{ backgroundColor: "#02bfdd" }}>
				<div
					className="row px-lg-5 px-md-2 px-sm-1 my-0 mx-auto py-2"
					style={{ maxWidth: "1200px" }}
				>
					<div className="col-lg-3 col-md-12">
						<a href="tel:+380667816367" className=" text-white">
							<img src={Phone} className="px-2" alt="phone" />
							+38 (066) 781-63-67
						</a>
					</div>
					<div className="col-lg-3 col-md-12">
						<a href="mailto:tenderbot@gmail.com" className=" text-white">
							<img src={Mail} className="px-2" alt="e-mail" />
							tenderbot@gmail.com
						</a>
					</div>
					<div className="col-lg-6 col-md-12">
						<span className="secure text-white">
							{this.props.lang.footer_text}. 2020
						</span>
					</div>
				</div>
			</div>
		);
	}
}
