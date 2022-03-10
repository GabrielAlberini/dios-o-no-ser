import styled from "styled-components";

const Banner = ({children}) => {
    return (
        <ContainerImgBanner>
            <ImgBanner src="https://i.ibb.co/C5cpBxN/dios-banner.png" alt="" />
            {children}
        </ContainerImgBanner>
    )
}

export { Banner };

const ContainerImgBanner = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    @media screen and (max-width: 480px){
        overflow-x: hidden;
    } 
`

const ImgBanner = styled.img`
    width: 100%;
    height: auto;
    filter: brightness(0.3);
    object-fit: cover;
    position: relative;
    @media screen and (max-width: 480px){
        width: auto;
        right: 48rem;
    } 
`