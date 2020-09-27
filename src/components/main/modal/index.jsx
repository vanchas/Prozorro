import React from 'react';
import {Modal} from "react-bootstrap";
import styles from './styles.module.scss';
import {useDispatch} from "react-redux";
import {policyConfirm} from "../../../redux/actions";

const PersonalDataModal = ({text}) => {
    // const text = useSelector(state => state.app.modalText)
    const dispatch = useDispatch()

    const setToZero = () => {
        setTimeout(() => {
            dispatch(policyConfirm(false, ''))
        }, 300)
    }

    const confirmHandler = (e) => {
        if (e.target.checked) {
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
                <label>
                    <input type="checkbox" onChange={confirmHandler}/>
                    <span>{text}</span>
                </label>
                <span
                    className={styles.Modal_closeBtn}
                    onClick={confirmHandler}
                >
                    &#x2715;
                </span>
            </Modal.Header>
        </Modal.Dialog>
    );
}

export default PersonalDataModal;
