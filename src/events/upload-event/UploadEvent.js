import React from "react";

const UploadEvent = () => {
  return (
    <React.Fragment>
      <section className="p-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-teal">
              <i className="fa fa-file-upload"/> Upload Event</p>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Image"/>
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option value="">Event Type</option>
                  <option value="FREE">FREE</option>
                  <option value="PRO">PRO</option>
                </select>
              </div>
              <div className="form-group">
                <input type="number" className="form-control" placeholder="Price"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Date"/>
              </div>
              <div className="form-group">
                <textarea rows="4" className="form-control" placeholder="Information" />
              </div>
              <div>
                <input type="submit" className="btn btn-teal btn-sm" value="Upload"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
};

export default UploadEvent;
