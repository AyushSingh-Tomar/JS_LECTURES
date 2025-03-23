async function getData(){
    try{
      let res =await fetch('https://api.api-ninjas.com/v1/quotes',{
        method: 'GET',
    headers: {
        'X-Api-Key': 'nnz3JQVRnMR46rpMfpLgKg==SoitQ0QymTIvTf1m',
        'Content-Type': 'application/json'
    }
    })
    if(!res.ok){
              throw new Error(`HTTP error! Status: ${res.status}`);
    }
    let data = await res.json();
    console.log(data)
    }
    catch(e){
              console.log(e);
    }
}
getData()