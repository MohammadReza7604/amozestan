import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./common/ScrollToTop";
import Loader from "./Loader";
import { useEffect, useState } from "react";
import Head from "next/head";
import Modal from "./common/Modal";
import SignIn from "./Forms/SignIn";
import Verification from "./Forms/verification";

function Layout({ children, showFooter }) {
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
        {children}
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default Layout;
