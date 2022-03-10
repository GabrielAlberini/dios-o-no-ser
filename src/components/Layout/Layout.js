import { Banner } from '../Banner/Banner';
import { CountDown } from '../CountDown/CountDown';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styled from "styled-components";


const Layout = ({children}) => {
    return (
        <>
        <Banner>
        <LogoInBanner src="./dios-banner.png" alt="" />
        {/* <CountDown /> */}
        </Banner>
        <Header />
        {children}
        <Footer />
      </>
    )
}

const LogoInBanner = styled.img`
  width: 400px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  @media screen and (max-width: 480px){
    width: 300px;
  } 
`

export { Layout };