/* Get the time string of this branch's last commit. */
function getUpdatedDatetime (handler) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = function () {
        var jstDate = (new Date(this.response.commit.commit.author.date)).toLocaleString();
        handler(jstDate);
    };
    xhr.open("GET", "https://api.github.com/repos/zk-phi/zk-phi.github.io/branches/master");
    xhr.send();
}

getUpdatedDatetime(function (datetime) {
    document.getElementById("lastUpdated").innerHTML = datetime;
});
