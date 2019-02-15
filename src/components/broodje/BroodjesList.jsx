/**
 * @author Daniel Huijskens
 * @email huijskens.daniel@gmail.com
 * @create date 2019-02-15 13:18:16
 * @modify date 2019-02-15 13:18:16
 * @desc [description]
 */
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
