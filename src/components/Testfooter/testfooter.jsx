import React from 'react';
import styled from 'styled-components';

import img from './images/Skyline.jpg';



const TestfooterStyled = styled.div`
    border: 2px solid orange;
    background-image: url(${img});
    width: 80%auto;
    /* width: 1920px;*/
    height: 583px;
    /* size: cover; */
    color: #900;
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
`;

const ColWrapperStyled = styled.div`
    display: flex;
    background: rgba(255, 204, 0, .4);
    margin-top: 0;
`

const LeftColumnStyled = styled.div`
    border: 2px solid #99008b;
    padding: 1rem;
    margin: 20px;
    background: rgba(241, 121, 201, 0.4);
    display: flex;
    flex-direction: column;
`;

const CenterColumnStyled = styled.div`
    border: 2px solid blue;
    padding: 1rem;
    margin: 20px;
    background: rgba(80, 233, 220, 0.4);
`;

const RightColumnStyled = styled.div`
    border: 2px solid #147e10;
    padding: 1rem;
    margin: 20px;
    background: rgb(131, 145, 13, 0.4);
`;

export default function Testfooter() {
    return (
        <TestfooterStyled>
            {/* <p>This is from inside testfooter.jsx. Footer content goes in here and will show over the background image of the desert. The size of the component is using size:cover</p> */}

                
                        {/* Left column<br />
                        Contact info */}
                        
                    
                       {/*  Center column<br />
                        Main menu - vertical */}
                        
                   
                        {/* Right column<br />
                        Newsletter signup form */}
                        
                    

        </TestfooterStyled>
    )
}