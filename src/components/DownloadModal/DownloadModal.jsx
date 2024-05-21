import { useState, useEffect } from "react";
import DownloadButton from "../DownloadButton/DownloadButton";

import questions from "../../data/questions.json";

import { Container, PercentageContainer, Percentage, Title, Subtitle, Paragraph } from "./styles.js";

function DownloadModal({ onClose }){
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    const storedAnswers = JSON.parse(localStorage.getItem("storedCorrectAnswers")) || [];
    useEffect(() => {
        
        setCorrectAnswersCount(storedAnswers.length);
    }, [storedAnswers.length]);

    const totalAnswered = Object.keys(storedAnswers).length;

    const progressPercentage = ((totalAnswered / questions.length) * 100).toFixed(0);

    return (
            <Container>
                <PercentageContainer>
                    <Percentage>{progressPercentage}%</Percentage>
                    
                </PercentageContainer>

                <Title>Parabéns!</Title>
                <Subtitle>Você demonstrou um excelente desempenho.</Subtitle>
                
                <div>
                    <Paragraph>Continue buscando sempre o seu melhor! Estamos orgulhosos de ter você 
                        em nossa instituição e desejamos sucesso em toda sua jornada acadêmica.</Paragraph>

                        <Paragraph>Você já pode baixar seu certificado. É só clicar no botão abaixo.</Paragraph>
                </div>
            <DownloadButton 
            correctAnswersCount={correctAnswersCount} 
            totalQuestions={questions.length}
            onDownloadComplete={onClose}
            />
        </Container>
    )
}

export default DownloadModal;