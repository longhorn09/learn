"use strict";
/**
 *  Basic relearning of Javascript classes
 */

/**
 * Parent class
 */
class myClass {
    constructor() {
        //console.log("in constructor");
        this._name = 'sweet child o mine';
    }

    add5(a) {
        console.log('in parent.add5(' + a + '): ' + (a + 5) );
    }

    get getName() {
        console.log('name property: '+ this._name);
		return this._name;	
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
obj.add5(5);
obj.getName;        //note property, not a function
obj.setName = 'test new name';
obj.getName;
