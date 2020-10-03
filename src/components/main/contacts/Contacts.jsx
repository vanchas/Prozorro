import React, {Component} from "react";
import "./contacts.scss";
import {policyConfirm} from "../../../redux/actions";
import {connect} from "react-redux";
import {SUBMIT_REQUEST_TYPES} from "../../../constants";

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            name: "",
            warnMess: "",
            successMess: "",
        };
        this.phoneInput = this.phoneInput.bind(this);
        this.nameInput = this.nameInput.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    phoneInput(phone) {
        this.setState({phone});
    }

    nameInput(name) {
        this.setState({name: name.trim()});
    }

    async sendData(e) {
        if (e) e.preventDefault();

        if (this.state.phone.toString().length && this.state.name.length) {
            if (JSON.parse(localStorage.getItem('pro-conf'))) {

                await fetch("/3.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify({
                        phone: this.state.phone,
                        name: this.state.name,
                    }),
                })
                    .then(() => {
                        this.setState({
                            phone: "",
                            name: "",
                            successMess: this.props.lang.thanks,
                        });
                    })
                    .then(() => {
                        setTimeout(() => {
                            this.setState({successMess: ""});
                        }, 3000);
                    })
                    .catch((err) => console.error("Error:", err));
            } else {
                this.props.policyConfirmAction(SUBMIT_REQUEST_TYPES.CONTACTS, '')
            }
        } else {
            this.setState({warnMess: this.props.lang.warning});
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.submitRequest === SUBMIT_REQUEST_TYPES.CONTACTS)  {
            void this.sendData()
            this.setState({warnMess: ''})
        }
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
            <div className="py-4 contacts-block">
                <div className="contacts-block-inner">
                    <h2 className="pt-3 pb-2 px-3 text-center">
                        {text.heading_1} <br/> {text.heading_2}
                    </h2>
                    <p className="txt-info text-center pb-2">{text.subheading}</p>
                    <form
                        onSubmit={(e) => this.sendData(e)}
                        className="form-group row pt-5 mx-0 mb-2 px-lg-5 px-md-2 px-sm-0"
                    >
                        <label className=" col-lg-4 col-md-4 col-sm-12">
                            <input
                                type="text"
                                onChange={(e) => {
                                    this.nameInput(e.target.value);
                                    this.setState({warnMess: ""});
                                }}
                                value={this.state.name}
                                placeholder={text.input_name_placeholder}
                                className="form-control mb-3 name-input"
                            />
                        </label>
                        <label className="col-lg-4 col-md-4 col-sm-12">
                            <input
                                type="number"
                                onChange={(e) => {
                                    this.phoneInput(e.target.value);
                                    this.setState({warnMess: ""});
                                }}
                                value={this.state.phone}
                                placeholder={text.input_phone_placeholder}
                                className="form-control mb-3 phone-input"
                            />
                        </label>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            {this.state.warnMess.length || this.state.successMess.length ? (
                                message
                            ) : (
                                <input
                                    type="submit"
                                    className="text-white mb-3 px-5 py-2 d-block btn send-btn"
                                    value={text.input_submit}
                                />
                            )}
                        </div>
                    </form>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
