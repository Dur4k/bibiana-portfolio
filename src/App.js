import React from "react";
import "./sass/style.scss";
import Header from "./components/Header.js";
import AboutText from "./components/AboutText.js";
import Portfolio from "./components/Portfolio.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AboutText />
        <Portfolio />
      </div>
    );
  }
}
export default App;
