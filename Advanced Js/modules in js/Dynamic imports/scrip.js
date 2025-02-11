// in static imports ,you have to use "import" statement at the top of the file

// you can not add conditional imports while using static imports ,

// the path should be a string value 

// in ES2020 introduced th dynamic import of a the module via function like import

// syntax for the dynamic import

// import(moduleSpecifier);

// a dynamic import allows you to import a module when needed

// moduleSpecifier can also be an expression that evaluates to a string

// the import return a promise that will be fulfilled once a module is loaded completely


let btn =document.getElementById("btn");

btn.addEventListener("click",function(){
    import("./export.js").then((msgModule)=>{
        msgModule.show();
    }).catch((e)=>{console.log(e)});
})