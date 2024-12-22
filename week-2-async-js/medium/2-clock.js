

function timeee(){

  let now = new Date();
  const hours = now.getHours().toString();
  const mins = now.getMinutes().toString();
  const secs = now.getSeconds().toString();

  console.log(`${hours} : ${mins} : ${secs}`);
  setTimeout(timeee ,1000);
  
};



timeee();