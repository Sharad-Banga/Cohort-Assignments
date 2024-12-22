
const fs = require("fs");
let j = "";
async function read_write(){
  await fs.readFile("./a.txt",'utf-8',(err , data)=>{
      if(err){
        console.log("error hai bhai" );
      }else{
        j = data;
        console.log("data",j);
      }

      const newj = j.replace(/\s+/g, ' ').trim();
      console.log(newj);

      fs.writeFile("./a.txt",newj,(err,data)=>{
        if(err){
          console.log("likhne mein error hai");
          
        }else{
          console.log("likh dia bhai");
          
        }
      })

  })

}
read_write();