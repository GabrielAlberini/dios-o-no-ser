import styled from "styled-components";
import { Layout } from "../../components/Layout/Layout"

const Obra = () => {
    return (
        <Layout>
            <ContainerDataObra>
                <ContainerTextHome>
                    <TitleSection>Dios. O no ser</TitleSection>
                    <TextHome>Tercera parte de la trilogía integrada por La velocidad del zoom del horizonte (2013) y Paradise by Design (2015).</TextHome>
                    <TextHome>A partir de un hecho real, la desaparición del vuelo 370 de Malaysia Airlines en el 2014, David Gaitán comenzó a elaborar este relato en el que una mujer, de la que nunca sabremos su nombre, decide <b>negarse</b> al mandato divino de ser Profeta, comenzando una huida imposible, en la que recorrerá de una manera muy particular el viaje del héroe. </TextHome>
                    <TextHome>Durante este viaje, la Profeta <b>antagonizará</b> con Dios, que tomará diversas formas y actitudes, aprovechando el autor estos encuentros para profundizar diversas cuestiones sobre la relación del hombre con la realidad, con sus limitaciones, con sus necedades. Una lucha que busca que el espectador se plantee casi sin darse cuenta, cuáles son sus elecciones, cuál es el rol que ha elegido para su vida.</TextHome> 
                    <TextHome>Un texto que, en resumidas cuentas, tiñe con un espíritu joven e inquisitivo una antigua pregunta: ¿habremos construido sin notarlo la cárcel que habitamos?</TextHome> 
                </ContainerTextHome>
                <ContainerImgAutor>
                    <ImgAutor src="https://i.ibb.co/LpJywYZ/Foto014.jpg" />
                    <SpanImg>Foto – Pablo Cánepa</SpanImg>
                </ContainerImgAutor>
            </ContainerDataObra>
        </Layout>
    )
}

export { Obra };

const ContainerDataObra = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    margin: auto;
    @media screen and (max-width: 780px){
        flex-direction: column-reverse;
    }  
`
const ContainerImgAutor = styled.section`
    width: 500px;
    height: auto;
    margin: auto;
    @media screen and (max-width: 780px){
        padding-top: 2rem;
        width: 300px; 
    } 
`
const SpanImg = styled.span`
    width: 100%;
    text-align: right;
    display: block;
    padding-top: .5rem;
    font-size: .8rem;
`
const ImgAutor = styled.img`
    max-width: 100%;
    width: 100%;
`
const TitleSection = styled.h1`
    padding: 2rem;
`
const ContainerTextHome = styled.section`
    width: 50%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    text-align: center;
    @media screen and (max-width: 480px){
        width: 90%;
    }
`
const TextHome = styled.p`
    width: 90%;
    line-height: 1.7;
    font-size: 1.1rem;
    margin: auto; 
    margin-bottom: 2rem;
    @media screen and (max-width: 480px){
        width: 100%;
    }   
`