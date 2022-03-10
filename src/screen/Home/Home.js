import styled from "styled-components";
import { Layout } from "../../components/Layout/Layout"

const Home = () => {
    return (
        <Layout>
            <ContainerDataHome>
                <ContainerImgAutor>
                        <ImgAutor src="https://i.ibb.co/C5cpBxN/dios-banner.png" />
                        <SpanImg>Foto – Pablo Cánepa</SpanImg>
                </ContainerImgAutor>
                <ContainerTextHome>
                    <TextHome>Una mujer cree haber visto hacer a Dios algo horrible. Cree que Dios le ha impuesto que sea su Profeta. Siente que debe huir de un Dios que tal vez sólo esté en su cabeza… <b>¿Cómo comprobar que lo real es real?</b></TextHome>
                    <TextHome>En este nuevo estado de conciencia, su propia existencia comenzará a <b>perder sentido</b>, obligándola a huir en un desesperado intento de reencontrarse con ella misma. Huir para redescubrir la <b>paz</b>.</TextHome>
                    <TextHome>En su camino encontrará diversas formas de <b>amor</b>, algunas sublimes, otras terribles. En estas formas tratará de encontrar la <b>salvación</b>, un reencuentro con su perdida humanidad.</TextHome> 
                    <TextHome>¿Es una salida posible <b>destruir</b> nuestra realidad?</TextHome> 
                </ContainerTextHome>
            </ContainerDataHome>
        </Layout>
    )
}

export { Home };

const ContainerDataHome = styled.section`
    width: 100%;
    display: flex;
    min-height: 100vh;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
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
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
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
        text-align: center;
    }   
`