import { useEffect, useState } from "react";
//import axios from 'axios';

import { Button} from "./styles";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const DownloadButton = ({ correctAnswersCount, totalQuestions, onDownloadComplete }) => {
  const [info, setInfo] = useState([]);

  const isButtonEnabled = correctAnswersCount >= 3;

  useEffect(() => {
    const storedInfo = localStorage.getItem("storedInfo");

    if (storedInfo){
      try {
        setInfo(JSON.parse(storedInfo))
      } catch (error) {
        console.error("Invalid JSON in storedInfo:", error);
      }   
    }
  }, []);
/*
    const handleFimDoJogo = async () => {
      setIsLoading(true); // Inicia o loading

        const percentageCorrect = ((correctAnswersCount / totalQuestions) * 100).toFixed(0); // Calcula a porcentagem de acertos

        try {
          const response = await axios.post('https://game-pro-api.vercel.app/gerar_certificado/', {
            nome: info[0],
            sobrenome: info[1],
            registro: info[2],
            respostas: percentageCorrect
          });
          const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
          const pdfUrl = URL.createObjectURL(pdfBlob);
    
          const downloadLink = document.createElement('a');
          downloadLink.href = pdfUrl;
          downloadLink.download = `Certificado ${info[0]}.pdf`;
    
          downloadLink.click();
    
          URL.revokeObjectURL(pdfUrl);

          if(onDownloadComplete){
            setTimeout(() => {
              onDownloadComplete();
            }, 2000);
          }
        } catch (error) {
          console.error('Erro ao enviar solicitação:', error);
        } finally {
          setIsLoading(false); // Termina o loading
        }
      }
*/

  const handleFimDoJogo = async () => {
    setIsLoading(true); // Inicia o loading

    const percentageCorrect = ((correctAnswersCount / totalQuestions) * 100).toFixed(0); // Calcula a porcentagem de acertos

    try {
        const response = await fetch('https://game-pro-api.vercel.app/gerar_certificado/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: info[0],
                sobrenome: info[1],
                registro: info[2],
                respostas: percentageCorrect
            }),
        });

        if (!response.ok) {
            throw new Error('Erro na solicitação');
        }

        const pdfBlob = await response.blob();
        const pdfUrl = URL.createObjectURL(pdfBlob);

        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
          // Usar iframe para dispositivos móveis
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.src = pdfUrl;
          document.body.appendChild(iframe);

          // Remoção do iframe após um pequeno atraso
          setTimeout(() => {
              document.body.removeChild(iframe);
              URL.revokeObjectURL(pdfUrl);
          }, 100);
      } else {
          // Usar link de download para desktop
          const downloadLink = document.createElement('a');
          downloadLink.href = pdfUrl;
          downloadLink.download = `Certificado ${info[0]}.pdf`;

          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);

          URL.revokeObjectURL(pdfUrl);
      }
      if (onDownloadComplete) {
        setTimeout(() => {
            onDownloadComplete();
        }, 2000);
    }
    } catch (error) {
        console.error('Erro ao enviar solicitação:', error);
    } finally {
        setIsLoading(false); // Termina o loading
    }
  }

  const [isLoading, setIsLoading] = useState(false);
        
  return (
    <>
      <Button
      disabled={!isButtonEnabled}
      onClick={handleFimDoJogo}>Baixar certificado</Button>

      {isLoading && <LoadingSpinner />}
    </>
  )
}

export default DownloadButton;