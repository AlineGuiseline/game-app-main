import styled from "styled-components";

const Container = styled.div `
    position: fixed;
    width: 40rem;
    height: 33rem;
    z-index: 999;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
    border-radius: 4px;
    background-color: #181818;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
    color: #FFFFFF;
    
    @media (max-width: 1400px) {
        width: 37rem;
        height: 28rem;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -65%);
    }
    @media (max-width: 700px) {
        width: 30rem;
        padding: 2rem;
    }
    @media (max-width: 700px) {
        width: 30rem;
        padding: 2rem;
    }
    @media (max-width: 600px) {
        width: 80vw;
        height: 80vh;
    }
`

const PercentageContainer = styled.div `
    border-radius: 50%;
    width: 20%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid rgba(170, 21, 21, 1);
    margin-bottom: 1rem;

    @media (max-width: 1400px) {
        width: 90px;
        height: 90px;
        margin-bottom: 0;
    }
    
    @media (max-width: 600px) {
        margin-bottom: 1rem;
    }
`
  
const Percentage = styled.h1 `
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 45px;

    @media (max-width: 1400px) {
        font-size: 26px;
        padding: 15px;
    }
    
    @media (max-width: 600px) {
        font-size: 24px;
    }
`

const Title = styled.h2 `
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 0.5rem;

    @media (max-width: 1400px) {
        font-size: 35px;
    }
    @media (max-width: 600px) {
        font-size: 30px;
    }
    @media (max-width: 400px) {
        font-size: 25px;
    }
`

const Subtitle = styled.h3 `
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 2rem;

    @media (max-width: 1400px) {
        font-size: 18px;
        margin-bottom: 1rem;
        text-align: center;
    }
    @media (max-width: 600px) {
        font-size: 16px;
    }
    @media (max-width: 400px) {
        font-size: 14px;
    }
`

const Paragraph = styled.p `
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 1rem;
    text-align: justify;
    
    @media (max-width: 1400px) {
        font-size: 16px;
    }
    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: 400px) {
        font-size: 12px;
    }
`

export {Container, PercentageContainer, Percentage, Title, Subtitle, Paragraph}