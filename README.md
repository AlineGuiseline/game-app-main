### **→ About the project**

The [Proficiency Game](https://game-pro-sage.vercel.app/#/) presents a login screen where the student can enter their registration number (RN) and full name **(you can log in using random numbers such as 123)**. After entering and confirming this information, the student gains access to 10 questions, displayed as slides, each with 5 alternatives. The feedback is instantaneous, and they are free to answer the questions in any order they prefer. Correctly answering at least 6 questions will generate a certificate containing their full name, RA, score, date, and time.
Logging out will clear their data, as well as the selected answers.

> The project was built with _React + Vite_ and styled using _styled-components_. The question slides were created with the _Swiper library_, and the certificate was generated using the _jsPDF_ library.

### **→ Cloning to your machine**

In the terminal:
```
git clone https://github.com/AlineGuiseline/game-app-main
cd game-app-main
npm install
npm run dev
```

### → Correct answers ✔

<details>
<summary>Spoiler alert! Click here.</summary>

| Question  | Answer |
| ------------- | ------------- |
| 1  | Ideological Stalemate  |
| 2  | Genetic variation  |
| 3  | The consequences of unchecked ambition |
| 4  | The harmful effects of pesticides on ecosystems |
| 5  | The dangers of totalitarian regimes |
| 6  | Humans are free to choose but must bear responsibility for their choices |
| 7  | The importance of racial unity and equality |
| 8  | It shows how mass can be converted into energy |
| 9  | A period of peace and stability under Roman rule |
| 10  | The mechanization of production and growth of cities |

</details>

### **→ About the file organization**  

1. **public folder** contains both the favicon and certificate images, as well as the fonts used in the certificate.
2. **src folder** contains the files "App.jsx", "GlobalStyle.js", "main.jsx", and "ProtectedRoute.jsx" **(code to prevent the student from accessing the game without logging in)**, along with the following subfolders:
    1. **assets folder:** contains all the project images, separated into the "GamePage" and "IntroPage" subfolders.
    2. **components folder:** contains all the components used in the project, separated into subfolders named according to the components, containing both the code in .jsx and the styles in .js.
    3. **data folder** contains a .json file with all the questions, alternatives, and correct answers.
    4. **fonts folder:** contains the fonts used in the certificate.
    5. **pages folder:** contains the structure of the two pages of the project (login screen and game screen), separated into the "GamePage" and "IntroPage" subfolders.