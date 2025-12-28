const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

let flakes=[];
for(let i=0;i<200;i++){
flakes.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3+1,
d:Math.random()*1+0.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="white";
ctx.beginPath();
flakes.forEach(f=>{
ctx.moveTo(f.x,f.y);
ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
});
ctx.fill();
flakes.forEach(f=>{
f.y+=f.d;
if(f.y>canvas.height){
f.y=0;
f.x=Math.random()*canvas.width;
}
});
requestAnimationFrame(draw);
}
draw();
