import { Layout } from "../../components/Layout/Layout"
import styled from "styled-components";

const Espectaculo = () => {
    return (
        <Layout>
            <ContainerDataEspectaculo>
                <ContainerImgAutor>
                    <ImgAutor src="https://i.ibb.co/RpD96JV/Foto031.jpg" />
                    <SpanImg>Foto – Pablo Cánepa</SpanImg>
                </ContainerImgAutor>
                <ContainerTextHome>
                    <TextHome>La puesta en escena está diseñada para acercar al espectador al universo de la Profeta: personas despojadas de humanidad habitando un mundo en el que el descanso es imposible, en donde tanto el tiempo como el espacio han dejado tener sentido. Un lugar a la vez extraño y aterradoramente conocido.</TextHome>
                </ContainerTextHome>
            </ContainerDataEspectaculo>
        </Layout>
    )
}

export { Espectaculo };

const ContainerDataEspectaculo = styled.section`
    width: 100%;
    min-height: 100vh;
    padding:2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    @media screen and (max-width: 780px){
        flex-direction: column;
    }  
`
const ContainerImgAutor = styled.section`
    width: 300px;
    height: auto;
    margin: auto;
    @media screen and (max-width: 780px){
        padding-top: 4rem;
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
const ContainerTextHome = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
    @media screen and (max-width: 480px){
        width: 100%;
    }  
`
const TextHome = styled.p`
    width: 100%;
    line-height: 1.7;
    font-size: 1.1rem;
    margin: auto; 
    margin-bottom: 2rem;
    @media screen and (max-width: 480px){
        margin-top: 2rem;
    }   
`