import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceApi";
import {observer} from "mobx-react-lite";


const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !==number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {... i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить девайс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mb-2">
                        <Dropdown.Toggle variant="outline-secondary">{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mb-2">
                        <Dropdown.Toggle variant="outline-secondary">{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-2 "
                        placeholder={"Введите название устройства"}
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-2"
                        placeholder={"Введите цену устройства"}
                    />
                    <Form.Control
                        className="mt-2"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button className="mb-2" variant="outline-secondary" onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mb-2" key={i.number}>
                            <Col md={4} >
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4} >
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4} >
                               <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>Удалить</Button>
                            </Col>

                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant="outline-danger" >Закрыть</Button>
                <Button onClick={addDevice} variant="outline-success" >Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;