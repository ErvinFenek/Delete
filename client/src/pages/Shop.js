import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import NavigBar from "../components/NavigBar";
import {observer} from "mobx-react-lite";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import Pages from "../components/Pages";


const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType.id, device.selectedBrand.id])

    return (
        <>
            <NavigBar/>
            <Container>
                <Row className="mt-3">
                    <Col md={3}>
                        <TypeBar/>
                    </Col>
                    <Col md={9}>
                        <BrandBar/>
                        <DeviceList/>
                        <Pages/>
                    </Col>
                </Row>
            </Container>
        </>
    );
});

export default Shop;