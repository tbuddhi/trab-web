import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'

import UserArt from '../../images/user-art.jpg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const BreadCrumb = styled.div`
    display: flex;
    margin: 1rem 1.5rem 1rem 0;
    border-bottom: 1px solid #d6dde4;
    padding-bottom: .5rem;
    font-size: .8rem;

    .screen-name{
        color: #51A94B;
        margin-right: 1rem;
        font-weight: bold;
    }

    .screen-path{
        color: #9296a2;
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: white;
    border-radius: .5rem;
    width: 70%;
    align-items: center;
    margin: auto;
    margin-bottom: 2.5rem;
    margin-top: 1.5rem;

    @media (max-width: 575.98px) {
        width: 80%;
    }

    img{
        max-width: 310px;
        width: 100%;
        object-fit: contain;
    }

    h3.title{
        color: #51A94B;
        margin: 0;
        margin-bottom: .5rem;
    }
    p.para{
        margin: 0;
        width: 30%;
        text-align: center;
        color: #545454;
        font-size: .8rem;
    }
    div.input-wrapper{
        margin-top: 3rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: .8rem;

        .wrap{
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 1rem;

            span{
                position: relative;
                left: 2px;
                top: -2px; 
                color: #545454;
            }

            &.label{
                margin-top: 0;

                span{
                    color: red;
                    top: 0;
                }
            }
        }
    }

    div.shadow-box{
        padding: 1rem;
        border-left: 2px solid #51A94B;
        background-color: white;
        border-radius: .2rem;
        box-shadow: 0 8px 10px -4px rgba(0,0,0,.1);
        width: 100%;
        text-align: left;
        color: #51A94B;

        span{
            color: #545454;
            margin-right: 1rem;
        }
    }

    form{
        width: 60%;
        text-align: center;
        margin-bottom: 3rem;
    }
`

const PasswordInput = styled.input`
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #d6dde4;
    padding: .5rem 40px;
    margin-left: -22px;
    width: 100%;

    &:focus{
        outline: none;
    }
`

const AlertMessage = styled.label`
    padding: 0.5rem 20px;
    width: 100%;
    margin: 1rem 0;
    color: red;
    text-align: left;
    font-size: .7rem;
    font-weight: bold;
`
const BtnSubmit = styled.a`
    background-color: #4f4d50;
    padding: .75rem 1.5rem;
    color: white;
    font-size: .8rem;
    cursor: pointer;
    transition: all .4s;

    &:hover{
        background-color: #39383a;
    }

`

const PasswordReset = () => {
    return(
        <Wrapper>
            <BreadCrumb>
                <span className="screen-name">Inside The App</span>
                <span className="screen-path">Dashboard / Inside The App</span>
            </BreadCrumb>
            <Card>
                <img src={UserArt} alt="Profile"/>
                <h3 className="title">Inside The App</h3>
                <p className="para">Enter the new password then your password will change! Don't forget again.</p>

                <form>
                    <div className="input-wrapper">                      
                        <div className="shadow-box">
                            <span><FontAwesomeIcon icon={faUnlockAlt} /></span>
                            <label>Old Password</label>
                        </div>
                        <div className="wrap">
                            <span><FontAwesomeIcon icon={faUnlockAlt} /></span>
                            <PasswordInput type="password" placeholder="New Password" />
                        </div>
                        <div className="wrap">
                            <span><FontAwesomeIcon icon={faUnlockAlt} /></span>
                            <PasswordInput type="password" placeholder="Confirm Password" />
                        </div>
                        <div className="wrap label">
                            <span><FontAwesomeIcon icon={faExclamationTriangle} /></span>
                            <AlertMessage>Please enter valid password.</AlertMessage> 
                        </div>  
                        <BtnSubmit>Set Password</BtnSubmit>                  
                    </div>
                </form>
            </Card>
        </Wrapper>
    )
}

export default PasswordReset