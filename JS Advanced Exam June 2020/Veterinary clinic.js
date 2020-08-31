// Test #6 (Incorrect answer)
class VeterinaryClinic {
  constructor(clinicName, capacity) {
    this.clinicName = clinicName;
    this.capacity = capacity;
    this.clients = [];
    this.currentCapacity = 0;
    this.totalProfit = 0;
    this.clinic = {};
  }

  newCustomer(ownerName, petName, kind, procedures) {
    let isValid = false;
    if (this.currentCapacity === this.capacity) {
      throw new Error(`Sorry, we are not able to accept more patients!`);
    }
    if (!this.clinic.hasOwnProperty(ownerName)) {
      this.currentCapacity++;
      this.clients.push(ownerName);
      this.clinic[ownerName] = [];
      this.clinic[ownerName].push({
        name: petName,
        kind: kind,
        procedures: procedures,
      });
    } else {
      this.clinic[ownerName].forEach((obj) => {
        if (obj.name === petName && obj.procedures.length > 0) {
          isValid = true;
          throw new Error(
            `This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${obj.procedures.join(
              ", "
            )}.`
          );
        }
      });

      if (isValid === false) {
        this.currentCapacity++;
        this.clinic[ownerName].push({
          name: petName,
          kind: kind,
          procedures: Array.from(procedures),
        });
      }
    }
    return `Welcome ${petName}!`;
  }

  onLeaving(ownerName, petName) {
    let petExist = false;
    this.clinic[ownerName].forEach((obj) => {
      if (obj.name === petName) {
        petExist = true;
      }
    });
    let proceduresExist = true;
    this.clinic[ownerName].forEach((obj) => {
      if (obj.name === petName && obj.procedures.length === 0) {
        proceduresExist = false;
      }
    });
    if (petExist === false || proceduresExist === false) {
      throw new Error(`Sorry, there are no procedures for ${petName}!`);
    } else if (!this.clients.includes(ownerName)) {
      throw new Error(`Sorry, there is no such client!`);
    } else {
      this.clinic[ownerName].forEach((obj) => {
        if (obj.name === petName) {
          this.totalProfit += obj.procedures.length * 500;
          this.currentCapacity--;
          obj.procedures = [];
        }
      });
      return `Goodbye ${petName}. Stay safe!`;
    }
  }

  toString() {
    let result = [];
    let percentage = Math.floor((this.currentCapacity / this.capacity) * 100);
    let percentageStr = `${this.clinicName} is ${percentage}% busy today!`;
    let profit = this.totalProfit.toFixed(2);
    let profitStr = `Total profit: ${profit}$`;
    result.push(percentageStr);
    result.push(profitStr);
    let sorted = Object.entries(this.clinic).sort(
      (a, b) => a[0].localeCompare(b[0]) || a[1].name.localeCompare(b[1]).name
    );
    let str = "";
    for (const s of sorted) {
      str += `${s[0]} with:\n`;
      for (const obj of s[1].sort((a, b) => a.name.localeCompare(b.name))) {
        str += `---${
          obj.name
        } - a ${obj.kind.toLowerCase()} that needs: ${obj.procedures.join(
          ", "
        )}\n`;
      }
    }
    result.push(str);
    return result.join("\n").trim();
  }
}

// Input Data
let clinic = new VeterinaryClinic("SoftCare", 10);
console.log(
  clinic.newCustomer("Jim Jones", "Tom", "Cat", ["A154B", "2C32B", "12CDB"])
);
console.log(
  clinic.newCustomer("Anna Morgan", "Max", "Dog", ["SK456", "DFG45", "KS456"])
);
console.log(clinic.newCustomer("Jim Jones", "Tiny", "Cat", ["A154B"]));
console.log(clinic.onLeaving("Jim Jones", "Tiny"));
console.log(clinic.toString());
clinic.newCustomer("Jim Jones", "Sara", "Dog", ["A154B"]);
console.log(clinic.toString());
