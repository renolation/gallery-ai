import classes from './Modal.module.css';

function Modal(props) {
    return (
        <>
            <div className={classes.backdrop} onClick={props.onClose}>
                <dialog open className={classes.modal}>
                    {props.children}
                </dialog>
            </div>
        </>
    )
}
export default Modal;