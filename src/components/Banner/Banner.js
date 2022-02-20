import styled from "styled-components"

const Banner = () => {
    return (
        <ContainerImgBanner>
            <ImgBanner src="https://i.ibb.co/mTqxkd4/Whats-App-Image-2022-02-17-at-15-03-07.jpg" alt="foto de portada" />
        </ContainerImgBanner>
    )
}

/*Styles*/

const ContainerImgBanner = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
`

const ImgBanner = styled.img`
    max-width: 100%;
`

export { Banner }