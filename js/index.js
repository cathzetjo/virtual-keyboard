import {keys} from './keys.js';

let lang;
let keyboard;

if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    if (lang === "en") {
        keyboard = keys.en;
    } else if (lang === "ru") {
        keyboard = keys.ru;
    }

} else {
    lang = "en";
    keyboard = keys.en;
}

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

keyboard.forEach(row => {
    const keyboardRow = createElement("div", "keyboard-row");
    addElement(keyboardContainer, keyboardRow);
    row.forEach(key => {
        addElement(keyboardRow, createElement("div", "keyboard-key", key));
    });
});

const langHelper = createElement("p", "lng-helper",
    "If you want to change language you can press 'Ctrl' + 'Alt' (left side) or press the button");
addElement(wrapper, langHelper);
const langSwitcher = createElement("button", "lng-switcher", lang.toUpperCase());
addElement(wrapper, langSwitcher);

const langSwitcherElement = document.querySelector(".lng-switcher");
langSwitcherElement.addEventListener("click", changeLang);

function changeLang() {
    if (lang === "en") {
        lang = "ru";
        localStorage.lang = "ru";
    } else if (lang === "ru") {
        lang = "en";
        localStorage.lang = "en";
    }

    if (lang === "en") {
        keyboard = keys.en;
        localStorage.keyboard = "keys.en";
        langSwitcherElement.innerHTML = "EN";
    } else if (lang === "ru") {
        keyboard = keys.ru;
        langSwitcherElement.innerHTML = "RU";
        localStorage.keyboard = "keys.ru";
    }

    changeLngKeys(keyboard);
}

function changeLngKeys(keyboard) {
    const keyboardRow = document.querySelectorAll(".keyboard-row");
    for (let i = 0; i < keyboard.length; ++i) {
        const children = keyboardRow[i].childNodes;
        for (let j = 0; j < children.length; ++j) {
            children[j].innerHTML = keyboard[i][j];
        }
    }
}


function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);

        for (let code of codes) { // все ли клавиши из набора нажаты?
            if (!pressed.has(code)) {
                return;
            }
        }

        pressed.clear(); //  без "залипания" клавиши -  обнуляем статус всех клавиш
        func();
    });

    document.addEventListener('keyup', function (event) {
        pressed.delete(event.code);
    });

}

runOnKeys(
    changeLang,
    "ControlLeft",
    "AltLeft"
);


function addHighLight(element) {
    element.classList.add('pressed');
}

function removeHighLight(element) {
    element.classList.remove('pressed');
}

const ctrlLeft = document.querySelector(".keyboard-container > .keyboard-row:last-child > .keyboard-key:nth-child(1)");
const altLeft = document.querySelector(".keyboard-container > .keyboard-row:last-child > .keyboard-key:nth-child(3)");

document.addEventListener('keydown',
    function (event) {
        if (event.code === "ControlLeft") {
            addHighLight(ctrlLeft);
        }
        if (event.code === "AltLeft") {
            addHighLight(altLeft);
        }
    })

document.addEventListener('keyup',
    function (event) {
        if (event.code === "ControlLeft") {
            removeHighLight(ctrlLeft);
        }
        if (event.code === "AltLeft") {
            removeHighLight(altLeft);
        }
    })