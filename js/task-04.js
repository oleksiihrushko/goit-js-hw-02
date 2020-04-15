const formatString = function (string) {
  const splitedStr = string.split('');
  if (splitedStr.length > 39) {
    const temporaryStr = splitedStr.slice(0, 40);
    temporaryStr.push('...');
    const formatedStr = temporaryStr.join('');
    return formatedStr;
  } else {
    return string;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
