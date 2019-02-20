"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("materialize-css/dist/css/materialize.min.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Opmerkingen =
/*#__PURE__*/
function (_Component) {
  _inherits(Opmerkingen, _Component);

  function Opmerkingen() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Opmerkingen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Opmerkingen)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      opmerkingen: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      e.preventDefault();

      _this.setState({
        opmerkingen: e.target.value
      });
    });

    return _this;
  }

  _createClass(Opmerkingen, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "container"
      }, _react.default.createElement("div", {
        className: "col s12"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "input-field col s12"
      }, _react.default.createElement("i", {
        className: "material-icons prefix"
      }, "mode_edit"), _react.default.createElement("textarea", {
        onChange: this.handleChange,
        id: "textarea1",
        className: "materialize-textarea"
      }), _react.default.createElement("label", {
        htmlFor: "textarea1"
      }, "Opmerkingen"), _react.default.createElement("div", {
        className: "container center"
      }, _react.default.createElement("div", {
        className: "card-panel grey darken-1 white-text"
      }, "Bent u klaar? Vergeet dan niet op opslaan te drukken. U kunt tot 1 juli altijd terug naar deze pagina."), _react.default.createElement("button", {
        className: "hoverable btn btn-small waves-effect waves-light red",
        type: "submit",
        name: "action"
      }, "Opslaan", _react.default.createElement("i", {
        className: "material-icons right"
      }, "send")))))));
    }
  }]);

  return Opmerkingen;
}(_react.Component);

var _default = Opmerkingen;
exports.default = _default;