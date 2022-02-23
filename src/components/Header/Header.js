import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuHam, setMenuHam] = useState(false)

    const handleClick = () => {
        setMenuHam(!menuHam)
    }

    return (
        <HeaderContainer>
            <NavigationBar>
                <CloseNavContainer className={menuHam && 'menuHamburguesaBg'}>
                    <BottonCloseNavContainer>
                        <IconMenu icon={faBars} onClick={handleClick} />
                    </BottonCloseNavContainer>
                    <List className={menuHam && 'menuHamburguesa'}>
                        <Link style={{textDecoration:'none'}} to={'/'}>
                            <ItemList>Sinopsis</ItemList>
                        </Link>
                        <Link style={{textDecoration:'none'}} to={'/obra'}>
                            <ItemList>Obra</ItemList>
                        </Link>
                        <Link style={{textDecoration:'none'}} to={'/espectaculo'}>
                            <ItemList>Espectáculo</ItemList>
                        </Link>
                        <Link style={{textDecoration:'none'}} to={'/autor'}>
                            <ItemList>Autor</ItemList>
                        </Link>
                        <a style={{textDecoration:'none'}} href="https://publico.alternativateatral.com/entradas76333-dios-o-no-ser?o=14">
                            <ItemList>Entradas</ItemList>
                        </a>
                        <ContainerIcons>
                            <a href="https://www.facebook.com/diosonosersf">
                                <SocialIconHeader icon={faFacebook} />
                            </a>
                            {/* <a href="+5493424074506">
                                <SocialIconHeader icon={faWhatsapp} />
                            </a> */}
                            <a href="https://www.instagram.com/dons.sf/">
                                <SocialIconHeader icon={faInstagram} />
                            </a>                            
                        </ContainerIcons>
                    </List>
                </CloseNavContainer>
            </NavigationBar>
        </HeaderContainer>
    )
}

export { Header };

const HeaderContainer = styled.header`
    width: 100%;
    padding: 2rem 0;
    border-bottom: 2px solid rgb(133, 133, 133, .2);
    @media screen and (max-width: 480px){
        padding: 0;  
    } 
`
const CloseNavContainer = styled.section`
    width: 100%;
    @media screen and (max-width: 480px){
        position: absolute;
        top: 0;
        left: 0;
        position: fixed;
        background-color: black;
        display: block;
    } 
`
const BottonCloseNavContainer = styled.div`
    display: none;
    @media screen and (max-width: 480px){
        position: fixed;
        display: block;
    } 
`

const NavigationBar =styled.nav`
    width: 60%;    
    height: 100%;
    margin: auto;
`
const List = styled.ul`
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    @media screen and (max-width: 480px){
        display: none;
        opacity: 1;
        pointer-events: auto;
        margin-top: 3rem;
        padding-bottom: 2rem;
        transition: .3s ease;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-bottom: 2px solid rgb(133, 133, 133, .4);
    } 
`
const ItemList = styled.li`
    width: auto;
    list-style: none;
    cursor: pointer;
    padding: 1rem;
    margin: 0 .2rem;
    font-size: 1.2rem;
    transition: .4s ease;
    text-align: center;
    border-radius: 2px;
    &:hover{
        background: #23060c;
    }
`
const ContainerIcons = styled.article`
    display: flex;
    margin-left: 1.5rem;
    @media screen and (max-width: 480px){
        margin-top: .6rem;
        margin-left: 0;
    }
`
const SocialIconHeader =styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    padding: 1rem;
    cursor: pointer;
    transition: .4s ease;
    margin: 0 .3rem;
    &:hover {
        background: #23060c;
    }
    @media screen and (max-width: 480px){
        margin: 0 1rem; 
    }
`
const IconMenu = styled(FontAwesomeIcon)`
    font-size: 1.5rem;
    cursor: pointer;
    transition: .2s ease;
    &:hover {
        background: #23060c;
    }
    @media screen and (max-width: 480px){
        margin: 1rem; 
    }
`


