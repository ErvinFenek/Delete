import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import bigStar from '../assets/rating-star.png';
import NavigBar from "../components/NavigBar";
import {fetchOneDevice} from "../http/deviceApi";
import {useParams} from "react-router-dom";

const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
        return (
        <>
            <NavigBar/>
            <Container className={"mt-1"}>
                <Row>
                    <Col md={4}>
                        <Image width={"60%"}  src={process.env.REACT_APP_API_URL + device.img}/>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{device.name}</h2>
                            <div
                                className={"d-flex align-items-center justify-content-center"}
                                style={{background: `url(${bigStar}) no-repeat center center`, width: 122, height: 116, backgroundSize: 'cover', fontSize: 50, color: "red"}}
                            >
                                666
                            </div>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Card
                            className="d-flex flex-column align-items-center justify-content-around"
                            style={{fontSize: 32, border: " 5px solid lightgray"}}
                        >
                            <h3>От: {device.price} грн.</h3>
                            <Button variant="outline-secondary">Добавить в корзину</Button>
                        </Card>
                    </Col>
                </Row>
                <Row className="d-flex flex-column m-3">
                    <h1>Характеристики</h1>
                    {device.info.map((info, index) =>
                        <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent' }}>
                            {info.title}: {info.description}
                        </Row>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default DevicePage;