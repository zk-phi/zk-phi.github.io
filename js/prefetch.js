!function(){function e(e,t){const n=document.createElement("link");n.rel=t,n.href=e,document.head.appendChild(n)}function t(t){"A"===t.target.tagName&&t.target.origin===location.origin&&e(t.target.href,"prerender")}const n={};document.querySelectorAll("a").forEach((function(t){t.origin!==location.origin||n[t.href]||t.href.match("/activities/item")||(e(t.href,"prefetch"),n[t.href]=!0)})),e("/css/font.css","prefetch"),e("/css/common_critical.css","prefetch"),e("/fonts/DotGothic16-Regular.woff2","prefetch"),document.documentElement.addEventListener("mousedown",t,{passive:!0}),document.documentElement.addEventListener("touchstart",t,{passive:!0})}();