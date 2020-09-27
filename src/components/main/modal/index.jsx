import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './styles.module.scss';
import {useDispatch} from "react-redux";
import {policyConfirm} from "../../../redux/actions";

const PersonalDataModal = ({text, btn}) => {
    // const text = useSelector(state => state.app.modalText)
    const dispatch = useDispatch()

    const setToZero = () => {
        setTimeout(() => {
            dispatch(policyConfirm(false, ''))
        }, 300)
    }

    const confirmHandler = (value) => {
        if (value) {
            localStorage.setItem('pro-conf', 1)
            setToZero()
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
