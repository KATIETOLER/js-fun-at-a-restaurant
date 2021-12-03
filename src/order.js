
function takeOrder(addOrder, deliveryOrders) {
  if(deliveryOrders.length < 3)
deliveryOrders.push(addOrder)
}

function refundOrder(number, orders){
  for(var i = 0; i < orders.length; i++) {
    if(number === orders[i].orderNumber) {
      orders.splice(i, 1)
    }
  }
}

function listItems(listStuff) {
  var orders = []
  for(var i = 0; i < listStuff.length; i++) {
    orders.push(listStuff[i].item)
    }
    return orders.join(`, `)
  }

  function searchOrder(deliveryOrders, food) {
    var isOrdered = false;
    for(var i = 0; i < deliveryOrders.length; i++) {
      if(deliveryOrders[i].item === food) {
        isOrdered = true;
      }
    }
    return isOrdered
  }


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
