import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ResetButton from "../ResetButton/ResetButton";

import questions from "../../data/questions.json";
import { Container, PercentageContainer, Percentage, Title, Subtitle, Paragraph } from "./styles.js";

function ResetModal({ onModalOpen }){
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    const storedAnswers = JSON.parse(localStorage.getItem("storedCorrectAnswers")) || [];
    useEffect(() => {
        setCorrectAnswersCount(storedAnswers.length);
    }, [storedAnswers.length]);

    const totalAnswered = Object.keys(storedAnswers).length;

    const progressPercentage = ((totalAnswered / questions.length) * 100).toFixed(0);

    useEffect(() => {
        onModalOpen(true);

        return () => {
            onModalOpen(false);
        };
    }, [onModalOpen]);

    return (

            <Container>
                <PercentageContainer>
                    <Percentage>{progressPercentage}%</Percentage>
                    
                </PercentageContainer>

                <Title>Oops</Title>
                <Subtitle>You did not reach the required average.</Subtitle>

                <div>
                    <Paragraph>But don’t worry! You can try again. 
                        Look at this as another opportunity for learning and growth.
                    </Paragraph>
                        
                    <Paragraph>To try again, just click the button below.</Paragraph>
                </div>
                <ResetButton />
            </Container>
    )
}

ResetModal.propTypes = {
    onModalOpen: PropTypes.func.isRequired,
};

export default ResetModal;