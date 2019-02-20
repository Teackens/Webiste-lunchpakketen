"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BroodjeMenu = _interopRequireDefault(require("./BroodjeMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Broodje =
/*#__PURE__*/
function (_Component) {
  _inherits(Broodje, _Component);

  function Broodje() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Broodje);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Broodje)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      soort: "",
      boter: "",
      beleg: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "data", {
      broodSoorten: [{
        soort: "Witte Bol",
        id: 0
      }, {
        soort: "Bruine Bol",
        id: 1
      }, {
        soort: "Witte Boterham",
        id: 2
      }, {
        soort: "Bruine Boterham",
        id: 3
      }, {
        soort: "Krentenbol",
        id: 4
      }, {
        soort: "Zuurdesem",
        id: 5
      }, {
        soort: "Geen",
        id: 6
      }],
      boter: [{
        soort: "Ja",
        id: 0
      }, {
        soort: "Nee",
        id: 1
      }],
      beleg: [{
        soort: "Kaas",
        id: 0
      }, {
        soort: "Gebraden gehakt",
        id: 0
      }, {
        soort: "Ham",
        id: 0
      }, {
        soort: "Jam",
        id: 0
      }, {
        soort: "Chocopasta",
        id: 0
      }, {
        soort: "Niets",
        id: 0
      }]
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addOnderdeel", function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    });

    return _this;
  }

  _createClass(Broodje, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "container hoverable"
      }, _react.default.createElement("div", {
        className: "card-panel grey darken-1 grey-text"
      }, _react.default.createElement("h4", {
        className: "white-text"
      }, "Broodje ", this.props.nummer), _react.default.createElement(_BroodjeMenu.default, {
        addOnderdeel: this.addOnderdeel,
        onderdeel: "soort",
        menuOptions: this.data.broodSoorten
      }), _react.default.createElement(_BroodjeMenu.default, {
        addOnderdeel: this.addOnderdeel,
        onderdeel: "beleg",
        menuOptions: this.data.beleg
      }), _react.default.createElement(_BroodjeMenu.default, {
        addOnderdeel: this.addOnderdeel,
        onderdeel: "boter",
        menuOptions: this.data.boter
      })));
    }
  }]);

  return Broodje;
}(_react.Component);

var _default = Broodje;
exports.default = _default;