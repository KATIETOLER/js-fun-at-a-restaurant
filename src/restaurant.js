
function createRestaurant(name) {
var restaurant = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
    }
  }
  return restaurant
}

function addMenuItem(restaurant, food) {
    if(food.type === "breakfast" && !restaurant.menus.breakfast.includes(food)) {
    restaurant.menus.breakfast.push(food)
      }
     if(food.type === "lunch" && !restaurant.menus.lunch.includes(food)) {
    restaurant.menus.lunch.push(food)
      }
    if(food.type === "dinner" && !restaurant.menus.dinner.includes(food)) {
    restaurant.menus.dinner.push(food)
      }
      return restaurant
  }

function removeMenuItem(restaurant, item, type) {
  for(var i = 0; i < restaurant.menus[type].length; i++) {
  if(restaurant.menus[type][i].name === item) {
    restaurant.menus[type].splice(item, 1)
    return `No one is eating our ${item} - it has been removed from the ${type} menu!`
    }
  }
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
