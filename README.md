# Javascript exercises to handle with the basics 

### Exercice 0 :

In this section, we will learn how to use object in order to be confident with the Javascript operations 
that are possible on objects with a simple example. After we will do harder example.

:information_source: ```In the next 3 exercises will build a really simple game in order to illustrate different javascript features ``` :information_source:

## Steps to build the simple game

In this section we will build a simple game. You will have a player and a companion walking in the valley, 
they will fight monsters and find potions and weapons to fight them.

### Exercise 1 :
First step is to create a first character, it will be the player. So you will create a player object with these props :
- its name (_string_)
- its health (_number_)
- its power (_number_)


Next, you will create a function that describe the object player like so :
```
Mario have 100PVs and 20 point of power
```

Finally you create another character witch is the companion of your player. Its the same object as the player

You will notice that, in our game, if the player object begin to be complex and enormous, 
you will have to duplicate a bunch of lines to make his companion

So, in the next exercise we will talk about Prototype

### Exercise 2 :
Prototype can help you to create classes and you will import this class when it is necessary. 
So the goal is to create a `Models/Character` Class. And then import it in `index.js`

```javascript
//Models/Character.js :
export default class Character {
    //...
}

//index.js
import Character from "./Models/Character"

const player = new Character(`Mario`, 100, 20)
```

Next, create a monster and attack the player. Modify `getState()` to indicate if a character is dead.
In order to make our player stronger we will introduce object that give him power and health. 
So you will create a Class `Weapon` and a Class `Potion` and an `eat()` function to consume it.

### Exercise 3 :
We will work on array operations. For that, we will give to our player an inventory/bag. 
By default, when you create a character this bag is empty.

First, create a function to loot Weapons or Potions and loot some objects.

Next, we will create these functions in Character Class: 
- `getWeapons` Get the list of the Weapons
- `getPotions` Get the list of the Potions
- `getWeaponNames` Get the list of the Weapon names
- `getBagWeaponsPower` Get the total of weapons in the inventory

## Going further in Javascript
In this section, we will deal with Promise. To understand we will learn it through a simple example.
Imagine a garden with tables and a burger stand. To order a burger, you will have to queue up. 
When you order a burger the man give you a beeper and indicate that it will vibrate/ make a sound when your burger is ready or if there is a problem.
The `Beeper` is the Promise, you are sure to have a response (positive or negative).

### Exercise 4 :
So you organize a burger party and you have a number of burger. When someone order a burger, you give him the beeper,
if there is no more burger you reject the order and call the client to inform him. If there is burgers,
you simulate a cooking time with a timeout of 10 seconds.

### Exercise 5 :
You now saw `then()` and `catch()` for **Promise**. You have to know that you can chain `then()` functions.
A seconds `then()` will have the returned value of the first `then()` in parameters. 
For example, imagine that you have milkshake available with your burger. 
Now you will cook a milkshake when the burger is cooked and place the burger and the milkshake on the plate.

### Exercise 6 :
Imagine your are now with your friends. And you want that your beeper warns you when all orders and done.

### Exercise 7:
Now you will be the cooker. The instructions are really precise, you have to cook the steak first. 
When the steak is cooked, you will have to cook the bread. When the bread is cooked, prepare the sauce.
So you will have to chain Promises.
