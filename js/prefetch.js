!function(){function e(e,t){const n=document.createElement("link");n.rel=t,n.href=e,document.head.appendChild(n)}function t(t){"A"!==t.target.tagName||t.target["data-prerendered"]||t.target.origin!==location.origin||(e(t.target.href,"prerender"),t.target["data-prerendered"]=!0)}document.querySelectorAll("a").forEach((function(t){t.origin===location.origin&&e(t.href,"prefetch")})),document.documentElement.addEventListener("mouseover",t,{passive:!0}),document.documentElement.addEventListener("touchstart",t,{passive:!0})}();