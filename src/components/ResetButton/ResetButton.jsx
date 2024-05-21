import { Button } from "./styles";

function ResetButton(){
    const reset = () => {
        localStorage.removeItem("storedCorrectAnswers");
        localStorage.removeItem("answeredQuestions");
        localStorage.removeItem("storedAnswers");

        window.location.reload();
    }

    return(
        <Button onClick={reset}>
            Tentar novamente
        </Button>
    )
}

export default ResetButton;