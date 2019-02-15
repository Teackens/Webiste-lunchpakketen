import React, { Component } from "react";
import BroodjesList from "./components/broodje/BroodjesList";
import Extra from "./components/extra/Extra";
import Opmerkingen from "./components/Opmerkingen";
import Loper from "./components/loper/Loper";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App grey darken-2 white-text">
        <Header />
        <section>
          <Loper />
          <BroodjesList />
          <Extra />
          <Opmerkingen />
        </section>
      </div>
    );
  }
}

export default App;
