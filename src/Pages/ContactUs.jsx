export function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
  };
  return (
    <>
      <div className="container p-3">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h5 className="card-title">Send Your Query Here</h5>
                  <p className="card-text">
                    <div className="col-sm-6 mb-3 mb-sm-0 p-2">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Narendra modi"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="+919999xxxxxx"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </p>
                  <button type="submit" class="btn btn-primary">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Connect with us!</h5>
                <p className="card-text">
                  Connect with us through the following mediums:
                </p>
                <ul className="list-unstyled">
                  <li>
                    Email: <a href="mailto:vishal@mail.com">vishal@mail.com</a>
                  </li>
                  <li>Number: 9999966552</li>
                  <li>Address: Near Mamura, Noida, Uttar Pradesh</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
