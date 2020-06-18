import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faFileInvoice, faDesktop, faTabletAlt, faTh } from '@fortawesome/free-solid-svg-icons'

const NavLinks = [
    {id:1, title:"Home", icon: faHome, url:"/"},
    {id:2, title:"Apps", icon: faTh, url:"/"},
    {id:3, title:"Profile", icon: faUser, url:"/"},
    {id:4, title:"Reports", icon: faFileInvoice, url:"/"},
    {id:4, title:"Inside The App", icon: faDesktop, url:"/"},
    {id:4, title:"Natural Language Query", icon: faTabletAlt, url:"/"},
]

const NavItemList = styled.nav`
    padding-left: 0;

    li{
        list-style: none;

        a{
            text-decoration: none;
            display: flex;
            align-items: center;
            border-radius: 20px 0 0 20px;
            padding: 8px;
            font-size: .9rem;
            transition: all .4s;
            color: white;

            &:hover{                    
                background: white;
                box-shadow: 0 6px 10px 0px rgba(0,0,0,.5);
                color: #51A94B;
            }

            i{
                width: 18px;
            }

            span{
                margin-left: .5rem;
                font-size: .7rem;
            }
        }
        
    }
`

export const SideNavItems = () => {
return(
    <NavItemList>
        { NavLinks && NavLinks.map( link => 
            <li key={link.id}>
                <a href={link.url} >
                    <i><FontAwesomeIcon icon={link.icon} /></i>
                    <span>{link.title}</span>
                </a>
            </li> 
        )}
              
    </NavItemList>   
)
}