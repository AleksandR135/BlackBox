const form = document.querySelector('.task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('.tasks-list');
const clearBtn = document.querySelector('.clear-btn');
const filter = document.querySelector('#filter');

form.addEventListener('submit', addTask);
list.addEventListener('click', removeTask)
clearBtn.addEventListener('click', clearTasks);
filter.addEventListener('keyup', filterTasks);

function addTask(e) {
	e.preventDefault();

	if (!input.value.trim()) {
		return;
	}

	const li = document.createElement('li');
	li.className = 'task';
	const text = document.createTextNode(input.value);
	const delBtn = document.createElement('button');
	delBtn.textContent = 'x';
	delBtn.className = 'del-btn';
	li.appendChild(text);
	li.appendChild(delBtn);
	list.appendChild(li);

	addTaskInLS(input.value);

	input.value = '';
}


function removeTask(e) {
	if (e.target.textContent === 'x') {
		let task = e.target.parentElement.textContent;
		let tasks = JSON.parse(localStorage.getItem('tasks'));
		tasks.splice(tasks.indexOf(task), 1);
		localStorage.setItem('tasks', JSON.stringify(tasks));

		e.target.parentElement.remove();
	}
}


function clearTasks() {
	while(list.hasChildNodes()) {
		list.removeChild(list.firstChild);
	}
	localStorage.clear();
}

function filterTasks() {
	const text = new RegExp(filter.value, 'i');

	document.querySelectorAll('.task')
		.forEach(task => {
			task.style.display = ~task.textContent.search(text) ?
				'block' : 'none';

		});
}

function addTaskInLS(task) {
	let tasks;

	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLS() {
	if (localStorage.getItem('tasks')) {
		let tasks = JSON.parse(localStorage.getItem('tasks'));
		tasks.forEach(task => {
			const li = document.createElement('li');
			li.className = 'task';
			const text = document.createTextNode(task);
			const delBtn = document.createElement('button');
			delBtn.textContent = 'x';
			delBtn.className = 'del-btn';
			li.appendChild(text);
			li.appendChild(delBtn);
			list.appendChild(li);
		});
	}
}

getTasksFromLS();