import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [menuHam, setMenuHam] = useState(true)

    const handleClick = () => {
        setMenuHam(!menuHam)
    }

    return (
        <HeaderContainer>
            <NavigationBar>
                <CloseNavContainer className={menuHam && 'menuHamburguesaBg'}>
                    <BottonCloseNavContainer>
                        <BottonCloseNav onClick={handleClick}> x</BottonCloseNav>
                    </BottonCloseNavContainer>
                    <List className={menuHam && 'menuHamburguesa'}>
                        <Link style={{textDecoration:'none'}} to={'/'}>
                            <ItemList>Sinopsis</ItemList>
                        </Link>
                        <Link style={{textDecoration:'none'}} to={'/obra'}>
                            <ItemList>La obra</ItemList>
                        </Link>
                        <Link style={{textDecoration:'none'}} to={'/espectaculo'}>
                            <ItemList>El espectáculo</ItemList>
                        </Link>
                        <Link style={{textDecoration:'none'}} to={'/autor'}>
                            <ItemList>Autor</ItemList>
                        </Link>
                        <a style={{textDecoration:'none'}} href="https://wa.me/+5493424074506">
                            <ItemList>Contacto</ItemList>
                        </a>
                        <a style={{textDecoration:'none'}} href="https://publico.alternativateatral.com/entradas76333-dios-o-no-ser?o=14">
                            <ItemList>Comprar entradas</ItemList>
                        </a>
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
`
const CloseNavContainer = styled.section`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    position: fixed;
    background-color: black;
    @media screen and (max-width: 480px){
        position: fixed;
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
const BottonCloseNav = styled.button`
    margin: .5rem;
    width: 40px;
    height: 30px; 
    color: black;
    font-size: 1rem;
    float: right;
    border: none;
    outline: none;
    font-size: 1.6rem;
    background: #520a19; 
    color: white;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New';
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        background: white; 
        color: black;
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
        opacity: 1;
        pointer-events: auto;
        margin-top: 3rem;
        padding-bottom: 2rem;
        transition: .3s ease;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-bottom: 2px solid white;
    } 
`
const ItemList = styled.li`
    width: 500px;
    list-style: none;
    cursor: pointer;
    padding: 1rem;
    font-size: 1.2rem;
    margin: 0 .2rem;
    transition: .4s ease;
    text-align: center;
    border-radius: 2px;
    &:hover{
        background: #23060c;
    }
`


