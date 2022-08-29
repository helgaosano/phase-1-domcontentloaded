// Your code goes here
document.addEventListener("DOMContentLoaded", function(){
    newDOM();
});

function newDOM(){
    const item = document.getElementById("text");
    return item.textContent = "This is really cool!"
}