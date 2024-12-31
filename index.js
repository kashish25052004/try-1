console.log("js")
let rotated = false;

window.addEventListener("scroll",()=>{
    const bouqet = document.getElementsByClassName("flower")[0]
    const scroll = window.scrollY;
    console.log("scroll")

    console.log(scroll)
    const maxscroll = document.body.scrollHeight - window.innerHeight;
    console.log("maxscroll")

    console.log(maxscroll)
    const transitionpoint = maxscroll/2;
    console.log("transitionpoint")

    console.log(transitionpoint)
    if(scroll>transitionpoint && !rotated){
        bouqet.style.top="52%";
        bouqet.style.transform = "translate(73%, 50%) rotate(360deg) scale(0.8)"
        rotated = true;
    }else if(scroll <= transitionpoint && rotated){
        bouqet.style.top="0%";
        bouqet.style.transform = "translate(73%, 50%) rotate(0deg) scale(1)";
        rotated = false;
    }

})

let element = document.getElementsByClassName("btn")[0]
let bu = document.getElementsByClassName("boxmain")[0]
let kk = document.getElementsByClassName("box1")[0]

element.addEventListener("click",()=>{
    bu.style.display = "none";
    kk.style.opacity = "1";

})
