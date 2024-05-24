import styled from "styled-components";

const LoadingContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`
const Loading = styled.span `
    width: 70px;
    height: 70px;
    background-color: transparent;
    display: block;
    border: 8px solid #777777;
    border-top-color: #139DEB;
    border-radius: 50%;

    animation: loading 1s infinite;

    @keyframes loading{
        to {
            transform: rotate(1turn);
        }
    }

    @media screen and (max-width: 400px) {
        width: 50px;
        height: 50px;
    }
`

export {LoadingContainer, Loading}