// ##################################################################################
// ######################## REDUCE AND PROMISES #####################################
// ##################################################################################
const ingredients = [
  {
    name: `steak`,
    timeToPrepare: 5000
  },
  {
    name: `bread`,
    timeToPrepare: 3000
  },
  {
    name: `sauce`,
    timeToPrepare: 2000
  }
]

function prepare(ingredient, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let cookedIngredient = cook(ingredient)
      return resolve(cookedIngredient)
    }, time)
  })
}

function cook(ingredient) {
  console.log(`ingredient : ${ingredient.name} is ok`)
}

// prepare(Object.values(ingredients)[0], 5000).then(() => {
//     prepare(Object.values(ingredients)[1], 3000).then(() => {
//         prepare(Object.values(ingredients)[2], 2000).then(() => console.log(`tada`))
//     })
// })

Object.values(ingredients).reduce(
  (accPromise, item) => accPromise.then(() => prepare(item, item.timeToPrepare)), Promise.resolve()
)
