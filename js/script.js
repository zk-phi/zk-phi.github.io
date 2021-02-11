function clap () {
    var btn = document.getElementById("clap");
    btn.className += " disabled";
    btn.href = "javascript: void 0;";
    window.alert("応援ありがとうございます！");
}

document.addEventListener('touchstart', function () {}, { passive: true });
