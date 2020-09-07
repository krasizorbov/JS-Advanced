function solution() {
  const canCast = (state) => ({
    cast: (spell) => {
      console.log(`${state.name} cast ${spell}`);
      state.mana--;
    },
  });

  const mage = (name) => {
    let state = { name, health: 100, mana: 100 };
    return Object.assign(state, canCast(state));
  };

  const canFight = (state) => ({
    fight: () => {
      console.log(`${state.name} slashes at the foe!`);
      state.stamina--;
    },
  });

  const fighter = (name) => {
    let state = {
      name,
      health: 100,
      stamina: 100,
    };
    return Object.assign(state, canFight(state));
  };
  return { mage: mage, fighter: fighter };
}
//solution();
let create = solution();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
