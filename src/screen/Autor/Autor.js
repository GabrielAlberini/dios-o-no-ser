import { Layout } from "../../components/Layout/Layout"
import styled from "styled-components";

const Autor = () => {
    return (
        <Layout>
            <ContainerDataAutor>
                <ContainerImgAutor>
                    <ImgAutor src="https://i.ibb.co/wpWSF9b/david-gaitan.jpg" />
                </ContainerImgAutor>
                <ContainerTextAutor>
                    <TitleSection>David Gaitán</TitleSection>
                    <TextHome>Ciudad de México, 1984. Actor, director y dramaturgo. Estudia Psicología en la Universidad Iberoamericana. Licenciado en Actuación por la Escuela Nacional de Arte Teatral.</TextHome>
                    <TextHome>Ha impartido diversos cursos de dramaturgia, actuación y dirección escénica. </TextHome>
                    <TextHome>Ha <b>traducido</b> las obras Mad Forest (Caryl Churchill), Closer (Patrick Marber), Casa de muñecas (Henrik Ibsen), Sueño de una noche de verano (William Shakespeare), La raza del arca tatuada (David W.Hancock), Las tres hermanas (Anton Chejov) y Perros de reserva (Quentin Tarantino).</TextHome>
                    <TextHome>Con la <b>Compañía Nacional de Teatro de México</b> ha dirigido más de 15 montajes, entre ellos, Beisbol, Ricardo III, Escurrimiento y anticoagulantes, Simulacro de idilio, Romeos, La ceguera no es un trampolín, Antígona y Enemigo del pueblo.</TextHome>
                    <TextHome>Becario del FONCA en el programa <b>Jóvenes Creadores</b> (2015‐2016). <b>Premio</b> a mejor dirección otorgado por la Asociación de Críticos y Periodistas Teatrales de México, por Antígona (2016). Su obra ha sido incluida en las antologías Grafías contra el planisferio paginado: antología de dramaturgia mexicana actual (UNAM, 2013) y Dramaturgia mexicana contemporánea: antología (Paso de Gato, 2016).</TextHome>
                </ContainerTextAutor>
            </ContainerDataAutor>
        </Layout>
    )
}

export { Autor };

const ContainerDataAutor = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    @media screen and (max-width: 780px){
        flex-direction: column;
    }  
`
const ContainerImgAutor = styled.section`
    width: 500px;
    height: auto;
    margin: auto;
    @media screen and (max-width: 780px){
        padding-top: 4rem;
        width: 300px; 
    } 
`
const ImgAutor = styled.img`
    max-width: 100%;
    width: 100%;
    filter: grayscale(1);
`
const TitleSection = styled.h2`
    padding: 2rem;
    @media screen and (max-width: 480px){
        margin-top: 2rem;
    }  
`
const ContainerTextAutor = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    @media screen and (max-width: 480px){
        width: 100%;
    }  
`
const TextHome = styled.p`
    line-height: 1.7;
    font-size: 1.1rem;
    margin: auto; 
    margin-bottom: 2rem; 
`