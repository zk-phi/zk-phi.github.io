!function(){function e(){lazyScripts.forEach((function(e){const t=document.createElement("script");t.src=e,document.head.appendChild(t)})),lazyStyles.forEach((function(e){const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}))}window.requestIdleCallback?window.requestIdleCallback(e,{timeout:2e3}):window.setTimeout(e,500)}();