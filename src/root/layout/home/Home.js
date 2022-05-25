import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="landing-page">
        <div className="wrapper">
          <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
            <h5 className="display-4">
              {/* <i className="fa fa-shopping-cart" /> */}
              Let Book an Event
            </h5>
            <p className="lead px-4">
              A positive attitude causes a chain reaction of positive thoughts,
              events and outcomes. It is a catalyst and it sparks extraordinary
              results.When you set goals and you reach those goals in mid-August
              and early September, there's nothing to look forward to. You sort
              of lose your drive.
            </p>
            <Link to="/events/free" className="btn btn-danger btn-sm">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
