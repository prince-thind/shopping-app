//import React from 'react';

function Home(props) {
  return <div className="home-content">
      <img src={props.img} className="home-image" alt="home"/>
      <h2 className="home-heading"> Foo Shop: your first source for Buying most authentic Products</h2>
  </div>
}

export default Home;
