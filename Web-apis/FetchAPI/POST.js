const rul = 'https://jsonplaceholder.typicode.com/posts'

const requestHeaders={
    'Content-type':'text/html',
    Authorization:'Access_Token',

}
const newPost ={

    title:'New Post',
    description:"this is new post",

}
const p = fetch(rul,{
    method:'POST',
    headers:requestHeaders,
    body:JSON.stringify(newPost)
})
p.then((response) =>{return response.json()}).then((data)=>{console.log(data)}).catch((e)=>{
    console.error(e);
})