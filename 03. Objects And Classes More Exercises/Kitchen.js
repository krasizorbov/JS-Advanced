class Kitchen {
  constructor(budget, menu, productsInStock, actionsHistory) {
    this.budget = +budget;
    this.menu = {};
    this.productsInStock = {};
    this.actionsHistory = [];
  }

  loadProducts(products) {
    for (const entry of products) {
      let line = entry.split(" ");
      let price = +line.pop();
      let quantity = +line.pop();
      let product = line.join(" ");
      if (this.budget - price >= 0) {
        if (this.productsInStock[product])
          this.productsInStock[product] += quantity;
        else this.productsInStock[product] = quantity;
        this.budget -= price;
        this.actionsHistory.push(`Successfully loaded ${quantity} ${product}`);
      } else {
        this.actionsHistory.push(
          `There was not enough money to load ${quantity} ${product}`
        );
      }
    }
    return this.actionsHistory.join("\n");
  }

  addToMenu(meal, products, price) {
    if (!this.menu.hasOwnProperty(meal)) {
      this.menu[meal] = { products: products, price: +price };
      return `Great idea! Now with the ${meal} we have ${
        Object.keys(this.menu).length
      } meals in the menu, other ideas?`;
    } else {
      return `The ${meal} is already in our menu, try something different.`;
    }
  }

  showTheMenu() {
    if (Object.keys(this.menu).length === 0) {
      return `Our menu is not ready yet, please come later...`;
    } else {
      let result = [];
      for (const m of Object.keys(this.menu)) {
        result.push(`${m} - $ ${this.menu[m].price}`);
      }
      return result.join("\n") + "\n"; // Test 9 => I'll go to softuni and kill you all
    }
  }

  makeTheOrder(meal) {
    if (!this.menu.hasOwnProperty(meal)) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }
    let neededIngredients = this.menu[meal].products;
    for (let item of neededIngredients) {
      item = item.split(" ");
      let quantity = +item.pop();
      let product = item.join(" ");
      if (
        this.productsInStock[product] < quantity ||
        !this.productsInStock[product]
      ) {
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
      }
    }
    for (let item of neededIngredients) {
      item = item.split(" ");
      let quantity = +item.pop();
      let product = item.join(" ");
      this.productsInStock[product] -= quantity;
    }
    this.budget += this.menu[meal].price;
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}
let kitchen = new Kitchen(1000);
console.log(
  kitchen.loadProducts([
    "Banana 10 5",
    "Banana 20 10",
    "Strawberries 50 30",
    "Yogurt 10 10",
    "Yogurt 500 1500",
    "Honey 5 50",
  ])
);
console.log(
  kitchen.addToMenu(
    "frozenYogurt",
    ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    "Pizza",
    [
      "Flour 0.5",
      "Oil 0.2",
      "Yeast 0.5",
      "Salt 0.1",
      "Sugar 0.1",
      "Tomato sauce 0.5",
      "Pepperoni 1",
      "Cheese 1.5",
    ],
    15.55
  )
);
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder("Pizza"));
