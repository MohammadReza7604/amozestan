import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../../components/Header";
import ScrollToTop from "../../../components/common/ScrollToTop";
import Loader from "../../../components/Loader";
import Modal from "../../../components/common/Modal";
import SignIn from "../../../components/Forms/SignIn";
import Verification from "../../../components/Forms/verification";

function test() {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState("");
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");

  const nextStep = (e) => {
    e.preventDefault();
    setStep((p) => p + 1);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    if (step === 2) {
      setStep((p) => p - 1);
    } else {
      setIsOpen(false);
    }
  };
  const signIn = () => {
    setStep(1);
    setIsOpen(false);
    setSigned(true);
  };
  const q = [
    {
      id: "1",
      question: "کدام یک از گزینه های زیر خروجی درستی است؟",
      content:
        "x = 'Amoozestan Quiz'\n def amoozestan():\n print(x)\n amoozestan()",
      options: ["Amoozestan Quiz", "Apple", "Amoozestan", "amoozestan"],
      answer: "Amoozestan Quiz",
    },
    {
      question: "سوال",
      options: ["Amoozestan Quiz", "Apple", "Amoozestan", "amoozestan"],
      answer: "Amoozestan Quiz",
    },
  ];
  const handleClick = (e) => {
    e.target.style.backgroundColor = "#ffb800d9";
    e.target.style.borderColor = "white";
  };
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>edu</title>
      </Head>
      {loading && <Loader />}
      <Modal isOpen={isOpen} extraClass={step == 2 && "vnv"}>
        {step === 1 ? (
          <SignIn
            submitHandler={nextStep}
            closeFunc={closeModal}
            num={number}
            changeNumber={setNumber}
          />
        ) : (
          <Verification
            submitHandler={signIn}
            closeFunc={closeModal}
            num={number}
            changeCode={setCode}
            enteredCode={code}
          />
        )}
      </Modal>
      <div id="main-wrapper" className="main-wrapper">
        <Header sign={signed} func={openModal} changeState={setSigned} />

        <section className="tab-content faq-page-tab-content h-25 py-5 w-50 ratio-1x1 mx-auto">
          <div className="Quest-box">
            <div>
              <div className="w-100 h5 text-white">
                {q[0].id + "." + q[0].question}
              </div>
              <pre className="text-start mt-4 mb-5 w-100">{q[0].content}</pre>
            </div>
            <div>
              <div className="row m-0 p-4">
                {q[0].options.map((o, i) => (
                  <button key={i} className="options" onClick={handleClick}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button className="btn-danger rounded p-2 btn fs-3 m-4">
            اتمام آزمون
          </button>
        </section>
      </div>
      <ScrollToTop />
    </>
  );
}

export default test;
