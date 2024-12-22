
function fxn(n){

    let p = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
      },n*1000);
    }).then(()=>{
      console.log("sssss")
    });
      
}

fxn(3);