window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-144855098-1');

function clap () {
    var btn = document.getElementById("clap");
    btn.disabled = true;
    btn.innerHTML = "ありがとうございます！";
    gtag('event', 'clap');
}
