const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-5 d-flex flex-column justify-content-center">
          <h2 className="mt-5 text-muted">{productName}</h2>
          <p className="text-muted">{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="col-7">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
