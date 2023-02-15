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

/***/ "./src/Functions/addTask.js":
/*!**********************************!*\
  !*** ./src/Functions/addTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addTask() {\n    const taskDiv = document.createElement('div');\n    taskDiv.setAttribute('id', 'task-div');\n\n    const close = document.createElement('button');\n    close.setAttribute('id', 'closeBtn');\n    close.textContent = 'X';\n    close.style.border = '2px solid #ff0800';\n    close.style.borderRadius = '10px';\n    close.style.position = 'absolute'\n    close.style.top = '200px'\n    close.style.right = '600px'\n\n    const titleLabel = document.createElement('label');\n    titleLabel.textContent = 'Title';\n    const taskTitle = document.createElement('input');\n    taskTitle.setAttribute('id', 'task-title');\n    taskTitle.required = true;\n\n    const descLabel = document.createElement('label');\n    descLabel.textContent = 'Description';\n    const taskDesc = document.createElement('input');\n    taskDesc.setAttribute('id', 'task-desc');\n\n    const dateLabel = document.createElement('label');\n    dateLabel.textContent = 'Date';\n    const taskDate = document.createElement('input');\n    taskDate.setAttribute('id', 'task-date');\n    taskDate.setAttribute('type', 'date');\n\n    \n    const prioLabel = document.createElement('label');\n    prioLabel.textContent = 'Priority';\n    const taskPrio = document.createElement('select');\n    taskPrio.setAttribute('id', 'task-prio');\n    const priority = ['High', 'Medium', 'Low'];\n\n    for (let i = 0; i < priority.length; i++) {\n        const prio = priority[i];\n        var option = document.createElement('option');\n        option.textContent = prio;\n        taskPrio.append(option);\n    }\n\n    const submit = document.createElement('button');\n    submit.textContent = 'Submit Task';\n    submit.setAttribute('id', 'submitTask');\n    \n    taskDiv.append(close);\n    taskDiv.append(titleLabel, taskTitle);\n    taskDiv.append(descLabel, taskDesc);\n    taskDiv.append(dateLabel, taskDate);\n    taskDiv.append(prioLabel, taskPrio);\n    taskDiv.append(submit);\n\n    return taskDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todo-list/./src/Functions/addTask.js?");

/***/ }),

/***/ "./src/Functions/pageLoader.js":
/*!*************************************!*\
  !*** ./src/Functions/pageLoader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/Functions/project.js\");\n\n\nconst projectsDiv = document.getElementById('projects-div')\n\nconst projectsArray = [];\n\nfunction pageLoaderDiv(id) {\n    const changePanel = document.createElement('div');\n    changePanel.setAttribute('id', id);\n\n    return changePanel;\n}\n\nfunction newProject(projectName) {\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName);\n    projectsArray.push(newProject);\n    console.log(projectsArray);\n\n    projectsArray.forEach(el => {\n        const projToDOM = document.createElement('button');\n        projToDOM.textContent = el.title;\n        projToDOM.setAttribute('id', 'project')\n        projectsDiv.appendChild(projToDOM);\n    })\n    \n}\n\n\n\nfunction pageLoader(){\n\n    const tabContent = document.querySelector('.tab-content');\n    const projectsDiv = document.getElementById('projects-div')\n    const newContent = pageLoaderDiv('newDiv');\n    tabContent.appendChild(newContent);\n\n    const addProject = document.getElementById('add-project');\n\n    addProject.addEventListener('click', () => {\n        addProject.style.display = 'none';\n\n        const inputField = document.createElement('input');\n\n        const buttonDiv = document.createElement('div')\n        buttonDiv.setAttribute('id', 'buttonDiv');\n\n        const addBtn = document.createElement('button');\n        addBtn.textContent = 'Add';\n        addBtn.setAttribute('id', 'addBtn');\n\n        addBtn.addEventListener('click', () => {\n            if(inputField.value == \"\") {\n                alert('Value Missing!');\n            } else {\n                newProject(inputField.value);\n                inputField.style.display = 'none';\n                buttonDiv.style.display = 'none';\n                addProject.style.display = 'block';\n            }\n        });\n\n        const cancelBtn = document.createElement('button');\n        cancelBtn.textContent = 'Cancel';\n        cancelBtn.setAttribute('id', 'cancelBtn');\n\n        cancelBtn.addEventListener('click', () => {\n            inputField.style.display = 'none';\n            buttonDiv.style.display = 'none';\n            addProject.style.display = 'block';\n    \n        })\n\n        buttonDiv.appendChild(addBtn);\n        buttonDiv.appendChild(cancelBtn);\n\n        projectsDiv.appendChild(inputField);\n        projectsDiv.appendChild(buttonDiv);\n        \n    });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoader);\n\n//# sourceURL=webpack://todo-list/./src/Functions/pageLoader.js?");

/***/ }),

/***/ "./src/Functions/project.js":
/*!**********************************!*\
  !*** ./src/Functions/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/Functions/task.js\");\n\n\nclass Project {\n    constructor(title) {\n        this.title = title;\n        this.tasks = [];\n    }\n\n\n    taskInProject(title, desc, date, prio) {\n        const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, desc, date, prio);\n        this.tasks.push(newTask);\n    }\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/Functions/project.js?");

/***/ }),

/***/ "./src/Functions/task.js":
/*!*******************************!*\
  !*** ./src/Functions/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/Functions/task.js?");

/***/ }),

/***/ "./src/Pages/inbox.js":
/*!****************************!*\
  !*** ./src/Pages/inbox.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Functions_addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Functions/addTask */ \"./src/Functions/addTask.js\");\n/* harmony import */ var _Functions_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Functions/project */ \"./src/Functions/project.js\");\n/* harmony import */ var _Functions_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Functions/task */ \"./src/Functions/task.js\");\n\n\n\n\nfunction loadInbox(id, title) {\n\n    const inboxTitle = document.createElement('h1');\n    inboxTitle.setAttribute('id', id);\n    inboxTitle.textContent = title;\n\n    return inboxTitle;\n\n}\n\nfunction loadBtn(id, text) {\n    const taskBtn = document.createElement('button');\n    taskBtn.setAttribute('id', id);\n    taskBtn.textContent = text;\n\n    return taskBtn;\n}\n\nfunction newTask(project) {\n    const newTitle = document.getElementById('task-title');\n    const newDesc = document.getElementById('task-desc');\n    const newDate = document.getElementById('task-date');\n    const newPrio = document.getElementById('task-prio');\n    const loadBtn = document.getElementById('task-button');\n    const taskDiv = document.getElementById('task-div');\n    const addToContent = document.querySelector('.tab-content');\n\n    if(newTitle.value != '' && newDesc.value != '' && newDate.value != '') {\n        project.taskInProject(newTitle.value, newDesc.value, newDate.value, newPrio.value);\n        showTasks(newTitle.value, addToContent);\n        console.log(project);\n    } else {\n        alert('Please enter a value');\n    }\n}\n\nfunction showTasks(title, container) {\n    \n        const newTile = document.createElement('div');\n        newTile.classList.add('tile-style');\n\n        const tileTitle = document.createElement('h2');\n        tileTitle.textContent = title;\n\n        const tileCheck = document.createElement('input');\n\n        newTile.append(tileTitle, tileCheck);\n        container.appendChild(newTile);\n\n}\n\nfunction inbox() {\n    const tabContent = document.querySelector('.tab-content');\n    tabContent.textContent = \"\";\n\n    const inbox = new _Functions_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    inbox.title = 'Inbox';\n    \n\n    const newTitle = loadInbox('title', 'Inbox');\n    const newBtn = loadBtn('task-button', 'Add Task');\n\n    const newTaskForm = (0,_Functions_addTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    tabContent.appendChild(newTitle);\n    tabContent.appendChild(newBtn);\n    newBtn.addEventListener('click', () => {\n        tabContent.appendChild(newTaskForm);\n        newBtn.style.display = 'none';\n\n        const submit = document.getElementById('submitTask')\n        submit.addEventListener('click', () => {\n            newTask(inbox);\n            \n        });\n    });\n\n    \n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inbox);\n\n//# sourceURL=webpack://todo-list/./src/Pages/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Functions_pageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functions/pageLoader */ \"./src/Functions/pageLoader.js\");\n/* harmony import */ var _Pages_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/inbox */ \"./src/Pages/inbox.js\");\n\n\n\nload();\n\n\nconst inboxBtn = document.getElementById('project');\ninboxBtn.addEventListener('click', _Pages_inbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nfunction load() {\n    (0,_Functions_pageLoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_Pages_inbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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