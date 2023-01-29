import Image from "next/image";
import Link from "next/link";
import FlashCard from "../../components/flashcard/FlashCard";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const questions = [
  {
    questionTitle: "لورم ایپسوم",
    questionText: "قانون کولن در چه سالی مطرح شد؟",
  },
  { questionTitle: "Test2", questionText: "Test2" },

  { questionTitle: "Test3", questionText: "Test3" },

  { questionTitle: "Test4", questionText: "Test4" },
];

function flash() {
  const [cardsShowBack, setCardsShowBack] = useState(questions.map(() => null));
  const [cardBackState, setCardBackState] = useState(questions.map(() => ""));

  const changeHandler = () => {
    setCardId(cardId + 1);
  };
  const [questionCardsStates, setQuestionCardsStates] = useState(
    questions.map(() => "")
  );

  const [swiper, setSwiper] = useState(null);
  function toNextSlide() {
    swiper?.slideTo(swiper.activeIndex + 1);
  }

  function toPrevSlide() {
    swiper?.slideTo(swiper.activeIndex - 1);
  }

  return (
    <>
      <header id="flashcard-header">
        <Link href="/">
          <Image
            className="logo-dark"
            src="/images/logo/logo-white.png"
            height={50}
            width={158}
            alt="Corporate Logo"
          />
        </Link>

        <Link href="/courses/course_details" className="close-btn">
          <i className="icon-73"></i>
        </Link>
      </header>
      <section id="flashcard-body">
        <div style={{ width: "100%" }}>
          <Swiper onSwiper={setSwiper}>
            {questions.map((q, index) => (
              <SwiperSlide>
                <FlashCard
                  id={index + 1}
                  count={questions.length}
                  cardState={cardBackState[index]}
                  setCardState={(state) =>
                    setCardBackState((curr) =>
                      curr.map((itemState, index) =>
                        index == index ? state : itemState
                      )
                    )
                  }
                  questionText={q.questionText}
                  questionTitle={q.questionTitle}
                  showBackFunctionRefSetter={(showBack) => {
                    setCardsShowBack((curr) =>
                      curr.map((callBack, idx) =>
                        idx === index ? showBack : callBack
                      )
                    );
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="card-controler">
          <button className="" onClick={toPrevSlide}>
            <i className="icon-east" />
          </button>
          <button
            className="correct"
            onClick={() => {
              cardsShowBack[swiper?.activeIndex]?.("answer");
            }}
          >
            <i className="icon-20"></i>
          </button>
          <button
            className="incorrect"
            onClick={() => {
              cardsShowBack[swiper?.activeIndex]?.("inc-answer");
            }}
          >
            <i className="icon-73" />
          </button>
          <button className="" onClick={toNextSlide}>
            <i className="icon-west" />
          </button>
        </div>
      </section>
    </>
  );
}

export default flash;
