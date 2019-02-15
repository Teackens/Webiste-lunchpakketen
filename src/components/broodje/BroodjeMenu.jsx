import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

class BroodjeMenu extends Component {
  state = {
    deleteLabel: false
  };
  componentDidMount() {
    M.AutoInit();
  }

  handleChange = e => {
    e.preventDefault();
    this.props.addOnderdeel(e);
    this.setState({
      deleteLabel: true
    });
  };

  render() {
    return (
      <div>
        <form>
          <div className="input-field col s12">
            {this.state.deleteLabel === false ? (
              <label htmlFor="">Kies uw {this.props.onderdeel}</label>
            ) : null}
            <select id={this.props.onderdeel} onChange={this.handleChange}>
              <option value="" disabled selected />
              {this.props.menuOptions.map((element, index) => (
                <option key={index}>{element.soort}</option>
              ))}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default BroodjeMenu;
