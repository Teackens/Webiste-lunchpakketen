/**
 * @author Daniel Huijskens
 * @email huijskens.daniel@gmail.com
 * @create date 2019-02-15 13:18:57
 * @modify date 2019-02-15 13:18:57
 * @desc [description]
 */
import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

class Opmerkingen extends Component {
  state = {
    opmerkingen: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      opmerkingen: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <textarea
                onChange={this.handleChange}
                id="textarea1"
                className="materialize-textarea"
              />
              <label htmlFor="textarea1">Opmerkingen</label>
              <div className="container center">
                <div className="card-panel grey darken-1 white-text">
                  Bent u klaar? Vergeet dan niet op opslaan te drukken. U kunt
                  tot 1 juli altijd terug naar deze pagina.
                </div>

                <button
                  className="hoverable btn btn-small waves-effect waves-light red"
                  type="submit"
                  name="action"
                >
                  Opslaan
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Opmerkingen;
