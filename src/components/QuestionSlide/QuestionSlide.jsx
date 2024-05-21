import { useState, useEffect } from "react";

import { CardContainer, TextArea, FirstLine, SecondLine, ThirdLine, FourthLine, FifthLine, LastLine,
     References, ReferenceDate, AnswerButton } from "./styles";

import ellipse from "../../assets/GamePage/ellipse.png";
import right from "../../assets/GamePage/right.png";
import wrong from "../../assets/GamePage/wrong.png";

// recebe 'question' e 'onAnswer' como props. 'question' contém os detalhes
// da pergunta e 'onAnswer' é uma função para notificar o componente
// pai quando uma resposta é dada
function QuestionSlide({ question, onAnswer, onCorrectAnswer}) {
    // gerencia qual opção de resposta foi selecionada
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // carrega respostas salvas ao montar o componente
    useEffect(() => {
        const storedAnswers = JSON.parse(localStorage.getItem("storedAnswers")) || {};
        if (storedAnswers[question.firstLine]) {
            setSelectedAnswer(storedAnswers[question.firstLine]);
        }
    }, [question.firstLine]);

    // atualiza o estado com a resposta selecionada e chama a função 'onAnswer'
    // para notificar o componente pai
    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        onAnswer();

        // recupera respostas armazenadas
        const storedAnswers = JSON.parse(localStorage.getItem("storedAnswers")) || {};
        storedAnswers[question.firstLine] = answer;
        localStorage.setItem("storedAnswers", JSON.stringify(storedAnswers));

        if (answer === question.correctAnswer) {
            let storedCorrectAnswers = JSON.parse(localStorage.getItem("storedCorrectAnswers")) || [];
            storedCorrectAnswers.push(question.correctAnswer);
            localStorage.setItem("storedCorrectAnswers", JSON.stringify(storedCorrectAnswers));
            console.log(storedCorrectAnswers)

            onCorrectAnswer();
        }
    };

    const getImage = (option) => {
        if (selectedAnswer === null) {
            return ellipse;
        }
        if (option === selectedAnswer) {
            return option === question.correctAnswer ? right : wrong
        }
        return ellipse;
        
    };

    return (
        <CardContainer>
            <TextArea>
                <FirstLine>{question.firstLine}</FirstLine>
                <SecondLine>{question.secondLine}</SecondLine>
                <ThirdLine>{question.thirdLine}</ThirdLine>
                <FourthLine>{question.fourthLine}</FourthLine>
                <FifthLine>{question.fifthLine}</FifthLine>
                <References>{question.references}</References>
                <ReferenceDate>{question.referenceDate}</ReferenceDate>
                <LastLine>{question.lastLine}</LastLine>
            </TextArea>
            {question.options.map((option, index) => (
                <AnswerButton
                key={index}
                onClick={() => handleAnswerClick(option)}
                selected={selectedAnswer === option}
                correct={option === question.correctAnswer}
                disabled={selectedAnswer !== null}
            >
                {option}
                <img src={getImage(option)} alt="" />
            </AnswerButton>
            ))}
        </CardContainer>
    )
}

export default QuestionSlide;