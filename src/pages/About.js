import "../styles/About.css";
import faker from "faker";

function About() {
  return (
    <div className="about-section">
      <h2 className="material-box">Foo Shop</h2>
      <p className="about-para">
      {faker.lorem.lines(100)}
      </p>
    </div>
  );
}

export default About;
