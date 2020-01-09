const character = {
  name: `Mario`,
  health: 100,
  power: 20,
  getState () {
    return `${this.name} have ${this.health}PVs and ${
      this.power
    } point of power`
  }
}

const companion = {
  name: `Toad`,
  health: 50,
  power: 5,
  getState () {
    return `${this.name} have ${this.health}PVs and ${
      this.power
    } point of power`
  }
}

// function getStateOfCharacter (character) {
//   return `${character.name} have ${character.health}PVs and ${
//     character.power
//   } point of power`;
// }

// console.log(getStateOfCharacter(character));
console.log(character.getState())
console.log(companion.getState())
