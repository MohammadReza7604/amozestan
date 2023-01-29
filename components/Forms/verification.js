import Otp from './Otp'

function Verification({
  num,
  closeFunc,
  submitHandler,
  changeCode,
  enteredCode,
}) {
  return (
    <>
      <div className="d-flex">
        <div className="col">
          <div className="d-flex">
            <h5>{'98' + num + '+'}</h5>
            <button className="btn btn-secondary2 mb-5 me-3 ms-1" tabIndex={-1}>
              ویرایش
            </button>
          </div>
          <p>کد فعالسازی به شماره موبایل شما پیامک شد</p>
        </div>
        <button className="close-button" tabIndex={0} onClick={closeFunc}>
          <i className="icon-73" />
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div id="form-input">
          <div className="otp-part">
            <p className="ms-4">کد فعالسازی را وارد کنید</p>
            <Otp func={changeCode} />
          </div>
          <div className="pt-5 d-flex align-items-center justify-content-between">
            <p className="m-0">کد را دریافت نکردید؟</p>
            <button className="btn btn-secondary2 ms-2 pt-2" tabIndex={-1}>
              ارسال دوباره کد
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="submitButton"
          tabIndex={0}
          disabled={enteredCode.length < 4}
        >
          ادامه
        </button>
      </form>
    </>
  )
}

export default Verification
