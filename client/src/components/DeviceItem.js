import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate();

    return (
            <Col md={3}>
                <Card
                    onClick={() => navigate(ROUTES.DEVICE + '/' + device.id)}

                    className="mt-3 p-1"
                    style={{width: 150, cursor: 'pointer'}}
                    border={"gray"}
                >
                    <Image width={"100%"} height={"100%"} src={process.env.REACT_APP_API_URL + device.img}/>
                    <div className="text-black-75 mt-1 d-flex justify-content-between align-items-center">
                        <div>
                            {device.name}
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>{device.rating}</div>
                            <Image src={star}/>
                        </div>
                    </div>
                </Card>
            </Col>
    );
};

export default DeviceItem;