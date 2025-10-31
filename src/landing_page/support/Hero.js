import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-5" >
        <div className="col-md-8 text-muted">
          <h1>Support Portal</h1>
        </div>

        <div className="col-md-4 text-end">
          <button
            className="btn btn-primary"
          >
            My Tickets
          </button>
        </div>
      </div>

      <div className="input-group mt-4">
        <span className="input-group-text bg-white ">
          <i className="fa fa-search text-muted" aria-hidden="true"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Eg. How do I open my account, How do I activate my acc..."
        />
      </div>

    </div>
  );
};

export default Hero;
