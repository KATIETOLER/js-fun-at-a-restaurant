class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant
  }
  greetCustomer(name, isMorning) {
    if (isMorning) {
      return `Good morning, ${name}!`
    }
      return `Hello, ${name}!`
  }
  checkForFood(food) {
    for (var i = 0; i < this.restaurant.menus[food.type].length; i++) {
    if(this.restaurant.menus[food.type][i] === food)
    {
    return `Yes, we're serving ${food.name} today!`
    }
  }
    return `Sorry, we aren't serving ${food.name} today.`
  }
}

module.exports = Chef;
