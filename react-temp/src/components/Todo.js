import {useState} from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen ?? <Modal onCancel={deleteHandler} onConfirm={deleteHandler} /> }
            {modalIsOpen ?? <Backdrop onClick={deleteHandler} />}

        </div>
    );
}

export default Todo;