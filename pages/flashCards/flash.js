import Image from "next/image";
import Link from "next/link";
import FlashCard from "../../components/flashcard/FlashCard";
import { useRef, useState } from "react";


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
  const cardRef = useRef();
  const [cardId, setCardId] = useState(1);
  const [cardBackState, setCardBackState] = useState();
  const changeHandler = () => {
    setCardId(cardId + 1);
  };
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
          <FlashCard
            id={cardId}
            showCard={cardBackState}
            count={questions.length}
            questionText="قانون کولن در چه سالی مطرح شد؟"
            questionTitle="لورم ایپسوم"
          />       
        <div className="card-controler">
          <button className="" onClick={changeHandler}>
            <i className="icon-east" />
          </button>
          <button className="correct" onClick={()=> setCardBackState("answer")}>
            <i className="icon-20"></i>
          </button>
          <button className="incorrect" onClick={()=> setCardBackState("inc-answer")}>
            <i className="icon-73" />
          </button>
          <button className="" onClick={() => setCardId(cardId - 1)}>
            <i className="icon-west" />
          </button>
        </div>
      </section>
    </>
  );
}

export default flash;
