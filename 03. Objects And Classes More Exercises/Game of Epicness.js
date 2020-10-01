function solution(input = [], battle = []) {
  let kingdoms = {};
  for (let i = 0; i < input.length; i++) {
    if (!kingdoms.hasOwnProperty(input[i].kingdom)) {
      kingdoms[input[i].kingdom] = [];
      input[i].wins = 0;
      input[i].losses = 0;
      kingdoms[input[i].kingdom].push(input[i]);
      continue;
    }
    let generals = [];
    kingdoms[input[i].kingdom].forEach((obj) => {
      generals.push(obj.general);
    });
    if (generals.includes(input[i].general)) {
      kingdoms[input[i].kingdom].forEach((obj) => {
        if (input[i].general === obj.general) {
          obj.army += input[i].army;
        }
      });
    } else {
      input[i].wins = 0;
      input[i].losses = 0;
      kingdoms[input[i].kingdom].push(input[i]);
    }
  }
  for (let i = 0; i < battle.length; i++) {
    let line = battle.shift();
    i--;
    let attackingKingdom = line[0];
    let attackingGeneral = line[1];
    let defendingKingdom = line[2];
    let defendingGeneral = line[3];
    let attackingArmyCount = 0;
    let defendingArmyCount = 0;
    let attackerWin = 0;
    let attackerLoss = 0;
    let defenderWin = 0;
    let defenderLoss = 0;
    if (attackingKingdom !== defendingKingdom) {
      kingdoms[attackingKingdom].forEach((obj) => {
        if (obj.general === attackingGeneral) {
          attackingArmyCount = obj.army;
        }
      });
      kingdoms[defendingKingdom].forEach((obj) => {
        if (obj.general === defendingGeneral) {
          defendingArmyCount = obj.army;
        }
      });
      if (attackingArmyCount > defendingArmyCount) {
        attackingArmyCount *= 1.1;
        defendingArmyCount *= 0.9;
        attackerWin = 1;
        defenderLoss = 1;
      } else if (attackingArmyCount < defendingArmyCount) {
        attackingArmyCount *= 0.9;
        defendingArmyCount *= 1.1;
        attackerLoss = 1;
        defenderWin = 1;
      }
      kingdoms[attackingKingdom].forEach((obj) => {
        if (obj.general === attackingGeneral) {
          obj.army = Math.floor(attackingArmyCount);
          obj.wins += attackerWin;
          obj.losses += attackerLoss;
        }
      });
      kingdoms[defendingKingdom].forEach((obj) => {
        if (obj.general === defendingGeneral) {
          obj.army = Math.floor(defendingArmyCount);
          obj.wins += defenderWin;
          obj.losses += defenderLoss;
        }
      });
    }
  }
  let [winningKingdom, winningGenerals] = Object.entries(kingdoms).sort(
    (a, b) => {
      // Kingdom Wins Descending
      let firstWin = b[1].map((g) => g.wins).reduce((a, c) => a + c, 0);
      let secondWin = a[1].map((g) => g.wins).reduce((a, c) => a + c, 0);
      let winningDifference = firstWin - secondWin;

      if (winningDifference !== 0) {
        return winningDifference;
      }
      // Kingdom Losses Ascending
      let firstLosses = a[1].map((g) => g.losses).reduce((a, c) => a + c, 0);
      let secondLosses = b[1].map((g) => g.losses).reduce((a, c) => a + c, 0);
      let losingDifference = firstLosses - secondLosses;
      if (losingDifference !== 0) {
        return losingDifference;
      }
      // Kingdom Name Ascending
      return a[0].localeCompare(b[0]);
    }
  )[0];
  let result = `Winner: ${winningKingdom}\n`;
  for (const g of winningGenerals.sort((a, b) => b.army - a.army)) {
    result +=
      `/\\general: ${g.general}\n` +
      `---army: ${g.army}\n` +
      `---wins: ${g.wins}\n` +
      `---losses: ${g.losses}\n`;
  }
  console.log(result.trim());
}

solution(
  [
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 },
  ],
  [
    ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"],
  ]
);
