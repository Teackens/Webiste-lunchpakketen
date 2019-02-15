import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

import ExtraMenu from "./ExtraMenu";

class Extra extends Component {
  state = {
    flesje: "",
    fruit: "",
    extra: ""
  };
  data = {
    flesje: [
      { soort: "Sinaasappelsap", id: 0 },
      { soort: "Appelsap", id: 1 },
      { soort: "Water", id: 2 },
      { soort: "Geen", id: 3 }
    ],
    fruit: [
      { soort: "Appel", id: 0 },
      { soort: "Banaan", id: 1 },
      { soort: "Sinaasappel", id: 2 },
      { soort: "Geen", id: 3 }
    ],
    extra: [
      { soort: "Sultana", id: 0 },
      { soort: "Peperkoekreep", id: 1 },
      { soort: "Gekookt ei", id: 2 },
      { soort: "Geen", id: 3 }
    ]
  };
  addOnderdeel = e => {
    console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <section>
        <div className="container hoverable">
          <div className="card-panel grey darken-1 grey-text">
            <h4 className="white-text">Extra</h4>
            <ExtraMenu
              addOnderdeel={this.addOnderdeel}
              onderdeel={"flesje"}
              menuOptions={this.data.flesje}
            />
            <ExtraMenu
              addOnderdeel={this.addOnderdeel}
              onderdeel={"fruit"}
              menuOptions={this.data.fruit}
            />
            <ExtraMenu
              addOnderdeel={this.addOnderdeel}
              onderdeel={"extra"}
              menuOptions={this.data.extra}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Extra;
