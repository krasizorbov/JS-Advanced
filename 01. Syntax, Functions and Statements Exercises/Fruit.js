function solution(fruit, weightInGrams, pricePerKilogram) {
  let weigthInKilograms = weightInGrams / 1000;
  let moneyNeeded = weigthInKilograms * pricePerKilogram;
  console.log(
    `I need $${moneyNeeded.toFixed(2)} to buy ${weigthInKilograms.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
solution("orange", 2500, 1.8);
solution("apple", 1563, 2.35);
