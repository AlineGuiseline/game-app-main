import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import './swiper-style.css'
import { ProgressBarArea, ProgressBarContainer, ProgressBar, TextArea } from "./styles";
import QuestionSlide from "../QuestionSlide/QuestionSlide";
import DownloadModal from "../DownloadModal/DownloadModal";
import ResetModal from "../../components/ResetModal/ResetModal";

// perguntas e respostas
import questions from "../../data/questions.json";

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
    
      if (window.innerWidth < 500) {
        swiperRef.current.swiper.slideNext();
      }
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
            <div className="swiper-button-prev slider-arrow"></div>

            <ProgressBarContainer>
                <ProgressBar 
                style={{ width: `${progressPercentage}%` }}
                ></ProgressBar>
            </ProgressBarContainer>
            
            <TextArea>
                <p><span>{totalAnswered}/{questions.length}</span> respondidas</p>
                <p><span>{correctAnswersCount}</span> {correctAnswersCount === 1 ? 'acerto' : 'acertos'}</p>
            </TextArea>

            <div className="swiper-button-next"></div>
            
        </ProgressBarArea>
      </main> 
    );
}

Carrossel.propTypes = {
    isLogoutModalOpen: PropTypes.func.isRequired,
};

export default Carrossel;