import { useEffect, useState } from "react";
import axios from 'axios';

import { Button } from "./styles";

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

      const [isLoading, setIsLoading] = useState(false);

      const LoadingSpinner = () => (
        <div className="loading-spinner">
          {/* Adicione aqui o estilo e o design do seu spinner */}
          <p>Loading...</p>
        </div>
      );

      const handleDownloadCertificate = async () => {
        setIsLoading(true);
        
        try {
          // Simule o processo de download com uma função async
          await simulateDownload();
          
          // Processo de download real
          // await downloadCertificate();
        } catch (error) {
          console.error('Erro ao baixar o certificado:', error);
        } finally {
          setIsLoading(false);
        }
      };
      
      const simulateDownload = () => {
        return new Promise((resolve) => setTimeout(resolve, 3000)); // Simula um download de 3 segundos
      };
      
  
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