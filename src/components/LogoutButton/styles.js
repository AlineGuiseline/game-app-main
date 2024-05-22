import styled from "styled-components";

const Button = styled.button `
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    background-color: #139DEB;
    color: #FFFFFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    border: none;
    border-radius: 4px;
    height: 3.5rem;
    width: 13rem;

    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 1400px) {
        font-size: 18px;
    }    
`

export {Button}