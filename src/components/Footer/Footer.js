import styled from 'styled-components';

const Footer = () => {
    return (
        <ContainerFooter>
            <p>Sitio creado por <a href="https://www.linkedin.com/in/gabriel-alberini/" target="_blank" rel='noreferrer'>Gabriel Alberini</a></p>
        </ContainerFooter>
    )
}

export { Footer };

const ContainerFooter = styled.section`
    width: 100%;
    height: 100px;
    font-size: 15px;
    color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 2px solid rgb(133, 133, 133, .3);
`