import React from 'react';
import styled from 'styled-components';

import FooterFacebookSrc from './images/facebook-circle.png';
import FooterInstagramSrc from './images/instagram-circle.png';
import FooterTwitterSrc from './images/twitter-circle.png';
import FooterEmailSrc from './images/email-black-circle.png';

const FooterSocialStyled = styled.div`
/* social media styles go here */
    background: rgba(204, 204, 255, .3);
    text-align: center;


    & img {
        max-width: 40px;
        max-height: 40px;
        margin: 1rem;
    }
`
export default function Footersocial () {
    return (
        <FooterSocialStyled>
            {/* <img src={FooterTwitterSrc} alt="Twitter logo" />
            <img src={FooterFacebookSrc} alt="Facebook logo" />
            <img src={FooterEmailSrc} alt="Email logo" />
            <img src={FooterInstagramSrc} alt="Instagram logo" /> */}

            {/* troubleshoot the above images-use header code to see if it works */}

            <a href="https://www.twitter.com/">
                <img src={FooterTwitterSrc} alt="Twitter" />
            </a>

            {/* facebook icon link */}
            <a href="https://www.facebook.com/">
                <img src={FooterFacebookSrc} alt="Facebook" />
            </a>

            {/* email icon link */}
            <a href="#">
                <img src={FooterEmailSrc} alt="email" />
            </a>

            {/* instagram icon link */}
            <a href="https://www.instagram.com/">
                <img src={FooterInstagramSrc} alt="Instagram" />
            </a>

        </FooterSocialStyled>
    )
}
