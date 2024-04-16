import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Count = () => {
    const [showModal, setShowModal] = useState(false);
    const [bash, setBash] = useState('')
    const [dash, setDash] = useState('')

    const handle = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        setBash(e.target.value)
    }

    const handleInput = (e) => {
        setDash(e.target.value)
    }

    return (
        <div>
            <div className='d-flex justify-center mt-5 '>
                <button onClick={handle} className="btn btn-succes mt-3 mx-5 text-transform-capitalize border">open modal</button>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={dash} onChange={handleInput} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={bash}  onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" value={bash} onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1 className='mx-5'>email: {dash}</h1>
            <h1 className='mx-5'>password: {bash}</h1>
        </div>
    );
};

export default Count;
