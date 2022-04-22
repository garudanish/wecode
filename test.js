// 1부터 50의 자연수 중 짝수를 구하는 함수

const evenFromOneToFifty = () => {
  const array = [];

  for (let i = 1; i <= 50; i++) {
    !(i % 2) && array.push(i);
  }

  return array;
};
