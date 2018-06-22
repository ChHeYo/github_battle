import React from "react";
import Modal from "react-modal";

class OptionalModal extends React.Component {
    render(){
        return (
            <Modal
                isOpen={true}
                contentLabel="Selected Option"
            >
                <h2>Modal</h2>
            </Modal>
        )
    }
}

export default OptionalModal;