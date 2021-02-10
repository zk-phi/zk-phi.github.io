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

function handleScroll () {
    if (window.scrollY > 128) {
        document.getElementsByTagName("footer")[0].classList.add("hidden");
        document.removeEventListener('scroll', handleScroll);
    }
}
document.addEventListener('scroll', handleScroll, { passive: true });

// apply 'hover' to touched elements in mobile devices
document.addEventListener('touchstart', function () {}, { passive: true });
