import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import UserImg from '../../images/profile-image.jpg'
import Logo from '../../images/logo.png'
import HeaderAlert from '../HeaderAlert'


const TopNav = styled.div`
    display: flex;
    height: 54px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    justify-content: flex-end;
    border-bottom: 1px solid #dae8ef;
    background-color: white;

    @media (max-width: 991.98px) {
        height: auto;
        max-height: 125px;
    }

    ul{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        flex-wrap: wrap-reverse;
        padding: 0;

        li{
            list-style: none;

            a{
                padding: 0 1rem;
                display: flex;
                height: 100%;                
                align-items: center;
            }
        }
    }
`

const UserTag = styled.a`
    display: flex;
    text-decoration: none;
    color: #545454;
    font-size: .75rem;

    img{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        margin-left: .5rem;
    }  
`
const BrandLogo = styled.div`
    align-self: center;
    margin-right: auto;
    margin-left: 2rem;

    img{
        max-width: 55px;
        height: auto;
    }

    @media (max-width: 575.98px) {
        margin-left: .5rem;
        align-self: auto;
    }
`
const SearchInput = styled.div`
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;
    align-items: center;

    @media (max-width: 991.98px) {
        padding-right: 1rem;
        margin-bottom: .5rem;
    }
    
    button{
        position: relative;
        right: 24px;
        width: 18px;
        height: 18px;
        margin-right: -18px;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #51A94B;
        border: navajowhite;
        border-radius: 3px;
        color: white;
        cursor: pointer;

        &:focus{
            outline: none;
        }

        &:hover{
            background-color: #459440;
        }
    }
`

const HeaderInput = styled.input`
    padding: .3rem .5rem;
    background-color: #f8f6fe;
    border: none;
    border-radius: 4px;
    font-size: .75rem;
    color: #5b727d;

    &:focus{
        outline: none;
    }
`

const DateTime = styled.div`
    display: flex;
    padding-left: 2rem;
    padding-right: 2rem;

    @media (max-width: 991.98px) {
        margin-bottom: .5rem;
        padding-right: 1rem;
    }

    input{
        text-align: center;
    }
`

const Today = new Date().toLocaleString();

const Header = () => {
    return(
        <header>
            <TopNav>
                <BrandLogo>
                    <img src={Logo} alt="Logo"/>
                </BrandLogo>
                <ul>
                    <li>
                        <UserTag href="">
                            <span>Allie Sherman</span>
                            <img src={UserImg} alt="Profile" />
                        </UserTag>
                    </li>
                    <li>
                        <HeaderAlert />
                    </li>
                    <li>
                        <HeaderAlert type="message"/>
                    </li>
                    <li>
                        <DateTime>
                            <HeaderInput type="text" name="mytime" value={Today}  />
                        </DateTime>
                    </li>
                    <li>
                        <SearchInput>
                            <HeaderInput type="search" placeholder="Search" />
                            <button type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </SearchInput>
                    </li>
                </ul>
            </TopNav>       
        </header>
    )
}

export default Header