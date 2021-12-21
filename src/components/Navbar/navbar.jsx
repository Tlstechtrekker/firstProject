import React from 'react';
import styled from 'styled-components';

//example of how granular you can get with styled components; don't need to get this detailed

const NavbarStyled = styled.nav`
    background: #fff;
    border: 1px solid #000;
    padding: 15px 50px;
    font-size: .75rem;
    font-weight: 600;
    text-transform: uppercase;
    /* width: 60%; */
`

const MenuItems = styled.ul`
    background: #fff;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    border: 1px solid red;
    justify-content: center;
`

const MenuItem = styled.li`
    color: #060;
    background: yellow;
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
