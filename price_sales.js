let plus=document.querySelector(".plus")
let minus=document.querySelector(".minus")
let num=document.querySelector(".num")
let lbprice_mo=document.querySelector(".lbprice_mo")

let a=1000;
plus.addEventListener("click",()=>{
    a=a+1000
    num.innerText=a
    console.log(a)
})
minus.addEventListener("click",()=>{
    if(a>1000){
        a=a-1000
        num.innerText=a
    }
})
let b=50
plus.addEventListener("click",()=>{
    
        b=b+50
        lbprice_mo.innerText=(`$${b}/mo`)
        
})
minus.addEventListener("click",()=>{
    if(b>50){
        b=b-50
        lbprice_mo.innerText=(`$${b}/mo`)
    }
    
    
})

// ***********profesional***********
let plus1=document.querySelector(".plus1")
let minus1=document.querySelector(".minus1")
let num1=document.querySelector(".num1")
let lbprice_mo00=document.querySelector(".lbprice_mo00")

let aa=2000;
plus1.addEventListener("click",()=>{
    aa=aa+5000
    num1.innerText=aa
    console.log(aa)
})
minus1.addEventListener("click",()=>{
    if(aa>2000){
        aa=aa-5000
        num1.innerText=aa
    }
})
let bb=890
plus1.addEventListener("click",()=>{
    
        bb=bb+250
        lbprice_mo00.innerText=(`$${bb}/mo`)
        
})
minus1.addEventListener("click",()=>{
    if(bb>890){
        bb=bb-250
        lbprice_mo00.innerText=(`$${bb}/mo`)
    }
    
    
})

// ***********enterprice***********
let plus11=document.querySelector(".plus11")
let minus11=document.querySelector(".minus11")
let num11=document.querySelector(".num11")
let lbprice_mo11=document.querySelector(".lbprice_mo11")

let aaa=10000;
plus11.addEventListener("click",()=>{
    aaa=aaa+10000
    num11.innerText=aaa
    console.log(aaa)
})
minus11.addEventListener("click",()=>{
    if(aaa>10000){
        aaa=aaa-10000
        num11.innerText=aaa
    }
})
let bbb=3600
plus11.addEventListener("click",()=>{
    
        bbb=bbb+100
        lbprice_mo11.innerText=(`$${bbb}/mo`)
        
})
minus11.addEventListener("click",()=>{
    if(bbb>3600){
        bbb=bbb-100
        lbprice_mo11.innerText=(`$${bbb}/mo`)
    }
    
    
})
// **************************freqquntly*****************
let accordion=document.getElementsByClassName("contentbx");
for(let i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}
