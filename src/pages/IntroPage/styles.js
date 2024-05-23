import styled from "styled-components";
import backgroundImage from "../../assets/IntroPage/background.png";

const GeneralContainer = styled.main `
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundImage});
`

const LeftSide = styled.section `
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1100px){
        display: none;
    }
`

const LoginImage = styled.img `
    width: 30rem; /* 60% */

    @media screen and (max-width: 1400px){
        width: 25rem;
    }
`

const RightSide = styled.section `
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1100px){
        width: 90%;
    }
`

const LoginArea = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #181818;
    width: 80%;
    height: fit-content; /* 70% */
    padding: 3rem;
    border-radius: 4px;
    
    @media screen and (max-width: 1400px){
        width: 90%;
        height: 90%;
    }
    @media screen and (max-width: 1100px){
        height: 80%;
    }
    @media screen and (max-width: 500px){
        padding: 2rem;
    }
    @media screen and (max-width: 300px){
        padding: 1rem;
    }
`

// const TitleArea = styled.div `
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin: 1rem 0;
// `

const GameTitle = styled.img `
    width: 15rem;
    margin: 1rem auto;

    @media screen and (max-width: 500px){
        width: 90%;
    }
`

// const GameTitle = styled.h1 `
//     font-family: 'Orbitron', sans-serif;
//     color: #FFFFFF;
//     font-weight: 700;
//     font-size: 70px;
//     line-height: 20px;

//     @media screen and (max-width: 1400px){
//         font-size: 60px;
//     }

//     @media screen and (max-width: 1100px){
//         font-size: 50px;
//     }
//     @media screen and (max-width: 500px){
//         font-size: 40px;
//     }
    
// `

// const ProSubtitle = styled.h2 `
//     font-family: 'Quicksand', sans-serif;
//     color: #139DEB;
//     font-weight: lighter;
//     font-size: 52px;

//     @media screen and (max-width: 1400px){
//         font-size: 50px;
//     }
//     @media screen and (max-width: 1100px){
//         font-size: 45px;
//     }
//     @media screen and (max-width: 500px){
//         font-size: 35px;
//     }
// `

const TextArea = styled.div `
    margin: 0.5rem 0;

    p { 
        font-family: 'Inter', sans-serif;
        color: #FFFFFF;
        font-weight: 300;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 1rem;
        
        @media screen and (max-width: 1400px){
            font-size: 18px;
            line-height: 25px;
        }

        @media screen and (max-width: 600px){
            font-size: 16px;
        }
        @media screen and (max-width: 500px){
            font-size: 14px;
        }
    }

`

const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 1.5rem 0;

    @media screen and (max-width: 1400px){
        margin: 0;
    }
`

const FormGroup = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number]{
        -moz-appearance: textfield;
    }
`

const Label = styled.label `
    font-family: 'Inter', sans-serif;
    color: #FFFFFF;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    
    @media screen and (max-width: 500px){
        font-size: 14px;
    }
`

const FormGroupInline = styled.div `
    display: flex;
    gap: 1rem;

    width: 100%;
    
    & > ${FormGroup} {
        flex: 1;
    }
`

const Input = styled.input `
    padding: 0.8rem;
    font-size: 16px;
    border-radius: 4px;
    width: 100%; /* Faz com que o input ocupe toda a largura do contêiner */
    box-sizing: border-box; /* Inclui padding e border no tamanho total do input */
    font-family: 'Inter', sans-serif;
    flex: 1;

    background-color: #1E1F24;
    border: none;
    color: #FFFFFF;

    &:focus {
        outline: none;
        border: 1px solid #6E28E0;
    }

    @media screen and (max-width: 500px){
        font-size: 14px;
    }
`

const FormButton = styled.button `
    font-family: 'Inter', sans-serif;
    background-color: #139DEB;
    color: #FFFFFF;
    font-weight: 300;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    padding: 0.8rem;
    margin-top: 2.5rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    @media screen and (max-width: 500px){  
        margin-top: 0.5rem;
    }

    @media screen and (max-width: 500px){
        font-size: 14px;
    }
    
`

export {GeneralContainer, LeftSide, LoginImage, RightSide, LoginArea, 
    GameTitle, TextArea, 
    FormContainer, FormGroup, Label, FormGroupInline, Input, FormButton
}