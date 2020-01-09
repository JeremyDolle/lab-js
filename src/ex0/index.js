// ##################################################################################
// ####################### WORK WITH OBJECT DECOMPOSE ###############################
// ##################################################################################

const jack = {
  id: 154,
  name: `Jack`,
  family: {
    mother: {
      age: 48,
    },
    father: {
      name: `Pierre`,
      age: 53,
    }
  }
}

// Without decomposition : Get father name
let jackFatherName = jack.family.father.name
console.log(`1-> Father :  ${jackFatherName}`)

// Simple Decomposition (with renaming) : Get father name
let { name: fatherName } = jack.family.father
console.log(`2-> Father : ${fatherName}`)

// Complex decomposition : Get father name
const { family : { father: {name: hisFatherName} } } = jack
console.log(`3-> Father : ${hisFatherName}`)

// WHY DOING COMPLEX DECOMPOSITION ?????????
// IMAGINE YOU DON'T KNOW IF YOUR JACK HAS FAMILY (maybe the data was broken)

// Without decomposition : Get mother name
const jackFamily = jack.family || {}
const jackMother = jackFamily.mother || {}
const jackMotherName = jackMother.name || ``
console.log(`4-> Mother : ${jackMotherName}`)

// Simple Decomposition (with renaming and default value) : Get mother name
const { family: hisFamily = {} } = jack
const { mother : hisMother = {} } = hisFamily
const { name : hisMotherName = `` } = hisMother
console.log(`5-> Mother : ${hisMotherName}`)

// Complex decomposition (with renaming and default value) : Get mother name
const { family : { mother: {name: motherName = ``} = {} } = {} } = jack
console.log(`6-> Mother : ${motherName}`)




// ##################################################################################
// ##################### WORK WITH OBJECT DECOMPOSE LIST ############################
// ##################################################################################

const persons = [
  {
    id: 154,
    name: `Jack`,
    family: {
      mother: {
        name: `Eve`,
        age: 48,
      },
      father: {
        name: `Pierre`,
        age: 53,
      },
      brother: {
        name: `Theo`,
        age: 20,
      }
    }
  },
  {
    id: 155,
    name: `Mark`,
    family: {
      mother: {
        name: `Myriam`,
        age: 30,
      },
      father: {
        name: `Jean`,
        age: 32,
      }
    }
  },
  {
    id: 156,
    name: `Emma`,
  },
  {
    id: 156,
    name: `Emma`,
    family: {}
  }
]

// print father, mother and brother if exist without decomposition
console.log(`7-> father, mother and brother :`)
persons.map((person) => {
  const family = person.family || {}

  const father = family.father || {}
  const fatherName = father.name || ``

  const mother = family.mother || {}
  const motherName = mother.name || ``

  const brother = family.brother || {}
  const brotherName = brother.name || ``

  console.log(fatherName, motherName, brotherName)
})

// print father, mother and brother if exist with decomposition
console.log(`8-> father, mother and brother :`)
const family = [`father`,`mother`,`brother`]
persons.map((person) => {
  const names = family.map(member => {
    const { family : { [member] : { name = `` } = {} } = {} } = person
    return name
  })
  console.log(...names)
})




// ##################################################################################
// ################## WORK WITH OBJECT TO ARRAY #####################################
// ##################################################################################

const persons2 = {
  15: {
    firstName: `Beth`,
    lastName: `Silva`,
    age: 32,
  },
  16: {
    firstName: `Christine`,
    lastName: `Russell`,
    age: 42,
  },
  25: {
    firstName: `Hollie`,
    lastName: `Peck`,
    age: 22,
  }
}

console.log(`9-> .values :::::`)
// Goal : log each person without id
Object.values(persons2).map((item) => console.log(item))

console.log(`10-> .keys ::::::`)
//Goal all ids
Object.keys(persons2).map((item) => console.log(`id : ${item}`))

console.log(`11-> .entries ::::::`)
// goal all person with ids
Object.entries(persons2).map((item) => console.log({...item[1], id: item[0]}))
