// ===============================
// MATRIX RAIN
// ===============================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
const size = 16;
const columns = Math.floor(canvas.width / size);
const drops = new Array(columns).fill(1);

function matrixRain(){

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ff88";
ctx.font = size + "px monospace";

for(let i=0;i<drops.length;i++){

const text = chars[Math.floor(Math.random()*chars.length)];

ctx.fillText(text,i*size,drops[i]*size);

if(drops[i]*size>canvas.height && Math.random()>0.975){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(matrixRain,35);

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

// ===============================
// LOGIN
// ===============================

const loginBtn=document.getElementById("loginBtn");
const login=document.getElementById("loginScreen");
const boot=document.getElementById("bootScreen");
const dashboard=document.getElementById("dashboard");
const msg=document.getElementById("loginMessage");

loginBtn.onclick=function(){

const user=document.getElementById("username").value.trim();
const pass=document.getElementById("password").value.trim();

if(user==="admin" && pass==="1234"){

login.style.display="none";

boot.style.display="flex";

setTimeout(()=>{

boot.style.display="none";

dashboard.style.display="block";

typingEffect();

},4500);

}else{

msg.innerHTML="ACCESS DENIED";

}

};

// ===============================
// TYPING EFFECT
// ===============================

const text=[
"ACCESS GRANTED",
"Welcome Hafiz Haseeb",
"Full Stack Web Developer",
"React • Node.js • Laravel • PHP"
];

let line=0;
let char=0;

function typingEffect(){

const box=document.getElementById("typing");

function type(){

if(line<text.length){

if(char<text[line].length){

box.innerHTML+=text[line].charAt(char);

char++;

setTimeout(type,60);

}else{

box.innerHTML+="<br>";

line++;

char=0;

setTimeout(type,350);

}

}

}

type();

}
// ==========================
// LIVE CLOCK
// ==========================

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString();

document.getElementById("date").innerHTML =
now.toDateString();

}

setInterval(updateClock,1000);

updateClock();
// Screen Flash Effect

function flash(){

document.body.style.background="#00ff88";

setTimeout(()=>{

document.body.style.background="#000";

},120);

}

// Login Success Flash

loginBtn.addEventListener("click",()=>{

const user=document.getElementById("username").value;
const pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

flash();

}

});
// ==========================
// LIVE TERMINAL
// ==========================

const commands = [

"> Connecting to secure server...",

"> Authentication successful...",

"> Decrypting database...",

"> Loading dashboard modules...",

"> Firewall Status : ACTIVE",

"> Server Status : ONLINE",

"> Access Granted ✔",

"> Welcome Hafiz Haseeb",

"> Ready For New Projects..."

];

let cmd = 0;

function terminalAnimation(){

const terminal=document.getElementById("terminal");

if(!terminal) return;

setInterval(()=>{

if(cmd<commands.length){

terminal.innerHTML += commands[cmd] + "<br>";

terminal.scrollTop = terminal.scrollHeight;

cmd++;

}else{

terminal.innerHTML="";

cmd=0;

}

},900);

}

setTimeout(terminalAnimation,5000);

// ==========================
// COUNTER ANIMATION
// ==========================

function counter(id,target){

let count=0;

const speed=Math.ceil(target/100);

const element=document.getElementById(id);

const timer=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(timer);

}

element.innerHTML=count;

},30);

}

setTimeout(()=>{

counter("clients",50);

counter("projectsDone",120);

counter("experience",3);

counter("coffee",999);

},5500);
// Mouse Glow

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.background="#00ff88";
glow.style.pointerEvents="none";
glow.style.boxShadow="0 0 20px #00ff88";
glow.style.zIndex="99999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";

glow.style.top=e.clientY-9+"px";

});
// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
// ==========================
// BOOT STATUS ANIMATION
// ==========================

const bootLines = [

"Loading Security Modules...",

"Checking Firewall...",

"Connecting Database...",

"Verifying Encryption...",

"Launching Dashboard..."

];

function bootAnimation(){

const status = document.getElementById("bootStatus");

if(!status) return;

let i = 0;

const timer = setInterval(()=>{

if(i < bootLines.length){

status.innerHTML = "> " + bootLines[i];

i++;

}else{

clearInterval(timer);

}

},700);

}

loginBtn.addEventListener("click",()=>{

document.body.classList.add("flash");

setTimeout(()=>{

document.body.classList.remove("flash");

},300);

bootAnimation();

});
// ==========================
// CUSTOM CURSOR
// ==========================

const cursor=document.getElementById("cursor");
const blur=document.getElementById("cursorBlur");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

blur.style.left=(e.clientX-90)+"px";
blur.style.top=(e.clientY-90)+"px";

});

// PAGE LOAD

window.onload=()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},100);

};
