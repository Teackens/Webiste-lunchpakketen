/**
 * @author Daniel Huijskens
 * @email huijskens.daniel@gmail.com
 * @create date 2019-02-15 13:17:45
 * @modify date 2019-02-15 13:17:45
 * @desc [description]
 */
import React, { Component } from "react";
import BroodjeMenu from "./BroodjeMenu";

class Broodje extends Component {
  state = {
    soort: "",
    boter: "",
    beleg: ""
  };

  data = {
    broodSoorten: [
      { soort: "Witte Bol", id: 0 },
      { soort: "Bruine Bol", id: 1 },
      { soort: "Witte Boterham", id: 2 },
      { soort: "Bruine Boterham", id: 3 },
      { soort: "Krentenbol", id: 4 },
      { soort: "Zuurdesem", id: 5 },
      { soort: "Geen", id: 6 }
    ],
    boter: [{ soort: "Ja", id: 0 }, { soort: "Nee", id: 1 }],
    beleg: [
      { soort: "Kaas", id: 0 },
      { soort: "Gebraden gehakt", id: 0 },
      { soort: "Ham", id: 0 },
      { soort: "Jam", id: 0 },
      { soort: "Chocopasta", id: 0 },
      { soort: "Niets", id: 0 }
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
      <div className="container hoverable">
        <div className="card-panel grey darken-1 grey-text">
          <h4 className="white-text">Broodje {this.props.nummer}</h4>
          <BroodjeMenu
            addOnderdeel={this.addOnderdeel}
            onderdeel={"soort"}
            menuOptions={this.data.broodSoorten}
          />
          <BroodjeMenu
            addOnderdeel={this.addOnderdeel}
            onderdeel={"beleg"}
            menuOptions={this.data.beleg}
          />
          <BroodjeMenu
            addOnderdeel={this.addOnderdeel}
            onderdeel={"boter"}
            menuOptions={this.data.boter}
          />
        </div>
      </div>
    );
  }
}

export default Broodje;
