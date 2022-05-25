import React from "react";

const FreeEvents = () => {
  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-teal">Free Events</p>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                dicta minus molestiae vel beatae natus eveniet ratione
                temporibus aperiam harum alias officiis assumenda officia
                quibusdam deleniti eos cupiditate dolore doloribus!
              </p>
              <p className="h5">Total Available : 4</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <img src="https://www.eventsnow.com/files/events/15695-decoupage-bottle-online-workshop-for-beginner--15965911902021229773.jpg" />
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p className="h4">CUBE MATRIX ONLINE CHESS CLASS</p>
                      <p>DATE : 6TH SEP 2022</p>
                      <h6>Price : FREE</h6>
                    </div>
                    <div className="col">
                      <button className="btn btn-teal btn-sm">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FreeEvents;
