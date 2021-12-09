
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
  if(!restaurant.menus[food.type].includes(food)) {
  restaurant.menus[food.type].push(food)
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
