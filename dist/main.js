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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var arr = [3, 4, 15, 80, 7, 2, 6, 5, 8, 9, 10, 16, 13]; // length = 13

function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var target = arr[Math.floor(arr.length / 2)];
  arr.splice(arr.indexOf(target), 1);
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([target], quickSort(right));
}

function selectSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var minIndex = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

var res = selectSort(arr);
console.log(res);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImFyciIsImJ1YmJsZVNvcnQiLCJpIiwibGVuZ3RoIiwiaiIsInRlbXAiLCJxdWlja1NvcnQiLCJ0YXJnZXQiLCJNYXRoIiwiZmxvb3IiLCJzcGxpY2UiLCJpbmRleE9mIiwibGVmdCIsInJpZ2h0IiwicHVzaCIsImNvbmNhdCIsInNlbGVjdFNvcnQiLCJtaW5JbmRleCIsInJlcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJQSxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsRUFBVyxFQUFYLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QixDQUE5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QUNIOztBQUNELElBQUlrQixHQUFHLEdBQUdGLFVBQVUsQ0FBQ2hCLEdBQUQsQ0FBcEI7QUFDQW1CLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGFyciA9IFszLCA0LCAxNSwgODAsIDcsIDIsIDYsIDUsIDgsIDksIDEwLCAxNiwgMTNdOyAvLyBsZW5ndGggPSAxM1xyXG5cclxuZnVuY3Rpb24gYnViYmxlU29ydChhcnIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aCAtIDE7IGkrKyl7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnIubGVuZ3RoIC0gaSAtIDE7IGorKyl7XHJcbiAgICAgICAgICAgIGlmIChhcnJbal0gPiBhcnJbaiArIDFdKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGFycltqICsgMV07XHJcbiAgICAgICAgICAgICAgICBhcnJbaiArIDFdID0gYXJyW2pdO1xyXG4gICAgICAgICAgICAgICAgYXJyW2pdID0gdGVtcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxuZnVuY3Rpb24gcXVpY2tTb3J0KGFycikge1xyXG4gICAgaWYoYXJyLmxlbmd0aDw9MSl7cmV0dXJuIGFycn1cclxuICAgIGxldCB0YXJnZXQgPSBhcnJbTWF0aC5mbG9vcihhcnIubGVuZ3RoIC8gMildO1xyXG4gICAgYXJyLnNwbGljZShhcnIuaW5kZXhPZih0YXJnZXQpLCAxKTtcclxuICAgIGxldCBsZWZ0ID0gW107XHJcbiAgICBsZXQgcmlnaHQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZiAoYXJyW2ldIDwgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGxlZnQucHVzaChhcnJbaV0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmlnaHQucHVzaChhcnJbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHF1aWNrU29ydChsZWZ0KS5jb25jYXQoW3RhcmdldF0scXVpY2tTb3J0KHJpZ2h0KSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0U29ydChhcnIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aCAtIDE7IGkrKyl7XHJcbiAgICAgICAgbGV0IG1pbkluZGV4ID0gaTtcclxuICAgICAgICBmb3IgKGxldCBqID0gaSsxOyBqIDwgYXJyLmxlbmd0aCA7IGorKyl7XHJcbiAgICAgICAgICAgIGlmIChhcnJbal0gPCBhcnJbbWluSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICBtaW5JbmRleCA9IGo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbXAgPSBhcnJbaV07XHJcbiAgICAgICAgYXJyW2ldID0gYXJyW21pbkluZGV4XTtcclxuICAgICAgICBhcnJbbWluSW5kZXhdID0gdGVtcDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnI7XHJcbn1cclxudmFyIHJlcyA9IHNlbGVjdFNvcnQoYXJyKVxyXG5jb25zb2xlLmxvZyhyZXMpIl0sInNvdXJjZVJvb3QiOiIifQ==