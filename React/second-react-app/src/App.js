import React from 'react'
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className={classes.Topbar}>
        <img src="https://i0.wp.com/mossegalapoma.cat/imatges/amazon_logo_black_510x120.png?resize=480%2C113&ssl=1" alt="amazon logo" />
      </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
        </div>
        <div className={classes.ProductData}>

        </div>
      </div>
    </div>
  );
}

export default App;
