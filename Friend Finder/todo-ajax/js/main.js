var todo;
var xhr = new XMLHttpRequest(); // 1

xhr.addEventListener('load', function (evt) {
	//TODO: check for status 200
	// parse the todo item
	todo = JSON.parse(xhr.responseText);
	// super basic display...
	document.querySelector('.output').innerHTML = todo.desc;
}); // 2

xhr.open('GET', 'todo.json', true); // 3
xhr.send(); // 4

