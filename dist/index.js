"Use strict"
const keysEn = [
	{code: 'Backquote', keyCode: '`'},
	{code: 'Digit1', keyCode: '1'},
	{code: 'Digit2', keyCode: '2'},
	{code: 'Digit3', keyCode: '3'},
	{code: 'Digit4', keyCode: '4'},
	{code: 'Digit5', keyCode: '5'},
	{code: 'Digit6', keyCode: '6'},
	{code: 'Digit7', keyCode: '7'},
	{code: 'Digit8', keyCode: '8'},
	{code: 'Digit9', keyCode: '9'},
	{code: 'Digit0', keyCode: '0'},
	{code: 'Minus', keyCode: '-'},
	{code: 'Equal', keyCode: '='},
	{code: 'Backspace', keyCode: 'Backspace'},
	{code: 'Tab', keyCode: 'Tab'},
	{code: 'KeyQ', keyCode: 'q'},
	{code: 'KeyW', keyCode: 'w'},
	{code: 'KeyE', keyCode: 'e'},
	{code: 'KeyR', keyCode: 'r'},
	{code: 'KeyT', keyCode: 't'},
	{code: 'KeyY', keyCode: 'y'},
	{code: 'KeyU', keyCode: 'u'},
	{code: 'KeyI', keyCode: 'i'},
	{code: 'KeyO', keyCode: 'o'},
	{code: 'KeyP', keyCode: 'p'},
	{code: 'BracketLeft', keyCode: '['},
	{code: 'BracketRight', keyCode: ']'},
	{code: 'Backslash', keyCode: '\\'},
	{code: 'Delete', keyCode: 'Del'},
	{code: 'CapsLock', keyCode: 'CapsLock'},
	{code: 'KeyA', keyCode: 'a'},
	{code: 'KeyS', keyCode: 's'},
	{code: 'KeyD', keyCode: 'd'},
	{code: 'KeyF', keyCode: 'f'},
	{code: 'KeyG', keyCode: 'g'},
	{code: 'KeyH', keyCode: 'h'},
	{code: 'KeyJ', keyCode: 'j'},
	{code: 'KeyK', keyCode: 'k'},
	{code: 'KeyL', keyCode: 'l'},
	{code: 'Semicolon', keyCode: ';'},
	{code: 'Quote', keyCode: "'"},
	{code: 'Enter', keyCode: 'Enter'},
	{code: 'ShiftLeft', keyCode: 'Shift'},
	{code: 'KeyZ', keyCode: 'z'},
	{code: 'KeyX', keyCode: 'x'},
	{code: 'KeyC', keyCode: 'c'},
	{code: 'KeyV', keyCode: 'v'},
	{code: 'KeyB', keyCode: 'b'},
	{code: 'KeyN', keyCode: 'n'},
	{code: 'KeyM', keyCode: 'm'},
	{code: 'Comma', keyCode: ','},
	{code: 'Period', keyCode: '.'},
	{code: 'Slash', keyCode: '/'},
	{code: 'ArrowUp', keyCode: '▲'},
	{code: 'ShiftRight', keyCode: 'Shift'},
	{code: 'ControlLeft', keyCode: 'Ctrl'},
	{code: 'MetaLeft', keyCode: 'Win'},
	{code: 'AltLeft', keyCode: 'Alt'},
	{code: 'Space', keyCode: ' '},
	{code: 'AltRight', keyCode: 'Alt'},
	{code: 'ArrowLeft', keyCode: '◄'},
	{code: 'ArrowDown', keyCode: '▼'},
	{code: 'ArrowRight', keyCode: '►'},
	{code: 'ControlRight', keyCode: 'Ctrl'},
]

	const keysRus = [
	{code: 'Backquote', keyCode: 'ё'},
	{code: 'Digit1', keyCode: '1'},
	{code: 'Digit2', keyCode: '2'},
	{code: 'Digit3', keyCode: '3'},
	{code: 'Digit4', keyCode: '4'},
	{code: 'Digit5', keyCode: '5'},
	{code: 'Digit6', keyCode: '6'},
	{code: 'Digit7', keyCode: '7'},
	{code: 'Digit8', keyCode: '8'},
	{code: 'Digit9', keyCode: '9'},
	{code: 'Digit0', keyCode: '0'},
	{code: 'Minus', keyCode: '-'},
	{code: 'Equal', keyCode: '='},
	{code: 'Backspace', keyCode: 'Backspace'},
	{code: 'Tab', keyCode: 'Tab'},
	{code: 'KeyQ', keyCode: 'й'},
	{code: 'KeyW', keyCode: 'ц'},
	{code: 'KeyE', keyCode: 'у'},
	{code: 'KeyR', keyCode: 'к'},
	{code: 'KeyT', keyCode: 'е'},
	{code: 'KeyY', keyCode: 'н'},
	{code: 'KeyU', keyCode: 'г'},
	{code: 'KeyI', keyCode: 'ш'},
	{code: 'KeyO', keyCode: 'щ'},
	{code: 'KeyP', keyCode: 'з'},
	{code: 'BracketLeft', keyCode: 'х'},
	{code: 'BracketRight', keyCode: 'ъ'},
	{code: 'Backslash', keyCode: '\\'},
	{code: 'Delete', keyCode: 'Del'},
	{code: 'CapsLock', keyCode: 'CapsLock'},
	{code: 'KeyA', keyCode: 'ф'},
	{code: 'KeyS', keyCode: 'ы'},
	{code: 'KeyD', keyCode: 'в'},
	{code: 'KeyF', keyCode: 'а'},
	{code: 'KeyG', keyCode: 'п'},
	{code: 'KeyH', keyCode: 'р'},
	{code: 'KeyJ', keyCode: 'о'},
	{code: 'KeyK', keyCode: 'л'},
	{code: 'KeyL', keyCode: 'д'},
	{code: 'Semicolon', keyCode: 'ж'},
	{code: 'Quote', keyCode: 'э'},
	{code: 'Enter', keyCode: 'Enter'},
	{code: 'ShiftLeft', keyCode: 'Shift'},
	{code: 'KeyZ', keyCode: 'я'},
	{code: 'KeyX', keyCode: 'ч'},
	{code: 'KeyC', keyCode: 'с'},
	{code: 'KeyV', keyCode: 'м'},
	{code: 'KeyB', keyCode: 'и'},
	{code: 'KeyN', keyCode: 'т'},
	{code: 'KeyM', keyCode: 'ь'},
	{code: 'Comma', keyCode: 'б'},
	{code: 'Period', keyCode: 'ю'},
	{code: 'Slash', keyCode: '.'},
	{code: 'ArrowUp', keyCode: '▲'},
	{code: 'ShiftRight', keyCode: 'Shift'},
	{code: 'ControlLeft', keyCode: 'Ctrl'},
	{code: 'MetaLeft', keyCode: 'Win'},
	{code: 'AltLeft', keyCode: 'Alt'},
	{code: 'Space', keyCode: ' '},
	{code: 'AltRight', keyCode: 'Alt'},
	{code: 'ArrowLeft', keyCode: '◄'},
	{code: 'ArrowDown', keyCode: '▼'},
	{code: 'ArrowRight', keyCode: '►'},
	{code: 'ControlRight', keyCode: 'Ctrl'},
	]

	const keyBoard = document.createElement('div'),
				keyBoardRow = document.createElement('div'),
				input = document.createElement('textarea');

	input.className = 'textarea'
	document.body.appendChild(input)
	keyBoard.className = 'keyboard'
	document.body.appendChild(keyBoard)
	let isCaps = false;
	let paragraph = document.createElement('p')
	paragraph.innerText = 'Клавиатура создана в операционной системе Windows'
	keyBoard.after(paragraph)



	keysEn.forEach( (char) => {
		let keyChar = char.keyCode;
			let key = char.code;
			let keyBtn = document.createElement('button');
			keyBtn.className = 'key';
			keyBtn.innerText = keyChar;
			keyBoard.appendChild(keyBtn);
			keyBtn.setAttribute('keyName', keyBtn.innerText.toLocaleUpperCase());
			keyBtn.setAttribute('keyCode',  key );

			if(keyBtn.getAttribute('keyCode') === 'Backspace') {
				keyBtn.classList.add('Backspace')
			}	if(keyBtn.getAttribute('keyCode') === 'Delete') {
				keyBtn.classList.add('Delete')
			}	if(keyBtn.getAttribute('keyCode') === 'Enter') {
				keyBtn.classList.add('Enter')
			}	if(keyBtn.getAttribute('keyCode') === 'ShiftLeft') {
				keyBtn.classList.add('ShiftLeft')
			}	if(keyBtn.getAttribute('keyCode') === 'ShiftRight') {
				keyBtn.classList.add('ShiftRight')
			}	if(keyBtn.getAttribute('keyCode') === 'CapsLock') {
				keyBtn.classList.add('CapsLock')
			}	if(keyBtn.getAttribute('keyCode') === 'Tab') {
				keyBtn.classList.add('Tab')
			}	if(keyBtn.getAttribute('keyCode') === 'Space') {
				keyBtn.classList.add('Space')
			}	if(keyBtn.getAttribute('keyCode') === 'Space') {
				keyBtn.classList.add('Space')
			}
			document.addEventListener('keydown', function(e) {
				let keyPress = [];
				keyPress.push(e.code)
				if(	e.code === keyBtn.getAttribute("keyCode")) {
					keyBtn.classList.add('active')
					console.log(keyPress)
				}
				if(e.key === "Shift") {
					setUpperCaseKeys()
				}
				if(e.key === "CapsLock") {
					if(isCaps === false) {
						setUpperCaseKeys()
						isCaps = true
					}
						setLowerCaseKeys()
						isCaps = false
				}
		})
				document.addEventListener('keyup', function(e) {
				if(	e.code === keyBtn.getAttribute("keyCode")) {
					keyBtn.classList.remove('active')
				}
				if(e.key === "Shift") {
					setLowerCaseKeys()
				}
			})
	})

	const keysArr = document.getElementsByClassName('key')

const setUpperCaseKeys = () => {
	for (const key of keysArr) {
		if (key.innerHTML.length === 1) {
			key.innerHTML = key.innerHTML.toUpperCase()
		}
	}
}
const setLowerCaseKeys = () => {
  for (const key of keysArr) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toLowerCase()
    }
  }
}

keyBoard.addEventListener('click', function (e) {
  if (e.target.classList.contains('key')) {
    if (e.target.classList.contains('Space')) {
      input.textContent += '';
    }
    if (e.target.classList.contains('Backspace')) {
      input.textContent = input.textContent.substring(
        0,
        input.textContent.length - 1
      );
    }
  } else {
    return;
  }
});