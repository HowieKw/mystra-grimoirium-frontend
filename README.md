# Final Project - Mystra Grimoirium

Mystra Grimoirium is an app that will allow users to keep track of their own grimoire for Dungeons & Dragons' spells. Users would be able to add pre-made grimoires to their list of grimoires to use as reference for spells, as well as create their own with a list of available spells. It is an app that will help keep track of spells a D&D player needs and give detailed description of what that spell does with a fun flair.

This is the frontend of Mystra Grimoirium. If you would like to see the backend, please click [here](https://github.com/HowieKw/mystra-grimoirium-backend)

## User Stories

* Users will be able to create an account and login to use the app.
* Users will be able to navigate into:
    * a list of grimoires they have added to their shelf.
    * a list of current available grimoires that they can then add to their shelf.
    * a grimoire creation page to create a grimoire and add spells to their grimoire.
    * the master spellbook to go directly to all listed spells to do research.
* Users will also be able to click into a grimoire that each have their own combination of current spells.
    * Users will then be able to click spells inside the grimoires to go in a full, page detail of the spell.
    * Users will also be able to cast a spell and have an animation of the spell pop up.
* Users are able to edit grimoires they created to update spells.

## Models and Relationships

![My Data Relationships](./public/Final-Model-Map.png)

### User 
A `User` has many `User Grimoires`, has many `Grimoires` through `User Grimoires`
A `User` has many created `Grimoires`
* username
* password_digest

### User Grimoire
`UserGrimoires` belongs to `User`
`UserGrimoires` belongs to `Grimoires`

### Grimoire
A `Grimoire` belongs to `User`
A `Grimoire` has many `User Grimoires`, has many authors or `Users` through `User Grimoires`
`Grimoire` has many `GrimoireSpells`, has many `Spells` through `GrimoireSpells`
* title
* image

### Spell
`Spell` has many `Spelltags`, has many `Tags` through `Spelltags`
`Spell` has many `Class-Spells`, has many `Classes` through `Class-Spells`
`Spell` has many `GrimoireSpells`, has many `Grimoires` through `GrimoireSpells`

* name
* component
* casting time
* duration
* range/area
* attack/save
* description
* ani

### Class
`Class` has many `Class-Spells`, has many `Spells` through `Class-Spells`
* name

### Tag
`Tag` has many `Spelltags`, has many `Spells` through `Spelltags`
* name

## Wirefream/Mockup

View [here](https://www.figma.com/file/DyQl9tvtAueTZxkaUhr63o/D-and-D-Grimoire?node-id=0%3A1)

# Developer
* Howard Kwon