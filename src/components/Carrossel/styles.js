import styled from "styled-components";

const ProgressBarArea = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1rem;
`

const ProgressBarContainer = styled.div `
  width: 40%;
  background-color: #000000;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;

  
  @media (max-width: 1400px) {
    width: 30%;
  }
  @media (max-width: 700px) {
    width: 25%;
  }  
  @media (max-width: 600px) {
    width: 20%;
  }
  @media (max-width: 500px) {
  width: 85vw;
}
`

const ProgressBar = styled.div `
  height: 10px;
  background: linear-gradient(90deg, #6E28E0 0%, #139DEB 100%);
  width: 0;
  transition: width 0.5s ease-in-out;
`

const TextArea = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 40%;

  @media (max-width: 1400px) {
    width: 30%;
  }
  @media (max-width: 700px) {
    width: 25%;
  }
  @media (max-width: 600px) {
    width: 20%;
  }
  @media (max-width: 500px) {
    width: 15%;
  }
  @media (max-width: 400px) {
    width: 13%;
  }
  @media (max-width: 300px) {
    width: 10%;
  }

  p {
    font-family: "Inter", sans-serif;
    font-weight: lighter;
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 0.5rem;
    
    @media (max-width: 1400px) {
      font-size: 14px;
    }
    
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  span {
    font-weight: bold;
  }
`

export {ProgressBarArea, ProgressBarContainer, ProgressBar, TextArea}