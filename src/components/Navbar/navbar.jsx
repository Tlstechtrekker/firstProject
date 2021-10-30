import React from 'react';
import styled from 'styled-components';

const NavbarStyled = styled.nav`
    background: white;
    color: red;
`

const MenuItems = styled.ul`
    background: yellow;
    display: flex;
    flex-direction: row;
`

const MenuItem = styled.li`
    color: pink;
    margin-right: 10px;
`

export default function Navbar() {
    return (
        <NavbarStyled>
            <MenuItems>
                <MenuItem>Home</MenuItem>
                <MenuItem>Visit</MenuItem>
            </MenuItems>
        </NavbarStyled>
    )

}