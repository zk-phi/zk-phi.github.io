function makeKira(e,n){const t=document.createElement("div");return t.innerHTML="🌸",t.classList.add("kira"),t.style.transform=`translate(${e.x}px, ${e.y}px)`,document.body.appendChild(t),{pos:e,speed:n,el:t}}const gravity=.05;function moveKira(e){const n={x:e.pos.x-e.speed.x,y:e.pos.y-e.speed.y};return n.y>window.innerHeight||n.x<0||n.x>window.innerWidth?(e.el.remove(),null):(e.el.style.transform=`translate(${n.x}px, ${n.y}px)`,{pos:n,speed:{x:e.speed.x,y:e.speed.y-.05},el:e.el})}document.getElementById("JS_clap").onclick=function(e){window.alert("応援ありがとうございます!!"),e.target.disabled=!0;let n=[];for(let e=0;e<400;e++){const t=e<200;n.push(makeKira({x:t?0:window.innerWidth,y:window.innerHeight},{x:(t?-1:1)*Math.random()*(window.innerWidth/400),y:(Math.random()/2+.5)*(window.innerHeight/40)}))}const t=()=>{n=n.reduce((e,n)=>{const t=moveKira(n);return t&&e.push(t),e},[]),n.length&&window.requestAnimationFrame(t)};t()};