import React, { Component } from "react";
import LoperMenu from "./LoperMenu";

class Loper extends Component {
  state = { naam: "" };
  data = {
    loper: [{ naam: "Bas Broens", id: 0 }, { naam: "Daniel Huijskens", id: 1 }]
  };

  addOnderdeel = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="container hoverable">
        <div className="card-panel grey darken-1 grey-text">
          <h4 className="white-text">Loper</h4>

          <LoperMenu
            menuOptions={this.data.loper}
            addOnderdeel={this.addOnderdeel}
            onderdeel={"naam"}
          />
        </div>
      </div>
    );
  }
}

export default Loper;
