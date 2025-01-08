### **→ Sobre o projeto**

O [Game Proficiência](https://livrodigital.unicesumar.edu.br/game/proficiencia/#/) apresenta tela de login para que o aluno insira o seu número de registro (RA) e seu nome completo. Após inserir e conferir essas informações, o aluno tem acesso a 10 questões, dispostas como slides, cada uma com 5 alternativas. O feedback é instantâneo e ele está livre para responder às perguntas na ordem em que preferir. Acertar, pelo menos, 6 questões, gera um certificado contendo nome completo, RA, pontuação, data e hora.   
Fazer o logout limpa os seus dados, bem como as respostas selecionadas.

> O projeto foi construído em _React + Vite_ e teve sua estilização realizada com _styled-components_. Os slides das perguntas foram feitos com a biblioteca _swiper_ e o certificado foi feito com a biblioteca _jspdf_.

### **→ Clonando na sua máquina**

No terminal:
```
git clone https://github.com/DevEdTech/game_proficiencia.git
cd game_proficiencia
npm install
npm run dev
```

### **→ Sobre a organização dos arquivos**  

1. **Pasta dist:** contém os arquivos buildados, necessários para o deploy (index.html, imagens, fontes, folha de estilo e js)  
2. **Pasta public:** contém tanto as imagens de favicon e do certificado, quanto as fontes utilizadas no certificado 
3. **Pasta src:** contém os arquivos "App.jsx", "GlobalStyle.js", "main.jsx" e "ProtectedRoute.jsx" **(código feito para impedir que o aluno conseguisse acessar o jogo sem ter feito o login)**, bem como as pastas abaixo:
    1. **Pasta assets:** contém todas as imagens do projeto, separadas nas subpastas "GamePage" e "IntroPage"
    2. **Pasta components:** contém todos os componentes utilizados no projeto, separados nas subpastas nomeadas de acordo com os componentes e contendo o código em .jsx e o estilo em .js
    3. **Pasta data:** contém um arquivo .json com todas as perguntas, alternativas e as respostas corretas
    4. **Pasta fonts:** contém as fontes utilizadas no certificado
    5. **Pasta pages:** contém a estrutura das duas páginas do projeto (tela de login e tela do jogo), separadas nas subpastas "GamePage" e "IntroPage"
