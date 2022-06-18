const form = document.getElementById('tarefa-formulario');
const listaTarefas = document.getElementById('tarefas');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('enviar-tarefa');
	addTask(inputField.value);
	form.reset();
};

function addTask(descricao) {
	const containerTarefa = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const tarefaLabel = document.createElement('label');
	const tarefaDescricao = document.createTextNode(descricao);

	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', descricao);
	novaTarefa.setAttribute('id', descricao);

	tarefaLabel.setAttribute('for', descricao);
	tarefaLabel.appendChild(tarefaDescricao);

	containerTarefa.classList.add('task-item');
	containerTarefa.appendChild(novaTarefa);
	containerTarefa.appendChild(tarefaLabel);

	listaTarefas.appendChild(containerTarefa);
}