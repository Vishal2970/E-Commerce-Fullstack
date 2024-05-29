import Helmet from "react-helmet";

export function LoginMode() {
  return (
    <>
    <Helmet bodyAttributes={{ style: "background-color :#FADCAB" }} />
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0 p-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Shopkeeper Login</h5>
                <img
                  src="shopkeeper.avif"
                  alt="Shopkeeper"
                  width="300"
                  height="200"
                />
                <a href="/login" className="btn btn-primary m-3 p-2">
                  Login
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wholesalers Login</h5>
                <img
                  src="\wholesalers.jpg"
                  alt="wholesalers"
                  width="300"
                  height="200"
                />
                <br />
                <a href="/login" className="btn btn-primary m-3 p-2">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
