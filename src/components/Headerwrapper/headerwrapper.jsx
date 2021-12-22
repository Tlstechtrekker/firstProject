import React from "react";
import styled from "styled-components";

import Navbar from "../Navbar/navbar";


const HeaderStyled = styled.div`
    
    border: 2px solid pink;
`
export default function Headerwrapper () {
    return (
        <HeaderStyled>
            
            <Navbar />
            
        </HeaderStyled>
    )
}