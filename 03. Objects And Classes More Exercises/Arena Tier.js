function solution(input = []) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("Ave Cesar")) {
      break;
    }
    if (!input[i].includes("vs")) {
      let [name, technique, skill] = input[i].split(" -> ");
      skill = +skill;
      if (!result.hasOwnProperty(name)) {
        result[name] = {};
        result[name][technique] = skill;
      }
      if (!result[name].hasOwnProperty(technique)) {
        result[name][technique] = skill;
      } else {
        if (result[name][technique] < skill) {
          result[name][technique] = skill;
        }
      }
    } else {
      let [name1, name2] = input[i].split(" vs ");
      if (result.hasOwnProperty(name1) && result.hasOwnProperty(name2)) {
        let firstTech = [...Object.keys(result[name1])];
        let secondTech = [...Object.keys(result[name2])];
        let isTrue = false;
        for (let j = 0; j < firstTech.length; j++) {
          if (secondTech.includes(firstTech[j])) {
            isTrue = true;
            break;
          }
        }
        if (isTrue === true) {
          let firstSkill = 0;
          for (const key in result[name1]) {
            if (result[name1].hasOwnProperty(key)) {
              firstSkill += result[name1][key];
            }
          }
          let secondSkill = 0;
          for (const key in result[name2]) {
            if (result[name2].hasOwnProperty(key)) {
              secondSkill += result[name2][key];
            }
          }
          if (firstSkill > secondSkill) {
            delete result[name2];
          } else {
            delete result[name1];
          }
        }
      }
    }
  }
  let skillOrder = {};
  let names = Object.keys(result);
  for (const name of names) {
    let sum = 0;
    for (const tech in result[name]) {
      sum += result[name][tech];
    }
    skillOrder[name] = sum;
  }
  let output = Object.entries(skillOrder).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < output.length; i++) {
    console.log(`${output[i][0]}: ${output[i][1]} skill`);
    let ss = Object.entries(result[output[i][0]]);
    for (const s of ss.sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    )) {
      console.log(`- ${s[0]} <!> ${s[1]}`);
    }
  }
}

solution([
  "Pesho -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Pesho vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Gosho",
  "Ave Cesar",
]);
