function solution(name, age, weight, height) {
  let bmi = Math.round(weight / (height / 100) / (height / 100));
  let result = {
    name: name,
    personalInfo: {
      age: age,
      weight: weight,
      height: height,
    },
    BMI: bmi,
  };
  let s = status(result.BMI);
  result.status = s;
  if (s === "obese") {
    result.recommendation = "admission required";
  }
  return result;
  function status(bmi) {
    if (bmi < 18.5) {
      return "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "overweight";
    } else if (bmi >= 30) {
      return "obese";
    }
  }
}
solution("Peter", 29, 75, 182);
