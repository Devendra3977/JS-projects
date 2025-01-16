var arr =[
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwaYI4yYppchH1HUyMh3v11K6RGYYmRJ-1w&s",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2V9cusjpUFQoqoiwmM7XqoMHB0tgscz_YmA&s",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQGimBf72ZD2nPynmZ8z0fTWK6FQ0DEuEfMIBHeU3Fjwo3FHa8UBfjK_V3lsFXJC04Hw&usqp=CAU"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRORloqpKesE9Rkd6lh-zOsG8_Yyj4avMQsRg&s",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s"},
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwSwjSI5wyNGXLAZ1JV_o7q2ycrsW9ocbyvnukh0U1nCSh8QEJ2FbNMNQ1g_pMADdorpo&usqp=CAU",story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvwGIEKH1c6M7LQtnyaP4mfrav3V0eola-fw&s"}
];

var clutter="";
var storiyan = document.querySelector(".storiyan");
arr.forEach(function(elem, indx){
    clutter += `<div class="story">
                <img id="${indx}" src="${elem.dp}" alt=""/>
            </div>`
})
document.querySelector(".storiyan").innerHTML=clutter;
storiyan.addEventListener("click", function(dets){
    document.querySelector(".full-screen").style.display="block";
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector(".full-screen").style.display ="none"
    },3000);
})


 