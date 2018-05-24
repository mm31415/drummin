/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/drumset.js":
/*!************************!*\
  !*** ./lib/drumset.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

const drawBassDrum = () => {
  const coords = [
    [350,350], [390,370], [380,355], [390,400],
    [390,380], [380,430], [390,420], [350,440],
    [365,440], [320,430], [330,440], [310,390],
    [310,410], [310,410], [320,360], [310,380]
  ];

  ctx.beginPath();
  ctx.moveTo(...randomize(350,350));
  for(let i = 0; i < coords.length; i++) {
    ctx.lineTo(...randomize(...coords[i]));
  }
  ctx.closePath();

  //
  ctx.moveTo(385,400);
  ctx.lineTo(400,438);

  ctx.moveTo(314,403);
  ctx.lineTo(299,438);

  ctx.strokeStyle = "blue";
  ctx.stroke();

};

const drawTom3 = () => {
  const rightSide = [
    [495,340], [505,345], [495,350], [505,355], [495,360],
    [505,365], [495,370], [505,375], [495,380],
    [505,385], [495,390], [505,395], [495,400]
  ];

  const leftSide = [
    [405,400], [395,395], [405,390], [395,385], [405,380],
    [395,375], [405,370], [395,365], [405,360],
    [395,355], [405,350], [395,345], [405,340]
  ];

  ctx.beginPath();
  ctx.moveTo(400,335);
  ctx.lineTo(500,335);
  for(let i = 0; i < rightSide.length; i++) {
    ctx.lineTo(...randomize(...rightSide[i]));
  }
  ctx.lineTo(505,405);
  ctx.lineTo(395,405);
  for(let i = 0; i < leftSide.length; i++) {
    ctx.lineTo(...randomize(...leftSide[i]));
  }
  ctx.lineTo(400,335);

  ctx.strokeStyle = "blue";
  ctx.stroke();
};


const createCoords = (x,y) => {

};

const randomize = (x, y) => {
  return [
    Math.random() * (x - (x - 2)) + (x - 2),
    Math.random() * (y - (y - 2)) + (y - 2)
  ];
};

const drawHitBassDrum = () => {
  ctx.clearRect(0,0,700,500);
  ctx.beginPath();
  ctx.arc(350,400,(Math.random() * (50 - 20) + 20),0,2*Math.PI);
  ctx.stroke();
};
//
// drawBassDrum();
// drawTom3();
setInterval(
  () => {
    ctx.clearRect(0,0,700,500);
    drawBassDrum();
    drawTom3();
  },400
);

module.exports = {
  drawHitBassDrum: drawHitBassDrum
};


/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const DrawKit = __webpack_require__(/*! ./drumset.js */ "./lib/drumset.js");

const audioElements = document.querySelectorAll('audio');

const addListener = (element) => {
  element.addEventListener("playing", () => {
    document.addEventListener("keydown", (e) => {
      if (e.which === element.key) {
        element.currentTime = 0.0;
      }
    });
  });
};

// const addKeys = (element) => {
//   element.key =
// };

audioElements.forEach((element) => addListener(element));

document.addEventListener("keydown", (e) => {
  if (e.which === 32) {
    e.preventDefault()
    DrawKit.drawHitBassDrum();
    bass.key = e.which;
    bass.play()
  } else if (e.which === 72) {
    hihat.key = e.which;
    hihat.play()
  } else if (e.which === 70) {
    snare.key = e.which;
    snare.play()
  } else if (e.which === 68) {
    tom1.key = e.which;
    tom1.play()
  } else if (e.which === 83) {
    tom2.key = e.which;
    tom2.play()
  } else if (e.which === 65) {
    tom3.key = e.which;
    tom3.play()
  } else if (e.which === 74) {
    crash.key = e.which;
    crash.play()
  } else if (e.which === 75) {
    ride.key = e.which;
    ride.play()
  }
});





//space = 32 h = 72 f = 70 d = 68 s = 83 a = 65 j = 74 k = 75


/***/ })

/******/ });
//# sourceMappingURL=drumming.js.map