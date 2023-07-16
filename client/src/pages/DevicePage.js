import React from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import bigStar from '../assets/rating-star.png';
import NavigBar from "../components/NavigBar";

const DevicePage = () => {
    const device = {id: 1, name: 'Панель Apple MagSafe Silicone Case для Apple iPhone 14 Pro Max', price: 2799, rating: 5, img: 'https://content1.rozetka.com.ua/goods/images/big/285423174.jpg'};
    const description = [
        {id: 1, title: 'Изготовитель', description: 'MagSafe'},
        {id: 2, title: 'Материал', description: 'Силикон'},
        {id: 3, title: 'Совместимый бренд', description: 'Apple'},
        {id: 4, title: 'Цвет', description: 'Красный'},
        {id: 5, title: 'Особенности', description: 'Возможность использовать беспроводное ЗУ'},
        {id: 6, title: 'Гарантия', description: '14 дней'},
    ]
        return (
        <>
            <NavigBar/>
            <Container className={"mt-1"}>
                <Row>
                    <Col md={4}>
                        <Image width={"60%"}  src={device.img}/>
                    </Col>
                    <Col md={4}>
                        <Row className="d-flex flex-column align-items-center">
                            <h2>{device.name}</h2>
                            <div
                                className={"d-flex align-items-center justify-content-center"}
                                style={{background: `url(${bigStar}) no-repeat center center`, width: 122, height: 116, backgroundSize: 'cover', fontSize: 50, color: "red"}}
                            >
                                {device.rating}
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
                    {description.map((info, index) =>
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