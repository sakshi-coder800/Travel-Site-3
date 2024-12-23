let slide = document.querySelectorAll('.review')
// console.log(slide)
let count=0;
slide.forEach(function(slides,index){
slides.style.left=`${index *100}%`;
})

function slideFun(){
slide.forEach(function(val){
val.style.transform=`translateX(-${count * 100}%)`
})
}
setInterval(() => {
count++;
if(count== slide.length){
count=0;
}
slideFun()
}, 2000);




let loginBtn= document.querySelector(".login-section");
loginBtn.addEventListener('click',function(){
document.querySelector(".loginPage").classList.toggle("active1");
})




submit.addEventListener("click", function(){
   let email = document.getElementById("email");
   let pass = document.getElementById("pass");

   if(email.value == "" && pass.value == ""){
      alert("Enter Detail")
   }else{
      document.querySelector(".loginPage").classList.remove("active1");
      alert("You Logged In");


   }
})


let bar = document.getElementById("bar");





bar.addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("showData");
})
