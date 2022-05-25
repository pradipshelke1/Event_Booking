import React from "react";
import { Link } from "react-router-dom";
import brand from "../../assets/images/brand.png";

const Register = () => {
  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <div className="card animated zoomIn">
                <div className="card-header bg-teal text-white text-center">
                  <p className="h3">Register Here</p>
                </div>
                <div className="card-body bg-light">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
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
                        value="Register"
                      />
                    </div>
                    <small>
                      Already have an Account ?
                      <Link
                        to="/users/login"
                        className="font-weight-bold text-white">
                         &nbsp;Login
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

export default Register;
