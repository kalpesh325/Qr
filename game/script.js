const c=document.getElementById('game'),x=c.getContext('2d');
let hero={x:100,y:350,w:50,h:70,vy:0},coin={x:600,y:360,r:15},score=0;
function move(dx){hero.x=Math.max(0,Math.min(c.width-hero.w,hero.x+dx));}
function jump(){if(hero.y>=350)hero.vy=-12;}
addEventListener('keydown',e=>{if(e.key==='ArrowLeft')move(-20);if(e.key==='ArrowRight')move(20);if(e.key==='ArrowUp')jump();});
function loop(){
hero.vy+=0.6;hero.y+=hero.vy;if(hero.y>350){hero.y=350;hero.vy=0;}
x.clearRect(0,0,c.width,c.height);
x.fillStyle="#8bc34a";x.fillRect(0,420,800,30);
x.fillStyle="#4a90e2";x.fillRect(hero.x,hero.y,hero.w,hero.h);
x.beginPath();x.arc(hero.x+15,hero.y-10,12,0,Math.PI*2);x.fill();
x.fillStyle="gold";x.beginPath();x.arc(coin.x,coin.y,coin.r,0,Math.PI*2);x.fill();
let cx=hero.x+hero.w/2,cy=hero.y+hero.h/2;
if((cx-coin.x)**2+(cy-coin.y)**2<40**2){score++;document.getElementById('score').textContent=score;coin.x=50+Math.random()*700;coin.y=250+Math.random()*120;}
requestAnimationFrame(loop);}
loop();
