"use strict";

class BaseClass {
  constructor() {}
}

class MyTest extends BaseClass {
  constructor(){    
    super();
    //constructor placeholder for now
  }

  doStuff() {
    let myprom = new Promise((resolve,reject) => {

			//setTimeout(() => resolve("done"),1000);
      setTimeout(() => reject(new Error("whoops!")),1000);
    });

    myprom.then(
      (blah) => {
          console.log('in 1st then');
          console.log(blah);
          return blah;
      },
      (error) => {
				console.log('in 1st error handler: '+ error) ;
				reject(new Error("whoops 2"));
        return error;
      }
    ).then(
      (result) => {
        console.log('ok 2nd then');
        console.log(result);
        return result;
      },
      (error) => {
        console.log('in 2nd error handler: ' + error);
        return error;
      },
    );
  }
}

// MAIN EXECUTION BEGINS HERE
(()=>{
  let a = new MyTest();
  
  a.doStuff();
  console.log("subsequent execution");
}) ();
