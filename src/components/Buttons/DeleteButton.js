import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default props => {
    const { title, body, confirmBtnText, cancelBtnText, deleteItem } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const remove = () => {
        setModal(!modal);
        deleteItem();
    };

    return (
        <>
            <Button type="button" className="btn btn-default btn-sm" onClick={toggle}>Delete</Button>
            <Modal isOpen={modal} toggle={toggle} style={{top: '33%'}}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    {body}
                </ModalBody>
                <ModalFooter>
                    <Button className="btn btn-success btn-sm" onClick={remove}>{confirmBtnText}</Button>{' '}
                    <Button className="btn btn-danger btn-sm" onClick={toggle}>{cancelBtnText}</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};