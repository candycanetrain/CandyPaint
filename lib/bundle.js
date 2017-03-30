/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// keep track of opacity and which brush and what size

var Paint = function Paint() {
  _classCallCheck(this, Paint);

  this.brush = [];
}

// paintWithImage () {
//   const canvasEl = document.getElementsByTagName("canvas")[0];
//   let ctx = canvasEl.getContext("2d");
//   debugger
//   let img=document.getElementById("frogjpeg");
//   ctx.drawImage(img,10,10);
// };


;

module.exports = Paint;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//paint view to animate
//rendering
//brush can handle logic

var PaintView = function () {
  function PaintView(canvasEl, ctx) {
    _classCallCheck(this, PaintView);

    this.ctx = ctx;

    this.canvas = canvasEl;
    this.penDown = false;
    this.lineStarted = false;
    this.brush = undefined;
    this.lastValue = "";

    this.downEvent = 'mousedown';
    this.moveEvent = 'mousemove';
    this.upEvent = 'mouseup';

    this.copy = undefined;
    this.draw = this.draw.bind(this);
  }

  // onDownEvent(e) {
  //   e.preventDefault();
  //   this.penDown = true;
  // }

  _createClass(PaintView, [{
    key: 'onMoveEvent',
    value: function onMoveEvent(e) {
      e.preventDefault();
      if (!this.penDown) return;
      var pos = this.getMousePos(e);

      if (!this.lineStarted) {
        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);
        this.lineStarted = true;
      } else {
        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();
      }
    }
  }, {
    key: 'onUpEvent',
    value: function onUpEvent(e) {
      e.preventDefault();
      this.penDown = false;
      this.lineStarted = false;
    }
  }, {
    key: 'onDownEvent',
    value: function onDownEvent(e) {
      e.preventDefault();
      this.penDown = true;
    }
  }, {
    key: 'getMousePos',
    value: function getMousePos(e) {
      var canvasEl = document.getElementsByTagName("canvas")[0];

      var rect = canvasEl.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  }, {
    key: 'onClear',
    value: function onClear(e) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: 'setBrush',
    value: function setBrush(id, e) {
      // debugger
      e.preventDefault();
      // let icon = new Image(100,100);
      // icon.src = "../assets/images/toad.png";
      this.brush = document.getElementById(id);

      // debugger
    }
  }, {
    key: 'onSave',
    value: function onSave() {
      this.ctx.save();
    }
  }, {
    key: 'onRestore',
    value: function onRestore() {
      this.ctx.restore();
    }
  }, {
    key: 'setBrushFromDropdown',
    value: function setBrushFromDropdown() {
      var dropdown = document.getElementById("dropdownMenu");
      if (dropdown.value != this.lastValue) {
        this.setBrush(dropdown.value);
        this.lastValue = dropdown.value;
      } else {
        this.lastValue = "";
      }
      // this.brush = document.getElementById(dropdown.value);
    }
  }, {
    key: 'draw',
    value: function draw(x, y, width) {
      var newHeight = this.brush.height * (width / this.brush.width);
      // let newWidth = this.brush.height * ratio/100;

      this.ctx.drawImage(this.brush, x, y, width, newHeight);
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      // this.stage = new createjs.Stage("canvas");
      // debugger
      // this.stage.addEventListener("stagemousedown", function(event) {
      //   alert("THE CANVAS WAS CLICKED at " + event.stageX+", "+event.stageY);
      // })
      // this.frog = new createjs.Stage


      var canvasEl = document.getElementsByTagName("canvas")[0];
      var clearButton = document.getElementById("clear-canvas");
      var saveButton = document.getElementById("save-canvas");
      var restoreButton = document.getElementById("restore-canvas");
      // const dropdown = document.getElementById("dropdownMenu");
      // const toad = document.getElementById("toad-option");
      // const marioFireball = document.getElementById("mario-fireball-option");
      // toad.addEventListener('click', this.setBrush.bind(this, toad.value));
      // marioFireball.addEventListener('click', this.setBrush.bind(this, marioFireball.value));

      // dropdownMenu.addEventListener('click', this.setBrushFromDropdown.bind(this));
      // $(".dropdown img.brush").addClass("brushvisibility");
      //   $(".dropdown dt a").click( () => {
      //
      //   })


      var toad = document.getElementById("toad");

      var marioFireball = document.getElementById("mario-fireball");
      //
      //
      toad.addEventListener('click', this.setBrush.bind(this, "toad"));
      marioFireball.addEventListener('click', this.setBrush.bind(this, "mario-fireball"));

      clearButton.addEventListener('click', this.onClear.bind(this));
      saveButton.addEventListener('click', this.onSave.bind(this));
      restoreButton.addEventListener('click', this.onRestore.bind(this));
      // canvasEl.addEventListener("mousemove", (e) => {
      //   this.getMousePos('move',e);
      // }, false);
      //START HERE
      canvasEl.onmousedown = function (e) {
        e.preventDefault();
        _this.penDown = true;
      };

      canvasEl.onmousemove = function (e) {
        if (!_this.penDown) return;
        var rect = canvasEl.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var size = $('#value').val();
        _this.draw(x, y, size);
      };

      canvasEl.onmouseup = function (e) {
        if (_this.penDown) {
          _this.penDown = false;
        }
      };
      //end here
      // canvasEl.onmouseup = function(e){
      //   canvasEl.onmousemove = null;
      // }
      // canvasEl.onmousedown("stagemousedown", (e) => {
      //   alert("the canvas was clicked at");
      // });
      // canvasEl.addEventListener("mousedown", this.onDownEvent.bind(this), false);
      // canvasEl.addEventListener("mousemove", this.onMoveEvent.bind(this), false);
      // canvasEl.addEventListener("mouseup", this.onUpEvent.bind(this), false);
    }

    // img.onload = function() {
    // stage.drawImage(img, 0, 0);
    // stage.beginPath();
    // stage.moveTo(30, 96);
    // stage.lineTo(70, 66);
    // stage.lineTo(103, 76);
    // stage.lineTo(170, 15);
    // stage.stroke();


    // paintWithImage() {
    //   const canvasEl = document.getElementsByTagName("canvas")[0];
    //   // let ctx = canvasEl.getContext("2d");
    //   debugger
    //   let img=document.getElementById("frogjpeg");
    //   this.ctx.drawImage(img,10,10);
    // }
    //
    // copy() {
    //   let ctx = canvasEl.getContext("2d");
    //   let imgData = ctx.getImageData()
    // }

  }]);

  return PaintView;
}();

module.exports = PaintView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _paint = __webpack_require__(0);

var _paint2 = _interopRequireDefault(_paint);

var _paintview = __webpack_require__(1);

var _paintview2 = _interopRequireDefault(_paintview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  // console.log(this);
  // canvasEl.width = Paint.DIM_X;
  // canvasEl.height = Paint.DIM_Y;
  var canvasEl = document.getElementsByTagName("canvas")[0];
  var ctx = canvasEl.getContext("2d");

  // let stage = new createjs.Stage("canvas"); //ctx
  var paint = new _paint2.default();
  new _paintview2.default(canvasEl, ctx).init();

  // let image = new createjs.Bitmap("../assets/images/cartoon_frog.jpeg");
  // stage.addChild(image);
  // createjs.Ticker.addEventListener("tick", handleTick);
  //
  // function handleTick(event) {
  //   this.image.x += 10;
  //   this.stage.update();
  //
  //
  // };
  // }


  // new PaintView(paint, ctx).paintWithImage();

  // }

  //pass Stage to paintview

});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map