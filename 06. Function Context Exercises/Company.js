class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(username, Salary, Position, Department) {
    this._validation(username);
    this._validation(Salary);
    this._validation(Position);
    this._validation(Department);
    if (Salary < 0) {
      throw new Error(`Invalid input!`);
    }
    if (!this.departments.hasOwnProperty(Department)) {
      this.departments[Department] = [];
    }
    this.departments[Department].push({
      username: username,
      salary: Salary,
      position: Position,
      department: Department,
    });
    return `New employee is hired. Name: ${username}. Position: ${Position}`;
  }
  bestDepartment() {
    let bestDepartment = {};
    let sEmployees = {};
    for (const key in this.departments) {
      let avgSalary =
        this.departments[key].reduce((a, c) => a + c.salary, 0) /
        this.departments[key].length;
      bestDepartment[key] = avgSalary;
    }
    bestDepartment = Object.entries(bestDepartment).sort((a, b) => b[1] - a[1]);
    sEmployees = Object.entries(this.departments[bestDepartment[0][0]]).sort(
      (a, b) =>
        b[1].salary - a[1].salary || a[1].username.localeCompare(b[1].username)
    );
    let result = [
      `Best Department is: ${bestDepartment[0][0]}`,
      `Average salary: ${bestDepartment[0][1].toFixed(2)}`,
    ];
    for (const s in sEmployees) {
      result.push(
        `${sEmployees[s][1].username} ${sEmployees[s][1].salary} ${sEmployees[s][1].position}`
      );
    }
    return result.join("\n");
  }
  _validation(value) {
    if (value === "" || value === null || value === undefined) {
      throw new Error(`Invalid input!`);
    }
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
