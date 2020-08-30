class CheckingAccount {
  constructor(clientId, email, firstName, lastName) {
    this.clientId = clientId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get clientId() {
    return this._clientId;
  }
  set clientId(value) {
    let pattern = /^[0-9]{6}$/;
    let result = value.match(pattern);
    if (result === null) {
      throw TypeError(`Client ID must be a 6-digit number`);
    } else {
      this._clientId = value;
    }
  }
  get email() {
    return this._email;
  }
  set email(value) {
    let pattern = /^[a-zA-Z]+\@[a-z.]+$/;
    let result = value.match(pattern);
    if (result === null) {
      throw TypeError(`Invalid e-mail`);
    } else {
      this._email = value;
    }
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    let pattern = /^[A-Za-z]{3,20}$/;
    let result = value.match(pattern);
    if (value.length < 3 || value.length > 20) {
      throw TypeError(`First name must be between 3 and 20 characters long`);
    }
    if (result === null) {
      throw TypeError(`First name must contain only Latin characters`);
    } else {
      this._firstName = value;
    }
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    let pattern = /^[A-Za-z]{3,20}$/;
    let result = value.match(pattern);
    if (value.length < 3 || value.length > 20) {
      throw TypeError(`Last name must be between 3 and 20 characters long`);
    }
    if (result === null) {
      throw TypeError(`Last name must contain only Latin characters`);
    } else {
      this._lastName = value;
    }
  }
}
let acc = new CheckingAccount("1314", "ivan@some.com", "Ivan", "Petrov");
let acc = new CheckingAccount("131455", "ivan@", "Ivan", "Petrov");
let acc = new CheckingAccount("131455", "ivan@some.com", "I", "Petrov");
