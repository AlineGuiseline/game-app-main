import styled from "styled-components";

const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 2rem 3rem;
    text-align: left;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 1400px) {
        top: 0;
        transform: translateY(0%);
    } 

    @media (max-width: 500px) {
        padding: 2rem 1.5rem;
    } 
    @media (max-width: 350px) {
        padding: 2rem 1rem;
    }    
`

const TextArea = styled.div `
    margin-bottom: 0.5rem;
`

const FirstLine = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 200;
    line-height: 30px;
    padding-bottom: 0.5rem;
    
    @media (max-width: 1400px) {
        font-size: 16px;
        line-height: 25px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        line-height: 23px;
    }
`
const SecondLine = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;

    @media (max-width: 1400px) {
        font-size: 16px;
        line-height: 25px;
    }    
    @media (max-width: 500px) {
        font-size: 14px;
        line-height: 23px;
    }
`
const ThirdLine = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 200;
    line-height: 30px;

    @media (max-width: 1400px) {
        font-size: 16px;
        line-height: 25px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        line-height: 23px;
    }
`
const FourthLine = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 200;
    line-height: 30px;

    @media (max-width: 1400px) {
        font-size: 16px;
        line-height: 25px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        line-height: 23px;
    }
`
const FifthLine = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 200;
    line-height: 30px;

    @media (max-width: 1400px) {
        font-size: 16px;
        line-height: 25px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        line-height: 23px;
    }
`
const LastLine = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    
    padding-top: 1rem;

    @media (max-width: 1400px) {
        font-size: 16px;
        line-height: 25px;
        padding-bottom: 0.5rem;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        line-height: 23px;
    }
`
const References = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: lighter;
    position: relative;
    text-align: end;
    padding-top: 0.5rem;
    word-break: break-word;

    @media (max-width: 1400px) {
        font-size: 13px;
    }
    @media (max-width: 500px) {
        font-size: 11px;
    }
`

const ReferenceDate = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: lighter;
    position: relative;
    text-align: end;
    word-break: break-word;

    @media (max-width: 1400px) {
        font-size: 13px;
    }
    @media (max-width: 500px) {
        font-size: 11px;
    }
`

const AnswerButton = styled.button`
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 25px;
    font-weight: 200;
    text-align: left;
    color: #FFFFFF;
    border: 1px solid ${props => props.selected ? (props.correct ? '#39CC59' : '#E03F3F') : '#BFBFBF'};
    border-radius: 4px;
    background-color: transparent;

    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    padding: 0.5rem 1rem;
    height: 3.5rem;

    cursor: pointer;

    img {
        width: 30px;
        height: 30px;

        @media (max-width: 500px) {
            width: 25px;
            height: 25px;
        }    
    }

    &:hover {
        opacity: 0.8;
    }

    @media (max-width: 1400px) {
        font-size: 14px;
        line-height: 20px;
    }    
    @media (max-width: 1100px) {
        height: 4rem;
        padding: 0.5rem;
        gap: 0.5rem;
    }    
    @media (max-width: 500px) {
        font-size: 11px;
        line-height: 16px;
    }    
    @media (max-width: 400px) {
        font-size: 10px;
        line-height: 15px;
        height: 5rem;
    }
`;

export {CardContainer, TextArea, FirstLine, SecondLine, ThirdLine, FourthLine, FifthLine, LastLine,
    References, ReferenceDate, AnswerButton}