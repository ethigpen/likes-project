var neilCount=document.querySelector("#neilLikes");
var neilLikes = 9;
neilCount.innerHTML = neilLikes;

var nichCount=document.querySelector("#nicholeLikes");
var nichLikes = 12;
nichCount.innerHTML = nichLikes;

var jimCount=document.querySelector("#jimLikes");
var jimLikes = 9;
jimCount.innerHTML = jimLikes;

function neilLike(){
    neilLikes++
    neilCount.innerHTML = neilLikes;
}

function nichLike(){
    nichLikes++
    nichCount.innerHTML = nichLikes;
}

function jimLike(){
    jimLikes++
    jimCount.innerHTML = jimLikes;
}