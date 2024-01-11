const mapNumberToSign = {
  0: '',
  1: '+',
  2: '-'
};

const convertDecimalToTernary = (num) => {
  const value = 3;
  let result = '';
  while (num > 0) {
    result += num % value;
    num = Math.floor(num / value);
  };

  return result;
};

const getTernaryNumArray = (num) => {
  const ternaryString = convertDecimalToTernary(num);
  return ternaryString.split('').map(num => Number(num));
};

const getMathExpression = (num) => {
  const ternaryArray = getTernaryNumArray(num);
  const emptyArray = new Array(9).fill('');

  for (let i = 1; i < ternaryArray.length; i += 1) {
    emptyArray[i] = mapNumberToSign[ternaryArray[i]]
  };

  let mathExpression = '';
  for (let i = 0; i < 9; i++) {
    mathExpression += (9 - i) + emptyArray[i];
  }
  mathExpression += '0';

  return mathExpression;
}

const getNumberSolutions = (number) => {
  const mapNumToSolutions = {};
  const quantity = 3 ** 9;

  for (let i = 0; i < quantity; i++) {
    const expression = getMathExpression(i);
    const calculatedExpression = eval(expression);

    if (calculatedExpression in mapNumToSolutions) {
      mapNumToSolutions[calculatedExpression].push(expression);
    } else {
      mapNumToSolutions[calculatedExpression] = [expression];
    };
  };

  if (number in mapNumToSolutions) {
    return [...new Set(mapNumToSolutions[number])];
  };

  return 'Решений нет';
};

console.log(getNumberSolutions(200))
