/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const { log } = require("console");

function wait1(t) {

  return new Promise((resolve)=>{
    setTimeout(resolve,t*1000);
  });

}

function wait2(t) {
  return new Promise((resolve)=>{
    setTimeout(resolve,t*1000);
  });
}

function wait3(t) {
  return new Promise((resolve)=>{
    setTimeout(resolve,t*1000);
  });
}

async function calculateTime(t1, t2, t3) {
  const old = new Date();// 10
  console.log(old);
  
  await wait1(t1); //3
  await wait2(t2); //2
  await wait3(t3); //1
 
  
  const lapse = new Date()  - old; 
  console.log(new Date());
  
  console.log(lapse);
  

}

calculateTime(3,2,1);