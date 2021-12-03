function nameMenuItem(name) {
  return `Delicious ${name}`
  }

function createMenuItem(name,price,type) {
var newItem = {
  name: name,
  price: price,
  type: type
}
  return newItem
  }

function addIngredients(item, ingredients) {
if(!ingredients.includes(item))
  ingredients.push(item)
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(menuItemName) {
    var newPrice = (menuItemName - (menuItemName/10))
    return newPrice
}

function createRecipe(item, ingredients, menuItemType) {
  var newRecipe = {
    title: item,
    ingredients: ingredients,
    type: menuItemType
  }
  return newRecipe
}



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
