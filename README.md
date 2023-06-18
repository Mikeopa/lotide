# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @michaelopa/lotide`

**Require it:**

`const _ = require('@michaelopa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

Lotide Directory: Functions from the Lotide directory.
* Implemented Assert Equal: Function that checks if two values are equal and returns true if they are.
* Improved Assert Equal function: Updated Assert Equal function using template literals.
* Implemented Head: Function that retrieves the first element from an array.
* Implemented Tail: Function that retrieves all elements of an array except the first one.
* Implemented eqArrays: Function that compares two arrays and returns true if they are equal, false otherwise.
* Implemented assertArraysEqual: Function that prints an appropriate message after comparing two arrays.
* Implemented function: Function that filters out items from a source array based on an itemsToRemove array.
* Implemented flatten function: Function that flattens an array containing nested elements.
* Implemented middle function: Function that retrieves the middle-most element of an array.
* Implemented countOnly function: Function that counts specific items in a collection.
* Implemented countLetters function: Function that counts the occurrences of letters in a sentence.
* Implemented letterPositions function: Function that returns the indices of letter positions in a string.
* Implemented findKeyByValue function: Function that finds the first key corresponding to a given value in an object.
* Implemented eqObjects function: Function that compares two objects and returns true if they are equal, false otherwise.
* Implemented assertObjectsEqual function: Function that compares two objects and returns true if they are equal, false otherwise.
* Implemented Map function: Function that applies a callback to each item in an array and returns a new array based on the results.
* Implemented takeUntil function: Function that creates a slice of an array until a specified condition is met.
* Implemented findKey function: Function that finds the first key in an object that satisfies a given condition.
* Lotide Refactor Example: Refactored version of the assertEqual function for modularity.
* Refactor Tail: Refactored version of the tail function for modularity.
* Refactor eqArrays: Refactored version of the eqArrays function for modularity.
* Refactor assertArraysEqual: Refactored version of the assertArraysEqual function for modularity.