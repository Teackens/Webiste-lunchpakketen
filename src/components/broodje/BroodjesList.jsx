import React, { Component } from "react";
import Broodje from "./Broodje";

class BroodjesList extends Component {
  state = {};
  render() {
    return (
      <section>
        <Broodje nummer="1" />
        <Broodje nummer="2" />
        <Broodje nummer="3" />
      </section>
    );
  }
}

export default BroodjesList;
