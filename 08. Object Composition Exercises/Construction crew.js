function solution(worker) {
  class Worker {
    constructor(weight, experience, levelOfHydrated, dizziness) {
      this.weight = weight;
      this.experience = experience;
      this.levelOfHydrated = levelOfHydrated;
      this.dizziness = dizziness;
    }

    takeWater() {
      this.levelOfHydrated +=
        Number(this.weight) * 0.1 * Number(this.experience);
      this.dizziness = false;
    }
  }

  let w = new Worker(
    worker.weight,
    worker.experience,
    worker.levelOfHydrated,
    worker.dizziness
  );

  if (w.dizziness === false) {
    return w;
  } else {
    w.takeWater();
    return w;
  }
}
solution();
