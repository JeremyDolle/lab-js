// Lets create a burger party
let burgers = 10
// there is a stand where you can order a burger

// function order return a promise
function order (type) {
  return new Promise(function (resolve, reject) {
    if (burgers <= 0) {
      return reject(`no more burgers`)
    }
    setTimeout(() => {
      let burger = cookBurger(type)
      burgers--
      return resolve(burger)
    }, 10000)
  })
}

// async function
const cookBurger = (type) => {
  console.log(`Burger cooked`)
  return {
    name: type
  }
}

// async function
const cookMilkshake = (type) => {
  console.log(`Milkshake cooked`)
  return {
    name: type
  }
}

order(`JacksBurger`)
  .then(burger => {
    const milkshake = cookMilkshake(`chocolate`)
    return { burger, milkshake }
  })
  .then(foodItems => {
    console.log(`Burger party !`, foodItems)
  })
  .catch(err => {
    console.log(...err)
  })
