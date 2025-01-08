import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, PercentageContainer, Percentage, Title, Subtitle, Paragraph } from "./styles.js";
import DownloadButton from "../DownloadButton/DownloadButton";
import questions from "../../data/questions.json";

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

                <Title>Congratulations!</Title>
                <Subtitle>You have demonstrated excellent performance.</Subtitle>
                
                <div>
                    <Paragraph>Keep striving to be your best! 
                        We are proud to have you in our institution and wish 
                        you success throughout your academic journey.
                    </Paragraph>

                    <Paragraph>You can now download your certificate. 
                        Just click the button below.
                    </Paragraph>
                </div>
            <DownloadButton 
            correctAnswersCount={correctAnswersCount} 
            totalQuestions={questions.length}
            onDownloadComplete={onClose}
            />
        </Container>
    )
}

DownloadModal.propTypes = {
    onClose: PropTypes.func.isRequired,
 };

export default DownloadModal;