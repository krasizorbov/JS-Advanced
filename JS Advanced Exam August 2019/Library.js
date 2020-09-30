class Library {
  constructor(libraryName) {
    this.libraryName = libraryName;
    this.subscribers = [];
    this.subscriptionTypes = {
      normal: libraryName.length,
      special: libraryName.length * 2,
      vip: Number.MAX_SAFE_INTEGER,
    };
  }

  subscribe(name, type) {
    if (type === "normal" || type === "special" || type === "vip") {
      let subscriber = this.subscribers.find((s) => s.name === name);
      if (subscriber === undefined) {
        subscriber = { name: name, type: type, books: [] };
        this.subscribers.push(subscriber);
        return subscriber;
      } else {
        subscriber.type = type;
        return subscriber;
      }
    } else {
      throw new Error(`The type ${type} is invalid`);
    }
  }

  unsubscribe(name) {
    let subscriber = this.subscribers.find((s) => s.name === name);
    if (subscriber === undefined) {
      throw new Error(`There is no such subscriber as ${name}`);
    } else {
      let index = this.subscribers.indexOf(subscriber);
      this.subscribers.splice(index, 1);
      return this.subscribers;
    }
  }

  receiveBook(subscriberName, bookTitle, bookAuthor) {
    let subscriber = this.subscribers.find((s) => s.name === subscriberName);
    if (subscriber === undefined) {
      throw new Error(`There is no such subscriber as ${subscriberName}`);
    }
    let type = subscriber.type;
    if (type === "normal") {
      let length = this.subscriptionTypes.normal;
      if (subscriber.books.length < length) {
        subscriber.books.push({ title: bookTitle, author: bookAuthor });
      } else {
        throw new Error(`You have reached your subscription limit ${length}!`);
      }
    } else if (type === "special") {
      let length = this.subscriptionTypes.special;
      if (subscriber.books.length < length) {
        subscriber.books.push({ title: bookTitle, author: bookAuthor });
      } else {
        throw new Error(`You have reached your subscription limit ${length}!`);
      }
    } else if (type === "vip") {
      let length = this.subscriptionTypes.vip;
      if (subscriber.books.length < length) {
        subscriber.books.push({ title: bookTitle, author: bookAuthor });
      } else {
        throw new Error(`You have reached your subscription limit ${length}!`);
      }
    }
    return subscriber;
  }

  showInfo() {
    if (this.subscribers.length === 0) {
      return `${this.libraryName} has no information about any subscribers`;
    }
    let result = [];
    let books = [];
    for (const s of this.subscribers) {
      result.push(`Subscriber: ${s.name}, Type: ${s.type}`);
      for (const b of s.books) {
        books.push(`${b.title} by ${b.author}`);
      }
      result.push("Received books: " + books.join(", "));
      books = [];
    }
    return result.join("\n");
  }
}
let lib = new Library("Lib");

lib.subscribe("Peter", "normal");
lib.subscribe("John", "special");

lib.receiveBook("John", "A Song of Ice and Fire", "George R. R. Martin");
lib.receiveBook("Peter", "Lord of the rings", "J. R. R. Tolkien");
lib.receiveBook("John", "Harry Potter", "J. K. Rowling");

console.log(lib.showInfo());
