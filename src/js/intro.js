var CONFIG = CONFIG || {};
var color1 = "#000";
var color2 = "#2196f3"; //circulo concentrico animado
var color3 = "#336699"; //circulo punteagudo animado fin
var color4 = "#FFA500"; //linea y fondo
var color5 = "#fff"; //linea y fondo
// var color1 = '#111';
// var color2 = '#ffa500   ';//circulo concentrico animado
// var color2 = '#e7e7e7';
// var color3 = '#ccc';
CONFIG.currentW, CONFIG.currentH;
var INTRO = {
  intropaper: null,
  init: function() {
    console.log("COMIENZA intro"),
      (this.intropaper = new Raphael(
        "animintro",
        CONFIG.currentW,
        CONFIG.currentH
      )),
      $("#animintro").css({
        width: CONFIG.currentW,
        height: CONFIG.currentH
      }),
      $("#animintro").show();
    var e = INTRO.intropaper
        .path("M 0," + CONFIG.currentH + " L 0," + CONFIG.currentH)
        .attr({
          fill: color4, //no se que color seria?
          stroke: color3 //color linea inicial que dispara
          // stroke: color4//color linea inicial que dispara
        }),
      r = INTRO.intropaper
        .circle(CONFIG.currentW / 2, CONFIG.currentH / 2, 0)
        .attr({
          fill: color5, //color del circulo interior
          stroke: color1 //color del circulo exterior o fondo
        }),
      i = INTRO.intropaper
        .circle(CONFIG.currentW / 2, CONFIG.currentH / 2, 0)
        .attr({
          fill: color4,
          stroke: "none"
          // stroke: "none"
        });
    e.animate(
      {
        path:
          "M 0," +
          CONFIG.currentH +
          " L " +
          CONFIG.currentW / 2 +
          "," +
          CONFIG.currentH / 2
      },
      1e3,
      ">",
      function() {
        INTRO.arcouno(),
          e.animate(
            {
              path:
                "M " +
                CONFIG.currentW / 2 +
                "," +
                CONFIG.currentH / 2 +
                "L " +
                CONFIG.currentW / 2 +
                "," +
                CONFIG.currentH / 2
            },
            1e3,
            ">",
            function() {}
          ),
          r.animate(
            {
              r: "121"
            },
            1800,
            ">",
            function() {}
          ),
          setTimeout(function() {
            i.animate(
              {
                r: "140"
              },
              1200,
              ">",
              function() {}
            );
          }, 800);
        var t = r.clone();
        setTimeout(function() {
          t.animate(
            {
              r: "142"
            },
            1200,
            ">",
            function() {}
          );
        }, 1100),
          setTimeout(function() {
            !(function t() {
              var e = r.clone().attr({
                r: radiusintro,
                opacity: 0,
                fill: "none",
                "stroke-width": 1
              });
              e.attr({
                opacity: 1
              }).animate(
                {
                  r: radiusintro + 10,
                  "stroke-width": 41
                },
                1e3,
                ">",
                function() {}
              );
              radiusintro += 40;
              radiusintro < CONFIG.currentW / 2 + 150
                ? setTimeout(function() {
                    t();
                  }, 50)
                : setTimeout(function() {
                    var e = (logodeco = new Raphael("logodeco", 390, 390))
                      .path("M 149,23 L 153,23 L 151,30 z")
                      .attr({
                        fill: color3,
                        opacity: 0,
                        stroke: "none"
                      });

                    function r() {
                      var t = e.clone().attr({
                        transform: "r" + rot + ",151,156t0,-10"
                      });
                      t.animate(
                        {
                          transform: "r" + rot + ",151,156t0,0s0.9",
                          opacity: 1
                        },
                        2e3,
                        "elastic",
                        function() {}
                      ),
                        rot < 350 ? (setTimeout(function() { r(); }, 20), (rot += 10)) : (console.log("Musicshares loaded!"),
                            // $("body").css("background", color5),
                            INTRO.intropaper.clear());

// // 1
// console.log('duplicated VIEWS executed!');
// views = {
//  grid : document.querySelector('.view--grid'),
//  single : document.querySelector('.view--single'),
//  player : document.querySelector('.view--player')
// };

// // 2
// lpGrid = views.grid.querySelector('ul.grid'),
// // The initial grid items.
// lps = [].slice.call(lpGrid.querySelectorAll('li.grid__item')),
// expanderEl = document.querySelector('.deco-expander'),
// // The LP svg behing each Slideshow record
// recordEl = views.player.querySelector('.player__element--lp'),
// slideshow, turntable;

// // 3
// init(); // inits the recordPLayer UI

// // 4
// window.AudioContext = window.AudioContext || window.webkitAudioContext;



                    }
                    r(),
                    //   $("#logo h1").fadeIn(1500, function() {
                        $("#logo").fadeIn(1500, function() {
                        // $("#langswitch").fadeIn(1e3, function () {}),
                        // $("#addrandlogin").fadeIn(1e3, function () {}),
                        setTimeout(function() {
                          console.log("ready: LANZA ALGO");
                        //   animintro.style.display = "none"; // importante para que no obstruya la UI
                        // $("#mainContainer").fadeIn();

                          // TweenMax.staggerTo(addrandlogin,
                          //     0.5, {opacity: 1, ease: Power2.easeIn},0.1
                          // );
                        //   showElement(header, "flex");
                          setTimeout(() => {
                            // showElement(maintitleandbuttons, "flex");
                            
                            setTimeout(() => {
                                $('#logodeco').fadeOut();
                                $("#mainContainer").fadeIn();
                                // loadMarketplaceItems();
                                
                                setTimeout(() => {
                                    $('#logo').fadeOut();
                            //   showElement(appContent, "flex");

                              // albumGrid.innerHTML += gridAlbum;
                              //   singleAlbum.innerHTML += albumView;
                              //   init();

                              
                                // console.log('inits the recordPLayer UI');
                                // init(); // inits the recordPLayer UI
                                // window.AudioContext = window.AudioContext||window.webkitAudioContext;

                                
                              // showElement(drafts, "flex");
                            }, 300);

                            }, 300);
                          }, 300);
                        }, 500);
                      });
                  }, 1400);
            })();
          }, 1100);
      }
    );
  },
  arcouno: function() {
    INTRO.intropaper
      .path(
        INTRO.arc([CONFIG.currentW / 2, CONFIG.currentH / 2], 120, 120, 320)
      )
      .attr({
        stroke: color1,
        "stroke-width": 1
      })
      .attr({
        transform: "r0," + CONFIG.currentW / 2 + "," + CONFIG.currentH / 2
      })
      .animate(
        {
          transform: "r360," + CONFIG.currentW / 2 + "," + CONFIG.currentH / 2
        },
        4e3
      );
  },
  arc: function(t, e, r, i) {
    for (
      angle = r,
        coords = INTRO.toCoords(t, e, angle),
        path = "M " + coords[0] + " " + coords[1];
      angle <= i;

    )
      (coords = INTRO.toCoords(t, e, angle)),
        (path += " L " + coords[0] + " " + coords[1]),
        (angle += 1);
    return path;
  },
  toCoords: function(t, e, r) {
    var i = (r / 180) * Math.PI;
    return [t[0] + Math.cos(i) * e, t[1] + Math.sin(i) * e];
  }
};
(window.Modernizr = (function(t, i) {
  function e(t) {
    s.cssText = t;
  }
  var r,
    n = {},
    a = t.documentElement,
    o = t.createElement("modernizr"),
    s = o.style,
    l = {},
    h = [],
    c = h.slice,
    u = {}.hasOwnProperty,
    f =
      void 0 !== u && void 0 !== u.call
        ? function(t, e) {
            return u.call(t, e);
          }
        : function(t, e) {
            return e in t && void 0 === t.constructor.prototype[e];
          };
  for (var p in (Function.prototype.bind ||
    (Function.prototype.bind = function(i) {
      var n = this;
      if ("function" != typeof n) throw new TypeError();
      var a = c.call(arguments, 1),
        o = function() {
          if (this instanceof o) {
            function t() {}
            t.prototype = n.prototype;
            var e = new t(),
              r = n.apply(e, a.concat(c.call(arguments)));
            return Object(r) === r ? r : e;
          }
          return n.apply(i, a.concat(c.call(arguments)));
        };
      return o;
    }),
  l))
    f(l, p) &&
      ((r = p.toLowerCase()), (n[r] = l[p]()), h.push((n[r] ? "" : "no-") + r));
  return (
    (n.addTest = function(t, e) {
      if ("object" == typeof t) for (var r in t) f(t, r) && n.addTest(r, t[r]);
      else {
        if (((t = t.toLowerCase()), n[t] !== i)) return n;
        (e = "function" == typeof e ? e() : e),
          "undefined" != typeof enableClasses &&
            enableClasses &&
            (a.className += " " + (e ? "" : "no-") + t),
          (n[t] = e);
      }
      return n;
    }),
    e(""),
    (n._version = "2.8.0"),
    n
  );
})(this.document)),
  (function(t, x) {
    function u(t) {
      return "[object Function]" == n.call(t);
    }

    function y(t) {
      return "string" == typeof t;
    }

    function f() {}

    function m(t) {
      return !t || "loaded" == t || "complete" == t || "uninitialized" == t;
    }

    function b() {
      var t = k.shift();
      (C = 1),
        t
          ? t.t
            ? w(function() {
                ("c" == t.t
                  ? L.injectCss
                  : L.injectJs)(t.s, 0, t.a, t.x, t.e, 1);
              }, 0)
            : (t(), b())
          : (C = 0);
    }

    function e(t, e, r, i, n) {
      return (
        (C = 0),
        (e = e || "j"),
        y(t)
          ? ((o = "c" == e ? T : A),
            (s = t),
            (l = e),
            (h = this.i++),
            (c = r),
            (u = i),
            (f = (f = n) || L.errorTimeout),
            (p = x.createElement(o)),
            (g = d = 0),
            (v = {
              t: l,
              s: s,
              e: c,
              a: u,
              x: f
            }),
            1 === N[s] && ((g = 1), (N[s] = [])),
            "object" == o ? (p.data = s) : ((p.src = s), (p.type = o)),
            (p.width = p.height = "0"),
            (p.onerror = p.onload = p.onreadystatechange = function() {
              a.call(this, g);
            }),
            k.splice(h, 0, v),
            "img" != o &&
              (g || 2 === N[s]
                ? (S.insertBefore(p, B ? null : _), w(a, f))
                : N[s].push(p)))
          : (k.splice(this.i++, 0, t), 1 == k.length && b()),
        this
      );

      function a(t) {
        if (
          !d &&
          m(p.readyState) &&
          ((v.r = d = 1), C || b(), (p.onload = p.onreadystatechange = null), t)
        )
          for (var e in ("img" != o &&
            w(function() {
              S.removeChild(p);
            }, 50),
          N[s]))
            N[s].hasOwnProperty(e) && N[s][e].onload();
      }
      var o, s, l, h, c, u, f, p, d, g, v;
    }

    function s() {
      var t = L;
      return (
        (t.loader = {
          load: e,
          i: 0
        }),
        t
      );
    }
    var r,
      i = x.documentElement,
      w = t.setTimeout,
      _ = x.getElementsByTagName("script")[0],
      n = {}.toString,
      k = [],
      C = 0,
      a = "MozAppearance" in i.style,
      B = a && !!x.createRange().compareNode,
      S = B ? i : _.parentNode,
      i = t.opera && "[object Opera]" == n.call(t.opera),
      i = !!x.attachEvent && !i,
      A = a ? "object" : i ? "script" : "img",
      T = i ? "script" : A,
      o =
        Array.isArray ||
        function(t) {
          return "[object Array]" == n.call(t);
        },
      l = [],
      N = {},
      h = {
        timeout: function(t, e) {
          return e.length && (t.timeout = e[0]), t;
        }
      },
      L = function(t) {
        function c(t, e, r, i, n) {
          var a = (function(t) {
              for (
                var e,
                  r,
                  t = t.split("!"),
                  i = l.length,
                  n = t.pop(),
                  a = t.length,
                  n = {
                    url: n,
                    origUrl: n,
                    prefixes: t
                  },
                  o = 0;
                o < a;
                o++
              )
                (r = t[o].split("=")), (e = h[r.shift()]) && (n = e(n, r));
              for (o = 0; o < i; o++) n = l[o](n);
              return n;
            })(t),
            o = a.autoCallback;
          a.url
            .split(".")
            .pop()
            .split("?")
            .shift(),
            a.bypass ||
              ((e =
                e &&
                (u(e)
                  ? e
                  : e[t] ||
                    e[i] ||
                    e[
                      t
                        .split("/")
                        .pop()
                        .split("?")[0]
                    ])),
              a.instead
                ? a.instead(t, e, r, i, n)
                : (N[a.url] ? (a.noexec = !0) : (N[a.url] = 1),
                  r.load(
                    a.url,
                    a.forceCSS ||
                      (!a.forceJS &&
                        "css" ==
                          a.url
                            .split(".")
                            .pop()
                            .split("?")
                            .shift())
                      ? "c"
                      : void 0,
                    a.noexec,
                    a.attrs,
                    a.timeout
                  ),
                  (u(e) || u(o)) &&
                    r.load(function() {
                      s(),
                        e && e(a.origUrl, n, i),
                        o && o(a.origUrl, n, i),
                        (N[a.url] = 2);
                    })));
        }

        function e(t, e) {
          function r(r, t) {
            if (r) {
              if (y(r))
                t ||
                  (s = function() {
                    var t = [].slice.call(arguments);
                    l.apply(this, t), h();
                  }),
                  c(r, s, e, 0, a);
              else if (Object(r) === r)
                for (n in ((i = (function() {
                  var t,
                    e = 0;
                  for (t in r) r.hasOwnProperty(t) && e++;
                  return e;
                })()),
                r))
                  r.hasOwnProperty(n) &&
                    (t ||
                      --i ||
                      (u(s)
                        ? (s = function() {
                            var t = [].slice.call(arguments);
                            l.apply(this, t), h();
                          })
                        : (s[n] = (function(e) {
                            return function() {
                              var t = [].slice.call(arguments);
                              e && e.apply(this, t), h();
                            };
                          })(l[n]))),
                    c(r[n], s, e, n, a));
            } else t || h();
          }
          var i,
            n,
            a = !!t.test,
            o = t.load || t.both,
            s = t.callback || f,
            l = s,
            h = t.complete || f;
          r(a ? t.yep : t.nope, !!o), o && r(o);
        }
        var r,
          i,
          n = this.yepnope.loader;
        if (y(t)) c(t, 0, n, 0);
        else if (o(t))
          for (r = 0; r < t.length; r++)
            y((i = t[r]))
              ? c(i, 0, n, 0)
              : o(i)
              ? L(i)
              : Object(i) === i && e(i, n);
        else Object(t) === t && e(t, n);
      };
    (L.addPrefix = function(t, e) {
      h[t] = e;
    }),
      (L.addFilter = function(t) {
        l.push(t);
      }),
      (L.errorTimeout = 1e4),
      null == x.readyState &&
        x.addEventListener &&
        ((x.readyState = "loading"),
        x.addEventListener(
          "DOMContentLoaded",
          (r = function() {
            x.removeEventListener("DOMContentLoaded", r, 0),
              (x.readyState = "complete");
          }),
          0
        )),
      (t.yepnope = s()),
      (t.yepnope.executeStack = b),
      (t.yepnope.injectJs = function(t, e, r, i, n, a) {
        var o,
          s,
          l = x.createElement("script"),
          i = i || L.errorTimeout;
        for (s in ((l.src = t), r)) l.setAttribute(s, r[s]);
        (e = a ? b : e || f),
          (l.onreadystatechange = l.onload = function() {
            !o &&
              m(l.readyState) &&
              ((o = 1), e(), (l.onload = l.onreadystatechange = null));
          }),
          w(function() {
            o || e((o = 1));
          }, i),
          n ? l.onload() : _.parentNode.insertBefore(l, _);
      }),
      (t.yepnope.injectCss = function(t, e, r, i, n, a) {
        var o,
          i = x.createElement("link"),
          e = a ? b : e || f;
        for (o in ((i.href = t),
        (i.rel = "stylesheet"),
        (i.type = "text/css"),
        r))
          i.setAttribute(o, r[o]);
        n || (_.parentNode.insertBefore(i, _), w(e, 0));
      });
  })(this, document),
  // Modernizr.load = function () {
  //     yepnope.apply(window, [].slice.call(arguments, 0))
  // },
  (function(t, e) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.Raphael = e())
      : (t.Raphael = e());
  })(this, function() {
    return (
      (n = {}),
      (r.m = i = [
        function(t, e, r) {
          var i = [r(1), r(3), r(4)],
            n = function(t) {
              return t;
            }.apply(e, i);
          void 0 === n || (t.exports = n);
        },
        function(t, e, r) {
          var i = [r(2)],
            n = function(E) {
              function O(t) {
                if (O.is(t, "function"))
                  return o ? t() : E.on("raphael.DOMload", t);
                if (O.is(t, L))
                  return O._engine.create[b](
                    O,
                    t.splice(0, 3 + O.is(t[0], V))
                  ).add(t);
                var e = Array.prototype.slice.call(arguments, 0);
                if (O.is(e[e.length - 1], "function")) {
                  var r = e.pop();
                  return o
                    ? r.call(O._engine.create[b](O, e))
                    : E.on("raphael.DOMload", function() {
                        r.call(O._engine.create[b](O, e));
                      });
                }
                return O._engine.create[b](O, arguments);
              }

              function x(t) {
                if ("function" == typeof t || Object(t) !== t) return t;
                var e = new t.constructor();
                for (var r in t) t[j](r) && (e[r] = x(t[r]));
                return e;
              }

              function D(n, a, o) {
                function s() {
                  var t = Array.prototype.slice.call(arguments, 0),
                    e = t.join("␀"),
                    r = (s.cache = s.cache || {}),
                    i = (s.count = s.count || []);
                  return (
                    r[j](e)
                      ? (function(t, e) {
                          for (var r = 0, i = t.length; r < i; r++)
                            if (t[r] === e) return t.push(t.splice(r, 1)[0]);
                        })(i, e)
                      : (1e3 <= i.length && delete r[i.shift()],
                        i.push(e),
                        (r[e] = n[b](a, t))),
                    o ? o(r[e]) : r[e]
                  );
                }
                return s;
              }

              function l() {
                return this.hex;
              }

              function y(t, e) {
                for (var r = [], i = 0, n = t.length; i < n - 2 * !e; i += 2) {
                  var a = [
                    {
                      x: +t[i - 2],
                      y: +t[i - 1]
                    },
                    {
                      x: +t[i],
                      y: +t[i + 1]
                    },
                    {
                      x: +t[i + 2],
                      y: +t[i + 3]
                    },
                    {
                      x: +t[i + 4],
                      y: +t[i + 5]
                    }
                  ];
                  e
                    ? i
                      ? n - 4 == i
                        ? (a[3] = {
                            x: +t[0],
                            y: +t[1]
                          })
                        : n - 2 == i &&
                          ((a[2] = {
                            x: +t[0],
                            y: +t[1]
                          }),
                          (a[3] = {
                            x: +t[2],
                            y: +t[3]
                          }))
                      : (a[0] = {
                          x: +t[n - 2],
                          y: +t[n - 1]
                        })
                    : n - 4 == i
                    ? (a[3] = a[2])
                    : i ||
                      (a[0] = {
                        x: +t[i],
                        y: +t[i + 1]
                      }),
                    r.push([
                      "C",
                      (-a[0].x + 6 * a[1].x + a[2].x) / 6,
                      (-a[0].y + 6 * a[1].y + a[2].y) / 6,
                      (a[1].x + 6 * a[2].x - a[3].x) / 6,
                      (a[1].y + 6 * a[2].y - a[3].y) / 6,
                      a[2].x,
                      a[2].y
                    ]);
                }
                return r;
              }

              function m(t, e, r, i, n) {
                return (
                  t *
                    (t * (-3 * e + 9 * r - 9 * i + 3 * n) +
                      6 * e -
                      12 * r +
                      6 * i) -
                  3 * e +
                  3 * r
                );
              }

              function B(t, e, r, i, n, a, o, s, l) {
                null == l && (l = 1);
                for (
                  var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2,
                    c = [
                      -0.1252,
                      0.1252,
                      -0.3678,
                      0.3678,
                      -0.5873,
                      0.5873,
                      -0.7699,
                      0.7699,
                      -0.9041,
                      0.9041,
                      -0.9816,
                      0.9816
                    ],
                    u = [
                      0.2491,
                      0.2491,
                      0.2335,
                      0.2335,
                      0.2032,
                      0.2032,
                      0.1601,
                      0.1601,
                      0.1069,
                      0.1069,
                      0.0472,
                      0.0472
                    ],
                    f = 0,
                    p = 0;
                  p < 12;
                  p++
                ) {
                  var d = h * c[p] + h,
                    g = m(d, t, r, n, o),
                    v = m(d, e, i, a, s),
                    x = g * g + v * v;
                  f += u[p] * H.sqrt(x);
                }
                return h * f;
              }

              function k(t, e, r) {
                var i = O.bezierBBox(t),
                  n = O.bezierBBox(e);
                if (!O.isBBoxIntersect(i, n)) return r ? 0 : [];
                for (
                  var a = B.apply(0, t),
                    o = B.apply(0, e),
                    s = S(~~(a / 5), 1),
                    l = S(~~(o / 5), 1),
                    h = [],
                    c = [],
                    u = {},
                    f = r ? 0 : [],
                    p = 0;
                  p < s + 1;
                  p++
                ) {
                  var d = O.findDotsAtSegment.apply(O, t.concat(p / s));
                  h.push({
                    x: d.x,
                    y: d.y,
                    t: p / s
                  });
                }
                for (p = 0; p < l + 1; p++)
                  (d = O.findDotsAtSegment.apply(O, e.concat(p / l))),
                    c.push({
                      x: d.x,
                      y: d.y,
                      t: p / l
                    });
                for (p = 0; p < s; p++)
                  for (var g = 0; g < l; g++) {
                    var v = h[p],
                      x = h[p + 1],
                      y = c[g],
                      m = c[g + 1],
                      b = Y(x.x - v.x) < 0.001 ? "y" : "x",
                      w = Y(m.x - y.x) < 0.001 ? "y" : "x",
                      _ = (function(t, e, r, i, n, a, o, s) {
                        if (
                          !(
                            S(t, r) < A(n, o) ||
                            A(t, r) > S(n, o) ||
                            S(e, i) < A(a, s) ||
                            A(e, i) > S(a, s)
                          )
                        ) {
                          var l = (t - r) * (a - s) - (e - i) * (n - o);
                          if (l) {
                            var h =
                                ((t * i - e * r) * (n - o) -
                                  (t - r) * (n * s - a * o)) /
                                l,
                              c =
                                ((t * i - e * r) * (a - s) -
                                  (e - i) * (n * s - a * o)) /
                                l,
                              u = +h.toFixed(2),
                              f = +c.toFixed(2);
                            if (
                              !(
                                u < +A(t, r).toFixed(2) ||
                                u > +S(t, r).toFixed(2) ||
                                u < +A(n, o).toFixed(2) ||
                                u > +S(n, o).toFixed(2) ||
                                f < +A(e, i).toFixed(2) ||
                                f > +S(e, i).toFixed(2) ||
                                f < +A(a, s).toFixed(2) ||
                                f > +S(a, s).toFixed(2)
                              )
                            )
                              return {
                                x: h,
                                y: c
                              };
                          }
                        }
                      })(v.x, v.y, x.x, x.y, y.x, y.y, m.x, m.y);
                    if (_) {
                      if (u[_.x.toFixed(4)] == _.y.toFixed(4)) continue;
                      u[_.x.toFixed(4)] = _.y.toFixed(4);
                      var k =
                          v.t + Y((_[b] - v[b]) / (x[b] - v[b])) * (x.t - v.t),
                        C =
                          y.t + Y((_[w] - y[w]) / (m[w] - y[w])) * (m.t - y.t);
                      0 <= k &&
                        k <= 1.001 &&
                        0 <= C &&
                        C <= 1.001 &&
                        (r
                          ? f++
                          : f.push({
                              x: _.x,
                              y: _.y,
                              t1: A(k, 1),
                              t2: A(C, 1)
                            }));
                    }
                  }
                return f;
              }

              function n(t, e, r) {
                (t = O._path2curve(t)), (e = O._path2curve(e));
                for (
                  var i,
                    n,
                    a,
                    o,
                    s,
                    l,
                    h,
                    c,
                    u,
                    f,
                    p = r ? 0 : [],
                    d = 0,
                    g = t.length;
                  d < g;
                  d++
                ) {
                  var v = t[d];
                  if ("M" == v[0]) (i = s = v[1]), (n = l = v[2]);
                  else {
                    n =
                      "C" == v[0]
                        ? ((i = (u = [i, n].concat(v.slice(1)))[6]), u[7])
                        : ((u = [i, n, i, n, s, l, s, l]), (i = s), l);
                    for (var x = 0, y = e.length; x < y; x++) {
                      var m = e[x];
                      if ("M" == m[0]) (a = h = m[1]), (o = c = m[2]);
                      else {
                        o =
                          "C" == m[0]
                            ? ((a = (f = [a, o].concat(m.slice(1)))[6]), f[7])
                            : ((f = [a, o, a, o, h, c, h, c]), (a = h), c);
                        var b = k(u, f, r);
                        if (r) p += b;
                        else {
                          for (var w = 0, _ = b.length; w < _; w++)
                            (b[w].segment1 = d),
                              (b[w].segment2 = x),
                              (b[w].bez1 = u),
                              (b[w].bez2 = f);
                          p = p.concat(b);
                        }
                      }
                    }
                  }
                }
                return p;
              }

              function z(t, e, r, i, n, a) {
                null != t
                  ? ((this.a = +t),
                    (this.b = +e),
                    (this.c = +r),
                    (this.d = +i),
                    (this.e = +n),
                    (this.f = +a))
                  : ((this.a = 1),
                    (this.b = 0),
                    (this.c = 0),
                    (this.d = 1),
                    (this.e = 0),
                    (this.f = 0));
              }

              function r() {
                return (
                  this.x + C + this.y + C + this.width + " × " + this.height
                );
              }

              function R(t, e, r, i, n, a) {
                function l(t) {
                  return ((u * t + c) * t + h) * t;
                }
                var o,
                  h = 3 * e,
                  c = 3 * (i - e) - h,
                  u = 1 - h - c,
                  s = 3 * r,
                  f = 3 * (n - r) - s,
                  p = 1 - s - f;
                return (
                  (o = (function(t, e) {
                    var r, i, n, a, o, s;
                    for (n = t, s = 0; s < 8; s++) {
                      if (((a = l(n) - t), Y(a) < e)) return n;
                      if (Y((o = (3 * u * n + 2 * c) * n + h)) < 1e-6) break;
                      n -= a / o;
                    }
                    if (((i = 1), (n = t) < (r = 0))) return r;
                    if (i < n) return i;
                    for (; r < i; ) {
                      if (((a = l(n)), Y(a - t) < e)) return n;
                      a < t ? (r = n) : (i = n), (n = (i - r) / 2 + r);
                    }
                    return n;
                  })(t, 1 / (200 * a))),
                  ((p * o + f) * o + s) * o
                );
              }

              function c(t, e) {
                var r = [],
                  i = {};
                if (((this.ms = e), (this.times = 1), t)) {
                  for (var n in t) t[j](n) && ((i[Z(n)] = t[n]), r.push(Z(n)));
                  r.sort(a);
                }
                (this.anim = i),
                  (this.top = r[r.length - 1]),
                  (this.percents = r);
              }

              function _(t, e, r, i, n, a) {
                r = Z(r);
                var o,
                  s,
                  l,
                  h,
                  c,
                  u,
                  f = t.ms,
                  p = {},
                  d = {},
                  g = {};
                if (i)
                  for (x = 0, y = ae.length; x < y; x++) {
                    var v = ae[x];
                    if (v.el.id == e.id && v.anim == t) {
                      v.percent != r ? (ae.splice(x, 1), (l = 1)) : (s = v),
                        e.attr(v.totalOrigin);
                      break;
                    }
                  }
                else i = +d;
                for (var x = 0, y = t.percents.length; x < y; x++) {
                  if (t.percents[x] == r || t.percents[x] > i * t.top) {
                    (r = t.percents[x]),
                      (c = t.percents[x - 1] || 0),
                      (f = (f / t.top) * (r - c)),
                      (h = t.percents[x + 1]),
                      (o = t.anim[r]);
                    break;
                  }
                  i && e.attr(t.anim[t.percents[x]]);
                }
                if (o) {
                  if (s) (s.initstatus = i), (s.start = new Date() - s.ms * i);
                  else {
                    for (var m in o)
                      if (
                        o[j](m) &&
                        (tt[j](m) || e.paper.customAttributes[j](m))
                      )
                        switch (
                          ((p[m] = e.attr(m)),
                          null == p[m] && (p[m] = K[m]),
                          (d[m] = o[m]),
                          tt[m])
                        ) {
                          case V:
                            g[m] = (d[m] - p[m]) / f;
                            break;
                          case "colour":
                            p[m] = O.getRGB(p[m]);
                            var b = O.getRGB(d[m]);
                            g[m] = {
                              r: (b.r - p[m].r) / f,
                              g: (b.g - p[m].g) / f,
                              b: (b.b - p[m].b) / f
                            };
                            break;
                          case "path":
                            var w = Et(p[m], d[m]),
                              _ = w[1];
                            for (
                              p[m] = w[0], g[m] = [], x = 0, y = p[m].length;
                              x < y;
                              x++
                            ) {
                              g[m][x] = [0];
                              for (var k = 1, C = p[m][x].length; k < C; k++)
                                g[m][x][k] = (_[x][k] - p[m][x][k]) / f;
                            }
                            break;
                          case "transform":
                            var B = e._,
                              S = Pt(B[m], d[m]);
                            if (S)
                              for (
                                p[m] = S.from,
                                  d[m] = S.to,
                                  g[m] = [],
                                  g[m].real = !0,
                                  x = 0,
                                  y = p[m].length;
                                x < y;
                                x++
                              )
                                for (
                                  g[m][x] = [p[m][x][0]],
                                    k = 1,
                                    C = p[m][x].length;
                                  k < C;
                                  k++
                                )
                                  g[m][x][k] = (d[m][x][k] - p[m][x][k]) / f;
                            else {
                              var A = e.matrix || new z(),
                                T = {
                                  _: {
                                    transform: B.transform
                                  },
                                  getBBox: function() {
                                    return e.getBBox(1);
                                  }
                                };
                              (p[m] = [A.a, A.b, A.c, A.d, A.e, A.f]),
                                Rt(T, d[m]),
                                (d[m] = T._.transform),
                                (g[m] = [
                                  (T.matrix.a - A.a) / f,
                                  (T.matrix.b - A.b) / f,
                                  (T.matrix.c - A.c) / f,
                                  (T.matrix.d - A.d) / f,
                                  (T.matrix.e - A.e) / f,
                                  (T.matrix.f - A.f) / f
                                ]);
                            }
                            break;
                          case "csv":
                            var N = $(o[m])[W](P),
                              L = $(p[m])[W](P);
                            if ("clip-rect" == m)
                              for (p[m] = L, g[m] = [], x = L.length; x--; )
                                g[m][x] = (N[x] - p[m][x]) / f;
                            d[m] = N;
                            break;
                          default:
                            for (
                              N = [][q](o[m]),
                                L = [][q](p[m]),
                                g[m] = [],
                                x = e.paper.customAttributes[m].length;
                              x--;

                            )
                              g[m][x] = ((N[x] || 0) - (L[x] || 0)) / f;
                        }
                    var I,
                      F = o.easing,
                      M = O.easing_formulas[F];
                    if (
                      ((M =
                        M ||
                        ((M = $(F).match(G)) && 5 == M.length
                          ? ((I = M),
                            function(t) {
                              return R(t, +I[1], +I[2], +I[3], +I[4], f);
                            })
                          : lt)),
                      (v = {
                        anim: t,
                        percent: r,
                        timestamp: (u = o.start || t.start || +new Date()),
                        start: u + (t.del || 0),
                        status: 0,
                        initstatus: i || 0,
                        stop: !1,
                        ms: f,
                        easing: M,
                        from: p,
                        diff: g,
                        to: d,
                        el: e,
                        callback: o.callback,
                        prev: c,
                        next: h,
                        repeat: a || t.times,
                        origin: e.attr(),
                        totalOrigin: n
                      }),
                      ae.push(v),
                      i &&
                        !s &&
                        !l &&
                        ((v.stop = !0),
                        (v.start = new Date() - f * i),
                        1 == ae.length))
                    )
                      return se();
                    l && (v.start = new Date() - v.ms * i),
                      1 == ae.length && oe(se);
                  }
                  E("raphael.anim.start." + e.id, e, t);
                }
              }

              function t(t) {
                for (var e = 0; e < ae.length; e++)
                  ae[e].el.paper == t && ae.splice(e--, 1);
              }
              (O.version = "2.2.0"), (O.eve = E);

              function e() {
                this.ca = this.customAttributes = {};
              }

              function a(t, e) {
                return Z(t) - Z(e);
              }

              function i(t, e, r, i) {
                return (
                  null == i && (i = r),
                  [
                    ["M", t, e],
                    ["m", 0, -i],
                    ["a", r, i, 0, 1, 1, 0, 2 * i],
                    ["a", r, i, 0, 1, 1, 0, -2 * i],
                    ["z"]
                  ]
                );
              }
              var o,
                s,
                P = /[, ]+/,
                h = {
                  circle: 1,
                  rect: 1,
                  path: 1,
                  ellipse: 1,
                  text: 1,
                  image: 1
                },
                u = /\{(\d+)\}/g,
                j = "hasOwnProperty",
                d = {
                  doc: document,
                  win: window
                },
                f = {
                  was: Object.prototype[j].call(d.win, "Raphael"),
                  is: d.win.Raphael
                },
                b = "apply",
                q = "concat",
                g =
                  "ontouchstart" in d.win ||
                  (d.win.DocumentTouch && d.doc instanceof DocumentTouch),
                C = " ",
                $ = String,
                W = "split",
                p = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[
                  W
                ](C),
                v = {
                  mousedown: "touchstart",
                  mousemove: "touchmove",
                  mouseup: "touchend"
                },
                w = $.prototype.toLowerCase,
                H = Math,
                S = H.max,
                A = H.min,
                Y = H.abs,
                T = H.pow,
                U = H.PI,
                V = "number",
                N = "string",
                L = "array",
                I = Object.prototype.toString,
                F =
                  ((O._ISURL = /^url\(['"]?(.+?)['"]?\)$/i),
                  /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                M = {
                  NaN: 1,
                  Infinity: 1,
                  "-Infinity": 1
                },
                G = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                X = H.round,
                Z = parseFloat,
                J = parseInt,
                Q = $.prototype.toUpperCase,
                K = (O._availableAttrs = {
                  "arrow-end": "none",
                  "arrow-start": "none",
                  blur: 0,
                  "clip-rect": "0 0 1e9 1e9",
                  cursor: "default",
                  cx: 0,
                  cy: 0,
                  fill: "#fff",
                  "fill-opacity": 1,
                  font: '10px "Arial"',
                  "font-family": '"Arial"',
                  "font-size": "10",
                  "font-style": "normal",
                  "font-weight": 400,
                  gradient: 0,
                  height: 0,
                  href: "http://raphaeljs.com/",
                  "letter-spacing": 0,
                  opacity: 1,
                  path: "M0,0",
                  r: 0,
                  rx: 0,
                  ry: 0,
                  src: "",
                  stroke: "#000",
                  "stroke-dasharray": "",
                  "stroke-linecap": "butt",
                  "stroke-linejoin": "butt",
                  "stroke-miterlimit": 0,
                  "stroke-opacity": 1,
                  "stroke-width": 1,
                  target: "_blank",
                  "text-anchor": "middle",
                  title: "Raphael",
                  transform: "",
                  width: 0,
                  x: 0,
                  y: 0,
                  class: ""
                }),
                tt = (O._availableAnimAttrs = {
                  blur: V,
                  "clip-rect": "csv",
                  cx: V,
                  cy: V,
                  fill: "colour",
                  "fill-opacity": V,
                  "font-size": V,
                  height: V,
                  opacity: V,
                  path: "path",
                  r: V,
                  rx: V,
                  ry: V,
                  stroke: "colour",
                  "stroke-opacity": V,
                  "stroke-width": V,
                  transform: "transform",
                  width: V,
                  x: V,
                  y: V
                }),
                et = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                rt = {
                  hs: 1,
                  rg: 1
                },
                it = /,?([achlmqrstvxz]),?/gi,
                nt = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                at = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                ot = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                st =
                  ((O._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
                  {}),
                lt = function(t) {
                  return t;
                },
                ht = (O._rectPath = function(t, e, r, i, n) {
                  return n
                    ? [
                        ["M", t + n, e],
                        ["l", r - 2 * n, 0],
                        ["a", n, n, 0, 0, 1, n, n],
                        ["l", 0, i - 2 * n],
                        ["a", n, n, 0, 0, 1, -n, n],
                        ["l", 2 * n - r, 0],
                        ["a", n, n, 0, 0, 1, -n, -n],
                        ["l", 0, 2 * n - i],
                        ["a", n, n, 0, 0, 1, n, -n],
                        ["z"]
                      ]
                    : [
                        ["M", t, e],
                        ["l", r, 0],
                        ["l", 0, i],
                        ["l", -r, 0],
                        ["z"]
                      ];
                }),
                ct = (O._getPath = {
                  path: function(t) {
                    return t.attr("path");
                  },
                  circle: function(t) {
                    var e = t.attrs;
                    return i(e.cx, e.cy, e.r);
                  },
                  ellipse: function(t) {
                    var e = t.attrs;
                    return i(e.cx, e.cy, e.rx, e.ry);
                  },
                  rect: function(t) {
                    var e = t.attrs;
                    return ht(e.x, e.y, e.width, e.height, e.r);
                  },
                  image: function(t) {
                    var e = t.attrs;
                    return ht(e.x, e.y, e.width, e.height);
                  },
                  text: function(t) {
                    var e = t._getBBox();
                    return ht(e.x, e.y, e.width, e.height);
                  },
                  set: function(t) {
                    var e = t._getBBox();
                    return ht(e.x, e.y, e.width, e.height);
                  }
                }),
                ut = (O.mapPath = function(t, e) {
                  if (!e) return t;
                  for (
                    var r, i, n, a, o, s = 0, l = (t = Et(t)).length;
                    s < l;
                    s++
                  )
                    for (n = 1, a = (o = t[s]).length; n < a; n += 2)
                      (r = e.x(o[n], o[n + 1])),
                        (i = e.y(o[n], o[n + 1])),
                        (o[n] = r),
                        (o[n + 1] = i);
                  return t;
                });
              if (
                ((O._g = d),
                (O.type =
                  d.win.SVGAngle ||
                  d.doc.implementation.hasFeature(
                    "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                    "1.1"
                  )
                    ? "SVG"
                    : "VML"),
                "VML" == O.type)
              ) {
                var ft,
                  pt = d.doc.createElement("div");
                if (
                  ((pt.innerHTML = '<v:shape adj="1"/>'),
                  ((ft = pt.firstChild).style.behavior = "url(#default#VML)"),
                  !ft || "object" != typeof ft.adj)
                )
                  return (O.type = "");
                pt = null;
              }
              (O.svg = !(O.vml = "VML" == O.type)),
                (O._Paper = e),
                (O.fn = s = e.prototype = O.prototype),
                (O._id = 0),
                (O.is = function(t, e) {
                  return "finite" == (e = w.call(e))
                    ? !M[j](+t)
                    : "array" == e
                    ? t instanceof Array
                    : ("null" == e && null === t) ||
                      (e == typeof t && null !== t) ||
                      ("object" == e && t === Object(t)) ||
                      ("array" == e && Array.isArray && Array.isArray(t)) ||
                      I.call(t)
                        .slice(8, -1)
                        .toLowerCase() == e;
                }),
                (O.angle = function(t, e, r, i, n, a) {
                  if (null != n)
                    return O.angle(t, e, n, a) - O.angle(r, i, n, a);
                  var o = t - r,
                    s = e - i;
                  return o || s
                    ? (180 + (180 * H.atan2(-s, -o)) / U + 360) % 360
                    : 0;
                }),
                (O.rad = function(t) {
                  return ((t % 360) * U) / 180;
                }),
                (O.deg = function(t) {
                  return Math.round((((180 * t) / U) % 360) * 1e3) / 1e3;
                }),
                (O.snapTo = function(t, e, r) {
                  if (((r = O.is(r, "finite") ? r : 10), O.is(t, L))) {
                    for (var i = t.length; i--; )
                      if (Y(t[i] - e) <= r) return t[i];
                  } else {
                    var n = e % (t = +t);
                    if (n < r) return e - n;
                    if (t - r < n) return e - n + t;
                  }
                  return e;
                });
              var dt, gt;
              O.createUUID =
                ((dt = /[xy]/g),
                (gt = function(t) {
                  var e = (16 * H.random()) | 0;
                  return ("x" == t ? e : (3 & e) | 8).toString(16);
                }),
                function() {
                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
                    .replace(dt, gt)
                    .toUpperCase();
                });
              O.setWindow = function(t) {
                E("raphael.setWindow", O, d.win, t),
                  (d.win = t),
                  (d.doc = d.win.document),
                  O._engine.initWin && O._engine.initWin(d.win);
              };

              function vt() {
                return "hsb(" + [this.h, this.s, this.b] + ")";
              }

              function xt() {
                return "hsl(" + [this.h, this.s, this.l] + ")";
              }

              function yt() {
                return this.hex;
              }

              function mt(t, e, r) {
                var i;
                return (
                  null == e &&
                    O.is(t, "object") &&
                    "r" in t &&
                    "g" in t &&
                    "b" in t &&
                    ((r = t.b), (e = t.g), (t = t.r)),
                  null == e &&
                    O.is(t, N) &&
                    ((t = (i = O.getRGB(t)).r), (e = i.g), (r = i.b)),
                  (1 < t || 1 < e || 1 < r) &&
                    ((t /= 255), (e /= 255), (r /= 255)),
                  [t, e, r]
                );
              }

              function bt(t, e, r, i) {
                var n = {
                  r: (t *= 255),
                  g: (e *= 255),
                  b: (r *= 255),
                  hex: O.rgb(t, e, r),
                  toString: yt
                };
                return O.is(i, "finite") && (n.opacity = i), n;
              }
              var wt = function(t) {
                if (O.vml) {
                  var r,
                    i = /^\s+|\s+$/g;
                  try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), (r = e.body);
                  } catch (t) {
                    r = createPopup().document.body;
                  }
                  var n = r.createTextRange();
                  wt = D(function(t) {
                    try {
                      r.style.color = $(t).replace(i, "");
                      var e = n.queryCommandValue("ForeColor");
                      return (
                        "#" +
                        (
                          "000000" +
                          (e =
                            ((255 & e) << 16) |
                            (65280 & e) |
                            ((16711680 & e) >>> 16)).toString(16)
                        ).slice(-6)
                      );
                    } catch (t) {
                      return "none";
                    }
                  });
                } else {
                  var a = d.doc.createElement("i");
                  (a.title = "Raphaël Colour Picker"),
                    (a.style.display = "none"),
                    d.doc.body.appendChild(a),
                    (wt = D(function(t) {
                      return (
                        (a.style.color = t),
                        d.doc.defaultView
                          .getComputedStyle(a, "")
                          .getPropertyValue("color")
                      );
                    }));
                }
                return wt(t);
              };
              (O.color = function(t) {
                var e;
                return (
                  O.is(t, "object") && "h" in t && "s" in t && "b" in t
                    ? ((e = O.hsb2rgb(t)),
                      (t.r = e.r),
                      (t.g = e.g),
                      (t.b = e.b),
                      (t.hex = e.hex))
                    : O.is(t, "object") && "h" in t && "s" in t && "l" in t
                    ? ((e = O.hsl2rgb(t)),
                      (t.r = e.r),
                      (t.g = e.g),
                      (t.b = e.b),
                      (t.hex = e.hex))
                    : (O.is(t, "string") && (t = O.getRGB(t)),
                      O.is(t, "object") && "r" in t && "g" in t && "b" in t
                        ? ((e = O.rgb2hsl(t)),
                          (t.h = e.h),
                          (t.s = e.s),
                          (t.l = e.l),
                          (e = O.rgb2hsb(t)),
                          (t.v = e.b))
                        : ((t = {
                            hex: "none"
                          }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1)),
                  (t.toString = yt),
                  t
                );
              }),
                (O.hsb2rgb = function(t, e, r, i) {
                  var n, a, o, s, l;
                  return (
                    this.is(t, "object") &&
                      "h" in t &&
                      "s" in t &&
                      "b" in t &&
                      ((r = t.b), (e = t.s), (i = t.o), (t = t.h)),
                    (s =
                      (l = r * e) *
                      (1 - Y(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                    (n = a = o = r - l),
                    bt(
                      (n += [l, s, 0, 0, s, l][(t = ~~t)]),
                      (a += [s, l, l, s, 0, 0][t]),
                      (o += [0, 0, s, l, l, s][t]),
                      i
                    )
                  );
                }),
                (O.hsl2rgb = function(t, e, r, i) {
                  var n, a, o, s, l;
                  return (
                    this.is(t, "object") &&
                      "h" in t &&
                      "s" in t &&
                      "l" in t &&
                      ((r = t.l), (e = t.s), (t = t.h)),
                    (1 < t || 1 < e || 1 < r) &&
                      ((t /= 360), (e /= 100), (r /= 100)),
                    (s =
                      (l = 2 * e * (r < 0.5 ? r : 1 - r)) *
                      (1 - Y(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                    (n = a = o = r - l / 2),
                    bt(
                      (n += [l, s, 0, 0, s, l][(t = ~~t)]),
                      (a += [s, l, l, s, 0, 0][t]),
                      (o += [0, 0, s, l, l, s][t]),
                      i
                    )
                  );
                }),
                (O.rgb2hsb = function(t, e, r) {
                  var i, n;
                  return (
                    (t = (r = mt(t, e, r))[0]),
                    (e = r[1]),
                    (r = r[2]),
                    {
                      h:
                        ((((0 == (n = (i = S(t, e, r)) - A(t, e, r))
                          ? null
                          : i == t
                          ? (e - r) / n
                          : i == e
                          ? (r - t) / n + 2
                          : (t - e) / n + 4) +
                          360) %
                          6) *
                          60) /
                        360,
                      s: 0 == n ? 0 : n / i,
                      b: i,
                      toString: vt
                    }
                  );
                }),
                (O.rgb2hsl = function(t, e, r) {
                  var i, n, a, o;
                  return (
                    (t = (r = mt(t, e, r))[0]),
                    (e = r[1]),
                    (r = r[2]),
                    (i = ((n = S(t, e, r)) + (a = A(t, e, r))) / 2),
                    {
                      h:
                        ((((0 == (o = n - a)
                          ? null
                          : n == t
                          ? (e - r) / o
                          : n == e
                          ? (r - t) / o + 2
                          : (t - e) / o + 4) +
                          360) %
                          6) *
                          60) /
                        360,
                      s: 0 == o ? 0 : i < 0.5 ? o / (2 * i) : o / (2 - 2 * i),
                      l: i,
                      toString: xt
                    }
                  );
                }),
                (O._path2string = function() {
                  return this.join(",").replace(it, "$1");
                });
              O._preload = function(t, e) {
                var r = d.doc.createElement("img");
                (r.style.cssText =
                  "position:absolute;left:-9999em;top:-9999em"),
                  (r.onload = function() {
                    e.call(this),
                      (this.onload = null),
                      d.doc.body.removeChild(this);
                  }),
                  (r.onerror = function() {
                    d.doc.body.removeChild(this);
                  }),
                  d.doc.body.appendChild(r),
                  (r.src = t);
              };
              (O.getRGB = D(function(t) {
                if (!t || (t = $(t)).indexOf("-") + 1)
                  return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: l
                  };
                if ("none" == t)
                  return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: l
                  };
                rt[j](t.toLowerCase().substring(0, 2)) ||
                  "#" == t.charAt() ||
                  (t = wt(t));
                var e,
                  r,
                  i,
                  n,
                  a,
                  o,
                  s = t.match(F);
                return s
                  ? (s[2] &&
                      ((i = J(s[2].substring(5), 16)),
                      (r = J(s[2].substring(3, 5), 16)),
                      (e = J(s[2].substring(1, 3), 16))),
                    s[3] &&
                      ((i = J((a = s[3].charAt(3)) + a, 16)),
                      (r = J((a = s[3].charAt(2)) + a, 16)),
                      (e = J((a = s[3].charAt(1)) + a, 16))),
                    s[4] &&
                      ((o = s[4][W](et)),
                      (e = Z(o[0])),
                      "%" == o[0].slice(-1) && (e *= 2.55),
                      (r = Z(o[1])),
                      "%" == o[1].slice(-1) && (r *= 2.55),
                      (i = Z(o[2])),
                      "%" == o[2].slice(-1) && (i *= 2.55),
                      "rgba" == s[1].toLowerCase().slice(0, 4) && (n = Z(o[3])),
                      o[3] && "%" == o[3].slice(-1) && (n /= 100)),
                    s[5]
                      ? ((o = s[5][W](et)),
                        (e = Z(o[0])),
                        "%" == o[0].slice(-1) && (e *= 2.55),
                        (r = Z(o[1])),
                        "%" == o[1].slice(-1) && (r *= 2.55),
                        (i = Z(o[2])),
                        "%" == o[2].slice(-1) && (i *= 2.55),
                        ("deg" != o[0].slice(-3) && "°" != o[0].slice(-1)) ||
                          (e /= 360),
                        "hsba" == s[1].toLowerCase().slice(0, 4) &&
                          (n = Z(o[3])),
                        o[3] && "%" == o[3].slice(-1) && (n /= 100),
                        O.hsb2rgb(e, r, i, n))
                      : s[6]
                      ? ((o = s[6][W](et)),
                        (e = Z(o[0])),
                        "%" == o[0].slice(-1) && (e *= 2.55),
                        (r = Z(o[1])),
                        "%" == o[1].slice(-1) && (r *= 2.55),
                        (i = Z(o[2])),
                        "%" == o[2].slice(-1) && (i *= 2.55),
                        ("deg" != o[0].slice(-3) && "°" != o[0].slice(-1)) ||
                          (e /= 360),
                        "hsla" == s[1].toLowerCase().slice(0, 4) &&
                          (n = Z(o[3])),
                        o[3] && "%" == o[3].slice(-1) && (n /= 100),
                        O.hsl2rgb(e, r, i, n))
                      : (((s = {
                          r: e,
                          g: r,
                          b: i,
                          toString: l
                        }).hex =
                          "#" +
                          (16777216 | i | (r << 8) | (e << 16))
                            .toString(16)
                            .slice(1)),
                        O.is(n, "finite") && (s.opacity = n),
                        s))
                  : {
                      r: -1,
                      g: -1,
                      b: -1,
                      hex: "none",
                      error: 1,
                      toString: l
                    };
              }, O)),
                (O.hsb = D(function(t, e, r) {
                  return O.hsb2rgb(t, e, r).hex;
                })),
                (O.hsl = D(function(t, e, r) {
                  return O.hsl2rgb(t, e, r).hex;
                })),
                (O.rgb = D(function(t, e, r) {
                  function i(t) {
                    return (t + 0.5) | 0;
                  }
                  return (
                    "#" +
                    (16777216 | i(r) | (i(e) << 8) | (i(t) << 16))
                      .toString(16)
                      .slice(1)
                  );
                })),
                (O.getColor = function(t) {
                  var e = (this.getColor.start = this.getColor.start || {
                      h: 0,
                      s: 1,
                      b: t || 0.75
                    }),
                    r = this.hsb2rgb(e.h, e.s, e.b);
                  return (
                    (e.h += 0.075),
                    1 < e.h &&
                      ((e.h = 0),
                      (e.s -= 0.2),
                      e.s <= 0 &&
                        (this.getColor.start = {
                          h: 0,
                          s: 1,
                          b: e.b
                        })),
                    r.hex
                  );
                }),
                (O.getColor.reset = function() {
                  delete this.start;
                }),
                (O.parsePathString = function(t) {
                  if (!t) return null;
                  var e = _t(t);
                  if (e.arr) return Nt(e.arr);
                  var a = {
                      a: 7,
                      c: 6,
                      h: 1,
                      l: 2,
                      m: 2,
                      r: 4,
                      q: 4,
                      s: 4,
                      t: 2,
                      v: 1,
                      z: 0
                    },
                    o = [];
                  return (
                    O.is(t, L) && O.is(t[0], L) && (o = Nt(t)),
                    o.length ||
                      $(t).replace(nt, function(t, e, r) {
                        var i = [],
                          n = e.toLowerCase();
                        if (
                          (r.replace(ot, function(t, e) {
                            e && i.push(+e);
                          }),
                          "m" == n &&
                            2 < i.length &&
                            (o.push([e][q](i.splice(0, 2))),
                            (n = "l"),
                            (e = "m" == e ? "l" : "L")),
                          "r" == n)
                        )
                          o.push([e][q](i));
                        else
                          for (
                            ;
                            i.length >= a[n] &&
                            (o.push([e][q](i.splice(0, a[n]))), a[n]);

                          );
                      }),
                    (o.toString = O._path2string),
                    (e.arr = Nt(o)),
                    o
                  );
                }),
                (O.parseTransformString = D(function(t) {
                  if (!t) return null;
                  var n = [];
                  return (
                    O.is(t, L) && O.is(t[0], L) && (n = Nt(t)),
                    n.length ||
                      $(t).replace(at, function(t, e, r) {
                        var i = [];
                        w.call(e);
                        r.replace(ot, function(t, e) {
                          e && i.push(+e);
                        }),
                          n.push([e][q](i));
                      }),
                    (n.toString = O._path2string),
                    n
                  );
                }));
              var _t = function(e) {
                var r = (_t.ps = _t.ps || {});
                return (
                  r[e]
                    ? (r[e].sleep = 100)
                    : (r[e] = {
                        sleep: 100
                      }),
                  setTimeout(function() {
                    for (var t in r)
                      r[j](t) &&
                        t != e &&
                        (r[t].sleep--, r[t].sleep || delete r[t]);
                  }),
                  r[e]
                );
              };
              (O.findDotsAtSegment = function(t, e, r, i, n, a, o, s, l) {
                var h = 1 - l,
                  c = T(h, 3),
                  u = T(h, 2),
                  f = l * l,
                  p = f * l,
                  d = c * t + 3 * u * l * r + 3 * h * l * l * n + p * o,
                  g = c * e + 3 * u * l * i + 3 * h * l * l * a + p * s,
                  v = t + 2 * l * (r - t) + f * (n - 2 * r + t),
                  x = e + 2 * l * (i - e) + f * (a - 2 * i + e),
                  y = r + 2 * l * (n - r) + f * (o - 2 * n + r),
                  m = i + 2 * l * (a - i) + f * (s - 2 * a + i),
                  b = h * t + l * r,
                  w = h * e + l * i,
                  _ = h * n + l * o,
                  k = h * a + l * s,
                  C = 90 - (180 * H.atan2(v - y, x - m)) / U;
                return (
                  (y < v || x < m) && (C += 180),
                  {
                    x: d,
                    y: g,
                    m: {
                      x: v,
                      y: x
                    },
                    n: {
                      x: y,
                      y: m
                    },
                    start: {
                      x: b,
                      y: w
                    },
                    end: {
                      x: _,
                      y: k
                    },
                    alpha: C
                  }
                );
              }),
                (O.bezierBBox = function(t, e, r, i, n, a, o, s) {
                  O.is(t, "array") || (t = [t, e, r, i, n, a, o, s]);
                  var l = Mt.apply(null, t);
                  return {
                    x: l.min.x,
                    y: l.min.y,
                    x2: l.max.x,
                    y2: l.max.y,
                    width: l.max.x - l.min.x,
                    height: l.max.y - l.min.y
                  };
                }),
                (O.isPointInsideBBox = function(t, e, r) {
                  return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
                }),
                (O.isBBoxIntersect = function(t, e) {
                  var r = O.isPointInsideBBox;
                  return (
                    r(e, t.x, t.y) ||
                    r(e, t.x2, t.y) ||
                    r(e, t.x, t.y2) ||
                    r(e, t.x2, t.y2) ||
                    r(t, e.x, e.y) ||
                    r(t, e.x2, e.y) ||
                    r(t, e.x, e.y2) ||
                    r(t, e.x2, e.y2) ||
                    (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
                      ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
                  );
                }),
                (O.pathIntersection = function(t, e) {
                  return n(t, e);
                }),
                (O.pathIntersectionNumber = function(t, e) {
                  return n(t, e, 1);
                }),
                (O.isPointInsidePath = function(t, e, r) {
                  var i = O.pathBBox(t);
                  return (
                    O.isPointInsideBBox(i, e, r) &&
                    n(t, [["M", e, r], ["H", i.x2 + 10]], 1) % 2 == 1
                  );
                }),
                (O._removedFactory = function(t) {
                  return function() {
                    E(
                      "raphael.log",
                      null,
                      "Raphaël: you are calling to method “" +
                        t +
                        "” of removed object",
                      t
                    );
                  };
                });

              function kt(t, e, r, i) {
                return [t, e, r, i, r, i];
              }

              function Ct(t, e, r, i, n, a) {
                return [
                  (1 / 3) * t + (2 / 3) * r,
                  (1 / 3) * e + (2 / 3) * i,
                  (1 / 3) * n + (2 / 3) * r,
                  (1 / 3) * a + (2 / 3) * i,
                  n,
                  a
                ];
              }

              function Bt(t, e, r, i, n, a, o, s, l) {
                var h = 1 - l;
                return {
                  x:
                    T(h, 3) * t +
                    3 * T(h, 2) * l * r +
                    3 * h * l * l * n +
                    T(l, 3) * o,
                  y:
                    T(h, 3) * e +
                    3 * T(h, 2) * l * i +
                    3 * h * l * l * a +
                    T(l, 3) * s
                };
              }

              function St(t) {
                var e = t[0];
                switch (e.toLowerCase()) {
                  case "t":
                    return [e, 0, 0];
                  case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                  case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                  case "s":
                    return 5 == t.length
                      ? [e, 1, 1, t[3], t[4]]
                      : 3 == t.length
                      ? [e, 1, 1]
                      : [e, 1];
                }
              }
              var At,
                Tt = (O.pathBBox = function(t) {
                  var e = _t(t);
                  if (e.bbox) return x(e.bbox);
                  if (!t)
                    return {
                      x: 0,
                      y: 0,
                      width: 0,
                      height: 0,
                      x2: 0,
                      y2: 0
                    };
                  for (
                    var r,
                      i,
                      n = 0,
                      a = 0,
                      o = [],
                      s = [],
                      l = 0,
                      h = (t = Et(t)).length;
                    l < h;
                    l++
                  ) {
                    "M" == (r = t[l])[0]
                      ? ((n = r[1]), (a = r[2]), o.push(n), s.push(a))
                      : ((i = Mt(n, a, r[1], r[2], r[3], r[4], r[5], r[6])),
                        (o = o[q](i.min.x, i.max.x)),
                        (s = s[q](i.min.y, i.max.y)),
                        (n = r[5]),
                        (a = r[6]));
                  }
                  var c = A[b](0, o),
                    u = A[b](0, s),
                    f = S[b](0, o),
                    p = S[b](0, s),
                    d = f - c,
                    g = p - u,
                    v = {
                      x: c,
                      y: u,
                      x2: f,
                      y2: p,
                      width: d,
                      height: g,
                      cx: c + d / 2,
                      cy: u + g / 2
                    };
                  return (e.bbox = x(v)), v;
                }),
                Nt = function(t) {
                  var e = x(t);
                  return (e.toString = O._path2string), e;
                },
                Lt = (O._pathToRelative = function(t) {
                  var e = _t(t);
                  if (e.rel) return Nt(e.rel);
                  (O.is(t, L) && O.is(t && t[0], L)) ||
                    (t = O.parsePathString(t));
                  var r = [],
                    i = 0,
                    n = 0,
                    a = 0,
                    o = 0,
                    s = 0;
                  "M" == t[0][0] &&
                    ((a = i = t[0][1]),
                    (o = n = t[0][2]),
                    s++,
                    r.push(["M", i, n]));
                  for (var l = s, h = t.length; l < h; l++) {
                    var c = (r[l] = []),
                      u = t[l];
                    if (u[0] != w.call(u[0]))
                      switch (((c[0] = w.call(u[0])), c[0])) {
                        case "a":
                          (c[1] = u[1]),
                            (c[2] = u[2]),
                            (c[3] = u[3]),
                            (c[4] = u[4]),
                            (c[5] = u[5]),
                            (c[6] = +(u[6] - i).toFixed(3)),
                            (c[7] = +(u[7] - n).toFixed(3));
                          break;
                        case "v":
                          c[1] = +(u[1] - n).toFixed(3);
                          break;
                        case "m":
                          (a = u[1]), (o = u[2]);
                        default:
                          for (var f = 1, p = u.length; f < p; f++)
                            c[f] = +(u[f] - (f % 2 ? i : n)).toFixed(3);
                      }
                    else {
                      (c = r[l] = []),
                        "m" == u[0] && ((a = u[1] + i), (o = u[2] + n));
                      for (var d = 0, g = u.length; d < g; d++) r[l][d] = u[d];
                    }
                    var v = r[l].length;
                    switch (r[l][0]) {
                      case "z":
                        (i = a), (n = o);
                        break;
                      case "h":
                        i += +r[l][v - 1];
                        break;
                      case "v":
                        n += +r[l][v - 1];
                        break;
                      default:
                        (i += +r[l][v - 2]), (n += +r[l][v - 1]);
                    }
                  }
                  return (r.toString = O._path2string), (e.rel = Nt(r)), r;
                }),
                It = (O._pathToAbsolute = function(t) {
                  var e = _t(t);
                  if (e.abs) return Nt(e.abs);
                  if (
                    ((O.is(t, L) && O.is(t && t[0], L)) ||
                      (t = O.parsePathString(t)),
                    !t || !t.length)
                  )
                    return [["M", 0, 0]];
                  var r = [],
                    i = 0,
                    n = 0,
                    a = 0,
                    o = 0,
                    s = 0;
                  "M" == t[0][0] &&
                    ((a = i = +t[0][1]),
                    (o = n = +t[0][2]),
                    s++,
                    (r[0] = ["M", i, n]));
                  for (
                    var l,
                      h,
                      c =
                        3 == t.length &&
                        "M" == t[0][0] &&
                        "R" == t[1][0].toUpperCase() &&
                        "Z" == t[2][0].toUpperCase(),
                      u = s,
                      f = t.length;
                    u < f;
                    u++
                  ) {
                    if ((r.push((l = [])), (h = t[u])[0] != Q.call(h[0])))
                      switch (((l[0] = Q.call(h[0])), l[0])) {
                        case "A":
                          (l[1] = h[1]),
                            (l[2] = h[2]),
                            (l[3] = h[3]),
                            (l[4] = h[4]),
                            (l[5] = h[5]),
                            (l[6] = +(h[6] + i)),
                            (l[7] = +(h[7] + n));
                          break;
                        case "V":
                          l[1] = +h[1] + n;
                          break;
                        case "H":
                          l[1] = +h[1] + i;
                          break;
                        case "R":
                          for (
                            var p = [i, n][q](h.slice(1)), d = 2, g = p.length;
                            d < g;
                            d++
                          )
                            (p[d] = +p[d] + i), (p[++d] = +p[d] + n);
                          r.pop(), (r = r[q](y(p, c)));
                          break;
                        case "M":
                          (a = +h[1] + i), (o = +h[2] + n);
                        default:
                          for (d = 1, g = h.length; d < g; d++)
                            l[d] = +h[d] + (d % 2 ? i : n);
                      }
                    else if ("R" == h[0])
                      (p = [i, n][q](h.slice(1))),
                        r.pop(),
                        (r = r[q](y(p, c))),
                        (l = ["R"][q](h.slice(-2)));
                    else for (var v = 0, x = h.length; v < x; v++) l[v] = h[v];
                    switch (l[0]) {
                      case "Z":
                        (i = a), (n = o);
                        break;
                      case "H":
                        i = l[1];
                        break;
                      case "V":
                        n = l[1];
                        break;
                      case "M":
                        (a = l[l.length - 2]), (o = l[l.length - 1]);
                      default:
                        (i = l[l.length - 2]), (n = l[l.length - 1]);
                    }
                  }
                  return (r.toString = O._path2string), (e.abs = Nt(r)), r;
                }),
                Ft = function(t, e, r, i, n, a, o, s, l, h) {
                  var c,
                    u,
                    f,
                    p,
                    d,
                    g,
                    v,
                    x,
                    y,
                    m,
                    b,
                    w = (120 * U) / 180,
                    _ = (U / 180) * (+n || 0),
                    k = [],
                    C = D(function(t, e, r) {
                      return {
                        x: t * H.cos(r) - e * H.sin(r),
                        y: t * H.sin(r) + e * H.cos(r)
                      };
                    });
                  h
                    ? ((m = h[0]), (b = h[1]), (x = h[2]), (y = h[3]))
                    : ((t = (c = C(t, e, -_)).x),
                      (e = c.y),
                      (s = (c = C(s, l, -_)).x),
                      (l = c.y),
                      H.cos((U / 180) * n),
                      H.sin((U / 180) * n),
                      1 <
                        (p =
                          ((u = (t - s) / 2) * u) / (r * r) +
                          ((f = (e - l) / 2) * f) / (i * i)) &&
                        ((r *= p = H.sqrt(p)), (i *= p)),
                      (d = r * r),
                      (g = i * i),
                      (x =
                        ((v =
                          (a == o ? -1 : 1) *
                          H.sqrt(
                            Y(
                              (d * g - d * f * f - g * u * u) /
                                (d * f * f + g * u * u)
                            )
                          )) *
                          r *
                          f) /
                          i +
                        (t + s) / 2),
                      (y = (v * -i * u) / r + (e + l) / 2),
                      (m = H.asin(((e - y) / i).toFixed(9))),
                      (b = H.asin(((l - y) / i).toFixed(9))),
                      (m = t < x ? U - m : m) < 0 && (m = 2 * U + m),
                      (b = s < x ? U - b : b) < 0 && (b = 2 * U + b),
                      o && b < m && (m -= 2 * U),
                      !o && m < b && (b -= 2 * U));
                  var B,
                    S,
                    A,
                    T = b - m;
                  Y(T) > w &&
                    ((B = b),
                    (S = s),
                    (A = l),
                    (b = m + w * (o && m < b ? 1 : -1)),
                    (s = x + r * H.cos(b)),
                    (l = y + i * H.sin(b)),
                    (k = Ft(s, l, r, i, n, 0, o, S, A, [b, B, x, y]))),
                    (T = b - m);
                  var N = H.cos(m),
                    L = H.sin(m),
                    I = H.cos(b),
                    F = H.sin(b),
                    M = H.tan(T / 4),
                    E = (4 / 3) * r * M,
                    O = (4 / 3) * i * M,
                    z = [t, e],
                    R = [t + E * L, e - O * N],
                    P = [s + E * F, l - O * I],
                    j = [s, l];
                  if (((R[0] = 2 * z[0] - R[0]), (R[1] = 2 * z[1] - R[1]), h))
                    return [R, P, j][q](k);
                  for (
                    var $ = [],
                      V = 0,
                      G = (k = [R, P, j]
                        [q](k)
                        .join()
                        [W](",")).length;
                    V < G;
                    V++
                  )
                    $[V] =
                      V % 2 ? C(k[V - 1], k[V], _).y : C(k[V], k[V + 1], _).x;
                  return $;
                },
                Mt = D(function(t, e, r, i, n, a, o, s) {
                  var l,
                    h = n - 2 * r + t - (o - 2 * n + r),
                    c = 2 * (r - t) - 2 * (n - r),
                    u = t - r,
                    f = (-c + H.sqrt(c * c - 4 * h * u)) / 2 / h,
                    p = (-c - H.sqrt(c * c - 4 * h * u)) / 2 / h,
                    d = [e, s],
                    g = [t, o];
                  return (
                    "1e12" < Y(f) && (f = 0.5),
                    "1e12" < Y(p) && (p = 0.5),
                    0 < f &&
                      f < 1 &&
                      ((l = Bt(t, e, r, i, n, a, o, s, f)),
                      g.push(l.x),
                      d.push(l.y)),
                    0 < p &&
                      p < 1 &&
                      ((l = Bt(t, e, r, i, n, a, o, s, p)),
                      g.push(l.x),
                      d.push(l.y)),
                    (h = a - 2 * i + e - (s - 2 * a + i)),
                    (u = e - i),
                    (f =
                      (-(c = 2 * (i - e) - 2 * (a - i)) +
                        H.sqrt(c * c - 4 * h * u)) /
                      2 /
                      h),
                    (p = (-c - H.sqrt(c * c - 4 * h * u)) / 2 / h),
                    "1e12" < Y(f) && (f = 0.5),
                    "1e12" < Y(p) && (p = 0.5),
                    0 < f &&
                      f < 1 &&
                      ((l = Bt(t, e, r, i, n, a, o, s, f)),
                      g.push(l.x),
                      d.push(l.y)),
                    0 < p &&
                      p < 1 &&
                      ((l = Bt(t, e, r, i, n, a, o, s, p)),
                      g.push(l.x),
                      d.push(l.y)),
                    {
                      min: {
                        x: A[b](0, g),
                        y: A[b](0, d)
                      },
                      max: {
                        x: S[b](0, g),
                        y: S[b](0, d)
                      }
                    }
                  );
                }),
                Et = (O._path2curve = D(
                  function(t, e) {
                    var r = !e && _t(t);
                    if (!e && r.curve) return Nt(r.curve);

                    function i(t, e, r) {
                      var i, n;
                      if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                      switch (
                        (t[0] in
                          {
                            T: 1,
                            Q: 1
                          } || (e.qx = e.qy = null),
                        t[0])
                      ) {
                        case "M":
                          (e.X = t[1]), (e.Y = t[2]);
                          break;
                        case "A":
                          t = ["C"][q](Ft[b](0, [e.x, e.y][q](t.slice(1))));
                          break;
                        case "S":
                          (n =
                            "C" == r || "S" == r
                              ? ((i = 2 * e.x - e.bx), 2 * e.y - e.by)
                              : ((i = e.x), e.y)),
                            (t = ["C", i, n][q](t.slice(1)));
                          break;
                        case "T":
                          "Q" == r || "T" == r
                            ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                            : ((e.qx = e.x), (e.qy = e.y)),
                            (t = ["C"][q](
                              Ct(e.x, e.y, e.qx, e.qy, t[1], t[2])
                            ));
                          break;
                        case "Q":
                          (e.qx = t[1]),
                            (e.qy = t[2]),
                            (t = ["C"][q](
                              Ct(e.x, e.y, t[1], t[2], t[3], t[4])
                            ));
                          break;
                        case "L":
                          t = ["C"][q](kt(e.x, e.y, t[1], t[2]));
                          break;
                        case "H":
                          t = ["C"][q](kt(e.x, e.y, t[1], e.y));
                          break;
                        case "V":
                          t = ["C"][q](kt(e.x, e.y, e.x, t[1]));
                          break;
                        case "Z":
                          t = ["C"][q](kt(e.x, e.y, e.X, e.Y));
                      }
                      return t;
                    }

                    function n(t, e) {
                      if (7 < t[e].length) {
                        t[e].shift();
                        for (var r = t[e]; r.length; )
                          (c[e] = "A"),
                            s && (u[e] = "A"),
                            t.splice(e++, 0, ["C"][q](r.splice(0, 6)));
                        t.splice(e, 1), (g = S(o.length, (s && s.length) || 0));
                      }
                    }

                    function a(t, e, r, i, n) {
                      t &&
                        e &&
                        "M" == t[n][0] &&
                        "M" != e[n][0] &&
                        (e.splice(n, 0, ["M", i.x, i.y]),
                        (r.bx = 0),
                        (r.by = 0),
                        (r.x = t[n][1]),
                        (r.y = t[n][2]),
                        (g = S(o.length, (s && s.length) || 0)));
                    }
                    for (
                      var o = It(t),
                        s = e && It(e),
                        l = {
                          x: 0,
                          y: 0,
                          bx: 0,
                          by: 0,
                          X: 0,
                          Y: 0,
                          qx: null,
                          qy: null
                        },
                        h = {
                          x: 0,
                          y: 0,
                          bx: 0,
                          by: 0,
                          X: 0,
                          Y: 0,
                          qx: null,
                          qy: null
                        },
                        c = [],
                        u = [],
                        f = "",
                        p = "",
                        d = 0,
                        g = S(o.length, (s && s.length) || 0);
                      d < g;
                      d++
                    ) {
                      o[d] && (f = o[d][0]),
                        "C" != f && ((c[d] = f), d && (p = c[d - 1])),
                        (o[d] = i(o[d], l, p)),
                        "A" != c[d] && "C" == f && (c[d] = "C"),
                        n(o, d),
                        s &&
                          (s[d] && (f = s[d][0]),
                          "C" != f && ((u[d] = f), d && (p = u[d - 1])),
                          (s[d] = i(s[d], h, p)),
                          "A" != u[d] && "C" == f && (u[d] = "C"),
                          n(s, d)),
                        a(o, s, l, h, d),
                        a(s, o, h, l, d);
                      var v = o[d],
                        x = s && s[d],
                        y = v.length,
                        m = s && x.length;
                      (l.x = v[y - 2]),
                        (l.y = v[y - 1]),
                        (l.bx = Z(v[y - 4]) || l.x),
                        (l.by = Z(v[y - 3]) || l.y),
                        (h.bx = s && (Z(x[m - 4]) || h.x)),
                        (h.by = s && (Z(x[m - 3]) || h.y)),
                        (h.x = s && x[m - 2]),
                        (h.y = s && x[m - 1]);
                    }
                    return s || (r.curve = Nt(o)), s ? [o, s] : o;
                  },
                  null,
                  Nt
                )),
                Ot =
                  ((O._parseDots = D(function(t) {
                    for (var e = [], r = 0, i = t.length; r < i; r++) {
                      var n = {},
                        a = t[r].match(/^([^:]*):?([\d\.]*)/);
                      if (((n.color = O.getRGB(a[1])), n.color.error))
                        return null;
                      (n.opacity = n.color.opacity),
                        (n.color = n.color.hex),
                        a[2] && (n.offset = a[2] + "%"),
                        e.push(n);
                    }
                    for (r = 1, i = e.length - 1; r < i; r++)
                      if (!e[r].offset) {
                        for (
                          var o = Z(e[r - 1].offset || 0), s = 0, l = r + 1;
                          l < i;
                          l++
                        )
                          if (e[l].offset) {
                            s = e[l].offset;
                            break;
                          }
                        s || ((s = 100), (l = i));
                        for (var h = ((s = Z(s)) - o) / (l - r + 1); r < l; r++)
                          (o += h), (e[r].offset = o + "%");
                      }
                    return e;
                  })),
                  (O._tear = function(t, e) {
                    t == e.top && (e.top = t.prev),
                      t == e.bottom && (e.bottom = t.next),
                      t.next && (t.next.prev = t.prev),
                      t.prev && (t.prev.next = t.next);
                  })),
                zt =
                  ((O._tofront = function(t, e) {
                    e.top !== t &&
                      (Ot(t, e),
                      (t.next = null),
                      (t.prev = e.top),
                      (e.top.next = t),
                      (e.top = t));
                  }),
                  (O._toback = function(t, e) {
                    e.bottom !== t &&
                      (Ot(t, e),
                      (t.next = e.bottom),
                      (t.prev = null),
                      (e.bottom.prev = t),
                      (e.bottom = t));
                  }),
                  (O._insertafter = function(t, e, r) {
                    Ot(t, r),
                      e == r.top && (r.top = t),
                      e.next && (e.next.prev = t),
                      (t.next = e.next),
                      ((t.prev = e).next = t);
                  }),
                  (O._insertbefore = function(t, e, r) {
                    Ot(t, r),
                      e == r.bottom && (r.bottom = t),
                      e.prev && (e.prev.next = t),
                      (t.prev = e.prev),
                      ((e.prev = t).next = e);
                  }),
                  (O.toMatrix = function(t, e) {
                    var r = Tt(t),
                      i = {
                        _: {
                          transform: ""
                        },
                        getBBox: function() {
                          return r;
                        }
                      };
                    return Rt(i, e), i.matrix;
                  })),
                Rt =
                  ((O.transformPath = function(t, e) {
                    return ut(t, zt(t, e));
                  }),
                  (O._extractTransform = function(t, e) {
                    if (null == e) return t._.transform;
                    e = $(e).replace(/\.{3}|\u2026/g, t._.transform || "");
                    var r,
                      i,
                      n = O.parseTransformString(e),
                      a = 0,
                      o = 1,
                      s = 1,
                      l = t._,
                      h = new z();
                    if (((l.transform = n || []), n))
                      for (var c = 0, u = n.length; c < u; c++) {
                        var f,
                          p,
                          d,
                          g,
                          v,
                          x = n[c],
                          y = x.length,
                          m = $(x[0]).toLowerCase(),
                          b = x[0] != m,
                          w = b ? h.invert() : 0;
                        "t" == m && 3 == y
                          ? b
                            ? ((f = w.x(0, 0)),
                              (p = w.y(0, 0)),
                              (d = w.x(x[1], x[2])),
                              (g = w.y(x[1], x[2])),
                              h.translate(d - f, g - p))
                            : h.translate(x[1], x[2])
                          : "r" == m
                          ? 2 == y
                            ? ((v = v || t.getBBox(1)),
                              h.rotate(
                                x[1],
                                v.x + v.width / 2,
                                v.y + v.height / 2
                              ),
                              (a += x[1]))
                            : 4 == y &&
                              (b
                                ? ((d = w.x(x[2], x[3])),
                                  (g = w.y(x[2], x[3])),
                                  h.rotate(x[1], d, g))
                                : h.rotate(x[1], x[2], x[3]),
                              (a += x[1]))
                          : "s" == m
                          ? 2 == y || 3 == y
                            ? ((v = v || t.getBBox(1)),
                              h.scale(
                                x[1],
                                x[y - 1],
                                v.x + v.width / 2,
                                v.y + v.height / 2
                              ),
                              (o *= x[1]),
                              (s *= x[y - 1]))
                            : 5 == y &&
                              (b
                                ? ((d = w.x(x[3], x[4])),
                                  (g = w.y(x[3], x[4])),
                                  h.scale(x[1], x[2], d, g))
                                : h.scale(x[1], x[2], x[3], x[4]),
                              (o *= x[1]),
                              (s *= x[2]))
                          : "m" == m &&
                            7 == y &&
                            h.add(x[1], x[2], x[3], x[4], x[5], x[6]),
                          (l.dirtyT = 1),
                          (t.matrix = h);
                      }
                    (t.matrix = h),
                      (l.sx = o),
                      (l.sy = s),
                      (l.deg = a),
                      (l.dx = r = h.e),
                      (l.dy = i = h.f),
                      1 == o && 1 == s && !a && l.bbox
                        ? ((l.bbox.x += +r), (l.bbox.y += +i))
                        : (l.dirtyT = 1);
                  })),
                Pt = (O._equaliseTransform = function(t, e) {
                  (e = $(e).replace(/\.{3}|\u2026/g, t)),
                    (t = O.parseTransformString(t) || []),
                    (e = O.parseTransformString(e) || []);
                  for (
                    var r,
                      i,
                      n,
                      a,
                      o = S(t.length, e.length),
                      s = [],
                      l = [],
                      h = 0;
                    h < o;
                    h++
                  ) {
                    if (
                      ((n = t[h] || St(e[h])),
                      (a = e[h] || St(n)),
                      n[0] != a[0] ||
                        ("r" == n[0].toLowerCase() &&
                          (n[2] != a[2] || n[3] != a[3])) ||
                        ("s" == n[0].toLowerCase() &&
                          (n[3] != a[3] || n[4] != a[4])))
                    )
                      return;
                    for (
                      s[h] = [], l[h] = [], r = 0, i = S(n.length, a.length);
                      r < i;
                      r++
                    )
                      r in n && (s[h][r] = n[r]), r in a && (l[h][r] = a[r]);
                  }
                  return {
                    from: s,
                    to: l
                  };
                });

              function jt(t) {
                return t[0] * t[0] + t[1] * t[1];
              }

              function $t(t) {
                var e = H.sqrt(jt(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e);
              }
              (O._getContainer = function(t, e, r, i) {
                var n =
                  null != i || O.is(t, "object") ? t : d.doc.getElementById(t);
                if (null != n)
                  return n.tagName
                    ? null == e
                      ? {
                          container: n,
                          width: n.style.pixelWidth || n.offsetWidth,
                          height: n.style.pixelHeight || n.offsetHeight
                        }
                      : {
                          container: n,
                          width: e,
                          height: r
                        }
                    : {
                        container: 1,
                        x: t,
                        y: e,
                        width: r,
                        height: i
                      };
              }),
                (O.pathToRelative = Lt),
                (O._engine = {}),
                (O.path2curve = Et),
                (O.matrix = function(t, e, r, i, n, a) {
                  return new z(t, e, r, i, n, a);
                }),
                ((At = z.prototype).add = function(t, e, r, i, n, a) {
                  var o,
                    s,
                    l,
                    h,
                    c = [[], [], []],
                    u = [
                      [this.a, this.c, this.e],
                      [this.b, this.d, this.f],
                      [0, 0, 1]
                    ],
                    f = [[t, r, n], [e, i, a], [0, 0, 1]];
                  for (
                    t &&
                      t instanceof z &&
                      (f = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]),
                      o = 0;
                    o < 3;
                    o++
                  )
                    for (s = 0; s < 3; s++) {
                      for (l = h = 0; l < 3; l++) h += u[o][l] * f[l][s];
                      c[o][s] = h;
                    }
                  (this.a = c[0][0]),
                    (this.b = c[1][0]),
                    (this.c = c[0][1]),
                    (this.d = c[1][1]),
                    (this.e = c[0][2]),
                    (this.f = c[1][2]);
                }),
                (At.invert = function() {
                  var t = this,
                    e = t.a * t.d - t.b * t.c;
                  return new z(
                    t.d / e,
                    -t.b / e,
                    -t.c / e,
                    t.a / e,
                    (t.c * t.f - t.d * t.e) / e,
                    (t.b * t.e - t.a * t.f) / e
                  );
                }),
                (At.clone = function() {
                  return new z(this.a, this.b, this.c, this.d, this.e, this.f);
                }),
                (At.translate = function(t, e) {
                  this.add(1, 0, 0, 1, t, e);
                }),
                (At.scale = function(t, e, r, i) {
                  null == e && (e = t),
                    (r || i) && this.add(1, 0, 0, 1, r, i),
                    this.add(t, 0, 0, e, 0, 0),
                    (r || i) && this.add(1, 0, 0, 1, -r, -i);
                }),
                (At.rotate = function(t, e, r) {
                  (t = O.rad(t)), (e = e || 0), (r = r || 0);
                  var i = +H.cos(t).toFixed(9),
                    n = +H.sin(t).toFixed(9);
                  this.add(i, n, -n, i, e, r), this.add(1, 0, 0, 1, -e, -r);
                }),
                (At.x = function(t, e) {
                  return t * this.a + e * this.c + this.e;
                }),
                (At.y = function(t, e) {
                  return t * this.b + e * this.d + this.f;
                }),
                (At.get = function(t) {
                  return +this[$.fromCharCode(97 + t)].toFixed(4);
                }),
                (At.toString = function() {
                  return O.svg
                    ? "matrix(" +
                        [
                          this.get(0),
                          this.get(1),
                          this.get(2),
                          this.get(3),
                          this.get(4),
                          this.get(5)
                        ].join() +
                        ")"
                    : [
                        this.get(0),
                        this.get(2),
                        this.get(1),
                        this.get(3),
                        0,
                        0
                      ].join();
                }),
                (At.toFilter = function() {
                  return (
                    "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                    this.get(0) +
                    ", M12=" +
                    this.get(2) +
                    ", M21=" +
                    this.get(1) +
                    ", M22=" +
                    this.get(3) +
                    ", Dx=" +
                    this.get(4) +
                    ", Dy=" +
                    this.get(5) +
                    ", sizingmethod='auto expand')"
                  );
                }),
                (At.offset = function() {
                  return [this.e.toFixed(4), this.f.toFixed(4)];
                }),
                (At.split = function() {
                  var t = {};
                  (t.dx = this.e), (t.dy = this.f);
                  var e = [[this.a, this.c], [this.b, this.d]];
                  (t.scalex = H.sqrt(jt(e[0]))),
                    $t(e[0]),
                    (t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
                    (e[1] = [
                      e[1][0] - e[0][0] * t.shear,
                      e[1][1] - e[0][1] * t.shear
                    ]),
                    (t.scaley = H.sqrt(jt(e[1]))),
                    $t(e[1]),
                    (t.shear /= t.scaley);
                  var r = -e[0][1],
                    i = e[1][1];
                  return (
                    i < 0
                      ? ((t.rotate = O.deg(H.acos(i))),
                        r < 0 && (t.rotate = 360 - t.rotate))
                      : (t.rotate = O.deg(H.asin(r))),
                    (t.isSimple = !(
                      +t.shear.toFixed(9) ||
                      (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                    )),
                    (t.isSuperSimple =
                      !+t.shear.toFixed(9) &&
                      t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                      !t.rotate),
                    (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                    t
                  );
                }),
                (At.toTransformString = function(t) {
                  var e = t || this[W]();
                  return e.isSimple
                    ? ((e.scalex = +e.scalex.toFixed(4)),
                      (e.scaley = +e.scaley.toFixed(4)),
                      (e.rotate = +e.rotate.toFixed(4)),
                      (e.dx || e.dy ? "t" + [e.dx, e.dy] : "") +
                        (1 != e.scalex || 1 != e.scaley
                          ? "s" + [e.scalex, e.scaley, 0, 0]
                          : "") +
                        (e.rotate ? "r" + [e.rotate, 0, 0] : ""))
                    : "m" +
                        [
                          this.get(0),
                          this.get(1),
                          this.get(2),
                          this.get(3),
                          this.get(4),
                          this.get(5)
                        ];
                });

              function Vt() {
                this.returnValue = !1;
              }

              function Gt() {
                return this.originalEvent.preventDefault();
              }

              function Dt() {
                this.cancelBubble = !0;
              }

              function qt() {
                return this.originalEvent.stopPropagation();
              }

              function Wt(t) {
                var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                  r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
                return {
                  x: t.clientX + r,
                  y: t.clientY + e
                };
              }

              function Ht(t) {
                for (
                  var e,
                    r = t.clientX,
                    i = t.clientY,
                    n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    a =
                      d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                    o = Ut.length;
                  o--;

                ) {
                  if (((e = Ut[o]), g && t.touches)) {
                    for (var s, l = t.touches.length; l--; )
                      if ((s = t.touches[l]).identifier == e.el._drag.id) {
                        (r = s.clientX),
                          (i = s.clientY),
                          (t.originalEvent
                            ? t.originalEvent
                            : t
                          ).preventDefault();
                        break;
                      }
                  } else t.preventDefault();
                  var h,
                    c = e.el.node,
                    u = c.nextSibling,
                    f = c.parentNode,
                    p = c.style.display;
                  d.win.opera && f.removeChild(c),
                    (c.style.display = "none"),
                    (h = e.el.paper.getElementByPoint(r, i)),
                    (c.style.display = p),
                    d.win.opera &&
                      (u ? f.insertBefore(c, u) : f.appendChild(c)),
                    h && E("raphael.drag.over." + e.el.id, e.el, h),
                    (r += a),
                    (i += n),
                    E(
                      "raphael.drag.move." + e.el.id,
                      e.move_scope || e.el,
                      r - e.el._drag.x,
                      i - e.el._drag.y,
                      r,
                      i,
                      t
                    );
                }
              }
              for (
                var Yt = d.doc.addEventListener
                    ? function(a, t, o, s) {
                        function e(t) {
                          var e = Wt(t);
                          return o.call(s, t, e.x, e.y);
                        }
                        var r;
                        return (
                          a.addEventListener(t, e, !1),
                          g &&
                            v[t] &&
                            ((r = function(t) {
                              for (
                                var e = Wt(t),
                                  r = t,
                                  i = 0,
                                  n = t.targetTouches && t.targetTouches.length;
                                i < n;
                                i++
                              )
                                if (t.targetTouches[i].target == a) {
                                  ((t = t.targetTouches[i]).originalEvent = r),
                                    (t.preventDefault = Gt),
                                    (t.stopPropagation = qt);
                                  break;
                                }
                              return o.call(s, t, e.x, e.y);
                            }),
                            a.addEventListener(v[t], r, !1)),
                          function() {
                            return (
                              a.removeEventListener(t, e, !1),
                              g && v[t] && a.removeEventListener(v[t], r, !1),
                              !0
                            );
                          }
                        );
                      }
                    : d.doc.attachEvent
                    ? function(t, e, a, o) {
                        function r(t) {
                          t = t || d.win.event;
                          var e =
                              d.doc.documentElement.scrollTop ||
                              d.doc.body.scrollTop,
                            r =
                              d.doc.documentElement.scrollLeft ||
                              d.doc.body.scrollLeft,
                            i = t.clientX + r,
                            n = t.clientY + e;
                          return (
                            (t.preventDefault = t.preventDefault || Vt),
                            (t.stopPropagation = t.stopPropagation || Dt),
                            a.call(o, t, i, n)
                          );
                        }
                        t.attachEvent("on" + e, r);
                        return function() {
                          return t.detachEvent("on" + e, r), !0;
                        };
                      }
                    : void 0,
                  Ut = [],
                  Xt = function(t) {
                    O.unmousemove(Ht).unmouseup(Xt);
                    for (var e, r = Ut.length; r--; )
                      ((e = Ut[r]).el._drag = {}),
                        E(
                          "raphael.drag.end." + e.el.id,
                          e.end_scope || e.start_scope || e.move_scope || e.el,
                          t
                        );
                    Ut = [];
                  },
                  Zt = (O.el = {}),
                  Jt = p.length;
                Jt--;

              )
                !(function(i) {
                  (O[i] = Zt[i] = function(t, e) {
                    return (
                      O.is(t, "function") &&
                        ((this.events = this.events || []),
                        this.events.push({
                          name: i,
                          f: t,
                          unbind: Yt(
                            this.shape || this.node || d.doc,
                            i,
                            t,
                            e || this
                          )
                        })),
                      this
                    );
                  }),
                    (O["un" + i] = Zt["un" + i] = function(t) {
                      for (var e = this.events || [], r = e.length; r--; )
                        e[r].name != i ||
                          (!O.is(t, "undefined") && e[r].f != t) ||
                          (e[r].unbind(),
                          e.splice(r, 1),
                          e.length || delete this.events);
                      return this;
                    });
                })(p[Jt]);
              (Zt.data = function(t, e) {
                var r = (st[this.id] = st[this.id] || {});
                if (0 == arguments.length) return r;
                if (1 != arguments.length)
                  return (
                    (r[t] = e),
                    E("raphael.data.set." + this.id, this, e, t),
                    this
                  );
                if (O.is(t, "object")) {
                  for (var i in t) t[j](i) && this.data(i, t[i]);
                  return this;
                }
                return E("raphael.data.get." + this.id, this, r[t], t), r[t];
              }),
                (Zt.removeData = function(t) {
                  return (
                    null == t
                      ? (st[this.id] = {})
                      : st[this.id] && delete st[this.id][t],
                    this
                  );
                }),
                (Zt.getData = function() {
                  return x(st[this.id] || {});
                }),
                (Zt.hover = function(t, e, r, i) {
                  return this.mouseover(t, r).mouseout(e, i || r);
                }),
                (Zt.unhover = function(t, e) {
                  return this.unmouseover(t).unmouseout(e);
                });
              var Qt = [];
              (Zt.drag = function(s, l, h, c, u, f) {
                function t(t) {
                  (t.originalEvent || t).preventDefault();
                  var e = t.clientX,
                    r = t.clientY,
                    i = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    n =
                      d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
                  if (((this._drag.id = t.identifier), g && t.touches))
                    for (var a, o = t.touches.length; o--; )
                      if (
                        ((a = t.touches[o]),
                        (this._drag.id = a.identifier),
                        a.identifier == this._drag.id)
                      ) {
                        (e = a.clientX), (r = a.clientY);
                        break;
                      }
                  (this._drag.x = e + n),
                    (this._drag.y = r + i),
                    Ut.length || O.mousemove(Ht).mouseup(Xt),
                    Ut.push({
                      el: this,
                      move_scope: c,
                      start_scope: u,
                      end_scope: f
                    }),
                    l && E.on("raphael.drag.start." + this.id, l),
                    s && E.on("raphael.drag.move." + this.id, s),
                    h && E.on("raphael.drag.end." + this.id, h),
                    E(
                      "raphael.drag.start." + this.id,
                      u || c || this,
                      t.clientX + n,
                      t.clientY + i,
                      t
                    );
                }
                return (
                  (this._drag = {}),
                  Qt.push({
                    el: this,
                    start: t
                  }),
                  this.mousedown(t),
                  this
                );
              }),
                (Zt.onDragOver = function(t) {
                  t
                    ? E.on("raphael.drag.over." + this.id, t)
                    : E.unbind("raphael.drag.over." + this.id);
                }),
                (Zt.undrag = function() {
                  for (var t = Qt.length; t--; )
                    Qt[t].el == this &&
                      (this.unmousedown(Qt[t].start),
                      Qt.splice(t, 1),
                      E.unbind("raphael.drag.*." + this.id));
                  Qt.length || O.unmousemove(Ht).unmouseup(Xt), (Ut = []);
                }),
                (s.circle = function(t, e, r) {
                  var i = O._engine.circle(this, t || 0, e || 0, r || 0);
                  return this.__set__ && this.__set__.push(i), i;
                }),
                (s.rect = function(t, e, r, i, n) {
                  var a = O._engine.rect(
                    this,
                    t || 0,
                    e || 0,
                    r || 0,
                    i || 0,
                    n || 0
                  );
                  return this.__set__ && this.__set__.push(a), a;
                }),
                (s.ellipse = function(t, e, r, i) {
                  var n = O._engine.ellipse(
                    this,
                    t || 0,
                    e || 0,
                    r || 0,
                    i || 0
                  );
                  return this.__set__ && this.__set__.push(n), n;
                }),
                (s.path = function(t) {
                  !t || O.is(t, N) || O.is(t[0], L) || (t += "");
                  var e = O._engine.path(O.format[b](O, arguments), this);
                  return this.__set__ && this.__set__.push(e), e;
                }),
                (s.image = function(t, e, r, i, n) {
                  var a = O._engine.image(
                    this,
                    t || "about:blank",
                    e || 0,
                    r || 0,
                    i || 0,
                    n || 0
                  );
                  return this.__set__ && this.__set__.push(a), a;
                }),
                (s.text = function(t, e, r) {
                  var i = O._engine.text(this, t || 0, e || 0, $(r));
                  return this.__set__ && this.__set__.push(i), i;
                }),
                (s.set = function(t) {
                  O.is(t, "array") ||
                    (t = Array.prototype.splice.call(
                      arguments,
                      0,
                      arguments.length
                    ));
                  var e = new de(t);
                  return (
                    this.__set__ && this.__set__.push(e),
                    (e.paper = this),
                    (e.type = "set"),
                    e
                  );
                }),
                (s.setStart = function(t) {
                  this.__set__ = t || this.set();
                }),
                (s.setFinish = function(t) {
                  var e = this.__set__;
                  return delete this.__set__, e;
                }),
                (s.getSize = function() {
                  var t = this.canvas.parentNode;
                  return {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                  };
                }),
                (s.setSize = function(t, e) {
                  return O._engine.setSize.call(this, t, e);
                }),
                (s.setViewBox = function(t, e, r, i, n) {
                  return O._engine.setViewBox.call(this, t, e, r, i, n);
                }),
                (s.top = s.bottom = null),
                (s.raphael = O);
              (s.getElementByPoint = function(t, e) {
                var r,
                  i,
                  n,
                  a,
                  o,
                  s,
                  l,
                  h,
                  c,
                  u,
                  f = this.canvas,
                  p = d.doc.elementFromPoint(t, e);
                if (
                  (d.win.opera &&
                    "svg" == p.tagName &&
                    ((o = (a = f).getBoundingClientRect()),
                    (s = a.ownerDocument),
                    (l = s.body),
                    (h = s.documentElement),
                    (c = h.clientTop || l.clientTop || 0),
                    (u = h.clientLeft || l.clientLeft || 0),
                    (r = {
                      y:
                        o.top +
                        (d.win.pageYOffset || h.scrollTop || l.scrollTop) -
                        c,
                      x:
                        o.left +
                        (d.win.pageXOffset || h.scrollLeft || l.scrollLeft) -
                        u
                    }),
                    ((i = f.createSVGRect()).x = t - r.x),
                    (i.y = e - r.y),
                    (i.width = i.height = 1),
                    (n = f.getIntersectionList(i, null)).length &&
                      (p = n[n.length - 1])),
                  !p)
                )
                  return null;
                for (; p.parentNode && p != f.parentNode && !p.raphael; )
                  p = p.parentNode;
                return (
                  p == this.canvas.parentNode && (p = f),
                  p && p.raphael ? this.getById(p.raphaelid) : null
                );
              }),
                (s.getElementsByBBox = function(e) {
                  var r = this.set();
                  return (
                    this.forEach(function(t) {
                      O.isBBoxIntersect(t.getBBox(), e) && r.push(t);
                    }),
                    r
                  );
                }),
                (s.getById = function(t) {
                  for (var e = this.bottom; e; ) {
                    if (e.id == t) return e;
                    e = e.next;
                  }
                  return null;
                }),
                (s.forEach = function(t, e) {
                  for (var r = this.bottom; r; ) {
                    if (!1 === t.call(e, r)) return this;
                    r = r.next;
                  }
                  return this;
                }),
                (s.getElementsByPoint = function(e, r) {
                  var i = this.set();
                  return (
                    this.forEach(function(t) {
                      t.isPointInside(e, r) && i.push(t);
                    }),
                    i
                  );
                }),
                (Zt.isPointInside = function(t, e) {
                  var r = (this.realPath = ct[this.type](this));
                  return (
                    this.attr("transform") &&
                      this.attr("transform").length &&
                      (r = O.transformPath(r, this.attr("transform"))),
                    O.isPointInsidePath(r, t, e)
                  );
                }),
                (Zt.getBBox = function(t) {
                  if (this.removed) return {};
                  var e = this._;
                  return t
                    ? ((!e.dirty && e.bboxwt) ||
                        ((this.realPath = ct[this.type](this)),
                        (e.bboxwt = Tt(this.realPath)),
                        (e.bboxwt.toString = r),
                        (e.dirty = 0)),
                      e.bboxwt)
                    : ((!e.dirty && !e.dirtyT && e.bbox) ||
                        ((!e.dirty && this.realPath) ||
                          ((e.bboxwt = 0),
                          (this.realPath = ct[this.type](this))),
                        (e.bbox = Tt(ut(this.realPath, this.matrix))),
                        (e.bbox.toString = r),
                        (e.dirty = e.dirtyT = 0)),
                      e.bbox);
                }),
                (Zt.clone = function() {
                  if (this.removed) return null;
                  var t = this.paper[this.type]().attr(this.attr());
                  return this.__set__ && this.__set__.push(t), t;
                }),
                (Zt.glow = function(t) {
                  if ("text" == this.type) return null;
                  for (
                    var e = {
                        width:
                          ((t = t || {}).width || 10) +
                          (+this.attr("stroke-width") || 1),
                        fill: t.fill || !1,
                        opacity: null == t.opacity ? 0.5 : t.opacity,
                        offsetx: t.offsetx || 0,
                        offsety: t.offsety || 0,
                        color: t.color || "#000"
                      },
                      r = e.width / 2,
                      i = this.paper,
                      n = i.set(),
                      a = this.realPath || ct[this.type](this),
                      a = this.matrix ? ut(a, this.matrix) : a,
                      o = 1;
                    o < 1 + r;
                    o++
                  )
                    n.push(
                      i.path(a).attr({
                        stroke: e.color,
                        fill: e.fill ? e.color : "none",
                        "stroke-linejoin": "round",
                        "stroke-linecap": "round",
                        "stroke-width": +((e.width / r) * o).toFixed(3),
                        opacity: +(e.opacity / r).toFixed(3)
                      })
                    );
                  return n.insertBefore(this).translate(e.offsetx, e.offsety);
                });

              function Kt(t, e, r, i, n, a, o, s, l) {
                return null == l
                  ? B(t, e, r, i, n, a, o, s)
                  : O.findDotsAtSegment(
                      t,
                      e,
                      r,
                      i,
                      n,
                      a,
                      o,
                      s,
                      (function(t, e, r, i, n, a, o, s, l) {
                        if (!(l < 0 || B(t, e, r, i, n, a, o, s) < l)) {
                          for (
                            var h = 0.5,
                              c = 1 - h,
                              u = B(t, e, r, i, n, a, o, s, c);
                            0.01 < Y(u - l);

                          )
                            u = B(
                              t,
                              e,
                              r,
                              i,
                              n,
                              a,
                              o,
                              s,
                              (c += (u < l ? 1 : -1) * (h /= 2))
                            );
                          return c;
                        }
                      })(t, e, r, i, n, a, o, s, l)
                    );
              }

              function te(p, d) {
                return function(t, e, r) {
                  for (
                    var i,
                      n,
                      a,
                      o,
                      s,
                      l = "",
                      h = {},
                      c = 0,
                      u = 0,
                      f = (t = Et(t)).length;
                    u < f;
                    u++
                  ) {
                    if ("M" == (a = t[u])[0]) (i = +a[1]), (n = +a[2]);
                    else {
                      if (
                        e <
                        c + (o = Kt(i, n, a[1], a[2], a[3], a[4], a[5], a[6]))
                      ) {
                        if (d && !h.start) {
                          if (
                            ((l += [
                              "C" +
                                (s = Kt(
                                  i,
                                  n,
                                  a[1],
                                  a[2],
                                  a[3],
                                  a[4],
                                  a[5],
                                  a[6],
                                  e - c
                                )).start.x,
                              s.start.y,
                              s.m.x,
                              s.m.y,
                              s.x,
                              s.y
                            ]),
                            r)
                          )
                            return l;
                          (h.start = l),
                            (l = [
                              "M" + s.x,
                              s.y + "C" + s.n.x,
                              s.n.y,
                              s.end.x,
                              s.end.y,
                              a[5],
                              a[6]
                            ].join()),
                            (c += o),
                            (i = +a[5]),
                            (n = +a[6]);
                          continue;
                        }
                        if (!p && !d)
                          return {
                            x: (s = Kt(
                              i,
                              n,
                              a[1],
                              a[2],
                              a[3],
                              a[4],
                              a[5],
                              a[6],
                              e - c
                            )).x,
                            y: s.y,
                            alpha: s.alpha
                          };
                      }
                      (c += o), (i = +a[5]), (n = +a[6]);
                    }
                    l += a.shift() + a;
                  }
                  return (
                    (h.end = l),
                    (s = p
                      ? c
                      : d
                      ? h
                      : O.findDotsAtSegment(
                          i,
                          n,
                          a[0],
                          a[1],
                          a[2],
                          a[3],
                          a[4],
                          a[5],
                          1
                        )).alpha &&
                      (s = {
                        x: s.x,
                        y: s.y,
                        alpha: s.alpha
                      }),
                    s
                  );
                };
              }
              var ee = te(1),
                re = te(),
                ie = te(0, 1);
              (O.getTotalLength = ee),
                (O.getPointAtLength = re),
                (O.getSubpath = function(t, e, r) {
                  if (this.getTotalLength(t) - r < 1e-6) return ie(t, e).end;
                  var i = ie(t, r, 1);
                  return e ? ie(i, e).end : i;
                }),
                (Zt.getTotalLength = function() {
                  var t = this.getPath();
                  if (t)
                    return this.node.getTotalLength
                      ? this.node.getTotalLength()
                      : ee(t);
                }),
                (Zt.getPointAtLength = function(t) {
                  var e = this.getPath();
                  if (e) return re(e, t);
                }),
                (Zt.getPath = function() {
                  var t,
                    e = O._getPath[this.type];
                  if ("text" != this.type && "set" != this.type)
                    return e && (t = e(this)), t;
                }),
                (Zt.getSubpath = function(t, e) {
                  var r = this.getPath();
                  if (r) return O.getSubpath(r, t, e);
                });
              var ne = (O.easing_formulas = {
                linear: function(t) {
                  return t;
                },
                "<": function(t) {
                  return T(t, 1.7);
                },
                ">": function(t) {
                  return T(t, 0.48);
                },
                "<>": function(t) {
                  var e = 0.48 - t / 1.04,
                    r = H.sqrt(0.1734 + e * e),
                    i = r - e,
                    n = -r - e,
                    a =
                      T(Y(i), 1 / 3) * (i < 0 ? -1 : 1) +
                      T(Y(n), 1 / 3) * (n < 0 ? -1 : 1) +
                      0.5;
                  return 3 * (1 - a) * a * a + a * a * a;
                },
                backIn: function(t) {
                  return t * t * (2.70158 * t - 1.70158);
                },
                backOut: function(t) {
                  return --t * t * (2.70158 * t + 1.70158) + 1;
                },
                elastic: function(t) {
                  return t == !!t
                    ? t
                    : T(2, -10 * t) * H.sin((2 * U * (t - 0.075)) / 0.3) + 1;
                },
                bounce: function(t) {
                  var e = 7.5625,
                    r = 2.75,
                    i =
                      t < 1 / r
                        ? e * t * t
                        : t < 2 / r
                        ? e * (t -= 1.5 / r) * t + 0.75
                        : t < 2.5 / r
                        ? e * (t -= 2.25 / r) * t + 0.9375
                        : e * (t -= 2.625 / r) * t + 0.984375;
                  return i;
                }
              });
              (ne.easeIn = ne["ease-in"] = ne["<"]),
                (ne.easeOut = ne["ease-out"] = ne[">"]),
                (ne.easeInOut = ne["ease-in-out"] = ne["<>"]),
                (ne["back-in"] = ne.backIn),
                (ne["back-out"] = ne.backOut);
              var ae = [],
                oe =
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function(t) {
                    setTimeout(t, 16);
                  },
                se = function() {
                  for (var t = +new Date(), e = 0; e < ae.length; e++) {
                    var r = ae[e];
                    if (!r.el.removed && !r.paused) {
                      var i,
                        n = t - r.start,
                        a = r.ms,
                        o = r.easing,
                        s = r.from,
                        l = r.diff,
                        h = r.to,
                        c = (r.t, r.el),
                        u = {},
                        f = {};
                      if (
                        (r.initstatus
                          ? ((n =
                              ((r.initstatus * r.anim.top - r.prev) /
                                (r.percent - r.prev)) *
                              a),
                            (r.status = r.initstatus),
                            delete r.initstatus,
                            r.stop && ae.splice(e--, 1))
                          : (r.status =
                              (r.prev + (r.percent - r.prev) * (n / a)) /
                              r.anim.top),
                        !(n < 0))
                      )
                        if (n < a) {
                          var p = o(n / a);
                          for (var d in s)
                            if (s[j](d)) {
                              switch (tt[d]) {
                                case V:
                                  b = +s[d] + p * a * l[d];
                                  break;
                                case "colour":
                                  b =
                                    "rgb(" +
                                    [
                                      le(X(s[d].r + p * a * l[d].r)),
                                      le(X(s[d].g + p * a * l[d].g)),
                                      le(X(s[d].b + p * a * l[d].b))
                                    ].join(",") +
                                    ")";
                                  break;
                                case "path":
                                  b = [];
                                  for (var g = 0, v = s[d].length; g < v; g++) {
                                    b[g] = [s[d][g][0]];
                                    for (
                                      var x = 1, y = s[d][g].length;
                                      x < y;
                                      x++
                                    )
                                      b[g][x] =
                                        +s[d][g][x] + p * a * l[d][g][x];
                                    b[g] = b[g].join(C);
                                  }
                                  b = b.join(C);
                                  break;
                                case "transform":
                                  if (l[d].real)
                                    for (
                                      b = [], g = 0, v = s[d].length;
                                      g < v;
                                      g++
                                    )
                                      for (
                                        b[g] = [s[d][g][0]],
                                          x = 1,
                                          y = s[d][g].length;
                                        x < y;
                                        x++
                                      )
                                        b[g][x] =
                                          s[d][g][x] + p * a * l[d][g][x];
                                  else {
                                    function m(t) {
                                      return +s[d][t] + p * a * l[d][t];
                                    }
                                    var b = [
                                      ["m", m(0), m(1), m(2), m(3), m(4), m(5)]
                                    ];
                                  }
                                  break;
                                case "csv":
                                  if ("clip-rect" == d)
                                    for (b = [], g = 4; g--; )
                                      b[g] = +s[d][g] + p * a * l[d][g];
                                  break;
                                default:
                                  var w = [][q](s[d]);
                                  for (
                                    b = [],
                                      g = c.paper.customAttributes[d].length;
                                    g--;

                                  )
                                    b[g] = +w[g] + p * a * l[d][g];
                              }
                              u[d] = b;
                            }
                          c.attr(u),
                            (function(t, e, r) {
                              setTimeout(function() {
                                E("raphael.anim.frame." + t, e, r);
                              });
                            })(c.id, c, r.anim);
                        } else {
                          if (
                            ((function(t, e, r) {
                              setTimeout(function() {
                                E("raphael.anim.frame." + e.id, e, r),
                                  E("raphael.anim.finish." + e.id, e, r),
                                  O.is(t, "function") && t.call(e);
                              });
                            })(r.callback, c, r.anim),
                            c.attr(h),
                            ae.splice(e--, 1),
                            1 < r.repeat && !r.next)
                          ) {
                            for (i in h) h[j](i) && (f[i] = r.totalOrigin[i]);
                            r.el.attr(f),
                              _(
                                r.anim,
                                r.el,
                                r.anim.percents[0],
                                null,
                                r.totalOrigin,
                                r.repeat - 1
                              );
                          }
                          r.next &&
                            !r.stop &&
                            _(
                              r.anim,
                              r.el,
                              r.next,
                              null,
                              r.totalOrigin,
                              r.repeat
                            );
                        }
                    }
                  }
                  ae.length && oe(se);
                },
                le = function(t) {
                  return 255 < t ? 255 : t < 0 ? 0 : t;
                };
              (Zt.animateWith = function(t, e, r, i, n, a) {
                var o = this;
                if (o.removed) return a && a.call(o), o;
                var s = r instanceof c ? r : O.animation(r, i, n, a);
                _(s, o, s.percents[0], null, o.attr());
                for (var l = 0, h = ae.length; l < h; l++)
                  if (ae[l].anim == e && ae[l].el == t) {
                    ae[h - 1].start = ae[l].start;
                    break;
                  }
                return o;
              }),
                (Zt.onAnimation = function(t) {
                  return (
                    t
                      ? E.on("raphael.anim.frame." + this.id, t)
                      : E.unbind("raphael.anim.frame." + this.id),
                    this
                  );
                }),
                (c.prototype.delay = function(t) {
                  var e = new c(this.anim, this.ms);
                  return (e.times = this.times), (e.del = +t || 0), e;
                }),
                (c.prototype.repeat = function(t) {
                  var e = new c(this.anim, this.ms);
                  return (
                    (e.del = this.del), (e.times = H.floor(S(t, 0)) || 1), e
                  );
                }),
                (O.animation = function(t, e, r, i) {
                  if (t instanceof c) return t;
                  (!O.is(r, "function") && r) ||
                    ((i = i || r || null), (r = null)),
                    (t = Object(t)),
                    (e = +e || 0);
                  var n,
                    a,
                    o = {};
                  for (a in t)
                    t[j](a) &&
                      Z(a) != a &&
                      Z(a) + "%" != a &&
                      ((n = !0), (o[a] = t[a]));
                  if (n)
                    return (
                      r && (o.easing = r),
                      i && (o.callback = i),
                      new c(
                        {
                          100: o
                        },
                        e
                      )
                    );
                  if (i) {
                    var s = 0;
                    for (var l in t) {
                      var h = J(l);
                      t[j](l) && s < h && (s = h);
                    }
                    t[(s += "%")].callback || (t[s].callback = i);
                  }
                  return new c(t, e);
                }),
                (Zt.animate = function(t, e, r, i) {
                  var n = this;
                  if (n.removed) return i && i.call(n), n;
                  var a = t instanceof c ? t : O.animation(t, e, r, i);
                  return _(a, n, a.percents[0], null, n.attr()), n;
                }),
                (Zt.setTime = function(t, e) {
                  return (
                    t && null != e && this.status(t, A(e, t.ms) / t.ms), this
                  );
                }),
                (Zt.status = function(t, e) {
                  var r,
                    i,
                    n = [],
                    a = 0;
                  if (null != e) return _(t, this, -1, A(e, 1)), this;
                  for (r = ae.length; a < r; a++)
                    if ((i = ae[a]).el.id == this.id && (!t || i.anim == t)) {
                      if (t) return i.status;
                      n.push({
                        anim: i.anim,
                        status: i.status
                      });
                    }
                  return t ? 0 : n;
                }),
                (Zt.pause = function(t) {
                  for (var e = 0; e < ae.length; e++)
                    ae[e].el.id != this.id ||
                      (t && ae[e].anim != t) ||
                      (!1 !==
                        E("raphael.anim.pause." + this.id, this, ae[e].anim) &&
                        (ae[e].paused = !0));
                  return this;
                }),
                (Zt.resume = function(t) {
                  for (var e, r = 0; r < ae.length; r++) {
                    ae[r].el.id != this.id ||
                      (t && ae[r].anim != t) ||
                      ((e = ae[r]),
                      !1 !==
                        E("raphael.anim.resume." + this.id, this, e.anim) &&
                        (delete e.paused, this.status(e.anim, e.status)));
                  }
                  return this;
                }),
                (Zt.stop = function(t) {
                  for (var e = 0; e < ae.length; e++)
                    ae[e].el.id != this.id ||
                      (t && ae[e].anim != t) ||
                      (!1 !==
                        E("raphael.anim.stop." + this.id, this, ae[e].anim) &&
                        ae.splice(e--, 1));
                  return this;
                }),
                E.on("raphael.remove", t),
                E.on("raphael.clear", t),
                (Zt.toString = function() {
                  return "Raphaël’s object";
                });
              var he,
                ce,
                ue,
                fe,
                pe,
                de = function(t) {
                  if (
                    ((this.items = []),
                    (this.length = 0),
                    (this.type = "set"),
                    t)
                  )
                    for (var e = 0, r = t.length; e < r; e++)
                      !t[e] ||
                        (t[e].constructor != Zt.constructor &&
                          t[e].constructor != de) ||
                        ((this[this.items.length] = this.items[
                          this.items.length
                        ] = t[e]),
                        this.length++);
                },
                ge = de.prototype;
              for (var ve in ((ge.push = function() {
                for (var t, e, r = 0, i = arguments.length; r < i; r++)
                  !(t = arguments[r]) ||
                    (t.constructor != Zt.constructor && t.constructor != de) ||
                    ((this[(e = this.items.length)] = this.items[e] = t),
                    this.length++);
                return this;
              }),
              (ge.pop = function() {
                return (
                  this.length && delete this[this.length--], this.items.pop()
                );
              }),
              (ge.forEach = function(t, e) {
                for (var r = 0, i = this.items.length; r < i; r++)
                  if (!1 === t.call(e, this.items[r], r)) return this;
                return this;
              }),
              Zt))
                Zt[j](ve) &&
                  (ge[ve] = (function(r) {
                    return function() {
                      var e = arguments;
                      return this.forEach(function(t) {
                        t[r][b](t, e);
                      });
                    };
                  })(ve));
              return (
                (ge.attr = function(t, e) {
                  if (t && O.is(t, L) && O.is(t[0], "object"))
                    for (var r = 0, i = t.length; r < i; r++)
                      this.items[r].attr(t[r]);
                  else
                    for (var n = 0, a = this.items.length; n < a; n++)
                      this.items[n].attr(t, e);
                  return this;
                }),
                (ge.clear = function() {
                  for (; this.length; ) this.pop();
                }),
                (ge.splice = function(t, e, r) {
                  (t = t < 0 ? S(this.length + t, 0) : t),
                    (e = S(0, A(this.length - t, e)));
                  for (
                    var i = [], n = [], a = [], o = 2;
                    o < arguments.length;
                    o++
                  )
                    a.push(arguments[o]);
                  for (o = 0; o < e; o++) n.push(this[t + o]);
                  for (; o < this.length - t; o++) i.push(this[t + o]);
                  var s = a.length;
                  for (o = 0; o < s + i.length; o++)
                    this.items[t + o] = this[t + o] = o < s ? a[o] : i[o - s];
                  for (o = this.items.length = this.length -= e - s; this[o]; )
                    delete this[o++];
                  return new de(n);
                }),
                (ge.exclude = function(t) {
                  for (var e = 0, r = this.length; e < r; e++)
                    if (this[e] == t) return this.splice(e, 1), !0;
                }),
                (ge.animate = function(t, e, r, i) {
                  (!O.is(r, "function") && r) || (i = r || null);
                  var n,
                    a = this.items.length,
                    o = a,
                    s = this;
                  if (!a) return this;
                  i &&
                    (n = function() {
                      --a || i.call(s);
                    }),
                    (r = O.is(r, N) ? r : n);
                  for (
                    var l = O.animation(t, e, r, n),
                      h = this.items[--o].animate(l);
                    o--;

                  )
                    this.items[o] &&
                      !this.items[o].removed &&
                      this.items[o].animateWith(h, l, l),
                      (this.items[o] && !this.items[o].removed) || a--;
                  return this;
                }),
                (ge.insertAfter = function(t) {
                  for (var e = this.items.length; e--; )
                    this.items[e].insertAfter(t);
                  return this;
                }),
                (ge.getBBox = function() {
                  for (
                    var t,
                      e = [],
                      r = [],
                      i = [],
                      n = [],
                      a = this.items.length;
                    a--;

                  ) {
                    this.items[a].removed ||
                      ((t = this.items[a].getBBox()),
                      e.push(t.x),
                      r.push(t.y),
                      i.push(t.x + t.width),
                      n.push(t.y + t.height));
                  }
                  return {
                    x: (e = A[b](0, e)),
                    y: (r = A[b](0, r)),
                    x2: (i = S[b](0, i)),
                    y2: (n = S[b](0, n)),
                    width: i - e,
                    height: n - r
                  };
                }),
                (ge.clone = function(t) {
                  t = this.paper.set();
                  for (var e = 0, r = this.items.length; e < r; e++)
                    t.push(this.items[e].clone());
                  return t;
                }),
                (ge.toString = function() {
                  return "Raphaël‘s set";
                }),
                (ge.glow = function(i) {
                  var n = this.paper.set();
                  return (
                    this.forEach(function(t, e) {
                      var r = t.glow(i);
                      null != r &&
                        r.forEach(function(t, e) {
                          n.push(t);
                        });
                    }),
                    n
                  );
                }),
                (ge.isPointInside = function(e, r) {
                  var i = !1;
                  return (
                    this.forEach(function(t) {
                      if (t.isPointInside(e, r)) return !(i = !0);
                    }),
                    i
                  );
                }),
                (O.registerFont = function(t) {
                  if (!t.face) return t;
                  this.fonts = this.fonts || {};
                  var e = {
                      w: t.w,
                      face: {},
                      glyphs: {}
                    },
                    r = t.face["font-family"];
                  for (var i in t.face) t.face[j](i) && (e.face[i] = t.face[i]);
                  if (
                    (this.fonts[r]
                      ? this.fonts[r].push(e)
                      : (this.fonts[r] = [e]),
                    !t.svg)
                  )
                    for (var n in ((e.face["units-per-em"] = J(
                      t.face["units-per-em"],
                      10
                    )),
                    t.glyphs))
                      if (t.glyphs[j](n)) {
                        var a = t.glyphs[n];
                        if (
                          ((e.glyphs[n] = {
                            w: a.w,
                            k: {},
                            d:
                              a.d &&
                              "M" +
                                a.d.replace(/[mlcxtrv]/g, function(t) {
                                  return (
                                    {
                                      l: "L",
                                      c: "C",
                                      x: "z",
                                      t: "m",
                                      r: "l",
                                      v: "c"
                                    }[t] || "M"
                                  );
                                }) +
                                "z"
                          }),
                          a.k)
                        )
                          for (var o in a.k)
                            a[j](o) && (e.glyphs[n].k[o] = a.k[o]);
                      }
                  return t;
                }),
                (s.getFont = function(t, e, r, i) {
                  if (
                    ((i = i || "normal"),
                    (r = r || "normal"),
                    (e =
                      +e ||
                      {
                        normal: 400,
                        bold: 700,
                        lighter: 300,
                        bolder: 800
                      }[e] ||
                      400),
                    O.fonts)
                  ) {
                    var n,
                      a = O.fonts[t];
                    if (!a) {
                      var o = new RegExp(
                        "(^|\\s)" +
                          t.replace(/[^\w\d\s+!~.:_-]/g, "") +
                          "(\\s|$)",
                        "i"
                      );
                      for (var s in O.fonts)
                        if (O.fonts[j](s) && o.test(s)) {
                          a = O.fonts[s];
                          break;
                        }
                    }
                    if (a)
                      for (
                        var l = 0, h = a.length;
                        l < h &&
                        ((n = a[l]).face["font-weight"] != e ||
                          (n.face["font-style"] != r && n.face["font-style"]) ||
                          n.face["font-stretch"] != i);
                        l++
                      );
                    return n;
                  }
                }),
                (s.print = function(t, e, r, i, n, a, o, s) {
                  (a = a || "middle"),
                    (o = S(A(o || 0, 1), -1)),
                    (s = S(A(s || 1, 3), 1));
                  var l,
                    h = $(r)[W](""),
                    c = 0,
                    u = 0,
                    f = "";
                  if ((O.is(i, "string") && (i = this.getFont(i)), i)) {
                    l = (n || 16) / i.face["units-per-em"];
                    for (
                      var p,
                        d,
                        g = i.face.bbox[W](P),
                        v = +g[0],
                        x = g[3] - g[1],
                        y = 0,
                        m =
                          +g[1] +
                          ("baseline" == a ? x + +i.face.descent : x / 2),
                        b = 0,
                        w = h.length;
                      b < w;
                      b++
                    ) {
                      "\n" == h[b]
                        ? ((u = d = c = 0), (y += x * s))
                        : ((p = (u && i.glyphs[h[b - 1]]) || {}),
                          (d = i.glyphs[h[b]]),
                          (c += u
                            ? (p.w || i.w) + ((p.k && p.k[h[b]]) || 0) + i.w * o
                            : 0),
                          (u = 1)),
                        d &&
                          d.d &&
                          (f += O.transformPath(d.d, [
                            "t",
                            c * l,
                            y * l,
                            "s",
                            l,
                            l,
                            v,
                            m,
                            "t",
                            (t - v) / l,
                            (e - m) / l
                          ]));
                    }
                  }
                  return this.path(f).attr({
                    fill: "#000",
                    stroke: "none"
                  });
                }),
                (s.add = function(t) {
                  if (O.is(t, "array"))
                    for (var e, r = this.set(), i = 0, n = t.length; i < n; i++)
                      (e = t[i] || {}),
                        h[j](e.type) && r.push(this[e.type]().attr(e));
                  return r;
                }),
                (O.format = function(t, e) {
                  var r = O.is(e, L) ? [0][q](e) : arguments;
                  return (
                    t &&
                      O.is(t, N) &&
                      r.length - 1 &&
                      (t = t.replace(u, function(t, e) {
                        return null == r[++e] ? "" : r[e];
                      })),
                    t || ""
                  );
                }),
                (O.fullfill =
                  ((fe = /\{([^\}]+)\}/g),
                  (pe = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g),
                  function(t, n) {
                    return String(t).replace(fe, function(t, e) {
                      return (
                        (r = t),
                        (a = i = n),
                        e.replace(pe, function(t, e, r, i, n) {
                          (e = e || i),
                            a &&
                              (e in a && (a = a[e]),
                              "function" == typeof a && n && (a = a()));
                        }),
                        (a = (null == a || a == i ? r : a) + "")
                      );
                      var r, i, a;
                    });
                  })),
                (O.ninja = function() {
                  if (f.was) d.win.Raphael = f.is;
                  else {
                    window.Raphael = void 0;
                    try {
                      delete window.Raphael;
                    } catch (t) {}
                  }
                  return O;
                }),
                (O.st = ge),
                E.on("raphael.DOMload", function() {
                  o = !0;
                }),
                (he = document),
                (ce = "DOMContentLoaded"),
                null == he.readyState &&
                  he.addEventListener &&
                  (he.addEventListener(
                    ce,
                    (ue = function() {
                      he.removeEventListener(ce, ue, !1),
                        (he.readyState = "complete");
                    }),
                    !1
                  ),
                  (he.readyState = "loading")),
                (function t() {
                  /in/.test(he.readyState)
                    ? setTimeout(t, 9)
                    : O.eve("raphael.DOMload");
                })(),
                O
              );
            }.apply(e, i);
          void 0 === n || (t.exports = n);
        },
        function(t, e, r) {
          var i, p, d, f, g, v, x, n, y, m;

          function b(t, e) {
            return t - e;
          }

          function w() {
            for (var t = 0, e = this.length; t < e; t++)
              if (void 0 !== this[t]) return this[t];
          }

          function _() {
            for (var t = this.length; --t; )
              if (void 0 !== this[t]) return this[t];
          }
          (f = "hasOwnProperty"),
            (g = /[\.\/]/),
            (v = /\s*,\s*/),
            (x = {
              n: {}
            }),
            (n = Object.prototype.toString),
            (y = String),
            (m =
              Array.isArray ||
              function(t) {
                return t instanceof Array || "[object Array]" == n.call(t);
              }),
            (eve = function(t, e) {
              var r,
                i = d,
                n = Array.prototype.slice.call(arguments, 2),
                a = eve.listeners(t),
                o = 0,
                s = [],
                l = {},
                h = [],
                c = p;
              (h.firstDefined = w), (h.lastDefined = _), (p = t);
              for (var u = (d = 0), f = a.length; u < f; u++)
                "zIndex" in a[u] &&
                  (s.push(a[u].zIndex),
                  a[u].zIndex < 0 && (l[a[u].zIndex] = a[u]));
              for (s.sort(b); s[o] < 0; )
                if (((r = l[s[o++]]), h.push(r.apply(e, n)), d))
                  return (d = i), h;
              for (u = 0; u < f; u++)
                if ("zIndex" in (r = a[u]))
                  if (r.zIndex == s[o]) {
                    if ((h.push(r.apply(e, n)), d)) break;
                    do {
                      if (((r = l[s[++o]]) && h.push(r.apply(e, n)), d)) break;
                    } while (r);
                  } else l[r.zIndex] = r;
                else if ((h.push(r.apply(e, n)), d)) break;
              return (d = i), (p = c), h;
            }),
            (eve._events = x),
            (eve.listeners = function(t) {
              for (
                var e,
                  r,
                  i,
                  n,
                  a,
                  o,
                  s = m(t) ? t : t.split(g),
                  l = x,
                  h = [l],
                  c = [],
                  u = 0,
                  f = s.length;
                u < f;
                u++
              ) {
                for (o = [], n = 0, a = h.length; n < a; n++)
                  for (r = [(l = h[n].n)[s[u]], l["*"]], i = 2; i--; )
                    (e = r[i]) && (o.push(e), (c = c.concat(e.f || [])));
                h = o;
              }
              return c;
            }),
            (eve.separator = function(t) {
              g = t
                ? ((t =
                    "[" + (t = y(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]"),
                  new RegExp(t))
                : /[\.\/]/;
            }),
            (eve.on = function(t, o) {
              if ("function" != typeof o) return function() {};
              for (
                var e = m(t) ? (m(t[0]) ? t : [t]) : y(t).split(v),
                  r = 0,
                  i = e.length;
                r < i;
                r++
              )
                !(function(t) {
                  for (
                    var e,
                      r = m(t) ? t : y(t).split(g),
                      i = x,
                      n = 0,
                      a = r.length;
                    n < a;
                    n++
                  )
                    i =
                      ((i = i.n).hasOwnProperty(r[n]) && i[r[n]]) ||
                      (i[r[n]] = {
                        n: {}
                      });
                  for (i.f = i.f || [], n = 0, a = i.f.length; n < a; n++)
                    if (i.f[n] == o) {
                      e = !0;
                      break;
                    }
                  e || i.f.push(o);
                })(e[r]);
              return function(t) {
                +t == +t && (o.zIndex = +t);
              };
            }),
            (eve.f = function(t) {
              var e = [].slice.call(arguments, 1);
              return function() {
                eve.apply(
                  null,
                  [t, null].concat(e).concat([].slice.call(arguments, 0))
                );
              };
            }),
            (eve.stop = function() {
              d = 1;
            }),
            (eve.nt = function(t) {
              var e = m(p) ? p.join(".") : p;
              return t
                ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e)
                : e;
            }),
            (eve.nts = function() {
              return m(p) ? p : p.split(g);
            }),
            (eve.off = eve.unbind = function(t, e) {
              if (t) {
                var r = m(t) ? (m(t[0]) ? t : [t]) : y(t).split(v);
                if (1 < r.length)
                  for (var i = 0, n = r.length; i < n; i++) eve.off(r[i], e);
                else {
                  r = m(t) ? t : y(t).split(g);
                  var a,
                    o,
                    s,
                    l = [x];
                  for (i = 0, n = r.length; i < n; i++)
                    for (c = 0; c < l.length; c += s.length - 2) {
                      if (((s = [c, 1]), (a = l[c].n), "*" != r[i]))
                        a[r[i]] && s.push(a[r[i]]);
                      else for (o in a) a[f](o) && s.push(a[o]);
                      l.splice.apply(l, s);
                    }
                  for (i = 0, n = l.length; i < n; i++)
                    for (a = l[i]; a.n; ) {
                      if (e) {
                        if (a.f) {
                          for (c = 0, u = a.f.length; c < u; c++)
                            if (a.f[c] == e) {
                              a.f.splice(c, 1);
                              break;
                            }
                          a.f.length || delete a.f;
                        }
                        for (o in a.n)
                          if (a.n[f](o) && a.n[o].f) {
                            for (
                              var h = a.n[o].f, c = 0, u = h.length;
                              c < u;
                              c++
                            )
                              if (h[c] == e) {
                                h.splice(c, 1);
                                break;
                              }
                            h.length || delete a.n[o].f;
                          }
                      } else
                        for (o in (delete a.f, a.n))
                          a.n[f](o) && a.n[o].f && delete a.n[o].f;
                      a = a.n;
                    }
                }
              } else
                eve._events = x = {
                  n: {}
                };
            }),
            (eve.once = function(t, e) {
              var r = function() {
                return eve.off(t, r), e.apply(this, arguments);
              };
              return eve.on(t, r);
            }),
            (eve.version = "0.5.0"),
            (eve.toString = function() {
              return "You are running Eve 0.5.0";
            }),
            void 0 !== t && t.exports
              ? (t.exports = eve)
              : void 0 ===
                  (i = function() {
                    return eve;
                  }.apply(e, [])) || (t.exports = i);
        },
        function(t, e, r) {
          var i = [r(1)],
            n = function(B) {
              if (!B || B.svg) {
                var S = "hasOwnProperty",
                  A = String,
                  v = parseFloat,
                  _ = parseInt,
                  x = Math,
                  k = x.max,
                  C = x.abs,
                  y = x.pow,
                  T = /[, ]+/,
                  f = B.eve,
                  N = "http://www.w3.org/1999/xlink",
                  L = {
                    block: "M5,0 0,2.5 5,5z",
                    classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                    diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                    open: "M6,1 1,3.5 6,6",
                    oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                  },
                  I = {};
                B.toString = function() {
                  return (
                    "Your browser supports SVG.\nYou are running Raphaël " +
                    this.version
                  );
                };

                function F(t, e) {
                  var n = "linear",
                    r = t.id + e,
                    a = 0.5,
                    o = 0.5,
                    i = t.node,
                    s = t.paper,
                    l = i.style,
                    h = B._g.doc.getElementById(r);
                  if (!h) {
                    if (
                      ((e = (e = A(e).replace(B._radial_gradient, function(
                        t,
                        e,
                        r
                      ) {
                        var i;
                        return (
                          (n = "radial"),
                          e &&
                            r &&
                            ((a = v(e)),
                            (i = 2 * (0.5 < (o = v(r))) - 1),
                            0.25 < y(a - 0.5, 2) + y(o - 0.5, 2) &&
                              (o = x.sqrt(0.25 - y(a - 0.5, 2)) * i + 0.5) &&
                              0.5 != o &&
                              (o = o.toFixed(5) - 1e-5 * i)),
                          ""
                        );
                      })).split(/\s*\-\s*/)),
                      "linear" == n)
                    ) {
                      var c = e.shift(),
                        c = -v(c);
                      if (isNaN(c)) return null;
                      var u = [0, 0, x.cos(B.rad(c)), x.sin(B.rad(c))],
                        f = 1 / (k(C(u[2]), C(u[3])) || 1);
                      (u[2] *= f),
                        (u[3] *= f),
                        u[2] < 0 && ((u[0] = -u[2]), (u[2] = 0)),
                        u[3] < 0 && ((u[1] = -u[3]), (u[3] = 0));
                    }
                    var p = B._parseDots(e);
                    if (!p) return null;
                    if (
                      ((r = r.replace(/[\(\)\s,\xb0#]/g, "_")),
                      t.gradient &&
                        r != t.gradient.id &&
                        (s.defs.removeChild(t.gradient), delete t.gradient),
                      !t.gradient)
                    ) {
                      (h = z(n + "Gradient", {
                        id: r
                      })),
                        (t.gradient = h),
                        z(
                          h,
                          "radial" == n
                            ? {
                                fx: a,
                                fy: o
                              }
                            : {
                                x1: u[0],
                                y1: u[1],
                                x2: u[2],
                                y2: u[3],
                                gradientTransform: t.matrix.invert()
                              }
                        ),
                        s.defs.appendChild(h);
                      for (var d = 0, g = p.length; d < g; d++)
                        h.appendChild(
                          z("stop", {
                            offset: p[d].offset
                              ? p[d].offset
                              : d
                              ? "100%"
                              : "0%",
                            "stop-color": p[d].color || "#fff",
                            "stop-opacity": isFinite(p[d].opacity)
                              ? p[d].opacity
                              : 1
                          })
                        );
                    }
                  }
                  return (
                    z(i, {
                      fill: m(r),
                      opacity: 1,
                      "fill-opacity": 1
                    }),
                    (l.fill = ""),
                    (l.opacity = 1),
                    (l.fillOpacity = 1)
                  );
                }

                function M(t) {
                  var e = t.getBBox(1);
                  z(t.pattern, {
                    patternTransform:
                      t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                  });
                }

                function E(t, e, r) {
                  if ("path" == t.type) {
                    for (
                      var i,
                        n,
                        a,
                        o,
                        s,
                        l,
                        h,
                        c,
                        u,
                        f,
                        p,
                        d = A(e)
                          .toLowerCase()
                          .split("-"),
                        g = t.paper,
                        v = r ? "end" : "start",
                        x = t.node,
                        y = t.attrs,
                        m = y["stroke-width"],
                        b = d.length,
                        w = "classic",
                        _ = 3,
                        k = 3,
                        C = 5;
                      b--;

                    )
                      switch (d[b]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                          w = d[b];
                          break;
                        case "wide":
                          k = 5;
                          break;
                        case "narrow":
                          k = 2;
                          break;
                        case "long":
                          _ = 5;
                          break;
                        case "short":
                          _ = 2;
                      }
                    for (f in ((f =
                      "open" == w
                        ? ((_ += 2),
                          (k += 2),
                          (C += 2),
                          (n = 1),
                          (a = r ? 4 : 1),
                          {
                            fill: "none",
                            stroke: y.stroke
                          })
                        : ((a = n = _ / 2),
                          {
                            fill: y.stroke,
                            stroke: "none"
                          })),
                    t._.arrows
                      ? r
                        ? (t._.arrows.endPath && I[t._.arrows.endPath]--,
                          t._.arrows.endMarker && I[t._.arrows.endMarker]--)
                        : (t._.arrows.startPath && I[t._.arrows.startPath]--,
                          t._.arrows.startMarker && I[t._.arrows.startMarker]--)
                      : (t._.arrows = {}),
                    "none" != w
                      ? ((o = "raphael-marker-" + w),
                        (s = "raphael-marker-" + v + w + _ + k + "-obj" + t.id),
                        B._g.doc.getElementById(o)
                          ? I[o]++
                          : (g.defs.appendChild(
                              z(z("path"), {
                                "stroke-linecap": "round",
                                d: L[w],
                                id: o
                              })
                            ),
                            (I[o] = 1)),
                        (l = B._g.doc.getElementById(s))
                          ? (I[s]++, (h = l.getElementsByTagName("use")[0]))
                          : ((l = z(z("marker"), {
                              id: s,
                              markerHeight: k,
                              markerWidth: _,
                              orient: "auto",
                              refX: a,
                              refY: k / 2
                            })),
                            (h = z(z("use"), {
                              "xlink:href": "#" + o,
                              transform:
                                (r
                                  ? "rotate(180 " + _ / 2 + " " + k / 2 + ") "
                                  : "") +
                                "scale(" +
                                _ / C +
                                "," +
                                k / C +
                                ")",
                              "stroke-width": (
                                1 /
                                ((_ / C + k / C) / 2)
                              ).toFixed(4)
                            })),
                            l.appendChild(h),
                            g.defs.appendChild(l),
                            (I[s] = 1)),
                        z(h, f),
                        (c = n * ("diamond" != w && "oval" != w)),
                        (u = r
                          ? ((i = t._.arrows.startdx * m || 0),
                            B.getTotalLength(y.path) - c * m)
                          : ((i = c * m),
                            B.getTotalLength(y.path) -
                              (t._.arrows.enddx * m || 0))),
                        ((f = {})["marker-" + v] = "url(#" + s + ")"),
                        (u || i) && (f.d = B.getSubpath(y.path, i, u)),
                        z(x, f),
                        (t._.arrows[v + "Path"] = o),
                        (t._.arrows[v + "Marker"] = s),
                        (t._.arrows[v + "dx"] = c),
                        (t._.arrows[v + "Type"] = w),
                        (t._.arrows[v + "String"] = e))
                      : ((u = r
                          ? ((i = t._.arrows.startdx * m || 0),
                            B.getTotalLength(y.path) - i)
                          : ((i = 0),
                            B.getTotalLength(y.path) -
                              (t._.arrows.enddx * m || 0))),
                        t._.arrows[v + "Path"] &&
                          z(x, {
                            d: B.getSubpath(y.path, i, u)
                          }),
                        delete t._.arrows[v + "Path"],
                        delete t._.arrows[v + "Marker"],
                        delete t._.arrows[v + "dx"],
                        delete t._.arrows[v + "Type"],
                        delete t._.arrows[v + "String"]),
                    I)) {
                      !I[S](f) ||
                        I[f] ||
                        ((p = B._g.doc.getElementById(f)) &&
                          p.parentNode.removeChild(p));
                    }
                  }
                }

                function O(t, e, r) {
                  if ((e = s[A(e).toLowerCase()])) {
                    for (
                      var i = t.attrs["stroke-width"] || "1",
                        n =
                          {
                            round: i,
                            square: i,
                            butt: 0
                          }[t.attrs["stroke-linecap"] || r["stroke-linecap"]] ||
                          0,
                        a = [],
                        o = e.length;
                      o--;

                    )
                      a[o] = e[o] * i + (o % 2 ? 1 : -1) * n;
                    z(t.node, {
                      "stroke-dasharray": a.join(",")
                    });
                  } else
                    z(t.node, {
                      "stroke-dasharray": "none"
                    });
                }

                function p(t, e) {
                  var r = t.node,
                    i = t.attrs,
                    n = r.style.visibility;
                  for (var a in ((r.style.visibility = "hidden"), e))
                    if (e[S](a)) {
                      if (!B._availableAttrs[S](a)) continue;
                      var o = e[a];
                      switch (((i[a] = o), a)) {
                        case "blur":
                          t.blur(o);
                          break;
                        case "title":
                          var s,
                            l = r.getElementsByTagName("title");
                          l.length && (l = l[0])
                            ? (l.firstChild.nodeValue = o)
                            : ((l = z("title")),
                              (s = B._g.doc.createTextNode(o)),
                              l.appendChild(s),
                              r.appendChild(l));
                          break;
                        case "href":
                        case "target":
                          var h,
                            c = r.parentNode;
                          "a" != c.tagName.toLowerCase() &&
                            ((h = z("a")),
                            c.insertBefore(h, r),
                            h.appendChild(r),
                            (c = h)),
                            "target" == a
                              ? c.setAttributeNS(
                                  N,
                                  "show",
                                  "blank" == o ? "new" : o
                                )
                              : c.setAttributeNS(N, a, o);
                          break;
                        case "cursor":
                          r.style.cursor = o;
                          break;
                        case "transform":
                          t.transform(o);
                          break;
                        case "arrow-start":
                          E(t, o);
                          break;
                        case "arrow-end":
                          E(t, o, 1);
                          break;
                        case "clip-rect":
                          var u,
                            f,
                            p,
                            d,
                            g = A(o).split(T);
                          4 == g.length &&
                            (t.clip &&
                              t.clip.parentNode.parentNode.removeChild(
                                t.clip.parentNode
                              ),
                            (u = z("clipPath")),
                            (f = z("rect")),
                            (u.id = B.createUUID()),
                            z(f, {
                              x: g[0],
                              y: g[1],
                              width: g[2],
                              height: g[3]
                            }),
                            u.appendChild(f),
                            t.paper.defs.appendChild(u),
                            z(r, {
                              "clip-path": "url(#" + u.id + ")"
                            }),
                            (t.clip = f)),
                            o ||
                              ((p = r.getAttribute("clip-path")) &&
                                ((d = B._g.doc.getElementById(
                                  p.replace(/(^url\(#|\)$)/g, "")
                                )) && d.parentNode.removeChild(d),
                                z(r, {
                                  "clip-path": ""
                                }),
                                delete t.clip));
                          break;
                        case "path":
                          "path" == t.type &&
                            (z(r, {
                              d: o ? (i.path = B._pathToAbsolute(o)) : "M0,0"
                            }),
                            (t._.dirty = 1),
                            t._.arrows &&
                              ("startString" in t._.arrows &&
                                E(t, t._.arrows.startString),
                              "endString" in t._.arrows &&
                                E(t, t._.arrows.endString, 1)));
                          break;
                        case "width":
                          if ((r.setAttribute(a, o), (t._.dirty = 1), !i.fx))
                            break;
                          (a = "x"), (o = i.x);
                        case "x":
                          i.fx && (o = -i.x - (i.width || 0));
                        case "rx":
                          if ("rx" == a && "rect" == t.type) break;
                        case "cx":
                          r.setAttribute(a, o),
                            t.pattern && M(t),
                            (t._.dirty = 1);
                          break;
                        case "height":
                          if ((r.setAttribute(a, o), (t._.dirty = 1), !i.fy))
                            break;
                          (a = "y"), (o = i.y);
                        case "y":
                          i.fy && (o = -i.y - (i.height || 0));
                        case "ry":
                          if ("ry" == a && "rect" == t.type) break;
                        case "cy":
                          r.setAttribute(a, o),
                            t.pattern && M(t),
                            (t._.dirty = 1);
                          break;
                        case "r":
                          "rect" == t.type
                            ? z(r, {
                                rx: o,
                                ry: o
                              })
                            : r.setAttribute(a, o),
                            (t._.dirty = 1);
                          break;
                        case "src":
                          "image" == t.type && r.setAttributeNS(N, "href", o);
                          break;
                        case "stroke-width":
                          (1 == t._.sx && 1 == t._.sy) ||
                            (o /= k(C(t._.sx), C(t._.sy)) || 1),
                            r.setAttribute(a, o),
                            i["stroke-dasharray"] &&
                              O(t, i["stroke-dasharray"], e),
                            t._.arrows &&
                              ("startString" in t._.arrows &&
                                E(t, t._.arrows.startString),
                              "endString" in t._.arrows &&
                                E(t, t._.arrows.endString, 1));
                          break;
                        case "stroke-dasharray":
                          O(t, o, e);
                          break;
                        case "fill":
                          var v = A(o).match(B._ISURL);
                          if (v) {
                            u = z("pattern");
                            var x = z("image");
                            (u.id = B.createUUID()),
                              z(u, {
                                x: 0,
                                y: 0,
                                patternUnits: "userSpaceOnUse",
                                height: 1,
                                width: 1
                              }),
                              z(x, {
                                x: 0,
                                y: 0,
                                "xlink:href": v[1]
                              }),
                              u.appendChild(x),
                              (function(r) {
                                B._preload(v[1], function() {
                                  var t = this.offsetWidth,
                                    e = this.offsetHeight;
                                  z(r, {
                                    width: t,
                                    height: e
                                  }),
                                    z(x, {
                                      width: t,
                                      height: e
                                    });
                                });
                              })(u),
                              t.paper.defs.appendChild(u),
                              z(r, {
                                fill: "url(#" + u.id + ")"
                              }),
                              (t.pattern = u),
                              t.pattern && M(t);
                            break;
                          }
                          var y,
                            m,
                            b = B.getRGB(o);
                          if (b.error) {
                            if (
                              ("circle" == t.type ||
                                "ellipse" == t.type ||
                                "r" != A(o).charAt()) &&
                              F(t, o)
                            ) {
                              !("opacity" in i || "fill-opacity" in i) ||
                                ((y = B._g.doc.getElementById(
                                  r
                                    .getAttribute("fill")
                                    .replace(/^url\(#|\)$/g, "")
                                )) &&
                                  ((m = y.getElementsByTagName("stop")),
                                  z(m[m.length - 1], {
                                    "stop-opacity":
                                      ("opacity" in i ? i.opacity : 1) *
                                      ("fill-opacity" in i
                                        ? i["fill-opacity"]
                                        : 1)
                                  }))),
                                (i.gradient = o),
                                (i.fill = "none");
                              break;
                            }
                          } else
                            delete e.gradient,
                              delete i.gradient,
                              !B.is(i.opacity, "undefined") &&
                                B.is(e.opacity, "undefined") &&
                                z(r, {
                                  opacity: i.opacity
                                }),
                              !B.is(i["fill-opacity"], "undefined") &&
                                B.is(e["fill-opacity"], "undefined") &&
                                z(r, {
                                  "fill-opacity": i["fill-opacity"]
                                });
                          b[S]("opacity") &&
                            z(r, {
                              "fill-opacity":
                                1 < b.opacity ? b.opacity / 100 : b.opacity
                            });
                        case "stroke":
                          (b = B.getRGB(o)),
                            r.setAttribute(a, b.hex),
                            "stroke" == a &&
                              b[S]("opacity") &&
                              z(r, {
                                "stroke-opacity":
                                  1 < b.opacity ? b.opacity / 100 : b.opacity
                              }),
                            "stroke" == a &&
                              t._.arrows &&
                              ("startString" in t._.arrows &&
                                E(t, t._.arrows.startString),
                              "endString" in t._.arrows &&
                                E(t, t._.arrows.endString, 1));
                          break;
                        case "gradient":
                          ("circle" != t.type &&
                            "ellipse" != t.type &&
                            "r" == A(o).charAt()) ||
                            F(t, o);
                          break;
                        case "opacity":
                          i.gradient &&
                            !i[S]("stroke-opacity") &&
                            z(r, {
                              "stroke-opacity": 1 < o ? o / 100 : o
                            });
                        case "fill-opacity":
                          if (i.gradient) {
                            (y = B._g.doc.getElementById(
                              r.getAttribute("fill").replace(/^url\(#|\)$/g, "")
                            )) &&
                              ((m = y.getElementsByTagName("stop")),
                              z(m[m.length - 1], {
                                "stop-opacity": o
                              }));
                            break;
                          }
                        default:
                          "font-size" == a && (o = _(o, 10) + "px");
                          var w = a.replace(/(\-.)/g, function(t) {
                            return t.substring(1).toUpperCase();
                          });
                          (r.style[w] = o),
                            (t._.dirty = 1),
                            r.setAttribute(a, o);
                      }
                    }
                  R(t, e), (r.style.visibility = n);
                }

                function i(t) {
                  return t.parentNode &&
                    "a" === t.parentNode.tagName.toLowerCase()
                    ? t.parentNode
                    : t;
                }

                function l(t, e) {
                  ((this[0] = this.node = t).raphael = !0),
                    (this.id = (
                      "0000" +
                      ((Math.random() * Math.pow(36, 5)) << 0).toString(36)
                    ).slice(-5)),
                    (t.raphaelid = this.id),
                    (this.matrix = B.matrix()),
                    (this.realPath = null),
                    (this.paper = e),
                    (this.attrs = this.attrs || {}),
                    (this._ = {
                      transform: [],
                      sx: 1,
                      sy: 1,
                      deg: 0,
                      dx: 0,
                      dy: 0,
                      dirty: 1
                    }),
                    e.bottom || (e.bottom = this),
                    (this.prev = e.top),
                    e.top && (e.top.next = this),
                    ((e.top = this).next = null);
                }
                var z = function(t, e) {
                    if (e)
                      for (var r in ("string" == typeof t && (t = z(t)), e))
                        e[S](r) &&
                          ("xlink:" == r.substring(0, 6)
                            ? t.setAttributeNS(N, r.substring(6), A(e[r]))
                            : t.setAttribute(r, A(e[r])));
                    else
                      (t = B._g.doc.createElementNS(
                        "http://www.w3.org/2000/svg",
                        t
                      )).style &&
                        (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                    return t;
                  },
                  m = function(t) {
                    if ((e = document.documentMode) && (9 === e || 10 === e))
                      return "url('#" + t + "')";
                    var e,
                      r = document.location;
                    return (
                      "url('" +
                      (r.protocol + "//" + r.host + r.pathname + r.search) +
                      "#" +
                      t +
                      "')"
                    );
                  },
                  s = {
                    "-": [3, 1],
                    ".": [1, 1],
                    "-.": [3, 1, 1, 1],
                    "-..": [3, 1, 1, 1, 1, 1],
                    ". ": [1, 3],
                    "- ": [4, 3],
                    "--": [8, 3],
                    "- .": [4, 3, 1, 3],
                    "--.": [8, 3, 1, 3],
                    "--..": [8, 3, 1, 3, 1, 3]
                  },
                  R = function(t, e) {
                    if (
                      "text" == t.type &&
                      (e[S]("text") ||
                        e[S]("font") ||
                        e[S]("font-size") ||
                        e[S]("x") ||
                        e[S]("y"))
                    ) {
                      var r = t.attrs,
                        i = t.node,
                        n = i.firstChild
                          ? _(
                              B._g.doc.defaultView
                                .getComputedStyle(i.firstChild, "")
                                .getPropertyValue("font-size"),
                              10
                            )
                          : 10;
                      if (e[S]("text")) {
                        for (r.text = e.text; i.firstChild; )
                          i.removeChild(i.firstChild);
                        for (
                          var a,
                            o = A(e.text).split("\n"),
                            s = [],
                            l = 0,
                            h = o.length;
                          l < h;
                          l++
                        )
                          (a = z("tspan")),
                            l &&
                              z(a, {
                                dy: 1.2 * n,
                                x: r.x
                              }),
                            a.appendChild(B._g.doc.createTextNode(o[l])),
                            i.appendChild(a),
                            (s[l] = a);
                      } else
                        for (
                          l = 0,
                            h = (s = i.getElementsByTagName("tspan")).length;
                          l < h;
                          l++
                        )
                          l
                            ? z(s[l], {
                                dy: 1.2 * n,
                                x: r.x
                              })
                            : z(s[0], {
                                dy: 0
                              });
                      z(i, {
                        x: r.x,
                        y: r.y
                      }),
                        (t._.dirty = 1);
                      var c = t._getBBox(),
                        u = r.y - (c.y + c.height / 2);
                      u &&
                        B.is(u, "finite") &&
                        z(s[0], {
                          dy: u
                        });
                    }
                  },
                  t = B.el;
                ((l.prototype = t).constructor = l),
                  (B._engine.path = function(t, e) {
                    var r = z("path");
                    e.canvas && e.canvas.appendChild(r);
                    var i = new l(r, e);
                    return (
                      (i.type = "path"),
                      p(i, {
                        fill: "none",
                        stroke: "#000",
                        path: t
                      }),
                      i
                    );
                  }),
                  (t.rotate = function(t, e, r) {
                    return (
                      this.removed ||
                        ((t = A(t).split(T)).length - 1 &&
                          ((e = v(t[1])), (r = v(t[2]))),
                        (t = v(t[0])),
                        null == r && (e = r),
                        (null != e && null != r) ||
                          ((e = (i = this.getBBox(1)).x + i.width / 2),
                          (r = i.y + i.height / 2)),
                        this.transform(
                          this._.transform.concat([["r", t, e, r]])
                        )),
                      this
                    );
                    var i;
                  }),
                  (t.scale = function(t, e, r, i) {
                    return (
                      this.removed ||
                        ((t = A(t).split(T)).length - 1 &&
                          ((e = v(t[1])), (r = v(t[2])), (i = v(t[3]))),
                        (t = v(t[0])),
                        null == e && (e = t),
                        null == i && (r = i),
                        (null != r && null != i) || (n = this.getBBox(1)),
                        (r = null == r ? n.x + n.width / 2 : r),
                        (i = null == i ? n.y + n.height / 2 : i),
                        this.transform(
                          this._.transform.concat([["s", t, e, r, i]])
                        )),
                      this
                    );
                    var n;
                  }),
                  (t.translate = function(t, e) {
                    return (
                      this.removed ||
                        ((t = A(t).split(T)).length - 1 && (e = v(t[1])),
                        (t = v(t[0]) || 0),
                        (e = +e || 0),
                        this.transform(this._.transform.concat([["t", t, e]]))),
                      this
                    );
                  }),
                  (t.transform = function(t) {
                    var e,
                      r = this._;
                    return null == t
                      ? r.transform
                      : (B._extractTransform(this, t),
                        this.clip &&
                          z(this.clip, {
                            transform: this.matrix.invert()
                          }),
                        this.pattern && M(this),
                        this.node &&
                          z(this.node, {
                            transform: this.matrix
                          }),
                        (1 == r.sx && 1 == r.sy) ||
                          ((e = this.attrs[S]("stroke-width")
                            ? this.attrs["stroke-width"]
                            : 1),
                          this.attr({
                            "stroke-width": e
                          })),
                        this);
                  }),
                  (t.hide = function() {
                    return (
                      this.removed || (this.node.style.display = "none"), this
                    );
                  }),
                  (t.show = function() {
                    return this.removed || (this.node.style.display = ""), this;
                  }),
                  (t.remove = function() {
                    var t = i(this.node);
                    if (!this.removed && t.parentNode) {
                      var e = this.paper;
                      for (var r in (e.__set__ && e.__set__.exclude(this),
                      f.unbind("raphael.*.*." + this.id),
                      this.gradient && e.defs.removeChild(this.gradient),
                      B._tear(this, e),
                      t.parentNode.removeChild(t),
                      this.removeData(),
                      this))
                        this[r] =
                          "function" == typeof this[r]
                            ? B._removedFactory(r)
                            : null;
                      this.removed = !0;
                    }
                  }),
                  (t._getBBox = function() {
                    var t;
                    "none" == this.node.style.display &&
                      (this.show(), (t = !0));
                    var e,
                      r = !1;
                    this.paper.canvas.parentElement
                      ? (e = this.paper.canvas.parentElement.style)
                      : this.paper.canvas.parentNode &&
                        (e = this.paper.canvas.parentNode.style),
                      e && "none" == e.display && ((r = !0), (e.display = ""));
                    var i = {};
                    try {
                      i = this.node.getBBox();
                    } catch (t) {
                      i = {
                        x: this.node.clientLeft,
                        y: this.node.clientTop,
                        width: this.node.clientWidth,
                        height: this.node.clientHeight
                      };
                    } finally {
                      (i = i || {}), r && (e.display = "none");
                    }
                    return t && this.hide(), i;
                  }),
                  (t.attr = function(t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                      var r = {};
                      for (var i in this.attrs)
                        this.attrs[S](i) && (r[i] = this.attrs[i]);
                      return (
                        r.gradient &&
                          "none" == r.fill &&
                          (r.fill = r.gradient) &&
                          delete r.gradient,
                        (r.transform = this._.transform),
                        r
                      );
                    }
                    if (null == e && B.is(t, "string")) {
                      if (
                        "fill" == t &&
                        "none" == this.attrs.fill &&
                        this.attrs.gradient
                      )
                        return this.attrs.gradient;
                      if ("transform" == t) return this._.transform;
                      for (
                        var n = t.split(T), a = {}, o = 0, s = n.length;
                        o < s;
                        o++
                      )
                        (t = n[o]) in this.attrs
                          ? (a[t] = this.attrs[t])
                          : B.is(this.paper.customAttributes[t], "function")
                          ? (a[t] = this.paper.customAttributes[t].def)
                          : (a[t] = B._availableAttrs[t]);
                      return s - 1 ? a : a[n[0]];
                    }
                    if (null == e && B.is(t, "array")) {
                      for (a = {}, o = 0, s = t.length; o < s; o++)
                        a[t[o]] = this.attr(t[o]);
                      return a;
                    }
                    var l;
                    for (var h in (null != e
                      ? ((l = {})[t] = e)
                      : null != t && B.is(t, "object") && (l = t),
                    l))
                      f("raphael.attr." + h + "." + this.id, this, l[h]);
                    for (h in this.paper.customAttributes)
                      if (
                        this.paper.customAttributes[S](h) &&
                        l[S](h) &&
                        B.is(this.paper.customAttributes[h], "function")
                      ) {
                        var c = this.paper.customAttributes[h].apply(
                          this,
                          [].concat(l[h])
                        );
                        for (var u in ((this.attrs[h] = l[h]), c))
                          c[S](u) && (l[u] = c[u]);
                      }
                    return p(this, l), this;
                  }),
                  (t.toFront = function() {
                    if (this.removed) return this;
                    var t = i(this.node);
                    t.parentNode.appendChild(t);
                    var e = this.paper;
                    return e.top != this && B._tofront(this, e), this;
                  }),
                  (t.toBack = function() {
                    if (this.removed) return this;
                    var t = i(this.node),
                      e = t.parentNode;
                    e.insertBefore(t, e.firstChild),
                      B._toback(this, this.paper);
                    this.paper;
                    return this;
                  }),
                  (t.insertAfter = function(t) {
                    if (this.removed || !t) return this;
                    var e = i(this.node),
                      r = i(t.node || t[t.length - 1].node);
                    return (
                      r.nextSibling
                        ? r.parentNode.insertBefore(e, r.nextSibling)
                        : r.parentNode.appendChild(e),
                      B._insertafter(this, t, this.paper),
                      this
                    );
                  }),
                  (t.insertBefore = function(t) {
                    if (this.removed || !t) return this;
                    var e = i(this.node),
                      r = i(t.node || t[0].node);
                    return (
                      r.parentNode.insertBefore(e, r),
                      B._insertbefore(this, t, this.paper),
                      this
                    );
                  }),
                  (t.blur = function(t) {
                    var e,
                      r,
                      i = this;
                    return (
                      0 != +t
                        ? ((e = z("filter")),
                          (r = z("feGaussianBlur")),
                          (i.attrs.blur = t),
                          (e.id = B.createUUID()),
                          z(r, {
                            stdDeviation: +t || 1.5
                          }),
                          e.appendChild(r),
                          i.paper.defs.appendChild(e),
                          (i._blur = e),
                          z(i.node, {
                            filter: "url(#" + e.id + ")"
                          }))
                        : (i._blur &&
                            (i._blur.parentNode.removeChild(i._blur),
                            delete i._blur,
                            delete i.attrs.blur),
                          i.node.removeAttribute("filter")),
                      i
                    );
                  }),
                  (B._engine.circle = function(t, e, r, i) {
                    var n = z("circle");
                    t.canvas && t.canvas.appendChild(n);
                    var a = new l(n, t);
                    return (
                      (a.attrs = {
                        cx: e,
                        cy: r,
                        r: i,
                        fill: "none",
                        stroke: "#000"
                      }),
                      (a.type = "circle"),
                      z(n, a.attrs),
                      a
                    );
                  }),
                  (B._engine.rect = function(t, e, r, i, n, a) {
                    var o = z("rect");
                    t.canvas && t.canvas.appendChild(o);
                    var s = new l(o, t);
                    return (
                      (s.attrs = {
                        x: e,
                        y: r,
                        width: i,
                        height: n,
                        rx: a || 0,
                        ry: a || 0,
                        fill: "none",
                        stroke: "#000"
                      }),
                      (s.type = "rect"),
                      z(o, s.attrs),
                      s
                    );
                  }),
                  (B._engine.ellipse = function(t, e, r, i, n) {
                    var a = z("ellipse");
                    t.canvas && t.canvas.appendChild(a);
                    var o = new l(a, t);
                    return (
                      (o.attrs = {
                        cx: e,
                        cy: r,
                        rx: i,
                        ry: n,
                        fill: "none",
                        stroke: "#000"
                      }),
                      (o.type = "ellipse"),
                      z(a, o.attrs),
                      o
                    );
                  }),
                  (B._engine.image = function(t, e, r, i, n, a) {
                    var o = z("image");
                    z(o, {
                      x: r,
                      y: i,
                      width: n,
                      height: a,
                      preserveAspectRatio: "none"
                    }),
                      o.setAttributeNS(N, "href", e),
                      t.canvas && t.canvas.appendChild(o);
                    var s = new l(o, t);
                    return (
                      (s.attrs = {
                        x: r,
                        y: i,
                        width: n,
                        height: a,
                        src: e
                      }),
                      (s.type = "image"),
                      s
                    );
                  }),
                  (B._engine.text = function(t, e, r, i) {
                    var n = z("text");
                    t.canvas && t.canvas.appendChild(n);
                    var a = new l(n, t);
                    return (
                      (a.attrs = {
                        x: e,
                        y: r,
                        "text-anchor": "middle",
                        text: i,
                        "font-family": B._availableAttrs["font-family"],
                        "font-size": B._availableAttrs["font-size"],
                        stroke: "none",
                        fill: "#000"
                      }),
                      (a.type = "text"),
                      p(a, a.attrs),
                      a
                    );
                  }),
                  (B._engine.setSize = function(t, e) {
                    return (
                      (this.width = t || this.width),
                      (this.height = e || this.height),
                      this.canvas.setAttribute("width", this.width),
                      this.canvas.setAttribute("height", this.height),
                      this._viewBox &&
                        this.setViewBox.apply(this, this._viewBox),
                      this
                    );
                  }),
                  (B._engine.create = function() {
                    var t = B._getContainer.apply(0, arguments),
                      e = t && t.container,
                      r = t.x,
                      i = t.y,
                      n = t.width,
                      a = t.height;
                    if (!e) throw new Error("SVG container not found.");
                    var o,
                      s = z("svg"),
                      l = "overflow:hidden;",
                      r = r || 0,
                      i = i || 0;
                    return (
                      z(s, {
                        height: (a = a || 342),
                        version: 1.1,
                        width: (n = n || 512),
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                      }),
                      1 == e
                        ? ((s.style.cssText =
                            l +
                            "position:absolute;left:" +
                            r +
                            "px;top:" +
                            i +
                            "px"),
                          B._g.doc.body.appendChild(s),
                          (o = 1))
                        : ((s.style.cssText = l + "position:relative"),
                          e.firstChild
                            ? e.insertBefore(s, e.firstChild)
                            : e.appendChild(s)),
                      ((e = new B._Paper()).width = n),
                      (e.height = a),
                      (e.canvas = s),
                      e.clear(),
                      (e._left = e._top = 0),
                      o && (e.renderfix = function() {}),
                      e.renderfix(),
                      e
                    );
                  }),
                  (B._engine.setViewBox = function(t, e, r, i, n) {
                    f("raphael.setViewBox", this, this._viewBox, [
                      t,
                      e,
                      r,
                      i,
                      n
                    ]);
                    var a,
                      o = this.getSize(),
                      s = k(r / o.width, i / o.height),
                      l = this.top,
                      h = n ? "xMidYMid meet" : "xMinYMin",
                      c =
                        null == t
                          ? (this._vbSize && (s = 1),
                            delete this._vbSize,
                            "0 0 " + this.width + " " + this.height)
                          : ((this._vbSize = s),
                            t + " " + e + " " + r + " " + i);
                    for (
                      z(this.canvas, {
                        viewBox: c,
                        preserveAspectRatio: h
                      });
                      s && l;

                    )
                      (a =
                        "stroke-width" in l.attrs
                          ? l.attrs["stroke-width"]
                          : 1),
                        l.attr({
                          "stroke-width": a
                        }),
                        (l._.dirty = 1),
                        (l._.dirtyT = 1),
                        (l = l.prev);
                    return (this._viewBox = [t, e, r, i, !!n]), this;
                  }),
                  (B.prototype.renderfix = function() {
                    var e,
                      r = this.canvas,
                      t = r.style;
                    try {
                      e = r.getScreenCTM() || r.createSVGMatrix();
                    } catch (t) {
                      e = r.createSVGMatrix();
                    }
                    var i = -e.e % 1,
                      n = -e.f % 1;
                    (i || n) &&
                      (i &&
                        ((this._left = (this._left + i) % 1),
                        (t.left = this._left + "px")),
                      n &&
                        ((this._top = (this._top + n) % 1),
                        (t.top = this._top + "px")));
                  }),
                  (B.prototype.clear = function() {
                    B.eve("raphael.clear", this);
                    for (var t = this.canvas; t.firstChild; )
                      t.removeChild(t.firstChild);
                    (this.bottom = this.top = null),
                      (this.desc = z("desc")).appendChild(
                        B._g.doc.createTextNode(
                          "Created with Raphaël " + B.version
                        )
                      ),
                      t.appendChild(this.desc),
                      t.appendChild((this.defs = z("defs")));
                  }),
                  (B.prototype.remove = function() {
                    for (var t in (f("raphael.remove", this),
                    this.canvas.parentNode &&
                      this.canvas.parentNode.removeChild(this.canvas),
                    this))
                      this[t] =
                        "function" == typeof this[t]
                          ? B._removedFactory(t)
                          : null;
                  });
                var e = B.st;
                for (var r in t)
                  t[S](r) &&
                    !e[S](r) &&
                    (e[r] = (function(r) {
                      return function() {
                        var e = arguments;
                        return this.forEach(function(t) {
                          t[r].apply(t, e);
                        });
                      };
                    })(r));
              }
            }.apply(e, i);
          void 0 === n || (t.exports = n);
        },
        function(t, e, r) {
          var i = [r(1)],
            n = function(F) {
              if (!F || F.vml) {
                function x(t, e, r) {
                  var i = F.matrix();
                  return (
                    i.rotate(-t, 0.5, 0.5),
                    {
                      dx: i.x(e, r),
                      dy: i.y(e, r)
                    }
                  );
                }

                function M(t, e, r, i, n, a) {
                  var o,
                    s,
                    l = t._,
                    h = t.matrix,
                    c = l.fillpos,
                    u = t.node,
                    f = u.style,
                    p = 1,
                    d = "",
                    g = H / e,
                    v = H / r;
                  (f.visibility = "hidden"),
                    e &&
                      r &&
                      ((u.coordsize = y(g) + G + y(v)),
                      (f.rotation = a * (e * r < 0 ? -1 : 1)),
                      a && ((i = (o = x(a, i, n)).dx), (n = o.dy)),
                      e < 0 && (d += "x"),
                      r < 0 && (d += " y") && (p = -1),
                      (f.flip = d),
                      (u.coordorigin = i * -g + G + n * -v),
                      (c || l.fillsize) &&
                        ((s = (s = u.getElementsByTagName($)) && s[0]),
                        u.removeChild(s),
                        c &&
                          ((o = x(a, h.x(c[0], c[1]), h.y(c[0], c[1]))),
                          (s.position = o.dx * p + G + o.dy * p)),
                        l.fillsize &&
                          (s.size =
                            l.fillsize[0] * y(e) + G + l.fillsize[1] * y(r)),
                        u.appendChild(s)),
                      (f.visibility = "visible"));
                }
                var E = "hasOwnProperty",
                  O = String,
                  z = parseFloat,
                  u = Math,
                  R = u.round,
                  P = u.max,
                  j = u.min,
                  y = u.abs,
                  $ = "fill",
                  V = /[, ]+/,
                  f = F.eve,
                  G = " ",
                  D = {
                    M: "m",
                    L: "l",
                    C: "c",
                    Z: "x",
                    m: "t",
                    l: "r",
                    c: "v",
                    z: "x"
                  },
                  q = /([clmz]),?([^clmz]*)/gi,
                  i = / progid:\S+Blur\([^\)]+\)/g,
                  W = /-?[^,\s-]+/g,
                  c =
                    "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                  H = 21600,
                  Y = {
                    path: 1,
                    rect: 1,
                    image: 1
                  },
                  U = {
                    circle: 1,
                    ellipse: 1
                  };
                F.toString = function() {
                  return (
                    "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
                    this.version
                  );
                };

                function X(t, e, r) {
                  for (
                    var i = O(e)
                        .toLowerCase()
                        .split("-"),
                      n = r ? "end" : "start",
                      a = i.length,
                      o = "classic",
                      s = "medium",
                      l = "medium";
                    a--;

                  )
                    switch (i[a]) {
                      case "block":
                      case "classic":
                      case "oval":
                      case "diamond":
                      case "open":
                      case "none":
                        o = i[a];
                        break;
                      case "wide":
                      case "narrow":
                        l = i[a];
                        break;
                      case "long":
                      case "short":
                        s = i[a];
                    }
                  var h = t.node.getElementsByTagName("stroke")[0];
                  (h[n + "arrow"] = o),
                    (h[n + "arrowlength"] = s),
                    (h[n + "arrowwidth"] = l);
                }

                function p(t, e) {
                  t.attrs = t.attrs || {};
                  var r,
                    i,
                    n,
                    a,
                    o,
                    s,
                    l,
                    h,
                    c,
                    u,
                    f,
                    p,
                    d,
                    g,
                    v,
                    x,
                    y,
                    m = t.node,
                    b = t.attrs,
                    w = m.style,
                    _ =
                      Y[t.type] &&
                      (e.x != b.x ||
                        e.y != b.y ||
                        e.width != b.width ||
                        e.height != b.height ||
                        e.cx != b.cx ||
                        e.cy != b.cy ||
                        e.rx != b.rx ||
                        e.ry != b.ry ||
                        e.r != b.r),
                    k =
                      U[t.type] &&
                      (b.cx != e.cx ||
                        b.cy != e.cy ||
                        b.r != e.r ||
                        b.rx != e.rx ||
                        b.ry != e.ry),
                    C = t;
                  for (var B in e) e[E](B) && (b[B] = e[B]);
                  if (
                    (_ && ((b.path = F._getPath[t.type](t)), (t._.dirty = 1)),
                    e.href && (m.href = e.href),
                    e.title && (m.title = e.title),
                    e.target && (m.target = e.target),
                    e.cursor && (w.cursor = e.cursor),
                    "blur" in e && t.blur(e.blur),
                    ((e.path && "path" == t.type) || _) &&
                      ((m.path = (function(t) {
                        var e = /[ahqstv]/gi,
                          r = F._pathToAbsolute;
                        if (
                          (O(t).match(e) && (r = F._path2curve),
                          (e = /[clmz]/g),
                          r == F._pathToAbsolute && !O(t).match(e))
                        ) {
                          var i = O(t).replace(q, function(t, e, r) {
                            var i = [],
                              n = "m" == e.toLowerCase(),
                              a = D[e];
                            return (
                              r.replace(W, function(t) {
                                n &&
                                  2 == i.length &&
                                  ((a += i + D["m" == e ? "l" : "L"]),
                                  (i = [])),
                                  i.push(R(t * H));
                              }),
                              a + i
                            );
                          });
                          return i;
                        }
                        for (
                          var n, a, o = r(t), i = [], s = 0, l = o.length;
                          s < l;
                          s++
                        ) {
                          (n = o[s]),
                            "z" == (a = o[s][0].toLowerCase()) && (a = "x");
                          for (var h = 1, c = n.length; h < c; h++)
                            a += R(n[h] * H) + (h != c - 1 ? "," : "");
                          i.push(a);
                        }
                        return i.join(G);
                      })(
                        ~O(b.path)
                          .toLowerCase()
                          .indexOf("r")
                          ? F._pathToAbsolute(b.path)
                          : b.path
                      )),
                      (t._.dirty = 1),
                      "image" == t.type &&
                        ((t._.fillpos = [b.x, b.y]),
                        (t._.fillsize = [b.width, b.height]),
                        M(t, 1, 1, 0, 0, 0))),
                    "transform" in e && t.transform(e.transform),
                    k &&
                      ((r = +b.cx),
                      (i = +b.cy),
                      (n = +b.rx || +b.r || 0),
                      (a = +b.ry || +b.r || 0),
                      (m.path = F.format(
                        "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                        R((r - n) * H),
                        R((i - a) * H),
                        R((r + n) * H),
                        R((i + a) * H),
                        R(r * H)
                      )),
                      (t._.dirty = 1)),
                    "clip-rect" in e &&
                      (4 == (o = O(e["clip-rect"]).split(V)).length &&
                        ((o[2] = +o[2] + +o[0]),
                        (o[3] = +o[3] + +o[1]),
                        ((l = (s = m.clipRect || F._g.doc.createElement("div"))
                          .style).clip = F.format(
                          "rect({1}px {2}px {3}px {0}px)",
                          o
                        )),
                        m.clipRect ||
                          ((l.position = "absolute"),
                          (l.top = 0),
                          (l.left = 0),
                          (l.width = t.paper.width + "px"),
                          (l.height = t.paper.height + "px"),
                          m.parentNode.insertBefore(s, m),
                          s.appendChild(m),
                          (m.clipRect = s))),
                      e["clip-rect"] ||
                        (m.clipRect && (m.clipRect.style.clip = "auto"))),
                    t.textpath &&
                      ((h = t.textpath.style),
                      e.font && (h.font = e.font),
                      e["font-family"] &&
                        (h.fontFamily =
                          '"' +
                          e["font-family"]
                            .split(",")[0]
                            .replace(/^['"]+|['"]+$/g, "") +
                          '"'),
                      e["font-size"] && (h.fontSize = e["font-size"]),
                      e["font-weight"] && (h.fontWeight = e["font-weight"]),
                      e["font-style"] && (h.fontStyle = e["font-style"])),
                    "arrow-start" in e && X(C, e["arrow-start"]),
                    "arrow-end" in e && X(C, e["arrow-end"], 1),
                    (null == e.opacity &&
                      null == e.fill &&
                      null == e.src &&
                      null == e.stroke &&
                      null == e["stroke-width"] &&
                      null == e["stroke-opacity"] &&
                      null == e["fill-opacity"] &&
                      null == e["stroke-dasharray"] &&
                      null == e["stroke-miterlimit"] &&
                      null == e["stroke-linejoin"] &&
                      null == e["stroke-linecap"]) ||
                      ((f = (f = m.getElementsByTagName($)) && f[0]) ||
                        (f = Z($)),
                      "image" == t.type && e.src && (f.src = e.src),
                      e.fill && (f.on = !0),
                      (null != f.on && "none" != e.fill && null !== e.fill) ||
                        (f.on = !1),
                      f.on &&
                        e.fill &&
                        ((c = O(e.fill).match(F._ISURL))
                          ? (f.parentNode == m && m.removeChild(f),
                            (f.rotate = !0),
                            (f.src = c[1]),
                            (f.type = "tile"),
                            (u = t.getBBox(1)),
                            (f.position = u.x + G + u.y),
                            (t._.fillpos = [u.x, u.y]),
                            F._preload(c[1], function() {
                              t._.fillsize = [
                                this.offsetWidth,
                                this.offsetHeight
                              ];
                            }))
                          : ((f.color = F.getRGB(e.fill).hex),
                            (f.src = ""),
                            (f.type = "solid"),
                            F.getRGB(e.fill).error &&
                              (C.type in
                                {
                                  circle: 1,
                                  ellipse: 1
                                } ||
                                "r" != O(e.fill).charAt()) &&
                              J(C, e.fill, f) &&
                              ((b.fill = "none"),
                              (b.gradient = e.fill),
                              (f.rotate = !1)))),
                      ("fill-opacity" in e || "opacity" in e) &&
                        ((p =
                          ((+b["fill-opacity"] + 1 || 2) - 1) *
                          ((+b.opacity + 1 || 2) - 1) *
                          ((+F.getRGB(e.fill).o + 1 || 2) - 1)),
                        (p = j(P(p, 0), 1)),
                        (f.opacity = p),
                        f.src && (f.color = "none")),
                      m.appendChild(f),
                      (g = !1),
                      (d =
                        m.getElementsByTagName("stroke") &&
                        m.getElementsByTagName("stroke")[0]) ||
                        (g = d = Z("stroke")),
                      ((e.stroke && "none" != e.stroke) ||
                        e["stroke-width"] ||
                        null != e["stroke-opacity"] ||
                        e["stroke-dasharray"] ||
                        e["stroke-miterlimit"] ||
                        e["stroke-linejoin"] ||
                        e["stroke-linecap"]) &&
                        (d.on = !0),
                      ("none" != e.stroke &&
                        null !== e.stroke &&
                        null != d.on &&
                        0 != e.stroke &&
                        0 != e["stroke-width"]) ||
                        (d.on = !1),
                      (v = F.getRGB(e.stroke)),
                      d.on && e.stroke && (d.color = v.hex),
                      (p =
                        ((+b["stroke-opacity"] + 1 || 2) - 1) *
                        ((+b.opacity + 1 || 2) - 1) *
                        ((+v.o + 1 || 2) - 1)),
                      (x = 0.75 * (z(e["stroke-width"]) || 1)),
                      (p = j(P(p, 0), 1)),
                      null == e["stroke-width"] && (x = b["stroke-width"]),
                      e["stroke-width"] && (d.weight = x),
                      x && x < 1 && (p *= x) && (d.weight = 1),
                      (d.opacity = p),
                      e["stroke-linejoin"] &&
                        (d.joinstyle = e["stroke-linejoin"] || "miter"),
                      (d.miterlimit = e["stroke-miterlimit"] || 8),
                      e["stroke-linecap"] &&
                        (d.endcap =
                          "butt" == e["stroke-linecap"]
                            ? "flat"
                            : "square" == e["stroke-linecap"]
                            ? "square"
                            : "round"),
                      "stroke-dasharray" in e &&
                        ((y = {
                          "-": "shortdash",
                          ".": "shortdot",
                          "-.": "shortdashdot",
                          "-..": "shortdashdotdot",
                          ". ": "dot",
                          "- ": "dash",
                          "--": "longdash",
                          "- .": "dashdot",
                          "--.": "longdashdot",
                          "--..": "longdashdotdot"
                        }),
                        (d.dashstyle = y[E](e["stroke-dasharray"])
                          ? y[e["stroke-dasharray"]]
                          : "")),
                      g && m.appendChild(d)),
                    "text" == C.type)
                  ) {
                    C.paper.canvas.style.display = "";
                    var S = C.paper.span,
                      A = b.font && b.font.match(/\d+(?:\.\d*)?(?=px)/),
                      w = S.style;
                    b.font && (w.font = b.font),
                      b["font-family"] && (w.fontFamily = b["font-family"]),
                      b["font-weight"] && (w.fontWeight = b["font-weight"]),
                      b["font-style"] && (w.fontStyle = b["font-style"]),
                      (A = z(b["font-size"] || (A && A[0])) || 10),
                      (w.fontSize = 100 * A + "px"),
                      C.textpath.string &&
                        (S.innerHTML = O(C.textpath.string)
                          .replace(/</g, "&#60;")
                          .replace(/&/g, "&#38;")
                          .replace(/\n/g, "<br>"));
                    var T = S.getBoundingClientRect();
                    (C.W = b.w = (T.right - T.left) / 100),
                      (C.H = b.h = (T.bottom - T.top) / 100),
                      (C.X = b.x),
                      (C.Y = b.y + C.H / 2),
                      ("x" in e || "y" in e) &&
                        (C.path.v = F.format(
                          "m{0},{1}l{2},{1}",
                          R(b.x * H),
                          R(b.y * H),
                          R(b.x * H) + 1
                        ));
                    for (
                      var N = [
                          "x",
                          "y",
                          "text",
                          "font",
                          "font-family",
                          "font-weight",
                          "font-style",
                          "font-size"
                        ],
                        L = 0,
                        I = N.length;
                      L < I;
                      L++
                    )
                      if (N[L] in e) {
                        C._.dirty = 1;
                        break;
                      }
                    switch (b["text-anchor"]) {
                      case "start":
                        (C.textpath.style["v-text-align"] = "left"),
                          (C.bbx = C.W / 2);
                        break;
                      case "end":
                        (C.textpath.style["v-text-align"] = "right"),
                          (C.bbx = -C.W / 2);
                        break;
                      default:
                        (C.textpath.style["v-text-align"] = "center"),
                          (C.bbx = 0);
                    }
                    C.textpath.style["v-text-kern"] = !0;
                  }
                }

                function d(t, e) {
                  ((this[0] = this.node = t).raphael = !0),
                    (this.id = F._oid++),
                    (t.raphaelid = this.id),
                    (this.X = 0),
                    (this.Y = 0),
                    (this.attrs = {}),
                    (this.paper = e),
                    (this.matrix = F.matrix()),
                    (this._ = {
                      transform: [],
                      sx: 1,
                      sy: 1,
                      dx: 0,
                      dy: 0,
                      deg: 0,
                      dirty: 1,
                      dirtyT: 1
                    }),
                    e.bottom || (e.bottom = this),
                    (this.prev = e.top),
                    e.top && (e.top.next = this),
                    ((e.top = this).next = null);
                }
                var Z,
                  J = function(t, e, r) {
                    t.attrs = t.attrs || {};
                    t.attrs;
                    var i = Math.pow,
                      n = "linear",
                      a = ".5 .5";
                    if (
                      ((t.attrs.gradient = e),
                      (e = (e = O(e).replace(F._radial_gradient, function(
                        t,
                        e,
                        r
                      ) {
                        return (
                          (n = "radial"),
                          e &&
                            r &&
                            ((e = z(e)),
                            (r = z(r)),
                            0.25 < i(e - 0.5, 2) + i(r - 0.5, 2) &&
                              (r =
                                u.sqrt(0.25 - i(e - 0.5, 2)) *
                                  (2 * (0.5 < r) - 1) +
                                0.5),
                            (a = e + G + r)),
                          ""
                        );
                      })).split(/\s*\-\s*/)),
                      "linear" == n)
                    ) {
                      var o = e.shift(),
                        o = -z(o);
                      if (isNaN(o)) return null;
                    }
                    var s = F._parseDots(e);
                    if (!s) return null;
                    if (((t = t.shape || t.node), s.length)) {
                      t.removeChild(r),
                        (r.on = !0),
                        (r.method = "none"),
                        (r.color = s[0].color),
                        (r.color2 = s[s.length - 1].color);
                      for (var l = [], h = 0, c = s.length; h < c; h++)
                        s[h].offset && l.push(s[h].offset + G + s[h].color);
                      (r.colors = l.length ? l.join() : "0% " + r.color),
                        "radial" == n
                          ? ((r.type = "gradientTitle"),
                            (r.focus = "100%"),
                            (r.focussize = "0 0"),
                            (r.focusposition = a),
                            (r.angle = 0))
                          : ((r.type = "gradient"),
                            (r.angle = (270 - o) % 360)),
                        t.appendChild(r);
                    }
                    return 1;
                  },
                  t = F.el;
                ((d.prototype = t).constructor = d),
                  (t.transform = function(t) {
                    if (null == t) return this._.transform;
                    var e,
                      r = this.paper._viewBoxShift,
                      i = r
                        ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy]
                        : "";
                    r &&
                      (e = t = O(t).replace(
                        /\.{3}|\u2026/g,
                        this._.transform || ""
                      )),
                      F._extractTransform(this, i + t);
                    var n,
                      a,
                      o,
                      s,
                      l,
                      h = this.matrix.clone(),
                      c = this.skew,
                      u = this.node,
                      f = ~O(this.attrs.fill).indexOf("-"),
                      p = !O(this.attrs.fill).indexOf("url(");
                    return (
                      h.translate(1, 1),
                      p || f || "image" == this.type
                        ? ((c.matrix = "1 0 0 1"),
                          (c.offset = "0 0"),
                          (n = h.split()),
                          (f && n.noRotation) || !n.isSimple
                            ? ((u.style.filter = h.toFilter()),
                              (a = this.getBBox()),
                              (o = this.getBBox(1)),
                              (s = a.x - o.x),
                              (l = a.y - o.y),
                              (u.coordorigin = s * -H + G + l * -H),
                              M(this, 1, 1, s, l, 0))
                            : ((u.style.filter = ""),
                              M(
                                this,
                                n.scalex,
                                n.scaley,
                                n.dx,
                                n.dy,
                                n.rotate
                              )))
                        : ((u.style.filter = ""),
                          (c.matrix = O(h)),
                          (c.offset = h.offset())),
                      null !== e &&
                        ((this._.transform = e), F._extractTransform(this, e)),
                      this
                    );
                  }),
                  (t.rotate = function(t, e, r) {
                    return this.removed
                      ? this
                      : null != t
                      ? ((t = O(t).split(V)).length - 1 &&
                          ((e = z(t[1])), (r = z(t[2]))),
                        (t = z(t[0])),
                        null == r && (e = r),
                        (null != e && null != r) ||
                          ((e = (i = this.getBBox(1)).x + i.width / 2),
                          (r = i.y + i.height / 2)),
                        (this._.dirtyT = 1),
                        this.transform(
                          this._.transform.concat([["r", t, e, r]])
                        ),
                        this)
                      : void 0;
                    var i;
                  }),
                  (t.translate = function(t, e) {
                    return (
                      this.removed ||
                        ((t = O(t).split(V)).length - 1 && (e = z(t[1])),
                        (t = z(t[0]) || 0),
                        (e = +e || 0),
                        this._.bbox &&
                          ((this._.bbox.x += t), (this._.bbox.y += e)),
                        this.transform(this._.transform.concat([["t", t, e]]))),
                      this
                    );
                  }),
                  (t.scale = function(t, e, r, i) {
                    return (
                      this.removed ||
                        ((t = O(t).split(V)).length - 1 &&
                          ((e = z(t[1])),
                          (r = z(t[2])),
                          (i = z(t[3])),
                          isNaN(r) && (r = null),
                          isNaN(i) && (i = null)),
                        (t = z(t[0])),
                        null == e && (e = t),
                        null == i && (r = i),
                        (null != r && null != i) || (n = this.getBBox(1)),
                        (r = null == r ? n.x + n.width / 2 : r),
                        (i = null == i ? n.y + n.height / 2 : i),
                        this.transform(
                          this._.transform.concat([["s", t, e, r, i]])
                        ),
                        (this._.dirtyT = 1)),
                      this
                    );
                    var n;
                  }),
                  (t.hide = function() {
                    return (
                      this.removed || (this.node.style.display = "none"), this
                    );
                  }),
                  (t.show = function() {
                    return this.removed || (this.node.style.display = ""), this;
                  }),
                  (t.auxGetBBox = F.el.getBBox),
                  (t.getBBox = function() {
                    var t = this.auxGetBBox();
                    if (this.paper && this.paper._viewBoxShift) {
                      var e = {},
                        r = 1 / this.paper._viewBoxShift.scale;
                      return (
                        (e.x = t.x - this.paper._viewBoxShift.dx),
                        (e.x *= r),
                        (e.y = t.y - this.paper._viewBoxShift.dy),
                        (e.y *= r),
                        (e.width = t.width * r),
                        (e.height = t.height * r),
                        (e.x2 = e.x + e.width),
                        (e.y2 = e.y + e.height),
                        e
                      );
                    }
                    return t;
                  }),
                  (t._getBBox = function() {
                    return this.removed
                      ? {}
                      : {
                          x: this.X + (this.bbx || 0) - this.W / 2,
                          y: this.Y - this.H,
                          width: this.W,
                          height: this.H
                        };
                  }),
                  (t.remove = function() {
                    if (!this.removed && this.node.parentNode) {
                      for (var t in (this.paper.__set__ &&
                        this.paper.__set__.exclude(this),
                      F.eve.unbind("raphael.*.*." + this.id),
                      F._tear(this, this.paper),
                      this.node.parentNode.removeChild(this.node),
                      this.shape &&
                        this.shape.parentNode.removeChild(this.shape),
                      this))
                        this[t] =
                          "function" == typeof this[t]
                            ? F._removedFactory(t)
                            : null;
                      this.removed = !0;
                    }
                  }),
                  (t.attr = function(t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                      var r = {};
                      for (var i in this.attrs)
                        this.attrs[E](i) && (r[i] = this.attrs[i]);
                      return (
                        r.gradient &&
                          "none" == r.fill &&
                          (r.fill = r.gradient) &&
                          delete r.gradient,
                        (r.transform = this._.transform),
                        r
                      );
                    }
                    if (null == e && F.is(t, "string")) {
                      if (
                        t == $ &&
                        "none" == this.attrs.fill &&
                        this.attrs.gradient
                      )
                        return this.attrs.gradient;
                      for (
                        var n = t.split(V), a = {}, o = 0, s = n.length;
                        o < s;
                        o++
                      )
                        (t = n[o]) in this.attrs
                          ? (a[t] = this.attrs[t])
                          : F.is(this.paper.customAttributes[t], "function")
                          ? (a[t] = this.paper.customAttributes[t].def)
                          : (a[t] = F._availableAttrs[t]);
                      return s - 1 ? a : a[n[0]];
                    }
                    if (this.attrs && null == e && F.is(t, "array")) {
                      for (a = {}, o = 0, s = t.length; o < s; o++)
                        a[t[o]] = this.attr(t[o]);
                      return a;
                    }
                    var l;
                    for (var h in (null != e && ((l = {})[t] = e),
                    null == e && F.is(t, "object") && (l = t),
                    l))
                      f("raphael.attr." + h + "." + this.id, this, l[h]);
                    if (l) {
                      for (h in this.paper.customAttributes)
                        if (
                          this.paper.customAttributes[E](h) &&
                          l[E](h) &&
                          F.is(this.paper.customAttributes[h], "function")
                        ) {
                          var c = this.paper.customAttributes[h].apply(
                            this,
                            [].concat(l[h])
                          );
                          for (var u in ((this.attrs[h] = l[h]), c))
                            c[E](u) && (l[u] = c[u]);
                        }
                      l.text &&
                        "text" == this.type &&
                        (this.textpath.string = l.text),
                        p(this, l);
                    }
                    return this;
                  }),
                  (t.toFront = function() {
                    return (
                      this.removed ||
                        this.node.parentNode.appendChild(this.node),
                      this.paper &&
                        this.paper.top != this &&
                        F._tofront(this, this.paper),
                      this
                    );
                  }),
                  (t.toBack = function() {
                    return (
                      this.removed ||
                        (this.node.parentNode.firstChild != this.node &&
                          (this.node.parentNode.insertBefore(
                            this.node,
                            this.node.parentNode.firstChild
                          ),
                          F._toback(this, this.paper))),
                      this
                    );
                  }),
                  (t.insertAfter = function(t) {
                    return (
                      this.removed ||
                        (t.constructor == F.st.constructor &&
                          (t = t[t.length - 1]),
                        t.node.nextSibling
                          ? t.node.parentNode.insertBefore(
                              this.node,
                              t.node.nextSibling
                            )
                          : t.node.parentNode.appendChild(this.node),
                        F._insertafter(this, t, this.paper)),
                      this
                    );
                  }),
                  (t.insertBefore = function(t) {
                    return (
                      this.removed ||
                        (t.constructor == F.st.constructor && (t = t[0]),
                        t.node.parentNode.insertBefore(this.node, t.node),
                        F._insertbefore(this, t, this.paper)),
                      this
                    );
                  }),
                  (t.blur = function(t) {
                    var e = this.node.runtimeStyle,
                      r = (r = e.filter).replace(i, "");
                    return (
                      0 != +t
                        ? ((this.attrs.blur = t),
                          (e.filter =
                            r +
                            G +
                            " progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                            (+t || 1.5) +
                            ")"),
                          (e.margin = F.format(
                            "-{0}px 0 0 -{0}px",
                            R(+t || 1.5)
                          )))
                        : ((e.filter = r),
                          (e.margin = 0),
                          delete this.attrs.blur),
                      this
                    );
                  }),
                  (F._engine.path = function(t, e) {
                    var r = Z("shape");
                    (r.style.cssText = c),
                      (r.coordsize = H + G + H),
                      (r.coordorigin = e.coordorigin);
                    var i = new d(r, e),
                      n = {
                        fill: "none",
                        stroke: "#000"
                      };
                    t && (n.path = t),
                      (i.type = "path"),
                      (i.path = []),
                      (i.Path = ""),
                      p(i, n),
                      e.canvas && e.canvas.appendChild(r);
                    var a = Z("skew");
                    return (
                      (a.on = !0),
                      r.appendChild(a),
                      (i.skew = a),
                      i.transform(""),
                      i
                    );
                  }),
                  (F._engine.rect = function(t, e, r, i, n, a) {
                    var o = F._rectPath(e, r, i, n, a),
                      s = t.path(o),
                      l = s.attrs;
                    return (
                      (s.X = l.x = e),
                      (s.Y = l.y = r),
                      (s.W = l.width = i),
                      (s.H = l.height = n),
                      (l.r = a),
                      (l.path = o),
                      (s.type = "rect"),
                      s
                    );
                  }),
                  (F._engine.ellipse = function(t, e, r, i, n) {
                    var a = t.path();
                    a.attrs;
                    return (
                      (a.X = e - i),
                      (a.Y = r - n),
                      (a.W = 2 * i),
                      (a.H = 2 * n),
                      (a.type = "ellipse"),
                      p(a, {
                        cx: e,
                        cy: r,
                        rx: i,
                        ry: n
                      }),
                      a
                    );
                  }),
                  (F._engine.circle = function(t, e, r, i) {
                    var n = t.path();
                    n.attrs;
                    return (
                      (n.X = e - i),
                      (n.Y = r - i),
                      (n.W = n.H = 2 * i),
                      (n.type = "circle"),
                      p(n, {
                        cx: e,
                        cy: r,
                        r: i
                      }),
                      n
                    );
                  }),
                  (F._engine.image = function(t, e, r, i, n, a) {
                    var o = F._rectPath(r, i, n, a),
                      s = t.path(o).attr({
                        stroke: "none"
                      }),
                      l = s.attrs,
                      h = s.node,
                      c = h.getElementsByTagName($)[0];
                    return (
                      (l.src = e),
                      (s.X = l.x = r),
                      (s.Y = l.y = i),
                      (s.W = l.width = n),
                      (s.H = l.height = a),
                      (l.path = o),
                      (s.type = "image"),
                      c.parentNode == h && h.removeChild(c),
                      (c.rotate = !0),
                      (c.src = e),
                      (c.type = "tile"),
                      (s._.fillpos = [r, i]),
                      (s._.fillsize = [n, a]),
                      h.appendChild(c),
                      M(s, 1, 1, 0, 0, 0),
                      s
                    );
                  }),
                  (F._engine.text = function(t, e, r, i) {
                    var n = Z("shape"),
                      a = Z("path"),
                      o = Z("textpath");
                    (e = e || 0),
                      (r = r || 0),
                      (i = i || ""),
                      (a.v = F.format(
                        "m{0},{1}l{2},{1}",
                        R(e * H),
                        R(r * H),
                        R(e * H) + 1
                      )),
                      (a.textpathok = !0),
                      (o.string = O(i)),
                      (o.on = !0),
                      (n.style.cssText = c),
                      (n.coordsize = H + G + H),
                      (n.coordorigin = "0 0");
                    var s = new d(n, t),
                      l = {
                        fill: "#000",
                        stroke: "none",
                        font: F._availableAttrs.font,
                        text: i
                      };
                    (s.shape = n),
                      (s.path = a),
                      (s.textpath = o),
                      (s.type = "text"),
                      (s.attrs.text = O(i)),
                      (s.attrs.x = e),
                      (s.attrs.y = r),
                      (s.attrs.w = 1),
                      (s.attrs.h = 1),
                      p(s, l),
                      n.appendChild(o),
                      n.appendChild(a),
                      t.canvas.appendChild(n);
                    var h = Z("skew");
                    return (
                      (h.on = !0),
                      n.appendChild(h),
                      (s.skew = h),
                      s.transform(""),
                      s
                    );
                  }),
                  (F._engine.setSize = function(t, e) {
                    var r = this.canvas.style;
                    return (
                      (this.width = t) == +t && (t += "px"),
                      (this.height = e) == +e && (e += "px"),
                      (r.width = t),
                      (r.height = e),
                      (r.clip = "rect(0 " + t + " " + e + " 0)"),
                      this._viewBox &&
                        F._engine.setViewBox.apply(this, this._viewBox),
                      this
                    );
                  }),
                  (F._engine.setViewBox = function(t, e, r, i, n) {
                    F.eve("raphael.setViewBox", this, this._viewBox, [
                      t,
                      e,
                      r,
                      i,
                      n
                    ]);
                    var a,
                      o,
                      s = this.getSize(),
                      l = s.width,
                      h = s.height;
                    return (
                      n &&
                        (r * (a = h / i) < l && (t -= (l - r * a) / 2 / a),
                        i * (o = l / r) < h && (e -= (h - i * o) / 2 / o)),
                      (this._viewBox = [t, e, r, i, !!n]),
                      (this._viewBoxShift = {
                        dx: -t,
                        dy: -e,
                        scale: s
                      }),
                      this.forEach(function(t) {
                        t.transform("...");
                      }),
                      this
                    );
                  }),
                  (F._engine.initWin = function(t) {
                    var e = t.document;
                    e.styleSheets.length < 31
                      ? e
                          .createStyleSheet()
                          .addRule(".rvml", "behavior:url(#default#VML)")
                      : e.styleSheets[0].addRule(
                          ".rvml",
                          "behavior:url(#default#VML)"
                        );
                    try {
                      e.namespaces.rvml ||
                        e.namespaces.add(
                          "rvml",
                          "urn:schemas-microsoft-com:vml"
                        ),
                        (Z = function(t) {
                          return e.createElement(
                            "<rvml:" + t + ' class="rvml">'
                          );
                        });
                    } catch (t) {
                      Z = function(t) {
                        return e.createElement(
                          "<" +
                            t +
                            ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
                        );
                      };
                    }
                  }),
                  F._engine.initWin(F._g.win),
                  (F._engine.create = function() {
                    var t = F._getContainer.apply(0, arguments),
                      e = t.container,
                      r = t.height,
                      i = t.width,
                      n = t.x,
                      a = t.y;
                    if (!e) throw new Error("VML container not found.");
                    var o = new F._Paper(),
                      s = (o.canvas = F._g.doc.createElement("div")),
                      l = s.style,
                      n = n || 0,
                      a = a || 0,
                      i = i || 512,
                      r = r || 342;
                    return (
                      (o.width = i) == +i && (i += "px"),
                      (o.height = r) == +r && (r += "px"),
                      (o.coordsize = 216e5 + G + 216e5),
                      (o.coordorigin = "0 0"),
                      (o.span = F._g.doc.createElement("span")),
                      (o.span.style.cssText =
                        "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                      s.appendChild(o.span),
                      (l.cssText = F.format(
                        "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                        i,
                        r
                      )),
                      1 == e
                        ? (F._g.doc.body.appendChild(s),
                          (l.left = n + "px"),
                          (l.top = a + "px"),
                          (l.position = "absolute"))
                        : e.firstChild
                        ? e.insertBefore(s, e.firstChild)
                        : e.appendChild(s),
                      (o.renderfix = function() {}),
                      o
                    );
                  }),
                  (F.prototype.clear = function() {
                    F.eve("raphael.clear", this),
                      (this.canvas.innerHTML = ""),
                      (this.span = F._g.doc.createElement("span")),
                      (this.span.style.cssText =
                        "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"),
                      this.canvas.appendChild(this.span),
                      (this.bottom = this.top = null);
                  }),
                  (F.prototype.remove = function() {
                    for (var t in (F.eve("raphael.remove", this),
                    this.canvas.parentNode.removeChild(this.canvas),
                    this))
                      this[t] =
                        "function" == typeof this[t]
                          ? F._removedFactory(t)
                          : null;
                    return !0;
                  });
                var e = F.st;
                for (var r in t)
                  t[E](r) &&
                    !e[E](r) &&
                    (e[r] = (function(r) {
                      return function() {
                        var e = arguments;
                        return this.forEach(function(t) {
                          t[r].apply(t, e);
                        });
                      };
                    })(r));
              }
            }.apply(e, i);
          void 0 === n || (t.exports = n);
        }
      ]),
      (r.c = n),
      (r.p = ""),
      r(0)
    );

    function r(t) {
      if (n[t]) return n[t].exports;
      var e = (n[t] = {
        exports: {},
        id: t,
        loaded: !1
      });
      return i[t].call(e.exports, e, e.exports, r), (e.loaded = !0), e.exports;
    }
    var i, n;
  });

var VL = {
  first: !0,
  paper: null,
  sourceArr: [],
  imgAll: [],
  urldbAll: [],
  logo2: null,
  logo3: null,
  init: function() {
    INTRO.init();
  },
  evHandlers: function() {
    console.log("vA AL PRINCIPIO");
    setTimeout(() => {
      $("#logo ").show();
    //   $("#logo h1").textEffect();
    }, 1000);
  },

  resize: function() {
    (CONFIG.currentW = $(window).width()),
      (CONFIG.currentH = $(window).height());
  }
};
$(function() {
  VL.resize(),
    VL.init(),
    VL.evHandlers(),
    $(window).resize(function() {
      VL.resize();
    });
});
var response = "",
  radiusintro = 140,
  rot = 0;

// Raphael.fn.msharesWheel = function (t, e, r) {

// };