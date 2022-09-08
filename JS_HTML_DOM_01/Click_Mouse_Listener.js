var butt=document.getElementsByClassName("lis");

butt[0].addEventListener("mouseover", function(){
    butt[0].classList.add("my-style");
});

butt[0].addEventListener("mouseout", function(){
    butt[0].classList.remove("my-style");
});

var butt1=document.querySelectorAll(".lis1");
var len =document.querySelectorAll(".lis1").length;

var pr=document.getElementById("txt");

for(var i=0 ;i<len; i++){
    butt1[i].addEventListener("click", function() {
        var tx=this.innerHTML;
        pr.innerHTML= tx+"is Clicked";

        //animation add
        this.classList.add("anim");

        setTimeout(() => {
            this.classList.remove("anim");
        }, 200);
    });
}



