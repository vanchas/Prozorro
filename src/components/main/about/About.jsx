import React, {Component} from "react";
import "./about.scss";
import BigRob from "./image/big-rob.png";
import DocSign from "./image/doc-sign.png";
import MolotSign from "./image/molot-sign.png";
import ScalesSign from "./image/scales-sign.png";
import {connect} from "react-redux";
import {policyConfirm, submitRequest} from "../../../redux/actions";
import {SUBMIT_REQUEST_TYPES} from "../../../constants";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            email: "",
            link: "",
            todayNum: 10,
            monthNum: 500,
            bestNum: 2.5,
            warnMess: "",
            successMess: "",
        };
        this.phoneInput = this.phoneInput.bind(this);
        this.linkInput = this.linkInput.bind(this);
        this.emailInput = this.emailInput.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    phoneInput(phone) {
        this.setState({phone});
    }

    emailInput(email) {
        this.setState({email: email.trim()});
    }

    linkInput(link) {
        this.setState({link: link.trim()});
    }

    sendData(e) {
        if (e) e.preventDefault();

        if (
            this.state.phone.toString().length &&
            this.state.email.length &&
            this.state.link.length
        ) {
            if (JSON.parse(localStorage.getItem('pro-conf'))) {

                this.setState({warnMess: ""});
                fetch("/1.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify({
                        phone: this.state.phone,
                        email: this.state.email,
                        link: this.state.link,
                    }),
                })
                    .then(() => {
                        this.setState({
                            phone: "",
                            email: "",
                            link: "",
                            successMess: this.props.lang.thanks,
                        });
                    })
                    .then(() => {
                        setTimeout(() => {
                            this.setState({successMess: ""});
                        }, 3000);
                    });
            } else {
                this.props.policyConfirmAction(SUBMIT_REQUEST_TYPES.ABOUT, '')
            }
        } else {
            this.setState({
                warnMess: this.props.lang.warning,
            });
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.submitRequest === SUBMIT_REQUEST_TYPES.ABOUT)  {
          this.sendData()
            this.setState({warnMess: ''})
        }
    }

    async componentDidMount() {
        return await fetch("/4.php", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    todayNum: data.todayNum,
                    monthNum: data.monthNum,
                    bestNum: data.bestNum,
                });
            })
            .catch((err) => console.log("Error:", err));
    }

    render() {
        const message = this.state.warnMess.length ? (
            <div className="alert alert-danger h6 py-2" role="alert">
                {this.state.warnMess}
            </div>
        ) : (
            <div className="alert alert-success h6 py-2" role="alert">
                {this.state.successMess}
            </div>
        );

        const text = this.props.lang;

        return (
            <div className="about-wrapper position-relative">
                <div className="robot-holder">
                    <img className="" src={BigRob} alt="bot"/>
                    <div className="img-border"></div>
                </div>

                <header className="row m-0 p-0 about-header">
                    <div className="px-lg-3 px-md-0 col-lg-8 col-md-12 header-description">
                        <div className="info-header-block">
                            <div className="bkg-info text-white text-center about-header-description-top pt-2">
                                <h1 className="font-weight-bold">{text.board_heading}</h1>
                                <p className="">{text.board_subheading}</p>
                            </div>
                            <div className="about-header-description-top-inner font-weight-bolder pt-2 pb-3">
                                <div className="about-header-description-top-inner-item mb-1">
                                    <div className="inner-content">
                                        <div className="img-holder pr-1">
                                            <div className="img">
                                                <img src={MolotSign} alt="." className="molot"/>
                                            </div>
                                        </div>
                                        <p className="header-text-item text-uppercase">
                                            {text.board_feature_1}
                                        </p>
                                    </div>
                                </div>
                                <div className="about-header-description-top-inner-item">
                                    <div className="inner-content">
                                        <div className="img-holder pr-2">
                                            <div className="pl-1 img">
                                                <img className="pt-1" src={DocSign} alt="."/>
                                            </div>
                                        </div>
                                        <p className="header-text-item text-uppercase">
                                            {text.board_feature_2}
                                        </p>
                                    </div>
                                </div>
                                <div className="about-header-description-top-inner-item">
                                    <div className="inner-content">
                                        <div className="img-holder pr-1">
                                            <div className="pl-1 img">
                                                <img src={ScalesSign} alt="."/>
                                            </div>
                                        </div>
                                        <p className="header-text-item text-uppercase">
                                            {text.board_feature_3}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="faster bkg-info text-white text-center">
                                <p className="w-100 p-0 m-0 font-weight-bold">
                                    {text.board_footer}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 text-dark tender-form ">
                        <h2 className="text-center w-100 font-weight-bold m-0 py-3">
                            {text.form_heading}
                        </h2>
                        <p className="text-center font-weight-normal small">
                            {text.form_subheading}
                        </p>
                        <form className="form-group d-flex flex-column justify-items-center">
                            <input
                                type="number"
                                onChange={(e) => {
                                    this.phoneInput(e.target.value);
                                    this.setState({warnMess: ""});
                                }}
                                className="form-control rounded border border-light"
                                value={this.state.phone}
                                placeholder={text.phone_input_placeholder}
                            />
                            <input
                                type="email"
                                onChange={(e) => {
                                    this.emailInput(e.target.value);
                                    this.setState({warnMess: ""});
                                }}
                                value={this.state.email}
                                className="form-control rounded border border-light"
                                placeholder="E-mail"
                            />
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.linkInput(e.target.value);
                                    this.setState({warnMess: ""});
                                }}
                                value={this.state.link}
                                className="form-control rounded border border-light"
                                placeholder={text.link_input_placeholder}
                            />
                            <div className="">
                                {this.state.warnMess.length || this.state.successMess.length ? (
                                    message
                                ) : (
                                    <button
                                        className="mx-auto d-block btn text-white bkg-info"
                                        onClick={(e) => this.sendData(e)}
                                    >
                                        {text.submit_btn}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-6 col-md-0 "></div>

                    <div className="big-num-block col-lg-6 col-md-12 row px-0 py-3 m-0 w-100">
                        <div className="big-num-item col-lg-4 col-md-12">
							<span className="txt-info big-num font-weight-bold">
								{this.state.todayNum}
							</span>
                            <span className="num-disc">{text.tenders_today}</span>
                        </div>
                        <div className="big-num-item col-lg-4 col-md-12">
							<span className="txt-info big-num font-weight-bold">
								{this.state.monthNum}
							</span>
                            <span className="num-disc">{text.tenders_month}</span>
                        </div>
                        <div className="big-num-item block-wrap col-lg-4 col-md-12 pr-0">
							<span className="txt-info big-num font-weight-bold">
								<span>{this.state.bestNum}</span>
								<small className="min">{text.tenders_best_min}</small>
							</span>
                            <span className="num-disc">{text.tenders_best}</span>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    policyConfirm: state.app.policyConfirm,
    submitRequest: state.app.submitRequest
})

const mapDispatchToProps = {
    policyConfirmAction: policyConfirm,
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
