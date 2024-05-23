import styled from "styled-components";

const Container = styled.div `
    position: fixed;
    width: 48rem;
    height: 35rem;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
        width: 44rem;
        height: 30rem;
    }
    @media (max-width: 900px) {
        width: 37rem;
        padding: 2rem;
    }
    @media (max-width: 700px) {
        width: 30rem;
        padding: 2rem;
    }
    @media (max-width: 600px) {
        width: 80vw;
        /* height: 80vh; */
    }    
    @media (max-width: 300px) {
        height: 60vh;
    }
`

const PercentageContainer = styled.div `
    border-radius: 50%;
    width: 16%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid rgba(50, 170, 21, 1);
    margin-bottom: 1rem;

    @media (max-width: 1400px) {
        width: 100px;
        height: 95px;
        margin-bottom: 1rem;
    }
    
    @media (max-width: 600px) {
        margin-bottom: 1rem;
    }
    @media (max-width: 510px) {
        width: 90px;
    }
    @media (max-width: 400px) {
        height: 90px;
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
    text-align: left;
    
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