import React from "react";

const Stats = () => {
  return (
    <div className="container mt-5 p-4">
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <h1 className="mb-5 fs-2" style={{ color: "#424242" }}>
            Trust with confidence
          </h1>

          <h2 className="fs-4" style={{ color: "#424248" }}>
            Customer-first always
          </h2>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-4 mt-5" style={{ color: "#424248" }}>
            No spam or gimmicks
          </h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 mt-5" style={{ color: "#424248" }}>
            The Zerodha universe
          </h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-5" style={{ color: "#424248" }}>
            Do better with money
          </h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-lg-7 col-sm-12">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            style={{ width: "100%" }}
          />
          <div className="text-center">
            <a className="text-decoration-none mx-2 mx-sm-5" href="#">
              Explore our products
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a className="text-decoration-none" href="#">
              Try kit demo
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
