import React, { Component } from "react";
import "./features.scss";
import BlueArrow from "./image/1-blue-arrow.png";
import LilRob from "./image/2-lil-rob.png";
import Person from "./image/3-person.png";
import Bag from "./image/4-bag.png";
import Doc from "./image/5-doc.png";
import People from "./image/6-people.png";

export default class Features extends Component {
	render() {
		const text1 = this.props.lang1;
		const text2 = this.props.lang2;

		return (
			<div className="text-center features-block mt-5 py-5">
				<h2 className="py-2 txt-info font-weight-bold w-75 mx-auto text-uppercase">
					{text1.block_heading}
				</h2>
				<p className="px-3">
					{text1.block_warning_part_1}{" "}
					<button className="btn p-0 m-0">
						<u>
							<b>{text1.block_warning_link}.</b>
						</u>
					</button>{" "}
					{text1.block_warning_part_2}
				</p>
				<p className="px-3 pt-2">
					<strong className="w-100 h5 txt-info font-weight-bold">
						{text1.block_subheading},
					</strong>
					<br />
					{text1.block_subheading_text}
				</p>

				<div className="how-it-works">
					<h3 className=" txt-info font-weight-bold pt-4 pb-5">
						{text2.block_heading}
					</h3>

					<div className="row m-0 px-0 py-5 features-cards-group">
						<div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
							<div className="card-image-holder">
								<img src={BlueArrow} alt="arrow" />
							</div>
							<div className="bkg-info py-2">
								<div className="px-1 h-100 py-2">
									<b className="txt-info">01.</b>
									<p className="px-2">{text2.feature_1}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
							<div className="bkg-info py-2">
								<div className="px-1 h-100 py-2">
									<b className="txt-info">02.</b>
									<p className="px-2">
										<strong>{text2.feature_2_part_1}</strong>{" "}
										{text2.feature_2_part_2}
									</p>
								</div>
							</div>
							<div className="card-image-holder">
								<img src={LilRob} alt="bot" />
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
							<div className="card-image-holder">
								<img src={Person} alt="person" />
							</div>
							<div className="bkg-info py-2">
								<div className="px-1 h-100 py-2">
									<b className="txt-info">03.</b>
									<p className="px-2">{text2.feature_3}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
							<div className="bkg-info py-2">
								<div className="px-1 h-100 py-2">
									<b className="txt-info">04.</b>
									<p className="px-2">{text2.feature_4}</p>
								</div>
							</div>
							<div className="card-image-holder">
								<img src={Bag} alt="documents" />
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
							<div className="card-image-holder">
								<img src={Doc} alt="document" />
							</div>
							<div className="bkg-info py-2">
								<div className="px-1 h-100 py-2">
									<b className="txt-info">05.</b>
									<p className="px-2">{text2.feature_5}</p>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-12 features-card text-center px-4">
							<div className="bkg-info py-2">
								<div className="px-1 h-100 py-2">
									<b className="txt-info">06.</b>
									<p className="px-2">{text2.feature_6}</p>
								</div>
							</div>
							<div className="card-image-holder">
								<img src={People} alt="comunity" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
