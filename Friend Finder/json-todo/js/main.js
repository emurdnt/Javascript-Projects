// TODO: in data/todo-items.json, add a deadline date property to each todo item

var xhr = new XMLHttpRequest(); // 1

function renderTodos(todos) {
	var todoView = document.querySelector('.todo-view');
	var todoList = '<ul>';

	todos.forEach(function (todo) {
		// TODO: render the completed property as a checkbox input
		todoList += '<li>' + todo.desc + '</li>';
	});

	todoList += '</ul>';
	// TODO: update to use DOM API and not a string (i.e. not innerHTML)
	todoView.innerHTML = todoList;
}

xhr.addEventListener('load', function (evt) {
	if (xhr.status == 200) {
		// parse the todo item
		todos = JSON.parse(xhr.responseText);
		// use another function to render the view
		renderTodos(todos);
	} else {
		console.error('Failed to load data: ' + xhr.status);
	}
}); // 2

document.querySelector('.btn-todos-load').addEventListener('click', function (evt) {
	xhr.open('GET', evt.target.href, true); // 3
	xhr.send(); // 4
	evt.preventDefault();
});
