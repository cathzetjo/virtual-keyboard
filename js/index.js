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

const row1Key1 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(1)");
const row1Key2 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(2)");
const row1Key3 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(3)");
const row1Key4 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(4)");
const row1Key5 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(5)");
const row1Key6 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(6)");
const row1Key7 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(7)");
const row1Key8 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(8)");
const row1Key9 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(9)");
const row1Key10 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(10)");
const row1Key11 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(11)");
const row1Key12 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(12)");
const row1Key13 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(13)");
const row1Key14 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(1) > .keyboard-key:nth-child(14)");

const row2Key1 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(1)");
const row2Key2 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(2)");
const row2Key3 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(3)");
const row2Key4 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(4)");
const row2Key5 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(5)");
const row2Key6 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(6)");
const row2Key7 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(7)");
const row2Key8 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(8)");
const row2Key9 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(9)");
const row2Key10 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(10)");
const row2Key11 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(11)");
const row2Key12 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(12)");
const row2Key13 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(13)");
const row2Key14 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(14)");
const row2Key15 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(2) > .keyboard-key:nth-child(15)");

const row3Key1 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(1)");
const row3Key2 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(2)");
const row3Key3 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(3)");
const row3Key4 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(4)");
const row3Key5 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(5)");
const row3Key6 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(6)");
const row3Key7 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(7)");
const row3Key8 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(8)");
const row3Key9 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(9)");
const row3Key10 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(10)");
const row3Key11 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(11)");
const row3Key12 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(12)");
const row3Key13 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(3) > .keyboard-key:nth-child(13)");

const row4Key1 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(1)");
const row4Key2 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(2)");
const row4Key3 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(3)");
const row4Key4 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(4)");
const row4Key5 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(5)");
const row4Key6 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(6)");
const row4Key7 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(7)");
const row4Key8 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(8)");
const row4Key9 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(9)");
const row4Key10 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(10)");
const row4Key11 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(11)");
const row4Key12 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(12)");
const row4Key13 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(4) > .keyboard-key:nth-child(13)");


const row5Key1 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(5) > .keyboard-key:nth-child(1)");
const row5Key2 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(5) > .keyboard-key:nth-child(2)");
const row5Key3 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(5) > .keyboard-key:nth-child(3)");
const row5Key4 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(5) > .keyboard-key:nth-child(4)");
const row5Key5 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(5) > .keyboard-key:nth-child(5)");
const row5Key6 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(5) > .keyboard-key:nth-child(6)");
const row5Key7 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(5) > .keyboard-key:nth-child(7)");
const row5Key8 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(5) > .keyboard-key:nth-child(8)");
const row5Key9 = document.querySelector(".keyboard-container > .keyboard-row:nth-child(5) > .keyboard-key:nth-child(9)");

document.addEventListener('keydown',
    function (event) {
        if (event.code === "Backquote") {
            addHighLight(row1Key1);
        }
        if (event.code === "Digit1") {
            addHighLight(row1Key2);
        }
        if (event.code === "Digit2") {
            addHighLight(row1Key3);
        }
        if (event.code === "Digit3") {
            addHighLight(row1Key4);
        }
        if (event.code === "Digit4") {
            addHighLight(row1Key5);
        }
        if (event.code === "Digit5") {
            addHighLight(row1Key6);
        }
        if (event.code === "Digit6") {
            addHighLight(row1Key7);
        }
        if (event.code === "Digit7") {
            addHighLight(row1Key8);
        }
        if (event.code === "Digit8") {
            addHighLight(row1Key9);
        }
        if (event.code === "Digit9") {
            addHighLight(row1Key10);
        }
        if (event.code === "Digit0") {
            addHighLight(row1Key11);
        }
        if (event.code === "Minus") {
            addHighLight(row1Key12);
        }
        if (event.code === "Equal") {
            addHighLight(row1Key13);
        }
        if (event.code === "Backspace") {
            addHighLight(row1Key14);
        }


        if (event.code === "Tab") {
            addHighLight(row2Key1);
        }
        if (event.code === "KeyQ") {
            addHighLight(row2Key2);
        }
        if (event.code === "KeyW") {
            addHighLight(row2Key3);
        }
        if (event.code === "KeyE") {
            addHighLight(row2Key4);
        }
        if (event.code === "KeyR") {
            addHighLight(row2Key5);
        }
        if (event.code === "KeyT") {
            addHighLight(row2Key6);
        }
        if (event.code === "KeyY") {
            addHighLight(row2Key7);
        }
        if (event.code === "KeyU") {
            addHighLight(row2Key8);
        }
        if (event.code === "KeyI") {
            addHighLight(row2Key9);
        }
        if (event.code === "KeyO") {
            addHighLight(row2Key10);
        }
        if (event.code === "KeyP") {
            addHighLight(row2Key11);
        }
        if (event.code === "BracketLeft") {
            addHighLight(row2Key12);
        }
        if (event.code === "BracketRight") {
            addHighLight(row2Key13);
        }
        if (event.code === "Backslash") {
            addHighLight(row2Key14);
        }
        if (event.code === "Delete") {
            addHighLight(row2Key15);
        }


        if (event.code === "CapsLock") {
            addHighLight(row3Key1);
        }
        if (event.code === "KeyA") {
            addHighLight(row3Key2);
        }
        if (event.code === "KeyS") {
            addHighLight(row3Key3);
        }
        if (event.code === "KeyD") {
            addHighLight(row3Key4);
        }
        if (event.code === "KeyF") {
            addHighLight(row3Key5);
        }
        if (event.code === "KeyG") {
            addHighLight(row3Key6);
        }
        if (event.code === "KeyH") {
            addHighLight(row3Key7);
        }
        if (event.code === "KeyJ") {
            addHighLight(row3Key8);
        }
        if (event.code === "KeyK") {
            addHighLight(row3Key9);
        }
        if (event.code === "KeyL") {
            addHighLight(row3Key10);
        }
        if (event.code === "Semicolon") {
            addHighLight(row3Key11);
        }
        if (event.code === "Quote") {
            addHighLight(row3Key12);
        }
        if (event.code === "Enter") {
            addHighLight(row3Key13);
        }


        if (event.code === "ShiftLeft") {
            addHighLight(row4Key1);
        }
        if (event.code === "KeyZ") {
            addHighLight(row4Key2);
        }
        if (event.code === "KeyX") {
            addHighLight(row4Key3);
        }
        if (event.code === "KeyC") {
            addHighLight(row4Key4);
        }
        if (event.code === "KeyV") {
            addHighLight(row4Key5);
        }
        if (event.code === "KeyB") {
            addHighLight(row4Key6);
        }
        if (event.code === "KeyN") {
            addHighLight(row4Key7);
        }
        if (event.code === "KeyM") {
            addHighLight(row4Key8);
        }
        if (event.code === "Comma") {
            addHighLight(row4Key9);
        }
        if (event.code === "Period") {
            addHighLight(row4Key10);
        }
        if (event.code === "Slash") {
            addHighLight(row4Key11);
        }
        if (event.code === "ArrowUp") {
            addHighLight(row4Key12);
        }
        if (event.code === "ShiftRight") {
            addHighLight(row4Key13);
        }


        if (event.code === "ControlLeft") {
            addHighLight(row5Key1);
        }
        if (event.code === "MetaLeft") {
            addHighLight(row5Key2);
        }
        if (event.code === "AltLeft") {
            addHighLight(row5Key3);
        }
        if (event.code === "Space") {
            addHighLight(row5Key4);
        }
        if (event.code === "AltRight") {
            addHighLight(row5Key5);
        }
        if (event.code === "ArrowLeft") {
            addHighLight(row5Key6);
        }
        if (event.code === "ArrowDown") {
            addHighLight(row5Key7);
        }
        if (event.code === "ArrowRight") {
            addHighLight(row5Key8);
        }
        if (event.code === "ControlRight") {
            addHighLight(row5Key9);
        }
    })


document.addEventListener('keyup',
    function (event) {
        if (event.code === "Backquote") {
            removeHighLight(row1Key1);
        }
        if (event.code === "Digit1") {
            removeHighLight(row1Key2);
        }
        if (event.code === "Digit2") {
            removeHighLight(row1Key3);
        }
        if (event.code === "Digit3") {
            removeHighLight(row1Key4);
        }
        if (event.code === "Digit4") {
            removeHighLight(row1Key5);
        }
        if (event.code === "Digit5") {
            removeHighLight(row1Key6);
        }
        if (event.code === "Digit6") {
            removeHighLight(row1Key7);
        }
        if (event.code === "Digit7") {
            removeHighLight(row1Key8);
        }
        if (event.code === "Digit8") {
            removeHighLight(row1Key9);
        }
        if (event.code === "Digit9") {
            removeHighLight(row1Key10);
        }
        if (event.code === "Digit0") {
            removeHighLight(row1Key11);
        }
        if (event.code === "Minus") {
            removeHighLight(row1Key12);
        }
        if (event.code === "Equal") {
            removeHighLight(row1Key13);
        }
        if (event.code === "Backspace") {
            removeHighLight(row1Key14);
        }


        if (event.code === "Tab") {
            removeHighLight(row2Key1);
        }
        if (event.code === "KeyQ") {
            removeHighLight(row2Key2);
        }
        if (event.code === "KeyW") {
            removeHighLight(row2Key3);
        }
        if (event.code === "KeyE") {
            removeHighLight(row2Key4);
        }
        if (event.code === "KeyR") {
            removeHighLight(row2Key5);
        }
        if (event.code === "KeyT") {
            removeHighLight(row2Key6);
        }
        if (event.code === "KeyY") {
            removeHighLight(row2Key7);
        }
        if (event.code === "KeyU") {
            removeHighLight(row2Key8);
        }
        if (event.code === "KeyI") {
            removeHighLight(row2Key9);
        }
        if (event.code === "KeyO") {
            removeHighLight(row2Key10);
        }
        if (event.code === "KeyP") {
            removeHighLight(row2Key11);
        }
        if (event.code === "BracketLeft") {
            removeHighLight(row2Key12);
        }
        if (event.code === "BracketRight") {
            removeHighLight(row2Key13);
        }
        if (event.code === "Backslash") {
            removeHighLight(row2Key14);
        }
        if (event.code === "Delete") {
            removeHighLight(row2Key15);
        }


        if (event.code === "CapsLock") {
            removeHighLight(row3Key1);
        }
        if (event.code === "KeyA") {
            removeHighLight(row3Key2);
        }
        if (event.code === "KeyS") {
            removeHighLight(row3Key3);
        }
        if (event.code === "KeyD") {
            removeHighLight(row3Key4);
        }
        if (event.code === "KeyF") {
            removeHighLight(row3Key5);
        }
        if (event.code === "KeyG") {
            removeHighLight(row3Key6);
        }
        if (event.code === "KeyH") {
            removeHighLight(row3Key7);
        }
        if (event.code === "KeyJ") {
            removeHighLight(row3Key8);
        }
        if (event.code === "KeyK") {
            removeHighLight(row3Key9);
        }
        if (event.code === "KeyL") {
            removeHighLight(row3Key10);
        }
        if (event.code === "Semicolon") {
            removeHighLight(row3Key11);
        }
        if (event.code === "Quote") {
            removeHighLight(row3Key12);
        }
        if (event.code === "Enter") {
            removeHighLight(row3Key13);
        }


        if (event.code === "ShiftLeft") {
            removeHighLight(row4Key1);
        }
        if (event.code === "KeyZ") {
            removeHighLight(row4Key2);
        }
        if (event.code === "KeyX") {
            removeHighLight(row4Key3);
        }
        if (event.code === "KeyC") {
            removeHighLight(row4Key4);
        }
        if (event.code === "KeyV") {
            removeHighLight(row4Key5);
        }
        if (event.code === "KeyB") {
            removeHighLight(row4Key6);
        }
        if (event.code === "KeyN") {
            removeHighLight(row4Key7);
        }
        if (event.code === "KeyM") {
            removeHighLight(row4Key8);
        }
        if (event.code === "KeyK") {
            removeHighLight(row4Key9);
        }
        if (event.code === "Comma") {
            removeHighLight(row4Key9);
        }
        if (event.code === "Period") {
            removeHighLight(row4Key10);
        }
        if (event.code === "Slash") {
            removeHighLight(row4Key11);
        }
        if (event.code === "ArrowUp") {
            removeHighLight(row4Key12);
        }
        if (event.code === "ShiftRight") {
            removeHighLight(row4Key13);
        }


        if (event.code === "ControlLeft") {
            removeHighLight(row5Key1);
        }
        if (event.code === "MetaLeft") {
            removeHighLight(row5Key2);
        }
        if (event.code === "AltLeft") {
            removeHighLight(row5Key3);
        }
        if (event.code === "Space") {
            removeHighLight(row5Key4);
        }
        if (event.code === "AltRight") {
            removeHighLight(row5Key5);
        }
        if (event.code === "ArrowLeft") {
            removeHighLight(row5Key6);
        }
        if (event.code === "ArrowDown") {
            removeHighLight(row5Key7);
        }
        if (event.code === "ArrowRight") {
            removeHighLight(row5Key8);
        }
        if (event.code === "ControlRight") {
            removeHighLight(row5Key9);
        }
    })


// const keyboardContainerElement = document.querySelector(".keyboard-container");
//
// const rowsElements = keyboardContainerElement.childNodes;
//
// rowsElements.forEach(row=>{
//     console.log(row.childNodes);
// })
