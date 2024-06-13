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
    
    @media (max-width: 1400px) {
        height: 18rem;
    }       
    @media (max-width: 700px) {
        width: 80%;
        height: 30%;
        padding: 1rem;
    }   
    @media (max-width: 520px) {
        padding: 0.5rem;
    }
    @media (max-width: 400px) {
        height: 25%;
    }  
`

const Title = styled.h2 `
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 23px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 1rem;
    
    @media (max-width: 700px) {
        font-size: 20px;
        padding: 10px;
        line-height: 30px;
        margin-bottom: 0;
    }      
    @media (max-width: 500px) {
        font-size: 18px;
        padding: 10px;
        line-height: 25px;
    } 
    @media (max-width: 400px) {
        font-size: 16px;
        line-height: 20px;
    }      
    @media (max-width: 350px) {
        font-size: 14px;
    }      
    @media (max-width: 300px) {
        font-size: 12px;
    }         
`

const Paragraph = styled.p `
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    
    @media (max-width: 700px) {
        font-size: 16px;
        line-height: 25px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
    } 
    @media (max-width: 400px) {
        font-size: 12px;
        line-height: 20px;
    }          
    @media (max-width: 350px) {
        font-size: 10px;
    }       
    @media (max-width: 300px) {
        font-size: 9px;
    }           
`

const BtnArea = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 2rem;
    margin-top: 2.5rem;
    
    @media (max-width: 1400px) {
        margin-top: 2rem;
    }   
    @media (max-width: 700px) {
        margin-top: 1rem;
        gap: 1rem;
    }     
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
    font-size: 18px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;

    &:hover {
        opacity: 0.9;
    }
    
    @media (max-width: 1100px) {
        font-size: 16px;
    }     
    @media (max-width: 700px) {
        font-size: 14px;
    } 
    @media (max-width: 500px) {
        height: 2.5rem;
        font-size: 12px;
    }          
    @media (max-width: 350px) {
        font-size: 10px;
    }      
    @media (max-width: 300px) {
        font-size: 9px;
    }     
`
const LoginButton = styled.button `
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 18px;
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

    @media (max-width: 1100px) {
        font-size: 16px;
    }  
    @media (max-width: 700px) {
        font-size: 14px;
    }     
    @media (max-width: 500px) {
        height: 2.5rem;
        font-size: 12px;
    }         
    @media (max-width: 350px) {
        font-size: 10px;
    }           
    @media (max-width: 300px) {
        font-size: 9px;
    }     
` 

export {Container, Title, Paragraph, BtnArea, CancelButton, LoginButton}