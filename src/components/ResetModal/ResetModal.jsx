import { useState, useEffect } from "react";
import ResetButton from "../ResetButton/ResetButton";

import questions from "../../data/questions.json";
import { Container, PercentageContainer, Percentage, Title, Subtitle, Paragraph } from "./styles.js";

function ResetModal(){
    // const [modalVisible, setModalVisible] = useState(true);

    // const closeModal = () => {
    //     setModalVisible(false)
    // }

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

                <Title>Poxa...</Title>
                <Subtitle>Você não atingiu a média necessária.</Subtitle>

                <div>
                    <Paragraph>Mas não se preocupe! Você pode tentar novamente. Encare isso 
                        como mais uma oportunidade de aprendizado e crescimento.</Paragraph>
                        
                    <Paragraph>Para tentar de novo, é só clicar no botão abaixo.</Paragraph>
                </div>
                <ResetButton />
            </Container>
    )
}

export default ResetModal;