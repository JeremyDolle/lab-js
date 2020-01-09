// Lets create a burger party
let burgers = 10
// there is a stand where you can order a burger

// function order return a promise
const order = (type) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (burgers <= 0) {
        return reject(`no more burgers`)
      }
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

const order1 = order(`JacksBurger`)
const order2 = order(`TomsBurger`)
const order3 = order(`MarieBurger`)
const order4 = order(`JessBurger`)

Promise.all([order1, order2, order3, order4]).then(burgers =>
  console.log(`all order are done`, burgers)
)
