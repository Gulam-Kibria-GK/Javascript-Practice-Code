

var butt2=document.getElementsByClassName("cls1");
var len=document.getElementsByClassName("cls1").length;

var pr=document.getElementById("chk");

for(var i=0; i<len; i++){
    butt2[i].addEventListener("click", function() {

        var tx=this.innerHTML;
        pr.innerHTML= tx+" is Clicked";
        

        //animation
        this.classList.add("anim");

        setTimeout(() => {
            this.classList.remove("anim");
        }, 200);
        
    });

}



document.addEventListener("keypress", function(event) {

    var tx=event.key;
    //console.log(event.target);
    for(var i=0; i<len; i++){
        if(tx==butt2[i].innerHTML){
            
            pr.innerHTML= tx+" is Clicked";

            //animation
            butt2[i].classList.add("anim");

            setTimeout(myfun , 200);

            function myfun(){
                butt2[i].classList.remove("anim");
            }
        }
    }
    
});