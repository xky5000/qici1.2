!function (a, b, c, d) {
    "use strict";
    if (!a.qc || !a.qc.widget) {
        var e = a.document,
        f = a.qc = a.qc || {};
        f.widget = {};
        var g = f.widget.Default = a.QCDefault || {},
        h = g.Image = g.Image || {},
        i = g.Style = g.Style || {},
        j = g.Color = g.Color || {},
        k = g.Prototype = g.Prototype || {},
        l = g.Class = g.Class || {},
        m = Math,
        n = m.round,
        o = (m.floor, m.ceil),
        p = m.sqrt,
        q = m.max,
        r = m.min,
        s = m.abs,
        t = m.cos,
        u = (m.acos, m.sin),
        v = (m.pow, m.asin, m.PI, m.tan, m.atan2, m.random, a.parseInt, a.setTimeout),
        w = a.clearTimeout,
        x = b.getOwnPropertyDescriptor,
        y = function (a, c, d) {
            x(a, c) || b.defineProperty(a, c, d)
        },
        z = function (a, b) {
            for (var c in b)
                y(a, c, b[c])
        },
        A = a.navigator ? a.navigator.userAgent.toLowerCase() : "",
        B = function (a) {
            return a.test(A)
        },
        C = B(/msie/) || B(/trident/),
        D = B(/firefox/),
        E = B(/mac/),
        F = B(/android/),
        G = g.isTouchable === d ? e ? "ontouchend" in e : !1 : g.isTouchable,
        H = D ? "DOMMouseScroll" : "mousewheel",
        I = ["touchstart", "touchmove", "touchend", "input", "keydown", "keyup", "keypress", "mousedown", "mousemove", "mouseup", "mouseout", H, "contextmenu", "mouseleave", "mouseenter"],
        J = "px",
        K = [],
        L = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        M = function () {},
        N = function () {
            var a = 1;
            return function () {
                return ++a
            }
        }
        (),
        O = function (a, b, c) {
            var e,
            f = W(a) ? a : a.prototype;
            for (e in b)
                c && f[e] !== d || (f[e] = b[e]);
            return a
        },
        P = function (a) {
            if (!a)
                return c;
            if (_(a))
                return a.slice(0);
            if (W(a)) {
                var b,
                d = {};
                for (b in a)
                    d[b] = a[b];
                return d
            }
            return a
        },
        Q = function (a, b) {
            var c = "_" + b;
            y(a, b, {
                get: function () {
                    return this[c]
                },
                set: function (a) {
                    var d = this[c];
                    this[c] = a,
                    this.epc && this.epc(b, d, a)
                }
            })
        },
        R = function (a, b) {
            b && b["class"] && (a = b["class"]),
            a = X(a) ? l[a] : a;
            var c = new a;
            return S(c, b),
            c
        },
        S = function (a, b) {
            for (var c in b)
                if ("class" !== c) {
                    var d = b[c];
                    "s" !== c && "a" !== c || !$(a[c]) ? a[c] = d : a[c](d)
                }
        };
        k.properties = function (a, b) {
            for (var c = 0; c < b.length; c++)
                Q(a, b[c])
        },
        k.attr = function (a) {
            Q(a, "attrs"),
            a.a = function (a, b) {
                var c = this;
                if (2 === arguments.length)
                    c.setAttr(a, b);
                else {
                    if (!W(a))
                        return c.getAttr(a);
                    for (var d in a)
                        c.setAttr(d, a[d])
                }
                return c
            },
            a.getAttr = function (a) {
                return this._attrs ? this._attrs[a] : d
            },
            a.setAttr = function (a, b) {
                var c = this;
                c._attrs || (c._attrs = {});
                var e = c._attrs[a];
                b === d ? delete c._attrs[a] : c._attrs[a] = b;
                var f = c.epc("a:" + a, e, b);
                return f && c.onAttrChange(f, a),
                c
            },
            a.onAttrChange = function () {},
            z(a, {
                serializableAttrs: {
                    get: function () {
                        var a,
                        b = {};
                        for (a in this._attrs)
                            b[a] = !0;
                        return b
                    }
                }
            })
        },
        k.style = function (a) {
            Q(a, "styles"),
            a.s = function (a, b) {
                var c = this;
                if (2 === arguments.length)
                    c.setStyle(a, b);
                else {
                    if (!W(a))
                        return c.getStyle(a);
                    for (var d in a)
                        c.setStyle(d, a[d])
                }
                return c
            },
            a.getStyle = function (a, b) {
                b === d && (b = !0);
                var c = this._styles ? this._styles[a] : d;
                return c === d && b ? i[a] : c
            },
            a.setStyle = function (a, b) {
                var c = this;
                c._styles || (c._styles = {});
                var e = c._styles[a];
                b === d ? delete c._styles[a] : c._styles[a] = b;
                var f = c.epc("s:" + a, e, b);
                return f && c.onStyleChange(f, a),
                c
            },
            a.onStyleChange = function () {},
            z(a, {
                serializableStyles: {
                    get: function () {
                        var a,
                        b = {};
                        for (a in this._styles)
                            b[a] = !0;
                        return b
                    }
                }
            })
        },
        k.view = function (f) {
            Q(f, "id"),
            f._disabled = !1,
            f._preferredSizeProperties = [],
            f.setPropertyValue = function (a, b) {
                var c = this["_" + a];
                this["_" + a] = b,
                this.epc(a, c, b)
            },
            f.setDisabled = function (a, b) {
                var c = this,
                d = c._disabled;
                d !== a && (d && (oa(c._disabledDiv), delete c._disabledDiv), a && (na(c._view, c._disabledDiv = ta(b)), c.iv()), c._disabled = a, c.epc("disabled", d, a))
            },
            f.initView = function (a, b) {
                var c = this;
                c._view = ha(!0),
                c._interactionDiv = ha(!1, c._view),
                a && (c._contentDiv = ha(!1, c._interactionDiv)),
                b && (c._canvas = ia(c._contentDiv || c._interactionDiv))
            },
            f.findViewById = function (a) {
                return this.id === a ? this : void 0
            },
            f.addEventListener = function (a, b, c) {
                this._interactionDiv.addEventListener(a, b, c)
            },
            f.removeEventListener = function (a, b, c) {
                this._interactionDiv.removeEventListener(a, b, c)
            },
            f.lp = function (a) {
                var b = this,
                c = b._interactionDiv.getBoundingClientRect(),
                d = Z(b.translateX) ? b.translateX : 0,
                e = Z(b.translateY) ? b.translateY : 0,
                f = b._zoom || 1;
                return a = eb(a), {
                    x: (a.clientX - c.left - d) / f,
                    y: (a.clientY - c.top - e) / f
                }
            },
            f.addToDOM = function (b, c) {
                var d = this;
                if (c = c || a, na(c.document.body, d.view), b)
                    sa(d, b, !0);
                else {
                    var e = d._resizeHandler = function () {
                        var a = ma(c);
                        sa(d, 0, 0, a.width, a.height)
                    };
                    c.addEventListener("orientationchange", e, !1),
                    c.addEventListener("resize", e, !1),
                    e()
                }
            },
            f.isChildOf = function (a) {
                for (var b = this.parent; b; ) {
                    if (b === a)
                        return !0;
                    b = b.parent
                }
            },
            f.removeChild = function () {},
            f.forEach = function (a, b, c) {
                var d = this,
                e = c ? c.children : d.children;
                if (a.call(b || d, d), e && e.length > 0)
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        d.forEach(a, b, g)
                    }
            },
            f.dispose = function () {
                var b = this,
                d = b._resizeHandler;
                d && (a.removeEventListener("orientationchange", d, !1), a.removeEventListener("resize", d, !1), b._resizeHandler = c),
                oa(b.view)
            },
            f.requestFocus = function () {
                qa(this._interactionDiv),
                this.endEditing && this.endEditing(),
                g.onViewFocused && g.onViewFocused(this)
            },
            f.iv = function (a) {
                var b = this;
                a && (b._forceLayout = !0),
                b._invalidate || (b._invalidate = !0, qb(b.validate, b))
            },
            f.checkChildPreferredSizeChange = function (a, d) {
                var e,
                f = this,
                g = !1,
                h = function () {
                    if (f._calcdPreferredSizeMap) {
                        var a = b.keys(f._calcdPreferredSizeMap)[0];
                        return [a, f.getPreferredSize(a)]
                    }
                    return [null, f.getPreferredSize()]
                };
                d = d || f._preferredSizeProperties,
                d.indexOf(a) >= 0 && (g = !0);
                var i = "preferredSize" === a,
                j = i || !f._preferredSize && g;
                if (f.parent && j && !i) {
                    var k = h(),
                    l = k[0];
                    e = k[1]
                }
                if (g && (f._calcdPreferredSize = f._calcdPreferredSizeMap = c), f.parent && j)
                    if (i)
                        f.parent.epc("childPreferredSize", 0, 1);
                    else {
                        var m = f.getPreferredSize(l);
                        f.isSameSize(e, m) || f.parent.epc("childPreferredSize", 0, 1)
                    }
            },
            f.isSameSize = function (a, b) {
                return a === b ? !0 : a && b ? a.width === b.width && a.height === b.height : void 0
            },
            f.validate = function () {
                var a = this;
                if (a._invalidate) {
                    if (delete a._invalidate, a._dynamicDOM);
                    else if (a.width == c || a.height == c || !a.isInDOM())
                        return;
                    var b = a._view,
                    d = a.clientWidth,
                    e = a.clientHeight;
                    sa(a._interactionDiv, 0, 0, d, e),
                    sa(a._contentDiv, 0, 0, d, e),
                    a.emit("viewChange", {
                        kind: "beginValidate"
                    }),
                    a.validateImpl(),
                    a.validateScrollBar && a.validateScrollBar(),
                    a.emit("viewChange", {
                        kind: "endValidate"
                    });
                    var f = a._disabledDiv;
                    f && (b.lastChild !== f && (oa(f), na(b, f)), f.style.backgroundColor = a.disabledBackground || j.disabledBackground, sa(f, 0, 0, d, e)),
                    Ja(a),
                    delete a._forceLayout
                }
            },
            f.isInDOM = function () {
                for (var a = this.view; a; ) {
                    if (a === e.body)
                        return !0;
                    a = a.parentNode
                }
                return !1
            },
            f.getPreferredSize = function () {
                return this._preferredSize || {
                    width: 100,
                    height: 100
                }
            },
            f.setPreferredSize = function (a, b) {
                var c;
                c = b === d ? a : {
                    width: a,
                    height: b
                };
                var e = this._preferredSize;
                this._preferredSize = c,
                this.epc("preferredSize", e, c)
            },
            f.calculateClientWidth = function () {
                return g.calculateClientWidth(this)
            },
            f.calculateClientHeight = function () {
                return g.calculateClientHeight(this)
            },
            z(f, {
                preferredSize: {
                    get: function () {
                        return this.getPreferredSize()
                    },
                    set: function (a) {
                        this.setPreferredSize(a)
                    }
                },
                view: {
                    get: function () {
                        return this._view
                    }
                },
                parent: {
                    get: function () {
                        return this._parent
                    },
                    set: function (a) {
                        var b = this._parent;
                        b !== a && (b && b.removeChild(this), this._parent = a)
                    }
                },
                cursor: {
                    configurable: !0,
                    get: function () {
                        return this._interactionDiv.style.cursor
                    },
                    set: function (a) {
                        this._interactionDiv.style.cursor = a
                    }
                },
                disabled: {
                    get: function () {
                        return this._disabled
                    },
                    set: function (a) {
                        this.setDisabled(a)
                    }
                },
                disabledBackground: {
                    get: function () {
                        return this._disabledBackground
                    },
                    set: function (a) {
                        var b = this._disabledBackground;
                        this._disabledBackground = a,
                        this._disabledDiv && (this._disabledDiv.style.backgroundColor = a),
                        this.epc("disabledBackground", b, a)
                    }
                },
                contextMenu: {
                    get: function () {
                        return this._contextMenu
                    },
                    set: function (a) {
                        var b = this,
                        c = b._contextMenu;
                        c !== a && (c && c.dispose(), a && a.addTo(this), b._contextMenu = a, b.epc("contextMenu", c, a))
                    }
                },
                clientWidth: {
                    get: function () {
                        return this.calculateClientWidth()
                    }
                },
                clientHeight: {
                    get: function () {
                        return this.calculateClientHeight()
                    }
                },
                width: {
                    get: function () {
                        return this._width
                    },
                    set: function (a) {
                        var b = this,
                        c = b._width;
                        a = n(a),
                        b._view.style.width = a + J,
                        b._width = a,
                        b.epc("width", c, a),
                        c !== a && (b.iv(), b.endEditing && !F && b.endEditing(), b.redraw && b.redraw(), b.showScrollBar && b.showScrollBar())
                    }
                },
                height: {
                    get: function () {
                        return this._height
                    },
                    set: function (a) {
                        var b = this,
                        c = b._height;
                        a = n(a),
                        b._view.style.height = a + J,
                        b._height = a,
                        b.epc("height", c, a),
                        c !== a && (b.iv(), b.endEditing && !F && b.endEditing(), b.redraw && b.redraw(), b.showScrollBar && b.showScrollBar())
                    }
                },
                children: {
                    get: function () {
                        return c
                    }
                }
            })
        },
        k.interactor = function () {
            var a = function (a, b) {
                var c = "__" + a,
                d = function (c) {
                    b["handle_" + a](c)
                };
                b[c] || (b[c] = d, b.view.addEventListener(a, d, !1))
            },
            b = function (a, b) {
                var c = "__" + a,
                d = b[c];
                d && (b.view.removeEventListener(a, d, !1), delete b[c])
            };
            return function (c) {
                c.addListeners = function () {
                    for (var b = 0; b < I.length; b++)
                        this["handle_" + I[b]] && a(I[b], this)
                },
                c.removeListeners = function () {
                    for (var a = 0; a < I.length; a++)
                        this["handle_" + I[a]] && b(I[a], this)
                },
                z(c, {
                    cursor: {
                        get: function () {
                            return this.view.style ? this.view.style.cursor : this.view.cursor
                        },
                        set: function (a) {
                            this.view.style ? this.view.style.cursor = a : this.view.cursor = a
                        }
                    }
                })
            }
        }
        (),
        function (a, b) {
            function c(a, b, c) {
                return a.addEventListener ? void a.addEventListener(b, c, !1) : void 0
            }
            function d(a, b, c) {
                return a.removeEventListener ? void a.removeEventListener(b, c, !1) : void 0
            }
            function e(a) {
                if ("keypress" == a.type) {
                    var b = String.fromCharCode(a.which);
                    return a.shiftKey || (b = b.toLowerCase()),
                    b
                }
                return s[a.which] ? s[a.which] : t[a.which] ? t[a.which] : String.fromCharCode(a.which).toLowerCase()
            }
            function g(a, b) {
                return a.sort().join(",") === b.sort().join(",")
            }
            function h(a) {
                var b = [];
                return a.shiftKey && b.push("shift"),
                a.altKey && b.push("alt"),
                a.ctrlKey && b.push("ctrl"),
                a.metaKey && b.push("meta"),
                b
            }
            function i(a) {
                return a.preventDefault ? void a.preventDefault() : void(a.returnValue = !1)
            }
            function j(a) {
                return a.stopPropagation ? void a.stopPropagation() : void(a.cancelBubble = !0)
            }
            function k(a) {
                return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a
            }
            function l() {
                if (!r) {
                    r = {};
                    for (var a in s)
                        a > 95 && 112 > a || s.hasOwnProperty(a) && (r[s[a]] = a)
                }
                return r
            }
            function m(a, b, c) {
                return c || (c = l()[a] ? "keydown" : "keypress"),
                "keypress" == c && b.length && (c = "keydown"),
                c
            }
            function n(a) {
                return "+" === a ? ["+"] : (a = a.replace(/\+{2}/g, "+plus"), a.split("+"))
            }
            function o(a, b) {
                var c,
                d,
                e,
                f = [];
                for (c = n(a), e = 0; e < c.length; ++e)
                    d = c[e], x[d] && (d = x[d]), b && "keypress" != b && u[d] && (d = u[d], f.push("shift")), k(d) && f.push(d);
                return b = m(d, f, b), {
                    key: d,
                    modifiers: f,
                    action: b
                }
            }
            function p(a, c) {
                return a && a !== b ? a === c ? !0 : p(a.parentNode, c) : !1
            }
            function q(a) {
                function f(a) {
                    a = a || {};
                    var b,
                    c = !1;
                    for (b in x)
                        a[b] ? c = !0 : x[b] = 0;
                    c || (A = !1)
                }
                function l(a, b, c, d, e, f) {
                    var h,
                    i,
                    j = [],
                    l = c.type;
                    if (!t._callbacks[a])
                        return [];
                    for ("keyup" == l && k(a) && (b = [a]), h = 0; h < t._callbacks[a].length; ++h)
                        if (i = t._callbacks[a][h], (d || !i.seq || x[i.seq] == i.level) && l == i.action && ("keypress" == l && !c.metaKey && !c.ctrlKey || g(b, i.modifiers))) {
                            var m = !d && i.combo == e,
                            n = d && i.seq == d && i.level == f;
                            (m || n) && t._callbacks[a].splice(h, 1),
                            j.push(i)
                        }
                    return j
                }
                function m(a, b, c, d) {
                    t.stopCallback(b, b.target || b.srcElement, c, d) || a(b, c) === !1 && (i(b), j(b))
                }
                function n(a) {
                    "number" != typeof a.which && (a.which = a.keyCode);
                    var b = e(a);
                    if (b)
                        return "keyup" == a.type && y === b ? void(y = !1) : void t.handleKey(b, h(a), a)
                }
                function p() {
                    w(u),
                    u = v(f, 1e3)
                }
                function r(a, b, c, d) {
                    function g(b) {
                        return function () {
                            A = b,
                            ++x[a],
                            p()
                        }
                    }
                    function h(b) {
                        m(c, b, a),
                        "keyup" !== d && (y = e(b)),
                        v(f, 10)
                    }
                    x[a] = 0;
                    for (var i = 0; i < b.length; ++i) {
                        var j = i + 1 === b.length,
                        k = j ? h : g(d || o(b[i + 1]).action);
                        s(b[i], k, d, a, i)
                    }
                }
                function s(a, b, c, d, e) {
                    t._directMap[a + ":" + c] = b,
                    a = a.replace(/\s+/g, " ");
                    var f,
                    g = a.split(" ");
                    return g.length > 1 ? void r(a, g, b, c) : (f = o(a, c), t._callbacks[f.key] = t._callbacks[f.key] || [], l(f.key, f.modifiers, {
                            type: f.action
                        }, d, a, e), void t._callbacks[f.key][d ? "unshift" : "push"]({
                            callback: b,
                            modifiers: f.modifiers,
                            action: f.action,
                            seq: d,
                            level: e,
                            combo: a
                        }))
                }
                var t = this;
                if (a = a || b, !(t instanceof q))
                    return new q(a);
                t.target = a,
                t._callbacks = {},
                t._directMap = {};
                var u,
                x = {},
                y = !1,
                z = !1,
                A = !1;
                t._handleKey = function (a, b, c) {
                    var d,
                    e = l(a, b, c),
                    g = {},
                    h = 0,
                    i = !1;
                    for (d = 0; d < e.length; ++d)
                        e[d].seq && (h = Math.max(h, e[d].level));
                    for (d = 0; d < e.length; ++d)
                        if (e[d].seq) {
                            if (e[d].level != h)
                                continue;
                            i = !0,
                            g[e[d].seq] = 1,
                            m(e[d].callback, c, e[d].combo, e[d].seq)
                        } else
                            i || m(e[d].callback, c, e[d].combo);
                    var j = "keypress" == c.type && z;
                    c.type != A || k(a) || j || f(g),
                    z = i && "keydown" == c.type
                },
                t._bindMultiple = function (a, b, c) {
                    for (var d = 0; d < a.length; ++d)
                        s(a[d], b, c)
                },
                c(a, "keypress", n),
                c(a, "keydown", n),
                c(a, "keyup", n),
                t.dispose = function () {
                    d(a, "keypress", n),
                    d(a, "keydown", n),
                    d(a, "keyup", n)
                }
            }
            if (a.navigator) {
                for (var r, s = {
                        8: "backspace",
                        9: "tab",
                        13: "enter",
                        16: "shift",
                        17: "ctrl",
                        18: "alt",
                        20: "capslock",
                        27: "esc",
                        32: "space",
                        33: "pageup",
                        34: "pagedown",
                        35: "end",
                        36: "home",
                        37: "left",
                        38: "up",
                        39: "right",
                        40: "down",
                        45: "ins",
                        46: "del",
                        91: "meta",
                        93: "meta",
                        224: "meta"
                    }, t = {
                        106: "*",
                        107: "+",
                        109: "-",
                        110: ".",
                        111: "/",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'"
                    }, u = {
                        "~": "`",
                        "!": "1",
                        "@": "2",
                        "#": "3",
                        $: "4",
                        "%": "5",
                        "^": "6",
                        "&": "7",
                        "*": "8",
                        "(": "9",
                        ")": "0",
                        _: "-",
                        "+": "=",
                        ":": ";",
                        '"': "'",
                        "<": ",",
                        ">": ".",
                        "?": "/",
                        "|": "\\"
                    }, x = {
                        option: "alt",
                        command: "meta",
                        "return": "enter",
                        escape: "esc",
                        plus: "+",
                        mod: /Mac|iPod|iPhone|iPad/.test(a.navigator.platform) ? "meta" : "ctrl"
                    }, y = 1; 20 > y; ++y)
                    s[111 + y] = "f" + y;
                for (y = 0; 9 >= y; ++y)
                    s[y + 96] = y;
                q.prototype.bind = function (a, b, c) {
                    var d = this;
                    return a = a instanceof Array ? a : [a],
                    d._bindMultiple.call(d, a, b, c),
                    d
                },
                q.prototype.unbind = function (a, b) {
                    var c = this;
                    return c.bind.call(c, a, function () {}, b)
                },
                q.prototype.trigger = function (a, b) {
                    var c = this;
                    return c._directMap[a + ":" + b] && c._directMap[a + ":" + b]({}, a),
                    c
                },
                q.prototype.reset = function () {
                    var a = this;
                    return a._callbacks = {},
                    a._directMap = {},
                    a
                },
                q.prototype.stopCallback = function (a, b, c) {
                    var d = this;
                    return (" " + b.className + " ").indexOf(" mousetrap ") > -1 ? !1 : p(b, d.target) ? !1 : ("INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable) && c && 1 === c.length ? !0 : void 0
                },
                q.prototype.handleKey = function () {
                    var a = this;
                    return a._handleKey.apply(a, arguments)
                },
                q.init = function () {
                    var a = q(b);
                    for (var c in a)
                        "_" !== c.charAt(0) && (q[c] = function (b) {
                            return function () {
                                return a[b].apply(a, arguments)
                            }
                        }
                            (c))
                },
                q.init(),
                f.widget.Mousetrap = q
            }
        }
        (a, e),
        l.Object = b;
        var T = function (a, b) {
            if (X(a) && (a = l[a]), X(b) && (b = l[b]), !a || !b)
                return !1;
            for (var c = a.superClass; c && c !== b; )
                c = c.superClass;
            return c === b
        },
        U = function (a, b) {
            for (var d = c; !d && a; )
                a = a.superClass, d = x(a.prototype, b);
            return d
        },
        V = function (c, e, f, g, h, i) {
            if (e = e || b, X(e) && (e = l[e], !e))
                throw "'" + e + "' not defined";
            var j = b.create(e.prototype);
            if (X(c)) {
                if (l[c])
                    throw "'" + c + "' alreay defined";
                for (var m = c.split("."), n = a, o = 0; o < m.length - 1; o++) {
                    var p = m[o];
                    n[p] || (n[p] = {}),
                    n = n[p]
                }
                n[m[m.length - 1]] = f,
                l[c] = f
            }
            i && z(j, i);
            for (var q in h)
                k[q] && k.hasOwnProperty(q) && k[q](j, h[q]);
            for (var q in g)
                j[q] = g[q];
            return f.isSubClassOf = function (a) {
                return T(f, a)
            },
            z(f, {
                className: {
                    get: function () {
                        return c
                    }
                },
                superClass: {
                    get: function () {
                        return e
                    }
                },
                superClassName: {
                    get: function () {
                        return e.prototype.className
                    }
                }
            }),
            z(j, {
                "class": {
                    get: function () {
                        return f
                    }
                },
                className: {
                    get: function () {
                        return c
                    }
                },
                superClass: {
                    get: function () {
                        return e
                    }
                },
                superClassName: {
                    get: function () {
                        return e.prototype.className
                    }
                }
            }),
            j.constructor = f,
            f.prototype = j,
            f["super"] = e.prototype,
            f.getSuperProperty = function (a, b) {
                var c = U(f, b);
                return c && c.get ? c.get.call(a) : d
            },
            f.setSuperProperty = function (a, b, c) {
                var d = U(f, b);
                return d && d.set ? d.set.call(a, c) : void 0
            },
            f
        },
        W = function (a) {
            return a && "object" == typeof a
        },
        X = function (a) {
            return "string" == typeof a || a instanceof String
        },
        Y = function (a) {
            return "boolean" == typeof a
        },
        Z = function (a) {
            return "number" == typeof a
        },
        $ = function (a) {
            return "function" == typeof a
        },
        _ = function (a) {
            return a instanceof Array
        },
        aa = function (a) {
            for (var b in a)
                return !1;
            return !0
        },
        ba = function (a, b, c) {
            c >= 0 ? a.splice(c, 0, b) : a.push(b)
        },
        ca = function (a, b) {
            var c = a.indexOf(b);
            return c >= 0 && a.splice(c, 1),
            c
        },
        da = function (a, b) {
            for (var c = 0, d = b.length; d > c; c++)
                a.push(b[c])
        },
        ea = function (a, b, c) {
            if (b) {
                for (var d = [], e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    b.call(c, g) && d.push(g)
                }
                return d
            }
            return a.slice(0)
        },
        fa = function (a) {
            var b = a.target.tagName;
            ("DIV" === b || "CANVAS" === b) && ("keydown" !== a.type || Xa(a) || Za(a) || Ya(a) || $a(a) || Sa(a) || 65 === a.keyCode && (a.metaKey || a.ctrlKey)) && (a.preventDefault(), a.preventManipulation && a.preventManipulation())
        },
        ga = function (a) {
            g.popup && g.popup.close(),
            g.popup = a
        },
        ha = function (a, b) {
            var d = e.createElement("div"),
            f = d.style;
            return d.tabIndex = -1,
            d.onkeydown = g.preventDefault,
            f.msTouchAction = "none",
            f.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", c),
            a && (f.overflow = "hidden"),
            ja(d, c, 0),
            b && na(b, d),
            d
        },
        ia = function (a) {
            var b = e.createElement("canvas"),
            d = b.style;
            return d.msTouchAction = "none",
            ja(b, c, 0),
            a && na(a, b),
            b
        },
        ja = function (a, b, c) {
            var d = a.style;
            d.border = b ? b + " solid 1px" : 0,
            d.outline = 0,
            d.padding = c ? "0 " + c + J : 0,
            ka(a)
        },
        ka = function (a) {
            var b = a.style;
            b.position = "absolute",
            b.margin = 0,
            b.setProperty("box-sizing", "border-box", c),
            b.setProperty("-moz-box-sizing", "border-box", c)
        },
        la = function (a, b, d, e) {
            e || (e = g.devicePixelRatio),
            b != c && (a.width = b * e, a.style.width = b + J),
            d != c && (a.height = d * e, a.style.height = d + J)
        },
        ma = function (b) {
            b = b || a;
            var c = b.document.documentElement,
            d = c && (c.scrollLeft || c.scrollTop) ? c : b.document.body;
            return {
                target: d,
                left: d.scrollLeft,
                top: d.scrollTop,
                width: b.innerWidth || d.clientWidth,
                height: b.innerHeight || d.clientHeight
            }
        },
        na = function (a, b, c) {
            a.appendChild(b),
            c && (b.style.position = "absolute")
        },
        oa = function () {
            var a;
            return function (b) {
                if (b && b.parentNode) {
                    if (a === b)
                        return;
                    a = b,
                    b.parentNode.removeChild(b),
                    a = c
                }
            }
        }
        (),
        pa = function (a, b) {
            if (a)
                for (var c = Array.prototype.slice.call(a.childNodes), d = 0; d < c.length; d++) {
                    var e = c[d];
                    b && b(e) && a.removeChild(e)
                }
        },
        qa = function (a) {
            a.focus()
        },
        ra = function (a) {
            return a.view || a
        },
        sa = function (a, b, d, f, g, h) {
            if (a) {
                arguments.length < 4 && (h = d, d = b.y, f = b.width, g = b.height, b = b.x);
                var i = ra(a),
                j = i.style;
                (e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || e.msFullscreenElement) !== i && (b = n(b), d = n(d), f = n(f), g = n(g), b != c && (j.left = b + J), d != c && (j.top = d + J), f != c && (0 > f && (f = 0), a.tagName ? j.width = f + J : a.width = f), g != c && (0 > g && (g = 0), a.tagName ? j.height = g + J : a.height = g)),
                h && a.iv && a.iv(!0),
                a.validate && a.validate(),
                a.emit && a.emit("viewChange", {
                    kind: "layout"
                })
            }
        },
        ta = function (a) {
            var b = ha(),
            c = b.style,
            d = function (a) {
                a.preventDefault()
            };
            return b.addEventListener("mousedown", d),
            b.addEventListener("touchstart", d),
            a && (c.backgroundImage = "url(" + a + ")", c.backgroundPosition = "50% 50%", c.backgroundRepeat = "no-repeat no-repeat"),
            c.zIndex = "10000",
            b
        },
        ua = function (a) {
            var b = ra(a);
            return b.clientWidth
        },
        va = function (a) {
            var b = ra(a);
            return b.clientHeight
        },
        wa = function (a, b) {
            b.split || (b += "");
            for (var c, d = b.split("\n"), e = 0, f = d.length, g = 0; f > g; g++) {
                var h = za(a.font, d[g]);
                h.width > e && (e = h.width),
                c || (c = h.height)
            }
            return a.ss = d, {
                width: e,
                height: c * f
            }
        },
        xa = function (a, b, c, d, e, f) {
            var g = b.length;
            if (1 === g)
                ya(a, b[0], c, d, e);
            else
                for (var h = c.height / g, i = {
                        x: c.x,
                        y: c.y,
                        width: c.width,
                        height: h
                    }, j = 0; j < b.length; j++)
                    f ? Aa(a, b[j], d, e, i.x, i.y, i.width, i.height, f) : ya(a, b[j], i, d, e), i.y += h
        },
        ya = function (a, b, c, e, f) {
            a.font = e ? e : g.labelFont,
            a.fillStyle = f ? f : "black",
            a.textAlign = "center",
            a.textBaseline = "middle";
            var h,
            i;
            c ? c.width === d ? (h = c.x, i = c.y) : (h = c.x + c.width / 2, i = c.y + c.height / 2) : (h = 0, i = 0),
            a.fillText(b, n(h), n(i))
        },
        za = function () {
            var a = {},
            b = e ? ia().getContext("2d") : c;
            return function (d, e) {
                b.font = d ? d : g.labelFont;
                var f = a[b.font];
                return f || (f = 2 * b.measureText("e").width + 4, a[b.font] = f), {
                    width: e == c ? 0 : b.measureText(e).width + 4,
                    height: f
                }
            }
        }
        (),
        Aa = function (a, b, d, e, f, g, h, i, j, k) {
            if (b != c) {
                var l,
                m = {};
                k && "middle" !== k ? "top" === k ? (l || (l = za(d, b)), m.y = g + l.height / 2) : (l || (l = za(d, b)), m.y = g + i - l.height / 2) : m.y = g + i / 2,
                j && "left" !== j ? "right" === j ? (l || (l = za(d, b)), m.x = f + h - l.width / 2) : m.x = f + h / 2 : (l || (l = za(d, b)), m.x = f + l.width / 2),
                ya(a, b, m, d, e)
            }
        },
        Ba = function (a, b) {
            return Da(a, b ? b : 40)
        },
        Ca = function (a, b) {
            return Da(a, b ? b : -40)
        },
        Da = function () {
            var a = {};
            return function (b, c) {
                var d = b + "-" + c,
                e = a[d];
                if (e)
                    return e;
                var f,
                g,
                h,
                i = Ea(b);
                return 0 > c ? (c = (100 + c) / 100, f = o(i[0] * c), g = o(i[1] * c), h = o(i[2] * c)) : (c /= 100, f = i[0], g = i[1], h = i[2], f += (255 - f) * c, g += (255 - g) * c, h += (255 - h) * c, f = r(o(f), 255), g = r(o(g), 255), h = r(o(h), 255)),
                a[d] = "rgb(" + f + "," + g + "," + h + ")"
            }
        }
        (),
        Ea = function () {
            var a,
            b = {};
            return function (c) {
                var d,
                e = b[c];
                return e || (a || (a = ia(), la(a, 1, 1, 1)), d = a.getContext("2d"), d.clearRect(0, 0, 1, 1), d.fillStyle = c, d.beginPath(), d.rect(0, 0, 1, 1), d.fill(), e = d.getImageData(0, 0, 1, 1).data, e = b[c] = [e[0], e[1], e[2], e[3]]),
                e
            }
        }
        (),
        Fa = function (a) {
            if (!X(a))
                return a;
            var b = Ea(a);
            return b.CA || (b.CA = [b[0] / 255, b[1] / 255, b[2] / 255, b[3] / 255]),
            b.CA
        },
        Ga = function (a, b, c, d) {
            var e = ia();
            e.width = c,
            e.height = d;
            var f = e.getContext("2d");
            f.drawImage(a, 0, 0, c, d);
            try {
                var g = f.getImageData(0, 0, c, d),
                h = g.data,
                i = 0,
                j = h.length;
                for (b = Fa(b); j > i; i += 4) {
                    var k = h[i + 0],
                    l = h[i + 1],
                    m = h[i + 2];
                    h[i + 0] = b[0] * k,
                    h[i + 1] = b[1] * l,
                    h[i + 2] = b[2] * m
                }
                f.putImageData(g, 0, 0)
            } catch (n) {
                return a
            }
            return e
        },
        Ha = c,
        Ia = c,
        Ja = function (a) {
            Ha && !a._loadingView_ && (Ia || (Ia = {}), Ia[a._loadingView_ = N()] = a)
        },
        Ka = function (b, d, e, f) {
            Ha || (Ha = {});
            var h = Ha[b];
            if (h) {
                if (h.url === d)
                    return;
                h.image.onload = M,
                h.image.onerror = M
            }
            var i = new a.Image;
            Ha[b] = {
                image: i,
                url: d
            },
            i.onload = function () {
                e && (i.width = e),
                f && (i.height = f),
                g.onImageLoad(b, i),
                La(b, i)
            },
            i.onerror = function () {
                La(b, g.onImageError(b, d) || c)
            },
            d += "",
            i.src = d
        },
        La = function (a, b) {
            if (h[a] = b, delete Ha[a], aa(Ha) && (Ha = c, Ia)) {
                for (var d in Ia) {
                    var e = Ia[d];
                    e.invalidateAll && e.invalidateAll(),
                    e.redraw && e.redraw(),
                    e.iv(),
                    delete e._loadingView_
                }
                Ia = c
            }
            if (b && Ia)
                for (var d in Ia) {
                    var e = Ia[d];
                    e.invalidateAll && e.invalidateAll(),
                    e.redraw && e.redraw(),
                    e.iv()
                }
        },
        Ma = function (a, b, c, d) {
            var e = arguments.length;
            4 === e ? Ka(a, b, c, d) : 2 === e ? X(b) ? Ka(a, b) : h[a] = b : 1 === e && Ka(a, a)
        },
        Na = function (a, b) {
            var e;
            if (a == c)
                return c;
            if (W(a) ? e = a : (e = h[a], a && e === d && (Ha && Ha[a] || Ka(a, a))), b && e && e.tagName) {
                e.colors || (e.colors = {});
                var f = e.colors[b];
                return f || (f = Ga(e, b, e.width, e.height), e.colors[b] = f),
                f
            }
            return e
        },
        Oa = {},
        Pa = function (a) {
            return a instanceof MouseEvent || 0 === a.type.indexOf("mouse")
        },
        Qa = function (a, b) {
            return a ? a.keyCode === b : Oa[b]
        },
        Ra = function (a) {
            return Ua(a) && Qa(a, 65)
        },
        Sa = function (a) {
            return Qa(a, 46) || Qa(a, 8)
        },
        Ta = function (a) {
            return a ? a.shiftKey : Oa[16]
        },
        Ua = function (a) {
            return a ? E ? a.metaKey : a.ctrlKey : E ? Oa[91] : Oa[17]
        },
        Va = function (a) {
            return Pa(a) ? 0 === a.button : !0
        },
        Wa = function (a) {
            return function (b) {
                return b ? b.keyCode === a : Oa[a]
            }
        },
        Xa = Wa(37),
        Ya = Wa(38),
        Za = Wa(39),
        $a = Wa(40),
        _a = Wa(32),
        ab = Wa(13),
        bb = Wa(27),
        cb = function (a) {
            return Pa(a) ? 1 : a.touches.length
        },
        db = function () {
            var a = new Date,
            b = c;
            return function (c) {
                if (Pa(c))
                    return 2 === c.detail;
                var e = c.type,
                f = e + "_isDoubleClick";
                if (c[f] === d && "touchstart" === e) {
                    var g = new Date,
                    h = fb(c);
                    c[f] = b && Ab(b, h) < 20 && g.getTime() - a.getTime() < 500,
                    a = g,
                    b = h
                }
                return c[f]
            }
        }
        (),
        eb = function (a) {
            if (!Pa(a)) {
                var b = a.touches[0];
                if (b)
                    return b;
                if (b = a.changedTouches, b && b[0])
                    return b[0]
            }
            return a
        },
        fb = function (a) {
            return a = eb(a), {
                x: a.clientX,
                y: a.clientY
            }
        },
        gb = function (a) {
            return a = eb(a), {
                x: a.pageX,
                y: a.pageY
            }
        },
        hb = function (a) {
            var b = a.touches[0],
            c = a.touches[1],
            d = b.clientX,
            e = b.clientY,
            f = c.clientX,
            g = c.clientY;
            return p((d - f) * (d - f) + (e - g) * (e - g))
        };
        a.addEventListener && (a.addEventListener("keyup", function (a) {
                91 === a.keyCode ? Oa = {}
                 : delete Oa[a.keyCode]
            }, !0), a.addEventListener("keydown", function (a) {
                Oa[a.keyCode] = !0
            }, !0));
        var ib = c,
        jb = function () {
            return !!ib
        },
        kb = function (a) {
            ib.handleWindowTouchMove(a)
        },
        lb = function (b) {
            ib.handleWindowTouchEnd(b),
            a.removeEventListener("touchmove", kb, !1),
            a.removeEventListener("touchend", lb, !1),
            ib = c
        },
        mb = function (a) {
            ib.handleWindowMouseMove(a)
        },
        nb = function (b) {
            ib.handleWindowMouseUp(b),
            a.removeEventListener("mousemove", mb, !1),
            a.removeEventListener("mouseup", nb, !1),
            ib = c
        },
        ob = function (b, c) {
            b !== ib && (ib ? Pa(c) ? ib.handleWindowMouseUp(c) : ib.handleWindowTouchEnd(c) : Pa(c) ? (a.addEventListener("mousemove", mb, !1), a.addEventListener("mouseup", nb, !1)) : (a.addEventListener("touchmove", kb, !1), a.addEventListener("touchend", lb, !1)), ib = b)
        };
        !function () {
            for (var b = 0, c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !a.requestAnimationFrame; ++d)
                a.requestAnimationFrame = a[c[d] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[c[d] + "CancelAnimationFrame"] || a[c[d] + "CancelRequestAnimationFrame"];
            a.requestAnimationFrame || (a.requestAnimationFrame = function (c) {
                var d = (new Date).getTime(),
                e = Math.max(0, 16 - (d - b)),
                f = a.setTimeout(function () {
                    c(d + e)
                }, e);
                return b = d + e,
                f
            }),
            a.cancelAnimationFrame || (a.cancelAnimationFrame = function (a) {
                w(a)
            })
        }
        ();
        var pb = a.requestAnimationFrame,
        qb = function (a, b, c, d) {
            var e = function () {
                a.apply(b, c)
            };
            return d ? v(e, d) : pb(e)
        },
        rb = function (b, c) {
            c ? w(b) : a.cancelAnimationFrame(b)
        },
        sb = function () {
            return a.performance && a.performance.now ? a.performance.now() : Date.now()
        },
        tb = function (a) {
            return a ? W(a) ? a : {}
             : !1
        },
        ub = function () {
            var a = function (a) {
                a.duration && (a.startTime = sb()),
                a.timeId = qb(a.tick, c, c, a.interval)
            };
            return function (b) {
                return b = P(b),
                b.easing = b.easing || g.animEasing,
                b.duration || b.frames || (b.duration = g.animDuration),
                b.t = 0,
                b.duration ? b.interval = 0 : (b.frame = 0, b.interval = b.interval || 10),
                b.tick = function () {
                    if (b.duration) {
                        var a = (sb() - b.startTime) / b.duration;
                        a > 1 && (a = 1),
                        b.t = a,
                        b.action(b.easing(a), a),
                        1 === a ? b.stop() : b._isPaused || (b.timeId = qb(b.tick))
                    } else
                        b.frame++, a = b.t = b.frame / b.frames, b.action(b.easing(a), a), b.frame < b.frames ? b._isPaused || (b.timeId = qb(b.tick, c, c, b.interval)) : b.stop()
                },
                b.resume = function () {
                    b._isPaused && (delete b._isPaused, b.duration ? b.t < 1 && (b.startTime = sb() - b.duration * b.t, b.timeId = qb(b.tick)) : b.frame < b.frames && (b.timeId = qb(b.tick, c, c, b.interval)))
                },
                b.pause = function () {
                    b._isPaused = !0
                },
                b.stop = function (a) {
                    b.isRunning() && (b.duration ? b.t < 1 && a && (b.t = 1, b.action(b.easing(1))) : b.frame < b.frames && a && (b.frame = b.frames, b.action(b.easing(1))), b.innerFunc && b.innerFunc(), b.finishFunc && b.finishFunc(), rb(b.timeId, !b.duration), delete b.timeId)
                },
                b.isRunning = function () {
                    return b.timeId != c
                },
                b.delay ? qb(a, c, [b], b.delay) : a(b),
                b
            }
        }
        (),
        vb = function (a, b) {
            if (a === b)
                return 0;
            if (a == c && b != c)
                return 1;
            if (a != c && b == c)
                return -1;
            if (a == c && b == c)
                return 0;
            var e,
            f = typeof a,
            g = typeof b;
            return "string" === f && "string" === g ? e = a.localeCompare(b) : "number" === f && "number" === g && (e = a - b),
            e === d && (e = ("" + a).localeCompare("" + b)),
            e > 0 ? 1 : 0 > e ? -1 : 0
        },
        wb = 1e-6,
        xb = function (a) {
            this.s = u(a),
            this.c = t(a)
        };
        xb.prototype.tf = function (a, b) {
            1 === arguments.length && (b = a.y, a = a.x);
            var c = this;
            return {
                x: c.c * a - c.s * b,
                y: c.s * a + c.c * b
            }
        };
        var yb = function (a, b) {
            var c = G;
            a.target && (c = !Pa(a), a = b.lp(a));
            var d = a.x,
            e = a.y;
            return c ? {
                x: d - 5,
                y: e - 5,
                width: 11,
                height: 11
            }
             : {
                x: d - 1,
                y: e - 1,
                width: 3,
                height: 3
            }
        },
        zb = function (a, b) {
            if (b) {
                var c = new xb(b),
                d = a.width / 2,
                e = a.height / 2,
                f = Eb([c.tf(-d, -e), c.tf(d, -e), c.tf(d, e), c.tf(-d, e)]);
                return f.x += a.x + d,
                f.y += a.y + e,
                f
            }
            return a
        },
        Ab = function (a, b) {
            var c = b.x - a.x,
            d = b.y - a.y;
            return p(c * c + d * d)
        },
        Bb = function (a) {
            a.width < 0 && (a.width = -a.width, a.x = a.x - a.width),
            a.height < 0 && (a.height = -a.height, a.y = a.y - a.height)
        },
        Cb = function (a, b, d) {
            d == c && (d = b),
            a.x -= b,
            a.y -= d,
            a.width = a.width + 2 * b,
            a.height = a.height + 2 * d
        },
        Db = function (a, b) {
            return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
        },
        Eb = function (a, b) {
            if (!a)
                return c;
            if (2 === arguments.length)
                return a && b ? {
                    x: r(a.x, b.x),
                    y: r(a.y, b.y),
                    width: s(a.x - b.x),
                    height: s(a.y - b.y)
                }
             : c;
            var d = a,
            e = d.length;
            if (!e)
                return c;
            for (var f = 1, g = d[0], h = {
                    x: g.x,
                    y: g.y,
                    width: 0,
                    height: 0
                }; e > f; f++) {
                g = d[f];
                var i = r(h.x, g.x),
                j = q(h.x + h.width, g.x),
                k = r(h.y, g.y),
                l = q(h.y + h.height, g.y);
                h.x = i,
                h.y = k,
                h.width = j - i,
                h.height = l - k
            }
            return h
        },
        Fb = function (a, b) {
            if (a && !b)
                return P(a);
            if (!a && b)
                return P(b);
            if (a && b) {
                var d = {
                    x: r(a.x, b.x),
                    y: r(a.y, b.y)
                };
                return d.width = q(a.x + a.width, b.x + b.width) - d.x,
                d.height = q(a.y + a.height, b.y + b.height) - d.y,
                d
            }
            return c
        },
        Gb = function (a, b) {
            return !(!a || b.x < a.x || b.y < a.y || b.x > a.x + a.width || b.y > a.y + a.height)
        },
        Hb = function (a, b) {
            if (!a || !b)
                return !1;
            var c = b.x,
            d = b.y,
            e = b.width,
            f = b.height,
            g = a.width,
            h = a.height;
            if (0 > (g | h | e | f))
                return !1;
            var i = a.x,
            j = a.y;
            if (i > c || j > d)
                return !1;
            if (g += i, e += c, c >= e) {
                if (g >= i || e > g)
                    return !1
            } else if (g >= i && e > g)
                return !1;
            if (h += j, f += d, d >= f) {
                if (h >= j || f > h)
                    return !1
            } else if (h >= j && f > h)
                return !1;
            return !0
        },
        Ib = function (a, b) {
            if (!a || !b)
                return !1;
            var c = b.width,
            d = b.height,
            e = a.width,
            f = a.height;
            if (0 >= e || 0 >= f || 0 >= c || 0 >= d)
                return !1;
            var g = b.x,
            h = b.y,
            i = a.x,
            j = a.y;
            return e += i,
            f += j,
            c += g,
            d += h,
            e > g && f > h && c > i && d > j
        },
        Jb = function (a, b) {
            if (!a || !b)
                return c;
            var d = b.x,
            e = b.y,
            f = a.x,
            g = a.y,
            h = d,
            i = e,
            j = f,
            k = g;
            return h += b.width,
            i += b.height,
            j += a.width,
            k += a.height,
            f > d && (d = f),
            g > e && (e = g),
            h > j && (h = j),
            i > k && (i = k),
            h -= d,
            i -= e,
            0 >= h || 0 >= i ? c : {
                x: d,
                y: e,
                width: h,
                height: i
            }
        },
        Kb = function (a, b, c) {
            return Lb(a.x, a.y, b.x, b.y, c.x, c.y, c.x + c.width, c.y, !0) || Lb(a.x, a.y, b.x, b.y, c.x + c.width, c.y, c.x + c.width, c.y + c.height, !0) || Lb(a.x, a.y, b.x, b.y, c.x + c.width, c.y + c.height, c.x, c.y + c.height, !0) || Lb(a.x, a.y, b.x, b.y, c.x, c.y + c.height, c.x, c.y, !0)
        },
        Lb = function (a, b, d, e, f, g, h, i, j) {
            var k = (h - f) * (b - g) - (i - g) * (a - f),
            l = (i - g) * (d - a) - (h - f) * (e - b);
            if (0 !== l) {
                var m = k / l,
                n = a + m * (d - a),
                o = b + m * (e - b);
                return j && (n + wb < r(a, d) || n - wb > q(a, d) || n + wb < r(f, h) || n - wb > q(f, h) || o + wb < r(b, e) || o - wb > q(b, e) || o + wb < r(g, i) || o - wb > q(g, i)) ? c : [n, o]
            }
            return c
        };
        O(j, {
            disabledBackground: "rgba(255,255,255,0.65)"
        }, !0),
        O(g, {
            define: V,
            defineProperty: y,
            defineProperties: z,
            isSubClassOf: T,
            sortFunc: vb,
            setImage: Ma,
            getImage: Na,
            drawText: Aa,
            startAnim: ub,
            timeNow: sb,
            onImageLoad: M,
            onImageError: M,
            isIE: C,
            isFirefox: D,
            isMac: E,
            isAndroid: F,
            isTouchable: G,
            mouseScroll: H,
            animDuration: 200,
            animEasing: function (a) {
                return a * a
            },
            labelFont: (G ? "15" : "12") + "px arial, sans-serif",
            devicePixelRatio: a.devicePixelRatio ? a.devicePixelRatio : 1,
            preventDefault: fa,
            zoomIncrement: 1.3,
            scrollZoomIncrement: 1.05,
            pinchZoomIncrement: 1.08,
            maxZoom: 20,
            minZoom: .01,
            closePopup: ga,
            callLater: qb,
            cancelLater: rb,
            emptyArray: K,
            emptyRect: L,
            emptyFunc: M,
            createDiv: ha,
            createCanvas: ia,
            setCanvas: la,
            setBorder: ja,
            toHTML: ra,
            layout: sa,
            getClientPoint: fb,
            getPagePoint: gb,
            appendChild: na,
            requestFocus: qa,
            removeHTML: oa,
            clearHTML: pa,
            getWindowInfo: ma,
            Mat2: xb,
            mixin: O,
            clone: P,
            createAnim: tb,
            addAccessor: Q,
            createObject: R,
            initObject: S,
            getTextSize: za,
            getHitRect: yb,
            getTouchCount: cb,
            getPinchDist: hb,
            isNumber: Z,
            isString: X,
            isBoolean: Y,
            isObject: W,
            isArray: _,
            isFunction: $,
            addArray: ba,
            removeArray: ca,
            appendArray: da,
            toArray: ea,
            grow: Cb,
            getDistance: Ab,
            positiveRect: Bb,
            isSameRect: Db,
            unionPoint: Eb,
            unionRect: Fb,
            containsPoint: Gb,
            containsRect: Hb,
            intersectsRect: Ib,
            intersection: Jb,
            intersectionLineRect: Kb,
            intersectionLineLine: Lb,
            getRotationRect: zb,
            getBreakableTextSize: wa,
            brighter: Ba,
            darker: Ca,
            toColorData: Ea,
            toColorArray: Fa,
            drawBreakableText: xa,
            isDragging: jb,
            startDragging: ob,
            isEmptyObject: aa,
            isDoubleClick: db,
            isLeftButton: Va,
            isCtrlDown: Ua,
            isShiftDown: Ta,
            isSelectAll: Ra,
            isDelete: Sa,
            isLeft: Xa,
            isUp: Ya,
            isRight: Za,
            isDown: $a,
            isSpace: _a,
            isEnter: ab,
            isEsc: bb,
            getId: N,
            isMouseEvent: Pa,
            checkTouch: eb,
            checkLoadingImageMap: Ja,
            calculateClientWidth: ua,
            calculateClientHeight: va
        }, !0),
        b.defineProperties(f.widget.Default, {
            version: {
                value: "1.0.0"
            }
        })
    }
}
(this, Object, null), function (a, b, c, d) {
    "use strict";
    var e = a.qc,
    f = "px",
    g = (b.getOwnPropertyDescriptor, Math),
    h = g.round,
    i = g.floor,
    j = g.ceil,
    k = g.sqrt,
    l = g.max,
    m = g.min,
    n = g.abs,
    o = g.cos,
    p = (g.acos, g.sin),
    q = (g.pow, g.asin, g.PI),
    r = 2 * q,
    s = q / 2,
    t = (g.tan, g.atan2),
    u = (g.random, a.parseInt),
    v = a.setTimeout,
    w = e.widget.Default,
    x = w.Style,
    y = w.Color,
    z = w.Prototype,
    A = w.Shape = w.Shape || {},
    B = w.Gradient = w.Gradient || {},
    C = w.Vector = w.Vector || {},
    D = w.Renderer = w.Renderer || {},
    E = w.Editor = w.Editor || {},
    F = w.isTouchable,
    G = w.mixin,
    H = w.getId,
    I = w.labelFont,
    J = w.devicePixelRatio,
    K = w.preventDefault;
    G(y, {
        selectColor: "rgb(58, 152, 251)",
        checkColor: "#fff",
        labelColor: "#000",
        labelSelectColor: "#FFF",
        shadowColor: "rgba(0,0,0,0.5)",
        toolTipLabelColor: "black",
        toolTipBackground: "#FFFFE0",
        scrollBarColor: "rgba(0,0,0,0.35)",
        fadeColor: "rgba(255,255,255,0)",
        noteBackground: "#FFF060",
        shapeBackground: "#FFCB0A",
        shapeBorderColor: "#AE7200",
        gradientColor: "#FFF",
        imageBackground: "#3498DB",
        imageGradientColor: "#D9D9D9",
        iconBackground: "#868686",
        iconGradient: "#D9D9D9",
        lineColor: "#D9D9D9",
        tableHeaderBackground: "#ECF0F1",
        tableHeaderMoveBackground: "rgba(0,0,0,0.3)",
        tableHeaderInsertColor: "#1ABC9C",
        propertyTableBackground: "#ECF0F1"
    }, !0);
    var L = y.selectColor,
    M = y.labelColor,
    N = y.labelSelectColor,
    O = y.shadowColor,
    P = y.toolTipLabelColor,
    Q = y.toolTipBackground,
    R = y.scrollBarColor,
    S = y.fadeColor,
    T = y.noteBackground,
    U = y.shapeBackground,
    V = y.shapeBorderColor,
    W = y.gradientColor,
    X = y.iconBackground,
    Y = (y.iconGradient, y.imageBackground),
    Z = y.imageGradientColor,
    $ = y.lineColor;
    G(w, {
        lineJoin: "round",
        lineCap: "butt",
        imageGradient: "linear.northeast",
        indent: F ? 30 : 20,
        rowHeight: F ? 30 : 20,
        headerHeight: F ? 32 : 22,
        titleHeight: F ? 34 : 24,
        scrollBarColor: R,
        scrollBarSize: 7,
        scrollBarTimeout: 1e3,
        scrollBarMinLength: 20,
        scrollBarActiveSize: F ? 24 : 12,
        toolTipDelay: 800,
        toolTipContinuous: !1,
        toolTipPadding: 5,
        toolTipLabelFont: I,
        toolTipLabelColor: P,
        toolTipBackground: Q,
        toolTipShadowColor: O
    }, !0); {
        var _ = w.define,
        aa = (w.defineProperty, w.defineProperties),
        ba = (w.sortFunc, w.setImage),
        ca = w.getImage,
        da = w.drawImage,
        ea = w.drawNinePatchImage,
        fa = w.drawText,
        ga = w.startAnim,
        ha = w.timeNow,
        ia = (w.emptyFunc, w.emptyFunc, w.mouseScroll),
        ja = (w.animDuration, w.animEasing, w.lineJoin),
        ka = w.lineCap,
        la = w.imageGradient,
        ma = (w.zoomIncrement, w.scrollZoomIncrement, w.pinchZoomIncrement, w.maxZoom, w.minZoom, w.toolTipDelay, w.toolTipContinuous, w.toolTipPadding, w.toolTipLabelFont, w.toolTipLabelColor, w.toolTipBackground, w.toolTipShadowColor, w.scrollBarColor, w.scrollBarSize, w.scrollBarTimeout, w.scrollBarMinLength, w.scrollBarActiveSize, w.closePopup, w.hideToolTip),
        na = w.showToolTip,
        oa = w.callLater,
        pa = w.emptyArray,
        qa = w.emptyRect,
        ra = (w.emptyFunc,
            w.createDiv),
        sa = w.createCanvas,
        ta = w.setCanvas,
        ua = w.setBorder,
        va = w.toHTML,
        wa = w.layout,
        xa = w.getClientPoint,
        ya = w.getPagePoint,
        za = w.appendChild,
        Aa = w.requestFocus,
        Ba = w.removeHTML,
        Ca = w.clearHTML,
        Da = w.getWindowInfo,
        Ea = w.Mat2,
        Fa = w.clone,
        Ga = w.createAnim,
        Ha = w.addAccessor,
        Ia = w.createObject,
        Ja = w.initObject,
        Ka = w.getTextSize,
        La = w.getHitRect,
        Ma = w.getTouchCount,
        Na = w.getPinchDist,
        Oa = w.isNumber,
        Pa = w.isString,
        Qa = w.isBoolean,
        Ra = w.isObject,
        Sa = w.isArray,
        Ta = w.isFunction,
        Ua = w.addArray,
        Va = w.removeArray,
        Wa = w.appendArray,
        Xa = w.toArray,
        Ya = w.toCurvePoints,
        Za = w.getLineOffsetInfo,
        $a = w.getLineCacheInfo,
        _a = w.grow,
        ab = w.getDistance,
        bb = w.positiveRect,
        cb = w.isSameRect,
        db = w.unionPoint,
        eb = w.unionRect,
        fb = w.containsPoint,
        gb = w.containsRect,
        hb = w.intersectsRect,
        ib = w.intersection,
        jb = (w.intersectionLineRect, w.intersectionLineLine, w.getRotationRect),
        kb = w.getBreakableTextSize,
        lb = w.brighter,
        mb = w.darker,
        nb = w.toColorData,
        ob = w.toColorArray,
        pb = w.drawShape,
        qb = w.fillShape,
        rb = w.fillPattern,
        sb = w.fillRect,
        tb = w.drawBorder,
        ub = w.drawArc,
        vb = w.drawRoundRect,
        wb = w.draw3dRect,
        xb = w.draw3dBorder,
        yb = w.drawPoints,
        zb = w.drawBreakableText,
        Ab = w.isDragging,
        Bb = w.startDragging,
        Cb = w.isEmptyObject,
        Db = w.isDoubleClick,
        Eb = w.isLeftButton,
        Fb = w.isCtrlDown,
        Gb = w.isShiftDown,
        Hb = w.isSelectAll,
        Ib = w.isDelete,
        Jb = w.isLeft,
        Kb = w.isUp,
        Lb = w.isRight,
        Mb = w.isDown,
        Nb = w.isSpace,
        Ob = w.isEnter,
        Pb = w.isEsc,
        Qb = w.isMouseEvent,
        Rb = w.isIE,
        Sb = w.checkTouch,
        Tb = w.checkLoadingImageMap,
        Ub = function (a, b, c, d, e, f) {
            var g = a.getContext("2d");
            return g.save(),
            b = b || 0,
            c = c || 0,
            d = d || 1,
            f = f || J,
            Xb(g, b * f, c * f),
            d *= f,
            1 !== d && g.scale(d, d),
            e && (g.beginPath(), g.rect(e.x, e.y, e.width, e.height), g.clip(), g.clearRect(e.x, e.y, e.width, e.height)),
            g
        },
        Vb = function (a, b, c) {
            return b && a.setLineDash ? (a.setLineDash(b), c && (a.lineDashOffset = c), a) : void 0
        },
        Wb = function (a, b) {
            b && a.setLineDash && (a.setLineDash(pa), a.lineDashOffset = 0)
        },
        Xb = function (a, b, c) {
            a.translate(b, c)
        },
        Yb = function (a, b) {
            a.rotate(b)
        },
        ea = function (a, b, d, e, f, g, h, i, j, k, l) {
            if (Pa(b) && (b = ca(b)), b != c && f && g) {
                a.beginPath();
                var m = null != k ? k : 1,
                n = null != i ? i : 1,
                o = null != h ? h : 1,
                p = null != j ? j : 1,
                q = 0,
                r = 0,
                s = ac(b),
                t = bc(b),
                u = d,
                v = e,
                w = [{
                        x: q,
                        y: r
                    }, {
                        x: q + m,
                        y: r + o
                    }, {
                        x: q + s - n,
                        y: r + t - p
                    }, {
                        x: q + s,
                        y: r + t
                    }
                ];
                l == c && (l = 2);
                for (var x = [{
                            x: u,
                            y: v
                        }, {
                            x: u + m / l,
                            y: v + o / l
                        }, {
                            x: u + f - n / l,
                            y: v + g - p / l
                        }, {
                            x: u + f,
                            y: v + g
                        }
                    ], d = 0; 3 > d; ++d)
                    for (var y = d + 1, e = 0; 3 > e; ++e) {
                        var z = e + 1,
                        A = w[d].x,
                        B = w[e].y,
                        C = w[y].x,
                        D = w[z].y,
                        E = x[d].x,
                        F = x[e].y,
                        G = x[y].x,
                        H = x[z].y;
                        a.drawImage(b, A, B, C - A, D - B, E, F, G - E, H - F)
                    }
            }
        },
        da = function (a, b, d, e, f, g, i, j, k, l, n) {
            if (Pa(b) && (b = ca(b, l)), b != c) {
                var o,
                p = ac(b, j, k),
                q = bc(b, j, k);
                if ("uniform" === d ? (o = m(g / p, i / q), p *= o, q *= o, e += h((g - p) / 2), f += h((i - q) / 2), g = p, i = q) : ("centerUniform" === d || d == c) && ((p > g || q > i) && (o = m(g / p, i / q), p *= o, q *= o), e += h((g - p) / 2), f += h((i - q) / 2), g = p, i = q), "center" === d) {
                    var r = n !== !1 && (p > g || q > i);
                    r && (a.save(), a.beginPath(), a.rect(e, f, g, i), a.clip()),
                    jc(a, b, h(e + g / 2 - p / 2), h(f + i / 2 - q / 2), p, q, j, k, l),
                    r && a.restore()
                } else
                    jc(a, b, e, f, g, i, j, k, l)
            }
        },
        pb = function (a, b, c, d, e, f) {
            a.beginPath(),
            A[b](a, c.x, c.y, c.width, c.height, d, e, f)
        },
        qb = function (a, b, c, d, e, f, g) {
            var h = B[c];
            a.fillStyle = h ? h(a, b, d || W, e.x, e.y, e.width, e.height, f, g) : b
        },
        rb = function (a, b) {
            a.fillStyle = a.createPattern(b, "repeat")
        },
        sb = function (a, b, c, d, e, f) {
            f && (a.fillStyle = f),
            a.beginPath(),
            a.rect(b, c, d, e),
            a.fill()
        },
        tb = function (a, b, c, d, e, f, g, i) {
            b && (i || (i = {
                        left: 1,
                        right: 1,
                        top: 1,
                        bottom: 1
                    }), c = h(c), d = h(d), g || (g = 1), a.fillStyle = b, a.beginPath(), i.left && a.rect(c, d, g, f), i.top && a.rect(c, d, e, g), i.bottom && a.rect(c, d + f - g, e, g), i.right && a.rect(c + e - g, d, g, f), a.fill())
        },
        xb = function (a, b, c, d) {
            var e,
            f,
            g,
            h = nb(b),
            i = d,
            k = h[0],
            l = h[1],
            n = h[2];
            if (c) {
                var o = nb(c);
                e = o[0] - k,
                f = o[1] - l,
                g = o[2] - n
            } else
                e = 255 - k, f = 255 - l, g = 255 - n;
            for (var p = d > 10 ? 1 : .5; (d -= p) > 0; ) {
                var q = 1 - d / i,
                r = k + e * q,
                s = l + f * q,
                t = n + g * q;
                r = m(j(r), 255),
                s = m(j(s), 255),
                t = m(j(t), 255),
                a.strokeStyle = "rgb(" + r + "," + s + "," + t + ")",
                a.lineWidth = d,
                a.stroke()
            }
        },
        ub = function (a, b, c, d, e, f, g, h) {
            var i,
            k,
            l,
            m,
            r,
            s,
            t,
            u,
            v,
            w,
            x;
            if (n(e) > 2 * q && (e = 2 * q), r = j(n(e) / (q / 4)), i = e / r, k = -i, l = -d, r > 0) {
                s = b + o(d) * f,
                t = c + p(-d) * g,
                h ? a.lineTo(s, t) : a.moveTo(s, t);
                for (var y = 0; r > y; y++)
                    l += k, m = l - k / 2, u = b + o(l) * f, v = c + p(l) * g, w = b + o(m) * (f / o(k / 2)), x = c + p(m) * (g / o(k / 2)), a.quadraticCurveTo(w, x, u, v)
            }
        },
        vb = function (a, b, d, e, f, g, h, i, j) {
            h == c && (h = g),
            i == c && (i = g),
            j == c && (j = g);
            var k = b + e,
            l = d + f,
            m = f > e ? 2 * e : 2 * f;
            g = m > g ? g : m,
            h = m > h ? h : m,
            i = m > i ? i : m,
            j = m > j ? j : m;
            var n = .29 * j,
            o = .58 * j;
            a.moveTo(k, l - j),
            a.quadraticCurveTo(k, l - o, k - n, l - n),
            a.quadraticCurveTo(k - o, l, k - j, l),
            n = .29 * i,
            o = .58 * i,
            a.lineTo(b + i, l),
            a.quadraticCurveTo(b + o, l, b + n, l - n),
            a.quadraticCurveTo(b, l - o, b, l - i),
            n = .29 * g,
            o = .58 * g,
            a.lineTo(b, d + g),
            a.quadraticCurveTo(b, d + o, b + n, d + n),
            a.quadraticCurveTo(b + o, d, b + g, d),
            n = .29 * h,
            o = .58 * h,
            a.lineTo(k - h, d),
            a.quadraticCurveTo(k - o, d, k - n, d + n),
            a.quadraticCurveTo(k, d + o, k, d + h),
            a.lineTo(k, l - j)
        },
        wb = function (a, b, c, d) {
            var e = d.x,
            f = d.y,
            g = d.width,
            h = d.height;
            if (!(!b || !c || 0 >= g || 0 >= h)) {
                var i,
                j = lb(b),
                k = mb(b),
                l = c > 0;
                1 === c || -1 === c ? (a.fillStyle = l ? j : k, a.beginPath(), a.rect(e, f, 1, h), a.rect(e, f, g, 1), a.fill(), a.fillStyle = l ? k : j, a.beginPath(), a.rect(e, f + h - 1, g, 1), a.rect(e + g - 1, f, 1, h), a.fill()) : (c = m(n(c), m(g / 2, h / 2)), i = a.createLinearGradient(e, f, e + c, f), i.addColorStop(0, l ? j : k), i.addColorStop(1, b), a.fillStyle = i, a.beginPath(), a.moveTo(e, f), a.lineTo(e + c, f + c), a.lineTo(e + c, f + h - c), a.lineTo(e, f + h), a.lineTo(e, f), a.fill(), i = a.createLinearGradient(e, f, e, f + c), i.addColorStop(0, l ? j : k), i.addColorStop(1, b), a.fillStyle = i, a.beginPath(), a.moveTo(e, f), a.lineTo(e + c, f + c), a.lineTo(e + g - c, f + c), a.lineTo(e + g, f), a.lineTo(e, f), a.fill(), i = a.createLinearGradient(e, f + h, e, f + h - c), i.addColorStop(0, l ? k : j), i.addColorStop(1, b), a.fillStyle = i, a.beginPath(), a.moveTo(e, f + h), a.lineTo(e + c, f + h - c), a.lineTo(e + g - c, f + h - c), a.lineTo(e + g, f + h), a.lineTo(e, f + h), a.fill(), i = a.createLinearGradient(e + g, f, e + g - c, f), i.addColorStop(0, l ? k : j), i.addColorStop(1, b), a.fillStyle = i, a.beginPath(), a.moveTo(e + g, f), a.lineTo(e + g - c, f + c), a.lineTo(e + g - c, f + h - c), a.lineTo(e + g, f + h), a.lineTo(e + g, f), a.fill())
            }
        },
        yb = function (a, b, c, d) {
            if (a.beginPath(), c && c.length) {
                for (var e, f, g, h, i = 0, j = 0, k = c.length; k > j; j++)
                    e = c[j], 1 === e ? (f = b[i++], a.moveTo(f.x, f.y)) : 2 === e ? (f = b[i++], a.lineTo(f.x, f.y)) : 3 === e ? (f = b[i++], g = b[i++], a.quadraticCurveTo(f.x, f.y, g.x, g.y)) : 4 === e ? (f = b[i++], g = b[i++], h = b[i++], a.bezierCurveTo(f.x, f.y, g.x, g.y, h.x, h.y)) : 5 === e && a.closePath();
                d && 5 !== e && a.closePath()
            } else {
                var l,
                m,
                n,
                o = b.length;
                if (o > 0) {
                    for (l = b[0], a.moveTo(l.x, l.y), m = 1; o > m; m++)
                        n = b[m], a.lineTo(n.x, n.y);
                    d && a.closePath()
                }
            }
        },
        Zb = w.CompStack = [],
        $b = /^style@/,
        _b = /^attr@/,
        ac = function (a, b, c) {
            return Pa(a) && (a = ca(a)),
            a ? cc(a.width, b, c) : 0
        },
        bc = function (a, b, c) {
            return Pa(a) && (a = ca(a)),
            a ? cc(a.height, b, c) : 0
        },
        cc = function (a, b, e) {
            if (!a || !a.func)
                return Fa(a);
            var f,
            g = a.func,
            h = a.value;
            return Ta(g) ? f = g(b, e) : b ? $b.test(g) ? f = b.s(g.slice(6)) : _b.test(g) ? f = b.a(g.slice(5)) : (f = b[g], Ta(f) && (f = f(e))) : f = h,
            h !== d && f == c ? h : f
        },
        dc = function (a, b, c, d) {
            var e = cc(a, b, c);
            if (d && e) {
                var f = ob(d);
                return e = nb(e),
                "rgba(" + i(e[0] * f[0]) + "," + i(e[1] * f[1]) + "," + i(e[2] * f[2]) + "," + e[3] + ")"
            }
            return e
        },
        ec = function (a, b, c, d) {
            var e = cc(a.rect, c, d);
            if (e) {
                var f = e.length,
                g = cc(a.relative, c, d),
                h = b.width,
                i = b.height;
                if (4 === f)
                    e = {
                        x: e[0],
                        y: e[1],
                        width: e[2],
                        height: e[3]
                    },
                g && (e.x *= h, e.y *= i, e.width *= h, e.height *= i);
                else if (3 === f) {
                    var j = e[0];
                    e = {
                        width: e[1],
                        height: e[2]
                    },
                    g && (e.width *= h, e.height *= i),
                    j = Nc(j, b, e),
                    e.x = j.x - e.width / 2,
                    e.y = j.y - e.height / 2
                }
                var k = cc(a.offsetX, c, d);
                k && (e.x += k),
                k = cc(a.offsetY, c, d),
                k && (e.y += k);
                var l = cc(a.anchorPosition, c, d);
                if (l)
                    e.anchorPosition = {
                        x: l[0] * (g ? b.width : 1),
                        y: l[1] * (g ? b.height : 1)
                    };
                else {
                    var m = cc(a.anchor, c, d),
                    n = m ? m[0] : .5,
                    o = m ? m[1] : .5;
                    e.anchorPosition = {
                        x: e.x + e.width * n,
                        y: e.y + e.height * o
                    }
                }
            }
            return e
        },
        fc = function (a, b, d, e, f) {
            var g = cc(b.position, e, f);
            if (g) {
                var h = g[0],
                i = g[1],
                j = cc(b.relative, e, f),
                k = cc(b.width, e, f),
                l = cc(b.height, e, f),
                m = cc(b.anchor, e, f),
                n = m ? m[0] : .5,
                o = m ? m[1] : .5;
                if (j && (h *= d.width, i *= d.height, Oa(k) && (k *= d.width), Oa(l) && (l *= d.height)), k == c || l == c) {
                    if ("text" === a) {
                        var p = Ka(cc(b.font, e, f), cc(b.text, e, f));
                        k == c && (k = p.width),
                        l == c && (l = p.height)
                    } else if ("image" === a) {
                        var q = ca(cc(b.name, e, f));
                        k == c && (k = ac(q, e, f)),
                        l == c && (l = bc(q, e, f))
                    }
                    k == c && (k = 0),
                    l == c && (l = 0)
                }
                var r = cc(b.offsetX, e, f);
                r && (h += r),
                r = cc(b.offsetY, e, f),
                r && (i += r);
                var s = {
                    x: -k * n + h,
                    y: -l * o + i,
                    width: k,
                    height: l
                },
                t = cc(b.anchorPosition, e, f);
                return s.anchorPosition = t ? {
                    x: t[0] * (j ? d.width : 1),
                    y: t[1] * (j ? d.height : 1)
                }
                 : {
                    x: h,
                    y: i
                },
                s
            }
            return c
        },
        gc = function (a, b, d, e, f) {
            if ("shape" === a) {
                var g = cc(b.points, e, f);
                if (g) {
                    if (!g._rect_) {
                        for (var h = cc(b.relative, e, f), i = ec(b, d, e, f), j = [], k = g.length, l = 0; k > l; l += 2) {
                            var m = g[l],
                            n = g[l + 1];
                            h && (m *= d.width, n *= d.height),
                            i && (m = m * i.width / d.width + i.x, n = n * i.height / d.height + i.y),
                            j.push({
                                x: m,
                                y: n
                            })
                        }
                        var o = db(j);
                        if (o) {
                            if (i)
                                o.anchorPosition = i.anchorPosition;
                            else {
                                var p = cc(b.anchorPosition, e, f);
                                if (p)
                                    o.anchorPosition = {
                                        x: p[0] * (h ? d.width : 1),
                                        y: p[1] * (h ? d.height : 1)
                                    };
                                else {
                                    var q = cc(b.anchor, e, f),
                                    r = q ? q[0] : .5,
                                    s = q ? q[1] : .5;
                                    o.anchorPosition = {
                                        x: o.x + o.width * r,
                                        y: o.y + o.height * s
                                    }
                                }
                            }
                            return o.points = j,
                            g._rect_ = o
                        }
                    }
                    return g._rect_
                }
            }
            return c
        },
        hc = function (a, b, c, d, e, f, g) {
            var h = dc(d.background, e, f, g),
            i = ca(cc(d.repeatImage, e, f), g),
            j = cc(d.info, e, f);
            i ? rb(a, i) : h && qb(a, h, cc(d.gradient, e, f), dc(d.gradientColor, e, f, g), c),
            pb(a, b, c, j, e, f),
            (i || h) && a.fill();
            var k = cc(d.borderWidth, e, f);
            if (k) {
                var l = dc(d.borderColor, e, f, g),
                m = cc(d.borderDashPattern, e, f);
                Vb(a, m, cc(d.borderDashOffset, e, f)),
                a.lineWidth = k,
                a.strokeStyle = l,
                a.stroke(),
                cc(d.borderGradient, e, f) && xb(a, l, dc(d.borderGradientColor, e, f, g), k),
                Wb(a, m)
            }
            if (k = cc(d.border2Width, e, f)) {
                var l = dc(d.border2Color, e, f, g),
                m = cc(d.border2DashPattern, e, f);
                Vb(a, m, cc(d.border2DashOffset, e, f)),
                a.lineWidth = k,
                a.strokeStyle = l,
                a.stroke(),
                cc(d.border2Gradient, e, f) && xb(a, l, dc(d.border2GradientColor, e, f, g), k),
                Wb(a, m)
            }
            "rect" === b && j && wb(a, h, j.depth, c)
        },
        ic = function (a, b, d, e, f, g) {
            var h = cc(b.alpha, d, e),
            i = cc(b.join, d, e) || ja,
            j = cc(b.cap, d, e) || ka,
            k = cc(b.shadow, d, e),
            l = cc(b.rotation, d, e),
            m = cc(b.scale, d, e),
            n = cc(b.type, d, e),
            o = cc(b.clip, d, e);
            Oa(m) && (m = [m, m]);
            var p = l || o;
            if (m && (p = p || 1 !== m[0] || 1 !== m[1]), h != c) {
                var q = a.globalAlpha;
                a.globalAlpha *= h
            }
            var r = a.lineJoin,
            s = a.lineCap;
            if (a.lineJoin = i, a.lineCap = j, k) {
                var t = a.shadowOffsetX,
                u = a.shadowOffsetY,
                v = a.shadowBlur,
                w = a.shadowColor,
                x = cc(b.shadowOffsetX, d, e),
                y = cc(b.shadowOffsetY, d, e),
                z = cc(b.shadowBlur, d, e),
                B = cc(b.shadowColor, d, e);
                a.shadowOffsetX = x == c ? 3 : x,
                a.shadowOffsetY = y == c ? 3 : y,
                a.shadowBlur = z == c ? 6 : z,
                a.shadowColor = B || O
            }
            var D = gc(n, b, g, d, e) || ec(b, g, d, e) || fc(n, b, g, d, e);
            if (D) {
                if (p) {
                    var E = D.anchorPosition;
                    a.save(),
                    Xb(a, E.x, E.y),
                    l && Yb(a, l),
                    m && a.scale(m[0], m[1]),
                    Xb(a, -E.x, -E.y),
                    o && (Ta(o) ? o(a, D, d, e, b) : (a.beginPath(), a.rect(D.x, D.y, D.width, D.height), a.clip()))
                }
                var F = b.bottomShape;
                if (F) {
                    var G = D;
                    F.padding && (G = Fa(G), _a(G, F.padding)),
                    hc(a, cc(F.type, d, e), G, F, d, e, f)
                }
                Ta(n) ? n(a, D, b, d, e, f) : C[n] ? C[n](a, D, b, d, e, f) : A[n] && hc(a, n, D, b, d, e, f);
                var H = b.topShape;
                if (H) {
                    var I = D;
                    H.padding && (I = Fa(I), _a(I, H.padding)),
                    hc(a, cc(H.type, d, e), I, H, d, e, f)
                }
                p && a.restore()
            }
            k && (a.shadowOffsetX = t, a.shadowOffsetY = u, a.shadowBlur = v, a.shadowColor = w),
            a.lineJoin = r,
            a.lineCap = s,
            h != c && (a.globalAlpha = q)
        },
        jc = function (a, b, d, e, f, g, h, i, j) {
            if (!(!b || 0 >= f || 0 >= g)) {
                if (b.tagName)
                    return void a.drawImage(b, d, e, f, g);
                if (cc(b.visible, h, i) !== !1) {
                    j || (j = cc(b.blendColor, h, i));
                    var k = ac(b, h, i),
                    l = bc(b, h, i),
                    m = {
                        x: 0,
                        y: 0,
                        width: k,
                        height: l
                    },
                    n = cc(b.clip, h, i),
                    o = cc(b.alpha, h, i);
                    a.save(),
                    Xb(a, d, e),
                    (k !== f || l !== g) && a.scale(f / k, g / l),
                    n && (Ta(n) ? n(a, m, h, i, b) : (a.beginPath(), a.rect(0, 0, k, l), a.clip())),
                    o != c && (a.globalAlpha *= o),
                    cc(b.comps, h, i).forEach(function (b) {
                        cc(b.visible, h, i) !== !1 && (Zb.splice(0, 0, b), ic(a, b, h, i, j, m), Zb.splice(0, 1))
                    }),
                    a.restore()
                }
            }
        },
        kc = e.widget.TWEEN = function () {
            var b = [];
            return {
                getAll: function () {
                    return b
                },
                removeAll: function () {
                    b = []
                },
                add: function (a) {
                    b.push(a)
                },
                remove: function (a) {
                    var c = b.indexOf(a);
                    -1 !== c && b.splice(c, 1)
                },
                update: function (c) {
                    if (0 === b.length)
                        return !1;
                    var e = 0;
                    for (c = c !== d ? c : "undefined" != typeof a && a.performance !== d && a.performance.now !== d ? a.performance.now() : Date.now(); e < b.length; )
                        b[e].update(c) ? e++ : b.splice(e, 1);
                    return !0
                }
            }
        }
        ();
        e.widget.Tween = function (b) {
            var c = b,
            e = {},
            f = {},
            g = {},
            h = 1e3,
            i = 0,
            j = !1,
            k = !1,
            l = !1,
            m = 0,
            n = null,
            o = kc.Easing.Linear.None,
            p = kc.Interpolation.Linear,
            q = [],
            r = null,
            s = !1,
            t = null,
            u = null,
            v = null;
            for (var w in b)
                e[w] = parseFloat(b[w], 10);
            this.to = function (a, b) {
                return b !== d && (h = b),
                f = a,
                this
            },
            this.start = function (b) {
                kc.add(this),
                k = !0,
                s = !1,
                n = b !== d ? b : "undefined" != typeof a && a.performance !== d && a.performance.now !== d ? a.performance.now() : Date.now(),
                n += m;
                for (var h in f) {
                    if (f[h]instanceof Array) {
                        if (0 === f[h].length)
                            continue;
                        f[h] = [c[h]].concat(f[h])
                    }
                    e[h] = c[h],
                    e[h]instanceof Array == !1 && (e[h] *= 1),
                    g[h] = e[h] || 0
                }
                return this
            },
            this.stop = function () {
                return k ? (kc.remove(this), k = !1, null !== v && v.call(c), this.stopChainedTweens(), this) : this
            },
            this.stopChainedTweens = function () {
                for (var a = 0, b = q.length; b > a; a++)
                    q[a].stop()
            },
            this.delay = function (a) {
                return m = a,
                this
            },
            this.repeat = function (a) {
                return i = a,
                this
            },
            this.yoyo = function (a) {
                return j = a,
                this
            },
            this.easing = function (a) {
                return o = a,
                this
            },
            this.interpolation = function (a) {
                return p = a,
                this
            },
            this.chain = function () {
                return q = arguments,
                this
            },
            this.onStart = function (a) {
                return r = a,
                this
            },
            this.onUpdate = function (a) {
                return t = a,
                this
            },
            this.onComplete = function (a) {
                return u = a,
                this
            },
            this.onStop = function (a) {
                return v = a,
                this
            },
            this.update = function (a) {
                var b;
                if (n > a)
                    return !0;
                s === !1 && (null !== r && r.call(c), s = !0);
                var d = (a - n) / h;
                d = d > 1 ? 1 : d;
                var k = o(d);
                for (b in f) {
                    var v = e[b] || 0,
                    w = f[b];
                    w instanceof Array ? c[b] = p(w, k) : ("string" == typeof w && (w = v + parseFloat(w, 10)), "number" == typeof w && (c[b] = v + (w - v) * k))
                }
                if (null !== t && t.call(c, k), 1 == d) {
                    if (i > 0) {
                        isFinite(i) && i--;
                        for (b in g) {
                            if ("string" == typeof f[b] && (g[b] = g[b] + parseFloat(f[b], 10)), j) {
                                var x = g[b];
                                g[b] = f[b],
                                f[b] = x
                            }
                            e[b] = g[b]
                        }
                        return j && (l = !l),
                        n = a + m,
                        !0
                    }
                    null !== u && u.call(c);
                    for (var y = 0, z = q.length; z > y; y++)
                        q[y].start(a);
                    return !1
                }
                return !0
            }
        }
    }
    kc.Easing = {
        Linear: {
            None: function (a) {
                return a
            }
        },
        Quadratic: {
            In: function (a) {
                return a * a
            },
            Out: function (a) {
                return a * (2 - a)
            },
            InOut: function (a) {
                return (a *= 2) < 1 ? .5 * a * a :  - .5 * (--a * (a - 2) - 1)
            }
        },
        Cubic: {
            In: function (a) {
                return a * a * a
            },
            Out: function (a) {
                return --a * a * a + 1
            },
            InOut: function (a) {
                return (a *= 2) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2)
            }
        },
        Quartic: {
            In: function (a) {
                return a * a * a * a
            },
            Out: function (a) {
                return 1 - --a * a * a * a
            },
            InOut: function (a) {
                return (a *= 2) < 1 ? .5 * a * a * a * a :  - .5 * ((a -= 2) * a * a * a - 2)
            }
        },
        Quintic: {
            In: function (a) {
                return a * a * a * a * a
            },
            Out: function (a) {
                return --a * a * a * a * a + 1
            },
            InOut: function (a) {
                return (a *= 2) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2)
            }
        },
        Sinusoidal: {
            In: function (a) {
                return 1 - Math.cos(a * Math.PI / 2)
            },
            Out: function (a) {
                return Math.sin(a * Math.PI / 2)
            },
            InOut: function (a) {
                return .5 * (1 - Math.cos(Math.PI * a))
            }
        },
        Exponential: {
            In: function (a) {
                return 0 === a ? 0 : Math.pow(1024, a - 1)
            },
            Out: function (a) {
                return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
            },
            InOut: function (a) {
                return 0 === a ? 0 : 1 === a ? 1 : (a *= 2) < 1 ? .5 * Math.pow(1024, a - 1) : .5 * (-Math.pow(2, -10 * (a - 1)) + 2)
            }
        },
        Circular: {
            In: function (a) {
                return 1 - Math.sqrt(1 - a * a)
            },
            Out: function (a) {
                return Math.sqrt(1 - --a * a)
            },
            InOut: function (a) {
                return (a *= 2) < 1 ?  - .5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            }
        },
        Elastic: {
            In: function (a) {
                var b,
                c = .1,
                d = .4;
                return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI),  - (c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / d)))
            },
            Out: function (a) {
                var b,
                c = .1,
                d = .4;
                return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), c * Math.pow(2, -10 * a) * Math.sin(2 * (a - b) * Math.PI / d) + 1)
            },
            InOut: function (a) {
                var b,
                c = .1,
                d = .4;
                return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), (a *= 2) < 1 ?  - .5 * c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / d) : c * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / d) * .5 + 1)
            }
        },
        Back: {
            In: function (a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            Out: function (a) {
                var b = 1.70158;
                return --a * a * ((b + 1) * a + b) + 1
            },
            InOut: function (a) {
                var b = 2.5949095;
                return (a *= 2) < 1 ? .5 * a * a * ((b + 1) * a - b) : .5 * ((a -= 2) * a * ((b + 1) * a + b) + 2)
            }
        },
        Bounce: {
            In: function (a) {
                return 1 - kc.Easing.Bounce.Out(1 - a)
            },
            Out: function (a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            InOut: function (a) {
                return .5 > a ? .5 * kc.Easing.Bounce.In(2 * a) : .5 * kc.Easing.Bounce.Out(2 * a - 1) + .5
            }
        }
    },
    kc.Interpolation = {
        Linear: function (a, b) {
            var c = a.length - 1,
            d = c * b,
            e = Math.floor(d),
            f = kc.Interpolation.Utils.Linear;
            return 0 > b ? f(a[0], a[1], d) : b > 1 ? f(a[c], a[c - 1], c - d) : f(a[e], a[e + 1 > c ? c : e + 1], d - e)
        },
        Bezier: function (a, b) {
            var c,
            d = 0,
            e = a.length - 1,
            f = Math.pow,
            g = kc.Interpolation.Utils.Bernstein;
            for (c = 0; e >= c; c++)
                d += f(1 - b, e - c) * f(b, c) * a[c] * g(e, c);
            return d
        },
        CatmullRom: function (a, b) {
            var c = a.length - 1,
            d = c * b,
            e = Math.floor(d),
            f = kc.Interpolation.Utils.CatmullRom;
            return a[0] === a[c] ? (0 > b && (e = Math.floor(d = c * (1 + b))), f(a[(e - 1 + c) % c], a[e], a[(e + 1) % c], a[(e + 2) % c], d - e)) : 0 > b ? a[0] - (f(a[0], a[0], a[1], a[1], -d) - a[0]) : b > 1 ? a[c] - (f(a[c], a[c], a[c - 1], a[c - 1], d - c) - a[c]) : f(a[e ? e - 1 : 0], a[e], a[e + 1 > c ? c : e + 1], a[e + 2 > c ? c : e + 2], d - e)
        },
        Utils: {
            Linear: function (a, b, c) {
                return (b - a) * c + a
            },
            Bernstein: function (a, b) {
                var c = kc.Interpolation.Utils.Factorial;
                return c(a) / c(b) / c(a - b)
            },
            Factorial: function () {
                var a = [1];
                return function (b) {
                    var c,
                    d = 1;
                    if (a[b])
                        return a[b];
                    for (c = b; c > 1; c--)
                        d *= c;
                    return a[b] = d
                }
            }
            (),
            CatmullRom: function (a, b, c, d, e) {
                var f = .5 * (c - a),
                g = .5 * (d - b),
                h = e * e,
                i = e * h;
                return (2 * (b - c) + f + g) * i + (-3 * (b - c) - 2 * f - g) * h + f * e + b
            }
        }
    };
    var lc = function (a, b) {
        b.push(a),
        a.children.forEach(function (a) {
            lc(a, b)
        })
    },
    mc = function (a) {
        return a == c ? a : parseFloat(a.toFixed(3))
    },
    nc = function (a, b, c, d, e) {
        b && sb(a, c, d, 1, e, b)
    },
    oc = function (a, b, d, e, f, g, h, i, j, k, l, m, n) {
        g || (l = 0);
        var o,
        p = Ka(i, h).width;
        o = "center" === k ? b + (e - p - l) / 2 : "right" === k ? b + e - p - l : b,
        l && da(a, g, c, o, d, l, f, m, n),
        fa(a, h, i, j, o + l, d, p, f, "center")
    },
    pc = function (a, b, c) {
        return b || (b = Dc),
        new w.Class[b[a] || a](c)
    },
    qc = function (a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
            f = e.type,
            g = pc(f);
            c.push(g),
            wc(g, e)
        }
        a.setItems(c)
    },
    rc = function (a, b) {
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
            f = e.type,
            g = pc(f);
            c.push(g),
            wc(g, e)
        }
        a.setItems(c)
    },
    sc = function (a, b) {
        Pa(b) && (b = JSON.parse(b));
        for (var c = 0; c < b.length; c++)
            for (var d = b[c].cells, e = 0; e < d.length; e++) {
                var f = d[e],
                g = f.elementConfig,
                h = g.type,
                i = pc(h);
                f.element = i,
                wc(i, g)
            }
        a.setItems(b)
    },
    tc = function (a, b) {
        Pa(b) && (b = JSON.parse(b));
        for (var c = 0; c < b.length; c++) {
            var d = b[c].elementConfig,
            e = d.type,
            f = pc(e);
            b[c].element = f,
            wc(f, d)
        }
        a.setItems(b)
    },
    uc = tc,
    vc = function (a, b, c) {
        "table" === c ? sc(a, b) : "border" === c ? tc(a, b) : qc(a, b)
    },
    wc = function (a, b) {
        for (var c in b)
            if (["layout", "contextMenu"].indexOf(c) >= 0)
                if ("layout" === c) {
                    var d,
                    e = b.layout;
                    if (Pa(e))
                        d = pc(e, Ec, a);
                    else {
                        d = pc(e.type, Ec, a);
                        for (var f in e)
                            "type" !== f && Mc(d, "property", f, e[f])
                    }
                    a.layout = d
                } else {
                    var g = pc(b[c].type);
                    wc(g, b[c]),
                    Mc(a, "property", c, g)
                }
            else if ("children" === c) {
                var e = b.layout;
                !e || "table" !== e && "table" !== e.type ? !e || "border" !== e && "border" !== e.type ? "tabs" === b.type ? uc(a, b[c]) : "toolbar" === b.type ? rc(a, b[c]) : qc(a, b[c]) : tc(a, b[c]) : sc(a, b[c])
            } else
                Mc(a, "property", c, b[c])
    },
    xc = function (a, c) {
        if (Pa(a) && (a = JSON.parse(a)), c) {
            for (var d, e = b.keys(Ec), f = 0; f < e.length; f++) {
                var g = e[f];
                if (Ec[g] === c.layout.className) {
                    d = g;
                    break
                }
            }
            vc(c, a, d)
        } else {
            var h = a.type,
            c = pc(h);
            wc(c, a)
        }
        return c
    };
    ba("sortDesc", {
        width: 16,
        height: 16,
        comps: [{
                type: "triangle",
                rect: [4, 4, 8, 7],
                background: X,
                rotation: q
            }
        ]
    }),
    ba("sortAsc", {
        width: 16,
        height: 16,
        comps: [{
                type: "triangle",
                rect: [4, 4, 8, 7],
                background: X
            }
        ]
    }),
    ba("expand", {
        width: 16,
        height: 16,
        comps: [{
                type: "triangle",
                rect: [4, 4, 10, 8],
                background: {
                    func: function () {
                        return y.iconBackground
                    }
                },
                rotation: q
            }
        ]
    }),
    ba("collapse", {
        width: 16,
        height: 16,
        comps: [{
                type: "triangle",
                rect: [4, 4, 10, 8],
                background: {
                    func: function () {
                        return y.iconBackground
                    }
                },
                rotation: s
            }
        ]
    }),
    ba("check", {
        width: 16,
        height: 16,
        comps: [{
                type: "rect",
                rect: [1, 1, 14, 14],
                background: {
                    func: function () {
                        return y.selectColor
                    }
                }
            }, {
                type: "border",
                rect: [1, 1, 14, 14],
                borderWidth: 1,
                borderColor: {
                    func: function () {
                        return y.iconBackground
                    }
                }
            }, {
                type: "shape",
                points: [13, 3, 7, 12, 4, 8],
                borderWidth: 2,
                borderColor: {
                    func: function () {
                        return y.checkColor
                    }
                }
            }
        ]
    }),
    ba("uncheck", {
        width: 16,
        height: 16,
        comps: [{
                type: "border",
                rect: [1, 1, 14, 14],
                borderWidth: 1,
                borderColor: {
                    func: function () {
                        return y.iconBackground
                    }
                }
            }
        ]
    }),
    ba("radioon", {
        width: 16,
        height: 16,
        comps: [{
                type: "circle",
                rect: [2, 2, 12, 12],
                borderWidth: 1,
                borderColor: X,
                background: "#FFF"
            }, {
                type: "circle",
                rect: [4, 4, 8, 8],
                background: L
            }
        ]
    }),
    ba("radiooff", {
        width: 16,
        height: 16,
        comps: [{
                type: "circle",
                rect: [2, 2, 12, 12],
                borderWidth: 1,
                borderColor: X
            }
        ]
    });
    var yc = {
        translateX: 1,
        sortColumn: 1
    },
    zc = {
        translateX: !0,
        translateY: !0,
        scrollBarMode: !0
    },
    Ac = {
        dataModel: 1,
        sortColumn: 1,
        sortFunc: 1,
        visibleFunc: 1,
        rootData: 1,
        rootVisible: 1
    },
    Bc = {
        sortable: 1,
        sortOrder: 1,
        sortFunc: 1
    },
    Cc = {
        dataModel: 1,
        sortFunc: 1,
        visibleFunc: 1,
        categorizable: 1
    },
    Dc = {
        container: "qc.widget.Container",
        panel: "qc.widget.Panel",
        dialog: "qc.widget.Dialog",
        combobox: "qc.widget.ComboBox",
        slider: "qc.widget.Slider",
        colorchooser: "qc.widget.ColorChooser",
        button: "qc.widget.Button",
        togglebutton: "qc.widget.ToggleButton",
        checkbox: "qc.widget.CheckBox",
        radiobutton: "qc.widget.RadioButton",
        table: "qc.widget.Table",
        list: "qc.widget.List",
        tree: "qc.widget.Tree",
        propertytable: "qc.widget.PropertyTable",
        treetable: "qc.widget.TreeTable",
        graphview: "qc.widget.graph.GraphView",
        label: "qc.widget.Label",
        toolbar: "qc.widget.Toolbar",
        textfield: "qc.widget.TextField",
        textarea: "qc.widget.TextArea",
        tablepane: "qc.widget.TablePane",
        tabs: "qc.widget.Tabs",
        contextmenu: "qc.widget.ContextMenu",
        menu: "qc.widget.Menu",
        "|": "qc.widget.toolbar.Separator",
        separator: "qc.widget.toolbar.Separator",
        buttongroup: "qc.widget.ButtonGroup",
        dropdownlist: "qc.widget.DropDownList",
        dropdownbutton: "qc.widget.DropDownButton"
    },
    Ec = {
        fit: "qc.widget.layout.FitLayout",
        vbox: "qc.widget.layout.VBoxLayout",
        hbox: "qc.widget.layout.HBoxLayout",
        accordion: "qc.widget.layout.AccordionLayout",
        table: "qc.widget.layout.TableLayout",
        border: "qc.widget.layout.BorderLayout"
    },
    Fc = c,
    Gc = c,
    Hc = c,
    Ic = function () {
        Hc && (clearTimeout(Hc.timeout), Hc = c)
    },
    Jc = function () {
        Hc && na(Hc.event, Hc.content)
    },
    Kc = function () {
        return Fc && Fc.parentNode ? !0 : Gc && Gc.parentNode ? !0 : !1
    },
    ma = function () {
        Ba(Fc),
        Ba(Gc),
        Ic()
    },
    na = function (a, b) {
        if (!a || b == c)
            return void ma();
        var d,
        e;
        Fc || (Fc = ra(), Gc = ra(), Fc.className = "qc-widget-tooltip", e = Fc.style, e.cursor = "default", e.whiteSpace = "nowrap", e.color = w.toolTipLabelColor, e.background = w.toolTipBackground, e.font = w.toolTipLabelFont, e.padding = w.toolTipPadding + f, e.boxShadow = "0px 0px 3px " + w.toolTipShadowColor),
        b.html ? (b = b.html, d = Gc, Ba(Fc)) : (d = Fc, Ba(Gc)),
        e = d.style,
        d.innerHTML = b,
        d.parentNode || za(document.body, d);
        var g = ya(a),
        h = Da(),
        i = g.x,
        j = g.y,
        k = Qb(a) ? 12 : 60;
        if (Qb(a)) {
            e.left = i + k + f,
            e.top = j + k + f;
            var l = d.getBoundingClientRect();
            l.left + l.width > h.width && (e.left = i - k - l.width + f),
            l.top + l.height > h.height && (e.top = j - k - l.height + f),
            l.left < 0 && (e.left = i + k + f),
            l.top < 0 && (e.top = j + k + f)
        } else {
            var l = d.getBoundingClientRect();
            e.left = i - l.width / 2 + f,
            e.top = j - l.height - k < h.top ? j + k + f : j - l.height - k + f
        }
        Ic()
    };
    a.addEventListener && (a.addEventListener("mouseout", function (a) {
            var b = a.relatedTarget;
            (!b || Hc && !Hc.view.contains(b)) && (Ic(), ma())
        }, !1), a.addEventListener(ia, function () {
            Ic(),
            ma()
        }, !1));
    var Lc = function (a, b, c) {
        if (a && c) {
            if ("style" === b)
                return a.getStyle(c);
            if ("attr" === b)
                return a.getAttr(c);
            var e = a[c];
            return Ta(e) ? e() : e
        }
        return d
    },
    Mc = function (a, b, c, d) {
        a && c && ("style" === b ? a.s(c, d) : "attr" === b ? a.a(c, d) : Ta(a[c]) ? a[c](d) : a[c] = d)
    },
    Nc = function () {
        var a = {
            1: function (a, b) {
                return {
                    x: a.x - b.width / 2,
                    y: a.y - b.height / 2
                }
            },
            2: function (a, b) {
                return {
                    x: a.x + b.width / 2,
                    y: a.y - b.height / 2
                }
            },
            3: function (a, b) {
                return {
                    x: a.x + a.width / 2,
                    y: a.y - b.height / 2
                }
            },
            4: function (a, b) {
                return {
                    x: a.x + a.width - b.width / 2,
                    y: a.y - b.height / 2
                }
            },
            5: function (a, b) {
                return {
                    x: a.x + a.width + b.width / 2,
                    y: a.y - b.height / 2
                }
            },
            6: function (a) {
                return {
                    x: a.x,
                    y: a.y
                }
            },
            7: function (a) {
                return {
                    x: a.x + a.width / 2,
                    y: a.y
                }
            },
            8: function (a) {
                return {
                    x: a.x + a.width,
                    y: a.y
                }
            },
            9: function (a, b) {
                return {
                    x: a.x - b.width / 2,
                    y: a.y + b.height / 2
                }
            },
            10: function (a, b) {
                return {
                    x: a.x + b.width / 2,
                    y: a.y + b.height / 2
                }
            },
            11: function (a, b) {
                return {
                    x: a.x + a.width / 2,
                    y: a.y + b.height / 2
                }
            },
            12: function (a, b) {
                return {
                    x: a.x - b.width / 2 + a.width,
                    y: a.y + b.height / 2
                }
            },
            13: function (a, b) {
                return {
                    x: a.x + a.width + b.width / 2,
                    y: a.y + b.height / 2
                }
            },
            14: function (a, b) {
                return {
                    x: a.x - b.width / 2,
                    y: a.y + a.height / 2
                }
            },
            15: function (a) {
                return {
                    x: a.x,
                    y: a.y + a.height / 2
                }
            },
            16: function (a, b) {
                return {
                    x: a.x + b.width / 2,
                    y: a.y + a.height / 2
                }
            },
            17: function (a) {
                return {
                    x: a.x + a.width / 2,
                    y: a.y + a.height / 2
                }
            },
            18: function (a, b) {
                return {
                    x: a.x + a.width - b.width / 2,
                    y: a.y + a.height / 2
                }
            },
            19: function (a) {
                return {
                    x: a.x + a.width,
                    y: a.y + a.height / 2
                }
            },
            20: function (a, b) {
                return {
                    x: a.x + a.width + b.width / 2,
                    y: a.y + a.height / 2
                }
            },
            21: function (a, b) {
                return {
                    x: a.x - b.width / 2,
                    y: a.y + a.height - b.height / 2
                }
            },
            22: function (a, b) {
                return {
                    x: a.x + b.width / 2,
                    y: a.y + a.height - b.height / 2
                }
            },
            23: function (a, b) {
                return {
                    x: a.x + a.width / 2,
                    y: a.y + a.height - b.height / 2
                }
            },
            24: function (a, b) {
                return {
                    x: a.x + a.width - b.width / 2,
                    y: a.y + a.height - b.height / 2
                }
            },
            25: function (a, b) {
                return {
                    x: a.x + a.width + b.width / 2,
                    y: a.y + a.height - b.height / 2
                }
            },
            26: function (a) {
                return {
                    x: a.x,
                    y: a.y + a.height
                }
            },
            27: function (a) {
                return {
                    x: a.x + a.width / 2,
                    y: a.y + a.height
                }
            },
            28: function (a) {
                return {
                    x: a.x + a.width,
                    y: a.y + a.height
                }
            },
            29: function (a, b) {
                return {
                    x: a.x - b.width / 2,
                    y: a.y + a.height + b.height / 2
                }
            },
            30: function (a, b) {
                return {
                    x: a.x + b.width / 2,
                    y: a.y + a.height + b.height / 2
                }
            },
            31: function (a, b) {
                return {
                    x: a.x + a.width / 2,
                    y: a.y + a.height + b.height / 2
                }
            },
            32: function (a, b) {
                return {
                    x: a.x + a.width - b.width / 2,
                    y: a.y + a.height + b.height / 2
                }
            },
            33: function (a, b) {
                return {
                    x: a.x + a.width + b.width / 2,
                    y: a.y + a.height + b.height / 2
                }
            },
            34: function (a, b) {
                return {
                    x: a.x,
                    y: a.y - b.height / 2
                }
            },
            35: function (a, b) {
                return {
                    x: a.x + a.width,
                    y: a.y - b.height / 2
                }
            },
            36: function (a, b) {
                return {
                    x: a.x,
                    y: a.y + a.height + b.height / 2
                }
            },
            37: function (a, b) {
                return {
                    x: a.x + a.width,
                    y: a.y + a.height + b.height / 2
                }
            },
            38: function (a, b) {
                return {
                    x: a.x + a.width / 4,
                    y: a.y - b.height / 2
                }
            },
            39: function (a, b) {
                return {
                    x: a.x + 3 * a.width / 4,
                    y: a.y - b.height / 2
                }
            },
            40: function (a) {
                return {
                    x: a.x + a.width / 4,
                    y: a.y
                }
            },
            41: function (a) {
                return {
                    x: a.x + 3 * a.width / 4,
                    y: a.y
                }
            },
            42: function (a, b) {
                return {
                    x: a.x + a.width / 4,
                    y: a.y + b.height / 2
                }
            },
            43: function (a, b) {
                return {
                    x: a.x + 3 * a.width / 4,
                    y: a.y + b.height / 2
                }
            },
            44: function (a, b) {
                return {
                    x: a.x + a.width / 2,
                    y: a.y + a.height / 2 - b.height / 2
                }
            },
            45: function (a) {
                return {
                    x: a.x + a.width / 4,
                    y: a.y + a.height / 2
                }
            },
            46: function (a, b) {
                return {
                    x: a.x + a.width / 2 - b.width / 2,
                    y: a.y + a.height / 2
                }
            },
            47: function (a, b) {
                return {
                    x: a.x + a.width / 2 + b.width / 2,
                    y: a.y + a.height / 2
                }
            },
            48: function (a) {
                return {
                    x: a.x + 3 * a.width / 4,
                    y: a.y + a.height / 2
                }
            },
            49: function (a, b) {
                return {
                    x: a.x + a.width / 2,
                    y: a.y + a.height / 2 + b.height / 2
                }
            },
            50: function (a, b) {
                return {
                    x: a.x + a.width / 4,
                    y: a.y + a.height - b.height / 2
                }
            },
            51: function (a, b) {
                return {
                    x: a.x + 3 * a.width / 4,
                    y: a.y + a.height - b.height / 2
                }
            },
            52: function (a) {
                return {
                    x: a.x + a.width / 4,
                    y: a.y + a.height
                }
            },
            53: function (a) {
                return {
                    x: a.x + 3 * a.width / 4,
                    y: a.y + a.height
                }
            },
            54: function (a, b) {
                return {
                    x: a.x + a.width / 4,
                    y: a.y + a.height + b.height / 2
                }
            },
            55: function (a, b) {
                return {
                    x: a.x + 3 * a.width / 4,
                    y: a.y + a.height + b.height / 2
                }
            }
        };
        return function (b, c, d) {
            return a[b](c, d ? d : qa)
        }
    }
    ();
    z.emitter = function (a) {
        a.on = function (a, b, c, d) {
            var e = this;
            return e._emitter || (e._emitter = new Oc),
            e._emitter.on(a, b, c, d),e
        },
        a.off = function (a, b, c) {
            var d = this;
            return d._emitter && d._emitter.off(a, b, c),d
        },
        a.emit = function (a, b) {
            var c = this;
            // console.log(c, a, b) //dx add
			let hasLogged = false;
			if (!hasLogged) {
				// console.log("显示报错:",a, b, c); //dx add
				hasLogged = true;
			}
            return c._emitter && c._emitter.emit(a, b),c
        },
        a.onPropertyChange = function () {},
        a.epc = function (a, b, c) {
            if (b === c)
                return !1;
            var d = {
                property: a,
                oldValue: b,
                newValue: c,
                source: this
            };
            return this.emit("propertyChange", d),this.onPropertyChange(d),d
        }
    },
    z.bnb = function (a) {
        a.getBodyColor = function (a) {
            return a.s("body.color")
        },
        a.getBorderColor = function (a) {
            return a.s("border.color")
        }
    },
    z.sm = function (a) {
        a.removeSelection = function () {
            var a = this.dataModel;
            Fa(this.selectionModel.selection).forEach(a.remove, a)
        },
        a.selectAll = function () {
            var a = this;
            a.selectionModel.selection = Xa(a.dataModel.datas, a.isVisible, a)
        },
        a.isSelected = function (a) {
            return this.selectionModel.isSelected(a)
        },
        a.isSelectable = function (a) {
            return this.selectionModel.isSelectable(a)
        },
        aa(a, {
            selection: {
                get: function () {
                    return this.selectionModel.selection
                },
                set: function (a) {
                    this.selectionModel.selection = a
                }
            },
            selectionModel: {
                get: function () {
                    return this._selectionModel ? this._selectionModel : this.dataModel.selectionModel
                }
            },
            selectableFunc: {
                get: function () {
                    return this.selectionModel.filterFunc
                },
                set: function (a) {
                    this.selectionModel.filterFunc = a
                }
            },
            selectionModelShared: {
                get: function () {
                    return !this._selectionModel
                },
                set: function (a) {
                    var b = this,
                    d = !b._selectionModel,
                    e = b.handleSelectionChange,
                    f = b.dataModel;
                    d !== a && (b.invalidateSelection && b.invalidateSelection(), a ? (f.selectionModel.on("selectionChange", e, b), b._selectionModel.off("selectionChange", e, b), b._selectionModel.dispose(), b._selectionModel = c) : (f.selectionModel.off("selectionChange", e, b), b._selectionModel = new Rc(f), b._selectionModel.on("selectionChange", e, b)), b.invalidateSelection && b.invalidateSelection(), b.redraw && b.redraw(), b.epc("selectionModelShared", d, a))
                }
            }
        })
    },
    z.painter = function (a) {
        a.addTopPainter = function (a) {
            var b = this;
            b._topPainters || (b._topPainters = []),
            b._topPainters.indexOf(a) < 0 && (b._topPainters.push(a), b.redraw ? b.redraw() : b.iv())
        },
        a.removeTopPainter = function (a) {
            var b = this;
            b._topPainters && (Va(b._topPainters, a), b.redraw ? b.redraw() : b.iv())
        },
        a.addBottomPainter = function (a) {
            var b = this;
            b._bottomPainters || (b._bottomPainters = []),
            b._bottomPainters.indexOf(a) < 0 && (b._bottomPainters.push(a), b.redraw ? b.redraw() : b.iv())
        },
        a.removeBottomPainter = function (a) {
            var b = this;
            b._bottomPainters && (Va(b._bottomPainters, a), b.redraw ? b.redraw() : b.iv())
        },
        a.drawBottomPainters = function (a, b) {
            var c = this;
            c._bottomPainters && c._bottomPainters.forEach(function (d) {
                d.draw ? d.draw(a, b) : d.call(c, a, b)
            })
        },
        a.drawTopPainters = function (a, b) {
            var c = this;
            c._topPainters && c._topPainters.forEach(function (d) {
                d.draw ? d.draw(a, b) : d.call(c, a, b)
            })
        }
    },
    z.toolTip = function (a) {
        Ha(a, "toolTipDelay"),
        Ha(a, "toolTipContinuous"),
        a._toolTipDelay = w.toolTipDelay,
        a._toolTipContinuous = w.toolTipContinuous,
        a.enableToolTip = function () {
            var a = this;
            a._handleToolTip || (a._handleToolTip = function (b) {
                var d = b.clientX,
                e = b.clientY,
                f = a._lastToolTipClientX || 0,
                g = a._lastToolTipClientY || 0,
                h = w.getDistance({
                    x: d,
                    y: e
                }, {
                    x: f,
                    y: g
                });
                if (!(2 > h)) {
                    var i = a.getToolTipAt(b);
                    i != c ? a.toolTipContinuous && Kc() ? na(b, i) : (ma(), Hc = {
                            timeout: v(Jc, a.toolTipDelay),
                            event: b,
                            content: i,
                            view: a.view
                        }) : ma(),
                    a._lastToolTipClientX = d,
                    a._lastToolTipClientY = e
                }
            }, a.addEventListener("mousemove", a._handleToolTip, !1))
        },
        a.disableToolTip = function () {
            var a = this;
            a._handleToolTip && (a.removeEventListener("mousemove", a._handleToolTip, !1), delete a._handleToolTip)
        },
        a.getToolTipAt = function (a) {
            var b = this;
            if (b.getDataAt) {
                var c = b.getDataAt(a);
                return c ? c.toolTip : d
            }
            return d
        }
    },
    z.scrollBar = function (a) {
        Ha(a, "autoScrollSize"),
        Ha(a, "scrollBarColor"),
        Ha(a, "scrollBarSize"),
        Ha(a, "scrollBarTimeout"),
        Ha(a, "scrollBarMinLength"),
        Ha(a, "scrollBarActiveSize"),
        a._autoScrollSize = 16,
        a._scrollBarColor = w.scrollBarColor,
        a._scrollBarSize = w.scrollBarSize,
        a._scrollBarTimeout = w.scrollBarTimeout,
        a._scrollBarMinLength = w.scrollBarMinLength,
        a._scrollBarActiveSize = w.scrollBarActiveSize,
        a._viewRect = qa,
        a._scrollHeight = 0,
        a._scrollWidth = 0,
        a._translateX = 0,
        a._translateY = 0,
        a._scrollBarMode = "off",
        a.showScrollBar = function () {
            this.showVScrollBar(),
            this.showHScrollBar()
        },
        a.validateScrollBar = function () {
            this.validateVScrollBar(),
            this.validateHScrollBar()
        },
        a.autoScroll = function (a, b) {
            var c = this,
            d = c._autoScrollSize,
            e = d / (c._zoom || 1),
            f = d / 4,
            g = c._viewRect,
            h = c.lp(a),
            i = {
                x: c.translateX,
                y: c.translateY
            };
            return d > 0 && (h.x - g.x < e ? c.translate(f, 0) : g.x + g.width - h.x < e && c.translate(-f, 0), h.y - g.y < e ? c.translate(0, f) : g.y + g.height - h.y < e && c.translate(0, -f)),
            i.x = c.translateX - i.x,
            i.y = c.translateY - i.y,
            b && (b.x += i.x, b.y += i.y),
            i
        },
        a.isCloseToHScrollBar = function (a) {
            var b = this,
            c = b._viewRect,
            d = b._zoom || 1;
            return b.hScrollable && (c.y + c.height - b.lp(a).y) * d < b.scrollBarActiveSize
        },
        a.isCloseToVScrollBar = function (a) {
            var b = this,
            c = b._viewRect,
            d = b._zoom || 1;
            return b.vScrollable && (c.x + c.width - b.lp(a).x) * d < b.scrollBarActiveSize
        },
        a.showVScrollBar = function () {
            var a = this;
            a.vScrollable && "on" !== a._scrollBarMode && (a._vScrollBarTimer || (v(function () {
                        a.handleVScrollBarTimeout()
                    }, a.scrollBarTimeout), a.iv()), a._vScrollBarTimer = new Date)
        },
        a.handleVScrollBarTimeout = function () {
            var a = this;
            if (a._vScrollBarTimer) {
                var b = new Date;
                b.getTime() - a._vScrollBarTimer.getTime() >= a.scrollBarTimeout ? (delete a._vScrollBarTimer, a.iv()) : v(function () {
                    a.handleVScrollBarTimeout()
                }, a.scrollBarTimeout)
            }
        },
        a.validateVScrollBar = function () {
            var a = this,
            b = a._vScrollBar;
            if (a._scrollBarDiv) {
                if ("auto" === a._scrollBarMode && !a._vScrollBarTimer)
                    return void(b.style.visibility = "hidden");
                var c = a._zoom || 1,
                d = a.scrollBarSize,
                e = a.scrollBarMinLength,
                g = a.viewRect,
                h = a.scrollRect,
                i = g.height * c,
                j = h.height * c,
                k = g.width * c - d - 2,
                l = i * ((g.y - h.y) * c / j),
                m = i * (i / j),
                n = b.style;
                j > i ? (e > m && (l = l + m / 2 - e / 2, 0 > l && (l = 0), l + e > i && (l = i - e), m = e), wa(b, k, l, d, m), n.visibility = "visible", n.background = a.scrollBarColor, n.borderRadius = d / 2 + f) : n.visibility = "hidden"
            }
        },
        a.showHScrollBar = function () {
            var a = this;
            a.hScrollable && "on" !== a._scrollBarMode && (a._hScrollBarTimer || (v(function () {
                        a.handleHScrollBarTimeout()
                    }, a.scrollBarTimeout), a.iv()), a._hScrollBarTimer = new Date)
        },
        a.handleHScrollBarTimeout = function () {
            var a = this;
            if (a._hScrollBarTimer) {
                var b = new Date;
                b.getTime() - a._hScrollBarTimer.getTime() >= a.scrollBarTimeout ? (delete a._hScrollBarTimer, a.iv()) : v(function () {
                    a.handleHScrollBarTimeout()
                }, a.scrollBarTimeout)
            }
        },
        a.validateHScrollBar = function () {
            var a = this,
            b = a._hScrollBar;

            if (a._scrollBarDiv) {
                if ("auto" === a._scrollBarMode && !a._hScrollBarTimer)
                    return void(b.style.visibility = "hidden");
                var c = a._zoom || 1,
                d = a.scrollBarSize,
                e = a.scrollBarMinLength,
                g = a.viewRect,
                h = a.scrollRect,
                i = g.width * c,
                j = h.width * c,
                k = g.height * c - d - 2,
                l = i * ((g.x - h.x) * c / j),
                m = i * (i / j),
                n = b.style;
                j > i ? (e > m && (l = l + m / 2 - e / 2, 0 > l && (l = 0), l + e > i && (l = i - e), m = e), wa(b, l, k, m, d), n.visibility = "visible", n.background = a.scrollBarColor, n.borderRadius = d / 2 + f) : n.visibility = "hidden"
            }
        },
        a.setTranslate = function (a, b, c) {
            var d = this;
            if (c = Ga(c)) {
                d._translateAnim && d._translateAnim.stop(!0);
                var e = d.translateX,
                f = d.translateY;
                c.action = function (c) {
                    d.setTranslate(e + (a - e) * c, f + (b - f) * c)
                },
                c.innerFunc = function () {
                    delete d._translating,
                    delete d._translateAnim
                },
                d._translating = !0,
                d._translateAnim = ga(c)
            } else
                d.translateX = a, d.translateY = b
        },
        a.adjustTranslateX = function (a) {
            var b = this.clientWidth - this._scrollWidth;
            return b > a && (a = b),
            a > 0 ? 0 : h(a)
        },
        a.adjustTranslateY = function (a) {
            var b = this.clientHeight - this._scrollHeight;
            return b > a && (a = b),
            a > 0 ? 0 : h(a)
        },
        a.translate = function (a, b, c) {
            this.setTranslate(this.translateX + a, this.translateY + b, c)
        },
        aa(a, {
            scrollBarMode: {
                get: function () {
                    return this._scrollBarMode
                },
                set: function (a) {
                    var b = this,
                    c = b._scrollBarMode;
                    c !== a && (b._scrollBarMode = a, "off" === a ? (Ba(b._scrollBarDiv), delete b._scrollBarDiv, delete b._vScrollBar, delete b._hScrollBar) : b._scrollBarDiv || (b._scrollBarDiv = ra(!1, b._interactionDiv), b._vScrollBar = ra(!1, b._scrollBarDiv), b._hScrollBar = ra(!1, b._scrollBarDiv)), this.epc("scrollBarMode", c, a))
                }
            },
            translateX: {
                get: function () {
                    return this._translateX
                },
                set: function (a) {
                    var b = this,
                    c = b._translateX;
                    a = b.adjustTranslateX(a),
                    b._translateX = a,
                    b.epc("translateX", c, a)
                }
            },
            translateY: {
                get: function () {
                    return this._translateY
                },
                set: function (a) {
                    var b = this,
                    c = b._translateY;
                    a = b.adjustTranslateY(a),
                    b._translateY = a,
                    b.epc("translateY", c, a)
                }
            },
            viewRect: {
                get: function () {
                    return this._viewRect
                }
            },
            scrollRect: {
                get: function () {
                    var a = this,
                    b = a._viewRect;
                    return a.contentRect ? eb(a.contentRect, b) : {
                        x: 0,
                        y: 0,
                        width: l(b.width, a._scrollWidth),
                        height: l(b.height, a._scrollHeight)
                    }
                }
            },
            vScrollable: {
                get: function () {
                    return "off" !== this._scrollBarMode && this._viewRect.height < this.scrollRect.height
                }
            },
            hScrollable: {
                get: function () {
                    return "off" !== this._scrollBarMode && this._viewRect.width < this.scrollRect.width
                }
            }
        })
    },
    z.element = function (a) {
        a.addElement = function (a, b, c, d, e) {
            if (a) {
                var f = this,
                g = f._elements,
                h = ra(!0);
                f._columnLineVisible && (d -= 1),
                f._rowLineVisible && (e -= 1),
                0 >= d || 0 >= e || (f._elements || (g = f._elements = []), wa(h, f.translateX + b, f.translateY + c, d, e), za(h, a), za(f._contentDiv, h), a.onAdd && a.onAdd(h), g.push(h))
            }
        },
        a.removeElements = function () {
            this._elements && (this._elements.forEach(function (a) {
                    Ba(a)
                }), this._elements.length = 0)
        }
    },
    z.property = function (a) {
        Ha(a, "editable"),
        Ha(a, "batchEditable"),
        a._editable = !0,
        a._batchEditable = !1,
        a.getValue = function (a, b) {
            return b.getValue(a, this)
        },
        a.setValue = function (a, b, c) {
            var d = this;
            d._batchEditable && b._batchEditable && d.isSelected(a) ? d.selectionModel.forEach(function (a) {
                b.setValue(a, c, d)
            }) : b.setValue(a, c, d),
            d.emit("valueChange", {
                data: a,
                property: b,
                value: c
            })
        },
        a.getRenderer = function (a, b) {
            var c = b.renderer;
            if (!c) {
                var d = b.rendererClass;
                if (!d) {
                    var e = b.valueType;
                    d = D[e],
                    d || (d = _c)
                }
                c = Ia(d),
                b.renderer = c
            }
            return c
        },
        a.getEditor = function (a, b) {
            var c = b.editor;
            if (!c) {
                var d = b.editorClass;
                if (!d) {
                    var e = b.valueType;
                    d = E[e],
                    d || (d = Tc)
                }
                c = Ia(d),
                b.editor = c
            }
            return c
        },
        a.isCellRenderable = function (a, b) {
            var c = this._currentEditor;
            return c && c.property === b && c.data === a ? !1 : !0
        },
        a.isCellEditable = function (a, b) {
            return b.editable && this.editable
        },
        a.drawCell = function (a, b, c, d, e, f, g) {
            var h = this;
            if (f && h.isCellRenderable(b, c)) {
                a.save(),
                a.beginPath(),
                a.rect(d, e, f, g),
                a.clip();
                var i = h.getRenderer(b, c);
                if (i) {
                    i.table = h,
                    i.property = c,
                    i.data = b;
                    var j = h.getValue(b, c),
                    k = i.draw(a, j, d, e, f, g);
                    k && h.addElement(k, d, e, f, g)
                }
                a.restore()
            }
        },
        a.endEditing = function () {
            var a = this,
            b = a._currentEditor;
            if (b) {
                try {
                    b.endEditing(),
                    this.setValue(b.data, b.property, b.getEditorValue())
                } catch (c) {
                    console.log(c)
                }
                delete a._currentEditor,
                Ba(va(b.getView())),
                a.iv()
            }
        },
        a.cancelEditing = function () {
            var a = this,
            b = a._currentEditor;
            b && (b.cancelEditing(), delete a._currentEditor, Ba(va(b.getView())), a.iv())
        },
        a.beginEditing = function (a, b, c, d, e, f) {
            var g = this;
            g.endEditing();
            var h = g.getEditor(a, b);
            if (h) {
                h.table = g,
                h.data = a,
                h.property = b,
                h.event = d,
                h.point = e,
                h.rect = f;
                var i = g.getValue(a, b),
                j = h.getView();
                h.setValue(i),
                j && (za(g._editorDiv, va(j)), wa(j, c, !0), j.requestFocus ? j.requestFocus() : Aa(j), h.beginEditing(), g._currentEditor = h, g.iv())
            }
        }
    },
    z.list = function (a) {
        Ha(a, "clearSelectionOnBackgroundClicked"),
        Ha(a, "focusData"),
        Ha(a, "checkMode"),
        Ha(a, "autoMakeVisible"),
        Ha(a, "visibleFunc"),
        Ha(a, "sortFunc"),
        Ha(a, "labelColor"),
        Ha(a, "labelSelectColor"),
        Ha(a, "labelFont"),
        Ha(a, "selectBackground"),
        Ha(a, "indent"),
        Ha(a, "rowHeight"),
        Ha(a, "rowLineVisible"),
        Ha(a, "rowLineColor"),
        Ha(a, "selectBackgroundFunc"),
        Ha(a, "iconFunc"),
        Ha(a, "labelFunc"),
        Ha(a, "labelFontFunc"),
        Ha(a, "labelColorFunc"),
        a._clearSelectionOnBackgroundClicked = !1,
        a._checkMode = c,
        a._autoMakeVisible = !0,
        a._visibleFunc = c,
        a._sortFunc = c,
        a._labelColor = M,
        a._labelSelectColor = N,
        a._labelFont = I,
        a._selectBackground = L,
        a._indent = w.indent,
        a._rowHeight = w.rowHeight,
        a._rowLineVisible = !1,
        a._rowLineColor = $,
        a._preferredSizeProperties = ["rowHeight", "visibleFunc", "dataModel"],
        a.initList = function (a) {
            var b = this;
            b._rows = [],
            b._rowMap = {},
            b._beginRowIndex = 0,
            b._endRowIndex = 0,
            b.initView(!0, !0),
            b.dataModel = a ? a : new Qc,
            b.scrollBarMode = "auto"
        },
        a.onDataDoubleClick = function () {},
        a.onDataClick = function () {},
        a.getSelectBackground = function (a) {
            return this.selectBackgroundFunc ? this.selectBackgroundFunc(a) : this.selectBackground
        },
        a.getIcon = function (a) {
            return this.iconFunc ? this.iconFunc(a) : a.icon
        },
        a.drawIcon = function (a, b, d, e, f, g) {
            if (f) {
                var h,
                i = this,
                h = i.getBodyColor(b),
                j = i.getIcon(b);
                j && (g -= i.rowLineVisible ? 1 : 0, da(a, j, c, d, e + 1, f, g - 2, b, i, h), tb(a, i.getBorderColor(b), d, e, f, g))
            }
        },
        a.drawLabel = function (a, b, c, d, e) {
            var f = this;
            fa(a, f.getLabel(b), f.getLabelFont(b), f.getLabelColor(b), c, d, 0, e)
        },
        a.getCheckIcon = function (a) {
            var b = this.selectionModel,
            c = b.isSelected(a);
            return "single" === b.selectionMode ? c ? "radioon" : "radiooff" : c ? "check" : "uncheck"
        },
        a.checkData = function (a) {
            var b = this.selectionModel,
            c = b.isSelected(a);
            "single" === b.selectionMode && c || (this._checkingData = !0, c ? b.removeSelection(a) : b.appendSelection(a), delete this._checkingData)
        },
        a.getDataAt = function (a) {
            return a.target && (a = this.lp(a)),
            this._rows[i((a.y - .1) / this._rowHeight)]
        },
        a.onPropertyChange = function (a) {
            var b = this,
            c = a.property;
            b.checkChildPreferredSizeChange(c),
            Ac[c] ? b.ivm() : b.iv(),
            zc[c] && (b.showScrollBar(), b.endEditing && b.endEditing()),
            "focusData" === c && b.makeVisible(b._focusData)
        },
        a.getLabel = function (a) {
            return this.labelFunc ? this.labelFunc(a) : a.displayName == c ? a.name : a.displayName
        },
        a.getLabelFont = function (a, b) {
            return this.labelFontFunc ? this.labelFontFunc(a, b) : this._labelFont
        },
        a.getLabelColor = function (a, b) {
            var c = this;
            return c.labelColorFunc ? c.labelColorFunc(a, b) : a && (c.checkMode && c._focusData === a || c.isSelected(a)) ? c._labelSelectColor : c._labelColor
        },
        a.getRowIndex = function (a) {
            return this._rowMap[a.uuid]
        },
        a.isVisible = function (a) {
            return this._visibleFunc ? this._visibleFunc(a) : !0
        },
        a.getSortFunc = function () {
            return this._sortFunc
        },
        a.validateModel = function () {
            var a = this;
            a._rows.length = 0,
            a._rowMap = {},
            a.buildChildren(a._dataModel._roots);
            var b = a._rows = Xa(a._rows, a.isVisible, a),
            c = 0,
            d = a.getSortFunc(),
            e = b.length;
            for (d && b.sort(d); e > c; c++)
                a._rowMap[b[c].uuid] = c
        },
        a.buildChildren = function (a) {
            var b = this;
            a.forEach(function (a) {
                b._rows.push(a),
                b.buildChildren(a._children)
            })
        },
        a.handleDataModelChange = function () {
            var a = this;
            a._calcdPreferredSize = a._calcdPreferredSizeMap = c,
            a.ivm(),
            a.validateModel(),
            a.parent && a.parent.epc("childPreferredSize", 0, 1)
        },
        a.handleDataPropertyChange = function (a) {
            "parent" === a.property ? this.ivm() : this.iv()
        },
        a.handleHierarchyChange = function () {
            this.ivm()
        },
        a.handleSelectionChange = function (a) {
            var b = this;
            b.iv(),
            !b.autoMakeVisible || 1 !== b.selectionModel.length || "set" !== a.kind && "append" !== a.kind || b._checkingData || b.makeVisible(b.selectionModel.lastData)
        },
        a.makeVisible = function (a) {
            this._makeVisibleData = a,
            this.iv()
        },
        a.scrollToIndex = function (a) {
            var b = this,
            c = b._viewRect,
            d = c.height,
            e = b._rowHeight,
            f = e * a;
            a >= 0 && a < b._rows.length && d > 0 && (f + e > c.y + d ? b.translateY = -f + d - e : f < c.y && (b.translateY = -f))
        },
        a.ivm = function () {
            this._invalidateModel || (this._invalidateModel = !0, this.iv())
        },
        a.drawRowBackground = function (a, b, c, d, e, f) {
            var g = this,
            h = g.checkMode;
            (b === g._focusData && h || g.isSelected(b) && !h) && sb(a, c, d, e, f, g.getSelectBackground(b))
        },
        a.drawData = function (a, b, c) {
            var d = this,
            e = d._rowHeight,
            f = e * c,
            g = d._viewRect,
            h = g.x,
            i = g.width;
            a.save(),
            a.beginPath(),
            a.rect(h, f, i, e),
            a.clip(),
            d.addElement(d.drawRow(a, b, h, f, i, e), h, f, i, e),
            a.restore(),
            d._rowLineVisible && sb(a, h, f + e - 1, i, 1, d._rowLineColor)
        },
        a.validateImpl = function () {
            var a = this,
            b = a._canvas,
            c = a.clientWidth,
            d = a.clientHeight,
            e = a._rowHeight;
            (c !== b.clientWidth || d !== b.clientHeight) && ta(b, c, d),
            a._invalidateModel && (a.validateModel(), delete a._invalidateModel);
            var f = {
                x: -a.translateX,
                y: -a.translateY,
                width: c,
                height: d
            },
            g = a._rows.length;
            a._viewRect = f,
            a._scrollHeight = g * e,
            a._beginRowIndex = i(f.y / e),
            a._endRowIndex = j((f.y + f.height) / e),
            a._beginRowIndex < 0 && (a._beginRowIndex = 0),
            a._endRowIndex > g && (a._endRowIndex = g),
            a.validateColumnInfos && a.validateColumnInfos();
            var h = Ub(b, a.translateX, a.translateY, 1, f);
            a.removeElements(),
            a.drawBottomPainters(h);
            for (var k = a._beginRowIndex; k < a._endRowIndex; k++)
                a.drawData(h, a._rows[k], k);
            a.drawTopPainters(h),
            h.restore(),
            a._makeVisibleData && (a.scrollToIndex(a.getRowIndex(a._makeVisibleData)), delete a._makeVisibleData),
            a.translateX = a.translateX,
            a.translateY = a.translateY
        },
        a.getPreferredSize = function () {
            var a = this,
            b = a._preferredSize || a._calcdPreferredSize;
            if (!b) {
                var c = a.rowHeight,
                d = a.rowDatas,
                e = {
                    width: 100,
                    height: c * d.length
                };
                b = a._calcdPreferredSize = e
            }
            return b
        },
        aa(a, {
            beginRowIndex: {
                get: function () {
                    return this._getBeginRowIndex
                }
            },
            endRowIndex: {
                get: function () {
                    return this._endRowIndex
                }
            },
            rowDatas: {
                get: function () {
                    return this._rows
                }
            },
            dataModel: {
                get: function () {
                    return this._dataModel
                },
                set: function (a) {
                    var b = this,
                    c = b._dataModel,
                    d = b._selectionModel;
                    c !== a && (c && (c.off("dataModelChange", b.handleDataModelChange, b), c.off("dataPropertyChange", b.handleDataPropertyChange, b), c.off("hierarchyChange", b.handleHierarchyChange, b), d || c.selectionModel.off("selectionChange", b.handleSelectionChange, b)), b._dataModel = a, a.on("dataModelChange", b.handleDataModelChange, b), a.on("dataPropertyChange", b.handleDataPropertyChange, b), a.on("hierarchyChange", b.handleHierarchyChange, b), d ? d._setDataModel(a) : a.selectionModel.on("selectionChange", b.handleSelectionChange, b), b.epc("dataModel", c, a))
                }
            }
        })
    },
    z.tree = function (a) {
        Ha(a, "rootVisible"),
        Ha(a, "rootData"),
        Ha(a, "expandIcon"),
        Ha(a, "collapseIcon"),
        Ha(a, "loader"),
        a._rootVisible = !0,
        a._rootData = c,
        a._expandIcon = "expand",
        a._collapseIcon = "collapse",
        a._loader = c,
        a._preferredSizeProperties = ["rowHeight", "visibleFunc", "dataModel", "rootData", "rootVisible"],
        a.initTree = function () {
            this._expandMap = {},
            this._levelMap = {}
        },
        a.validateModel = function () {
            var a = this,
            b = a._rootData;
            a._rows.length = 0,
            a._levelMap = {},
            a._rowMap = {},
            b && !this.dataModel.contains(b) && (b = a._rootData = null),
            a._currentLevel = 0,
            b ? a._rootVisible ? a.buildData(b) : a.buildChildren(b) : a.buildChildren(),
            delete a._currentLevel
        },
        a.buildData = function (a) {
            var b = this,
            c = a.uuid,
            d = b._rows;
            b.isVisible(a) && (b._rowMap[c] = d.length, d.push(a), b._levelMap[c] = b._currentLevel, b.isExpanded(a) && (b._currentLevel++, b.buildChildren(a), b._currentLevel--))
        },
        a.buildChildren = function (a) {
            var b = this,
            c = a ? a._children : b._dataModel._roots,
            d = b.getSortFunc();
            d && b.isChildrenSortable(a) ? Fa(c).sort(d).forEach(b.buildData, b) : c.forEach(b.buildData, b)
        },
        a.getLevel = function (a) {
            return this._levelMap[a.uuid]
        },
        a.getToggleIcon = function (a) {
            var b = this;
            if (b._loader && !b._loader.isLoaded(a))
                return b._collapseIcon;
            var d = a.children,
            e = d.length;
            if (e) {
                for (var f = !1, g = 0; e > g; g++)
                    if (b.isVisible(d[g])) {
                        f = !0;
                        break
                    }
                if (f)
                    return b.isExpanded(a) ? b._expandIcon : b._collapseIcon
            }
            return c
        },
        a.isChildrenSortable = function () {
            return !0
        },
        a.handleDataModelChange = function (a) {
            var b = this;
            "remove" === a.kind ? delete b._expandMap[a.data.uuid] : "clear" === a.kind && (b._expandMap = {}),
            b._calcdPreferredSize = b._calcdPreferredSizeMap = c,
            b.ivm(),
            b.validateModel(),
            b.parent && b.parent.epc("childPreferredSize", 0, 1)
        },
        a.toggle = function (a) {
            var b = this;
            b.isExpanded(a) ? b.collapse(a) : b.expand(a)
        },
        a.isExpanded = function (a) {
            return this._expandMap[a.uuid] === !0
        },
        a.expand = function (a) {
            var b = this,
            d = b._loader;
            b.isExpanded(a) || (d && !d.isLoaded(a) && d.load(a), b._expandMap[a.uuid] = !0, b._calcdPreferredSize = b._calcdPreferredSizeMap = c, b.ivm(), b.validateModel(), b.onExpand(a), b.parent && b.parent.epc("childPreferredSize", 0, 1))
        },
        a.onExpand = function () {},
        a.collapse = function (a) {
            var b = this;
            b.isExpanded(a) && (delete b._expandMap[a.uuid], b._calcdPreferredSize = b._calcdPreferredSizeMap = c, b.ivm(), b.validateModel(), b.onCollapse(a), b.parent && b.parent.epc("childPreferredSize", 0, 1))
        },
        a.onCollapse = function () {},
        a.expandAll = function (a) {
            var b = this;
            a ? a.length && (b._expandMap[a.uuid] = !0, a.children.forEach(function (a) {
                    b.expandAll(a)
                })) : b._dataModel.forEach(function (a) {
                a.length && (b._expandMap[a.uuid] = !0)
            }),
            b._calcdPreferredSize = b._calcdPreferredSizeMap = c,
            b.ivm(),
            b.validateModel(),
            b.parent && b.parent.epc("childPreferredSize", 0, 1)
        },
        a.collapseAll = function (a) {
            var b = this;
            a ? a.length && (delete b._expandMap[a.uuid], a.children.forEach(function (a) {
                    b.collapseAll(a)
                })) : this._expandMap = {},
            b._calcdPreferredSize = b._calcdPreferredSizeMap = c,
            b.ivm(),
            b.validateModel(),
            b.parent && b.parent.epc("childPreferredSize", 0, 1)
        },
        a.makeVisible = function (a) {
            if (a) {
                var b = this;
                if (!b._rootData || a.isDescendantOf(b._rootData)) {
                    for (var c = a._parent; c; )
                        b.expand(c), c = c._parent;
                    b._makeVisibleData = a,
                    b.iv()
                }
            }
        },
        a.checkData = function (a) {
            var b,
            c = this,
            d = c._checkMode,
            e = c.selectionModel,
            f = e.isSelected(a);
            if ("single" !== e.selectionMode || !f) {
                if (c._checkingData = !0, "check" === d)
                    f ? e.removeSelection(a) : e.appendSelection(a);
                else if ("children" === d)
                    b = [a], Wa(b, a._children);
                else if ("descendant" === d)
                    b = [], lc(a, b);
                else if ("all" === d && (b = [], lc(a, b), !f))
                    for (var g = a._parent; g; )
                        b.push(g), g = g._parent;
                b && (f ? e.removeSelection(b) : e.appendSelection(b)),
                delete c._checkingData
            }
        },
        a.drawTree = function (a, b, d, e, f, g) {
            var h = this,
            i = h._indent,
            j = h.getLevel(b),
            k = h.getIcon(b) ? i : 0,
            l = h.getToggleIcon(b);
            l ? (d += i * j, da(a, l, c, d, e, i, g, b, h), d += i) : d += i * (j + 1),
            h._checkMode && (da(a, h.getCheckIcon(b), c, d, e, i, g, b, h), d += i),
            h.drawIcon(a, b, d, e, k, g),
            h.drawLabel(a, b, d + k, e, g)
        },
        a.getPreferredSize = function () {
            var a = this,
            b = a._preferredSize || a._calcdPreferredSize;
            if (!b) {
                var c = a.rowHeight,
                d = a.rowDatas,
                e = {
                    width: 100,
                    height: c * d.length
                };
                b = a._calcdPreferredSize = e,
                a.epc("calcdPreferredSize", null, e)
            }
            return b
        },
        aa(a, {
            expandedDatas: {
                get: function () {
                    var a = [];
                    for (var b in this._expandMap)
                        a.push(this.dataModel._dataMap[b]);
                    return a
                }
            }
        })
    },
    z.table = function (a) {
        Ha(a, "columnLineVisible"),
        Ha(a, "columnLineColor"),
        Ha(a, "sortColumn"),
        Ha(a, "sortMode"),
        a._rowLineVisible = !0,
        a._columnLineVisible = !0,
        a._columnLineColor = $,
        a._sortColumn = c,
        a._sortMode = "tristate",
        a.initTable = function () {
            var a = this,
            b = a._columnModel = new Qc;
            a._columnInfos = [],
            b.on("dataModelChange", a.handleColumnModelChange, a),
            b.on("dataPropertyChange", a.handleColumnPropertyChange, a),
            b.on("hierarchyChange", a.handleColumnHierarchyChange, a)
        },
        a.onColumnClick = function () {},
        a.setColumns = function (a) {
            this._columnModel.clear(),
            this.addColumns(a)
        },
        a.addColumns = function (a) {
            a && a.forEach(function (a) {
                a instanceof qd || (a = Ia(qd, a)),
                this._columnModel.add(a)
            }, this)
        },
        a.getColumnInfo = function (a) {
            for (var b, d = 0, e = this._columnInfos; d < e.length; d++)
                if (b = e[d], b.column === a)
                    return b;
            return c
        },
        a.getColumnAt = function (a) {
            var b = this.getColumnInfoAt(a);
            return b ? b.column : c
        },
        a.getColumnInfoAt = function (a) {
            for (var b = this.lp(a).x, d = this._columnInfos, e = 0; e < d.length; e++) {
                var f = d[e];
                if (b >= f.beginX && b < f.endX)
                    return f
            }
            return c
        },
        a.getToolTipAt = function (a) {
            var b = this,
            d = b.getDataAt(a),
            e = b.getColumnAt(a);
            return d && e ? e.getToolTip(d, b) : c
        },
        a.getSortFunc = function () {
            var a = this,
            b = a._sortColumn;
            if (b && b.sortable) {
                var c = b.sortFunc,
                d = "asc" === b.sortOrder ? 1 : -1;
                return c || (c = w.sortFunc),
                function (e, f) {
                    return c.call(a, a.getValue(e, b), a.getValue(f, b), e, f) * d
                }
            }
            return a._sortFunc
        },
        a.validateColumnInfos = function () {
            var a = this,
            b = a._viewRect,
            c = a._columnInfos;
            c.length = 0,
            a._scrollWidth = 0,
            a._columnModel._roots.forEach(function (d) {
                if (d.visible) {
                    var e = a._scrollWidth + d.width;
                    a._scrollWidth <= b.x + b.width && e >= b.x && c.push({
                        column: d,
                        beginX: a._scrollWidth,
                        endX: e
                    }),
                    a._scrollWidth = e
                }
            })
        },
        a.drawData = function (a, b, c) {
            var d = this,
            e = d._rowHeight,
            f = e * c,
            g = d._viewRect,
            h = g.x,
            i = g.width;
            d.drawRowBackground(a, b, h, f, i, e),
            d._columnInfos.forEach(function (c) {
                var g = c.column,
                h = c.beginX,
                i = g.width;
                i > 0 && (d.drawCell(a, b, g, h, f, i, e), d._columnLineVisible && sb(a, h + i - 1, f, 1, e, d._columnLineColor))
            }),
            d._rowLineVisible && sb(a, h, f + e - 1, i, 1, d._rowLineColor)
        },
        a.handleColumnModelChange = function () {
            this.ivm()
        },
        a.handleColumnPropertyChange = function (a) {
            var b = this;
            a.data === b._sortColumn && Bc[a.property] ? b.ivm() : b.iv(),
            b.showScrollBar()
        },
        a.handleColumnHierarchyChange = function () {
            this.iv()
        },
        a.checkEditing = function (a, b) {
            if (Eb(b))
                for (var c = this, d = c.lp(b), e = c._columnInfos, f = c._rowHeight, g = c._viewRect, h = g.x, i = g.y, j = g.width, k = g.height, l = 0; l < e.length; l++) {
                    var m = e[l],
                    n = m.beginX,
                    o = m.column,
                    p = o.width;
                    if (o !== c._checkColumn && o !== c._treeColumn && c.isCellEditable(a, o) && d.x >= n && d.x < m.endX) {
                        var q = {
                            x: n,
                            y: c.getRowIndex(a) * f,
                            width: p,
                            height: f
                        },
                        r = {
                            x: q.x + c.translateX,
                            y: q.y + c.translateY,
                            width: q.width,
                            height: q.height
                        },
                        s = 0,
                        t = 0;
                        return q.x < h ? s = q.x - h : q.x + q.width > h + j && (s = q.x + q.width - h - j),
                        s && (c.translateX = c.translateX - s, r.x -= s),
                        q.y < i ? t = q.y - i : q.y + f > i + k && (t = q.y + f - i - k),
                        t && (c.translateY = c.translateY - t, r.y -= t),
                        void c.beginEditing(a, o, r, b, d, q)
                    }
                }
        },
        aa(a, {
            columnModel: {
                get: function () {
                    return this._columnModel
                }
            }
        })
    },
    z.tablePane = function (a) {
        a.init = function (a) {
            var b = this;
            b._table = a,
            b._tableHeader = new e.widget.TableHeader(a),
            b.initView(),
            za(b._interactionDiv, b._tableHeader.view),
            za(b._interactionDiv, b._table.view),
            b._tableHeader.on("propertyChange", function (a) {
                "viewHeight" === a.property && b.iv()
            }),
            b.iv()
        },
        a.getTable = function () {
            return this._table
        },
        a.getTableHeader = function () {
            return this._tableHeader
        },
        a.validateImpl = function () {
            var a = this,
            b = a._tableHeader,
            c = b.height,
            d = {
                x: 0,
                y: 0,
                width: a.clientWidth,
                height: c
            };
            wa(b, d, a._forceLayout),
            d.y = c,
            d.height = l(0, a.clientHeight - c),
            wa(a._table, d, a._forceLayout)
        },
        a.findViewById = function (a) {
            var b = this,
            c = b.getTable(),
            d = b.getTableHeader();
            return c && c.id === a ? c : d && d.id === a ? d : void 0
        }
    };
    var Oc = _("qc.widget.Emitter", b, function () {}, {
        on: function (a, b, c, d) {
            var e = this,
            f = e._types;
            f || (f = e._types = {});
            var g = f[a];
            g || (g = f[a] = []);
            var h = g.length;
            d = d || 0;
            do
                h--;
            while (h >= 0 && g[h].priority < d);
            return g.splice(h + 1, 0, {
                listener: b,
                scope: c,
                priority: d
            }),
            e
        },
        off: function (a, b, c) {
            var d = this._types;
            if (d) {
                var e = d[a];
                if (e) {
                    for (var f = 0, g = e.length; g > f; f++)
                        if (e[f].listener === b && e[f].scope === c) {
                            e.splice(f, 1);
                            break
                        }
                    return e.length || delete d[a],
                    this
                }
            }
        },
        emit: function (a, b) {
            var c = this._types;
            if (c) {
                var d = c[a];
                if (d) {
                    d = Fa(d);
                    for (var e = 0, f = d.length; f > e; e++) {
                        var g = d[e];
                        g.listener.call(g.scope || this, b)
                    }
                    return this
                }
            }
        }
    }),
    Pc = _("qc.widget.Data", b, function (a) {
        aa(this, {
            uuid: {
                value: H()
            }
        }),
        Ja(this, a)
    }, {
        _children: pa,
        iv: function () {
            return this.epc("iv", !1, !0),
            this
        },
        addChild: function (a, b) {
            var c = this;
            if (a !== c && (c._children === pa && (c._children = [], c._childMap = {}), b === d && (b = c._children.length), !c._childMap[a.uuid] && !c.isDescendantOf(a)))
                return a._parent && a._parent.removeChild(a), (0 > b || b > c._children.length) && (b = this._children.length), c._children.splice(b, 0, a), c._childMap[a.uuid] = a, a.parent = this, c.onChildAdd(a, b), c.epc("children", d, a), c
        },
        onChildAdd: function () {},
        removeChild: function (a) {
            var b = this;
            if (b._childMap && b._childMap[a.uuid]) {
                var c = b._children.indexOf(a);
                return b._children.splice(c, 1),
                delete b._childMap[a.uuid],
                b.epc("children", a, d),
                a.parent = d,
                b.onChildRemove(a, c),
                b
            }
        },
        onChildRemove: function () {},
        clearChildren: function () {
            var a = this;
            return Fa(a._children).forEach(function (b) {
                a.removeChild(b)
            }),
            a
        },
        onParentChange: function () {},
        isDescendantOf: function (a) {
            if (!a || 0 === a.length)
                return !1;
            for (var b = this._parent; b; ) {
                if (a === b)
                    return !0;
                b = b._parent
            }
            return !1
        },
        _setDataModel: function (a) {
            if (a && this._dataModel)
                throw "Data already in another DataModel";
            this._dataModel = a
        },
        onPropertyChange: function () {},
        epc: function (a, b, c) {
            var d = this;
            if (b === c)
                return !1;
            var e = {
                property: a,
                oldValue: b,
                newValue: c,
                source: d,
                data: d
            };
            return d._dataModel && d._dataModel.handleDataPropertyChange(e),
            d.onPropertyChange(e),
            this.emit("propertyChange", e),
            e
        }
    }, {
            properties: ["id", "name", "displayName", "icon", "toolTip"],
            attr: !0,
            style: !0,
            emitter: !0
        }, {
            dataModel: {
                get: function () {
                    return this._dataModel
                }
            },
            uiClass: {
                get: function () {
                    return c
                }
            },
            length: {
                get: function () {
                    return this._children.length
                }
            },
            parent: {
                get: function () {
                    return this._parent
                },
                set: function (a) {
                    var b = this;
                    if (!(b._updatingParent || b._parent === a || b === a || a && a.isDescendantOf(b))) {
                        var c = b._parent;
                        return b._parent = a,
                        b._updatingParent = !0,
                        c && c.removeChild(b),
                        a && a.addChild(b),
                        delete b._updatingParent,
                        b.epc("parent", c, a),
                        b.onParentChange(c, a),
                        b
                    }
                }
            },
            siblings: {
                get: function () {
                    var a = this;
                    return a._parent ? a._parent._children : a._dataModel ? a._dataModel._roots : d
                }
            },
            children: {
                get: function () {
                    return this._children
                }
            },
            serializableProperties: {
                get: function () {
                    return {
                        id: !0,
                        name: !0,
                        displayName: !0,
                        icon: !0,
                        toolTip: !0,
                        parent: !0
                    }
                }
            }
        }),
    Qc = _("qc.widget.DataModel", b, function () {
        var a = this;
        a._datas = [],
        a._dataMap = {},
        a._roots = [],
        a._rootMap = {},
        a._idMap = {},
        a._emitter = new Oc,
        a._selectionModel = new Rc(a)
    }, {
        getDataById: function (a) {
            return this._idMap[a]
        },
        add: function (a, b) {
            var d = this,
            e = a.uuid;
            if (d._dataMap[e])
                throw "Data already in this DataModel";
            return a.id != c && (d._idMap[a.id] = a),
            d._dataMap[e] = a,
            d._datas.push(a),
            a._parent || (d._rootMap[e] = a, Ua(d._roots, a, b)),
            a._setDataModel(d),
            d.onAdd(a),
            d.emit("dataModelChange", {
                kind: "add",
                data: a
            }),
            d
        },
        onAdd: function () {},
        remove: function (a) {
            if (a) {
                var b = this,
                d = a.uuid;
                if (a._dataModel === b)
                    return b.prepareRemove(a), Fa(a.children).forEach(b.remove, b), a._parent && a._parent.removeChild(a), Va(b._datas, a), delete b._dataMap[d], a.id != c && delete b._idMap[a.id], b._rootMap[d] && (delete b._rootMap[d], Va(b._roots, a)), a._setDataModel(c), b.onRemove(a), b.emit("dataModelChange", {
                        kind: "remove",
                        data: a
                    }), b
            }
        },
        onRemove: function () {},
        prepareRemove: function () {},
        clear: function () {
            var a = this;
            return a.emit("dataModelChange", {
                kind: "beforeClear"
            }),
            a._datas.length && (a._datas.forEach(function (a) {
                    a._setDataModel(c)
                }), a._datas.length = 0, a._dataMap = {}, a._roots.length = 0, a._rootMap = {}, a._idMap = {}, a.onClear(), a.emit("dataModelChange", {
                    kind: "clear"
                })),
            a
        },
        onClear: function () {},
        contains: function (a) {
            return a && a._dataModel === this
        },
        handleDataPropertyChange: function (a) {
            var b = this,
            d = a.source,
            e = a.property;
            if ("parent" === e) {
                var f = d.uuid,
                g = b._rootMap;
                d._parent ? g[f] && (delete g[f], Va(b._roots, d)) : g[f] || (g[f] = d, b._roots.push(d))
            } else
                "id" === e && (a.oldValue != c && delete b._idMap[a.oldValue], a.newValue != c && (b._idMap[a.newValue] = d));
            b.onDataPropertyChange(a),
            b.emit("dataPropertyChange", a)
        },
        onDataPropertyChange: function () {},
        forEach: function (a, b) {
            this._datas.forEach(a, b)
        }
    }, {
        attr: !0,
        emitter: !0
    }, {
        length: {
            get: function () {
                return this._datas.length
            }
        },
        selectionModel: {
            get: function () {
                return this._selectionModel
            }
        },
        roots: {
            get: function () {
                return this._roots
            }
        },
        datas: {
            get: function () {
                return this._datas
            }
        }
    }),
    Rc = _("qc.widget.SelectionModel", b, function (a) {
        var b = this;
        b._selectionMode = "multiple",
        b._map = {},
        b._list = [],
        b._setDataModel(a)
    }, {
            _setDataModel: function (a) {
                var b = this,
                c = b._dataModel;
                c !== a && (c && (b.clearSelection(), c.off("dataModelChange", b.handleDataModelChange, b)), b._dataModel = a, a.on("dataModelChange", b.handleDataModelChange, b), b.epc("dataModel", c, a))
            },
            dispose: function () {
                var a = this;
                a.clearSelection(),
                a._dataModel.off("dataModelChange", a.handleDataModelChange, a)
            },
            handleDataModelChange: function (a) {
                var b = this;
                if ("remove" === a.kind) {
                    var c = a.data;
                    b.isSelected(c) && (Va(b._list, c), delete b._map[c.uuid], b.esc("remove", [c]))
                } else
                    "clear" === a.kind && b.clearSelection()
            },
            esc: function (a, b, c, d) {
                c && (this._list.forEach(function (a) {
                        d[a.uuid] ? Va(c, a) : c.push(a)
                    }), b = Fa(c)),
                this.emit("selectionChange", {
                    kind: a,
                    datas: Fa(b)
                })
            },
            filterArray: function (a, b) {
                var c = this;
                a ? a instanceof Pc && (a = [a]) : a = [];
                for (var d, e = 0, f = Fa(a); e < f.length; e++)
                    d = f[e], (c._selectableFunc && !c._selectableFunc(d) || b && c.isSelected(d) || !b && !c.isSelected(d) || !c._dataModel.contains(d)) && (f.splice(e, 1), e--);
                return f
            },
            appendSelection: function (a) {
                var b = this;
                if ("none" === b._selectionMode)
                    return b;
                var c,
                d,
                e = b._list,
                f = b.filterArray(a, !0);
                return f.length ? ("single" === b._selectionMode && (c = Fa(e), d = b._map, e.length = 0, b._map = {}, f = [f[f.length - 1]]), f.forEach(function (a) {
                        e.push(a),
                        b._map[a.uuid] = a
                    }), b.esc("append", f, c, d), b) : b
            },
            removeSelection: function (a) {
                var b = this,
                c = b.filterArray(a),
                d = 0,
                e = c.length;
                if (0 === e)
                    return b;
                for (; e > d; d++) {
                    var f = c[d];
                    Va(b._list, f),
                    delete b._map[f.uuid]
                }
                return b.esc("remove", c),
                b
            },
            forEach: function (a, b) {
                this._list.forEach(a, b)
            },
            clearSelection: function () {
                var a = this;
                if (a.length) {
                    var b = Fa(a._list);
                    a._list.length = 0,
                    a._map = {},
                    a.esc("clear", b)
                }
                return a
            },
            selectAll: function () {
                var a = this;
                if ("none" === a._selectionMode)
                    return a;
                var b,
                d,
                e = Fa(a._dataModel.datas);
                if (a._selectableFunc)
                    for (b = 0; b < e.length; b++)
                        a._selectableFunc(e[b]) || (e.splice(b, 1), b--);
                var f = Fa(a._list),
                g = a._map;
                for (a._list.length = 0, a._map = {}, "single" === a._selectionMode && e.length > 1 && (e = [e[e.length - 1]]), b = 0; b < e.length; b++)
                    d = e[b], a._list.push(d), a._map[d.uuid] = d;
                return a.esc("all", c, f, g),
                a
            },
            isSelected: function (a) {
                return this._map[a.uuid] != c
            },
            isSelectable: function (a) {
                return a && "none" !== this._selectionMode ? this._selectableFunc ? this._selectableFunc(a) : !0 : !1
            },
            onPropertyChange: function (a) {
                var b = a.property;
                ("selectionMode" === b || "selectableFunc" === b) && this.clearSelection()
            }
        }, {
            properties: ["selectionMode", "selectableFunc"],
            emitter: !0
        }, {
            length: {
                get: function () {
                    return this._list.length
                }
            },
            firstData: {
                get: function () {
                    return this._list[0]
                }
            },
            lastData: {
                get: function () {
                    return this._list[this._list.length - 1]
                }
            },
            selection: {
                get: function () {
                    return this._list
                },
                set: function (a) {
                    var b = this,
                    d = b._list;
                    if ("none" === b._selectionMode)
                        return b;
                    if (0 === d.length && !a)
                        return b;
                    if (1 === d.length && b.lastData === a)
                        return b;
                    var e = Fa(d),
                    f = b._map;
                    d.length = 0,
                    b._map = {};
                    var g = b.filterArray(a, !0);
                    return "single" === b._selectionMode && g.length > 1 && (g = [g[g.length - 1]]),
                    g.forEach(function (a) {
                        d.push(a),
                        b._map[a.uuid] = a
                    }),
                    b.esc("set", c, e, f),
                    b
                }
            },
            topSelection: {
                get: function () {
                    var a = this,
                    b = [];
                    return a._list.forEach(function (d) {
                        for (var e = d.parent; e; ) {
                            if (a.isSelected(e)) {
                                d = c;
                                break
                            }
                            e = e.parent
                        }
                        d && b.push(d)
                    }),
                    b
                }
            }
        }),
    Sc = _("qc.widget.editor.Editor", b, function (a) {
        Ja(this, a)
    }, {
        getView: function () {},
        setValue: function () {},
        beginEditing: function () {},
        endEditing: function () {},
        getEditorValue: function () {},
        cancelEditing: function () {}
    }, {
        properties: ["table", "property", "data", "event", "point", "rect"]
    }),
    Tc = _("qc.widget.editor.StringEditor", Sc, function (a) {
        Tc["super"].constructor.call(this, a)
    }, {
        getView: function () {
            var a = this,
            b = a._view;
            if (!b) {
                var c = a._data,
                d = a._table,
                e = new Gd,
                f = e.getInput();
                b = a._view = e,
                f.onblur = function () {
                    d.endEditing()
                },
                f.onkeydown = function (a) {
                    Ob(a) ? d.endEditing() : Pb(a) && d.cancelEditing()
                },
                a.onViewCreate(b),
                ua(f, d.getSelectBackground(c), 2),
                f.style.font = d.getLabelFont(c)
            }
            return b
        },
        setValue: function (a) {
            var b = this;
            a = b.formatValue(a),
            b._view.value = a == c ? "" : a
        },
        beginEditing: function () {
            this._view.getInput().focus()
        },
        getEditorValue: function () {
            return this.formatValue(this._view.value)
        },
        onViewCreate: function () {},
        formatValue: function (a) {
            return a
        }
    }),
    Uc = _("qc.widget.editor.BooleanEditor", Sc, function (a) {
        Uc["super"].constructor.call(this, a)
    }, {
        setValue: function (a) {
            Qa(a) && this.table.setValue(this.data, this.property, !a)
        }
    }),
    Vc = e.widget.Default.define("qc.widget.editor.ColorEditor", e.widget.editor.Editor, function (a) {
        Vc["super"].constructor.call(this, a),
        a = a || {},
        a.dropDown = "qc.widget.ColorChooserDropDown";
        var b = this,
        c = b._view = new e.widget.ComboBox(a);
        c.onClose = function () {
            b._table.endEditing()
        },
        b.instant && c.on("propertyChange", function (a) {
            b.table.setValue(b.data, b.property, a.newValue)
        })
    }, {
            getView: function () {
                return this._view
            },
            setValue: function (a) {
                this._view.value = a
            },
            beginEditing: function () {
                this._view.toggle()
            },
            endEditing: function () {
                this._view.close()
            },
            getEditorValue: function () {
                return this._view.value.toString()
            },
            cancelEditing: function () {
                this._view.close()
            }
        }),
    Wc = e.widget.Default.define("qc.widget.editor.EnumEditor", e.widget.editor.Editor, function (a) {
        Wc["super"].constructor.call(this, a);
        var b = this,
        c = b._view = new e.widget.ComboBox(a);
        c.onClose = function () {
            b._table.endEditing()
        }
    }, {
            getView: function () {
                return this._view
            },
            setValue: function (a) {
                this._view.data = this["enum"],
                this._view.value = a
            },
            beginEditing: function () {
                this._view.toggle()
            },
            endEditing: function () {
                this._view.close()
            },
            getEditorValue: function () {
                return this._view.value
            },
            cancelEditing: function () {
                this._view.close()
            }
        }, {
            properties: ["enum"]
        }),
    Xc = _("qc.widget.editor.IntEditor", Tc, function (a) {
        Xc["super"].constructor.call(this, a)
    }, {
        formatValue: function (a) {
            var b = u(a);
            return isNaN(b) ? "" : b
        },
        onViewCreate: function (a) {
            a.maskRe = /[\d\-]/
        }
    }),
    Yc = _("qc.widget.editor.NumberEditor", Tc, function (a) {
        Yc["super"].constructor.call(this, a)
    }, {
        _digits: 3,
        formatValue: function (a) {
            var b = parseFloat(a);
            return isNaN(b) ? "" : parseFloat(b.toFixed(this.digits))
        },
        onViewCreate: function (a) {
            a.maskRe = /[\d\-\.]/
        }
    }, {
            properties: ["digits"]
        }),
    Zc = _("qc.widget.editor.SliderEditor", e.widget.editor.Editor, function (a) {
        Zc["super"].constructor.call(this, a);
        var b = this,
        c = b._view = new e.widget.Slider(a);
        c.on("propertyChange", function (a) {
            "value" === a.property && b.table.setValue(b.data, b.property, a.newValue)
        })
    }, {
        getView: function () {
            return this._view
        },
        setValue: function (a) {
            this._view.value = a
        },
        getEditorValue: function () {
            return this._view.value
        }
    }),
    $c = _("qc.widget.renderer.Renderer", b, function (a) {
        Ja(this, a)
    }, {
        draw: function () {}
    }, {
        properties: ["table", "property", "data"]
    }),
    _c = _("qc.widget.renderer.StringRenderer", $c, function (a) {
        _c["super"].constructor.call(this, a)
    }, {
        _align: "left",
        draw: function (a, b, c, d, e, f) {
            b = this.formatValue(b),
            this._background && sb(a, c, d, e, f, this._background),
            this.drawLabel(a, b, c, d, e, f)
        },
        drawLabel: function (a, b, c, d, f, g, h) {
            var i = this,
            j = i._table,
            k = i._data,
            l = i._property,
            m = i._color,
            n = i._selectColor,
            o = i._font || j.getLabelFont(k, l),
            p = !1;
            j instanceof e.widget.PropertyTable ? j.isPropertySelected(l) && (p = !0) : j.isSelected(k) && (p = !0),
            m = p ? n || j.getLabelColor(k, l) : m || j.getLabelColor(k, l),
            fa(a, b, o, m, c, d, f, g, h || i._align)
        },
        formatValue: function (a) {
            return a
        }
    }, {
        properties: ["align", "font", "color", "selectColor", "background"]
    }),
    ad = _("qc.widget.renderer.BooleanRenderer", $c, function (a) {
        ad["super"].constructor.call(this, a)
    }, {
        draw: function (a, b, c, d, e, f) {
            this._background && sb(a, c, d, e, f, this._background),
            Qa(b) && da(a, b ? "check" : "uncheck", "centerUniform", c, d, e, f)
        }
    }, {
        properties: ["background"]
    }),
    bd = _("qc.widget.renderer.ColorRenderer", _c, function (a) {
        bd["super"].constructor.call(this, a)
    }, {
        _align: "center",
        _labelVisible: !0,
        draw: function (a, b, c, d, e, f) {
            this._background && sb(a, c, d, e, f, this._background),
            b && sb(a, c, d, e, f, b),
            this._labelVisible && this.drawLabel(a, b, c, d, e, f)
        }
    }, {
        properties: ["labelVisible"]
    }),
    cd = _("qc.widget.renderer.EnumRenderer", $c, function (a) {
        cd["super"].constructor.call(this, a)
    }, {
        _align: "left",
        _indent: e.widget.Default.indent,
        draw: function (a, b, d, e, f, g) {
            var h = this.getLabel(b),
            i = this.getIcon(b),
            j = this.indent;
            i != c && (da(a, i, null, d, e, this.indent, g, this._data, this._table), d += j, f -= j),
            this.drawLabel(a, h, d, e, f, g)
        },
        drawLabel: function (a, b, c, d, e, f) {
            var g = this,
            h = g._table,
            i = g._data,
            j = g._property,
            k = h.getLabelFont(i, j),
            l = h.getLabelColor(i, j);
            fa(a, b, k, l, c, d, e, f, g._align)
        },
        getLabel: function (a) {
            var b = this,
            c = b._labelMap,
            d = b["enum"],
            e = d.length;
            if (!c) {
                c = {};
                for (var f = 0; e > f; f++) {
                    var g,
                    h,
                    i,
                    j = d[f];
                    Sa(j) ? (g = j[0], h = j[1], i = j[2]) : (g = j.icon, h = j.label, i = j.value),
                    c[i] = h
                }
                b._labelMap = c
            }
            return c[a]
        },
        getIcon: function (a) {
            var b = this,
            c = b._iconMap,
            d = b["enum"],
            e = d.length;
            if (!c) {
                c = {};
                for (var f = 0; e > f; f++) {
                    var g,
                    h,
                    i,
                    j = d[f];
                    Sa(j) ? (g = j[0], h = j[1], i = j[2]) : (g = j.icon, h = j.label, i = j.value),
                    c[i] = g
                }
                b._iconMap = c
            }
            return c[a]
        }
    }, {
        properties: ["align", "font", "color", "background", "enum", "indent"]
    }),
    dd = _("qc.widget.renderer.IntRenderer", _c, function (a) {
        dd["super"].constructor.call(this, a)
    }, {
        formatValue: function (a) {
            return a == c ? a : u(a)
        }
    }),
    ed = _("qc.widget.renderer.NumberRenderer", _c, function (a) {
        ed["super"].constructor.call(this, a)
    }, {
        _digits: 3,
        formatValue: function (a) {
            return Pa(a) && (a = parseFloat(a)),
            a == c ? a : parseFloat(a.toFixed(this._digits))
        }
    }, {
        properties: ["digits"]
    }),
    fd = _("qc.widget.renderer.IconRenderer", $c, function (a) {
        fd["super"].constructor.call(this, a)
    }, {
        _stretch: "centerUniform",
        draw: function (a, b, c, d, e, f) {
            var g = this;
            g._background && sb(a, c, d, e, f, g._background),
            da(a, b, g._stretch, c, d, e, f, g._data, g._table)
        }
    }, {
        properties: ["stretch", "background"]
    }),
    gd = function (a, b, c) {
        for (var d = b.length, e = 0; d > e; e++)
            if (gd(a, b.children[e], c) === !1)
                return !1;
        return a.call(c, b) === !1 ? !1 : !0
    },
    hd = function (a, b, c) {
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            a.isSelected(e) && b.push(e)
        }
        for (d = 0; d < c.length; d++)
            hd(a, b, e = c[d]._children)
    },
    id = function (a, b, c) {
        for (var d = 0; d < c.length; d++) {
            var e = c[c.length - 1 - d];
            a.isSelected(e) && b.push(e)
        }
        for (d = 0; d < c.length; d++)
            id(a, b, c[d]._children)
    },
    jd = function (a, b, c) {
        for (var d = !1, e = 0; e < c.length; e++) {
            var f = c[e];
            a.isSelected(f) ? d && b.push(f) : d = !0
        }
        for (e = 0; e < c.length; e++)
            jd(a, b, c[e]._children)
    },
    kd = function (a, b, c) {
        for (var d = !1, e = 0; e < c.length; e++) {
            var f = c[c.length - 1 - e];
            a.isSelected(f) ? d && b.push(f) : d = !0
        }
        for (e = 0; e < c.length; e++)
            kd(a, b, c[e]._children)
    };
    G(Qc, {
        forEachByDepthFirst: function (a, b, c) {
            var d = this;
            if (b)
                gd(a, b, c);
            else
                for (var e = 0, f = d._roots.length; f > e; e++)
                    if (gd(a, d._roots[e], c) === !1)
                        return d;
            return d
        },
        forEachByBreadthFirst: function (a, b, c) {
            var d = this,
            e = [];
            for (b ? e.push(b) : Wa(e, d._roots); e.length; )
                if (b = e.splice(0, 1)[0], Wa(e, b.children), a.call(c, b) === !1)
                    return d;
            return d
        },
        moveTo: function (a, b) {
            var c = a.siblings,
            d = c.indexOf(a);
            return d === b || 0 > d ? this : (b >= 0 && b <= c.length && (Va(c, a), b > c.length && b--, Ua(c, a, b), this.emit("hierarchyChange", {
                        data: a,
                        oldIndex: d,
                        newIndex: b
                    })), this)
        },
        moveUp: function (a) {
            return this.moveTo(a, a.siblings.indexOf(a) - 1),
            this
        },
        moveDown: function (a) {
            return this.moveTo(a, a.siblings.indexOf(a) + 1),
            this
        },
        moveToTop: function (a) {
            return this.moveTo(a, 0),
            this
        },
        moveToBottom: function (a) {
            return this.moveTo(a, a.siblings.length),
            this
        },
        moveSelectionUp: function (a) {
            var b = this,
            c = [];
            return jd(a || b.selectionModel, c, b._roots),
            c.forEach(b.moveUp, b),
            b
        },
        moveSelectionDown: function (a) {
            var b = this,
            c = [];
            return kd(a || b.selectionModel, c, b._roots),
            c.forEach(b.moveDown, this),
            b
        },
        moveSelectionToTop: function (a) {
            var b = this,
            c = [];
            return id(a || b.selectionModel, c, b._roots),
            c.forEach(b.moveToTop, b),
            b
        },
        moveSelectionToBottom: function (a) {
            var b = this,
            c = [];
            return hd(a || b.selectionModel, c, b._roots),
            c.forEach(b.moveToBottom, b),
            b
        }
    }),
    G(D, {
        color: bd,
        "int": dd,
        number: ed,
        "boolean": ad,
        icon: fd
    }, !0),
    G(E, {
        color: Vc,
        "int": Xc,
        number: Yc,
        "boolean": Uc
    }, !0);
    var ld = function (a, b, c, d, e, f, g) {
        var h = a.createLinearGradient(d, e, f, g);
        return h.addColorStop(0, c),
        h.addColorStop(1, b),
        h
    },
    md = function (a, b, c, d, e, f, g) {
        var h = a.createLinearGradient(d, e, f, g);
        return h.addColorStop(0, b),
        h.addColorStop(.5, c),
        h.addColorStop(1, b),
        h
    },
    nd = function (a, b, c, d, e, f, g) {
        var h = a.createLinearGradient(d, e, f, g);
        return h.addColorStop(0, b),
        h.addColorStop(1 / 3, c),
        h.addColorStop(2 / 3, b),
        h.addColorStop(1, c),
        h
    },
    od = function (a, b, c, d, e, f, g, h, i) {
        var j = a.createRadialGradient(d + f * h, e + g * i, m(f, g) / 24, d + f / 2, e + g / 2, l(f, g) / 2);
        return j.addColorStop(0, c),
        j.addColorStop(1, b),
        j
    };
    G(B, {
        "linear.southwest": function (a, b, c, d, e, f, g) {
            return ld(a, b, c, d, e + g, d + f, e)
        },
        "linear.southeast": function (a, b, c, d, e, f, g) {
            return ld(a, b, c, d + f, e + g, d, e)
        },
        "linear.northwest": function (a, b, c, d, e, f, g) {
            return ld(a, b, c, d, e, d + f, e + g)
        },
        "linear.northeast": function (a, b, c, d, e, f, g) {
            return ld(a, b, c, d + f, e, d, e + g)
        },
        "linear.north": function (a, b, c, d, e, f, g) {
            return ld(a, b, c, d, e, d, e + g)
        },
        "linear.south": function (a, b, c, d, e, f, g) {
            return ld(a, b, c, d, e + g, d, e)
        },
        "linear.west": function (a, b, c, d, e, f) {
            return ld(a, b, c, d, e, d + f, e)
        },
        "linear.east": function (a, b, c, d, e, f) {
            return ld(a, b, c, d + f, e, d, e)
        },
        "radial.center": function (a, b, c, d, e, f, g) {
            return od(a, b, c, d, e, f, g, .5, .5)
        },
        "radial.southwest": function (a, b, c, d, e, f, g) {
            return od(a, b, c, d, e, f, g, .25, .75)
        },
        "radial.southeast": function (a, b, c, d, e, f, g) {
            return od(a, b, c, d, e, f, g, .75, .75)
        },
        "radial.northwest": function (a, b, c, d, e, f, g) {
            return od(a, b, c, d, e, f, g, .25, .25)
        },
        "radial.northeast": function (a, b, c, d, e, f, g) {
            return od(a, b, c, d, e, f, g, .75, .25)
        },
        "radial.north": function (a, b, c, d, e, f, g) {
            return od(a, b, c, d, e, f, g, .5, .25)
        },
        "radial.south": function (a, b, c, d, e, f, g) {
            return od(a, b, c, d, e, f, g, .5, .75)
        },
        "radial.west": function (a, b, c, d, e, f, g) {
            return od(a, b, c, d, e, f, g, .25, .5)
        },
        "radial.east": function (a, b, c, d, e, f, g) {
            return od(a, b, c, d, e, f, g, .75, .5)
        },
        "spread.horizontal": function (a, b, c, d, e, f) {
            return md(a, b, c, d, e, d + f, e)
        },
        "spread.vertical": function (a, b, c, d, e, f, g) {
            return md(a, b, c, d, e, d, e + g)
        },
        "spread.north": function (a, b, c, d, e, f, g) {
            return nd(a, b, c, d, e - g / 4, d, e + g + g / 4)
        },
        "spread.south": function (a, b, c, d, e, f, g) {
            return nd(a, c, b, d, e - g / 4, d, e + g + g / 4)
        },
        "spread.west": function (a, b, c, d, e, f) {
            return nd(a, b, c, d - f / 4, e, d + f + f / 4, e)
        },
        "spread.east": function (a, b, c, d, e, f) {
            return nd(a, c, b, d - f / 4, e, d + f + f / 4, e)
        }
    }, !0),
    G(A, {
        polygon: function (a, b, d, e, f, g) {
            var h = g ? g.side : 6;
            (h == c || 3 > h) && (h = 6);
            var i = g ? g.beginAngle : 0;
            i == c && (i = 0);
            for (var j, k, l = m(e, f) / 2, n = b + e / 2, r = d + f / 2, s = 2 * q / h, t = 0; h > t; t++)
                j = n + o(i) * l, k = r + p(i) * l, 0 === t ? a.moveTo(j, k) : a.lineTo(j, k), i += s;
            a.closePath()
        },
        arc: function (a, b, d, e, f, g) {
            var h,
            i,
            j,
            k;
            g && (h = g.beginAngle, i = g.endAngle, j = g.closePath, k = g.oval),
            h == c && (h = q),
            i == c && (i = r),
            j == c && (j = !0),
            k == c && (k = !1);
            var l = b + e / 2,
            n = d + f / 2;
            j && a.moveTo(l, n),
            k ? (h = -h, i = -i, ub(a, l, n, h, i - h, e / 2, f / 2, !0)) : a.arc(l, n, m(e, f) / 2, h, i),
            j && a.closePath()
        },
        roundRect: function (a, b, d, e, f, g) {
            g = g || {};
            var h = g.cornerRadius;
            h == c && (h = m(m(e, f) / 4, 8));
            var i = g.topLeftRadius;
            i == c && (i = h);
            var j = g.topRightRadius;
            j == c && (j = h);
            var k = g.bottomLeftRadius;
            k == c && (k = h);
            var l = g.bottomRightRadius;
            l == c && (l = h),
            vb(a, b, d, e, f, i, j, k, l)
        },
        rect: function (a, b, c, d, e) {
            a.rect(b, c, d, e)
        },
        circle: function (a, b, c, d, e) {
            a.arc(b + d / 2, c + e / 2, m(d, e) / 2, 0, r, !0)
        },
        oval: function (a, b, c, d, e) {
            ub(a, b + d / 2, c + e / 2, 0, r, d / 2, e / 2, !1)
        },
        star: function (a, b, c, d, e) {
            var f = 2 * d,
            g = 2 * e,
            h = b + d / 2,
            i = c + e / 2;
            a.moveTo(h - f / 4, i - g / 12),
            a.lineTo(b + .306 * d, c + .579 * e),
            a.lineTo(h - f / 6, i + g / 4),
            a.lineTo(b + d / 2, c + .733 * e),
            a.lineTo(h + f / 6, i + g / 4),
            a.lineTo(b + .693 * d, c + .579 * e),
            a.lineTo(h + f / 4, i - g / 12),
            a.lineTo(b + .611 * d, c + .332 * e),
            a.lineTo(h + 0, i - g / 4),
            a.lineTo(b + .388 * d, c + .332 * e),
            a.closePath()
        },
        triangle: function (a, b, c, d, e) {
            a.moveTo(b + d / 2, c),
            a.lineTo(b + d, c + e),
            a.lineTo(b, c + e),
            a.closePath()
        }
    }, !0),
    G(C, {
        image: function (a, b, c, d, e, f) {
            var g = ca(cc(c.name, d, e), h);
            if (g) {
                var h = cc(c.blendColor, d, e) || f;
                da(a, g, cc(c.stretch, d, e), b.x, b.y, b.width, b.height, d, e, h, !1)
            }
        },
        text: function (a, b, d, e, f, g) {
            var h = cc(d.text, e, f);
            h != c && fa(a, h, cc(d.font, e, f), dc(d.color, e, f, g), b.x, b.y, b.width, b.height, cc(d.align, e, f), cc(d.vAlign, e, f))
        },
        border: function (a, b, c, d, e, f) {
            var g = dc(c.borderColor, d, e, f),
            h = cc(c.borderWidth, d, e),
            i = cc(c.borderDepth, d, e);
            h && tb(a, g, b.x, b.y, b.width, b.height, h),
            i && wb(a, g, i, b)
        },
        shape: function (a, b, c, d, e, f) {
            var g = dc(c.background, d, e, f),
            h = ca(cc(c.repeatImage, d, e), f);
            h ? rb(a, h) : g && qb(a, g, cc(c.gradient, d, e), dc(c.gradientColor, d, e, f), b),
            yb(a, b.points, cc(c.segments, d, e), cc(c.closePath, d, e)),
            (h || g) && a.fill();
            var i = cc(c.borderWidth, d, e);
            if (i) {
                var j = dc(c.borderColor, d, e, f),
                k = cc(c.borderDashPattern, d, e);
                Vb(a, k, cc(c.borderDashOffset, d, e)),
                a.lineWidth = i,
                a.strokeStyle = j,
                a.stroke(),
                cc(c.borderGradient, d, e) && xb(a, j, dc(c.borderGradientColor, d, e, f), i),
                Wb(a, k)
            }
            if (i = cc(c.border2Width, d, e)) {
                var j = dc(c.border2Color, d, e, f),
                k = cc(c.border2DashPattern, d, e);
                Vb(a, k, cc(c.border2DashOffset, d, e)),
                a.lineWidth = i,
                a.strokeStyle = j,
                a.stroke(),
                cc(c.border2Gradient, d, e) && xb(a, j, dc(c.border2GradientColor, d, e, f), i),
                Wb(a, k)
            }
        }
    }, !0);
    var pd = _("qc.widget.Property", Pc, function Oe(a) {
        Oe["super"].constructor.call(this, a)
    }, {
        _icon: c,
        _color: c,
        _font: c,
        _renderer: c,
        _rendererClass: c,
        _editor: c,
        _editorClass: c,
        _categoryName: c,
        _visible: !0,
        _accessType: "property",
        _valueType: c,
        _editable: !1,
        _batchEditable: !0,
        getValue: function (a) {
            return Lc(a, this._accessType, this._name)
        },
        setValue: function (a, b) {
            Mc(a, this._accessType, this._name, b)
        },
        getToolTip: function (a, b) {
            return b.getValue(a, this)
        }
    }, {
        properties: ["font", "color", "renderer", "rendererClass", "editor", "editorClass", "categoryName", "visible", "accessType", "valueType", "editable", "batchEditable"]
    }),
    qd = _("qc.widget.Column", pd, function Pe(a) {
        Pe["super"].constructor.call(this, a)
    }, {
        _width: 80,
        _sortOrder: "asc",
        _sortFunc: c,
        _sortable: !0
    }, {
        properties: ["sortOrder", "sortFunc", "sortable"]
    }, {
        width: {
            get: function () {
                return this._width
            },
            set: function (a) {
                16 > a && (a = 16);
                var b = this._width;
                this._width = a,
                this.epc("width", b, a)
            }
        }
    }),
    rd = _("qc.widget.Tab", Pc, function Qe() {
        Qe["super"].constructor.call(this)
    }, {
        _icon: c,
        _closable: !1,
        _disabled: !1
    }, {
        properties: ["element", "closable", "disabled"]
    });
    _("qc.widget.List", b, function (a, b) {
        this.initList(a),
        new Rd(this),
        Ja(this, b)
    }, {
        _rowLineVisible: !1,
        drawRow: function (a, b, d, e, f, g) {
            var h = this,
            i = 0,
            j = h._indent,
            k = h.getIcon(b) ? j : 0;
            h.drawRowBackground(a, b, d, e, f, g),
            h._checkMode && (da(a, h.getCheckIcon(b), c, i, e, j, g, b, h), i += j),
            h.drawIcon(a, b, i, e, k, g),
            h.drawLabel(a, b, i + k, e, g)
        },
        getPreferredSize: function () {
            var a = this,
            b = a._preferredSize || a._calcdPreferredSize;
            if (!b) {
                var c = 0,
                d = 0,
                e = a._dataModel,
                f = a._indent,
                g = a._rowHeight;
                e.forEach(function (b) {
                    var d = a.getLabel(b),
                    e = a.getLabelFont(b),
                    g = Ka(e, d),
                    h = g.width;
                    h += a.getIcon(b) ? f : 0,
                    c = l(h, c)
                }),
                a._checkMode && (c += f),
                d += g * e.length,
                b = a._calcdPreferredSize = {
                    width: j(c),
                    height: j(d)
                }
            }
            return b
        }
    }, {
        view: !0,
        scrollBar: !0,
        element: !0,
        emitter: !0,
        toolTip: !0,
        painter: !0,
        bnb: !0,
        sm: !0,
        list: !0
    }),
    _("qc.widget.Table", b, function (a, b) {
        var c = this;
        c.initTable(),
        c.initList(a),
        c._editorDiv = ra(!1, c._view),
        new Sd(c),
        Ja(c, b)
    }, {
        onCheckColumnClick: function () {}
    }, {
        view: !0,
        scrollBar: !0,
        element: !0,
        emitter: !0,
        toolTip: !0,
        painter: !0,
        bnb: !0,
        sm: !0,
        list: !0,
        table: !0,
        property: !0
    }, {
        checkMode: {
            set: function (a) {
                var b = this,
                c = b._columnModel,
                d = b.checkColumn,
                e = b._checkMode;
                a !== e && (a ? c.contains(d) || c.add(d, 0) : c.contains(d) && c.remove(d), b._checkMode = a, b.epc("checkMode", e, a))
            },
            get: function () {
                return this._checkMode
            }
        },
        checkColumn: {
            get: function () {
                var a = this;
                if (!a._checkColumn) {
                    var b = a._checkColumn = new qd;
                    b.editable = !0,
                    b.width = 40,
                    b.valueType = "boolean",
                    b.getValue = function (b) {
                        return a.isSelected(b)
                    },
                    b.setValue = function (b) {
                        a.checkData(b)
                    }
                }
                return a._checkColumn
            }
        }
    }),
    _("qc.widget.Tree", b, function (a, b) {
        this.initTree(),
        this.initList(a),
        new Td(this),
        Ja(this, b)
    }, {
        _toggleOnDoubleClick: !0,
        drawRow: function (a, b, c, d, e, f) {
            this.drawRowBackground(a, b, c, d, e, f),
            this.drawTree(a, b, 0, d, e, f)
        },
        isOnToggleIcon: function (a) {
            var b = this.getDataAt(a);
            if (!b)
                return !1;
            if (this.getToggleIcon(b)) {
                var c = this._indent,
                d = this.getLevel(b),
                e = this.lp(a).x,
                f = c * d;
                return e >= f && f + c >= e ? !0 : !1
            }
        }
    }, {
        properties: ["toggleOnDoubleClick"],
        view: !0,
        scrollBar: !0,
        element: !0,
        emitter: !0,
        toolTip: !0,
        painter: !0,
        bnb: !0,
        sm: !0,
        list: !0,
        tree: !0
    }),
    _("qc.widget.TreeTable", b, function (a, b) {
        var c = this,
        d = c._treeColumn = new qd;
        c.initTree(),
        c.initTable(),
        c.initList(a),
        c._editorDiv = ra(!1, c._view),
        d.editable = !0,
        d.width = 180,
        d.getValue = function (a) {
            return a.name
        },
        d.renderer = new $c({
            draw: function (a, b, d, e, f, g) {
                c.drawTree(a, this.data, d, e, f, g)
            }
        }),
        c._columnModel.add(d),
        new Ud(this),
        Ja(c, b)
    }, {
        getTreeColumn: function () {
            return this._treeColumn
        }
    }, {
        view: !0,
        scrollBar: !0,
        element: !0,
        emitter: !0,
        toolTip: !0,
        painter: !0,
        bnb: !0,
        sm: !0,
        list: !0,
        tree: !0,
        table: !0,
        property: !0
    });
    var sd = "_NONE_";
    _("qc.widget.PropertyTable", b, function (a, b) {
        var c = this;
        c._rows = [],
        c._categories = [],
        c._categoryMap = {},
        c._historyMap = {};
        var d = c._propertyModel = new Qc;
        d.on("dataModelChange", c.ivm, c),
        d.on("dataPropertyChange", c.ivm, c),
        d.on("hierarchyChange", c.ivm, c),
        c.initView(!0, !0),
        c.scrollBarMode = "auto",
        c._editorDiv = ra(!1, c._view),
        c.dataModel = a ? a : new Qc,
        new Vd(c),
        Ja(c, b)
    }, {
        _batchEditable: !0,
        _categorizable: !0,
        _expandIcon: "expand",
        _collapseIcon: "collapse",
        _selectRowIndex: -1,
        _selectBackground: L,
        _background: y.propertyTableBackground,
        _labelColor: M,
        _labelSelectColor: N,
        _labelFont: I,
        _indent: w.indent,
        _rowHeight: w.rowHeight,
        _rowLineVisible: !0,
        _rowLineColor: $,
        _columnLineVisible: !0,
        _columnLineColor: $,
        _columnLineX: 0,
        _columnPosition: .5,
        ivm: function () {
            this._invalidateModel || (this._invalidateModel = !0, this.iv())
        },
        getRows: function () {
            return this._rows
        },
        isPropertySelected: function (a) {
            var b = this._selectRowIndex,
            c = this._rows;
            if (b >= 0 && b < c.length) {
                var d = c[b];
                if (d.property === a)
                    return !0
            }
            return !1
        },
        getSelectBackground: function () {
            return this.selectBackground
        },
        getColumnPosition: function () {
            return this._columnPosition
        },
        setColumnPosition: function (a) {
            0 > a && (a = 0),
            a > 1 && (a = 1);
            var b = this,
            c = b._columnPosition;
            b._columnPosition = a,
            b.epc("columnPosition", c, a)
        },
        getLabelFont: function (a, b) {
            return this.labelFontFunc ? this.labelFontFunc(a, b) : this._labelFont
        },
        getLabelColor: function (a, b) {
            var c = this;
            return c.labelColorFunc ? c.labelColorFunc(a, b) : c.isPropertySelected(b) ? c._labelSelectColor : c._labelColor
        },
        getPropertyName: function (a) {
            return a.displayName == c ? a.name : a.displayName
        },
        getPropertyFont: function (a) {
            return a.font || this._labelFont
        },
        getPropertyColor: function (a) {
            return this.isPropertySelected(a) ? this._labelSelectColor : a.color || this._labelColor
        },
        getCategoryFont: function () {
            return this._labelFont
        },
        getCategoryColor: function () {
            return this._labelColor
        },
        isExpanded: function (a) {
            if (!a)
                return !0;
            var b = this._categoryMap[a];
            return b ? b.isExpanded : !(this._historyMap[a] === !1)
        },
        toggle: function (a) {
            var b = this;
            b.isExpanded(a) ? b.collapse(a) : b.expand(a)
        },
        expandAll: function () {
            this.validate();
            for (var a in this._categoryMap)
                this.expand(a)
        },
        expand: function (a) {
            if (a && a !== sd) {
                var b = this,
                c = b._categoryMap[a];
                c && !c.isExpanded && (c.isExpanded = !0, b.onExpand(a), b.ivm())
            }
        },
        onExpand: function () {},
        collapseAll: function () {
            this.validate();
            for (var a in this._categoryMap)
                this.collapse(a)
        },
        collapse: function (a) {
            if (a && a !== sd) {
                var b = this,
                c = b._categoryMap[a];
                c && c.isExpanded && (c.isExpanded = !1, b.onCollapse(a), b.ivm())
            }
        },
        onCollapse: function () {},
        getCategoryName: function (a) {
            if (!this.categorizable)
                return sd;
            var b = a.categoryName;
            return b ? b : sd
        },
        isVisible: function (a) {
            return this._visibleFunc ? this._visibleFunc(a) : !0
        },
        onPropertyChange: function (a) {
            var b = this,
            c = a.property;
            b.checkChildPreferredSizeChange(c),
            Cc[c] ? b.ivm() : b.iv(),
            zc[c] && (b.showScrollBar(), b.endEditing()),
            "selectRowIndex" === c && b.scrollToIndex(b._selectRowIndex)
        },
        handleDataPropertyChange: function (a) {
            this._currentData === a.data && this.iv()
        },
        redraw: function () {
            this.iv()
        },
        validateModel: function () {
            var a = this,
            b = a._rows,
            c = a._categories,
            e = {},
            f = [],
            g = a._currentData;
            a._currentData = a.selectionModel.lastData,
            g !== a._currentData && a.endEditing(),
            b.length = 0,
            c.length = 0;
            var h = a._currentData ? a._propertyModel._roots : pa;
            h.forEach(function (b) {
                if (a.isVisible(b)) {
                    f.push(b);
                    var g = a.getCategoryName(b);
                    e[g] || (Ua(c, g, g === sd ? 0 : d), e[g] = {
                            isExpanded: a.isExpanded(g),
                            properties: []
                        })
                }
            }),
            a._sortFunc && f.sort(a._sortFunc);
            for (var i in a._categoryMap)
                a._historyMap[i] = a.isExpanded(i);
            a._categoryMap = e,
            c.forEach(function (c) {
                c !== sd && b.push(c);
                var d = e[c];
                d.isExpanded && f.forEach(function (e) {
                    a.getCategoryName(e) === c && (d.properties.push(e), b.push({
                            property: e,
                            data: a._currentData
                        }))
                })
            })
        },
        validateImpl: function () {
            var a = this;
            a.removeElements(),
            a._invalidateModel && (a.validateModel(), delete a._invalidateModel);
            var b = a._canvas,
            d = a.clientWidth,
            e = a.clientHeight,
            f = -a.translateY,
            g = a._rowHeight,
            h = a._indent,
            k = d,
            l = a._rows,
            m = l.length,
            n = a._columnLineX = k * a._columnPosition,
            o = a._scrollHeight = m * g;
            ta(b, d, e),
            a._viewRect = {
                x: 0,
                y: f,
                width: d,
                height: e
            },
            a._beginRowIndex = i(f / g),
            a._endRowIndex = j((f + e) / g),
            a._beginRowIndex < 0 && (a._beginRowIndex = 0),
            a._endRowIndex > m && (a._endRowIndex = m);
            var p = Ub(b, 0, -f, 1, {
                x: 0,
                y: f,
                width: d,
                height: e
            });
            a.drawBottomPainters(p);
            for (var q = a._beginRowIndex; q < a._endRowIndex; q++) {
                var r = l[q],
                f = g * q;
                if (!Pa(r)) {
                    var s = r.property,
                    t = r.data;
                    a.drawRowBackground(p, r, 0, f, k, g, q),
                    da(p, s.icon, c, 0, f, h, g),
                    p.save(),
                    p.beginPath(),
                    p.rect(h, f, n - h, g),
                    p.clip(),
                    a.drawPropertyName(p, s, q, h, f, n - h, g),
                    p.restore(),
                    a.drawCell(p, t, s, n + 1, f, d - n - 1, g)
                }
                a._rowLineVisible && sb(p, 0, f + g - 1, k, 1, a._rowLineColor)
            }
            a._columnLineVisible && (sb(p, n, 0, 1, o, a._columnLineColor), sb(p, d - 1, 0, 1, o));
            for (var q = a._beginRowIndex; q < a._endRowIndex; q++) {
                var r = l[q],
                f = g * q;
                if (Pa(r)) {
                    a.drawRowBackground(p, r, 0, f, k, g);
                    var u = a.isExpanded(r) ? a._expandIcon : a._collapseIcon;
                    da(p, u, c, 0, f, h, g),
                    p.save(),
                    p.beginPath(),
                    p.rect(h, f, k, g),
                    p.clip(),
                    a.drawCategoryName(p, r, h, f, k, g),
                    p.restore()
                }
            }
            a.drawTopPainters(p),
            p.restore(),
            a.translateY = a.translateY
        },
        drawRowBackground: function (a, b, d, e, f, g, h) { {
                var i = this,
                j = i._background;
                i._indent
            }
            if (Pa(b))
                j && sb(a, d, e, f, g, j);
            else {
                var k = i._selectRowIndex === h ? i.selectBackground : c;
                k ? sb(a, d, e, f, g, k) : sb(a, d, e, f, g, "white")
            }
        },
        drawCategoryName: function (a, b, c, d, e, f) {
            fa(a, b, this.getCategoryFont(b), this.getCategoryColor(b), c, d, e, f)
        },
        drawPropertyName: function (a, b, c, d, e, f, g) {
            fa(a, this.getPropertyName(b), this.getPropertyFont(b), this.getPropertyColor(b), d, e, f, g)
        },
        setProperties: function (a) {
            this._propertyModel.clear(),
            this.addProperties(a)
        },
        addProperties: function (a) {
            a && a.forEach(function (a) {
                a instanceof pd || (a = Ia(pd, a)),
                this._propertyModel.add(a)
            }, this)
        },
        getRowIndexAt: function (a) {
            var b = this,
            c = i(b.lp(a).y / b._rowHeight);
            return c >= 0 && c < b._rows.length ? c : -1
        },
        getPropertyAt: function (a) {
            var b = this,
            d = b.getRowIndexAt(a);
            return d >= 0 ? b._rows[d].property : c
        },
        getToolTip: function (a) {
            var b = this,
            d = b.getPropertyAt(a),
            e = b._currentData;
            return d && e ? b.lp(a).x < b._columnLineX ? b.getPropertyName(d) : d.getToolTip(e, b) : c
        },
        scrollToIndex: function (a) {
            var b = this,
            c = b._viewRect,
            d = c.height,
            e = b._rowHeight,
            f = e * a;
            a >= 0 && a < b._rows.length && d > 0 && (f + e > c.y + d ? b.translateY = -f + d - e : f < c.y && (b.translateY = -f))
        }
    }, {
        properties: ["categorizable", "expandIcon", "collapseIcon", "selectRowIndex", "selectBackground", "background", "labelColor", "labelColorFunc", "labelSelectColor", "labelFont", "labelFontFunc", "indent", "rowHeight", "rowLineVisible", "rowLineColor", "columnLineVisible", "columnLineColor", "columnPosition"],
        view: !0,
        scrollBar: !0,
        element: !0,
        emitter: !0,
        toolTip: !0,
        painter: !0,
        sm: !0,
        property: !0
    }, {
        dataModel: {
            get: function () {
                return this._dataModel
            },
            set: function (a) {
                var b = this,
                c = b._dataModel;
                c !== a && (c && (c.off("dataPropertyChange", b.handleDataPropertyChange, b), b._selectionModel || c.selectionModel.off("selectionChange", b.ivm, b)), b._dataModel = a, a.on("dataPropertyChange", b.handleDataPropertyChange, b), b._selectionModel ? b._selectionModel._setDataModel(a) : a.selectionModel.on("selectionChange", b.ivm, b), b.epc("dataModel", c, a))
            }
        },
        propertyModel: {
            get: function () {
                return this._propertyModel
            }
        },
        currentData: {
            get: function () {
                return this._currentData
            }
        }
    }),
    _("qc.widget.TableHeader", b, function (a, b) {
        var c = this,
        d = a.columnModel;
        c.initView(!0, !0),
        c._table = a,
        c._columnInfos = [],
        d.on("dataModelChange", c.iv, c),
        d.on("dataPropertyChange", c.iv, c),
        d.on("hierarchyChange", c.iv, c),
        c._view.style.background = y.tableHeaderBackground,
        c.height = w.headerHeight,
        a.on("propertyChange", function (a) {
            yc[a.property] && c.iv()
        }, c),
        new Wd(c),
        Ja(c, b)
    }, {
        _labelColor: M,
        _labelFont: I,
        _align: "left",
        _indent: w.indent,
        _checkIcon: "uncheck",
        _sortDescIcon: "sortDesc",
        _sortAscIcon: "sortAsc",
        _columnLineVisible: !0,
        _columnLineColor: $,
        _moveBackground: y.tableHeaderMoveBackground,
        _insertColor: y.tableHeaderInsertColor,
        _resizable: !0,
        _movable: !0,
        _movingColumnInfo: c,
        getTable: function () {
            return this._table
        },
        getLabel: function (a) {
            return a.displayName == c ? a.name : a.displayName
        },
        getLabelFont: function (a) {
            return a.font || this._labelFont
        },
        getLabelColor: function (a) {
            return a.color || this._labelColor
        },
        getAlign: function (a) {
            return a.align || this._align
        },
        onPropertyChange: function (a) {
            this.checkChildPreferredSizeChange(a.property),
            this.iv()
        },
        isMultiCheckableColumn: function (a) {
            return this._table._checkColumn === a && "multiple" === this._table.selectionModel.selectionMode
        },
        validateImpl: function () {
            var a = this,
            b = a._canvas,
            c = a.clientWidth,
            d = a.clientHeight,
            e = a._columnInfos,
            f = a._movingColumnInfo,
            g = -a._table.translateX,
            h = 0;
            (c !== b.clientWidth || d !== b.clientHeight) && ta(b, c, d),
            e.length = 0,
            a._table._columnModel._roots.forEach(function (a) {
                if (a.visible) {
                    var b = h + a.width;
                    g + c >= h && b >= g && e.push({
                        column: a,
                        beginX: h,
                        endX: b
                    }),
                    h = b
                }
            });
            var i = Ub(b, -g, 0, 1, {
                x: g,
                y: 0,
                width: c,
                height: d
            });
            if (e.forEach(function (b) {
                    var c = b.column,
                    e = b.beginX,
                    g = c.width;
                    g && (i.save(), i.beginPath(), i.rect(e, 0, g, d), i.clip(), f && f.column === c || a.drawColumn(i, c, e, 0, g, d), a._columnLineVisible && sb(i, e + g - 1, 0, 1, d, a._columnLineColor), i.restore())
                }), f) {
                var j = f.column,
                h = f.beginX,
                k = j.width;
                i.save(),
                i.beginPath(),
                i.rect(h, 0, k, d),
                i.clip(),
                i.fillStyle = a._moveBackground,
                i.fill(),
                a.drawColumn(i, j, h, 0, k, d),
                i.restore(),
                nc(i, a._insertColor, f.position, 0, d)
            }
            i.restore()
        },
        drawColumn: function (a, b, d, e, f, g) {
            var h = this,
            i = h.getAlign(b);
            if (h.isMultiCheckableColumn(b) ? da(a, h._checkIcon, c, d, e, f, g) : oc(a, d, e, f, g, b.icon, h.getLabel(b), h.getLabelFont(b), h.getLabelColor(b), i, h._indent), b.sortable && h._table.sortColumn === b) {
                var j = "asc" === b.sortOrder ? h._sortAscIcon : h._sortDescIcon,
                k = ac(j);
                da(a, j, c, "right" === i ? d + 2 : d + f - 2 - k, e, k, g)
            }
        }
    }, {
        view: !0,
        emitter: !0,
        properties: ["labelColor", "labelFont", "align", "indent", "checkIcon", "sortDescIcon", "sortAscIcon", "columnLineVisible", "columnLineColor", "moveBackground", "insertColor", "resizable", "movable", "movingColumnInfo"]
    }, {
        translateX: {
            get: function () {
                return this._table.translateX
            },
            set: function (a) {
                this._table.translateX = a
            }
        }
    }),
    _("qc.widget.TablePane", b, function (a, b) {
        this.init(new e.widget.Table(a)),
        Ja(this, b)
    }, {}, {
        view: !0,
        emitter: !0,
        tablePane: !0
    }),
    _("qc.widget.TreeTablePane", b, function (a, b) {
        this.init(new e.widget.TreeTable(a)),
        Ja(this, b)
    }, {}, {
        view: !0,
        emitter: !0,
        tablePane: !0
    });
    var td = _("qc.widget.layout.BorderLayout", b, function (a, b) {
        this.container = a,
        this._interactor = new _d(this),
        this._toggleIcon = {
            width: 30,
            height: 30,
            comps: [{
                    type: "rect",
                    rect: [17, 1, 1],
                    relative: 1,
                    background: {
                        func: function (a, b) {
                            return b.toggleIconBackground
                        }
                    }
                }, {
                    type: "triangle",
                    rect: [17, 1, 1],
                    background: {
                        func: function (a, b) {
                            return b.toggleIconForecolor
                        }
                    }
                }
            ]
        },
        Ja(this, b)
    }, {
            _splitterColor: "rgb(165, 165, 165)",
            _leftResizable: !0,
            _rightResizable: !0,
            _topResizable: !0,
            _bottomResizable: !0,
            _leftToggleVisible: !0,
            _rightToggleVisible: !0,
            _topToggleVisible: !0,
            _bottomToggleVisible: !0,
            _leftSplitterVisible: !0,
            _rightSplitterVisible: !0,
            _topSplitterVisible: !0,
            _bottomSplitterVisible: !0,
            _minSize: 10,
            _toggleIconBackground: "rgb(206, 206, 206)",
            _toggleIconForecolor: "rgb(165, 165, 165)",
            _leftViewExpanded: !0,
            _rightViewExpanded: !0,
            _topViewExpanded: !0,
            _bottomViewExpanded: !0,
            _splitterSize: 6,
            _hitSize: F ? 16 : 8,
            _toggleIconScale: 1,
            _toggleLength: 20,
            _preferredSizeProperties: ["minSize", "splitterSize", "topSplitterSize", "rightSplitterSize", "bottomSplitterSize", "leftSplitterSize", "topViewExpanded", "bottomViewExpanded", "leftViewExpanded", "rightViewExpanded", "leftSplitterVisible", "rightSplitterVisible", "topSplitterVisible", "bottomSplitterVisible", "topView", "bottomView", "leftView", "rightView", "centerView"],
            getPreferredSize: function (a) {
                var b,
                d = this,
                e = d._container;
                if (e._preferredSize)
                    return e._preferredSize;
                if (e._calcdPreferredSizeMap || (e._calcdPreferredSizeMap = {}), a == c ? b = e._calcdPreferredSizeMap.nw : ("nw" !== a && isNaN(a) && console.error("BorerLayout: width is NaN"), b = e._calcdPreferredSizeMap[a]), !b) {
                    var f = function (a, b) {
                        var e,
                        f = d["_" + a + "View"];
                        return f ? ("center" === a && (b -= m.width, b -= n.width), e = f.getPreferredSize(isNaN(b) ? c : b)) : e = {
                            width: 0,
                            height: 0
                        }, {
                            width: e.width,
                            height: e.height
                        }
                    },
                    g = d.splitterSize,
                    h = d.leftSplitterSize,
                    i = d.rightSplitterSize,
                    j = d.topSplitterSize,
                    k = d.bottomSplitterSize,
                    m = f("left"),
                    n = f("right"),
                    o = f("top"),
                    p = f("bottom"),
                    q = f("center", a);
                    d.leftView && (m.width += d.leftSplitterVisible ? h != c ? h : g : 0),
                    d.rightView && (n.width += d.rightSplitterVisible ? i != c ? i : g : 0),
                    d.topView && (o.height += d.topSplitterVisible ? j != c ? j : g : 0),
                    d.bottomView && (p.height += d.bottomSplitterVisible ? k != c ? k : g : 0),
                    b = {
                        width: m.width + n.width + q.width,
                        height: o.height + q.height + p.height
                    },
                    b.width = l(b.width, o.width),
                    b.width = l(b.width, p.width),
                    e._calcdPreferredSizeMap[a == c ? "nw" : a] = b
                }
                return b
            },
            isExpanded: function (a) {
                var b = this;
                return b["_" + a + "View"] ? !!this["_" + a + "ViewExpanded"] : void 0
            },
            setExpanded: function (a, b) {
                var c = this.isExpanded(a);
                this["_" + a + "ViewExpanded"] = b,
                this.epc(a + "ViewExpanded", c, b)
            },
            onPropertyChange: function (a) {
                var b = this._container,
                c = a.property;
                b.checkChildPreferredSizeChange(c, this._preferredSizeProperties),
                ["leftView", "rightView", "topView", "bottomView", "centerView"].indexOf(c) >= 0 && b.iv(!0),
                b.iv()
            },
            setContent: function (a, b) {
                var d = this,
                e = "_" + a,
                f = d._container._interactionDiv,
                g = d[e + "View"],
                h = d[e + "Splitter"];
                if (g !== b) {
                    if (g && (g._parent = c, Ba(g.view), Ba(h)), b && !b.view) {
                        var i = new wd;
                        i.layout.htmlFill = !0,
                        i.setItems(b),
                        b = i
                    }
                    if (d[e + "View"] = b, b && (b.parent = d.container, za(f, b.view, 1), "center" !== a)) {
                        var h = d[e + "Splitter"] = ra(!1, f),
                        j = h.style;
                        d[e + "SplitterCover"] = ra(!1, h);
                        var k = d[e + "Toggle"] = sa(h),
                        l = k.style;
                        l.msTouchAction = "auto",
                        l.pointerEvents = "auto",
                        j.zIndex = "1";
                        var m = d[e + "SplitterColor"] || d.splitterColor;
                        m && (j.background = m)
                    }
                    d.epc(a + "View", g, b)
                }
            },
            resetItems: function (a) {
                var b = this;
                b.leftView = c,
                b.rightView = c,
                b.topView = c,
                b.bottomView = c,
                b.centerView = c,
                a && a.forEach(function (a) {
                    var c = a.region;
                    "left" === c ? (b.leftView = a.element, b.leftWidth = a.width) : "right" === c ? (b.rightView = a.element, b.rightWidth = a.width) : "top" === c ? (b.topView = a.element, b.topHeight = a.height) : "bottom" === c ? (b.bottomView = a.element, b.bottomHeight = a.height) : "center" === c && (b.centerView = a.element)
                })
            },
            removeChild: function (a) {
                var b = this;
                ["left", "right", "top", "bottom", "center"].forEach(function (d) {
                    var e = b[d + "View"];
                    e && e === a && (b[d + "View"] = c)
                })
            },
            doLayout: function () {
                var a = this,
                b = a._container,
                d = a.topView,
                e = a.bottomView,
                f = a.leftView,
                g = a.hitSize,
                i = a.rightView,
                j = a.centerView,
                k = a.splitterSize,
                l = a.leftSplitterSize != c ? a.leftSplitterSize : k,
                m = a.rightSplitterSize != c ? a.rightSplitterSize : k,
                n = a.topSplitterSize != c ? a.topSplitterSize : k,
                o = a.bottomSplitterSize != c ? a.bottomSplitterSize : k,
                p = b.clientWidth,
                q = b.clientHeight,
                r = a.minSize,
                t = a.toggleLength,
                u = a._toggleIcon,
                v = 0,
                w = 0,
                x = p,
                y = q,
                z = 0,
                A = 0,
                B = 0,
                C = 0;
                if (d) {
                    var n = a.topSplitterVisible ? n : 0,
                    D = a.isExpanded("top");
                    if (D) {
                        if (z = a._topHeight, z == c) {
                            var E = d.getPreferredSize();
                            z = a._topHeight = E.height
                        }
                        w = z + n
                    } else
                        z = 0, w = n
                }
                if (e) {
                    var o = a.bottomSplitterVisible ? o : 0,
                    D = a.isExpanded("bottom");
                    if (D) {
                        if (A = a._bottomHeight, A == c) {
                            var E = e.getPreferredSize();
                            A = a._bottomHeight = E.height
                        }
                        y = q - A - o
                    } else
                        A = 0, y = q - o
                }
                if (f) {
                    var l = a.leftSplitterVisible ? l : 0,
                    D = a.isExpanded("left");
                    if (D) {
                        if (B = a._leftWidth, B == c) {
                            var E = f.getPreferredSize();
                            B = a._leftWidth = E.width
                        }
                        v = B + l
                    } else
                        B = 0, v = l
                }
                if (i) {
                    var m = a.rightSplitterVisible ? m : 0,
                    D = a.isExpanded("right");
                    if (D) {
                        if (C = a._rightWidth, C == c) {
                            var E = i.getPreferredSize();
                            C = a._rightWidth = E.width
                        }
                        x = p - C - m
                    } else
                        C = 0, x = p - m
                }
                var F = x - v,
                G = y - w;
                if (r > F && (a.leftView || a.rightView)) {
                    var H =  - (F - r);
                    if (a.leftView) {
                        var I;
                        I = B - H > r ? H : B - r,
                        B -= I,
                        v -= I,
                        H -= I
                    }
                    if (a.rightView && H > 0) {
                        var J;
                        J = C - H > r ? H : C - r,
                        C -= J,
                        x += J,
                        H -= J
                    }
                    if (H > 0)
                        return
                }
                if (r > G && (a.topView || a.bottomView)) {
                    var H =  - (G - r);
                    if (a.topView) {
                        var K;
                        K = z - H > r ? H : z - r,
                        z -= K,
                        w -= K,
                        H -= K
                    }
                    if (a.bottomView && H > 0) {
                        var L;
                        L = A - H > r ? H : A - r,
                        A -= L,
                        y += L,
                        H -= L
                    }
                    if (H > 0)
                        return
                }
                a._lw = B,
                a._rw = C,
                a._bh = A,
                a._th = z;
                var M,
                N = function (d, e, f, g, h, i, j, k, l) {
                    var m = a["_" + d + "View"],
                    n = a["_" + d + "Splitter"],
                    o = a["_" + d + "SplitterVisible"],
                    p = a["_" + d + "SplitterCover"],
                    q = a["_" + d + "Toggle"],
                    r = a["_" + d + "Resizable"],
                    s = a["_" + d + "ToggleVisible"],
                    t = a[d + "SplitterColor"] || a.splitterColor;
                    if (t && (n.style.background = t, n.style.backgroundSize = "100% 100%"), wa(m, e, b._forceLayout), wa(n, g), wa(p, h), 0 !== f && o)
                        if (n.style.display = "block", r && s) {
                            q.style.display = "block",
                            ta(q, i.width, i.height),
                            wa(q, i);
                            var v = Ub(q, 0, 0, 1, {
                                x: 0,
                                y: 0,
                                width: i.width,
                                height: i.height
                            });
                            v.beginPath();
                            var w = j;
                            a.isExpanded(d) === !1 && (w = k),
                            u.comps[1].rotation = w;
                            var x = a.toggleNinePatchImage,
                            y = a.toggleNinePatchBorder || [];
                            x && (u.comps[0].background = "rgba(0, 0, 0, 0)", ea(v, x, l.x, l.y, l.width, l.height, y[0], y[1], y[2], y[3])),
                            da(v, u, null, l.x, l.y, l.width, l.height, c, a),
                            v.restore()
                        } else
                            q.style.display = "none";
                    else
                        n.style.display = "none"
                },
                O = a._toggleIconScale;
                d && (u.width = t, u.height = n, u.comps[1].rect = [17, n * O, n * O], M = h(n / 2 - g / 2), N("top", {
                        x: 0,
                        y: 0,
                        width: p,
                        height: z
                    }, n, {
                        x: 0,
                        y: z,
                        width: p,
                        height: n
                    }, {
                        x: 0,
                        y: M,
                        width: p,
                        height: g
                    }, {
                        x: p / 2 - t / 2,
                        y: M,
                        width: t,
                        height: g
                    }, 0, Math.PI, {
                        x: 0,
                        y: -M,
                        width: t,
                        height: n
                    })),
                e && (u.width = t, u.height = o, u.comps[1].rect = [17, o * O, o * O], M = h(o / 2 - g / 2), N("bottom", {
                        x: 0,
                        y: y + o,
                        width: p,
                        height: A
                    }, o, {
                        x: 0,
                        y: y,
                        width: p,
                        height: o
                    }, {
                        x: 0,
                        y: M,
                        width: p,
                        height: g
                    }, {
                        x: p / 2 - t / 2,
                        y: M,
                        width: t,
                        height: g
                    }, -Math.PI, 0, {
                        x: 0,
                        y: -M,
                        width: t,
                        height: o
                    })),
                f && (M = h(l / 2 - g / 2), u.width = l, u.height = t, u.comps[1].rect = [17, l * O, l * O], N("left", {
                        x: 0,
                        y: w,
                        width: B,
                        height: G
                    }, l, {
                        x: B,
                        y: w,
                        width: l,
                        height: G
                    }, {
                        x: M,
                        y: 0,
                        width: g,
                        height: G
                    }, {
                        x: M,
                        y: G / 2 - t / 2,
                        width: g,
                        height: t
                    }, -Math.PI / 2, Math.PI / 2, {
                        x: -M,
                        y: 0,
                        width: l,
                        height: t
                    })),
                i && (M = h(m / 2 - g / 2), u.width = m, u.height = t, u.comps[1].rect = [17, m * O, m * O], N("right", {
                        x: x + m,
                        y: w,
                        width: C,
                        height: G
                    }, m, {
                        x: x,
                        y: w,
                        width: m,
                        height: G
                    }, {
                        x: M,
                        y: 0,
                        width: g,
                        height: G
                    }, {
                        x: M,
                        y: G / 2 - t / 2,
                        width: g,
                        height: t
                    }, s, -s, {
                        x: -M,
                        y: 0,
                        width: m,
                        height: t
                    })),
                j && wa(j, v, w, F, G, b._forceLayout)
            },
            findViewById: function (a) {
                for (var b = this, c = [b._leftView, b._rightView, b._topView, b._bottomView, b._centerView], d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (e && e.id === a)
                        return e
                }
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (e) {
                        var f = e.findViewById(a);
                        if (f)
                            return f
                    }
                }
            }
        }, {
            emitter: !0,
            properties: ["container", "splitterColor", "topSplitterColor", "leftSplitterColor", "rightSplitterColor", "bottomSplitterColor", "leftToggleVisible", "rightToggleVisible", "topToggleVisible", "bottomToggleVisible", "toggleLength", "hitSize", "toggleIconScale", "toggleNinePatchImage", "toggleNinePatchBorder", "leftSplitterVisible", "rightSplitterVisible", "topSplitterVisible", "bottomSplitterVisible", "leftResizable", "rightResizable", "topResizable", "bottomResizable", "splitterSize", "topSplitterSize", "leftSplitterSize", "rightSplitterSize", "bottomSplitterSize", "leftWidth", "rightWidth", "topHeight", "bottomHeight", "minSize", "toggleIconBackground", "toggleIconForecolor"]
        }, {
            leftView: {
                set: function (a) {
                    this.setContent("left", a)
                },
                get: function () {
                    return this._leftView
                }
            },
            rightView: {
                set: function (a) {
                    this.setContent("right", a)
                },
                get: function () {
                    return this._rightView
                }
            },
            topView: {
                set: function (a) {
                    this.setContent("top", a)
                },
                get: function () {
                    return this._topView
                }
            },
            bottomView: {
                set: function (a) {
                    this.setContent("bottom", a)
                },
                get: function () {
                    return this._bottomView
                }
            },
            centerView: {
                set: function (a) {
                    this.setContent("center", a)
                },
                get: function () {
                    return this._centerView
                }
            },
            preferredSize: {
                get: function () {
                    return this.getPreferredSize()
                }
            },
            children: {
                get: function () {
                    var a = [],
                    b = this;
                    return [b.leftView, b.rightView, b.topView, b.bottomView, b.centerView].forEach(function (b) {
                        b && a.push(b)
                    }),
                    a
                }
            }
        }),
    ud = (_("qc.widget.layout.SplitLayout", b, function (a, b) {
            this.container = a,
            this._interactor = new ae(this),
            Ja(this, b),
            a.scrollBarMode = "off";
            var c = this._splitterDiv = ra();
            c.style.zIndex = "1",
            za(a._interactionDiv, c)
        }, {
            _minSize: 50,
            _positionType: "percentage",
            _position: .4,
            _orientation: "h",
            _draggable: !0,
            _splitterSize: 2,
            _splitterColor: "rgb(165, 165, 165)",
            _dragOpacity: .2,
            _preferredSizeProperties: [],
            getPreferredSize: function () {
                var a = this,
                b = a._container;
                return b._preferredSize || {
                    width: 100,
                    height: 100
                }
            },
            onPropertyChange: function (a) {
                var b = this._container,
                c = a.property;
                b.checkChildPreferredSizeChange(c, this._preferredSizeProperties),
                ["leftView", "rightView"].indexOf(c) >= 0 && b.iv(!0),
                b.iv()
            },
            setContent: function (a, b) {
                var d = this,
                e = "_" + a,
                f = d[e + "View"],
                g = d._container._interactionDiv;
                if (f !== b) {
                    if (f && (f._parent = c, Ba(f.view)), b && !b.view) {
                        var h = new wd;
                        h.layout.htmlFill = !0,
                        h.setItems(b),
                        b = h
                    }
                    d[e + "View"] = b,
                    b && (b.parent = d.container, za(g, b.view, 1)),
                    d.epc(a + "View", f, b)
                }
            },
            resetItems: function (a) {
                var b = this;
                b.leftView = c,
                b.rightView = c,
                a && (b.leftView = a[0], b.rightView = a[1])
            },
            removeChild: function (a) {
                var b = this;
                ["left", "right"].forEach(function (d) {
                    var e = b[d + "View"];
                    e && e === a && (b[d + "View"] = c)
                })
            },
            doLayout: function () {
                var a = this,
                b = (a.draggable, a.container),
                d = a.position,
                e = b.clientWidth,
                f = b.clientHeight,
                g = a.splitterSize,
                i = a.positionType,
                j = a.splitterColor,
                k = F ? 18 : 8,
                m = a.minSize,
                n = a._splitterDiv,
                o = n.style;
                if (b.width != c && b.height != c && b.isInDOM()) {
                    var p = a._coverDiv;
                    g >= k || 0 === g ? a._coverDiv && (Ba(a._coverDiv), delete a._coverDiv) : p || (p = a._coverDiv = ra(), Rb && (p.style.background = "rgba(255,255,255,0)"), za(n, p));
                    var q = a.leftView,
                    r = a.rightView;
                    if ("h" === a.orientation) {
                        if (g > e && (g = e), "absoluteLeft" === i)
                            var s = d, t = l(0, e - g - s);
                        else
                            "absoluteRight" === i ? (t = d, s = l(0, e - g - t)) : (s = h((e - g) * d), t = l(0, e - g - s));
                        if (m > s) {
                            var u =  - (s - m);
                            t - u > m ? (s = m, t -= u) : t > m && (s -= t - m, t = m)
                        } else if (m > t) {
                            var u =  - (t - m);
                            s - u > m ? (t = m, s -= u) : s > m && (t -= s - m, s = m)
                        }
                        q && wa(q, 0, 0, s, f, b._forceLayout),
                        r && wa(r, s + g, 0, t, f, b._forceLayout),
                        wa(n, s, 0, g, f),
                        a._absPosition = s,
                        p && wa(p, g / 2 - k / 2, 0, k, f)
                    } else {
                        if (g > f && (g = f), "absoluteLeft" === i)
                            var v = d, w = l(0, f - g - v);
                        else
                            "absoluteRight" === i ? (w = d, v = l(0, f - g - w)) : (v = h((f - g) * d), w = l(0, f - g - v));
                        if (m > v) {
                            var u =  - (v - m);
                            w - u > m ? (v = m, w -= u) : w > m && (v -= w - m, w = m)
                        } else if (m > w) {
                            var u =  - (w - m);
                            v - u > m ? (w = m, v -= u) : v > m && (w -= v - m, v = m)
                        }
                        q && wa(q, 0, 0, e, v, b._forceLayout),
                        r && wa(r, 0, v + g, e, w, b._forceLayout),
                        wa(n, 0, v, e, g),
                        a._absPosition = v,
                        p && wa(p, 0, g / 2 - k / 2, e, k)
                    }
                    o.background = j
                }
            },
            findViewById: function (a) {
                for (var b = this, c = [b._leftView, b._rightView], d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (e && e.id === a)
                        return e
                }
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (e) {
                        var f = e.findViewById(a);
                        if (f)
                            return f
                    }
                }
            }
        }, {
            emitter: !0,
            properties: ["container", "minSize", "splitterSize", "position", "positionType", "splitterColor", "dragOpacity", "orientation", "draggable"]
        }, {
            leftView: {
                set: function (a) {
                    this.setContent("left", a)
                },
                get: function () {
                    return this._leftView
                }
            },
            rightView: {
                set: function (a) {
                    this.setContent("right", a)
                },
                get: function () {
                    return this._rightView
                }
            },
            preferredSize: {
                get: function () {
                    return this.getPreferredSize()
                }
            },
            children: {
                get: function () {
                    var a = [],
                    b = this;
                    return [b.leftView, b.rightView].forEach(function (b) {
                        b && a.push(b)
                    }),
                    a
                }
            }
        }), _("qc.widget.layout.AccordionLayout", b, function (a, b) {
            var d = this;
            d.container = a,
            d._titleMap = {},
            d._titleList = [],
            d._currentTitle = c,
            d._currentView = c,
            d._currentElement = c,
            d._interactor = new $d(d),
            Ja(d, b)
        }, {
            _expandIcon: null,
            _collapseIcon: null,
            _titleHeight: 24,
            _labelColor: "black",
            _labelFont: "12px Arial",
            _titleBackground: "rgb(238, 238, 238)",
            _titleGradientColor: "rgb(211, 211, 211)",
            _titleActiveBackground: "rgb(223, 223, 223)",
            _titleActiveGradientColor: "rgb(233, 233, 233)",
            _selectBackground: "red",
            _selectWidth: 0,
            _orientation: "v",
            _separatorColor: "rgb(195, 195, 195)",
            _preferredSizeProperties: [],
            getPreferredSize: function () {
                var a = this._container,
                b = a._preferredSize || a._calcdPreferredSize;
                return b || (a._calcdPreferredSize = b = {
                        width: 100,
                        height: 100
                    }),
                b
            },
            onPropertyChange: function (a) {
                var b = this._container,
                c = a.property;
                b.checkChildPreferredSizeChange(c, this._preferredSizeProperties),
                "components" === c && b.iv(!0),
                b.iv()
            },
            getTitles: function () {
                return this._titleList
            },
            getCurrentTitle: function () {
                return this._currentTitle
            },
            getTitle: function (a) {
                var b = a.target,
                c = this._titleMap;
                for (var d in c) {
                    var e = c[d];
                    if (e.div.contains(b))
                        return d
                }
            },
            add: function (a, b, d, e) {
                var f = this,
                g = ra(),
                h = f._container;
                if (b.addToDOM && (b.parent = h), f._titleMap[a])
                    throw a + " already exists";
                g.onmousedown = K,
                g.style.cursor = "pointer",
                za(h._interactionDiv, g),
                f._titleMap[a] = {
                    element: b,
                    div: g,
                    canvas: sa(g),
                    icon: e
                },
                f._titleList.push(a),
                d && f.expand(a),
                f.epc("components", c, f._titleList)
            },
            remove: function (a) {
                var b = this,
                d = b._titleMap[a];
                if (d) {
                    var e = d.element;
                    e.addToDOM && (e._parent = c),
                    Ba(d.div),
                    delete b._titleMap[a],
                    Va(b._titleList, a),
                    b.epc("components", c, b._titleList)
                }
            },
            clear: function () {
                var a = this,
                b = a._titleMap;
                if (b)
                    for (var d in b) {
                        var e = b[d];
                        e.element.addToDOM && (e.element._parent = c)
                    }
                a._titleMap = {},
                a._titleList = [],
                a.epc("components", c, a._titleList)
            },
            isExpanded: function (a) {
                return this._currentTitle === a
            },
            expand: function (a) {
                var b = this;
                b._titleMap[a] && b._currentTitle !== a && (b._currentTitle = a, b.onExpanded(a), b._container.iv())
            },
            onExpanded: function () {},
            collapse: function () {
                var a = this;
                a._currentTitle && (a.onCollapsed(a._currentTitle), delete a._currentTitle, a._container.iv())
            },
            onCollapsed: function () {},
            initCanvas: function (a, b, c) {
                ta(a, b, c);
                var d = Ub(a, 0, 0, 1, {
                    x: 0,
                    y: 0,
                    width: b,
                    height: c
                });
                return d
            },
            getStateTitleBackground: function (a) {
                var b = this,
                c = b.isExpanded(a),
                d = [];
                if (c) {
                    var e = b.titleActiveBackground;
                    if (e) {
                        d.push(e);
                        var f = b.titleActiveGradientColor;
                        f && d.push(f)
                    }
                } else {
                    var g = b.titleBackground;
                    if (g) {
                        d.push(g);
                        var h = b.titleGradientColor;
                        h && d.push(h)
                    }
                }
                return d
            },
            drawTitle: function (a, b, c, d, e) {
                var f = this,
                g = ca(e.icon),
                h = f.isExpanded(b),
                i = f._titleHeight,
                j = f._titleBackground,
                k = f._selectWidth,
                l = f._separatorColor,
                m = f.titleBackgroundGradient || "linear.north",
                n = ca(h ? f._expandIcon : f._collapseIcon),
                o = k + 4;
                a.beginPath();
                var p = f.getStateTitleBackground(b);
                2 === p.length ? qb(a, p[1], m, p[0], {
                    x: 0,
                    y: 0,
                    width: c,
                    height: d
                }) : a.fillStyle = p[0],
                a.rect(0, 0, c, d),
                a.fill(),
                h && k && sb(a, 0, 0, k, d, f._selectBackground),
                (h || f._titleList[f._titleList.length - 1] !== b) && sb(a, 0, d - 1, c, 1, l ? l : lb(j)),
                g && (da(a, g, null, o + ac(g) / 2, i / 2), o += ac(g) + 2),
                fa(a, b, f.labelFontFunc ? f.labelFontFunc(b) : f.labelFont, f.labelColorFunc ? f.labelColorFunc(b) : f.labelColor, o, 0, 0, i),
                n && da(a, n, "uniform", c - 26, (i - 20) / 2, 20, 20)
            },
            doLayout: function () {
                var a = this,
                b = a._container,
                c = 0,
                d = 0,
                e = b.clientWidth,
                f = b.clientHeight,
                g = a._orientation,
                h = a._titleHeight,
                i = a._titleList.length * h,
                j = a._currentElement,
                k = a._currentView;
                delete a._currentElement,
                delete a._currentView;
                var m = function () {
                    var c = a._currentView;
                    j && j !== a._currentElement && j.endEditing && j.endEditing(),
                    c && c !== k && za(b._interactionDiv, c)
                };
                a._titleList.forEach(function (j) {
                    var k,
                    n,
                    o = a._titleMap[j],
                    p = o.element,
                    q = a._currentTitle === j;
                    "horizontal" === g || "h" === g ? (wa(o.div, c, 0, h, f), k = a.initCanvas(o.canvas, h, f), Xb(k, 0, f), Yb(k, -s), a.drawTitle(k, j, f, h, o), k.restore(), q ? (n = l(0, e - i), p && (a._currentElement = p, a._currentView = va(p), m(), wa(p, c + h, 0, n, f, b._forceLayout)), c += h + n) : c += h) : (wa(o.div, 0, d, e, h), k = a.initCanvas(o.canvas, e, h), a.drawTitle(k, j, e, h, o), k.restore(), q ? (n = l(0, f - i), p && (a._currentElement = p, a._currentView = va(p), m(), wa(p, 0, d + h, e, n, b._forceLayout)), d += h + n) : d += h)
                }),
                k && k !== a._currentView && Ba(k)
            },
            resetItems: function (a) {
                var b = this;
                b.clear(),
                a && a.forEach(function (a) {
                    b.add(a.title, a.element, a.expand, a.icon)
                })
            },
            removeChild: function (a) {
                var b = this,
                c = b._titleMap;
                for (var d in c) {
                    var e = c[d].element;
                    if (e === a) {
                        b.remove(d);
                        break
                    }
                }
            },
            findViewById: function (a) {
                var b = this,
                c = b._titleMap;
                for (var d in c) {
                    var e = c[d].element;
                    if (e.id === a)
                        return e
                }
                for (var d in c) {
                    var e = c[d].element,
                    f = e.findViewById(a);
                    if (f)
                        return f
                }
            }
        }, {
            emitter: !0,
            properties: ["container", "expandIcon", "collapseIcon", "titleHeight", "labelColor", "labelFont", "labelColorFunc", "labelFontFunc", "titleBackgroundGradient", "titleBackground", "titleGradientColor", "titleActiveBackground", "titleActiveGradientColor", "selectWidth", "selectBackground", "orientation", "separatorColor"]
        }, {
            preferredSize: {
                get: function () {
                    return this.getPreferredSize()
                }
            },
            children: {
                get: function () {
                    var a = this,
                    b = a._titleMap,
                    c = [];
                    for (var d in b)
                        c.push(b[d].element);
                    return c
                }
            }
        }), _("qc.widget.layout.FitLayout", b, function (a, b) {
            var c = this;
            c.container = a,
            Ja(c, b)
        }, {
            _htmlFill: !1,
            _padding: 0,
            _htmlFont: I,
            _htmlColor: M,
            _preferredSizeProperties: ["content", "htmlFill", "padding", "htmlFont"],
            getPreferredSize: function (a) {
                var b,
                d = this,
                e = d._container;
                if (e._preferredSize)
                    return e._preferredSize;
                if (e._calcdPreferredSizeMap || (e._calcdPreferredSizeMap = {}), a == c ? b = e._calcdPreferredSizeMap.nw : ("nw" !== a && isNaN(a) && console.error("FitLayout: width is NaN", a), b = e._calcdPreferredSizeMap[a]), !b) {
                    var f = d._contentObj,
                    g = d.content,
                    h = d.padding;
                    if (f && g) {
                        var i = document.body;
                        if (g.view)
                            b = g.getPreferredSize(a);
                        else if (d.htmlFill)
                            b = {
                                width: 100,
                                height: 100
                            };
                        else {
                            var j = f.parentNode,
                            k = f.style.display,
                            l = f.style.width,
                            m = f.style.font;
                            f.style.display = Pa(g) ? "inline-block" : g.style.display,
                            f.style.font = d.htmlFont,
                            a && (f.style.width = a + "px"),
                            i.appendChild(f),
                            b = {
                                width: f.offsetWidth + 1,
                                height: f.offsetHeight
                            },
                            i.removeChild(f),
                            f.style.width = l,
                            f.style.display = k,
                            f.style.font = m,
                            j && j.appendChild(f)
                        }
                        Sa(h) ? (b.width += h[1] + h[3], b.height += h[0] + h[2]) : (b.width += 2 * h, b.height += 2 * h),
                        e._calcdPreferredSizeMap[a == c ? "nw" : a] = b
                    }
                }
                return b || {
                    width: 100,
                    height: 100
                }
            },
            onPropertyChange: function (a) {
                var b = this,
                d = b._container,
                e = a.property;
                if (d.checkChildPreferredSizeChange(e, b._preferredSizeProperties), "content" === e) {
                    var f = a.oldValue,
                    g = a.newValue;
                    f && f.addToDOM && (f._parent = c),
                    g && g.addToDOM && (g.parent = d);
                    var h = ra(!1);
                    if (g)
                        if (Pa(g))
                            h.innerHTML = g;
                        else if (g.view) {
                            var i = g.view;
                            h.appendChild(i)
                        } else
                            h.appendChild(g);
                    h.style.position = "absolute",
                    h.className = "contentObj",
                    b._contentObj = h;
                    var j = d._contentDiv;
                    Ca(j, function (a) {
                        return a === d._canvas ? !1 : !0
                    }),
                    j.appendChild(h),
                    d.iv(!0)
                }
                d.iv()
            },
            doLayout: function () {
                var a,
                b,
                c,
                d,
                e = this,
                f = e._container,
                g = f.clientWidth,
                h = f.clientHeight,
                i = g,
                j = h,
                k = e.htmlFill,
                l = f._contentDiv,
                m = e._contentObj,
                n = e.content,
                o = e.padding;
                if (n) {
                    if (Sa(o) ? (c = o[0], b = o[1], d = o[2], a = o[3]) : c = b = d = a = o, i -= a + b, j -= c + d, n.view)
                        wa(n, a, c, i, j, f._forceLayout);
                    else if (m.style.font = e._htmlFont, m.style.color = e._htmlColor, m.style.paddingTop = c + "px", m.style.paddingRight = b + "px", m.style.paddingBottom = d + "px", m.style.paddingLeft = a + "px", k) {
                        m.style.width = "100%",
                        m.style.height = "100%";
                        var p = m.children;
                        1 === p.length && (p[0]._oldWidth = p[0].style.width, p[0]._oldHeight = p[0].style.height, p[0].style.width = "100%", p[0].style.height = "100%")
                    } else {
                        m.style.width = "",
                        m.style.height = "";
                        var p = m.children;
                        1 === p.length && (p[0].style.width = p[0]._oldWidth, p[0].style.height = p[0]._oldHeight)
                    }
                    f._viewRect = {
                        x: -f.translateX,
                        y: -f.translateY,
                        width: g,
                        height: h
                    },
                    f._scrollWidth = m.scrollWidth,
                    f._scrollHeight = m.scrollHeight,
                    l.scrollLeft = -f.translateX,
                    l.scrollTop = -f.translateY
                }
            },
            resetItems: function (a) {
                var b,
                c = this;
                b = Sa(a) ? a[0] : a,
                c.content = b
            },
            removeChild: function (a) {
                var b = this;
                a === b.content && (b.content = c)
            },
            findViewById: function (a) {
                var b = this,
                c = b.content;
                if (c) {
                    if (c.id === a)
                        return c;
                    if (c.findViewById) {
                        var d = c.findViewById(a);
                        if (d)
                            return d
                    }
                }
            }
        }, {
            emitter: !0,
            properties: ["container", "content", "htmlFill", "padding", "htmlFont", "htmlColor"]
        }, {
            preferredSize: {
                get: function () {
                    return this.getPreferredSize()
                }
            },
            children: {
                get: function () {
                    return this.content ? [this.content] : void 0
                }
            }
        })),
    vd = (_("qc.widget.layout.TableLayout", b, function (a, b) {
            var c = this;
            c.container = a,
            c._rightGapDiv = ra(!1),
            c._bottomGapDiv = ra(!1),
            Ja(c, b)
        }, {
            _rowHeight: 26,
            _cellPadding: 2,
            _padding: 0,
            _preferredSizeProperties: ["rowHeight", "padding", "rows", "rowVisible"],
            onPropertyChange: function (a) {
                var b = this,
                d = a.property,
                e = b._container,
                f = b.rows;
                if (e.checkChildPreferredSizeChange(d, b._preferredSizeProperties), "rows" === d || "rowVisible" === d) {
                    var g = a.oldValue;
                    if (g)
                        for (var h = 0; h < g.length; h++) {
                            var i = g[h];
                            if (i.cells)
                                for (var j = 0; j < i.cells.length; j++) {
                                    var k = i.cells[j];
                                    if (k && k.element) {
                                        var l = k.element;
                                        l.view && (l._parent = c)
                                    }
                                }
                        }
                    var m = e._contentDiv;
                    if (Ca(m, function (a) {
                            return a === e._canvas ? !1 : !0
                        }), f) {
                        for (var h = 0; h < f.length; h++) {
                            var i = f[h];
                            if (i.visible !== !1 && i.cells)
                                for (var j = 0; j < i.cells.length; j++) {
                                    var k = i.cells[j];
                                    if (k && k.element) {
                                        var l = k.element;
                                        l.view && (l.parent = e),
                                        m.appendChild(l.view)
                                    }
                                }
                        }
                        m.appendChild(b._rightGapDiv),
                        m.appendChild(b._bottomGapDiv)
                    }
                    e.iv(!0)
                }
                e.iv()
            },
            addRow: function (a) {
                var b = this;
                b.rows || (b.rows = []),
                b.rows.push(a),
                b.epc("rows", c, b.rows)
            },
            getPreferredSize: function () {
                var a,
                b,
                c,
                d,
                e = this,
                f = e._container,
                g = e.rows,
                h = e._rowHeight,
                i = e.padding,
                j = [],
                k = 0,
                l = 0,
                m = f._preferredSize || f._calcdPreferredSize;
                if (Sa(i) ? (a = i[0], b = i[1], c = i[2], d = i[3]) : a = b = c = d = i, !m) {
                    if (g && g.length > 0) {
                        for (var n = 0; n < g.length; n++) {
                            var o = g[n];
                            if (o.visible !== !1) {
                                var p = o.height;
                                if (0 === n && (j = o.widths), null == p)
                                    l += h;
                                else if (Pa(p)) {
                                    var q = p.split("+");
                                    l += parseFloat(q[0])
                                } else
                                    p > 1 && (l += p)
                            }
                        }
                        for (var n = 0; n < j.length; n++) {
                            var r = j[n];
                            Pa(r) ? (q = r.split("+"), k += parseFloat(q[0])) : r > 1 && (k += r)
                        }
                    }
                    k += d + b,
                    l += a + c,
                    f._calcdPreferredSize = m = {
                        width: k,
                        height: l
                    }
                }
                return m
            },
            getCellPadding: function (a) {
                var b = this,
                c = a.cellPadding || b.cellPadding;
                return Sa(c) ? c : [c, c, c, c]
            },
            doLayout: function () {
                var a,
                b,
                c,
                d,
                e,
                f,
                g = this,
                i = this._container,
                j = g._rowHeight,
                k = i.clientWidth,
                m = i.clientHeight,
                n = i._contentDiv,
                o = g.rows || [],
                p = g.padding,
                q = 0,
                r = 0,
                s = m,
                t = k,
                u = [],
                v = [],
                w = [];
                Sa(p) ? (a = p[0], b = p[1], c = p[2], d = p[3]) : a = b = c = d = p,
                s = s - a - c,
                t = t - d - b;
                for (var x = 0; x < o.length; x++) {
                    var y = o[x];
                    if (y.visible !== !1) {
                        var z = y.height;
                        0 === x && (u = y.widths),
                        null == z ? s -= j : Pa(z) ? (e = z.split("+"), f = parseFloat(e[0]), s -= f, f = parseFloat(e[1]), q += f) : z > 1 ? s -= z : q += z
                    }
                }
                for (var x = 0; x < u.length; x++) {
                    var A = u[x];
                    Pa(A) ? (e = A.split("+"), f = parseFloat(e[0]), t -= f, f = parseFloat(e[1]), r += f) : A > 1 ? t -= A : r += A
                }
                0 > s && (s = 0),
                0 > t && (t = 0);
                for (var B = 0; B < o.length; B++) {
                    var y = o[B];
                    if (y.visible !== !1) {
                        var z = y.height;
                        null == z ? z = j : Pa(z) ? (e = z.split("+"), z = parseFloat(e[0]), z += parseFloat(e[1]) * s / q) : z > 1 || (z = z * s / q),
                        w.push(z)
                    }
                }
                for (var B = 0; B < u.length; B++) {
                    var A = u[B];
                    Pa(A) ? (e = A.split("+"), A = parseFloat(e[0]), A += parseFloat(e[1]) * t / r) : A > 1 || (A = A * t / r),
                    v.push(A)
                }
                for (var C = a, D = {}, E = 0, x = 0; x < o.length; x++) {
                    var y = o[x];
                    if (y.visible !== !1) {
                        for (var F = y.cells, G = -1, B = 0; B < F.length; B++) {
                            var H = F[B],
                            I = H.element,
                            J = H.colspan || 1,
                            K = H.rowspan || 1,
                            L = g.getCellPadding(H),
                            M = L[0],
                            N = L[1],
                            O = L[2],
                            P = L[3];
                            for (G++; D[E] && D[E].indexOf(G) >= 0; )
                                G++;
                            if (I) {
                                for (var Q, R, S = d, T = H.fill, U = H.keepRatio, V = H.align, W = H.vAlign, X = 0, Y = 0, Z = 0, $ = 0, _ = 0; G > _; _++)
                                    S += v[_];
                                for (var _ = 0; J > _; _++)
                                    Z += v[G + _];
                                for (var _ = 0; K > _; _++)
                                    $ += w[E + _];
                                if (Z -= P + N, $ -= M + O, "none" === T) {
                                    var aa = I.getPreferredSize();
                                    if (X = aa.width, Y = aa.height, 0 >= Z || 0 >= $)
                                        X = 0, Y = 0;
                                    else {
                                        if (U) {
                                            var ba = X / Z,
                                            ca = Y / $,
                                            da = l(ba, ca);
                                            da > 1 && (X /= da, Y /= da)
                                        } else
                                            X = Math.min(aa.width, Z), Y = Math.min(aa.height, $);
                                        Q = "center" === V ? S + Z / 2 - X / 2 : "right" === V ? S + Z - X : S,
                                        R = "middle" === W ? C + $ / 2 - Y / 2 : "bottom" === W ? C + $ - Y : C
                                    }
                                } else if ("horizontal" === T || "h" === T) {
                                    var aa = I.getPreferredSize();
                                    0 >= Z || 0 >= $ ? (X = 0, Y = 0) : (X = Z, Y = Math.min(aa.height, $), Q = S, R = "middle" === W ? C + $ / 2 - Y / 2 : "bottom" === W ? C + $ - Y : C)
                                } else
                                    X = Z, Y = $, Q = S, R = C;
                                Q += P,
                                R += M,
                                wa(I, Q, R, X, Y, i._forceLayout)
                            }
                            for (var _ = 1; K > _; _++) {
                                D[E + _] || (D[E + _] = []);
                                for (var ea = 0; J > ea; ea++)
                                    D[E + _].indexOf(G + ea) < 0 && D[E + _].push(G + ea)
                            }
                            G += J - 1
                        }
                        C += w[E],
                        E++
                    }
                }
                var fa = 0,
                ga = 0;
                v.forEach(function (a) {
                    fa += a
                }),
                w.forEach(function (a) {
                    ga += a
                }),
                fa = h(fa + d + b),
                ga = h(ga + a + c);
                var ha = g._rightGapDiv,
                ia = g._bottomGapDiv;
                ha.style.width = "1px",
                ha.style.height = m + "px",
                ha.style.top = "0px",
                ha.style.left = fa - 1 + "px",
                ia.style.width = k + "px",
                ia.style.height = "1px",
                ia.style.left = "0px",
                ia.style.top = ga - 1 + "px",
                i._viewRect = {
                    x: -i.translateX,
                    y: -i.translateY,
                    width: k,
                    height: m
                },
                i._scrollWidth = fa,
                i._scrollHeight = ga;
                var ja = -i.translateX,
                ka = -i.translateY;
                n.scrollLeft = ja,
                n.scrollTop = ka
            },
            showRow: function (a) {
                var b = this._rows;
                b[a].visible = !0,
                this.epc("rowVisible", b, null)
            },
            hideRow: function (a) {
                var b = this._rows;
                b[a].visible = !1,
                this.epc("rowVisible", b, null)
            },
            resetItems: function (a) {
                var b = this;
                b.rows = a
            },
            removeChild: function () {},
            findViewById: function (a) {
                var b = this,
                c = b.rows;
                if (c) {
                    for (var d = 0; d < c.length; d++)
                        for (var e = c[d], f = e.cells, g = 0; g < f.length; g++) {
                            var h = f[g];
                            if (h.element && h.element.id === a)
                                return h.element
                        }
                    for (var d = 0; d < c.length; d++)
                        for (var e = c[d], f = e.cells, g = 0; g < f.length; g++) {
                            var h = f[g];
                            if (h.element) {
                                var i = h.element.findViewById(a);
                                if (i)
                                    return i
                            }
                        }
                }
            }
        }, {
            emitter: !0,
            properties: ["container", "rows", "cellPadding", "padding", "rowHeight"]
        }, {
            preferredSize: {
                get: function () {
                    return this.getPreferredSize()
                }
            },
            children: {
                get: function () {
                    var a = this,
                    b = a.rows,
                    c = [];
                    if (b)
                        for (var d = 0; d < b.length; d++) {
                            var e = b[d];
                            if (e.cells)
                                for (var f = 0; f < e.cells.length; f++) {
                                    var g = e.cells[f];
                                    if (g && g.element) {
                                        var h = g.element;
                                        h.view && c.push(h)
                                    }
                                }
                        }
                    return c
                }
            }
        }), _("qc.widget.layout.HBoxLayout", b, function (a, b) {
            var c = this;
            c.container = a,
            c._rightGapDiv = ra(!1),
            c._bottomGapDiv = ra(!1),
            c._rightGapDiv.addEventListener(F ? "touchstart" : "mousedown", function (a) {
                a.preventDefault()
            }),
            c._bottomGapDiv.addEventListener(F ? "touchstart" : "mousedown", function (a) {
                a.preventDefault()
            }),
            Ja(c, b)
        }, {
            _align: "left",
            _padding: 2,
            _gap: 2,
            _preferredSizeProperties: ["padding", "gap", "components", "align"],
            onPropertyChange: function (a) {
                var b = this,
                c = a.property,
                d = b._container,
                e = a.newValue;
                if (d.checkChildPreferredSizeChange(c, b._preferredSizeProperties), "components" === c) {
                    var f = d._contentDiv;
                    e && (f.appendChild(b._rightGapDiv), f.appendChild(b._bottomGapDiv)),
                    d.iv(!0)
                }
                d.iv()
            },
            getPreferredSize: function () {
                var a = this,
                b = a._container,
                c = b._preferredSize || b._calcdPreferredSize;
                if (!c) {
                    var d,
                    e,
                    f,
                    g,
                    h = a.padding,
                    i = a.gap,
                    j = a.components,
                    k = 0,
                    m = 0;
                    if (Sa(h) ? (f = h[0], e = h[1], g = h[2], d = h[3]) : d = e = f = g = h, j) {
                        m += d;
                        for (var n = 0; n < j.length; n++) {
                            var o = j[n],
                            c = o.getPreferredSize(),
                            p = c.height;
                            p = p || 0,
                            k = l(p, k),
                            m += c.width,
                            n < j.length - 1 && (m += i)
                        }
                        m += e,
                        k += f + g
                    } else
                        m = 0;
                    b._calcdPreferredSize = c = {
                        width: m,
                        height: k
                    }
                }
                return c
            },
            add: function (a) {
                var b = this,
                c = b._container,
                d = c._contentDiv,
                e = b.components;
                e || (e = b._components = []);
                var f = e.slice(0);
                a.parent = b.container,
                e.push(a),
                d.appendChild(a.view),
                b.epc("components", f, e)
            },
            remove: function (a) {
                var b = this,
                d = b.components;
                if (d) {
                    var e = d.slice(0);
                    a._parent = c,
                    Ba(a.view),
                    Va(d, a),
                    b.epc("components", e, d)
                }
            },
            doLayout: function () {
                var a,
                b,
                c,
                d,
                e,
                f = this,
                g = f._container,
                h = f.align,
                i = 0,
                j = g.clientWidth,
                k = g.clientHeight,
                m = f.padding,
                n = f.gap,
                o = g._contentDiv,
                p = f.components || pa,
                q = 0;
                if (Sa(m) ? (d = m[0], c = m[1], e = m[2], b = m[3]) : b = c = d = e = m, a = l(k - d - e, 0), "left" === h) {
                    for (var r = 0; r < p.length; r++) {
                        0 === r ? (i += b, q += b) : (i += n, q += n);
                        var s = p[r],
                        t = s.getPreferredSize().width;
                        wa(s, i, d, t, a, g._forceLayout),
                        i += t,
                        q += t
                    }
                    q += c
                } else if ("right" === h)
                    for (var r = p.length - 1; r >= 0; r--) {
                        i += r === p.length - 1 ? c : n;
                        var s = p[r],
                        t = s.getPreferredSize().width;
                        wa(s, j - i - t, d, t, a, g._forceLayout),
                        i += t
                    }
                else {
                    var u = f.getPreferredSize().width;
                    i = (j - u) / 2;
                    for (var r = 0; r < p.length; r++) {
                        i += 0 === r ? b : n;
                        var s = p[r],
                        t = s.getPreferredSize().width;
                        wa(s, i, d, t, a, g._forceLayout),
                        i += t
                    }
                }
                var v = f._rightGapDiv,
                w = f._bottomGapDiv;
                v.style.width = c + "px",
                v.style.height = k + "px",
                v.style.top = "0px",
                v.style.left = q - c + "px",
                w.style.width = j + "px",
                w.style.height = e + "px",
                w.style.left = "0px",
                w.style.top = k - e + "px",
                g._viewRect = {
                    x: -g.translateX,
                    y: 0,
                    width: j,
                    height: k
                },
                "left" === h ? (g._scrollWidth = q, g._scrollHeight = k) : (g._scrollWidth = j, g._scrollHeight = k),
                o.scrollLeft = -g.translateX
            },
            resetItems: function (a) {
                this.components = a
            },
            removeChild: function (a) {
                this.remove(a)
            },
            findViewById: function (a) {
                var b = this,
                c = b.components;
                if (c) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d];
                        if (e.id === a)
                            return e
                    }
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d],
                        f = e.findViewById(a);
                        if (f)
                            return f
                    }
                }
            }
        }, {
            emitter: !0,
            properties: ["container", "padding", "align", "gap"]
        }, {
            preferredSize: {
                get: function () {
                    return this.getPreferredSize()
                }
            },
            children: {
                get: function () {
                    var a = this.components;
                    return a ? a.slice(0) : c
                }
            },
            components: {
                get: function () {
                    return this._components
                },
                set: function (a) {
                    var b = this,
                    d = b._components,
                    e = b._container;
                    d && d.forEach(function (a) {
                        a._parent = c,
                        Ba(a.view)
                    }),
                    a && (a = a.slice(0), b._components = a, a.forEach(function (a) {
                            a.parent = e,
                            e._contentDiv.appendChild(a.view)
                        }), b.epc("components", d, a))
                }
            }
        })),
    wd = (_("qc.widget.layout.VBoxLayout", b, function (a, b) {
            var c = this;
            c.container = a,
            Ja(c, b)
        }, {
            _padding: 2,
            _gap: 2,
            _preferredSizeProperties: ["padding", "gap", "components", "align"],
            onPropertyChange: function (a) { {
                    var b = this,
                    c = a.property,
                    d = b._container;
                    a.newValue
                }
                d.checkChildPreferredSizeChange(c, b._preferredSizeProperties),
                "components" === c && d.iv(!0),
                d.iv()
            },
            add: function (a) {
                var b = this,
                c = b._container,
                d = c._contentDiv,
                e = b.components;
                e || (e = b._components = []);
                var f = e.slice(0);
                a.parent = b.container,
                e.push(a),
                d.appendChild(a.view),
                b.epc("components", f, e)
            },
            remove: function (a) {
                var b = this,
                d = b.components;
                if (d) {
                    var e = d.slice(0);
                    a._parent = c,
                    a.onUnload && a.onUnload(),
                    Ba(a.view),
                    Va(d, a),
                    b.epc("components", e, d)
                }
            },
            getPreferredSize: function () {
                var a = this,
                b = a._container,
                c = b._preferredSize || b._calcdPreferredSize;
                if (!c) {
                    var d,
                    e,
                    f,
                    g,
                    h = a.padding,
                    i = a.gap,
                    j = a.components,
                    k = 0,
                    m = 0;
                    if (Sa(h) ? (f = h[0], e = h[1], g = h[2], d = h[3]) : d = e = f = g = h, j) {
                        m += f;
                        for (var n = 0; n < j.length; n++) {
                            var o = j[n],
                            c = o.getPreferredSize(),
                            p = c.width;
                            p = p || 0,
                            k = l(p, k),
                            m += c.height,
                            n < j.length - 1 && (m += i)
                        }
                        m += g,
                        k += d + e
                    } else
                        m = 0;
                    b._calcdPreferredSize = c = {
                        width: k,
                        height: m
                    }
                }
                return c
            },
            doLayout: function () {
                var a,
                b,
                c,
                d,
                e = this,
                f = e._container,
                g = 0,
                h = f.clientWidth,
                i = f.clientHeight,
                j = e.padding,
                k = e.gap,
                m = f._contentDiv,
                n = e.components || pa;
                Sa(j) ? (c = j[0], b = j[1], d = j[2], a = j[3]) : a = b = c = d = j;
                for (var o = l(h - a - b, 0), p = 0; p < n.length; p++) {
                    g += 0 === p ? c : k;
                    var q = n[p],
                    r = q.getPreferredSize(o).height;
                    wa(q, a, g, o, r, f._forceLayout),
                    g += r
                }
                if (f._viewRect = {
                        x: 0,
                        y: -f.translateY,
                        width: h,
                        height: i
                    }, f._scrollWidth = h, f._scrollHeight = g, q && q.fillParent === !0 && i > g) {
                    var s = u(q.view.style.top);
                    wa(q, a, s, o, i - s, f._forceLayout),
                    f._scrollHeight = i
                }
                m.scrollTop = -f.translateY
            },
            resetItems: function (a) {
                this.components = a
            },
            removeChild: function (a) {
                this.remove(a)
            },
            findViewById: function (a) {
                var b = this,
                c = b.components;
                if (c) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d];
                        if (e.id === a)
                            return e
                    }
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d],
                        f = e.findViewById(a);
                        if (f)
                            return f
                    }
                }
            }
        }, {
            emitter: !0,
            properties: ["container", "padding", "gap"]
        }, {
            preferredSize: {
                get: function () {
                    return this.getPreferredSize()
                }
            },
            children: {
                get: function () {
                    var a = this.components;
                    return a ? a.slice(0) : c
                }
            },
            components: {
                get: function () {
                    return this._components
                },
                set: function (a) {
                    var b = this,
                    d = b._components,
                    e = b._container;
                    d && d.forEach(function (a) {
                        a.onUnload && a.onUnload(),
                        a._parent = c,
                        Ba(a.view)
                    }),
                    a && (a = a.slice(0), b._components = a, a.forEach(function (a) {
                            a.parent = e,
                            e._contentDiv.appendChild(a.view)
                        }), b.epc("components", d, a))
                }
            }
        }), _("qc.widget.Container", b, function (a) {
            var b = this;
            b.initView(!0),
            b._contentDiv.style.overflow = "hidden",
            new Zd(b),
            b.layout = new e.widget.layout.FitLayout(b),
            b.scrollBarMode = "auto",
            b.view.style.zIndex = "0",
            Ja(b, a)
        }, {
            _focusable: !0,
            _preferredSizeProperties: ["childPreferredSize", "layout"],
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                zc[c] && b.showScrollBar(),
                b.checkChildPreferredSizeChange(c),
                b.initCanvas(c),
                b.iv()
            },
            initCanvas: function () {
                var a = this,
                b = a._interactionDiv;
                if (a.gradientColor || a.gradient || a.ninePatchImage || a.background) {
                    if (!a._canvas) {
                        var c = a._canvas = sa();
                        b.children && b.children[0] ? b.insertBefore(c, b.children[0]) : b.appendChild(c)
                    }
                } else
                    a._canvas && (b.removeChild(a._canvas), delete a._canvas)
            },
            getPreferredSize: function (a) {
                return this.layout.getPreferredSize(a)
            },
            setItems: function (a) {
                this.layout.resetItems(a);
                var b = this._items;
                b !== a && this.epc("items", d, a)
            },
            drawBackground: function () {
                var a = this,
                b = a.ninePatchImage,
                c = a.ninePatchBorder || [],
                d = a.background,
                e = a.gradientColor,
                f = a.backgroundGradient || "linear.north",
                g = a._canvas;
                if (g) {
                    var h = a.clientWidth,
                    i = a.clientHeight;
                    ta(g, h, i);
                    var j = {
                        x: 0,
                        y: 0,
                        width: h,
                        height: i
                    },
                    k = Ub(g, 0, 0, 1, j);
                    if (k.beginPath(), b)
                        ea(k, b, j.x, j.y, j.width, j.height, c[0], c[1], c[2], c[3]);
                    else {
                        var l = !1;
                        d && e ? (qb(k, e, f, d, j), l = !0) : d && (k.fillStyle = d, l = !0),
                        l && (k.rect(j.x, j.y, j.width, j.height), k.fill())
                    }
                }
            },
            removeChild: function (a) {
                var b = this.layout;
                b.removeChild(a)
            },
            findViewById: function (a) {
                var b = this,
                c = b.layout;
                return b.id === a ? b : c.findViewById(a)
            },
            validateImpl: function () {
                var a = this,
                b = a.layout;
                a.drawBackground(),
                b.doLayout()
            }
        }, {
            view: !0,
            emitter: !0,
            scrollBar: !0,
            properties: ["layout", "ninePatchImage", "ninePatchBorder", "background", "gradientColor", "backgroundGradient", "focusable"]
        }, {
            children: {
                get: function () {
                    return this.layout.children
                }
            }
        })),
    xd = _("qc.widget.Panel", wd, function Re(a) {
        var b = this;
        Re["super"].constructor.call(b, a),
        b.layout = null,
        b._interactor = new Xd(b)
    }, {
        _background: "rgb(242, 242, 242)",
        _titleBackground: "rgb(249, 249, 249)",
        _titleGradientColor: "rgb(233, 233, 233)",
        _tools: ["collapse"],
        _title: "",
        _titleHeight: w.titleHeight,
        _titleColor: M,
        _titleFont: I,
        _titleVisible: !0,
        _contentPadding: 0,
        _htmlFont: I,
        _borderWidth: 0,
        _toolRight: 10,
        _htmlColor: M,
        _preferredSizeProperties: ["state", "htmlFont", "childPreferredSize", "titleHeight", "titleVisible", "contentPadding"],
        getPreferredSize: function (a) {
            var b,
            d = this,
            e = d._container,
            f = d.titleVisible,
            g = d.state,
            h = d.borderWidth,
            i = d.titleHeight;
            if (d._preferredSize ? b = Fa(d._preferredSize) : (d._calcdPreferredSizeMap || (d._calcdPreferredSizeMap = {}), b = a == c ? d._calcdPreferredSizeMap.nw : d._calcdPreferredSizeMap[a]), !b && e) {
                var j,
                k,
                l,
                m,
                n = d.contentPadding;
                Sa(n) ? (l = n[0], k = n[1], m = n[2], j = n[3]) : j = k = l = m = n;
                var o = e.getPreferredSize(a != c ? a - j - k : c);
                b = {
                    width: o.width,
                    height: o.height
                },
                f && (b.height += i),
                b.width += j + k,
                b.height += l + m,
                b.width += 2 * h,
                b.height += 2 * h,
                "collapse" === g && (b.height = f ? i : 0),
                d._calcdPreferredSizeMap[a == c ? "nw" : a] = b
            }
            return b
        },
        setItems: function (a) {
            this.content = Sa(a) ? a[0] : a
        },
        initCanvas: function () {
            var a = this;
            if (!a._canvas) {
                var b = a._interactionDiv,
                c = a._canvas = sa();
                b.children && b.children[0] ? b.insertBefore(c, b.children[0]) : b.appendChild(c)
            }
        },
        initContainer: function (a) {
            var b = this,
            d = a.property;
            if ("content" === d) {
                var e,
                f = b.content,
                g = b._contentDiv,
                h = b._container;
                if (h && (h._parent = c, g.removeChild(h.view)), f && f.addToDOM)
                    e = b._container = f;
                else {
                    var e = new wd;
                    e.focusable = !1,
                    e.setItems(f),
                    Ca(g),
                    b._container = e
                }
                e.parent = b,
                g.appendChild(e.view),
                b.iv(!0)
            }
        },
        onPropertyChange: function (a) {
            var b = this,
            c = a.property;
            if (b.initContainer(a), xd["super"].onPropertyChange.call(b, a), ["htmlFont", "htmlColor", "htmlFill", "content"].indexOf(c) >= 0) {
                var d = b._container;
                d && d.layout instanceof ud && (d.layout.htmlFill = b.htmlFill, d.layout.htmlFont = b.htmlFont, d.layout.htmlColor = b.htmlColor)
            }
        },
        drawTool: function (a, b, d, e, f, g, h) {
            var i = this.state;
            if ("collapse" === b)
                "collapse" === i ? da(a, "sortDesc", c, e, f, g, h) : da(a, "sortAsc", c, e, f, g, h);
            else {
                var j = b.icon;
                if (Array.isArray(j)) {
                    var k = this._interactor;
                    if (d === k._toolIndex) {
                        var l = k._mouseState;
                        j = "normal" === l ? j[0] : "hover" === l ? j[1] : j[2]
                    } else
                        j = j[0];
                    da(a, j, c, e, f, g, h)
                } else
                    da(a, b.icon, c, e, f, g, h)
            }
        },
        handleToolClick: function (a, b) {
            var c = this.tools[a];
            if ("collapse" === c) {
                var d = this.state;
                this.state = "collapse" !== d ? "collapse" : "normal"
            } else
                c.onClick && c.onClick.call(this, b);
            this.emit("toolClick", {
                tool: c,
                event: b
            })
        },
        drawTitle: function (a, b, d, e, f) {
            this.drawTitleBackground(a, b, d, e, f);
            var g = this,
            h = g.icon,
            i = g.title,
            j = g.titleFont,
            k = g.titleColor,
            l = g.tools,
            m = g.toolRight;
            a.beginPath();
            var n = 4;
            h && (da(a, h, c, 4, 4, f - 8, f - 8), n += f - 8),
            i && fa(a, i, j, k, n, 0, 0, f);
            for (var b = e - m, d = 4, o = l.length - 1; o >= 0; o--) {
                var p = l[o];
                this.drawTool(a, p, o, b - (f - 8), d, f - 8, f - 8),
                b -= f - 8,
                b -= 2
            }
        },
        drawTitleBackground: function (a, b, c, d, e) {
            var f = this,
            g = f.titleBackgroundGradient || "linear.north",
            h = f.titleBackground,
            i = f.titleGradientColor;
            if (h) {
                a.beginPath();
                var j = {
                    x: b,
                    y: c,
                    width: d,
                    height: e
                };
                i ? qb(a, i, g, h, j) : a.fillStyle = h,
                a.rect(j.x, j.y, j.width, j.height),
                a.fill()
            }
        },
        drawBackground: function (a, b, c, d, e) {
            var f = this,
            g = f.ninePatchImage,
            h = f.ninePatchBorder || [],
            i = f.background,
            j = f.gradientColor,
            k = f.backgroundGradient || "linear.north";
            if (g)
                ea(a, g, b, c, d, e, h[0], h[1], h[2], h[3]);
            else if (i) {
                a.beginPath();
                var l = {
                    x: b,
                    y: c,
                    width: d,
                    height: e
                };
                j ? qb(a, j, k, i, l) : a.fillStyle = i,
                a.rect(b, c, d, e),
                a.fill()
            }
        },
        validateImpl: function () {
            var a,
            b,
            d,
            e,
            f = this,
            g = f.size,
            h = g.width,
            i = g.height,
            j = f.titleVisible,
            k = f.titleHeight,
            l = f.view,
            m = f._interactionDiv,
            n = f._canvas,
            o = f._contentDiv,
            p = f.borderWidth,
            q = f.borderColor,
            r = f._container,
            s = f.contentPadding;
            Sa(s) ? (d = s[0], b = s[1], e = s[2], a = s[3]) : a = b = d = e = s;
            var t,
            u;
            t = h - a - b - 2 * p,
            j ? (u = i - d - e - k - 2 * p, wa(o, a + p, k + d + p, t, u)) : (u = i - d - e - 2 * p, wa(o, a + p, d + p, t, u)),
            ta(n, h, i);
            var v = Ub(n, 0, 0, 1, {
                x: 0,
                y: 0,
                width: h,
                height: i
            });
            f.drawBackground(v, 0, 0, h, i),
            j && f.drawTitle(v, p, p, h - 2 * p, k),
            p && q && tb(v, q, 0, 0, h, i),
            v.restore(),
            l.style.width = h + "px",
            l.style.height = i + "px",
            m.style.width = h + "px",
            m.style.height = i + "px",
            r && wa(r, c, c, t, u, f._forceLayout)
        },
        removeChild: function (a) {
            a === this._container && (this.content = c)
        },
        findViewById: function (a) {
            var b = this;
            if (b.id === a)
                return b;
            var c = b.content;
            if (c) {
                var d = c.findViewById(a);
                if (d)
                    return d
            }
        }
    }, {
        scrollBar: !1,
        properties: ["title", "titleFont", "titleColor", "titleVisible", "icon", "contentPadding", "content", "state", "tools", "borderWidth", "borderColor", "titleHeight", "titleBackground", "titleBackgroundGradient", "titleGradientColor", "htmlFont", "htmlColor", "toolRight"]
    }, {
        size: {
            get: function () {
                var a = this,
                b = a.width,
                c = a.height,
                d = a.state,
                e = a.titleVisible,
                f = a.titleHeight;
                return "collapse" === d && (c = e ? f : 0), {
                    width: b,
                    height: c
                }
            }
        },
        children: {
            get: function () {
                return this.content ? [this.content] : void 0
            }
        }
    }),
    yd = _("qc.widget.Dialog", xd, function (a) {
        var b = this;
        b._initLayout(a),
        b._interactor = new Yd(b),
        Ja(b, a)
    }, {
        _dynamicDOM: !0,
        _htmlFill: !1,
        _borderWidth: 1,
        _dialogContentPadding: 0,
        _resizable: !0,
        _borderColor: "rgb(167, 167, 167)",
        _contentPadding: 8,
        _buttonGap: 4,
        _tools: ["close"],
        _coverBackground: "rgba(0, 0, 0, 0.5)",
        _toolRight: 7,
        _closeIcon: {
            width: 16,
            height: 16,
            comps: [{
                    type: "shape",
                    points: [2, 2, 12, 12],
                    borderColor: X,
                    borderWidth: 2
                }, {
                    type: "shape",
                    points: [12, 2, 2, 12],
                    borderColor: X,
                    borderWidth: 2
                }
            ]
        },
        _dragContainment: "viewport",
        _position: "center",
        _initLayout: function (a) {
            var b = this,
            d = b._container = new wd;
            d.focusable = !1;
            var e = new td(d);
            d.layout = e;
            var f = new wd,
            g = new wd;
            g.layout = new vd(g),
            g.layout.align = "right",
            g.layout.gap = b.buttonGap,
            g.layout.padding = [8, 0, 0, 0],
            e.bottomView = g,
            e.centerView = f,
            e.splitterSize = 0,
            xd["super"].constructor.call(b, a),
            b.layout = null;
            var h = b._view,
            i = b._coverDiv = ra(!1),
            j = b._contentDiv,
            k = i.style;
            j.appendChild(d.view),
            d._parent = b,
            h.insertBefore(i, h.children[0]),
            h.style.overflow = "",
            k.position = "fixed",
            k.width = "100%",
            k.height = "100%",
            k.left = "0",
            k.top = "0";
            var l = b._interactionDiv;
            l.style.position = "fixed",
            b._eastResizeDiv = b._createResizeDiv("9px", "100%", c, -5, 0, c),
            b._westResizeDiv = b._createResizeDiv("9px", "100%", -5, c, 0, c),
            b._southResizeDiv = b._createResizeDiv("100%", "9px", 0, c, c, -5),
            b._southwestResizeDiv = b._createResizeDiv("9px", "9px", -5, c, c, -5),
            b._southeastResizeDiv = b._createResizeDiv("9px", "9px", c, -5, c, -5)
        },
        _createResizeDiv: function (a, b, d, e, f, g) {
            var h = ra(!0, this._interactionDiv),
            i = h.style;
            return i.width = a,
            i.height = b,
            i.background = "red",
            i.opacity = "0",
            d != c && (i.left = d + "px"),
            e != c && (i.right = e + "px"),
            f != c && (i.top = f + "px"),
            g != c && (i.bottom = g + "px"),
            h
        },
        onPropertyChange: function (a) {
            var b = this,
            c = a.property;
            if (yd["super"].onPropertyChange.call(b, a), ["htmlFont", "htmlColor", "htmlFill", "content", "dialogContentPadding"].indexOf(c) >= 0) {
                var d = b._container;
                if (d) {
                    var e = d.layout.centerView;
                    e && e.layout instanceof ud && (e.layout.htmlFill = b.htmlFill, e.layout.htmlFont = b.htmlFont, e.layout.htmlColor = b.htmlColor, e.layout.padding = b.dialogContentPadding)
                }
            }
        },
        _createButton: function (a) {
            var b = new Cd(a);
            return b
        },
        initContainer: function (a) {
            var b = this,
            c = a.property,
            d = b._container,
            e = d.layout;
            if ("content" === c) {
                var f = e.centerView;
                f.setItems(b.content),
                b.iv(!0)
            } else if ("buttons" === c) {
                for (var g = e.bottomView, h = b.buttons, i = [], j = 0; j < h.length; j++) {
                    var k = h[j],
                    l = b._createButton(k);
                    delete l.onClick,
                    k.onClick ? l.on("click", function (a) {
                        return function (c) {
                            a.onClick.call(b, c),
                            b.emit("buttonClick", {
                                event: c,
                                button: a
                            })
                        }
                    }
                        (k)) : l.on("click", function (a) {
                        return function (c) {
                            b.emit("buttonClick", {
                                event: c,
                                button: a
                            })
                        }
                    }
                        (k)),
                    i.push(l)
                }
                g.setItems(i),
                b.iv(!0)
            }
        },
        handleToolClick: function (a, b) {
            var c = this.tools[a];
            "close" === c ? (this.emit("toolClick", {
                    tool: c,
                    event: b
                }), this.hide()) : yd["super"].handleToolClick.call(this, a, b)
        },
        drawTool: function (a, b, d, e, f, g, h) {
            "close" === b ? da(a, this._closeIcon, c, e, f, g, h) : yd["super"].drawTool.call(this, a, b, d, e, f, g, h)
        },
        handleWindowResize: function () {
            this.iv()
        },
        getPosition: function () {
            return this._position
        },
        setPosition: function (a, b) {
            var c;
            c = 2 === arguments.length ? {
                x: a,
                y: b
            }
             : a;
            var d = !1,
            e = this._position;
            Pa(c) || !c ? d = !0 : (c.x !== e.x || c.y !== e.y) && (d = !0),
            d && (this._position = c, this.epc("position", e, c))
        },
        show: function () {
            var b = this,
            c = b.view;
            if (!b._visible) {
                document.body.appendChild(c);
                var d = b._bindingHandleWindowResize = b.handleWindowResize.bind(b);
                a.addEventListener("resize", d),
                b.iv(!0),
                b._visible = !0,
                b._oldBodyOverflow = document.body.style.overflow,
                document.body.style.overflow = "hidden",
                b.emit("visibleChange", {
                    visible: !0
                }),
                b.emit("show")
            }
        },
        hide: function () {
            var b = this,
            c = b.view;
            if (b._visible) {
                delete b._visible;
                var d = function () {
                    document.body.style.overflow = b._oldBodyOverflow,
                    delete b._oldBodyOverflow,
                    b.emit("visibleChange", {
                        visible: !1
                    }),
                    b.emit("close"),
                    w.onDialogClosed && w.onDialogClosed(b),
                    w.hideToolTip(),
                    document.body.removeChild(c),
                    a.removeEventListener("resize", b._bindingHandleWindowResize)
                };
                d()
            }
        },
        validateImpl: function () {
            yd["super"].validateImpl.call(this);
            var a = this,
            b = a.size,
            c = a.view,
            d = b.width,
            e = b.height,
            f = a.position,
            g = a.modal,
            h = a._coverDiv,
            i = a._interactionDiv;
            f = f || "center";
            var j,
            k;
            if (Pa(f)) {
                var l = Da();
                "topRight" === f ? (j = l.width - d, k = 0) : "topLeft" === f ? (j = 0, k = 0) : "bottomLeft" === f ? (j = 0, k = l.height - e) : "bottomRight" === f ? (j = l.width - d, k = l.height - e) : "center" === f && (j = (l.width - d) / 2, k = (l.height - e) / 2)
            } else
                j = f.x || 0, k = f.y || 0;
            i.style.left = j + "px",
            i.style.top = k + "px",
            c.style.left = j + "px",
            c.style.top = k + "px",
            i.style.width = d + "px",
            i.style.height = e + "px",
            i.style.shadow = "rgba(128, 128, 128, 0.49) 0px 0px 16px 1px",
            h.style.backgroundColor = a._coverBackground,
            h.style.display = g ? "block" : "none";
            var m = a.buttonGap;
            a._container.layout.bottomView.layout.gap = m
        }
    }, {
        properties: ["modal", "resizable", "buttons", "buttonGap", "dragContainment", "htmlFill", "dialogContentPadding"]
    }, {
        x: {
            get: function () {
                var a = this.position;
                return Pa(a) ? u(this._interactionDiv.style.left) : a.x
            },
            set: function (a) {
                this.position = {
                    x: a,
                    y: this.y
                }
            }
        },
        y: {
            get: function () {
                var a = this.position;
                return Pa(a) ? u(this._interactionDiv.style.top) : a.y
            },
            set: function (a) {
                this.position = {
                    x: this.x,
                    y: a
                }
            }
        },
        size: {
            get: function () {
                var a = this,
                b = a.width,
                d = a.height,
                e = a.state,
                f = a.titleVisible,
                g = f ? a._titleHeight : 0;
                if (b == c || d == c) {
                    var h = a.getPreferredSize(b);
                    b == c && (b = a._width = h.width),
                    d == c && (d = a._height = h.height)
                }
                return "collapse" === e && (d = g), {
                    width: b,
                    height: d
                }
            }
        },
        visible: {
            get: function () {
                return this._visible
            }
        },
        position: {
            get: function () {
                return this.getPosition()
            },
            set: function (a) {
                this.setPosition(a)
            }
        }
    });
    yd.alert = function (a, b) {
        var c = new e.widget.Dialog({
            title: a,
            content: b,
            tools: ["close"],
            buttons: [{
                    text: "确定"
                }, {
                    text: "取消"
                }
            ]
        });
        c.show()
    }; {
        var zd = _("qc.widget.ContextMenu", b, function (a, b) {
            var c = this,
            d = c._view = ra();
            c._interactor = new be(c),
            d.className = "qc-widget-contextmenu",
            c.items = a,
            c.view.style.left = "0",
            c.view.style.top = "0",
            Ja(c, b)
        }, {
            _dynamicDOM: !0,
            _position: {
                x: 0,
                y: 0
            },
            _rowHeight: 24,
            _idCounter: 0,
            _padding: [4, 2, 4, 2],
            _leftGap: 0,
            _rightGap: 0,
            _items: c,
            _labelFont: I,
            _visible: !1,
            _background: "white",
            _borderWidth: 1,
            _labelColor: "black",
            _disabledLabelColor: "gray",
            _hoverLabelColor: "white",
            _radioOnIcon: "radioon",
            _radioOffIcon: "radiooff",
            _hoverBackground: "rgb(0, 152, 252)",
            _borderColor: "rgb(200, 200, 200)",
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                if (["items", "visibleFunc", "position", "visible"].indexOf(c) >= 0) {
                    "items" === c && (b._idCounter = 0, b.forEach(function (a) {
                            a._id = ++b._idCounter
                        }), this.ivm());
                    var d = b._visibleMap;
                    d || (d = b._visibleMap = {}),
                    b.forEach(function (a) {
                        var c = b.isItemVisible(a);

                        d[a._id] !== c && b.ivm(),
                        d[a._id] = c
                    })
                }
                this.iv()
            },
            registerCloseEvent: function (a) {
                document.addEventListener("mousedown", a, !0)
            },
            unregisterCloseEvent: function (a) {
                document.removeEventListener("mousedown", a, !0)
            },
            enableShortcut: function () {
                var a = this;
                a._mousetrap && a.disableShortcut(),
                a._mousetrap = new e.widget.Mousetrap,
                a.ivm()
            },
            disableShortcut: function () {
                var a = this;
                a._mousetrap && (a._mousetrap.dispose(), delete a._mousetrap)
            },
            addTo: function (a) {
                if (a) {
                    if (this._relatedView)
                        throw new Error("菜单不能加到多个组件上");
                    a.view && (a = a.view);
                    var b = this,
                    c = b._interactor;
                    b._relatedView = a,
                    b._bindingHandleDocMouseDown = function (a) {
                        c.handleDocMouseDown(a)
                    },
                    b._bindingHandleViewParentContextMenu = function (a) {
                        c.handleViewParentContextMenu(a)
                    },
                    a.addEventListener("contextmenu", b._bindingHandleViewParentContextMenu)
                }
            },
            lp: function (a) {
                var b = this,
                c = b._itemsDomMap,
                d = xa(a);
                for (var e in c) {
                    var f = c[e];
                    if (f.contains(a.target)) {
                        var g = f.getBoundingClientRect();
                        return {
                            id: e,
                            lp: {
                                x: d.x - g.left,
                                y: d.y - g.top
                            }
                        }
                    }
                }
            },
            getMenuItemAt: function (a) {
                var b,
                c;
                if (a.target) {
                    var d = this.lp(a);
                    c = d.id,
                    b = d.lp
                }
                var e = this._itemsLevelMap[c],
                f = this._padding,
                g = this._borderWidth,
                h = this.rowHeight,
                i = Sa(f) ? f[0] : f;
                i += g;
                for (var j = 0; j < e.length; j++) {
                    var k = e[j];
                    if (i += "-" === k.type ? h / 2 : h, b.y <= i && b.y > i - h)
                        return k
                }
            },
            show: function (a, b) {
                var c,
                d = this;
                w.popup = d,
                1 === arguments.length && (c = a, c = Sb(c), a = c.pageX, b = c.pageY),
                this.setPosition(a, b),
                this.visible !== !0 && (d.emit("preShow", {
                        event: c
                    }), this.visible = !0, d.emit("show", {
                        event: c
                    }), 1 === arguments.length && d.registerCloseEvent(d._bindingHandleDocMouseDown)),
                w.callLater(function () {
                    d._view.focus()
                })
            },
            hide: function (a) {
                this.close(a),
                w.popup === this && (w.popup = c)
            },
            close: function (a) {
                var b = this;
                b.visible !== !1 && (b.visible = !1, b._hoverMenuItem = c, b.emit("hide", {
                        item: a
                    }), w.onContextMenuClose && w.onContextMenuClose(b), b.unregisterCloseEvent(b._bindingHandleDocMouseDown))
            },
            dispose: function () {
                var a = this,
                b = a._relatedView,
                d = a._view;
                d && (Ba(d), b && b.removeEventListener("contextmenu", a._bindingHandleViewParentContextMenu), a._mousetrap && a._mousetrap.dispose(), a._view = a._items = a._relatedView = a._mousetrap = a._bindingHandleDocMouseDown = a._bindingHandleViewParentContextMenu = c)
            },
            getPosition: function () {
                return this._position
            },
            setPosition: function (a, b) {
                var c,
                d = this;
                if (c = 2 === arguments.length ? {
                        x: a,
                        y: b
                    }
                     : a, c.x !== d._position.x || c.y !== d._position.y) {
                    var e = d._position;
                    d._position = c,
                    d.epc("position", e, c)
                }
            },
            _calcSize: function (a) {
                for (var b, c = 0, d = 0, e = this.labelFont, f = 0; f < a.length; f++) {
                    var g = a[f],
                    h = g.label,
                    i = g.suffix || g.shortcut,
                    j = Ka(e, h);
                    if (this._itemsLevelMap[g._id] && (j.width += 25), g.icon && (j.width += 20), "check" === g.type || "radio" === g.type)
                        j.width += 20;
                    else
                        for (var k = 0; k < a.length; k++) {
                            var m = a[k];
                            if ("check" === m.type || "radio" === m.type) {
                                j.width += 20;
                                break
                            }
                        }
                    i && (d = Ka(e, i).width, j.width += d + 30),
                    b = null == b ? j.width : l(b, j.width);
                    var n = this.rowHeight;
                    c += "-" === g.type ? n / 2 : n
                }
                return b += 8,
                b = u(b),
                c = u(c), {
                    itemSize: {
                        width: b,
                        height: c
                    },
                    suffixWidth: d
                }
            },
            ivm: function () {
                this._invalidateModel || (this._invalidateModel = !0, this.iv())
            },
            validate: function () {
                var a = this;
                a._invalidate && (delete a._invalidate, a.emit("viewChange", {
                        kind: "beginValidate"
                    }), a.validateImpl(), a.emit("viewChange", {
                        kind: "endValidate"
                    }), Tb(a))
            },
            validateModel: function () {
                var a = this;
                a._itemsMap = {},
                a._itemsLevelMap = {},
                a._itemsDomMap = {},
                a._itemsGroupMap = {},
                a._view.innerHTML = "",
                a._mousetrap && a._mousetrap.reset(),
                a.buildChildren()
            },
            buildChildren: function (a) {
                var b = this,
                d = a ? a.items : b.items,
                e = a ? a._id : 0,
                f = b._itemsLevelMap;
                if (d) {
                    var g = [];
                    if (d.forEach(function (a) {
                            a._pid = e,
                            b._itemsMap[a._id] = a;
                            var d = b._itemsGroupMap;
                            if ("radio" === a.type) {
                                var f = a.groupId;
                                f != c && (d[f] || (d[f] = []), d[f].push(a))
                            }
                            b._visibleMap[a._id] && g.push(a)
                        }), g.length > 0) {
                        var h = sa(b._view);
                        h.style.boxSizing = "content-box",
                        h._parentItemId = e,
                        b._itemsDomMap[e] = h,
                        b._view.appendChild(h),
                        f[e] = g,
                        g.forEach(function (a) {
                            var c = b._mousetrap;
                            c && a.shortcut && c.bind(a.shortcut, function (c) {
                                a.preventDefault !== !1 && c.preventDefault(),
                                b._isItemDisabled(a) || (a.action && a.action.call(b, a, c), b.emit("action", {
                                        item: a,
                                        event: c
                                    }))
                            }),
                            b.buildChildren(a)
                        })
                    }
                }
            },
            _isItemDisabled: function (a) {
                var b = a.disabled;
                return Ta(b) ? b() ? !0 : void 0 : !!b
            },
            isItemVisible: function (a) {
                var b = this._visibleFunc;
                return b ? b.call(this, a) : !0
            },
            drawRowBackground: function (a, b, c, d, e, f) {
                var g,
                h = this,
                i = !1,
                j = h._hoverMenuItem,
                k = h._itemsMap;
                if (j) {
                    for (var l = j; l && l !== b; )
                        l = k[l._pid];
                    l === b && "-" !== l.type && (i = !0, g = h._hoverBackground)
                }
                return g && sb(a, c, d, e, f, g),
                i
            },
            drawChildren: function (a, b, d) {
                var e,
                f,
                g,
                h,
                i = this,
                j = i._itemsLevelMap,
                k = i._itemsDomMap,
                l = i._ninePatchImage,
                m = i._ninePatchBorder || [],
                n = i._rowHeight,
                o = i.labelFont,
                p = 20,
                q = i._borderWidth,
                r = i._borderColor,
                s = i._padding,
                t = i._leftGap,
                v = i._rightGap,
                w = i._hoverMenuItem,
                x = i._itemsMap,
                y = b ? b._id : 0,
                z = j[y];
                if (Sa(s) ? (e = s[0], f = s[1], g = s[2], h = s[3]) : e = f = g = h = s, z) {
                    var A = this._calcSize(z),
                    B = A.itemSize,
                    C = A.suffixWidth,
                    D = k[y],
                    E = D.style,
                    F = B.width + h + f + t + v,
                    G = B.height + e + g;
                    ta(D, F, G);
                    var H = Ub(D, 0, 0, 1, {
                        x: 0,
                        y: 0,
                        width: F,
                        height: G
                    });
                    l ? ea(H, l, 0, 0, F, G, m[0], m[1], m[2], m[3]) : D.style.background = i.background,
                    D.style.border = q ? q + "px solid " + r : "";
                    for (var I = !1, J = 0; J < z.length; J++) {
                        var K = z[J];
                        if ("check" === K.type || "radio" === K.type) {
                            I = !0;
                            break
                        }
                    }
                    for (var L = e, J = 0; J < z.length; J++) {
                        var K = z[J];
                        if ("-" === K.type) {
                            var M = {
                                width: B.width,
                                height: 1,
                                comps: [{
                                        type: "rect",
                                        rect: [17, 1, 1],
                                        relative: 1,
                                        background: i.borderColor
                                    }
                                ]
                            };
                            da(H, M, c, h + t, L, B.width, n / 2),
                            L += n / 2
                        } else {
                            var N = i.drawRowBackground(H, K, h, L, B.width + t + v, n),
                            O = K.suffix || K.shortcut;
                            if ("check" === K.type) {
                                var P = K.selected;
                                "function" == typeof P && (P = P.call(i, K));
                                var Q = "uncheck";
                                P && (Q = "check"),
                                da(H, Q, c, h + t + 2, L, p, n)
                            } else if ("radio" === K.type) {
                                var P = K.selected;
                                "function" == typeof P && (P = P.call(i, K));
                                var R = i.radioOffIcon;
                                P && (R = i.radioOnIcon),
                                da(H, R, c, h + t + 2, L, p, n)
                            }
                            var S = h + t + (I ? 22 : 4);
                            K.icon && (da(H, K.icon, c, S, L, p, n), S += p);
                            var T = N ? i._hoverLabelColor : i._labelColor,
                            U = i._isItemDisabled(K);
                            if (U && (T = i.disabledLabelColor), fa(H, K.label, o, T, S, L, B.width, n), O && (S = j[K._id] ? B.width + h + t - 20 - C : B.width + h + t - 5 - C, fa(H, O, o, T, S, L, C, n, "right")), j[K._id]) {
                                var V = {
                                    width: 16,
                                    height: 16,
                                    comps: [{
                                            type: "triangle",
                                            rect: [4, 4, 10, 8],
                                            background: N ? i.background : "gray",
                                            rotation: 1.57
                                        }
                                    ]
                                };
                                da(H, V, c, B.width + h + t - 20, L, 20, n)
                            }
                            L += n
                        }
                    }
                    H.restore();
                    var W = i.bottomMargin || 0;
                    if (0 === y) {
                        var X = i.position,
                        S = X.x,
                        Y = X.y;
                        S + F + 2 * q > a.left + a.width && (S = a.left + a.width - F - 2 * q),
                        Y + G + 2 * q + W > a.top + a.height && (Y = a.top + a.height - G - 2 * q - W),
                        E.left = S + "px",
                        E.top = Y + "px",
                        E.visibility = "visible"
                    } else if (w) {
                        if (w._id === y) {
                            var Z = k[x[b._id]._pid],
                            S = u(Z.style.left) + u(Z.style.width) + q,
                            Y = u(Z.style.top) + d || 0;
                            S + F + 2 * q > a.left + a.width && (S = u(Z.style.left) - F - q),
                            Y + G + 2 * q + W > a.top + a.height && (Y = a.top + a.height - G - 2 * q - W),
                            E.left = S + "px",
                            E.top = Y + "px"
                        }
                        for (var $ = w; $ && $ !== b; )
                            $ = x[$._pid];
                        E.visibility = $ === b ? "visible" : "hidden"
                    } else
                        E.visibility = "hidden";
                    L = 0;
                    for (var J = 0; J < z.length; J++) {
                        var K = z[J];
                        this.drawChildren(a, K, L),
                        L += "-" === K.type ? n / 2 : n
                    }
                }
            },
            forEach: function (a, b, c) {
                var d = this,
                e = c ? c.items : d._items;
                if (e)
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        a.call(b || d, g),
                        d.forEach(a, b, g)
                    }
            },
            findItemByLabel: function (a) {
                var b;
                return this.forEach(function (c) {
                    c.label === a && (b = c)
                }),
                b
            },
            findItemById: function (a) {
                var b;
                return this.forEach(function (c) {
                    c.id === a && (b = c)
                }),
                b
            },
            selectById: function (a) {
                var b = this.findItemById(a);
                b && this.select(b)
            },
            requestFocus: function () {
                Aa(this._view),
                w.onViewFocused && w.onViewFocused(this)
            },
            select: function (a) {
                if ("radio" === a.type) {
                    var b = a.groupId;
                    if (b != c)
                        for (var d = this._itemsGroupMap[b], e = 0; e < d.length; e++) {
                            var f = d[e];
                            f.selected = f === a ? !0 : !1
                        }
                    else
                        a.selected = !0
                } else
                    a.selected = !0
            },
            validateImpl: function () {
                var a = this,
                b = a._view,
                c = a.visible;
                a._invalidateModel && (a.validateModel(), delete a._invalidateModel),
                c ? (document.body.appendChild(b), a.drawChildren(Da())) : Ba(b)
            }
        }, {
            view: !0,
            emitter: !0,
            properties: ["items", "visible", "rowHeight", "hoverMenuItem", "visibleFunc", "padding", "labelFont", "leftGap", "rightGap", "radioOnIcon", "radioOffIcon", "hoverBackground", "bottomMargin", "ninePatchImage", "ninePatchBorder", "background", "labelColor", "disabledLabelColor", "hoverLabelColor", "borderWidth", "borderColor"]
        }, {
            position: {
                get: function () {
                    return this.getPosition()
                },
                set: function (a) {
                    this.setPosition(a)
                }
            }
        });
        _("qc.widget.Menu", b, function (a) {
            var b = this;
            b.initView(!1, !0),
            b._mousetrap = new e.widget.Mousetrap,
            b._resetMousetrap();
            var c = b._dropDownMenu = new zd;
            c.disableShortcut(),
            b._itemSizeMap = {},
            new ce(b),
            Ja(b, a)
        }, {
            _gap: 5,
            _labelFont: I,
            _labelColor: "black",
            _activeLabelColor: "white",
            _background: "rgb(238, 238, 238)",
            _gradientColor: "rgb(211, 211, 211)",
            _hoverBackground: "rgb(248, 248, 248)",
            _hoverGradientColor: "rgb(221, 221, 221)",
            _activeBackground: "rgb(0, 152, 252)",
            _topGap: 0,
            _bottomGap: 0,
            _popupOrien: "down",
            _preferredSizeProperties: ["items", "gap", "bottomGap", "topGap", "labelFont", "popupOrien"],
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                if ("items" === c) {
                    var d = a.newValue;
                    if (b._itemSizeMap = {}, d) {
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            b._itemSizeMap[e] = Ka(b._labelFont, f.label)
                        }
                        b._resetMousetrap(),
                        b.forEach(function (a) {
                            a.shortcut && b._mousetrap.bind(a.shortcut, function (c) {
                                var d;
                                d = Ta(a.preventDefault) ? a.preventDefault.call(b) : a.preventDefault,
                                d !== !1 && c.preventDefault(),
                                b._dropDownMenu._isItemDisabled(a) || (a.action && a.action.call(b, a, c), b.emit("action", {
                                        item: a,
                                        event: c
                                    }))
                            })
                        })
                    }
                }
                b.checkChildPreferredSizeChange(c),
                b.iv()
            },
            registerCloseEvent: function (a) {
                document.addEventListener("mousedown", a)
            },
            unregisterCloseEvent: function (a) {
                document.removeEventListener("mousedown", a)
            },
            setState: function (a) {
                var b = this._state;
                b !== a && (this._state = a, this.iv())
            },
            setCurrentItem: function (a) {
                var b = this._currentItem;
                b !== a && (this._currentItem = a, this.iv())
            },
            getPreferredSize: function () {
                var a = this,
                b = a._preferredSize || a._calcdPreferredSize;
                if (!b) {
                    var c = a.items,
                    d = a.gap,
                    e = a._itemSizeMap;
                    b = {
                        width: 0,
                        height: 0
                    };
                    for (var f = 0; f < c.length; f++) {
                        var g = e[f];
                        b.width += 2 * d + g.width,
                        b.height = l(b.height, g.height)
                    }
                    b.width = h(b.width),
                    b.height = h(b.height) + a._topGap + a._bottomGap,
                    a._calcdPreferredSize = b
                }
                return b
            },
            getMenuItemAt: function (a) {
                for (var b = this, c = b.lp(a), d = b.items, e = b.clientHeight, f = b.gap, g = b.topGap, h = b.bottomGap, i = b._itemSizeMap, j = 0, k = 0; k < d.length; k++) {
                    var l = d[k],
                    m = i[k],
                    n = {
                        x: j,
                        y: g,
                        width: m.width + 2 * f,
                        height: e - g - h
                    };
                    if (fb(n, c))
                        return l;
                    j += n.width
                }
            },
            drawBackground: function (a, b, c, d, e, f) {
                var g,
                h,
                i,
                j,
                k = this,
                l = k.backgroundGradient || "linear.north";
                if ("background" === f ? k.ninePatchImage ? (g = k.ninePatchImage, h = k.ninePatchBorder || []) : (i = k.background, j = k.gradientColor) : "hover" === f ? k.hoverNinePatchImage ? (g = k.hoverNinePatchImage, h = k.hoverNinePatchBorder || []) : (i = k.hoverBackground, j = k.hoverGradientColor) : "active" === f && (k.activeNinePatchImage ? (g = k.activeNinePatchImage, h = k.activeNinePatchBorder || []) : (i = k.activeBackground, j = k.activeGradientColor)), g)
                    ea(a, g, b, c, d, e, h[0], h[1], h[2], h[3]);
                else if (i) {
                    a.beginPath();
                    var m = {
                        x: b,
                        y: c,
                        width: d,
                        height: e
                    };
                    j ? qb(a, j, l, i, m) : a.fillStyle = i,
                    a.rect(m.x, m.y, m.width, m.height),
                    a.fill()
                }
            },
            _resetMousetrap: function () {
                var a = this,
                b = a._mousetrap;
                b.reset()
            },
            validateImpl: function () {
                var a = this,
                b = a._canvas,
                c = a.gap,
                d = a.items,
                e = a.clientWidth,
                f = a.clientHeight,
                g = a.bottomGap,
                h = a.topGap,
                i = a._itemSizeMap,
                j = a._dropDownMenu,
                k = a._state,
                l = a._currentItem,
                m = d.indexOf(l);
                "active" !== k && j.hide(),
                ta(b, e, f);
                var n = Ub(b, 0, 0, 1);
                a.drawBackground(n, 0, 0, e, f, "background"),
                n.beginPath();
                for (var o = 0, p = 0; p < d.length; p++) {
                    var q = d[p],
                    r = i[p],
                    s = a._labelColor;
                    if (p === m) {
                        if ("hover" === k)
                            a.drawBackground(n, o, h, r.width + 2 * c, f - h - g, "hover");
                        else {
                            var t = Da(),
                            u = this.view.getBoundingClientRect();
                            a.drawBackground(n, o, h, r.width + 2 * c, f - h - g, "active"),
                            j.items = q.items,
                            "up" === a.popupOrien && (j.bottomMargin = u.height),
                            j.ivm(),
                            j.show(u.left + t.left + o, u.top + t.top + u.height),
                            s = a._activeLabelColor
                        }
                        n.beginPath()
                    }
                    o += c,
                    fa(n, q.label, a._labelFont, s, o, h, r.width, f - h - g),
                    o += r.width + c
                }
            },
            forEach: function (a, b, c) {
                var d = this,
                e = c ? c.items : d._items;
                if (e)
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        a.call(b || d, g),
                        d.forEach(a, b, g)
                    }
            }
        }, {
            view: !0,
            emitter: !0,
            properties: ["items", "gap", "labelFont", "labelColor", "activeLabelColor", "backgroundGradient", "ninePatchImage", "ninePatchBorder", "hoverNinePatchImage", "hoverNinePatchBorder", "activeNinePatchImage", "activeNinePatchBorder", "topGap", "bottomGap", "background", "hoverBackground", "activeBackground", "gradientColor", "hoverGradientColor", "activeGradientColor"]
        })
    }
    e.widget.Menu.prototype._findItemByLabel = function (a, b) {
        if (a)
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if (d.label === b)
                    return d
            }
    },
    e.widget.Menu.prototype.hide = function () {
        this.setState("normal"),
        this.setCurrentItem(c)
    },
    e.widget.Menu.prototype.deleteItem = function (a) {
        for (var b, c = this, d = c._splitPath(a), e = c, f = 0; f < d.length; f++) {
            var g = d[f];
            if (b = e.items || [], e = c._findItemByLabel(b, g), !e)
                break;
            f === d.length - 1 && Va(b, e)
        }
        c.epc("items", null, c.items)
    },
    e.widget.Menu.prototype._splitPath = function (a) {
        for (var b = !1, c = "", d = [], e = 0; e < a.length; e++) {
            var f = a[e];
            if ("/" === f) {
                if (!b) {
                    d.push(c),
                    c = "";
                    continue
                }
            } else if ("`" === f) {
                b = !b;
                continue
            }
            c += f
        }
        return d.push(c),
        d
    },
    e.widget.Menu.prototype.findItem = function (a) {
        for (var b = this, c = b._splitPath(a), d = b, e = d.items, f = 0; f < c.length; f++) {
            var g = c[f];
            if (!e)
                return;
            if (d = b._findItemByLabel(e, g), !d)
                return;
            e = d.items
        }
        return d
    },
    e.widget.Menu.prototype.addItem = function (a, b, c) {
        for (var d = this, e = d._splitPath(a), f = d, g = f.items, h = 0; h < e.length; h++) {
            var i = e[h];
            if (g || (g = f.items = []), f = d._findItemByLabel(g, i), !f) {
                if (h === e.length - 1) {
                    if (f = {
                            label: i,
                            action: b
                        }, c)
                        for (var j in c)
                            f[j] = c[j]
                } else
                    f = {
                        label: i
                    };
                g.push(f)
            }
            g = f.items
        }
        d.epc("items", null, d.items)
    },
    e.widget.Menu.prototype.findItemByLabel = function (a) {
        var b;
        return this.forEach(function (c) {
            c.label === a && (b = c)
        }),
        b
    },
    e.widget.Menu.prototype.findItemById = function (a) {
        var b;
        return this.forEach(function (c) {
            c.id === a && (b = c)
        }),
        b
    },
    e.widget.Menu.prototype.select = function (a) {
        if ("radio" === a.type) {
            var b = a.groupId;
            b != c ? this.forEach(function (b) {
                b === a ? b.selected = !0 : b.groupId === a.groupId && (b.selected = !1)
            }) : a.selected = !0
        } else
            a.selected = !0
    },
    e.widget.Menu.prototype.selectById = function (a) {
        var b = this.findItemById(a);
        b && this.select(b)
    },
    e.widget.Menu.prototype.addSeparator = function (a) {
        for (var b = this, c = a.split("/"), d = b, e = d.items, f = 0; f < c.length; f++) {
            var g = c[f];
            if (!e)
                return;
            if (d = b._findItemByLabel(e, g), !d)
                return;
            if (f === c.length - 1 && e) {
                var h = e.indexOf(d) + 1;
                e.splice(h, 0, {
                    type: "-"
                })
            }
            e = d.items
        }
        b.epc("items", null, b.items)
    },
    e.widget.Menu.prototype.dispose = function () {
        var a = this,
        b = a._view;
        b && (Ba(b), a._mousetrap.dispose(), a._dropDownMenu.dispose(), a._view = a._items = a._mousetrap = c)
    }; {
        var Ad = _("qc.widget.ButtonBase", b, function (a) {
            var b = this;
            b.initView(!1, !0),
            Ja(b, a)
        }, {
            _iconWidth: 16,
            _iconHeight: 16,
            _padding: 2,
            _state: "",
            _iconAlign: "left",
            _iconStretch: "center",
            _align: "center",
            _background: "rgb(238, 238, 238)",
            _gradientColor: "rgb(211, 211, 211)",
            _hoverBackground: "rgb(248, 248, 248)",
            _hoverGradientColor: "rgb(221, 221, 221)",
            _activeBackground: "rgb(223, 223, 223)",
            _activeGradientColor: "rgb(233, 233, 233)",
            _textColor: M,
            _textFont: I,
            _borderWidth: 1,
            _leftBorderVisible: !0,
            _rightBorderVisible: !0,
            _bottomBorderVisible: !0,
            _topBorderVisible: !0,
            _borderColor: "rgb(195, 195, 195)",
            _preferredSizeProperties: ["text", "icon", "padding", "iconWidth", "iconHeight", "textFont"],
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                ("text" === c || "textFont" === c) && (b._textSize = this.textSize),
                b.checkChildPreferredSizeChange(c),
                b.iv()
            },
            getStateIcon: function () {
                return this.icon
            },
            getStateNinePatch: function (a) {
                var b = this,
                c = [];
                if ("hover" === a) {
                    var d = b.hoverNinePatchImage;
                    d && (c.push(d), c.push(b.hoverNinePatchBorder || []))
                } else if ("active" === a) {
                    var e = b.activeNinePatchImage;
                    e && (c.push(e), c.push(b.activeNinePatchBorder || []))
                } else {
                    var f = b.ninePatchImage;
                    f && (c.push(f), c.push(b.ninePatchBorder || []))
                }
                return c
            },
            getStateBackground: function (a) {
                var b = this,
                c = [];
                if ("hover" === a) {
                    var d = b.hoverBackground;
                    if (d) {
                        c.push(d);
                        var e = b.hoverGradientColor;
                        e && c.push(e)
                    }
                } else if ("active" === a) {
                    var f = b.activeBackground;
                    if (f) {
                        c.push(f);
                        var g = b.activeGradientColor;
                        g && c.push(g)
                    }
                } else {
                    var h = b.background;
                    if (h) {
                        c.push(h);
                        var i = b.gradientColor;
                        i && c.push(i)
                    }
                }
                return c
            },
            drawBackground: function (a, b, c, d, e) {
                var f = this,
                g = f._state,
                h = f.backgroundGradient || "linear.north",
                i = f.getStateNinePatch(g),
                j = f.getStateBackground(g);
                if (i.length > 0) {
                    var k = i[1];
                    ea(a, i[0], b, c, d, e, k[0], k[1], k[2], k[3])
                } else if (j.length > 0) {
                    a.beginPath();
                    var l = {
                        x: b,
                        y: c,
                        width: d,
                        height: e
                    };
                    2 === j.length ? qb(a, j[1], h, j[0], l) : a.fillStyle = j[0],
                    a.rect(l.x, l.y, l.width, l.height),
                    a.fill()
                }
            },
            getIconTextWidth: function () {
                return this.clientWidth
            },
            getIconTextHeight: function () {
                return this.clientHeight
            },
            getTextColor: function () {
                return this.textColor
            },
            validateImpl: function () {
                var a,
                b,
                c,
                d,
                e,
                f,
                g = this,
                h = g._canvas,
                i = g.clientWidth,
                j = g.clientHeight,
                k = g.getStateIcon(),
                l = g.padding,
                n = g.getTextColor(),
                o = g.textFont,
                p = g.iconWidth || ac(k) || 0,
                q = g.iconHeight || bc(k) || 0,
                r = g.iconAlign,
                s = g.align,
                t = g._textSize || {
                    width: 0,
                    height: 0
                };
                Sa(l) ? (a = l[0], b = l[1], c = l[2], d = l[3]) : a = b = c = d = l,
                ta(h, i, j);
                var u = Ub(h, 0, 0, 1);
                g.drawBackground(u, 0, 0, i, j);
                var v = g.borderWidth,
                w = g.borderColor;
                if (v && w) {
                    var x = {
                        left: g.leftBorderVisible,
                        right: g.rightBorderVisible,
                        top: g.topBorderVisible,
                        bottom: g.bottomBorderVisible
                    };
                    tb(u, w, 0, 0, i, j, v, x)
                }
                var y = 0,
                z = 0,
                A = g.text;
                if (i = g.getIconTextWidth(), j = g.getIconTextHeight(), u.beginPath(), k && r) {
                    if ("left" === r) {
                        var B = g.iconStretch,
                        C = q;
                        q = m(q, j),
                        p = q / C * p,
                        e = t.width + p;
                        var D;
                        "left" === s ? (D = d, y = D + p) : "right" === s ? (D = i - e - b, y = D + p) : (D = (i - e) / 2, y = D + p),
                        da(u, k, B, D, (j - q) / 2, p, q, null, g),
                        fa(u, A, o, n, y, z, t.width, j)
                    } else if ("right" === r) {
                        var C = q;
                        q = m(q, j),
                        p = q / C * p,
                        e = t.width + p;
                        var D;
                        "left" === s ? (y = b, D = y + t.width) : "right" === s ? (y = i - e - b, D = y + t.width) : (y = (i - e) / 2, D = y + t.width),
                        da(u, k, B, D, (j - q) / 2, p, q, null, g),
                        fa(u, A, o, n, y, z, t.width, j)
                    } else if ("top" === r) {
                        var E = p;
                        p = m(p, i),
                        q = p / E * q,
                        f = t.height + q,
                        z = (j - f) / 2 + q,
                        da(u, k, B, (i - p) / 2, (j - f) / 2, p, q, null, g),
                        fa(u, A, o, n, y, z, i, t.height, "center")
                    } else if ("bottom" === r) {
                        var E = p;
                        p = m(p, i),
                        q = p / E * q,
                        f = t.height + q,
                        z = (j - f) / 2,
                        da(u, k, B, (i - p) / 2, (j - f) / 2 + t.height, p, q, null, g),
                        fa(u, A, o, n, y, z, i, t.height, "center")
                    }
                } else
                    fa(u, A, o, n, d, a, i - d - b, j - a - c, s);
                u.restore()
            },
            getPreferredSize: function () {
                var a = this,
                b = a._preferredSize || a._calcdPreferredSize;
                if (!b) {
                    var c,
                    d,
                    e,
                    f,
                    g = a._textSize || a.textSize,
                    i = a.icon,
                    j = a.iconWidth || ac(i),
                    k = a.iconHeight || bc(i),
                    m = a.iconAlign,
                    n = a.padding;
                    Sa(n) ? (c = n[0], d = n[1], e = n[2], f = n[3]) : c = d = e = f = n,
                    g = {
                        width: g.width,
                        height: g.height
                    },
                    i && j && k && m && ("left" === m || "right" === m ? (g.width += j, g.height = l(k, g.height)) : ("top" === m || "bottom" === m) && (g.width = l(j, g.width), g.height += k)),
                    g.width = h(g.width + f + d),
                    g.height = h(g.height + c + e),
                    b = a._calcdPreferredSize = g
                }
                return b
            },
            getToolTipAt: function () {
                return this.toolTip || this.text
            }
        }, {
            view: !0,
            emitter: !0,
            toolTip: !0,
            properties: ["text", "align", "icon", "iconAlign", "iconWidth", "iconStretch", "iconHeight", "padding", "backgroundGradient", "toolTip", "textColor", "textFont", "state", "ninePatchImage", "ninePatchBorder", "hoverNinePatchImage", "hoverNinePatchBorder", "activeNinePatchImage", "activeNinePatchBorder", "background", "hoverBackground", "activeBackground", "gradientColor", "hoverGradientColor", "activeGradientColor", "borderWidth", "leftBorderVisible", "rightBorderVisible", "topBorderVisible", "bottomBorderVisible", "borderColor"]
        }, {
            textSize: {
                get: function () {
                    var a = this,
                    b = a.text;
                    return b ? Ka(a.textFont, b) : {
                        width: 0,
                        height: 0
                    }
                }
            }
        }),
        Bd = _("qc.widget.DropDownList", Ad, function (a) {
            var b = this,
            c = b._listConfig = {};
            for (var d in a)
                if (0 === d.indexOf("list.")) {
                    var e = a[d],
                    f = d.replace("list.", "");
                    c[f] = e,
                    delete a[d]
                }
            Bd["super"].constructor.call(b, a),
            b._bindDocClickStartFunc = b._docClickStartFunc.bind(b),
            new fe(b)
        }, {
            _docClickStartFunc: function (a) {
                var b = this;
                b.isExpanded() && b._list && !b._list.view.contains(a.target) && b.collapse()
            },
            isExpanded: function () {
                return !!this._isExpanded
            },
            _setValue: function (a) {
                var b = this,
                c = b.selectionMode;
                if ("single" === c)
                    b.value = a;
                else {
                    var d = b.value;
                    d && Sa(d) || (d = []),
                    d = d.slice(0),
                    d.indexOf(a) < 0 ? Ua(d, a) : Va(d, a),
                    b.value = d
                }
            },
            registerCloseEvent: function (a) {
                document.addEventListener("mousedown", a),
                document.addEventListener("touchstart", a)
            },
            unregisterCloseEvent: function (a) {
                document.removeEventListener("mousedown", a),
                document.removeEventListener("touchstart", a)
            },
            expand: function () {
                if (!this.isExpanded()) {
                    w.popup = this;
                    var a = this,
                    b = Da(),
                    c = a.view,
                    d = c.getBoundingClientRect(),
                    f = new e.widget.DataModel,
                    g = a._list = new e.widget.List(f, a._listConfig),
                    h = g.rowHeight,
                    i = a._map,
                    j = Sa(a.value) ? a.value[a.value.length - 1] : a.value,
                    k = i[j] || 0;
                    a._items.forEach(function (a, b) {
                        var c = new Pc,
                        d = a,
                        e = a;
                        Pa(a) || (e = a.value, d = a.label),
                        c.name = d,
                        c.value = e,
                        c.id = b,
                        f.add(c)
                    }),
                    a._listConfig.labelFont || (g.labelFont = a.textFont),
                    g.iconFunc = function (b) {
                        var c = a.selectionMode,
                        d = {
                            width: 1,
                            height: 1,
                            comps: []
                        };
                        if ("single" === c)
                            return b.value === a.value ? a.selectIcon : d;
                        var e = a.value;
                        return Sa(e) && e.indexOf(b.value) >= 0 ? a.selectIcon : d
                    },
                    g.onDataClick = function (b) {
                        a._setValue(b.value),
                        a.collapse()
                    },
                    g.addEventListener("mousemove", function (a) {
                        g.selectionModel.selection = g.getDataAt(a)
                    }),
                    g.addEventListener("keydown", function (b) {
                        if (Ob(b)) {
                            var c = g.selectionModel.lastData;
                            a._setValue(c.value),
                            a.collapse()
                        }
                    }),
                    g.view.style.background = a.dropDownBackground,
                    g.view.style.boxShadow = "0px 0px 10px " + y.shadowColor,
                    oa(function () {
                        a.registerCloseEvent(a._bindDocClickStartFunc)
                    });
                    var m = g.preferredSize,
                    n = l(m.width + a.padding, d.width),
                    o = m.height,
                    p = d.left - a.dropDownOffset + b.left - (n - d.width),
                    q = d.top - h * k + b.top;
                    n > b.width && (n = b.width),
                    o > b.height && (o = b.height),
                    p < b.left && (p = b.left),
                    q < b.top && (q = b.top),
                    p + n > b.width + b.left && (p = b.width - n + b.left),
                    q + o > b.height + b.top && (q = b.height - o + b.top),
                    g.selectionModel.selection = f.getDataById(a._map[j]),
                    g.addToDOM({
                        x: p,
                        y: q,
                        width: n,
                        height: o
                    }),
                    g.requestFocus(),
                    a._isExpanded = !0,
                    a.emit("expand", {
                        list: g
                    })
                }
            },
            close: function () {
                this.collapse()
            },
            collapse: function () {
                var a = this;
                if (w.popup === a && (w.popup = c), a.isExpanded()) {
                    var b = a._list;
                    Ba(b.view),
                    a._isExpanded = !1,
                    a.unregisterCloseEvent(a._bindDocClickStartFunc),
                    delete a._list,
                    this.emit("collapse", {
                        list: b
                    })
                }
            },
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                "value" === c && (b.onValueChange(a.newValue), b.iv())
            },
            onValueChange: function () {},
            validateImpl: function () {
                var a = this,
                b = a._canvas,
                c = a.clientWidth,
                d = a.clientHeight,
                e = a.padding,
                f = a.textColor,
                g = a.textFont,
                h = a.text || "";
                ta(b, c, d);
                var i = Ub(b, 0, 0, 1);
                a.drawBackground(i, 0, 0, c, d);
                var j = a.borderWidth,
                k = a.borderColor;
                if (j && k) {
                    var l = {
                        left: a.leftBorderVisible,
                        right: a.rightBorderVisible,
                        top: a.topBorderVisible,
                        bottom: a.bottomBorderVisible
                    };
                    tb(i, k, 0, 0, c, d, j, l)
                }
                fa(i, h, g, f, e, 0, null, d),
                a._drawIcon(i),
                i.restore()
            },
            _drawIcon: function (a) {
                var b = this,
                c = b.getStateIcon(),
                d = b.clientHeight,
                e = b.clientWidth,
                f = b.padding,
                g = b.iconWidth,
                h = b.iconHeight,
                i = h;
                h = m(h, d),
                g = h / i * g;
                var j = e - g - f - 2,
                k = (d - h) / 2;
                da(a, c, null, j, k, g, h, null, b)
            },
            getPreferredSize: function () {
                var a = this,
                b = a._preferredSize || a._calcdPreferredSize;
                if (!b) {
                    var c = 0,
                    d = 0,
                    e = a._labelMap,
                    f = a._padding;
                    for (var g in e) {
                        var h = a.getLabel(g),
                        i = Ka(a.textFont, h);
                        c = l(i.width, c),
                        d = l(i.height, d)
                    }
                    c += 3 * f,
                    d += 2 * f;
                    var k = a.getStateIcon(),
                    n = a.iconWidth || ac(k) || 0,
                    o = a.iconHeight || bc(k) || 0,
                    p = o;
                    o = m(o, d),
                    n = o / p * n,
                    c += n,
                    b = a._calcdPreferredSize = {
                        width: j(c),
                        height: j(d)
                    }
                }
                return b
            },
            getLabel: function (a) {
                var b = this.selectionMode;
                if ("single" === b)
                    return this._labelMap[a];
                if (Sa(a)) {
                    for (var c = "", d = 0; d < a.length; d++) {
                        var e = a[d],
                        f = this._labelMap[e];
                        c += d === a.length - 1 ? f : f + ","
                    }
                    return c
                }
                return ""
            },
            getItem: function (a) {
                var b = this._map[a];
                return b >= 0 ? this._items[b] : c
            },
            _items: [],
            _selectIcon: {
                width: 9,
                height: 8,
                comps: [{
                        type: "shape",
                        borderColor: {
                            func: function (a, b) {
                                return b.isSelected(a) ? b.labelSelectColor : b.labelColor
                            }
                        },
                        borderWidth: 1,
                        points: [1, 4, 4, 7, 8, 0],
                        segments: [1, 2, 2]
                    }
                ]
            },
            _dropDownBackground: "#F6F6F6",
            _dropDownOffset: 6,
            _icon: {
                width: 6,
                height: 12,
                comps: [{
                        type: "shape",
                        background: {
                            func: function (a, b) {
                                return b.iconBackground || "black"
                            }
                        },
                        points: [3, 0, 0, 5, 6, 5, 0, 7, 6, 7, 3, 12],
                        segments: [1, 2, 2, 5, 1, 2, 2, 5]
                    }
                ]
            },
            _iconWidth: 5,
            _iconHeight: 10,
            _selectionMode: "single"
        }, {
            properties: ["selectIcon", "dropDownBackground", "dropDownOffset", "iconBackground", "selectionMode"]
        }, {
            value: {
                get: function () {
                    return this._value
                },
                set: function (a) {
                    var b = this._value;
                    this._value = a,
                    this._text = this.getLabel(a),
                    this.epc("value", b, a)
                }
            },
            items: {
                get: function () {
                    return this._items
                },
                set: function (a) {
                    var b = this,
                    c = b._items,
                    d = b._map,
                    e = b._labelMap;
                    d || (d = b._map = {}),
                    e || (e = b._labelMap = {}),
                    b._items = Ta(a) ? a() : a,
                    b._items.forEach(function (a, b) {
                        var c = a,
                        f = a;
                        null != a && "object" == typeof a && (f = a.value, c = a.label),
                        d[f] = b,
                        e[f] = c
                    }),
                    b.epc("items", c, this._items)
                }
            }
        }),
        Cd = _("qc.widget.Button", Ad, function Se(a) {
            var b = this;
            Se["super"].constructor.call(b, a);
            var c = b._interactor = new de(b);
            b._bindinghandle_documentmousedown = c.handle_documentmousedown.bind(c)
        }, {
            _contextMenu: c,
            _splitIcon: c,
            _splitColor1: "rgb(192, 192, 192)",
            _splitColor2: "rgb(241, 241, 241)",
            _preferredSizeProperties: ["text", "icon", "padding", "iconWidth", "iconHeight", "split"],
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                ("menuItems" === c || "split" === c) && b.split === !0 && (b._contextMenu || (b._contextMenu = new zd, b._contextMenu.on("hide", function (a) {
                            a && a.item && (b._interactor.clear(), b.state = "normal")
                        })), b._contextMenu.items = b.menuItems),
                Cd["super"].onPropertyChange.call(b, a)
            },
            getStateBackground: function (a) {
                var b = this;
                if ("splitActive" === a) {
                    var c = [],
                    d = b.activeBackground;
                    if (d) {
                        c.push(d);
                        var e = b.activeGradientColor;
                        return e && c.push(e),
                        c
                    }
                }
                return Cd["super"].getStateBackground.call(b, a)
            },
            close: function () {
                this.state = "normal"
            },
            getIconTextWidth: function () {
                var a = this,
                b = a.clientWidth;
                return a.split && (b -= 30),
                b
            },
            drawSplit: function (a, b, c, d, e) {
                a.beginPath(),
                a.fillStyle = this.splitColor1,
                a.rect(b, 3, 1, e - 6),
                a.fill(),
                a.beginPath(),
                a.fillStyle = this.splitColor2,
                a.rect(b + 1, 3, 1, e - 6),
                a.fill(),
                da(a, "sortDesc", null, b, 0, 30, e)
            },
            validateImpl: function () {
                var a = this;
                Cd["super"].validateImpl.call(a);
                var b = a.getIconTextWidth(),
                d = a.getIconTextHeight(),
                e = a.split;
                if (e) {
                    var f = Ub(a._canvas, 0, 0, 1);
                    a.drawSplit(f, b, b - 30, null, d),
                    f.restore();
                    var g = a._contextMenu;
                    if ("splitActive" === a._state) {
                        var h = Da(),
                        i = this.view.getBoundingClientRect();
                        g.show(i.left + h.left, i.top + h.top + i.height),
                        document.addEventListener("mousedown", a._bindinghandle_documentmousedown),
                        w.popup = a
                    } else
                        g.visible && (g.hide(), document.removeEventListener("mousedown", a._bindinghandle_documentmousedown)), w.popup === a && (w.popup = c), a._interactor._touchstart = null
                }
            },
            clear: function () {
                var a = this;
                a.isInDOM() || (a._contextMenu && a._contextMenu.dispose(), document.removeEventListener("mousedown", a._bindinghandle_documentmousedown))
            },
            getPreferredSize: function () {
                var a = this,
                b = a._preferredSize || a._calcdPreferredSize;
                return b || (b = Cd["super"].getPreferredSize.call(a), a.split && (b.width += 30), b = a._calcdPreferredSize),
                b
            }
        }, {
            properties: ["split", "menuItems", "splitColor1", "splitColor2"]
        }, {
            contextMenu: {
                get: function () {
                    return this._contextMenu
                }
            }
        }),
        Dd = _("qc.widget.DropDownButton", Ad, function Te(a) {
            var b = this;
            b._contextMenu = new zd,
            Te["super"].constructor.call(b, a);
            var c = b._interactor = new ee(b);
            b._bindinghandle_documentmousedown = c.handle_documentmousedown.bind(c)
        }, {
            _contextMenu: c,
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                "menuItems" === c && (b._contextMenu.items = a.newValue),
                Dd["super"].onPropertyChange.call(b, a)
            },
            close: function () {
                this.state = "normal"
            },
            clear: function () {
                var a = this;
                a.isInDOM() || (a._contextMenu && a._contextMenu.dispose(), document.removeEventListener("mousedown", a._bindinghandle_documentmousedown))
            },
            validateImpl: function () {
                var a = this;
                Dd["super"].validateImpl.call(a);
                var b = a._contextMenu;
                if ("active" === a._state) {
                    var d = Da(),
                    e = this.view.getBoundingClientRect();
                    b.show(e.left + d.left, e.top + d.top + e.height),
                    document.addEventListener("mousedown", a._bindinghandle_documentmousedown),
                    w.popup = a
                } else
                    b.visible && (b.hide(), document.removeEventListener("mousedown", a._bindinghandle_documentmousedown)), w.popup === a && (w.popup = c), a._interactor.clear()
            }
        }, {
            properties: ["menuItems"]
        }, {
            contextMenu: {
                get: function () {
                    return this._contextMenu
                }
            }
        }),
        Ed = _("qc.widget.ToggleButton", Ad, function Ue(a) {
            var b = this;
            Ue["super"].constructor.call(b, a),
            b._interactor = new ge(b)
        }, {
            onPropertyChange: function (a) {
                var b = this;
                Ed["super"].onPropertyChange.call(b, a)
            },
            getStateNinePatch: function (a) {
                var b,
                c = this,
                d = c.selected;
                if (d) {
                    b = [];
                    var e = c.activeNinePatchImage;
                    e && (b.push(e), b.push(c.activeNinePatchBorder || []))
                } else
                    b = Ed["super"].getStateNinePatch.call(c, a);
                return b
            },
            getStateBackground: function (a) {
                var b,
                c = this,
                d = c.selected;
                if (d) {
                    b = [];
                    var e = c.activeBackground;
                    if (e) {
                        b.push(e);
                        var f = c.activeGradientColor;
                        f && b.push(f)
                    }
                } else
                    b = Ed["super"].getStateBackground.call(c, a);
                return b
            }
        }, {
            properties: ["selected", "value"]
        }),
        Fd = (_("qc.widget.CheckBox", Ed, function Ve(a) {
                var b = this;
                Ve["super"].constructor.call(b, a)
            }, {
                _borderWidth: 0,
                _icon: "check",
                _checkIcon: "check",
                _uncheckIcon: "uncheck",
                getStateIcon: function () {
                    var a = this,
                    b = a.selected;
                    return b ? a.checkIcon : a.uncheckIcon
                },
                drawBackground: function () {}
            }, {
                properties: ["checkIcon", "uncheckIcon"]
            }), _("qc.widget.RadioButton", Ed, function We(a) {
                var b = this;
                We["super"].constructor.call(b, a)
            }, {
                _borderWidth: 0,
                _icon: "radiooff",
                getStateIcon: function () {
                    var a = this,
                    b = a.selected;
                    return b ? "radioon" : "radiooff"
                },
                drawBackground: function () {}
            }, {}), _("qc.widget.Radios", b, function () {
                var a = this;
                a._buttons = []
            }, {
                handleButtonSelectedChange: function (a) {
                    var b = this,
                    c = a.source,
                    d = a.property;
                    if ("selected" === d) {
                        var e = a.newValue;
                        if (e) {
                            var f = b._buttons;
                            b._flag = !0,
                            f.forEach(function (a) {
                                a !== c && (a.selected = !1)
                            }),
                            b._flag = !1,
                            b.value = c.value
                        } else
                            b._flag || (c.selected = !0)
                    }
                },
                add: function (a) {
                    var b = this,
                    c = b._buttons;
                    a && c.indexOf(a) < 0 && (Ua(c, a), a.on("propertyChange", b.handleButtonSelectedChange, b))
                },
                remove: function (a) {
                    var b = this,
                    c = b._buttons;
                    a && c.indexOf(a) >= 0 && (Va(c, a), a.off("propertyChange", b.handleButtonSelectedChange, b))
                },
                clear: function () {
                    var a = this,
                    b = a._buttons;
                    b.forEach(function (b) {
                        b.off("propertyChange", a.handleButtonSelectedChange, a)
                    }),
                    b.length = 0
                }
            }, {
                properties: ["value"],
                emitter: !0
            })),
        Gd = _("qc.widget.TextField", b, function (a) {
            var b = this;
            b.initView(!1, !0),
            b.initStyle(),
            new Od(b),
            Ja(b, a)
        }, {
            _padding: [2, 0, 2, 0],
            _background: "white",
            _borderColor: "rgb(217, 217, 217)",
            _textColor: M,
            initStyle: function () {
                var a = this,
                b = a._interactionDiv,
                c = a._input = a._createInput();
                c.style.position = "absolute",
                c.style.boxSizing = "border-box",
                c.style.width = "100%",
                c.style.height = "100%",
                c.style.border = "0",
                c.style.resize = "none",
                c.style.backgroundColor = "rgba(0,0,0,0)",
                c.style.color = a.textColor,
                b.appendChild(c),
                a.borderColor && (a.view.style.border = "1px solid " + a.borderColor)
            },
            _preferredSizeProperties: ["padding", "value"],
            onPropertyChange: function (a) {
                var b = this,
                d = a.property;
                "value" === d ? this._textSize = this.textSize : "placeHolder" === d ? this._input.setAttribute("placeholder", a.newValue) : "maskRe" === d && this._input.setAttribute("pattern", a.newValue),
                b._preferredSizeProperties.indexOf(d) >= 0 && (b._calcdPreferredSize = c),
                b.iv()
            },
            getInput: function () {
                return this._input
            },
            _createInput: function () {
                return document.createElement("input")
            },
            validateImpl: function () {
                var a = this,
                b = a.view,
                d = a._input,
                e = a.value,
                f = a.clientWidth,
                g = a.clientHeight,
                h = a.background,
                i = a.activeBackground,
                j = a.ninePatchImage,
                k = a.label,
                l = a.ninePatchBorder || [],
                m = a.borderColor,
                n = a.maxLength,
                o = a._canvas,
                p = a.padding;
                d.style.padding = Sa(p) ? p[0] + "px " + p[1] + "px " + p[2] + "px " + p[3] + "px" : p + "px ",
                null != n && d.setAttribute("maxlength", n),
                d.style.font = a._font,
                d.style.color = a.focused && a._activeTextColor ? a._activeTextColor : a._textColor,
                d.style.setProperty("::-webkit-input-placeholder", "red", ""),
                ta(o, f, g);
                var q = Ub(o, 0, 0, 1);
                if (j ? ea(q, j, 0, 0, f, g, l[0], l[1], l[2], l[3]) : h && (q.beginPath(), q.fillStyle = a.focused && i ? i : h, q.rect(0, 0, f, g), q.fill()), b.style.border = m ? "1px solid " + m : "", e != c && e !== d.value && (d.value = a.value), k) {
                    q.beginPath();
                    var r = Ka(a.textFont, k);
                    fa(q, k, a._font, d.style.color, f - r.width - 4, 0, r.width + 4, g, "center", "middle")
                }
            },
            getPreferredSize: function () {
                var a = this,
                b = a._preferredSize || a._calcdPreferredSize;
                if (!b) {
                    var c = a._textSize || a.textSize,
                    d = a.padding;
                    c = {
                        width: c.width,
                        height: c.height
                    },
                    Sa(d) ? (c.width += d[1] + d[3], c.height += d[0] + d[2]) : (c.width += 2 * d, c.height += 2 * d),
                    c.width = h(c.width),
                    c.height = h(c.height),
                    b = a._calcdPreferredSize = c
                }
                return b
            }
        }, {
            view: !0,
            emitter: !0,
            properties: ["value", "font", "padding", "maskRe", "placeHolder", "readonly", "label", "background", "activeBackground", "activeTextColor", "ninePatchImage", "ninePatchBorder", "borderColor", "textColor", "maxLength"]
        }, {
            input: {
                get: function () {
                    return this._input
                }
            },
            textSize: {
                get: function () {
                    var a = this,
                    b = a.value,
                    c = a.font;
                    return b ? Ka(c, b) : Ka(c, "emwqd")
                }
            }
        });
        _("qc.widget.TextArea", Gd, function (a) {
            var b = this;
            b.initView(!1, !0),
            b.initStyle(),
            new Pd(b),
            Ja(b, a)
        }, {
            _createInput: function () {
                return document.createElement("textarea")
            }
        }, {}, {
            textSize: {
                get: function () {
                    var a = this,
                    b = a.value;
                    return b ? kb({
                        font: a.font
                    }, b) : {
                        width: 0,
                        height: 0
                    }
                }
            }
        }),
        _("qc.widget.Label", Ad, function (a) {
            var b = this;
            b.initView(!1, !0),
            b._interactor = new he(b),
            b.disableToolTip(),
            Ja(b, a)
        }, {
            _borderWidth: 0,
            _background: c,
            _gradientColor: c,
            getStateBackground: function () {
                var a = this,
                b = [],
                c = a.background;

                if (c) {
                    b.push(c);
                    var d = a.gradientColor;
                    d && b.push(d)
                }
                return b
            }
        }, {})
    }
    _("qc.widget.Tabs", b, function (a) {
        var b = this,
        d = b._view = ra(1),
        e = b._titleDiv = ra(1),
        f = b._tabModel = new Qc,
        g = f.selectionModel;
        b._tabInfos = [],
        b._canvas = sa(e);
        var h = b._interactionDiv = ra(1);
        za(d, h),
        za(d, e),
        za(d, b._contentDiv = ra(1)),
        g.selectionMode = "single",
        g.on("selectionChange", b.updateTabView, b),
        f.on("dataModelChange", function (a) {
            "add" === a.kind ? a.data.element.parent = b : "remove" === a.kind ? a.data.element._parent = c : "beforeClear" === a.kind && f._roots.forEach(function (a) {
                a.element._parent = c
            })
        }),
        ["dataModelChange", "dataPropertyChange", "hierarchyChange"].forEach(function (a) {
            f.on(a, b.updateTabView, b)
        }),
        new ie(b),
        Ja(b, a),
        b.iv()
    }, {
        _tabPosition: "top",
        _tabHeight: 24,
        _tabGap: 2,
        _labelColor: M,
        _labelFont: I,
        _tabBackground: "rgb(238, 238, 238)",
        _tabGradientColor: "rgb(211, 211, 211)",
        _tabActiveBackground: "rgb(223, 223, 223)",
        _tabActiveGradientColor: "rgb(233, 233, 233)",
        _titleBackground: "white",
        _insertColor: "blue",
        _borderColor: "rgb(181, 188, 199)",
        _borderWidth: 1,
        _splitterColor: "rgb(188, 189, 199)",
        _movable: !0,
        _isPanel: !1,
        _tabW: 100,
        getPreferredSize: function () {
            var a = this,
            b = a._preferredSize || a._calcdPreferredSize;
            return b || (a._calcdPreferredSize = b = {
                    width: 100,
                    height: 100
                }),
            b
        },
        add: function (a, b, c) {
            var d = new rd,
            e = this._tabModel;
            return d.name = a,
            d.element = b,
            e.add(d),
            c && (e.selectionModel.selection = d),
            d
        },
        setItems: function (a) {
            var b = this;
            b.clear(),
            a && a.forEach(function (a) {
                var c = a.name,
                d = a.element,
                e = b.add(c, d);
                Ja(e, a)
            })
        },
        getLabel: function (a) {
            return this.labelFunc ? this.labelFunc(a) : a.name
        },
        getLabelFont: function (a) {
            return this.labelFontFunc ? this.labelFontFunc(a) : this.labelFont
        },
        getLabelColor: function (a) {
            return this.labelColorFunc ? this.labelColorFunc(a) : this.labelColor
        },
        onPropertyChange: function (a) {
            this.checkChildPreferredSizeChange(a.property),
            this.iv()
        },
        get: function (a) {
            var b = this,
            d = b._tabModel;
            if (Oa(a))
                return d._roots[a];
            if (Pa(a)) {
                var e;
                return d.forEach(function (c) {
                    a === b.getLabel(c) && (e = c)
                }),
                e
            }
            return a instanceof rd ? a : c
        },
        select: function (a) {
            this._tabModel.selectionModel.selection = this.get(a)
        },
        remove: function (a) {
            var b = this;
            if (a = b.get(a)) {
                var c = b._tabModel,
                d = c._roots.indexOf(a);
                b._tabModel.remove(a),
                b.selectOne(--d)
            }
        },
        clear: function () {
            var a = this,
            b = a._tabModel;
            b.clear()
        },
        removeChild: function (a) {
            for (var b = this, c = b._tabModel, d = 0; d < c.datas.length; d++) {
                var e = c.datas[d];
                e.element && e.element === a && b.remove(e)
            }
        },
        findViewById: function (a) {
            for (var b = this, c = b._tabModel, d = 0; d < c.datas.length; d++) {
                var e = c.datas[d];
                if (e.element && e.element.id === a)
                    return e.element
            }
            for (var d = 0; d < c.datas.length; d++) {
                var e = c.datas[d];
                if (e.element) {
                    var f = e.element.findViewById(a);
                    if (f)
                        return f
                }
            }
        },
        hideTabView: function (a, b) {
            b.parentNode === this._contentDiv && ("IFRAME" === b.tagName ? (b.style.display = NONE, b._tab_ = a) : Ba(b), ma())
        },
        showTabView: function (a, b) {
            "IFRAME" === b.tagName && (b.style.display = "block", b._tab_ = a),
            b.parentNode !== this._contentDiv && (za(this._contentDiv, b), ma())
        },
        updateTabView: function () {
            var a,
            b = this,
            c = b._currentTab,
            d = b._currentView,
            e = b._tabModel.selectionModel.lastData;
            e && (a = va(e.element)),
            a !== d && (d && (c.element.endEditing && c.element.endEditing(), b.hideTabView(c, d)), a && b.showTabView(e, a)),
            b._currentTab = e,
            b._currentView = a,
            c !== e && b.onTabChange(c, e),
            b.iv(!0)
        },
        onTabChange: function () {},
        onTabClose: function (a, b) {
            this.selectOne(--b)
        },
        selectOne: function (a) {
            var b = this,
            d = b._tabModel,
            e = d.length;
            if (e && !d.selectionModel.lastData) {
                a == c && (a = 0),
                a >= e && (a = e - 1),
                0 > a && (a = 0);
                for (var f = a; f >= 0; f--) {
                    var g = b.get(f);
                    if (!g.disabled)
                        return b.select(g), g
                }
                for (f = a + 1; e > f; f++)
                    if (g = b.get(f), !g.disabled)
                        return b.select(g), g
            }
        },
        getTabWidth: function (a) {
            if (this.isPanel)
                return this.tabW;
            var b = 4,
            c = ca(a.icon);
            c && (b += ac(c, a) + 4);
            var d = this.getLabel(a);
            return d && (b += Ka(this.getLabelFont(a), d).width + 4),
            a.closable && (b += 10),
            b
        },
        getStateNinePatch: function (a) {
            var b = this,
            c = [];
            if ("active" === a) {
                var d = b.tabActiveNinePatchImage;
                d && (c.push(d), c.push(b.tabActiveNinePatchBorder || []))
            } else {
                var e = b.tabNinePatchImage;
                e && (c.push(e), c.push(b.tabNinePatchBorder || []))
            }
            return c
        },
        getStateBackground: function (a) {
            var b = this,
            c = [];
            if ("active" === a) {
                var d = b.tabActiveBackground;
                if (d) {
                    c.push(d);
                    var e = b.tabActiveGradientColor;
                    e && c.push(e)
                }
            } else {
                var f = b.tabBackground;
                if (f) {
                    c.push(f);
                    var g = b.tabGradientColor;
                    g && c.push(g)
                }
            }
            return c
        },
        drawTabBackground: function (a, b, c, d, e, f, g) {
            a.beginPath();
            var h = this,
            i = h.getStateNinePatch(g ? "active" : ""),
            j = h.getStateBackground(g ? "active" : "");
            if (i.length > 0) {
                var k = i[1];
                ea(a, i[0], b, c, d, e, k[0], k[1], k[2], k[3])
            } else if (j.length > 0) {
                a.beginPath();
                var l = {
                    x: b,
                    y: c,
                    width: d,
                    height: e
                };
                2 === j.length ? qb(a, j[1], f, j[0], l) : a.fillStyle = j[0],
                a.rect(l.x, l.y, l.width, l.height),
                a.fill()
            }
        },
        getTabIcon: function (a) {
            return ca(a.icon)
        },
        drawTab: function (a, b, c, d, e, f) {
            var g,
            h = this,
            i = h._tabPosition,
            j = c + 4,
            k = h.getTabIcon(b),
            l = b.disabled,
            m = h.getLabelColor(b),
            n = h.getLabelFont(b),
            o = h.getLabel(b),
            p = "left-vertical" === i,
            r = "right-vertical" === i;
            (p || r) && (j = d + 4);
            var t = "linear.north";
            p ? t = "linear.west" : r && (t = "linear.east"),
            h.drawTabBackground(a, c, d, e, f, t, b === h._currentTab),
            a.beginPath();
            var u = {
                left: 1,
                right: 1,
                bottom: 1,
                top: 1
            };
            "top" === i ? u.bottom = 0 : "bottom" === i ? u.top = 0 : "left" === i || p ? u.right = 0 : ("right" === i || r) && (u.left = 0),
            h.borderWidth && tb(a, h.borderColor, c, d, e, f, h.borderWidth, u);
            var v = e / 2;
            if (p && (Xb(a, v, d + f / 2), Yb(a, q), Xb(a, -v, -d - f / 2)), k) {
                var w = bc(k, b),
                x = ac(k, b);
                if (p || r) {
                    var y = c + e / 2,
                    z = j + w / 2;
                    Xb(a, y, z),
                    Yb(a, s),
                    Xb(a, -y, -z),
                    da(a, k, null, c, j, e, w, b, h),
                    Xb(a, y, z),
                    Yb(a, -s),
                    Xb(a, -y, -z),
                    j += w + 4
                } else
                    h.isPanel && (j = c + 8), da(a, k, null, j, d, x, f, b, h), j += x + 4, h.isPanel && (j += 6)
            }
            return p || r ? (Xb(a, e / 2, j + e / 2), Yb(a, s), Xb(a, -e / 2, -j - e / 2), fa(a, o, n, m, c, j, f, e), Xb(a, e / 2, j + e / 2), Yb(a, -s), Xb(a, -e / 2, -j - e / 2)) : fa(a, o, n, m, j, d, e, f),
            p && (Xb(a, v, d + f / 2), Yb(a, -q), Xb(a, -v, -d - f / 2)),
            b.closable && (a.strokeStyle = m, a.lineWidth = 1, a.beginPath(), r ? (a.moveTo(c + e - 10, d + f - 4), a.lineTo(c + e - 4, d + f - 10), a.moveTo(c + e - 4, d + f - 4), a.lineTo(c + e - 10, d + f - 10), a.stroke(), g = {
                        x: c + e - 12,
                        y: d + f - 12,
                        width: 12,
                        height: 12
                    }) : (a.moveTo(c + e - 10, d + 4), a.lineTo(c + e - 4, d + 10), a.moveTo(c + e - 4, d + 4), a.lineTo(c + e - 10, d + 10), a.stroke(), g = {
                        x: c + e - 12,
                        y: d,
                        width: 12,
                        height: 12
                    })),
            l && (a.beginPath(), a.rect(c, d, e, f), a.fillStyle = "rgba(255, 255, 255, 0.5)", a.fill()),
            g
        },
        _layoutTitle: function (a, b, c) {
            var d = this,
            e = d._tabPosition,
            f = d._titleDiv,
            g = d._tabHeight;
            return "top" === e ? (wa(f, 0, 0, a, g), {
                x: 0,
                y: g,
                width: a,
                height: l(0, b - g)
            }) : "left" === e ? (wa(f, 0, 0, c, b), {
                x: c,
                y: 0,
                width: l(0, a - c),
                height: b
            }) : "right" === e ? (wa(f, a - c, 0, c, b), {
                x: 0,
                y: 0,
                width: l(0, a - c),
                height: b
            }) : "left-vertical" === e ? (wa(f, 0, 0, g, b), {
                x: g,
                y: 0,
                width: l(0, a - g),
                height: b
            }) : "right-vertical" === e ? (wa(f, a - g, 0, g, b), {
                x: 0,
                y: 0,
                width: l(0, a - g),
                height: b
            }) : "bottom" === e ? (wa(f, 0, b - g, a, g), {
                x: 0,
                y: 0,
                width: a,
                height: l(0, b - g)
            }) : void 0
        },
        drawLeftRightVerticalTabs: function (a, b) {
            var c = this,
            d = c._canvas,
            e = c._tabPosition,
            f = c._tabModel,
            g = c._tabHeight,
            i = c._tabInfos,
            j = c._tabGap,
            k = "right-vertical" === e,
            m = c._movingTabInfo,
            n = c._currentTab;
            ta(d, g, b);
            var o = Ub(d, 0, c.translateY, 1),
            p = 0;
            if (o.clearRect(0, 0, g, b), o.rect(0, 0, g, b), o.fillStyle = c._titleBackground, o.fill(), i.length = 0, f._roots.forEach(function (b) {
                    var d,
                    e = c.getTabWidth(b);
                    m && m.tab === b || (d = c.drawTab(o, b, 0, p, g, e, c._tabBackground), d && k && (d.x = a - 12)),
                    i.push({
                        closeRect: d,
                        tab: b,
                        startY: p,
                        endY: p + e,
                        height: e
                    }),
                    p += e + j
                }), c._sumHeight = l(0, p - j), m) {
                var q = m.position;
                c.drawTab(o, m.tab, 0, m.startY, g, m.height),
                sb(o, 0, q, g, 1, c._insertColor)
            }
            o.fillStyle = c.splitterColor;
            var r;
            if (n) {
                var s = i[f._roots.indexOf(n)];
                o.beginPath(),
                o.rect(0, 0, 1, h(s.startY)),
                o.fill(),
                r = k ? {
                    x: 0,
                    y: s.startY + s.height - 1,
                    width: 1,
                    height: b - (c.translateY + s.startY) - s.height
                }
                 : {
                    x: g - 1,
                    y: s.startY + s.height - 1,
                    width: 1,
                    height: b - (c.translateY + s.startY) - s.height
                }
            } else
                r = k ? {
                    x: 0,
                    y: 0,
                    width: 1,
                    height: b - c.translateY
                }
             : {
                x: g - 1,
                y: 0,
                width: 1,
                height: b - c.translateY
            };
            r && (o.beginPath(), o.rect(r.x, r.y, r.width, r.height), o.fill()),
            o.restore(),
            c.translateY = c.translateY
        },
        drawLeftRightTabs: function (a, b, c) {
            var d = this,
            e = d._canvas,
            f = d._tabPosition,
            g = d._tabModel,
            i = d._tabHeight,
            j = d._tabInfos,
            k = d._tabGap,
            m = "right" === f,
            n = d._movingTabInfo,
            o = d._currentTab;
            ta(e, c, b);
            var p = Ub(e, 0, d.translateY, 1),
            q = 0;
            if (p.clearRect(0, 0, c, b), p.rect(0, 0, c, b), p.fillStyle = d._titleBackground, p.fill(), j.length = 0, g._roots.forEach(function (b) {
                    var e;
                    n && n.tab === b || (e = d.drawTab(p, b, 0, q, c, i), e && m && (e.x = a - 12)),
                    j.push({
                        closeRect: e,
                        tab: b,
                        startY: q,
                        endY: q + i,
                        height: i
                    }),
                    q += i + k
                }), d._sumHeight = l(0, q - k), n) {
                var r = n.position;
                d.drawTab(p, n.tab, 0, n.startY, c, n.height),
                sb(p, 0, r, c, 1, d._insertColor)
            }
            p.fillStyle = d.splitterColor;
            var s;
            if (o) {
                var t = j[g._roots.indexOf(o)];
                p.beginPath(),
                m ? p.rect(0, 0, 1, h(t.startY)) : p.rect(c - 1, 0, 1, h(t.startY)),
                p.fill(),
                s = m ? {
                    x: 0,
                    y: t.startY + t.height - 1,
                    width: 1,
                    height: b - (d.translateY + t.startY) - t.height
                }
                 : {
                    x: c - 1,
                    y: t.startY + t.height - 1,
                    width: 1,
                    height: b - (d.translateY + t.startY) - t.height
                }
            } else
                s = m ? {
                    x: 0,
                    y: 0,
                    width: 1,
                    height: b - d.translateY
                }
             : {
                x: c - 1,
                y: 0,
                width: 1,
                height: b - d.translateY
            };
            s && (p.beginPath(), p.rect(s.x, s.y, s.width, s.height), p.fill()),
            p.restore(),
            d.translateY = d.translateY
        },
        drawTopBottomTabs: function (a, b) {
            var c = this,
            d = c._canvas,
            e = c._tabPosition,
            f = c._tabModel,
            g = c._tabHeight,
            i = c._tabInfos,
            j = c._tabGap,
            k = "bottom" === e,
            m = c._movingTabInfo,
            n = c._currentTab;
            ta(d, a, g);
            var o = Ub(d, c.translateX, 0, 1),
            p = 0;
            if (o.clearRect(0, 0, a, g), o.rect(0, 0, a, g), o.fillStyle = c._titleBackground, o.fill(), i.length = 0, f._roots.forEach(function (a) {
                    var d,
                    e = c.getTabWidth(a);
                    m && m.tab === a || (d = c.drawTab(o, a, p, 0, e, g), d && k && (d.y = b - g)),
                    i.push({
                        closeRect: d,
                        tab: a,
                        startX: p,
                        endX: p + e,
                        width: e
                    }),
                    p += e + j
                }), c._sumWidth = l(0, p - j), m) {
                var q = m.position;
                c.drawTab(o, m.tab, m.startX, 0, m.width, g),
                nc(o, c._insertColor, q, 0, g)
            }
            o.fillStyle = c.splitterColor;
            var r;
            if (n) {
                var s = i[f._roots.indexOf(n)];
                o.beginPath(),
                k ? o.rect(0, 0, h(s.startX), 1) : o.rect(0, g - 1, h(s.startX), 1),
                o.fill(),
                r = k ? {
                    x: s.startX + s.width - 1,
                    y: 0,
                    width: a - (c.translateX + s.startX) - s.width,
                    height: 1
                }
                 : {
                    x: s.startX + s.width - 1,
                    y: g - 1,
                    width: a - (c.translateX + s.startX) - s.width,
                    height: 1
                }
            } else
                r = k ? {
                    x: 0,
                    y: 0,
                    width: a - c.translateX,
                    height: 1
                }
             : {
                x: 0,
                y: g - 1,
                width: a - c.translateX,
                height: 1
            };
            r && (o.beginPath(), o.rect(r.x, r.y, r.width, r.height), o.fill()),
            o.restore(),
            c.translateX = c.translateX
        },
        validateImpl: function () {
            var a,
            b = this,
            c = b._tabPosition,
            d = b._contentDiv,
            e = b._tabModel,
            f = b.clientWidth,
            g = b.clientHeight,
            h = "left" === c,
            i = "right" === c,
            j = "left-vertical" === c,
            k = "right-vertical" === c,
            m = 0;
            (h || i) && e._roots.forEach(function (a) {
                m = l(b.getTabWidth(a), m)
            }),
            a = b._layoutTitle(f, g, m),
            wa(d, a),
            b._currentTab && (h || i ? a.x = 0 : j || k ? a.x = 0 : a.y = 0, wa(b._currentTab.element, a, b._forceLayout)),
            j || k ? b.drawLeftRightVerticalTabs(f, g, m) : h || i ? b.drawLeftRightTabs(f, g, m) : b.drawTopBottomTabs(f, g, m);
            for (var n = [], o = d.children, p = 0; p < o.length; p++) {
                var q = o[p],
                r = q._tab_;
                r && !e.contains(r) && n.push(q)
            }
            n.forEach(function (a) {
                d.removeChild(a)
            })
        }
    }, {
        view: 1,
        emitter: !0,
        scrollBar: !0,
        properties: ["movable", "tabGap", "tabHeight", "tabPosition", "labelColor", "labelFont", "titleBackground", "insertColor", "labelFunc", "labelFontFunc", "labelColorFunc", "borderWidth", "borderColor", "splitterColor", "tabBackground", "tabGradientColor", "tabActiveBackground", "tabActiveGradientColor", "tabNinePatchImage", "tabNinePatchBorder", "tabActiveNinePatchImage", "tabActiveNinePatchBorder"]
    }, {
        tabModel: {
            get: function () {
                return this._tabModel
            }
        },
        currentTab: {
            get: function () {
                return this._currentTab
            }
        },
        contentDiv: {
            get: function () {
                return this._contentDiv
            }
        },
        titleDiv: {
            get: function () {
                return this._titleDiv
            }
        },
        hScrollable: {
            get: function () {
                return this.width < this._sumWidth
            }
        },
        vScrollable: {
            get: function () {
                return this.height < this._sumHeight
            }
        },
        translateX: {
            set: function (a) {
                var b = this,
                c = b.width - b._sumWidth;
                c > a && (a = c),
                a > 0 && (a = 0),
                a = h(a);
                var d = b._translateX;
                b._translateX = a,
                b.epc("translateX", d, a)
            },
            get: function () {
                return this._translateX
            }
        },
        translateY: {
            set: function (a) {
                var b = this,
                c = b.height - b._sumHeight;
                c > a && (a = c),
                a > 0 && (a = 0),
                a = h(a);
                var d = b._translateY;
                b._translateY = a,
                b.epc("translateY", d, a)
            },
            get: function () {
                return this._translateY
            }
        },
        movingTabInfo: {
            set: function (a) {
                this._movingTabInfo = a,
                this.iv()
            },
            get: function () {
                return this._movingTabInfo
            }
        },
        children: {
            get: function () {
                for (var a = this, b = a._tabModel, c = [], d = 0; d < b.datas.length; d++) {
                    var e = b.datas[d];
                    e.element && c.push(e.element)
                }
                return c
            }
        }
    });
    var Hd = _("qc.widget.toolbar.Separator", b, function (a) {
        var b = this;
        b.initView(!0, !0),
        Ja(b, a)
    }, {
        _color1: "rgb(192, 192, 192)",
        _color2: "rgb(241, 241, 241)",
        getPreferredSize: function () {
            return this._preferredSize || {
                width: 2,
                height: 24
            }
        },
        onPropertyChange: function () {
            this.iv()
        },
        validateImpl: function () {
            var a = this,
            b = a._canvas,
            c = a.clientWidth,
            d = a.clientHeight,
            e = a.color1,
            f = a.color2;
            ta(b, c, d);
            var g = Ub(b, 0, 0, 1, {
                x: 0,
                y: 0,
                width: c,
                height: d
            });
            g.beginPath(),
            g.fillStyle = e,
            g.rect(0, 0, c / 2, d),
            g.fill(),
            g.beginPath(),
            g.fillStyle = f,
            g.rect(c / 2, 0, c / 2, d),
            g.fill(),
            g.restore()
        }
    }, {
        view: !0,
        emitter: !0,
        properties: ["color1", "color2"]
    }),
    Id = (_("qc.widget.Toolbar", wd, function Xe(a) {
            var b = this;
            Xe["super"].constructor.call(b);
            var c = new e.widget.layout.HBoxLayout(b);
            b.layout = c,
            c.padding = 4,
            Ja(b, a)
        }, {
            setItems: function (a) {
                var b = this,
                c = b.layout,
                d = [];
                if (a)
                    for (var e = 0; e < a.length; e++) {
                        var f = a[e];
                        if ("|" === f) {
                            var g = new Hd;
                            d.push(g)
                        } else
                            d.push(f)
                    }
                c.resetItems(d)
            }
        }), _("qc.widget.ButtonGroup", wd, function Ye(a) {
            var b = this;
            Ye["super"].constructor.call(b, a);
            var c = new vd(b);
            b.layout = c,
            c.padding = 0,
            c.gap = 0,
            b._radios = new Fd
        }, {
            _selectionMode: "single",
            handleChildPropertyChange: function (a) {
                var b = this;
                if (!b._flag)
                    if (a.source instanceof Fd)
                        "value" === a.property && (b.value = a.newValue);
                    else {
                        var d = [];
                        if ("selected" === a.property) {
                            for (var e = b.children, f = 0; f < e.length; f++) {
                                var g = e[f];
                                g.selected && d.push(g.value)
                            }
                            var h = !1;
                            b.value && b.value.join && b.value.join("") === d.join("") && (h = !0),
                            h || (0 === d.length && (d = c), b.value = d)
                        }
                    }
            },
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                if ("items" === c || "selectionMode" === c) {
                    var d = b._radios,
                    e = b.children,
                    f = b.selectionMode;
                    if (d.clear(), d.off("propertyChange", b.handleChildPropertyChange, b), "items" === c) {
                        var g = a.oldValue;
                        if (g)
                            for (var h = 0; h < g.length; h++) {
                                var i = g[h];
                                i.off("propertyChange", b.handleChildPropertyChange, b)
                            }
                    }
                    if (e) {
                        for (var h = 0; h < e.length; h++) {
                            var j = e[h];
                            j.off("propertyChange", b.handleChildPropertyChange, b)
                        }
                        if ("single" === f)
                            d.on("propertyChange", b.handleChildPropertyChange, b);
                        else
                            for (var h = 0; h < e.length; h++) {
                                var k = e[h];
                                k.on("propertyChange", b.handleChildPropertyChange, b)
                            }
                    }
                    if (e && "single" === f)
                        for (var h = 0; h < e.length; h++) {
                            var j = e[h];
                            0 === h || (j.leftBorderVisible = !1),
                            d.add(j)
                        }
                }
                Id["super"].onPropertyChange.call(b, a)
            }
        }, {
            properties: ["selectionMode"]
        }, {
            radios: {
                get: function () {
                    return this._radios
                }
            },
            value: {
                get: function () {
                    return this._value
                },
                set: function (a) {
                    var b = this,
                    d = b._value,
                    e = b.selectionMode,
                    f = b.children;
                    b._value = a,
                    f && ("single" === e ? (b._flag = !0, f.forEach(function (b) {
                                b.value === a && (b.selected = !0)
                            }), b._flag = !1) : a != c && (Sa(a) || (a = [a]), b._flag = !0, f.forEach(function (b) {
                                b.selected = a.indexOf(b.value) < 0 ? !1 : !0
                            }), b._flag = !1)),
                    b.epc("value", d, a)
                }
            }
        }));
    Id.prototype.setItems = function (a) {
        var b = this._items;
        b !== a && (this._items = a, this.layout.resetItems(a), this.epc("items", b, a))
    },
    ba("dropDownIcon", {
        width: 64,
        height: 64,
        comps: [{
                type: "shape",
                points: [15, 21, 32, 38, 49, 21],
                borderWidth: 6,
                borderColor: "#ccc"
            }
        ],
        clip: !0
    });
    var Jd = (_("qc.widget.ComboBox", b, function (a) {
            var b = this,
            c = b._componentConfig = {};
            for (var d in a)
                if (0 === d.indexOf("dropDown.")) {
                    var e = a[d],
                    f = d.replace("dropDown.", "");
                    c[f] = e,
                    delete a[d]
                }
            b.initView(!1, !0),
            b._labelMap = {},
            b._iconMap = {},
            Ja(b, a);
            var g = b._view,
            h = g.style,
            i = b._background;
            h.border = b.border,
            h.background = i;
            var j = function (a) {
                if (Eb(a)) {
                    var c = a.target;
                    (g.contains(c) || c === b._input) && (K(a), b.toggle())
                }
            };
            if (b.addEventListener("touchstart", j, !1), b.addEventListener("mousedown", j, !1), b._bindHandleDocumentClick = b._handleDocumentClick.bind(b), !w.isSubClassOf(b.dropDown, "qc.widget.DropDownTemplate"))
                throw "DropDown必须继承于qc.widget.DropDownTemplate类！"
        }, {
            _handleDocumentClick: function (a) {
                var b = this;
                if (Eb(a)) {
                    var c = a.target,
                    d = b._initDropDownComponent();
                    b._input === c || b._view.contains(c) || d && d.containsTarget(c) || b.close()
                }
            },
            _initSelf: function () {
                var a,
                b,
                d,
                e = this,
                f = e._data;
                if (f) {
                    var g = e._dataMap = {},
                    h = e._labelMap = {},
                    i = e._iconMap = {},
                    j = e._idMap = {};
                    f.forEach(function (f, k) {
                        if ("string" == typeof f)
                            d = b = f;
                        else if (f instanceof Array)
                            a = f[0], b = f[1], d = f[2];
                        else {
                            var l = e._iconField,
                            m = e._labelField,
                            n = e._valueField;
                            a = f[l],
                            b = f[m],
                            d = f[n]
                        }
                        b == c && d ? b = d : d == c && b ? d = b : b == c && d == c && (b = d = a),
                        g[d] = f,
                        h[d] = b,
                        i[d] = a,
                        j[d] = k
                    })
                }
            },
            _initDropDownComponent: function () {
                var a = this,
                b = a._dropDown,
                c = a._dropDownComponent,
                d = b;
                if (!c) {
                    if (d = e.widget.Default.Class[b]) {
                        var f = Fa(a._componentConfig);
                        f.master = a,
                        c = a._dropDownComponent = new d(f)
                    }
                    if (!c instanceof Jd)
                        throw "下拉框类必须继承于qc.widget.DropDownTemplate类"
                }
                return c
            },
            getPreferredSize: function () {
                var a = this,
                b = a._preferredSize || a._calcdPreferredSize;
                if (!b) {
                    var c = 0,
                    d = 0,
                    e = this._indent,
                    f = a._labelMap;
                    for (var g in f) {
                        var h = f[g],
                        i = Ka(a.labelFont, h),
                        j = a.getIcon(g);
                        c = j ? l(i.width + e, c) : l(i.width, c),
                        d = l(i.height, d)
                    }
                    if (0 === c && 0 === d) {
                        var g = a.value,
                        h = a.getLabel(g),
                        j = a.getIcon(g),
                        i = Ka(a.labelFont, h);
                        c = i.width,
                        j && (c += e),
                        d = i.height
                    }
                    0 === c && (c = 80),
                    0 === d && (d = 25),
                    b = a._calcdPreferredSize = {
                        width: c + e,
                        height: d
                    }
                }
                return b
            },
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                b.checkChildPreferredSizeChange(c),
                "value" === c ? (b.onValueChange(a.newValue), b.iv()) : "background" === c ? b._view.style.background = a.newValue : ["data", "valueField", "labelField", "iconField"].indexOf(c) >= 0 && b._initSelf()
            },
            registerCloseEvent: function (a) {
                document.addEventListener("mousedown", a, !1),
                document.addEventListener("touchstart", a, !1)
            },
            unregisterCloseEvent: function (a) {
                document.removeEventListener("mousedown", a, !1),
                document.removeEventListener("touchstart", a, !1)
            },
            onValueChange: function () {},
            getLabel: function (a) {
                return Ra(a) && (a = a.toString()),
                this._labelMap[a] != d ? this._labelMap[a] : a
            },
            getValueByLabel: function (a) {
                var b = this,
                d = b._labelMap;
                for (var e in d) {
                    var f = d[e];
                    if (f === a)
                        return e
                }
                return c
            },
            getIcon: function (a) {
                return this._iconMap[a]
            },
            toggle: function () {
                this.isOpen() ? this.close(!0) : this.open(this._value)
            },
            isOpen: function () {
                return this._dropDwonVisible
            },
            open: function (a) {
                var b,
                c = this,
                e = Da(),
                f = c._view.getBoundingClientRect();
                if (w.popup = c, b = c._initDropDownComponent(), c._editable) {
                    var g = c._input = document.createElement("input"),
                    h = c.indent;
                    ua(g, c.inputBorderColor, c.inputPadding),
                    document.body.appendChild(g),
                    g.value = a === d ? "" : c.getLabel(a),
                    g.style.font = c.labelFont,
                    ("qc.widget.ColorChooserDropDown" === c.dropDown || w.isSubClassOf(c.dropDown, "qc.widget.ColorChooserDropDown")) && (h = 0),
                    wa(g, f.left + e.left, f.top + e.top, f.width - h, f.height)
                }
                b.onOpen(a),
                b.requestFocus(),
                c.registerCloseEvent(c._bindHandleDocumentClick),
                c._dropDwonVisible = !0
            },
            close: function () {
                var a = this;
                if (w.popup === a && (w.popup = c), a.isOpen()) {
                    a._dropDwonVisible = !1;
                    var b = a._dropDownComponent;
                    a._input && (Ba(a._input), delete a._input),
                    b.onClose(),
                    a.onClose && a.onClose(),
                    a.unregisterCloseEvent(a._bindHandleDocumentClick)
                }
                a.requestFocus()
            },
            validateImpl: function () {
                var a = this,
                b = a.clientHeight,
                d = a.clientWidth,
                e = a._indent,
                f = d - e,
                g = a.value,
                h = a.getLabel(g),
                i = a.getIcon(g),
                k = a._canvas,
                l = 0,
                m = 0;
                ta(k, d, b);
                var n = Ub(k);
                if ("qc.widget.ColorChooserDropDown" === a.dropDown || w.isSubClassOf(a.dropDown, "qc.widget.ColorChooserDropDown")) {
                    if (a._componentConfig["colorChooser.alphaEnabled"])
                        for (var o = 5, p = j(b / o), q = j(d / o), r = 0; p > r; r++)
                            for (var s = 0; q > s; s++)
                                n.fillStyle = (r + s) % 2 === 0 ? "#808080" : "#CCCCCC", n.fillRect(l + s * o, m + r * o, o, o);
                    n.fillStyle = g ? g.toString() : c,
                    n.fillRect(0, 0, d, b)
                } else
                    i && (da(n, i, c, l, 0, e, b), l += e), n.save(), n.beginPath(), n.rect(l, 0, f - l, b), n.clip(), fa(n, h, c, c, l, 0, f - l, b), n.restore(), da(n, a._dropDownIcon, c, d - e, 0, e, b);
                n.restore()
            },
            getToolTipAt: function () {
                return this.toolTip
            },
            _indent: w.indent,
            _dropDown: "qc.widget.ListDropDown",
            _dropDownIcon: "dropDownIcon",
            _iconField: "icon",
            _labelField: "label",
            _valueField: "value",
            _background: "#fff",
            _border: "1px solid #ccc",
            _inputBorderColor: "#00C9A8",
            _inputPadding: 2,
            _instant: !1,
            _editable: !1,
            _labelFont: I
        }, {
            view: !0,
            emitter: !0,
            toolTip: !0,
            properties: ["indent", "dropDown", "dropDownIcon", "iconField", "labelField", "valueField", "labelMap", "dataMap", "iconMap", "idMap", "instant", "editable", "labelFont", "border", "inputBorderColor", "inputPadding"]
        }, {
            data: {
                get: function () {
                    return this._data
                },
                set: function (a) {
                    var b = this,
                    c = b._data;
                    b._data = a,
                    b.epc("data", c, a)
                }
            },
            value: {
                set: function (a) {
                    var b = this,
                    c = b._value;
                    if ("qc.widget.ColorChooserDropDown" === b._dropDown || w.isSubClassOf(b.dropDown, "qc.widget.ColorChooserDropDown")) {
                        var d,
                        e,
                        f,
                        g,
                        h = !1;
                        if (Oa(a))
                            d = a >> 16 & 255, e = a >> 8 & 255, f = 255 & a, g = a >> 24 & 255, h = !0;
                        else if (Pa(a)) {
                            var i = nb(a);
                            d = i[0],
                            e = i[1],
                            f = i[2],
                            g = i[3],
                            h = !0
                        }
                        h && (a = {
                                r: d,
                                g: e,
                                b: f,
                                a: g,
                                toString: function () {
                                    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a / 255 + ")"
                                }
                            })
                    }
                    b._value = a,
                    b._input && (b._input.value = b.getLabel(a)),
                    b.epc("value", c, a)
                },
                get: function () {
                    return this._value
                }
            },
            dropDownComponent: {
                get: function () {
                    return this._dropDownComponent
                }
            },
            background: {
                get: function () {
                    return this._background
                },
                set: function (a) {
                    var b = this._background;
                    this._background = a,
                    this.epc("background", b, a)
                }
            }
        }), _("qc.widget.DropDownTemplate", b, function (a) {
            Ja(this, a)
        }, {
            onOpen: function () {},
            onClose: function () {},
            containsTarget: function () {},
            requestFocus: function () {
                this._view.requestFocus()
            },
            endEditing: function () {}
        }, {
            properties: ["master", "width", "height", "value", "background"]
        }, {
            view: {
                get: function () {
                    return this._view
                }
            }
        })),
    Kd = _("qc.widget.ColorChooser", b, function (a) {
        var b = this;
        b.initView(1, 1);
        var c = b._contentDiv;
        b._rects = {},
        b._position = {
            x: 0,
            y: 0
        },
        b._baseValue = {
            r: 255,
            g: 0,
            b: 0
        },
        Ja(b, a);
        var d = function (a, c) {
            if ("hex" !== c) {
                var d = u(this.value);
                d = d ? d : 0,
                d = d > 255 ? 255 : 0 > d ? 0 : d,
                b[c] = d,
                this.value = d
            } else {
                var e = this.value;
                0 === e.indexOf("#") && (e = e.substr(1, 6)),
                b.value = u(e || 0, 16) + (b._a << 24 >>> 0)
            }
        },
        f = {
            background: b.background
        },
        g = function (a) {
            "hex" === a ? (f.maskRe = /^[0-9a-fA-F]$/, f.maxLength = 7) : (f.maskRe = /^[\d]$/, f.maxLength = 3);
            var c = b["_" + a + "Text"] = new Gd(f);
            c.addEventListener("keyup", function (b) {
                d.call(c, b, a)
            })
        };
        ["hex", "r", "g", "b", "a"].forEach(g),
        c.appendChild(b._hexText.view);
        var h = b._addPresetButton = new Cd({
            borderColor: "#FFF",
            borderWidth: 0,
            background: "rgba(0, 0, 0, 0)",
            gradientColor: "rgba(0, 0, 0, 0)",
            hoverBackground: "rgba(0, 0, 0, 0)",
            hoverGradientColor: "rgba(0, 0, 0, 0)",
            activeBackground: "rgba(0, 0, 0, 0)",
            activeGradientColor: "rgba(0, 0, 0, 0)"
        });
        h.on("click", function (a) {
            if (Eb(a)) {
                for (var c = 0; c < b.presets.length; c++)
                    if (b.presets[c].r === b.r && b.presets[c].g === b.g && b.presets[c].b === b.b && b.presets[c].a === b.a)
                        return;
                b.presets.push({
                    r: b.r,
                    g: b.g,
                    b: b.b,
                    a: b.a
                }),
                b.iv()
            }
        });
        var i = b._contextMenu = new e.widget.ContextMenu;
        i.items = [{
                label: "Replace"
            }, {
                label: "Delete"
            }, {
                label: "Move To First"
            }
        ],
        i.on("action", function (a) {
            var c = a.item,
            d = b._actionIndex,
            e = b.presets;
            switch (c.label) {
            case "Replace":
                e[d] = {
                    r: b.r,
                    g: b.g,
                    b: b.b,
                    a: b.a
                };
                break;
            case "Delete":
                b._rects.Presets.presets = [],
                e.splice(d, 1);
                break;
            case "Move To First":
                var f = e.splice(d, 1);
                e.unshift(f[0])
            }
            delete b._actionIndex,
            b.iv()
        }),
        b._interactor = new Qd(b)
    }, {
        packageColor: function (a) {
            return a || (a = {
                    r: this.r,
                    g: this.g,
                    b: this.b,
                    a: this.a
                }),
            a.toString = function () {
                var a = h(this.a / 255 * 1e5) / 1e5;
                return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + a + ")"
            },
            a
        },
        getRgbString: function (a) {
            return a ? "rgb(" + a.r + ", " + a.g + ", " + a.b + ")" : "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
        },
        getHex: function (a, b) {
            a || (a = {}, a.r = this.r, a.g = this.g, a.b = this.b),
            null == b && (b = !0);
            var c = a.r,
            d = a.g,
            e = a.b;
            return c = c.toString(16),
            1 == c.length && (c = "0" + c),
            d = d.toString(16),
            1 == d.length && (d = "0" + d),
            e = e.toString(16),
            1 == e.length && (e = "0" + e),
            ((b ? "#" : "") + c + d + e).toUpperCase()
        },
        getHsv: function (a) {
            a || (a = {
                    r: this.r,
                    g: this.g,
                    b: this.b
                });
            var b,
            c,
            d = a.r / 255,
            e = a.g / 255,
            f = a.b / 255,
            g = l(l(d, e), f),
            i = m(m(d, e), f),
            j = g;
            if (i == g)
                b = 0, c = 0;
            else {
                var k = g - i;
                c = k / g,
                b = d == g ? (e - f) / k : e == g ? 2 + (f - d) / k : 4 + (d - e) / k,
                b /= 6,
                0 > b ? b += 1 : b > 1 && (b -= 1)
            }
            return {
                h: h(360 * b),
                s: h(100 * c),
                v: h(100 * j)
            }
        },
        hsvToRgb: function (a, b, c) {
            1 === arguments.length && (b = a.s, c = a.v, a = a.h),
            a /= 360,
            b /= 100,
            c /= 100;
            var d,
            e,
            f;
            if (0 === c)
                d = 0, e = 0, f = 0;
            else {
                var g = i(6 * a),
                j = 6 * a - g,
                k = c * (1 - b),
                l = c * (1 - b * j),
                m = c * (1 - b * (1 - j));
                switch (g) {
                case 1:
                    d = l,
                    e = c,
                    f = k;
                    break;
                case 2:
                    d = k,
                    e = c,
                    f = m;
                    break;
                case 3:
                    d = k,
                    e = l,
                    f = c;
                    break;
                case 4:
                    d = m,
                    e = k,
                    f = c;
                    break;
                case 5:
                    d = c,
                    e = k,
                    f = l;
                    break;
                case 6:
                case 0:
                    d = c,
                    e = m,
                    f = k
                }
            }
            return {
                r: h(255 * d),
                g: h(255 * e),
                b: h(255 * f)
            }
        },
        appendRect: function (a, b, c, d, e, f, g) {
            var h = this,
            i = h._rects[e];
            i || (i = h._rects[e] = {});
            var j = i[f];
            if (!j || "Presets" === e)
                if ("presets" === f) {
                    if (j || (j = i[f] = []), j[g])
                        return;
                    j[g] = {
                        x: a,
                        y: b,
                        width: c,
                        height: d
                    }
                } else
                    g ? j && j.x === a && j.y === b && j.width === c && j.height === d || (i[f] = {
                            x: a,
                            y: b,
                            width: c,
                            height: d
                        }, g.parentNode || h._contentDiv.appendChild(g)) : i[f] = {
                        x: a,
                        y: b,
                        width: c,
                        height: d
                    }
        },
        isExpand: function (a) {
            return this["is" + a + "Expanded"]
        },
        getLabelIcon: function () {
            return "node_icon"
        },
        drawResult: function (a, b, c, d, e) {
            var f = this,
            g = 65;
            d -= g + f.padding,
            a.fillStyle = f.getRgbString(),
            a.fillRect(b, c, d, e - 2);
            var h = f.a,
            i = h / 255 * d;
            a.fillStyle = "#FFF",
            a.fillRect(b, c + e - 2, i, 2),
            a.fillStyle = "#000",
            a.fillRect(b + i, c + e - 2, d - i, 2),
            a.strokeStyle = "#696969",
            a.strokeRect(b, c, d, e),
            b += d + f.padding;
            var j = f.hexText,
            k = f.getHex(),
            l = (j.value || k).toUpperCase();
            u(k.substr(1) || 0, 16) !== u(l.substr(1) || 0, 16) && (l = k),
            j.value = l,
            wa(j, b, c, g, e, f._forceLayout)
        },
        drawLabel: function (a, b, c, d, e, f) {
            var g = this,
            h = g.indent,
            i = g.isExpand(f),
            j = i ? "expand" : "collapse";
            g.appendRect(b, c, d, e, f, "label"),
            da(a, j, null, b - 4, c, h, e),
            fa(a, f, g.font, g.color, b + h, c, null, e, "left", "middle")
        },
        updateBaseValue: function () {
            var a = this,
            b = a.colorsHeight - 2,
            c = h((b - a._thumbPosition) / b * 360);
            a._baseValue = a.hsvToRgb(c, 100, 100)
        },
        updateAperturePosition: function (a) {
            var b = this,
            c = b._aperturePosition,
            d = b.getHsv(),
            e = b._state;
            if (c || (c = b._aperturePosition = {}), a) {
                var f = b._rects[e[0]][e[1]],
                g = b.lp(a),
                h = (ya(a), Da()),
                i = g.x - f.x - h.left,
                j = g.y - f.y - h.top;
                c.x = i >= f.width ? f.width : 0 > i ? 0 : i,
                c.y = j >= f.height ? f.height : 0 > j ? 0 : j
            } else if (!e || "saturationValueRect" !== e[1]) {
                var k = b.colorsHeight - 2;
                c.x = d.s * k / 100,
                c.y = (100 - d.v) * k / 100
            }
        },
        updateThumbPosition: function (a) {
            var b = this,
            c = b.getHsv(),
            d = b._state;
            if (a) {
                var e = b._rects[d[0]][d[1]],
                f = b.lp(a),
                g = Da(),
                h = f.y - e.y - g.top;
                b._thumbPosition = h >= e.height ? e.height : 0 > h ? 0 : h
            } else if (!d || "hueRect" !== d[1] && "saturationValueRect" !== d[1]) {
                var i = b.colorsHeight - 2;
                b._thumbPosition = i - c.h / 360 * i
            }
        },
        drawColors: function (a, b, c, d, e) {
            var f = this,
            g = f.labelHeight,
            h = f.labelMargin,
            i = f.isExpand("Colors");
            if (f.drawLabel(a, b, c, d, g, "Colors"), i) {
                c += g + h,
                a.beginPath(),
                a.rect(b, c, e, e),
                a.fillStyle = f.getRgbString(f._baseValue),
                a.fill();
                var j = a.createLinearGradient(b, c, b + e, c);
                j.addColorStop(0, "#FFF"),
                j.addColorStop(1, "rgba(0, 0, 0, 0)"),
                a.fillStyle = j,
                a.fill();
                var k = a.createLinearGradient(b, c, b, c + e);
                k.addColorStop(0, "rgba(0, 0, 0, 0)"),
                k.addColorStop(1, "#000"),
                a.fillStyle = k,
                a.fill(),
                a.strokeStyle = "#696969",
                a.strokeRect(b, c, e, e),
                f.appendRect(b, c, e - 2, e - 2, "Colors", "saturationValueRect");
                var l = f._aperturePosition,
                m = b + l.x + 1,
                n = c + l.y + 1;
                a.beginPath(),
                a.arc(m, n, 3, 0, 2 * q),
                a.strokeStyle = "#fff",
                a.lineWidth = 2,
                a.stroke(),
                a.arc(m, n, 3, 0, 2 * q),
                a.strokeStyle = "#000",
                a.lineWidth = 1,
                a.stroke(),
                b += 8 + e,
                a.beginPath();
                var o = a.createLinearGradient(b, c, b, c + e),
                p = ["255, 0, 0", "255, 0, 255", "0, 0 ,255", "0, 255, 255", "0, 255, 0", "255, 255, 0"],
                r = p.length;
                p.forEach(function (a, b) {
                    o.addColorStop(b / r, "rgb(" + a + ")")
                }),
                o.addColorStop(1, "rgb(" + p[0] + ")"),
                a.fillStyle = o,
                a.fillRect(b, c, 20, e),
                a.strokeStyle = "#696969",
                a.strokeRect(b, c, 20, e),
                f.appendRect(b, c, 20, e - 2, "Colors", "hueRect");
                var s = {
                    width: 28,
                    height: 8,
                    comps: [{
                            type: "shape",
                            borderColor: f.thumbBorderColor,
                            borderWidth: 1,
                            join: "miter",
                            points: [0, 0, 0, 8, 5, 4, 28, 0, 28, 8, 23, 4],
                            segments: [1, 2, 2, 5, 1, 2, 2, 5]
                        }
                    ]
                };
                da(a, s, null, b - 5, c - 4 + f._thumbPosition + 1, 30, 8)
            }
        },
        drawSlider: function (a, b, c, d, e, f) {
            var g = this;
            if ("a" === f && !g.alphaEnabled)
                return 0;
            var i = g.indent;
            a.beginPath(),
            fa(a, f.toUpperCase(), g.font, g.color, b - 4, c, i, e, "center", "middle"),
            b += i;
            var j = {
                r: g.r,
                g: g.g,
                b: g.b,
                a: g.a,
                type: f,
                toRgb: function () {
                    return "a" !== this.type ? "rgb(" + this.r + ", " + this.g + ", " + this.b + ")" : 0 === this.a ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
                }
            };
            j[f] = 0;
            var k = j.toRgb();
            j[f] = 255;
            var l = j.toRgb(),
            m = g.sliderPadding,
            n = g.sliderRectWidth,
            o = g.sliderRectHeight;
            a.beginPath();
            var p = a.createLinearGradient(b, c, b + n, c);
            p.addColorStop(0, k),
            p.addColorStop(1, l),
            a.fillStyle = p,
            a.rect(b, c + (e - o) / 2, n, o),
            a.fill(),
            a.strokeStyle = "#696969",
            a.stroke(),
            g.appendRect(b, c + (e - o) / 2, n, o, "Sliders", f);
            var q = o + 8,
            r = {
                width: 8,
                height: q,
                comps: [{
                        type: "shape",
                        borderWidth: 1,
                        borderColor: g.thumbBorderColor,
                        join: "miter",
                        points: [0, 0, 8, 0, 4, 5, 0, q, 8, q, 4, q - 5],
                        segments: [1, 2, 2, 5, 1, 2, 2, 5]
                    }
                ]
            },
            s = g[f],
            t = h(s / 255 * (n - 2));
            da(a, r, null, b + t - 4 + 1, c - 5 + (e - o) / 2 + 1, 8, q),
            b += n + m;
            var u = g.sliderTextWidth,
            v = g.sliderTextHeight,
            w = g[f + "Text"];
            return w.value = g[f],
            g.appendRect(0, 0, 0, 0, "Sliders", f + "Text", w.view),
            wa(w, b, c + (e - v) / 2, u, v, g._forceLayout),
            1
        },
        drawSliders: function (a, b, c, d) {
            var e = this,
            f = e.labelHeight,
            g = e.labelMargin,
            h = e.isExpand("Sliders");
            if (e.drawLabel(a, b, c, d, f, "Sliders"), !h)
                return void["r", "g", "b", "a"].forEach(function (a) {
                    Ba(e[a + "Text"].view)
                });
            c += f + g;
            var i,
            j = e.sliderHeight,
            k = 0;
            return i = e.alphaEnabled ? ["r", "g", "b", "a"] : ["r", "g", "b"],
            i.forEach(function (f, g) {
                k += e.drawSlider(a, b, c + g * j, d, j, f)
            }),
            j * k
        },
        drawPreset: function (a, b, c, d, e) {
            a.beginPath();
            var f = this,
            g = f.getRgbString(e);
            if (255 === e.a)
                a.fillStyle = g;
            else {
                for (var h = d / 4, i = 0; 4 > i; i++)
                    for (var j = i; 4 > j; j++)
                        a.fillStyle = (i + j) % 2 === 0 ? "#808080" : "#CCCCCC", a.fillRect(b + j * h, c + i * h, h, h);
                var k = f.packageColor(e).toString(),
                l = a.createLinearGradient(b, c + d, b + d, c);
                l.addColorStop(0, g),
                l.addColorStop(.5, g),
                l.addColorStop(.5, k),
                l.addColorStop(1, k),
                a.fillStyle = l
            }
            a.fillRect(b, c, d, d),
            a.strokeStyle = "#000000",
            a.strokeRect(b, c, d, d)
        },
        drawPresets: function (a, b, c, d) {
            var e = this,
            f = e.labelHeight,
            g = e.labelMargin,
            h = e.isExpand("Presets"),
            j = e.addPresetButton;
            if (e.drawLabel(a, b, c, d, f, "Presets"), !h)
                return void Ba(j.view);
            c += f + g;
            var k = e.presets,
            l = e.presetHeight,
            m = b,
            n = c,
            o = i(d / l);
            k.forEach(function (d, f) {
                m = b + l * (f % o),
                n = c + l * i(f / o),
                e.drawPreset(a, m, n, l, d),
                e.appendRect(m, n, l, l, "Presets", "presets", f)
            }),
            m = b + l * (k.length % o),
            n = c + l * i(k.length / o),
            a.strokeStyle = "#4D4D4D";
            var p = a.createLinearGradient(m, n, m, n + l);
            p.addColorStop(0, "#FFF"),
            p.addColorStop(1, "#C2C0C1"),
            a.fillStyle = p,
            a.fillRect(m, n, l, l),
            a.strokeRect(m, n, l, l),
            a.rect(m + 3, n + 3, l - 6, l - 6),
            a.clip(),
            e.drawPreset(a, m, n, l, {
                r: e.r,
                g: e.g,
                b: e.b,
                a: e.a
            }),
            e.appendRect(m, n, l, l, "Presets", "button", j.view),
            wa(j, m, n, l, l, e._forceLayout),
            a.lineWidth = 2,
            a.strokeRect(m + 3, n + 3, l - 6, l - 6)
        },
        validateImpl: function () {
            var a = this,
            b = a.getPreferredSize(),
            c = b.width,
            d = b.height,
            e = a.view,
            f = a._canvas,
            g = 0,
            h = 0;
            a.updateThumbPosition(),
            a.updateBaseValue(),
            a.updateAperturePosition(),
            e.style.width = c + "px",
            e.style.height = d + "px",
            ta(f, c, d);
            var i = Ub(f, 0, 0, 1, {
                x: 0,
                y: 0,
                width: c,
                height: d
            });
            i.fillStyle = a.background,
            i.fillRect(g, h, c, d);
            var j = a.padding;
            g += j,
            h += j,
            c -= 2 * j;
            var k = a.resultHeight;
            a.drawResult(i, g, h, c, k),
            h += k + j;
            var l = a.colorsHeight,
            m = a.labelHeight,
            n = a.labelMargin;
            a.drawColors(i, g, h, c, l),
            h += m + n + j,
            a.isExpand("Colors") && (h += l);
            var o = a.drawSliders(i, g, h, c);
            h += m + n + j,
            a.isExpand("Sliders") && (h += o),
            a.drawPresets(i, g, h, c),
            i.restore(),
            a._value = a.packageColor(),
            a.onValueChange && a.onValueChange(a._value)
        },
        getPreferredSize: function () {
            var a = this,
            b = a._preferredSize || a._calcdPreferredSize,
            c = 195,
            d = 0,
            e = a.labelMargin,
            f = a.padding;
            if (d += 5 * f + a.resultHeight + 3 * a.labelHeight, a.isExpand("Colors") && (d += a.colorsHeight, d += e), a.isExpand("Sliders") && (d += 4 * a.sliderHeight, a.alphaEnabled || (d -= a.sliderHeight), d += e), a.isExpand("Presets")) {
                var g = a.presetHeight,
                h = i((c - 2 * f) / g),
                k = j((a.presets.length + 1) / h);
                d += g * k,
                d += e
            }
            return b = a._calcdPreferredSize = {
                width: c,
                height: d
            }
        },
        onPropertyChange: function (a) {
            var b = ["r", "g", "b", "a", "value"];
            b.indexOf(a.property) >= 0 && this.iv();
            var c = ["isColorsExpanded", "isSlidersExpanded", "isPresetsExpanded"];
            c.indexOf(a.property) >= 0 && (this._rects = {}, this.emit("viewChange", {
                    kind: "size"
                }))
        },
        onValueChange: function () {},
        getInt: function (a) {
            if (a) {
                var b = nb(a);
                return (b[3] << 24 >>> 0) + (b[0] << 16) + (b[1] << 8) + b[2]
            }
            return (this._a << 24 >>> 0) + (this._r << 16) + (this._g << 8) + this._b
        },
        intToRgba: function (a) {
            if (Oa(a)) {
                var b = a >> 24 & 255,
                c = a >> 16 & 255,
                d = a >> 8 & 255,
                e = 255 & a;
                return {
                    r: c,
                    g: d,
                    b: e,
                    a: b
                }
            }
            throw "参数必须为int类型！"
        },
        _background: "#C1C1C1",
        _shadow: "0px 0px 10px " + y.shadowColor,
        _r: 255,
        _g: 0,
        _b: 0,
        _a: 255,
        _color: "#000",
        _font: "12px arial, sans-serif",
        _padding: 10,
        _indent: 15,
        _labelHeight: 15,
        _labelMargin: 2,
        _resultHeight: 20,
        _colorsHeight: 148,
        _sliderHeight: 20,
        _sliderPadding: 8,
        _sliderTextWidth: 30,
        _sliderTextHeight: 18,
        _sliderRectWidth: 123,
        _sliderRectHeight: 14,
        _presets: [],
        _presetHeight: 15,
        _thumbPosition: 0,
        _isColorsExpanded: !0,
        _isSlidersExpanded: !0,
        _isPresetsExpanded: !0,
        _thumbBorderColor: "black",
        _textBorderColor: "#696969",
        _alphaEnabled: !0
    }, {
        view: !0,
        emitter: !0,
        properties: ["hexText", "rText", "gText", "bText", "aText", "textBorderColor", "addPresetButton", "contextMenu", "background", "shadow", "padding", "indent", "labelHeight", "labelMargin", "r", "g", "b", "color", "font", "resultHeight", "colorsHeight", "sliderHeight", "sliderPadding", "sliderTextWidth", "sliderTextHeight", "sliderRectWidth", "sliderRectHeight", "presets", "presetHeight", "isColorsExpanded", "isSlidersExpanded", "isPresetsExpanded", "position", "thumbBorderColor", "alphaEnabled"]
    }, {
        value: {
            get: function () {
                return this.packageColor()
            },
            set: function (a) {
                var b = this,
                c = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0
                };
                if (Oa(a))
                    c = b.intToRgba(a);
                else if (Pa(a)) {
                    var d = nb(a);
                    c.r = d[0],
                    c.g = d[1],
                    c.b = d[2],
                    c.a = d[3]
                } else
                    Ra(a) && (c.r = a.r, c.g = a.g, c.b = a.b, c.a = a.a);
                var e = b._value;
                b._r = c.r,
                b._g = c.g,
                b._b = c.b,
                b._a = c.a,
                b._value = b.packageColor(),
                b.epc("value", e, b._value)
            }
        },
        a: {
            get: function () {
                return this.alphaEnabled ? this._a : 255
            },
            set: function (a) {
                this._a = a
            }
        }
    }),
    Ld = (_("qc.widget.Slider", b, function (a) {
            this.initView(!0, !0);
            var b = this,
            c = b._view;
            c.style.display = "inline-block",
            b._thumb = {
                width: 12,
                height: 12,
                comps: [{
                        type: "circle",
                        rect: [0, 0, 12, 12],
                        borderWidth: 1,
                        borderColor: {
                            func: function () {
                                return b._thumbBorderColor
                            }
                        },
                        gradient: {
                            func: function () {
                                return b._thumbGradient
                            }
                        },
                        gradientColor: {
                            func: function () {
                                return b._thumbGradientColor
                            }
                        },
                        background: {
                            func: function () {
                                return b._thumbBackground
                            }
                        }
                    }
                ]
            },
            Ja(b, a),
            new Nd(b),
            b.enableToolTip(),
            b.iv()
        }, {
            _min: 0,
            _max: 100,
            _value: 0,
            _step: 1,
            _thickness: 3,
            _padding: 4,
            _background: "#868686",
            _forecolor: "#78EEF0",
            _thumbBackground: "#868686",
            _thumbGradient: "linear.northeast",
            _thumbBorderColor: "black",
            _thumbGradientColor: "#D9D9D9",
            _toolTip: "",
            _orientation: "horizontal",
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                return "min" === c || "max" === c || "step" === c ? void(b.value = b._value) : void b.iv()
            },
            adjustValue: function (a) {
                null == a && (a = 0);
                var b = this,
                c = b._min,
                d = b._max,
                e = b._step;
                return c > a && (a = c),
                a > d && (a = d),
                e > 0 && (a = Math.floor((a - c) / e) * e + c),
                a
            },
            getToolTip: function () {
                return this._toolTip || mc(this._value)
            },
            onValueChange: function () {},
            onEndValueChange: function () {},
            drawBackground: function (a, b, c, d, e) {
                sb(a, b, c, d, e, this._background)
            },
            drawForecolor: function (a, b, c, d, e) {
                var f = this._forecolor;
                f && sb(a, b, c, d, e, f)
            },
            drawThumb: function (a, b, c, d, e) {
                da(a, this._thumb, null, b, c, d, e)
            },
            getThumbWidth: function () {
                var a = ac(this._thumb);
                return a ? a : 0
            },
            getThumbHeight: function () {
                var a = bc(this._thumb);
                return a ? a : 0
            },
            validateImpl: function () {
                var a = this,
                b = a._canvas,
                c = a._min,
                d = a._max,
                e = a._value,
                f = a._padding,
                g = a._thickness,
                i = a.width,
                j = a.height,
                k = a.getThumbWidth(),
                l = (j - g) / 2,
                m = (i - g) / 2,
                n = i,
                o = j,
                p = 0,
                q = 0;
                e = c > e ? c : e,
                e = e > d ? d : e,
                "vertical" === a.orientation && (n = j, o = i),
                ta(b, i, j);
                var r = Ub(b, 0, 0, 1, {
                    x: 0,
                    y: 0,
                    width: i,
                    height: j
                });
                "vertical" === a.orientation ? (p = (e - c) / (d - c) * (j - 2 * f - k), m = h(m), l = h(f + k / 2), o = j - 2 * f - k, a.drawBackground(r, m, l, g, o), a.drawForecolor(r, m, l, g, p), a.drawThumb(r, 0, f + p, i, k)) : (q = (e - c) / (d - c) * (i - 2 * f - k), m = h(f + k / 2), l = h(l), n = i - 2 * f - k, a.drawBackground(r, m, l, n, g), a.drawForecolor(r, m, l, q, g), a.drawThumb(r, f + q, 0, k, j)),
                r.restore()
            },
            getToolTipAt: function (a) {
                var b = this,
                c = b.padding + b.getThumbWidth() / 2,
                d = b.min,
                e = b.max,
                f = 0;
                return f = "vertical" === b.orientation ? d + (b.lp(a).y - c) / (b.height - 2 * c) * (b.max - d) : d + (b.lp(a).x - c) / (b.width - 2 * c) * (b.max - d),
                d > f ? d : f > e ? e : f
            },
            getPreferredSize: function () {
                var a = this,
                b = a._preferredSize || a._calcdPreferredSize;
                if (!b) {
                    var c = a.getThumbWidth(),
                    d = a.getThumbHeight(),
                    e = a._thickness,
                    f = a._padding,
                    g = a._max,
                    h = a._min,
                    i = 0,
                    j = 0;
                    i = g - h,
                    i > 150 && (i = 150),
                    80 > i && (i = 80),
                    i += 2 * f + c,
                    j = 2 * f + l(d, e),
                    b = a._calcdPreferredSize = {
                        width: i,
                        height: j
                    }
                }
                return b
            }
        }, {
            view: !0,
            emitter: !0,
            toolTip: !0,
            properties: ["min", "max", "step", "thumb", "thumbBackground", "thumbGradientColor", "thumbGradient", "thumbBorderColor", "thickness", "padding", "background", "forecolor", "orientation"]
        }, {
            value: {
                get: function () {
                    return this._value
                },
                set: function (a) {
                    var b = this,
                    c = b._value;
                    a = b.adjustValue(a),
                    c !== a && (b._value = a, b.epc("value", c, a), b.onValueChange(a))
                }
            }
        }), e.widget.Default.define("qc.widget.ColorChooserDropDown", Jd, function (a) {
            var b = this,
            c = new Kd,
            d = b._view = b.createDialog();
            d.title = "Color Picker",
            d.resizable = !1,
            d.content = c;
            for (var e in a)
                if (0 === e.indexOf("colorChooser.")) {
                    var f = a[e],
                    g = e.replace("colorChooser.", "");
                    c[g] = f,
                    delete a[e]
                }
            Ld["super"].constructor.call(b, a);
            var h = b.master;
            c.onValueChange = function (a) {
                h.instant && (h.value = a)
            };
            var i = c.preferredSize;
            c.on("viewChange", function (a) {
                if ("size" === a.kind) {
                    var b = c.preferredSize;
                    d.width -= i.width - b.width,
                    d.height -= i.height - b.height,
                    i = b
                }
            }),
            d.on("close", function () {
                h.close()
            })
        }, {
            createDialog: function () {
                var a = new yd;
                return a.contentPadding = 2,
                a
            },
            onOpen: function (a) {
                var b = this,
                d = b.view,
                e = d.content;
                a != c && (e.value = a),
                d.show()
            },
            onClose: function () {
                var a = this,
                b = a.master,
                c = a.view,
                d = c.content;
                b.value = c.content.value,
                d.contextMenu.visible && d.contextMenu.hide(),
                c.hide()
            },
            containsTarget: function (a) {
                var b = this,
                c = b.view;
                return c.view.contains(a) || c.content.contextMenu.view.contains(a)
            },
            endEditing: function (a) {
                var b = this,
                c = b.master;
                c.value = b.value = a
            },
            getRgbaData: function () {
                var a = this.view;
                return [a.r, a.g, a.b, a.a]
            }
        }, c, {
            value: {
                get: function () {
                    return this._view.value
                },
                set: function (a) {
                    this._view.value = a
                }
            }
        })),
    Md = _("qc.widget.ListDropDown", Jd, function (a) {
        var b,
        c = this,
        d = c._dataModel = new e.widget.DataModel,
        f = c._view = new e.widget.List(d);
        for (var g in a)
            if (g.indexOf("list.") >= 0) {
                var h = a[g],
                i = g.replace("list.", "");
                "labelFont" === i && (b = h),
                f[i] = h,
                delete a[g]
            }
        Md["super"].constructor.call(c, a);
        var j = c.master;
        b || (f.labelFont = j.labelFont),
        f.onDataClick = function (a) {
            j.value = a.value,
            j.close()
        },
        f.addEventListener("mousemove", function (a) {
            var b = f.getDataAt(a);
            f.selectionModel.selection = b,
            j.instant && (j.value = b.value)
        }),
        f.addEventListener("keydown", function (a) {
            if (Ob(a)) {
                var b = f.selectionModel.lastData;
                j.value = b.value,
                j.close()
            }
        }),
        f.view.style.background = c.background || j.background,
        f.view.style.boxShadow = "0px 0px 10px " + y.shadowColor
    }, {
        loadItems: function (a) {
            var b = this,
            c = b._dataModel;
            c.clear(),
            a.forEach(function (a, d) {
                var e = b.createData(a, d);
                c.add(e)
            })
        },
        createData: function (a, b) {
            var d,
            e,
            f,
            g = this,
            h = g.master,
            i = new Pc;
            if ("string" == typeof a)
                e = d = a;
            else if (a instanceof Array)
                f = a[0], d = a[1], e = a[2];
            else {
                var j = h.iconField,
                k = h.labelField,
                l = h.valueField;
                for (var m in a)
                    m !== j ? m !== k ? m !== l ? i.a(m, a[m]) : e = a[m] : d = a[m] : f = a[m]
            }
            return d == c && e ? d = e : e == c && d ? e = d : d == c && e == c && (d = e = f),
            i.icon = f,
            i.name = d,
            i.value = e,
            i.id = b,
            i
        },
        onOpen: function (a) {
            var b = this,
            c = b.master,
            d = c.view.getBoundingClientRect(),
            e = Da(),
            f = b.view,
            g = f.rowHeight,
            h = d.left,
            i = d.top + d.height,
            j = b.width || d.width;
            b.loadItems(c.data);
            var k = f.preferredSize;
            j = l(k.width, j);
            var m = g * b._dataModel.length;
            j + h > e.width && (h = e.width - j),
            m + i > e.height && (m = e.height - i),
            f.addToDOM({
                x: h,
                y: i,
                width: j,
                height: m
            }),
            b.value = a,
            b.requestFocus()
        },
        onClose: function () {
            Ba(this.view.view)
        },
        containsTarget: function (a) {
            var b = this,
            c = b.view;
            return c.view.contains(a)
        },
        endEditing: function (a) {
            var b = this,
            d = b.master,
            e = d.getValueByLabel(a);
            d.value = e != c ? e : a,
            d.close()
        }
    }, c, {
        value: {
            get: function () {
                return this._value
            },
            set: function (a) {
                this._value = a,
                this.view.selectionModel.selection = this._dataModel.getDataById(this.master._idMap[a])
            }
        }
    }),
    Nd = _(c, b, function (a) {
        this.slider = a,
        this.addListeners()
    }, {
        handle_mousedown: function (a) {
            Eb(a) && this.handle_touchstart(a)
        },
        handle_keydown: function (a) {
            var b = this.slider,
            c = b.value,
            d = b.step || .001;
            Jb(a) || Mb(a) ? b.value = c - d : (Lb(a) || Kb(a)) && (b.value = c + d)
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        setValue: function (a) {
            var b = this.slider,
            c = b.padding + b.getThumbWidth() / 2,
            d = b.min,
            e = b.max,
            f = 0;
            f = "vertical" === b.orientation ? d + (b.lp(a).y - c) / (b.height - 2 * c) * (b.max - d) : d + (b.lp(a).x - c) / (b.width - 2 * c) * (b.max - d),
            d > f ? f = d : f > e && (f = e),
            b.value = f
        },
        handle_touchstart: function (a) {
            var b = this;
            b.slider.requestFocus(),
            K(a),
            b.setValue(a),
            Bb(b, a),
            b.slider._handleToolTip && w.showToolTip(a, b.slider.getToolTip(a))
        },
        handleWindowTouchMove: function (a) {
            this.setValue(a),
            this.slider._handleToolTip && w.showToolTip(a, this.slider.getToolTip(a))
        },
        handleWindowTouchEnd: function (a) {
            this.setValue(a),
            this.slider.onEndValueChange(),
            w.hideToolTip()
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this.slider._view
            }
        }
    }),
    Od = _(c, b, function (a) {
        var b = this;
        b._textField = a,
        b.addListeners(),
        a._input.addEventListener("focus", function () {
            a.focused = !0,
            a.iv()
        }),
        a._input.addEventListener("blur", function () {
            a.focused = !1,
            a.iv()
        })
    }, {
        clear: function () {},
        handle_keypress: function (a) {
            var b = this,
            c = b._textField,
            d = c._input,
            e = c.maskRe;
            if (e && a.target === d) {
                var f = String.fromCharCode(a.charCode);
                Ob(a) || Ib(a) || e.test(f) || a.preventDefault()
            }
        },
        handle_keydown: function (a) {
            var b = this,
            c = b._textField;
            c.readonly && a.preventDefault()
        },
        handle_input: function () {
            var a = this,
            b = a._textField,
            c = b._input;
            b.value = c.value
        },
        handle_mousewheel: function (a) {
            this.handle_DOMMouseScroll(a)
        },
        handle_DOMMouseScroll: function (a) {
            a.preventDefault()
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._textField
            }
        }
    }),
    Pd = _(c, Od, function (a) {
        Pd["super"].constructor.call(this, a)
    }, {
        handle_mousewheel: function (a) {
            this.handleScroll(a, a.wheelDelta)
        },
        handle_DOMMouseScroll: function (a) {
            this.handleScroll(a, -a.detail)
        },
        handleScroll: function (a, b) {
            var c,
            d,
            e,
            f = this,
            g = f.view.getInput();
            b > 0 ? (c = g.scrollTop, 0 >= c ? a.preventDefault() : a.stopPropagation()) : 0 > b && (c = g.scrollTop, d = g.scrollHeight, e = g.offsetHeight, c >= d - e ? a.preventDefault() : a.stopPropagation())
        }
    }),
    Qd = _(c, b, function (a) {
        this._colorChooser = a,
        this.addListeners()
    }, {
        clear: function () {
            delete this._colorChooser._state
        },
        handle_contextmenu: function (a) {
            K(a);
            var b = this._colorChooser;
            if (b.isExpand("Presets")) {
                var c = b._rects.Presets.presets || [],
                d = c.length;
                if (0 !== d) {
                    for (var e = b.lp(a), f = -1, g = 0; d > g; g++)
                        if (w.containsPoint(c[g], e)) {
                            f = g;
                            break
                        }
                    -1 !== f && (b._actionIndex = f, b.contextMenu.show(a))
                }
            }
        },
        handle_touchstart: function (a) {
            this.handle_mousedown(a)
        },
        handle_mousedown: function (a) {
            if (K(a), Eb(a)) {
                var b = this._colorChooser,
                c = b._rects,
                d = b.lp(a);
                for (var e in c) {
                    var f = c[e];
                    for (var g in f) {
                        var h = f[g];
                        if (Sa(h)) {
                            for (var i = 0; i < h.length; i++)
                                if (w.containsPoint(h[i], d)) {
                                    b._state = [e, g, i];
                                    break
                                }
                            if (b._state)
                                break
                        } else if (w.containsPoint(h, d)) {
                            b._state = [e, g];
                            break
                        }
                    }
                    if (b._state)
                        break
                }
                b._state && "label" !== b._state[1] && "button" !== b._state[1] && this.handleWindowMouseMove(a),
                b.contextMenu.visible && b.contextMenu.hide()
            }
        },
        handle_touchmove: function (a) {
            this.handle_mousemove(a)
        },
        handle_mousemove: function (a) {
            var b = this._colorChooser;
            b._state && "button" !== b._state[1] && (Bb(this, a), K(a))
        },
        handle_touchend: function (a) {
            this.handle_mouseup(a)
        },
        handle_mouseup: function (a) {
            K(a);
            var b = this,
            c = b._colorChooser,
            d = c._state;
            if (d) {
                if ("presets" === d[1] && w.containsPoint(c._rects[d[0]][d[1]][d[2]], c.lp(a))) {
                    var e = c.presets[d[2]];
                    c._r = e.r,
                    c._g = e.g,
                    c._b = e.b,
                    c._a = e.a,
                    c.iv()
                } else if ("label" === d[1] && w.containsPoint(c._rects[d[0]][d[1]], c.lp(a))) {
                    var f = "is" + d[0] + "Expanded";
                    c[f] = !c[f]
                }
                this.clear()
            }
        },
        handleWindowTouchMove: function (a) {
            this.handleWindowMouseMove(a)
        },
        handleWindowMouseMove: function (a) {
            K(a);
            var b = this._colorChooser,
            c = b._state;
            if ("presets" !== c[1]) {
                var d = b._rects[c[0]][c[1]],
                e = b.lp(a),
                f = Da(),
                g = e.x - d.x - f.left,
                i = e.y - d.y - f.top,
                j = b.getHsv();
                switch (g = g >= d.width ? d.width : 0 > g ? 0 : g, i = i >= d.height ? d.height : 0 > i ? 0 : i, c[1]) {
                case "saturationValueRect":
                    b.updateAperturePosition(a),
                    j = b.getHsv(b._baseValue);
                    var k = h(100 * g / d.width),
                    l = h(100 - 100 * i / d.height),
                    m = b.hsvToRgb(j.h, k, l);
                    b._r = m.r,
                    b._g = m.g,
                    b._b = m.b;
                    break;
                case "hueRect":
                    b.updateThumbPosition(a),
                    i = d.height - i;
                    var n = 360 * i / d.height,
                    m = b.hsvToRgb(n, j.s, j.v);
                    b._r = m.r,
                    b._g = m.g,
                    b._b = m.b;
                    break;
                case "r":
                case "g":
                case "b":
                case "a":
                    b["_" + c[1]] = h(255 / d.width * g)
                }
                b.iv()
            }
        },
        handleWindowTouchEnd: function (a) {
            this.handleWindowMouseUp(a)
        },
        handleWindowMouseUp: function (a) {
            K(a),
            this._colorChooser._state && this.clear()
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._colorChooser
            }
        }
    }),
    Rd = _(c, b, function (a) {
        this._list = a,
        this._lastSelectDataTime = ha(),
        this.addListeners()
    }, {
        clear: function (a) {
            var b = this,
            d = b.view;
            "dnd" !== b._state || b._dragCancel || d.handleDragAndDrop(a, "end"),
            d.draggingData && (d.draggingData = null, d.iv()),
            b._state = b._isV = b._isH = b._clientPoint = b._tx = b._ty = b._dragCancel = c
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b.view,
            d = c.getDataAt(a);
            c.requestFocus(),
            K(a),
            b.clear(a),
            b._clientPoint = xa(a),
            b._tx = c.translateX,
            b._ty = c.translateY,
            Eb(a) ? (b._isV = c.isCloseToVScrollBar(a), b._isH = c.isCloseToHScrollBar(a), !d && c.clearSelectionOnBackgroundClicked && c.selectionModel.clearSelection(), d && c.handleDragAndDrop && !b._isV && !b._isH && (c.draggingData = d, c.iv(), c.handleDragAndDrop(a, "prepare")), Bb(b, a)) : (d && b.handleSelectMode(a, d), b.clear(a))
        },
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handle_touchmove: function (a) {
            if (!Ab()) {
                var b = this.view;
                (b.isCloseToVScrollBar(a) || b.isCloseToHScrollBar(a)) && b.showScrollBar()
            }
        },
        handleWindowMouseUp: function (a) {
            this.clear(a)
        },
        handleWindowTouchEnd: function (a) {
            this.clear(a)
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function (a) {
            var b = this,
            c = b.view;
            if (!b._isV && !b._isH && b._clientPoint && !b._state) {
                var d = c.getDataAt(a);
                d && (c.checkMode ? b.handleCheckMode(a, d) : b.handleSelectMode(a, d), b.handleClickCallback(d, a))
            }
            b.clear(a)
        },
        handleClickCallback: function (a, b) {
            Db(b) ? this.view.onDataDoubleClick(a, b) : this.view.onDataClick(a, b)
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b.view,
            d = b._state,
            e = b._tx,
            f = b._ty,
            g = b._clientPoint,
            h = xa(a),
            i = c._viewRect;
            if (d)
                "pan" === d ? c.setTranslate(e + h.x - g.x, f + h.y - g.y) : "vScroll" === d ? c.translateY = f + (g.y - h.y) * c._scrollHeight / i.height : "hScroll" === d ? c.translateX = e + (g.x - h.x) * c._scrollWidth / i.width : "dnd" === d && (b._dragCancel || c.handleDragAndDrop(a, "between"));
            else {
                var j = ab(h, g);
                if (2 > j)
                    return;
                b._isV ? b._state = "vScroll" : b._isH ? b._state = "hScroll" : c.draggingData && !this._dragCancel ? (b._state = "dnd", c.handleDragAndDrop(a, "begin")) : b._state = "pan",
                b._state && "dnd" !== b._state && c.draggingData && (c.draggingData = null, c.iv())
            }
        },
        handle_mousewheel: function (a) {
            this.handleScroll(a, (a.wheelDeltaX || 0) / 40, a.wheelDelta / 40)
        },
        handle_DOMMouseScroll: function (a) {
            this.handleScroll(a, 0, -a.detail)
        },
        handleScroll: function (a, b, c) {
            var d = this.view;
            K(a),
            d.vScrollable && c && d.translate(0, c * d.rowHeight),
            d.hScrollable && b && d.translate(10 * b, 0)
        },
        handle_keydown: function (a) {
            var b,
            c = this.view,
            d = c.selectionModel,
            e = c._rows;
            if (K(a), Hb(a))
                c.selectAll();
            else if (Ib(a))
                c.handleDelete && c.handleDelete(a);
            else if (Pb(a))
                "dnd" !== this._state || this._dragCancel || (c.handleDragAndDrop(a, "cancel"), this._dragCancel = !0);
            else if (Nb(a))
                c.checkMode && (b = c.focusData, b && c.checkData(b));
            else if (Kb(a) || Mb(a)) {
                var f = c.checkMode;
                if (b = f ? c.focusData : d.lastData, b && c.getRowIndex(b) >= 0) {
                    var g = c.getRowIndex(b);
                    Kb(a) ? 0 !== g && (b = e[g - 1], f ? c.focusData = b : d.selection = b) : g !== e.length - 1 && (b = e[g + 1], f ? c.focusData = b : d.selection = b)
                } else
                    e.length && (b = e[0], f ? c.focusData = b : d.selection = b)
            }
        },
        handleCheckMode: function (a, b) {
            var c = this.view,
            d = c.lp(a).x;
            d >= 0 && d <= c._indent ? c.checkData(b) : c.focusData = b
        },
        handleSelectMode: function (a, b) {
            var c = this.view,
            d = c.selectionModel,
            e = d.lastData;
            if (Fb(a))
                c.isSelected(b) ? d.removeSelection(b) : d.appendSelection(b);
            else if (Gb(a))
                if (e) {
                    for (var f = c.getRowIndex(e), g = c.getRowIndex(b), h = []; f !== g; )
                        f += g > f ? 1 : -1, h.push(c._rows[f]);
                    d.appendSelection(h)
                } else
                    d.selection = b;
            else if (Eb(a)) {
                var i = ha();
                d.isSelected(b) && i - this._lastSelectDataTime < 1500 && c.handleDataDoubleSelect && c.handleDataDoubleSelect(a, b),
                d.selection = b,
                this._lastSelectDataTime = i
            } else
                d.isSelected(b) || (d.selection = b)
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._list
            }
        }
    }),
    Sd = _(c, Rd, function (a) {
        Sd["super"].constructor.call(this, a)
    }, {
        handleCheckMode: function (a, b) {
            var c = this.view,
            d = c._checkColumn;
            if (c.isCellEditable(b, d)) {
                var e = c.getColumnInfo(d);
                if (e) {
                    var f = c.lp(a).x;
                    if (f >= e.beginX && f < e.endX)
                        return void c.checkData(b)
                }
            }
            c.focusData = b,
            c.checkEditing(b, a)
        },
        handleSelectMode: function (a, b) {
            Sd["super"].handleSelectMode.apply(this, arguments),
            this.view.checkEditing(b, a)
        }
    }),
    Td = _("qc.widget.TreeInteractor", Rd, function (a) {
        Td["super"].constructor.call(this, a)
    }, {
        toggle: function (a, b) {
            var c = this.view;
            return c.isOnToggleIcon(a) ? (c.toggle(b), !0) : c.toggleOnDoubleClick && Db(a) ? (c.toggle(b), !0) : !1
        },
        handleClickCallback: function (a, b) {
            this.view.isOnToggleIcon(b) || Td["super"].handleClickCallback.call(this, a, b)
        },
        handleCheckMode: function (a, b) {
            var c = this.view,
            d = c.lp(a).x,
            e = c.getLevel(b),
            f = c._indent,
            g = f * (e + 1);
            return d >= g && g + f >= d ? void c.checkData(b) : void(this.toggle(a, b) || (c.focusData = b))
        },
        handleSelectMode: function (a, b) {
            this.toggle(a, b) || Td["super"].handleSelectMode.call(this, a, b)
        },
        handle_keydown: function (a) {
            if (Jb(a) || Lb(a)) {
                var b = this.view,
                c = b._rows,
                d = b.checkMode,
                e = b.selectionModel,
                f = d ? b.focusData : e.lastData;
                f ? Jb(a) ? b.collapse(f) : b.expand(f) : c.length > 0 && (f = c[0], d ? b.focusData = f : e.selection = f)
            } else
                Td["super"].handle_keydown.call(this, a)
        }
    }),
    Ud = _(c, Rd, function (a) {
        Ud["super"].constructor.call(this, a)
    }, {
        handleCheckMode: function (a, b) {
            var c = this.view,
            d = c._treeColumn,
            e = c.getColumnInfo(d),
            f = c.lp(a).x;
            if (e) {
                var g = c._indent,
                h = e.beginX + g * c.getLevel(b);
                if (c.getToggleIcon(b) && f >= h && h + g >= f)
                    return void c.toggle(b);
                if (c.isCellEditable(b, d) && (h += g, f >= h && h + g >= f))
                    return void c.checkData(b)
            }
            c.focusData = b,
            c.checkEditing(b, a)
        },
        handleSelectMode: function (a, b) {
            var c = this.view,
            d = c.lp(a).x;
            if (c.getToggleIcon(b)) {
                var e = c.getColumnInfo(c._treeColumn);
                if (e) {
                    var f = c._indent,
                    g = e.beginX + f * c.getLevel(b);
                    if (d >= g && g + f >= d)
                        return void c.toggle(b)
                }
            }
            Ud["super"].handleSelectMode.apply(this, arguments),
            c.checkEditing(b, a)
        }
    }),
    Vd = _(c, b, function (a) {
        this._table = a,
        this.addListeners()
    }, {
        clear: function () {
            var a = this;
            a._state = a._cp = a._ty = a._p = c,
            a.cursor = ""
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b.view;
            K(a),
            c.requestFocus(),
            Eb(a) ? (b._cp = xa(a), b._ty = c.translateY, b._p = c.columnPosition, b.handle_touchmove(a)) : c.selectRowIndex = c.getRowIndexAt(a)
        },
        handleWindowMouseUp: function () {
            this.clear()
        },
        handleWindowTouchEnd: function () {
            this.clear()
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function (a) {
            var b = this;
            if (b._cp && !b._state) {
                var c = b.view,
                d = c.lp(a),
                e = d.x,
                f = d.y,
                g = c._indent,
                h = c.getRowIndexAt(a),
                i = c._columnLineX;
                if (h >= 0) {
                    var j = c._rowHeight,
                    k = j * h,
                    l = c._rows[h],
                    m = l.property;
                    if (Pa(l))
                        e >= 0 && g >= e && f >= k && k + j >= f ? c.toggle(l) : Db(a) && c.toggle(l);
                    else if (e > i) {
                        var n = l.data;
                        if (c.isCellEditable(n, m)) {
                            var o = {
                                x: i + 1,
                                y: k,
                                width: c.clientWidth - i - 1,
                                height: j
                            },
                            p = {
                                x: o.x + c.translateX,
                                y: o.y + c.translateY,
                                width: o.width,
                                height: o.height
                            },
                            q = 0,
                            r = c._viewRect;
                            o.y < r.y ? q = o.y - r.y : o.y + j > r.y + r.height && (q = o.y + j - r.y - r.height),
                            q && (c.translateY = c.translateY - q, p.y -= q),
                            c.beginEditing(n, m, p, a, d, o)
                        }
                    }
                }
                c.selectRowIndex = h
            }
            b.clear()
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b.view,
            d = b._ty,
            e = b._cp,
            f = xa(a),
            g = b._state;
            if ("pan" === g)
                c.translateY = d + f.y - e.y;
            else if ("resize" === g) {
                var h = c.clientWidth;
                if (h > 16) {
                    var i = b._p - (e.x - f.x) / h,
                    j = 16 / h;
                    j > i && (i = j),
                    i > 1 - j && (i = 1 - j),
                    c.columnPosition = i
                }
            } else
                "scroll" === g && (c.translateY = d + (e.y - f.y) * c._scrollHeight / c._viewRect.height)
        },
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handle_touchmove: function (a) {
            if (!Ab() && Eb(a)) {
                var b = this,
                c = b.view,
                d = n(c.lp(a).x - c._columnLineX) <= (Qb(a) ? 3 : 8);
                b._cp ? b._state || (d ? (b._state = "resize", Bb(b, a)) : n(xa(a).y - b._cp.y) >= 2 && (b._state = c.isCloseToVScrollBar(a) ? "scroll" : "pan", Bb(b, a))) : (b.cursor = d ? "ew-resize" : "", c.isCloseToVScrollBar(a) && c.showScrollBar())
            }
        },
        handle_mousewheel: function (a) {
            this.handleScroll(a, a.wheelDelta / 40)
        },
        handle_DOMMouseScroll: function (a) {
            2 === a.axis && this.handleScroll(a, -a.detail)
        },
        handleScroll: function (a, b) {
            K(a),
            this._table.translate(0, b * this._table.rowHeight)
        },
        handle_keydown: function (a) {
            var b = this._table,
            c = b._rows.length,
            d = b._selectRowIndex + (Kb(a) ? -1 : 1);
            (Kb(a) || Mb(a)) && (0 > d && (d = 0), d >= c && (d = c - 1), b.selectRowIndex = d)
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._table
            }
        }
    }),
    Wd = _(c, b, function (a) {
        this._view = a,
        this.addListeners()
    }, {
        handle_mousewheel: function (a) {
            this.handleScroll(a, a.wheelDelta / 40)
        },
        handle_DOMMouseScroll: function (a) {
            this.handleScroll(a, -a.detail)
        },
        handleScroll: function (a, b) {
            K(a),
            this.view._table.translate(10 * b, 0)
        },
        handle_mousemove: function (a) {
            if (!Ab()) {
                var b = this;
                delete b._columnInfo,
                b.cursor = "";
                for (var c = b.view, d = c._columnInfos, e = c.lp(a).x, f = d.length - 1; f >= 0; f--) {
                    var g = d[f],
                    h = g.column,
                    i = g.endX;
                    if (c.resizable && n(i - e) <= (Qb(a) ? 3 : 8))
                        return b._columnInfo = g, void(b.cursor = "ew-resize");
                    (h.sortable || c.movable || h === c._table.checkColumn) && e >= g.beginX && i >= e && h.width > 0 && (b._columnInfo = g, b.cursor = "pointer")
                }
            }
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b.view;
            K(a),
            c._table.endEditing(),
            b.handle_mousemove(a),
            b._columnInfo && (b._x = xa(a).x, b._lx = c.lp(a).x, b._w = b._columnInfo.column.width, Bb(b, a))
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b.view,
            d = b.cursor,
            e = b._columnInfo,
            f = xa(a).x - b._x;
            if (b._resizing || b._moving || ("ew-resize" === d ? b._resizing = !0 : c.movable && "pointer" === d && n(f) > 2 && (b._moving = !0)), b._resizing)
                e.column.width = b._w + f;
            else if (b._moving) {
                var g = b._lx + f;
                c._columnInfos.forEach(function (a) {
                    var b = a.beginX,
                    d = a.endX;
                    if (g >= b && d >= g) {
                        var h = {
                            column: e.column,
                            beginX: e.beginX + f,
                            front: d - g > g - b,
                            insertColumn: a.column
                        };
                        h.position = h.front ? b : d,
                        c.movingColumnInfo = h
                    }
                })
            }
        },
        handleCheckColumn: function (a, b, c) {
            var d = this,
            e = d.view,
            f = e._table,
            g = e._checkIcon;
            if (e.isMultiCheckableColumn(a)) {
                var h = d._lx,
                i = a.width,
                j = ac(g, a);
                if (h >= b + i / 2 - j && b + i / 2 + j >= h) {
                    e.checkIcon = "check" === g ? "uncheck" : "check";
                    var k = f.selectionModel,
                    l = f._rows;
                    return "check" === g ? k.removeSelection(l) : k.selection = l,
                    f.onCheckColumnClick(a, c),
                    !0
                }
            }
            return !1
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function (a) {
            var b = this,
            d = b.view,
            e = d._table,
            f = e.columnModel,
            g = b._columnInfo;
            if (b._moving) {
                var h = d._movingColumnInfo;
                if (h && h.insertColumn !== h.column) {
                    var i = h.column,
                    j = f._roots,
                    k = Va(j, i),
                    l = j.indexOf(h.insertColumn);
                    h.front || l++,
                    Ua(j, i, l),
                    f.emit("hierarchyChange", {
                        data: i,
                        oldIndex: k,
                        newIndex: l
                    })
                }
                d.movingColumnInfo = c,
                delete b._moving
            } else if (!b._resizing && g) {
                i = g.column;
                var m = d.lp(a).x,
                n = g.beginX,
                o = !0;
                if (d.onColumnClick) {
                    var p = d.onColumnClick(i, a);
                    p === !1 && (o = !1)
                }
                if (o && m >= n && m <= g.endX && !b.handleCheckColumn(i, n, a)) {
                    if (i.sortable) {
                        var q = e.sortMode,
                        r = i.sortOrder;
                        "tristate" === q ? e.sortColumn === i ? ("desc" === r && (e.sortColumn = c), i.sortOrder = "asc" === r ? "desc" : "asc") : e.sortColumn = i : "bistate" === q && (e.sortColumn === i ? i.sortOrder = "asc" === r ? "desc" : "asc" : e.sortColumn = i)
                    }
                    e.onColumnClick(i, a)
                }
            }
            b._columnInfo = b._resizing = b._x = b._lx = b._w = c
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._view
            }
        }
    }),
    Xd = _("qc.widget.PanelInteractor", b, function (a) {
        var b = this;
        b._panel = a,
        b.addListeners()
    }, {
        _mouseState: "normal",
        _toolIndex: c,
        clear: function () {},
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            d = b._panel,
            e = b._toolIndex;
            e != c && (K(a), b._startToolPoint = xa(a), b._mouseState = "active", d.iv(), Bb(b, a))
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handle_mouseleave: function () {
            var a = this,
            b = a._panel,
            c = a._mouseState;
            Ab() || "hover" !== c || (a._mouseState = "normal", b.iv())
        },
        handleWindowTouchEnd: function (a) {
            var b = this,
            d = b._panel,
            e = b._toolIndex = b._calcToolIndex(a);
            delete b._startToolPoint,
            e != c ? (b._mouseState = "hover", d.cursor = "pointer", d.iv()) : (b._mouseState = "normal", d.cursor = "", d.iv())
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function (a) {
            var b = this,
            d = b._panel,
            e = b._toolIndex,
            f = b._startToolPoint,
            g = xa(a);
            f && e != c && ab(f, g) < 2 && d.handleToolClick(e, a)
        },
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        _calcToolIndex: function (a) {
            var b = this,
            d = b._panel;
            a = Sb(a);
            var e = d._interactionDiv.getBoundingClientRect(),
            f = a.clientX - e.left,
            g = a.clientY - e.top,
            h = d.width,
            i = d.titleHeight,
            j = h - d.toolRight,
            k = 4,
            l = d.tools,
            m = c;
            if (d.titleVisible)
                for (var n = l.length - 1; n >= 0; n--) {
                    if (g >= k && k + i - 8 >= g && j > f && f > j - (i - 8)) {
                        m = n;
                        break
                    }
                    j -= i - 8,
                    j -= 2
                }
            return m
        },
        handle_touchmove: function (a) {
            var b = this,
            d = b._panel,
            e = b._mouseState;
            if (!Ab() && "active" !== e) {
                var f = b._toolIndex;
                b._toolIndex = c;
                var g = b._toolIndex = b._calcToolIndex(a);
                f !== g && (g != c ? (d.cursor = "pointer", b._mouseState = "hover") : (d.cursor = "", b._mouseState = "normal"), d.iv())
            }
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function () {}
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._panel
            }
        }
    }),
    Yd = _("qc.widget.DialogInteractor", "qc.widget.PanelInteractor", function Ze(a) {
        Ze["super"].constructor.call(this, a),
        a._coverDiv.addEventListener("mousedown", function (a) {
            K(a)
        }),
        a._coverDiv.addEventListener("touchstart", function (a) {
            K(a)
        })
    }, {
        clear: function () {
            var a = this;
            a._resizeDiv && a._panel.view.removeChild(a._resizeDiv),
            a._mousePosition = a._resizeMode = a._moveMode = a._resizeDiv = c
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            d = b._panel;
            if (Yd["super"].handle_touchstart.call(this, a), a = Sb(a), b._toolIndex != c)
                return void(d.handleToolMouseDown && d.handleToolMouseDown());
            var e = d._interactionDiv.getBoundingClientRect(),
            f = a.clientX - e.left,
            g = a.clientY - e.top;
            if (d.titleVisible && 24 >= g && f > 5 && f < d.width - 5)
                b._mousePosition = ya(a), Bb(b, a), b._moveMode = 1;
            else if (d.resizable) {
                var h,
                i = d._eastResizeDiv,
                j = d._westResizeDiv,
                k = d._southResizeDiv,
                l = d._southeastResizeDiv,
                m = d._southwestResizeDiv;
                i.contains(a.target) ? h = "east" : j.contains(a.target) ? h = "west" : k.contains(a.target) ? h = "south" : l.contains(a.target) ? h = "southeast" : m.contains(a.target) && (h = "southwest"),
                h && (b._resizeMode = h, b._mousePosition = ya(a), Bb(b, a))
            }
            if (b._resizeMode || b._moveMode) {
                K(a);
                var n = b._maskDiv = ra(),
                o = d._contentDiv;
                n.style.width = o.style.width,
                n.style.height = o.style.height,
                n.style.left = o.style.left,
                n.style.top = o.style.top,
                o.parentNode.appendChild(n)
            }
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function (a) {
            var b = this,
            c = b._resizeMode,
            d = b._resizeDiv,
            e = b.view;
            if (b._moveMode || c) {
                var f = e._contentDiv;
                f.parentNode.removeChild(b._maskDiv),
                b._maskDiv = null
            }
            if (Yd["super"].handleWindowTouchEnd.call(this, a), c && d) {
                var g = d.style.left,
                h = d.style.width,
                i = d.style.height;
                e.x = u(g),
                e.width = u(h),
                e.height = u(i)
            }
            this.clear(a)
        },
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handle_touchmove: function (a) {
            var b = this,
            d = b._panel,
            a = Sb(a),
            e = a.target;
            Yd["super"].handle_touchmove.call(this, a),
            !Ab() && d.resizable && (d._eastResizeDiv.contains(e) ? (d.cursor = "e-resize", b._toolIndex = c) : "e-resize" === d.cursor && b._toolIndex == c && (d.cursor = ""), d._westResizeDiv.contains(e) ? (d.cursor = "w-resize", b._toolIndex = c) : "w-resize" === d.cursor && b._toolIndex == c && (d.cursor = ""), d._southResizeDiv.contains(e) ? (d.cursor = "s-resize", b._toolIndex = c) : "s-resize" === d.cursor && b._toolIndex == c && (d.cursor = ""), d._southwestResizeDiv.contains(e) ? (d.cursor = "sw-resize", b._toolIndex = c) : "sw-resize" === d.cursor && b._toolIndex == c && (d.cursor = ""), d._southeastResizeDiv.contains(e) ? (d.cursor = "se-resize", b._toolIndex = c) : "se-resize" === d.cursor && b._toolIndex == c && (d.cursor = ""))
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function (a) {
            Yd["super"].handle_touchend.call(this, a)
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            a.preventDefault();
            var b = this,
            c = b._panel,
            d = b._mousePosition,
            e = c.titleHeight,
            f = ya(a),
            g = {
                x: c.x,
                y: c.y
            },
            h = (c.size, c.dragContainment),
            i = b._resizeMode;
            if (Yd["super"].handleWindowTouchMove.call(this, a), b._moveMode) {
                K(a);
                var j = f.x - d.x,
                k = f.y - d.y,
                l = g.x + j,
                m = g.y + k;
                if ("viewport" === h) {
                    var n = Da();
                    0 > m && (m = 0),
                    m + e > n.height && (m = n.height - e),
                    l + 50 > n.width && (l = n.width - 50)
                }
                c.position = {
                    x: l,
                    y: m
                },
                d.x += l - g.x,
                d.y += m - g.y
            } else if (i) {
                K(a);
                var o = c.width,
                p = c.height,
                q = b._resizeDiv,
                r = g.x;
                if (!q) {
                    q = b._resizeDiv = ra(!1, c._view);
                    var s = q.style;
                    s.position = "fixed",
                    s.border = "1px dashed black",
                    s.left = r + "px",
                    s.top = g.y + "px",
                    s.width = o + "px",
                    s.height = p + "px"
                }
                var j = f.x - d.x,
                k = f.y - d.y,
                t = 50;
                /east/.test(i) ? (t > o + j && (j = t - o), q.style.width = o + j + "px") : /west/.test(i) && (t > o - j && (j = o - t), q.style.width = o - j + "px", q.style.left = r + j + "px"),
                /south/.test(i) && (t > p + k && (k = t - p), q.style.height = p + k + "px")
            }
        }
    }),
    Zd = _(c, b, function (a) {
        this._view = a,
        this.addListeners()
    }, {
        clear: function () {
            var a = this;
            a._state = a._cp = a._tx = a._ty = c
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b.view,
            d = c.isCloseToVScrollBar(a),
            e = c.isCloseToHScrollBar(a),
            f = xa(a);
            d || e ? (K(a), d ? b._state = "vScroll" : e && (b._state = "hScroll"), b._cp = f, b._tx = c.translateX, b._ty = c.translateY, Bb(b, a)) : (a.target instanceof HTMLCanvasElement || c instanceof wd && a.target === c._contentDiv) && K(a)
        },
        handleWindowMouseUp: function (a) {
            this.clear(a)
        },
        handleWindowTouchEnd: function (a) {
            this.clear(a)
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function (a) {
            var b = this;
            b.clear(a)
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b.view,
            d = b._state,
            e = b._tx,
            f = b._ty,
            g = b._cp,
            h = xa(a),
            i = c._viewRect;
            "vScroll" === d ? c.translateY = f + (g.y - h.y) * c._scrollHeight / i.height : "hScroll" === d && (c.translateX = e + (g.x - h.x) * c._scrollWidth / i.width)
        },
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handle_touchmove: function (a) {
            if (!Ab() && Eb(a)) {
                var b = this,
                c = b.view,
                d = c.isCloseToVScrollBar(a),
                e = c.isCloseToHScrollBar(a);
                (d || e) && c.showScrollBar()
            }
        },
        handle_mousewheel: function (a) {
            this.handleScroll(a, a.wheelDelta / 40, a.wheelDelta !== a.wheelDeltaX)
        },
        handle_DOMMouseScroll: function (a) {
            this.handleScroll(a, -a.detail, !0)
        },
        handleScroll: function (a, b, c) {
            var d = this.view,
            e = d._viewRect,
            f = d.scrollRect;
            c && d.vScrollable ? (d.translate(0, 20 * b), b > 0 ? e.y <= 0 ? a.preventDefault() : a.stopPropagation() : 0 > b && (f.height - e.height <= e.y ? a.preventDefault() : a.stopPropagation())) : d.hScrollable && (d.translate(10 * b, 0), b > 0 ? e.x <= 0 ? a.preventDefault() : a.stopPropagation() : 0 > b && (f.width - e.width <= e.x ? a.preventDefault() : a.stopPropagation()))
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._view
            }
        }
    }),
    $d = _(c, b, function (a) {
        this._layout = a,
        this.addListeners()
    }, {
        clear: function () {},
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            K(a)
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function (a) {
            var b = this,
            c = b._layout;
            if (K(a), Eb(a)) {
                var d = c.getTitle(a);
                c.isExpanded(d) ? c.collapse() : c.expand(d)
            }
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._layout.container
            }
        }
    }),
    _d = _(c, b, function (a) {
        this._layout = a,
        this.addListeners()
    }, {
        clear: function () {
            var a = this;
            Ba(a._resizeDiv),
            a._resizeDiv = a._clientValue = a._splitter = a._splitterName = a.toggle = c
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        _getSplitter: function (a) {
            for (var b = this, c = b._layout, d = ["left", "right", "top", "bottom"], e = a.target, f = 0; f < d.length; f++) {
                var g = d[f],
                h = c["_" + g + "Splitter"];
                if (h && h.contains(e))
                    return g
            }
        },
        _getToggle: function (a) {
            for (var b = this, c = b._layout, d = ["left", "right", "top", "bottom"], e = a.target, f = 0; f < d.length; f++) {
                var g = d[f],
                h = c["_" + g + "Toggle"];
                if (h && h.contains(e))
                    return g
            }
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b._layout,
            d = b._getToggle(a);
            if (d) {
                K(a);
                var e = c["_" + d + "Resizable"];
                e && (b._splitterName = d, b._toggle = c["_" + d + "Toggle"], b._clientPoint = xa(a))
            } else {
                var f = b._getSplitter(a);
                if (f) {
                    K(a);
                    var e = c["_" + f + "Resizable"],
                    g = c.isExpanded(f);
                    e && g && (b._splitterName = f, b._splitter = c["_" + f + "Splitter"], b._clientPoint = xa(a))
                }
            }
        },
        _setCursor: function (a) {
            var b = this,
            c = b.view,
            d = c.view,
            e = c._layout,
            f = "";
            if (!Ab()) {
                var g = b._getToggle(a);
                if (g && e["_" + g + "Resizable"])
                    f = "pointer";
                else {
                    var h = b._getSplitter(a);
                    if (h) {
                        var i = e["_" + h + "Resizable"],
                        j = e.isExpanded(h);
                        i && j && (f = "left" === h || "right" === h ? "ew-resize" : "ns-resize")
                    }
                }
            }
            d.style.cursor = f
        },
        handle_mouseleave: function () {
            this.view.view.style.cursor = ""
        },
        handle_touchmove: function (a) {
            var b = this,
            c = b._splitter,
            d = b._splitterName,
            e = b._clientPoint,
            f = b.view,
            g = xa(a);
            if (b._setCursor(a), c && !Ab() && ab(g, e) >= 1) {
                var h = b._resizeDiv = ra(),
                i = h.style,
                j = c.style;
                i.left = j.left,
                i.top = j.top,
                i.width = j.width,
                i.height = j.height,
                i.zIndex = "2",
                i.opacity = "0.5",
                i.background = "black",
                b._clientValue = "left" === d || "right" === d ? e.x : e.y,
                za(f._interactionDiv, h),
                Bb(b, a);
                var k = b._layout;
                ["left", "right", "top", "bottom", "center"].forEach(function (a) {
                    var c = k["_" + a + "View"];
                    if (c && ("center" === a || k.isExpanded(a))) {
                        var d = ra();
                        d.style.left = c.view.style.left,
                        d.style.top = c.view.style.top,
                        d.style.width = c.width + "px",
                        d.style.height = c.height + "px",
                        f.view.appendChild(d),
                        b["_" + a + "Mask"] = d
                    }
                })
            }
        },
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            d = b.view,
            e = b._layout,
            f = b._resizeDiv.style,
            g = d.width,
            h = e.minSize,
            i = e.splitterSize,
            j = e.leftSplitterSize != c ? e.leftSplitterSize : i,
            k = e.rightSplitterSize != c ? e.rightSplitterSize : i,
            l = e.topSplitterSize != c ? e.topSplitterSize : i,
            m = e.bottomSplitterSize != c ? e.bottomSplitterSize : i,
            n = d.height,
            o = b._splitter,
            p = b._splitterName,
            q = e.rightView,
            r = e.leftView,
            s = e.topView,
            t = e.bottomView;
            if ("left" === p || "right" === p) {
                var v = u(o.style.left),
                w = xa(a),
                x = w.x - b._clientValue + v;
                if ("left" === p) {
                    var y = e._rw;
                    q ? x > g - j - k - y - h && (x = g - j - k - y - h) : x > g - j - h && (x = g - j - h),
                    h > x && (x = h),
                    f.left = x + "px";

                } else
                    x > g - k - h && (x = g - k - h), r ? x < e._lw + j + h && (x = e._lw + j + h) : h > x && (x = h), f.left = x + "px"
            } else {
                var z = u(o.style.top),
                w = xa(a),
                x = w.y - b._clientValue + z;
                if ("top" === p) {
                    var A = e._bh;
                    t ? x > n - l - m - A - h && (x = n - l - m - A - h) : x > n - l - h && (x = n - l - h),
                    h > x && (x = h),
                    f.top = x + "px"
                } else
                    x > n - m - h && (x = n - m - h), s ? x < e._th + l + h && (x = e._th + l + h) : h > x && (x = h), f.top = x + "px"
            }
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function () {
            var a = this,
            b = a._splitter,
            c = a._splitterName,
            d = a._layout;
            if ("left" === c || "right" === c) {
                var e = u(b.style.left),
                f = u(a._resizeDiv.style.left),
                g = f - e;
                "left" === c ? d.leftWidth = d._lw + g : d.rightWidth = d._rw - g
            } else {
                var h = u(b.style.top),
                i = u(a._resizeDiv.style.top),
                g = i - h;
                "top" === c ? d.topHeight = d._th + g : d.bottomHeight = d._bh - g
            }
            a._clearMask(),
            a.clear()
        },
        _clearMask: function () {
            var a = this,
            b = a._layout;
            ["left", "right", "top", "bottom", "center"].forEach(function (c) {
                var d = a["_" + c + "Mask"];
                delete a["_" + c + "Mask"],
                d && b.container.view.removeChild(d)
            })
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function (a) {
            if (!Ab()) {
                var b = this,
                c = b._toggle,
                d = b._layout,
                e = b._splitterName;
                c && c.contains(a.target) && (d.isExpanded(e) === !0 ? d.setExpanded(e, !1) : d.isExpanded(e) === !1 && d.setExpanded(e, !0)),
                b.clear()
            }
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._layout.container
            }
        }
    }),
    ae = _(c, b, function (a) {
        this._layout = a,
        this.addListeners()
    }, {
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handle_touchmove: function (a) {
            var b = this,
            c = b._layout,
            d = c._splitterDiv,
            e = a.target,
            f = c._coverDiv,
            g = d.style;
            !Ab() && c.draggable && d.contains(e) ? "h" === c.orientation ? (g.cursor = "ew-resize", f && (f.style.cursor = "ew-resize")) : (g.cursor = "ns-resize", f && (f.style.cursor = "ns-resize")) : (g.cursor = "", f && (f.style.cursor = ""))
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b.view,
            d = b._layout,
            e = d._splitterDiv,
            f = a.target;
            if (e.contains(f) && (K(a), d.draggable)) {
                b._resizeDiv = ra();
                var g = b._resizeDiv.style,
                h = e.style,
                i = d.leftView,
                j = d.rightView;
                b._maskViews = [],
                [i, j].forEach(function (a) {
                    if (a) {
                        a = a.view;
                        var d = ra(),
                        e = d.style;
                        e.left = a.style.left,
                        e.top = a.style.top,
                        e.width = a.offsetWidth + "px",
                        e.height = a.offsetHeight + "px",
                        c.view.appendChild(d),
                        b._maskViews.push(d)
                    }
                }),
                g.left = h.left,
                g.top = h.top,
                g.width = h.width,
                g.height = h.height,
                g.opacity = d.dragOpacity,
                g.background = d.splitterColor,
                b._clientValue = b._lastPosition = "h" === d.orientation ? xa(a).x : xa(a).y,
                za(c.view, b._resizeDiv),
                b._clientPoint = xa(a),
                Bb(b, a)
            }
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b.view,
            d = b._layout,
            e = d.splitterSize,
            g = d.minSize,
            h = b._resizeDiv.style,
            i = c.clientWidth,
            j = c.clientHeight,
            k = d._absPosition - b._lastPosition;
            "h" === d.orientation ? (b._clientValue = xa(a).x, k += b._clientValue, k > i - g - e && (k = i - g - e), g > k && (k = g), h.left = k + f) : (b._clientValue = xa(a).y, k += b._clientValue, k > j - g - e && (k = j - g - e), g > k && (k = g), h.top = k + f)
        },
        handleWindowTouchEnd: function (a) {
            var b = this,
            d = b.view,
            e = b._layout,
            f = e.positionType,
            g = e._absPosition - b._lastPosition + b._clientValue,
            h = e._splitterSize,
            i = "h" === e.orientation ? d.clientWidth : d.clientHeight,
            j = ab(b._clientPoint, xa(a));
            j > 1 && (0 > g && (g = 0), g > i - h && (g = i - h), i !== h && (e.position = "absoluteLeft" === f ? g : "absoluteRight" === f ? i - h - g : g / (i - h))),
            b._maskViews && b._maskViews.forEach(function (a) {
                Ba(a)
            }),
            Ba(b._resizeDiv),
            b._resizeDiv = b._clientValue = b._clientPoint = c
        },
        handle_mousedown: function (a) {
            Eb(a) && this.handle_touchstart(a)
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._layout.container
            }
        }
    }),
    be = _(c, b, function (a) {
        var b = this;
        b._contextmenu = a,
        b.addListeners(),
        a.view.addEventListener("contextmenu", function (a) {
            a.stopPropagation(),
            a.preventDefault()
        })
    }, {
        handle_touchstart: function (a) {
            a.preventDefault(),
            this._startPoint = {
                x: a.pageX,
                y: a.pageY
            }
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchend: function (a) {
            a.preventDefault();
            var b = this._contextmenu;
            if (this._startPoint) {
                var c = {
                    x: a.pageX,
                    y: a.pageY
                },
                d = ab(this._startPoint, c);
                if (2 > d) {
                    var e = b.getMenuItemAt(a);
                    if (e) {
                        if (b._isItemDisabled(e))
                            return;
                        "check" === e.type ? "function" != typeof e.selected && (e.selected = !e.selected) : "radio" === e.type && "function" != typeof e.selected && b.select(e),
                        e.action && e.action.call(b, e, a),
                        b.emit("action", {
                            item: e,
                            event: a
                        }),
                        b._itemsLevelMap[e._id] || b.hide(e)
                    }
                }
            }
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handleWindowTouchEnd: function () {},
        handle_keydown: function (a) {
            var b = this._contextmenu;
            Pb(a) && b.hide()
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handle_mouseout: function (a) {
            var b = this._contextmenu;
            if (b.visible) {
                var c,
                d = a.target;
                null !== d._parentItemId && (c = b._itemsMap[d._parentItemId]),
                c && b._isItemDisabled(c) && (c = null),
                b.hoverMenuItem = c
            }
        },
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handle_touchmove: function (a) {
            var b = this._contextmenu;
            if (b.visible) {
                var c = b.getMenuItemAt(a);
                if (!c) {
                    var d = a.target;
                    null !== d._parentItemId && (c = b._itemsMap[d._parentItemId])
                }
                c && b._isItemDisabled(c) && (c = null),
                b.hoverMenuItem = c
            }
        },
        handleWindowTouchMove: function () {},
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleScroll: function () {},
        handle_mousewheel: function () {},
        handle_DOMMouseScroll: function (a) {
            this.handleScroll(a, -a.detail)
        },
        handleDocMouseDown: function (a) {
            this._contextmenu.view.contains(a.target) || this._contextmenu.hide()
        },
        handleViewParentContextMenu: function (a) {
            a = Sb(a);
            var b = a.target,
            c = b.tagName;
            ("DIV" === c || "CANVAS" === c || "BODY" === c) && (a.preventDefault(), this._contextmenu.show(a))
        },
        handleDocKeyDown: function () {}
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._contextmenu.view
            }
        }
    }),
    ce = _(c, b, function (a) {
        var b = this;
        b._menu = a,
        b.addListeners();
        var d = b.handle_documentmousedown.bind(b),
        e = a._dropDownMenu;
        e.on("show", function () {
            a.registerCloseEvent(d)
        }),
        e.on("hide", function () {
            a.setState("normal"),
            a.setCurrentItem(c),
            a.unregisterCloseEvent(d)
        }),
        e.on("action", function (b) {
            a.emit("action", b)
        })
    }, {
        handle_documentmousedown: function (a) {
            var b = this._menu,
            d = a.target;
            b.view.contains(d) || b._dropDownMenu.view.contains(d) || (b.setState("normal"), b.setCurrentItem(c))
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b._menu,
            d = c.getMenuItemAt(a);
            d ? (c.setState("active" === c._state ? "hover" : "active"), c.setCurrentItem(d)) : c.hide()
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchend: function () {},
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handleWindowTouchEnd: function () {},
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handle_mouseleave: function () {
            var a = this._menu;
            "active" !== a._state && (a.setState("normal"), a.setCurrentItem(c))
        },
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handle_touchmove: function (a) {
            var b = this,
            c = b._menu,
            d = c.getMenuItemAt(a);
            d && ("active" === c._state || c.setState("hover"), c.setCurrentItem(d))
        },
        handleWindowTouchMove: function () {},
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._menu
            }
        }
    }),
    de = _(c, b, function (a) {
        var b = this;
        b._button = a,
        b.addListeners()
    }, {
        clear: function () {
            this._touchstart = null
        },
        handle_documentmousedown: function (a) {
            var b = this._button;
            b.view.contains(a.target) || b._contextMenu.view.contains(a.target) || (this.clear(), b.state = "normal")
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            K(a);
            var b = this,
            c = b._button,
            d = c.view,
            e = d.getBoundingClientRect(),
            f = c.menuItems;
            c.requestFocus(),
            "splitActive" !== c.state && (f && c.split && a.clientX - e.left > e.width - 30 ? (c.state = "splitActive", b._touchstart = !0) : c.state = "active"),
            Bb(b, a)
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function () {},
        handle_mouseenter: function () {
            var a = this._button;
            "splitActive" === a.state || Ab() || (a.state = "hover")
        },
        handle_mouseleave: function () {
            var a = this._button;
            "splitActive" !== a.state && (a.state = "normal")
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function () {},
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function (a) {
            var b = this,
            c = b._button,
            d = c.view.getBoundingClientRect(),
            e = function () {
                c.state = c.view.contains(a.target) ? "hover" : "normal"
            };
            "active" === c._state ? e() : !this._touchstart && "splitActive" === c._state && a.clientX - d.left > d.width - 30 && e(),
            b.clear(),
            c.view.contains(a.target) && (c.validate(), c.emit("click", a))
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._button
            }
        }
    }),
    ee = _(c, b, function (a) {
        var b = this;
        b._button = a,
        b.addListeners(),
        a._contextMenu.on("hide", function (c) {
            c && c.item && (b.clear(), a.state = "normal")
        })
    }, {
        clear: function () {
            this._touchstart = c
        },
        handle_documentmousedown: function (a) {
            var b = this._button;
            b.view.contains(a.target) || b._contextMenu.view.contains(a.target) || (this.clear(), b.state = "normal")
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            K(a);
            var b = this,
            c = b._button;
            c.requestFocus(),
            "active" !== c.state && (c.state = "active", b._touchstart = !0),
            Bb(b, a)
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function () {},
        handle_mouseenter: function () {
            var a = this._button;
            "active" === a.state || Ab() || (a.state = "hover")
        },
        handle_mouseleave: function () {
            var a = this._button;
            "active" !== a.state && (a.state = "normal")
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function () {},
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function (a) {
            var b = this,
            c = b._button;
            "active" !== c._state || this._touchstart || (c.state = c.view.contains(a.target) ? "hover" : "normal"),
            b.clear()
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._button
            }
        }
    }),
    fe = _(c, b, function (a) {
        this._dropDownList = a,
        this.addListeners()
    }, {
        handle_mousedown: function (a) {
            Eb(a) && (this.view.expand(), K(a))
        },
        handle_touchstart: function (a) {
            this.handle_mousedown(a)
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._dropDownList
            }
        }
    }),
    ge = _(c, b, function (a) {
        var b = this;
        b._button = a,
        b.addListeners()
    }, {
        clear: function () {
            this._pressed = null
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            if (K(a), Eb(a)) {
                var b = this,
                c = b._button;
                b._pressed || (c._state = "active", b._pressed = !0),
                c.requestFocus(),
                c.iv(),
                Bb(this, a)
            }
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function () {},
        handle_mouseenter: function () {
            if (!this._pressed) {
                var a = this._button;
                a._state = "hover",
                a.iv()
            }
        },
        handle_mouseleave: function () {
            if (!this._pressed) {
                var a = this._button;
                a._state = "normal",
                a.iv()
            }
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function () {},
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function (a) {
            var b = this,
            c = b._button;
            b._pressed && ("active" === c._state && (c._state = c.view.contains(a.target) ? "hover" : "normal", c.iv()), c.view.contains(a.target) && (c.selected = !c.selected, c.validate(), c.emit("click", a)), b.clear())
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._button
            }
        }
    }),
    he = _(c, b, function (a) {
        var b = this;
        b._label = a,
        b.addListeners()
    }, {
        clear: function () {},
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            K(a),
            this._label.emit("mousedown", a)
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function (a) {
            this._label.emit("mouseup", a)
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function () {},
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function () {}
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._label
            }
        }
    }),
    ie = _(c, b, function (a) {
        this._tabs = a,
        this.addListeners()
    }, {
        handle_mousewheel: function (a) {
            this.handleScroll(a, a.wheelDelta / 40 * 10)
        },
        handle_DOMMouseScroll: function (a) {
            this.handleScroll(a, 10 * -a.detail)
        },
        handleScroll: function (a, b) {
            K(a);
            var c = this._tabs,
            d = c._tabPosition;
            c.hScrollable && ["top", "bottom"].indexOf(d) >= 0 && (c.translateX = this._tabs.translateX + b),
            c.vScrollable && ["left", "right", "left-vertical", "right-vertical"].indexOf(d) >= 0 && (c.translateY = this._tabs.translateY + b)
        },
        getTabInfoAt: function (a) {
            var b,
            d,
            e = this._tabs,
            f = e._tabPosition,
            g = e._tabInfos;
            if (["top", "bottom"].indexOf(f) >= 0) {
                var h = e.lp(a).x;
                for (b = 0; b < g.length; b++)
                    if (d = g[b], d.startX <= h && h <= d.endX)
                        return d
            } else if (["left", "right", "left-vertical", "right-vertical"].indexOf(f) >= 0) {
                var i = e.lp(a).y;
                for (b = 0; b < g.length; b++)
                    if (d = g[b], d.startY <= i && i <= d.endY)
                        return d
            }
            return c
        },
        isClickable: function (a) {
            var b = this._tabs,
            c = b._tabPosition,
            d = this._tabInfo = this.getTabInfoAt(a);
            return b.hScrollable && ["top", "bottom"].indexOf(c) >= 0 ? !0 : b.vScrollable && ["left", "right", "left-vertical", "right-vertical"].indexOf(c) >= 0 ? !0 : d && (!d.tab.disabled || b.movable)
        },
        handle_mousemove: function (a) {
            var b = this;
            Ab() ? b._tabInfo2 = b.getTabInfoAt(a) : b.view.style.cursor = b.isClickable(a) ? "pointer" : ""
        },
        handle_mousedown: function (a) {
            this.handle_mousemove(a),
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b._tabs,
            d = c._tabPosition;
            K(a),
            b.isClickable(a) && (["top", "bottom"].indexOf(d) >= 0 ? (b._x = xa(a).x, b._lp = c.lp(a), b._tx = c.translateX) : (b._y = xa(a).y, b._lp = c.lp(a), b._ty = c.translateY), Bb(b, a))
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b,
            c = this,
            d = c._tabs,
            e = d._tabPosition,
            f = c._tabInfo;
            if (["top", "bottom"].indexOf(e) >= 0) {
                if (b = xa(a).x - c._x, !c._translating && !c._moving && n(b) > 2 && (d.hScrollable && !Fb(a) ? c._translating = 1 : f && d.movable && (c._moving = 1)), c._translating)
                    d.translateX = c._tx + b;
                else if (c._moving) {
                    var g = c._lp.x + b,
                    h = d._tabGap / 2;
                    d._tabInfos.forEach(function (a) {
                        var c = a.endX,
                        e = g - a.startX < c - g;
                        g >= a.startX && c >= g && (d.movingTabInfo = {
                                tab: f.tab,
                                startX: f.startX + b,
                                width: f.width,
                                front: e,
                                insertTab: a.tab,
                                position: e ? l(0, a.startX - h) : m(d._sumWidth, c + h)
                            })
                    })
                }
            } else if (b = xa(a).y - c._y, !c._translating && !c._moving && n(b) > 2 && (d.vScrollable && !Fb(a) ? c._translating = 1 : f && d.movable && (c._moving = 1)), c._translating)
                d.translateY = c._ty + b;
            else if (c._moving) {
                var i = c._lp.y + b,
                h = d._tabGap / 2;
                d._tabInfos.forEach(function (a) {
                    var c = a.endY,
                    e = i - a.startY < c - i;
                    i >= a.startY && c >= i && (d.movingTabInfo = {
                            tab: f.tab,
                            startY: f.startY + b,
                            height: f.height,
                            front: e,
                            insertTab: a.tab,
                            position: e ? l(0, a.startY - h) : m(d._sumHeight, c + h)
                        })
                })
            }
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function () {
            var a = this,
            b = a._tabs,
            d = b._tabPosition,
            e = b.tabModel,
            f = e._roots,
            g = a._tabInfo;
            if (a._moving) {
                var h = b.movingTabInfo;
                if (h && h.insertTab !== h.tab) {
                    var i = h.tab,
                    j = Va(f, i),
                    k = f.indexOf(h.insertTab);
                    k >= 0 && (h.front || k++, k <= f.length && (Ua(f, i, k), e.emit("hierarchyChange", {
                                data: i,
                                oldIndex: j,
                                newIndex: k
                            })))
                }
                b.movingTabInfo = c,
                delete a._moving
            } else if (!a._translating && g) {
                i = g.tab;
                var l = a._tabInfo2;
                if (!l || l.tab === i)
                    if (!i.disabled && fb(g.closeRect, a._lp)) {
                        var m = f.indexOf(i);
                        e.remove(i),
                        b.onTabClose(i, m)
                    } else
                        i.disabled || b.currentTab === i || (e.selectionModel.selection = i)
            }
            a._translating = ["top", "bottom"].indexOf(d) >= 0 ? a._tabInfo = a._tabInfo2 = a._x = a._lp = a._tx = c : a._tabnameInfo = a._tabInfo2 = a._y = a._lp = a._ty = c
        }
    }, {
        interactor: 1
    }, {
        view: {
            get: function () {
                return this._tabs._titleDiv
            }
        }
    });
    G(x, {
        selectable: !0,
        visible: !0,
        movable: !0,
        "pixel.perfect": !0,
        "image.stretch": "fill",
        "body.color": d,
        "body.alpha": 1,
        "border.color": d,
        "border.width": 2,
        "border.padding": 2,
        "border.type": "rect",
        "select.color": L,
        "select.width": 1,
        "select.padding": 2,
        "select.type": "rect",
        "shadow.blur": 6,
        "shadow.offset.x": 3,
        "shadow.offset.y": 3,
        "shadow.color": O,
        shape: d,
        "shape.repeat.image": d,
        "shape.info": d,
        "shape.cap": ka,
        "shape.join": ja,
        "shape.background": U,
        "shape.gradient": d,
        "shape.gradient.color": W,
        "shape.border.width": 2,
        "shape.border.color": V,
        "shape.border.gradient": !1,
        "shape.border.gradient.color": d,
        "shape.border.dash.pattern": d,
        "shape.border.dash.offset": 0,
        "shape.border2.width": 0,
        "shape.border2.color": V,
        "shape.border2.gradient": !1,
        "shape.border2.gradient.color": d,
        "shape.border2.dash.pattern": d,
        "shape.border2.dash.offset": 0,
        label: d,
        "label.font": I,
        "label.color": M,
        "label.background": d,
        "label.position": 31,
        "label.offset.x": 0,
        "label.offset.y": 2,
        "label.rotation": d,
        "label.max": d,
        "label.scale": {
            x: 1,
            y: 1
        },
        "label.alpha": 1,
        "label.align": "center",
        "label.padding": 0,
        "label.corner.radius": 0,
        label2: d,
        "label2.font": I,
        "label2.color": M,
        "label2.background": d,
        "label2.position": 34,
        "label2.offset.x": 0,
        "label2.offset.y": 2,
        "label2.rotation": d,
        "label2.max": d,
        "label2.scale": {
            x: 1,
            y: 1
        },
        "label2.alpha": 1,
        "label2.align": "center",
        "label2.padding": 0,
        "label2.corner.radius": 0,
        note: d,
        "note.expanded": !0,
        "note.font": I,
        "note.color": M,
        "note.background": T,
        "note.position": 8,
        "note.offset.x": -3,
        "note.offset.y": 3,
        "note.max": d,
        "note.toggleable": !0,
        "note.border.width": 1,
        "note.border.color": d,
        "note.scale": {
            x: 1,
            y: 1
        },
        "note.alpha": 1,
        "note.align": "center"
    }, !0),
    Ha(Qc.prototype, "indexAdjustable"),
    G(Qc, {
        _indexAdjustable: !0,
        prepareRemove: function (a) {
            a._attaches && Fa(a._attaches).forEach(function (a) {
                a.host = c
            }),
            a._host && (a.host = c)
        },
        onAdd: function (a) {
            this.adjustIndex(a)
        },
        onDataPropertyChange: function (a) {
            je[a.property] && this.adjustIndex(a.data)
        },
        adjustIndex: function (a) {
            this.indexAdjustable && this.sendToTop(a)
        },
        sendToTop: function (a) {
            var b = this;
            if (b.contains(a) && se(a)) {
                var c = b._datas;
                if (a !== c[b.length - 1]) {
                    var d = c.indexOf(a);
                    c.splice(d, 1),
                    c.push(a),
                    b.emit("indexChange", {
                        data: a,
                        oldIndex: d,
                        newIndex: b.length - 1
                    })
                }
                a._attaches && a._attaches.forEach(function (c) {
                    c.isDescendantOf(a) || a.isDescendantOf(c) || se(a) && c.isLoopedHostOn(a) || b.sendToTop(c)
                }),
                a.ISubGraph || se(a) && a.children.forEach(function (a) {
                    b.sendToTop(a)
                })
            }
        },
        sendToBottom: function (a, b) {
            var c = this;
            if (a !== b && c.contains(a) && se(a) && (!b || c.contains(b))) {
                var d = c._datas,
                e = Va(d, a),
                f = b ? d.indexOf(b) : 0;
                if (d.splice(f, 0, a), e !== f) {
                    c.emit("indexChange", {
                        data: a,
                        oldIndex: e,
                        newIndex: f
                    });
                    var g = a._parent;
                    g && !g.ISubGraph && c.sendToBottom(a._parent, a)
                }
            }
        }
    });
    var je = {
        sourceAgent: !0,
        targetAgent: !0,
        expanded: !0,
        parent: !0,
        host: !0
    },
    ke = {
        points: !0,
        anchor: !0
    },
    zc = {
        translateX: !0,
        translateY: !0,
        zoom: !0,
        scrollBarMode: !0
    };
    ba("node_icon", {
        width: 16,
        height: 16,
        comps: [{
                type: "rect",
                rect: [2, 2, 12, 10],
                gradient: la,
                gradientColor: Z,
                background: Y
            }, {
                type: "border",
                rect: [2, 2, 12, 10],
                borderWidth: 1,
                borderColor: Y
            }, {
                type: "rect",
                rect: [6, 12, 4, 2],
                background: Y
            }, {
                type: "rect",
                rect: [4, 14, 8, 1],
                background: Y
            }
        ]
    }),
    ba("node_image", {
        width: 30,
        height: 30,
        comps: [{
                type: "rect",
                rect: [4, 5, 22, 16],
                gradient: la,
                gradientColor: Z,
                background: Y
            }, {
                type: "rect",
                rect: [2, 3, 26, 20],
                borderWidth: 1,
                borderColor: Y
            }, {
                type: "rect",
                rect: [11, 23, 8, 4],
                background: Y
            }, {
                type: "rect",
                rect: [6, 27, 18, 2],
                background: Y
            }
        ]
    }),
    ba("subGraph_icon", {
        width: 16,
        height: 16,
        comps: [{
                type: "shape",
                points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
                segments: [1, 3, 3, 3, 3, 3],
                gradient: la,
                gradientColor: Z,
                background: Y
            }
        ]
    }),
    ba("subGraph_image", {
        width: 72,
        height: 45,
        comps: [{
                type: "shape",
                points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
                segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
                gradient: la,
                gradientColor: Z,
                background: Y
            }
        ]
    }),
    ba("shape_icon", {
        width: 16,
        height: 16,
        comps: [{
                type: "shape",
                points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
                background: Y
            }
        ]
    });
    var le = function (a, b, c, d) {
        var e = 1 - a;
        return e * e * b + 2 * a * e * c + a * a * d
    },
    me = function (a, b, c, d, e) {
        var f = a * a,
        g = 1 - a,
        h = g * g;
        return g * h * b + 3 * h * a * c + 3 * g * f * d + a * f * e
    },
    ne = function (a) {
        var b = k(a.x * a.x + a.y * a.y);
        b && (a.x /= b, a.y /= b)
    },
    oe = function (a, b, c, d) {
        if (b && b.length) {
            c = c || 20;
            for (var e, f, g, h, i, j, k, l, g, m = [], n = 0, o = 0, p = b.length; p > o; o++)
                if (h = b[o], 1 === h)
                    m.push(e = []), e.push(a[n++]);
                else if (2 === h)
                    e.push(a[n++]);
                else if (3 === h)
                    for (i = e[e.length - 1], j = a[n++], k = a[n++], f = 1; c >= f; f++)
                        g = f / c, e.push({
                            x: le(g, i.x, j.x, k.x),
                            y: le(g, i.y, j.y, k.y)
                        });
                else if (4 === h)
                    for (i = e[e.length - 1], j = a[n++], k = a[n++], l = a[n++], f = 1; c >= f; f++)
                        g = f / c, e.push({
                            x: me(g, i.x, j.x, k.x, l.x),
                            y: me(g, i.y, j.y, k.y, l.y)
                        });
                else
                    5 === h && e.push(e[0]);
            return d && 5 !== h && e && e.length && e.push(e[0]),
            m
        }
        return d && a.length && (a = Fa(a), a.push(a[0])),
        [a]
    },
    $a = function (a, b, c, d) {
        for (var e, f, g = oe(a, b, c, d), h = [], i = 0, j = 0; j < g.length; j++) {
            for (var a = g[j], k = 0; k < a.length; k++) {
                e = a[k],
                f && (i += ab(f, e));
                var l,
                m = a[k + 1];
                l = m ? {
                    x: m.x - e.x,
                    y: m.y - e.y
                }
                 : f ? {
                    x: e.x - f.x,
                    y: e.y - f.y
                }
                 : {
                    x: 1,
                    y: 0
                },
                ne(l),
                h.push({
                    point: e,
                    length: i,
                    tangent: l
                }),
                f = e
            }
            f = null
        }
        return h.sumLength = i,
        h
    },
    Za = function (a, b) {
        for (var c, d = 0, e = a.length, f = 0, g = e - 1; g >= f; )
            if (d = i(f + (g - f) / 2), c = a[d].length - b, 0 > c)
                f = d + 1;
            else {
                if (!(c > 0)) {
                    g = d;
                    break
                }
                g = d - 1
            }
        d = g;
        var h = a[d],
        j = h.point;
        if (d === e - 1 || h.length === b);
        else {
            var k = a[d + 1].point,
            l = {
                x: k.x - j.x,
                y: k.y - j.y
            };
            ne(l),
            b -= h.length,
            l.x *= b,
            l.y *= b,
            l.x += j.x,
            l.y += j.y,
            j = l
        }
        return {
            point: j,
            tangent: h.tangent
        }
    },
    Ya = function (a, b, c) {
        b = b || 100;
        var d = [];
        a.length && c && a.push(a[0]);
        for (var e = 0; b >= e; e++)
            d.push(qe(a, e / b));
        return d
    },
    pe = function (a, b, c, d, e) {
        var f = e * e,
        g = f * e,
        h = .5 * (c - a),
        i = .5 * (d - b);
        return (2 * (b - c) + h + i) * g + (-3 * (b - c) - 2 * h - i) * f + h * e + b
    },
    qe = function (a, b) {
        var c,
        d,
        e,
        f,
        g,
        h = a.length - 1,
        j = h * b,
        k = i(j);
        return a[0].x === a[h].x && a[0].y === a[h].y ? (0 > b && (k = i(j = h * (1 + b))), d = a[(k - 1 + h) % h], e = a[k % h], f = a[(k + 1) % h], g = a[(k + 2) % h], c = j - k, {
            x: pe(d.x, e.x, f.x, g.x, c),
            y: pe(d.y, e.y, f.y, g.y, c)
        }) : 0 > b ? (d = a[0], e = a[0], f = a[1], g = a[1], c = -j, {
            x: a[0].x - (pe(d.x, e.x, f.x, g.x, c) - a[0].x),
            y: a[0].y - (pe(d.y, e.y, f.y, g.y, c) - a[0].y)
        }) : b > 1 ? (d = a[h], e = a[h], f = a[h - 1], g = a[h - 1], c = j - h, {
            x: a[h].x - (pe(d.x, e.x, f.x, g.x, c) - a[h].x),
            y: a[h].y - (pe(d.y, e.y, f.y, g.y, c) - a[h].y)
        }) : (d = a[k ? k - 1 : 0], e = a[k], f = a[k + 1 > h ? h : k + 1], g = a[k + 2 > h ? h : k + 2], c = j - k, {
            x: pe(d.x, e.x, f.x, g.x, c),
            y: pe(d.y, e.y, f.y, g.y, c)
        })
    },
    re = function (a) {
        if (!a)
            return c;
        var b = a._parent;
        return b ? b.ISubGraph ? b : re(b) : c
    },
    se = function (a) {
        return a instanceof ze
    },
    te = function (a, b, c) {
        if (0 !== b || 0 !== c) {
            var d,
            e,
            f,
            g = [];
            a.forEach(function (a) {
                if (se(a)) {
                    var b = !0;
                    if (f)
                        for (d = 0; d < f.length; d++)
                            e = f[d], e.isHostOn(a) ? (f.splice(d, 1), d--, Va(g, e)) : b && (a.isHostOn(e) || a.isLoopedHostOn(e)) && (b = !1);
                    b && (g.push(a), (a._host || a._attaches) && (f || (f = []), f.push(a)))
                }
            }),
            g.forEach(function (a) {
                a.translate(b, c)
            })
        }
    },
    ue = function (a, b, c) {
        var d = a._position,
        e = a._scale,
        f = new Ea(-a.rotation).tf(b - d.x, c - d.y);
        return f.x /= e.x,
        f.y /= e.y,
        f
    },
    ve = function (a, b, c) {
        var d = a._scale;
        b *= d.x,
        c *= d.y;
        var e = a._position,
        f = new Ea(a.rotation).tf(b, c);
        return f.x += e.x,
        f.y += e.y,
        f
    },
    we = function (a) {
        var b = a._position,
        c = a._anchor,
        d = a.width,
        e = a.height,
        f = new Ea(a._rotation),
        g = a._scale,
        h = g.x,
        i = g.y,
        j = {
            x: -d * c.x,
            y: -e * c.y,
            width: d,
            height: e
        };
        j.x *= h,
        j.width *= h,
        j.y *= i,
        j.height *= i;
        var k = [f.tf(j.x, j.y), f.tf(j.x + j.width, j.y), f.tf(j.x + j.width, j.y + j.height), f.tf(j.x, j.y + j.height)];
        return k.forEach(function (a) {
            a.x += b.x,
            a.y += b.y
        }),
        k
    },
    xe = function (a, b) {
        if (b) {
            var c = b.rect,
            d = b.color,
            e = b.rotation,
            f = b.labelWidth,
            g = b.background,
            h = b.padding,
            i = b.alpha,
            j = b.scale;
            if (1 !== i) {
                var k = a.globalAlpha;
                a.globalAlpha *= i
            }
            if (e || j) {
                a.save();
                var l = c.x + c.width / 2,
                m = c.y + c.height / 2;
                Xb(a, l, m),
                e && Yb(a, e),
                j && a.scale(j.x, j.y),
                Xb(a, -l, -m)
            }
            if (g && (a.beginPath(), vb(a, c.x - h, c.y - h, c.width + 2 * h, c.height + 2 * h, b.cornerRadius), a.fillStyle = g, a.fill()), f) {
                var n = c.width,
                o = a.createLinearGradient(c.x, c.y, c.x + n, c.y);
                o.addColorStop(0, d),
                o.addColorStop(.9, d),
                o.addColorStop(1, S),
                d = o,
                c.width = f
            }
            zb(a, b.ss, c, b.font, d, b.align),
            f && (c.width = n),
            (e || j) && a.restore(),
            1 !== i && (a.globalAlpha = k)
        }
    },
    ye = function (a, b) {
        if (b) {
            var c = b.rect,
            d = c.x,
            e = c.y,
            f = c.width,
            g = c.height,
            h = b.background,
            i = b.borderWidth,
            j = b.borderColor,
            k = b.labelWidth,
            l = b.alpha,
            n = b.scale;
            if (1 !== l) {
                var o = a.globalAlpha;
                a.globalAlpha *= l
            }
            if (n) {
                a.save();
                var p = c.x + c.width / 2,
                t = c.y + c.height / 2;
                Xb(a, p, t),
                a.scale(n.x, n.y),
                Xb(a, -p, -t)
            }
            if (b.expanded) {
                var u = m(8, f / 4),
                v = e + g - 8;
                if (a.fillStyle = h, a.beginPath(), a.moveTo(d, e), a.lineTo(d, v), a.lineTo(d + f / 2, v), a.lineTo(d + f / 2, e + g), a.lineTo(d + f / 2 + u, v), a.lineTo(d + f, v), a.lineTo(d + f, e), a.closePath(), a.fill(), i && (a.lineWidth = i, a.lineJoin = "round", a.lineCap = "round", a.strokeStyle = j ? j : mb(h), a.beginPath(), a.moveTo(d + f, e), a.lineTo(d + f, v), a.lineTo(d + f / 2 + u, v), a.lineTo(d + f / 2, e + g), a.stroke(), a.strokeStyle = j ? j : lb(h), a.beginPath(), a.moveTo(d + f, e), a.lineTo(d, e), a.lineTo(d, v), a.lineTo(d + f / 2, v), a.lineTo(d + f / 2, e + g), a.stroke()), c.height -= 8, h = b.color, k) {
                    var w = f,
                    x = a.createLinearGradient(d, e, d + w, e);
                    x.addColorStop(0, h),
                    x.addColorStop(.9, h),
                    x.addColorStop(1, S),
                    h = x,
                    c.width = k
                }
                zb(a, b.ss, c, b.font, h, b.align),
                k && (c.width = w),
                c.height += 8
            } else {
                var y = f / 2;
                i && (a.lineWidth = i, a.lineJoin = "round", a.lineCap = "round", a.strokeStyle = j ? j : mb(h), a.beginPath(), a.arc(d + y, e + y, y, s, 1.6 * q, !0), a.moveTo(d + y, e + g), a.lineTo(d + f - y / 5, e + y), a.stroke(), a.strokeStyle = j ? j : lb(h), a.beginPath(), a.arc(d + y, e + y, y, 1.6 * q, s, !0), a.moveTo(d + y, e + g), a.lineTo(d + y / 5, e + y), a.stroke()),
                a.fillStyle = h,
                a.beginPath(),
                a.arc(d + y, e + y, y, 0, r, !0),
                a.moveTo(d + y, e + g),
                a.lineTo(d + f - y / 5, e + y),
                a.lineTo(d + y / 5, e + y),
                a.closePath(),
                a.fill(),
                a.fillStyle = b.color,
                a.beginPath(),
                a.arc(d + y, e + y, y / 3, 0, r, !0),
                a.fill()
            }
            n && a.restore(),
            1 !== l && (a.globalAlpha = o)
        }
    },
    ze = _("qc.widget.graph.Node", Pc, function $e(a) {
        $e["super"].constructor.call(this, a)
    }, {
        _icon: "node_icon",
        _image: "node_image",
        _rotation: 0,
        _position: {
            x: 0,
            y: 0
        },
        _anchor: {
            x: .5,
            y: .5
        },
        _scale: {
            x: 1,
            y: 1
        },
        setPosition: function (a, b) {
            var c = this;
            if (!c._updatingPosition) {
                c._updatingPosition = !0;
                var d;
                if (d = 2 === arguments.length ? {
                        x: a,
                        y: b
                    }
                     : a, d.x !== c._position.x || d.y !== c._position.y) {
                    var e = c._position;
                    c._position = d,
                    c.epc("position", e, d)
                }
                delete c._updatingPosition
            }
        },
        _addAttach: function (a) {
            var b = this;
            b._attaches || (b._attaches = []),
            b._attaches.push(a),
            b.epc("attaches", c, a)
        },
        _removeAttach: function (a) {
            var b = this;
            Va(b._attaches, a),
            0 === b._attaches.length && delete b._attaches,
            b.epc("attaches", a, c)
        },
        setAnchor: function (a, b) {
            var c,
            d = this;
            if (c = 2 === arguments.length ? {
                    x: a,
                    y: b
                }
                 : a, c.x !== d._anchor.x || c.y !== d._anchor.y) {
                var e = d._anchor;
                d._anchor = c,
                d.epc("anchor", e, c)
            }
        },
        setScale: function (a, b) {
            var c,
            d = this;
            if (c = 2 === arguments.length ? {
                    x: a,
                    y: b
                }
                 : a, c.x !== d._scale.x || c.y !== d._scale.y) {
                var e = d._scale;
                d._scale = c,
                d.epc("scale", e, c)
            }
        },
        translate: function (a, b) {
            var c = this._position;
            this.setPosition(c.x + a, c.y + b)
        },
        setSize: function (a, b) {
            var c = this;
            2 === arguments.length ? (c.width = a, c.height = b) : (c.width = a.width, c.height = a.height)
        },
        onPropertyChange: function (a) {
            var b = this;
            ze["super"].onPropertyChange.call(b, a),
            b._attaches && b._attaches.forEach(function (b) {
                b.handleHostPropertyChange(a)
            })
        },
        handleHostPropertyChange: function (a) {
            w.deserializing || "position" === a.property && this.translate(a.newValue.x - a.oldValue.x, a.newValue.y - a.oldValue.y)
        },
        isHostOn: function (a) {
            var b = this;
            if (b._host && a && a._attaches)
                for (var c = {}, d = b._host; d && d !== b && !c[d.uuid]; ) {
                    if (d === a)
                        return !0;
                    c[d.uuid] = d,
                    d = d._host
                }
            return !1
        },
        isLoopedHostOn: function (a) {
            return this.isHostOn(a) && a.isHostOn(this)
        }
    }, c, {
        uiClass: {
            get: function () {
                return Ce
            }
        },
        attaches: {
            get: function () {
                return this._attaches
            }
        },
        host: {
            get: function () {
                return this._host
            },
            set: function (a) {
                var b = this;
                if (b !== a && b._host !== a) {
                    var c = b._host;
                    c && c._removeAttach(b),
                    b._host = a,
                    b._host && b._host._addAttach(b),
                    b.epc("host", c, a)
                }
            }
        },
        image: {
            get: function () {
                return this._image
            },
            set: function (a) {
                var b = this,
                c = b._image,
                d = b.width,
                e = b.height;
                b._image = a,
                b.epc("image", c, a),
                b.epc("width", d, b.width),
                b.epc("height", e, b.height)
            }
        },
        position: {
            get: function () {
                return this._position
            },
            set: function (a) {
                this.setPosition(a.x, a.y)
            }
        },
        x: {
            get: function () {
                return this.position.x
            },
            set: function (a) {
                this.setPosition(a, this.y)
            }
        },
        y: {
            get: function () {
                return this.position.y
            },
            set: function (a) {
                this.setPosition(this.x, a)
            }
        },
        anchor: {
            get: function () {
                return this._anchor
            },
            set: function (a) {
                this.setAnchor(a.x, a.y)
            }
        },
        scale: {
            get: function () {
                return this._scale
            },
            set: function (a) {
                this.setScale(a.x, a.y)
            }
        },
        rotation: {
            get: function () {
                return this._rotation
            },
            set: function (a) {
                var b = this;
                if (!b._updatingRotation) {
                    b._updatingRotation = !0;
                    var c = b._rotation;
                    b._rotation = a,
                    b.epc("rotation", c, a),
                    delete b._updatingRotation
                }
            }
        },
        width: {
            get: function () {
                var a = this;
                if (a._width >= 0)
                    return a._width;
                var b = ca(a._image);
                return b ? ac(b, a) : 20
            },
            set: function (a) {
                var b = this,
                c = b._width;
                b._width = a,
                b.epc("width", c, a)
            }
        },
        height: {
            get: function () {
                var a = this;
                if (a._height >= 0)
                    return a._height;
                var b = ca(a._image);
                return b ? bc(b, a) : 20
            },
            set: function (a) {
                var b = this,
                c = b._height;
                b._height = a,
                b.epc("height", c, a)
            }
        },
        size: {
            get: function () {
                return {
                    width: this.width,
                    height: this.height
                }
            },
            set: function (a) {
                this.width = a.width,
                this.height = a.height
            }
        },
        rect: {
            get: function () {
                var a = this,
                b = a._position,
                c = a._anchor,
                d = a.width,
                e = a.height,
                f = {
                    x: -d * c.x,
                    y: -e * c.y,
                    width: d,
                    height: e
                },
                g = a._scale,
                h = g.x,
                i = g.y;
                1 !== h && (f.x *= h, f.width *= h),
                1 !== i && (f.y *= i, f.height *= i),
                bb(f);
                var j = a._rotation;
                if (j) {
                    var k = new Ea(j);
                    f = db([k.tf(f.x, f.y), k.tf(f.x + f.width, f.y), k.tf(f.x + f.width, f.y + f.height), k.tf(f.x, f.y + f.height)])
                }
                return f.x += b.x,
                f.y += b.y,
                f
            },
            set: function (a) {
                this.setSize(a.width, a.height),
                this.setPosition(a.x + a.width * this.anchor.x, a.y + a.height * this.anchor.y)
            }
        },
        serializableProperties: {
            get: function () {
                var a = ze.getSuperProperty(this, "serializableProperties");
                return G(a, {
                    image: !0,
                    host: !0,
                    rotation: !0,
                    position: !0,
                    anchor: !0,
                    width: !0,
                    height: !0
                }),
                a
            }
        }
    }),
    Ae = (_("qc.widget.graph.SubGraph", ze, function _e(a) {
            _e["super"].constructor.call(this, a)
        }, {
            ISubGraph: !0,
            _image: "subGraph_image",
            _icon: "subGraph_icon"
        }), _("qc.widget.graph.Shape", ze, function af(a) {
            af["super"].constructor.call(this, a),
            this._points = []
        }, {
            _icon: "shape_icon",
            _closePath: !1,
            setPosition: function (a, b) {
                var c,
                d = this;
                if (!d._updatingShapePosition) {
                    if (d._updatingShapePosition = !0, !d._updatingShape && !w.deserializing) {
                        c = 2 === arguments.length ? {
                            x: a,
                            y: b
                        }
                         : a;
                        var e = c.x - d._position.x,
                        f = c.y - d._position.y;
                        if (0 === e && 0 === f)
                            return void delete d._updatingShapePosition;
                        d._updatingShape = !0;
                        var g = [];
                        d._points.forEach(function (a) {
                            g.push({
                                x: a.x + e,
                                y: a.y + f
                            })
                        }),
                        d.points = g,
                        delete d._updatingShape
                    }
                    Ae["super"].setPosition.apply(d, arguments),
                    delete d._updatingShapePosition
                }
            },
            onPropertyChange: function (a) {
                Ae["super"].onPropertyChange.call(this, a),
                ke[a.property] && this.emitShapeChange()
            },
            emitShapeChange: function () {
                var a = this;
                if (!a._updatingShape && !w.deserializing) {
                    var b = db(a._points);
                    b && (a._updatingShape = !0, a.rect = b, delete a._updatingShape)
                }
                a.epc("shape", !1, !0)
            }
        }, {
            properties: ["points", "segments", "closePath"]
        }, {
            uiClass: {
                get: function () {
                    return De
                }
            },
            width: {
                get: function () {
                    return Ae.getSuperProperty(this, "width")
                },
                set: function (a) {
                    var b = this;
                    if (.01 > a && (a = .01), !b._updatingShape && !w.deserializing && b.width) {
                        b._updatingShape = !0;
                        var c = b._position.x,
                        d = a / b.width,
                        e = [];
                        b._points.forEach(function (a) {
                            e.push({
                                x: (a.x - c) * d + c,
                                y: a.y
                            })
                        }),
                        b.points = e,
                        delete b._updatingShape
                    }
                    Ae.setSuperProperty(this, "width", a)
                }
            },
            height: {
                get: function () {
                    return Ae.getSuperProperty(this, "height")
                },
                set: function (a) {
                    var b = this;
                    if (.01 > a && (a = .01), !b._updatingShape && !w.deserializing && b.height) {
                        b._updatingShape = !0;
                        var c = b._position.y,
                        d = a / b.height,
                        e = [];
                        b._points.forEach(function (a) {
                            e.push({
                                x: a.x,
                                y: (a.y - c) * d + c
                            })
                        }),
                        b.points = e,
                        delete b._updatingShape
                    }
                    Ae.setSuperProperty(this, "height", a)
                }
            },
            serializableProperties: {
                get: function () {
                    var a = Ae.getSuperProperty(this, "serializableProperties");
                    return G(a, {
                        points: !0,
                        segments: !0,
                        closePath: !0
                    }),
                    a
                }
            }
        }));
    _("qc.widget.graph.Serializer", b, function (a) {
        this._dataModel = a,
        this._game = a.game
    }, {
        serialize: function (a) {
            return JSON.stringify(this.toJSON(), function (a, b) {
                return Oa(b) ? mc(b) : b
            }, a == c ? 2 : a)
        },
        toJSON: function () {
            var a = this,
            b = a._dataModel,
            c = a.json = {
                v: w.version,
                d: [],
                a: {}
            },
            d = b.serializableAttrs;
            for (var e in d) {
                var f = b.a(e);
                a.serializeValue(e, f, c.a)
            }
            return Cb(c.a) && delete c.a,
            b.roots.forEach(a.serializeData, this),
            c
        },
        isSerializable: function () {
            return !0
        },
        serializeData: function (a) {
            var b = this;
            if (b.isSerializable(a)) {
                var c,
                d,
                e,
                f = a["class"],
                g = b._game ? new f(b._game) : new f,
                h = {
                    c: a.className,
                    i: a.uuid,
                    p: {},
                    s: {},
                    a: {}
                };
                b.json.d.push(h),
                c = a.serializableProperties;
                for (d in c)
                    e = a[d], e !== g[d] && b.serializeValue(d, e, h.p);
                c = a.serializableStyles;
                for (d in c)
                    e = a.s(d), e !== g.s(d) && b.serializeValue(d, e, h.s);
                c = a.serializableAttrs;
                for (d in c)
                    e = a.a(d), e !== g.a(d) && b.serializeValue(d, e, h.a);
                Cb(h.p) && delete h.p,
                Cb(h.s) && delete h.s,
                Cb(h.a) && delete h.a
            }
            a.children.forEach(b.serializeData, b)
        },
        deserialize: function (a, b) {
            w.deserializing = !0;
            var c = this;
            a = c.json = Pa(a) ? JSON.parse(a.replace(/\n/g, "")) : a,
            c.uuidMap = {};
            for (var d = c._dataModel, e = [], f = [], g = 0, h = a.d.length; h > g; g++) {
                var i = a.d[g],
                j = w.Class[i.c],
                k = c._game ? new j(c._game) : new j;
                c.uuidMap[i.i] = k,
                e.push(k),
                f.push(i)
            }
            for (g = 0; h > g; g++)
                c.deserializeData(e[g], f[g]);
            e.forEach(function (a) {
                b && !a.parent && (a.parent = b),
                d.add(a)
            });
            for (var l in a.a)
                d.a(l, c.deserializeValue(a.a[l]));
            return w.deserializing = !1,
            e
        },
        deserializeData: function (a, b) {
            for (name in b.s)
                a.s(name, this.deserializeValue(b.s[name]));
            for (name in b.a)
                a.a(name, this.deserializeValue(b.a[name]));
            for (name in b.p)
                a[name] = this.deserializeValue(b.p[name])
        },
        serializeValue: function (a, b, c) {
            b instanceof Pc && (b = {
                    __uuid: b.uuid
                }),
            c[a] = b
        },
        deserializeValue: function (a) {
            return Ra(a) && a.__uuid != c ? this.uuidMap[a.__uuid] : a
        }
    });
    var Be = _(c, b, function (a, b) {
        var c = this;
        c.gv = a,
        c.data = b,
        c.rects = [],
        c.s = function (a) {
            return b.getStyle(a)
        }
    }, {
            selectWidthVisible: !0,
            getRotation: function (a) {
                return a == c ? 0 : a
            },
            invalidate: function () {
                this._bounds = c
            },
            prepare: function () {},
            getPosition: function (a, b, c, d) {
                if (this.positionRect) {
                    var e = Nc(a, this.positionRect, d);
                    return e.x += b,
                    e.y += c,
                    e
                }
                return qa
            },
            addRect: function (a, b) {
                a && this.rects.push(jb(a, b))
            },
            draw: function (a) {
                var b = this,
                c = b.s,
                d = c("body.alpha"),
                e = this.shadowed;
                if (e) {
                    var f = a.shadowOffsetX,
                    g = a.shadowOffsetY,
                    h = a.shadowBlur,
                    i = a.shadowColor;
                    a.shadowOffsetX = c("shadow.offset.x"),
                    a.shadowOffsetY = c("shadow.offset.y"),
                    a.shadowBlur = c("shadow.blur"),
                    a.shadowColor = c("shadow.color")
                }
                if (1 !== d) {
                    var j = a.globalAlpha;
                    a.globalAlpha *= d
                }
                b.drawBody(a),
                1 !== d && (a.globalAlpha = j),
                xe(a, b.labelInfo),
                xe(a, b.label2Info),
                ye(a, b.noteInfo),
                e && (a.shadowOffsetX = f, a.shadowOffsetY = g, a.shadowBlur = h, a.shadowColor = i)
            },
            drawBody: function () {},
            updateLabel: function (a, b) {
                var d = this,
                e = d.data,
                f = d.gv,
                g = d.s,
                h = f[b](e);
                if (h != c) {
                    var i = g(a + ".scale"),
                    j = g(a + ".max"),
                    k = g(a + ".position"),
                    l = d[a + "Info"] = {
                        label: h,
                        color: f[b + "Color"](e),
                        font: g(a + ".font"),
                        alpha: g(a + ".alpha"),
                        rotation: d.getRotation(g(a + ".rotation"), !1, k),
                        background: f[b + "Background"](e),
                        cornerRadius: g(a + ".corner.radius")
                    },
                    m = kb(l, h);
                    j > 0 && j < m.width && (l.labelWidth = m.width, m.width = j),
                    Oa(i) && (i = {
                            x: i,
                            y: i
                        }),
                    i && 1 === i.x && 1 === i.y && (i = c),
                    l.scale = i,
                    i && (m.width *= i.x, m.height *= i.y);
                    var o = d.getPosition(k, g(a + ".offset.x"), g(a + ".offset.y"), m, g(a + ".position.fixed"));
                    m.x = o.x - m.width / 2,
                    m.y = o.y - m.height / 2,
                    bb(m);
                    var p = l.rect = m,
                    q = l.padding = g(a + ".padding");
                    if (q && (p = Fa(m), i ? _a(p, q * n(i.x), q * n(i.y)) : _a(p, q)), d.addRect(p, l.rotation), i) {
                        var r = 0 === i.x ? 0 : m.width / n(i.x),
                        s = 0 === i.y ? 0 : m.height / n(i.y);
                        l.rect = {
                            x: o.x - r / 2,
                            y: o.y - s / 2,
                            width: r,
                            height: s
                        }
                    }
                }
            },
            updateNote: function (a, b) {
                var d = this,
                e = d.gv,
                f = d.data,
                g = d.s,
                h = e[b](f);
                if (h != c) {
                    var i,
                    k,
                    l = g(a + ".scale"),
                    m = d[a + "Info"] = {
                        note: h,
                        expanded: g(a + ".expanded"),
                        font: g(a + ".font"),
                        color: e[b + "Color"](f),
                        alpha: g(a + ".alpha"),
                        borderWidth: g(a + ".border.width"),
                        borderColor: g(a + ".border.color"),
                        background: e[b + "Background"](f)
                    },
                    n = d.getPosition(g(a + ".position"), g(a + ".offset.x"), g(a + ".offset.y")),
                    o = n.x,
                    p = n.y;
                    Oa(l) && (l = {
                            x: l,
                            y: l
                        }),
                    l && 1 === l.x && 1 === l.y && (l = c),
                    m.scale = l;
                    var q = l ? l.x : 1,
                    r = l ? l.y : 1;
                    if (m.expanded) {
                        var s = g(a + ".max"),
                        t = kb(m, h);
                        t.width += 6,
                        t.height += 2,
                        s > 0 && s < t.width && (m.labelWidth = t.width, t.width = s),
                        i = t.width,
                        k = t.height + 8,
                        m.hitRect = {
                            x: o - i * q / 2,
                            y: p - k * r,
                            width: i * q,
                            height: k * r * t.height / k
                        }
                    } else
                        i = 12, k = 18, m.hitRect = {
                            x: o - i * q / 2,
                            y: p - k * r,
                            width: i * q,
                            height: k * r
                        };
                    m.rect = {
                        x: o - i / 2,
                        y: p - k * r / 2 - k / 2,
                        width: i,
                        height: k
                    };
                    var u = j(m.borderWidth / 2);
                    d.addRect({
                        x: o - i * q / 2 - u * q,
                        y: p - k * r - u * r,
                        width: i * q + 2 * u * q,
                        height: k * r + 2 * u * r
                    })
                }
            }
        }, c, {
            bounds: {
                get: function () {
                    var a = this,
                    b = a.s;
                    if (!a._bounds) {
                        var d = a.rects;
                        a.positionRect = a.labelInfo = a.label2Info = a.noteInfo = c,
                        d.length = 0,
                        a.prepare(),
                        a.updateLabel("label", "getLabel"),
                        a.updateLabel("label2", "getLabel2"),
                        a.updateNote("note", "getNote");
                        var e;
                        if (d.forEach(function (a) {
                                e = eb(e, a)
                            }), e && a.shadowed) {
                            var f = Fa(e);
                            f.x += b("shadow.offset.x"),
                            f.y += b("shadow.offset.y"),
                            _a(f, b("shadow.blur")),
                            e = eb(e, f)
                        }
                        a._bounds = e,
                        d.length = 0
                    }
                    return a._bounds
                }
            },
            shadowed: {
                get: function () {
                    return this.gv.isSelected(this.data) && "shadow" === this.s("select.type")
                }
            },
            selectWidth: {
                get: function () {
                    var a = this.gv.isSelected(this.data);
                    return a && !this.shadowed && this.selectWidthVisible ? this.s("select.width") : 0
                }
            }
        }),
    Ce = _("qc.widget.graph.NodeUI", Be, function (a, b) {
        Ce["super"].constructor.call(this, a, b)
    }, {
        addExtraRect: function (a, b) {
            var c = this,
            d = c.s,
            e = a.rect;
            (a.borderColor = c.gv.getBorderColor(c.data)) && (a.borderType = d("border.type"), a.borderWidth = d("border.width"), a.borderPadding = d("border.padding"), b = l(b, a.borderPadding + a.borderWidth / 2)),
            (a.selectWidth = c.selectWidth) && (a.selectType = d("select.type"), a.selectColor = d("select.color"), a.selectPadding = d("select.padding"), b = l(b, a.selectPadding + a.selectWidth / 2)),
            b > 0 && (e = Fa(e), _a(e, b)),
            c.addRect(e)
        },
        drawExtra: function (a, b) {
            var c,
            d = this,
            e = b.rect;
            b.borderWidth && (c = b.borderPadding, a.strokeStyle = b.borderColor, a.lineWidth = b.borderWidth, pb(a, b.borderType, {
                    x: e.x - c,
                    y: e.y - c,
                    width: e.width + 2 * c,
                    height: e.height + 2 * c
                }, d.s("shape.info"), d.data, d.gv), a.stroke()),
            b.selectWidth && (c = b.selectPadding, a.strokeStyle = b.selectColor, a.lineWidth = b.selectWidth, pb(a, b.selectType, {
                    x: e.x - c,
                    y: e.y - c,
                    width: e.width + 2 * c,
                    height: e.height + 2 * c
                }, d.s("shape.info"), d.data, d.gv), a.stroke())
        },
        prepare: function () {
            var a = this,
            b = a.data,
            c = a.s("shape"),
            d = a.nodeInfo = {
                shape: c,
                rect: b.rect
            };
            a.positionRect = d.rect,
            a.addExtraRect(d, c ? l(a.s("shape.border.width"), a.s("shape.border2.width")) / 2 : 0)
        },
        drawBody: function (a) {
            var b = this,
            c = b.gv,
            d = b.s,
            e = b.data,
            f = b.nodeInfo,
            g = f.shape,
            h = e._position,
            i = e._rotation,
            j = e._anchor,
            k = e.width,
            l = e.height,
            m = e._scale,
            n = m.x,
            o = m.y,
            p = {
                x: -k * j.x,
                y: -l * j.y,
                width: k,
                height: l
            };
            if (k && l) {
                var q = c.getBodyColor(e);
                if (g) {
                    1 !== n && (p.x *= n, p.width *= n),
                    1 !== o && (p.y *= o, p.height *= o),
                    bb(p),
                    p.x += h.x,
                    p.y += h.y,
                    i && (a.save(), Xb(a, h.x, h.y), Yb(a, i), Xb(a, -h.x, -h.y));
                    var r = q || d("shape.background"),
                    s = ca(d("shape.repeat.image"), q),
                    t = a.lineJoin,
                    u = a.lineCap;
                    a.lineJoin = d("shape.join"),
                    a.lineCap = d("shape.cap"),
                    s ? rb(a, s) : r && qb(a, r, d("shape.gradient"), d("shape.gradient.color"), p),
                    pb(a, g, p, d("shape.info"), e, c),
                    (s || r) && a.fill();
                    var v = d("shape.border.width");
                    if (v) {
                        var w = d("shape.border.color"),
                        x = d("shape.border.dash.pattern");
                        Vb(a, x, d("shape.border.dash.offset")),
                        a.lineWidth = v,
                        a.strokeStyle = w,
                        a.stroke(),
                        d("shape.border.gradient") && xb(a, w, d("shape.border.gradient.color"), v),
                        Wb(a, x)
                    }
                    if (v = d("shape.border2.width")) {
                        var w = d("shape.border2.color"),
                        x = d("shape.border2.dash.pattern");
                        Vb(a, x, d("shape.border2.dash.offset")),
                        a.lineWidth = v,
                        a.strokeStyle = w,
                        a.stroke(),
                        d("shape.border2.gradient") && xb(a, w, d("shape.border2.gradient.color"), v),
                        Wb(a, x)
                    }
                    if ("rect" === g) {
                        var y = d("shape.info");
                        y && wb(a, r, y.depth, p)
                    }
                    a.lineJoin = t,
                    a.lineCap = u,
                    i && a.restore()
                } else {
                    p.x += h.x,
                    p.y += h.y;
                    var z = i || 1 !== n || 1 !== o;
                    z && (a.save(), Xb(a, h.x, h.y), Yb(a, i), a.scale(n, o), Xb(a, -h.x, -h.y)),
                    da(a, e.image, d("image.stretch"), p.x, p.y, p.width, p.height, e, c, q),
                    z && a.restore()
                }
            }
            b.drawExtra(a, f)
        }
    }),
    De = _(c, Ce, function (a, b) {
        De["super"].constructor.call(this, a, b)
    }, {
        prepare: function () {
            var a = this,
            b = a.data,
            c = b.rect,
            d = a.gv.getBorderColor(b),
            e = d ? a.s("border.width") : 0,
            f = l(a.s("shape.border.width"), a.s("shape.border2.width")) / 2;
            a.positionRect = c,
            f += e + a.selectWidth,
            f && (c = Fa(c), _a(c, f)),
            a.addRect(c);
            var g = b._position,
            h = b._points,
            i = b._scale;
            if (1 === i.x && 1 === i.y)
                a.drawPoints = h;
            else {
                var j = a.drawPoints = [];
                h.forEach(function (a) {
                    j.push({
                        x: (a.x - g.x) * i.x + g.x,
                        y: (a.y - g.y) * i.y + g.y
                    })
                })
            }
        },
        drawBody: function (a) {
            var b = this,
            c = b.gv,
            d = b.s,
            e = b.data,
            f = e._position,
            g = e._rotation;
            g && (a.save(), Xb(a, f.x, f.y), Yb(a, g), Xb(a, -f.x, -f.y));
            var h = c.getBodyColor(e),
            i = h || d("shape.background"),
            j = ca(d("shape.repeat.image"), h),
            k = a.lineJoin,
            m = a.lineCap;
            a.lineJoin = d("shape.join"),
            a.lineCap = d("shape.cap"),
            j ? rb(a, j) : i && qb(a, i, d("shape.gradient"), d("shape.gradient.color"), b.positionRect),
            yb(a, b.drawPoints, e._segments, e._closePath),
            (j || i) && a.fill();
            var n = b.selectWidth,
            o = c.getBorderColor(e),
            p = o ? d("border.width") : 0,
            q = d("shape.border.width"),
            r = d("shape.border2.width"),
            s = l(q, r);
            if (n && (a.strokeStyle = d("select.color"), a.lineWidth = s + 2 * (p + n), a.stroke()), p && (a.strokeStyle = o, a.lineWidth = s + 2 * p, a.stroke()), q) {
                var o = d("shape.border.color"),
                t = d("shape.border.dash.pattern");
                Vb(a, t, d("shape.border.dash.offset")),
                a.lineWidth = q,
                a.strokeStyle = o,
                a.stroke(),
                d("shape.border.gradient") && xb(a, o, d("shape.border.gradient.color"), q),
                Wb(a, t)
            }
            if (r) {
                var o = d("shape.border2.color"),
                t = d("shape.border2.dash.pattern");
                Vb(a, t, d("shape.border2.dash.offset")),
                a.lineWidth = r,
                a.strokeStyle = o,
                a.stroke(),
                d("shape.border2.gradient") && xb(a, o, d("shape.border2.gradient.color"), r),
                Wb(a, t)
            }
            a.lineJoin = k,
            a.lineCap = m,
            g && a.restore()
        }
    }),
    Ee = _("qc.widget.graph.GraphView", b, function (a) {
        var b = this;
        b._dirtyMap = {},
        b._dirtyRects = [],
        b._uiMap = {},
        b._visibleMap = {},
        b._interactionState = {},
        b.initView(!0, !0),
        b.dataModel = a ? a : new Qc,
        b.scrollBarMode = "auto",
        b.editable = !1;
        var c = b.iv;
        b.iv = function (a) {
            a && b.invalidateAll(),
            c.call(b, a)
        }
    }, {
            _currentSubGraph: c,
            _pannable: !0,
            _rectSelectable: !0,
            _rectSelectBorderColor: "#2C3E50",
            _rectSelectBackground: "rgba(0,0,0,0.35)",
            upSubGraph: function () {
                this.currentSubGraph = re(this._currentSubGraph)
            },
            getDataUIBounds: function (a) {
                var b = this.getDataUI(a);
                return b ? b.bounds : c
            },
            toCanvas: function (a) {
                this.validateImpl();
                var b = this,
                c = b.contentRect,
                d = sa(),
                e = b._zoom,
                f = c.x * e,
                g = c.y * e,
                h = c.width * e,
                i = c.height * e;
                ta(d, h, i, 1);
                var j = Ub(d, 0, 0, 1, null, 1);
                return a && sb(j, 0, 0, h, i, a),
                Xb(j, -f, -g),
                j.scale(e, e),
                b.draw(j),
                j.restore(),
                d
            },
            toDataURL: function (a, b) {
                return this.toCanvas(a).toDataURL(b || "image/png", 1)
            },
            createDataUI: function (a) {
                var b = a.uiClass;
                return b ? new b(this, a) : c
            },
            getDataUI: function (a) {
                var b = this,
                c = b._uiMap[a.uuid];
                return c === d && (c = b.createDataUI(a), b._uiMap[a.uuid] = c),
                c
            },
            invalidateAll: function (a) {
                var b = this;
                a ? (b._uiMap = {}, b._visibleMap = {}, b._dirtyMap = {}, b._dirtyRects.length = 0, b.redraw()) : b.dataModel.forEach(function (a) {
                    b.invalidateData(a)
                })
            },
            invalidateSelection: function () {
                var a = this;
                a.selectionModel.forEach(function (b) {
                    a.invalidateData(b)
                })
            },
            invalidateData: function (a) {
                var b = this;
                b._dirtyMap[a.uuid] = a,
                b.iv()
            },
            isVisible: function (a) {
                var b = this;
                return re(a) !== b._currentSubGraph ? !1 : a.s("visible") ? b._visibleFunc ? b._visibleFunc(a) : !0 : !1
            },
            makeVisible: function (a) {
                var b = this,
                c = b.getDataUI(a);
                if (c) {
                    var d = re(a);
                    d !== b._currentSubGraph && (b.currentSubGraph = d),
                    b._makeVisibleData = a,
                    b.iv()
                }
            },
            adjustTranslateX: function (a) {
                return h(a)
            },
            adjustTranslateY: function (a) {
                return h(a)
            },
            handleScroll: function (a, b) {
                K(a);
                var c = this.lp(a);
                b > 0 ? this.scrollZoomIn(c) : 0 > b && this.scrollZoomOut(c)
            },
            handlePinch: function (a, b, c) {
                c > b ? this.pinchZoomIn(a) : this.pinchZoomOut(a)
            },
            handleKeyDown: function (a) {
                var b = this;
                K(a),
                Hb(a) ? b.selectAll() : Ib(a) && b.handleDelete && b.handleDelete(a)
            },
            moveSelection: function (a, b) {
                te(Xa(this.selectionModel.selection, this.isMovable, this), a, b)
            },
            isMovable: function (a) {
                return se(a) ? this._movableFunc ? this._movableFunc(a) : !0 : !1
            },
            onPropertyChange: function (a) {
                var b = this,
                c = a.property;
                b.redraw(),
                "currentSubGraph" === c && (b.setZoom(1), b.setTranslate(0, 0)),
                zc[c] && b.showScrollBar()
            },
            handleIndexChange: function (a) {
                this.invalidateData(a.data)
            },
            handleDataPropertyChange: function (a) {
                this.invalidateData(a.data)
            },
            handleDataModelChange: function (a) {
                var b = this,
                d = a.kind,
                e = a.data;
                if (b._invalidateContentRect = 1, "add" === d)
                    b.invalidateData(e);
                else if ("remove" === d) {
                    var f = e.uuid,
                    g = b._uiMap[f];
                    if (g) {
                        if (b._visibleMap[f]) {
                            var h = g.bounds;
                            h && b.redraw(h)
                        }
                        delete b._uiMap[f],
                        delete b._dirtyMap[f],
                        delete b._visibleMap[f]
                    }
                    e === b._currentSubGraph && (b.currentSubGraph = c)
                } else
                    "clear" === d && (b.invalidateAll(!0), b.currentSubGraph = c)
            },
            handleSelectionChange: function (a) {
                var b = this,
                c = b.selectionModel,
                d = b.dataModel;
                if (a.datas.forEach(function (a) {
                        b.invalidateData(a)
                    }), 1 === c.length && ("set" === a.kind || "append" === a.kind)) {
                    var e = c.lastData;
                    if (b.autoMakeVisible && b.makeVisible(e), b.isVisible(e)) {
                        for (var f = e; f._parent && b.isVisible(f._parent); )
                            f = f._parent;
                        f && f !== e && d.adjustIndex(f),
                        d.adjustIndex(e)
                    }
                }
            },
            getInteractionState: function () {
                return this._interactionState
            },
            onBackgroundClick: function () {},
            onBackgroundDoubleClick: function () {},
            onDataClick: function () {},
            onDataDoubleClick: function () {}
        }, {
            properties: ["layers", "visibleFunc", "movableFunc", "autoMakeVisible", "currentSubGraph", "pannable", "rectSelectable", "rectSelectBorderColor", "rectSelectBackground", "rotationEditableFunc", "anchorEditableFunc", "rectEditableFunc"],
            view: !0,
            scrollBar: !0,
            emitter: !0,
            toolTip: !0,
            painter: !0,
            sm: !0,
            bnb: !0
        }, {
            canvas: {
                get: function () {
                    return this._canvas
                }
            },
            contentRect: {
                get: function () {
                    var a = this,
                    b = a._contentRect;
                    return b || (a.forEach(function (c) {
                            a.isVisible(c) && (b = eb(b, a.getDataUIBounds(c)))
                        }), a._contentRect = b ? b : qa),
                    a._contentRect
                }
            },
            zoom: {
                get: function () {
                    return this._zoom
                },
                set: function (a) {
                    this.setZoom(a)
                }
            },
            dataModel: {
                get: function () {
                    return this._dataModel
                },
                set: function (a) {
                    var b = this,
                    c = b._dataModel,
                    d = b._selectionModel;
                    c !== a && (c && (c.off("dataModelChange", b.handleDataModelChange, b), c.off("dataPropertyChange", b.handleDataPropertyChange, b), c.off("indexChange", b.handleIndexChange, b), d || c.selectionModel.off("selectionChange", b.handleSelectionChange, b)), b._dataModel = a, a.on("dataModelChange", b.handleDataModelChange, b), a.on("dataPropertyChange", b.handleDataPropertyChange, b), a.on("indexChange", b.handleIndexChange, b), d ? d._setDataModel(a) : a.selectionModel.on("selectionChange", b.handleSelectionChange, b), b.invalidateAll(!0), b.epc("dataModel", c, a))
                }
            },
            interactors: {
                get: function () {
                    return this._interactors
                },
                set: function (a) {
                    var b = this,
                    c = b._interactors;
                    c && c.forEach(function (a) {
                        a.tearDown()
                    }),
                    b._interactors = a,
                    a && a.forEach(function (a) {
                        a.setUp()
                    }),
                    b.epc("interactors", c, a),
                    b.invalidateSelection()
                }
            },
            editable: {
                set: function (a) {
                    var b = this;
                    b.interactors = a ? [new Ne(b), new Je(b), new Le(b), new Ke(b), new Me(b), new Ie(b)] : [new Ne(b), new Je(b), new Le(b), new Me(b), new Ie(b)]
                }
            }
        });
    G(Ee, {
        getLabel: function (a) {
            var b = a.s("label");
            return b === d ? a.name : b
        },
        getLabel2: function (a) {
            return a.s("label2")
        },
        getLabelBackground: function (a) {
            return a.s("label.background")
        },
        getLabel2Background: function (a) {
            return a.s("label2.background")
        },
        getLabelColor: function (a) {
            return a.s("label.color")
        },
        getLabel2Color: function (a) {
            return a.s("label2.color")
        },
        getNote: function (a) {
            return a.s("note")
        },
        getNoteBackground: function (a) {
            return a.s("note.background")
        },
        getNoteColor: function (a) {
            return a.s("note.color")
        }
    }),
    G(Ee, {
        forEach: function (a, b) {
            var c,
            d,
            e = 0,
            f = this._layers,
            g = this._dataModel._datas,
            h = g.length;
            if (f)
                for (; e < f.length; e++) {
                    d = f[e];
                    for (var i = 0; h > i; i++)
                        if (c = g[i], c._layer === d && a.call(b, c) === !1)
                            return
                }
            else
                for (; h > e; e++)
                    if (a.call(b, g[e]) === !1)
                        return
        },
        forEachReverse: function (a, b) {
            var c,
            d,
            e,
            f = this._layers,
            g = this._dataModel._datas,
            h = g.length;
            if (f)
                for (c = f.length - 1; c >= 0; c--) {
                    e = f[c];
                    for (var i = h - 1; i >= 0; i--)
                        if (d = g[i], d._layer === e && a.call(b, d) === !1)
                            return
                }
            else
                for (c = h - 1; c >= 0; c--)
                    if (a.call(b, g[c]) === !1)
                        return
        }
    }),
    G(Ee, {
        fitData: function (a, b, d, e, f) {
            var g = this;
            if (!g.clientWidth || !g.clientHeight)
                return void(f || oa(g.fitData, g, [a, b, d, e, !0], 200));
            g.makeVisible(a),
            g.validate();
            var h = g.getDataUIBounds(a);
            h && (h = Fa(h), _a(h, d == c ? 20 : d), g.fitRect(h, b, e))
        },
        fitContent: function (a, b, d, e) {
            var f = this;
            if (!f.clientWidth || !f.clientHeight)
                return void(e || oa(f.fitContent, f, [a, b, d, !0], 200));
            f.validate();
            var g = Fa(f.contentRect);
            _a(g, b == c ? 20 : b),
            f.fitRect(g, a, d)
        },
        fitRect: function (a, b, c) {
            var d = this,
            e = d.clientWidth,
            f = d.clientHeight,
            g = a.x + a.width / 2,
            h = a.y + a.height / 2,
            i = m(e / a.width, f / a.height),
            j = d._zoom,
            k = -g * j + e / 2,
            l = -h * j + f / 2;
            0 === i || isNaN(i) || (c && (i = m(1, i)), b ? d.setTranslate(k, l, {
                    finishFunc: function () {
                        d.setZoom(i, b)
                    }
                }) : (d.setTranslate(k, l), d.setZoom(i)))
        }
    }),
    G(Ee, {
        redraw: function (a) {
            var b = this;
            b._redrawAll || (a ? b._dirtyRects.push(a) : (b._redrawAll = !0, b._dirtyRects.length = 0), b.iv())
        },
        draw: function (a, b) {
            var c = this;
            c.drawBottomPainters(a, b),
            c.forEach(function (d) {
                if (c._visibleMap[d.uuid]) {
                    var e = c.getDataUI(d);
                    if (e) {
                        var f = e.bounds;
                        (!b || hb(b, f)) && e.draw(a)
                    }
                }
            }),
            c.drawTopPainters(a, b)
        },
        calculateViewRect: function () {
            var a = this,
            b = a.translateX,
            c = a.translateY,
            d = a._zoom,
            e = a.clientWidth,
            f = a.clientHeight;
            return {
                x: -b / d,
                y: -c / d,
                width: e / d,
                height: f / d
            }
        },
        validateImpl: function () {
            var a,
            b,
            c,
            d,
            e,
            f = this,
            g = f.translateX,
            h = f.translateY,
            k = f._zoom,
            m = f._canvas,
            n = f.clientWidth,
            o = f.clientHeight,
            p = f._viewRect,
            q = f.calculateViewRect(),
            r = {},
            s = f._dirtyRects,
            t = f._dirtyMap,
            u = f._redrawAll,
            v = f._makeVisibleData;
            (n !== m.clientWidth || o !== m.clientHeight) && (ta(m, n, o), u = 1),
            u || cb(q, p) || (u = 1),
            f._viewRect = q,
            f._interactors && f._interactors.forEach(function (a) {
                a.validate()
            }),
            f.forEach(function (a) {
                b = a.uuid;
                var c = r[b] = f.isVisible(a);
                c !== f._visibleMap[b] && (t[b] = a)
            }, f);
            for (b in t)
                c = f.getDataUI(t[b]), c && (!u && f._visibleMap[b] && (e = c.bounds, e && s.push(e)), c.invalidate()), f._invalidateContentRect = !0;
            if (f._visibleMap = r, !u)
                for (b in t)
                    r[b] && (c = f.getDataUI(t[b]), c && (e = c.bounds, e && s.push(e)));
            if (u ? d = q : (s.forEach(function (a) {
                            hb(q, a) && (d = eb(d, a))
                        }), d && (_a(d, l(1, 1 / k)), d.x = i(d.x * k) / k, d.y = i(d.y * k) / k, d.width = j(d.width * k) / k, d.height = j(d.height * k) / k, d = ib(q, d))), d && (a = Ub(m, g, h, k, d), f.draw(a, d), a.restore()), f._dirtyMap = {}, s.length = 0, delete f._redrawAll, v && n > 0 && o > 0) {
                var c = f.getDataUI(v);
                if (c) {
                    var e = c.bounds,
                    w = f._viewRect,
                    x = w.x,
                    y = w.y,
                    z = w.width,
                    A = w.height,
                    k = f._zoom;
                    e && !hb(e, w) && (e.x + e.width < x && (f.translateX = -e.x * k), e.x > x + z && (f.translateX =  - (e.x + e.width - z) * k), e.y + e.height < y && (f.translateY = -e.y * k), e.y > y + A && (f.translateY =  - (e.y + e.height - A) * k))
                }
                delete f._makeVisibleData
            }
            f._invalidateContentRect && (delete f._invalidateContentRect, delete f._contentRect)
        }
    }),
    ["zoomIncrement", "scrollZoomIncrement", "pinchZoomIncrement", "maxZoom", "minZoom"].forEach(function (a) {
        Ha(Ee.prototype, a)
    }),
    G(Ee, {
        _zoom: 1,
        _zoomIncrement: 1.3,
        _scrollZoomIncrement: 1.05,
        _pinchZoomIncrement: 1.08,
        _maxZoom: 20,
        _minZoom: .01,
        zoomIn: function (a, b) {
            this.setZoom(this._zoom * this._zoomIncrement, a, b)
        },
        zoomOut: function (a, b) {
            this.setZoom(this._zoom / this._zoomIncrement, a, b)
        },
        zoomReset: function (a, b) {
            this.setZoom(1, a, b)
        },
        scrollZoomIn: function (a) {
            this.setZoom(this._zoom * this._scrollZoomIncrement, c, a)
        },
        scrollZoomOut: function (a) {
            this.setZoom(this._zoom / this._scrollZoomIncrement, c, a)
        },
        pinchZoomIn: function (a) {
            this.setZoom(this._zoom * this._pinchZoomIncrement, c, a)
        },
        pinchZoomOut: function (a) {
            this.setZoom(this._zoom / this._pinchZoomIncrement, c, a)
        },
        adjustZoom: function (a) {
            return a < this._minZoom ? this._minZoom : a > this._maxZoom ? this._maxZoom : a
        },
        setZoom: function (a, b, c) {
            var d = this;
            if (b = Ga(b)) {
                d._zoomAnim && d._zoomAnim.stop(!0);
                var e = d._zoom;
                b.action = function (b) {
                    d.setZoomImpl(e + (a - e) * b, c)
                },
                b.innerFunc = function () {
                    delete d._zoomAnim
                },
                d._zoomAnim = ga(b)
            } else
                d.setZoomImpl(a, c)
        },
        setZoomImpl: function (a, b) {
            var c = this;
            if (a = c.adjustZoom(a), a !== c._zoom) {
                c.validate();
                var d = c._viewRect,
                e = c._zoom;
                0 !== d.width && 0 !== d.height && (b = b ? b : {
                        x: d.x + d.width / 2,
                        y: d.y + d.height / 2
                    }, c.translateX = (b.x - d.x) * e - b.x * a, c.translateY = (b.y - d.y) * e - b.y * a),
                c._zoom = a,
                c.epc("zoom", e, a)
            }
        }
    });
    var Fe = c,
    Ge = function (a, b) {
        Fe || (Fe = sa()),
        ta(Fe, a, b, 1);
        var c = Ub(Fe);
        return c.clearRect(0, 0, a, b),
        c
    };
    G(Ee, {
        getSelectedDataAt: function (a) {
            var b = this;
            return this.getDataAt(a, function (a) {
                return b.isSelected(a)
            })
        },
        getDataAt: function (a, b) {
            var c,
            d = this,
            e = La(a, d);
            return d.forEachReverse(function (a) {
                if (b ? b(a) : d.isSelectable(a)) {
                    if (d.rectIntersects(a, e))
                        return c = a, !1
                } else ;
            }),
            c
        },
        getDatasInRect: function (a, b, c) {
            c === d && (c = !0);
            var e = this,
            f = [];
            return e.forEachReverse(function (d) {
                c && !e.isSelectable(d) || (b ? e.rectIntersects(d, a) : e.rectContains(d, a)) && f.push(d)
            }),
            f
        },
        rectIntersects: function (a, b) {
            this.validate();
            var d = c;
            if (this._visibleMap[a.uuid]) {
                var e = this._uiMap[a.uuid];
                if (e) {
                    var f = e.bounds;
                    if (gb(b, f))
                        d = !0;
                    else if (b = ib(b, f)) {
                        if (!a.s("pixel.perfect"))
                            return !0;
                        var g = b.x,
                        h = b.y,
                        i = b.width,
                        j = b.height,
                        k = 1,
                        l = 3e3,
                        m = i * j;
                        m > l && (k = l / m);
                        var n = Ge(i * k, j * k);
                        Xb(n, -g * k, -h * k),
                        n.scale(k, k),
                        e.draw(n);
                        try {
                            for (var o = 0, p = n.getImageData(0, 0, i * k, j * k).data; o < p.length; o += 4)
                                if (0 !== p[o + 3]) {
                                    d = !0;
                                    break
                                }
                            n.restore()
                        } catch (q) {
                            Fe = c,
                            d = !0
                        }
                    }
                }
            }
            return d ? !0 : !1
        },
        rectContains: function (a, b) {
            if (this._visibleMap[a.uuid]) {
                var c = this._uiMap[a.uuid];
                if (c)
                    return gb(b, c.bounds)
            }
            return !1
        }
    });
    var He = _("qc.widget.graph.Interactor", b, function (a) {
        this._graphView = a
    }, {
        validate: function () {},
        setUp: function () {
            this.addListeners()
        },
        tearDown: function () {
            this.removeListeners(),
            this.clear()
        },
        clear: function () {},
        emit: function (a) {
            this._graphView.emit("interaction", a)
        },
        startDragging: function (a) {
            this._lastClientPoint = xa(a),
            this._lastLogicalPoint = this._graphView.lp(a),
            Bb(this, a)
        },
        clearDragging: function () {
            this._lastClientPoint = this._lastLogicalPoint = this._logicalPoint = c
        },
        autoScroll: function (a) {
            return this._graphView.autoScroll(a, this._lastClientPoint)
        }
    }, {
        interactor: !0
    }, {
        view: {
            get: function () {
                return this._graphView
            }
        }
    }),
    Ie = _("qc.widget.graph.BasicInteractor", He, function (a) {
        Ie["super"].constructor.call(this, a)
    }, {
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b._graphView,
            d = c._interactionState,
            e = c.getDataAt(a);
            K(a),
            c.requestFocus(),
            Ma(a) > 1 || d.editing || d.scrolling || c.pannable && !e && Eb(a) && !Fb(a) && (b._tx = c.translateX, b._ty = c.translateY, b.startDragging(a))
        },
        handle_touchend: function (a) {
            var b = this,
            c = b._graphView,
            d = c.getDataAt(a);
            Db(a) ? b.handleDoubleClick(a, d) : b.handleClick(a, d)
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function (a) {
            var b = this,
            c = b._graphView._interactionState;
            c.panning && (delete c.panning, b.emit({
                    kind: "endPan",
                    event: a
                })),
            delete b._tx,
            delete b._ty,
            b.clearDragging()
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b._graphView,
            d = c._interactionState,
            e = b._lastClientPoint,
            f = xa(a);
            b.emit({
                kind: d.panning ? "betweenPan" : "beginPan",
                event: a
            }),
            d.panning = !0,
            c.setTranslate(b._tx + f.x - e.x, b._ty + f.y - e.y)
        },
        handle_mousewheel: function (a) {
            this._graphView.handleScroll(a, a.wheelDelta)
        },
        handle_DOMMouseScroll: function (a) {
            2 === a.axis && this._graphView.handleScroll(a, -a.detail)
        },
        handle_keydown: function (a) {
            this._graphView.handleKeyDown(a)
        },
        handleClick: function (a, b) {
            var c = this;
            b ? (c.emit({
                    kind: "clickData",
                    event: a,
                    data: b
                }), c._graphView.onDataClick(b, a)) : (c.emit({
                    kind: "clickBackground",
                    event: a
                }), c._graphView.onBackgroundClick(a))
        },
        handleDoubleClick: function (a, b) {
            if (Eb(a)) {
                var c = this,
                d = c._graphView;
                b ? (c.emit({
                        kind: "doubleClickData",
                        event: a,
                        data: b
                    }), d.onDataDoubleClick(b, a), c.checkDoubleClickOnNote(a, b) || b.ISubGraph && (d.currentSubGraph = b, d.selectionModel.clearSelection())) : (c.emit({
                        kind: "doubleClickBackground",
                        event: a
                    }), d.onBackgroundDoubleClick(a), d.upSubGraph())
            }
        },
        checkDoubleClickOnNote: function (a, b) {
            var c = this,
            d = c._graphView,
            e = d.lp(a),
            f = d.getDataUI(b),
            g = f.noteInfo;
            return g && b.s("note.toggleable") && fb(g.hitRect, e) ? (b.s("note.expanded", !b.s("note.expanded")), c.emit({
                    kind: "toggleNote",
                    event: a,
                    data: b
                }), !0) : !1
        }
    }),
    Je = _("qc.widget.graph.ScrollBarInteractor", He, function (a) {
        Je["super"].constructor.call(this, a)
    }, {
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handle_touchmove: function (a) {
            if (!Ab() && Eb(a)) {
                var b = this,
                c = b._graphView,
                d = c.isCloseToVScrollBar(a),
                e = c.isCloseToHScrollBar(a);
                b._cp ? b._state || (d ? b._state = "vScroll" : e && (b._state = "hScroll"), b._state && (Bb(b, a), b.emit({
                            kind: "beginScroll",
                            event: a
                        }))) : (d || e) && c.showScrollBar(),
                c._interactionState.scrolling = d || e
            }
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function (a) {
            var b = this;
            b._state = b._cp = b._tx = b._ty = c,
            delete b._graphView._interactionState.scrolling,
            b.emit({
                kind: "endScroll",
                event: a
            })
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b._graphView;
            c.requestFocus(),
            K(a),
            b.handle_touchmove(a),
            Ma(a) > 1 || !c._interactionState.scrolling || (b._cp = xa(a), b._tx = c.translateX, b._ty = c.translateY)
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b._graphView,
            d = b._state,
            e = b._tx,
            f = b._ty,
            g = b._cp,
            h = xa(a),
            i = c._viewRect,
            j = c.scrollRect;
            "vScroll" === d ? c.translateY = f + (g.y - h.y) * j.height / i.height : "hScroll" === d && (c.translateX = e + (g.x - h.x) * j.width / i.width),
            b.emit({
                kind: "betweenScroll",
                event: a
            })
        }
    }),
    Ke = _("qc.widget.graph.EditInteractor", He, function (a) {
        Ke["super"].constructor.call(this, a)
    }, {
        setUp: function () {
            var a = this,
            b = a._graphView;
            Ke["super"].setUp.call(a),
            a._canvas = sa(),
            b._interactionDiv.insertBefore(a._canvas, b._scrollBarDiv)
        },
        tearDown: function () {
            var a = this;
            Ke["super"].tearDown.call(a),
            Ba(a._canvas),
            a.cursor = "",
            delete a._graphView._interactionState.editing
        },
        clear: function () {
            var a = this,
            b = a._graphView,
            d = a._node;
            d && (b.getDataUI(d).selectWidthVisible = !0, b._dirtyMap[d.uuid] = d, a._node = a._edgeRect = a._resizePoints = a._rotationPoint = a._shapePoints = c)
        },
        handle_mousemove: function (a) {
            this.handle_touchmove(a)
        },
        handle_touchmove: function (a) {
            !Ab() && Eb(a) && this.checkEditInfo(a)
        },
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b._graphView;
            K(a),
            c.requestFocus(),
            b.checkEditInfo(a);
            var d = b._editInfo;
            Eb(a) && d && b.startDragging(a)
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function () {},
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b._graphView,
            d = b._editInfo,
            e = d.node,
            f = d.type,
            g = d.index,
            h = c.lp(a),
            i = e.position,
            j = e.anchor,
            k = e.width,
            m = e.height,
            n = -k * j.x,
            o = -m * j.y,
            p = ue(e, h.x, h.y);
            if ("anchor" === f)
                e.setAnchor((p.x - n) / k, (p.y - o) / m), e.position = h;
            else if ("rotation" === f)
                e.rotation = t(h.y - i.y, h.x - i.x);
            else if ("resize" === f) {
                var q,
                r;
                0 === g ? (q = l(n + k - p.x, 0), r = l(o + m - p.y, 0), n = n + k - q, o = o + m - r) : 1 === g ? (q = l(p.x - n, 0), r = l(o + m - p.y, 0), o = o + m - r) : 2 === g ? (q = l(p.x - n, 0), r = l(p.y - o, 0)) : 3 === g && (q = l(n + k - p.x, 0), r = l(p.y - o, 0), n = n + k - q),
                e.setPosition(ve(e, n + j.x * q, o + j.y * r)),
                e.setSize(q, r)
            } else
                "shape" === f ? (e._points[g] = {
                        x: p.x + i.x,
                        y: p.y + i.y
                    }, e.emitShapeChange()) : "left" === f ? (q = l(n + k - p.x, 0), n = n + k - q, e.setPosition(ve(e, n + j.x * q, o + j.y * m)), e.setSize(q, m)) : "right" === f ? (q = l(p.x - n, 0), e.setPosition(ve(e, n + j.x * q, o + j.y * m)), e.setSize(q, m)) : "top" === f ? (r = l(o + m - p.y, 0), o = o + m - r, e.setPosition(ve(e, n + j.x * k, o + j.y * r)), e.setSize(k, r)) : "bottom" === f && (r = l(p.y - o, 0), e.setPosition(ve(e, n + j.x * k, o + j.y * r)), e.setSize(k, r))
        },
        checkEditInfo: function (a) {
            var b = this,
            d = b._graphView,
            e = d._interactionState,
            f = d.lp(a),
            g = d._zoom,
            h = b._node,
            i = b._resizePoints,
            j = b._shapePoints,
            k = b._edgeRect;
            if (b._editInfo = c, b.cursor = "", delete e.editing, h) {
                var l = ue(h, f.x, f.y);
                if (j)
                    for (var m = j.length - 1; m >= 0; m--)
                        if (ab(f, j[m]) * g <= 6)
                            return b._editInfo = {
                                node: h,
                                type: "shape",
                                index: m
                            },
                b.cursor = "crosshair",
                void(e.editing = !0);
                if (i)
                    for (var m = i.length - 1; m >= 0; m--)
                        if (ab(f, i[m]) * g <= 6)
                            return b._editInfo = {
                                node: h,
                                type: "resize",
                                index: m
                            },
                b.cursor = "crosshair",
                void(e.editing = !0);
                if ((!d.anchorEditableFunc || d.anchorEditableFunc(h)) && ab(f, h.position) * g <= 8)
                    return b._editInfo = {
                        node: h,
                        type: "anchor"
                    },
                b.cursor = "move",
                void(e.editing = !0);
                if (b._rotationPoint && ab(f, b._rotationPoint) * g <= 6)
                    return b._editInfo = {
                        node: h,
                        type: "rotation"
                    },
                b.cursor = "crosshair",
                void(e.editing = !0);
                if (n(l.x - k.x) * g < 3 && l.y >= k.y && l.y <= k.y + k.height)
                    return b._editInfo = {
                        node: h,
                        type: "left"
                    },
                b.cursor = "crosshair",
                void(e.editing = !0);
                if (n(l.x - k.x - k.width) * g < 3 && l.y >= k.y && l.y <= k.y + k.height)
                    return b._editInfo = {
                        node: h,
                        type: "right"
                    },
                b.cursor = "crosshair",
                void(e.editing = !0);
                if (n(l.y - k.y) * g < 3 && l.x >= k.x && l.x <= k.x + k.width)
                    return b._editInfo = {
                        node: h,
                        type: "top"
                    },
                b.cursor = "crosshair",
                void(e.editing = !0);
                if (n(l.y - k.y - k.height) * g < 3 && l.x >= k.x && l.x <= k.x + k.width)
                    return b._editInfo = {
                        node: h,
                        type: "bottom"
                    },
                b.cursor = "crosshair",
                void(e.editing = !0)
            }
        },
        validate: function () {
            var a = this,
            b = a._graphView,
            c = a._canvas,
            d = b.clientWidth,
            e = b.clientHeight;
            (d !== c.clientWidth || e !== c.clientHeight) && ta(c, d, e),
            a.clear();
            var f = Ub(c, 0, 0, 1, {
                x: 0,
                y: 0,
                width: d,
                height: e
            }),
            g = b._zoom,
            h = b.translateX,
            i = b.translateY,
            j = b.selectionModel.lastData;
            if (se(j)) {
                if (a._node = j, b.getDataUI(j).selectWidthVisible = !1, b._dirtyMap[j.uuid] = j, a._edgeRect = {
                        x: -j.width * j._anchor.x,
                        y: -j.height * j._anchor.y,
                        width: j.width,
                        height: j.height
                    }, !b.rectEditableFunc || b.rectEditableFunc(j)) {
                    var k = a._resizePoints = we(j);
                    f.strokeStyle = "#8175D5",
                    f.beginPath(),
                    k.forEach(function (a, b) {
                        0 === b ? f.moveTo(a.x * g + h, a.y * g + i) : f.lineTo(a.x * g + h, a.y * g + i)
                    }),
                    f.closePath(),
                    f.stroke(),
                    f.fillStyle = "#5052F9",
                    f.strokeStyle = "#F5F4FF",
                    f.lineWidth = 1,
                    k.forEach(function (a) {
                        f.beginPath(),
                        f.arc(a.x * g + h, a.y * g + i, 5, 0, r, !0),
                        f.fill(),
                        f.stroke()
                    })
                }
                var l = j.position;
                if ((!b.anchorEditableFunc || b.anchorEditableFunc(j)) && (f.beginPath(), f.arc(l.x * g + h, l.y * g + i, 6, 0, r, !0), f.strokeStyle = "#F5F4FF", f.lineWidth = 6, f.stroke(), f.strokeStyle = "#5052F9", f.lineWidth = 4, f.stroke()), !b.rotationEditableFunc || b.rotationEditableFunc(j)) {
                    var m = j.rotation,
                    n = 30;
                    f.strokeStyle = "#8175D5",
                    f.lineWidth = 1,
                    f.beginPath(),
                    f.moveTo(l.x * g + h, l.y * g + i),
                    f.lineTo(l.x * g + h + n * o(m), l.y * g + i + n * p(m)),
                    f.stroke(),
                    a._rotationPoint = {
                        x: l.x + n * o(m) / g,
                        y: l.y + n * p(m) / g
                    },
                    f.beginPath(),
                    f.arc(l.x * g + h + n * o(m), l.y * g + i + n * p(m), 5, 0, r, !0),
                    f.fillStyle = "#5052F9",
                    f.strokeStyle = "#F5F4FF",
                    f.lineWidth = 1,
                    f.fill(),
                    f.stroke()
                }
                if (j instanceof Ae) {
                    var l = j._position,
                    q = j._scale,
                    s = new Ea(j._rotation);
                    a._shapePoints = [],
                    j._points.forEach(function (b) {
                        b = s.tf((b.x - l.x) * q.x, (b.y - l.y) * q.y),
                        b.x += l.x,
                        b.y += l.y,
                        a._shapePoints.push(b)
                    }),
                    f.fillStyle = "#F80827",
                    f.strokeStyle = "#F5F4FF",
                    f.lineWidth = 1,
                    a._shapePoints.forEach(function (a) {
                        f.beginPath(),
                        f.arc(a.x * g + h, a.y * g + i, 5, 0, r, !0),
                        f.fill(),
                        f.stroke()
                    })
                }
            }
            f.restore()
        }
    }),
    Le = _("qc.widget.graph.SelectInteractor", He, function (a) {
        Le["super"].constructor.call(this, a)
    }, {
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b._graphView,
            d = c._interactionState;
            if (delete b._pendingCS, !(Ma(a) > 1 || d.editing || d.scrolling)) {
                var e = c.getDataAt(a),
                f = c.selectionModel;
                e ? Fb(a) ? f.isSelected(e) ? f.removeSelection(e) : f.appendSelection(e) : f.isSelected(e) || (f.selection = e) : Fb(a) || !c.pannable ? Eb(a) && (Fb(a) || f.clearSelection(), c.rectSelectable && (b.startDragging(a), d.selecting = !0)) : b._pendingCS = xa(a)
            }
        },
        handle_mouseup: function (a) {
            this.handle_touchend(a)
        },
        handle_touchend: function (a) {
            var b = this,
            c = b._pendingCS;
            c && (ab(c, xa(a)) <= 1 && b._graphView.selectionModel.clearSelection(), delete b._pendingCS)
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function (a) {
            this.clear(a)
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b._graphView,
            d = b._mask;
            d ? (b.emit({
                    kind: "betweenRectSelect",
                    event: a
                }), b.autoScroll(a)) : b.emit({
                kind: "beginRectSelect",
                event: a
            }),
            d || (d = b._mask = ra(!1, c._contentDiv)),
            b._logicalPoint = c.lp(a);
            var e = d.rect = db(b._lastLogicalPoint, b._logicalPoint),
            f = c.zoom,
            g = d.style;
            wa(d, {
                x: e.x * f + c.translateX,
                y: e.y * f + c.translateY,
                width: e.width * f,
                height: e.height * f
            }),
            b.intersects() ? (g.border = "", g.background = c.rectSelectBackground) : (g.background = "", g.border = "1px solid " + c.rectSelectBorderColor)
        },
        intersects: function () {
            var a = this,
            b = a._lastLogicalPoint,
            c = a._logicalPoint;
            return b.x > c.x || b.y > c.y
        },
        clear: function (a) {
            var b = this,
            c = b._graphView,
            d = b._mask;
            if (delete b._pendingCS, b._lastLogicalPoint) {
                if (d) {
                    var e = c.getDatasInRect(d.rect, b.intersects());
                    if (e.length) {
                        var f = c.selectionModel,
                        g = Fa(f.selection);
                        e.forEach(function (a) {
                            f.isSelected(a) ? Va(g, a) : g.push(a)
                        }),
                        f.selection = g
                    }
                    Ba(d),
                    delete b._mask,
                    b.emit({
                        kind: "endRectSelect",
                        event: a
                    })
                }
                b.clearDragging(),
                delete c._interactionState.selecting
            }
        }
    }),
    Me = _("qc.widget.graph.MoveInteractor", He, function (a) {
        Me["super"].constructor.call(this, a)
    }, {
        handle_mousedown: function (a) {
            this.handle_touchstart(a)
        },
        handle_touchstart: function (a) {
            var b = this,
            c = b._graphView,
            d = c._interactionState;
            if (!(Ma(a) > 1 || !Eb(a) || d.editing || d.scrolling)) {
                var e = c.getSelectedDataAt(a);
                e && c.isMovable(e) && (b.startDragging(a), d.moving = !0)
            }
        },
        handleWindowMouseUp: function (a) {
            this.handleWindowTouchEnd(a)
        },
        handleWindowTouchEnd: function (a) {
            var b = this;
            b._lastLogicalPoint && (delete b._graphView._interactionState.moving, b._logicalPoint && b.emit({
                    kind: "endMove",
                    event: a
                }), b.clearDragging())
        },
        handleWindowMouseMove: function (a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b._graphView,
            d = {
                kind: b._logicalPoint ? "betweenMove" : "beginMove",
                event: a
            },
            e = b._logicalPoint = c.lp(a);
            c.moveSelection(e.x - b._lastLogicalPoint.x, e.y - b._lastLogicalPoint.y),
            b._lastLogicalPoint = e,
            b.autoScroll(a),
            b.emit(d)
        }
    }),
    Ne = _("qc.widget.graph.PinchInteractor", He, function (a) {
        Ne["super"].constructor.call(this, a)
    }, {
        handle_touchstart: function (a) {
            var b = this,
            c = b._graphView;
            if (2 === Ma(a)) {
                K(a),
                c.requestFocus(),
                b.startDragging(a);
                var d = c.zoom,
                e = c._interactionDiv.getBoundingClientRect(),
                f = a.touches[0],
                g = a.touches[1],
                h = {
                    x: (f.clientX + g.clientX) / 2 - e.left,
                    y: (f.clientY + g.clientY) / 2 - e.top
                };
                h.x -= c.translateX,
                h.y -= c.translateY,
                h.x /= d,
                h.y /= d,
                b._point = h,
                b._dist = Na(a)
            }
        },
        handleWindowTouchEnd: function (a) {
            var b = this,
            d = b._graphView,
            e = d._interactionState;
            e.pinching && (b.emit({
                    kind: "endPinch",
                    event: a
                }), delete e.pinching),
            b._point = b._dist = c
        },
        handleWindowTouchMove: function (a) {
            var b = this,
            c = b._graphView,
            d = c._interactionState;
            if (2 === Ma(a)) {
                var e = Na(a);
                c.handlePinch(b._point, b._dist, e),
                b._dist = e,
                b.emit({
                    kind: d.pinching ? "betweenPinch" : "beginPinch",
                    event: a
                }),
                d.pinching = !0
            }
        }
    });
    G(w, {
        hideToolTip: ma,
        showToolTip: na,
        initContext: Ub,
        initDash: Vb,
        restoreDash: Wb,
        gTranslate: Xb,
        gRotate: Yb,
        drawImage: da,
        drawNinePatchImage: ea,
        drawShape: pb,
        fillShape: qb,
        fillPattern: rb,
        fillRect: sb,
        drawBorder: tb,
        draw3dBorder: xb,
        drawArc: ub,
        drawRoundRect: vb,
        draw3dRect: wb,
        drawPoints: yb,
        getImageWidth: ac,
        getImageHeight: bc,
        getVectorValue: cc,
        toCurvePoints: Ya,
        getLineOffsetInfo: Za,
        getLineCacheInfo: $a,
        inflate: xc,
        setPropertyValue: Mc,
        getPropertyValue: Lc
    }, !0)
}
(this, Object, null);
