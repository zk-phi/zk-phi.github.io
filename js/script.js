/* Get the time string of this branch's last commit. */
function getUpdatedDatetime (handler, errHandler) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = function () {
        try {
            var jstDate = (new Date(this.response.commit.commit.author.date)).toLocaleString();
            handler(jstDate);
        } catch (e) {
            errHandler && errHandler(e);
        }
    };
    xhr.open("GET", "https://api.github.com/repos/zk-phi/zk-phi.github.io/branches/master");
    xhr.send();
}

getUpdatedDatetime(function (datetime) {
    document.getElementById("lastUpdated").innerHTML = datetime;
}, function (e) {
    document.getElementById("lastUpdated").innerHTML = "N/A";
});

window.onscroll = function () {
    if (window.scrollY > 192) {
        document.getElementsByTagName("footer")[0].classList.add("hidden");
    }
};
