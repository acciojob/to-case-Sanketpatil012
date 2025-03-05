function toCase(text) {

	return  text.length > 0 ? `${text.toLowerCase()}-${text.toUpperCase()}` : '-'
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
