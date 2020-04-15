let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите число');
  Number.isNaN(Number(input))
    ? alert('Было введено не число, попробуйте еще раз')
    : numbers.push(Number(input));
} while (input !== null);

if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
}

alert(`Общая сумма чисел равна ${total}`);
