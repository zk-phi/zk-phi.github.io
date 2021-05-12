!(function () {
    const dialog = () => {
        const dom = document.createElement("div");
        dom.id = "dialog-container";
        dom.innerHTML = `
          <div id="dialog" class="ui">
            <div id="dialog-title">
              謝謝茄子
            </div>
            <div id="dialog-body">
              応援ありがとうございます！
              <div id="dialog-btns">
                <button class="btn ui" id="JS_closeDialog">ほい(Y)</button>
              </div>
            </div>
          </div>`;
        document.body.appendChild(dom);
        document.getElementById("JS_closeDialog").onclick = () => {
            dom.remove();
        };
    };

    document.getElementById("JS_clap").onclick = (e) => {
        e.target.disabled = true;
        dialog();
    };
})();
