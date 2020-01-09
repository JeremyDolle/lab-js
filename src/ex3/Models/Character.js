import Potion from "./Potion"
import Weapon from "./Weapon"

export default class Character {
  constructor (name, health, power, bag = []) {
    this.name = name
    this.health = health
    this.power = power
    this.bag = bag
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

  loot (...item) {
    this.bag.push(...item)
  }

  getInstanceInBag (instance) {
    return this.bag.filter(item => item instanceof instance)
  }

  getWeapons () {
    return this.getInstanceInBag(Weapon)
  }

  getMushrooms () {
    return this.getInstanceInBag(Potion)
  }

  getWeaponsNames () {
    return this.getWeapons().map(({ name }) => name)
  }

  getBagWeaponsPower () {
    return this.getWeapons().reduce((acc, { power }) => acc + power, 0)
  }
}
