function SignIn({ closeFunc, submitHandler, num, changeNumber }) {
  return (
    <>
      <div className="d-flex">
        <div className="col">
          <h4>ورود / ثبت‌نام</h4>
          <p>برای ورود یا ثبت‌نام، شماره همراه خود را وارد کنید</p>
        </div>
        <button className="close-button" onClick={closeFunc}>
          <i className="icon-73" />
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div id="form-input">
          <input
            type={'tel'}
            placeholder="شماره همراه"
            maxLength="13"
            minLength="10"
            autoComplete="username mobile"
            spellCheck="false"
            required
            value={num}
            dir={num === '' ? 'rtl' : 'ltr'}
            onChange={(e) =>
              !isNaN(e.target.value) && changeNumber(e.target.value)
            }
          />
          <div className="tag px-4">98+</div>
        </div>
        <button
          type="submit"
          className="submitButton"
          disabled={num.length < 10}
        >
          ادامه
        </button>
      </form>
    </>
  )
}

export default SignIn
