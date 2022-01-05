import {Badge, Button} from 'react-bootstrap'
import React, {useState} from "react"
import { Modal } from 'react-bootstrap';

// Library of available gpu list - will feature hover over modal with additional details
export const GraphicsCard = ({gpu}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (gpu.brand === "Nvidia") {
           
        return ( 
            <>
            <Button onClick={handleShow} variant="dark" className="card-btn">
            {gpu.name}<Badge className="card-brand" bg="success">{gpu.brand}</Badge>
            </Button>

            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                <Modal.Title className="modal-title">{gpu.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="modal-specs-headings">
                        <h5>Brand</h5>
                        <h5>Cost</h5>
                        <h5>Hashrate</h5>
                        <h5>Power</h5>
                    </div>
                    <div className="modal-specs">
                        <Badge className="modal-brand" bg="success">{gpu.brand}</Badge>
                        <Badge className="modal-cost" bg="secondary">${gpu.cost}</Badge>
                        <Badge className="modal-hashrate" bg="info">{gpu.hashrate} MH/s</Badge>
                        <Badge className="modal-power-consumption" bg="warning">{gpu.power_consumption} W</Badge>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    } else {
        return (
            <>
            <Button onClick={handleShow} variant="dark" className="card-btn">
            {gpu.name}<Badge className="card-brand" bg="danger">{gpu.brand}</Badge>
            </Button> 
            
            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                <Modal.Title className="modal-title">{gpu.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="modal-specs-headings">
                        <h5>Brand</h5>
                        <h5>Cost</h5>
                        <h5>Hashrate</h5>
                        <h5>Power</h5>
                    </div>
                    <div className="modal-specs">
                        <Badge className="modal-brand" bg="danger">{gpu.brand}</Badge>
                        <Badge className="modal-cost" bg="secondary">${gpu.cost}</Badge>
                        <Badge className="modal-hashrate" bg="info">{gpu.hashrate} MH/s</Badge>
                        <Badge className="modal-power-consumption" bg="warning">{gpu.power_consumption} W</Badge>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </> 
        )
    }
}

export const GraphicsCardOption = ({gpu}) => {
    
    return (
        <option value={gpu.id}>{gpu.name}</option>
    )
}