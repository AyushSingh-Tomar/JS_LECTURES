// Sometimes there is a piece of code that has to be executed regardless of the status of error(occur/or not),we can use finally() here
// catch becomes optional if you use finally()

//Along with try either catch or finally is required else that will be a syntax error
let result = 0;
function add(a,b){return a+b;}
try{
 result = add(20,30)
}
catch(e){
  console.log(e.message)
}
finally{
 console.log(result)
 // generally when we add return keyword we return some value and stop executing rest lines but it does not happen in the try catch
}

function wow(){
    try{
        return 1;
    }
    catch{
        return 2;
    }
    finally{
        return 3;// this is final return
    }
}

console.log(wow());

