import React, {useContext} from 'react';
import {Context} from "../index";
import {ROUTES} from "../utils/consts";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom';

const NavigBar = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context);

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.setItem('token', '')
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href={ROUTES.HOME}>FriendsShop</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant="dark" onClick={() => navigate(ROUTES.ADMIN)}>Админ панель</Button>
                        <Button variant="dark" className="ml-2" onClick={logOut}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant="dark" onClick={() => navigate(ROUTES.LOGIN)}>Авторизация</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
});

export default NavigBar;