# _runner

This is a Phaser.js Project

So this was, or is... a project that was supposed to be a very simple game that got out of hand. in the bad sense. anyway. It's not finished and barely working.

This is the reason to this README, **help!**. I need your help to make this happen. **To check current status go to the bottom of this README.**

> I lack the time to make this possible at the moment and I'm thinking on transferring it to Unity, although I would like to stick to the browser, I'm uploading this to Github so others can help, *if they want to*, to take this project off the ground and make it possible once and for all.
> I'm not trying to get the internet to do all the work for me, I just place this here so if somebody wants to branch it and try to make something out of it.

## Intentions

> Everything in this point are concepts I had in mind, If you end up forking this project, just use this as a list of suggestions, I'm not one to tell you what to do.

### This is a Retro Arcade style game, the objective is to get a high score.

### 1. only one level that never ends

It gets harder as the player advances. *This is what I have in mind, if you wanna change it, do it* 

+ two values establish the jumps; the score, and the lives you have.
+ the different jumps are ranked in Tiers, once a certain score threshold is passed the next tier is unlocked and new, more challenging jumps appear, and easier onces go away.

There's something I haven't decided yet. I'm not sure if adding a multiplier when certain score and number of hearts are met. But this can be decided when testing.

### 2. the player has 5 lives

+ each time you touch a "bad" box you loose one life 
+ if you loose all lives, GAME OVER
+ if you fall down a pit, GAME OVER

Not sure about giving the chance of getting lives back or staking more. *I rather not*

### 3. score system
+ there's two score values; the distance ran and the time past
+ The time subtracts from the distance
	+ This is to penalize stopping. So if you stop running the time still subtracts. 

### after the player dies

+ death is inevitable
+ once dead you can record your score and give yourself a 3 character name

### Epilogue

I'm sure some things are not well explained, and something was left hanging. So don't hesitate on bashing me online telling me everything I did wrong. try to be constructive though.

THANKS!

## Status (4/10/17)

The game uses [Phaser](https://phaser.io) and right now it's just one level with no loading on start screens so when you start the only thing that appears is the level per se. 

As said, this is just one level, and it's not where I wanted the project to be at. The real objective was to make this an endless runner. To make it an infinite level that goes on and on until the player dies.

This is where this thing is at, right now:

+ only one level
+ no landing page
+ "harmful" boxes are harmless and with no collision *problems with tilesets and layers*
+ can't die
+ no animation when jumping
+ no animation when bumping into something
