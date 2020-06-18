import React from 'react'
import styled from 'styled-components'


const FooterWrapper = styled.footer`
    background-color: #4f4d50;
    display: flex;
    justify-content: center;

    p{
        font-size: .8rem;
        color: white;
    }  
`

const Footer = () => {
    return(
        <FooterWrapper>
            <p>Designed and powered by Trabeya.</p>
        </FooterWrapper>
    )
}

export default Footer