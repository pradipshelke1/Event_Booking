import React from "react";
import { Link } from "react-router-dom";
import brand from "../../assets/images/brand.png";

const Login = () => {
  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card animated zoomIn">
                <div className="card-header bg-teal text-white text-center">
                  <p className="h3">Login Here</p>
                </div>
                <div className="card-body bg-light">
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        className="btn btn-teal btn-sm"
                        value="Login"
                      />
                    </div>
                    <small>
                      Don't have an Account ?{" "}
                      <Link
                        to="/users/register"
                        className="font-weight-bold text-white"
                      >
                        Register
                      </Link>
                    </small>
                  </form>
                </div>
                <div className="card-footer text-center">
                  <img src={brand} alt="" width="160px" height="40px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
