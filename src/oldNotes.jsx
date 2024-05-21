import { useState } from 'react';
import './App.css';
import axios from 'axios';

function Diploma() {
  const [nome, setNome] = useState('')
  const [pontuacao, setPontuacao] = useState(0);

  const handleFimDoJogo = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/gerar_certificado/', {
        nome: nome,
        pontuacao: pontuacao
      });

      // os dados recebidos são convertidos em um Blob, que é um objeto 
      // que representa dados brutos, como um arquivo.
      // Aqui, estamos criando um novo Blob a partir dos dados 
      // do PDF recebidos na resposta da solicitação HTTP.
      // [response.data] é um array que contém os dados do PDF. 
      // response.data é o conteúdo da resposta HTTP, que neste caso são os 
      // dados do PDF gerados pelo servidor.
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      // { type: 'application/pdf' } é um objeto de opções que especifica o 
      // tipo de conteúdo do Blob. Neste caso, estamos definindo o tipo como 
      // application/pdf para indicar que os dados representam um arquivo PDF.

      // URL.createObjectURL() é um método global do navegador que cria um URL 
      // de objeto a partir de um Blob.
      // O URL de objeto criado é uma referência única para os dados do Blob. 
      // Ele permite que os dados sejam acessados como uma URL regular.
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // cria um link oculto ('a')  dinamicamente no DOM com o URL do objeto, 
      // e o atributo "download" é definido como 'certificado.pdf para iniciar 
      // automaticamente o download do PDF quando o link é clicado.
      const downloadLink = document.createElement('a');
      downloadLink.href = pdfUrl;
      downloadLink.download = 'certificado.pdf';

      // simula um clique no link para iniciar o download
      downloadLink.click();

      // após o download do PDF, o URL do objeto é revogado usando 
      // URL.revokeObjectURL() para liberar os recursos do navegador associados à URL.
      URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
    }
  }

  return (
    <div>
      <h1>Jogo</h1>
      <p>Pontuação: 10</p>
      <form>
        <label htmlFor="nome">Nome:</label>
        <input 
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)} />

        <label htmlFor="pontuacao">Pontuação:</label>
        <input 
          type="number" 
          id="pontuacao"
          value={pontuacao}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setPontuacao(isNaN(value) ? '' : value);
          }} />
          {/* verifica se o valor de pontuacao é NaN (não é um número). 
          Se for NaN, definimos o valor como uma string vazia '', 
          caso contrário, definimos o valor como o número convertido. 
          Isso garante que o input seja limpo se o usuário 
          inserir um valor inválido. */}
</form>
      <button onClick={handleFimDoJogo}>Fim do Jogo</button>
    </div>
  );
}

export default Diploma;

/* 
1. O que é um Blob?
 - Um Blob (Binary Large Object) é um objeto que representa 
 dados brutos, como um arquivo, em JavaScript. Ele é uma 
 maneira de manipular dados binários no navegador.

2. Por que é necessário um Blob?
 - No contexto do código, um Blob é necessário para representar 
 os dados do PDF antes de serem baixados pelo usuário.
 - Quando recebemos os dados do PDF do servidor, eles estão em 
 formato binário, ou seja, uma sequência de bytes que representam 
 o conteúdo do PDF. Um Blob fornece uma maneira de encapsular 
 esses dados binários em um objeto que pode ser manipulado pelo navegador.

3. Explicação do código:
 - const pdfBlob = new Blob([response.data], { type: 'application/pdf' }): Aqui, 
 estamos criando um novo Blob a partir dos dados do PDF recebidos na 
 resposta HTTP. Estamos passando os dados como um array [response.data], 
 onde response.data é o conteúdo da resposta que contém os dados do PDF. 
 Além disso, estamos especificando o tipo de conteúdo do Blob como 
 application/pdf para indicar que os dados representam um arquivo PDF.
 - O Blob encapsula os dados binários do PDF em um objeto que pode 
 ser facilmente manipulado no navegador. Ele fornece métodos para 
 criar URLs de objeto, que são URLs que apontam para os dados brutos 
 do Blob. Esses URLs podem ser usados para criar links de download ou 
 exibir conteúdo diretamente no navegador.

 Em resumo, um Blob é necessário para encapsular e representar os dados 
 binários do PDF de uma maneira que possa ser manipulada e processada 
 pelo navegador. Isso permite que os dados sejam facilmente transmitidos 
 e utilizados em operações como download de arquivo ou exibição de 
 conteúdo diretamente no navegador.
*/