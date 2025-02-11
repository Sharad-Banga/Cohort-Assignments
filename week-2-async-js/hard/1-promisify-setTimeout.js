import fs from 'fs';


function fxn(filePath){
  return new Promise(function(resolve,reject){
    fs.readFile(filePath, "utf-8",function(err,data){
      if(err){
        reject(err);
      }
      else{
        resolve(data);
      }
    })
  });
}

function res(data){
  console.log("data ",data);
}

function err(simran){
  console.log("gumshuda",simran);
}
fxn("../easy").then(res).catch(err);


