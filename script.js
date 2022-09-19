var btn = document.getElementsByClassName("accordion");
var icon = document.getElementsByClassName("fa-plus")
console.log(btn);

for(var i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        var panel = this.nextElementSibling;
        this.lastElementChild.classList.toggle("fa-minus");
        //console.log(panel);
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
    }
}