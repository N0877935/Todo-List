/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Functions/pageLoader.js":
/*!*************************************!*\
  !*** ./src/Functions/pageLoader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/Functions/project.js\");\n\n\nconst projectsDiv = document.getElementById('projects-div')\n\nconst projectsArray = [];\n\nfunction pageLoaderDiv(id) {\n    const changePanel = document.createElement('div');\n    changePanel.setAttribute('id', id);\n\n    return changePanel;\n}\n\nfunction newProject(projectName) {\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName);\n    projectsArray.push(newProject);\n    console.log(projectsArray);\n\n    projectsArray.forEach(el => {\n        const projToDOM = document.createElement('button');\n        projToDOM.textContent = el.title;\n        projToDOM.setAttribute('id', 'project')\n        projectsDiv.appendChild(projToDOM);\n    })\n    \n}\n\n\n\nfunction pageLoader(){\n\n    const tabContent = document.querySelector('.tab-content');\n    const projectsDiv = document.getElementById('projects-div')\n    const newContent = pageLoaderDiv('newDiv');\n    tabContent.appendChild(newContent);\n\n    const addProject = document.getElementById('add-project');\n\n    addProject.addEventListener('click', () => {\n        addProject.style.display = 'none';\n\n        const inputField = document.createElement('input');\n\n        const buttonDiv = document.createElement('div')\n        buttonDiv.setAttribute('id', 'buttonDiv');\n\n        const addBtn = document.createElement('button');\n        addBtn.textContent = 'Add';\n        addBtn.setAttribute('id', 'addBtn');\n\n        addBtn.addEventListener('click', () => {\n            if(inputField.value == \"\") {\n                alert('Value Missing!');\n            } else {\n                newProject(inputField.value);\n                inputField.style.display = 'none';\n                buttonDiv.style.display = 'none';\n                addProject.style.display = 'block';\n            }\n        })\n\n        \n\n        const cancelBtn = document.createElement('button');\n        cancelBtn.textContent = 'Cancel';\n        cancelBtn.setAttribute('id', 'cancelBtn');\n\n        cancelBtn.addEventListener('click', () => {\n            inputField.style.display = 'none';\n            buttonDiv.style.display = 'none';\n            addProject.style.display = 'block';\n    \n        })\n\n        buttonDiv.appendChild(addBtn);\n        buttonDiv.appendChild(cancelBtn);\n\n        projectsDiv.appendChild(inputField);\n        projectsDiv.appendChild(buttonDiv);\n        \n    });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoader);\n\n//# sourceURL=webpack://todo-list/./src/Functions/pageLoader.js?");

/***/ }),

/***/ "./src/Functions/project.js":
/*!**********************************!*\
  !*** ./src/Functions/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/Functions/task.js\");\n\n\nclass Project {\n    constructor(title) {\n        this.title = title;\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/Functions/project.js?");

/***/ }),

/***/ "./src/Functions/task.js":
/*!*******************************!*\
  !*** ./src/Functions/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/Functions/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Functions_pageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functions/pageLoader */ \"./src/Functions/pageLoader.js\");\n\n\nload();\n\n\nfunction load() {\n    (0,_Functions_pageLoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;