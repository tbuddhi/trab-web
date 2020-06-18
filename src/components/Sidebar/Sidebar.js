import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { SideNavItems } from '../SideNavItems'
import UserImg from '../../images/profile-image.jpg'

const Wrapper = styled.div`
    height: 100vh;
    background-color: #51A94B;
`

const SidebarNav = styled.nav`
    display: flex;
    width: 150px;
    flex-direction: column;
    justify-content: center;
    background: #51A94B;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: calc(100vh - 54px);
    text-align: left;
    padding: 0 0 0 1rem;
    position: fixed;
    top: 54px;
    left: 0;
    transition: transform 0.4s ease-in-out;
    border-top-right-radius: 160px;
    align-items: center;
    z-index: 10;

    @media (max-width: 575.98px) {
        width: 90%;
        height: 100vh;
        top: 0;
    }
`

const ToggleButton = styled.div`
    position: fixed;
    cursor: pointer;
    left: 0;
    top: 60px;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #51A94B;
    border-radius: 0 20px 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    
    @media (max-width: 991.98px) {
        top: 85px;
    }
`

const UserProfile = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .75rem;
    text-decoration: none;
    color: white;
    margin-bottom: 1.25rem;
    margin-left: -1rem;
    transition: all .4s;

    &:hover{
        text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
    }

    span{
        margin-bottom: .15rem;     
    }

    img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        box-shadow: 0 1px 5px 0px rgba(0,0,0,.5);
        margin-bottom: .5rem;
        transition: all .4s;

        &:hover{
            box-shadow: 0 3px 10px 1px rgba(0,0,0,.5);
        }
    }
`

const MessageButton = styled.a`
    display: flex;
    justify-content: center;
    color: #51A94B;
    margin-top: 2rem;
    margin-left: -1rem;
    background-color: white;    
    padding: .5rem;
    border-radius: 50%;
    font-size: .75rem;
    transition: all .4s;

    &:hover{
        box-shadow: 0 3px 10px 1px rgba(0,0,0,.5);
    }

    span{
        display: flex;
        justify-content: center;
        border: 3px solid white;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        position: absolute;
        transform: scale(.6);
        transform-origin: top right;
        margin-top: -.75rem;
        margin-left: .5rem;
        border-radius: 50%;
        background-color: #51A94B;
        color: white;
        font-weight: bold;
    }
`

const Burger = ({ open, setOpen }) => {
    return (
        <ToggleButton open={open} onClick={() => setOpen(!open)} >
            <FontAwesomeIcon icon={faBars} />
        </ToggleButton>
    )
  }

const Sidebar = () => {
    const [open, setOpen] = React.useState(false);
    return(
        <Wrapper>
            <Burger open={open} setOpen={setOpen}/>
            <SidebarNav className open={open} onClick={() => setOpen(!open)}>
                <UserProfile href="">
                    <img src={UserImg} alt="Profile" />                    
                    <span><b>Allie Sherman</b></span>
                    <span>UI/UX Engineer</span>
                </UserProfile>
               <SideNavItems />   
                <MessageButton href="/">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>2</span>
                </MessageButton>  
            </SidebarNav>
        </Wrapper>
    )
}

export default Sidebar