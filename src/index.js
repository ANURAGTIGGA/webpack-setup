import { camelCase } from 'lodash';
import './style.scss';

console.log(camelCase('hello world'));

const newDiv = document.createElement("h1");

// and give it some content
const newContent = document.createTextNode("Hi there and greetings! This is an example for SETTING UP WEBPACK.");

// add the text node to the newly created div
newDiv.appendChild(newContent);

// add the newly created element and its content into the DOM
const currentDiv = document.getElementById("app");
document.body.insertBefore(newDiv, currentDiv);