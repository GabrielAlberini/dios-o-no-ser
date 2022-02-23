import styled from "styled-components";

const Banner = ({children}) => {
    return (
        <ContainerImgBanner>
            <ImgBanner src="https://i.ibb.co/FbJcx9n/Foto048.jpg" alt="" />
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
    width: 100%;
    height: auto;
    filter: brightness(0.3);
    object-fit: cover;
`