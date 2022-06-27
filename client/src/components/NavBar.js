import React, {useContext} from 'react';
import {Context} from "../index";
import {Nav, Navbar, Container, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context)
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>КупиДевайс</NavLink>

                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"}>Админ панель</Button>
                            <Button variant={"outline-light"} className="mx-2" onClick={() => user.setIsAuth(false)}>Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    );
});

export default NavBar;