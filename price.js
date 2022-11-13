import {lbnav1} from "./components/lbnav1.js"
let lbnav1_div=document.getElementById("lbnav1")
lbnav1_div.innerHTML=lbnav1()




let accordion=document.getElementsByClassName("contentbx");
for(let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}
