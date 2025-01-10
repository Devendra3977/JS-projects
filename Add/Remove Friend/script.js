var statuss = document.querySelector("h5");
var addFriend = document.querySelector(".add");
var flag =0;

addFriend.addEventListener("click", function(){
    if(flag==0){
    statuss.innerHTML="Friends";
    statuss.style.color="green";
    flag=1;
    addFriend.innerHTML="Remove";
    }
    else{
    statuss.innerHTML="Stranger";
    statuss.style.color="red";
    flag=0;
    addFriend.innerHTML="Add Friend";
    }
})