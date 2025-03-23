// The Fetch API is a built-in JavaScript interfaces that allows you to make HTTP request to servers

// So we can use the fetch API to get Data from server, send data on servers and we can also delete data from server


// fetch(url,{})
//'nnz3JQVRnMR46rpMfpLgKg==SoitQ0QymTIvTf1m'

// let p = fetch('https://api.api-ninjas.com/v1/quotes', {
//     method: 'GET',
//     headers: {
//         'X-Api-Key': 'nnz3JQVRnMR46rpMfpLgKg==SoitQ0QymTIvTf1m',
//         'Content-Type': 'application/json'
//     }
// })
// p.then(response => {
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

// console.log(p)


//----------Async Await----------------------------//

async function getData() {
   let res= await fetch('https://api.api-ninjas.com/v1/quotes',{
        method: 'GET',
    headers: {
        'X-Api-Key': 'nnz3JQVRnMR46rpMfpLgKg==SoitQ0QymTIvTf1m',
        'Content-Type': 'application/json'
    }
    })
    let data = await res.json();
    console.log(data)
    document.write(data[0].quote)
}
getData()
