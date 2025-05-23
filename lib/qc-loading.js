!function () {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c)
        window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (b) {
        var c = (new Date).getTime(),
        d = Math.max(0, 16 - (c - a)),
        e = window.setTimeout(function () {
            b(c + d)
        }, d);
        return a = c + d,
        e
    }),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
        clearTimeout(a)
    })
}
(), qici.loadIndex = 0, qici.allAssetLoaded = !1, qici.loadingHandler, qici.init = function () {
    function a() {
        if (qici.loadIndex === qici.scripts.length)
            return void(qc.gameObj = qici.loadGame());
        var b = qici.scripts[qici.loadIndex],
        c = document.createElement("script");
        c.onerror = function () {
            console.log("Failed to load:", b),
            qici.loadIndex++,
            qici.loadingHandler && qici.loadingHandler.progress(qici.loadIndex),
            a()
        },
        c.onload = function () {
            qici.loadIndex++,
            qici.loadingHandler && qici.loadingHandler.progress(qici.loadIndex),
            a()
        },
        c.setAttribute("type", "text/javascript"),
        "string" == typeof b ? c.setAttribute("src", b) : (c.setAttribute("src", b[0]), c.setAttribute("plugin_id", b[1])),
        document.getElementsByTagName("head")[0].appendChild(c)
    }
    var b = qici.scripts.length + qici.loadingAssetCount || 0;
    document.getElementById("gameDiv").style.display = "none",
    qici.loadingHandler && qici.loadingHandler.start(b),
    a()
}, qici.loadingHandlerFinished = function () {
    var a = window[qici.config.gameInstance];
    if (!a.state.pendLoadComplete)
        return void requestAnimationFrame(qici.loadingHandlerFinished);
    document.getElementById("gameDiv").style.display = "block";
    var a = window[qici.config.gameInstance];
    delete a.state.pendLoadComplete,
    a.phaser.world && (a.updateGameLayout(!0), a.updateScale(!0))
}, qici.loadAssetsNotify = function () {
    if (!qici.allAssetLoaded) {
        qici.loadIndex++;
        var a = qici.scripts.length + qici.loadingAssetCount || 0;
        qici.loadingHandler && (qici.loadingHandler.progress(qici.loadIndex), qici.loadIndex >= a && (qici.allAssetLoaded = !0, qici.loadingHandler.finish(), qici.loadingHandlerFinished()))
    }
}, qici.loadGame = function () {
    var a = "100%",
    b = "100%",
    c = qici.config.fixedGameSize;
    c && c.enabled && c.width > 0 && c.height > 0 && (a = c.width, b = c.height);
    var d = window[qici.config.gameInstance] = qc.gameOb = new qc.Game({
        width: a,
        height: b,
        parent: "gameDiv",
        state: qici.splashState,
        editor: qici.config.editor === !0,
        backgroundColor: new qc.Color(qici.config.backgroundColor),
        runInBackground: qici.config.runInBackground,
        antialias: qici.config.antialias,
        resolution: qici.config.resolution,
        resolutionRatio: qici.config.resolutionRatio,
        transparent: qici.config.transparent,
        debug: qici.config.developerMode === !0,
        remoteLogUrl: qici.config.remoteLogUrl,
        customSettings: qici.config.customSettings,
        dirtyRectangles: qici.config.dirtyRectangles,
        dirtyRectanglesShow: qici.config.dirtyRectanglesShow,
        renderer: "Canvas" === qici.config.renderer ? Phaser.CANVAS : Phaser.AUTO
    });
    return qc.N = function (a) {
        return d.nodePool.findByName(a)
    },
    d.loadingProcessCallback = qici.loadAssetsNotify,
    d.localStorageID = qici.config.localStorageID,
    d.log.important("**** [QICI Engine]Starting game: {0}", qici.config.gameName),
    d
}, qici.splashState = {
    init: function () {
        window[qici.config.gameInstance].fullScreen()
    },
    preload: function () {
        var a = window[qici.config.gameInstance];
        qici.config.loadingPrefab && a.assets.load("__loading_prefab__", qici.config.loadingPrefab);
        var b = a.add.text();
        b.text = "Initializing, please wait ...",
        b.setAnchor(new qc.Point(0, 0), new qc.Point(1, 1)),
        b.left = 0,
        b.right = 0,
        b.top = 0,
        b.bottom = 0,
        b.alignH = qc.UIText.CENTER,
        b.alignV = qc.UIText.MIDDLE,
        b.fontSize = 24,
        b.color = new qc.Color(16777215),
        b.strokeThickness = 2,
        b.stroke = new qc.Color(0),
        a._initText_ = b,
        a.updateScale(!0)
    },
    create: function () {
        var a = window[qici.config.gameInstance];
        a.scene.entry = qici.config.entryScene,
        a.scene.list = qici.config.scene,
        qici.config.frameRate && a.time.applyFrameRate(qici.config.frameRate);
        var b;
        if (qici.config.loadingPrefab) {
            var c = a.assets.find("__loading_prefab__");
            c && (b = a.add.clone(c), b.ignoreDestroy = !0, b.visible = !1)
        }
        a._initText_ && (b && a._initText_.destroyImmediately(), delete a._initText_),
        a.scene.pendLoadComplete = !0,
        a.timer.add(1, function () {
            a.scene.load(a.scene.entry)
        })
    }
}, qici.config.loadingHandler && "svgHandler" !== qici.config.loadingHandler || document.write('\r\n<svg id="gameSVG" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"\r\nx="0px" y="0px" width="610px" height="610px" viewBox="-200 -200 1010 1010"\r\nstyle="opacity:0;background:black;position:absolute;top:0;left:0;z-index:10000">\r\n<defs>\r\n    <filter id="shadow" filterUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">\r\n    <feGaussianBlur result="blurOut" in="SourceGraphic" stdDeviation="10"/>\r\n<feBlend in="SourceGraphic" in2="blurOut" mode = "normal"/>\r\n    </filter>\r\n    <path id="brightdot" filter="url(#shadow)" fill-rule="evenodd" clip-rule="evenodd" fill="#F7DA80" d="M16.26,11.26h10c2.761,0,5,2.238,5,5v10c0,2.761-2.239,5-5,5h-10\r\nc-2.762,0-5-2.239-5-5v-10C11.26,13.498,13.498,11.26,16.26,11.26z"/>\r\n<path id="darkdot" filter="url(#shadow)" fill-rule="evenodd" clip-rule="evenodd" fill="#7F8080" d="M16.26,11.26h10c2.761,0,5,2.238,5,5v10c0,2.761-2.239,5-5,5h-10\r\nc-2.762,0-5-2.239-5-5v-10C11.26,13.498,13.498,11.26,16.26,11.26z"/></defs>\r\n<g id="fadeOutGroup">\r\n    <path fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#2A4D9F" stroke-miterlimit="10" d="M9.724,4.724h590\r\nc2.761,0,5,2.239,5,5v590c0,2.761-2.239,5-5,5h-590c-2.761,0-5-2.239-5-5v-590C4.724,6.963,6.963,4.724,9.724,4.724z"/>\r\n<path transform="translate(75 428)" fill-rule="evenodd" clip-rule="evenodd" fill="none" stroke="#2A4D9F" stroke-miterlimit="10" d="M6.771,1.929h440\r\nc2.761,0,5,2.239,5,5v40c0,2.761-2.239,5-5,5h-440c-2.762,0-5-2.239-5-5v-40C1.771,4.168,4.01,1.929,6.771,1.929z"/>\r\n<g id="dotGroup">\r\n    <use id="dt0" xlink:href="#darkdot" />\r\n    <use id="dt1" xlink:href="#darkdot" />\r\n    <use id="dt2" xlink:href="#darkdot" />\r\n    <use id="dt3" xlink:href="#darkdot" />\r\n    <use id="dt4" xlink:href="#darkdot" />\r\n    <use id="dt5" xlink:href="#darkdot" />\r\n    <use id="dt6" xlink:href="#darkdot" />\r\n    <use id="dt7" xlink:href="#darkdot" />\r\n    <use id="dt8" xlink:href="#darkdot" />\r\n    <use id="dt9" xlink:href="#darkdot" />\r\n\r\n    <use id="bt0" xlink:href="#brightdot" />\r\n    <use id="bt1" xlink:href="#brightdot" />\r\n    <use id="bt2" xlink:href="#brightdot" />\r\n    <use id="bt3" xlink:href="#brightdot" />\r\n    <use id="bt4" xlink:href="#brightdot" />\r\n    <use id="bt5" xlink:href="#brightdot" />\r\n    <use id="bt6" xlink:href="#brightdot" />\r\n    <use id="bt7" xlink:href="#brightdot" />\r\n    <use id="bt8" xlink:href="#brightdot" />\r\n    <use id="bt9" xlink:href="#brightdot" />\r\n\r\n    <use id="db0" xlink:href="#darkdot" transform="translate(88 432)" />\r\n    <use id="db1" xlink:href="#darkdot" transform="translate(131 432)" />\r\n    <use id="db2" xlink:href="#darkdot" transform="translate(174 432)" />\r\n    <use id="db3" xlink:href="#darkdot" transform="translate(217 432)" />\r\n    <use id="db4" xlink:href="#darkdot" transform="translate(260 432)" />\r\n    <use id="db5" xlink:href="#darkdot" transform="translate(303 432)" />\r\n    <use id="db6" xlink:href="#darkdot" transform="translate(346 432)" />\r\n    <use id="db7" xlink:href="#darkdot" transform="translate(389 432)" />\r\n    <use id="db8" xlink:href="#darkdot" transform="translate(432 432)" />\r\n    <use id="db9" xlink:href="#darkdot" transform="translate(475 432)" />\r\n\r\n    <use id="bb0" xlink:href="#brightdot" transform="translate(88 432)" />\r\n    <use id="bb1" xlink:href="#brightdot" transform="translate(131 432)" />\r\n    <use id="bb2" xlink:href="#brightdot" transform="translate(174 432)" />\r\n    <use id="bb3" xlink:href="#brightdot" transform="translate(217 432)" />\r\n    <use id="bb4" xlink:href="#brightdot" transform="translate(260 432)" />\r\n    <use id="bb5" xlink:href="#brightdot" transform="translate(303 432)" />\r\n    <use id="bb6" xlink:href="#brightdot" transform="translate(346 432)" />\r\n    <use id="bb7" xlink:href="#brightdot" transform="translate(389 432)" />\r\n    <use id="bb8" xlink:href="#brightdot" transform="translate(432 432)" />\r\n    <use id="bb9" xlink:href="#brightdot" transform="translate(475 432)" />\r\n\r\n<text id="loadingText" x="305" y="550" font-size="32px" fill="#F7DA80" style="text-anchor:middle;"></text>\r\n    </g>\r\n    </g>\r\n    <g id="qiciText" style="opacity:0;" transform="translate(105 415)" filter="url(#shadow)">\r\n    <path fill="#F7DA80" d="M20.225,65.547V13.094H64.1v52.453H51.584l1.969,6.398h-11.25l-2.109-6.398H20.225L20.225,65.547\r\nL20.225,65.547z M53.413,55.563V23.078h-22.5v32.484H53.413L53.413,55.563L53.413,55.563z"/>\r\n<path fill="#F7DA80" d="M158.291,65.547h-10.828V13.094h10.828V65.547L158.291,65.547L158.291,65.547z"/>\r\n    <path fill="#F7DA80" d="M282.435,65.547h-40.922V13.094h40.922v9.984h-30.094v32.484h30.094V65.547L282.435,65.547L282.435,65.547z"/>\r\n    <path fill="#F7DA80" d="M376.625,65.547h-10.828V13.094h10.828V65.547L376.625,65.547L376.625,65.547z"/>\r\n    </g>\r\n    <path id="collapse" style="opacity:0;" filter="url(#shadow)" fill-rule="evenodd" clip-rule="evenodd" fill="#F7DA80" d="M132.148,82.202L97.465,47.408\r\nc-1.298-1.302-3.406-1.306-4.708-0.008L50.325,89.697c-1.302,1.298-1.305,3.405-0.007,4.708l42.304,42.439\r\nc1.298,1.302,3.406,1.306,4.708,0.008l34.789-34.678l23.538,0.04l-53.647,53.477c-3.906,3.893-10.229,3.882-14.123-0.024\r\nL31.48,99.081c-3.894-3.906-3.884-10.229,0.021-14.123l56.577-56.396c3.906-3.894,10.229-3.883,14.123,0.023l53.485,53.656\r\nL132.148,82.202z"/>\r\n<path id="expand" style="opacity:0;" filter="url(#shadow)" fill-rule="evenodd" clip-rule="evenodd" fill="#F7DA80" d="M129.992,55.139L87.562,30.687\r\nc-1.588-0.915-3.623-0.374-4.546,1.21L50.434,89.732c-1.301,1.298-1.304,3.408-0.007,4.71l32.437,57.744\r\nc0.916,1.597,2.951,2.146,4.545,1.226l42.604-24.58l22.728,6.131L87.04,172.868c-4.784,2.759-10.889,1.112-13.637-3.679\r\nL33.601,99.787c-2.748-4.791-2.808-11.222-0.04-15.972l40.091-68.805c2.768-4.75,8.873-6.375,13.637-3.629l65.432,37.708\r\nL129.992,55.139z"/>\r\n</svg>');
var svgHandler = function () {
    this.loadState = "loading",
    this.loadingConfig = {},
    this.tickIndex = -1,
    this.targetRotate = 0,
    this.targetX = 0,
    this.targetY = 0,
    this.totalCount = 0
};
svgHandler.prototype = {}, svgHandler.prototype.constructor = svgHandler, svgHandler.prototype.start = function (a) {
    this.totalCount = a;
    var b = this.loadingConfig = qici.config.loading;
    this.loadingInterval = b.loadingInterval,
    this.brightingInterval = b.brightingInterval,
    this.blinkingCount = b.blinkingCount,
    this.blinkingInterval = b.blinkingInterval,
    this.fadingInInterval = b.fadingInInterval,
    this.fadingOutInterval = b.fadingOutInterval,
    this.startFadingInTime = null,
    this.startFadingOutTime = null,
    document.getElementById("loadingText").textContent = this.loadingConfig.loadingText || "",
    this.positions = [{
            x: 133,
            y: 290,
            angle: 0
        }, {
            x: 233,
            y: 290,
            angle: 0
        }, {
            x: 333,
            y: 290,
            angle: 0
        }, {
            x: 433,
            y: 290,
            angle: 0
        }, {
            x: 433,
            y: 190,
            angle: 0
        }, {
            x: 433,
            y: 90,
            angle: 0
        }, {
            x: 333,
            y: 90,
            angle: 0
        }, {
            x: 233,
            y: 90,
            angle: 0
        }, {
            x: 133,
            y: 90,
            angle: 0
        }, {
            x: 133,
            y: 190,
            angle: 0
        }
    ];
    for (var c = 0; 10 > c; c++) {
        var d = "translate(" + this.positions[c].x + "  " + this.positions[c].y + ")";
        document.getElementById("bt" + c).setAttribute("transform", d),
        document.getElementById("dt" + c).setAttribute("transform", d)
    }
    this.gameSVG = document.getElementById("gameSVG"),
    this.gameSVG.style.opacity = "1",
    this._tick()
}, svgHandler.prototype.progress = function (a) {
    for (var b = Math.floor(a / this.totalCount * 10), c = 0; 10 > c; c++)
        b > c ? (document.getElementById("bb" + c).style.opacity = "1", document.getElementById("db" + c).style.opacity = "0") : (document.getElementById("bb" + c).style.opacity = "0", document.getElementById("db" + c).style.opacity = "1")
}, svgHandler.prototype.finish = function () {
    this.tickIndex = (this.tickIndex + 4) % 20,
    this.tickIndex = (this.tickIndex - this.tickIndex % 2) / 2;
    var a = document.getElementById("expand"),
    b = document.getElementById("collapse");
    a.style.opacity = "0",
    b.style.opacity = "1",
    b.setAttribute("transform", "translate(92, 92) rotate (" + this.targetRotate + ") translate(-92, -92) translate(" + this.targetX + "  " + this.targetY + ") "),
    this.loadState = "brighting"
}, svgHandler.prototype._tick = function () {
    function a() {
        f.tickIndex = (f.tickIndex + 1) % 20;
        for (var a = f.tickIndex % 2, b = (f.tickIndex - a) / 2, c = 0; 10 > c; c++) {
            var d;
            0 === a ? (k.style.opacity = "1", l.style.opacity = "0", d = k) : (k.style.opacity = "0", l.style.opacity = "1", d = l);
            var e = f.positions[b].x - 70,
            g = f.positions[b].y - 70;
            3 >= b ? (f.targetRotate = 0, f.targetX = e, f.targetY = g) : 5 >= b ? (f.targetRotate = -90, f.targetX = -g, f.targetY = e) : 8 >= b ? (f.targetRotate = -180, f.targetX = -e, f.targetY = -g) : (f.targetRotate = 90, f.targetX = g, f.targetY = -e),
            d.setAttribute("transform", "translate(92, 92) rotate (" + f.targetRotate + ") translate(-92, -92) translate(" + f.targetX + "  " + f.targetY + ") "),
            c === b || c === (b + 1) % 10 || c === (b + 2) % 10 ? (document.getElementById("bt" + c).style.opacity = "1", document.getElementById("dt" + c).style.opacity = "0") : (document.getElementById("bt" + c).style.opacity = "0", document.getElementById("dt" + c).style.opacity = "1")
        }
    }
    function b() {
        f.tickIndex = (f.tickIndex + 1) % 10,
        "1" === document.getElementById("bt" + f.tickIndex).style.opacity && (f.loadState = "blinking"),
        document.getElementById("bt" + f.tickIndex).style.opacity = "1",
        document.getElementById("dt" + f.tickIndex).style.opacity = "0"
    }
    function c() {
        f.blinkingCount--,
        0 === f.blinkingCount ? (document.getElementById("dotGroup").style.opacity = "1", f.loadState = "fadingIn", f.startFadingInTime = (new Date).getTime()) : document.getElementById("dotGroup").style.opacity = f.blinkingCount % 2 ? "1" : "0"
    }
    function d() {
        var a = (new Date).getTime(),
        b = a - f.startFadingInTime,
        c = b / f.fadingInInterval;
        if (c > 1.5)
            f.loadState = "fadingOut", f.startFadingOutTime = (new Date).getTime();
        else {
            c > 1 && (c = 1),
            document.getElementById("fadeOutGroup").style.opacity = 1 - c,
            document.getElementById("qiciText").style.opacity = c;
            var d = f.targetRotate + (45 - f.targetRotate) * c,
            e = f.targetX + (300 - f.targetX) * c,
            g = f.targetY + (0 - f.targetY) * c;
            l.setAttribute("transform", "translate(92, 92) rotate (" + d + ") translate(-92, -92) translate(" + e + "  " + g + ") ")
        }
    }
    function e() {
        var a = (new Date).getTime(),
        b = a - f.startFadingOutTime,
        c = b / f.fadingOutInterval;
        c > 1 ? (f.loadState = "done", f.gameSVG.parentNode.removeChild(gameSVG)) : f.gameSVG.style.opacity = 1 - c
    }
    var f = qici.loadingHandler;
    if ("done" !== f.loadState) {
        requestAnimationFrame(f._tick);
        var g = (new Date).getTime();
        f.lastTime = f.lastTime || g;
        var h = g - f.lastTime;
        if (!("loading" === f.loadState && h > 0 && h < f.loadingInterval || "brighting" === f.loadState && h < f.brightingInterval || "blinking" === f.loadState && h < f.blinkingInterval)) {
            f.lastTime = g;
            var i = document.documentElement.clientWidth;
            window.innerWidth && window.innerWidth < i && (i = window.innerWidth);
            var j = document.documentElement.clientHeight;
            window.innerHeight && window.innerHeight < j && (j = window.innerHeight),
            f.gameSVG.setAttribute("width", i + "px"),
            f.gameSVG.setAttribute("height", j + "px");
            var k = document.getElementById("expand"),
            l = document.getElementById("collapse");
            "loading" === f.loadState ? a() : "brighting" === f.loadState ? b() : "blinking" === f.loadState ? c() : "fadingIn" === f.loadState ? d() : "fadingOut" === f.loadState && e()
        }
    }
}, qici.config.loadingHandler && "svgHandler" !== qici.config.loadingHandler || (qici.loadingHandler = new svgHandler);
var backgroundHandler = function () {};
backgroundHandler.prototype = {}, backgroundHandler.prototype.constructor = backgroundHandler, backgroundHandler.prototype.start = function (a) {
    this.totalCount = a;
    var b = qici.config.loading,
    c = b.backgroundStyle,
    d = document.getElementById("loading").getAttribute("style");
    d += c,
    document.getElementById("loading").setAttribute("style", d)
}, backgroundHandler.prototype.progress = function () {}, backgroundHandler.prototype.finish = function () {
    var a = document.getElementById("loading");
    a.parentNode.removeChild(a)
}, "backgroundHandler" === qici.config.loadingHandler && document.write('<div id="loading" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000;"></div>'), "backgroundHandler" === qici.config.loadingHandler && (qici.loadingHandler = new backgroundHandler);
var progressHandler = function () {
    this.tickState = "normal"
};
progressHandler.prototype = {}, progressHandler.prototype.constructor = progressHandler, progressHandler.prototype.start = function (a) {
    this.totalCount = a
}, progressHandler.prototype.progress = function (a) {
    var b = Math.floor(a / this.totalCount * 100),
    c = document.getElementById("progressBlock"),
    d = document.getElementById("progressPercent");
    c.style.width = b + "%",
    d.innerHTML = b + "%"
}, progressHandler.prototype.finish = function () {
    this.tickState = "fadeout",
    this.startFadingOutTime = (new Date).getTime()
}, progressHandler.prototype._tick = function () {
    var a = qici.loadingHandler;
    if ("done" !== a.tickState) {
        requestAnimationFrame(a._tick);
        var b = document.documentElement.clientWidth;
        window.innerWidth && window.innerWidth < b && (b = window.innerWidth);
        var c = b - 40 > 640 ? 640 : b - 40,
        d = document.documentElement.clientHeight;
        window.innerHeight && window.innerHeight < d && (d = window.innerHeight);
        var e = document.getElementById("progress");
        if (e.style.width = c + "px", e.style.top = d / 2 - 10 + "px", e.style.left = (b - c) / 2 + "px", "normal" !== a.tickState) {
            var f = (new Date).getTime(),
            g = f - a.startFadingOutTime,
            h = g / 500;
            if (h > 1) {
                a.tickState = "done";
                var i = document.getElementById("loading");
                i.parentNode.removeChild(i)
            } else
                document.getElementById("loading").style.opacity = 1 - h
        }
    }
}, "progressHandler" === qici.config.loadingHandler && document.write('\r\n<div id="loading" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000;background:gray;">\r\n    <div id="progress" style="position:absolute;width:320px;height:20px;background:#ebebeb;\r\n    border-left:1px solid transparent;border-right:1px solid transparent;border-radius:10px;">\r\n        <span id="progressBlock" style="width:0%;position: relative;float: left;margin: 0 -1px;min-width: 30px;\r\n        height: 20px;line-height: 16px;text-align: right;background: #cccccc;border: 1px solid;border-color: #bfbfbf #b3b3b3 #9e9e9e;\r\n        border-radius: 10px;background-image: -webkit-linear-gradient(top, #f0f0f0 0%, #dbdbdb 70%, #cccccc 100%);\r\n        background-image: -moz-linear-gradient(top, #f0f0f0 0%, #dbdbdb 70%, #cccccc 100%);\r\n        background-image: -o-linear-gradient(top, #f0f0f0 0%, #dbdbdb 70%, #cccccc 100%);\r\n        background-image: linear-gradient(to bottom, #f0f0f0 0%, #dbdbdb 70%, #cccccc 100%);\r\n        -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);\r\n        box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);\r\n        right: 0;z-index: 1">\r\n            <span style="position: absolute;border-radius: 10px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAASUlEQVQ4je3RMQ7AIBADwTnK+/9bqVMmoUBAqCJcWZa1zQYS1Z189OE9vLMEaUHLENSYOff22AGBsgOCLDPn3n6sHWtfIf5t7QLBYTNAaHlxVQAAAABJRU5ErkJggg==) 0 0 repeat-x;top: 0;bottom: 0;left: 0;\r\n            right: 0;z-index: 1;height: 19px;"></span>\r\n            <span id="progressPercent" style="padding: 0 8px;font-size: 11px;font-weight: bold;color: #404040;color: rgba(0, 0, 0, 0.7);\r\n            text-shadow: 0 1px rgba(255, 255, 255, 0.4);">0%</span>\r\n        </span>\r\n    </div>\r\n</div>'), "progressHandler" === qici.config.loadingHandler && (qici.loadingHandler = new progressHandler, qici.loadingHandler._tick());
