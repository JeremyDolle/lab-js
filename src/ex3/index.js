import Character from "./Models/Character"
import Potion from "./Models/Potion"
import Weapon from "./Models/Weapon"

const player = new Character(`Mario`, 100, 20)

const companion = new Character(`Toad`, 50, 5)

console.log(player.getState())
console.log(companion.getState())

const monster = new Character(`Bowser`, 200, 150)
console.log(monster.getState())

// Eat Mushroom
const magicMushroom = new Potion(`Big Mushroom`, 500, 300)
player.eat(magicMushroom)
console.log(player.getState())

// player.health -= monster.power;
monster.attack(player)
console.log(player.getState())

player.attack(monster)
console.log(monster.getState())

// Loot
const fireBall = new Weapon(`fireBall`, 30)
// player.loot(fireBall);
const iceBall = new Weapon(`iceBall`, 10)
const lifeMushroom = new Potion(`lifeMushroom`, 10, 0)

player.loot(iceBall, lifeMushroom, fireBall)

console.log(`\n\n\n`)
console.log(player.getMushrooms())
console.log(player.getWeapons())
console.log(player.getWeaponsNames())
console.log(player.getBagWeaponsPower())
