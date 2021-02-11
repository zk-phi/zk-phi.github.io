window.onload = function () {
    // apply 'hover' to touched elements in mobile devices
    document.addEventListener('touchstart', function () {}, { passive: true });
    // get last-updated datetime
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = function () {
        try {
            var jstDate = (new Date(this.response.commit.commit.author.date)).toLocaleString();
            document.getElementById("lastUpdated").innerHTML = jstDate;
        } catch (e) {
            document.getElementById("lastUpdated").innerHTML = "N/A";
        }
    };
    xhr.open("GET", "https://api.github.com/repos/zk-phi/zk-phi.github.io/branches/master");
    xhr.send();
};

function clap () {
    var btn = document.getElementById("clap");
    btn.className += " disabled";
    btn.href = "javascript: void 0;";
    window.alert("応援ありがとうございます！");
}
