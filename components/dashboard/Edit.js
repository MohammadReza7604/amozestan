import Image from 'next/image'

function Edit({ name }) {
  return (
    <div
      className="tab-pane fade active show"
      id="edit-tab"
      role="tabpanel"
      aria-labelledby="edit-tab"
    >
      <form className="row row--45">
        <div className="col-lg-8">
          <div className="row txt-inputs">
            <div className="col p-2">
              <label htmlFor="name">نام:</label>
              <input
                type="text"
                id="name"
                placeholder={name ? name + ' *' : 'نام'}
                required
              />
            </div>
            <div className="col p-2">
              <label htmlFor="mail">ایمیل:</label>
              <input
                type="email"
                id="mail"
                placeholder="email@gmail.com *"
                required
              />
            </div>
            <div className="col p-2">
              <label htmlFor="number">شماره همراه:</label>
              <input
                type={'tel'}
                placeholder="شماره همراه *"
                maxLength="13"
                minLength="10"
                autoComplete="username mobile"
                spellCheck="false"
                required
              />
            </div>
          </div>
          <div className="d-flex justify-content-center txt-inputs">
            <button className="btn savebtn">ذخیره</button>
            <button className="btn btn-danger px-5 fs-3 m-4 text-white">
              <svg
                class="me-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path
                  fill="white"
                  d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"
                ></path>
              </svg>
              خروج
            </button>
          </div>
        </div>
        <div className="col-lg-4 align-items-center d-flex pt-4 pe-2 flex-column">
          <Image
            src={'/images/blog/author-01.jpg'}
            width={100}
            height={100}
            className="form-pic"
          />
          <button className="change-pic">آپلود</button>
        </div>
      </form>
    </div>
  )
}

export default Edit
