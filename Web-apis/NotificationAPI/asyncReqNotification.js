(async ()=>{
    let perm = await Notification.requestPermission();
    if(perm=='granted'){
    const greeting = new Notification("Welcome to the world of JS ",{
       body:"Get in touch with us",
       icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMr71xaFwZUgwNGf4F3kZ5dixAqVpm4bLFQ&s"
         });
         greeting.onclick=()=>{
       window.open('https://www.google.com/')
        }
    }else{
            alert("Notifications are blocked")
        }
})();// promiseVoid