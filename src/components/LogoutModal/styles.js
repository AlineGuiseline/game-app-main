import styled from "styled-components";

const Container = styled.div `
    position: fixed;
    width: 32rem;
    height: 20rem;
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
    padding: 2rem;
    color: #FFFFFF;
`

const Title = styled.h2 `
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
`

const Paragraph = styled.p `
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    font-size: 22px;
    line-height: 44px;
    text-align: center;
`

const BtnArea = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 2rem;
    margin-top: 2.5rem;
`

const CancelButton = styled.button `
    background-color: #BFBFBF;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: none;
    border-radius: 4px;
    height: 3.5rem;
    width: 13rem;
    cursor: pointer;

    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;

    &:hover {
        opacity: 0.9;
    }
`

export {Container, Title, Paragraph, BtnArea, CancelButton}