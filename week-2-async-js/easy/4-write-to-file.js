/* Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require("fs");

async function writekro(filename , content){

   try{
    await fs.writeFile(filename,content,'utf-8');
    console.log("successsfullly written");
    
   }catch(err){
      console.log("eroorrr :",err);
      
   }

}

writekro("./z.txt","helo g my name is sharad")