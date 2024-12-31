console.log("js")
let rotated = false;

window.addEventListener("scroll",()=>{
    const bouqet = document.getElementsByClassName("flower")[0]
    const scroll = window.scrollY;
    

    console.log(scroll)
    const maxscroll = document.body.scrollHeight - window.innerHeight;
    

    
    const transitionpoint = maxscroll/2;
    

   
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



// document.getElementsByClassName("btn")[0].addEventListener("click",()=>{
//     document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom, #282c2c, #e790bf)"
//     document.getElementsByClassName("boxcontent")[0].style.display="none";
//     document.getElementsByClassName("maincontent")[0].style.display="block";
// })



// document.getElementsByClassName("btn")[1].addEventListener("click",()=>{
//     document.getElementsByTagName("body")[0].style.background = "black"
//     document.getElementsByClassName("boxcontent")[0].style.display="none";
//     document.getElementsByClassName("maincontent")[0].style.display="none";
//     document.getElementsByClassName("extra")[0].style.display="block";
    
// })




document.getElementsByClassName("btn")[0].addEventListener("click",()=>{
    document.getElementsByTagName("body")[0].style.background = "black"
    document.getElementsByClassName("boxcontent")[0].style.display="none";
    document.getElementsByClassName("msg")[0].style.display="block";
})

document.getElementsByClassName("btn")[2].addEventListener("click",()=>{
    document.getElementsByTagName("body")[0].style.background = "linear-gradient(to bottom, #282c2c, #e790bf)"
    document.getElementsByClassName("boxcontent")[0].style.display="none";
    document.getElementsByClassName("msg")[0].style.display="none";
    document.getElementsByClassName("maincontent")[0].style.display="block";
    document.getElementsByClassName("box")[0].style.height = "1500px";
})

document.getElementsByClassName("btn")[1].addEventListener("click",()=>{
    document.getElementsByTagName("body")[0].style.background = "black"
    document.getElementsByClassName("boxcontent")[0].style.display="none";
    document.getElementsByClassName("maincontent")[0].style.display="none";
    document.getElementsByClassName("extra")[0].style.display="block";
    
})








