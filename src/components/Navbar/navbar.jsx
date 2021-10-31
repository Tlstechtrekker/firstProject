import React from 'react';
import styled from 'styled-components';

//example of how granular you can get with styled components; don't need to get this detailed

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
                <MenuItem>Events</MenuItem>
                <MenuItem>Education</MenuItem>
                <MenuItem>Support</MenuItem>
                <MenuItem>Wallace Desert Garden</MenuItem>
                <MenuItem>More</MenuItem>
            </MenuItems>
        </NavbarStyled>
    )

}
