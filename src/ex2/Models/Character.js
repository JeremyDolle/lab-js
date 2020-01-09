export default class Character {
  constructor (name, health, power) {
    this.name = name
    this.health = health
    this.power = power
  }

  getState () {
    return this.health > 0
      ? `${this.name} have ${this.health}PVs and ${
          this.power
        } point of power`
      : `${this.name} is dead`
  }

  attack (character) {
    character.health -= this.power
  }

  eat (mushroom) {
    this.power += mushroom.power
    this.health += mushroom.health
  }
}
