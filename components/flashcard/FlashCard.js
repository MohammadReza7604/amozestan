// import { useState } from "react";
// import ReactCardFlip from "react-card-flip";

// function FlashCard() {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [cardBackState, setCardBackState] = useState();

//   function handleClick() {
//     setIsFlipped((prevState) => !prevState);
//   }

//   function showBack(mode) {
//     setCardBackState(mode);
//     handleClick();
//   }

//   return (
//     <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
//       <div className="flashCard">
//         <button onClick={() => showBack("answer")}>پاسخ</button>
//         <button onClick={() => showBack("inc-answer")}>پاسخ نادرست</button>
//       </div>

//       <div>
//         {cardBackState === "answer" ? <>جواب</> : <>جواب نادرست</>}
//         <button onClick={handleClick}>بازگشت</button>
//       </div>
//     </ReactCardFlip>
//   );
// }
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

function FlashCard({
  id,
  count,
  questionText,
  questionTitle,
  cardState,
  setCardState,
  showBackFunctionRefSetter,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    console.log("is flipped of ", id, " ", isFlipped);
  }, [isFlipped]);

  const showBack = (mode) => {
    console.log(isFlipped);
    if (mode === "answer") {
      if (isFlipped) {
        console.log("From 'inc-answer' Going To 'answer'");
        setIsFlipped(false);
        // TODO:...
      } else {
        console.log("From '' Going To 'answer'");
        setCardState("answer");
        setIsFlipped(true);
      }
    } else {
      if (isFlipped) {
        console.log("From 'answer' Going To 'inc-answer'");
        setIsFlipped(false);
        // TODO:...
      } else {
        console.log("From '' Going To 'inc-answer'");
        setCardState("inc-answer");
        setIsFlipped(true);
      }
    }
  };

  const [touchStartY, setTouchStartY] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  function detectTouchDirection(event) {
    if (touchStartY) {
      if (Math.abs(event.pageX - touchStartX) < 40) {
        if (event.pageY === touchStartY) {
        } else {
          const diff = event.pageY - touchStartY;
          if (diff > 0) {
            // touch to down
            if (isFlipped) {
              if (cardState === "inc-answer") setIsFlipped(false);
            } else {
              setCardState("answer");
              setIsFlipped(true);
            }
          } else {
            // touch to up
            if (isFlipped) {
              if (cardState === "answer") setIsFlipped(false);
            } else {
              setCardState("inc-answer");
              setIsFlipped(true);
            }
          }
        }
        setTouchStartY(null);
        setTouchStartX(null);
      }
    } else {
      setTouchStartY(event.clientY);
      setTouchStartX(event.clientX);
    }
  }

  useEffect(() => {
    showBackFunctionRefSetter(showBack);
  }, []);

  return (
    <div
      onPointerDown={detectTouchDirection}
      onPointerUp={detectTouchDirection}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="flashCard">
          <Image
            className="greenbox"
            src="/images/Pattern.svg"
            width={171}
            height={171}
          />
          {/* <div className="transparentbox" /> */}
          <svg
            className="save"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="
http://www.w3.org/2000/svg
"
          >
            <circle cx="25" cy="25" r="25" fill="#2B3544" />
            <path
              d="M25.16 37.4223L25 37.5858L24.824 37.4223C17.224 30.376 12.2 25.7166 12.2 20.9918C12.2 17.7221 14.6 15.2698 17.8 15.2698C20.264 15.2698 22.664 16.9046 23.512 19.1281H26.488C27.336 16.9046 29.736 15.2698 32.2 15.2698C35.4 15.2698 37.8 17.7221 37.8 20.9918C37.8 25.7166 32.776 30.376 25.16 37.4223ZM32.2 12C29.416 12 26.744 13.3243 25 15.4005C23.256 13.3243 20.584 12 17.8 12C12.872 12 9 15.9401 9 20.9918C9 27.1553 14.44 32.2071 22.68 39.842L25 42L27.32 39.842C35.56 32.2071 41 27.1553 41 20.9918C41 15.9401 37.128 12 32.2 12Z"
              fill="#F8F8F8"
              fill-opacity="0.8"
            />
          </svg>
          <h5 className="title">{questionTitle}</h5>
          <div className="greenline" />
          <span className="count">
            {count}/{id}
          </span>
          <p>{questionText}</p>
        </div>
        <div className="flashCard">
          {cardState === "answer" ? <p>جواب</p> : <p>جواب نادرست</p>}
        </div>
      </ReactCardFlip>
    </div>
  );
}
export default FlashCard;

// // TODO: move components states to the following state 😐
// const [componentState, setComponentState] = useState("initial"); //  showAnswer | initial | showIncorrectAnswer
// const [transitionState, setTransitionState] = useState(); //  flippingUp | flippingDown

// // TODO: complete touch-direction detection logic
// const [touchStartY, setTouchStartY] = useState(null);
// function detectTouchDirection(event) {
//   if (touchStartY) {
//     if (event.pageY - touchStartY > 0) {
//       // touch to down
//       // TODO:
//       if (componentState === "initial") {
//         setTransitionState("flippingDown");
//         setComponentState("showAnswer");
//       } else if (componentState === "showIncorrectAnswer") {
//         // setTransitionState("flippingUp")
//         setComponentState("initial");
//       }
//     } else {
//       // touch to up
//       if (componentState === "initial") {
//         // setTransitionState("flippingUp")
//         setComponentState("showIncorrectAnswer");
//       } else if (componentState === "showAnswer") {
//         // setTransitionState("flippingDown")
//         setComponentState("initial");
//       }
//     }
//     setTouchStartY(null);
//   } else {
//     setTouchStartY(event.pageY);
//   }
// }
