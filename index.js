"use strict";
/**
 *  Basic relearning of Javascript classes
 */

/**
 * Parent class
 */
class myClass {
    constructor() {
        console.log("in constructor");
        this._name = 'sweet child o mine';
    }

    showMe(a) {
        console.log("in showMe: " + a+3)        ;
    }

    get getName() {
        console.log('name property: '+ this._name);
    }

    set setName(str) {
        this._name = str;
    }
}
/**
 * Subclass to explore inheritance
 */
class mySub extends myClass{
    constructor() {
        super();
    }

    showBe(a) {
        console.log("in showBe: " + a);
    }
}
//console.log("nope");
let obj = new mySub();
obj.showMe(5);
obj.getName;        //note property, not a function

