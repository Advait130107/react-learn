import { useState } from "react";

function Card({ name, image, description, moreinfo }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`card1 ${showMore ? "moreInfo" : ""}`}>
      <div className="container">
        <img
          className="img1"
          src={image}
          alt={name}
          onClick={() => window.open(image)}
        />
      </div>

      <div className="aboutimg1">
        <h2 className="name">{name}</h2>

        <p>{description}</p>
        {showMore && (
          <div className="moreInfo">
            <p>{moreinfo}</p>
          </div>
        )}

        {!showMore && (
          <button className="button" onClick={() => setShowMore(true)}>
            Learn More
          </button>
        )}
        {showMore && (
          <button className="lessinfobutton" onClick={() => setShowMore(false)}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
