// The data stored in the session storage is deleted when the browser is closed

sessionStorage.setItem("Theme","dark");
// it survives over page refresh

// if you open multiple tabs/window for each of them, web browser creates a new session storage and data can not be accessed from the other tab/window

console.log(sessionStorage.getItem("Theme"));
console.log(sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer"));