import styled, { keyframes, css } from "styled-components";
import backgroundImage from "../../assets/GamePage/background.png";

const GeneralContainer = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundImage});
`

const Header = styled.header `
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    color: #FFFFFF;
    position: fixed;
    top: 0;
    padding: 2rem 4rem;
    
  @media (max-width: 600px) {
    padding: 2rem;
  }
  
  @media (max-width: 300px) {
    padding: 2rem 1rem;
  }
`

const LogoImg = styled.img `

    @media (max-width: 600px) {
        width: 6rem;
    }
    @media (max-width: 400px) {
        width: 5rem;
    }
`

const UserContainer = styled.button `
    border: none;
    background-color: transparent;
    color: #FFFFFF;
    padding: 10px;
    /* width: 8rem; */
    height: 3rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

const UserArea = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 400px) {
        gap: 0.5rem;
    }

    p {
        font-family: "Inter", sans-serif;
        font-size: 16px;

        @media (max-width: 400px) {
            font-size: 14px;
        }
        @media (max-width: 300px) {
            font-size: 12px;
        }
    }
`

const InvertedImage = styled.img`
    width: 1rem;
  transform: ${props => (props.isInverted ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;

          @media (max-width: 400px) {
            width: 0.5rem;
        }
`;

const AnimatedUserMenu = styled.div`

`;

export {GeneralContainer, Header, LogoImg, UserContainer, UserArea, InvertedImage, AnimatedUserMenu}