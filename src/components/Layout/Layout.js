import { Banner } from '../Banner/Banner';
import { CountDown } from '../CountDown/CountDown';
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

const Layout = ({children}) => {
    return (
        <>
        <Banner>
            {/* <CountDown /> */}
        </Banner>
        <Header />
        {children}
        <Footer />
      </>
    )
}

export { Layout };