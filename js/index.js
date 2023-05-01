import {keys} from './keys.js';

let lang = "en";
let keyboard = keys.en;

const body = document.querySelector('body');

function createElement(tagName, className, innerText) {
    const element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    if (innerText) {
        element.innerHTML = innerText;
    }
    return element;
}

function addElement(parent, child) {
    parent.append(child);
}

const wrapper = createElement("div", "wrapper");
addElement(body, wrapper);

const title = createElement("h1", "title", "Virtual Keyboard");
addElement(wrapper, title);

const textArea = createElement("textarea", "textarea");
addElement(wrapper, textArea);

const keyboardContainer = createElement("section", "keyboard-container");
addElement(wrapper, keyboardContainer);

if (lang==="en") {
    keyboard = keys.en;
}
else if (lang==="ru") {
    keyboard = keys.ru;
}

keyboard.forEach(row => {
    const keyboardRow = createElement("div", "keyboard-row");
    addElement(keyboardContainer, keyboardRow);
    row.forEach(key => {
        addElement(keyboardRow, createElement("div", "keyboard-key", key));
    });
});

