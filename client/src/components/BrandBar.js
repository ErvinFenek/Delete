import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MydModalWithGrid = observer ((props) => {
    const {device} = useContext(Context);

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    All Brands
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
                    <Row
                        xs={'auto'} md={4} lg={4}
                        className="d=flex">
                        {device.brands.map(brand =>
                            <Card
                                style={{cursor: "pointer"}}
                                onClick={() => device.setSelectedBrand(brand)}
                                className="p-3"
                                key={brand.id}
                                border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                            >
                                {brand.name}
                            </Card>
                        )}
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="outline-secondary"
                    onClick={props.onHide}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

const BrandBar =() => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
                All Brands
            </Button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}
 export default BrandBar;