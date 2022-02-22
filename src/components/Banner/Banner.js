import styled from "styled-components";

const Banner = ({children}) => {
    return (
        <ContainerImgBanner>
            <ImgBanner src="https://i.ibb.co/zQHc4B1/Foto028.jpg" alt="" />
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
`

const ImgBanner = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto;
    filter: brightness(0.3);
    @media screen and (max-width: 780px){
        object-fit: cover;
    } 
`