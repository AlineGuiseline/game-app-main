import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Button } from "./styles";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { generatePDF } from "./utils"; // Certifique-se de ajustar o caminho conforme necessário

const DownloadButton = ({ correctAnswersCount, totalQuestions, onDownloadComplete }) => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isButtonEnabled = correctAnswersCount >= 3;

  useEffect(() => {
    const storedInfo = localStorage.getItem("storedInfo");

    if (storedInfo) {
      try {
        setInfo(JSON.parse(storedInfo));
      } catch (error) {
        console.error("Invalid JSON in storedInfo:", error);
      }
    }
  }, []);

  const handleFimDoJogo = async () => {
    setIsLoading(true); // Inicia o loading
    console.log('Botão clicado, iniciando geração do PDF');

    const percentageCorrect = ((correctAnswersCount / totalQuestions) * 100).toFixed(0); // Calcula a porcentagem de acertos

    try {
      // Chame a função para gerar o PDF
      await generatePDF(info[0], info[1], info[2], percentageCorrect);
      console.log('Geração do PDF completa');

      if (onDownloadComplete) {
        setTimeout(() => {
          onDownloadComplete();
        }, 2000);
      }
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
    } finally {
      setIsLoading(false); // Termina o loading
    }
  }

  return (
    <>
      <Button
        disabled={!isButtonEnabled}
        onClick={handleFimDoJogo}
      >
        Baixar certificado
      </Button>

      {isLoading && <LoadingSpinner />}
    </>
  )
}

DownloadButton.propTypes = {
  correctAnswersCount: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onDownloadComplete: PropTypes.func,
};

export default DownloadButton;
