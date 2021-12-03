
function createRestaurant(name) {
var restaurant = {
  name: name,
  menus: menu = {
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
  if(type === "breakfast"){
    restaurant.menus.breakfast.splice(item, 1)
  }
  return `No one is eating our ${item} - it has been removed from the ${type} menu!`
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
