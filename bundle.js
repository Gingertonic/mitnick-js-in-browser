(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { addADiv } = require("./helpers");

function handleItemClick(e) {
    const itemName = e.target.textContent;
    addADiv(itemName)
}

module.exports = { handleItemClick }


},{"./helpers":2}],2:[function(require,module,exports){
function addADiv(content){
    const newDiv = document.createElement("div")
    newDiv.className = "big-list"
    newDiv.textContent = content
    document.body.append(newDiv)
}

const updateHeading = () => document.querySelector('#heading').textContent = 'Welcome';

module.exports = { addADiv, updateHeading }
},{}],3:[function(require,module,exports){
const { handleItemClick } = require("./handlers")

const allItems = document.querySelectorAll('span.item-name')

allItems.forEach((item) => {
    item.addEventListener('click', handleItemClick)
})

},{"./handlers":1}]},{},[3]);
