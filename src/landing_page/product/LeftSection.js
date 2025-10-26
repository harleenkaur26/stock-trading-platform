import React from "react";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className=" col-8 p-5">
          <img src={imageUrl} />
        </div>

        <div className=" col-4 p-5">
          <h2 className="mt-5 text-muted">{productName}</h2>
          <p className="text-muted">{productDescription}</p>

          <div>
            <a href={tryDemo}>Try Demo
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a href={learnMore} style={{marginLeft:"20px"}}>Learn More
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft:"20px"}}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
