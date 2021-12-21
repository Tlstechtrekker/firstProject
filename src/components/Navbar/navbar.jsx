import React from 'react';
import styled from 'styled-components';

//example of how granular you can get with styled components; don't need to get this detailed

const NavbarStyled = styled.nav`
    background: yellow;
    color: pink;
    /* width: 60%; */
`

const MenuItems = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
`

const MenuItem = styled.li`
    margin-right: 25px;
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
