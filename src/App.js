/**
 * @author Daniel Huijskens
 * @email huijskens.daniel@gmail.com
 * @create date 2019-02-15 13:17:08
 * @modify date 2019-02-15 13:17:08
 * @desc [description]
 */
import React, { Component } from "react";
import BroodjesList from "./components/broodje/BroodjesList";
import Extra from "./components/extra/Extra";
import Opmerkingen from "./components/Opmerkingen";
import Loper from "./components/loper/Loper";
import Header from "./components/Header";
{
  /*TODO: add external database for loading data*/
}
{
  /*TODO: add external database for storing data*/
}
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
          {/*TODO: Add sumbition in button to save input data*/}
        </section>
      </div>
    );
  }
}

export default App;
