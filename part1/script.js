
var likeCount=document.querySelector("#numLikes");
var likes = 3;
likeCount.innerHTML = likes;


function addLike(){
    likes++
    likeCount.innerHTML = likes;
}