window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-144855098-1');

function clap () {
    var btn = document.getElementById("clap");
    btn.className += " disabled";
    btn.href = "javascript: void 0;";
    gtag('event', 'clap');
    window.alert("応援ありがとうございます！");
}
