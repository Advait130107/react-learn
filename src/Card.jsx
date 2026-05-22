function Card({ name, image, description }) {
  return (
    <div className="card1">
      <div className="container">
        <img
          className="img1"
          src={image}
          alt={name}
          onClick={() =>
            window.open(
              "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png",
            )
          }
        />
      </div>

      <div className="aboutimg1">
        <h2 className="name">{name}</h2>

        <p>{description}</p>

        <button className="button">Learn More</button>
      </div>
    </div>
  );
}

export default Card;
