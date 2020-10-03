import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './styles.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {policyConfirm, submitRequest} from "../../../redux/actions";
import {SUBMIT_REQUEST_TYPES} from "../../../constants";

const PersonalDataModal = ({text, btn}) => {
    const form = useSelector(state => state.app.policyConfirm)
    const dispatch = useDispatch()

    const setToZero = () => {
        setTimeout(() => {
            dispatch(policyConfirm(false, ''))
        }, 300)
    }

    const confirmHandler = async (value) => {
        if (value) {
            await localStorage.setItem('pro-conf', 1)
            await setToZero()
            if (form === SUBMIT_REQUEST_TYPES.ABOUT) {
                dispatch(submitRequest(SUBMIT_REQUEST_TYPES.ABOUT))
            } else if (form === SUBMIT_REQUEST_TYPES.CONTACTS) {
                dispatch(submitRequest(SUBMIT_REQUEST_TYPES.CONTACTS))
            } else if (form === SUBMIT_REQUEST_TYPES.POSSIBILITIES) {
                dispatch(submitRequest(SUBMIT_REQUEST_TYPES.POSSIBILITIES))
            }
        } else {
            localStorage.setItem('pro-conf', 0)
            setToZero()
        }
    }

    return (
        <Modal.Dialog className={styles.Modal_root}>
            <Modal.Header className={styles.Modal_header}>
                <span>{text}</span>
                <span
                    className={'font-weight-bold text-secondary ml-4 h4 mb-0'}
                    onClick={() => confirmHandler(false)}
                >
                    &#x2715;
                </span>
            </Modal.Header>
            <Modal.Footer className={styles.Modal_footer}>
                <span
                    className={`btn btn-info`}
                    onClick={() => confirmHandler(true)}
                >
                    {btn}
                </span>
            </Modal.Footer>
        </Modal.Dialog>
    );
}

export default PersonalDataModal;
