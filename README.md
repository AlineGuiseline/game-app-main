Seja bem-vindo ao Game Proficiência!

---------> Sobre a disposição dos arquivos <---------
- Pasta public: para evitar erros no deploy, a imagem principal (da página introdutória) foi colocada nesta pasta
- Pasta src: contém as pastas "assets" (imagens gerais), components (componentes gerais), data (json com as questões, alternativas e respostas) e "pages" (as duas páginas do projeto, sendo "IntroPage" e "GamePage") e os arquivos "App.jsx" (estrutura geral), "GlobalStyle.js" (configurações de estilo global), "main.jsx" (o cerne do projeto) e "ProtectedRoute.jsx" (função para imperdir que o aluno consiga acessar o jogo sem ter inserido as suas credenciais)

---------> IMPORTANTE <---------  
Após passar o back-end para o servidor, será necessário alterar a url que consta no fetch do componente "DownloadButton" (linha 30) para que a função busque a página certa para gerar/baixar o certificado.