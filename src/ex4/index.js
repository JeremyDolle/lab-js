// Lets create a burger party
let burgers = 1
// there is a stand where you can order a burger

// function order return a promise
const order = (type) => {
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

order(`JacksBurger`)
  .then(burger => {
    console.log(`It's time to eat the burger :`, burger)
  })
  .catch(err => {
    console.log(...err)
  })

order(`JacksBurger`)
  .then(burger => {
    console.log(`It's time to eat the burger :`, burger)
  })
  .catch(err => {
    console.log(...err)
  })
