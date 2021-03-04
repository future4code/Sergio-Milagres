const criarTarefa = () => {
  let tarefa = document.getElementById("tarefa").value;
  let diaDaSemana = document.getElementById("dias-semana").value;
  console.log(tarefa);
  console.log(diaDaSemana);

  if (tarefa !== "") {
  document.getElementById(diaDaSemana).innerHTML += `<p>● ${tarefa}</p>`
  document.getElementById("tarefa").value = ""
  } else {
      alert("Insira uma tarefa!")
  }
};
