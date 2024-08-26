function Modal(props){

    function cancelHandler(){
        console.log("Cancel");
        props.onCancel();
    }
    function confirmHandler(){
        console.log("Confirm");
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button onClick={confirmHandler}>Confirm</button>
        </div>
    );
}
export default Modal;