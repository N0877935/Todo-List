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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addTask() {\n    const taskDiv = document.createElement('div');\n    taskDiv.setAttribute('id', 'task-div');\n\n    const titleLabel = document.createElement('label');\n    titleLabel.textContent = 'Title';\n    const taskTitle = document.createElement('input');\n    taskTitle.setAttribute('id', 'task-title');\n    taskTitle.required = true;\n\n    const descLabel = document.createElement('label');\n    descLabel.textContent = 'Description';\n    const taskDesc = document.createElement('input');\n    taskDesc.setAttribute('id', 'task-desc');\n\n    const dateLabel = document.createElement('label');\n    dateLabel.textContent = 'Date';\n    const taskDate = document.createElement('input');\n    taskDate.setAttribute('id', 'task-date');\n    taskDate.setAttribute('type', 'date');\n\n    const prioLabel = document.createElement('label');\n    prioLabel.textContent = 'Priority';\n    const taskPrio = document.createElement('select');\n    taskPrio.setAttribute('id', 'task-prio');\n    const priority = ['High', 'Medium', 'Low'];\n\n    for (let i = 0; i < priority.length; i++) {\n        const prio = priority[i];\n        var option = document.createElement('option');\n        option.textContent = prio;\n        taskPrio.append(option);\n    }\n\n    const submit = document.createElement('button');\n    submit.textContent = 'Submit Task';\n    submit.setAttribute('id', 'submitTask');\n\n    taskDiv.append(titleLabel, taskTitle);\n    taskDiv.append(descLabel, taskDesc);\n    taskDiv.append(dateLabel, taskDate);\n    taskDiv.append(prioLabel, taskPrio);\n    taskDiv.append(submit);\n\n    return taskDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todo-list/./src/Functions/addTask.js?");

/***/ }),

/***/ "./src/Functions/pageLoader.js":
/*!*************************************!*\
  !*** ./src/Functions/pageLoader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputLoader\": () => (/* binding */ inputLoader),\n/* harmony export */   \"pageLoader\": () => (/* binding */ pageLoader)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/Functions/project.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ \"./src/Functions/addTask.js\");\n\n\n\nconst projectsDiv = document.getElementById('projects-div')\n\nconst projectsArray = [];\nconst domArray = [];\n\nfunction pageLoaderDiv(id, title) {\n    const changePanel = document.createElement('div');\n    changePanel.setAttribute('id', id);\n\n    const myTitle = document.createElement('h1');\n    myTitle.textContent = title;\n\n    changePanel.appendChild(myTitle);\n\n\n    return changePanel;\n}\n\nfunction loadButton(id, text) {\n        const taskBtn = document.createElement('button');\n        taskBtn.setAttribute('id', id);\n        taskBtn.textContent = text;\n    \n        return taskBtn;\n}\n\n\nfunction newProject(projectName) {\n\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName);\n    projectsArray.push(newProject);\n    console.log(projectsArray);\n\n    const projToDOM = document.createElement(projectName);\n    projToDOM.textContent = projectName;\n    projToDOM.setAttribute('id', `project`);\n    projectsDiv.appendChild(projToDOM);\n    domArray.push(projToDOM);        \n\n\ndocument.querySelector('body').addEventListener('click', function(event) {\n    if(event.target.tagName.toLowerCase() === projectName.toLowerCase()) {\n        pageLoader(newProject, newProject.title)\n    }\n   })\n\n}\n\n\nfunction newTask(project) {\n    const newTitle = document.getElementById('task-title');\n    const newDesc = document.getElementById('task-desc');\n    const newDate = document.getElementById('task-date');\n    const newPrio = document.getElementById('task-prio');\n\n    console.log(project);\n\n    if(newTitle.value != '' && newDesc.value != '' && newDate.value != '') {\n        project.taskInProject(newTitle.value, newDesc.value, newDate.value, newPrio.value);\n        createTask(newTitle.value, newDate.value, newPrio.value);\n    } else {\n        alert('Please enter a value')\n    }\n}\n\nfunction createTask(tileTitle, tileDate, tilePriority) {\n\n    const tabContent = document.querySelector('.tab-content');\n\n    const newTile = document.createElement('div');\n    newTile.setAttribute('id', 'tile-style');\n\n    const newTitle = document.createElement('h1');\n    newTitle.textContent = tileTitle;\n\n    const newDate = document.createElement('h1');\n    newDate.textContent = tileDate;\n\n    if (tilePriority == 'High') {\n        newTile.style.border = '2px solid #ff0800';\n    } else if (tilePriority == 'Medium') {\n        newTile.style.border = '2px solid #fc9003';\n    } else {\n        newTile.style.border = '2px solid #07f50f';\n    }\n\n\n    newTile.appendChild(newTitle);\n    newTile.appendChild(newDate);\n    tabContent.appendChild(newTile);\n\n    // newTile.addEventListener('click', expandTile);\n\n}\n\nfunction loadTasks(project) {\n    \n    const tabContent = document.querySelector('.tab-content');\n\n    for(let i = 0; i < project.tasks.length; i++) {\n\n        const newTile = document.createElement('div');\n        newTile.setAttribute('id', 'tile-style');\n\n        const expand = document.createElement('button');\n        expand.textContent = 'Show Details';\n        expand.setAttribute('id', 'expand');\n\n        const deleteTask = document.createElement('button');\n        deleteTask.textContent = 'Finished';\n        deleteTask.setAttribute('id', 'delete');\n\n        const newTitle = document.createElement('h1');\n        newTitle.textContent = `Title: ${project.tasks[i].title}`;\n\n        const newDate = document.createElement('h1');\n        newDate.textContent = `Due Date: ${project.tasks[i].dueDate}`;\n\n        if(project.tasks[i].priority == 'High') {\n            newTile.style.border = '2px solid #ff0800'\n        } else if (project.tasks[i].priority == 'Medium') {\n            newTile.style.border = '2px solid #fc9003';\n        } else {\n            newTile.style.border = '2px solid #07f50f';\n        }\n    \n\n        newTile.appendChild(expand);    \n        newTile.appendChild(newTitle);\n        newTile.appendChild(newDate);\n        newTile.append(deleteTask);\n        tabContent.appendChild(newTile);\n\n        expand.addEventListener('click', () => {\n            newTile.style.height = '170px';\n            newTile.style.display = 'flex';\n            newTile.style.flexDirection = 'column';\n            newTile.style.fontSize = '0.5rem';\n            newTile.style.gap = '2px';\n            expand.style.display = 'none';\n            deleteTask.style.display = 'none';\n\n            const newDesc = document.createElement('h1');\n            newDesc.textContent = `Description: ${project.tasks[i].description}`;\n\n            const newPrio = document.createElement('h1');\n            newPrio.textContent = `Priority: ${project.tasks[i].priority}`;\n\n            newTile.appendChild(newDesc);\n            newTile.appendChild(newPrio);\n\n        });\n\n        deleteTask.addEventListener('click', () => {\n            removeTask(project.tasks, i, newTile);\n\n        });\n\n            }\n\n}\n\nfunction removeTask(array, id, tile) {\n    const taskWithIdIndex = array.findIndex((obj) => obj._id === id);\n\n    if(taskWithIdIndex > -1) {\n        array.splice(taskWithIdIndex, 1);\n        tile.remove()\n    }\n\n    return array;\n}\n\n\n\nfunction pageLoader(el, newTitle){\n\n\n    const titleContent = document.querySelector('.title-container');\n    titleContent.textContent = \"\";\n\n    const tabContent = document.querySelector('.tab-content');\n    tabContent.textContent = \"\";\n\n    const projectsDiv = document.getElementById('projects-div')\n    const newContent = pageLoaderDiv('newDiv', newTitle);\n   \n    const newBtn = loadButton('task-button', 'Add Task');\n\n    const newTaskForm = (0,_addTask__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    newBtn.addEventListener('click', () => {\n        tabContent.appendChild(newTaskForm);\n        const submit = document.getElementById('submitTask');\n        submit.addEventListener('click', () => {\n            newTask(el);\n            newTaskForm.classList.add('hide');\n        })\n    });\n\n    titleContent.appendChild(newContent);\n\n    if(el != undefined) {\n        loadTasks(el);\n        titleContent.appendChild(newBtn);\n    }\n    \n\n}\n\nfunction inputLoader() {\n\n        const newDiv = document.createElement('newDiv');\n\n        const inputField = document.createElement('input');\n\n        const buttonDiv = document.createElement('div')\n        buttonDiv.setAttribute('id', 'buttonDiv');\n\n        const addBtn = document.createElement('button');\n        addBtn.textContent = 'Add';\n        addBtn.setAttribute('id', 'addBtn');\n\n        const cancelBtn = document.createElement('button');\n        cancelBtn.textContent = 'Cancel';\n        cancelBtn.setAttribute('id', 'cancelBtn');\n\n        buttonDiv.appendChild(addBtn);\n        buttonDiv.appendChild(cancelBtn);\n\n        newDiv.appendChild(inputField);\n        newDiv.appendChild(buttonDiv);\n\n    const addProject = document.getElementById('add-project');\n\n        addBtn.addEventListener('click', () => {\n            if(inputField.value == \"\") {\n                alert('Value Missing!');\n            } else {\n                newProject(inputField.value);\n                newDiv.style.display = 'none';\n                addProject.style.display = 'block'\n            }\n        });\n\n        cancelBtn.addEventListener('click', () => {\n            inputField.style.display = 'none';\n            buttonDiv.style.display = 'none';\n            \n        })\n\n        return newDiv;\n        \n\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/Functions/pageLoader.js?");

/***/ }),

/***/ "./src/Functions/project.js":
/*!**********************************!*\
  !*** ./src/Functions/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/Functions/task.js\");\n/* harmony import */ var _pageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoader */ \"./src/Functions/pageLoader.js\");\n\n\n\nclass Project {\n    constructor(title) {\n        this.title = title;\n        this.tasks = [];\n    }\n\n\n    taskInProject(title, desc, date, prio) {\n        const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, desc, date, prio);\n        this.tasks.push(newTask);\n    }\n\n    showTasksTwo() {\n        for(let i = 0; i < this.tasks.length; i++) {\n            console.log(this.tasks[i].title)\n        }\n    }\n\n    \n}\n\nconst newProject = new Project();\nnewProject.taskInProject('one', 'one', '15/02/2023', 'High');\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/Functions/project.js?");

/***/ }),

/***/ "./src/Functions/task.js":
/*!*******************************!*\
  !*** ./src/Functions/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(title, description, dueDate, priority) {\n        this._id = Task.incrementId();\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n\n    static incrementId() {\n        if (!this.latestId) this.latestId = 0;\n        else this.latestId++;\n        return this.latestId;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/Functions/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Functions_pageLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Functions/pageLoader */ \"./src/Functions/pageLoader.js\");\n\n\n\nload();\n\nconst addProject = document.getElementById('add-project');\nconst projectsDiv = document.getElementById('projects-div');\n\n\naddProject.addEventListener('click', () => {\n    addProject.style.display = 'none';\n    const inputDiv = (0,_Functions_pageLoader__WEBPACK_IMPORTED_MODULE_0__.inputLoader)();\n    projectsDiv.appendChild(inputDiv);\n\n});\n\nfunction load() {\n    (0,_Functions_pageLoader__WEBPACK_IMPORTED_MODULE_0__.pageLoader)();\n\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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