let taskList = ["Lavar a louça"];
const newTask = process.argv[2];
newTaskList = taskList.push(newTask);

console.log("Tarefa adicionada com sucesso!");

console.log("tarefas: ", taskList);
