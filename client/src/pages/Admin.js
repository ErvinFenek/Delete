import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import NavigBar from "../components/NavigBar";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";


const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <>
            <NavigBar/>
            <Container className="d-flex flex-column">
                <Button
                    onClick={() => setTypeVisible(true)}
                    variant="outline-secondary"
                    className="mt-4 p-2">
                    Добавить тип
                </Button>
                <Button
                    onClick={() => setBrandVisible(true)}
                    variant="outline-secondary"
                    className="mt-4 p-2">
                    Добавить бренд
                </Button>
                <Button
                    onClick={() => setDeviceVisible(true)}
                    variant="outline-secondary"
                    className="mt-4 p-2">
                    Добавить устройство
                </Button>
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

            </Container>
        </>

    );
};

export default Admin;