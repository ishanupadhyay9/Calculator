let click = new Audio("m1.wav")

let ss  = document.querySelector('.screen');
let sval = ss.innerText;
let nums = document.querySelectorAll('.num');
let s = "";
for(let i=0 ; i<nums.length ; i++)
    {
       nums[i].addEventListener('click' , ()=>{
        let q = nums[i].innerText;
        s=s+q;
      ss.innerText=s;
      click.play();
    
       });
    }
let q = document.querySelector('.cl');
q.addEventListener('click',()=>{
  click.play();
    ss.innerText="0";
    s="";
});
let delet = document.querySelector('.del');
delet.addEventListener('click',()=>{
  click.play();
    if(s.length!=0)
     { s=s.substring(0,s.length-1);
   ss.innerText=s;}
})

let eq= document.querySelector('.fin');
eq.addEventListener('click',()=>{
  click.play();
    if(eval(s)!=s)
   {s = eval(s);
    ss.innerText=s;}
})

let q1 = document.querySelector('.it');
q1.addEventListener('click',()=>{
  click.play();
  ss.classList.toggle('screen');
  ss.classList.toggle('screen2');
})