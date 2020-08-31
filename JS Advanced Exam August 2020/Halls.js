function solution() {
  class Hall {
    constructor(capacity, name) {
      this.capacity = capacity;
      this.name = name;
      this.events = [];
    }

    hallEvent(title) {
      if (this.events.includes(title)) {
        throw new Error(`This event is already added!`);
      } else {
        this.events.push(title);
        return `Event is added.`;
      }
    }

    close() {
      this.events = [];
      return `${this.name} hall is closed.`;
    }

    toString() {
      let result = [`${this.name} hall - ${this.capacity}`];
      if (this.events.length > 0) {
        result.push(`Events: ${this.events.join(", ")}`);
      }
      return result.join("\n");
    }
  }

  class MovieTheater extends Hall {
    constructor(capacity, name, screenSize) {
      super(capacity, name);
      this.screenSize = screenSize;
      this.events = [];
    }

    close() {
      return super.close() + "Аll screenings are over.";
    }

    toString() {
      let result = [super.toString()];
      result.push(
        `${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`
      );
      return result.join("\n");
    }
  }

  class ConcertHall extends Hall {
    constructor(capacity, name) {
      super(capacity, name);
      this.events = [];
      this.performer = [];
    }

    // hallEvent а не hallEvents както са го написали!!! Копи пейст ще ти изиграе шегичка!!!
    hallEvent(title, performers) {
      if (this.events.includes(title)) {
        throw new Error(`This event is already added!`);
      } else {
        this.events.push(title);
        this.performer.push(performers);
        return `Event is added.`;
      }
    }

    close() {
      this.performer = [];
      return super.close() + "Аll performances are over.";
    }

    toString() {
      let result = [super.toString()];
      if (this.events.length > 0) {
        for (const e of this.performer) {
          result.push(`Performers: ${e.join(", ")}.`);
        }
      }
      return result.join("\n");
    }
  }

  return { Hall, MovieTheater, ConcertHall };
}

// Input Data
solution();
let classes = solution();
let hall = new classes.Hall(20, "Main");
console.log(hall.hallEvent("Breakfast Ideas"));
console.log(hall.hallEvent("Annual Charity Ball"));
console.log(hall.toString());
console.log(hall.close());
//--------------------------------------------------------------------------------------
let movieHall = new classes.MovieTheater(10, "Europe", "10m");
console.log(movieHall.hallEvent("Top Gun: Maverick"));
console.log(movieHall.toString());
//--------------------------------------------------------------------------------------
let concert = new classes.ConcertHall(5000, "Diamond");
console.log(concert.hallEvent("The Chromatica Ball", ["LADY GAGA"]));
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());
