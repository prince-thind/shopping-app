import '../styles/Home.css';

function Home(props) {
  return (
    <div className="home-content">
      <h2 className="home-heading"> Foo Shop</h2>
      <img src={props.img} className="home-image" alt="home" />
      <p className="home-intro">Your first choice for products</p>
    </div>
  );
}

export default Home;
