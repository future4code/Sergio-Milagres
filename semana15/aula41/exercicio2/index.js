const operation = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);
const add = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;

switch (operation) {
  case "add":
    console.log("Resposta: " + add);
    break;
  case "sub":
    console.log("Resposta: " + sub);
    break;
  case "mult":
    console.log("Resposta: " + mult);
    break;
  case "div":
    console.log("Resposta: " + div);
    break;
  default:
    break;
}
