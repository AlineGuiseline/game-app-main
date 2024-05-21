import { Button } from "./styles";

function ResetButton(){
    const reset = () => {
        localStorage.removeItem("storedInfo");
        localStorage.removeItem("storedCorrectAnswers");
        localStorage.removeItem("answeredQuestions");
        localStorage.removeItem("storedAnswers");

        window.location.reload();
    }

    return(
        <Button onClick={reset}>
            Sair
        </Button>
    )
}

export default ResetButton;