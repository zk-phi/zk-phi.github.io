(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');

function clap () {
    var btn = document.getElementById("clap");
    btn.className += " disabled";
    btn.href = "javascript: void 0;";
    ga('send', 'event', 'general', 'clap');
    window.alert("応援ありがとうございます！");
}
