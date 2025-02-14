let p = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let i=1;
        if(i==0){
            reject("Error");
        }
        else{
            resolve("Hello");
        }
        
        
    },2000);
});

async function display(){
    try{
        // as soon as there arises a problem here it leaves try block and enter the catch block
        console.log("try block entered");
        let result = await p;
        console.log(result);
        console.log("try block executed");
    }catch(e){
        console.log("Catch block entered");
        console.log(e)
    }
    
}

display();