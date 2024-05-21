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
`

export {Container}