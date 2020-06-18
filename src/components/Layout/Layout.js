import React from 'react'
import styled from 'styled-components'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer/Footer'
// import { Sidebar2 } from '../Sidebar2'

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ContentWrapper = styled.div`
    display: flex;
    margin-top: 54px;

    main{
        flex: 1;
        padding-left: 180px;
        background-color: #efefef;

        @media (max-width: 767.98px) {
            padding-left: 50px;
        }
    }
`

const Layout = ({children}) => {
    // const [open, setOpen] = React.useState(false);
    return(
        <LayoutWrapper>
            <Header />
            {/* <Sidebar2 /> */}
            <ContentWrapper>
                <Sidebar />                
                <main>{children}</main>
            </ContentWrapper>  
            <Footer />        
        </LayoutWrapper>
    )
}

export default Layout