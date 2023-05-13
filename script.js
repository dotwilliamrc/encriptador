const encrypt = document.querySelector('#encrypt')
const dencrypt = document.querySelector('#dencrypt')
const copy = document.querySelector('#copy')

const invalidText = () => {
	const alert = document.querySelector('.form__alert')
	const messageVoid = document.querySelector('.response__message--void')
	const messageFull = document.querySelector('.response__message--full')
	
	alert.style.color = 'red'
	messageVoid.style.display = 'grid'
	messageFull.style.display = 'none'
}

const validText = () => {
	const alert = document.querySelector('.form__alert')
	const messageVoid = document.querySelector('.response__message--void')
	const messageFull = document.querySelector('.response__message--full')

	alert.style.color = 'var(--grey)'
	messageVoid.style.display = 'none'
	messageFull.style.display = 'flex'
	}

encrypt.addEventListener('click', () => {
	let text = document.querySelector('#textInput').value.trim()

	const regex = /^[a-z\s]+$/
	
	if (regex.test(text)) {
		validText()

		text = text.replaceAll('e', 'enter')
		text = text.replaceAll('o', 'ober')
		text = text.replaceAll('i', 'imes')
		text = text.replaceAll('a', 'ai')
		text = text.replaceAll('u', 'ufat')

		const outputMessage = document.querySelector('#outputMessage')
		outputMessage.innerHTML = text
	} else {
		invalidText()
	}

})

dencrypt.addEventListener('click', () => {
	let text = document.querySelector('#textInput').value.trim()

	const regex = /^[a-z\s]+$/
	
	if (regex.test(text)) {
		validText()

		text = text.replaceAll('enter', 'e')
		text = text.replaceAll('ober', 'o')
		text = text.replaceAll('imes', 'i')
		text = text.replaceAll('ai', 'a')
		text = text.replaceAll('ufat', 'u')

		const outputMessage = document.querySelector('#outputMessage')
		outputMessage.innerHTML = text
	} else {
		invalidText()
	}

})

copy.addEventListener('click', () => {
	const outputMessage = document.querySelector('#outputMessage').textContent
	navigator.clipboard.writeText(outputMessage)
})
