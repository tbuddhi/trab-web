import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #97abb5;

    &:hover{
        color: #545454;
    }
    
    span{
        width: 15px;
        height: 15px;
        background: ${props => props.message ? "#0597ff" : "#ff5555"};
        border-radius: 50%;
        position: absolute;
        transform: scale(.6);
        transform-origin: top right;
        margin-top: -.25rem;
        margin-left: .5rem;
        border-radius: 50%;
        font-size: 68%;
        box-shadow: 0px 0px 0px 7px  ${props => props.message ? "rgb(0, 149, 255, .15)" : "rgb(255, 85, 85, .15)"};
    }

    
`

const HeaderAlert = ({ type }) => {
    return(
        <Wrapper href="/"  message={type}>
            <FontAwesomeIcon icon={type ? faEnvelope: faBell} />
            <span></span>
        </Wrapper>
    )
}

export default HeaderAlert