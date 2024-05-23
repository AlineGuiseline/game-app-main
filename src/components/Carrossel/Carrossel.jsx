/* FUNCIONAL, MAS OS BOTÕES JÁ ESTÃO LIBERADOS E EXIBE OS MODAIS*/
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SwiperCore from 'swiper';
import { useEffect, useRef, useState } from "react";

import './swiper-style.css'
import { ProgressBarArea, ProgressBarContainer, ProgressBar, TextArea } from "./styles";
import QuestionSlide from "../QuestionSlide/QuestionSlide";

// perguntas e respostas
import questions from "../../data/questions.json";
import DownloadModal from "../DownloadModal/DownloadModal";
import ResetModal from "../../components/ResetModal/ResetModal";

// Configura o Swiper para usar o módulo de navegação

SwiperCore.use([Navigation]);

function Carrossel({ isLogoutModalOpen }) {
    // Estado para rastrear quais perguntas foram respondidas
    const [answeredQuestions, setAnsweredQuestions] = useState({});
    // Referência ao swiper para controlar a navegação programaticamente
    const swiperRef = useRef(null);

    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    useEffect(() => {
        const storedAnswers = JSON.parse(localStorage.getItem("storedCorrectAnswers")) || [];
        const storedAnsweredQuestions = JSON.parse(localStorage.getItem("answeredQuestions")) || {};

        setCorrectAnswersCount(storedAnswers.length);
        setAnsweredQuestions(storedAnsweredQuestions);
    }, []);
    const handleCorrectAnswer = () => {
        setCorrectAnswersCount(prevCount => prevCount + 1);
    };

    // função chamada quando uma pergunta é respondida
    const handleAnswer = (questionId) => {
        setAnsweredQuestions(prevAnswers => ({
        ...prevAnswers,
        [questionId]: true,
      }));

      const storedAnsweredQuestions = {
        ...answeredQuestions,
        [questionId]: true
      };
      localStorage.setItem("answeredQuestions", JSON.stringify(storedAnsweredQuestions));
    };

    const totalAnswered = Object.keys(answeredQuestions).length;
    const allQuestionsAnswered = totalAnswered === questions.length;

    const progressPercentage = ((totalAnswered / questions.length) * 100).toFixed(0);

    // Exibição do modal de Download
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isResetModalOpen, setIsResetModalOpen] = useState(false);

    const handleResetModalOpen = (isOpen) => {
        setIsResetModalOpen(isOpen);
    };

    useEffect(() => {
        if (allQuestionsAnswered && correctAnswersCount >= 6) {
            setIsModalOpen(true);
        }
    }, [allQuestionsAnswered, correctAnswersCount]);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;
        const slides = swiperInstance.slides
    
        if (isModalOpen || isResetModalOpen || isLogoutModalOpen) {
            console.log(isLogoutModalOpen)
            slides.forEach((slide) => {
                slide.classList.add('swiper-slide-blurred');
            })
        } else {
            slides.forEach((slide) => {
                slide.classList.remove('swiper-slide-blurred');
            })
        }
    }, [isModalOpen, isResetModalOpen, isLogoutModalOpen]);
    

    return (
        <main className="container">

        <Swiper
          ref={swiperRef}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}

          loop={true}
          grabCursor={true}
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={
              {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
              }
          }
          modules={[EffectCoverflow, Pagination, Navigation]}
          slideActiveClass="swiper-slide-active"
          className="swiper_container"
        >
            {questions.map(question => (
                <SwiperSlide 
                key={question.id}
                >
                    <QuestionSlide
                        question={question}
                        onAnswer={() => handleAnswer(question.id)}
                        onCorrectAnswer={handleCorrectAnswer}
                    />
                </SwiperSlide>
            ))}

        </Swiper>
        {isModalOpen && (
            <DownloadModal onClose={handleCloseModal} />
        )}
            
        {allQuestionsAnswered && correctAnswersCount < 6 && (
            <ResetModal onModalOpen={handleResetModalOpen}  />
        )}
        
        <ProgressBarArea>
            <ProgressBarContainer>
                <ProgressBar 
                style={{ width: `${progressPercentage}%` }}
                ></ProgressBar>
            </ProgressBarContainer>
            
            <TextArea>
                <p><span>{totalAnswered}/{questions.length}</span> respondidas</p>
                <p><span>{correctAnswersCount}</span> acertos</p>
            </TextArea>
        </ProgressBarArea>
        <div className="swiper-button-prev slider-arrow"></div>
        <div className="swiper-button-next"></div>
      </main> 
    );
}

export default Carrossel;


/* FUNCIONAL, MAS SÓ LIBERA OS BOTÕES APÓS RESPONDER E EXIBE OS MODAIS
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SwiperCore from 'swiper';
import { useEffect, useRef, useState } from "react";

import './carrossel.css'
import QuestionSlide from "../QuestionSlide/QuestionSlide";

// perguntas e respostas
import questions from "../../data/questions.json";
import DownloadModal from "../DownloadModal/DownloadModal";
import ResetModal from "../../components/ResetModal/ResetModal";

// Configura o Swiper para usar o módulo de navegação

SwiperCore.use([Navigation]);

function Carrossel() {
    // Estado para rastrear quais perguntas foram respondidas
    const [answeredQuestions, setAnsweredQuestions] = useState({});
    // Referência ao swiper para controlar a navegação programaticamente
    const swiperRef = useRef(null);

    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    useEffect(() => {
        const storedAnswers = JSON.parse(localStorage.getItem("storedCorrectAnswers")) || [];
        const storedAnsweredQuestions = JSON.parse(localStorage.getItem("answeredQuestions")) || {};

        setCorrectAnswersCount(storedAnswers.length);
        setAnsweredQuestions(storedAnsweredQuestions);
    }, []);
    const handleCorrectAnswer = () => {
        setCorrectAnswersCount(prevCount => prevCount + 1);
    };

    // função chamada quando uma pergunta é respondida
    const handleAnswer = (questionId) => {
        setAnsweredQuestions(prevAnswers => ({
        ...prevAnswers,
        [questionId]: true,
      }));

      const storedAnsweredQuestions = {
        ...answeredQuestions,
        [questionId]: true
      };
      localStorage.setItem("answeredQuestions", JSON.stringify(storedAnsweredQuestions));
    };

    // verifica se uma pergunta foi respondida
    const isAnswered = (questionId) => {
      return answeredQuestions[questionId] !== undefined;
    };

    // função chamada quando o slide é alterado
    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            const currentSlide = swiper.activeIndex;
            // Verifica se o slide atual foi respondido, se não foi, volta para o slide anterior
            if (currentSlide > 0 && !isAnswered(questions[currentSlide - 1].id)) {
                swiper.slideTo(currentSlide - 1);
            }
        }
    };

    // função para avançar para o próximo slide se a pergunta atual foi respondida
    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            const currentSlide = swiper.activeIndex;
            // verificase currentSlide é menor que o comprimento de questions
            if (currentSlide < questions.length) {
                // Se for, verificamos se a pergunta correspondente foi respondida antes de permitir a navegação para o próximo slide
                if (isAnswered(questions[currentSlide].id)) {
                    swiper.slideNext();
                }
            } else {
                // Se currentSlide for igual ou maior que o comprimento de questions, isso significa que estamos no último slide (o botão),
                // então só liberamos a navegação para o próximo slide sem realizar nenhuma verificação adicional 
                swiper.slideNext();
            }
        }
    };

    const totalAnswered = Object.keys(answeredQuestions).length;
    const allQuestionsAnswered = totalAnswered === questions.length;

    const progressPercentage = ((totalAnswered / questions.length) * 100).toFixed(0);

    return (
        <main className="container">

        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{el:'.swiper-pagination', clickable:true}}

          grabCursor={true}
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={
              {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
              }
          }
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
            {questions.map(question => (
                <SwiperSlide key={question.id}>
                    <QuestionSlide
                        question={question}
                        onAnswer={() => handleAnswer(question.id)}
                        onCorrectAnswer={handleCorrectAnswer}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        {allQuestionsAnswered && correctAnswersCount >= 3 && (
            <DownloadModal />
        )}
            
        {allQuestionsAnswered && correctAnswersCount < 3 && (
            <ResetModal />
        )}
         
        <div className="swiper-button-prev slider-arrow">
        </div>
        <div className="swiper-button-next"
          onClick={handleNextSlide}>
        </div>

        <div className="swiper-pagination"></div>
        
        <div className="progress-bar-area">
            <div className="progress-bar-container">
                <div 
                className="progress-bar" 
                style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            
            {progressPercentage}%
        </div>

      </main> 
    );
}

export default Carrossel;
*/


/* FUNCIONAL, MAS SÓ LIBERA OS BOTÕES APÓS RESPONDER E OS BOTÕES ESTÃO NO ÚLTIMO SLIDE
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SwiperCore from 'swiper';
import { useEffect, useRef, useState } from "react";

import './carrossel.css'
import QuestionSlide from "../QuestionSlide/QuestionSlide";

// perguntas e respostas
import questions from "../../data/questions.json";
import DownloadButton from "../DownloadButton/DownloadButton";
import ResetButton from "../ResetButton/ResetButton";
import DownloadModal from "../DownloadModal/DownloadModal";
import ResetModal from "../../components/ResetModal/ResetModal";

// Configura o Swiper para usar o módulo de navegação

SwiperCore.use([Navigation]);

function Carrossel() {
    // Estado para rastrear quais perguntas foram respondidas
    const [answeredQuestions, setAnsweredQuestions] = useState({});
    // Referência ao swiper para controlar a navegação programaticamente
    const swiperRef = useRef(null);

    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    useEffect(() => {
        const storedAnswers = JSON.parse(localStorage.getItem("storedCorrectAnswers")) || [];
        const storedAnsweredQuestions = JSON.parse(localStorage.getItem("answeredQuestions")) || {};

        setCorrectAnswersCount(storedAnswers.length);
        setAnsweredQuestions(storedAnsweredQuestions);
    }, []);
    const handleCorrectAnswer = () => {
        setCorrectAnswersCount(prevCount => prevCount + 1);
    };

    // função chamada quando uma pergunta é respondida
    const handleAnswer = (questionId) => {
        setAnsweredQuestions(prevAnswers => ({
        ...prevAnswers,
        [questionId]: true,
      }));

      const storedAnsweredQuestions = {
        ...answeredQuestions,
        [questionId]: true
      };
      localStorage.setItem("answeredQuestions", JSON.stringify(storedAnsweredQuestions));
    };

    // verifica se uma pergunta foi respondida
    const isAnswered = (questionId) => {
      return answeredQuestions[questionId] !== undefined;
    };

    // função chamada quando o slide é alterado
    const handleSlideChange = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            const currentSlide = swiper.activeIndex;
            // Verifica se o slide atual foi respondido, se não foi, volta para o slide anterior
            if (currentSlide > 0 && !isAnswered(questions[currentSlide - 1].id)) {
                swiper.slideTo(currentSlide - 1);
            }
        }
    };

    // função para avançar para o próximo slide se a pergunta atual foi respondida
    const handleNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            const currentSlide = swiper.activeIndex;
            // verificase currentSlide é menor que o comprimento de questions
            if (currentSlide < questions.length) {
                // Se for, verificamos se a pergunta correspondente foi respondida antes de permitir a navegação para o próximo slide
                if (isAnswered(questions[currentSlide].id)) {
                    swiper.slideNext();
                }
            } else {
                // Se currentSlide for igual ou maior que o comprimento de questions, isso significa que estamos no último slide (o botão),
                // então só liberamos a navegação para o próximo slide sem realizar nenhuma verificação adicional 
                swiper.slideNext();
            }
        }
    };

    const totalAnswered = Object.keys(answeredQuestions).length;
    const progressPercentage = ((totalAnswered / questions.length) * 100).toFixed(0);

    return (
        <main className="container">

        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{el:'.swiper-pagination', clickable:true}}

          grabCursor={true}
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={
              {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
              }
          }
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
            {questions.map(question => (
                <SwiperSlide key={question.id}>
                    <QuestionSlide
                        question={question}
                        onAnswer={() => handleAnswer(question.id)}
                        onCorrectAnswer={handleCorrectAnswer}
                    />
                </SwiperSlide>
            ))}
            {questions.length > 0 && (
                <SwiperSlide>
                        <DownloadButton 
                        correctAnswersCount={correctAnswersCount} 
                        totalQuestions={questions.length} />
                        <ResetButton />
                </SwiperSlide>
            )}
        </Swiper>
         
        <div className="swiper-button-prev slider-arrow">
        </div>
        <div className="swiper-button-next"
          onClick={handleNextSlide}>
        </div>

        <div className="swiper-pagination"></div>
        
        <div className="progress-bar-area">
            <div className="progress-bar-container">
                <div 
                className="progress-bar" 
                style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            
            {progressPercentage}%
        </div>

      </main> 
    );
}

export default Carrossel;
*/



/* FUNCIONAL E TODOS OS BOTÕES ESTÃO LIBERADOS
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SwiperCore from 'swiper';
import { useEffect, useRef, useState } from "react";

import './carrossel.css'


// perguntas e respostas
import questions from "../../data/questions.json";
import QuestionSlide from "../QuestionSlide/QuestionSlide";
import DownloadButton from "../DownloadButton/DownloadButton";
import ResetButton from "../ResetButton/ResetButton";

// Configura o Swiper para usar o módulo de navegação

SwiperCore.use([Navigation]);

function Carrossel() {
    // Estado para rastrear quais perguntas foram respondidas
    const [answeredQuestions, setAnsweredQuestions] = useState({});
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    // Referência ao swiper para controlar a navegação programaticamente
    const swiperRef = useRef(null);

    useEffect(() => {
        const storedAnswers = JSON.parse(localStorage.getItem("storedCorrectAnswers")) || [];
        const storedAnsweredQuestions = JSON.parse(localStorage.getItem("answeredQuestions")) || {};

        setCorrectAnswersCount(storedAnswers.length);
        setAnsweredQuestions(storedAnsweredQuestions);
    }, []);

    const handleCorrectAnswer = () => {
        setCorrectAnswersCount(prevCount => prevCount + 1);
    };
  
    // função chamada quando uma pergunta é respondida
    const handleAnswer = (questionId) => {
        setAnsweredQuestions(prevAnswers => ({
        ...prevAnswers,
        [questionId]: true,
      }));

      const storedAnsweredQuestions = {
        ...answeredQuestions,
        [questionId]: true
      };
      localStorage.setItem("answeredQuestions", JSON.stringify(storedAnsweredQuestions));
    };

    // verifica se uma pergunta foi respondida
    const isAnswered = (questionId) => {
      return answeredQuestions[questionId] !== undefined;
    };

        // função chamada quando o slide é alterado
        const handleSlideChange = () => {
            if (swiperRef.current && swiperRef.current.swiper) {
                const swiper = swiperRef.current.swiper;
                const currentSlide = swiper.activeIndex;
                // Verifica se o slide atual foi respondido, se não foi, volta para o slide anterior
                if (currentSlide > 0 && !isAnswered(questions[currentSlide - 1].id)) {
                    swiper.slideTo(currentSlide - 1);
                }
            }
        };

        // função para avançar para o próximo slide se a pergunta atual foi respondida
        const handleNextSlide = () => {
            if (swiperRef.current && swiperRef.current.swiper) {
                const swiper = swiperRef.current.swiper;
                const currentSlide = swiper.activeIndex;
                // verificase currentSlide é menor que o comprimento de questions
                if (currentSlide < questions.length) {
                    // Se for, verificamos se a pergunta correspondente foi respondida antes de permitir a navegação para o próximo slide
                    if (isAnswered(questions[currentSlide].id)) {
                        swiper.slideNext();
                    }
                } else {
                    // Se currentSlide for igual ou maior que o comprimento de questions, isso significa que estamos no último slide (o botão),
                    // então só liberamos a navegação para o próximo slide sem realizar nenhuma verificação adicional 
                    swiper.slideNext();
                }
            }
        };

  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        onSlideChange={handleSlideChange}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {questions.map(question => (
                <SwiperSlide key={question.id}>
                    <QuestionSlide
                        question={question}
                        onAnswer={() => handleAnswer(question.id)}
                        onCorrectAnswer={handleCorrectAnswer}
                    />
                </SwiperSlide>
            ))}
            {questions.length > 0 && (
                <SwiperSlide>
                        <DownloadButton 
                        correctAnswersCount={correctAnswersCount} 
                        totalQuestions={questions.length} 
                        />
                        <ResetButton />
                </SwiperSlide>
            )}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline">
            onClick={handleNextSlide}
            </ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Carrossel;
*/
