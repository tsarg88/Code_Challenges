// Meal Maker
// As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order
// can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.
// Taken from codecademy.com

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is ${totalPrice}`;
  },
};

menu.addDishToCourse("appetizers", "salad", 4.0);
menu.addDishToCourse("appetizers", "wings", 4.5);
menu.addDishToCourse("appetizers", "fries", 5.0);

menu.addDishToCourse("mains", "steak", 10.25);
menu.addDishToCourse("mains", "salmon", 7.75);
menu.addDishToCourse("mains", "tofu", 11.2);

menu.addDishToCourse("desserts", "ice-cream", 3.0);
menu.addDishToCourse("desserts", "coffee", 3.0);
menu.addDishToCourse("desserts", "cake", 3.25);

const meal = menu.generateRandomMeal();
console.log(meal);
