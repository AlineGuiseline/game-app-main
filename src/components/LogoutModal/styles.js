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
        height: 15rem;
    }       
    @media (max-width: 700px) {
        width: 80%;
        height: 30%;
    }  
    @media (max-width: 350px) {
        height: 41%;
    }
    @media (max-width: 520px) {
        padding: 0.5rem;
    }  
`

const Title = styled.h2 `
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
    
    @media (max-width: 1400px) {
        font-size: 28px;
    }        
    @media (max-width: 1100px) {
        font-size: 26px;
    } 
    @media (max-width: 700px) {
        font-size: 22px;
        padding: 20px;
        line-height: 30px;
    }      
    @media (max-width: 510px) {
        font-size: 20px;
        padding: 20px 10px;
    } 
    @media (max-width: 400px) {
        font-size: 18px;
        line-height: 25px;
    }         
`

const Paragraph = styled.p `
    font-family: 'Inter', sans-serif;
    font-weight: 200;
    font-size: 22px;
    line-height: 44px;
    text-align: center;
    
    @media (max-width: 1400px) {
        font-size: 20px;
    }         
    @media (max-width: 1100px) {
        font-size: 18px;
    } 
    @media (max-width: 700px) {
        font-size: 16px;
        padding: 0 10px;
        line-height: 22px;
    }
    @media (max-width: 510px) {
        font-size: 14px;
    } 
    @media (max-width: 400px) {
        font-size: 12px;
        line-height: 20px;
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
    font-size: 20px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;

    &:hover {
        opacity: 0.9;
    }
    
    @media (max-width: 1400px) {
        font-size: 18px;
    }       
    @media (max-width: 1100px) {
        font-size: 16px;
    }     
    @media (max-width: 700px) {
        font-size: 14px;
    } 
    @media (max-width: 510px) {
        font-size: 12px;
    }        
`

export {Container, Title, Paragraph, BtnArea, CancelButton}