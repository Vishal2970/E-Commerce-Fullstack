import { useState } from "react";

export function ContactUs() {
  const [contacting, Setcontacting] = useState({
    name: "",
    number: "+91",
    email: "",
    msg: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contacting);
    Setcontacting({
      name: "",
      number: "",
      email: "",
      msg: "",
    });
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    Setcontacting({
      ...contacting,
      [name]: value,
    });
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
                          name="name"
                          value={contacting.name}
                          onChange={handleChange}
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
                          placeholder="98765xxxxx"
                          name="number"
                          value={contacting.number}
                          onChange={handleChange}
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
                          name="email"
                          value={contacting.email}
                          onChange={handleChange}
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
                        name="msg"
                        value={contacting.msg}
                        onChange={handleChange}
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
