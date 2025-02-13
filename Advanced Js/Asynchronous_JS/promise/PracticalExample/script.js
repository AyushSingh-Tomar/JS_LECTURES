const api="https://api.adviceslip.com/advicea";

let myPromise = new Promise(
    (resolve,reject)=>{
        let request = new XMLHttpRequest();
        try{
        request.open('GET',api);
        }catch(e){console.log(e)}
        request.onload=()=>{
            if(request.status === 200){
              resolve(request.response);
            }else{
              reject("Error");
            }
        }
        request.send();
    }
);

myPromise.then(
    value=>{
        let data = JSON.parse(value);
        console.log(data["slip"]["advice"])
    }
).catch(error=>{console.log(error)}).finally(()=>{console.log("Connection Close")})