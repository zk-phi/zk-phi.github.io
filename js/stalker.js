!function(){let e,t=!1;document.addEventListener("mousemove",n=>{t||(e||(e=document.createElement("div"),e.innerHTML="🦄",e.id="stalker",document.body.appendChild(e)),e.style.opacity=1,e.style.transform=`translate(${n.clientX}px, ${n.clientY}px)`)},{passive:!0}),document.addEventListener("mouseout",t=>{e&&(e.style.opacity=0)},{passive:!0}),document.addEventListener("touchstart",e=>{t=!0},{passive:!0})}();