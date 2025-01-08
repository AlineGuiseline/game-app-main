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
            Exit
        </Button>
    )
}

export default ResetButton;