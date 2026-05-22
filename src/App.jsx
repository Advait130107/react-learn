import "./App.css";
import "./index.css";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="header">
        <h3>About Our Experts</h3>

        <p>
          Meet our talented professionals who help us create amazing
          experiences.
        </p>
      </div>

      <div className="cardcollection">
        <Card
          name="Name"
          image="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
        />
        <Card
          name="Name"
          image="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
        />
        <Card
          name="Name"
          image="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
        />
        <Card
          name="Name"
          image="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
        />
        <Card
          name="Name"
          image="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
        />
        <Card
          name="Name"
          image="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png"
          description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
        />
      </div>
      <div className="footer">
        <p>Copyright @ 2026 , All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
