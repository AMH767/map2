var run;
(() => {
    var e, t, n, a = {
            1655: (e, t, n) => {
                var a = {
                    "./af": 2786,
                    "./af.js": 2786,
                    "./ar": 867,
                    "./ar-dz": 4130,
                    "./ar-dz.js": 4130,
                    "./ar-kw": 6135,
                    "./ar-kw.js": 6135,
                    "./ar-ly": 6440,
                    "./ar-ly.js": 6440,
                    "./ar-ma": 7702,
                    "./ar-ma.js": 7702,
                    "./ar-sa": 6040,
                    "./ar-sa.js": 6040,
                    "./ar-tn": 7100,
                    "./ar-tn.js": 7100,
                    "./ar.js": 867,
                    "./az": 1083,
                    "./az.js": 1083,
                    "./be": 9808,
                    "./be.js": 9808,
                    "./bg": 8338,
                    "./bg.js": 8338,
                    "./bm": 7438,
                    "./bm.js": 7438,
                    "./bn": 8905,
                    "./bn-bd": 6225,
                    "./bn-bd.js": 6225,
                    "./bn.js": 8905,
                    "./bo": 1560,
                    "./bo.js": 1560,
                    "./br": 1278,
                    "./br.js": 1278,
                    "./bs": 622,
                    "./bs.js": 622,
                    "./ca": 2468,
                    "./ca.js": 2468,
                    "./cs": 5822,
                    "./cs.js": 5822,
                    "./cv": 877,
                    "./cv.js": 877,
                    "./cy": 7373,
                    "./cy.js": 7373,
                    "./da": 4780,
                    "./da.js": 4780,
                    "./de": 9740,
                    "./de-at": 217,
                    "./de-at.js": 217,
                    "./de-ch": 894,
                    "./de-ch.js": 894,
                    "./de.js": 9740,
                    "./dv": 5300,
                    "./dv.js": 5300,
                    "./el": 837,
                    "./el.js": 837,
                    "./en-au": 8348,
                    "./en-au.js": 8348,
                    "./en-ca": 7925,
                    "./en-ca.js": 7925,
                    "./en-gb": 2243,
                    "./en-gb.js": 2243,
                    "./en-ie": 6436,
                    "./en-ie.js": 6436,
                    "./en-il": 7207,
                    "./en-il.js": 7207,
                    "./en-in": 4175,
                    "./en-in.js": 4175,
                    "./en-nz": 6319,
                    "./en-nz.js": 6319,
                    "./en-sg": 1662,
                    "./en-sg.js": 1662,
                    "./eo": 2915,
                    "./eo.js": 2915,
                    "./es": 5655,
                    "./es-do": 5251,
                    "./es-do.js": 5251,
                    "./es-mx": 6112,
                    "./es-mx.js": 6112,
                    "./es-us": 1146,
                    "./es-us.js": 1146,
                    "./es.js": 5655,
                    "./et": 5603,
                    "./et.js": 5603,
                    "./eu": 7763,
                    "./eu.js": 7763,
                    "./fa": 6959,
                    "./fa.js": 6959,
                    "./fi": 1897,
                    "./fi.js": 1897,
                    "./fil": 2549,
                    "./fil.js": 2549,
                    "./fo": 4694,
                    "./fo.js": 4694,
                    "./fr": 4470,
                    "./fr-ca": 3049,
                    "./fr-ca.js": 3049,
                    "./fr-ch": 2330,
                    "./fr-ch.js": 2330,
                    "./fr.js": 4470,
                    "./fy": 5044,
                    "./fy.js": 5044,
                    "./ga": 9295,
                    "./ga.js": 9295,
                    "./gd": 2101,
                    "./gd.js": 2101,
                    "./gl": 8794,
                    "./gl.js": 8794,
                    "./gom-deva": 7884,
                    "./gom-deva.js": 7884,
                    "./gom-latn": 3168,
                    "./gom-latn.js": 3168,
                    "./gu": 5349,
                    "./gu.js": 5349,
                    "./he": 4206,
                    "./he.js": 4206,
                    "./hi": 94,
                    "./hi.js": 94,
                    "./hr": 316,
                    "./hr.js": 316,
                    "./hu": 2138,
                    "./hu.js": 2138,
                    "./hy-am": 1423,
                    "./hy-am.js": 1423,
                    "./id": 9218,
                    "./id.js": 9218,
                    "./is": 135,
                    "./is.js": 135,
                    "./it": 626,
                    "./it-ch": 150,
                    "./it-ch.js": 150,
                    "./it.js": 626,
                    "./ja": 9183,
                    "./ja.js": 9183,
                    "./jv": 8311,
                    "./jv.js": 8311,
                    "./ka": 2105,
                    "./ka.js": 2105,
                    "./kk": 7772,
                    "./kk.js": 7772,
                    "./km": 8758,
                    "./km.js": 8758,
                    "./kn": 9282,
                    "./kn.js": 9282,
                    "./ko": 3730,
                    "./ko.js": 3730,
                    "./ku": 1408,
                    "./ku.js": 1408,
                    "./ky": 3291,
                    "./ky.js": 3291,
                    "./lb": 6841,
                    "./lb.js": 6841,
                    "./lo": 5466,
                    "./lo.js": 5466,
                    "./lt": 7010,
                    "./lt.js": 7010,
                    "./lv": 7595,
                    "./lv.js": 7595,
                    "./me": 9861,
                    "./me.js": 9861,
                    "./mi": 5493,
                    "./mi.js": 5493,
                    "./mk": 5966,
                    "./mk.js": 5966,
                    "./ml": 7341,
                    "./ml.js": 7341,
                    "./mn": 5115,
                    "./mn.js": 5115,
                    "./mr": 370,
                    "./mr.js": 370,
                    "./ms": 9847,
                    "./ms-my": 1237,
                    "./ms-my.js": 1237,
                    "./ms.js": 9847,
                    "./mt": 1610,
                    "./mt.js": 1610,
                    "./my": 6165,
                    "./my.js": 6165,
                    "./nb": 4924,
                    "./nb.js": 4924,
                    "./ne": 6744,
                    "./ne.js": 6744,
                    "./nl": 3901,
                    "./nl-be": 9814,
                    "./nl-be.js": 9814,
                    "./nl.js": 3901,
                    "./nn": 3877,
                    "./nn.js": 3877,
                    "./oc-lnc": 2135,
                    "./oc-lnc.js": 2135,
                    "./pa-in": 5858,
                    "./pa-in.js": 5858,
                    "./pl": 4495,
                    "./pl.js": 4495,
                    "./pt": 9520,
                    "./pt-br": 7971,
                    "./pt-br.js": 7971,
                    "./pt.js": 9520,
                    "./ro": 6459,
                    "./ro.js": 6459,
                    "./ru": 1793,
                    "./ru.js": 1793,
                    "./sd": 950,
                    "./sd.js": 950,
                    "./se": 490,
                    "./se.js": 490,
                    "./si": 124,
                    "./si.js": 124,
                    "./sk": 4249,
                    "./sk.js": 4249,
                    "./sl": 4985,
                    "./sl.js": 4985,
                    "./sq": 1104,
                    "./sq.js": 1104,
                    "./sr": 9131,
                    "./sr-cyrl": 9915,
                    "./sr-cyrl.js": 9915,
                    "./sr.js": 9131,
                    "./ss": 5893,
                    "./ss.js": 5893,
                    "./sv": 8760,
                    "./sv.js": 8760,
                    "./sw": 1172,
                    "./sw.js": 1172,
                    "./ta": 7333,
                    "./ta.js": 7333,
                    "./te": 3110,
                    "./te.js": 3110,
                    "./tet": 2095,
                    "./tet.js": 2095,
                    "./tg": 7321,
                    "./tg.js": 7321,
                    "./th": 9041,
                    "./th.js": 9041,
                    "./tk": 9005,
                    "./tk.js": 9005,
                    "./tl-ph": 5768,
                    "./tl-ph.js": 5768,
                    "./tlh": 9444,
                    "./tlh.js": 9444,
                    "./tr": 2397,
                    "./tr.js": 2397,
                    "./tzl": 8254,
                    "./tzl.js": 8254,
                    "./tzm": 1106,
                    "./tzm-latn": 699,
                    "./tzm-latn.js": 699,
                    "./tzm.js": 1106,
                    "./ug-cn": 9288,
                    "./ug-cn.js": 9288,
                    "./uk": 7691,
                    "./uk.js": 7691,
                    "./ur": 3795,
                    "./ur.js": 3795,
                    "./uz": 6791,
                    "./uz-latn": 588,
                    "./uz-latn.js": 588,
                    "./uz.js": 6791,
                    "./vi": 5666,
                    "./vi.js": 5666,
                    "./x-pseudo": 4378,
                    "./x-pseudo.js": 4378,
                    "./yo": 5805,
                    "./yo.js": 5805,
                    "./zh-cn": 3839,
                    "./zh-cn.js": 3839,
                    "./zh-hk": 5726,
                    "./zh-hk.js": 5726,
                    "./zh-mo": 9807,
                    "./zh-mo.js": 9807,
                    "./zh-tw": 4152,
                    "./zh-tw.js": 4152
                };

                function i(e) {
                    var t = s(e);
                    return n(t)
                }

                function s(e) {
                    if (!n.o(a, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return a[e]
                }
                i.keys = function() {
                    return Object.keys(a)
                }, i.resolve = s, e.exports = i, i.id = 1655
            },
            8375: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    default: () => bu
                });
                var a = {};
                n.r(a), n.d(a, {
                    HIGHLIGHT_URL: () => Xe,
                    PKK_API_FEATURES: () => Je,
                    PKK_API_URL: () => Ke,
                    PKK_CC_INFO_URL: () => Qe,
                    PKK_SEARCH_URL: () => et,
                    R_TILE_URL: () => We,
                    TILEMAP_URL: () => Ye,
                    V_TILE_URL: () => ze,
                    ZONES_HIGHLIGHT_URL: () => qe
                });
                var i = n(7582),
                    s = n(7294),
                    r = n(5998),
                    o = n(9655),
                    l = n(6609);
                const c = new Promise(((e, t) => {
                    l.ZP.init({
                        missingKeyHandler: (e, t, n) => {
                            console.log(`Translation: key is missing: ${n}`)
                        },
                        missingKeyNoValueFallbackToKey: !0,
                        debug: !1,
                        saveMissing: !0,
                        interpolation: {
                            format: function(e, t, n) {
                                return "number" == typeof e && "number" === t ? e.toLocaleString(n) : e
                            }
                        }
                    }, (n => {
                        n ? t(n) : e(1)
                    }))
                }));
                var d = n(4890);
                const m = (0, n(797).ZP)(),
                    u = [m];
                const p = d.qC,
                    h = {
                        instance: null
                    },
                    g = e => {
                        const t = (0, d.UY)(e);
                        return h.instance = (0, d.jB)(t, void 0, p((0, d.md)(...u))), m.run(S), {
                            store: h.instance
                        }
                    },
                    v = () => h.instance;
                var f = n(6700),
                    y = n(4857);
                const b = e => e && "object" == typeof e && !Array.isArray(e),
                    E = (e, t) => {
                        let n;
                        return b(e) && b(t) ? (n = Object.assign({}, e), Object.keys(t).forEach((a => {
                            b(t[a]) ? a in e ? n[a] = E(e[a], t[a]) : Object.assign(n, {
                                [a]: t[a]
                            }) : Object.assign(n, {
                                [a]: t[a]
                            })
                        }))) : n = b(t) ? Object.assign({}, t) : t, n
                    };

                function w(e) {
                    return void 0 !== e.generatedWatcher
                }
                const S = function*() {
                        for (;;) {
                            const e = yield*(0, f.qn)("RUN_SERVICE"), {
                                payload: t
                            } = e;
                            t.rootTask = yield*(0, f.rM)((function*() {
                                yield(0, f.$6)(t.generatedWatchers.map((e => e())))
                            }))
                        }
                    },
                    j = (e, t) => {
                        const n = {};
                        for (const a of Object.getOwnPropertyNames(e)) {
                            const i = e[a];
                            if (w(i)) n[a] = e => {
                                if (!t.isRunning()) {
                                    const e = t.constructor.name;
                                    throw new Error(`${e}: Attention, attempt to call the service Saga before it starts!`)
                                }
                                i.generatedAction.call(v(), e)
                            };
                            else if ("onStop" === a && "function" == typeof i) {
                                const t = Object.getOwnPropertyDescriptor(e, "onStop");
                                t && (t.value.generatedWatcher = function*() {
                                    yield(0, y.ib)(`@@${e.name}_onStop`, t.value)
                                }, t.value.generatedAction = function() {
                                    var t;
                                    null === (t = v()) || void 0 === t || t.dispatch({
                                        type: `@@${e.name}_onStop`
                                    })
                                })
                            }
                        }
                        return n
                    },
                    O = (e, t = "") => ({
                        type: t,
                        payload: e
                    });
                class Service {
                    constructor() {
                        this.rootTask = null
                    }
                    getReducer() {
                        return {}
                    }
                    isRunning() {
                        return this.rootTask && this.rootTask.isRunning()
                    }
                    start() {
                        this.isRunning() && this.stop(), (e => {
                            var t;
                            null === (t = v()) || void 0 === t || t.dispatch({
                                type: "RUN_SERVICE",
                                payload: e
                            })
                        })(this)
                    }
                    stop() {
                        var e;
                        if (this.isRunning()) {
                            const t = Object.getOwnPropertyDescriptor(this.constructor, "onStop");
                            t && w(t.value) && t.value.generatedAction(null), null === (e = this.rootTask) || void 0 === e || e.cancel()
                        }
                    }
                    get generatedWatchers() {
                        const e = [];
                        return Object.getOwnPropertyNames(this.constructor).forEach((t => {
                            const n = this.constructor[t];
                            w(n) ? e.push(n.generatedWatcher) : "onStart" === t && e.unshift(n)
                        })), e
                    }
                }
                const C = e => {
                    const t = new e;
                    return {
                        actions: j(e, t),
                        instance: t
                    }
                };

                function N(e, t, n) {
                    const a = n.value.actionName || `@@${e.name}_${t}`;
                    n.value.generatedWatcher = function*() {
                        yield y.ib(a, n.value)
                    }, n.value.generatedAction = function(e) {
                        this.dispatch({
                            type: a,
                            payload: e
                        })
                    }
                }

                function L(e, t, n) {
                    const a = n.value.actionName || `@@${e.name}_${t}`;
                    n.value.generatedWatcher = function*() {
                        yield y.Fm(a, n.value)
                    }, n.value.generatedAction = function(e) {
                        this.dispatch({
                            type: a,
                            payload: e
                        })
                    }
                }

                function M(e, t, n) {
                    const a = n.value.actionName || `@@${e.name}_${t}`;
                    n.value.generatedWatcher = function*() {
                        yield y.A7(a, n.value)
                    }, n.value.generatedAction = function(e) {
                        this.dispatch({
                            type: a,
                            payload: e
                        })
                    }
                }
                var A;
                ! function(e) {
                    e.PENDING = "PENDING", e.SUCCESS = "SUCCESS", e.FAIL = "FAIL", e.UNKNOWN = "UNKNOWN"
                }(A || (A = {}));
                const _ = (e, t) => e.operations[t],
                    x = (e, t) => e.operations && e.operations[t] ? e.operations[t] : $(t),
                    I = (e, t) => x(e, t).data,
                    T = (e, t) => x(e, t).meta,
                    k = (e, t) => x(e, t).status;
                var Z = n(3513),
                    R = n(1757);
                const P = {
                        INFO_WINDOW: $("INFO_WINDOW", null, null),
                        USER: $("USER", {
                            id: 1234,
                            name: "UserName"
                        }),
                        FAVOURITE: $("FAVORITE", {
                            sort: {
                                asc: !0,
                                name: !0
                            },
                            items: []
                        }),
                        SEARCH: $("SEARCH", []),
                        COMPARISON: $("COMPARISON", {})
                    },
                    F = {
                        init: (0, R.createAction)("operations/INIT_OPERATION")(),
                        setData: (0, R.createAction)("operations/SET_DATA", ((e, t) => ({
                            id: e,
                            data: t
                        })))(),
                        setMeta: (0, R.createAction)("operations/SET_META")(),
                        setStatus: (0, R.createAction)("operations/SET_STATUS", ((e, t) => ({
                            id: e,
                            status: t
                        })))(),
                        success: (0, R.createAction)("operations/SUCCESS", ((e, t) => ({
                            id: e,
                            data: t
                        })))(),
                        fail: (0, R.createAction)("operations/FAIL", ((e, t, n) => ({
                            id: e,
                            error: t,
                            message: n
                        })))(),
                        clear: (0, R.createAction)("operations/CLEAR")()
                    },
                    H = (0, R.createReducer)(P).handleAction(F.init, ((e, t) => (0, Z.Uy)(e, (e => {
                        e[t.payload] = $(t.payload)
                    })))).handleAction(F.setData, ((e, t) => (0, Z.Uy)(e, (e => {
                        e[t.payload.id].data = t.payload.data
                    })))).handleAction(F.setMeta, ((e, t) => (0, Z.Uy)(e, (e => {
                        e[t.payload.id].meta = t.payload.meta
                    })))).handleAction(F.setStatus, ((e, t) => (0, Z.Uy)(e, (e => {
                        e[t.payload.id].status = t.payload.status
                    })))).handleAction(F.success, ((e, t) => (0, Z.Uy)(e, (e => {
                        e[t.payload.id].status = A.SUCCESS, e[t.payload.id].error = null, e[t.payload.id].error_message = null, void 0 !== t.payload.data && (e[t.payload.id].data = t.payload.data)
                    })))).handleAction(F.fail, ((e, t) => (0, Z.Uy)(e, (e => {
                        e[t.payload.id].status = A.FAIL, e[t.payload.id].error = t.payload.error, e[t.payload.id].error_message = t.payload.message
                    })))).handleAction(F.clear, ((e, t) => (0, Z.Uy)(e, (e => {
                        e[t.payload] = void 0 !== P[t.payload] ? P[t.payload] : $(t.payload)
                    }))));

                function $(e, t, n) {
                    return {
                        id: e,
                        data: t,
                        meta: n,
                        status: A.UNKNOWN,
                        error: null,
                        error_message: null
                    }
                }
                class OperationsService extends Service {
                    getReducer() {
                        return {
                            operations: H
                        }
                    }
                    static * safelyCreate(e) {
                        (yield*(0, f.Ys)(_, e)) || (yield*(0, f.gz)(F.init(e)))
                    }
                    static * setData(e, t) {
                        (yield*(0, f.Ys)(_, e)) && (yield*(0, f.gz)(F.setData(e, t)))
                    }
                    static * updateData(e, t) {
                        const n = yield*(0, f.Ys)(_, e);
                        if (n) {
                            const a = E(n.data, t);
                            yield*(0, f.gz)(F.setData(e, a))
                        }
                    }
                    static * setMeta(e, t) {
                        (yield*(0, f.Ys)(_, e)) && (yield*(0, f.gz)(F.setMeta({
                            id: e,
                            meta: t
                        })))
                    }
                    static * updateMeta(e, t) {
                        const n = yield*(0, f.Ys)(_, e);
                        if (n) {
                            const a = E(n.meta, t);
                            yield*(0, f.gz)(F.setMeta({
                                id: e,
                                meta: a
                            }))
                        }
                    }
                    static * setStatus(e, t) {
                        (yield*(0, f.Ys)(_, e)) && (yield*(0, f.gz)(F.setStatus(e, t)))
                    }
                    static * resetStatus(e) {
                        (yield*(0, f.Ys)(_, e)) && (yield*(0, f.gz)(F.setStatus(e, A.UNKNOWN)))
                    }
                    static * clear(e) {
                        (yield*(0, f.Ys)(_, e.payload)) && (yield*(0, f.gz)(F.clear(e.payload)))
                    }
                }(0, i.gn)([N, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], OperationsService, "clear", null);
                const {
                    instance: V,
                    actions: U
                } = C(OperationsService);

                function B(e, t = !1, n) {
                    return function(a, i, s) {
                        const r = s.value;
                        return s.value = function*(...a) {
                            let i;
                            yield*(0, f.RE)(OperationsService.safelyCreate, e), yield*(0, f.gz)(F.setStatus(e, A.PENDING));
                            try {
                                i = yield*(0, f.RE)(r, ...a), yield*(0, f.gz)(F.success(e, i))
                            } catch (a) {
                                if ("function" == typeof n ? yield*(0, f.RE)(n, e, a): yield*(0, f.gz)(F.fail(e, a, "string" == typeof n ? n : void 0)), t) throw a
                            }
                            return i
                        }, s
                    }
                }
                var G = n(5798);
                const D = {
                        setInitConfig: (0, R.createAction)("app/SET_INIT_CONFIG")(),
                        setConfig: (0, R.createAction)("app/SET_CONFIG")(),
                        setInitParam: (0, R.createAction)("app/SET_INIT_PARAM")()
                    },
                    W = (0, R.createReducer)({
                        initConfig: {},
                        config: {},
                        initParams: {
                            object: !1
                        }
                    }).handleAction(D.setInitConfig, ((e, t) => Object.assign(Object.assign({}, e), {
                        initConfig: t.payload
                    }))).handleAction(D.setConfig, ((e, t) => Object.assign(Object.assign({}, e), {
                        config: t.payload
                    }))).handleAction(D.setInitParam, ((e, t) => Object.assign(Object.assign({}, e), {
                        initParams: Object.assign(Object.assign({}, e.initParams), t.payload)
                    })));
                var z = n(2861);
                const Y = new class ApiRequest {
                        constructor() {
                            this.version = "2.8", this.token = "", this.projectId = "", this.axiosInstance = z.Z.create({})
                        }
                        setBaseUrl(e) {
                            this.axiosInstance.defaults.baseURL = e
                        }
                        setProjectId(e) {
                            this.projectId = e
                        }
                        setToken(e) {
                            this.token = e
                        }
                        getApiUrl() {
                            return `${this.axiosInstance.defaults.baseURL}/api/${this.version}/${this.projectId}/`
                        }
                        get(e, t = {}, n = {}) {
                            return (0, i.mG)(this, void 0, void 0, (function*() {
                                const a = {};
                                return this.token && (a.token = this.token), this.axiosInstance.get(e, Object.assign({
                                    params: Object.assign(Object.assign({}, t), a)
                                }, n))
                            }))
                        }
                        post(e, t = {}, n = {}) {
                            return (0, i.mG)(this, void 0, void 0, (function*() {
                                const a = this.token ? "?token=" + this.token : "";
                                return this.axiosInstance.post(e + a, t, n)
                            }))
                        }
                        delete(e, t = {}) {
                            return (0, i.mG)(this, void 0, void 0, (function*() {
                                const n = {};
                                return this.token && (n.token = this.token), this.axiosInstance.delete(e, Object.assign({
                                    params: n
                                }, t))
                            }))
                        }
                        patch(e, t = {}, n = {}) {
                            return (0, i.mG)(this, void 0, void 0, (function*() {
                                return this.axiosInstance.patch(e, t, n)
                            }))
                        }
                        put(e, t = {}, n = {}) {
                            return (0, i.mG)(this, void 0, void 0, (function*() {
                                const a = {};
                                this.token && (a.token = this.token);
                                const i = a.token ? "?token=" + this.token : "";
                                return this.axiosInstance.put(e + i, Object.assign(Object.assign({}, t), a), n)
                            }))
                        }
                        apiGet(e, t = {}, n = {}) {
                            return (0, i.mG)(this, void 0, void 0, (function*() {
                                return t = Object.assign(Object.assign({}, t), {
                                    lng: l.ZP.language
                                }), this.get(`/api/${this.version}/${this.projectId}${e}`, t, n)
                            }))
                        }
                        apiPost(e, t = {}, n = {}) {
                            return (0, i.mG)(this, void 0, void 0, (function*() {
                                return this.post(`api/${this.version}/${this.projectId}${e}`, t, n)
                            }))
                        }
                        apiDelete(e, t = {}) {
                            return (0, i.mG)(this, void 0, void 0, (function*() {
                                return this.delete(`api/${this.version}/${this.projectId}${e}`, t)
                            }))
                        }
                        apiPut(e, t = {}, n = {}) {
                            return (0, i.mG)(this, void 0, void 0, (function*() {
                                return this.put(`api/${this.version}/${this.projectId}${e}`, t, n)
                            }))
                        }
                    },
                    K = e => Y.get(`/public_map/${Y.projectId}/${e}/init.json`),
                    J = e => Y.get(`/public_map/${Y.projectId}/${e}/config.json`),
                    X = e => Y.apiGet(`/${e}/`),
                    q = (e, t, n) => Y.apiGet(`/${e}/layers/${t}/`, n),
                    Q = (e, t) => Y.apiGet(`/${e}/layers/`, t),
                    ee = (e, t, n, a) => Y.apiGet(`/${e}/layers/${t}/structure/`, n, {
                        signal: a
                    }),
                    te = (e, t) => Y.apiGet(`/${e}/layers/${t}/legend/`),
                    ne = (e, t, n, a) => Y.apiGet(`/${e}/layers/${t}/objects/`, n, {
                        signal: a
                    }),
                    ae = (e, t, n) => Y.apiGet(`/${e}/layers/${t}/count/`, n),
                    ie = (e, t, n, a, i) => Y.apiGet(`/${e}/layers/${t}/objects/${n}/`, a, {
                        signal: i
                    }),
                    se = (e, t, n, a) => {
                        let i = `//gisp.gov.ru/gisip/admin/api2/${e}/${t}/`;
                        return Y.get(i, n, {
                            signal: a
                        })
                    },
                    re = (e, t, n) => {
                        let a = `//gisp.gov.ru/gisip/admin/api2/companies/${e}/products/`;
                        return Y.get(a, t, {
                            signal: n
                        })
                    },
                    oe = {
                        setZoom: (0, R.createAction)("map/SET_ZOOM")(),
                        setPosition: (0, R.createAction)("map/SET_POSITION")(),
                        setBaseMap: (0, R.createAction)("map/SET_BASE_MAP")(),
                        setCadastre: (0, R.createAction)("map/SET_CADASTRE")(),
                        setMaps: (0, R.createAction)("map/SET_MAPS")(),
                        setBalloon: (0, R.createAction)("map/SET_BALLOON")(),
                        setHighlightGeom: (0, R.createAction)("map/SET_HIGHLIGHT_GEOM")(),
                        setFitExtent: (0, R.createAction)("map/FIT_EXTENT")(),
                        setGeography: (0, R.createAction)("map/SET_GEOGRAPHY")()
                    },
                    le = (0, R.createReducer)({
                        center: [78.133713, 60.397371],
                        zoom: 4,
                        baseMap: 0,
                        cadastre: !1,
                        maps: [],
                        balloon: null,
                        highlightGeom: null,
                        fitExtent: {
                            extent: null,
                            options: null
                        },
                        geography: !1
                    }).handleAction(oe.setZoom, ((e, t) => Object.assign(Object.assign({}, e), {
                        zoom: t.payload
                    }))).handleAction(oe.setPosition, ((e, t) => Object.assign(Object.assign({}, e), t.payload))).handleAction(oe.setBaseMap, ((e, t) => Object.assign(Object.assign({}, e), {
                        baseMap: t.payload
                    }))).handleAction(oe.setCadastre, ((e, t) => Object.assign(Object.assign({}, e), {
                        cadastre: t.payload
                    }))).handleAction(oe.setMaps, ((e, t) => Object.assign(Object.assign({}, e), {
                        maps: t.payload
                    }))).handleAction(oe.setBalloon, ((e, t) => Object.assign(Object.assign({}, e), {
                        balloon: t.payload
                    }))).handleAction(oe.setHighlightGeom, ((e, t) => Object.assign(Object.assign({}, e), {
                        highlightGeom: t.payload
                    }))).handleAction(oe.setFitExtent, ((e, t) => Object.assign(Object.assign({}, e), {
                        fitExtent: t.payload
                    }))).handleAction(oe.setGeography, ((e, t) => Object.assign(Object.assign({}, e), {
                        geography: t.payload
                    })));
                var ce = n(4420),
                    de = n(9090),
                    me = n(3223),
                    ue = n(1090),
                    pe = n(2479),
                    he = n(8734),
                    ge = n(6333),
                    ve = n(933),
                    fe = n(2657),
                    ye = n(4353),
                    be = n(686),
                    Ee = n(9466),
                    we = n(2083);
                class MapEvents {
                    constructor(e) {
                        this.clickHandlers = {}, this.moveHandlers = {}, this.map = e, this.onMapEvents = this.onMapEvents.bind(this), this.onMoveStart = this.onMoveStart.bind(this), this.offMapEvents = this.offMapEvents.bind(this), this.pointerMove = this.pointerMove.bind(this), this.click = this.click.bind(this), this.onMapEvents()
                    }
                    onClick(e, t) {
                        this.clickHandlers[e] = t
                    }
                    removeClick(e) {
                        const t = this.clickHandlers,
                            n = e,
                            a = (t[n], (0, i._T)(t, ["symbol" == typeof n ? n : n + ""]));
                        this.clickHandlers = a
                    }
                    onPointerMove(e, t) {
                        this.moveHandlers[e] = t
                    }
                    removePointerMove(e) {
                        const t = this.moveHandlers,
                            n = e,
                            a = (t[n], (0, i._T)(t, ["symbol" == typeof n ? n : n + ""]));
                        this.moveHandlers = a
                    }
                    onMapEvents() {
                        this.map.on("movestart", this.onMoveStart), this.map.on("pointermove", this.pointerMove), this.map.on("click", this.click)
                    }
                    onMoveStart() {
                        this.offMapEvents(), this.map.once("moveend", (() => {
                            this.onMapEvents()
                        }))
                    }
                    offMapEvents() {
                        this.map.un("movestart", this.onMoveStart), this.map.un("pointermove", this.pointerMove), this.map.un("click", this.click)
                    }
                    pointerMove(e) {
                        for (const t in this.moveHandlers)
                            if (t in this.moveHandlers) {
                                const n = this.moveHandlers[t](e);
                                if ("boolean" == typeof n && !n) return
                            }
                    }
                    click(e) {
                        for (const t in this.clickHandlers)
                            if (t in this.clickHandlers) {
                                const n = this.clickHandlers[t](e);
                                if ("boolean" == typeof n && !n) return
                            }
                    }
                }
                var Se = n(3522),
                    je = n(8714),
                    Oe = n(8373),
                    Ce = n(5010),
                    Ne = n(7580),
                    Le = n(7539),
                    Me = n(1345),
                    Ae = n(8958),
                    _e = n(283),
                    xe = n(6259);
                const Ie = "rgba(27, 111, 198, 1)",
                    Te = e => {
                        const t = e.replace("1)", "0.2)");
                        return [new Le.ZP({
                            fill: new Me.Z({
                                color: t
                            }),
                            stroke: new Ae.Z({
                                color: e,
                                width: 4
                            })
                        }), new Le.ZP({
                            image: new _e.Z({
                                radius: 6,
                                fill: new Me.Z({
                                    color: e
                                }),
                                stroke: new Ae.Z({
                                    width: 2,
                                    color: "#ffffff"
                                })
                            }),
                            geometry: function(e) {
                                const t = e.getGeometry(),
                                    n = t instanceof we.Z ? t.getCoordinates() : t.getCoordinates()[0];
                                return new xe.Z(n)
                            }
                        })]
                    },
                    ke = e => [{
                        "stroke-color": "#ffffff",
                        "stroke-width": 6
                    }, {
                        "fill-color": e.replace("1)", "0.2)"),
                        "fill-opacity": .2,
                        "stroke-color": e,
                        "stroke-line-dash": [5, 5],
                        "stroke-width": 2,
                        "circle-radius": 6,
                        "circle-fill-color": e,
                        "circle-stroke-color": "rgba(255, 255, 255, 1)",
                        "circle-stroke-width": 2
                    }],
                    Ze = e => ({
                        "circle-radius": 6,
                        "circle-fill-color": e,
                        "circle-stroke-color": "rgba(255, 255, 255, 1)",
                        "circle-stroke-width": 2
                    });
                var Re;
                ! function(e) {
                    e[e.UCHASTOK = 1] = "UCHASTOK", e[e.KVARTAL = 2] = "KVARTAL", e[e.RAYON = 3] = "RAYON", e[e.OKRUG = 4] = "OKRUG", e[e.OKS = 5] = "OKS"
                }(Re || (Re = {}));
                Re.OKS, Re.UCHASTOK, Re.KVARTAL, Re.RAYON, Re.OKRUG;
                var Pe, Fe;
                ! function(e) {
                    e.POINT = "Point", e.LINE_STRING = "LineString", e.LINEAR_RING = "LinearRing", e.POLYGON = "Polygon", e.MULTI_POINT = "MultiPoint", e.MULTI_LINE_STRING = "MultiLineString", e.MULTI_POLYGON = "MultiPolygon", e.GEOMETRY_COLLECTION = "GeometryCollection", e.CIRCLE = "Circle"
                }(Pe || (Pe = {})),
                function(e) {
                    e.distance = "distance", e.area_meter = "area_meter", e.area_hectar = "area_hectar"
                }(Fe || (Fe = {}));
                class Measurements {
                    constructor(e, t, n) {
                        this.draw = null, this.tooltips = {}, this.currentCoords = [0, 0], this.modifyInteractions = {}, this.drawingId = 0, this.color = Ie, this.map = e, this.layer = t, this.options = n;
                        const a = new ve.Z;
                        this.layer.setSource(a), this.layer.setStyle(Te(this.color)), this.options.color && (this.color = this.options.color), this.onDrawStart = this.onDrawStart.bind(this), this.onDrawEnd = this.onDrawEnd.bind(this), this.removeModifyPoint = this.removeModifyPoint.bind(this)
                    }
                    onMapPointer(e) {
                        this.currentCoords = e.coordinate
                    }
                    removeModifyPoint(e) {
                        this.map.forEachFeatureAtPixel(e.pixel, (e => {
                            const t = e.get("id");
                            t && this.modifyInteractions[t] && this.modifyInteractions[t].removePoint()
                        }))
                    }
                    stopDrawAndModify() {
                        if (this.map.un("pointermove", this.onMapPointer), this.map.un("click", this.removeModifyPoint), this.draw && (this.draw.abortDrawing(), this.map.removeInteraction(this.draw), this.draw = null, this.tooltips[this.drawingId] && this.map.removeOverlay(this.tooltips[this.drawingId])), Object.keys(this.modifyInteractions).length > 0)
                            for (const e in this.modifyInteractions) e in this.modifyInteractions && this.modifyInteractions[e].setActive(!1)
                    }
                    static getCloseButton() {
                        return `<span class="close-btn" title="${(0,l.t)("Закрыть")}"></span>`
                    }
                    getLineOutput(e) {
                        let t, n, a, i, s, r = "";
                        const o = e.getCoordinates();
                        t = 0;
                        const l = this.map.getView().getProjection();
                        for (n = 0, a = o.length - 1; n < a; ++n) i = (0, G.vs)(o[n], l, "EPSG:4326"), s = (0, G.vs)(o[n + 1], l, "EPSG:4326"), t += (0, Ne.Sp)(i, s);
                        return r = t > 100 ? `${Math.round(t/1e3*100)/100} ${"ru"!==this.options.lng?"km":"км"}` : `${Math.round(100*t)/100} ${"ru"!==this.options.lng?"m":"м"}`, r += Measurements.getCloseButton(), r
                    }
                    getPolygonOutput(e, t) {
                        let n = "";
                        const a = Math.abs((0, Ne.bg)(e, {
                            projection: "EPSG:3857"
                        }));
                        if (t === Fe.area_meter) {
                            const e = "ru" !== this.options.lng ? "km" : "км",
                                t = "ru" !== this.options.lng ? "m" : "м";
                            n = a > 1e4 ? `${Math.round(a/1e6*100)/100} ${e}²` : `${Math.round(100*a)/100} ${t}²`
                        } else n = a > 1e4 ? `${Math.round(a/1e4)} ${(0,l.t)("Га")}` : `${Math.round(a/1e4*100)/100} ${(0,l.t)("Га")}`;
                        return n += Measurements.getCloseButton(), n
                    }
                    getTooltipParams(e, t) {
                        let n, a = "";
                        switch (e.getType()) {
                            case Pe.LINE_STRING:
                                a = this.getLineOutput(e), n = e.getLastCoordinate();
                                break;
                            case Pe.POLYGON:
                                a = this.getPolygonOutput(e, t), n = e.getInteriorPoint().getCoordinates()
                        }
                        return [n, a]
                    }
                    closeMeasure(e) {
                        var t, n;
                        this.stopInteraction();
                        const a = e.getId();
                        this.map.removeOverlay(this.tooltips[a]);
                        const s = null === (t = this.layer.getSource()) || void 0 === t ? void 0 : t.getFeatures().find((e => e.get("id") === a));
                        s && (null === (n = this.layer.getSource()) || void 0 === n || n.removeFeature(s)), this.modifyInteractions[a].setActive(!1), this.map.removeInteraction(this.modifyInteractions[a]);
                        const r = this.modifyInteractions,
                            o = a,
                            l = (r[o], (0, i._T)(r, ["symbol" == typeof o ? o : o + ""]));
                        this.modifyInteractions = l
                    }
                    createTooltip(e, t, n) {
                        var a, i;
                        const s = document.createElement("div");
                        s.className = "measurement-tooltip", s.innerHTML = "Overlay";
                        const r = new me.Z({
                                id: e,
                                element: s,
                                offset: [0, -15],
                                positioning: "bottom-center"
                            }),
                            [o, l] = this.getTooltipParams(t, n);
                        null === (a = r.getElement()) || void 0 === a || (a.innerHTML = l), r.set("geom_type", t.getType()), this.tooltips[e] = r, null === (i = s.querySelector(".close-btn")) || void 0 === i || i.addEventListener("click", (() => {
                            this.closeMeasure(r)
                        })), o && r.setPosition(o), this.map.addOverlay(r)
                    }
                    setTooltip(e, t, n) {
                        var a, i;
                        if (!this.tooltips[e]) return;
                        const [s, r] = this.getTooltipParams(t, n);
                        null === (a = this.tooltips[e].getElement()) || void 0 === a || (a.innerHTML = r), this.tooltips[e].setPosition(s);
                        const o = this.tooltips[e].getElement();
                        null === (i = null == o ? void 0 : o.querySelector(".close-btn")) || void 0 === i || i.addEventListener("click", (() => {
                            this.closeMeasure(this.tooltips[e])
                        }))
                    }
                    onDrawStart(e, t) {
                        t.feature.set("id", t.feature.ol_uid), t.feature.set("measureType", e), this.drawingId = t.feature.ol_uid, this.createTooltip(t.feature.get("id"), t.feature.getGeometry(), e), t.feature.getGeometry().on("change", (n => {
                            this.setTooltip(t.feature.get("id"), n.target, e)
                        }))
                    }
                    createModify(e) {
                        const t = new je.Z;
                        t.push(e);
                        const n = new Oe.Z({
                            features: t,
                            style: Ze(this.color || Ie)
                        });
                        n.set("id", e.get("id")), this.map.on("click", this.removeModifyPoint), this.map.addInteraction(n), this.modifyInteractions[e.get("id")] = n
                    }
                    onDrawEnd(e) {
                        var t;
                        null === (t = this.draw) || void 0 === t || t.abortDrawing(), this.map.removeInteraction(this.draw), this.draw = null, this.createModify(e.feature);
                        for (const e in this.modifyInteractions) e in this.modifyInteractions && this.modifyInteractions[e].setActive(!0);
                        this.options.onDrawEnd && this.options.onDrawEnd()
                    }
                    createDraw(e) {
                        let t = Pe.LINE_STRING;
                        switch (e) {
                            case Fe.distance:
                                t = Pe.LINE_STRING;
                                break;
                            case Fe.area_meter:
                            case Fe.area_hectar:
                                t = Pe.POLYGON;
                                break;
                            default:
                                t = Pe.LINE_STRING
                        }
                        this.draw = new Ce.ZP({
                            source: this.layer.getSource(),
                            style: ke(this.color),
                            type: t
                        }), this.draw.on("drawstart", this.onDrawStart.bind(this, e)), this.draw.on("drawend", this.onDrawEnd), this.map.addInteraction(this.draw)
                    }
                    clear() {
                        var e;
                        null === (e = this.layer.getSource()) || void 0 === e || e.clear();
                        for (const e in this.tooltips) e in this.tooltips && this.map.removeOverlay(this.tooltips[e]);
                        for (const e in this.modifyInteractions) e in this.modifyInteractions && this.map.removeInteraction(this.modifyInteractions[e])
                    }
                    start(e) {
                        this.options.onStart && this.options.onStart(), this.stopDrawAndModify(), this.createDraw(e), this.map.on("pointermove", this.onMapPointer)
                    }
                    pause() {
                        this.stopDrawAndModify(), this.options.onDrawEnd && this.options.onDrawEnd()
                    }
                    stopInteraction() {
                        this.stopDrawAndModify(), this.clear(), this.options.onStop && this.options.onStop()
                    }
                    setColor(e) {
                        var t;
                        this.color = e, this.layer.setStyle(Te(this.color)), null === (t = this.draw) || void 0 === t || t.getOverlay().setStyle(ke(this.color));
                        for (const e in this.modifyInteractions) this.modifyInteractions[e] && this.modifyInteractions[e].getOverlay().setStyle(Ze(this.color))
                    }
                }
                class Widgets {
                    constructor(e, t, n) {
                        this.measure = null, this.widgetsBlocks = [], this.map = e, this.mapEvents = t, this.layers = n
                    }
                    dblClickZoomActive(e) {
                        const t = this.map.getInteractions();
                        for (let n = 0; n < t.getLength(); n++) {
                            const a = t.item(n);
                            a instanceof Se.Z && a.setActive(e)
                        }
                    }
                    addWidgetBlock(e) {
                        this.widgetsBlocks.includes(e) || this.widgetsBlocks.push(e), this.dblClickZoomActive(!1), this.mapEvents.offMapEvents()
                    }
                    removeWidgetBlock(e) {
                        const t = this.widgetsBlocks.findIndex((t => t === e)); - 1 !== t && this.widgetsBlocks.splice(t, 1), 0 === this.widgetsBlocks.length && (this.mapEvents.onMapEvents(), setTimeout((() => {
                            this.dblClickZoomActive(!0)
                        }), 10))
                    }
                    getMeasurements(e) {
                        return this.measure || (this.measure = new Measurements(this.map, this.layers.measure, Object.assign(Object.assign({}, e), {
                            onStart: () => {
                                this.addWidgetBlock("measure"), (null == e ? void 0 : e.onStart) && e.onStart()
                            },
                            onStop: () => {
                                this.removeWidgetBlock("measure"), (null == e ? void 0 : e.onStop) && e.onStop()
                            }
                        }))), this.measure
                    }
                }
                var He, $e, Ve = n(4680),
                    Ue = n(8266),
                    Be = n(4960),
                    Ge = n(5136);

                function De(e, t) {
                    return e.map((e => "PUBLIC_SERVICE" === e.type ? function(e, t) {
                        if ("OSM" === e.value) return {
                            id: e.id,
                            type: "OSM",
                            attributions: '&nbsp;&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">' + (0, l.t)("Участники OpenStreetMap") + "</a>",
                            crossOrigin: "anonymous"
                        };
                        if ("ORBISMapBaseMap" === e.value) {
                            let n = "https://maps.orbismap.ru/base.png?x={x}&y={-y}&z={z}";
                            return t > 1 && (n += `&retina=${t}`), {
                                id: e.id,
                                type: "XYZ",
                                url: n,
                                crossOrigin: "anonymous",
                                tilePixelRatio: t
                            }
                        }
                        return null
                    }(e, t) : "XYZ" === e.type ? function(e, t) {
                        const n = e.value.match(/\{pixelratio([&?][^=]*)?=([^}]+)\}/);
                        let a, i, s = "",
                            r = "",
                            o = e.value,
                            c = t;
                        if (n) {
                            if (3 === n.length ? (n[1] && (r += n[1] + "="), a = n[2].split(",")) : a = n[1].split(","), 1 === c) i = a[c - 1];
                            else
                                for (let e = c - 1; e > 0; e--)
                                    if (i = a[e], i && "" !== i.trim()) {
                                        c = e + 1;
                                        break
                                    } i && "" !== i.trim() && (s = r + i), o = o.replace(n[0], s)
                        } else t > 1 && (o += `&retina=${t}`);
                        return "ru" !== l.ZP.language && (o += "&lng=en"), {
                            id: e.id,
                            type: "XYZ",
                            url: o,
                            crossOrigin: "anonymous",
                            tilePixelRatio: c
                        }
                    }(e, t) : "WMS" === e.type ? function(e) {
                        const t = JSON.parse(e.value),
                            {
                                url: n
                            } = t,
                            a = (0, i._T)(t, ["url"]);
                        return {
                            id: e.id,
                            type: "TileWMS",
                            url: n,
                            params: a,
                            crossOrigin: "anonymous"
                        }
                    }(e) : "ARCGIS" === e.type ? function(e) {
                        const t = JSON.parse(e.value),
                            {
                                url: n
                            } = t,
                            a = (0, i._T)(t, ["url"]);
                        return {
                            id: e.id,
                            type: "TileArcGISRest",
                            crossOrigin: "anonymous",
                            url: n,
                            params: a
                        }
                    }(e) : null))
                }! function(e) {
                    e.yandexMap = "yandex#map", e.yandexSat = "yandex#satellite", e.yandexHybrid = "yandex#hybrid"
                }(He || (He = {}));
                class YandexMap {
                    constructor(e) {
                        this.yaMap = null, this.yaApiReady = null, this.map = e, this.syncCenter = this.syncCenter.bind(this), this.syncSize = this.syncSize.bind(this)
                    }
                    initMapApi() {
                        this.yaApiReady || document.getElementById("yaScript") ? this.yaApiReady = new Promise((e => {
                            e(this.createMap())
                        })) : this.yaApiReady = new Promise(((e, t) => {
                            const n = document.createElement("script");
                            n.id = "yaScript";
                            const a = document.createElement("style");
                            a.innerHTML = ".yaBase{position:absolute;top:0;bottom:0;right:0;left:0;}", document.head.appendChild(a);
                            n.addEventListener("load", (() => {
                                window.ymaps.ready((() => e(this.createMap())))
                            })), n.addEventListener("error", (() => t())), document.getElementsByTagName("head")[0].appendChild(n), n.src = "//api-maps.yandex.ru/2.1/?lang=" + ("ru" === l.ZP.language ? "ru_RU" : "en_US")
                        }))
                    }
                    createMap() {
                        const e = document.createElement("div");
                        e.className = "yaBase", e.style.display = "none", this.map.getTargetElement().insertBefore(e, this.map.getViewport());
                        const t = this.map.getView(),
                            n = (0, G.bU)(t.getCenter() || [0, 0]).reverse(),
                            a = t.getZoom() || 1;
                        return this.yaMap = new window.ymaps.Map(e, {
                            center: n,
                            zoom: a,
                            controls: []
                        }, {
                            suppressMapOpenBlock: !0,
                            avoidFractionalZoom: !1
                        }), this.yaMap
                    }
                    showMap(e) {
                        var t;
                        null === (t = this.yaApiReady) || void 0 === t || t.then((t => {
                            const n = this.map.getView();
                            let a = n.getCenter();
                            if (a) {
                                a = (0, G.bU)(a).reverse(), this.map.un("precompose", this.syncCenter), this.map.un("change:size", this.syncSize), t.container.getParentElement().style.display = "block", t.container.fitToViewport(), t.setType(e), t.setCenter(a, n.getZoom());
                                const i = this.map.getTargetElement(),
                                    s = i.querySelector("[class*=copyrights-pane]");
                                s && (window.matchMedia("(max-width: 575px)").matches ? s.style.bottom = "64px" : s.style.bottom = "0px", s.style.display = "block", i.appendChild(s)), this.map.on("precompose", this.syncCenter), this.map.on("change:size", this.syncSize)
                            }
                        }))
                    }
                    hideMap() {
                        var e;
                        this.map.un("precompose", this.syncCenter), this.map.un("change:size", this.syncSize), null === (e = this.yaApiReady) || void 0 === e || e.then((e => {
                            e.container.getParentElement().style.display = "none";
                            const t = this.map.getTargetElement().querySelector("[class*=copyrights-pane]");
                            t && (t.style.display = "none")
                        }))
                    }
                    syncPrint() {
                        this.yaMap.container.fitToViewport()
                    }
                    syncCenter(e) {
                        var t;
                        let n = null === (t = e.frameState) || void 0 === t ? void 0 : t.viewState.center;
                        this.yaMap && n && (n = (0, G.bU)(n).reverse(), this.yaMap.setCenter(n, this.map.getView().getZoom()))
                    }
                    syncSize() {
                        let e = this.map.getView().getCenter();
                        this.yaMap && e && (e = (0, G.bU)(e).reverse(), this.yaMap.container.fitToViewport(), this.yaMap.setCenter(e, this.map.getView().getZoom()))
                    }
                }! function(e) {
                    e.googleRoadmap = "ROADMAP", e.googleSat = "SATELLITE", e.googleHybrid = "HYBRID", e.googleTerrain = "TERRAIN"
                }($e || ($e = {}));
                class GoogleMap {
                    constructor(e) {
                        this.gooMap = null, this.gooApiReady = null, this.gooMapElement = document.createElement("div"), this.map = e, this.syncCenter = this.syncCenter.bind(this), this.syncSize = this.syncSize.bind(this)
                    }
                    initMapApi(e) {
                        this.gooApiReady ? this.gooApiReady = new Promise((e => {
                            e(this.createMap())
                        })) : this.gooApiReady = new Promise(((t, n) => {
                            const a = document.createElement("script");
                            a.id = "gooScript";
                            const i = document.createElement("style");
                            i.innerHTML = ".gooBase{position:absolute;top:0;bottom:0;right:0;left:0;}", document.head.appendChild(i);
                            const s = () => {
                                a.removeEventListener("load", s), window.google && t(this.createMap())
                            };
                            a.addEventListener("load", s), a.addEventListener("error", (() => n())), document.getElementsByTagName("head")[0].appendChild(a), a.src = `https://maps.googleapis.com/maps/api/js?key=${e}&callback=focus`
                        }))
                    }
                    createMap() {
                        this.gooMapElement.className = "gooBase", this.gooMapElement.style.display = "none", this.map.getTargetElement().insertBefore(this.gooMapElement, this.map.getViewport());
                        const e = this.map.getView(),
                            t = (0, G.bU)(e.getCenter() || [0, 0]),
                            n = {
                                zoom: e.getZoom() || 1,
                                center: new window.google.maps.LatLng(t[1], t[0]),
                                animatedZoom: !1,
                                disableDefaultUI: !0,
                                keyboardShortcuts: !1,
                                draggable: !1,
                                disableDoubleClickZoom: !0,
                                scrollwheel: !1,
                                streetViewControl: !1
                            };
                        return this.gooMap = new window.google.maps.Map(this.gooMapElement, n), this.gooMap
                    }
                    showMap(e) {
                        var t;
                        null === (t = this.gooApiReady) || void 0 === t || t.then((() => {
                            const t = this.map.getView();
                            let n = t.getCenter();
                            n && (n = (0, G.bU)(t.getCenter() || [0, 0]), this.map.un("precompose", this.syncCenter), this.map.un("change:size", this.syncSize), this.gooMapElement.style.display = "block", window.google.maps.event.trigger(this.gooMap, "resize"), this.gooMap.setOptions({
                                zoom: t.getZoom(),
                                center: window.google.maps.LatLng(n[1], n[0])
                            }), this.gooMap.setMapTypeId(window.google.maps.MapTypeId[e]), this.map.on("precompose", this.syncCenter), this.map.on("change:size", this.syncSize), setTimeout((() => {
                                document.querySelector(".gm-style").style.zIndex = "unset"
                            }), 10))
                        }))
                    }
                    hideMap() {
                        this.map.un("precompose", this.syncCenter), this.map.un("change:size", this.syncSize), this.gooMapElement.style.display = "none"
                    }
                    syncPrint() {
                        const e = (0, G.bU)(this.map.getView().getCenter()),
                            t = window.google.maps.LatLng(e[1], e[0]);
                        window.google.maps.event.trigger(this.gooMap, "resize"), this.gooMap.setCenter(t)
                    }
                    syncCenter(e) {
                        var t;
                        let n = null === (t = e.frameState) || void 0 === t ? void 0 : t.viewState.center;
                        this.gooMap && n && (n = (0, G.bU)(n), this.gooMap.setOptions({
                            center: new window.google.maps.LatLng(n[1], n[0]),
                            zoom: this.map.getView().getZoom()
                        }))
                    }
                    syncSize() {
                        let e = this.map.getView().getCenter();
                        this.gooMap && e && (window.google.maps.event.trigger(this.gooMap, "resize"), e = (0, G.bU)(e), this.gooMap.setOptions({
                            center: new window.google.maps.LatLng(e[1], e[0]),
                            zoom: this.map.getView().getZoom()
                        }))
                    }
                }
                const We = "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreObjects/MapServer",
                    ze = "https://pkk.rosreestr.ru/arcgis/rest/services/Hosted/caddivsion/VectorTileServer/tile/{z}/{y}/{x}.pbf",
                    Ye = "https://pkk.rosreestr.ru/arcgis/rest/services/Hosted/caddivsion/VectorTileServer/tilemap",
                    Ke = "https://pkk.rosreestr.ru/api/",
                    Je = "features/",
                    Xe = "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/CadastreSelected/MapServer",
                    qe = "https://pkk.rosreestr.ru/arcgis/rest/services/PKK6/ZONESSelected/MapServer",
                    Qe = "https://rosreestr.ru/wps/portal/cc_information_online",
                    et = "https://pkk.rosreestr.ru/#/search/";
                var tt = n(8641);
                class Utils {
                    constructor() {
                        this.tilemap = null
                    }
                    static div(e, t = 2) {
                        const n = e % t;
                        return [(e - n) / t, n]
                    }
                    static createTilePath(e, t, n, a) {
                        const [i, s] = Utils.div(t), [r, o] = Utils.div(n), l = s + 2 * o;
                        return a.push(l), [e - 1, i, r, a]
                    }
                    static getFullTilePath(e, t, n) {
                        if (e >= 1) {
                            let a = e,
                                i = t,
                                s = n,
                                r = [];
                            for (; a >= 1;)[a, i, s, r] = Utils.createTilePath(a, i, s, r);
                            return r.reverse()
                        }
                        throw Error("Z coordinate must be greater than 0")
                    }
                    static createTileCoord(e, t, n) {
                        const [a, i] = Utils.div(n);
                        return [2 * e + i, 2 * t + a]
                    }
                    static getTileFormPath(e) {
                        const t = e.length;
                        let n = 0,
                            a = 0;
                        if (e.length && ([a, n] = Utils.div(e[0]), t >= 1))
                            for (let t = 1; t < e.length; t++)[n, a] = Utils.createTileCoord(n, a, e[t]);
                        return [t, n, a]
                    }
                    static getExtentFromFlatCoords(e) {
                        let t = e[0],
                            n = e[1],
                            a = t,
                            i = n;
                        for (let s = 0; s < e.length; s++) s % 2 == 0 ? t > e[s] ? t = e[s] : a < e[s] && (a = e[s]) : n > e[s] ? n = e[s] : i < e[s] && (i = e[s]);
                        return [t, n, a, i]
                    }
                    loadMapping() {
                        return function() {
                            return Promise.resolve().then((() => (0, i.mG)(this, void 0, void 0, (function*() {
                                let e = 0,
                                    t = !1;
                                for (; e < 4 && !t;) {
                                    try {
                                        const e = yield z.Z.get(Ye);
                                        return t = !0, e.data.index
                                    } catch (e) {
                                        console.log("Error PKK tilemap load")
                                    }
                                    e++
                                }
                                console.log("PKK tilemap not loaded.")
                            }))))
                        }().then((e => (e && (this.tilemap = e), e)))
                    }
                    checkAvailableTile(e) {
                        const [t, n, a] = e;
                        let i = this.tilemap;
                        if (!i) return e;
                        const s = Utils.getFullTilePath(t, n, a),
                            r = [];
                        for (let e = 0; e <= s.length && (i && i[s[e]]); e++) i = i[s[e]], r.push(s[e]);
                        return Utils.getTileFormPath(r)
                    }
                    static getTileFeatures(e, t) {
                        const n = [];
                        for (let a = 0; a < t.length; a++)
                            if ("Polygon" === t[a].type_) {
                                const i = Utils.getExtentFromFlatCoords(t[a].flatCoordinates_);
                                (0, tt.kK)(e, i) && n.push(t[a])
                            } else "Point" === t[a].type_ && (0, tt.b8)(e, t[a].flatCoordinates_) && n.push(t[a]);
                        return n
                    }
                    static calcTolerance(e) {
                        const t = Math.round(e);
                        return Math.pow(2, 20 - t)
                    }
                    static sortFeatures(e) {
                        if (e.results) {
                            const {
                                results: t
                            } = e, n = [];
                            for (let e = 0; e < t.length; e++) 5 === t[e].type ? n.unshift(t[e]) : n.push(t[e]);
                            e.results = n
                        }
                        return e
                    }
                    static highlightCadastreFeature(e, t) {
                        var n, a;
                        const i = t.getLayers().getArray().find((e => "highlight" === e.get("pkk_type")));
                        if (!t.getVisible()) return;
                        if (null !== e) {
                            const t = /^\d+\.\d+\.\d+/.exec(e) ? qe : Xe;
                            let s = [6, 7, 8, 9];
                            const r = /\d+/g,
                                o = String(e).match(r),
                                l = {},
                                c = "objectid = -1";
                            if (4 === (null == o ? void 0 : o.length))
                                for (let t = 0; t < o.length; t++) {
                                    l[s[t]] = "id = '" + e + "'"
                                } else s = [10, 11, 12], l[10] = c, l[11] = c, l[12] = c, l[12 - Number(null == o ? void 0 : o.length) + 1] = "id = '" + e + "'";
                            const d = {};
                            d.layers = `show:${s.join(",")}`, d.dpi = 96, d.format = "png32", d.bboxSR = "102100", d.imageSR = "102100", d.size = "1024,1024", d.transparent = !0, d.f = "image", e && (d.layerDefs = JSON.stringify(l)), null === (n = null == i ? void 0 : i.getSource()) || void 0 === n || n.setUrl(`${t}/export`), null === (a = null == i ? void 0 : i.getSource()) || void 0 === a || a.updateParams(d), null == i || i.setVisible(!0)
                        } else null == i || i.setVisible(!1)
                    }
                }
                const nt = new Utils,
                    at = {
                        urls: a,
                        utils: nt,
                        Utils
                    };
                var it = n(156),
                    st = n(7358),
                    rt = n(9681),
                    ot = n(1280);

                function lt(e, t) {
                    let n = 14;
                    switch (t) {
                        case Re.OKRUG:
                            e <= 6 ? n = 16 : e < 9 ? n = 22 : e >= 9 && (n = 28);
                            break;
                        case Re.RAYON:
                            n = 16, e >= 13 && (n = 22);
                            break;
                        case Re.KVARTAL:
                            n = e < 16 ? 14 : e <= 17 ? 16 : e < 19 ? 20 : 22
                    }
                    return n
                }

                function ct(e, t, n) {
                    let a = n;
                    switch (t) {
                        case Re.OKRUG:
                            e < 9 ? a += 2 : e < 11 ? a += 2.5 : e >= 11 && (a += 3);
                            break;
                        case Re.RAYON:
                            e >= 11 && (a += 2.5);
                        case Re.KVARTAL:
                    }
                    return a
                }

                function dt(e) {
                    const t = new Map;
                    return n => {
                        const a = [],
                            i = Math.round(e.getView().getZoom()),
                            s = n.getProperties(),
                            {
                                layer: r
                            } = s,
                            o = s._name,
                            l = function(e) {
                                let t = Re.UCHASTOK;
                                const n = null !== e.match(/округа/g),
                                    a = null !== e.match(/районы/g),
                                    i = null !== e.match(/кварталы/g);
                                return n ? t = Re.OKRUG : a ? t = Re.RAYON : i && (t = Re.KVARTAL), t
                            }(r);
                        if (! function(e, t) {
                                let n = !0;
                                switch (t) {
                                    case Re.OKRUG:
                                    case Re.RAYON:
                                        break;
                                    case Re.KVARTAL:
                                        e < 11 && (n = !1)
                                }
                                return n
                            }(i, l)) return [];
                        const c = `${l}_${i}_${o}`;
                        if (t.has(c)) return t.get(c);
                        if ("Polygon" !== n.type_ && function(e, t) {
                                let n = !0;
                                switch (t) {
                                    case Re.OKRUG:
                                    case Re.RAYON:
                                        break;
                                    case Re.KVARTAL:
                                        e < 14 && (n = !1)
                                }
                                return n
                            }(i, l)) a.push(new Le.ZP({
                            text: new ot.Z({
                                fill: new Me.Z({
                                    color: "#a80401"
                                }),
                                text: o,
                                font: `bold ${lt(i,l)}px sans-serif`,
                                stroke: new Ae.Z({
                                    color: "#ffffff",
                                    width: 3
                                })
                            })
                        }));
                        else {
                            const e = function(e, t) {
                                let n = 1;
                                switch (t) {
                                    case Re.OKRUG:
                                        n = e < 6 ? 1 : e < 7 ? 2 : e < 8 ? 3 : 4;
                                        break;
                                    case Re.RAYON:
                                        e >= 11 && (n = 4);
                                        break;
                                    case Re.KVARTAL:
                                        n = e < 13 ? 1 : e < 17 ? 2 : 3
                                }
                                return n
                            }(i, l);
                            (function(e, t) {
                                let n = !1;
                                switch (t) {
                                    case Re.OKRUG:
                                        e >= 7 && (n = !0);
                                        break;
                                    case Re.RAYON:
                                        e >= 11 && (n = !0);
                                        break;
                                    case Re.KVARTAL:
                                        e < 11 && (n = !1)
                                }
                                return n
                            })(i, l) && a.push(new Le.ZP({
                                stroke: new Ae.Z({
                                    color: "white",
                                    width: ct(i, l, e)
                                })
                            })), a.push(new Le.ZP({
                                stroke: new Ae.Z({
                                    color: "#d20404",
                                    width: e
                                })
                            }))
                        }
                        return t.set(c, a), a
                    }
                }
                const mt = (e, t) => {
                    const n = a => {
                        z.Z.get(t, {
                            responseType: "blob"
                        }).then((t => {
                            e.getImage().src = window.URL.createObjectURL(t.data)
                        })).catch((() => {
                            a > 4 ? e.getImage().src = "" : setTimeout((() => {
                                n(a + 1)
                            }), 500)
                        }))
                    };
                    n(0)
                };

                function ut(e, t) {
                    t.getLayers().push(function() {
                        const e = (96 * window.devicePixelRatio).toString();
                        return new pe.Z({
                            source: new Ge.Z({
                                url: We,
                                params: {
                                    layers: "show:30,21,17,8,0",
                                    bboxSR: "102100",
                                    imageSR: "102100",
                                    size: "1024,1024",
                                    dpi: e
                                },
                                crossOrigin: "anonymous",
                                tileLoadFunction: mt
                            }),
                            className: "pkk-layer",
                            minZoom: 15
                        })
                    }()), t.getLayers().push(function(e) {
                        const t = new Map,
                            n = new it.Z({
                                declutter: !0,
                                source: new st.Z({
                                    format: new rt.Z,
                                    url: ze,
                                    tileLoadFunction(e, a) {
                                        const i = e.getTileCoord(),
                                            s = nt.checkAvailableTile(i);
                                        if (s[0] === i[0]) e.setLoader(((t, n, i) => {
                                            const s = n => {
                                                z.Z.get(a, {
                                                    responseType: "blob"
                                                }).then((n => {
                                                    n.data.arrayBuffer().then((n => {
                                                        try {
                                                            const a = e.getFormat().readFeatures(n, {
                                                                extent: t,
                                                                featureProjection: i
                                                            });
                                                            e.setFeatures(a)
                                                        } catch (t) {
                                                            e.setFeatures([])
                                                        }
                                                    }))
                                                })).catch((() => {
                                                    n > 4 ? e.setFeatures([]) : setTimeout((() => {
                                                        s(n + 1)
                                                    }), 500)
                                                }))
                                            };
                                            s(0)
                                        }));
                                        else {
                                            const a = s.toString();
                                            let i;
                                            if (t.has(a)) e.setLoader((() => {
                                                const n = t.get(a);
                                                i = Utils.getTileFeatures(e.extent, n), e.setFeatures(i)
                                            }));
                                            else {
                                                const r = n.getSource(),
                                                    o = null == r ? void 0 : r.getProjection(),
                                                    l = null == r ? void 0 : r.getTileGrid(),
                                                    c = null == l ? void 0 : l.getTileCoordExtent(s),
                                                    d = 96 * window.devicePixelRatio,
                                                    m = null == r ? void 0 : r.tileUrlFunction(s, d, o);
                                                e.setLoader((() => {
                                                    const n = s => {
                                                        z.Z.get(m, {
                                                            responseType: "blob"
                                                        }).then((r => {
                                                            r.data.arrayBuffer().then((n => {
                                                                try {
                                                                    const s = e.getFormat().readFeatures(n, {
                                                                        extent: c
                                                                    });
                                                                    i = Utils.getTileFeatures(e.extent, s), t.set(a, s), e.setFeatures(i)
                                                                } catch (t) {
                                                                    e.setFeatures([])
                                                                }
                                                            })).catch((() => {
                                                                s > 4 ? e.setFeatures([]) : setTimeout((() => {
                                                                    n(s + 1)
                                                                }), 500)
                                                            }))
                                                        }))
                                                    };
                                                    n(0)
                                                }))
                                            }
                                        }
                                    }
                                }),
                                style: dt(e),
                                className: "pkk-layer"
                            });
                        return n
                    }(e)), t.getLayers().push(new pe.Z({
                        source: new Ge.Z({
                            crossOrigin: "anonymous",
                            tileLoadFunction: mt
                        }),
                        opacity: .7,
                        visible: !1,
                        properties: {
                            pkk_type: "highlight"
                        }
                    }))
                }
                class BaseMaps {
                    constructor(e, t, n) {
                        this.baseMaps = [], this.map = e, this.baseLayer = t, this.pkkLayersGroup = n, this.yaMap = new YandexMap(this.map), this.gooMap = new GoogleMap(this.map), this.sources = {}
                    }
                    create(e, t) {
                        this.baseMaps = e;
                        const n = Math.round(window.devicePixelRatio);
                        De(e.filter((e => "cadastre" !== e.value)), n).forEach((e => {
                            if (!e) return;
                            const {
                                id: t,
                                type: n
                            } = e, a = (0, i._T)(e, ["id", "type"]);
                            switch (n) {
                                case "XYZ":
                                    this.sources[t] = new Ve.Z(Object.assign({}, a));
                                    break;
                                case "OSM":
                                    this.sources[t] = new Ue.Z(Object.assign({}, a));
                                    break;
                                case "TileWMS":
                                    this.sources[t] = new Be.Z(Object.assign(Object.assign({}, a), {
                                        params: Object.assign({}, a.params || {})
                                    }));
                                    break;
                                case "TileArcGISRest":
                                    this.sources[t] = new Ge.Z(Object.assign({}, a))
                            }
                        })), this.yaMap.initMapApi(), this.gooMap.initMapApi(t), ut(this.map, this.pkkLayersGroup)
                    }
                    switchMap(e) {
                        const t = this.baseMaps.find((t => t.id === e)) || this.baseMaps[0];
                        t && (t.value.includes("yandex") ? (this.baseLayer.setVisible(!1), this.gooMap.hideMap(), this.yaMap.showMap(He[t.value])) : t.value.includes("google") ? (this.baseLayer.setVisible(!1), this.yaMap.hideMap(), this.gooMap.showMap($e[t.value])) : (this.yaMap.hideMap(), this.gooMap.hideMap(), this.baseLayer.setVisible(!0), this.baseLayer.setSource(this.sources[t.id])))
                    }
                    switchCadastre(e) {
                        e && at.utils.loadMapping(), this.pkkLayersGroup.setVisible(e)
                    }
                    highlightPKKFeature(e) {
                        at.Utils.highlightCadastreFeature(e, this.pkkLayersGroup)
                    }
                }
                var pt = n(9261),
                    ht = n(6528),
                    gt = n(2846);
                const vt = Math.PI / 180,
                    ft = 180 / Math.PI;
                class Coord {
                    constructor(e, t) {
                        this.lon = e, this.lat = t, this.x = vt * e, this.y = vt * t
                    }
                    view() {
                        return String(this.lon).slice(0, 4) + "," + String(this.lat).slice(0, 4)
                    }
                    antipode() {
                        const e = -1 * this.lat,
                            t = this.lon < 0 ? 180 + this.lon : -1 * (180 - this.lon);
                        return new Coord(t, e)
                    }
                }
                class arc_LineString {
                    constructor() {
                        this.coords = [], this.length = 0
                    }
                    move_to(e) {
                        this.length++, this.coords.push(e)
                    }
                }
                class Arc {
                    constructor(e) {
                        this.properties = e || {}, this.geometries = []
                    }
                    json() {
                        if (this.geometries.length <= 0) return {
                            geometry: {
                                type: "LineString",
                                coordinates: null
                            },
                            type: "Feature",
                            properties: this.properties
                        };
                        if (1 === this.geometries.length) return {
                            geometry: {
                                type: "LineString",
                                coordinates: this.geometries[0].coords
                            },
                            type: "Feature",
                            properties: this.properties
                        };
                        {
                            const e = [];
                            for (let t = 0; t < this.geometries.length; t++) e.push(this.geometries[t].coords);
                            return {
                                geometry: {
                                    type: "MultiLineString",
                                    coordinates: e
                                },
                                type: "Feature",
                                properties: this.properties
                            }
                        }
                    }
                    wkt() {
                        let e = "",
                            t = "LINESTRING(";
                        const n = function(e) {
                            t += e[0] + " " + e[1] + ","
                        };
                        for (let a = 0; a < this.geometries.length; a++) {
                            if (0 === this.geometries[a].coords.length) return "LINESTRING(empty)";
                            this.geometries[a].coords.forEach(n), e += t.substring(0, t.length - 1) + ")"
                        }
                        return e
                    }
                }
                class GreatCircle {
                    constructor(e, t, n) {
                        if (!e || void 0 === e.x || void 0 === e.y) throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");
                        if (!t || void 0 === t.x || void 0 === t.y) throw new Error("GreatCircle constructor expects two args: start and end objects with x and y properties");
                        this.start = new Coord(e.x, e.y), this.end = new Coord(t.x, t.y), this.properties = n || {};
                        const a = this.start.x - this.end.x,
                            i = this.start.y - this.end.y,
                            s = Math.pow(Math.sin(i / 2), 2) + Math.cos(this.start.y) * Math.cos(this.end.y) * Math.pow(Math.sin(a / 2), 2);
                        if (this.g = 2 * Math.asin(Math.sqrt(s)), this.g === Math.PI) throw new Error("it appears " + this.start.view() + " and " + this.end.view() + " are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");
                        if (isNaN(this.g)) throw new Error("could not calculate great circle between " + e + " and " + t)
                    }
                    interpolate(e) {
                        const t = Math.sin((1 - e) * this.g) / Math.sin(this.g),
                            n = Math.sin(e * this.g) / Math.sin(this.g),
                            a = t * Math.cos(this.start.y) * Math.cos(this.start.x) + n * Math.cos(this.end.y) * Math.cos(this.end.x),
                            i = t * Math.cos(this.start.y) * Math.sin(this.start.x) + n * Math.cos(this.end.y) * Math.sin(this.end.x),
                            s = t * Math.sin(this.start.y) + n * Math.sin(this.end.y),
                            r = ft * Math.atan2(s, Math.sqrt(Math.pow(a, 2) + Math.pow(i, 2)));
                        return [ft * Math.atan2(i, a), r]
                    }
                    Arc(e, t) {
                        const n = [];
                        if (!e || e <= 2) n.push([this.start.lon, this.start.lat]), n.push([this.end.lon, this.end.lat]);
                        else {
                            const t = 1 / (e - 1);
                            for (let a = 0; a < e; ++a) {
                                const e = t * a,
                                    i = this.interpolate(e);
                                n.push(i)
                            }
                        }
                        let a = !1,
                            i = 0;
                        const s = t && t.offset ? t.offset : 10,
                            r = 180 - s,
                            o = -180 + s,
                            l = 360 - s;
                        for (let e = 1; e < n.length; ++e) {
                            const t = n[e - 1][0],
                                s = n[e][0],
                                c = Math.abs(s - t);
                            c > l && (s > r && t < o || t > r && s < o) ? a = !0 : c > i && (i = c)
                        }
                        const c = [];
                        if (a && i < s) {
                            let e = [];
                            c.push(e);
                            for (let t = 0; t < n.length; ++t) {
                                const a = parseFloat(String(n[t][0]));
                                if (t > 0 && Math.abs(a - n[t - 1][0]) > l) {
                                    let i = parseFloat(String(n[t - 1][0])),
                                        s = parseFloat(String(n[t - 1][1])),
                                        l = parseFloat(String(n[t][0])),
                                        d = parseFloat(String(n[t][1]));
                                    if (i > -180 && i < o && 180 == l && t + 1 < n.length && n[t - 1][0] > -180 && n[t - 1][0] < o) {
                                        e.push([-180, n[t][1]]), t++, e.push([n[t][0], n[t][1]]);
                                        continue
                                    }
                                    if (i > r && i < 180 && -180 == l && t + 1 < n.length && n[t - 1][0] > r && n[t - 1][0] < 180) {
                                        e.push([180, n[t][1]]), t++, e.push([n[t][0], n[t][1]]);
                                        continue
                                    }
                                    if (i < o && l > r) {
                                        const e = i;
                                        i = l, l = e;
                                        const t = s;
                                        s = d, d = t
                                    }
                                    if (i > r && l < o && (l += 360), i <= 180 && l >= 180 && i < l) {
                                        const a = (180 - i) / (l - i),
                                            o = a * d + (1 - a) * s;
                                        e.push([n[t - 1][0] > r ? 180 : -180, o]), e = [], e.push([n[t - 1][0] > r ? -180 : 180, o]), c.push(e)
                                    } else e = [], c.push(e);
                                    e.push([a, n[t][1]])
                                } else e.push([n[t][0], n[t][1]])
                            }
                        } else {
                            const e = [];
                            c.push(e);
                            for (let t = 0; t < n.length; ++t) e.push([n[t][0], n[t][1]])
                        }
                        const d = new Arc(this.properties);
                        for (let e = 0; e < c.length; ++e) {
                            const t = new arc_LineString;
                            d.geometries.push(t);
                            const n = c[e];
                            for (let e = 0; e < n.length; ++e) t.move_to(n[e])
                        }
                        return d
                    }
                }
                const yt = (e, t, n) => {
                        let a = n.width * t;
                        const i = n.height * t,
                            s = document.createElement("canvas");
                        s.width = a, s.height = i;
                        const r = s.getContext("2d");
                        e.length > n.maxDisplayLetters && (e = "*");
                        let o = 0;
                        if (n.iconAutoSize && e.length > 2) {
                            const i = n.figures[n.figures.length - 1];
                            o = r.measureText(e).width + 2 * n.iconTextHorizontalPadding > i.width ? Math.ceil(r.measureText(e).width + 2 * n.iconTextHorizontalPadding - i.width) : 0, a = (n.width + o) * t, s.width = a
                        }
                        return n.figures.forEach((function(e) {
                            let n, s;
                            const l = e.radius * t,
                                c = (e.width + o) * t,
                                d = e.height * t,
                                m = "number" == typeof e.lineWidth ? e.lineWidth : 1;
                            let u = 0;
                            const p = e.radius * t;
                            switch (e.type) {
                                case "rect":
                                    n = (a - c) / 2, s = (i - d) / 2, r.strokeStyle = e.strokeStyle, r.fillStyle = e.fillStyle, m && (r.lineWidth = e.lineWidth * t, u += r.lineWidth / 2), ((e, t, n, a, i, s, r, o) => {
                                        if (void 0 === o && (o = !0), (void 0 === s || isNaN(s)) && (s = 5), "number" == typeof s) s = {
                                            tl: s,
                                            tr: s,
                                            br: s,
                                            bl: s
                                        };
                                        else {
                                            const e = {
                                                tl: 0,
                                                tr: 0,
                                                br: 0,
                                                bl: 0
                                            };
                                            for (const t in e) s[t] = s[t] || e[t]
                                        }
                                        e.beginPath(), e.moveTo(t + s.tl, n), e.lineTo(t + a - s.tr, n), e.quadraticCurveTo(t + a, n, t + a, n + s.tr), e.lineTo(t + a, n + i - s.br), e.quadraticCurveTo(t + a, n + i, t + a - s.br, n + i), e.lineTo(t + s.bl, n + i), e.quadraticCurveTo(t, n + i, t, n + i - s.bl), e.lineTo(t, n + s.tl), e.quadraticCurveTo(t, n, t + s.tl, n), e.closePath(), r && e.fill(), o && e.stroke()
                                    })(r, u + n, u + s, a - 2 * (u + n), i - 2 * (u + s), l, !0, Boolean(m));
                                    break;
                                case "circle":
                                    n = (a - 2 * p) / 2, s = (i - 2 * p) / 2, r.fillStyle = e.fillStyle, r.beginPath(), r.arc(p + n, p + s, p, 0, 2 * Math.PI), r.fill()
                            }
                        })), r.font = n.fontSize * (t / 2) + "px " + n.fontFamily, r.textAlign = n.textAlign, r.textBaseline = n.textBaseline, r.fillStyle = n.textColor, r.fillText(e, a / 2, i / 2 + 1), s
                    },
                    bt = (e, t, n) => {
                        const a = t.getImageData(0, 0, e.width, e.height);
                        let i;
                        for (let t = 0; t < e.width; t++)
                            for (let s = 0; s < e.height; s++) {
                                const r = 4 * (s * e.width + t);
                                i = [a.data[r] * n * n, a.data[r + 1] * n * n, a.data[r + 2] * n * n, a.data[r + 3]], a.data[r] = i[0], a.data[r + 1] = i[1], a.data[r + 2] = i[2], a.data[r + 3] = i[3]
                            }
                        t.clearRect(0, 0, e.width, e.height), t.putImageData(a, 0, 0)
                    },
                    Et = (e, t) => new RegExp(`^.+_(${t.join("|")})$`).test(e) ? e.split("_").slice(0, -1).join("_") : e,
                    wt = {
                        width: 20,
                        height: 17,
                        iconAutoSize: !1,
                        maxDisplayLetters: 2,
                        iconTextHorizontalPadding: 3,
                        figures: [{
                            width: 18,
                            height: 15,
                            type: "rect",
                            radius: 2,
                            strokeStyle: "#7fa3c6",
                            fillStyle: "#fff",
                            lineWidth: 1
                        }],
                        fontSize: 20,
                        fontFamily: "Arial",
                        textAlign: "center",
                        textBaseline: "middle",
                        textColor: "#000"
                    };
                class OMSVectorLayer extends ge.Z {
                    constructor(e) {
                        super(e), this.imgCache = {}, this.styleCache = {}, this.fullFeatures = [], this.pointsSource = e.source, this.fullFeatures = this.pointsSource.getFeatures();
                        const t = this.get("vectorSettings") || {};
                        t.clusteringEnabled && this.pointsSource && (this.clusterSource = new pt.Z({
                            distance: t.clusterSettings.radius,
                            source: this.pointsSource
                        })), this.once("prerender", (() => {
                            var e;
                            null === (e = this.get("map")) || void 0 === e || e.on("moveend", (() => {
                                const e = this.get("map").getView().getZoom();
                                this.switchLayerSource(Number(e))
                            }))
                        })), this.setLayerStyle()
                    }
                    switchLayerSource(e) {
                        const t = this.get("vectorSettings");
                        t.clusteringEnabled && (t.clusterSettings.maxZoomEnabled && Number(e) > t.clusterSettings.maxZoom ? this.setSource(this.pointsSource) : this.clusterSource && this.setSource(this.clusterSource))
                    }
                    createImgLoader(e) {
                        return this.imgCache[e] = new Image, this.imgCache[e].crossOrigin = "anonymous", this.imgCache[e].promise = new Promise((t => {
                            this.imgCache[e].onload = function() {
                                t(1)
                            }
                        })), this.imgCache[e].promise
                    }
                    reloadLayerIcons() {
                        const e = this.get("vectorSettings");
                        this.imgCache = {};
                        const t = [];
                        e.stylesPoint.icon && t.push(this.createImgLoader(e.stylesPoint.icon)), e.clusteringEnabled && e.clusterSettings.icon && e.clusterSettings.iconEnabled && void 0 === this.imgCache[e.clusterSettings.icon] && t.push(this.createImgLoader(e.clusterSettings.icon));
                        for (const e in this.imgCache) this.imgCache[e].src = `${this.get("baseUrl")}${e}?r=${Math.floor(999999*Math.random())+1}`;
                        return Promise.all(t)
                    }
                    setClusterStyle(e, t, n) {
                        var a;
                        let {
                            offset: i,
                            scale: s
                        } = n;
                        const {
                            size: r
                        } = n;
                        let o, l = 2,
                            c = 2;
                        null === (a = this.getSource()) || void 0 === a || a.getFeatures().forEach((e => {
                            l = Math.min(l, e.get("features").length), c = Math.max(c, e.get("features").length)
                        }));
                        const d = e.clusterSettings.iconSizeMax - e.clusterSettings.iconSizeMin,
                            m = parseInt(String(e.clusterSettings.iconSizeMin + d * (r - l) / (c - l)));
                        if (null !== e.clusterSettings.icon && e.clusterSettings.iconEnabled ? (o = this.imgCache[e.clusterSettings.icon], i = e.clusterSettings.iconOffsetEnabled ? [-e.clusterSettings.iconDx, -e.clusterSettings.iconDy] : [0, 0]) : (o = this.imgCache[e.stylesPoint.icon], i = e.stylesPoint.iconOffsetEnabled ? [-e.stylesPoint.iconDx, -e.stylesPoint.iconDy] : [0, 0]), i[0] += o.width / 2, i[1] += o.height / 2, s = e.clusterSettings.iconSizeEnabled ? m / o.width : 1, t.push(new Le.ZP({
                                image: new gt.Z({
                                    anchor: i,
                                    anchorXUnits: "pixels",
                                    anchorYUnits: "pixels",
                                    opacity: 1,
                                    img: o,
                                    imgSize: [o.width, o.height],
                                    scale: s
                                })
                            })), e.clusterSettings.showObjectsCount) try {
                            s = 1 / (1 / window.devicePixelRatio);
                            const n = yt(r < 100 ? r.toString() : "*", s, wt);
                            t.push(new Le.ZP({
                                image: new gt.Z({
                                    anchor: [(wt.width / 2 - e.clusterSettings.objectsCountDx) * s, (wt.height / 2 - e.clusterSettings.objectsCountDy) * s],
                                    anchorXUnits: "pixels",
                                    anchorYUnits: "pixels",
                                    opacity: 1,
                                    imgSize: [n.width, n.height],
                                    img: n,
                                    scale: 1 / s
                                })
                            }))
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    setFeatureStyle(e, t, n) {
                        const {
                            offset: a
                        } = n, i = this.imgCache[e.stylesPoint.icon];
                        a[0] += i.width / 2, a[1] += i.height / 2, t.push(new Le.ZP({
                            image: new gt.Z({
                                anchor: a,
                                anchorXUnits: "pixels",
                                anchorYUnits: "pixels",
                                opacity: 1,
                                img: i,
                                imgSize: [i.width, i.height]
                            })
                        }))
                    }
                    setHighlightedStyle(e) {
                        var t;
                        const n = e.filter((e => !!e.getImage()));
                        let a, i, s, r;
                        if (n && n.length)
                            for (let o = 0; o < n.length; o++) {
                                a = n[o].getImage().getImageSize(), i = document.createElement("canvas"), s = 2, i.setAttribute("width", String(a[0] + 4)), i.setAttribute("height", String(a[1] + 4)), i.style.cssText = `\n                                width: ${a[0]+4};\n                                height: ${a[1]+4};\n                                `, r = i.getContext("2d"), r.shadowColor = "rgba( 0, 0, 0, 0.3 )", r.shadowOffsetX = 2, r.shadowOffsetY = 2, r.shadowBlur = 2, r.drawImage(n[o].getImage().getImage(devicePixelRatio), 2, 2);
                                try {
                                    bt(i, r, 1.06);
                                    const t = n[o].getImage().getAnchor().map((e => e + 2));
                                    e.push(new Le.ZP({
                                        image: new gt.Z({
                                            src: i.toDataURL(),
                                            scale: n[o].getImage().getScale(),
                                            opacity: 1,
                                            anchor: t,
                                            anchorXUnits: "pixels",
                                            anchorYUnits: "pixels"
                                        })
                                    }))
                                } catch (t) {
                                    n[o].getImage().setOpacity(.6 * n[o].getImage().getOpacity()), e.push(n[o])
                                }
                                null === (t = i.parentElement) || void 0 === t || t.removeChild(i)
                            }
                    }
                    setLayerStyle() {
                        const e = this.get("vectorSettings");
                        this.reloadLayerIcons().then((() => {
                            this.styleCache = {}, this.setStyle(((t, n) => {
                                const a = t.get("features") ? t.get("features").length : 1,
                                    i = [],
                                    s = e.stylesPoint.iconOffsetEnabled ? [-e.stylesPoint.iconDx, -e.stylesPoint.iconDy] : [0, 0],
                                    r = !!t.get("highlighted"),
                                    o = `${n}:${r?"1":"0"}`;
                                if (o in this.styleCache) {
                                    if (this.styleCache[o][a]) return this.styleCache[o][a]
                                } else this.styleCache[o] = [];
                                return a > 1 ? this.setClusterStyle(e, i, {
                                    offset: s,
                                    size: a,
                                    scale: 1
                                }) : this.setFeatureStyle(e, i, {
                                    offset: s
                                }), r && this.setHighlightedStyle(i), this.styleCache[o][a] = i, i
                            }))
                        }))
                    }
                }
                class OMSCategoryVectorLayer extends he.Z {
                    constructor(e) {
                        super(e), this.features = [], this.styleCache = {}, this.sources = {}, this.map = null, this.imgCache = {}
                    }
                    setMap(e) {
                        var t;
                        this.map = e, null === (t = this.map) || void 0 === t || t.on("moveend", (() => {
                            var e;
                            const t = null === (e = this.map) || void 0 === e ? void 0 : e.getView().getZoom();
                            this.switchLayerSources(Number(t))
                        }))
                    }
                    setFeatures(e) {
                        this.features = e, this.createStruct(), this.get("vectorSettings").clusterSettings.splitByCategories ? this.setGroupStyle() : this.setLayerStyle()
                    }
                    createSubLayer(e, t, n, a) {
                        const i = new ge.Z;
                        this.sources[e] = new ve.Z, a && (this.sources[`${e}.cluster`] = new pt.Z({
                            source: this.sources[e],
                            distance: n.radius
                        })), i.set("category", e), this.getLayers().push(i), i.setVisible(t)
                    }
                    getVisClassByValue(e) {
                        return this.get("visualSettings").classesSettings.classes.find((t => t.value === e))
                    }
                    setFeaturesBySources(e) {
                        let t = this.get("visualSettings").columnCode;
                        t = Et(t, Pt.langs);
                        const n = this.get("vectorSettings").clusterSettings;
                        for (const e in this.sources) this.sources[e].clear();
                        e.forEach((e => {
                            const a = e.get(t);
                            if (n.splitByCategories) a in this.sources ? this.sources[a].addFeature(e) : this.sources.default && this.sources.default.addFeature(e);
                            else {
                                const t = this.getVisClassByValue(a);
                                (null == t ? void 0 : t.checked) && this.sources.__noSplit.addFeature(e)
                            }
                        }))
                    }
                    createStruct() {
                        const e = this.get("visualSettings").classesSettings.classes,
                            t = this.get("vectorSettings").clusterSettings,
                            n = this.get("vectorSettings").clusteringEnabled;
                        if (this.getLayers().clear(), this.sources = {}, t.splitByCategories) {
                            for (const a in e) this.createSubLayer(e[a].value, e[a].checked, t, n);
                            if (this.get("visualSettings").classesSettings.defaultClass) {
                                const e = this.get("visualSettings").classesSettings.default.checked;
                                this.createSubLayer("default", e, t, n)
                            }
                        } else this.createSubLayer("__noSplit", !0, t, n);
                        this.setFeaturesBySources(this.features)
                    }
                    switchLayerSources(e) {
                        const t = this.get("vectorSettings").clusteringEnabled,
                            n = this.get("vectorSettings").clusterSettings;
                        t ? n.maxZoomEnabled && e > n.maxZoom ? this.getLayers().getArray().forEach((e => {
                            const t = e,
                                n = t.get("category");
                            t.setSource(this.sources[n])
                        })) : this.getLayers().getArray().forEach((e => {
                            const t = e,
                                n = t.get("category");
                            t.setSource(this.sources[`${n}.cluster`])
                        })) : this.getLayers().getArray().forEach((e => {
                            const t = e,
                                n = t.get("category");
                            t.setSource(this.sources[`${n}`])
                        }))
                    }
                    createImgLoader(e) {
                        return this.imgCache[e] = new Image, this.imgCache[e].crossOrigin = "anonymous", this.imgCache[e].promise = new Promise((t => {
                            this.imgCache[e].onload = function() {
                                t(1)
                            }
                        })), this.imgCache[e].promise
                    }
                    reloadLayerIcons() {
                        const e = this.get("visualSettings").classesSettings.classes,
                            t = this.get("visualSettings").defaultClass,
                            n = this.get("vectorSettings"),
                            a = [];
                        for (const t in e) {
                            e[t].icon && "" !== e[t].icon && null !== e[t].icon && void 0 === this.imgCache[e[t].icon] && a.push(this.createImgLoader(e[t].icon))
                        }
                        n.clusteringEnabled && null !== n.clusterSettings.icon && n.clusterSettings.iconEnabled && void 0 === this.imgCache[n.clusterSettings.icon] && a.push(this.createImgLoader(n.clusterSettings.icon)), t && t.icon && a.push(this.createImgLoader(t.icon));
                        for (const e in this.imgCache) this.imgCache[e].src = `${this.get("baseUrl")}${e}?r=${Math.floor(999999*Math.random())+1}`;
                        return Promise.all(a)
                    }
                    setFeatureStyle(e, t, n) {
                        const {
                            offset: a
                        } = n, i = this.imgCache[e];
                        a[0] += i.width / 2, a[1] += i.height / 2, t.push(new Le.ZP({
                            image: new gt.Z({
                                anchor: a,
                                anchorXUnits: "pixels",
                                anchorYUnits: "pixels",
                                opacity: 1,
                                img: i,
                                imgSize: [i.width, i.height]
                            })
                        }))
                    }
                    setClusterStyle(e, t, n, a, i) {
                        var s;
                        let {
                            offset: r,
                            scale: o
                        } = i;
                        const l = n.clusterSettings;
                        let c, d = 2,
                            m = 2;
                        null === (s = e.getSource()) || void 0 === s || s.getFeatures().forEach((e => {
                            var t, n;
                            d = Math.min(d, (null === (t = e.get("features")) || void 0 === t ? void 0 : t.length) || 0), m = Math.max(m, (null === (n = e.get("features")) || void 0 === n ? void 0 : n.length) || 0)
                        }));
                        const u = l.iconSizeMax - l.iconSizeMin,
                            p = parseInt(String(l.iconSizeMin + u * (i.size - d) / (m - d)));
                        if (null !== l.icon && l.iconEnabled ? (c = this.imgCache[l.icon], r = l.iconOffsetEnabled ? [-l.iconDx, -l.iconDy] : [0, 0]) : (c = this.imgCache[t], r = n.stylesPoint.iconOffsetEnabled ? [-n.stylesPoint.iconDx, -n.stylesPoint.iconDy] : [0, 0]), r[0] += c.width / 2, r[1] += c.height / 2, o = l.iconSizeEnabled ? p / c.width : 1, a.push(new Le.ZP({
                                image: new gt.Z({
                                    anchor: r,
                                    anchorXUnits: "pixels",
                                    anchorYUnits: "pixels",
                                    opacity: 1,
                                    img: c,
                                    imgSize: [c.width, c.height],
                                    scale: o
                                })
                            })), l.showObjectsCount) try {
                            o = 1 / (1 / window.devicePixelRatio);
                            const e = yt(i.size.toString(), o, wt);
                            a.push(new Le.ZP({
                                image: new gt.Z({
                                    anchor: [(wt.width / 2 - l.objectsCountDx) * o, (wt.height / 2 - l.objectsCountDy) * o],
                                    anchorXUnits: "pixels",
                                    anchorYUnits: "pixels",
                                    opacity: 1,
                                    imgSize: [e.width, e.height],
                                    img: e,
                                    scale: 1 / o
                                })
                            }))
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    setHighlightedStyle(e) {
                        var t;
                        const n = e.filter((e => !!e.getImage()));
                        let a, i, s, r;
                        if (n && n.length)
                            for (let o = 0; o < n.length; o++) {
                                a = n[o].getImage().getImageSize(), i = document.createElement("canvas"), s = 2, i.setAttribute("width", String(a[0] + 4)), i.setAttribute("height", String(a[1] + 4)), i.style.cssText = `\n                                width: ${a[0]+4};\n                                height: ${a[1]+4};\n                                `, r = i.getContext("2d"), r.shadowColor = "rgba( 0, 0, 0, 0.3 )", r.shadowOffsetX = 2, r.shadowOffsetY = 2, r.shadowBlur = 2, r.drawImage(n[o].getImage().getImage(devicePixelRatio), 2, 2);
                                try {
                                    bt(i, r, 1.06);
                                    const t = n[o].getImage().getAnchor().map((e => e + 2));
                                    e.push(new Le.ZP({
                                        image: new gt.Z({
                                            src: i.toDataURL(),
                                            scale: n[o].getImage().getScale(),
                                            opacity: 1,
                                            anchor: t,
                                            anchorXUnits: "pixels",
                                            anchorYUnits: "pixels"
                                        })
                                    }))
                                } catch (t) {
                                    n[o].getImage().setOpacity(.6 * n[o].getImage().getOpacity()), e.push(n[o])
                                }
                                null === (t = i.parentElement) || void 0 === t || t.removeChild(i)
                            }
                    }
                    setGroupStyle() {
                        const e = this.get("vectorSettings");
                        this.styleCache = {}, this.reloadLayerIcons().then((() => {
                            this.getLayers().forEach((t => {
                                const n = t,
                                    a = n.get("category"),
                                    i = this.getVisClassByValue(a);
                                n.set("categoryIcon", i.icon), n.setStyle(((t, i) => {
                                    const s = t.get("features") ? t.get("features").length : 1,
                                        r = !!t.get("highlighted"),
                                        o = [],
                                        l = e.stylesPoint.iconOffsetEnabled ? [-e.stylesPoint.iconDx, -e.stylesPoint.iconDy] : [0, 0],
                                        c = `${i}.${a}.${r?"1":"0"}`;
                                    if (c in this.styleCache) {
                                        if (this.styleCache[c][s]) return this.styleCache[c][s]
                                    } else this.styleCache[c] = [];
                                    return s > 1 ? this.setClusterStyle(n, n.get("categoryIcon"), e, o, {
                                        offset: l,
                                        size: s,
                                        scale: 1
                                    }) : this.setFeatureStyle(n.get("categoryIcon"), o, {
                                        offset: l
                                    }), r && this.setHighlightedStyle(o), this.styleCache[c][s] = o, o
                                }))
                            }))
                        }))
                    }
                    setLayerStyle() {
                        const e = this.get("vectorSettings");
                        this.styleCache = {};
                        const t = this.get("visualSettings").columnCode;
                        this.reloadLayerIcons().then((() => {
                            this.getLayers().forEach((n => {
                                const a = n;
                                a.setStyle(((n, i) => {
                                    const s = !!n.get("highlighted"),
                                        r = n.get("features") ? n.get("features").length : 1,
                                        o = [],
                                        l = e.stylesPoint.iconOffsetEnabled ? [-e.stylesPoint.iconDx, -e.stylesPoint.iconDy] : [0, 0],
                                        c = n.get("features") ? n.get("features")[0].get(t) : n.get(t),
                                        d = this.getVisClassByValue(c),
                                        m = r > 1 ? `${i}.${s?"1":"0"}_cluster` : `${i}.${s?"1":"0"}.${d.value}`;
                                    if (m in this.styleCache) {
                                        if (this.styleCache[m][r]) return this.styleCache[m][r]
                                    } else this.styleCache[m] = [];
                                    return r > 1 ? this.setClusterStyle(a, d.icon, e, o, {
                                        offset: l,
                                        size: r,
                                        scale: 1
                                    }) : this.setFeatureStyle(d.icon, o, {
                                        offset: l
                                    }), s && this.setHighlightedStyle(o), this.styleCache[m][r] = o, o
                                }))
                            }))
                        }))
                    }
                }
                var St = n(8575),
                    jt = n(7195);
                let Ot = "";
                class UtfGridController {
                    constructor(e, t, n) {
                        this.timeout = setTimeout((() => {}), 0), this.map = e, this.utfGridGroup = t, this.getTilesUrl = n
                    }
                    searchDataFromLayer(e, t, n, a) {
                        const i = e.getSource(),
                            s = e.get("mapCode"),
                            r = e.get("columns").map((e => e.split("."))),
                            o = e => {
                                if (Ot === t.join(":"))
                                    if (null !== e && "" !== e) {
                                        const n = r.find((t => {
                                                const [n, a, i] = t;
                                                return n === e.layer_id && a === e.layer && i in e
                                            })),
                                            i = Object.assign(Object.assign({}, e), {
                                                map_code: s,
                                                coordinate: t,
                                                column: n ? n[2] : null
                                            });
                                        a(i)
                                    } else a(null)
                            },
                            l = i.tileGrid,
                            c = l.getZForResolution(n, i.zDirection),
                            [d, m, u] = l.getTileCoordForCoordAndZ(t, c),
                            p = i.getTile(d, m, u, 1, i.getProjection()),
                            h = p.getData(t);
                        clearTimeout(this.timeout), h ? o(h) : p.getState() === jt.Z.LOADING ? this.timeout = setTimeout((() => this.searchDataFromLayer(e, t, n, a)), 100) : p.forDataAtCoordinate(t, o, !0)
                    }
                    createLayer(e) {
                        const {
                            id: t,
                            mapCode: n,
                            columns: a = [],
                            popupIds: i = [],
                            visibleUtfIds: s = []
                        } = e, r = new pe.Z({
                            visible: !1,
                            properties: {
                                utfId: t,
                                mapCode: n
                            }
                        });
                        this.utfGridGroup.getLayers().getArray().push(r), this.setDefaultUtfLayer(t, s, i, a)
                    }
                    setDefaultUtfLayer(e, t, n, a) {
                        const i = this.utfGridGroup.getLayers().getArray().find((t => t.get("utfId") === e));
                        i && (n && i.set("popupIds", n), a && i.set("columns", a), this.setUtfGridLayer(e, t))
                    }
                    setUtfGridLayer(e, t) {
                        const n = this.utfGridGroup.getLayers().getArray().find((t => t.get("utfId") === e));
                        if (!n) return;
                        const a = n.get("mapCode"),
                            i = n.get("popupIds") || [],
                            s = (n.get("columns") || []).map((e => e.split(".")[2])),
                            r = t.filter((e => i.includes(e))),
                            o = `${this.getTilesUrl(a,r.join(","),!0)}&grid=1&grid_fields=${s.join(",")}`,
                            l = new St.Z({
                                preemptive: !1,
                                tileJSON: {
                                    tiles: [o],
                                    grids: [o]
                                }
                            });
                        n.setSource(l), n.setVisible(r.length > 0)
                    }
                    searchData(e, t) {
                        Ot = e.coordinate.join(":");
                        const n = this.map.getEventCoordinate(e.originalEvent),
                            a = this.map.getView().getResolution();
                        if (!a) return;
                        const s = [...this.utfGridGroup.getLayers().getArray()].reverse(),
                            r = e => (0, i.mG)(this, void 0, void 0, (function*() {
                                const i = s[e];
                                if (!i) return void t(null);
                                i.getSource() && i.getVisible() ? this.searchDataFromLayer(i, n, a, (n => {
                                    n ? t(n) : r(e + 1)
                                })) : r(e + 1)
                            }));
                        r(0)
                    }
                }

                function Ct(e, t) {
                    return {
                        containers: t.filter((e => e.is_pub || "folder" === e.type))
                    }
                }

                function Nt(e, t, n) {
                    return e.map((e => e.containerId)).filter((e => n.includes(e)))
                }

                function Lt(e, t, n) {
                    return t.filter((e => n.includes(e.id))).map((t => {
                        var n;
                        const a = e.find((e => e.containerId === t.id));
                        let i = null;
                        const s = `${t.id}.${t.code}`;
                        return !(null == a ? void 0 : a.objectNameAutoChoose) && (null == a ? void 0 : a.objectNameColumnCode) ? i = `${s}.${a.objectNameColumnCode}` : (null === (n = t.visualSettings) || void 0 === n ? void 0 : n.columnCode) && (i = `${s}.${t.visualSettings.columnCode}`), i
                    })).filter((e => null !== e))
                }

                function Mt(e, t) {
                    return {
                        type: "Tile",
                        source: {
                            type: "XYZ",
                            url: t.meta.settings.url,
                            crossOrigin: "anonymous"
                        },
                        visible: t.selected,
                        properties: {
                            mapCode: e,
                            containerIds: [t.id],
                            external: !0,
                            className: "oms-layer"
                        }
                    }
                }

                function At(e, t, n, a, i, s) {
                    const r = function(e, t, n, a = !1) {
                        const {
                            baseUrl: i,
                            token: s,
                            tilesUrl: r,
                            pixelRatio: o,
                            projectId: l
                        } = n;
                        let c = a ? `${i}/tms/${l}/${e}/?layers=${t}&x={x}&y={-y}&z={z}${s}` : r.replace("{map_code}", e).replace("{layers}", t) + s;
                        return o > 1 && !a && (c += `&retina=${Math.round(o)}`), c
                    }(n, t.join(","), a);
                    return {
                        type: "Tile",
                        source: {
                            type: "XYZ",
                            url: r,
                            crossOrigin: "anonymous"
                        },
                        visible: t.length > 0,
                        properties: {
                            mapCode: n,
                            containerIds: e,
                            folderId: s,
                            interactive: i
                        },
                        className: "oms-layer"
                    }
                }

                function _t(e, t, n) {
                    var a;
                    const i = {
                        type: "Vector",
                        source: {
                            type: "Vector"
                        },
                        visible: t.selected,
                        className: "oms-layer",
                        properties: {
                            mapCode: e,
                            containerIds: [t.id],
                            containerCodes: [t.code],
                            vectorSettings: t.vectorSettings,
                            interactive: {
                                [t.id]: n
                            }
                        }
                    };
                    return (null === (a = t.vectorSettings) || void 0 === a ? void 0 : a.zoomsEnabled) && (i.minZoom = t.vectorSettings.minZoom - 1, i.maxZoom = t.vectorSettings.maxZoom), i
                }

                function xt(e, t, n) {
                    var a;
                    const i = {
                        type: "VectorCategory",
                        visible: t.selected,
                        className: "oms-layer",
                        properties: {
                            mapCode: e,
                            containerIds: [t.id],
                            containerCodes: [t.code],
                            vectorSettings: t.vectorSettings,
                            visualSettings: t.visualSettings,
                            interactive: {
                                [t.id]: n
                            }
                        }
                    };
                    return (null === (a = t.vectorSettings) || void 0 === a ? void 0 : a.zoomsEnabled) && (i.minZoom = t.vectorSettings.minZoom - 1, i.maxZoom = t.vectorSettings.maxZoom), i
                }

                function It(e, t, n) {
                    const {
                        mapCode: a,
                        settings: i,
                        isRoot: s = !1,
                        urlOptions: r
                    } = n, o = [], l = {}, c = {};
                    let d = [],
                        m = [];
                    if (e.reverse().forEach((n => {
                            if (n.parent_id in l ? l[n.parent_id].push(n) : l[n.parent_id] = [n], n.map_info) {
                                if (d.length > 0) {
                                    const n = `${a}.${d.join(",")}`,
                                        s = Nt(i, 0, d),
                                        r = Lt(i, e, d);
                                    t[n] = Object.assign(Object.assign({}, t[n] || {}), {
                                        visibleUtfIds: m,
                                        popupIds: s,
                                        columns: r
                                    })
                                }
                                d = [], m = [], c[n.map_info.code] = {
                                    mapCode: n.map_info.code
                                }
                            } else "folder" !== n.type && "external" !== n.type && (d.push(n.id), n.selected && m.push(n.id))
                        })), d.length > 0) {
                        const n = s ? `${a}.${d.join(",")}` : a,
                            r = Nt(i, 0, d),
                            o = Lt(i, e, d);
                        t[n] = Object.assign(Object.assign({}, t[n] || {}), {
                            visibleUtfIds: m,
                            popupIds: r,
                            columns: o
                        })
                    }
                    const u = e => {
                        if (!(e in l)) return [];
                        let t = l[e];
                        return t.forEach((n => {
                            if (0 === e && n.map_info) return void(c[n.map_info.code] && o.push({
                                type: "Group",
                                properties: c[n.map_info.code]
                            }));
                            if ("external" === n.type) return void(1 === n.meta.type && o.push(Mt(a, n)));
                            if (1 === n.render_type) {
                                const e = i.find((e => e.containerId === n.id)),
                                    {
                                        balloonEnabled: t,
                                        objectWindowEnabled: s
                                    } = e;
                                1 === n.style_mode && o.push(_t(a, n, {
                                    balloonEnabled: t,
                                    objectWindowEnabled: s
                                })), 3 === n.style_mode && o.push(xt(a, n, {
                                    balloonEnabled: t,
                                    objectWindowEnabled: s
                                }))
                            }
                            const s = n.id in l ? u(n.id) : [];
                            if (0 === e) {
                                let e = [],
                                    t = [];
                                if (n.id in l) {
                                    const n = s.filter((e => "folder" !== e.type));
                                    e = n.map((e => e.id)), t = n.filter((e => e.selected)).map((e => e.id))
                                }
                                "folder" !== n.type && (e.unshift(n.id), n.selected && t.unshift(n.id));
                                const c = "folder" === n.type ? n.id : null,
                                    d = {};
                                e.forEach((e => {
                                    const t = i.find((t => t.containerId === e)),
                                        {
                                            balloonEnabled: n,
                                            objectWindowEnabled: a
                                        } = t;
                                    d[e] = {
                                        balloonEnabled: n,
                                        objectWindowEnabled: a
                                    }
                                })), o.push(At(e, t, a, r, d, c))
                            } else s.length > 0 && (t = t.concat(s))
                        })), t
                    };
                    return u(0), o
                }

                function Tt(e, t, n, a, i, s) {
                    const r = {
                            [e]: {
                                id: e,
                                mapCode: e
                            }
                        },
                        o = Ct(0, n),
                        {
                            containers: l
                        } = o;
                    let c = [];
                    return c = s ? function(e, t, n) {
                        const {
                            mapCode: a,
                            settings: i = !1,
                            urlOptions: s
                        } = n, r = [], o = [], l = [], c = [], d = [], m = [], u = e.filter((e => "folder" !== e.type));
                        u.forEach((e => {
                            "external" === e.type ? d.push(e) : 1 === e.render_type ? (1 === e.style_mode && m.push(e), 3 === e.style_mode && m.push(e)) : (o.push(e.id), l.push(e.id), e.selected && c.push(e.id))
                        }));
                        const p = Nt(i, 0, l),
                            h = Lt(i, e, l);
                        t[a] = Object.assign(Object.assign({}, t[a]), {
                            visibleUtfIds: c,
                            popupIds: p,
                            columns: h
                        });
                        const g = u.filter((e => e.selected)).map((e => e.id)),
                            v = {};
                        return o.forEach((e => {
                            const t = (i || []).find((t => t.containerId === e)),
                                {
                                    balloonEnabled: n,
                                    objectWindowEnabled: a
                                } = t;
                            v[e] = {
                                balloonEnabled: n,
                                objectWindowEnabled: a
                            }
                        })), r.push(At(o, g, a, s, v)), m.reverse().forEach((e => {
                            const t = (i || []).find((t => t.containerId === e.id)),
                                {
                                    balloonEnabled: n,
                                    objectWindowEnabled: s
                                } = t;
                            1 === e.style_mode && r.push(_t(a, e, {
                                balloonEnabled: n,
                                objectWindowEnabled: s
                            })), 3 === e.style_mode && r.push(xt(a, e, {
                                balloonEnabled: n,
                                objectWindowEnabled: s
                            }))
                        })), d.reverse().forEach((e => {
                            1 === e.meta.type && r.push(Mt(a, e))
                        })), r
                    }(l, r, {
                        mapCode: e,
                        settings: a,
                        urlOptions: i
                    }) : It(l, r, {
                        mapCode: e,
                        isRoot: !1,
                        settings: a,
                        urlOptions: i
                    }), {
                        layersConfigs: c,
                        utfGridConfigs: r
                    }
                }
                class LayersController {
                    constructor(e, t, n, a) {
                        this.groups = [], this.tilesUrl = "", this.pixelRatio = window.devicePixelRatio, this.findVectorFeature = null, this.realVectorFeature = null, this.map = e, this.group = t, this.utfGrid = new UtfGridController(e, n, this.getTilesUrl), this.hover = a
                    }
                    setTilesUrl(e) {
                        this.tilesUrl = e
                    }
                    getTilesUrl(e, t, n = !1) {
                        const {
                            baseURL: a
                        } = Y.axiosInstance.defaults, i = Y.token ? `&token=${Y.token}` : "";
                        let s = this.tilesUrl && !n ? this.tilesUrl.replace("{map_code}", e).replace("{layers}", t) + i : `${a}/tms/${Y.projectId}/${e}/?layers=${t}&x={x}&y={-y}&z={z}${i}`;
                        return this.pixelRatio > 1 && !n && (s += `&retina=${Math.round(this.pixelRatio)}`), s
                    }
                    vectorLayersSearchFeature(e) {
                        var t, n, a;
                        const s = e,
                            r = this.map.forEachFeatureAtPixel(s.pixel, (e => {
                                const t = e.getProperties();
                                if (t.mapCode && t.layerId && t.layer && t.id || t.features) return e
                            }));
                        if (this.findVectorFeature && !r && (null === (t = this.hover.getSource()) || void 0 === t || t.clear(), null === (n = this.realVectorFeature) || void 0 === n || n.setStyle(void 0)), this.findVectorFeature !== r && (null === (a = this.findVectorFeature) || void 0 === a || a.set("highlighted", !1)), !r) return;
                        this.findVectorFeature = r;
                        const o = e => {
                                const t = e.getProperties(),
                                    {
                                        geometry: n,
                                        mapCode: a,
                                        layer: s,
                                        layerId: r,
                                        id: o,
                                        column: l
                                    } = t,
                                    c = (0, i._T)(t, ["geometry", "mapCode", "layer", "layerId", "id", "column"]);
                                return Object.assign({
                                    map_code: a,
                                    layer: s,
                                    layer_id: r,
                                    orbis_id: o,
                                    column: l
                                }, c)
                            },
                            l = r.getProperties().features;
                        return (null == l ? void 0 : l.length) > 1 ? {
                            coordinate: e.coordinate,
                            features: r.getProperties().features.map((e => o(e)))
                        } : 1 === (null == l ? void 0 : l.length) ? Object.assign({
                            coordinate: e.coordinate
                        }, o(l[0])) : Object.assign({
                            coordinate: e.coordinate
                        }, o(r))
                    }
                    geographySearchFeature(e) {
                        const t = e,
                            n = this.map.forEachFeatureAtPixel(t.pixel, (e => e), {
                                layerFilter: e => "clusterGeography" === e.getClassName()
                            });
                        return n ? {
                            column: "name",
                            name: n.get("name"),
                            coordinate: e.coordinate,
                            layer: "",
                            layer_id: "",
                            map_code: "",
                            orbis_id: 0
                        } : null
                    }
                    searchObject(e, t, n) {
                        const a = e => {
                                var n;
                                if (!e) return void t(null, !1, !1);
                                const a = (null == e ? void 0 : e.features) ? e.features[0].map_code : null == e ? void 0 : e.map_code,
                                    i = (null == e ? void 0 : e.features) ? e.features[0].layer_id : null == e ? void 0 : e.layer_id,
                                    s = this.groups.find((e => e.get("mapCode") === a)),
                                    r = null == s ? void 0 : s.getLayers().getArray().find((e => {
                                        var t;
                                        return null === (t = e.get("containerIds")) || void 0 === t ? void 0 : t.includes(Number(i))
                                    })),
                                    o = null == r ? void 0 : r.get("interactive")[Number(i)];
                                if (this.findVectorFeature && ((null == o ? void 0 : o.balloonEnabled) || (null == o ? void 0 : o.objectWindowEnabled)) && (this.findVectorFeature.set("highlighted", !0), !this.findVectorFeature.get("clone"))) {
                                    null === (n = this.realVectorFeature) || void 0 === n || n.setStyle(void 0), this.realVectorFeature = this.findVectorFeature;
                                    const e = this.hover.getSource();
                                    if (r instanceof ge.Z) this.hover.setStyle(r.getStyleFunction());
                                    else if (r instanceof OMSCategoryVectorLayer)
                                        for (const e of r.getLayersArray())
                                            if (e.getSource().hasFeature(this.findVectorFeature)) {
                                                this.hover.setStyle(e.getStyleFunction());
                                                break
                                            } const t = this.findVectorFeature.clone();
                                    t.set("clone", !0, !0), null == e || e.clear(), null == e || e.addFeature(t), this.findVectorFeature.setStyle(new Le.ZP)
                                }
                                t(e, null == o ? void 0 : o.balloonEnabled, null == o ? void 0 : o.objectWindowEnabled)
                            },
                            i = this.vectorLayersSearchFeature(e),
                            s = this.geographySearchFeature(e);
                        n ? i ? a(i) : this.utfGrid.searchData(e, a) : s ? a(s) : i ? a(i) : this.utfGrid.searchData(e, (e => {
                            e && (this.findVectorFeature = null), a(e || null)
                        }))
                    }
                    filterVectorLayer(e, t, n) {
                        const a = this.groups.find((t => t.get("mapCode") === e)),
                            i = null == a ? void 0 : a.getLayers().getArray().find((e => {
                                var n;
                                return null === (n = e.get("containerIds")) || void 0 === n ? void 0 : n.includes(t)
                            }));
                        if (i)
                            if (i instanceof OMSVectorLayer) {
                                let e = i.getSource();
                                e instanceof pt.Z && (e = e.getSource());
                                const t = i.fullFeatures.filter((e => null === n || (null == n ? void 0 : n.includes(e.get("id")))));
                                null == e || e.clear(), null == e || e.addFeatures(t)
                            } else if (i instanceof OMSCategoryVectorLayer) {
                            const e = i.features.filter((e => null === n || (null == n ? void 0 : n.includes(e.get("id")))));
                            i.setFeaturesBySources(e)
                        }
                    }
                    createVectorFeatures(e, t, n, a) {
                        var i;
                        const s = t.find((t => t.containerId === e.properties.containerIds[0]));
                        let r;
                        return (null === (i = e.properties.vectorSettings) || void 0 === i ? void 0 : i.popupColumn) && e.properties.vectorSettings.popupColumnCode && (r = e.properties.vectorSettings.popupColumnCode, r = Et(r, Pt.langs)), (n[e.properties.containerIds[0]] || []).map((t => new ue.Z(Object.assign({
                            geometry: new ht[t.geom.type](t.geom.coordinates),
                            mapCode: a,
                            layerId: e.properties.containerIds[0],
                            id: t.id,
                            layer: e.properties.containerCodes[0],
                            column: r,
                            columnName: null == s ? void 0 : s.objectNameColumnCode
                        }, t.fields))))
                    }
                    initVectorSource(e, t, n, a) {
                        const i = this.createVectorFeatures(e, t, n, a);
                        return new ve.Z({
                            features: i
                        })
                    }
                    createLayers(e, t, n, a, s, r) {
                        const o = this.map.getView().getZoom();
                        t.forEach((t => {
                            const {
                                type: l,
                                source: c,
                                properties: d
                            } = t, m = (0, i._T)(t, ["type", "source", "properties"]);
                            let u, p;
                            if (c) {
                                const {
                                    type: e
                                } = c, s = (0, i._T)(c, ["type"]);
                                switch (e) {
                                    case "XYZ":
                                        u = new Ve.Z(Object.assign({}, s));
                                        break;
                                    case "Vector":
                                        u = this.initVectorSource(t, r, n, a)
                                }
                            }
                            switch (l) {
                                case "Group":
                                    p = new he.Z(Object.assign({
                                        properties: d
                                    }, m)), this.groups.push(p);
                                    break;
                                case "Tile":
                                    p = new pe.Z(Object.assign({
                                        source: u,
                                        properties: d
                                    }, m));
                                    break;
                                case "Vector":
                                    p = new OMSVectorLayer(Object.assign({
                                        source: u,
                                        properties: Object.assign(Object.assign({}, d), {
                                            baseUrl: s.baseUrl
                                        })
                                    }, m)), p.switchLayerSource(Number(o));
                                    break;
                                case "VectorCategory": {
                                    const e = this.createVectorFeatures(t, r, n, a);
                                    p = new OMSCategoryVectorLayer(Object.assign({
                                        properties: Object.assign(Object.assign({}, d), {
                                            baseUrl: s.baseUrl
                                        })
                                    }, m)), p.setFeatures(e), p.switchLayerSources(Number(o)), p.setMap(this.map);
                                    break
                                }
                            }
                            p && e.getLayers().push(p)
                        }))
                    }
                    createRootLayers(e, t, n, a, i) {
                        this.group.set("mapCode", e), this.groups.push(this.group);
                        const s = {
                                baseUrl: Y.axiosInstance.defaults.baseURL || "",
                                token: Y.token ? `&token=${Y.token}` : "",
                                tilesUrl: this.tilesUrl,
                                projectId: Y.projectId,
                                pixelRatio: this.pixelRatio
                            },
                            r = function(e, t, n, a, i) {
                                let s = [];
                                const r = {};
                                [...n].reverse().forEach((t => {
                                    if ("external" !== t.type && "folder" !== t.type)
                                        if (t.map_info) {
                                            if (s.length > 0) {
                                                const t = `${e}.${s.join(",")}`;
                                                r[t] = {
                                                    id: t,
                                                    mapCode: e
                                                }
                                            }
                                            r[t.map_info.code] = {
                                                id: t.map_info.code,
                                                mapCode: t.map_info.code
                                            }, s = []
                                        } else t.is_pub && s.push(t.id)
                                }));
                                const o = Ct(0, n),
                                    {
                                        containers: l
                                    } = o;
                                if (s.length > 0) {
                                    const t = `${e}.${s.join(",")}`;
                                    r[t] = {
                                        id: t,
                                        mapCode: e
                                    }
                                }
                                return {
                                    layersConfigs: It(l, r, {
                                        mapCode: e,
                                        isRoot: !0,
                                        settings: a,
                                        urlOptions: i
                                    }),
                                    utfGridConfigs: r
                                }
                            }(e, 0, n, a, s),
                            {
                                layersConfigs: o,
                                utfGridConfigs: l
                            } = r;
                        this.createLayers(this.group, o, i, e, s, a);
                        for (const e in l) this.utfGrid.createLayer(l[e])
                    }
                    createInnerLayers(e, t, n, a, i, s) {
                        const r = this.groups.find((t => t.get("mapCode") === e)),
                            o = {
                                baseUrl: Y.axiosInstance.defaults.baseURL || "",
                                token: Y.token ? `&token=${Y.token}` : "",
                                tilesUrl: this.tilesUrl,
                                projectId: Y.projectId,
                                pixelRatio: this.pixelRatio
                            },
                            l = Tt(e, 0, n, a, o, s),
                            {
                                layersConfigs: c,
                                utfGridConfigs: d
                            } = l;
                        this.createLayers(r, c, i, e, o, a);
                        for (const e in d) {
                            const {
                                visibleUtfIds: t,
                                popupIds: n,
                                columns: a
                            } = d[e];
                            this.utfGrid.setDefaultUtfLayer(e, t, n, a)
                        }
                    }
                    syncSelected(e, t, n, a = !1) {
                        const i = this.groups.find((e => e.get("mapCode") === n));
                        let s = [];
                        const r = [...t].reverse().filter((t => {
                            if (t.map_info && s.length > 0) {
                                const t = `${n}.${s.join(",")}`;
                                this.utfGrid.setUtfGridLayer(t, e), s = []
                            } else "folder" !== t.type && "external" !== t.type && t.is_pub && s.push(t.id);
                            return e.find((e => e === t.id)) || "folder" === t.type
                        }));
                        if (s.length > 0) {
                            const t = a ? `${n}.${s.join(",")}` : n;
                            this.utfGrid.setUtfGridLayer(t, e)
                        }
                        null == i || i.getLayers().forEach((e => {
                            var t;
                            const a = e.get("containerIds");
                            if (!a) return;
                            const i = a.filter((e => r.find((t => t.id === e && t.selected))));
                            i.length > 0 ? (e.setVisible(!0), e.get("external") || e instanceof OMSVectorLayer || e instanceof OMSCategoryVectorLayer || null === (t = e.getSource()) || void 0 === t || t.setUrl(this.getTilesUrl(n, i.join(",")))) : e.setVisible(!1)
                        }))
                    }
                }
                var kt = n(188);
                const Zt = (e, t, n) => {
                        const a = new Image;
                        return a.src = e, a.width = t, a.height = n, a
                    },
                    Rt = (e = 1) => {
                        const t = Zt("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQ/klEQVR4nN1aW6htVRket7nW3seThiUIQaQYxtGojKQkDCSJgiwqNE8+1GNQQVEYgeCTRYWgPfXQ5UFMrECJXjK6+JIkKEYZitkFAiE4kZ7LXnOOS9/3/2OMNdc+e5/T8WwL2jrOnGtexvy/8d//f1hzwH+llItxuD7nfA2Ol5diLy+2vNoa8wbeNvrPX20p/zTWPo/rzzvnnsTlR621xw6SFnsQkwDQpTjclkr5MH5cU4rJAJDkDs6Ngip7fBt4jNOD8daUJ6z3D+HC/bjywvnSdV7gQPnbwaEvFWM/hPNYTAE+g1EEXANWCKzsAmcNAXWAAs5ah3OAtDg3P/HOfRPXnvivggPxV2J8PZdyIyiPmcCKAIuZHCM4/jbgoIAqCnDNvQrMEhjPAcp6nDknIE3gb1wMgPtzXPgyfj/7ioIDiQsQfydI/gyothgTOQY2xaIACbSCKmvOKSc3OFeROdM4BzAE6XgkKAynIHG0Beffgm7ehd/jgYMDgZdhPACqryaonDGKqeB43rmXFKCCwzPZVVbO5yOaTFYJMIqlcMqLWFauYQwV5ADUA1bi997723DtLwcGDnTdmAksg3MKZMyZwPKUGrAMkIZHgsuqe8rBblBK1TuKoun6RnwCEICcBy+9MyKOBBe8AHQAB4DWLjB28MRRXPzVeYMDRUdB4bcBjKs/gvJROZfHzkEBVaaULQBl4WCuYtnAqeKVCs7OjIkYkSaOEE0HYCV4ggNI4RgAQiQJbMB1HsnnT0Nmf3gm2sN/AOx7ALCqwFYElYRzhVzjtQnkQzSzcFDFs4qmSqOIptnDFahIWhlNJJ3NwRUbSvaDgISBAmJOQSnGPK7AeSxdyt/BhzwAPnDOnANRN4Cyh2ccI7BV6twDyERAhkBjIris4BKPEE8QgcfymcGBJbjLf72vogikEEenegZ9ww0c3YJc8xRN55Y4Xzrxju5j+4nonuCq8XgcRC5B7GoDWGpHgCqpcRAiCf0TEYXlzDlB62LiahvH5cGf4YorQPAAYKxa/uw8sXnqmYO+GYokxM8NXsSRAP3CeyPAAHS5C+CIF67by8icJpY096DgR6BouwIbmyiugWUR08jrvE8OmjxNCUYG+offAAaDgv+Swf8iVbSrM4NSuOwFzs345LP3ETzwJeAWaYIgQG+9S3B+kFO8l2yhqYHAGznmLHYIC7aVUrqPkrbbTeylc3di4qtAy45YxdJ1aw0wE7QCU4AwLonPCfdipIvAFwUgdM9UX7chMpk+LtsIXfPJ+AgbH3KiwQhgZnI+Axh4XKBjIAicpPGtwApBYYHg/oro7dU25zsw7R37iiUIuALjKbHlOe9gkTDSjoApeSdGA46lFZRqFbOAFGBTSgBuALxMsSQAq7qHl2MDlzRSqZ+VeIQngeDAM4lGIJr4BzoGsbRmgRPomeoaFHEJ8YMY+mUIBqLptiiWeBVHg+Ec7l+Lmf+0H+fubZGHOmixgFPl2DQXRY5JuJhGWBOCn2JU9xAplnQHkVwsclpajGlqdJIEocv8pxT6sxiKC8ggsE6OWllUOvmOsMmS3fQPKdEbWuGag1nNBRpbyhY+9A1M/5HTwIFj14Kw94KCnRZ1pOrHkkYjYz3votiAxQhuEnhM4ByeBSj8w/cj0NEtZBoT8XwER6NP8m12QwC9GexyYeAqgJNZ5M/RKXpJLlxz+ngD02gcCkSMQ6GKBBYY12IlQH95B+4/vptzX6n+qceKcq5RB/DUaCRRr1QU58AmHiOMChYg5jhOdA854xTal6vPq2JpJ3HjlEXYEYglJIrrBnsygHQFRw8HYJIkwJrwNYBxif4QKkgnkF2JtjLCwjdacUP5i3j2lg4OH34dxvsxxlkALCFVEa4JML4oVlGNB3SMojgDNqZIXRyBDAApnomcBjiqsDhzAUdOOMZaMP1Yeh+8H7KzaTFwESCSbc0JEGw1wOITbrjsEQVp/Em2wotgypBtia4GD9Cq9xEPFu/vjXNHNR/p+ZiGUIaArHJTOFHE3ItVpPGAjokoVmCrKa+ApnIVXMQ9/MYjWUSzBc81LKEBgPWAPAYsAMw+HcbguQBR1l1tvdh7R3eBWAVoYTitAiJtUE0CqzRb5pRDVs7d3cDd2iN6o6GTiGY2EivmLqKGL0fhCqyiGA8MFUWCysJFIBthUkcgn8ZC0Ux4h858HVtC0WAMfFgkFxCNJ5jC3BJaz8yOWQ7Y6DHwLQ9sAT+Ehh7mMY6F24CpEZopv47MSemjAo41D8x4FT47KsCej2WN7hV0EhFl5EFLCJAw97SKQDeN1LGJTpyA0rgzxRUGwMbx1FSEeYy0QYL6OoYfDEomcGCwA11PAy5mY2IgHX2Og482003EaM0EmYQ1hbE0LsL8Jw3QKRU2wYhmzazoBd3VxEXOvQcnVgCJ02xZ9Do3k0HSJKSSlRFRFRsvUle5CVFcKThwblrBT4w7K6qgiSvcBQ0CDgbOLYcACxkhe4surlYjaNHFkX4bAF0ZgnCJQYEPCboXrVnThSC70toYw99SwLme4K4RdavFnFoayJvnYsozLYOGVIbwxI9NamgijQd1jKJIjhHYyZOr1ckJYFdxjGTg5AScG0a3sxr81jIIMnNoCcWKMJ3QQ0friQGXRiPDbyRGYFC7wG+HDFb6XBqX9qCXWBCxvI3gjrSbpiaUfKhGg+shoa+TWJErFOugqW/mnvJHHaMokmMEduLUuDoBzKdOxYk8V7G0fns7D1wrYxbG7YzWLLfoEODsIIxZ55yg32BdosGA/siiBgbiTDSs67TlGe31yADtcoK7soZFmlAikONt8blmDVTA1sXBV+pkSTKiZu6jamRUHTORHBNgx6edF9M4nTg50gyaCw4tggA9DJwrxFAUUbyTI3XLy1ycU7OtpDmcSBexgCfFz9MooVVj13UhCqJ7hOAuakFKs1Z8oOpB6fd4LUuUQTMHG9mza1098WM0jY6JXaaOURTJMQI7fuKlnWPH86R+dTWYC15lzCnrDwUXVlNIw+Dk3Vzn2sjgWU9D+kps9HrGm84MU2l1myVEnl9EcIdnIMz8XES0WTEKrps/11eJ80n4IZYI4SWtIo2H6Bg4RI4R2HMvHNvh81dcerFhGnahX4gelu2k7zCpRxagoUwp9eM94Baxc3P6Sq/L7KadAuJmnPt/+7uQnDtuNmPMngZJwVRqOUbrU9M8RepFHikeS0glcf4CEXtyNPe0ijQe1DGKIjnGv4sPu0H0DvccAy88S9/HQpdGL/3TvXjb6GHAbXynwNZK2mm04+8lgvoXxmuUxkasEppEL/tLWhpAqgHF1/pwatUrVkKkyOMYedBB00jQ3B9ewJchaqSOURQ5GYFBJIftbUReSN3U5zl5l2UUztULthz4FgyJ4wKThkZPq6C5ugh2jYHjeAVnX2s07+dCSHUj62pZrQLr0MnECbkpaz7GtIXFODDLM1aEc4KfCoEOmn4s5SX0YGXMuPTUMVkqcQVhuMAPCz4zONZNAkyLD5xDAmonhVkWxVxb2BqVdnoayCxrbt1MmojjRYJ7BmdvtPXhVrvny7lyRQbrU1YiV8/SADNoSTSROuMCizoSBCNxGbaHnCTyoBGCH+MSLJdzJ54dOUZghwa/2NpaLLZxYQHGcw4BFnSE+i2uJL/NghILY3ZGW1v4VuxVLOUZgnsa44MqwaVVf2uJu51bFumkSiXFnIRciqUBGOgBkUQC75i2MLpfiM+rGQAjDzhoih3NvVhFMw+/TCCwJRR1QAy9AMN5mXMxxxsYXyOZZRnCC78JUEuBVI9NGtfnVUefJbin1qkF8/mu07VIqjV81hURtwVWqVjMaaUBwVUmyBQCYKQtjO6b+2BIxciDDpp+7LTAGe+SYwS2NYQF3l2AbUOQ0h6VL/Abtb7iBSBLgKSl0bVueYkV8Nrn4xfckwT3C7LMMl3vD2uvjDFsRlTOa/wYFkzKbz4jzGMxp2B1S8H/SK+GGgb1foDVWNEnj+Aw0UGLDxRsCzUe0DGKIjlGYEAmRSEoIdYCugjgQYSTRVoTuBpW9TGsGybOtw7RWlSFhkfZIjqGhX4axzdZscngkLwEimnIs2kdF5YPpa7IlUUIlFjMkZoHSwNIlDXRVLvLlWEQDB0M0bVkdWuWrIZZskpRBCBPcI6VLuADMKt9AlbE+E1+m0XbRo/2FUhf5aT29sjBPxJX82/3AflXlb2l9cek2yIcK7XEXexgmE0gQYTFlCpVT5XEVUZJNJmPNYs3nK3M4LTMQOLJMQJb+LDECg6BoINbaKmP4A3FdXCtA+TIDBds7+mpiOLHg2bmvNmDvqt2NPmQvJzJfoPJMnRLJnMDK8FSME1GI3NbajFHp6NRKlRFsJZpCwLM2GLFXiAy6wKRWFspOdogokiOARhYuQwsn1snNUwIH+yPkzK7mks2SszQWl12PWhMftDBsZiCj/8Ulz/AB4vUKPSlIr0yTCrt4Jy1xN0icuaF+MUUNnh1RKwCR1mPOOEMSlij+10VZ+3s0Ed6sYr0jUFFUTgGYIEAPYxtLc5iNaR/IDoHSystLgXEhkkVV/Mz4plzjn934eZNBNa6mYxBQGpSYEZ0y0s672o0bnTTAsUcyQLBseYBRYVCDmlgUdbtU5TVsjNlyou5pz/zTrqpIorgDoFBLQVYqJXn2vlZVPHUZknnmkje1xqgMFvJ32J1H8GDN7DgIpVf6xgkSn8MKisJrTQlJAm2UgnWgmkSW8TAgcUc1jykDCG9NqaF7rzL6bWkvqgdn8Frl1W7rtZog9LaXxPHaeDq3+dw8yk+TI5JbUKMBrXGwXtn6bZoU8JoibuGO6wr0sHzqWSN1DykNMAMmiYobPbEc5aQw7XIQ/wYVl58HAn20sbqHPPaWZVWFnt1wkFec7VfLu7Mfnb+jQ1wuPkMuHc3lPR2xxawlXRdO5rCMWkjiXFUP59ridtIwZR1RfpBycd90JoH2ColnrRL5wZ5za4jDzpoJ66GVpHGQ3Ssc2zdm+tNSOWWHDHVPaD/uY1v7OKc9OdweAzHN0NTds67+aiN/7Jn81GjeH+ezUceER/b687an+MDAHYrjo+BgENGiTLUL2mU1v4YmCndFo07s1PLXqQMx7oiFVGqVK1t7I2Wofg32Jqq7N82bq5HjAc5uXfbmOJ5CjR8fK/9KXs2/Kt43oqXH2JzXQz/GqA0/pjpsI0kNpRNCVaBrVaCWTDtDX/r1sUcv/mZ3vD384a/bRHIYNX/qfHoRwHZgHF1P7FbHPcVy10iehSH++qWjLaj4QxbNVjibpXg9VYNjWBqZdTUTVHGmHU8ON+qIWLJmH84w1YNAiPAT+Gd+/ej/4xbNfgi6cEk360ctGL9eYmBd8mtP8YeAveP9E02Wgl+RTbZDJrAnRnYWTk34+CNOPy46CaANceKkWZIb3m1BoqGWue8PaomnutNbVU8+/YotY4jrt+M8cjZ6D6XvV9X4PAgKHyL9uzKDNhpG9vSvNxteolu48O2ymdPiCUP23tj21CrR3/AM7fsp2MvG1wFuG10x8AXcO4VXN+SGFsLrGgZtdXutYpdp5h/VwtmWtaoSXJPW2xLazRmpHm+B6/cuZdVPBBwM5BHcLgX44bcO5obm0nbXstz2Uzq7GZmHar1/CWe+Tx+P32udJ7vTtl34XA7xk2l744tfceeVrr7JtLTtkc1YLVq5Vp2XSsBD+M+d8r+5uXSd5B7nD+JcTPGW2fmv7SWUnt087vW9qqbcu53OGei+X37v97jvNcf0FyCw7sx3olxWR2vx7hk9tg/MP6G8ec6HsNgRH+gu9P/DUkLfMmydUDWAAAAAElFTkSuQmCC", 55, 55),
                            n = Zt("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAHDUlEQVR4nN2aW3PjNgyFoVh2ssluM9OX/v9f13ams226SXyTrBIJj3V0DFK2k76sZjDUlcQngCAFqrH/YRuG4SYVbZJFkmUuIb7t/LYkXZJ9kr5pmu6z9Wg+q6IE5IrfJfmS5Nbe4W6ovJFHDlm6XDrwOslrkn2CHT6q04fgEpA/7yD39g61yuLWam0EayyGG2wEdLg+ly5PSV4T5OFa/a6GS2AO9c3eodxifsxgcEdYjQEZzMWh3D3hphsqHfL5GsiL4bL7OdSDvVvsluBuCQplQ5C8AWqwEQ7lNssmly9JvifAzSW6theCOcSjjW7I7giwVYZBQAFgyS37LLCal3cZ6jaXXu9tat+t+Pe5/fEsuNy3vib5JQM9ZCi45Mri/qZuCU8Z7NQtOwLc2fjCNja+NK9zlfT565zoOguXwdwNHzMgwO5t2tdgOQ0msFwEB8shqAAOrrkL6nyTpNefCXB/NVwA9i1DAQxhn62mcAw4qZ7AIrglwfE4Cfdukn5/1ACLcAWwrzb2M4DBLZci7JK1cU4jJoQj7kLqw/ZbBgxdtGa5OwJiMIbT/oZ+gWjJYLU+d7DRWhjz2lxyUIqie5dd9CTIhHDpZj/PwePepmDc3yLLcaSMBnHuc7AawPY2RlueBCgYu7O/hO+zcHleCCtx8Pgi+zy2aZ9biETKcUDh4UAjbUMlPzuJsknvVx0HI8vd2TTUc/AAFIQjZTQMXDIU8HCwkGdKURbPuOV+TYC/s3tO4LLV1AU5KrK1VFob+xzDnTMUQKL7+Rkd+DUIeWz49wQuR0cA3dqp66FvqcXYLRHhIrhzZihzlmZ3ZDDMZh4Tx3EeypZrSPkoCqoomLolD+I1t8RYt8iAGu4VDK7L7WK65uIGelY4VwxWY8W5P3F5nA5ZOVryQF7rc53cx5u+iBUBum470tfbduu9eN97g6PvMrYKwywrx21wHAWVmuVusrIaVQ+5TrhvZ6M7qk7oOut8vIPl4JKr4CG1iE6xloUyipi8wWrnRlPU3c3o5XrfMxzIGYoH0lbO6TWVUlBR5WG1m+AaQ/U2fWHat1U3717/tNklo7etCkfJnoXNA2sEBIBaTcEAxUMEdNgH7bDl/LNo0doYpjljFU1WeYYf3aPPlvodw/XBOQYrtVXT55iYgltGnygL2r+R/UVQcQlcrWcEEYEBOqo7AuNPKjbSUi3X0I1NUEkj1/S+qFEdEhiOwRY27YNaf6QTX9O56JLHOW5c+0IjD5Yg9T6W1qZwnZ2CaF0lidrUdhvAIRMMMGwc4XQMiq6VFGFAs9NB+5y65nRQ3Vsde36m7Wi5nk5y8hOhWfdL1yLhQIF0AJ8bzqxrTgfVvWvlwkH2udKDlMPMseZI4IoKd6jUXXth0Quc7LfSGGYN0fSnBqVKIurxOBZFy57q7i0GLrXVyzXW8e16mw8wy55rVM/1wb2YAOugXRrEIynVHWXMFPSYV1HLdYWGtMLonii0M0h0jl+I5lJqbdX0OT4LyyFH38lNnZzHp0ZUYfTZwgN0aeIctdfbqT789R3ph69yLIF1rX/Upc0vbuliVAHnFTktUEsN8NutWS5SViH1Jatuk+89TzW01BiI+Q3wmhnvX5rdmvtYjV4kl9F5FrWcf7Aaw2HhYZf37+h4SQ/yZJhnIEZ16WfLOWkGXsZipXdyrnSM9bxdLt/hyDWd+N7GZMuKSlSks/ydTTcFOzdBpBY69h2betXOpkZAiW61Tjz9EY4aBDVSe1yJJn10Xmd2GsUuSe3pAiS3zV4VQW5IXtGAwrnlkNpDokVT5NFkF8quArBLkrKwHCzGYOp2urS8zTpvT+Cyaw6ZnBcSNbUQDdCDTbNUDHduAojhYBl1O4ZZ53383uHyo5hO9/CZ+LDArktScxaAkhgurlkI4SyyuiXcbk1gr3TsucotNxAthAwZDvl/XXHh+yZzORvf/NwSlgXPRtGSXVBhsP+S938oyAlctp7lmzW3oi8ByiG9zYM7Fh9rFucAxAPxzk4DBkNBHMxT50+IkFU4AtxmwOiDthQMOBO8t+lcszRD4X6ngzNbjuGes25ePpf+T6ktG3uDL4XzOmHVLHCUTYv6HE+ES3NEDh7HwJHBnnIZbkW4HD0jQAWDIlhrKK3ymJWHgghOhwDuYwD7Ufvhpma5CDCaSewzFH6M+ayfbKL+xsGjCjYLFwAyGM/xPuv3qJ7qheU4MgJsfc4vUtoPqlteVnZlH6z+Y1tp4K/B1X5sO0bGS346vQiOABub/mepvyTCepx5NgJEIkpTCjxvBBwstrn0t8SL4bARJP7a++jPpNrf1rm8+ofSq+F8y8tfEAfhpebjaovFkwAeAlByhHTQ4SO/A38IjrcAFDMUXiOAe2I2wXDbfP5DQLx9GhxvBFprZ5I5/iwg3v4DXynYVysZP90AAAAASUVORK5CYII=", 55, 55);
                        return [new Le.ZP({
                            fill: new Me.Z({
                                color: "rgba(255,255,0,0.4)"
                            }),
                            stroke: new Ae.Z({
                                color: "rgba(255,255,255,1)",
                                width: 2
                            })
                        }), new Le.ZP({
                            image: new gt.Z({
                                img: t,
                                imgSize: [55, 55],
                                size: [55, 55]
                            })
                        }), new Le.ZP({
                            image: new gt.Z({
                                img: n,
                                imgSize: [55, 55],
                                size: [55, 55],
                                opacity: e
                            })
                        })]
                    };
                class SysLayerUtils {
                    constructor(e, t) {
                        this.sysLayer = new ge.Z({
                            source: new ve.Z
                        }), this.searchLayer = new ge.Z({
                            source: new ve.Z
                        }), this.map = e, this.group = t, this.group.getLayers().push(this.sysLayer), this.group.getLayers().push(this.searchLayer)
                    }
                    animation(e, t) {
                        const n = (new Date).getTime(),
                            a = () => {
                                ((n = 0) => {
                                    t.setRotation(n), e.setStyle(new Le.ZP({
                                        image: t
                                    }))
                                })(6.28 * (((new Date).getTime() - n) / 1e3)), this.rafId = requestAnimationFrame(a)
                            };
                        this.rafId = requestAnimationFrame(a)
                    }
                    showLoader(e) {
                        var t;
                        this.hideLoader();
                        const n = Zt("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4yMreRF30AAAIOSURBVFhH7ZZRTsJAEIZ7hB6hR+AIPQJHaARFQWPVKBqNMUYflQgKKGglRKNPHMEjcAh2W9QHj4D/4GwoFLUVqD74JRvI7G5ndnZmdrRJOXx4TvDfeFm5lEaq2HmbO+v05kuizeL4WL2SNilX4/gxZk8slUVCKSdPsDjApuMZdk1GN45cjI+b+VtPZ1EAMmKt7torVWmwaAh4yVFGYm37pPXy6bcCqPtNFzstFkViCydXytXIVoTF098DA/qbYMATiyJBbh81YPFC2Dz9PQvnIolNB+RmFkWG3K6Up0udt91md+xVzYzT1querUiLTh678n/+HHvNboJSerkqqXA9rdfdJE/NnvW61DMXol9XfFnRgxEmL9G0XEWQhT2k36dl9aes1VzLr1wN6CrwEk3LloVJQjKCRVNj49oderjUQJ1weMkHEJi4o6m/armKNPBkBwzAGxK+NE/K5o1rqfeFyjweqoH74+Qo7r7hV0GvYCK4C7mqdODy+O6bQOQXUiNBByPC947b6ITwig0KRQS2G55B6exX7jMinCeobNIGpE/4JoLJO97YvKdB18HLviaDKkXpQo0Ji0KDdmxs5aOB/mD26bd/19XhuaHaT4NiYqj+Two+ai6WBV1VoNvZaXiW3wiKCQpMnp4OCNJ+nKB8j42Tg/uubtfcJE5twaDpt2R0clKO3/D9/j9/C017B5KcuygqCD8pAAAAAElFTkSuQmCC", 32, 32),
                            a = new ue.Z({
                                name: "loader",
                                geometry: new kt.Z(e)
                            }),
                            i = new gt.Z({
                                img: n,
                                imgSize: [32, 32],
                                size: [32, 32]
                            });
                        this.animation(a, i), null === (t = this.sysLayer.getSource()) || void 0 === t || t.addFeature(a)
                    }
                    hideLoader() {
                        var e, t;
                        const n = null === (e = this.sysLayer.getSource()) || void 0 === e ? void 0 : e.getFeatures().find((e => "loader" === e.get("name")));
                        cancelAnimationFrame(this.rafId), n && (null === (t = this.sysLayer.getSource()) || void 0 === t || t.removeFeature(n))
                    }
                    animationHighlight(e) {
                        let t = 0,
                            n = 1;
                        const a = () => {
                            t >= 1 && n > 0 ? n = -1 : t <= 0 && n < 0 && (n = 1), t += .02 * n, t < 0 ? t = 0 : t > 1 && (t = 1), e.setStyle(Rt(t)), this.rafHighId = requestAnimationFrame(a)
                        };
                        this.rafHighId = requestAnimationFrame(a)
                    }
                    showHighlight(e) {
                        var t, n;
                        this.hideHighlight();
                        const a = (new Ee.Z).readFeature(e);
                        a.setStyle(Rt()), a.set("name", "highlight"), null === (t = this.sysLayer.getSource()) || void 0 === t || t.addFeature(a), "Point" === (null === (n = a.getGeometry()) || void 0 === n ? void 0 : n.getType()) && this.animationHighlight(a)
                    }
                    hideHighlight() {
                        var e, t;
                        const n = null === (e = this.sysLayer.getSource()) || void 0 === e ? void 0 : e.getFeatures().find((e => "highlight" === e.get("name")));
                        cancelAnimationFrame(this.rafHighId), n && (null === (t = this.sysLayer.getSource()) || void 0 === t || t.removeFeature(n))
                    }
                    showSearchObject(e, t) {
                        var n;
                        const a = new ue.Z(e);
                        a.set("id", t), a.setStyle(Rt()), null === (n = this.searchLayer.getSource()) || void 0 === n || n.addFeature(a)
                    }
                    hideSearchFeature(e) {
                        var t, n;
                        const a = null === (t = this.searchLayer.getSource()) || void 0 === t ? void 0 : t.getFeatures().find((t => t.get("id") === e));
                        a && (null === (n = this.searchLayer.getSource()) || void 0 === n || n.removeFeature(a))
                    }
                    clearSearch() {
                        var e;
                        null === (e = this.searchLayer.getSource()) || void 0 === e || e.clear()
                    }
                }
                n(6290);
                const Pt = new class MapCore {
                    constructor() {
                        this.baseLayer = new pe.Z({
                            className: "base-layer"
                        }), this.pkkLayersGroup = new he.Z({
                            visible: !1
                        }), this.measureLayer = new ge.Z({
                            className: "measure"
                        }), this.omsLayersGroup = new he.Z, this.utfGridLayersGroup = new he.Z, this.pointOnViewport = !0, this.tooltip = null, this.sysGroup = new he.Z, this.geographyLayer = new ge.Z({
                            className: "clusterGeography"
                        }), this.hoverLayer = new ge.Z({
                            source: new ve.Z
                        }), this.langs = [], this.map = new ce.Z({
                            layers: [this.baseLayer, this.utfGridLayersGroup, this.sysGroup, this.omsLayersGroup, this.pkkLayersGroup, this.geographyLayer, this.measureLayer, this.hoverLayer],
                            view: new de.ZP({
                                center: (0, G.mi)([78.133713, 60.397371]),
                                zoom: 4,
                                constrainResolution: !0
                            }),
                            controls: [new fe.Z],
                            interactions: (0, ye.c)().extend([new be.Z({
                                constrainResolution: !0
                            })])
                        }), this.mapEvents = new MapEvents(this.map), this.widgets = new Widgets(this.map, this.mapEvents, {
                            measure: this.measureLayer
                        }), this.baseMaps = new BaseMaps(this.map, this.baseLayer, this.pkkLayersGroup), this.layersController = new LayersController(this.map, this.omsLayersGroup, this.utfGridLayersGroup, this.hoverLayer), this.sysLayer = new SysLayerUtils(this.map, this.sysGroup), this.geographyLayer.setSource(new ve.Z)
                    }
                    setDefaultParam(e, t, n, a, i) {
                        this.map.setTarget(e), this.map.getView().setZoom(t), this.map.getView().setCenter(n), this.map.getView().setMinZoom(a), this.map.getView().setMaxZoom(i)
                    }
                    showTooltip(e, t) {
                        if (this.tooltip) return;
                        this.tooltip = new me.Z({
                            autoPan: !1,
                            positioning: "top-left",
                            offset: [10, -40]
                        });
                        const n = document.createElement("div");
                        n.className = "popup-tooltip", n.innerHTML = t || "", this.tooltip.setElement(n), this.tooltip.setPosition(e), this.map.addOverlay(this.tooltip)
                    }
                    setTooltipPosition(e, t) {
                        var n;
                        this.tooltip && (null === (n = this.tooltip.getElement()) || void 0 === n || (n.innerHTML = t), this.tooltip.setPosition(e))
                    }
                    hideTooltip() {
                        this.tooltip && (this.map.removeOverlay(this.tooltip), this.tooltip = null)
                    }
                    onContainersInteraction(e = (() => {})) {
                        this.mapEvents.onClick("onContainerClick", (t => {
                            this.layersController.searchObject(t, ((t, n, a) => {
                                t && (n || a) && e(t)
                            }), !0)
                        })), this.mapEvents.onPointerMove("onContainerHover", (e => {
                            this.layersController.searchObject(e, ((t, n, a) => {
                                if (t && this.pointOnViewport) {
                                    if ((n || a) && (this.map.getTarget().style.cursor = "pointer"), t.features) return this.hideTooltip();
                                    const i = t;
                                    if (!i[i.column]) return this.hideTooltip();
                                    this.tooltip ? this.setTooltipPosition(e.coordinate, i[i.column]) : this.showTooltip(e.coordinate, i[i.column])
                                } else this.map.getTarget().style.cursor = "default", this.hideTooltip()
                            }))
                        }))
                    }
                    fitToExtent(e, t) {
                        const n = Object.assign({
                            maxZoom: 20
                        }, t || {});
                        this.map.getView().fit(e, n)
                    }
                    showGeography(e, t, n, a) {
                        var i, s;
                        if (this.hideGeography(), "Point" !== e.geom.type) return;
                        const r = [],
                            o = [],
                            l = new Ee.Z,
                            c = (0, G.vs)(e.geom.coordinates, "EPSG:3857", "EPSG:4326");
                        t.forEach((e => {
                            const t = l.readFeature(e.geom);
                            t.set("name", e.fields.name), r.push(t);
                            const n = (0, G.vs)(e.geom.coordinates, "EPSG:3857", "EPSG:4326"),
                                a = new GreatCircle({
                                    x: c[0],
                                    y: c[1]
                                }, {
                                    x: n[0],
                                    y: n[1]
                                }).Arc(100);
                            o.push(new ue.Z(new we.Z(a.geometries[0].coords).transform("EPSG:4326", "EPSG:3857")))
                        })), this.geographyLayer.setStyle((e => [{
                            "circle-radius": 8,
                            "circle-fill-color": e,
                            "circle-stroke-color": "#fff",
                            "circle-stroke-width": 1
                        }, {
                            "stroke-color": e,
                            "stroke-width": 1.5
                        }])(n)), null === (i = this.geographyLayer.getSource()) || void 0 === i || i.addFeatures([...r, ...o]);
                        const d = null === (s = this.geographyLayer.getSource()) || void 0 === s ? void 0 : s.getExtent();
                        d && this.fitToExtent(d, {
                            duration: 300,
                            padding: a ? [0, 0, 0, 800] : [0, 0, 0, 0]
                        })
                    }
                    hideGeography() {
                        var e;
                        null === (e = this.geographyLayer.getSource()) || void 0 === e || e.clear()
                    }
                };
                class MapService extends Service {
                    getReducer() {
                        return {
                            map: le
                        }
                    }
                    static * setMapZoom(e) {
                        yield(0, f.gz)(oe.setZoom(e.payload))
                    }
                    static * setMapPosition(e) {
                        yield(0, f.gz)(oe.setPosition(e.payload))
                    }
                    static * setBaseMap(e) {
                        yield(0, f.gz)(oe.setBaseMap(e.payload))
                    }
                    static * setCadastre(e) {
                        yield(0, f.gz)(oe.setCadastre(e.payload))
                    }
                    static * setMaps(e) {
                        yield(0, f.gz)(oe.setMaps(e.payload))
                    }
                    static * setBalloon(e) {
                        yield(0, f.gz)(oe.setBalloon(e.payload))
                    }
                    static * setHighlight(e) {
                        yield(0, f.gz)(oe.setHighlightGeom(e.payload))
                    }
                    static * fitToExtent(e) {
                        yield(0, f.gz)(oe.setFitExtent(e.payload))
                    }
                    static * setGeography(e) {
                        yield*(0, f.gz)(oe.setGeography(e.payload))
                    }
                    static * printMap() {
                        const e = yield*(0, f.Ys)((e => e.map.baseMap)), t = (yield*(0, f.Ys)((e => e.app.config.publication.base_maps))).find((t => t.id === e));
                        document.body.classList.add("print"), Pt.map.updateSize();
                        const n = () => {
                            (null == t ? void 0 : t.value.includes("yandex")) ? Pt.baseMaps.yaMap.syncPrint(): (null == t ? void 0 : t.value.includes("google")) && Pt.baseMaps.gooMap.syncPrint()
                        };
                        setTimeout((() => {
                            n(), window.print(), setTimeout((() => {
                                document.body.classList.remove("print"), Pt.map.updateSize(), n()
                            }), 300)
                        }), 200)
                    }
                    static * getMapConfig(e) {
                        try {
                            const {
                                data: t
                            } = yield*(0, f.RE)(X, e);
                            return {
                                code: t.code,
                                name: t.name
                            }
                        } catch (t) {
                            return {
                                code: e,
                                name: ""
                            }
                        }
                    }
                }(0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], MapService, "setMapZoom", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], MapService, "setMapPosition", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], MapService, "setBaseMap", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], MapService, "setCadastre", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], MapService, "setBalloon", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], MapService, "setHighlight", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], MapService, "fitToExtent", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], MapService, "setGeography", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", []), (0, i.w6)("design:returntype", void 0)], MapService, "printMap", null);
                const {
                    instance: Ft,
                    actions: Ht
                } = C(MapService);
                var $t = n(2599);
                const Vt = (e, t, n) => {
                        const a = {},
                            i = {};
                        return e.forEach(((e, s) => {
                            const r = "number" == typeof n || "string" == typeof n ? `_${n}` : "",
                                o = Object.assign(Object.assign({}, e), {
                                    id: `${t}_${s}${r}`,
                                    settings: e.settings || {},
                                    values: e.values || []
                                });
                            if (o.settings.colors) {
                                const e = {};
                                for (const t in o.settings.colors) e[l.ZP.t(t)] = o.settings.colors[t];
                                o.settings = Object.assign(Object.assign({}, o.settings), {
                                    colors: e
                                })
                            }
                            if (o.settings.icons) {
                                const e = {};
                                for (const t in o.settings.icons) e[l.ZP.t(t)] = o.settings.icons[t];
                                o.settings = Object.assign(Object.assign({}, o.settings), {
                                    icons: e
                                })
                            } ["list_text", "select", "range"].includes(e.type) && (o.value = [], i[o.id] = new Set), "rates" === e.type && (o.value = [], i[o.id] = new Set), "text" === e.type && (o.value = ""), "boolean" === e.type && (o.value = !1), a[o.id] = o
                        })), {
                            filtersObj: a,
                            valuesObj: i
                        }
                    },
                    Ut = (e, t) => {
                        const n = [];
                        for (const a in e) {
                            const i = Object.assign({}, e[a]),
                                s = t[a] ? Array.from(t[a]).filter((e => null !== e && "" !== e)) : [];
                            if (["list_text", "select"].includes(i.type)) {
                                if (0 === i.values.length) {
                                    t[a] || (i.values = []);
                                    const e = new Set;
                                    s.forEach((t => {
                                        t.split(";").forEach((t => e.add("string" == typeof t ? t.trim() : t)))
                                    })), i.values = Array.from(e).map((e => i.settings.translate_values ? l.ZP.t(e) : e))
                                } else i.values = i.values.map((e => "string" == typeof e ? l.ZP.t(e) : e));
                                e[a].values.length || (i.values = i.values.sort(((e, t) => (null == e ? void 0 : e.toString().localeCompare((null == t ? void 0 : t.toString()) || "")) || 0)))
                            }
                            if ("range" === i.type) {
                                const e = [s[0], s[0]];
                                s.forEach((t => {
                                    t < e[0] && (e[0] = t), t > e[1] && (e[1] = t)
                                })), i.values = e, i.value = i.settings.range ? i.values : [i.values[1]]
                            }
                            if ("rates" === i.type)
                                if (0 === i.values.length) {
                                    t[a] || (i.values = []);
                                    const e = new Set;
                                    s.forEach((t => {
                                        t.split(";").forEach((t => e.add("string" == typeof t ? t.trim() : t)))
                                    })), i.values = Array.from(e).map((e => i.settings.translate_values ? l.ZP.t(e) : e))
                                } else i.values = i.values.map((e => "string" == typeof e ? l.ZP.t(e) : e));
                            n.push(i)
                        }
                        return n
                    },
                    Bt = e => {
                        const t = Object.assign({}, e);
                        return ["list_text", "select", "rates"].includes(t.type) && (t.value = []), "range" === t.type && (t.value = t.settings.range ? t.values : [t.values[1]]), "text" === t.type && (t.value = ""), "boolean" === t.type && (t.value = !1), t
                    },
                    Gt = e => e.filter((e => {
                        var t;
                        return "range" === e.type ? e.settings.range ? e.value.toString() !== (null === (t = e.values) || void 0 === t ? void 0 : t.toString()) : e.value[0] !== e.values[1] : "boolean" === e.type ? e.value : e.value.length > 0
                    })),
                    Dt = (e, t, n) => {
                        let a = t;
                        return n && (a = a.filter((e => n.includes(e.id)))), a.filter((t => {
                            for (const n of e)
                                if ("rates" === n.type || n.settings.likeRates) {
                                    if (!(t.fields[n.column] || "").split(";").map((e => e)).find((e => n.value.includes(e.trim())))) return !1
                                } else if (["list_text", "select"].includes(n.type)) {
                                if (!n.value.includes(t.fields[n.column])) return !1
                            } else if ("range" === n.type) {
                                const e = t.fields[n.column];
                                if (n.settings.range) {
                                    if (e < n.value[0] || e > n.value[1]) return !1
                                } else if (e > n.value[0]) return !1
                            } else if ("text" === n.type) {
                                if (!String(t.fields[n.column]).toLowerCase().includes(n.value.toLowerCase())) return !1
                            } else if ("boolean" === n.type && n.value && (!t.fields[n.column] || t.fields[n.column] === l.ZP.t("Нет"))) return !1;
                            return !0
                        })).map((e => e.id))
                    },
                    Wt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    zt = [0, 32, 48, 56],
                    Yt = e => {
                        let t = "",
                            n = 31,
                            a = e;
                        for (;;) {
                            if (!(a > n)) {
                                const e = a | zt[t.length];
                                t = Wt[e] + t;
                                break
                            }
                            t = Wt[63 & a] + t, a >>= 6, n >>= 1
                        }
                        return t
                    },
                    Kt = e => {
                        let t = "",
                            n = 0,
                            a = 0;
                        const i = [...e].sort(((e, t) => e - t));
                        for (const e of i) {
                            const i = e - n;
                            n = e, 1 !== i ? (a && (t += a > 1 ? "~" + Yt(a) : Yt(1), a = 0), t += Yt(i)) : a++
                        }
                        return a && (t += a > 1 ? "~" + Yt(a) : Yt(1)), t
                    },
                    Jt = e => {
                        const t = [];
                        let n = 0,
                            a = 0,
                            i = !1;
                        for (; n < e.length;) {
                            if ("~" === e[n]) {
                                i = !0, n++;
                                continue
                            }
                            let s = Wt.indexOf(e[n]);
                            n++;
                            let r = 0;
                            s >= 56 ? (s &= 3, r = 3) : s >= 48 ? (s &= 7, r = 2) : s >= 32 ? (s &= 15, r = 1) : r = 0;
                            for (let t = 0; t < r; t++) s <<= 6, s |= Wt.indexOf(e[n]), n++;
                            if (i) {
                                i = !1;
                                for (let e = 0; e < s; e++) a++, t.push(a)
                            } else a += s, t.push(a)
                        }
                        return t
                    };
                const Xt = new class BalloonConstraints {
                        constructor() {
                            this.element = null
                        }
                        setElement(e) {
                            this.element = e
                        }
                    },
                    qt = (e, t) => !(null == t ? void 0 : t.objectNameAutoChoose) && (null == t ? void 0 : t.objectNameColumnCode) ? e.fields[t.objectNameColumnCode] : e.fields && (e.fields.name || e.fields.label || e.fields.name_ru) || e.id,
                    Qt = (e, t, n) => {
                        let a = !1;
                        const i = [null, ""],
                            s = e => {
                                const r = t.filter((t => t.name && t.parent_id === e.id));
                                for (const e of r) a || ("title" === e.type ? s(e) : i.includes(n.fields[e.code]) || (a = !0))
                            };
                        return s(e), a
                    };
                var en, tn, nn, an;
                ! function(e) {
                    e.danger = "danger", e.warning = "warning", e.success = "success", e.info = "info"
                }(en || (en = {})),
                function(e) {
                    e.min = "min", e.prevMin = "prevMin", e.prevMax = "prevMax", e.max = "max"
                }(tn || (tn = {})),
                function(e) {
                    e.cluster = "cluster"
                }(nn || (nn = {})),
                function(e) {
                    e[e.thematic = 1] = "thematic", e[e.category = 2] = "category", e[e.bubble = 3] = "bubble", e[e.PieChart = 4] = "PieChart", e[e.BarChart = 5] = "BarChart", e[e.LineChart = 6] = "LineChart", e[e.RadarChart = 8] = "RadarChart", e[e.heat = 7] = "heat"
                }(an || (an = {}));
                const sn = e => {
                        return (t = e) && "object" == typeof t && !Array.isArray(t) && void 0 !== e.__isRoute;
                        var t
                    },
                    rn = e => {
                        const t = Object.assign(Object.assign({}, e), {
                            __isRoute: !0,
                            toString() {
                                var e;
                                return (null === (e = this.path) || void 0 === e ? void 0 : e.toString()) || "undefined"
                            }
                        });
                        return Object.defineProperty(t, "__isRoute", {
                            configurable: !1,
                            writable: !1,
                            enumerable: !1,
                            value: !0
                        }), t
                    },
                    on = (e, t) => (0, $t.Gn)(e.toString(), t),
                    ln = ":center?/:zoom?/:containers?";
                class Routes {
                    constructor() {
                        this.navigate = () => {}, this.location = {
                            state: "",
                            key: "",
                            pathname: "",
                            search: "",
                            hash: ""
                        }, this.searchParams = null, this.setSearchParams = () => {}, this.currRouteState = {}, this.sections = rn({
                            path: `/sections/:container?/map?/${ln}`
                        }), this.compare = rn({
                            path: `/compare/map?/${ln}`
                        }), this.favourite = rn({
                            path: `/favourite/map?/${ln}`
                        }), this.registry = rn({
                            path: `/registry/map?/${ln}`
                        }), this.search = rn({
                            path: `/search/map?/${ln}`
                        })
                    }*[Symbol.iterator]() {
                        for (const e of Object.values(this)) sn(e) && (yield e)
                    }
                }
                const cn = new Routes,
                    dn = () => {
                        if (cn.location) {
                            const e = [];
                            for (const t of cn) e.push(t);
                            const t = (0, $t.fp)(e, cn.location);
                            if (null !== t) return t
                        }
                        return []
                    },
                    mn = e => {
                        var t;
                        let [n] = dn(), a = (null == n ? void 0 : n.route) || rn(cn.sections), s = Object.assign(Object.assign({}, (null == n ? void 0 : n.params) || {}), e);
                        const {
                            center: r,
                            zoom: o,
                            containers: l
                        } = s, c = (0, i._T)(s, ["center", "zoom", "containers"]), d = Object.assign({}, c);
                        d.center = r && (null == r ? void 0 : r.length) ? String(r) : String([0, 0]), d.zoom = o || String(0), l && (d.containers = l);
                        const m = on(a, d);
                        cn.navigate({
                            pathname: m,
                            search: null === (t = cn.searchParams) || void 0 === t ? void 0 : t.toString()
                        }, {
                            replace: !0
                        })
                    },
                    un = (e, t) => {
                        let n = (e => {
                            const t = e.entries(),
                                n = {};
                            for (const [e, a] of t) n[e] = a;
                            return n
                        })(cn.searchParams || new URLSearchParams);
                        (e.object || e.stats) && (delete n.object, delete n.stats);
                        for (const t in e)
                            if ("" === e[t]) {
                                const e = n,
                                    a = t;
                                e[a];
                                n = (0, i._T)(e, ["symbol" == typeof a ? a : a + ""])
                            } else n[t] = e[t];
                        cn.setSearchParams(n, t)
                    },
                    pn = (e, t, n = {}) => {
                        var a;
                        const [i] = dn(), s = Object.assign(Object.assign({}, (null == i ? void 0 : i.params) || {}), t || {}), r = on(e, s);
                        r !== (null == cn ? void 0 : cn.location.pathname) && (cn.currRouteState = n, cn.navigate({
                            pathname: r,
                            search: null === (a = cn.searchParams) || void 0 === a ? void 0 : a.toString()
                        })), [cn.favourite, cn.registry, cn.sections].includes(e) && wn.setSwipeableState(tn.prevMax)
                    },
                    hn = e => {
                        let t = [];
                        for (let n in e)
                            if (n in e) {
                                const a = [n];
                                if (e[n].length > 0) try {
                                    a.push(Kt(e[n])), t.push(a.join(":"))
                                } catch (t) {
                                    console.warn("Error encode:", e[n])
                                }
                            } return t.join(";")
                    },
                    gn = e => {
                        const t = {},
                            n = e.split(";");
                        for (let e of n) {
                            const [n, a] = e.split(":");
                            try {
                                t[n] = a ? Jt(a) : []
                            } catch (e) {
                                console.warn("Error decode:", a)
                            }
                        }
                        return t
                    },
                    vn = (e, t) => {
                        const [n] = dn();
                        let a = (null == n ? void 0 : n.params.containers) ? gn(null == n ? void 0 : n.params.containers) : {};
                        if (t.length > 0) a[e] = t;
                        else {
                            const t = a,
                                n = e;
                            t[n];
                            a = (0, i._T)(t, ["symbol" == typeof n ? n : n + ""])
                        }
                        mn({
                            containers: hn(a)
                        })
                    },
                    fn = {
                        linkModal: null,
                        notify: null,
                        swipeableState: tn.min,
                        mainWindow: null,
                        minHeightSwipe: null
                    },
                    yn = {
                        setLinkModal: (0, R.createAction)("ui/SET_LINK_MODAL")(),
                        setNotify: (0, R.createAction)("ui/SET_NOTIFY")(),
                        setSwipeableState: (0, R.createAction)("ui/SET_SWIPEABLE_STATE")(),
                        setMainWindow: (0, R.createAction)("ui/SET_MAIN_WINDOW")(),
                        setMinHeightSwipe: (0, R.createAction)("ui/SET_MIN_HEIGHT")()
                    },
                    bn = (0, R.createReducer)(fn).handleAction(yn.setLinkModal, ((e, t) => Object.assign(Object.assign({}, e), {
                        linkModal: t.payload
                    }))).handleAction(yn.setNotify, ((e, t) => Object.assign(Object.assign({}, e), {
                        notify: t.payload
                    }))).handleAction(yn.setSwipeableState, ((e, t) => Object.assign(Object.assign({}, e), {
                        swipeableState: t.payload
                    }))).handleAction(yn.setMainWindow, ((e, t) => Object.assign(Object.assign({}, e), {
                        mainWindow: t.payload
                    }))).handleAction(yn.setMinHeightSwipe, ((e, t) => Object.assign(Object.assign({}, e), {
                        minHeightSwipe: t.payload
                    })));
                class UiService extends Service {
                    getReducer() {
                        return {
                            ui: bn
                        }
                    }
                    static * setLinkModal(e) {
                        yield(0, f.gz)(yn.setLinkModal(e.payload))
                    }
                    static * setNotify(e) {
                        const t = yield*(0, f.Ys)((e => e.ui.notify)), n = t ? t.revision : 0;
                        yield(0, f.gz)(yn.setNotify(e.payload ? Object.assign(Object.assign({}, e.payload), {
                            revision: (n || 0) + 1
                        }) : null))
                    }
                    static * setSwipeableState(e) {
                        yield(0, f.gz)(yn.setSwipeableState(e.payload))
                    }
                    static * setMainWindow(e) {
                        yield(0, f.gz)(yn.setMainWindow(e.payload))
                    }
                    static * setMinHeightSwipe(e) {
                        yield(0, f.gz)(yn.setMinHeightSwipe(e.payload))
                    }
                }(0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], UiService, "setLinkModal", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], UiService, "setNotify", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], UiService, "setSwipeableState", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], UiService, "setMainWindow", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], UiService, "setMinHeightSwipe", null);
                const {
                    instance: En,
                    actions: wn
                } = C(UiService);
                var Sn, jn;
                ! function(e) {
                    e.ASC = "asc", e.DESC = "desc"
                }(Sn || (Sn = {})),
                function(e) {
                    e.PARKS = "parks", e.COMPANIES = "companies"
                }(jn || (jn = {}));
                const On = ["ru", "en", "es", "zh"],
                    Cn = ["registry_ind_parks", "registry_tech_parks", "registry_clusters", "registry_joint_projects"];
                var Nn, Ln;
                ! function(e) {
                    e.about = "about", e.materials = "materials", e.help = "help"
                }(Nn || (Nn = {}));
                class ObjectsListService extends Service {
                    static * loadObjectsList(e) {
                        const {
                            mapCode: t,
                            container: n
                        } = e.payload, a = yield*(0, f.Ys)((e => I(e, `OBJECTS_${t}`))), i = yield*(0, f.RE)(ObjectsListService.loadObjectsListSaga, t, n);
                        yield*(0, f.RE)(OperationsService.setData, `OBJECTS_${t}`, Object.assign(Object.assign({}, a), {
                            [n.id]: i
                        }))
                    }
                    static * loadGeography(e) {
                        const {
                            map: t,
                            layer: n,
                            parentCol: a,
                            parent: i
                        } = e.payload, {
                            data: s
                        } = yield*(0, f.RE)(ne, t, n, {
                            escape: 0,
                            returnGeom: 1,
                            geomSR: 3857,
                            f: "fjson",
                            fields: "*",
                            fval: i,
                            fcode: a
                        });
                        return s
                    }
                    static * onCloseObjectsList() {
                        const e = yield*(0, f.Ys)((e => e.ui.mainWindow));
                        ["filter", "site_selection", "stats"].includes(e) && (yield*(0, f.RE)(UiService.setMainWindow, O(null))), yield*(0, f.RE)(OperationsService.clear, O("OBJECTS_LIST"))
                    }
                    static * loadObjectsListSaga(e, t) {
                        var n, a, i, s;
                        const r = (yield*(0, f.Ys)((t => I(t, `MAP_${e}`)))).find((e => e.containerId === t.id));
                        let o = null;
                        !(null == r ? void 0 : r.objectNameAutoChoose) && (null == r ? void 0 : r.objectNameColumnCode) && (o = r.objectNameColumnCode);
                        let c = null;
                        (null === (n = t.vectorSettings) || void 0 === n ? void 0 : n.popupColumn) && t.vectorSettings.popupColumnCode && (c = t.vectorSettings.popupColumnCode, new RegExp(`^.+_${l.ZP.language}$`).test(c) && (c = c.split("_").slice(0, -1).join("_")));
                        const d = new Set([o, c, "orbis_id", "name", "label"]);
                        if (t.code === jn.PARKS && (d.add("source_id"), d.add("source")), null === (a = t.visualSettings) || void 0 === a ? void 0 : a.columnCode) {
                            let e = t.visualSettings.columnCode;
                            e = Et(e, On), d.add(e)
                        }
                        if (t.json.description && d.add(t.json.description), t.json.region && d.add(t.json.region), t.json.area && d.add(t.json.area), t.json.indicators) {
                            const e = t.json.indicators;
                            e.heating && d.add(e.heating), e.electricity && d.add(e.electricity), e.gas && d.add(e.gas), e.water && d.add(e.water), e.sewage && d.add(e.sewage)
                        }(null === (i = t.json.sort) || void 0 === i ? void 0 : i.column) && d.add(null === (s = t.json.sort) || void 0 === s ? void 0 : s.column), t.json.filters && t.json.filters.forEach((e => d.add(e.column))), t.json.site_selection && t.json.site_selection.forEach((e => {
                            var t;
                            null === (t = e.filters) || void 0 === t || t.forEach((e => d.add(e.column)))
                        }));
                        let {
                            data: m
                        } = yield*(0, f.RE)(ne, e, t.code, {
                            escape: 0,
                            returnGeom: 1,
                            geomCentroid: 1,
                            geomSR: 3857,
                            f: "fjson",
                            fields: Array.from(d).filter((e => !!e)).join(",")
                        });
                        return t.code === jn.PARKS && (m = m.map((e => {
                            const t = "parks_ind" === e.fields.source ? "Индустриальные парки" : "Технопарки";
                            return Object.assign(Object.assign({}, e), {
                                fields: Object.assign(Object.assign({}, e.fields), {
                                    source_name: l.ZP.t(t)
                                })
                            })
                        }))), (t.json.filters || t.json.site_selection) && (yield*(0, f.RE)(ObjectsListService.prepareFilterIds, e, t)), t.json.filters && (yield*(0, f.RE)(ObjectsListService.prepareFilters, e, t, m)), t.json.site_selection && (yield*(0, f.RE)(ObjectsListService.prepareSiteSelection, e, t, m)), t.json.statistic && (yield*(0, f.RE)(ObjectsListService.prepareStats, e, t)), m
                    }
                    static * prepareFilterIds(e, t) {
                        yield*(0, f.RE)(OperationsService.safelyCreate, `FILTERED_IDS_${e}`);
                        const n = yield*(0, f.Ys)((t => I(t, `FILTERED_IDS_${e}`))), a = null === n ? {} : Object.assign({}, n);
                        a[t.id] = null, yield*(0, f.RE)(OperationsService.setData, `FILTERED_IDS_${e}`, a)
                    }
                    static * prepareFilters(e, t, n) {
                        const {
                            filters: a = []
                        } = t.json;
                        yield*(0, f.RE)(OperationsService.safelyCreate, `FILTERS_${e}`);
                        const i = yield*(0, f.Ys)((t => I(t, `FILTERS_${e}`))), s = null === i ? {} : Object.assign({}, i), {
                            filtersObj: r,
                            valuesObj: o
                        } = Vt(a, t.id);
                        n.forEach((e => {
                            var t, n;
                            for (const a in r) {
                                const i = r[a];
                                i.multiple ? null === (t = e.fields[i.column]) || void 0 === t || t.toString().split(";").map((e => {
                                    var t;
                                    return null === (t = o[a]) || void 0 === t ? void 0 : t.add(e.trim())
                                })) : null === (n = o[a]) || void 0 === n || n.add(e.fields[i.column])
                            }
                        })), s[t.id] = Ut(r, o), yield*(0, f.RE)(OperationsService.setData, `FILTERS_${e}`, s)
                    }
                    static * prepareSiteSelection(e, t, n) {
                        const {
                            site_selection: a = []
                        } = t.json;
                        yield*(0, f.RE)(OperationsService.safelyCreate, `SITE_SELECTION_${e}`);
                        const i = yield*(0, f.Ys)((t => I(t, `SITE_SELECTION_${e}`))), s = null === i ? {} : Object.assign({}, i);
                        s[t.id] = [];
                        const r = [];
                        a.forEach(((e, n) => {
                            const a = Object.assign({}, e),
                                {
                                    filtersObj: i,
                                    valuesObj: o
                                } = Vt(a.filters || [], t.id, n);
                            r.push({
                                filtersObj: i,
                                valuesObj: o
                            }), s[t.id].push(a)
                        })), n.forEach((e => {
                            var t;
                            for (const n in r) {
                                const {
                                    filtersObj: a,
                                    valuesObj: i
                                } = r[n];
                                for (const n in a) {
                                    const s = a[n];
                                    null === (t = i[n]) || void 0 === t || t.add(e.fields[s.column])
                                }
                            }
                        }));
                        for (const e in r) {
                            const {
                                filtersObj: n,
                                valuesObj: a
                            } = r[e];
                            s[t.id][e].filters = Ut(n, a)
                        }
                        yield*(0, f.RE)(OperationsService.setData, `SITE_SELECTION_${e}`, s)
                    }
                    static * prepareStats(e, t) {
                        yield*(0, f.RE)(OperationsService.safelyCreate, `STATS_${e}`);
                        const n = yield*(0, f.Ys)((t => I(t, `STATS_${e}`)));
                        yield*(0, f.RE)(OperationsService.setData, `STATS_${e}`, n ? Object.assign(Object.assign({}, n), {
                            [t.id]: null
                        }) : {
                            [t.id]: null
                        })
                    }
                    static * loadStats(e) {
                        const {
                            mapCode: t,
                            containerId: n
                        } = e.payload;
                        let a = yield*(0, f.Ys)((e => I(e, `FULL_LAYERS_${t}`)));
                        a || (yield*(0, f.RE)(ContainerService.loadMapContent, O({
                            mapCode: t
                        })), a = yield*(0, f.Ys)((e => I(e, `FULL_LAYERS_${t}`))));
                        const i = a.find((e => e.id === n)),
                            {
                                statistic: s
                            } = i.json,
                            r = yield*(0, f.Ys)((e => I(e, `STATS_${t}`)));
                        if (!r[i.id]) {
                            const e = Object.assign({}, r),
                                n = yield*(0, f.$6)(Object.keys(s.items).map((e => {
                                    let t = `${s.items[e].html}?lng=${l.ZP.language}`;
                                    return (0, f.RE)(z.Z.get, t)
                                }))), a = {};
                            Object.keys(s.items).map(((e, t) => a[e] = n[t].data.join(""))), e[i.id] = a, yield*(0, f.RE)(OperationsService.setData, `STATS_${t}`, e)
                        }
                    }
                    static * setFilterValue(e) {
                        const {
                            mapCode: t,
                            containerId: n,
                            filterId: a,
                            value: i
                        } = e.payload, {
                            data: s
                        } = yield*(0, f.Ys)((e => _(e, `FILTERS_${t}`))), r = [...s[n]], o = r.findIndex((e => e.id === a));
                        r.splice(o, 1, Object.assign(Object.assign({}, r[o]), {
                            value: i
                        })), yield*(0, f.RE)(OperationsService.setData, `FILTERS_${t}`, Object.assign(Object.assign({}, s), {
                            [n]: r
                        })), yield*(0, f.RE)(ObjectsListService.filteringObjects, O({
                            mapCode: t,
                            containerId: n
                        }))
                    }
                    static * setSiteSelectionFilterValue(e) {
                        const {
                            mapCode: t,
                            containerId: n,
                            filterId: a,
                            value: i
                        } = e.payload, [, , s] = a.split("_"), r = yield*(0, f.Ys)((e => I(e, `SITE_SELECTION_${t}`))), o = [...r[n]], l = Object.assign({}, o[Number(s)]), c = [...l.filters], d = c.findIndex((e => e.id === a));
                        c.splice(d, 1, Object.assign(Object.assign({}, c[d]), {
                            value: i
                        })), o.splice(Number(s), 1, Object.assign(Object.assign({}, l), {
                            filters: c
                        })), yield*(0, f.RE)(OperationsService.setData, `SITE_SELECTION_${t}`, Object.assign(Object.assign({}, r), {
                            [n]: o
                        })), yield*(0, f.RE)(ObjectsListService.filteringObjects, O({
                            mapCode: t,
                            containerId: n
                        }))
                    }
                    static * resetFilters(e) {
                        const {
                            mapCode: t,
                            containerId: n
                        } = e.payload, a = yield*(0, f.Ys)((e => I(e, `FILTERS_${t}`)));
                        let i = [...a[n]];
                        i = i.map(Bt), yield*(0, f.RE)(OperationsService.setData, `FILTERS_${t}`, Object.assign(Object.assign({}, a), {
                            [n]: i
                        })), yield*(0, f.RE)(ObjectsListService.filteringObjects, O({
                            mapCode: t,
                            containerId: n
                        }))
                    }
                    static * resetSiteFilters(e) {
                        const {
                            mapCode: t,
                            containerId: n
                        } = e.payload, a = yield*(0, f.Ys)((e => I(e, `SITE_SELECTION_${t}`)));
                        let i = [...a[n]];
                        i = i.map((e => {
                            const t = e.filters.map(Bt);
                            return Object.assign(Object.assign({}, e), {
                                filters: t
                            })
                        })), yield*(0, f.RE)(OperationsService.setData, `SITE_SELECTION_${t}`, Object.assign(Object.assign({}, a), {
                            [n]: i
                        })), yield*(0, f.RE)(ObjectsListService.filteringObjects, O({
                            mapCode: t,
                            containerId: n
                        }))
                    }
                    static * filteringObjects(e) {
                        const {
                            mapCode: t,
                            containerId: n
                        } = e.payload, a = yield*(0, f.Ys)((e => x(e, `OBJECTS_${t}`))), i = yield*(0, f.Ys)((e => I(e, `FILTERED_IDS_${t}`))), s = (yield*(0, f.Ys)((e => I(e, `FILTERS_${t}`))))[n], r = a.data[n];
                        let o = null;
                        const l = Gt(s || []);
                        l.length > 0 && r && (o = Dt(l, r));
                        const c = yield*(0, f.Ys)((e => I(e, `SITE_SELECTION_${t}`))), d = c && c[n] ? c[n] : [];
                        let m = null;
                        for (const e of d) {
                            const t = Gt(e.filters || []);
                            let n = [];
                            if (t.length > 0 && r) {
                                null === m && (m = new Set), n = Dt(t, r, o);
                                for (const e of n) null == m || m.add(e)
                            }
                        }
                        o = m ? Array.from(m) : o, yield*(0, f.RE)(OperationsService.setData, `FILTERED_IDS_${t}`, Object.assign(Object.assign({}, i), {
                            [n]: o
                        })), Pt.layersController.filterVectorLayer(t, n, o)
                    }
                    static * showClusterBalloon(e) {
                        const {
                            features: t,
                            coordinate: n
                        } = e.payload, {
                            map_code: a,
                            layer_id: i
                        } = t[0], s = (yield*(0, f.Ys)((e => I(e, `PUB_LAYERS_${a}`)))).find((e => e.id === i));
                        yield*(0, f.RE)(OperationsService.safelyCreate, "CLUSTER_BALLOON"), yield*(0, f.RE)(OperationsService.setData, "CLUSTER_BALLOON", {
                            mapCode: a,
                            container: s,
                            features: t
                        }), yield*(0, f.RE)(MapService.setBalloon, O({
                            type: nn.cluster,
                            coordinates: n
                        }))
                    }
                    static * loadFavourite() {
                        let e = localStorage.getItem("favourite");
                        return e = e ? JSON.parse(e) : {
                            sort: 0,
                            items: []
                        }, e && (e.items = e.items.filter((e => !e.lng || e.lng.includes(l.ZP.language)))), yield*(0, f.RE)(OperationsService.setData, "FAVOURITE", e)
                    }
                    static * loadFavouriteContainers() {
                        const {
                            data: e
                        } = yield*(0, f.Ys)((e => e.operations.FAVOURITE));
                        for (const t of new Set(e.items.map((e => e.map))).values()) {
                            (yield*(0, f.Ys)((e => _(e, `MAP_${t}`)))) || (yield*(0, f.RE)(ContainerService.loadMapContent, O({
                                mapCode: t
                            })));
                            const n = yield*(0, f.Ys)((e => I(e, `PUB_LAYERS_${t}`))), a = yield*(0, f.Ys)((e => I(e, `OBJECTS_${t}`)));
                            for (const i of new Set(e.items.filter((e => e.map === t)).map((e => e.layer))).values()) {
                                const e = n.find((e => e.code === i));
                                e && !a[e.id] && (yield*(0, f.RE)(ObjectsListService.loadObjectsList, O({
                                    mapCode: t,
                                    container: e
                                })))
                            }
                        }
                    }
                    static * addFavourite(e) {
                        const {
                            mapCode: t,
                            layerCode: n,
                            objectId: a
                        } = e.payload, {
                            data: i
                        } = yield*(0, f.Ys)((e => e.operations.FAVOURITE)), s = yield*(0, f.Ys)((e => e.app.config.mapCode)), r = yield*(0, f.Ys)((e => I(e, `FULL_LAYERS_${s}`))), o = yield*(0, f.Ys)((e => I(e, `FULL_LAYERS_${t}`)));
                        if (i.items.length < 99) {
                            const e = JSON.parse(JSON.stringify(i)),
                                s = {
                                    map: t,
                                    layer: n,
                                    id: a
                                };
                            let c = null,
                                d = o.find((e => e.code === n));
                            for (; d;) d.json.lng && (c = d.json.lng, d = null), d = o.find((e => e.id === d.parent_id));
                            if (!c) {
                                const e = r.find((e => e.code === `map_${t}`));
                                e.json.lng && (c = e.json.lng)
                            }
                            return c && (s.lng = c), e.items.push(s), localStorage.setItem("favourite", JSON.stringify(e)), yield*(0, f.RE)(UiService.setNotify, O({
                                text: (0, l.t)("Добавлено в избранное"),
                                type: en.info
                            })), e
                        }
                        yield*(0, f.RE)(UiService.setNotify, O({
                            type: en.info,
                            text: (0, l.t)("Нельзя добавить в избранное больше 99 объектов.")
                        }))
                    }
                    static * deleteFavourite(e) {
                        const {
                            mapCode: t,
                            layerCode: n,
                            objectId: a
                        } = e.payload, {
                            data: i
                        } = yield*(0, f.Ys)((e => e.operations.FAVOURITE)), s = JSON.parse(JSON.stringify(i));
                        return s.items = s.items.filter((e => !(e.map === t && e.layer === n && e.id === a))), localStorage.setItem("favourite", JSON.stringify(s)), yield*(0, f.RE)(UiService.setNotify, O({
                            text: (0, l.t)("Удалено из избранного"),
                            type: en.info
                        })), s
                    }
                    static * deleteAllFavourite() {
                        const {
                            data: e
                        } = yield*(0, f.Ys)((e => e.operations.FAVOURITE)), t = Object.assign(Object.assign({}, e), {
                            items: []
                        });
                        localStorage.setItem("favourite", JSON.stringify(t)), yield*(0, f.RE)(OperationsService.setData, "FAVOURITE", t)
                    }
                    static * sortFavourite(e) {
                        const {
                            data: t
                        } = yield*(0, f.Ys)((e => e.operations.FAVOURITE)), n = Object.assign(Object.assign({}, t), {
                            sort: e.payload
                        });
                        localStorage.setItem("favourite", JSON.stringify(n)), yield*(0, f.RE)(OperationsService.setData, "FAVOURITE", n)
                    }
                    static * cleanFavourite(e) {
                        const {
                            data: t
                        } = yield*(0, f.Ys)((e => e.operations.FAVOURITE)), n = e.payload.map((e => `${e.map}-${e.layer}-${e.id}`)), a = Object.assign(Object.assign({}, t), {
                            items: t.items.filter((e => !n.includes(`${e.map}-${e.layer}-${e.id}`)))
                        });
                        localStorage.setItem("favourite", JSON.stringify(a))
                    }
                    static * loadRegistry() {
                        var e;
                        const {
                            mapCode: t
                        } = yield*(0, f.Ys)((e => e.app.config)), n = (yield*(0, f.Ys)((e => I(e, `FULL_LAYERS_${t}`)))).filter((e => Cn.includes(e.code))), a = yield*(0, f.Ys)((e => I(e, `OBJECTS_${t}`)));
                        if (!Object.keys(a).includes(null === (e = n[0]) || void 0 === e ? void 0 : e.id.toString())) {
                            const e = yield*(0, f.$6)(n.map((e => (0, f.RE)(ObjectsListService.loadObjectsListSaga, t, e)))), i = {};
                            n.map(((t, n) => i[t.id] = e[n])), yield*(0, f.RE)(OperationsService.setData, `OBJECTS_${t}`, Object.assign(Object.assign({}, a), i))
                        }
                    }
                    static * search(e) {
                        const {
                            mapCode: t
                        } = yield*(0, f.Ys)((e => e.app.config)), n = (yield*(0, f.Ys)((e => I(e, `PUB_LAYERS_${t}`)))).filter((e => !e.json.lng || e.json.lng.includes(l.ZP.language))).map((e => {
                            var t;
                            return null === (t = e.map_info) || void 0 === t ? void 0 : t.code
                        })).join(","), a = `select * from ${t}.search('${n}', '${e.payload}', 500, '${l.ZP.language}')`, {
                            data: i
                        } = yield*(0, f.RE)(ne, t, "about", {
                            sql: a,
                            escape: 0
                        }), s = i.map((e => ({
                            id: e.id,
                            name: e.fields.name,
                            layerCode: e.fields.layerCode,
                            layerName: e.fields.layerName,
                            mapCode: e.fields.mapCode,
                            icon: e.fields.icon || null
                        })));
                        yield(0, f.RE)(OperationsService.setData, "SEARCH", s)
                    }
                    static * loadComparison() {
                        const e = localStorage.getItem("comparison"),
                            {
                                operations: t
                            } = yield*(0, f.Ys)((e => e));
                        let n = {};
                        if (e) {
                            const a = JSON.parse(e);
                            Object.entries(a).forEach((([e, {
                                mapCode: n,
                                objects: i
                            }]) => {
                                var s, r, o;
                                const l = (null === (s = t[`FULL_LAYERS_${n}`]) || void 0 === s ? void 0 : s.data) || [],
                                    c = (null === (r = t[`OBJECTS_${n}`]) || void 0 === r ? void 0 : r.data) || {},
                                    {
                                        containerId: d
                                    } = i[0],
                                    m = l.find((t => t.code === e)),
                                    u = c[d];
                                if (m && u) {
                                    const i = (null === (o = t[`MAP_${n}`]) || void 0 === o ? void 0 : o.data) || [],
                                        s = a[m.code].objects.reduce(((e, t) => {
                                            var n;
                                            const a = u.find((e => e.id === t.objectId));
                                            if (a) {
                                                const s = i.find((e => e.containerId === d));
                                                t.name = (null === (n = qt(a, s)) || void 0 === n ? void 0 : n.toString()) || "", e.push(t)
                                            }
                                            return e
                                        }), []);
                                    s.length ? (a[m.code].name = m.name || m.code, a[m.code].objects = s) : delete a[e]
                                } else delete a[e]
                            })), n = a
                        }
                        localStorage.setItem("comparison", JSON.stringify(n)), yield*(0, f.RE)(OperationsService.setData, "COMPARISON", n)
                    }
                    static * setComparison(e) {
                        const {
                            object: t,
                            layerCode: n,
                            layerName: a
                        } = e.payload, i = yield*(0, f.Ys)((e => I(e, "COMPARISON"))), s = {};
                        for (const e in i) {
                            const {
                                mapCode: t,
                                name: n,
                                objects: a
                            } = i[e];
                            s[e] = {
                                name: n,
                                mapCode: t,
                                objects: a.map((e => Object.assign({}, e)))
                            }
                        }
                        if (n && t)
                            if (n in s) {
                                s[n].objects.map((({
                                    id: e
                                }) => e)).includes(t.id) ? (s[n].objects = s[n].objects.filter((({
                                    id: e
                                }) => e !== t.id)), wn.setNotify({
                                    text: (0, l.t)("Удалено из сравнения"),
                                    type: en.info
                                })) : s[n].objects.length >= 5 ? wn.setNotify({
                                    text: (0, l.t)("Превышен лимит объектов для сравнения"),
                                    type: en.warning
                                }) : (s[n].objects = [t, ...s[n].objects], wn.setNotify({
                                    text: (0, l.t)("Добавлено к сравнению"),
                                    type: en.info
                                })), s[n].objects.length || delete s[n]
                            } else s[n] = {
                                mapCode: e.payload.mapCode,
                                name: a || n,
                                objects: [t]
                            }, wn.setNotify({
                                text: (0, l.t)("Добавлено к сравнению"),
                                type: en.info
                            });
                        else delete s[n];
                        localStorage.setItem("comparison", JSON.stringify(s)), yield*(0, f.RE)(OperationsService.setData, "COMPARISON", s)
                    }
                    static * comparisonWindow(e) {
                        const t = e.payload,
                            n = (yield*(0, f.Ys)((e => I(e, "COMPARISON"))))[t];
                        if (n) {
                            const {
                                mapCode: e,
                                objects: a,
                                name: i
                            } = n, s = yield*(0, f.Ys)((t => I(t, `MAP_${e}`))), r = [], o = [];
                            for (const n of a) {
                                const a = n.admin ? (0, f.RE)(se, t, n.id, {
                                    lng: l.ZP.language
                                }) : (0, f.RE)(ie, e, t, n.id, {
                                    escape: 0,
                                    lng: l.ZP.language
                                });
                                r.push(a), o.push(n)
                            }
                            let c, d = (yield*(0, f.$6)(r)).map((e => e.data));
                            d[0].data ? (c = {
                                data: d[0].structure
                            }, d = d.map((e => e.data || e))) : c = yield*(0, f.RE)(ee, e, t, {
                                escape: 0
                            });
                            const m = c.data.filter((e => e.name));
                            return yield*(0, f.RE)(OperationsService.setMeta, "COMPARISON_WINDOW", {
                                structure: m,
                                settings: s.find((e => e.containerId === a[0].containerId)),
                                headers: o,
                                layerCode: t,
                                mapCode: e,
                                layerName: i
                            }), d
                        }
                    }
                }(0, i.gn)([L, B("OBJECTS_LIST"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "loadObjectsList", null), (0, i.gn)([L, B("GEOGRAPHY"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "loadGeography", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", []), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "onCloseObjectsList", null), (0, i.gn)([L, B("STATS"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "loadStats", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "setFilterValue", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "setSiteSelectionFilterValue", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "resetFilters", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "resetSiteFilters", null), (0, i.gn)([(Ln = 300, function(e, t, n) {
                    const a = n.value.actionName || `@@${e.name}_${t}`;
                    n.value.generatedWatcher = function*() {
                        yield y.Ds(Ln, a, n.value)
                    }, n.value.generatedAction = function(e) {
                        this.dispatch({
                            type: a,
                            payload: e
                        })
                    }
                }), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "filteringObjects", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "showClusterBalloon", null), (0, i.gn)([L, B("FAVOURITE"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", []), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "loadFavourite", null), (0, i.gn)([L, B("FAVOURITE"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", []), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "loadFavouriteContainers", null), (0, i.gn)([L, B("FAVOURITE"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "addFavourite", null), (0, i.gn)([L, B("FAVOURITE"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "deleteFavourite", null), (0, i.gn)([L, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", []), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "deleteAllFavourite", null), (0, i.gn)([L, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "sortFavourite", null), (0, i.gn)([L, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "cleanFavourite", null), (0, i.gn)([L, B("REGISTRY"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", []), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "loadRegistry", null), (0, i.gn)([L, B("SEARCH"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "search", null), (0, i.gn)([L, B("COMPARISON"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", []), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "loadComparison", null), (0, i.gn)([M, B("COMPARISON"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "setComparison", null), (0, i.gn)([M, B("COMPARISON_WINDOW"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectsListService, "comparisonWindow", null);
                const {
                    instance: Mn,
                    actions: An
                } = C(ObjectsListService);
                class ContainerService extends Service {
                    static * getMaps() {
                        var e, t;
                        const n = yield*(0, f.Ys)((e => e.app.config)), {
                            mapCode: a
                        } = n, s = yield*(0, f.Ys)((e => I(e, `MAP_${a}`))), [{
                            data: r
                        }, {
                            data: o
                        }] = yield*(0, f.$6)([(0, f.RE)(Q, a, {
                            type: "full",
                            with_access: 1
                        }), (0, f.RE)(Q, a, {
                            type: "publish",
                            with_access: 1
                        })]);
                        let c = [],
                            d = r.filter((e => {
                                var t;
                                const n = o.find((t => t.id === e.id));
                                return !(!(null === (t = e.json.lng) || void 0 === t ? void 0 : t.includes(l.ZP.language)) && e.json.lng) && (n && (n.json = e.json, e.is_pub = !0, c.push(n)), !0)
                            }));
                        yield*(0, f.RE)(ContainerService.loadLegends, a, c);
                        const m = [],
                            u = [],
                            p = [],
                            h = [];
                        for (const e of c) {
                            if ("folder" === e.type || 0 !== e.parent_id) continue;
                            const [t, ...n] = e.code.split("_");
                            if ("map" === t) {
                                const t = n.join("_");
                                if (!t) continue;
                                m.push((0, f.RE)(MapService.getMapConfig, t)), u.push(e)
                            } else h.push({
                                code: e.code,
                                id: e.id
                            }), 1 === e.render_type && (1 !== e.style_mode && 3 !== e.style_mode || p.push(e))
                        }
                        const g = yield*(0, f.$6)(h.map((({
                            code: e
                        }) => (0, f.RE)(ae, a, e)))), v = {};
                        h.forEach((({
                            id: e
                        }, t) => {
                            v[e] = g[t].data
                        }));
                        const y = yield*(0, f.$6)(m);
                        u.forEach(((e, t) => {
                            e.map_info = y[t];
                            const n = d.find((t => t.code === e.code));
                            n && (n.map_info = y[t])
                        }));
                        const b = {};
                        (yield*(0, f.$6)(p.map((e => (0, f.RE)(ObjectsListService.loadObjectsListSaga, a, e))))).forEach(((e, t) => {
                            b[p[t].id] = e
                        })), yield*(0, f.RE)(OperationsService.safelyCreate, `OBJECTS_${a}`), yield*(0, f.RE)(OperationsService.setData, `OBJECTS_${a}`, b), d = d.filter((e => !e.map_info || e.map_info.name)), c = c.filter((e => !e.map_info || e.map_info.name));
                        const [E] = dn();
                        let w = (null == E ? void 0 : E.params.containers) ? gn(null == E ? void 0 : E.params.containers) : {};
                        const S = w,
                            j = a,
                            C = S[j],
                            N = (0, i._T)(S, ["symbol" == typeof j ? j : j + ""]),
                            L = Object.assign({}, N),
                            M = 0 === Object.keys(N).length,
                            A = null === (e = cn.searchParams) || void 0 === e ? void 0 : e.get("object");
                        c = c.map((e => {
                            let t = M && !A ? e.selected : e.code in N;
                            if (e.map_info) return t && (L[e.map_info.code] = N[e.map_info.code] || []), Object.assign(Object.assign({}, e), {
                                selected: t,
                                eye: !1
                            });
                            const n = Object.assign({}, e);
                            return C && (t = C.includes(e.id) || t, t && !C.includes(e.id) && "folder" !== e.type && C.push(e.id)), Object.assign(Object.assign({}, n), {
                                selected: t,
                                eye: t
                            })
                        })), d = d.map((e => {
                            if (e.map_info) return Object.assign(Object.assign({}, e), {
                                selected: M && !A ? e.selected : e.code in N
                            });
                            const t = C && C.includes(e.id) || e.selected;
                            return Object.assign(Object.assign({}, e), {
                                selected: t
                            })
                        })), yield*(0, f.RE)(OperationsService.safelyCreate, `PUB_LAYERS_${a}`), yield*(0, f.RE)(OperationsService.setData, `PUB_LAYERS_${a}`, c), yield*(0, f.RE)(OperationsService.setMeta, `PUB_LAYERS_${a}`, {
                            selectedRevision: 0,
                            count: v
                        }), yield*(0, f.RE)(OperationsService.safelyCreate, `FULL_LAYERS_${a}`), yield*(0, f.RE)(OperationsService.setData, `FULL_LAYERS_${a}`, d), Pt.layersController.setTilesUrl(n.tilesUrl), Pt.layersController.createRootLayers(a, c, d, s, b);
                        for (const e of Object.keys(L))
                            if (y.find((t => t.code === e))) yield*(0, f.RE)(ContainerService.loadMapContentDefault, e, w[e]), yield*(0, f.gw)(300);
                            else {
                                const t = w,
                                    n = e;
                                t[n];
                                w = (0, i._T)(t, ["symbol" == typeof n ? n : n + ""])
                            } if (y.unshift({
                                code: n.mapCode,
                                name: (null === (t = n.publication.settings.customWidgets.header) || void 0 === t ? void 0 : t.values.headerNameText) || n.mapCode
                            }), yield*(0, f.RE)(MapService.setMaps, O(y)), w[a]) {
                            const [e] = dn(), t = gn((null == e ? void 0 : e.params.containers) || "");
                            t[a] = w[a] || [];
                            const n = hn(t);
                            mn({
                                containers: n
                            })
                        }
                    }
                    static * loadMapContentDefault(e, t) {
                        yield*(0, f.RE)(ContainerService.loadMapContentSaga, e, {
                            layers: t
                        })
                    }
                    static * loadMapContent(e) {
                        yield*(0, f.RE)(ContainerService.loadMapContentSaga, e.payload.mapCode, e.payload.options)
                    }
                    static * loadMapContentSaga(e, t = {}) {
                        const {
                            layers: n = [],
                            autoOn: a = !0
                        } = t, i = yield*(0, f.Ys)((e => e.app.config.mapCode)), s = yield*(0, f.Ys)((e => I(e, `PUB_LAYERS_${i}`)));
                        yield*(0, f.RE)(OperationsService.safelyCreate, `MAP_${e}`);
                        try {
                            yield*(0, f.RE)(OperationsService.setStatus, `MAP_${e}`, A.PENDING);
                            const t = s.find((t => {
                                var n;
                                return (null === (n = t.map_info) || void 0 === n ? void 0 : n.code) === e
                            }));
                            yield*(0, f.RE)(OperationsService.setData, `PUB_LAYERS_${i}`, s.map((n => {
                                var a;
                                return (null === (a = n.map_info) || void 0 === a ? void 0 : a.code) === e ? Object.assign(Object.assign({}, t), {
                                    eye: !0
                                }) : n
                            })));
                            const [{
                                data: r
                            }, {
                                data: o
                            }, {
                                data: c
                            }, {
                                data: d
                            }] = yield*(0, f.$6)([(0, f.RE)(Q, e, {
                                type: "full",
                                with_access: 1
                            }), (0, f.RE)(Q, e, {
                                type: "publish",
                                with_access: 1
                            }), (0, f.RE)(J, e), (0, f.RE)(X, e)]), m = [], u = r.filter((e => {
                                var t;
                                const n = o.find((t => t.id === e.id));
                                return !(!(null === (t = e.json.lng) || void 0 === t ? void 0 : t.includes(l.ZP.language)) && e.json.lng) && (n && (n.json = e.json, e.is_pub = !0, m.push(n)), !0)
                            }));
                            yield*(0, f.RE)(ContainerService.loadLegends, e, m);
                            const p = (c.publication.layers_config || []).map((e => Object.assign({}, e)));
                            yield*(0, f.RE)(OperationsService.setData, `MAP_${e}`, p), yield*(0, f.RE)(OperationsService.setMeta, `MAP_${e}`, {
                                group: d.group_layers
                            });
                            const h = [],
                                g = [],
                                v = [];
                            m.forEach((e => {
                                e.selected = a && (n.includes(e.id) || e.selected), e.selected && "folder" !== e.type && h.push(e.id), e.eye = "folder" === e.type || e.selected, 1 === e.render_type && (1 !== e.style_mode && 3 !== e.style_mode || g.push(e)), "folder" !== e.type && v.push({
                                    code: e.code,
                                    id: e.id
                                })
                            }));
                            const y = yield*(0, f.$6)(v.map((({
                                code: t
                            }) => (0, f.RE)(ae, e, t)))), b = {};
                            v.forEach((({
                                id: e
                            }, t) => {
                                b[e] = y[t].data
                            }));
                            const E = {};
                            (yield*(0, f.$6)(g.map((t => (0, f.RE)(ObjectsListService.loadObjectsListSaga, e, t))))).forEach(((e, t) => {
                                E[g[t].id] = e
                            })), yield*(0, f.RE)(OperationsService.safelyCreate, `OBJECTS_${e}`), yield*(0, f.RE)(OperationsService.setData, `OBJECTS_${e}`, E), vn(e, h), ((null == n ? void 0 : n.length) > 0 || !a) && u.forEach((e => {
                                a ? n.includes(e.id) && (e.selected = !0) : e.selected = !1
                            })), yield*(0, f.RE)(OperationsService.safelyCreate, `PUB_LAYERS_${e}`), yield*(0, f.RE)(OperationsService.setData, `PUB_LAYERS_${e}`, m), yield*(0, f.RE)(OperationsService.setMeta, `PUB_LAYERS_${e}`, {
                                selectedRevision: 0,
                                count: b
                            }), yield*(0, f.RE)(OperationsService.safelyCreate, `FULL_LAYERS_${e}`), yield*(0, f.RE)(OperationsService.setData, `FULL_LAYERS_${e}`, u), yield*(0, f.RE)(OperationsService.setStatus, `MAP_${e}`, A.SUCCESS), Pt.layersController.createInnerLayers(e, m, u, p, E, d.group_layers)
                        } catch (t) {
                            yield*(0, f.RE)(OperationsService.setStatus, `MAP_${e}`, A.FAIL), vn(e, [])
                        }
                    }
                    static * loadLegends(e, t) {
                        const n = [],
                            a = [];
                        t.forEach((t => {
                            var i;
                            (null === (i = t.visualSettings) || void 0 === i ? void 0 : i.showLegend) && (a.push(t.code), n.push((0, f.RE)(te, e, t.code)))
                        })), yield*(0, f.RE)(OperationsService.safelyCreate, `LEGEND_${e}`);
                        const i = (yield*(0, f.$6)(n)).map((({
                                data: e
                            }) => e)),
                            s = {};
                        i.length > 0 && (a.forEach(((e, t) => {
                            s[e] = i[t]
                        })), yield*(0, f.RE)(OperationsService.setData, `LEGEND_${e}`, s))
                    }
                    static * setSelectedContainer(e) {
                        const {
                            mapCode: t,
                            containerId: n,
                            selected: a
                        } = e.payload, i = yield*(0, f.Ys)((e => x(e, `PUB_LAYERS_${t}`))), s = yield*(0, f.Ys)((e => I(e, `FULL_LAYERS_${t}`)));
                        let r = [...i.data],
                            o = [...s],
                            l = !1,
                            c = -1,
                            d = i.data.find((e => e.id === n));
                        for (; 0 !== c && !1 === l;) c = null == d ? void 0 : d.parent_id, (null == d ? void 0 : d.eye) || (null == d ? void 0 : d.id) === n || (l = !0), d = i.data.find((e => e.id === c));
                        if (l) return void(yield*(0, f.RE)(OperationsService.setData, `PUB_LAYERS_${t}`, i.data.map((e => e.id === n ? Object.assign(Object.assign({}, e), {
                            eye: a
                        }) : e))));
                        const m = [n],
                            u = e => {
                                for (const t of r) t.parent_id === e && ("folder" !== t.type && m.push(t.id), u(t.id))
                            };
                        u(n);
                        const p = [];
                        r = r.map((e => {
                            const t = e.id === n ? a : e.eye;
                            return m.includes(e.id) ? Object.assign(Object.assign({}, e), {
                                selected: !!a && t,
                                eye: t
                            }) : e
                        })), o = o.map((e => {
                            const t = r.find((t => t.id === e.id));
                            return (null == t ? void 0 : t.selected) && "folder" !== (null == t ? void 0 : t.type) && p.push(e.id), Object.assign(Object.assign({}, e), {
                                selected: null == t ? void 0 : t.selected
                            })
                        })), yield*(0, f.RE)(ContainerService.applySelected, t, p, r, o)
                    }
                    static * selectMap(e) {
                        const {
                            mapCode: t,
                            selected: n
                        } = e.payload, a = yield*(0, f.Ys)((e => e.app.config.mapCode)), i = yield*(0, f.Ys)((e => I(e, `PUB_LAYERS_${a}`)));
                        let s = yield*(0, f.Ys)((e => x(e, `PUB_LAYERS_${t}`)));
                        s.data || (yield*(0, f.RE)(ContainerService.loadMapContent, O({
                            mapCode: t
                        })), s = yield*(0, f.Ys)((e => x(e, `PUB_LAYERS_${t}`))));
                        const r = i.find((e => {
                            var n;
                            return (null === (n = e.map_info) || void 0 === n ? void 0 : n.code) === t
                        }));
                        yield*(0, f.RE)(OperationsService.setData, `PUB_LAYERS_${a}`, i.map((e => e.id === r.id ? Object.assign(Object.assign({}, r), {
                            eye: n
                        }) : e)));
                        const o = yield*(0, f.Ys)((e => I(e, `FULL_LAYERS_${t}`))), l = {}, c = s.data.map((e => (l[e.id] = e, Object.assign(Object.assign({}, e), {
                            selected: !!n && e.eye
                        })))), d = [];
                        c.forEach((e => {
                            let t = !1,
                                a = l[e.parent_id];
                            for (; !1 === t;) a || (t = null), !1 === (null == a ? void 0 : a.eye) && (t = !0), a = l[null == a ? void 0 : a.parent_id];
                            !t && e.eye && n && d.push(e.id)
                        }));
                        const m = o.map((e => Object.assign(Object.assign({}, e), {
                            selected: d.includes(e.id)
                        })));
                        yield*(0, f.RE)(ContainerService.applySelected, t, d, c, m)
                    }
                    static * applySelected(e, t, n, a) {
                        const i = yield*(0, f.Ys)((e => e.app.config)), s = yield*(0, f.Ys)((t => T(t, `PUB_LAYERS_${e}`)));
                        yield*(0, f.RE)(OperationsService.setData, `PUB_LAYERS_${e}`, n), yield*(0, f.RE)(OperationsService.setMeta, `PUB_LAYERS_${e}`, Object.assign(Object.assign({}, s), {
                            selectedRevision: (s.selectedRevision || 0) + 1
                        })), yield*(0, f.RE)(OperationsService.setData, `FULL_LAYERS_${e}`, a), Pt.layersController.syncSelected(t, a, e, i.mapCode === e), vn(e, t)
                    }
                }(0, i.gn)([L, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ContainerService, "loadMapContent", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ContainerService, "setSelectedContainer", null), (0, i.gn)([M, (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ContainerService, "selectMap", null);
                const {
                    instance: _n,
                    actions: xn
                } = C(ContainerService);
                class AppService extends Service {
                    getReducer() {
                        return {
                            app: W
                        }
                    }
                    static * initialize(e) {
                        var t;
                        const {
                            map_code: n,
                            host: a,
                            project_id: s
                        } = e.payload;
                        Y.setBaseUrl(`${window.location.protocol}//${a}`), Y.setProjectId(s);
                        const {
                            data: r
                        } = yield*(0, f.RE)(K, n);
                        yield(0, f.gz)(D.setInitConfig(r)), yield*(0, f.RE)(AppService.getTranslations, n);
                        const [o, l] = yield*(0, f.$6)([(0, f.RE)(J, n), (0, f.RE)(X, n)]), c = o.data, d = l.data, m = c.publication, {
                            layers_config: u
                        } = m, p = (0, i._T)(m, ["layers_config"]);
                        c.publication = p, yield(0, f.gz)(D.setConfig(c)), yield*(0, f.RE)(OperationsService.safelyCreate, `MAP_${n}`), yield*(0, f.RE)(OperationsService.setData, `MAP_${n}`, u), yield*(0, f.RE)(OperationsService.setMeta, `MAP_${n}`, {
                            group: 0,
                            name: d.name
                        }), document.title = d.name;
                        const [h] = dn(), g = (null == h ? void 0 : h.params.center) ? (0, G.mi)(null == h ? void 0 : h.params.center.split(",").map((e => Number(e)))) : c.publication.map_position.center, v = (null == h ? void 0 : h.params.zoom) ? Number(null == h ? void 0 : h.params.zoom) : c.publication.map_position.zoom;
                        yield*(0, f.RE)(MapService.setMapPosition, O({
                            zoom: v,
                            center: g
                        }));
                        const y = c.publication.base_maps.find((e => e.selected));
                        y && (yield*(0, f.RE)(MapService.setBaseMap, O(y.id)));
                        (null === (t = cn.searchParams) || void 0 === t ? void 0 : t.get("object")) && (yield*(0, f.RE)(AppService.setInitParam, "object", !0)), yield*(0, f.RE)(ContainerService.getMaps), yield*(0, f.RE)(ObjectsListService.loadFavourite), yield*(0, f.RE)(ObjectsListService.loadComparison)
                    }
                    static * getTranslations(e) {
                        const {
                            data: t
                        } = yield*(0, f.RE)(ne, e, "client_translations_guide", {
                            fields: `pk,${l.ZP.language}`,
                            escape: 0
                        }), n = {};
                        t.forEach((e => {
                            n[e.fields.pk] = e.fields[l.ZP.language] || e.fields.pk
                        })), l.ZP.addResourceBundle(l.ZP.language, "translation", n)
                    }
                    static * setInitParam(e, t) {
                        yield*(0, f.gz)(D.setInitParam({
                            [e]: t
                        }))
                    }
                }(0, i.gn)([N, B("INITIALIZE"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], AppService, "initialize", null), (0, i.gn)([B("TRANSLATIONS"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [String]), (0, i.w6)("design:returntype", void 0)], AppService, "getTranslations", null);
                const {
                    instance: In,
                    actions: Tn
                } = C(AppService), kn = {
                    xs: "(max-width: 992px)",
                    sm: "(min-width: 993px)",
                    md: "(min-width: 1000px)",
                    lg: "(min-width: 1100px)",
                    xl: "(min-width: 1280px)",
                    xxl: "(min-width: 1640px)"
                }, Zn = new Map;
                let Rn = -1,
                    Pn = {};
                const Fn = {
                    matchHandlers: {},
                    dispatch: e => (Pn = e, Zn.forEach((e => e(Pn))), Zn.size >= 1),
                    subscribe(e) {
                        return Zn.size || this.register(), Rn += 1, Zn.set(Rn, e), e(Pn), Rn
                    },
                    unsubscribe(e) {
                        Zn.delete(e), Zn.size || this.unregister()
                    },
                    unregister() {
                        Object.keys(kn).forEach((e => {
                            const t = kn[e],
                                n = this.matchHandlers[t];
                            n && null !== n.listener && n.mql.removeEventListener("change", n.listener)
                        })), Zn.clear()
                    },
                    register() {
                        Object.keys(kn).forEach((e => {
                            const t = kn[e],
                                n = ({
                                    matches: t
                                }) => {
                                    this.dispatch(Object.assign(Object.assign({}, Pn), {
                                        [e]: t
                                    }))
                                },
                                a = window.matchMedia(t);
                            a.addEventListener("change", n), this.matchHandlers[t] = {
                                mql: a,
                                listener: n
                            }, n(a)
                        }))
                    }
                };
                class ObjectService extends Service {
                    static * loadObjectData(e) {
                        var t;
                        const {
                            mapCode: n,
                            layerCode: a,
                            id: i
                        } = e.payload, s = yield*(0, f.Ys)((e => e.map.zoom));
                        let r = yield*(0, f.Ys)((e => I(e, `FULL_LAYERS_${n}`)));
                        r || (yield*(0, f.RE)(ContainerService.loadMapContent, O({
                            mapCode: n,
                            options: {
                                autoOn: !1
                            }
                        })), r = yield*(0, f.Ys)((e => I(e, `FULL_LAYERS_${n}`))));
                        const o = r.find((e => e.code === a));
                        o.selected || (yield*(0, f.RE)(ContainerService.setSelectedContainer, O({
                            mapCode: n,
                            containerId: o.id,
                            selected: !0
                        })));
                        let c, d, m, u, p = a,
                            h = i;
                        if (p === jn.PARKS) {
                            const {
                                data: e
                            } = yield*(0, f.RE)(ie, n, p, h, {
                                returnGeom: 0
                            });
                            e.fields.source && e.fields.source_id && (p = e.fields.source, h = e.fields.source_id, c = e.fields.source, d = e.fields.source_id)
                        }
                        if (null === (t = o.json) || void 0 === t ? void 0 : t.geography) {
                            const {
                                map: e,
                                layer: t,
                                parent_id: n
                            } = o.json.geography;
                            yield*(0, f.RE)(MapService.setGeography, O(!1)), yield*(0, f.RE)(ObjectsListService.loadGeography, O({
                                map: e,
                                layer: t,
                                parentCol: n,
                                parent: h
                            }))
                        }
                        if (o.json.admin) {
                            const [e, t] = yield*(0, f.$6)([(0, f.RE)(se, p, h, {
                                lng: l.ZP.language
                            }), (0, f.RE)(ie, n, p, h, {
                                returnGeom: 1,
                                geomSR: 3857,
                                geomZoom: s
                            })]);
                            m = {
                                data: e.data.structure
                            }, u = {
                                data: Object.assign(Object.assign({}, e.data.data), {
                                    geom: t.data.geom
                                })
                            }
                        } else {
                            const [e, t] = yield*(0, f.$6)([(0, f.RE)(ee, n, p, {
                                escape: 0
                            }), (0, f.RE)(ie, n, p, h, {
                                escape: 0,
                                returnGeom: 1,
                                geomSR: 3857,
                                geomZoom: s
                            })]);
                            m = e, u = t
                        }
                        if (c && d && (u.data.fields.source = c, u.data.fields.source_id = d), p === jn.COMPANIES) try {
                            (yield*(0, f.RE)(re, u.data.fields.ogrn, {
                                page: 1,
                                per_page: 1
                            })).data.data.length && (u.data.isCatalog = !0)
                        } catch (e) {
                            console.log("Ошибка запроса продукции")
                        }
                        if (yield*(0, f.Ys)((e => e.app.initParams.object))) {
                            if (yield*(0, f.RE)(AppService.setInitParam, "object", !1), 0 === Object.keys(u.data.fields).length) return void un({
                                object: ""
                            });
                            const e = window.matchMedia(kn.xs).matches;
                            yield*(0, f.RE)(ObjectService.fitToObject, O({
                                mapCode: n,
                                layerCode: a,
                                objectId: i,
                                withPadding: !e,
                                useHighlight: !0
                            }))
                        }
                        yield*(0, f.RE)(MapService.setHighlight, O(u.data.geom));
                        const g = m.data.filter((e => e.name));
                        return yield*(0, f.RE)(OperationsService.setMeta, "OBJECT_WINDOW", g), u.data.code = {
                            map: n,
                            layer: a
                        }, u.data
                    }
                    static * loadAbout(e) {
                        const {
                            mapCode: t
                        } = yield*(0, f.Ys)((e => e.app.config)), {
                            data: n
                        } = yield*(0, f.RE)(q, t, e.payload), [a, i] = yield*(0, f.$6)([(0, f.RE)(ee, t, e.payload, {
                            escape: 0
                        }), (0, f.RE)(ne, t, e.payload, {
                            escape: 0,
                            fields: "*"
                        })]);
                        return yield*(0, f.RE)(OperationsService.setMeta, "INFO_WINDOW", {
                            structure: a.data,
                            name: (null == n ? void 0 : n.name) || "Информация",
                            type: e.payload
                        }), i.data[0] || null
                    }
                    static * loadObjectGeom(e) {
                        const {
                            mapCode: t,
                            layerCode: n,
                            objectId: a
                        } = e.payload, i = yield*(0, f.Ys)((e => e.map)), {
                            data: s
                        } = yield*(0, f.RE)(ie, t, n, a, {
                            returnGeom: 1,
                            geomZoom: Math.round(i.zoom),
                            geomSR: "3857"
                        });
                        return s.geom
                    }
                    static * updateHighlightGeom(e) {
                        const t = yield*(0, f.RE)(ObjectService.loadObjectGeom, e);
                        yield*(0, f.RE)(MapService.setHighlight, O(t))
                    }
                    static * fitToObject(e) {
                        var t, n;
                        const a = e.payload,
                            {
                                withPadding: s,
                                useHighlight: r
                            } = a,
                            o = (0, i._T)(a, ["withPadding", "useHighlight"]);
                        let c = null;
                        const d = yield*(0, f.Ys)((e => e.map.highlightGeom));
                        if (r && d) {
                            c = (null === (t = (new Ee.Z).readFeature(d).getGeometry()) || void 0 === t ? void 0 : t.getExtent()) || null
                        } else {
                            const e = yield*(0, f.RE)(ObjectService.loadObjectGeom, O(o));
                            c = (null === (n = (new Ee.Z).readFeature(e).getGeometry()) || void 0 === n ? void 0 : n.getExtent()) || null
                        }
                        if (!c) return void(yield*(0, f.RE)(UiService.setNotify, O({
                            text: l.ZP.t("Геометрия отсутствует"),
                            type: en.danger
                        })));
                        const m = {
                            duration: 300,
                            maxZoom: 16
                        };
                        s && (m.padding = [0, 0, 0, 800]), yield*(0, f.RE)(MapService.fitToExtent, O({
                            extent: c,
                            options: m
                        }))
                    }
                }(0, i.gn)([L, B("OBJECT_WINDOW"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectService, "loadObjectData", null), (0, i.gn)([L, B("INFO_WINDOW"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectService, "loadAbout", null), (0, i.gn)([L, B("HIGHLIGHT_OBJECT"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectService, "updateHighlightGeom", null), (0, i.gn)([L, B("FIT_TO_OBJECT"), (0, i.w6)("design:type", Function), (0, i.w6)("design:paramtypes", [Object]), (0, i.w6)("design:returntype", void 0)], ObjectService, "fitToObject", null);
                const {
                    instance: Hn,
                    actions: $n
                } = C(ObjectService), Vn = (Object.assign(Object.assign(Object.assign(Object.assign({}, V.getReducer()), In.getReducer()), Ft.getReducer()), En.getReducer()), [V, In, Ft, En, _n, Mn, Hn]);
                var Un = n(745),
                    Bn = n(1072),
                    Gn = n(9250),
                    Dn = n(381),
                    Wn = n.n(Dn);
                var zn, Yn = n(6010);

                function Kn() {
                    return Kn = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Kn.apply(this, arguments)
                }
                const Jn = function(e) {
                    return s.createElement("svg", Kn({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 14,
                        height: 12,
                        fill: "currentColor"
                    }, e), zn || (zn = s.createElement("path", {
                        d: "M6.098 1.258a1.284 1.284 0 0 0-.91-.378H1.88C1.176.88.606 1.456.606 2.16L.6 9.84c0 .704.576 1.28 1.28 1.28h10.24c.704 0 1.28-.576 1.28-1.28v-6.4c0-.704-.576-1.28-1.28-1.28H7l-.902-.902Z"
                    })))
                };
                var Xn;

                function qn() {
                    return qn = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, qn.apply(this, arguments)
                }
                const Qn = function(e) {
                    return s.createElement("svg", qn({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 14,
                        height: 8,
                        fill: "currentColor"
                    }, e), Xn || (Xn = s.createElement("path", {
                        d: "M7.768.627 5.88 3.143l1.44 1.92a.642.642 0 0 1-.128.896.636.636 0 0 1-.896-.128c-.672-.896-1.479-1.965-1.984-2.65a.642.642 0 0 0-1.024 0L.728 6.593c-.314.428-.013 1.03.512 1.03h11.52a.641.641 0 0 0 .513-1.024L8.793.627a.635.635 0 0 0-1.025 0Z"
                    })))
                };
                var ea;

                function ta() {
                    return ta = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ta.apply(this, arguments)
                }
                const na = function(e) {
                    return s.createElement("svg", ta({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 20,
                        height: 20,
                        fill: "currentColor"
                    }, e), ea || (ea = s.createElement("path", {
                        fillRule: "evenodd",
                        d: "M5.5 12.7h2.7c.495 0 .9.405.9.9s-.405.9-.9.9H5.5A4.502 4.502 0 0 1 1 10c0-2.484 2.016-4.5 4.5-4.5h2.7c.495 0 .9.405.9.9s-.405.9-.9.9H5.5A2.708 2.708 0 0 0 2.8 10c0 1.485 1.215 2.7 2.7 2.7Zm9-7.2h-2.7c-.495 0-.9.405-.9.9s.405.9.9.9h2.7c1.485 0 2.7 1.215 2.7 2.7s-1.215 2.7-2.7 2.7h-2.7c-.495 0-.9.405-.9.9s.405.9.9.9h2.7c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5ZM6.4 10c0 .495.405.9.9.9h5.4c.495 0 .9-.405.9-.9s-.405-.9-.9-.9H7.3c-.495 0-.9.405-.9.9Z",
                        clipRule: "evenodd"
                    })))
                };
                var aa;

                function ia() {
                    return ia = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ia.apply(this, arguments)
                }
                const sa = function(e) {
                    return s.createElement("svg", ia({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 14,
                        height: 14,
                        fill: "currentColor"
                    }, e), aa || (aa = s.createElement("path", {
                        fillRule: "evenodd",
                        d: "M7 .6A6.402 6.402 0 0 0 .6 7c0 3.533 2.867 6.4 6.4 6.4 3.533 0 6.4-2.867 6.4-6.4C13.4 3.467 10.533.6 7 .6Zm-.64 11.475A5.113 5.113 0 0 1 1.88 7c0-.397.051-.774.135-1.146L5.08 8.92v.64c0 .704.576 1.28 1.28 1.28v1.235Zm3.2-2.515c.576 0 1.05.371 1.216.89A5.093 5.093 0 0 0 12.12 7a5.123 5.123 0 0 0-3.2-4.742v.262c0 .704-.576 1.28-1.28 1.28H6.36v1.28c0 .352-.288.64-.64.64H4.44V7h3.84c.352 0 .64.288.64.64v1.92h.64Z",
                        clipRule: "evenodd"
                    })))
                };
                const ra = (e, t, n) => {
                        if (!e) return null;
                        let a = e.icon;
                        return a.length ? ("/" !== a.charAt(0) && (a = `/${a}`), a = `${Y.axiosInstance.defaults.baseURL}${a}`) : a = e.map_info ? "map" : ["folder", "raster", "external"].includes(e.type) ? e.type : `${t}${n}/layers/${e.code}/icon`, a
                    },
                    oa = (e, t = "small") => {
                        let n, a;
                        switch (e) {
                            case "folder":
                                n = s.createElement("div", {
                                    className: (0, Yn.Z)(t && "oms-icon_" + t)
                                }, s.createElement(Jn, null));
                                break;
                            case "raster":
                                n = s.createElement("div", {
                                    className: (0, Yn.Z)(t && "oms-icon_" + t)
                                }, s.createElement(Qn, null));
                                break;
                            case "external":
                                n = s.createElement("div", {
                                    className: (0, Yn.Z)(t && "oms-icon_" + t)
                                }, s.createElement(na, null));
                                break;
                            case "map":
                                n = s.createElement("div", {
                                    className: (0, Yn.Z)(t && "oms-icon_" + t)
                                }, s.createElement(sa, null));
                                break;
                            default:
                                a = e && "/" === e.charAt(0) ? `${Y.axiosInstance.defaults.baseURL}${e}` : e, n = s.createElement("div", {
                                    className: (0, Yn.Z)(t && "layer-icon_" + t)
                                }, s.createElement("img", {
                                    src: String(a),
                                    alt: "icon"
                                }))
                        }
                        return n
                    },
                    la = (e, t, n, a = "small") => {
                        const i = ra(e, t, n);
                        return oa(i, a)
                    },
                    ca = (e, t = {}) => {
                        const n = e;
                        return function(e) {
                            return s.createElement("span", {
                                className: (0, Yn.Z)("wrapper-icon", e.className),
                                style: {
                                    display: "flex",
                                    lineHeight: 0
                                }
                            }, s.createElement(n, Object.assign({
                                fill: "currentColor"
                            }, t)))
                        }
                    },
                    da = (0, s.forwardRef)(((e, t) => {
                        const {
                            className: n,
                            variant: a = "H3"
                        } = e, r = (0, i._T)(e, ["className", "variant"]);
                        switch (a) {
                            case "H1":
                                return s.createElement("h1", Object.assign({
                                    ref: t,
                                    className: (0, Yn.Z)("oms-typography_title-1", n)
                                }, r));
                            case "H2":
                                return s.createElement("h2", Object.assign({
                                    ref: t,
                                    className: (0, Yn.Z)("oms-typography_title-2", n)
                                }, r));
                            case "H3":
                            default:
                                return s.createElement("h3", Object.assign({
                                    ref: t,
                                    className: (0, Yn.Z)("oms-typography_title-3", n)
                                }, r));
                            case "H4":
                                return s.createElement("h4", Object.assign({
                                    ref: t,
                                    className: (0, Yn.Z)("oms-typography_title-4", n)
                                }, r))
                        }
                    })),
                    ma = (0, s.forwardRef)(((e, t) => {
                        const {
                            className: n,
                            variant: a = "normal",
                            small: r,
                            disabled: o,
                            active: l,
                            secondary: c
                        } = e, d = (0, i._T)(e, ["className", "variant", "small", "disabled", "active", "secondary"]);
                        return s.createElement("p", Object.assign({
                            ref: t,
                            className: (0, Yn.Z)(a && "oms-typography_text-" + a, o && "oms-typography_disabled", l && "oms-typography_active", r && "text-small", c && "text-secondary", n)
                        }, d))
                    })),
                    ua = {
                        Service: e => {
                            const {
                                className: t,
                                variant: n = "info",
                                small: a
                            } = e, r = (0, i._T)(e, ["className", "variant", "small"]);
                            return s.createElement("p", Object.assign({
                                className: (0, Yn.Z)(n && "oms-typography_service-" + n, {
                                    "text-small": a
                                }, t)
                            }, r), e.children)
                        },
                        Anchor: (0, s.forwardRef)(((e, t) => {
                            const {
                                className: n,
                                small: a
                            } = e, r = (0, i._T)(e, ["className", "small"]);
                            return s.createElement("a", Object.assign({
                                ref: t,
                                className: (0, Yn.Z)("oms-typography_anchor", a && "text-small", n)
                            }, r))
                        })),
                        Text: ma,
                        Title: da
                    };
                var pa;

                function ha() {
                    return ha = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ha.apply(this, arguments)
                }
                const ga = function(e) {
                        return s.createElement("svg", ha({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 4,
                            height: 4,
                            fill: "currentColor"
                        }, e), pa || (pa = s.createElement("circle", {
                            cx: 2,
                            cy: 2,
                            r: 2
                        })))
                    },
                    va = s.forwardRef(((e, t) => {
                        const {
                            className: n,
                            type: a = "text",
                            subtitle: r,
                            label: o,
                            description: l,
                            alertType: c,
                            alertMessage: d,
                            hideClearButton: m,
                            placeholder: u,
                            required: p,
                            isFocus: h,
                            onFocus: g,
                            onBlur: v,
                            onChange: f = (() => null),
                            prefixIcon: y
                        } = e, b = (0, i._T)(e, ["className", "type", "subtitle", "label", "description", "alertType", "alertMessage", "hideClearButton", "placeholder", "required", "isFocus", "onFocus", "onBlur", "onChange", "prefixIcon"]), [E, w] = s.useState(!1), [S, j] = s.useState(""), O = t || s.createRef(), C = (0, s.useMemo)((() => b.disabled ? void 0 : c), [c, b.disabled]), N = ca(ga);
                        return s.createElement("div", {
                            className: (0, Yn.Z)(n, "oms-input-wrapper")
                        }, o && s.createElement("div", {
                            className: (0, Yn.Z)("oms-input-label", {
                                "oms-input-label_disabled": b.disabled
                            })
                        }, s.createElement(ua.Text, {
                            variant: "bold",
                            className: "oms-input-label-text",
                            disabled: b.disabled
                        }, o), p && s.createElement(ua.Service, {
                            className: "oms-input_required",
                            variant: "danger"
                        }, s.createElement(N, null)), l && s.createElement(ei, {
                            text: l,
                            arrow: !0
                        }, s.createElement(dc.InformationLine, null))), s.createElement("div", {
                            className: (0, Yn.Z)({
                                "oms-input": !b.disabled && !C,
                                "oms-input_disabled": b.disabled,
                                "oms-input_warning": "warning" === C,
                                "oms-input_error": "error" === C
                            })
                        }, "error" === C && s.createElement(dc.ErrorWarningLine, null), "warning" === C && s.createElement(dc.AlertLine, null), y && !C && s.createElement("div", {
                            className: "oms-input_prefix-wrapper"
                        }, y), s.createElement("div", {
                            className: "oms-input_content"
                        }, s.createElement("input", Object.assign({
                            ref: O,
                            type: a,
                            value: S,
                            onChange: e => {
                                if (f) {
                                    const {
                                        value: t
                                    } = e.currentTarget;
                                    f(t, e), j(t)
                                }
                            },
                            onFocus: (...e) => {
                                w(!0), h && h(!0), g && g(...e)
                            },
                            onBlur: (...e) => {
                                w(!1), v && v(...e)
                            }
                        }, b)), u && !E && !b.value && s.createElement("div", {
                            className: "wrapper-placeholder"
                        }, s.createElement(ua.Text, {
                            className: "oms-input_placeholder",
                            disabled: b.disabled
                        }, u), p && !o && s.createElement(ua.Service, {
                            className: "oms-input_required",
                            variant: "danger"
                        }, s.createElement(N, null)))), !m && S && s.createElement(s.Fragment, null, s.createElement("button", {
                            type: "button",
                            className: (0, Yn.Z)("oms-input_button", "input-clear"),
                            onClick: () => {
                                b.disabled || (f("", null), j(""))
                            },
                            onMouseDown: e => {
                                e.preventDefault()
                            },
                            disabled: b.disabled
                        }, s.createElement(dc.DeleteBack2Line, null)))), r && !C && s.createElement(ua.Text, {
                            disabled: !0,
                            className: "oms-input-subtitle"
                        }, r), d && C && s.createElement(ua.Service, {
                            variant: "error" === C ? "danger" : "warning",
                            className: "oms-input-error"
                        }, d))
                    }));
                var fa;

                function ya() {
                    return ya = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ya.apply(this, arguments)
                }
                const ba = function(e) {
                        return s.createElement("svg", ya({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 18,
                            height: 18,
                            fill: "currentColor"
                        }, e), fa || (fa = s.createElement("path", {
                            d: "m9 9.879 3.712-3.713 1.06 1.06L9 12 4.227 7.227l1.06-1.06L9 9.878Z"
                        })))
                    },
                    Ea = s.forwardRef(((e, t) => {
                        const {
                            className: n,
                            label: a,
                            description: r,
                            subtitle: o,
                            alertType: l,
                            alertMessage: c,
                            hideSpinButton: d,
                            placeholder: m,
                            variant: u = "large",
                            required: p,
                            isFocus: h,
                            onFocus: g,
                            onBlur: v,
                            onChange: f,
                            max: y,
                            min: b,
                            value: E,
                            prefixIcon: w
                        } = e, S = (0, i._T)(e, ["className", "label", "description", "subtitle", "alertType", "alertMessage", "hideSpinButton", "placeholder", "variant", "required", "isFocus", "onFocus", "onBlur", "onChange", "max", "min", "value", "prefixIcon"]), j = t || s.createRef(), [O, C] = s.useState(!1), N = (0, s.useMemo)((() => S.disabled ? void 0 : l), [l, S.disabled]), L = ca(ba), M = ca(ga);
                        return s.createElement("div", {
                            className: (0, Yn.Z)(n, "oms-input-number_wrapper")
                        }, a && s.createElement("div", {
                            className: (0, Yn.Z)("oms-input-label", {
                                "oms-input-label_disabled": S.disabled
                            })
                        }, s.createElement(ua.Text, {
                            variant: "bold",
                            className: "oms-input-label-text",
                            disabled: S.disabled
                        }, a), p && s.createElement(ua.Service, {
                            className: "oms-input_required",
                            variant: "danger"
                        }, s.createElement(M, null)), r && s.createElement(ei, {
                            text: r,
                            arrow: !0
                        }, s.createElement(dc.InformationLine, null))), s.createElement("div", {
                            className: (0, Yn.Z)({
                                "oms-input-number": !S.disabled && !N,
                                "oms-input-number_disabled": S.disabled,
                                "oms-input-number_error": "error" === N,
                                "oms-input-number_warning": "warning" === N
                            }, u && "oms-input-number_" + u)
                        }, "error" === N && s.createElement(dc.ErrorWarningLine, null), "warning" === N && s.createElement(dc.AlertLine, null), w && !N && s.createElement("div", {
                            className: "oms-input_prefix-wrapper"
                        }, w), s.createElement("div", {
                            className: "oms-input-number_content"
                        }, s.createElement("input", Object.assign({
                            type: "number",
                            ref: j,
                            value: E,
                            onChange: e => {
                                if (f) {
                                    const {
                                        value: t
                                    } = e.currentTarget;
                                    f(t, e)
                                }
                            },
                            max: y,
                            min: b,
                            onFocus: (...e) => {
                                C(!0), h && h(!0), g && g(...e)
                            },
                            onBlur: (...e) => {
                                C(!1), v && v(...e)
                            }
                        }, S)), m && !O && "number" != typeof E && s.createElement("div", {
                            className: "wrapper-placeholder"
                        }, s.createElement(ua.Text, {
                            className: "oms-input_placeholder",
                            disabled: S.disabled
                        }, m), p && !a && s.createElement(ua.Service, {
                            className: "oms-input_required",
                            variant: "danger"
                        }, s.createElement(M, null)))), !d && s.createElement(za, {
                            className: "oms-input-number_button-group",
                            orientation: "vertical",
                            noGaps: !0
                        }, s.createElement("button", {
                            type: "button",
                            className: "oms-input-number_button",
                            onClick: e => {
                                if (!S.disabled) {
                                    let t = Number(E) + 1;
                                    Number.isNaN(t) || (void 0 !== y && t > y && (t = y), void 0 !== b && t < b && (t = b), f(String(t), e))
                                }
                            },
                            onMouseDown: e => {
                                e.preventDefault()
                            },
                            disabled: S.disabled
                        }, s.createElement(L, {
                            className: "oms-input-number_icon increment"
                        })), s.createElement("button", {
                            type: "button",
                            className: "oms-input-number_button",
                            onClick: e => {
                                if (!S.disabled) {
                                    let t = Number(E) - 1;
                                    Number.isNaN(t) || (void 0 !== b && t < b && (t = b), void 0 !== y && t > y && (t = y), f(String(t), e))
                                }
                            },
                            onMouseDown: e => {
                                e.preventDefault()
                            },
                            disabled: S.disabled
                        }, s.createElement(L, {
                            className: "oms-input-number_icon"
                        })))), o && !N && s.createElement(ua.Text, {
                            disabled: !0
                        }, o), c && N && s.createElement(ua.Service, {
                            variant: "error" === N ? "danger" : "warning",
                            className: "oms-input-error"
                        }, c))
                    })),
                    wa = s.forwardRef(((e, t) => {
                        const {
                            className: n,
                            alertType: a,
                            onChange: r,
                            max: o,
                            min: l,
                            value: c,
                            hideSpinButton: d
                        } = e, m = (0, i._T)(e, ["className", "alertType", "onChange", "max", "min", "value", "hideSpinButton"]), u = t || s.createRef(), p = (0, s.useMemo)((() => m.disabled ? void 0 : a), [a, m.disabled]), h = ca(ba);
                        return s.createElement("div", {
                            className: (0, Yn.Z)(n, "oms-input-number-mini", {
                                "oms-input-number-mini_disabled": m.disabled,
                                "oms-input-number-mini_error": "error" === p,
                                "oms-input-number-mini_warning": "warning" === p,
                                "oms-input-number-mini_no-spin": d
                            })
                        }, s.createElement("input", Object.assign({
                            type: "number",
                            ref: u,
                            value: c,
                            max: o,
                            min: l,
                            onChange: e => {
                                if (r) {
                                    const {
                                        value: t
                                    } = e.currentTarget;
                                    r(t, e)
                                }
                            }
                        }, m)), !d && s.createElement(za, {
                            className: "oms-input-number-mini_button-group",
                            orientation: "vertical",
                            noGaps: !0
                        }, s.createElement("button", {
                            type: "button",
                            className: "oms-input-number-mini_button",
                            onClick: e => {
                                if (!m.disabled) {
                                    let t = Number(c) + 1;
                                    Number.isNaN(t) || (void 0 !== o && t > o && (t = o), void 0 !== l && t < l && (t = l), r(String(t), e))
                                }
                            },
                            onMouseDown: e => {
                                e.preventDefault()
                            },
                            disabled: m.disabled
                        }, s.createElement(h, {
                            className: "oms-input-number-mini_icon increment"
                        })), s.createElement("button", {
                            type: "button",
                            className: "oms-input-number-mini_button",
                            onClick: e => {
                                if (!m.disabled) {
                                    let t = Number(c) - 1;
                                    Number.isNaN(t) || (void 0 !== l && t < l && (t = l), void 0 !== o && t > o && (t = o), r(String(t), e))
                                }
                            },
                            onMouseDown: e => {
                                e.preventDefault()
                            },
                            disabled: m.disabled
                        }, s.createElement(h, {
                            className: "oms-input-number-mini_icon"
                        }))))
                    }));
                var Sa = n(7856),
                    ja = n(8381);
                var Oa, Ca = n(6329),
                    Na = n(5647),
                    La = n(7590),
                    Ma = n(364),
                    Aa = n(5369),
                    _a = n(4993);

                function xa() {
                    return xa = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, xa.apply(this, arguments)
                }
                const Ia = function(e) {
                    return s.createElement("svg", xa({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 16,
                        height: 16,
                        fill: "currentColor"
                    }, e), Oa || (Oa = s.createElement("path", {
                        d: "M5.75.75v1.5h4.5V.75h1.5v1.5h3a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H1.25A.75.75 0 0 1 .5 15V3a.75.75 0 0 1 .75-.75h3V.75h1.5ZM14 8.25H2v6h12v-6Zm-9.75-4.5H2v3h12v-3h-2.25v1.5h-1.5v-1.5h-4.5v1.5h-1.5v-1.5Z"
                    })))
                };
                var Ta;

                function ka() {
                    return ka = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ka.apply(this, arguments)
                }
                const Za = function(e) {
                    return s.createElement("svg", ka({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 20,
                        height: 20
                    }, e), Ta || (Ta = s.createElement("path", {
                        d: "m7.047 10.695 4.518 4.518a.98.98 0 1 0 1.388-1.388l-3.82-3.83 3.82-3.818a.98.98 0 1 0-1.388-1.388L7.047 9.307a.98.98 0 0 0 0 1.388Z"
                    })))
                };
                var Ra;

                function Pa() {
                    return Pa = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Pa.apply(this, arguments)
                }
                const Fa = function(e) {
                    return s.createElement("svg", Pa({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 20,
                        height: 20
                    }, e), Ra || (Ra = s.createElement("path", {
                        d: "M12.953 9.307 8.435 4.789a.98.98 0 1 0-1.388 1.388l3.82 3.829-3.82 3.819a.98.98 0 1 0 1.388 1.388l4.518-4.518a.98.98 0 0 0 0-1.388Z"
                    })))
                };
                var Ha;

                function $a() {
                    return $a = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, $a.apply(this, arguments)
                }
                const Va = function(e) {
                    return s.createElement("svg", $a({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 20,
                        height: 20
                    }, e), Ha || (Ha = s.createElement("path", {
                        fillRule: "evenodd",
                        d: "M6.666 5.833A.836.836 0 0 0 5.832 5 .836.836 0 0 0 5 5.833v8.334c0 .458.375.833.833.833a.836.836 0 0 0 .834-.833V5.833ZM11.516 10l3.233 3.242c.325.316.325.85.008 1.166a.83.83 0 0 1-1.175 0l-3.825-3.825a.83.83 0 0 1 0-1.175l3.825-3.825a.83.83 0 1 1 1.175 1.175L11.516 10Z",
                        clipRule: "evenodd"
                    })))
                };
                var Ua;

                function Ba() {
                    return Ba = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Ba.apply(this, arguments)
                }
                const Ga = function(e) {
                        return s.createElement("svg", Ba({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 20,
                            height: 20
                        }, e), Ua || (Ua = s.createElement("path", {
                            fillRule: "evenodd",
                            d: "M13.334 14.167c0 .458.375.833.834.833a.836.836 0 0 0 .833-.833V5.833A.836.836 0 0 0 14.168 5a.836.836 0 0 0-.834.833v8.334ZM8.484 10 5.251 6.758a.827.827 0 0 1-.008-1.166.83.83 0 0 1 1.175 0l3.825 3.825a.83.83 0 0 1 0 1.175l-3.825 3.825a.83.83 0 1 1-1.175-1.175L8.484 10Z",
                            clipRule: "evenodd"
                        })))
                    },
                    Da = {
                        ru: Na.Z,
                        en: La.Z,
                        es: Ma.Z,
                        zh: Aa.Z
                    },
                    Wa = {
                        Text: va,
                        Number: Ea,
                        Select: e => {
                            var {
                                value: t,
                                options: n,
                                onChange: a,
                                isFocus: r,
                                onFocus: o,
                                onBlur: l,
                                className: c,
                                subtitle: d,
                                label: m,
                                description: u,
                                alertType: p,
                                alertMessage: h,
                                icon: g,
                                colorTag: v = !1,
                                placeholder: f
                            } = e, y = (0, i._T)(e, ["value", "options", "onChange", "isFocus", "onFocus", "onBlur", "className", "subtitle", "label", "description", "alertType", "alertMessage", "icon", "colorTag", "placeholder"]);
                            const [b, E] = s.useState(!1), [w, S] = s.useState(n.filter((e => t.includes(e.value)))), j = (0, s.useMemo)((() => y.isDisabled ? void 0 : p), [p, y.isDisabled]), {
                                t: O
                            } = (0, Bn.$G)(), C = ca(ga), N = e => {
                                const {
                                    children: t
                                } = e, n = (0, i._T)(e, ["children"]);
                                return s.createElement(Sa.c.Control, Object.assign({}, n), s.createElement("div", {
                                    className: "oms-input-select__icon"
                                }, "error" === j && s.createElement(dc.ErrorWarningLine, null), "warning" === j && s.createElement(dc.AlertLine, null), !j && g), t)
                            }, L = e => s.createElement(Sa.c.ClearIndicator, Object.assign({}, e), s.createElement("span", {
                                className: "input-clear"
                            }, s.createElement(dc.DeleteBack2Line, null))), M = e => s.createElement(Sa.c.DropdownIndicator, Object.assign({}, e), s.createElement(dc.ArrowDownSLine, null)), A = e => {
                                const {
                                    label: t,
                                    isSelected: n
                                } = e, a = (0, i._T)(e, ["label", "isSelected"]);
                                return s.createElement(Sa.c.Option, Object.assign({}, a, {
                                    isSelected: n
                                }), s.createElement(ua.Text, {
                                    variant: "bold",
                                    title: t
                                }, t), n && s.createElement(dc.CheckFill, null))
                            }, _ = e => s.createElement("div", {
                                className: "scroll-menu",
                                style: {
                                    height: `calc((3rem + 2px) * ${n.length||1})`
                                }
                            }, s.createElement(Zi, null, e.children)), x = e => {
                                var t, n;
                                const {
                                    index: a,
                                    selectProps: i
                                } = e, r = (null === (t = i.value) || void 0 === t ? void 0 : t.length) || 0;
                                return 3 === a ? s.createElement("div", {
                                    className: "oms-input-select__multi-value",
                                    title: null === (n = i.value) || void 0 === n ? void 0 : n.slice(3).map((e => e.label)).join("\n")
                                }, s.createElement("div", {
                                    className: "oms-input-select__multi-value__label"
                                }, "+", r - 3)) : a > 2 ? null : s.createElement(Sa.c.MultiValue, Object.assign({
                                    className: r > 1 ? "f1" : ""
                                }, e))
                            }, I = e => s.createElement("div", {
                                className: "oms-input-select__multi-value__label css-wsp0cs-MultiValueGeneric",
                                title: e.data.label
                            }, e.data.label), T = e => s.createElement(Sa.c.MultiValueRemove, Object.assign({}, e), s.createElement(dc.CloseLine, null)), k = (0, s.useMemo)((() => {
                                const e = {
                                    ClearIndicator: L,
                                    DropdownIndicator: M,
                                    Option: A,
                                    MultiValue: x,
                                    MultiValueRemove: T,
                                    MultiValueLabel: I,
                                    MenuList: _
                                };
                                return (g || j) && (e.Control = N), e
                            }), [g, j]);
                            return s.createElement("div", {
                                className: (0, Yn.Z)(c, "oms-input-select-wrapper", y.isMulti && "multi", v && "tag")
                            }, m && s.createElement("div", {
                                className: (0, Yn.Z)("oms-input-label", {
                                    "oms-input-label_disabled": y.isDisabled
                                })
                            }, s.createElement(ua.Text, {
                                variant: "medium",
                                className: "oms-input-label-text",
                                title: m,
                                disabled: y.isDisabled
                            }, m), y.required && s.createElement(ua.Service, {
                                className: "oms-input_required",
                                variant: "danger"
                            }, s.createElement(C, null)), u && s.createElement(ei, {
                                text: u,
                                arrow: !0
                            }, s.createElement(dc.InformationLine, null))), s.createElement(ja.ZP, Object.assign({
                                className: (0, Yn.Z)({
                                    "oms-input-select": !y.isDisabled && !j,
                                    "oms-input-select--is-error": "error" === j,
                                    "oms-input-select--is-warning": "warning" === j
                                }),
                                classNamePrefix: "oms-input-select",
                                components: k,
                                options: n,
                                defaultValue: w,
                                value: n.filter((e => t.includes(e.value))),
                                onChange: e => {
                                    const t = null != e ? e : [],
                                        n = Array.isArray(t) ? t : [t];
                                    S(n), a(n.map((e => e.value)))
                                },
                                onFocus: (...e) => {
                                    E(!0), r && r(!0), o && o(...e)
                                },
                                onBlur: (...e) => {
                                    E(!1), l && l(...e)
                                },
                                menuPlacement: "auto",
                                menuPosition: "fixed",
                                loadingMessage: () => `${O("Загрузка")}...`,
                                noOptionsMessage: () => `${O("Не найдено")}`,
                                placeholder: s.createElement(s.Fragment, null, s.createElement(ua.Text, {
                                    disabled: !0
                                }, f || O("Выберите...")), y.required && !m && s.createElement(ua.Service, {
                                    className: "oms-input_required",
                                    variant: "danger"
                                }, s.createElement(C, null)))
                            }, y)), d && !j && s.createElement(ua.Text, {
                                disabled: !0
                            }, d), h && j && s.createElement(ua.Service, {
                                variant: "error" === j ? "danger" : "warning"
                            }, h))
                        },
                        Date: e => {
                            var {
                                className: t,
                                value: n,
                                format: a,
                                alertType: r,
                                alertMessage: o,
                                prefixIcon: c,
                                subtitle: d,
                                label: m,
                                description: u,
                                required: p,
                                placeholder: h
                            } = e, g = (0, i._T)(e, ["className", "value", "format", "alertType", "alertMessage", "prefixIcon", "subtitle", "label", "description", "required", "placeholder"]);
                            const v = {
                                    generateConfig: _a.Z
                                },
                                [f, y] = s.useState(!1),
                                b = (0, s.useMemo)((() => g.disabled ? void 0 : r), [r, g.disabled]),
                                E = ca(Ia),
                                w = ca(Za),
                                S = ca(Fa),
                                j = ca(Va),
                                O = ca(Ga),
                                C = ca(ga);
                            return s.createElement("div", {
                                className: "oms-input-date_wrapper"
                            }, m && s.createElement("div", {
                                className: (0, Yn.Z)("oms-input-label", {
                                    "oms-input-label_disabled": g.disabled
                                })
                            }, s.createElement(ua.Text, {
                                variant: "bold",
                                className: "oms-input-label-text",
                                disabled: g.disabled
                            }, m), p && s.createElement(ua.Service, {
                                className: "oms-input_required",
                                variant: "danger"
                            }, s.createElement(C, null)), u && s.createElement(ei, {
                                text: u,
                                arrow: !0
                            }, s.createElement(dc.InformationLine, null))), s.createElement("div", {
                                className: (0, Yn.Z)("oms-input-date_control", {
                                    "oms-input-date_control_error": "error" === b,
                                    "oms-input-date_control_warning": "warning" === b
                                })
                            }, "error" === b && s.createElement(dc.ErrorWarningLine, null), "warning" === b && s.createElement(dc.AlertLine, null), c && !b && s.createElement("div", {
                                className: "oms-input_prefix-wrapper"
                            }, c), s.createElement("div", {
                                className: (0, Yn.Z)("oms-input_content", {
                                    "oms-input_content-disabled": g.disabled
                                })
                            }, s.createElement(Ca.ZP, Object.assign({
                                locale: Da[l.ZP.language] || Na.Z,
                                value: n,
                                format: a || "DD.MM.YYYY",
                                prefixCls: "oms-input-date",
                                className: t,
                                suffixIcon: s.createElement(E, null),
                                clearIcon: s.createElement(dc.DeleteBack2Line, null),
                                allowClear: !!n,
                                superPrevIcon: s.createElement(j, null),
                                superNextIcon: s.createElement(O, null),
                                prevIcon: s.createElement(w, null),
                                nextIcon: s.createElement(S, null),
                                onFocus: () => y(!0),
                                onBlur: () => y(!1)
                            }, g, v)), h && !f && !n && s.createElement("div", {
                                className: "wrapper-placeholder"
                            }, s.createElement(ua.Text, {
                                className: "oms-input_placeholder",
                                disabled: g.disabled
                            }, h), p && !m && s.createElement(ua.Service, {
                                className: "oms-input_required",
                                variant: "danger"
                            }, s.createElement(C, null))))), d && !b && s.createElement(ua.Text, {
                                disabled: !0,
                                className: "oms-input-subtitle"
                            }, d), o && b && s.createElement(ua.Service, {
                                variant: "error" === b ? "danger" : "warning",
                                className: "oms-input-error"
                            }, o))
                        },
                        NumberMini: wa
                    },
                    za = s.forwardRef(((e, t) => {
                        const {
                            className: n,
                            orientation: a,
                            noGaps: r
                        } = e, o = (0, i._T)(e, ["className", "orientation", "noGaps"]);
                        return s.createElement("div", Object.assign({
                            className: (0, Yn.Z)(a && "oms-button-group_" + a, r && "no-gaps", n),
                            ref: t
                        }, o))
                    }));
                var Ya = n(3935);
                const Ka = (e, t, n) => {
                        const a = {
                            top: "0px",
                            left: "0px"
                        };
                        if (e && t) {
                            const i = e.getBoundingClientRect(),
                                s = t.getBoundingClientRect();
                            switch (n) {
                                case "topLeft":
                                    a.top = i.top - s.height + "px", a.left = `${i.left}px`;
                                    break;
                                case "top":
                                    a.top = i.top - s.height + "px", a.left = `\n                    ${i.left-(s.width-i.width)/2}px\n                `;
                                    break;
                                case "topRight":
                                    a.top = i.top - s.height + "px", a.left = i.right - s.width + "px";
                                    break;
                                case "rightTop":
                                    a.top = `${i.top}px`, a.left = `${i.right}px`;
                                    break;
                                case "right":
                                    a.top = `\n                    ${i.top-(s.height-i.height)/2}px\n                `, a.left = `${i.right}px`;
                                    break;
                                case "rightBottom":
                                    a.top = i.bottom - s.height + "px", a.left = `${i.right}px`;
                                    break;
                                case "bottomRight":
                                    a.top = `${i.bottom}px`, a.left = i.right - s.width + "px";
                                    break;
                                case "bottom":
                                    a.top = `${i.bottom}px`, a.left = `\n                    ${i.left-(s.width-i.width)/2}px\n                `;
                                    break;
                                case "bottomLeft":
                                    a.top = `${i.bottom}px`, a.left = `${i.left}px`;
                                    break;
                                case "leftBottom":
                                    a.top = i.bottom - s.height + "px", a.left = i.left - s.width + "px";
                                    break;
                                case "left":
                                    a.top = `\n                    ${i.top-(s.height-i.height)/2}px\n                `, a.left = i.left - s.width + "px";
                                    break;
                                case "leftTop":
                                    a.top = `${i.top}px`, a.left = i.left - s.width + "px"
                            }
                        }
                        return a
                    },
                    Ja = (e, t) => {
                        const n = {};
                        return (null == t ? void 0 : t.startsWith("top")) ? n.margin = `0 0 ${e}px` : (null == t ? void 0 : t.startsWith("left")) ? n.margin = `0 ${e}px 0 0` : (null == t ? void 0 : t.startsWith("right")) ? n.margin = `0 0 0 ${e}px` : n.margin = `${e}px 0 0`, n
                    },
                    Xa = ({
                        overlay: e,
                        placement: t = "bottomLeft",
                        trigger: n = "click",
                        children: a,
                        className: i = "",
                        container: r = "#app-root",
                        offset: o,
                        hideTimeout: l = 250,
                        hideOnClick: c = !1,
                        tooltip: d,
                        onChangeShow: m = (() => {})
                    }) => {
                        const [u, p] = (0, s.useState)(null), [h, g] = (0, s.useState)(!1), v = (0, s.useMemo)((() => document.querySelector(r)), [r]), f = null != o ? o : .5 * parseInt(v ? window.getComputedStyle(v).fontSize : ""), y = (0, s.useRef)(0), b = (0, s.useRef)(null);
                        (0, s.useEffect)((() => {
                            if (h && u) {
                                const e = u.getBoundingClientRect(),
                                    t = null == v ? void 0 : v.getBoundingClientRect(),
                                    {
                                        width: n,
                                        height: a
                                    } = e;
                                if (!t) return;
                                t.top > e.top && (u.style.top = `${t.top}px`), t.bottom < e.bottom && (u.style.top = t.bottom - a + "px"), t.right < e.right && (u.style.left = t.right - n + "px"), t.left > e.left && (u.style.left = `${t.left}px`)
                            }
                        }), [h, u]), (0, s.useEffect)((() => {
                            m(h)
                        }), [h]);
                        const E = () => {
                                clearTimeout(y.current), g(!0)
                            },
                            w = () => {
                                l ? (clearTimeout(y.current), y.current = setTimeout((() => g(!1)), l)) : g(!1)
                            };
                        return s.createElement(s.Fragment, null, s.Children.map(a, (e => s.isValidElement(e) ? s.cloneElement(e, Object.assign(Object.assign(Object.assign({}, e.props), (e => {
                            const {
                                onClick: t
                            } = e, a = {};
                            switch (n) {
                                case "click":
                                    a.onClick = e => {
                                        t && t(e), g(!h)
                                    }, a.onMouseLeave = w;
                                    break;
                                case "hover":
                                    a.onMouseEnter = E, a.onMouseLeave = w
                            }
                            return a
                        })(e.props)), {
                            ref: b
                        })) : null)), !!e && h && Ya.createPortal(s.createElement("div", Object.assign({
                            className: (0, Yn.Z)("oms-dropdown", i),
                            style: Object.assign({}, Ka(b.current, u, t)),
                            ref: p
                        }, (() => {
                            const e = {};
                            return e.onMouseEnter = E, e.onMouseLeave = w, c && (e.onClick = w), e
                        })()), Array.isArray(e) ? s.createElement("ul", {
                            style: Object.assign({}, Ja(f, t)),
                            className: "oms-dropdown_list"
                        }, e) : s.createElement("div", {
                            className: (0, Yn.Z)({
                                "oms-tooltip": d,
                                left: t.startsWith("left")
                            }),
                            style: Object.assign({}, Ja(f, t))
                        }, e)), v))
                    },
                    qa = e => {
                        var {
                            children: t,
                            disabled: n,
                            prefixIcon: a,
                            suffixIcon: r
                        } = e, o = (0, i._T)(e, ["children", "disabled", "prefixIcon", "suffixIcon"]);
                        return s.createElement("li", Object.assign({}, o, {
                            className: (0, Yn.Z)("oms-dropdown_item", o.className, n && "disabled")
                        }), s.createElement("label", {
                            className: "oms-dropdown_label"
                        }, a && s.createElement("div", {
                            className: "oms-dropdown_item-prefix"
                        }, a), s.Children.map(t, (e => s.isValidElement(e) ? s.cloneElement(e, Object.assign(Object.assign({}, e.props), {
                            disabled: !!n,
                            className: (0, Yn.Z)("oms-dropdown_child", e.props.className)
                        })) : null)), r && s.createElement("div", {
                            className: "oms-dropdown_item-suffix"
                        }, r)))
                    },
                    Qa = "tooltip_overlay",
                    ei = e => {
                        const {
                            text: t,
                            arrow: n,
                            placement: a = "right",
                            children: r
                        } = e, o = (0, i._T)(e, ["text", "arrow", "placement", "children"]), l = xi(), c = s.createElement("div", {
                            className: (0, Yn.Z)(Qa, {
                                tooltip_arrow: n
                            }, a)
                        }, t);
                        return s.createElement(Xa, Object.assign({
                            overlay: c,
                            trigger: l.xs ? "click" : "hover",
                            placement: a
                        }, o), s.createElement("div", {
                            className: "wrapper"
                        }, r))
                    };
                var ti, ni = n(6928);

                function ai() {
                    return ai = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ai.apply(this, arguments)
                }
                const ii = function(e) {
                        return s.createElement("svg", ai({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 16,
                            height: 16,
                            fill: "currentColor"
                        }, e), ti || (ti = s.createElement("path", {
                            d: "M8 14.667A6.667 6.667 0 1 1 8 1.333a6.667 6.667 0 0 1 0 13.334Zm0-1.334A5.333 5.333 0 1 0 8 2.667a5.333 5.333 0 0 0 0 10.666Zm-.667-8.666h1.334V6H7.334V4.667Zm0 2.666h1.334v4H7.334v-4Z"
                        })))
                    },
                    si = e => {
                        const {
                            className: t,
                            label: n,
                            description: a,
                            showValue: r,
                            onChange: o = (() => null),
                            value: l
                        } = e, c = (0, i._T)(e, ["className", "label", "description", "showValue", "onChange", "value"]), d = ca(ii);
                        return s.createElement("div", {
                            className: (0, Yn.Z)("oms-slider-wrapper", {
                                "oms-slider-wrapper-disabled": c.disabled
                            })
                        }, n && s.createElement("div", {
                            className: "oms-slider-label"
                        }, s.createElement(ua.Text, {
                            className: "oms-slider-label-text",
                            disabled: c.disabled,
                            title: n
                        }, n), a && s.createElement(ei, {
                            text: a,
                            arrow: !0
                        }, s.createElement(d, {
                            className: "oms-slider_info"
                        }))), s.createElement("div", {
                            className: "oms-slider-control"
                        }, s.createElement(ni.Z, Object.assign({
                            className: (0, Yn.Z)("oms-slider", t),
                            onChange: o,
                            value: l
                        }, c)), "number" == typeof l && s.createElement("div", {
                            className: "oms-slider-single-value"
                        }, s.createElement(Wa.NumberMini, {
                            value: l,
                            onChange: e => o(Number(e)),
                            min: c.min,
                            max: c.max,
                            disabled: c.disabled,
                            hideSpinButton: !0
                        }))), Array.isArray(l) && r && s.createElement("div", {
                            className: "oms-slider-range-values"
                        }, s.createElement(Wa.NumberMini, {
                            value: l[0],
                            onChange: e => o([Number(e), l[1]]),
                            min: c.min,
                            max: c.max,
                            disabled: c.disabled,
                            hideSpinButton: !0
                        }), s.createElement(Wa.NumberMini, {
                            value: l[1],
                            onChange: e => o([l[0], Number(e)]),
                            min: c.min,
                            max: c.max,
                            disabled: c.disabled,
                            hideSpinButton: !0
                        })))
                    },
                    ri = "counter",
                    oi = "counterPrimary",
                    li = "counterSecondary",
                    ci = "counterActive",
                    di = "counterDisable",
                    mi = e => {
                        const {
                            count: t,
                            variant: n = "primary",
                            disabled: a
                        } = e;
                        return s.createElement("div", {
                            className: (0, Yn.Z)(ri, {
                                [oi]: "primary" === n,
                                [li]: "secondary" === n,
                                [ci]: "active" === n,
                                [di]: a
                            })
                        }, s.createElement(ua.Text, {
                            variant: "bold",
                            small: !0
                        }, t))
                    },
                    ui = {
                        primary: "primary",
                        accent: "primary",
                        secondary: "secondary",
                        active: "active",
                        ghost: "active",
                        default: "active"
                    },
                    pi = (0, s.forwardRef)(((e, t) => {
                        const {
                            className: n,
                            size: a = "large",
                            variant: r = "primary",
                            pressed: o = !1,
                            icon: l,
                            children: c,
                            count: d
                        } = e, m = (0, i._T)(e, ["className", "size", "variant", "pressed", "icon", "children", "count"]);
                        return s.createElement("button", Object.assign({
                            ref: t,
                            type: "button",
                            className: (0, Yn.Z)(a && "oms-button_" + a, r && "oms-button_" + r, o && "oms-button_pressed", !c && 0 !== c && void 0 === d && "no-text", n)
                        }, m), l && l, c && s.createElement("span", {
                            className: "wrapper-text"
                        }, c), "number" == typeof d && s.createElement(mi, {
                            count: d,
                            variant: ui[r],
                            disabled: m.disabled
                        }))
                    })),
                    hi = "omsTag",
                    gi = "omsTagSuccess",
                    vi = "omsTagWarning",
                    fi = "omsTagDanger",
                    yi = "omsTagInfo",
                    bi = "omsTagDisabled",
                    Ei = e => {
                        const {
                            children: t,
                            variant: n = "default",
                            disabled: a
                        } = e;
                        return s.createElement("div", {
                            className: (0, Yn.Z)(hi, {
                                [gi]: "success" === n,
                                [vi]: "warning" === n,
                                [fi]: "danger" === n,
                                [yi]: "info" === n,
                                [bi]: a
                            })
                        }, s.createElement(ua.Text, {
                            variant: "medium",
                            small: !0
                        }, t))
                    },
                    wi = e => {
                        const {
                            className: t,
                            alignment: n = "center",
                            bold: a,
                            indeterminate: r,
                            label: o
                        } = e, l = (0, i._T)(e, ["className", "alignment", "bold", "indeterminate", "label"]);
                        return s.createElement("label", {
                            className: (0, Yn.Z)(n && "wrapper-checkbox_" + n, t)
                        }, s.createElement("label", {
                            className: (0, Yn.Z)({
                                "oms-checkbox": !l.checked && !r,
                                "oms-checkbox_checked": l.checked,
                                "oms-checkbox_indeterminate": r
                            }, l.disabled && "oms-checkbox_disabled")
                        }, s.createElement("input", Object.assign({}, l, {
                            type: "checkbox"
                        })), l.checked && s.createElement(dc.CheckFill, null), r && s.createElement(dc.SubtractFill, null)), o && s.createElement(ua.Text, {
                            className: (0, Yn.Z)(l.disabled ? "oms-checkbox_label-disabled" : "oms-checkbox_label"),
                            variant: a ? "bold" : "normal",
                            disabled: l.disabled
                        }, o))
                    },
                    Si = e => {
                        const {
                            className: t,
                            alignment: n = "center",
                            bold: a,
                            label: r
                        } = e, o = (0, i._T)(e, ["className", "alignment", "bold", "label"]);
                        return s.createElement("label", {
                            className: (0, Yn.Z)(n && "wrapper-radio_" + n, t)
                        }, s.createElement("label", {
                            className: (0, Yn.Z)({
                                "oms-radio": !o.checked,
                                "oms-radio_checked": o.checked
                            }, o.disabled && "oms-radio_disabled")
                        }, s.createElement("input", Object.assign({}, o, {
                            type: "radio"
                        }))), r && s.createElement(ua.Text, {
                            className: (0, Yn.Z)(o.disabled ? "oms-radio_label-disabled" : "oms-radio_label"),
                            variant: a ? "bold" : "normal",
                            disabled: o.disabled
                        }, r))
                    },
                    ji = e => {
                        const {
                            tabs: t,
                            active: n,
                            onChange: a,
                            className: i,
                            orientation: r = "horizontal",
                            disabled: o
                        } = e;
                        (0, s.useRef)([]).current = t.map((() => (0, s.createRef)()));
                        return s.createElement(za, {
                            className: (0, Yn.Z)("oms-tabs", i),
                            orientation: r
                        }, t.map((e => (e => s.createElement("button", {
                            onClick: n === e.key ? () => null : () => a(e.key),
                            style: {
                                flexBasis: `calc(100% / ${t.length})`
                            },
                            key: e.key,
                            title: (0, l.t)(e.label),
                            className: (0, Yn.Z)("oms-tabs_item", {
                                "oms-tabs_item-active": n === e.key
                            }),
                            disabled: o || e.disabled
                        }, s.createElement(ua.Text, {
                            variant: "medium",
                            disabled: n !== e.key
                        }, (0, l.t)(e.label)), "number" == typeof e.count && s.createElement(mi, {
                            count: e.count,
                            variant: "secondary"
                        })))(e))))
                    },
                    Oi = e => {
                        const {
                            items: t,
                            refElement: n
                        } = e, [a, i] = (0, s.useState)(t.map((e => !!e.collapse)));
                        return s.createElement("div", {
                            className: "oms-collapse",
                            ref: n
                        }, t.map(((e, t) => {
                            const n = "k" + t;
                            return s.createElement("div", {
                                key: n
                            }, s.createElement("div", {
                                className: (0, Yn.Z)("head", e.className),
                                id: e.id,
                                onClick: () => {
                                    const e = [...a];
                                    e[t] = !e[t], i(e)
                                },
                                title: e.name
                            }, s.createElement("div", {
                                className: "oms-collapse-arrow " + (a[t] ? "right" : "bottom")
                            }), s.createElement(ua.Title, {
                                variant: "H4"
                            }, e.name), e.extra), !a[t] && s.createElement("div", {
                                className: "pane"
                            }, e.element))
                        })))
                    },
                    Ci = e => s.createElement(pi, Object.assign({
                        icon: s.createElement(dc.CloseLine, null),
                        size: "small",
                        variant: "ghost"
                    }, e)),
                    Ni = "omsAlert",
                    Li = "omsAlertIconWrapper",
                    Mi = "omsAlertText",
                    Ai = e => {
                        const {
                            variant: t = "info",
                            text: n,
                            onClose: a
                        } = e;
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Ni, `${Ni}-${t}`)
                        }, s.createElement("div", {
                            className: Li
                        }, "success" === t && s.createElement(dc.CheckboxCircleLine, null), "info" === t && s.createElement(dc.InformationLine, null), "warning" === t && s.createElement(dc.AlertLine, null), "danger" === t && s.createElement(dc.ErrorWarningLine, null)), s.createElement(ua.Text, {
                            className: Mi,
                            variant: "medium"
                        }, n), a && s.createElement(Ci, {
                            onClick: a
                        }))
                    },
                    _i = {
                        Container: s.forwardRef(((e, t) => {
                            const {
                                className: n,
                                size: a = "m",
                                orientation: r = "vertical"
                            } = e, o = (0, i._T)(e, ["className", "size", "orientation"]);
                            return s.createElement("div", Object.assign({
                                className: (0, Yn.Z)("oms-panel_container", a && "size-" + a, r && "orientation-" + r, n),
                                ref: t
                            }, o))
                        })),
                        Header: (0, s.forwardRef)(((e, t) => {
                            const {
                                className: n
                            } = e, a = (0, i._T)(e, ["className"]);
                            return s.createElement("div", Object.assign({
                                ref: t,
                                className: (0, Yn.Z)("oms-panel_header", n)
                            }, a))
                        })),
                        Body: (0, s.forwardRef)(((e, t) => {
                            const {
                                className: n
                            } = e, a = (0, i._T)(e, ["className"]);
                            return s.createElement("div", Object.assign({
                                ref: t,
                                className: (0, Yn.Z)("oms-panel_body", n)
                            }, a))
                        })),
                        Footer: e => {
                            const {
                                className: t
                            } = e, n = (0, i._T)(e, ["className"]);
                            return s.createElement("div", Object.assign({
                                className: (0, Yn.Z)("oms-panel_footer", t)
                            }, n))
                        }
                    };

                function xi() {
                    const [e, t] = (0, s.useState)({});
                    return (0, s.useEffect)((() => {
                        const e = Fn.subscribe((e => {
                            t(e)
                        }));
                        return () => Fn.unsubscribe(e)
                    }), []), e
                }
                const Ii = ({
                        className: e,
                        size: t = "medium"
                    }) => s.createElement("div", {
                        className: (0, Yn.Z)(t && "oms-spinner_" + t, e)
                    }, s.createElement("span", {
                        className: "oms-spinner_icon"
                    }, s.createElement("svg", {
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 20 20"
                    }, s.createElement("circle", {
                        className: "oms-spinner_circle",
                        cx: "10",
                        cy: "10",
                        r: "8",
                        strokeWidth: "2",
                        fill: "none"
                    })))),
                    Ti = s.forwardRef(((e, t) => {
                        const {
                            className: n,
                            children: a
                        } = e, r = (0, i._T)(e, ["className", "children"]);
                        return s.createElement("div", Object.assign({
                            className: (0, Yn.Z)("oms-overlay", n),
                            id: "container-overlay",
                            ref: t
                        }, r), a)
                    }));
                var ki = n(3539);
                const Zi = s.forwardRef(((e, t) => {
                        const {
                            style: n,
                            className: a
                        } = e, r = (0, i._T)(e, ["style", "className"]);
                        return s.createElement(ki.Z, Object.assign({
                            style: Object.assign({
                                maxHeight: "100%",
                                width: "100%"
                            }, n),
                            ref: t,
                            className: (0, Yn.Z)("custom-app-scrollbar", a)
                        }, r))
                    })),
                    Ri = e => {
                        const {
                            onCopy: t = (() => {})
                        } = e;
                        let n = null;
                        const a = (0, s.useMemo)((() => document.querySelector("#app-root")), []);
                        (0, s.useEffect)((() => {
                            null == n || n.select()
                        }), []);
                        const i = () => {
                            var a, i;
                            (null === (a = window.navigator.clipboard) || void 0 === a ? void 0 : a.writeText) ? (null === (i = window.navigator.clipboard) || void 0 === i || i.writeText(e.link), t()) : document.execCommand && (null == n || n.select(), document.execCommand("copy"), t())
                        };
                        return a ? Ya.createPortal(s.createElement(Ti, null, (() => {
                            const {
                                link: t,
                                windowName: a,
                                onClose: r
                            } = e;
                            return s.createElement(_i.Container, {
                                className: "oms-window-link",
                                size: "s"
                            }, s.createElement(_i.Header, {
                                className: "oms-window-link"
                            }, s.createElement(da, null, a), s.createElement(za, null, s.createElement(Ci, {
                                title: "Закрыть",
                                onClick: r
                            }))), s.createElement(_i.Body, {
                                className: "oms-window-link"
                            }, s.createElement(Wa.Text, {
                                className: "oms-window-link_input",
                                readOnly: !0,
                                autoFocus: !0,
                                value: t,
                                ref: e => {
                                    n = e
                                }
                            })), s.createElement(_i.Footer, {
                                className: "oms-window-link"
                            }, s.createElement(pi, {
                                className: "btn-copy",
                                onClick: i,
                                variant: "secondary"
                            }, (0, l.t)("Скопировать"))))
                        })()), a) : null
                    };
                var Pi = n(5338);
                const Fi = "swipeablePanel",
                    Hi = "swipeablePanelSwiper",
                    $i = (e, t, n) => Math.min(Math.max(e, t), n),
                    Vi = e => {
                        const {
                            maxHeight: t,
                            minHeight: n,
                            prevMinHeight: a,
                            prevMaxHeight: i,
                            state: r,
                            onStateChange: o
                        } = e, l = (() => {
                            const [e, t] = s.useState({
                                width: window.innerWidth,
                                height: window.innerHeight
                            });
                            return s.useEffect((() => {
                                const e = () => {
                                    t({
                                        width: window.innerWidth,
                                        height: window.innerHeight
                                    })
                                };
                                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                            }), []), e
                        })().height - 10, c = 7 * parseInt(getComputedStyle(document.body).fontSize), d = Math.round((l - c) / 3) + 90, m = Math.round((l - c) / 3 * 2) + 90, [u, p] = s.useState(null != t ? t : l), [h, g] = s.useState(null != n ? n : c), [v, f] = s.useState(null != a ? a : d), [y, b] = s.useState(null != i ? i : m);
                        let E;
                        switch (s.useEffect((() => {
                                p(void 0 !== t ? t : l), g(void 0 !== n ? n : c), f(void 0 !== a ? a : d), b(void 0 !== i ? i : m)
                            }), [t, n, a, y, l, c, d, m]), r) {
                            case tn.min:
                                E = h;
                                break;
                            case tn.prevMin:
                                E = v;
                                break;
                            case tn.prevMax:
                                E = y;
                                break;
                            case tn.max:
                            default:
                                E = u
                        }
                        const [w, S] = (0, s.useState)(E), j = s.useRef(null), O = (0, s.useRef)(0), C = (0, s.useRef)(null);
                        (0, s.useEffect)((() => () => {
                            "number" == typeof C.current && clearTimeout(C.current)
                        }), []);
                        const N = e => {
                                j.current && (j.current.style.transition = "height .2s", j.current.style.height = `${e}px`, C.current = setTimeout((() => {
                                    j.current && (j.current.style.transition = ""), S(e), C.current = null
                                }), 200))
                            },
                            L = s.useCallback((e => {
                                switch (e) {
                                    case tn.min:
                                        N(h);
                                        break;
                                    case tn.prevMin:
                                        N(v);
                                        break;
                                    case tn.prevMax:
                                        N(y);
                                        break;
                                    case tn.max:
                                    default:
                                        N(u)
                                }
                            }), [h, v, u]);
                        s.useEffect((() => {
                            L(r)
                        }), [r, L]);
                        const M = s.useCallback((e => {
                                r === e ? L(e) : o(e)
                            }), [r, L, o]),
                            A = e => !!e.closest("[data-no-swipeable]"),
                            _ = t => {
                                t.currentTarget !== t.target || e.disable || M(w === h ? tn.max : tn.min)
                            },
                            x = (0, Pi.QS)({
                                onSwiped: t => {
                                    const [, n] = t.vxvy;
                                    if (A(t.event.target) || e.disable) return;
                                    const a = O.current;
                                    M(n > .8 && w > h ? tn.min : n < -.8 && w < u ? tn.max : a < v ? a > (v - h) / 2 ? tn.prevMin : tn.min : a > v && a < y ? a < v + (y - v) / 2 ? tn.prevMin : tn.prevMax : a < y + (u - y) / 2 ? tn.prevMax : tn.max)
                                },
                                onSwiping: t => {
                                    A(t.event.target) || e.disable || (j.current && (j.current.style.height = `${$i(w-t.deltaY,h,u)}px`), O.current = $i(w - t.deltaY, h, u))
                                },
                                trackMouse: !0
                            });
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Fi, `swipeable_${r}`, e.className),
                            style: {
                                height: w,
                                transition: ""
                            },
                            ref: j
                        }, s.createElement("div", {
                            className: Hi
                        }), s.Children.map(e.children, (e => s.isValidElement(e) ? s.cloneElement(e, {
                            handlers: Object.assign({}, x),
                            onClick: _
                        }) : e)))
                    };
                Vi.defaultProps = {
                    minHeight: void 0,
                    maxHeight: void 0,
                    prevMinHeight: void 0
                };
                const Ui = "filterWrapper",
                    Bi = "filterName",
                    Gi = "filterListTextBody",
                    Di = "filterListTextItem",
                    Wi = "filterListTextItemColor",
                    zi = "filterRatesLabel",
                    Yi = "filterRatesBody";
                let Ki;
                const Ji = {
                    list_text: e => {
                        const {
                            filter: t,
                            onChange: n,
                            className: a
                        } = e, {
                            id: i,
                            settings: r,
                            value: o,
                            values: l,
                            name: c
                        } = t, {
                            t: d
                        } = (0, Bn.$G)();
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Ui, {
                                filterWithoutName: !c,
                                filterHalfWidth: r.halfWidth
                            }, a)
                        }, c && s.createElement(ua.Text, {
                            variant: "bold",
                            className: Bi
                        }, d(c)), s.createElement("div", {
                            className: Gi
                        }, null == l ? void 0 : l.map((e => s.createElement("div", {
                            className: (0, Yn.Z)(Di, a),
                            key: e
                        }, s.createElement(wi, {
                            alignment: "top",
                            checked: null == o ? void 0 : o.includes(e),
                            label: e ? d(e) : "",
                            onChange: () => (e => {
                                const t = new Set(o);
                                t.has(e) ? t.delete(e) : t.add(e), n(i, Array.from(t))
                            })(e)
                        }), r.colors && s.createElement("div", {
                            className: Wi,
                            style: {
                                backgroundColor: r.colors[e] || "#fff"
                            }
                        }), !r.colors && r.icons && r.icons[e] ? s.createElement("img", {
                            src: r.icons[e]
                        }) : null)))))
                    },
                    select: e => {
                        const {
                            filter: t,
                            onChange: n,
                            className: a
                        } = e, {
                            id: i,
                            settings: r,
                            value: o,
                            values: l,
                            name: c
                        } = t, {
                            t: d
                        } = (0, Bn.$G)();
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Ui, {
                                filterWithoutName: !c,
                                filterHalfWidth: r.halfWidth
                            }, a)
                        }, c && s.createElement(ua.Text, {
                            variant: "bold",
                            className: Bi,
                            title: d(c)
                        }, d(c)), s.createElement("div", null, s.createElement(Wa.Select, {
                            value: o,
                            onChange: e => (e => {
                                const t = Array.isArray(e) ? e : [e];
                                n(i, t)
                            })(e),
                            isMulti: r.multi,
                            options: (l || []).map((e => ({
                                label: e,
                                value: e
                            }))),
                            isClearable: !r.multi,
                            isSearchable: !r.multi,
                            hideSelectedOptions: !1,
                            closeMenuOnSelect: !1,
                            label: t.label ? d(t.label) : void 0
                        })))
                    },
                    range: e => {
                        const {
                            filter: t,
                            onChange: n,
                            className: a
                        } = e, {
                            id: i,
                            settings: r,
                            value: o,
                            values: l = [],
                            name: c
                        } = t, {
                            t: d
                        } = (0, Bn.$G)(), [m, u] = (0, s.useState)(o);
                        return (0, s.useEffect)((() => {
                            u(o)
                        }), [o]), s.createElement("div", {
                            className: (0, Yn.Z)(Ui, {
                                filterWithoutName: !c,
                                filterHalfWidth: r.halfWidth
                            }, a)
                        }, c && s.createElement(ua.Text, {
                            variant: "bold",
                            className: Bi
                        }, d(c)), s.createElement("div", null, s.createElement(si, {
                            value: r.range ? m : m[0],
                            onChange: e => {
                                clearTimeout(Ki);
                                const t = Array.isArray(e) ? e : [e];
                                u(t), Ki = setTimeout((() => {
                                    n(i, t)
                                }), 300)
                            },
                            showValue: !0,
                            range: r.range,
                            min: r.range ? l[0] : 0,
                            max: l[1],
                            label: t.label ? d(t.label) : void 0
                        })))
                    },
                    text: e => {
                        const {
                            filter: t,
                            onChange: n,
                            className: a
                        } = e, {
                            id: i,
                            settings: r,
                            value: o,
                            name: l
                        } = t, {
                            t: c
                        } = (0, Bn.$G)();
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Ui, {
                                filterWithoutName: !l,
                                filterHalfWidth: r.halfWidth
                            }, a)
                        }, l && s.createElement(ua.Text, {
                            variant: "bold",
                            className: Bi
                        }, c(l)), s.createElement("div", null, s.createElement(Wa.Text, {
                            value: o,
                            onChange: e => {
                                n(i, e)
                            },
                            placeholder: c("Введите значение"),
                            label: t.label ? c(t.label) : void 0
                        })))
                    },
                    boolean: e => {
                        const {
                            filter: t,
                            onChange: n,
                            className: a
                        } = e, {
                            id: i,
                            value: r,
                            settings: o,
                            name: l
                        } = t, {
                            t: c
                        } = (0, Bn.$G)();
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Ui, {
                                filterWithoutName: !l,
                                filterHalfWidth: o.halfWidth
                            }, "filterBoolean", a)
                        }, l && s.createElement(ua.Text, {
                            variant: "bold",
                            className: Bi
                        }, c(l)), s.createElement("div", null, s.createElement(wi, {
                            alignment: "top",
                            checked: r,
                            label: t.label ? c(t.label) : "",
                            onChange: e => {
                                n(i, e.target.checked)
                            }
                        })))
                    },
                    rates: e => {
                        const {
                            filter: t,
                            onChange: n,
                            className: a
                        } = e, {
                            id: i,
                            settings: r,
                            value: o,
                            name: l,
                            label: c
                        } = t, {
                            t: d
                        } = (0, Bn.$G)();
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Ui, {
                                filterWithoutName: !l,
                                filterHalfWidth: r.halfWidth
                            }, a)
                        }, l && s.createElement(ua.Text, {
                            variant: "bold",
                            className: Bi
                        }, d(l)), c && s.createElement(ua.Text, {
                            className: zi
                        }, d(c)), s.createElement("div", {
                            className: Yi
                        }, (t.values || []).map((e => s.createElement(pi, {
                            key: e,
                            size: "small",
                            variant: o.includes(e) ? "primary" : "secondary",
                            onClick: () => (e => {
                                const t = new Set(o);
                                t.has(e) ? t.delete(e) : t.add(e), n(i, Array.from(t))
                            })(e)
                        }, e)))))
                    }
                };
                var Xi = n(571);
                class ImagesSliderComponent extends s.Component {
                    constructor(e) {
                        super(e), this.maxRightOffset = 0, this.refWrapper = null, this.imagesRefs = [], this.breakpoints = [], this.startOffset = 0, this.pageX = 0, this.loadedImages = 0, this.setEvents = !1, this.refList = (0, s.createRef)(), this.state = {
                            offset: 0,
                            transitionDuration: 0,
                            maxLeftOffset: 0,
                            images: []
                        };
                        for (const [t, n] of e.images.entries()) {
                            const e = new Image;
                            e.onload = () => {
                                this.state.images[t] = e, this.setState({
                                    images: [...this.state.images]
                                })
                            }, e.src = n.path
                        }
                        this.setDragEvents = this.setDragEvents.bind(this), this.start = this.start.bind(this), this.stop = this.stop.bind(this), this.move = this.move.bind(this), this.onLoadEnd = this.onLoadEnd.bind(this)
                    }
                    componentWillUnmount() {
                        var e, t;
                        this.removeListeners(), null === (e = this.refWrapper) || void 0 === e || e.removeEventListener("mousedown", this.start), null === (t = this.refWrapper) || void 0 === t || t.removeEventListener("touchstart", this.start)
                    }
                    setDragEvents(e) {
                        var t, n;
                        this.setEvents || (this.refWrapper = e, null === (t = this.refWrapper) || void 0 === t || t.addEventListener("mousedown", this.start), null === (n = this.refWrapper) || void 0 === n || n.addEventListener("touchstart", this.start), this.setEvents = !0)
                    }
                    onLoadEnd() {
                        const {
                            images: e
                        } = this.props;
                        this.loadedImages++, this.loadedImages === e.length && this.configure()
                    }
                    removeListeners() {
                        document.body.removeEventListener("mousemove", this.move), document.body.removeEventListener("touchmove", this.move), document.body.removeEventListener("mouseup", this.stop), document.body.removeEventListener("touchend", this.stop), document.body.removeEventListener("mouseleave", this.stop)
                    }
                    configure() {
                        var e, t;
                        this.breakpoints = this.imagesRefs.reduce(((e, t, n) => [...e, e[n] + t.clientWidth + 5]), [0]);
                        const n = ((null === (e = this.refWrapper) || void 0 === e ? void 0 : e.clientWidth) || 0) - ((null === (t = this.refList.current) || void 0 === t ? void 0 : t.clientWidth) || 0);
                        this.setState({
                            maxLeftOffset: n
                        })
                    }
                    move(e) {
                        const {
                            screenSize: t
                        } = this.props, {
                            maxLeftOffset: n
                        } = this.state;
                        if (n >= 0) return;
                        const a = e.touches ? e.touches[0] : e;
                        (null == t ? void 0 : t.xs) || e.preventDefault(), this.changeOffset(a.pageX - this.pageX)
                    }
                    stop(e) {
                        const {
                            screenSize: t
                        } = this.props, {
                            offset: n,
                            maxLeftOffset: a
                        } = this.state;
                        a >= 0 || ((null == t ? void 0 : t.xs) || e.preventDefault(), (n < a || n > this.maxRightOffset) && (this.setState({
                            transitionDuration: 600
                        }), n < a ? this.changeOffset(a) : n > this.maxRightOffset && this.changeOffset(this.maxRightOffset)), this.removeListeners())
                    }
                    start(e) {
                        const {
                            screenSize: t
                        } = this.props;
                        (null == t ? void 0 : t.xs) || e.preventDefault();
                        const n = e.touches ? e.touches[0] : e;
                        this.pageX = -this.state.offset + n.pageX, this.setState({
                            transitionDuration: 0
                        }), document.body.addEventListener("mousemove", this.move), document.body.addEventListener("touchmove", this.move), document.body.addEventListener("mouseup", this.stop), document.body.addEventListener("touchend", this.stop), document.body.addEventListener("mouseleave", this.stop), this.configure(), this.startOffset = this.state.offset
                    }
                    moveTo(e) {
                        const {
                            offset: t,
                            maxLeftOffset: n
                        } = this.state;
                        if (n >= 0) return;
                        this.configure(), this.setState({
                            transitionDuration: 300
                        });
                        const a = this.breakpoints.findIndex((e => -t < e)),
                            i = e ? -this.breakpoints[a] : -(this.breakpoints[a - 2] || 0);
                        this.changeOffset(i, !0)
                    }
                    changeOffset(e, t = !1) {
                        var n, a;
                        let i = e,
                            s = this.maxRightOffset + ((null === (n = this.refWrapper) || void 0 === n ? void 0 : n.clientWidth) || 0) - 50,
                            r = this.state.maxLeftOffset - (((null === (a = this.refWrapper) || void 0 === a ? void 0 : a.clientWidth) || 0) - 50);
                        t && (s = this.maxRightOffset, r = this.state.maxLeftOffset), i > s ? i = s : i < r && (i = r), this.setState({
                            offset: i
                        })
                    }
                    uiElements() {
                        return [{
                            name: "bulletsIndicator",
                            order: 9,
                            isButton: !1,
                            appendTo: "wrapper",
                            onInit: (e, t) => {
                                let n = -1;
                                const a = [];
                                e.style.position = "absolute", e.style.bottom = "20px", e.style.left = "10px", e.style.right = "0", e.style.display = "grid", e.style.gridGap = "10px", e.style.gridTemplateColumns = "repeat(auto-fit, 40px)", e.style.gridTemplateRows = "repeat(auto-fit, 40px)", e.style.justifyContent = "center";
                                const i = t.options.dataSource;
                                for (let n = 0; n < i.length; n++) {
                                    const s = i[n],
                                        r = document.createElement("div");
                                    r.style.transition = "transform 0.15s ease-in", r.style.opacity = "0.6", r.style.cursor = "pointer", r.onclick = e => {
                                        const n = e.target,
                                            i = "IMG" === n.tagName ? n.parentElement : e.target;
                                        i && t.goTo(a.indexOf(i))
                                    };
                                    const o = document.createElement("img");
                                    o.setAttribute("src", s.msrc || s.src || ""), o.style.width = "100%", o.style.height = "100%", o.style.objectFit = "cover", r.appendChild(o), e.appendChild(r), a.push(r)
                                }
                                t.on("change", (() => {
                                    if (n >= 0) {
                                        const e = a[n];
                                        e.style.opacity = "0.6", e.style.cursor = "pointer", e.style.transform = "scale(1)"
                                    }
                                    const e = a[t.currIndex];
                                    e.style.opacity = "1", e.style.cursor = "unset", e.style.transform = "scale(1.2)", n = t.currIndex
                                }))
                            }
                        }]
                    }
                    renderImageItems() {
                        var e;
                        const {
                            images: t,
                            imageLabel: n
                        } = this.props, a = (null === (e = this.refWrapper) || void 0 === e ? void 0 : e.clientHeight) || 100;
                        return t.map(((e, t) => {
                            var i, r;
                            const o = !e.mime.includes("svg") && e.apiPath ? `${e.apiPath}/?h=${a}` : e.path;
                            return s.createElement("div", {
                                className: "images-slider-item",
                                key: e.id
                            }, s.createElement(Xi.ck, {
                                original: e.path,
                                width: (null === (i = this.state.images[t]) || void 0 === i ? void 0 : i.naturalWidth) || 1600,
                                height: (null === (r = this.state.images[t]) || void 0 === r ? void 0 : r.naturalHeight) || 1e3,
                                caption: e.name
                            }, (({
                                ref: e,
                                open: n
                            }) => s.createElement("img", {
                                src: o,
                                ref: n => {
                                    this.imagesRefs[t] = n, e.current = n
                                },
                                "data-index": t,
                                onClick: n,
                                onLoad: this.onLoadEnd,
                                onError: this.onLoadEnd
                            }))), n && s.createElement("div", {
                                className: "image-slider-label"
                            }, e.name))
                        }))
                    }
                    renderGallery() {
                        const {
                            images: e,
                            imageLabel: t
                        } = this.props, {
                            offset: n,
                            transitionDuration: a
                        } = this.state, i = {
                            transform: `translate(${n}px, 0)`
                        };
                        return a > 0 && (i.transitionDuration = `${a}ms`), s.createElement("div", {
                            className: (0, Yn.Z)("images-slider-wrapper", {
                                "with-margin": e.length > 1
                            }),
                            ref: this.setDragEvents,
                            onTransitionEnd: () => this.setState({
                                transitionDuration: 0
                            })
                        }, s.createElement(Xi.ri, {
                            withCaption: t,
                            uiElements: this.uiElements(),
                            options: {
                                showHideAnimationType: "none"
                            }
                        }, s.createElement("div", {
                            className: "images-slider-list",
                            ref: this.refList,
                            style: i
                        }, this.renderImageItems())))
                    }
                    render() {
                        var e, t;
                        const {
                            className: n
                        } = this.props, {
                            offset: a,
                            maxLeftOffset: i
                        } = this.state, r = ((null === (e = this.refList.current) || void 0 === e ? void 0 : e.clientWidth) || 0) > ((null === (t = this.refWrapper) || void 0 === t ? void 0 : t.clientWidth) || 0);
                        return s.createElement("div", {
                            className: (0, Yn.Z)("images-slider", n)
                        }, r && s.createElement(pi, {
                            icon: s.createElement(dc.ArrowLeftLine, null),
                            size: "small",
                            onClick: () => {
                                this.moveTo(!1)
                            },
                            variant: "secondary",
                            disabled: a >= this.maxRightOffset
                        }), this.renderGallery(), r && s.createElement(pi, {
                            icon: s.createElement(dc.ArrowRightSLine, null),
                            size: "small",
                            onClick: () => {
                                this.moveTo(!0)
                            },
                            variant: "secondary",
                            disabled: a <= i
                        }))
                    }
                }
                const qi = e => {
                    const t = xi();
                    return s.createElement(ImagesSliderComponent, Object.assign({}, e, {
                        screenSize: t
                    }))
                };
                var Qi;

                function es() {
                    return es = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, es.apply(this, arguments)
                }
                const ts = function(e) {
                    return s.createElement("svg", es({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), Qi || (Qi = s.createElement("path", {
                        d: "M2 13h6v8H2v-8ZM9 3h6v18H9V3Zm7 5h6v13h-6V8Z"
                    })))
                };
                var ns;

                function as() {
                    return as = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, as.apply(this, arguments)
                }
                const is = function(e) {
                    return s.createElement("svg", as({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), ns || (ns = s.createElement("path", {
                        d: "M2 13h6v8H2v-8Zm14-5h6v13h-6V8ZM9 3h6v18H9V3ZM4 15v4h2v-4H4Zm7-10v14h2V5h-2Zm7 5v9h2v-9h-2Z"
                    })))
                };
                var ss;

                function rs() {
                    return rs = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, rs.apply(this, arguments)
                }
                const os = function(e) {
                    return s.createElement("svg", rs({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), ss || (ss = s.createElement("path", {
                        d: "M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1Zm-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3v15Zm0 0h2v2h-2v-2Z"
                    })))
                };
                var ls;

                function cs() {
                    return cs = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, cs.apply(this, arguments)
                }
                const ds = function(e) {
                    return s.createElement("svg", cs({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), ls || (ls = s.createElement("path", {
                        d: "M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8Zm7-2V5h-5a2 2 0 0 0-2 2v12h7Zm-9 0V7a2 2 0 0 0-2-2H4v14h7Z"
                    })))
                };
                var ms;

                function us() {
                    return us = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, us.apply(this, arguments)
                }
                const ps = function(e) {
                    return s.createElement("svg", us({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), ms || (ms = s.createElement("path", {
                        d: "m12 10.586 4.95-4.95 1.415 1.415-4.95 4.95 4.95 4.95-1.415 1.414-4.95-4.95-4.95 4.95-1.413-1.415 4.95-4.95-4.95-4.95L7.05 5.638l4.95 4.95Z"
                    })))
                };
                var hs;

                function gs() {
                    return gs = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, gs.apply(this, arguments)
                }
                const vs = function(e) {
                    return s.createElement("svg", gs({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), hs || (hs = s.createElement("path", {
                        d: "M3 19h18v2H3v-2Zm10-5.828L19.071 7.1l1.414 1.415L12 17 3.515 8.515 4.929 7.1 11 13.172V2h2v11.172Z"
                    })))
                };
                var fs;

                function ys() {
                    return ys = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ys.apply(this, arguments)
                }
                const bs = function(e) {
                    return s.createElement("svg", ys({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), fs || (fs = s.createElement("path", {
                        d: "M12 16H8V8h4a4 4 0 0 1 0 8Zm-2-6v4h2a2 2 0 1 0 0-4h-2Zm5-6H5v16h14V8h-4V4ZM3 2.992C3 2.444 3.447 2 3.998 2H16l5 5v13.992A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992Z"
                    })))
                };
                var Es;

                function ws() {
                    return ws = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ws.apply(this, arguments)
                }
                const Ss = function(e) {
                    return s.createElement("svg", ws({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "currentColor"
                    }, e), Es || (Es = s.createElement("path", {
                        d: "M5.75 3.5H4.717l-1.467.393v1.553l1-.268V8.5H3V10h4V8.5H5.75v-5ZM10 4h11v2H10V4Zm0 7h11v2H10v-2Zm0 7h11v2H10v-2Zm-7.125-2.375a2.125 2.125 0 1 1 3.812 1.292l-.004.006L5.316 18.5H7V20H3v-1.121l2.472-2.844a.625.625 0 1 0-1.094-.466l-.013.306h-1.49v-.25Z"
                    })))
                };
                var js;

                function Os() {
                    return Os = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Os.apply(this, arguments)
                }
                const Cs = function(e) {
                    return s.createElement("svg", Os({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), js || (js = s.createElement("path", {
                        d: "m20.083 10.5 1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85Zm0 4.7 1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85ZM12.514 1.309l8.771 5.262a.5.5 0 0 1 0 .858L12 12.999 2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0Z"
                    })))
                };
                var Ns;

                function Ls() {
                    return Ls = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Ls.apply(this, arguments)
                }
                const Ms = function(e) {
                    return s.createElement("svg", Ls({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Ns || (Ns = s.createElement("path", {
                        d: "m20.083 15.2 1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85Zm0-4.7 1.202.721a.5.5 0 0 1 0 .858L12 17.649l-9.285-5.57a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85Zm-7.569-9.191 8.771 5.262a.5.5 0 0 1 0 .858L12 12.999 2.715 7.43a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0ZM12 3.332 5.887 7 12 10.667 18.113 7 12 3.332Z"
                    })))
                };
                var As;

                function _s() {
                    return _s = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, _s.apply(this, arguments)
                }
                const xs = function(e) {
                    return s.createElement("svg", _s({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "currentColor"
                    }, e), As || (As = s.createElement("path", {
                        d: "m12 18.26-7.053 3.948 1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34 8.027.952-5.934 5.488 1.575 7.928-7.053-3.948Z"
                    })))
                };
                var Is;

                function Ts() {
                    return Ts = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Ts.apply(this, arguments)
                }
                const ks = function(e) {
                    return s.createElement("svg", Ts({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "currentColor"
                    }, e), Is || (Is = s.createElement("path", {
                        d: "m12 18.26-7.053 3.948 1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34 8.027.952-5.934 5.488 1.575 7.928-7.053-3.948Zm0-2.292 4.247 2.377-.948-4.773 3.573-3.305-4.833-.573-2.038-4.419-2.039 4.42-4.833.572 3.573 3.305-.948 4.773L12 15.968Z"
                    })))
                };
                var Zs;

                function Rs() {
                    return Rs = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Rs.apply(this, arguments)
                }
                const Ps = function(e) {
                    return s.createElement("svg", Rs({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), Zs || (Zs = s.createElement("path", {
                        d: "M15 21H9V10h6v11Zm2 0V10h5v10a1 1 0 0 1-1 1h-4ZM7 21H3a1 1 0 0 1-1-1V10h5v11ZM22 8H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4Z"
                    })))
                };
                var Fs;

                function Hs() {
                    return Hs = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Hs.apply(this, arguments)
                }
                const $s = function(e) {
                    return s.createElement("svg", Hs({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: 0
                    }, e), Fs || (Fs = s.createElement("path", {
                        d: "M4 8h16V5H4v3Zm10 11v-9h-4v9h4Zm2 0h4v-9h-4v9Zm-8 0v-9H4v9h4ZM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                    })))
                };
                var Vs;

                function Us() {
                    return Us = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Us.apply(this, arguments)
                }
                const Bs = function(e) {
                    return s.createElement("svg", Us({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Vs || (Vs = s.createElement("path", {
                        d: "M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7-7 3.133-7 7 3.133 7 7 7Zm8.485.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414Z"
                    })))
                };
                var Gs;

                function Ds() {
                    return Ds = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Ds.apply(this, arguments)
                }
                const Ws = function(e) {
                    return s.createElement("svg", Ds({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Gs || (Gs = s.createElement("path", {
                        d: "M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8Zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2ZM4 4v2h2V4H4Zm0 14v2h2v-2H4ZM18 4v2h2V4h-2Zm0 14v2h2v-2h-2Z"
                    })))
                };
                var zs;

                function Ys() {
                    return Ys = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Ys.apply(this, arguments)
                }
                const Ks = function(e) {
                    return s.createElement("svg", Ys({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), zs || (zs = s.createElement("path", {
                        d: "M2 2h5v5H2V2Zm0 15h5v5H2v-5ZM17 2h5v5h-5V2Zm0 15h5v5h-5v-5ZM8 4h8v2H8V4ZM4 8h2v8H4V8Zm14 0h2v8h-2V8ZM8 18h8v2H8v-2Z"
                    })))
                };
                var Js;

                function Xs() {
                    return Xs = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Xs.apply(this, arguments)
                }
                const qs = function(e) {
                    return s.createElement("svg", Xs({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Js || (Js = s.createElement("path", {
                        d: "M5 20h14v2H5v-2Zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                    })))
                };
                var Qs;

                function er() {
                    return er = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, er.apply(this, arguments)
                }
                const tr = function(e) {
                    return s.createElement("svg", er({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "currentColor"
                    }, e), Qs || (Qs = s.createElement("path", {
                        d: "M5 20h14v2H5v-2Zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                    })))
                };
                var nr;

                function ar() {
                    return ar = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ar.apply(this, arguments)
                }
                const ir = function(e) {
                    return s.createElement("svg", ar({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), nr || (nr = s.createElement("path", {
                        d: "M4 6.143v12.824l5.065-2.17 6 3L20 17.68V4.857l1.303-.558a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V7l2-.857Zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 1 1 8.486 0ZM12 12.657l2.828-2.829a4 4 0 1 0-5.656 0L12 12.657Z"
                    })))
                };
                var sr;

                function rr() {
                    return rr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, rr.apply(this, arguments)
                }
                const or = function(e) {
                    return s.createElement("svg", rr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), sr || (sr = s.createElement("path", {
                        d: "M16.95 11.95a6.996 6.996 0 0 0 1.858-6.582l2.495-1.07a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V7l3.129-1.341a6.993 6.993 0 0 0 1.921 6.29L12 16.9l4.95-4.95Zm-1.414-1.414L12 14.07l-3.536-3.535a5 5 0 1 1 7.072 0Z"
                    })))
                };
                var lr;

                function cr() {
                    return cr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, cr.apply(this, arguments)
                }
                const dr = function(e) {
                    return s.createElement("svg", cr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), lr || (lr = s.createElement("path", {
                        d: "M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2h2Zm-8 4.343 2.828 2.829a4 4 0 1 1-5.657 0L5 6.343Zm14 0 2.828 2.829a4 4 0 1 1-5.657 0l2.829-2.829Zm-14 2.829-1.414 1.414a2 2 0 1 0 2.828 0L4.998 9.172Zm14 0-1.414 1.414a2 2 0 1 0 2.828 0l-1.414-1.414Z"
                    })))
                };
                var mr;

                function ur() {
                    return ur = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ur.apply(this, arguments)
                }
                const pr = function(e) {
                    return s.createElement("svg", ur({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), mr || (mr = s.createElement("path", {
                        d: "M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2h2Zm-8 4.343 2.828 2.829a4 4 0 1 1-5.657 0L5 6.343Zm14 0 2.828 2.829a4 4 0 1 1-5.657 0l2.829-2.829Zm0 2.829-1.414 1.414A1.987 1.987 0 0 0 16.998 12l4 .001c0-.54-.212-1.041-.586-1.415l-1.414-1.414Zm-14 0-1.414 1.414A1.987 1.987 0 0 0 2.998 12l4 .001c0-.54-.212-1.041-.586-1.415L4.998 9.172Z"
                    })))
                };
                var hr;

                function gr() {
                    return gr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, gr.apply(this, arguments)
                }
                const vr = function(e) {
                    return s.createElement("svg", gr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), hr || (hr = s.createElement("path", {
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-1-7v2h2v-2h-2Zm0-8v6h2V7h-2Z"
                    })))
                };
                var fr;

                function yr() {
                    return yr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, yr.apply(this, arguments)
                }
                const br = function(e) {
                    return s.createElement("svg", yr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), fr || (fr = s.createElement("path", {
                        d: "m12.865 3 9.526 16.5a1 1 0 0 1-.866 1.5H2.473a1 1 0 0 1-.866-1.5L11.133 3a1 1 0 0 1 1.732 0Zm-1.866 13v2h2v-2h-2Zm0-7v5h2V9h-2Z"
                    })))
                };
                var Er;

                function wr() {
                    return wr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, wr.apply(this, arguments)
                }
                const Sr = function(e) {
                    return s.createElement("svg", wr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Er || (Er = s.createElement("path", {
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-.997-6 7.07-7.071-1.413-1.414-5.657 5.657-2.829-2.829-1.414 1.414L11.003 16Z"
                    })))
                };
                var jr;

                function Or() {
                    return Or = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Or.apply(this, arguments)
                }
                const Cr = function(e) {
                    return s.createElement("svg", Or({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), jr || (jr = s.createElement("path", {
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm-1-11v6h2v-6h-2Zm0-4v2h2V7h-2Z"
                    })))
                };
                var Nr;

                function Lr() {
                    return Lr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Lr.apply(this, arguments)
                }
                const Mr = function(e) {
                    return s.createElement("svg", Lr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Nr || (Nr = s.createElement("path", {
                        d: "M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3Zm1 2H6v12h12V8Zm-9 3h2v6H9v-6Zm4 0h2v6h-2v-6ZM9 4v2h6V4H9Z"
                    })))
                };
                var Ar;

                function _r() {
                    return _r = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, _r.apply(this, arguments)
                }
                const xr = function(e) {
                    return s.createElement("svg", _r({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Ar || (Ar = s.createElement("path", {
                        d: "M20 4v12h3l-4 5-4-5h3V4h2Zm-8 14v2H3v-2h9Zm2-7v2H3v-2h11Zm0-7v2H3V4h11Z"
                    })))
                };
                var Ir;

                function Tr() {
                    return Tr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Tr.apply(this, arguments)
                }
                const kr = function(e) {
                    return s.createElement("svg", Tr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Ir || (Ir = s.createElement("path", {
                        d: "M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0V5Zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298l-.856.597ZM8 16h8a4 4 0 0 1-8 0Z"
                    })))
                };
                var Zr;

                function Rr() {
                    return Rr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Rr.apply(this, arguments)
                }
                const Pr = function(e) {
                    return s.createElement("svg", Rr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Zr || (Zr = s.createElement("path", {
                        d: "M13 9h8L11 24v-9H4l9-15v9Zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11Z"
                    })))
                };
                var Fr;

                function Hr() {
                    return Hr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Hr.apply(this, arguments)
                }
                const $r = function(e) {
                    return s.createElement("svg", Hr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Fr || (Fr = s.createElement("path", {
                        d: "M12 23a7.5 7.5 0 0 0 7.5-7.5c0-.866-.23-1.697-.5-2.47-1.667 1.647-2.933 2.47-3.8 2.47 3.995-7 1.8-10-4.2-14 .5 5-2.796 7.274-4.138 8.537A7.5 7.5 0 0 0 12 23Zm.71-17.765c3.241 2.75 3.257 4.887.753 9.274-.761 1.333.202 2.991 1.737 2.991.688 0 1.384-.2 2.119-.595a5.5 5.5 0 1 1-9.087-5.412c.126-.118.765-.685.793-.71.424-.38.773-.717 1.118-1.086 1.23-1.318 2.114-2.78 2.566-4.462Z"
                    })))
                };
                var Vr;

                function Ur() {
                    return Ur = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Ur.apply(this, arguments)
                }
                const Br = function(e) {
                    return s.createElement("svg", Ur({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Vr || (Vr = s.createElement("path", {
                        d: "m12 3.097-4.95 4.95a7 7 0 1 0 9.9 0L12 3.097Zm0-2.828 6.364 6.364a9 9 0 1 1-12.728 0L12 .269Z"
                    })))
                };
                var Gr;

                function Dr() {
                    return Dr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Dr.apply(this, arguments)
                }
                const Wr = function(e) {
                    return s.createElement("svg", Dr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Gr || (Gr = s.createElement("path", {
                        d: "M18.154 19.565A9 9 0 0 1 5.432 6.844L1.394 2.805l1.414-1.414L22.607 21.19l-1.415 1.414-3.038-3.039ZM6.848 8.26a7 7 0 0 0 9.89 9.891l-9.89-9.89Zm13.566 7.939-1.598-1.6a6.996 6.996 0 0 0-1.866-6.55L12 3.098 9.658 5.441 8.243 4.026 12 .27l6.364 6.363a9.002 9.002 0 0 1 2.05 9.565Z"
                    })))
                };
                var zr;

                function Yr() {
                    return Yr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Yr.apply(this, arguments)
                }
                const Kr = function(e) {
                    return s.createElement("svg", Yr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), zr || (zr = s.createElement("path", {
                        d: "m16.172 11-5.364-5.363 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2h12.172Z"
                    })))
                };
                var Jr;

                function Xr() {
                    return Xr = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Xr.apply(this, arguments)
                }
                const qr = function(e) {
                    return s.createElement("svg", Xr({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Jr || (Jr = s.createElement("path", {
                        d: "M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414L7.828 11Z"
                    })))
                };
                var Qr;

                function eo() {
                    return eo = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, eo.apply(this, arguments)
                }
                const to = function(e) {
                    return s.createElement("svg", eo({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Qr || (Qr = s.createElement("path", {
                        d: "M1.182 12C2.122 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.818-9ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                    })))
                };
                var no;

                function ao() {
                    return ao = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ao.apply(this, arguments)
                }
                const io = function(e) {
                    return s.createElement("svg", ao({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), no || (no = s.createElement("path", {
                        d: "M4.52 5.935 1.394 2.808l1.414-1.414 19.799 19.798-1.414 1.415-3.31-3.31A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.818-9A10.982 10.982 0 0 1 4.52 5.935Zm10.238 10.237-1.464-1.464a3 3 0 0 1-4.001-4.001L7.829 9.243a5 5 0 0 0 6.929 6.929ZM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.593l-3.86-3.86a5 5 0 0 0-5.68-5.68L7.975 3.76Z"
                    })))
                };
                var so;

                function ro() {
                    return ro = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ro.apply(this, arguments)
                }
                const oo = function(e) {
                    return s.createElement("svg", ro({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), so || (so = s.createElement("path", {
                        d: "M10 18h4v-2h-4v2ZM3 6v2h18V6H3Zm3 7h12v-2H6v2Z"
                    })))
                };
                var lo;

                function co() {
                    return co = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, co.apply(this, arguments)
                }
                const mo = function(e) {
                    return s.createElement("svg", co({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), lo || (lo = s.createElement("path", {
                        d: "m2 5 7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V5Zm13 14.764V7.176l-.065.028L9 4.236v12.588l.065-.028L15 19.764Z"
                    })))
                };
                var uo;

                function po() {
                    return po = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, po.apply(this, arguments)
                }
                const ho = function(e) {
                    return s.createElement("svg", po({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), uo || (uo = s.createElement("path", {
                        d: "m12 13.172 4.95-4.95 1.414 1.415L12 16 5.636 9.637 7.05 8.223l4.95 4.95Z"
                    })))
                };
                var go;

                function vo() {
                    return vo = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, vo.apply(this, arguments)
                }
                const fo = function(e) {
                    return s.createElement("svg", vo({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), go || (go = s.createElement("path", {
                        d: "m12 10.828-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.415 1.414-4.95-4.95Z"
                    })))
                };
                var yo;

                function bo() {
                    return bo = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, bo.apply(this, arguments)
                }
                const Eo = function(e) {
                    return s.createElement("svg", bo({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), yo || (yo = s.createElement("path", {
                        d: "m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617Zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7 3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15ZM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2h3Z"
                    })))
                };
                var wo;

                function So() {
                    return So = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, So.apply(this, arguments)
                }
                const jo = function(e) {
                    return s.createElement("svg", So({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), wo || (wo = s.createElement("path", {
                        d: "m13.06 8.111 1.415 1.414a7 7 0 0 1 0 9.9l-.354.354a7 7 0 1 1-9.9-9.9l1.415 1.414a5 5 0 0 0 7.07 7.071l.354-.353a5 5 0 0 0 0-7.071l-1.414-1.415 1.414-1.414Zm6.718 6.01-1.414-1.414a5 5 0 0 0-7.071-7.07l-.354.353a5 5 0 0 0 0 7.071l1.414 1.414-1.414 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.353-.353a7 7 0 0 1 9.9 9.9Z"
                    })))
                };
                var Oo;

                function Co() {
                    return Co = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Co.apply(this, arguments)
                }
                const No = function(e) {
                    return s.createElement("svg", Co({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), Oo || (Oo = s.createElement("path", {
                        d: "M13 21h5v2H6v-2h5v-1.05a10.002 10.002 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.993-1.737A9.996 9.996 0 0 1 22 10c0 5.185-3.946 9.449-9 9.95V21Zm-1-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
                    })))
                };
                var Lo;

                function Mo() {
                    return Mo = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Mo.apply(this, arguments)
                }
                const Ao = function(e) {
                    return s.createElement("svg", Mo({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "\\u2116000"
                    }, e), Lo || (Lo = s.createElement("path", {
                        d: "M13 21h5v2H6v-2h5v-1.05a10.002 10.002 0 0 1-7.684-4.988l1.737-.992A8 8 0 1 0 15.97 3.053l.993-1.737A9.996 9.996 0 0 1 22 10c0 5.185-3.946 9.449-9 9.95V21Zm-1-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                    })))
                };
                var _o;

                function xo() {
                    return xo = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, xo.apply(this, arguments)
                }
                const Io = function(e) {
                    return s.createElement("svg", xo({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), _o || (_o = s.createElement("path", {
                        d: "M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6Z"
                    })))
                };
                var To;

                function ko() {
                    return ko = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ko.apply(this, arguments)
                }
                const Zo = function(e) {
                    return s.createElement("svg", ko({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), To || (To = s.createElement("path", {
                        d: "M19 11H5v2h14v-2Z"
                    })))
                };
                var Ro;

                function Po() {
                    return Po = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Po.apply(this, arguments)
                }
                const Fo = function(e) {
                    return s.createElement("svg", Po({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Ro || (Ro = s.createElement("path", {
                        d: "M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"
                    })))
                };
                var Ho;

                function $o() {
                    return $o = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, $o.apply(this, arguments)
                }
                const Vo = function(e) {
                    return s.createElement("svg", $o({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Ho || (Ho = s.createElement("path", {
                        d: "M2.05 13h5.477a17.9 17.9 0 0 0 2.925 8.881 10.005 10.005 0 0 1-8.403-8.88Zm0-2a10.005 10.005 0 0 1 8.402-8.88A17.9 17.9 0 0 0 7.527 11H2.05Zm19.9 0h-5.477a17.9 17.9 0 0 0-2.925-8.88A10.005 10.005 0 0 1 21.95 11Zm0 2a10.005 10.005 0 0 1-8.402 8.881 17.9 17.9 0 0 0 2.925-8.88h5.478ZM9.53 13h4.94A15.908 15.908 0 0 1 12 20.592 15.908 15.908 0 0 1 9.53 13Zm0-2A15.908 15.908 0 0 1 12 3.41 15.908 15.908 0 0 1 14.47 11H9.53Z"
                    })))
                };
                var Uo;

                function Bo() {
                    return Bo = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Bo.apply(this, arguments)
                }
                const Go = function(e) {
                    return s.createElement("svg", Bo({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Uo || (Uo = s.createElement("path", {
                        d: "m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"
                    })))
                };
                var Do;

                function Wo() {
                    return Wo = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Wo.apply(this, arguments)
                }
                const zo = function(e) {
                    return s.createElement("svg", Wo({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Do || (Do = s.createElement("path", {
                        d: "M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2Z"
                    })))
                };
                var Yo;

                function Ko() {
                    return Ko = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Ko.apply(this, arguments)
                }
                const Jo = function(e) {
                    return s.createElement("svg", Ko({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Yo || (Yo = s.createElement("path", {
                        d: "m6.343 14.728-2.828 2.828 3.535 3.536L20.485 7.657 16.95 4.12l-2.121 2.122 1.414 1.414-1.414 1.414-1.415-1.414-2.121 2.121 2.121 2.121L12 13.314 9.88 11.192l-2.122 2.122 1.415 1.414-1.415 1.414-1.414-1.414ZM17.657 2l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.415L16.243 2a1 1 0 0 1 1.414 0Z"
                    })))
                };
                var Xo;

                function qo() {
                    return qo = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, qo.apply(this, arguments)
                }
                const Qo = function(e) {
                    return s.createElement("svg", qo({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Xo || (Xo = s.createElement("path", {
                        d: "m4.929 13.314 2.121 2.121 1.415-1.414-2.122-2.122 2.122-2.12 2.828 2.828 1.414-1.415L9.88 8.364 12 6.243l2.121 2.12 1.415-1.413-2.122-2.122L16.243 2a1 1 0 0 1 1.414 0l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.415l3.536-3.535Z"
                    })))
                };
                var el;

                function tl() {
                    return tl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, tl.apply(this, arguments)
                }
                const nl = function(e) {
                    return s.createElement("svg", tl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), el || (el = s.createElement("path", {
                        d: "M7.83 20A3.001 3.001 0 1 1 4 16.17V7.83A3.001 3.001 0 1 1 7.83 4h8.34A3.001 3.001 0 1 1 20 7.83v8.34A3.001 3.001 0 1 1 16.17 20H7.83Zm0-2h8.34A3.009 3.009 0 0 1 18 16.17V7.83A3.008 3.008 0 0 1 16.17 6H7.83A3.008 3.008 0 0 1 6 7.83v8.34A3.008 3.008 0 0 1 7.83 18ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                    })))
                };
                var al;

                function il() {
                    return il = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, il.apply(this, arguments)
                }
                const sl = function(e) {
                    return s.createElement("svg", il({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), al || (al = s.createElement("path", {
                        d: "M5 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm14 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0 14a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM5 22a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM9 4h6v2H9V4Zm0 14h6v2H9v-2ZM4 9h2v6H4V9Zm14 0h2v6h-2V9Z"
                    })))
                };
                var rl;

                function ol() {
                    return ol = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ol.apply(this, arguments)
                }
                const ll = function(e) {
                    return s.createElement("svg", ol({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), rl || (rl = s.createElement("path", {
                        d: "M15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15h8Zm2 5V7H9V5h9a1 1 0 0 1 1 1v11h3v2h-3v3h-2Z"
                    })))
                };
                var cl;

                function dl() {
                    return dl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, dl.apply(this, arguments)
                }
                const ml = function(e) {
                    return s.createElement("svg", dl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), cl || (cl = s.createElement("path", {
                        d: "M19 17h3v2h-3v3h-2v-3H6a1 1 0 0 1-1-1V7H2V5h3V2h2v3h11a1 1 0 0 1 1 1v11Z"
                    })))
                };
                var ul;

                function pl() {
                    return pl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, pl.apply(this, arguments)
                }
                const hl = function(e) {
                    return s.createElement("svg", pl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 20,
                        height: 20,
                        fill: "currentColor"
                    }, e), ul || (ul = s.createElement("path", {
                        d: "m4.162 7.813 2.162 3.937H2l2.162-3.938ZM2.432 3h3.46v3.5h-3.46V3Zm1.73 14a1.72 1.72 0 0 0 1.223-.513 1.76 1.76 0 0 0 0-2.474 1.72 1.72 0 0 0-2.446 0 1.76 1.76 0 0 0 0 2.474A1.72 1.72 0 0 0 4.162 17Zm3.46-13.125v1.75H18v-1.75H7.622Zm0 12.25H18v-1.75H7.622v1.75Zm0-5.25H18v-1.75H7.622v1.75Z"
                    })))
                };
                var gl;

                function vl() {
                    return vl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, vl.apply(this, arguments)
                }
                const fl = function(e) {
                    return s.createElement("svg", vl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), gl || (gl = s.createElement("path", {
                        d: "m13.171 12-4.95-4.95 1.415-1.413L16 12l-6.364 6.364-1.414-1.415 4.95-4.95Z"
                    })))
                };
                var yl;

                function bl() {
                    return bl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, bl.apply(this, arguments)
                }
                const El = function(e) {
                    return s.createElement("svg", bl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), yl || (yl = s.createElement("path", {
                        d: "m10.828 12 4.95 4.95-1.414 1.415L8 12l6.364-6.364 1.414 1.414-4.95 4.95Z"
                    })))
                };
                var wl;

                function Sl() {
                    return Sl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Sl.apply(this, arguments)
                }
                const jl = function(e) {
                    return s.createElement("svg", Sl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), wl || (wl = s.createElement("path", {
                        d: "m16 21-4.762-8.73L15 6l8 15h-7ZM8 10l6 11H2l6-11ZM5.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                    })))
                };
                var Ol;

                function Cl() {
                    return Cl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Cl.apply(this, arguments)
                }
                const Nl = function(e) {
                    return s.createElement("svg", Cl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Ol || (Ol = s.createElement("path", {
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.657-5.657 1.414 1.414L11.003 16Z"
                    })))
                };
                var Ll;

                function Ml() {
                    return Ml = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Ml.apply(this, arguments)
                }
                const Al = function(e) {
                    return s.createElement("svg", Ml({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Ll || (Ll = s.createElement("path", {
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM11 7h2v2h-2V7Zm0 4h2v6h-2v-6Z"
                    })))
                };
                var _l;

                function xl() {
                    return xl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, xl.apply(this, arguments)
                }
                const Il = function(e) {
                    return s.createElement("svg", xl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), _l || (_l = s.createElement("path", {
                        d: "m12.865 3 9.526 16.5a1 1 0 0 1-.866 1.5H2.473a1 1 0 0 1-.866-1.5L11.133 3a1 1 0 0 1 1.732 0Zm-8.66 16h15.588L12 5.5 4.205 19Zm6.794-3h2v2h-2v-2Zm0-7h2v5h-2V9Z"
                    })))
                };
                var Tl;

                function kl() {
                    return kl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, kl.apply(this, arguments)
                }
                const Zl = function(e) {
                    return s.createElement("svg", kl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Tl || (Tl = s.createElement("path", {
                        d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-5h2v2h-2v-2Zm0-8h2v6h-2V7Z"
                    })))
                };
                var Rl;

                function Pl() {
                    return Pl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Pl.apply(this, arguments)
                }
                const Fl = function(e) {
                    return s.createElement("svg", Pl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24,
                        fill: "none"
                    }, e), Rl || (Rl = s.createElement("path", {
                        d: "M6.535 3h14.464a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.833-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3Zm.535 2-4.667 7 4.667 7H20V5H7.07ZM13 10.586l2.828-2.829 1.414 1.415L14.413 12l2.829 2.828-1.414 1.415-2.829-2.829-2.828 2.829-1.414-1.415L11.585 12 8.757 9.172l1.414-1.415 2.828 2.829Z"
                    })))
                };
                var Hl;

                function $l() {
                    return $l = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, $l.apply(this, arguments)
                }
                const Vl = function(e) {
                    return s.createElement("svg", $l({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), Hl || (Hl = s.createElement("path", {
                        d: "m13.06 8.111 1.415 1.414a7 7 0 0 1 0 9.9l-.354.354a7 7 0 1 1-9.9-9.9l1.415 1.414a5 5 0 0 0 7.07 7.071l.354-.353a5 5 0 0 0 0-7.071l-1.414-1.415 1.414-1.414Zm6.718 6.01-1.414-1.414a5 5 0 0 0-7.071-7.07l-.354.353a5 5 0 0 0 0 7.071l1.414 1.414-1.414 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.353-.353a7 7 0 0 1 9.9 9.9Z"
                    })))
                };
                var Ul;

                function Bl() {
                    return Bl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Bl.apply(this, arguments)
                }
                const Gl = function(e) {
                    return s.createElement("svg", Bl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), Ul || (Ul = s.createElement("path", {
                        d: "M17 2a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1h10Zm-1 15H8v3h8v-3Zm4-8H4v8h2v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1h2V9ZM8 10v2H5v-2h3Zm8-6H8v3h8V4Z"
                    })))
                };
                var Dl;

                function Wl() {
                    return Wl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Wl.apply(this, arguments)
                }
                const zl = function(e) {
                    return s.createElement("svg", Wl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), Dl || (Dl = s.createElement("path", {
                        d: "M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5ZM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19ZM10 4H6a1 1 0 0 0-1 1v10.337A3.486 3.486 0 0 1 6.5 15H19V4h-2v8l-3.5-2-3.5 2V4Z"
                    })))
                };
                var Yl;

                function Kl() {
                    return Kl = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, Kl.apply(this, arguments)
                }
                const Jl = function(e) {
                    return s.createElement("svg", Kl({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), Yl || (Yl = s.createElement("path", {
                        d: "M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8Zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6Zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm9 6h1v5h-8v-5h1v-1a3 3 0 1 1 6 0v1Zm-2 0v-1a1 1 0 1 0-2 0v1h2Z"
                    })))
                };
                var Xl;

                function ql() {
                    return ql = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ql.apply(this, arguments)
                }
                const Ql = function(e) {
                    return s.createElement("svg", ql({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), Xl || (Xl = s.createElement("path", {
                        d: "M3 19h18v2H3v-2Zm10-5.828L19.071 7.1l1.414 1.415L12 17 3.515 8.515 4.929 7.1 11 13.172V2h2v11.172Z"
                    })))
                };
                var ec;

                function tc() {
                    return tc = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, tc.apply(this, arguments)
                }
                const nc = function(e) {
                    return s.createElement("svg", tc({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), ec || (ec = s.createElement("path", {
                        d: "M3 12h2v9H3v-9Zm16-4h2v13h-2V8Zm-8-6h2v19h-2V2Z"
                    })))
                };
                var ac;

                function ic() {
                    return ic = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, ic.apply(this, arguments)
                }
                const sc = function(e) {
                    return s.createElement("svg", ic({
                        xmlns: "http://www.w3.org/2000/svg",
                        width: 24,
                        height: 24
                    }, e), ac || (ac = s.createElement("path", {
                        d: "M3 12h4v9H3v-9Zm14-4h4v13h-4V8Zm-7-6h4v19h-4V2Z"
                    })))
                };
                var rc;

                function oc() {
                    return oc = Object.assign ? Object.assign.bind() : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                        }
                        return e
                    }, oc.apply(this, arguments)
                }
                const lc = function(e) {
                        return s.createElement("svg", oc({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 24,
                            height: 24
                        }, e), rc || (rc = s.createElement("path", {
                            d: "M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95Zm2-1.507c5.553.478 9.979 4.904 10.457 10.457H13V.543Z"
                        })))
                    },
                    cc = (e, t = {}) => {
                        const n = e;
                        return () => s.createElement("span", {
                            className: "wrapper-icon",
                            style: {
                                display: "flex",
                                lineHeight: 0
                            }
                        }, s.createElement(n, Object.assign({
                            viewBox: "0 0 24 24",
                            width: "1em",
                            height: "1em",
                            fill: "currentColor"
                        }, t)))
                    };
                var dc;
                ! function(e) {
                    e.BarChart2Fill = cc(ts), e.BarChart2Line = cc(is), e.BookOpenFill = cc(os), e.BookOpenLine = cc(ds), e.CloseLine = cc(ps), e.DownloadLine = cc(vs), e.FilePDFLine = cc(bs), e.ListOrdered2 = cc(Ss), e.StackFill = cc(Cs), e.StackLine = cc(Ms), e.StarFill = cc(xs), e.StarLine = cc(ks), e.TableFill = cc(Ps), e.TableLine = cc($s), e.SearchIcon = cc(Bs), e.AreaSortOutline = cc(Ws), e.AreaSortFill = cc(Ks), e.CountUsersOutline = cc(qs), e.CountUsersFill = cc(tr), e.SubjectSortOutline = cc(ir), e.SubjectSortFill = cc(or), e.CompareOutline = cc(dr), e.CompareFill = cc(pr), e.NotifyDanger = cc(vr), e.NotifyWarning = cc(br), e.NotifySuccess = cc(Sr), e.NotifyInfo = cc(Cr), e.TrashIcon = cc(Mr), e.SortDesk = cc(xr), e.TempColdLine = cc(kr), e.FlashlightLine = cc(Pr), e.FireLine = cc($r), e.DropLine = cc(Br), e.BlurOffLine = cc(Wr), e.ArrowRightLine = cc(Kr), e.ArrowLeftLine = cc(qr), e.EyeFill = cc(to), e.EyeOffFill = cc(io), e.Filters3Fill = cc(oo), e.Map2Fill = cc(mo), e.ArrowDownSLine = cc(ho), e.ArrowUpSLine = cc(fo), e.ZoomInLine = cc(Eo), e.LinkFill = cc(jo), e.GlobeFill = cc(No), e.GlobeLine = cc(Ao), e.AddFill = cc(Io), e.SubtractFill = cc(Zo), e.MenuFill = cc(Fo), e.GlobalFill = cc(Vo), e.CheckFill = cc(Go), e.Ruler2Fill = cc(zo), e.RulerLine = cc(Jo), e.RulerFill = cc(Qo), e.ShapeLine = cc(nl), e.ShapeFill = cc(sl), e.CropLine = cc(ll), e.CropFill = cc(ml), e.Legend = cc(hl), e.ArrowRightSLine = cc(fl), e.ArrowLeftSLine = cc(El), e.LandscapeFill = cc(jl), e.CheckboxCircleLine = cc(Nl), e.InformationLine = cc(Al), e.AlertLine = cc(Il), e.ErrorWarningLine = cc(Zl), e.DeleteBack2Line = cc(Fl), e.LinksLine = cc(Vl), e.PrinterLine = cc(Gl), e.BookmarkLine = cc(zl), e.AdminLine = cc(Jl), e.DownloadFile = cc(Ql), e.BarChartLine = cc(nc), e.BarChartFill = cc(sc), e.PieChart2Fill = cc(lc)
                }(dc || (dc = {}));
                var mc = n(573);
                (0, mc.P1)([(e, t) => I(e, `PUB_LAYERS_${t.mapCode}`), (e, t) => t.container, (e, t) => {
                    var n, a;
                    return I(e, `PUB_LAYERS_${null===(a=null===(n=t.container)||void 0===n?void 0:n.map_info)||void 0===a?void 0:a.code}`)
                }], ((e, t, n) => {
                    if (!t) return [!1, !1];
                    if (t.map_info && n) {
                        if (!e) return [!1, !1];
                        const t = n.filter((e => "folder" !== e.type)),
                            a = t.filter((e => e.selected));
                        return [a.length > 0 && a.length === t.length, a.length > 0 && a.length !== t.length]
                    }
                    if ("folder" === t.type) {
                        const n = [],
                            a = t => {
                                for (const i of e) i.parent_id === t && ("folder" === i.type ? a(i.id) : n.push(i))
                            };
                        a(t.id);
                        const i = n.filter((e => "folder" !== e.type)),
                            s = i.filter((e => e.selected));
                        return [s.length > 0 && s.length === i.length, s.length > 0 && s.length !== i.length]
                    }
                    return [t.selected, !1]
                }));
                const uc = (0, mc.P1)([e => e.map.maps, e => e.map.maps.map((t => I(e, `PUB_LAYERS_${t.code}`))), e => e.map.maps.map((t => I(e, `LEGEND_${t.code}`)))], ((e, t, n) => {
                        const a = [];
                        for (const i in e)
                            if (e[i] && t[i] && n[i]) {
                                const e = t[i].filter((e => e.code in n[i])).filter((e => e.selected));
                                for (const t of e) a.push(n[i][t.code])
                            } return a
                    })),
                    pc = (0, mc.P1)([(e, t) => T(e, `PUB_LAYERS_${t.mapCode}`), (e, t) => I(e, `PUB_LAYERS_${t.mapCode}`), (e, t) => t.container, (e, t) => I(e, `FILTERED_IDS_${t.mapCode}`)], ((e, t, n, a = {}) => {
                        const {
                            count: i
                        } = e;
                        if (n.map_info) return null;
                        if ("folder" === n.type) {
                            let e = 0,
                                s = 0;
                            const r = n => {
                                for (const o of t)
                                    if (o.parent_id === n)
                                        if ("folder" === o.type) r(o.id);
                                        else {
                                            const t = a[o.id] ? a[o.id].length : i[o.id];
                                            e += i[o.id], o.selected && (s += t)
                                        }
                            };
                            return r(n.id), `${s} / ${e}`
                        }
                        return `${a[n.id]?a[n.id].length:i[n.id]} / ${i[n.id]}`
                    }));

                function hc(e) {
                    switch (e.type) {
                        case "list_text":
                        case "select":
                        case "rates":
                            return e.value.length;
                        default:
                            return 1
                    }
                }
                const gc = (0, mc.P1)([(e, t) => I(e, `OBJECTS_${t.mapCode}`), (e, t) => t.containerId], ((e, t) => e && e[t] || [])),
                    vc = (0, mc.P1)([(e, t) => I(e, `FILTERED_IDS_${t.mapCode}`), (e, t) => t.containerId], ((e, t) => e ? e[t] : null)),
                    fc = (0, mc.P1)([(e, t) => I(e, `FILTERS_${t.mapCode}`), (e, t) => t.containerId], ((e, t) => {
                        if (!e || !e[t]) return 0;
                        const n = e[t],
                            a = Gt(n);
                        let i = 0;
                        for (const e of a) i += hc(e);
                        return i
                    })),
                    yc = (0, mc.P1)([(e, t) => I(e, `SITE_SELECTION_${t.mapCode}`), (e, t) => t.containerId], ((e, t) => {
                        if (!e || !e[t]) return 0;
                        const n = e[t];
                        let a = 0;
                        for (const e of n) {
                            const t = Gt(e.filters);
                            for (const e of t) a += hc(e)
                        }
                        return a
                    })),
                    bc = (0, mc.P1)([e => I(e, "OBJECT_WINDOW")], (e => e)),
                    Ec = "legendControl",
                    wc = "legendsContainer",
                    Sc = "legends",
                    jc = "legendsHeader",
                    Oc = "legendsWrapper",
                    Cc = "legendItem",
                    Nc = "legendItemTitle",
                    Lc = "legendItemThematic",
                    Mc = "thValues",
                    Ac = "thColors",
                    _c = "legendItemCategory",
                    xc = "catRow",
                    Ic = "catCell",
                    Tc = "legendBubble",
                    kc = "bubValues",
                    Zc = "bubCells",
                    Rc = "legendLine",
                    Pc = "legendHeat",
                    Fc = e => {
                        const {
                            legend: t
                        } = e;
                        return s.createElement("div", {
                            className: Cc
                        }, s.createElement(ma, {
                            variant: "bold",
                            className: Nc
                        }, t.name), (() => {
                            switch (t.type) {
                                case an.thematic:
                                    return (() => {
                                        const {
                                            minValue: e,
                                            maxValue: n,
                                            classificators: a
                                        } = t;
                                        return s.createElement("div", {
                                            className: Lc
                                        }, s.createElement("div", {
                                            className: Mc
                                        }, s.createElement(ma, null, e), s.createElement(ma, null, n)), s.createElement("div", {
                                            className: Ac
                                        }, a.map((e => s.createElement("div", {
                                            key: e.value,
                                            style: {
                                                backgroundColor: e.fill
                                            }
                                        })))))
                                    })();
                                case an.category:
                                case an.PieChart:
                                case an.BarChart:
                                    return (() => {
                                        const {
                                            classificators: e
                                        } = t;
                                        return s.createElement("div", {
                                            className: _c
                                        }, e.map((e => s.createElement("div", {
                                            key: e.fill,
                                            className: xc
                                        }, s.createElement("div", {
                                            className: Ic,
                                            style: e.isIcon ? {} : {
                                                backgroundColor: e.fill
                                            }
                                        }, e.isIcon && s.createElement("img", {
                                            src: `${Y.axiosInstance.defaults.baseURL}${e.fill}`,
                                            alt: ""
                                        })), s.createElement(ma, null, e.value)))))
                                    })();
                                case an.bubble:
                                    return (() => {
                                        const {
                                            minValue: e,
                                            maxValue: n,
                                            isIcon: a,
                                            fill: i
                                        } = t;
                                        return s.createElement("div", {
                                            className: Tc
                                        }, s.createElement("div", {
                                            className: kc
                                        }, s.createElement(ma, null, e), s.createElement(ma, null, n)), s.createElement("div", {
                                            className: Zc
                                        }, [".5rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"].map((e => s.createElement("div", {
                                            key: e,
                                            style: {
                                                width: e,
                                                height: e,
                                                backgroundColor: a ? "unset" : i
                                            }
                                        }, a && s.createElement("img", {
                                            src: `${Y.axiosInstance.defaults.baseURL}${i}`,
                                            alt: ""
                                        }))))))
                                    })();
                                case an.LineChart:
                                case an.RadarChart:
                                    return (() => {
                                        const {
                                            classificators: e
                                        } = t;
                                        return s.createElement("div", {
                                            className: Rc,
                                            style: {
                                                backgroundColor: e[0].fill
                                            }
                                        })
                                    })();
                                case an.heat:
                                    return (() => {
                                        const {
                                            colors: e
                                        } = t;
                                        return s.createElement("div", {
                                            className: Pc,
                                            style: {
                                                backgroundImage: `linear-gradient(to right, ${e.join(",")})`
                                            }
                                        })
                                    })();
                                default:
                                    return null
                            }
                        })())
                    },
                    Hc = e => {
                        const {
                            controlRef: t
                        } = e, n = (0, r.v9)(uc), a = xi(), [i, o] = (0, s.useState)(!1), l = (0, s.useRef)(n.length), {
                            t: c
                        } = (0, Bn.$G)();
                        return (0, s.useEffect)((() => {
                            n.length > 0 && n.length > l.current && o(!0), l.current = n.length
                        }), [n.length]), (0, s.useEffect)((() => {
                            !1 === a.xs && o(!0)
                        }), [a.xs]), s.createElement(s.Fragment, null, n.length > 0 && i && s.createElement("div", {
                            className: wc
                        }, s.createElement("div", {
                            className: Sc
                        }, s.createElement(_i.Header, {
                            className: jc
                        }, s.createElement(da, null, c("Легенда")), s.createElement(Ci, {
                            onClick: () => o(!1),
                            title: c("Скрыть"),
                            size: "medium"
                        })), s.createElement("div", {
                            className: Oc
                        }, s.createElement(Zi, null, n.map((e => s.createElement(Fc, {
                            legend: e,
                            key: `${e.type}.${e.name}`
                        }))))))), t.current && n.length > 0 && Ya.createPortal(s.createElement(pi, {
                            icon: s.createElement(dc.Legend, null),
                            className: Ec,
                            onClick: () => o(!i),
                            variant: i ? "active" : "default",
                            title: c("Легенда")
                        }), t.current))
                    };
                var $c = n(1015);
                const Vc = "clusterBody",
                    Uc = "clusterHeader",
                    Bc = "clusterBalloonList",
                    Gc = "clusterItem",
                    Dc = "clusterItemName",
                    Wc = () => {
                        const e = (0, r.v9)((e => I(e, "CLUSTER_BALLOON"))),
                            t = xi();
                        if (!e) return null;
                        const {
                            mapCode: n,
                            container: a,
                            features: i
                        } = e, o = (0, s.useMemo)((() => Y.getApiUrl()), []), l = (0, s.useMemo)((() => {
                            var e, t, s;
                            if ((null === (e = a.visualSettings) || void 0 === e ? void 0 : e.columnCode) && (null === (t = a.visualSettings) || void 0 === t ? void 0 : t.classesSettings.classes)) {
                                const e = Et(a.visualSettings.columnCode, On),
                                    t = null === (s = a.visualSettings) || void 0 === s ? void 0 : s.classesSettings.classes.find((t => t.value === i[0][e]));
                                if (1 === a.render_type && (null == t ? void 0 : t.useIcon) && t.icon) return oa(null == t ? void 0 : t.icon)
                            }
                            return la(a, o, n)
                        }), [a, i]);
                        (0, s.useEffect)((() => () => {
                            U.clear("CLUSTER_BALLOON")
                        }), []);
                        const c = e => {
                            const t = e[e.columnName] || e.name || e.orbis_id;
                            return s.createElement("div", {
                                key: e.orbis_id,
                                className: Gc,
                                onClick: () => {
                                    return un({
                                        object: `${n}.${(t=e).layer}.${t.orbis_id}`
                                    }), void Ht.setBalloon(null);
                                    var t
                                }
                            }, s.createElement(ua.Text, {
                                className: Dc,
                                title: t
                            }, t))
                        };
                        return s.createElement(s.Fragment, null, s.createElement("div", {
                            className: Uc
                        }, l, s.createElement(ua.Title, {
                            variant: "H3"
                        }, a.name), s.createElement(Ci, {
                            size: "medium",
                            onClick: () => Ht.setBalloon(null)
                        })), s.createElement("div", {
                            className: Vc,
                            style: t.xs ? {
                                overflow: "auto"
                            } : {}
                        }, t.xs ? s.createElement("div", {
                            className: Bc
                        }, i.map((e => c(e)))) : s.createElement(Zi, null, s.createElement("div", {
                            className: Bc
                        }, i.map((e => c(e)))))))
                    },
                    zc = "balloon",
                    Yc = "dragHandler",
                    Kc = "draggedBalloon",
                    Jc = e => {
                        const {
                            balloonState: t,
                            screen: n
                        } = e, a = (0, s.useRef)(document.createElement("div")), i = (0, s.useRef)(null), r = (0, s.useRef)(null), o = (0, s.useRef)(null), l = () => {
                            if (Pt.map.renderSync(), !Xt.element || !i.current) return;
                            const e = Pt.map.getView().getCenter(),
                                t = Xt.element.getBoundingClientRect(),
                                n = i.current.getBoundingClientRect(),
                                a = [n.left, n.top],
                                s = [...a];
                            t.left > n.left && (s[0] = t.left + 10), t.top > n.top && (s[1] = t.top + 10), t.right < n.right && (s[0] = n.width <= t.width ? t.right - n.width - 10 : t.left + 10), t.bottom < n.bottom && (s[1] = n.height <= t.height ? t.bottom - n.height - 10 : t.top + 10);
                            const r = a[0] - s[0],
                                o = a[1] - s[1];
                            if (0 !== r || 0 !== o) {
                                const t = Pt.map.getPixelFromCoordinate(e),
                                    n = [t[0] + r, t[1] + o],
                                    a = Pt.map.getCoordinateFromPixel(n);
                                Pt.map.getView().animate({
                                    center: a,
                                    duration: 500,
                                    easing: $c.Vv
                                })
                            }
                        }, c = e => {
                            const t = a.current.parentNode,
                                n = Number(t.style.left.replace("px", ""));
                            t.style.left = `${n+e.movementX}px`;
                            const i = Number(t.style.top.replace("px", ""));
                            t.style.top = `${i+e.movementY}px`
                        }, d = () => {
                            const e = a.current.parentNode,
                                t = o.current;
                            if (!e.classList.contains(Kc)) {
                                e.classList.add(Kc);
                                const t = e.style.transform.split(") ")[1].match(/\d+/g);
                                t && (e.style.left = `${t[0]}px`, e.style.top = `${t[1]}px`)
                            }
                            t.style.cursor = "grabbing", document.addEventListener("mousemove", c), document.addEventListener("mouseup", (() => {
                                document.removeEventListener("mousemove", c), t.style.cursor = "grab"
                            }), {
                                once: !0
                            })
                        }, m = e => {
                            !o.current && e ? (o.current = e, o.current.addEventListener("mousedown", d)) : o.current && !e && (o.current.removeEventListener("mousedown", d), o.current = e)
                        };
                        (0, s.useEffect)((() => {
                            if (t) {
                                const e = new me.Z({
                                    element: a.current,
                                    positioning: "bottom-center",
                                    offset: [0, -10]
                                });
                                r.current = e, Pt.map.addOverlay(e)
                            }
                            return () => {
                                r.current && Pt.map.removeOverlay(r.current)
                            }
                        }), [t]), (0, s.useEffect)((() => {
                            var e;
                            r.current && (null == t ? void 0 : t.coordinates) && (null === (e = r.current) || void 0 === e || e.setPosition(t.coordinates), n.xs ? setTimeout((() => {
                                const e = a.current.clientHeight / 2;
                                console.log(e);
                                const n = Pt.map.getPixelFromCoordinate(t.coordinates)[1] - e;
                                Pt.map.getView().animate({
                                    center: [t.coordinates[0], Pt.map.getCoordinateFromPixel([0, n])[1]],
                                    duration: 500,
                                    easing: $c.Vv
                                })
                            }), 50) : setTimeout(l, 200))
                        }), [null == t ? void 0 : t.coordinates]);
                        return Ya.createPortal((() => {
                            let e = null;
                            return (null == t ? void 0 : t.type) !== nn.cluster ? null : (e = s.createElement(Wc, null), s.createElement("div", {
                                className: zc,
                                ref: i
                            }, s.createElement("div", {
                                className: Yc,
                                ref: m,
                                style: {
                                    cursor: "grab"
                                }
                            }), e))
                        })(), a.current)
                    },
                    Xc = "mapWrapper",
                    qc = "mapContainer",
                    Qc = "panelTop",
                    ed = "controlsGroup",
                    td = "acideWrapper",
                    nd = "panelRight",
                    ad = "panelBottom",
                    id = () => {
                        const e = (0, r.v9)((e => e.map)),
                            t = (0, r.v9)((e => e.app)),
                            n = (0, r.v9)((e => I(e, "GEOGRAPHY"))),
                            a = (0, s.useRef)(null),
                            i = (0, r.v9)(bc),
                            {
                                t: o
                            } = (0, Bn.$G)(),
                            l = xi();
                        return (0, s.useEffect)((() => {
                            var n;
                            a.current && (Pt.setDefaultParam(a.current, e.zoom, e.center, t.config.publication.map_position.min_zoom, t.config.publication.map_position.max_zoom), Pt.baseMaps.create(null === (n = t.config) || void 0 === n ? void 0 : n.publication.base_maps, t.config.google_maps_api_key), Pt.map.on("moveend", (() => {
                                const e = (0, G.bU)(Pt.map.getView().getCenter()).map((e => Number(e.toFixed(6)))),
                                    t = Pt.map.getView().getZoom();
                                Ht.setMapPosition({
                                    zoom: t,
                                    center: e
                                }), mn({
                                    center: e,
                                    zoom: t
                                })
                            })), Pt.onContainersInteraction((e => {
                                (null == e ? void 0 : e.features) ? An.showClusterBalloon(e): e && un({
                                    object: `${e.map_code}.${e.layer}.${e.orbis_id}`
                                })
                            })))
                        }), [a]), (0, s.useEffect)((() => {
                            var t;
                            if (Pt.map.getView().setZoom(e.zoom), i) {
                                const e = (null === (t = cn.searchParams) || void 0 === t ? void 0 : t.get("object")) || "",
                                    [n, a, i] = e.split(".");
                                $n.updateHighlightGeom({
                                    mapCode: n,
                                    layerCode: a,
                                    objectId: Number(i)
                                })
                            } else e.highlightGeom && Pt.sysLayer.hideHighlight()
                        }), [e.zoom]), (0, s.useEffect)((() => {
                            Pt.baseMaps.switchMap(e.baseMap)
                        }), [e.baseMap]), (0, s.useEffect)((() => {
                            Pt.baseMaps.switchCadastre(e.cadastre)
                        }), [e.cadastre]), (0, s.useEffect)((() => {
                            e.highlightGeom ? Pt.sysLayer.showHighlight(e.highlightGeom) : Pt.sysLayer.hideHighlight()
                        }), [e.highlightGeom]), (0, s.useEffect)((() => {
                            e.fitExtent.extent && (Pt.fitToExtent(e.fitExtent.extent, e.fitExtent.options), Ht.fitToExtent({
                                extent: null,
                                options: null
                            }))
                        }), [e.fitExtent]), (0, s.useEffect)((() => {
                            if (e.geography && i) {
                                let e = "#000";
                                switch (i.fields.level_organizational_development) {
                                    case o("Высокий"):
                                        e = "#3fab3c";
                                        break;
                                    case o("Средний"):
                                        e = "#ff9601";
                                        break;
                                    case o("Начальный"):
                                        e = "#9494b6";
                                        break;
                                    default:
                                        e = "#55585a"
                                }
                                Pt.showGeography(i, n, e, !l.xs)
                            } else Pt.hideGeography()
                        }), [e.geography]), s.createElement(s.Fragment, null, s.createElement("div", {
                            className: qc,
                            ref: a
                        }), e.balloon && s.createElement(Jc, {
                            balloonState: e.balloon,
                            screen: l
                        }))
                    },
                    sd = () => {
                        const [e] = (0, s.useState)(l.ZP.language), {
                            t
                        } = (0, Bn.$G)();
                        return s.createElement(Xa, {
                            overlay: On.map((t => s.createElement(qa, {
                                key: t,
                                suffixIcon: e === t ? s.createElement(dc.CheckFill, null) : void 0,
                                onClick: () => (un({
                                    lng: t
                                }), void window.location.reload())
                            }, s.createElement(ua.Text, {
                                variant: "medium"
                            }, t.toUpperCase())))),
                            placement: "bottomRight"
                        }, s.createElement(pi, {
                            icon: s.createElement(dc.GlobalFill, null),
                            variant: "default",
                            title: t("Сменить язык")
                        }, e.toUpperCase()))
                    },
                    rd = "baseMapControlDropdown",
                    od = "warningIcon",
                    ld = "baseMapControlTooltip",
                    cd = {
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    dd = () => {
                        const e = (0, r.v9)((e => e.app.config.publication.base_maps)),
                            {
                                baseMap: t,
                                cadastre: n
                            } = (0, r.v9)((e => e.map)),
                            a = e => {
                                const t = e.names.find((e => l.ZP.language in e));
                                return e.localized_name && t ? t[l.ZP.language] : e.name
                            },
                            {
                                t: i
                            } = (0, Bn.$G)();
                        return s.createElement(Xa, {
                            overlay: e.map((e => s.createElement(qa, {
                                key: e.id
                            }, "cadastre" !== e.value && s.createElement(Si, {
                                checked: t === e.id,
                                onChange: () => Ht.setBaseMap(e.id),
                                label: a(e)
                            }), "cadastre" === e.value && s.createElement(s.Fragment, null, s.createElement(wi, {
                                checked: n,
                                onChange: () => Ht.setCadastre(!n),
                                label: a(e),
                                alignment: "center"
                            }), s.createElement(ei, {
                                text: s.createElement(s.Fragment, null, i("Кадастровая карта может быть недоступна. "), i("Для отображения кадастровой карты используйте "), s.createElement(ua.Anchor, Object.assign({
                                    href: "https://browser.yandex.ru"
                                }, cd), i("Яндекс Браузер")), i(" или установите сертификат с сайта "), s.createElement(ua.Anchor, Object.assign({
                                    href: "https://www.gosuslugi.ru/crt"
                                }, cd), i("Госуслуги")), ". "),
                                placement: "left",
                                className: ld,
                                arrow: !0
                            }, s.createElement("span", {
                                className: od
                            }, s.createElement(dc.NotifyWarning, null))))))),
                            placement: "bottomRight",
                            className: rd
                        }, s.createElement(pi, {
                            variant: "default",
                            icon: s.createElement(dc.Map2Fill, null),
                            title: i("Базовые карты")
                        }))
                    },
                    md = "measurementControlDropdown",
                    ud = () => {
                        const [e, t] = (0, s.useState)(null), [n, a] = (0, s.useState)(!1), {
                            t: i
                        } = (0, Bn.$G)(), r = () => {
                            t(null)
                        }, o = (0, s.useMemo)((() => Pt.widgets.getMeasurements({
                            onStop: r,
                            lng: l.ZP.language
                        })), []), c = e => {
                            t(e), e ? o.start(e) : o.stopInteraction()
                        }, d = (0, s.useMemo)((() => ({
                            distance: s.createElement(dc.RulerFill, null),
                            area_meter: s.createElement(dc.ShapeLine, null),
                            area_hectar: s.createElement(dc.CropLine, null)
                        })), []);
                        return s.createElement(Xa, {
                            overlay: [{
                                icon: s.createElement(dc.RulerLine, null),
                                label: i("Расстояние"),
                                key: Fe.distance
                            }, {
                                icon: s.createElement(dc.ShapeLine, null),
                                label: i("Площадь, км"),
                                key: Fe.area_meter
                            }, {
                                icon: s.createElement(dc.CropLine, null),
                                label: i("Площадь, Га"),
                                key: Fe.area_hectar
                            }].map((e => s.createElement(qa, {
                                key: e.key,
                                onClick: () => c(e.key)
                            }, e.icon, s.createElement(ua.Text, {
                                variant: "medium"
                            }, e.label)))),
                            placement: "bottomRight",
                            className: md,
                            onChangeShow: e => a(e)
                        }, s.createElement(pi, {
                            icon: d[e] || s.createElement(dc.Ruler2Fill, null),
                            variant: n ? "active" : "default",
                            onClick: () => c(null),
                            title: i("Измерения расстояний")
                        }))
                    },
                    pd = "menuControl",
                    hd = () => {
                        const {
                            t: e
                        } = (0, Bn.$G)();
                        return s.createElement(Xa, {
                            overlay: [{
                                label: e("О проекте"),
                                action: () => $n.loadAbout(Nn.about),
                                icon: s.createElement(dc.InformationLine, null)
                            }, {
                                label: e("Ссылка на карту"),
                                action: () => {
                                    wn.setLinkModal({
                                        name: e("Ссылка на карту"),
                                        link: window.location.href
                                    })
                                },
                                icon: s.createElement(dc.LinksLine, null)
                            }, {
                                label: e("Печать карты"),
                                action: () => Ht.printMap(),
                                icon: s.createElement(dc.PrinterLine, null)
                            }, {
                                label: e("Документы"),
                                action: () => $n.loadAbout(Nn.materials),
                                icon: s.createElement(dc.BookmarkLine, null)
                            }, {
                                label: e("Администрировать"),
                                action: () => window.open("https://gisp.gov.ru/gisip/admin", "_blank"),
                                icon: s.createElement(dc.AdminLine, null)
                            }].map((e => s.createElement(qa, {
                                key: e.label,
                                onClick: () => e.action()
                            }, e.icon, s.createElement(ua.Text, {
                                variant: "medium"
                            }, e.label)))),
                            placement: "bottomRight",
                            className: pd
                        }, s.createElement(pi, {
                            variant: "accent",
                            icon: s.createElement(dc.MenuFill, null),
                            title: e("Меню")
                        }))
                    },
                    gd = "zoomControl",
                    vd = () => {
                        const {
                            max_zoom: e,
                            min_zoom: t
                        } = (0, r.v9)((e => e.app.config.publication.map_position)), n = (0, r.v9)((e => e.map.zoom)), a = e => {
                            Ht.setMapZoom(e)
                        }, {
                            t: i
                        } = (0, Bn.$G)();
                        return s.createElement(za, {
                            orientation: "vertical",
                            noGaps: !0,
                            className: gd
                        }, s.createElement(pi, {
                            icon: s.createElement(dc.AddFill, null),
                            variant: "default",
                            title: i("Приблизить"),
                            onClick: () => {
                                n < e && a(Math.min(Math.round(n + 1), e))
                            }
                        }), s.createElement(pi, {
                            icon: s.createElement(dc.SubtractFill, null),
                            variant: "default",
                            title: i("Отдалить"),
                            onClick: () => {
                                n > t && a(Math.max(Math.round(n - 1), t))
                            }
                        }))
                    };
                n(1609);
                var fd = n(7494);
                const yd = [1, 2, 5],
                    bd = 25.4 / .28;
                class CustomScaleLine extends fd.Z {
                    updateElement_() {
                        const e = this.viewState_;
                        if (!e) return void(this.renderedVisible_ && (this.element.style.display = "none", this.renderedVisible_ = !1));
                        const {
                            center: t
                        } = e, {
                            projection: n
                        } = e, a = this.getUnits(), i = "degrees" === a ? "degrees" : "m";
                        let s = (0, G._Q)(n, e.resolution, t, i);
                        const r = this.minWidth_ * (this.dpi_ || bd) / bd,
                            o = void 0 !== this.maxWidth_ ? this.maxWidth_ * (this.dpi_ || bd) / bd : void 0;
                        let l = r * s,
                            c = "";
                        if ("degrees" === a) {
                            const e = METERS_PER_UNIT.degrees;
                            l *= e, l < e / 60 ? (c = "″", s *= 3600) : l < e ? (c = "′", s *= 60) : c = "°"
                        } else "imperial" === a ? l < .9144 ? (c = "in", s /= .0254) : l < 1609.344 ? (c = "ft", s /= .3048) : (c = "mi", s /= 1609.344) : "nautical" === a ? (s /= 1852, c = "NM") : "metric" === a ? l < .001 ? (c = "μm", s *= 1e6) : l < 1 ? (c = "mm", s *= 1e3) : l < 1e3 ? c = "m" : (c = "km", s /= 1e3) : "us" === a ? l < .9144 ? (c = "in", s *= 39.37) : l < 1609.344 ? (c = "ft", s /= .30480061) : (c = "mi", s /= 1609.3472) : assert(!1, 33);
                        let d, m, u, p, h, g, v = 3 * Math.floor(Math.log(r * s) / Math.log(10));
                        for (;;) {
                            u = Math.floor(v / 3);
                            const e = Math.pow(10, u);
                            if (d = yd[(v % 3 + 3) % 3] * e, m = Math.round(d / s), Number.isNaN(m)) return this.element.style.display = "none", void(this.renderedVisible_ = !1);
                            if (void 0 !== o && m >= o) {
                                d = p, m = h, u = g;
                                break
                            }
                            if (m >= r) break;
                            p = d, h = m, g = u, ++v
                        }
                        if (m < r) {
                            const e = d / Math.pow(10, u);
                            m += Math.round(m / e), d += Math.pow(10, u)
                        }
                        if (m > o) {
                            const e = d / Math.pow(10, u);
                            m -= Math.round(m / e), d -= Math.pow(10, u)
                        }
                        const f = this.scaleBar_ ? this.createScaleBar(m, d, c) : d.toFixed(u < 0 ? -u : 0) + " " + c;
                        this.renderedHTML_ !== f && (this.innerElement_.innerHTML = f, this.renderedHTML_ = f), this.renderedWidth_ !== m && (this.innerElement_.style.width = m + "px", this.renderedWidth_ = m), this.renderedVisible_ || (this.element.style.display = "", this.renderedVisible_ = !0)
                    }
                    render(e) {
                        let t;
                        const n = {
                                metric: {
                                    " km": " км",
                                    " m": " м"
                                }
                            },
                            {
                                frameState: a
                            } = e;
                        if (this.viewState_ = a ? a.viewState : null, this.updateElement_(), "ru" === l.ZP.language) {
                            const e = this.get("units");
                            for (const a in n[e]) void 0 !== n[e][a] && (t = new RegExp(`${a}$`), this.innerElement_.innerHTML = this.innerElement_.innerHTML.replace(t, n[e][a]), this.renderedHTML = this.innerElement_.innerHTML)
                        }
                    }
                }
                const Ed = e => {
                        const {
                            map: t
                        } = e;
                        return (0, s.useEffect)((() => {
                            t.addControl(new CustomScaleLine({
                                maxWidth: 120,
                                minWidth: 70
                            }))
                        }), []), s.createElement(s.Fragment, null)
                    },
                    wd = e => {
                        const {
                            appContainer: t,
                            refBottom: n
                        } = e, a = (0, r.v9)((e => e.app.config.publication.settings.customWidgets)), i = xi(), o = (0, s.useRef)(null);
                        return s.createElement(s.Fragment, null, s.createElement("div", {
                            className: Xc
                        }, s.createElement(id, null), t && (0, Ya.createPortal)(s.createElement(s.Fragment, null, s.createElement("div", {
                            className: Qc
                        }, s.createElement(za, {
                            orientation: "horizontal",
                            className: ed
                        }, s.createElement(sd, null), s.createElement(dd, null), !i.xs && a.toolsWidget.values.measurements && s.createElement(ud, null), !i.xs && s.createElement(hd, null))), s.createElement("div", {
                            className: td
                        }, !i.xs && s.createElement(Hc, {
                            controlRef: o
                        })), s.createElement("div", {
                            className: nd,
                            ref: o
                        }, s.createElement(vd, null)), s.createElement("div", {
                            className: ad,
                            ref: n
                        }, s.createElement(Ed, {
                            map: Pt.map
                        }))), t)))
                    },
                    Sd = "sidebarHeader",
                    jd = "sidebarHeaderItem",
                    Od = e => {
                        const t = (0, r.v9)((e => I(e, "FAVOURITE"))),
                            n = (0, r.v9)((e => I(e, "COMPARISON"))),
                            {
                                handlers: a = {}
                            } = e,
                            i = (0, r.v9)((e => e.app.config)),
                            o = xi(),
                            c = Object.entries(n).reduce(((e, [, t]) => e + t.objects.length), 0),
                            {
                                t: d
                            } = (0, Bn.$G)(),
                            m = (0, Gn.TH)(),
                            [u, p] = (0, s.useMemo)((() => {
                                const [e] = dn();
                                return [((null == e ? void 0 : e.pathname) || "").split("/")[1], null == e ? void 0 : e.params]
                            }), [m.pathname]),
                            h = (0, s.useMemo)((() => {
                                var e;
                                const {
                                    customWidgets: t
                                } = i.publication.settings;
                                return null === (e = t.search) || void 0 === e ? void 0 : e.enabled
                            }), [i]);
                        if ("sections" === u && p.container || !o.xs && "search" === u) return null;
                        const g = () => {
                            var e;
                            return s.createElement("div", {
                                className: (0, Yn.Z)(jd, {
                                    disabled: !t.items.length
                                }),
                                onClick: () => {
                                    t.items.length && pn(cn.favourite)
                                }
                            }, s.createElement(pi, {
                                icon: "favourite" === u ? s.createElement(dc.StarFill, null) : s.createElement(dc.StarLine, null),
                                variant: "favourite" === u ? "primary" : "ghost",
                                count: t.items.length,
                                disabled: !(null === (e = null == t ? void 0 : t.items) || void 0 === e ? void 0 : e.length)
                            }), s.createElement(ua.Text, {
                                active: "favourite" === u,
                                disabled: !t.items.length
                            }, d("Избранное")))
                        };
                        return s.createElement(_i.Header, Object.assign({
                            className: Sd
                        }, a, {
                            style: ["favourite", "registry"].includes(u) ? {
                                borderBottom: "unset"
                            } : {}
                        }), s.createElement("div", {
                            className: jd,
                            onClick: () => pn(cn.sections)
                        }, s.createElement(pi, {
                            icon: "sections" === u ? s.createElement(dc.StackFill, null) : s.createElement(dc.StackLine, null),
                            variant: "sections" === u ? "primary" : "ghost"
                        }), s.createElement(ua.Text, {
                            active: "sections" === u
                        }, d("Разделы"))), !o.xs && s.createElement("div", {
                            className: (0, Yn.Z)(jd, !c && "disabled"),
                            onClick: () => {
                                c && pn(cn.compare)
                            }
                        }, s.createElement(pi, {
                            icon: "compare" === u ? s.createElement(dc.BarChartFill, null) : s.createElement(dc.BarChartLine, null),
                            variant: "compare" === u ? "primary" : "ghost",
                            disabled: !c,
                            count: c
                        }), s.createElement(ua.Text, {
                            disabled: !c,
                            active: "compare" === u
                        }, d("Сравнить"))), !o.xs && g(), s.createElement("div", {
                            className: (0, Yn.Z)(jd, "ru" !== l.ZP.language && "disabled"),
                            onClick: () => {
                                "ru" === l.ZP.language && pn(cn.registry)
                            }
                        }, s.createElement(pi, {
                            icon: "registry" === u ? s.createElement(dc.BookOpenFill, null) : s.createElement(dc.BookOpenLine, null),
                            variant: "registry" === u ? "primary" : "ghost",
                            disabled: "ru" !== l.ZP.language
                        }), s.createElement(ua.Text, {
                            disabled: "ru" !== l.ZP.language,
                            active: "registry" === u
                        }, d("Реестр"))), h && o.xs && s.createElement("div", {
                            className: jd,
                            onClick: () => pn(cn.search)
                        }, s.createElement(pi, {
                            icon: s.createElement(dc.SearchIcon, null),
                            variant: "search" === u ? "primary" : "ghost"
                        }), s.createElement(ua.Text, {
                            active: "search" === u
                        }, d("Поиск"))), o.xs && g())
                    },
                    Cd = {
                        absoluteCenterBlock: "absoluteCenterBlock",
                        verticalCentering: "verticalCentering",
                        horizontalCentering: "horizontalCentering",
                        focus: "focus",
                        error: "error",
                        containerItem: "containerItem",
                        withCount: "withCount",
                        goNext: "goNext",
                        "layer-icon_large": "layer-icon_large",
                        "layer-icon_medium": "layer-icon_medium",
                        "layer-icon_small": "layer-icon_small",
                        "oms-icon_large": "oms-icon_large",
                        "oms-icon_medium": "oms-icon_medium",
                        "oms-icon_small": "oms-icon_small",
                        containerNameWrapper: "containerNameWrapper",
                        containerName: "containerName"
                    },
                    Nd = e => {
                        const {
                            mapCode: t,
                            container: n,
                            settings: a
                        } = e, i = (0, r.v9)((e => {
                            var t;
                            return k(e, `MAP_${null===(t=n.map_info)||void 0===t?void 0:t.code}`)
                        })), o = (0, r.v9)((e => pc(e, {
                            mapCode: t,
                            container: n
                        }))), l = (0, s.useMemo)((() => n.map_info || "folder" === n.type || (null == a ? void 0 : a.objectsListEnabled)), [n, a]), c = (0, s.useMemo)((() => {
                            var e, t;
                            return (null === (e = n.map_info) || void 0 === e ? void 0 : e.name) || (null === (t = n.map_info) || void 0 === t ? void 0 : t.code) || n.name || n.code
                        }), [n]), d = (0, s.useMemo)((() => i === A.PENDING ? s.createElement(Ii, null) : n.eye ? s.createElement(dc.EyeFill, null) : s.createElement(dc.EyeOffFill, null)), [n.eye, i]);
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Cd.containerItem, {
                                [Cd.withCount]: null !== o,
                                [Cd.goNext]: l
                            }),
                            onClick: () => {
                                if (l)
                                    if (n.map_info) {
                                        const {
                                            code: e
                                        } = n.map_info;
                                        pn(cn.sections, {
                                            container: `${e}`
                                        })
                                    } else pn(cn.sections, {
                                        container: `${t}:${n.id}`
                                    })
                            }
                        }, s.createElement(pi, {
                            icon: d,
                            variant: "secondary",
                            size: "medium",
                            className: Cd.selectButton,
                            onClick: e => {
                                e.stopPropagation(), n.map_info ? xn.selectMap({
                                    mapCode: n.map_info.code,
                                    selected: !n.eye
                                }) : xn.setSelectedContainer({
                                    mapCode: t,
                                    containerId: n.id,
                                    selected: !n.eye
                                })
                            }
                        }), s.createElement("div", {
                            className: Cd.containerNameWrapper
                        }, s.createElement(ua.Title, {
                            className: Cd.containerName,
                            title: c
                        }, c), null !== o && s.createElement(mi, {
                            count: o,
                            variant: "secondary"
                        })), l && s.createElement(pi, {
                            icon: s.createElement(dc.ArrowRightLine, null),
                            variant: "ghost",
                            size: "medium"
                        }))
                    },
                    Ld = {
                        absoluteCenterBlock: "absoluteCenterBlock",
                        verticalCentering: "verticalCentering",
                        horizontalCentering: "horizontalCentering",
                        focus: "focus",
                        error: "error",
                        swipeable_min: "swipeable_min",
                        containersListHeader: "containersListHeader",
                        containersParentName: "containersParentName",
                        containersListHeaderActions: "containersListHeaderActions",
                        containersList: "containersList",
                        containersLoader: "containersLoader",
                        containersEmpty: "containersEmpty",
                        containersEmptyLabel: "containersEmptyLabel"
                    },
                    Md = e => {
                        const {
                            mapCode: t,
                            container: n,
                            rootMapCode: a,
                            containersList: i = [],
                            handlers: o
                        } = e, l = (0, r.v9)((e => I(e, `PUB_LAYERS_${a}`))), c = (0, r.v9)((e => x(e, `MAP_${t}`))), d = (0, s.useMemo)((() => l.find((e => {
                            var n;
                            return (null === (n = e.map_info) || void 0 === n ? void 0 : n.code) === t
                        }))), [null == n ? void 0 : n.id, t]), {
                            t: m
                        } = (0, Bn.$G)(), u = (0, s.useMemo)((() => n || (t && a !== t ? null == d ? void 0 : d.map_info : null)), [null == n ? void 0 : n.id, t]), p = (0, s.useMemo)((() => (i || []).filter((e => e.parent_id === ((null == n ? void 0 : n.id) || 0)))), [i, null == n ? void 0 : n.id]), h = (0, s.useMemo)((() => {
                            if (!c.data) return {};
                            const e = {};
                            for (const t of c.data) e[t.containerId] = t;
                            return e
                        }), [c.status]), g = () => {
                            pn(cn.sections, {
                                container: ""
                            })
                        };
                        (0, s.useEffect)((() => {
                            0 == i.length && a !== t && (d ? xn.loadMapContent({
                                mapCode: t
                            }) : g())
                        }), [i.length, d]);
                        return s.createElement(s.Fragment, null, u && s.createElement(_i.Header, Object.assign({
                            className: Ld.containersListHeader
                        }, o), s.createElement(pi, {
                            icon: s.createElement(dc.ArrowLeftLine, null),
                            variant: "ghost",
                            size: "medium",
                            title: "Назад",
                            onClick: () => {
                                "number" != typeof u.parent_id ? g() : pn(cn.sections, {
                                    container: `${t}:${u.parent_id}`
                                })
                            }
                        }), s.createElement(ua.Title, {
                            variant: "H3",
                            className: Ld.containersParentName
                        }, u.name || u.code), s.createElement("div", {
                            className: Ld.containersListHeaderActions
                        }, n && "folder" !== n.type && s.createElement(pi, {
                            icon: n.eye ? s.createElement(dc.EyeFill, null) : s.createElement(dc.EyeOffFill, null),
                            variant: "secondary",
                            size: "medium",
                            className: (0, Yn.Z)(Ld.selectButton),
                            onClick: e => {
                                e.stopPropagation(), n && xn.setSelectedContainer({
                                    mapCode: t,
                                    containerId: n.id,
                                    selected: !(null == n ? void 0 : n.eye)
                                })
                            },
                            title: m(n.eye ? "Выключить" : "Включить")
                        }), "folder" === u.type && s.createElement(Ci, {
                            size: "medium",
                            onClick: g
                        }))), s.createElement(_i.Body, {
                            className: Ld.containersList
                        }, c.status === A.PENDING ? s.createElement("div", {
                            className: Ld.containersLoader
                        }, s.createElement(Ii, null)) : s.createElement(Zi, null, 0 === p.length ? s.createElement("div", {
                            className: Ld.containersEmpty
                        }, !u && s.createElement(pi, {
                            icon: s.createElement(dc.ArrowLeftLine, null),
                            variant: "ghost",
                            size: "medium",
                            onClick: g,
                            title: m("В начало")
                        }), s.createElement(ua.Text, {
                            className: Ld.containersEmptyLabel
                        }, m("Список пуст"))) : p.map((e => s.createElement(Nd, {
                            key: e.id,
                            container: e,
                            mapCode: t,
                            settings: h[e.id]
                        }))))))
                    },
                    Ad = "objectsListHeader",
                    _d = "objectsListSortFilters",
                    xd = "objectsListStatiscticSite",
                    Id = "objectsListName",
                    Td = "parentName",
                    kd = "objectsListHeaderActions",
                    Zd = "objectsListSort",
                    Rd = "objectsListSortDirButton",
                    Pd = "dirAsc",
                    Fd = e => {
                        const {
                            container: t,
                            rootMapCode: n,
                            mapCode: a,
                            handlers: i,
                            sortType: o,
                            setSortType: l,
                            sortDir: c,
                            setSortDir: d
                        } = e, {
                            t: m
                        } = (0, Bn.$G)(), u = (0, r.v9)((e => fc(e, {
                            mapCode: a,
                            containerId: t.id
                        }))), p = (0, r.v9)((e => yc(e, {
                            mapCode: a,
                            containerId: t.id
                        }))), h = (0, s.useMemo)((() => {
                            if (!t.json.sort) return null;
                            switch (t.json.sort.type) {
                                case "area":
                                    return {
                                        icon: o ? s.createElement(dc.AreaSortFill, null) : s.createElement(dc.AreaSortOutline, null), column: t.json.sort.column, title: m("По площади")
                                    };
                                case "count_users":
                                    return {
                                        icon: o ? s.createElement(dc.CountUsersFill, null) : s.createElement(dc.CountUsersOutline, null), column: t.json.sort.column, title: m("По количеству участников")
                                    };
                                case "subject":
                                    return {
                                        icon: o ? s.createElement(dc.SubjectSortFill, null) : s.createElement(dc.SubjectSortOutline, null), column: t.json.sort.column, title: m("По субъекту РФ")
                                    };
                                default:
                                    return null
                            }
                        }), [t.id, o]), g = () => {
                            pn(cn.sections, {
                                container: ""
                            })
                        };
                        return s.createElement(_i.Header, Object.assign({
                            className: Ad
                        }, i), s.createElement("div", {
                            className: Id
                        }, s.createElement(pi, {
                            icon: s.createElement(dc.ArrowLeftLine, null),
                            variant: "ghost",
                            size: "medium",
                            title: m("Назад"),
                            onClick: () => {
                                0 === t.parent_id ? n === a ? g() : n !== a && pn(cn.sections, {
                                    container: a
                                }) : pn(cn.sections, {
                                    container: `${a}:${t.parent_id}`
                                })
                            }
                        }), s.createElement(ua.Title, {
                            variant: "H3",
                            className: Td,
                            title: t.name || t.code
                        }, t.name || t.code), s.createElement("div", {
                            className: kd
                        }, s.createElement(pi, {
                            icon: t.eye ? s.createElement(dc.EyeFill, null) : s.createElement(dc.EyeOffFill, null),
                            variant: "secondary",
                            size: "medium",
                            onClick: () => {
                                xn.setSelectedContainer({
                                    mapCode: a,
                                    containerId: t.id,
                                    selected: !t.eye
                                })
                            },
                            title: m(t.selected ? "Выключить слой" : "Включить слой")
                        }), s.createElement(Ci, {
                            onClick: g,
                            size: "medium",
                            title: m("Закрыть")
                        }))), s.createElement("div", {
                            className: xd
                        }, t.json.statistic && s.createElement(pi, {
                            variant: "secondary",
                            size: "medium",
                            icon: s.createElement(dc.PieChart2Fill, null),
                            onClick: () => {
                                un({
                                    stats: ""
                                }), setTimeout((() => un({
                                    stats: `${a}.${t.id}`
                                })), 0)
                            }
                        }, m("Статистика")), t.json.site_selection && s.createElement(pi, {
                            variant: "accent",
                            size: "medium",
                            count: p,
                            onClick: () => wn.setMainWindow("site_selection")
                        }, m("Подбор площадки"))), s.createElement("div", {
                            className: _d
                        }, s.createElement("div", {
                            className: Zd
                        }, h && s.createElement(s.Fragment, null, s.createElement(pi, {
                            variant: o ? "active" : "ghost",
                            size: "medium",
                            icon: null == h ? void 0 : h.icon,
                            onClick: () => l(!o),
                            title: null == h ? void 0 : h.title
                        })), s.createElement(pi, {
                            variant: "ghost",
                            size: "medium",
                            icon: s.createElement(dc.SortDesk, null),
                            className: (0, Yn.Z)(Rd, {
                                [Pd]: c === Sn.ASC
                            }),
                            onClick: () => d(c === Sn.ASC ? Sn.DESC : Sn.ASC),
                            title: m(c === Sn.ASC ? "По возрастанию" : "По убыванию")
                        })), t.json.filters && s.createElement(pi, {
                            icon: s.createElement(dc.Filters3Fill, null),
                            count: u,
                            variant: "active",
                            size: "medium",
                            onClick: () => wn.setMainWindow("filter")
                        }, m("Фильтры"))))
                    },
                    Hd = "objectsListItem",
                    $d = "virtual",
                    Vd = "objectsItemContentWrapper",
                    Ud = "objectsItemNameWrapper",
                    Bd = "interactive",
                    Gd = "objectsItemColor",
                    Dd = "objectsItemIcon",
                    Wd = "objectsItemName",
                    zd = "objectsItemActions",
                    Yd = "objectsItemInfoWrapper",
                    Kd = "objectsItemIndicators",
                    Jd = "active",
                    Xd = e => {
                        const {
                            mapCode: t,
                            object: n,
                            container: a,
                            apiUrl: i,
                            rowHeight: o,
                            index: c,
                            layerSettings: d,
                            translates: m,
                            isFav: u,
                            screenSize: p
                        } = e, h = (0, r.v9)((e => I(e, `FULL_LAYERS_${t}`))), g = (0, r.v9)((e => I(e, "COMPARISON"))), v = (0, s.useMemo)((() => {
                            var e, t;
                            return n.source && n.source_id ? !!(null === (e = g[n.source]) || void 0 === e ? void 0 : e.objects.map((({
                                id: e
                            }) => e)).includes(n.source_id)) : !!(null === (t = g[a.code]) || void 0 === t ? void 0 : t.objects.map((({
                                id: e
                            }) => e)).includes(n.id))
                        }), [n, g, a]), [f, y, b] = (0, s.useMemo)((() => {
                            if (n.color) {
                                return [s.createElement("div", {
                                    className: "layer-icon_small"
                                }, s.createElement("div", {
                                    style: {
                                        backgroundColor: n.color
                                    },
                                    className: Gd
                                })), "", n.color]
                            }
                            if (n.icon) return [oa(n.icon), n.icon, ""];
                            const e = ra(a, i, t);
                            return [oa(e), e, ""]
                        }), []);
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Hd, {
                                [$d]: a.json.virtual_list,
                                [Bd]: d.objectWindowEnabled || d.balloonEnabled
                            }),
                            style: a.json.virtual_list ? {
                                height: o,
                                top: c * o
                            } : {},
                            onClick: () => {
                                (d.objectWindowEnabled || d.balloonEnabled) && un({
                                    object: `${t}.${a.code}.${n.id}`
                                })
                            }
                        }, s.createElement("div", {
                            className: Dd
                        }, n.description ? s.createElement(ei, {
                            text: n.description,
                            arrow: !0
                        }, f) : f), s.createElement("div", {
                            className: Vd
                        }, s.createElement("div", {
                            className: Ud
                        }, s.createElement("div", {
                            className: Wd
                        }, s.createElement(ua.Text, {
                            variant: "bold",
                            title: n.name
                        }, n.name), n.region && s.createElement(ua.Text, {
                            title: n.region
                        }, n.region)), s.createElement("div", {
                            className: zd
                        }, s.createElement(pi, {
                            icon: u ? s.createElement(dc.StarFill, null) : s.createElement(dc.StarLine, null),
                            size: "small",
                            variant: u ? "active" : "ghost",
                            title: m[u ? "Удалить из избранного" : "В избранное"],
                            onClick: e => {
                                e.stopPropagation(), u ? An.deleteFavourite({
                                    mapCode: t,
                                    layerCode: a.code,
                                    objectId: n.id
                                }) : An.addFavourite({
                                    mapCode: t,
                                    layerCode: a.code,
                                    objectId: n.id
                                })
                            }
                        }), !p.xs && !a.json.hide_compare && s.createElement(pi, {
                            icon: v ? s.createElement(dc.BarChartFill, null) : s.createElement(dc.BarChartLine, null),
                            size: "small",
                            variant: v ? "active" : "ghost",
                            title: m[v ? "В сравнении" : "Сравнить"],
                            onClick: e => {
                                var i;
                                e.stopPropagation();
                                let s = n.id,
                                    r = a;
                                n.source && n.source_id && (s = n.source_id, r = h.find((e => e.code === n.source))), r && An.setComparison({
                                    layerCode: r.code,
                                    mapCode: t,
                                    layerName: r.name,
                                    object: {
                                        name: n.name,
                                        containerId: a.id,
                                        containerCode: a.code,
                                        admin: !!(null === (i = r.json) || void 0 === i ? void 0 : i.admin),
                                        objectId: n.id,
                                        isClickable: !(!d.objectWindowEnabled && !d.balloonEnabled),
                                        icon: y,
                                        color: b,
                                        id: s
                                    }
                                })
                            }
                        }))), !p.xs && (n.indicators || n.area) && s.createElement("div", {
                            className: Yd
                        }, s.createElement("div", {
                            className: Kd
                        }, n.indicators && s.createElement(s.Fragment, null, s.createElement("span", {
                            title: m["Теплоснабжение"],
                            className: (0, Yn.Z)({
                                [Jd]: n.indicators.heating
                            })
                        }, s.createElement(dc.TempColdLine, null)), s.createElement("span", {
                            title: m["Электроснабжение"],
                            className: (0, Yn.Z)({
                                [Jd]: n.indicators.electricity
                            })
                        }, s.createElement(dc.FlashlightLine, null)), s.createElement("span", {
                            title: m["Газоснабжение"],
                            className: (0, Yn.Z)({
                                [Jd]: n.indicators.gas
                            })
                        }, s.createElement(dc.FireLine, null)), s.createElement("span", {
                            title: m["Водоснабжение"],
                            className: (0, Yn.Z)({
                                [Jd]: n.indicators.water
                            })
                        }, s.createElement(dc.DropLine, null)), s.createElement("span", {
                            title: m["Водоотведение"],
                            className: (0, Yn.Z)({
                                [Jd]: n.indicators.sewage
                            })
                        }, s.createElement(dc.BlurOffLine, null)))), n.area && s.createElement(Ei, null, `${n.area} ${(0,l.t)("Га")}`))))
                    },
                    qd = "objectsListBody",
                    Qd = "objectsListLoader",
                    em = "objectsListBodyInner",
                    tm = "objectsListEmpty",
                    nm = "objectsListFooter",
                    am = "registryFooter",
                    im = e => {
                        var t;
                        const {
                            mapCode: n,
                            rootMapCode: a,
                            container: i,
                            apiUrl: o,
                            handlers: l,
                            screenSize: c
                        } = e, d = (0, r.v9)((e => k(e, "OBJECTS_LIST"))), m = (0, r.v9)((e => gc(e, {
                            mapCode: n,
                            containerId: i.id
                        }))), u = (0, r.v9)((e => vc(e, {
                            mapCode: n,
                            containerId: i.id
                        }))), p = (0, r.v9)((e => I(e, `MAP_${n}`))), h = (0, r.v9)((e => e.operations.FAVOURITE.data.items)), [g, v] = (0, s.useState)(!1), [f, y] = (0, s.useState)(Sn.ASC), [b, E] = (0, s.useState)(0), {
                            t: w
                        } = (0, Bn.$G)(), S = (0, s.useRef)(null), j = (0, s.useMemo)((() => p.find((e => e.containerId === i.id))), [i.id, p.length]), O = (0, s.useMemo)((() => {
                            const {
                                description: e,
                                region: t,
                                area: n,
                                indicators: a,
                                sort: s
                            } = i.json, r = null == s ? void 0 : s.column;
                            return m.map((s => {
                                var o, l, c;
                                const d = s ? qt(s, j) : "",
                                    m = {
                                        id: s.id,
                                        name: d,
                                        description: s.fields[e] || null,
                                        region: s.fields[t] || null,
                                        area: s.fields[n] || null,
                                        sortValue: g && r ? s.fields[r] : d,
                                        source: s.fields.source,
                                        source_id: s.fields.source_id
                                    };
                                if ((null === (o = i.visualSettings) || void 0 === o ? void 0 : o.columnCode) && (null === (l = i.visualSettings) || void 0 === l ? void 0 : l.classesSettings.classes)) {
                                    const e = Et(i.visualSettings.columnCode, On),
                                        t = s.fields[e],
                                        n = null === (c = i.visualSettings) || void 0 === c ? void 0 : c.classesSettings.classes.find((e => e.value === t));
                                    1 === i.render_type && (null == n ? void 0 : n.useIcon) && n.icon ? m.icon = (null == n ? void 0 : n.icon) || "" : (null == n ? void 0 : n.color) && (m.color = (null == n ? void 0 : n.color) || "")
                                }
                                return a && (m.indicators = {
                                    heating: s.fields[a.heating] === w("Да"),
                                    electricity: s.fields[a.electricity] === w("Да"),
                                    gas: s.fields[a.gas] === w("Да"),
                                    water: s.fields[a.water] === w("Да"),
                                    sewage: s.fields[a.sewage] === w("Да")
                                }), m
                            }))
                        }), [m.length, g]), C = (0, s.useMemo)((() => O.sort(((e, t) => {
                            if ("string" == typeof e.sortValue && "string" == typeof t.sortValue) return f === Sn.ASC ? e.sortValue.localeCompare(t.sortValue) : t.sortValue.localeCompare(e.sortValue);
                            if ("number" == typeof e.sortValue && "number" == typeof t.sortValue) {
                                const n = f === Sn.ASC ? e.sortValue : t.sortValue,
                                    a = f === Sn.ASC ? t.sortValue : e.sortValue;
                                return n > a ? 1 : n < a ? -1 : 0
                            }
                            return 0
                        }))), [O, f]), N = (0, s.useMemo)((() => u ? C.filter((e => u.includes(e.id))) : C), [null == u ? void 0 : u.length, C, f, g]), L = (0, s.useMemo)((() => ({
                            Теплоснабжение: w("Теплоснабжение"),
                            Электроснабжение: w("Электроснабжение"),
                            Газоснабжение: w("Газоснабжение"),
                            Водоснабжение: w("Водоснабжение"),
                            Водоотведение: w("Водоотведение"),
                            "В избранное": w("В избранное"),
                            "Удалить из избранного": w("Удалить из избранного"),
                            Сравнить: w("Сравнить"),
                            "В сравнении": w("В сравнении")
                        })), []), M = (0, s.useMemo)((() => {
                            let e = 14;
                            c.xl || (e = 12);
                            let t = 4;
                            const {
                                indicators: n,
                                area: a,
                                region: s
                            } = i.json;
                            return s && (t += 1.5), (n || a) && (t += 3), e * t
                        }), [i.json, c]), _ = (0, s.useMemo)((() => Math.ceil(document.body.clientHeight / M)), [m.length, null === (t = S.current) || void 0 === t ? void 0 : t.clientHeight, M]);
                        (0, s.useEffect)((() => {
                            0 === m.length && An.loadObjectsList({
                                mapCode: n,
                                container: i
                            })
                        }), [m.length]), (0, s.useEffect)((() => () => {
                            An.onCloseObjectsList()
                        }), []);
                        return s.createElement(s.Fragment, null, s.createElement(Fd, {
                            mapCode: n,
                            rootMapCode: a,
                            container: i,
                            handlers: l,
                            sortType: g,
                            setSortType: v,
                            sortDir: f,
                            setSortDir: y
                        }), s.createElement(_i.Body, {
                            className: qd,
                            ref: S
                        }, d === A.PENDING && s.createElement("div", {
                            className: Qd
                        }, s.createElement(Ii, null)), s.createElement(Zi, {
                            scrollableNodeProps: {
                                onScroll: i.json.virtual_list ? e => E(e.target.scrollTop || 0) : void 0
                            }
                        }, s.createElement("div", {
                            style: i.json.virtual_list ? {
                                height: N.length * M
                            } : {},
                            className: em
                        }, (() => {
                            const e = i.json.virtual_list ? Math.floor(b / M) : 0,
                                t = i.json.virtual_list ? e + _ : N.length - 1,
                                a = [];
                            for (let r = e; r <= t; r++) a.push(N[r] ? s.createElement(Xd, {
                                key: N[r].id,
                                object: N[r],
                                mapCode: n,
                                container: i,
                                apiUrl: o,
                                rowHeight: M,
                                index: r,
                                translates: L,
                                layerSettings: j,
                                screenSize: c,
                                isFav: !!h.find((e => e.map === n && e.layer === i.code && e.id === N[r].id))
                            }) : null);
                            return a
                        })()))), s.createElement(_i.Footer, {
                            className: nm
                        }, s.createElement(ua.Text, null, w("Найдено")), s.createElement(ua.Text, {
                            variant: "bold"
                        }, `${u?u.length:m.length} / ${m.length}`)))
                    },
                    sm = e => {
                        const {
                            handlers: t
                        } = e, n = (0, r.v9)((e => e.app.config.mapCode)), a = (0, Gn.UO)(), [i, o] = (0, s.useMemo)((() => {
                            if (!a.container) return [n, void 0];
                            const [e, t] = a.container.split(":");
                            return [e, Number(t)]
                        }), [a]), l = xi();
                        (0, s.useEffect)((() => {
                            a.container ? wn.setMinHeightSwipe(6 * parseInt(getComputedStyle(document.body).fontSize) + 2) : wn.setMinHeightSwipe(null)
                        }), [a.container]), (0, s.useEffect)((() => () => {
                            wn.setMinHeightSwipe(null)
                        }), []);
                        const c = (0, r.v9)((e => I(e, `PUB_LAYERS_${i||n}`))),
                            d = (0, s.useMemo)((() => Y.getApiUrl()), []),
                            m = (0, s.useMemo)((() => null == c ? void 0 : c.find((e => e.id === o))), [i, o, (c || []).map((e => e.id))]);
                        return s.createElement(s.Fragment, null, m && "folder" !== m.type ? s.createElement(im, {
                            mapCode: i,
                            container: m,
                            rootMapCode: n,
                            apiUrl: d,
                            handlers: t,
                            screenSize: l
                        }) : s.createElement(Md, {
                            rootMapCode: n,
                            mapCode: i,
                            container: m,
                            containersList: c,
                            handlers: t
                        }))
                    },
                    rm = {
                        absoluteCenterBlock: "absoluteCenterBlock",
                        verticalCentering: "verticalCentering",
                        horizontalCentering: "horizontalCentering",
                        focus: "focus",
                        error: "error",
                        comparisonWindow: "comparisonWindow",
                        "oms-panel_container": "oms-panel_container",
                        objectsItemColor: "objectsItemColor",
                        closeButton: "closeButton",
                        scrollTable: "scrollTable",
                        wrapperHead: "wrapperHead",
                        wrapperBody: "wrapperBody",
                        row: "row",
                        cell: "cell",
                        "layer-icon_small": "layer-icon_small",
                        itemName: "itemName",
                        clickable: "clickable",
                        itemIcon: "itemIcon",
                        heading: "heading",
                        compareOverlay: "compareOverlay"
                    },
                    om = /((\+7|8)\s?\(?\d{3,5}\)?\s?\d{1,3}(-|\s)?(\d{2}(-|\s)?\d{2}|\d{3}))/g,
                    lm = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/,
                    cm = ({
                        onClose: e
                    }) => {
                        const {
                            data: t,
                            meta: n,
                            status: a
                        } = (0, r.v9)((e => x(e, "COMPARISON_WINDOW"))), [i, o] = (0, s.useState)([]);
                        (0, s.useEffect)((() => {
                            Array.isArray(t) && o(t.map((e => e.id)))
                        }), [t]), (0, s.useEffect)((() => {
                            a === A.FAIL && (wn.setNotify({
                                text: l("Ошибка загрузки данных"),
                                type: en.danger
                            }), e())
                        }), [a]);
                        const {
                            t: l
                        } = (0, Bn.$G)(), c = xi(), d = (0, s.useMemo)((() => document.querySelector("#grids")), []), m = () => {
                            const {
                                headers: t,
                                layerCode: a,
                                mapCode: r,
                                layerName: c
                            } = n;
                            return s.createElement("thead", null, s.createElement("tr", {
                                className: rm.row
                            }, s.createElement("th", {
                                className: rm.cell
                            }, s.createElement(ua.Title, null, l("Сравнение объектов"))), t.filter((e => i.includes(e.id))).map((t => {
                                const {
                                    id: n,
                                    icon: d,
                                    name: m,
                                    color: u
                                } = t;
                                let p = null;
                                return d ? p = oa(d) : u && (p = s.createElement("div", {
                                    className: "layer-icon_small"
                                }, s.createElement("div", {
                                    style: {
                                        backgroundColor: t.color
                                    }
                                }))), s.createElement("th", {
                                    key: n,
                                    className: rm.cell
                                }, p, s.createElement(ua.Anchor, {
                                    title: m,
                                    className: (0, Yn.Z)(rm.itemName, t.isClickable && "clickable"),
                                    onClick: () => {
                                        ((t, n) => {
                                            n.isClickable && (xn.setSelectedContainer({
                                                mapCode: t,
                                                containerId: n.containerId,
                                                selected: !0
                                            }), un({
                                                object: `${t}.${n.containerCode}.${n.objectId}`
                                            }), e())
                                        })(r, t)
                                    }
                                }, m), s.createElement(za, {
                                    orientation: "horizontal"
                                }, s.createElement(pi, {
                                    icon: s.createElement(dc.TrashIcon, null),
                                    size: "small",
                                    variant: "active",
                                    title: l("Удалить"),
                                    onClick: () => {
                                        ((t, n, a, s) => {
                                            (0, Ya.flushSync)((() => {
                                                An.setComparison({
                                                    layerCode: a,
                                                    mapCode: n,
                                                    layerName: s,
                                                    object: t
                                                }), i.length <= 2 && e(), o(i.filter((e => e !== t.id)))
                                            }));
                                            const r = document.querySelector(`.${rm.scrollTable}`),
                                                l = r.getElementsByTagName("thead")[0];
                                            r.style.width = l.clientWidth + "px", setTimeout((() => r.style.width = "unset"), 0)
                                        })(t, r, a, c)
                                    }
                                })))
                            }))))
                        }, u = () => {
                            const {
                                structure: e,
                                settings: a
                            } = n, r = ((e, t, n) => {
                                const a = {};
                                return e && t && n ? (e.filter((e => "title" === e.type || n.every((t => null !== (null == t ? void 0 : t.fields[e.code]))))).forEach((e => {
                                    t.mediaFilesEnabled && t.mediaFilesColumnCode === e.code || (e.parent_id in a || (a[e.parent_id] = []), a[e.parent_id].push(e))
                                })), a) : a
                            })(e, a, t), o = r[0] || [], d = e => null == e ? void 0 : e.map((e => {
                                var n;
                                return "title" === e.type ? (null === (n = r[e.id]) || void 0 === n ? void 0 : n.length) ? s.createElement(s.Fragment, {
                                    key: e.id
                                }, s.createElement("tr", {
                                    className: rm.row
                                }, s.createElement("td", {
                                    className: rm.heading
                                }, s.createElement(ua.Text, {
                                    variant: "bold"
                                }, e.name))), d(r[e.id])) : null : s.createElement("tr", {
                                    key: e.id,
                                    className: rm.row
                                }, s.createElement("td", {
                                    className: rm.cell
                                }, s.createElement(ua.Text, null, e.name)), t.filter((e => i.includes(e.id))).map((t => {
                                    let n = t.fields[`#${e.code}`] || t.fields[e.code];
                                    if ("file" === e.type) n = (e => 0 === (null == e ? void 0 : e.length) ? s.createElement(ua.Text, {
                                        disabled: !0
                                    }, l("Отсутствует")) : null == e ? void 0 : e.map((e => s.createElement(ua.Anchor, {
                                        href: e.path,
                                        key: e.id,
                                        target: "_blank"
                                    }, l("Скачать документ")))))(n);
                                    else if (/^http.*/.test(n)) n = s.createElement(ua.Anchor, {
                                        href: n,
                                        target: "_blank"
                                    }, n);
                                    else if (lm.test(n)) n = s.createElement(ua.Anchor, {
                                        href: `//${n}`,
                                        target: "_blank"
                                    }, n);
                                    else if (/^\S+@\S+\.\S+$/.test(n)) n = s.createElement(ua.Anchor, {
                                        href: `mailto:${n}`,
                                        target: "_blank"
                                    }, n);
                                    else if (c.xs && "string" == typeof n) {
                                        const e = n.match(om);
                                        (null == e ? void 0 : e.length) && (n = s.createElement(ua.Text, null, s.createElement(ua.Anchor, {
                                            href: `tel:${e[0]}`
                                        }, e[0]), n.replace(om, "")))
                                    } else n = s.createElement(ua.Text, null, n);
                                    return s.createElement("td", {
                                        key: t.id,
                                        className: rm.cell
                                    }, n)
                                })))
                            }));
                            return s.createElement("tbody", null, o.map((e => r[e.id] ? s.createElement(s.Fragment, {
                                key: e.id
                            }, s.createElement("tr", {
                                className: rm.row
                            }, s.createElement("td", {
                                className: rm.heading
                            }, s.createElement(ua.Title, null, e.name))), d(r[e.id])) : null)))
                        };
                        return d ? Ya.createPortal(s.createElement(Ti, {
                            className: rm.compareOverlay
                        }, s.createElement(_i.Container, {
                            className: rm.comparisonWindow
                        }, (() => {
                            switch (a) {
                                case A.PENDING:
                                    return s.createElement("div", {
                                        className: rm.objectWindowLoader
                                    }, s.createElement(Ii, null));
                                case A.SUCCESS:
                                    return s.createElement(_i.Body, {
                                        className: rm.scrollTable
                                    }, s.createElement("div", null, " ", s.createElement("div", {
                                        className: rm.wrapperHead
                                    }, s.createElement("table", null, m()))), s.createElement("div", {
                                        className: rm.wrapperBody
                                    }, s.createElement(Zi, {
                                        scrollableNodeProps: {
                                            onScroll: e => {
                                                var t;
                                                return null === (t = document.querySelector(`.${rm.wrapperHead}`)) || void 0 === t ? void 0 : t.scrollTo(e.target.scrollLeft, 0)
                                            }
                                        }
                                    }, s.createElement("table", null, u()))));
                                case A.FAIL:
                                default:
                                    return null
                            }
                        })(), s.createElement(Ci, {
                            title: l("Закрыть"),
                            onClick: e,
                            className: rm.closeButton
                        }))), d) : null
                    },
                    dm = {
                        compare: "compare",
                        "oms-panel_body": "oms-panel_body",
                        objectsItemColor: "objectsItemColor",
                        items: "items",
                        item: "item",
                        "layer-icon_small": "layer-icon_small",
                        itemName: "itemName",
                        clickable: "clickable",
                        itemIcon: "itemIcon",
                        extra: "extra",
                        "oms-collapse": "oms-collapse",
                        head: "head",
                        pane: "pane",
                        omsAlert: "omsAlert"
                    },
                    mm = () => {
                        const e = (0, r.v9)((e => I(e, "COMPARISON"))),
                            [t, n] = (0, s.useState)(!1);
                        (0, s.useEffect)((() => {
                            if (!Object.keys(e).length) {
                                const e = setTimeout((() => {
                                    clearTimeout(e), pn(cn.sections)
                                }), 200)
                            }
                        }), [e]);
                        const {
                            t: a
                        } = (0, Bn.$G)(), i = (e, {
                            comparisonObject: t,
                            layerCode: n,
                            object: a
                        }) => {
                            e.stopPropagation();
                            const {
                                mapCode: i,
                                name: s
                            } = t;
                            An.setComparison({
                                layerCode: n,
                                mapCode: i,
                                layerName: s,
                                object: a
                            })
                        }, o = ({
                            layerCode: e,
                            object: t,
                            comparisonObject: n
                        }) => {
                            let r = null;
                            return t.icon ? r = oa(t.icon) : t.color && (r = s.createElement("div", {
                                className: "layer-icon_small"
                            }, s.createElement("div", {
                                style: {
                                    backgroundColor: t.color
                                },
                                className: dm.objectsIconColor
                            }))), s.createElement("li", {
                                key: t.id,
                                className: dm.item
                            }, r, s.createElement(ua.Text, {
                                className: (0, Yn.Z)(dm.itemName, t.isClickable && "clickable"),
                                title: t.name,
                                onClick: () => {
                                    ((e, t) => {
                                        t.isClickable && (xn.setSelectedContainer({
                                            mapCode: e,
                                            containerId: t.containerId,
                                            selected: !0
                                        }), un({
                                            object: `${e}.${t.containerCode}.${t.objectId}`
                                        }))
                                    })(n.mapCode, t)
                                }
                            }, t.name), s.createElement(pi, {
                                icon: s.createElement(dc.TrashIcon, null),
                                size: "small",
                                variant: "active",
                                title: a("Удалить"),
                                onClick: a => {
                                    i(a, {
                                        object: t,
                                        layerCode: e,
                                        comparisonObject: n
                                    })
                                }
                            }))
                        }, l = (e, t) => s.createElement("div", null, (e => {
                            let t = "";
                            return e.length <= 1 ? t = a("Добавьте еще один объект") : e.length > 1 && e.length < 5 && (t = a("Можно добавить до 5 объектов")), t ? s.createElement(Ai, {
                                text: t,
                                variant: "info"
                            }) : null
                        })(t.objects), s.createElement("ul", {
                            className: dm.items
                        }, t.objects.map((n => o({
                            layerCode: e,
                            comparisonObject: t,
                            object: n
                        })))));
                        return s.createElement(s.Fragment, null, s.createElement(_i.Body, {
                            className: dm.compare
                        }, s.createElement(Zi, null, s.createElement(Oi, {
                            items: Object.entries(e).map((([e, t]) => ({
                                name: t.name,
                                extra: s.createElement(za, {
                                    className: dm.extra,
                                    orientation: "horizontal"
                                }, s.createElement(pi, {
                                    disabled: t.objects.length <= 1,
                                    icon: s.createElement(dc.BarChartLine, null),
                                    size: "small",
                                    variant: "secondary",
                                    title: a("Сравнить"),
                                    onClick: t => {
                                        ((e, t) => {
                                            e.stopPropagation(), An.comparisonWindow(t), n(!0)
                                        })(t, e)
                                    }
                                }), s.createElement(Ci, {
                                    title: a("Удалить"),
                                    onClick: n => {
                                        i(n, {
                                            layerCode: e,
                                            comparisonObject: t
                                        })
                                    }
                                })),
                                element: l(e, t)
                            })))
                        }))), t && s.createElement(cm, {
                            onClose: () => {
                                n(!1)
                            }
                        }))
                    },
                    um = e => {
                        const {
                            mapCode: t,
                            object: n,
                            container: a,
                            layerSettings: i,
                            apiUrl: r
                        } = e, o = (0, s.useMemo)((() => {
                            var e, i, o;
                            let l, c;
                            if ((null === (e = a.visualSettings) || void 0 === e ? void 0 : e.columnCode) && (null === (i = a.visualSettings) || void 0 === i ? void 0 : i.classesSettings.classes)) {
                                const e = Et(a.visualSettings.columnCode, On),
                                    t = n.fields[e],
                                    i = null === (o = a.visualSettings) || void 0 === o ? void 0 : o.classesSettings.classes.find((e => e.value === t));
                                1 === a.render_type && (null == i ? void 0 : i.useIcon) && i.icon ? c = (null == i ? void 0 : i.icon) || "" : (null == i ? void 0 : i.color) && (l = (null == i ? void 0 : i.color) || "")
                            }
                            return l ? s.createElement("div", {
                                className: "layer-icon_small"
                            }, s.createElement("div", {
                                style: {
                                    backgroundColor: l
                                },
                                className: Gd
                            })) : c ? oa(c) : la(a, r, t, "small")
                        }), []);
                        return s.createElement("div", {
                            className: Hd,
                            onClick: () => {
                                (i.objectWindowEnabled || i.balloonEnabled) && (xn.setSelectedContainer({
                                    mapCode: t,
                                    containerId: a.id,
                                    selected: !0
                                }), un({
                                    object: `${t}.${a.code}.${n.id}`
                                }))
                            }
                        }, s.createElement("div", {
                            className: Dd
                        }, o), s.createElement("div", {
                            className: Vd
                        }, s.createElement("div", {
                            className: Ud
                        }, s.createElement("div", {
                            className: Wd
                        }, s.createElement(ua.Text, {
                            variant: "bold",
                            title: t
                        }, qt(n, i)), s.createElement(ua.Text, null, a.name || a.code)), s.createElement("div", {
                            className: zd
                        }, s.createElement(pi, {
                            icon: s.createElement(dc.StarFill, null),
                            size: "small",
                            variant: "active",
                            title: (0, l.t)("Удалить из избранного"),
                            onClick: e => {
                                e.stopPropagation(), An.deleteFavourite({
                                    mapCode: t,
                                    layerCode: a.code,
                                    objectId: n.id
                                })
                            }
                        })))))
                    },
                    pm = () => {
                        const {
                            sort: e
                        } = (0, r.v9)((e => _(e, "FAVOURITE"))).data, {
                            t
                        } = (0, Bn.$G)();
                        return s.createElement(_i.Header, {
                            className: Ad
                        }, s.createElement("div", {
                            className: _d
                        }, s.createElement("div", {
                            className: Zd
                        }, s.createElement(pi, {
                            variant: e.name ? "ghost" : "active",
                            size: "medium",
                            icon: e.name ? s.createElement(dc.StackLine, null) : s.createElement(dc.StackFill, null),
                            title: t("По названию слоя"),
                            onClick: () => An.sortFavourite(Object.assign(Object.assign({}, e), {
                                name: !e.name
                            }))
                        }), s.createElement(pi, {
                            variant: "ghost",
                            size: "medium",
                            icon: s.createElement(dc.SortDesk, null),
                            className: (0, Yn.Z)(Rd, {
                                [Pd]: e.asc
                            }),
                            title: t(e.asc ? "По возрастанию" : "По убыванию"),
                            onClick: () => An.sortFavourite(Object.assign(Object.assign({}, e), {
                                asc: !e.asc
                            }))
                        })), s.createElement(pi, {
                            variant: "secondary",
                            size: "medium",
                            onClick: () => An.deleteAllFavourite()
                        }, t("Удалить все"))))
                    },
                    hm = () => {
                        var e, t, n;
                        const {
                            data: a,
                            status: i
                        } = (0, r.v9)((e => _(e, "FAVOURITE"))), {
                            operations: o
                        } = (0, r.v9)((e => e)), c = {}, d = {}, m = {};
                        for (const i of new Set(a.items.map((e => e.map))).values()) d[i] = (null === (e = o[`MAP_${i}`]) || void 0 === e ? void 0 : e.data) || [], c[i] = (null === (t = o[`PUB_LAYERS_${i}`]) || void 0 === t ? void 0 : t.data) || [], m[i] = (null === (n = o[`OBJECTS_${i}`]) || void 0 === n ? void 0 : n.data) || {};
                        const u = (0, s.useMemo)((() => Y.getApiUrl()), []);
                        (0, s.useEffect)((() => {
                            An.loadFavouriteContainers()
                        }), []), (0, s.useEffect)((() => {
                            a.items.length || pn(cn.sections)
                        }), [a.items.length]);
                        return s.createElement(s.Fragment, null, !!a.items.length && i !== A.PENDING && s.createElement(pm, null), s.createElement(_i.Body, {
                            className: qd
                        }, i === A.PENDING ? s.createElement("div", {
                            className: Qd
                        }, s.createElement(Ii, null)) : a.items.length ? s.createElement(Zi, null, s.createElement("div", {
                            className: em
                        }, (() => {
                            var e, t;
                            const n = [],
                                i = [];
                            for (const s of a.items)
                                if (c[s.map]) {
                                    const a = c[s.map].find((e => e.code === s.layer));
                                    if (a) {
                                        const r = null === (e = m[s.map][a.id]) || void 0 === e ? void 0 : e.find((e => e.id === s.id));
                                        if (r) {
                                            const e = d[s.map].find((e => e.containerId === a.id)),
                                                i = (null === (t = qt(r, e)) || void 0 === t ? void 0 : t.toString()) || "";
                                            n.push({
                                                name: i,
                                                layerName: a.name || a.id.toString(),
                                                item: s,
                                                obj: r,
                                                container: a,
                                                lSettings: e,
                                                apiUrl: u
                                            })
                                        } else i.push(s)
                                    }
                                } return i.length && An.cleanFavourite(i), n.sort(((e, t) => {
                                let n = 0;
                                const {
                                    asc: i,
                                    name: s
                                } = a.sort;
                                return s ? n = i ? e.name.localeCompare(t.name) : t.name.localeCompare(e.name) : (n = i ? e.layerName.localeCompare(t.layerName) : t.layerName.localeCompare(e.layerName), 0 === n && (n = i ? e.name.localeCompare(t.name) : t.name.localeCompare(e.name))), n
                            })).map((e => s.createElement(um, {
                                key: `${e.item.map}-${e.item.layer}-${e.item.id}`,
                                object: e.obj,
                                mapCode: e.item.map,
                                container: e.container,
                                layerSettings: e.lSettings,
                                apiUrl: u
                            })))
                        })())) : s.createElement(ua.Text, {
                            className: tm
                        }, (0, l.t)("Список пуст"))))
                    },
                    gm = e => {
                        const {
                            mapCode: t,
                            region: n,
                            object: a,
                            container: i,
                            layerSettings: r,
                            apiUrl: o,
                            icon: c
                        } = e, d = qt(a, r);
                        return s.createElement("div", {
                            className: (0, Yn.Z)(Hd, Bd),
                            onClick: () => {
                                un({
                                    object: `${t}.${i.code}.${a.id}`
                                })
                            }
                        }, s.createElement("div", {
                            className: Dd
                        }, c), s.createElement("div", {
                            className: Vd
                        }, s.createElement("div", {
                            className: Ud
                        }, s.createElement("div", {
                            className: Wd
                        }, s.createElement(ua.Text, {
                            variant: "bold",
                            title: d
                        }, d), s.createElement(ua.Text, {
                            title: n
                        }, n)), s.createElement("div", {
                            className: zd
                        }, s.createElement(pi, {
                            icon: s.createElement(dc.DownloadFile, null),
                            size: "small",
                            variant: "active",
                            title: (0, l.t)("Скачать PDF"),
                            onClick: e => {
                                e.stopPropagation(), (() => {
                                    const e = `${o+t}/layers/${i.code}/objects/${a.id}/`,
                                        n = `f=pdf&custom=1&lng=${l.ZP.language}`;
                                    window.open(`${e}?${n}`)
                                })()
                            }
                        })))))
                    },
                    vm = () => {
                        const e = (0, r.v9)((e => k(e, "REGISTRY"))),
                            {
                                mapCode: t
                            } = (0, r.v9)((e => e.app.config)),
                            n = (0, r.v9)((e => I(e, `FULL_LAYERS_${t}`))),
                            a = (0, r.v9)((e => I(e, `OBJECTS_${t}`))),
                            i = (0, r.v9)((e => I(e, `MAP_${t}`))),
                            [o, c] = (0, s.useState)(["registry_ind_parks"]),
                            d = Cn.reduce(((e, t) => {
                                var a;
                                return Object.assign(Object.assign({}, e), {
                                    [t]: null === (a = n.find((e => e.code === t))) || void 0 === a ? void 0 : a.name
                                })
                            }), {}),
                            m = n.find((e => "registries" === e.code)),
                            u = Cn.map((e => ({
                                value: e,
                                label: d[e]
                            }))),
                            p = (0, s.useMemo)((() => Y.getApiUrl()), []),
                            h = (0, s.useMemo)((() => la(m, p, t, "small")), []);
                        (0, s.useEffect)((() => {
                            An.loadRegistry()
                        }), []);
                        const g = e !== A.PENDING;
                        return s.createElement(s.Fragment, null, g && s.createElement(_i.Header, {
                            className: Ad
                        }, s.createElement(Wa.Select, {
                            value: o,
                            options: u,
                            onChange: e => c(e)
                        })), s.createElement(_i.Body, {
                            className: qd
                        }, g ? s.createElement(Zi, null, s.createElement("div", {
                            className: em
                        }, (() => {
                            var e;
                            const r = [],
                                l = n.find((e => e.code === o[0]));
                            if (l && a[l.id]) {
                                const t = l.json.region;
                                for (const n of a[l.id]) {
                                    const a = i.find((e => e.containerId === l.id)),
                                        s = qt(n, a).toString();
                                    r.push({
                                        name: s,
                                        region: null === (e = n.fields[t]) || void 0 === e ? void 0 : e.toString(),
                                        obj: n,
                                        container: l,
                                        lSettings: a,
                                        apiUrl: p
                                    })
                                }
                            }
                            return r.map((e => s.createElement(gm, {
                                key: e.obj.id,
                                region: e.region,
                                icon: h,
                                object: e.obj,
                                mapCode: t,
                                container: e.container,
                                layerSettings: e.lSettings,
                                apiUrl: p
                            })))
                        })())) : s.createElement("div", {
                            className: Qd
                        }, s.createElement(Ii, null))), g && s.createElement(_i.Footer, {
                            className: am
                        }, s.createElement(pi, {
                            variant: "secondary",
                            onClick: () => {
                                var e;
                                return window.open(null === (e = n.find((e => e.code === o.toString()))) || void 0 === e ? void 0 : e.json.download, "_blank")
                            }
                        }, (0, l.t)("Скачать весь реестр")), s.createElement(pi, {
                            variant: "accent",
                            onClick: () => window.open("https://gisp.gov.ru/bpm/service/pp794", "_blank")
                        }, (0, l.t)("Оставить заявку"))))
                    },
                    fm = "searchListBody",
                    ym = "searchListLoader",
                    bm = "searchItem",
                    Em = "searchItemTitle",
                    wm = "searchListFooter",
                    Sm = "alertWrapper",
                    jm = () => {
                        const e = (0, r.v9)((e => _(e, "SEARCH"))),
                            {
                                t
                            } = (0, Bn.$G)(),
                            n = xi().xs && !e.data.length;
                        (0, s.useEffect)((() => (wn.setSwipeableState(tn.min), () => {
                            U.clear("SEARCH")
                        })), []);
                        return s.createElement(s.Fragment, null, s.createElement(_i.Body, {
                            className: fm
                        }, e.status === A.PENDING ? s.createElement("div", {
                            className: ym
                        }, s.createElement(Ii, null)) : s.createElement(Zi, null, e.data.map((e => s.createElement("div", {
                            key: e.id,
                            className: bm,
                            onClick: () => {
                                return t = e.mapCode, n = e.layerCode, a = e.id, void un({
                                    object: `${t}.${n}.${a}`
                                });
                                var t, n, a
                            }
                        }, e.icon ? oa(e.icon) : s.createElement(dc.LandscapeFill, null), s.createElement("div", {
                            className: Em
                        }, s.createElement(ua.Text, {
                            variant: "bold",
                            title: e.name
                        }, e.name), s.createElement(ua.Text, {
                            title: e.layerName
                        }, e.layerName)))))), n && ![A.PENDING, A.UNKNOWN].includes(e.status) && s.createElement("div", {
                            className: Sm
                        }, s.createElement(Ai, {
                            text: t("Нет результатов")
                        }))), !n && s.createElement(_i.Footer, {
                            className: wm
                        }, s.createElement(ua.Text, null, t("Найдено")), s.createElement(ua.Text, {
                            variant: "bold"
                        }, e.data.length)))
                    },
                    Om = "sidebar",
                    Cm = e => {
                        var t;
                        const {
                            handlers: n,
                            onClick: a
                        } = e;
                        return s.createElement(_i.Container, {
                            className: Om
                        }, s.createElement(Od, {
                            handlers: n,
                            onClick: a
                        }), s.createElement(Gn.Z5, null, s.createElement(Gn.AW, Object.assign({}, cn.sections, {
                            element: s.createElement(sm, {
                                handlers: n
                            })
                        })), s.createElement(Gn.AW, Object.assign({}, cn.compare, {
                            element: s.createElement(mm, null)
                        })), s.createElement(Gn.AW, Object.assign({}, cn.favourite, {
                            element: s.createElement(hm, null)
                        })), s.createElement(Gn.AW, Object.assign({}, cn.registry, {
                            element: s.createElement(vm, null)
                        })), s.createElement(Gn.AW, Object.assign({}, cn.search, {
                            element: s.createElement(jm, null)
                        })), s.createElement(Gn.AW, {
                            path: "*",
                            element: s.createElement(Gn.Fg, {
                                to: `/sections?${(null===(t=cn.searchParams)||void 0===t?void 0:t.toString())||`lng=${l.ZP.language}`}`
                            })
                        })))
                    },
                    Nm = "filtersContainer",
                    Lm = "filtersHeader",
                    Mm = "filtersBody",
                    Am = "filtersList",
                    _m = "filtersFooter",
                    xm = () => {
                        const [e, t] = (0, s.useMemo)((() => {
                            const [e] = dn();
                            if (e && e.params.container) {
                                const [t, n] = e.params.container.split(":");
                                if (t && n) return [t, Number(n)]
                            }
                            return ["", 0]
                        }), []), n = xi(), a = (0, r.v9)((n => fc(n, {
                            mapCode: e,
                            containerId: t
                        }))), i = () => wn.setMainWindow(null);
                        if ((0, s.useEffect)((() => {
                                e && t || i()
                            }), [e, t]), !e || !t) return null;
                        const o = (0, r.v9)((t => I(t, `FILTERS_${e}`))),
                            l = (0, r.v9)((t => I(t, `PUB_LAYERS_${e}`))),
                            {
                                t: c
                            } = (0, Bn.$G)(),
                            d = (0, s.useMemo)((() => o[t]), [o, t]),
                            m = (0, s.useMemo)((() => l.find((e => e.id === t))), [l, t]),
                            u = (n, a) => {
                                An.setFilterValue({
                                    mapCode: e,
                                    containerId: t,
                                    filterId: n,
                                    value: a
                                })
                            };
                        return s.createElement(_i.Container, {
                            className: Nm,
                            size: "s"
                        }, s.createElement(_i.Header, {
                            className: Lm
                        }, s.createElement(ua.Title, {
                            variant: "H3",
                            title: `${c("Фильтрация слоя")} "${null==m?void 0:m.name}"`
                        }, `${c("Фильтрация слоя")} "${null==m?void 0:m.name}"`), s.createElement(Ci, {
                            onClick: i,
                            size: "medium"
                        })), s.createElement(_i.Body, {
                            className: Mm
                        }, s.createElement(Zi, null, s.createElement("div", {
                            className: Am
                        }, d.map((e => {
                            const t = Ji[e.type];
                            return t ? s.createElement(t, {
                                key: e.id,
                                filter: e,
                                onChange: u
                            }) : null
                        }))))), s.createElement(_i.Footer, {
                            className: _m
                        }, n.xs && s.createElement(pi, {
                            variant: "accent",
                            disabled: 0 === a,
                            onClick: i
                        }, c("Показать")), s.createElement(pi, {
                            variant: "secondary",
                            disabled: 0 === a,
                            onClick: () => {
                                An.resetFilters({
                                    mapCode: e,
                                    containerId: t
                                })
                            }
                        }, c("Сбросить"))))
                    },
                    Im = "siteSelection",
                    Tm = "siteSelectionHeader",
                    km = "siteSelectionBody",
                    Zm = "siteSelectionBodyWrapper",
                    Rm = "siteSelectionNavigate",
                    Pm = "siteSelectionNavigateNameWrapper",
                    Fm = "siteSelectionNavigateName",
                    Hm = "filtersListWrapper",
                    $m = "filtersList",
                    Vm = "siteSelectionFooter",
                    Um = () => {
                        const [e, t] = (0, s.useMemo)((() => {
                            const [e] = dn();
                            if (e && e.params.container) {
                                const [t, n] = e.params.container.split(":");
                                if (t && n) return [t, Number(n)]
                            }
                            return ["", 0]
                        }), []), n = xi();
                        if ((0, s.useEffect)((() => {
                                e && t || u()
                            }), [e, t]), !e || !t) return null;
                        const a = (0, r.v9)((t => I(t, `SITE_SELECTION_${e}`))),
                            i = (0, r.v9)((n => vc(n, {
                                mapCode: e,
                                containerId: t
                            }))),
                            o = (0, r.v9)((t => I(t, `PUB_LAYERS_${e}`))),
                            l = (0, r.v9)((n => yc(n, {
                                mapCode: e,
                                containerId: t
                            }))),
                            [c, d] = (0, s.useState)(0),
                            {
                                t: m
                            } = (0, Bn.$G)(),
                            u = () => wn.setMainWindow(null),
                            p = (0, s.useMemo)((() => o.find((e => e.id === t))), [o, t]),
                            h = (0, s.useMemo)((() => (a || [])[p.id]), [null == p ? void 0 : p.id, c, a]),
                            g = (0, s.useMemo)((() => h[c]), [h, c]),
                            v = (n, a) => {
                                An.setSiteSelectionFilterValue({
                                    mapCode: e,
                                    containerId: t,
                                    filterId: n,
                                    value: a
                                })
                            };
                        return s.createElement(_i.Container, {
                            className: Im
                        }, s.createElement(_i.Header, {
                            className: Tm
                        }, s.createElement(ua.Title, {
                            variant: "H3"
                        }, `${m("Подбор площадки")}${(null==i?void 0:i.length)?` | ${null==i?void 0:i.length}`:""}`), s.createElement(Ci, {
                            onClick: u,
                            size: "medium"
                        })), s.createElement(_i.Body, {
                            className: km
                        }, s.createElement("div", {
                            className: Zm
                        }, s.createElement("div", {
                            className: Rm
                        }, s.createElement(pi, {
                            variant: "secondary",
                            icon: s.createElement(dc.ArrowLeftSLine, null),
                            size: "small",
                            onClick: () => d(0 === c ? 0 : c - 1),
                            disabled: 0 === c
                        }), s.createElement("div", {
                            className: Pm
                        }, s.createElement(ua.Title, {
                            variant: "H4",
                            className: Fm,
                            title: m(g.name)
                        }, m(g.name)), s.createElement(ua.Title, {
                            variant: "H4"
                        }, `${c+1} / ${h.length}`)), s.createElement(pi, {
                            variant: "secondary",
                            icon: s.createElement(dc.ArrowRightSLine, null),
                            size: "small",
                            onClick: () => d(c === (null == h ? void 0 : h.length) - 1 ? h.length - 1 : c + 1),
                            disabled: c === h.length - 1
                        })), s.createElement("div", {
                            className: Hm
                        }, s.createElement(Zi, null, g.alert && s.createElement(Ai, {
                            variant: g.alert.type,
                            text: g.alert.text ? m(g.alert.text) : ""
                        }), s.createElement("div", {
                            className: $m
                        }, g.filters.map((e => {
                            const t = Ji[e.type];
                            return t ? s.createElement(t, {
                                key: e.id,
                                filter: e,
                                onChange: v
                            }) : null
                        }))))))), s.createElement(_i.Footer, {
                            className: Vm
                        }, n.xs && s.createElement(pi, {
                            variant: "accent",
                            disabled: 0 === l,
                            onClick: u
                        }, m("Показать")), s.createElement(pi, {
                            variant: "secondary",
                            onClick: () => {
                                An.resetSiteFilters({
                                    mapCode: e,
                                    containerId: t
                                })
                            },
                            disabled: 0 === l
                        }, m("Сбросить"))))
                    },
                    Bm = {
                        absoluteCenterBlock: "absoluteCenterBlock",
                        verticalCentering: "verticalCentering",
                        horizontalCentering: "horizontalCentering",
                        focus: "focus",
                        error: "error",
                        "oms-panel_container": "oms-panel_container",
                        objectWindow: "objectWindow",
                        objectWindowLoading: "objectWindowLoading",
                        objectWindowLoader: "objectWindowLoader",
                        objectWindowMain: "objectWindowMain",
                        objectWindowHeader: "objectWindowHeader",
                        objectHeaderSide: "objectHeaderSide",
                        objectsIconColor: "objectsIconColor",
                        "layer-icon_large": "layer-icon_large",
                        "layer-icon_medium": "layer-icon_medium",
                        "layer-icon_small": "layer-icon_small",
                        "oms-icon_large": "oms-icon_large",
                        "oms-icon_medium": "oms-icon_medium",
                        "oms-icon_small": "oms-icon_small",
                        objectName: "objectName",
                        objectWindowBody: "objectWindowBody",
                        about: "about",
                        objectColumn: "objectColumn",
                        materials: "materials",
                        objectWindowEmpty: "objectWindowEmpty",
                        "oms-collapse": "oms-collapse",
                        pane: "pane",
                        oneRow: "oneRow",
                        "oms-typography_text-bold": "oms-typography_text-bold",
                        "oms-typography_text-normal": "oms-typography_text-normal",
                        objectColumnTitle: "objectColumnTitle",
                        "oms-typography_anchor": "oms-typography_anchor",
                        columnName: "columnName",
                        columnValue: "columnValue",
                        subheader: "subheader",
                        subcolumn: "subcolumn",
                        sourceObject: "sourceObject",
                        objectWindowFooter: "objectWindowFooter",
                        "oms-button-group_horizontal": "oms-button-group_horizontal",
                        objectWindowSidebar: "objectWindowSidebar",
                        objectWindowSidebarHeader: "objectWindowSidebarHeader",
                        objectWindowSidebarHeadersList: "objectWindowSidebarHeadersList",
                        "simplebar-horizontal": "simplebar-horizontal",
                        objectWindowSidebarItem: "objectWindowSidebarItem",
                        l0: "l0",
                        active: "active",
                        "oms-typography_text-medium": "oms-typography_text-medium",
                        objectWindowMini: "objectWindowMini"
                    },
                    Gm = /((\+7|8)\s?\(?\d{3,5}\)?\s?\d{1,3}(-|\s)?(\d{2}(-|\s)?\d{2}|\d{3}))/g,
                    Dm = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/,
                    Wm = e => {
                        const {
                            refBottom: t
                        } = e, [n] = (0, o.lr)(), a = (0, s.useMemo)((() => {
                            const e = n.get("object");
                            if (!e) return null;
                            const [t, a, i] = e.split(".");
                            return {
                                mapCode: t,
                                layerCode: a,
                                objectId: Number(i)
                            }
                        }), [n]);
                        if (!a) return null;
                        const {
                            mapCode: c,
                            layerCode: d,
                            objectId: m
                        } = a, u = (0, r.v9)((e => I(e, `FULL_LAYERS_${c}`))), p = (0, r.v9)((e => I(e, `MAP_${c}`))), h = (0, r.v9)((e => e.map.geography)), {
                            data: g,
                            meta: v,
                            status: f
                        } = (0, r.v9)((e => x(e, "OBJECT_WINDOW"))), y = (0, r.v9)((e => I(e, "GEOGRAPHY"))), b = (0, r.v9)((e => e.operations.FAVOURITE.data)), {
                            mainWindow: E
                        } = (0, r.v9)((e => e.ui)), w = Cn.includes(d), S = !!b.items.find((e => e.map === c && e.layer === d && e.id === m)), j = (0, s.useRef)({
                            counter: 0
                        }).current, O = (0, r.v9)((e => I(e, "COMPARISON"))), C = (0, s.useMemo)((() => {
                            var e, t;
                            return g && g.fields.source && g.fields.source_id ? !!(null === (e = O[g.fields.source]) || void 0 === e ? void 0 : e.objects.map((({
                                id: e
                            }) => e)).includes(g.fields.source_id)) : !!(null === (t = O[d]) || void 0 === t ? void 0 : t.objects.map((({
                                id: e
                            }) => e)).includes(m))
                        }), [g, O, d, m]), [N, L] = (0, s.useState)(!1), [M, _] = (0, s.useState)(""), [T, k] = (0, s.useState)(!1), {
                            t: Z
                        } = (0, Bn.$G)(), R = xi(), P = (0, s.useRef)(null), F = (0, s.useMemo)((() => null == u ? void 0 : u.find((e => e.code === d))), [null == u ? void 0 : u.length, d]), H = (0, r.v9)((e => gc(e, {
                            mapCode: c,
                            containerId: null == F ? void 0 : F.id
                        }))), $ = (0, r.v9)((e => {
                            var t;
                            return I(e, `PUB_LAYERS_${(null===(t=null==F?void 0:F.json.geography)||void 0===t?void 0:t.map)||c}`)
                        })), V = (0, s.useMemo)((() => null == p ? void 0 : p.find((e => e.containerId === (null == F ? void 0 : F.id)))), [null == p ? void 0 : p.length, null == F ? void 0 : F.id]), B = (0, s.useMemo)((() => {
                            const e = {};
                            if (!v || !V || !g) return e;
                            v.filter((e => "title" === e.type || null !== (null == g ? void 0 : g.fields[e.code]))).forEach((t => {
                                V.mediaFilesEnabled && V.mediaFilesColumnCode === t.code || (t.parent_id in e || (e[t.parent_id] = []), e[t.parent_id].push(t))
                            }));
                            const t = e[0].find((e => "title" === e.type));
                            return t && _(t.code), e
                        }), [v, V, null == g ? void 0 : g.id]), G = (0, s.useMemo)((() => "default" !== cn.location.key), [m]);
                        (0, s.useEffect)((() => {
                            k(!1), $n.loadObjectData({
                                mapCode: c,
                                layerCode: d,
                                id: m
                            })
                        }), [c, d, m]), (0, s.useEffect)((() => {
                            E && j.counter && k(!0), j.counter++
                        }), [E]), (0, s.useEffect)((() => {
                            T || wn.setMainWindow(null)
                        }), [T]), (0, s.useEffect)((() => (wn.setMainWindow(null), () => {
                            U.clear("OBJECT_WINDOW"), U.clear("GEOGRAPHY"), Ht.setHighlight(null), Ht.setGeography(!1)
                        })), []);
                        const D = () => {
                                un({
                                    object: ""
                                })
                            },
                            W = e => {
                                const t = e.target.getElementsByClassName("subheader"),
                                    n = e.target.scrollTop,
                                    a = e.target.scrollTop + e.target.clientHeight;
                                for (const e of t)
                                    if (e.offsetTop >= n && e.offsetTop <= a) {
                                        _(e.id);
                                        break
                                    }
                            },
                            z = () => {
                                $n.fitToObject({
                                    mapCode: c,
                                    layerCode: d,
                                    objectId: m,
                                    withPadding: !R.xs,
                                    useHighlight: !0
                                }), R.xs && k(!0)
                            },
                            K = () => {
                                var e;
                                const t = "https:" !== window.location.protocol ? "http:" : "https:",
                                    {
                                        port: n,
                                        hostname: a,
                                        pathname: i
                                    } = window.location,
                                    s = n ? `:${n}` : "",
                                    [r] = dn();
                                if (!r) return;
                                const o = `${t}//${a}${s}${i}#/?${null===(e=cn.searchParams)||void 0===e?void 0:e.toString()}`;
                                wn.setLinkModal({
                                    name: Z("Ссылка на объект"),
                                    link: o
                                })
                            },
                            J = () => {
                                var e;
                                let t = "";
                                const n = g.fields.source || d,
                                    a = g.fields.source_id || g.id;
                                t = (null === (e = null == F ? void 0 : F.json) || void 0 === e ? void 0 : e.admin) ? `//gisp.gov.ru/gisip/admin/api2/${n}/${a}/?lng=${l.ZP.language}&type=pdf` : `${Q+c}/layers/${n}/objects/${a}/?f=pdf&custom=1&lng=${l.ZP.language}`, window.open(t)
                            },
                            X = () => {
                                S ? An.deleteFavourite({
                                    mapCode: c,
                                    layerCode: d,
                                    objectId: m
                                }) : An.addFavourite({
                                    mapCode: c,
                                    layerCode: d,
                                    objectId: m
                                })
                            },
                            q = () => {
                                Ht.setGeography(!h);
                                const {
                                    map: e,
                                    layer: t
                                } = F.json.geography;
                                if (!h) {
                                    const n = $.find((e => e.code === t));
                                    n && xn.setSelectedContainer({
                                        mapCode: e,
                                        containerId: n.id,
                                        selected: !0
                                    })
                                }
                                R.xs && (k(!0), wn.setSwipeableState(tn.min))
                            },
                            Q = (0, s.useMemo)((() => Y.getApiUrl()), []),
                            [ee, te, ne] = (0, s.useMemo)((() => {
                                var e, t, n, a;
                                if ((null === (e = null == F ? void 0 : F.visualSettings) || void 0 === e ? void 0 : e.columnCode) && (null === (t = null == F ? void 0 : F.visualSettings) || void 0 === t ? void 0 : t.classesSettings.classes)) {
                                    const e = Et(F.visualSettings.columnCode, On),
                                        t = null === (n = H.find((e => e.id === m))) || void 0 === n ? void 0 : n.fields[e],
                                        i = null === (a = F.visualSettings) || void 0 === a ? void 0 : a.classesSettings.classes.find((e => e.value === t));
                                    if (1 === F.render_type && (null == i ? void 0 : i.useIcon) && i.icon) return [oa(null == i ? void 0 : i.icon), null == i ? void 0 : i.icon, ""];
                                    if (null == i ? void 0 : i.color) {
                                        return [s.createElement("div", {
                                            className: "layer-icon_small"
                                        }, s.createElement("div", {
                                            style: {
                                                backgroundColor: i.color
                                            },
                                            className: Bm.objectsIconColor
                                        })), "", i.color]
                                    }
                                }
                                const i = ra(F, Q, c);
                                return F ? [oa(i), i, ""] : [null, "", ""]
                            }), [null == F ? void 0 : F.id, null == g ? void 0 : g.id, f]),
                            ae = (0, s.useMemo)((() => {
                                let e = String(m);
                                return f === A.PENDING ? `${Z("Загрузка")}...` : (g ? e = g.fields[null == V ? void 0 : V.objectNameColumnCode] || g.fields.name || g.fields.orbis_id : F && !e && (e = F.name), e)
                            }), [g, F, f]),
                            ie = (0, s.useMemo)((() => {
                                if (f === A.PENDING || !g) return [];
                                const e = [],
                                    t = (e, t, n) => ({
                                        name: Z("Информация"),
                                        code: t,
                                        id: n,
                                        className: "subheader",
                                        columns: e
                                    });
                                let n = [];
                                return (B[0] || []).forEach(((a, i) => {
                                    "title" === a.type ? Qt(a, v, g) && (n.length > 0 && (e.push(t(n, a.code, a.id)), n = []), e.push({
                                        name: a.name,
                                        id: a.id,
                                        code: a.code,
                                        className: "subheader",
                                        columns: B[a.id]
                                    })) : n.push(a), i === B[0].length - 1 && n.length > 0 && e.push(t(n, a.code, a.id))
                                })), e
                            }), [B, f]),
                            se = (0, s.useMemo)((() => {
                                const e = [];
                                let t = "0";
                                const n = (a, i) => {
                                    var s;
                                    null === (s = B[a]) || void 0 === s || s.forEach((a => {
                                        var s;
                                        if ("title" === a.type && (null === (s = B[a.id]) || void 0 === s ? void 0 : s.length) && Qt(a, v, g)) {
                                            let s = t.split(".").map((e => Number(e)));
                                            s[i] = "number" == typeof s[i] ? s[i] + 1 : 1, s = s.slice(0, i + 1), t = s.join("."), e.push({
                                                code: a.code,
                                                name: a.name,
                                                level: i,
                                                numb: t
                                            }), n(a.id, i + 1)
                                        }
                                    }))
                                };
                                return ie.forEach(((a, i) => {
                                    t = String(i + 1), e.push({
                                        code: a.code,
                                        name: a.name,
                                        level: 0,
                                        numb: t
                                    }), n(a.id, 1)
                                })), e.length < 2 && L(!1), e
                            }), [ie]),
                            re = () => {
                                var e;
                                let t = m,
                                    n = F;
                                g.fields.source && g.fields.source_id && (t = g.fields.source_id, n = u.find((e => e.code === g.fields.source))), n && An.setComparison({
                                    layerCode: n.code,
                                    mapCode: c,
                                    layerName: n.name,
                                    object: {
                                        name: ae,
                                        containerId: F.id,
                                        containerCode: F.code,
                                        admin: !!(null === (e = null == n ? void 0 : n.json) || void 0 === e ? void 0 : e.admin),
                                        objectId: m,
                                        isClickable: !(!V.objectWindowEnabled && !V.balloonEnabled),
                                        icon: te,
                                        color: ne,
                                        id: t
                                    }
                                })
                            },
                            oe = () => {
                                window.open("https://gisp.gov.ru/goods/#/?company_ogrn=" + g.fields.ogrn, "_blank")
                            },
                            le = () => s.createElement("div", {
                                className: Bm.objectWindowLoader
                            }, s.createElement(Ii, null)),
                            ce = e => null == e ? void 0 : e.map((e => {
                                var t;
                                let n = g.fields[`#${e.code}`] || g.fields[e.code];
                                if ("file" === e.type) n = (e => 0 === e.length ? s.createElement(ua.Text, {
                                    disabled: !0
                                }, Z("Отсутствует")) : e.map((e => s.createElement(ua.Anchor, {
                                    href: e.path,
                                    key: e.id,
                                    target: "_blank"
                                }, Z("Скачать документ")))))(n);
                                else if (/^http.*/.test(n)) n = s.createElement(ua.Anchor, {
                                    href: n,
                                    target: "_blank",
                                    className: Bm.columnValue
                                }, n);
                                else if (Dm.test(n)) n = s.createElement(ua.Anchor, {
                                    href: `//${n}`,
                                    target: "_blank",
                                    className: Bm.columnValue
                                }, n);
                                else if (/^\S+@\S+\.\S+$/.test(n)) n = s.createElement(ua.Anchor, {
                                    href: `mailto:${n}`,
                                    target: "_blank",
                                    className: Bm.columnValue
                                }, n);
                                else {
                                    const e = R.xs && "string" == typeof n ? n.match(Gm) : null;
                                    n = (null == e ? void 0 : e.length) ? s.createElement(ua.Text, {
                                        variant: "bold",
                                        className: Bm.columnValue
                                    }, s.createElement(ua.Anchor, {
                                        href: `tel:${e[0]}`
                                    }, e[0]), n.replace(Gm, "")) : s.createElement(ua.Text, {
                                        variant: "medium",
                                        className: Bm.columnValue
                                    }, n)
                                }
                                return "title" === e.type ? (null === (t = B[e.id]) || void 0 === t ? void 0 : t.length) ? s.createElement("div", {
                                    key: e.code,
                                    className: (0, Yn.Z)(Bm.objectColumn, Bm.objectColumnTitle)
                                }, s.createElement(ua.Text, {
                                    id: e.code,
                                    className: "subheader"
                                }, e.name), s.createElement("div", {
                                    className: Bm.subcolumn
                                }, ce(B[e.id]))) : null : s.createElement("div", {
                                    key: e.code,
                                    className: (0, Yn.Z)(Bm.objectColumn, {
                                        [Bm.oneRow]: false
                                    })
                                }, s.createElement(ua.Text, {
                                    className: Bm.columnName
                                }, e.name), n)
                            }));
                        return T && t.current ? (0, Ya.createPortal)(s.createElement(_i.Container, {
                            className: Bm.objectWindowMini,
                            orientation: "horizontal"
                        }, !R.xs && (f === A.PENDING ? le() : ee), s.createElement(ua.Title, {
                            className: Bm.objectName,
                            title: ae,
                            variant: "H3"
                        }, ae), s.createElement("div", {
                            className: Bm.objectHeaderSide
                        }, s.createElement(pi, {
                            icon: s.createElement(dc.ArrowUpSLine, null),
                            variant: "ghost",
                            size: R.xs ? "medium" : "small",
                            title: Z("Развернуть"),
                            onClick: () => k(!1)
                        }), s.createElement(Ci, {
                            onClick: D,
                            size: R.xs ? "medium" : "small"
                        }))), t.current) : s.createElement(_i.Container, {
                            className: (0, Yn.Z)(Bm.objectWindow, {
                                [Bm.objectWindowLoading]: f === A.PENDING
                            }),
                            size: N ? "xl" : "m"
                        }, f === A.PENDING ? le() : s.createElement(s.Fragment, null, s.createElement("div", {
                            className: Bm.objectWindowMain
                        }, s.createElement(_i.Header, {
                            className: Bm.objectWindowHeader
                        }, !w && s.createElement("div", {
                            className: Bm.objectHeaderSide
                        }, G && s.createElement(pi, {
                            icon: s.createElement(dc.ArrowLeftLine, null),
                            variant: "ghost",
                            size: "medium",
                            title: Z("Назад"),
                            onClick: () => cn.navigate(-1)
                        }), ee), s.createElement(ua.Title, {
                            className: Bm.objectName,
                            title: ae,
                            variant: "H3"
                        }, w ? null == F ? void 0 : F.json.title : ae), s.createElement("div", {
                            className: Bm.objectHeaderSide
                        }, se.length > 1 && !R.xs && s.createElement(pi, {
                            icon: s.createElement(dc.ListOrdered2, null),
                            variant: N ? "active" : "ghost",
                            size: "medium",
                            title: Z("Оглавление"),
                            onClick: () => L(!N)
                        }), !w && f !== A.PENDING && s.createElement(pi, {
                            icon: s.createElement(dc.ArrowDownSLine, null),
                            variant: "ghost",
                            size: "medium",
                            title: Z("Свернуть"),
                            onClick: () => k(!0)
                        }), s.createElement(Ci, {
                            onClick: D,
                            size: "medium",
                            title: Z("Закрыть")
                        }))), s.createElement(_i.Body, {
                            className: Bm.objectWindowBody
                        }, (() => {
                            const e = [];
                            if (!g || 0 === Object.keys(g.fields).length) return s.createElement("div", {
                                className: Bm.objectWindowEmpty
                            }, s.createElement(ua.Text, {
                                disabled: !0
                            }, Z("Нет данных")));
                            if ((null == V ? void 0 : V.mediaFilesEnabled) && g.fields[V.mediaFilesColumnCode]) {
                                const t = (e => {
                                    const t = e.filter((e => e.mime.includes("image"))).map((e => Object.assign(Object.assign({}, e), {
                                        apiPath: e.uuid ? `${Q}image/${e.uuid}` : ""
                                    })));
                                    return 0 === t.length ? null : {
                                        name: Z("Изображения"),
                                        element: s.createElement(qi, {
                                            images: t,
                                            className: "object-slider"
                                        })
                                    }
                                })(g.fields[V.mediaFilesColumnCode]);
                                t && e.push(t)
                            }
                            let t;
                            if (1 === ie.length) {
                                const {
                                    columns: e
                                } = ie[0];
                                t = ce(e)
                            } else ie.forEach((t => {
                                const {
                                    columns: n,
                                    code: a
                                } = t, r = (0, i._T)(t, ["columns", "code"]);
                                e.push(Object.assign(Object.assign({}, r), {
                                    id: a,
                                    element: s.createElement(s.Fragment, null, ce(n))
                                }))
                            })), t = s.createElement(Oi, {
                                items: e,
                                refElement: P
                            });
                            return s.createElement(Zi, {
                                scrollableNodeProps: {
                                    onScroll: W
                                }
                            }, t)
                        })()), g && f !== A.PENDING && s.createElement(_i.Footer, {
                            className: Bm.objectWindowFooter
                        }, s.createElement(za, {
                            orientation: "horizontal"
                        }, w ? s.createElement(s.Fragment, null, s.createElement(pi, {
                            variant: "secondary",
                            onClick: () => window.open(null == F ? void 0 : F.json.download, "_blank")
                        }, Z("Скачать запись реестра")), s.createElement(pi, {
                            icon: s.createElement(dc.DownloadFile, null),
                            variant: "secondary",
                            title: Z("Скачать PDF"),
                            onClick: J
                        })) : s.createElement(s.Fragment, null, (null == g ? void 0 : g.geom) && s.createElement(pi, {
                            icon: s.createElement(dc.ZoomInLine, null),
                            variant: "secondary",
                            title: Z("Приблизить"),
                            onClick: z
                        }), s.createElement(pi, {
                            icon: s.createElement(dc.LinkFill, null),
                            variant: "secondary",
                            title: Z("Ссылка на объект"),
                            onClick: K
                        }), s.createElement(pi, {
                            icon: s.createElement(dc.DownloadFile, null),
                            variant: "secondary",
                            title: Z("Скачать PDF"),
                            onClick: J
                        }), s.createElement(pi, {
                            icon: S ? s.createElement(dc.StarFill, null) : s.createElement(dc.StarLine, null),
                            variant: S ? "active" : "ghost",
                            title: Z(S ? "Удалить из избранного" : "В избранное"),
                            onClick: X
                        }), !R.xs && !F.json.hide_compare && s.createElement(pi, {
                            icon: C ? s.createElement(dc.BarChartFill, null) : s.createElement(dc.BarChartLine, null),
                            variant: C ? "active" : "ghost",
                            title: Z(C ? "В сравнении" : "Сравнить"),
                            onClick: re
                        }))), (null == F ? void 0 : F.json.geography) && (null == y ? void 0 : y.length) > 0 && "ru" === l.ZP.language && s.createElement(pi, {
                            icon: h ? s.createElement(dc.GlobeFill, null) : s.createElement(dc.GlobeLine, null),
                            variant: h ? "active" : "ghost",
                            title: Z("География"),
                            onClick: q
                        }), g.isCatalog && s.createElement(za, null, s.createElement(pi, {
                            variant: "accent",
                            onClick: oe,
                            title: Z("Каталог продукции")
                        }, Z("Каталог продукции"))))), N && s.createElement("div", {
                            className: Bm.objectWindowSidebar
                        }, s.createElement("div", {
                            className: Bm.objectWindowSidebarHeader
                        }, s.createElement(ua.Title, {
                            variant: "H3"
                        }, Z("Оглавление"))), s.createElement("div", {
                            className: Bm.objectWindowSidebarHeadersList
                        }, s.createElement(Zi, null, se.map((e => {
                            let t = "bold";
                            return 1 === e.level ? t = "medium" : e.level > 1 && (t = "normal"), s.createElement("div", {
                                key: e.code,
                                className: (0, Yn.Z)(Bm.objectWindowSidebarItem, "l" + e.level, {
                                    [Bm.active]: M === e.code
                                }),
                                onClick: () => (e => {
                                    const t = document.querySelector(`#${e}`);
                                    null == t || t.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                })(e.code),
                                style: {
                                    paddingLeft: `${1.5+e.level}rem`
                                }
                            }, s.createElement(ua.Text, {
                                variant: t
                            }, e.numb), s.createElement(ua.Text, {
                                variant: t
                            }, e.name))
                        })))))))
                    };
                var zm = n(3148),
                    Ym = n(7028);
                const Km = "statWindow",
                    Jm = "chartPane",
                    Xm = "headTabs";
                zm.kL.register(...zm.zX), zm.kL.register(Ym.Z);
                const qm = e => Number(e.replace(/\s/g, "").replace(/\(.*/g, "")),
                    Qm = ({
                        header: e,
                        title: t,
                        tableHTML: n
                    }) => {
                        const a = (0, s.useRef)(null),
                            i = (0, s.useRef)({}).current,
                            [r, o] = (0, s.useState)("table"),
                            c = n.indexOf('role="tabify"') > 0;
                        return (0, s.useEffect)((() => () => {
                            var e;
                            return null === (e = i.chart) || void 0 === e ? void 0 : e.destroy()
                        }), []), (0, s.useEffect)((() => {
                            var e;
                            i.chart && i.chart.destroy();
                            const t = (new DOMParser).parseFromString(n, "text/html").body.firstChild;
                            let s = "bar";
                            t.id.includes("types") ? s = "pie" : t.id.includes("federals") && (s = "barGroup");
                            const r = "tech_parks_ownership_and_types" === t.id,
                                o = "clusters_in_federals" === t.id,
                                l = [];
                            for (const n of (null === (e = t.querySelector("tbody")) || void 0 === e ? void 0 : e.querySelectorAll("tr")) || []) l.push([...n.querySelectorAll("td")].map((e => e.textContent || "")));
                            const c = [...t.querySelectorAll("th")].map((e => e.textContent || ""));
                            if (a.current) {
                                const e = o ? 2 : 1;
                                i.chart = new zm.kL(a.current.getContext("2d"), {
                                    data: {
                                        labels: "barGroup" === s || r ? l.slice(o ? 0 : 1).map((e => e[0])) : c.slice(1),
                                        datasets: "barGroup" === s ? c.slice(e).map(((t, n) => ({
                                            label: c[n + e],
                                            data: l.slice(o ? 0 : 1).map((t => qm(t[n + e]))),
                                            datalabels: {
                                                display: !1
                                            },
                                            barThickness: 12
                                        }))) : [{
                                            data: r ? l.slice(1).map((e => qm(e[1]))) : l[0].slice(1).map((e => qm(e))),
                                            datalabels: {
                                                display: "bar" === s
                                            }
                                        }]
                                    },
                                    type: "pie" === s ? "pie" : "bar",
                                    options: {
                                        indexAxis: "barGroup" === s ? "y" : "x",
                                        animation: !1,
                                        maintainAspectRatio: !1,
                                        scales: {
                                            x: {
                                                display: "pie" !== s,
                                                grid: {
                                                    display: "barGroup" === s
                                                },
                                                stacked: "barGroup" === s,
                                                ticks: {
                                                    color: "#aaa"
                                                }
                                            },
                                            y: {
                                                display: "pie" !== s,
                                                grid: {
                                                    display: !1
                                                },
                                                stacked: "barGroup" === s,
                                                ticks: {
                                                    color: "#aaa",
                                                    mirror: "barGroup" === s,
                                                    labelOffset: "barGroup" === s ? -12 : void 0
                                                }
                                            }
                                        },
                                        plugins: {
                                            legend: {
                                                display: "pie" === s,
                                                position: "bottom"
                                            },
                                            tooltip: {
                                                enabled: "bar" !== s,
                                                displayColors: !1,
                                                callbacks: "pie" === s ? {
                                                    label: e => {
                                                        const t = e.dataset.data[e.dataIndex],
                                                            n = e.dataset.data.reduce(((e, t) => e + t), 0);
                                                        return t && n ? Math.round(t / n * 100) + "%" : ""
                                                    },
                                                    title: () => ""
                                                } : {
                                                    label: e => {
                                                        const t = e.dataset.data[e.dataIndex];
                                                        return e.dataset.label + ": " + t
                                                    },
                                                    title: () => ""
                                                }
                                            }
                                        }
                                    }
                                })
                            }
                        }), [r, n]), s.createElement(s.Fragment, null, s.createElement("div", {
                            className: Xm
                        }, s.createElement("h4", {
                            "data-title": t
                        }, e), c && s.createElement(za, {
                            orientation: "horizontal"
                        }, s.createElement(pi, {
                            title: (0, l.t)("Таблица"),
                            icon: "table" === r ? s.createElement(dc.TableFill, null) : s.createElement(dc.TableLine, null),
                            variant: "table" === r ? "active" : "ghost",
                            size: "small",
                            onClick: () => o("table")
                        }), s.createElement(pi, {
                            title: (0, l.t)("График"),
                            icon: "chart" === r ? s.createElement(dc.BarChart2Fill, null) : s.createElement(dc.BarChart2Line, null),
                            variant: "chart" === r ? "active" : "ghost",
                            size: "small",
                            onClick: () => o("chart")
                        }))), "table" === r && s.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        }), "chart" === r && s.createElement("div", {
                            className: Jm
                        }, s.createElement("canvas", {
                            ref: a
                        })))
                    },
                    eu = () => {
                        const {
                            t: e
                        } = (0, Bn.$G)(), t = xi(), [n] = (0, o.lr)(), a = (0, s.useRef)(document.createElement("div")), i = (0, s.useMemo)((() => {
                            const e = n.get("stats");
                            if (!e) return w(), {
                                mapCode: "",
                                containerId: ""
                            };
                            const [t, a] = e.split(".");
                            return {
                                mapCode: t,
                                containerId: a
                            }
                        }), [n]), {
                            mapCode: c,
                            containerId: d
                        } = i, {
                            data: m
                        } = (0, r.v9)((e => x(e, `STATS_${c}`))), u = (0, r.v9)((e => k(e, "STATS"))), p = (0, r.v9)((e => I(e, `FULL_LAYERS_${c}`))), h = null == p ? void 0 : p.find((e => e.id.toString() === d)), [g, v] = (0, s.useState)(!1), [f, y] = (0, s.useState)(""), [b, E] = (0, s.useState)("");
                        (0, s.useEffect)((() => {
                            wn.setMainWindow(null), An.loadStats({
                                mapCode: c,
                                containerId: Number(d)
                            })
                        }), []), (0, s.useEffect)((() => {
                            if (null == m ? void 0 : m[d]) {
                                const e = Object.keys(m[d]);
                                E(e[0] || "")
                            }
                        }), [m]), (0, s.useEffect)((() => {
                            if ((null == m ? void 0 : m[d]) && b) {
                                const e = m[d][b].match(/<h1 data-title="([^"]+)"/i);
                                y((null == e ? void 0 : e[1]) || ""), a.current.scrollTo({
                                    top: 0
                                })
                            }
                        }), [b]);
                        const w = () => un({
                                stats: ""
                            }),
                            S = e => {
                                const t = e.target.getElementsByTagName("h4"),
                                    n = e.target.scrollTop,
                                    a = e.target.scrollTop + e.target.clientHeight;
                                for (const e of t)
                                    if (e.offsetTop >= n && e.offsetTop <= a) {
                                        y(e.dataset.title || e.parentElement.title);
                                        break
                                    }
                            };
                        if (!c || !d) return null;
                        const j = u === A.PENDING || !m;
                        return s.createElement(_i.Container, {
                            className: (0, Yn.Z)(Bm.objectWindow, Km, {
                                [Bm.objectWindowLoading]: u === A.PENDING
                            }),
                            size: g ? "xl" : "m"
                        }, j ? s.createElement("div", {
                            className: Bm.objectWindowLoader
                        }, s.createElement(Ii, null)) : s.createElement(s.Fragment, null, s.createElement("div", {
                            className: Bm.objectWindowMain
                        }, (() => {
                            const n = Object.keys(m[d] || {});
                            return s.createElement(s.Fragment, null, s.createElement(_i.Header, {
                                className: Bm.objectWindowHeader
                            }, s.createElement(ua.Title, {
                                className: Bm.objectName,
                                variant: "H3"
                            }, e(h.json.statistic.title || "Статистика")), s.createElement("div", {
                                className: Bm.objectHeaderSide
                            }, !t.xs && s.createElement(pi, {
                                icon: s.createElement(dc.ListOrdered2, null),
                                variant: g ? "active" : "ghost",
                                size: "medium",
                                onClick: () => v(!g)
                            }), s.createElement(Ci, {
                                onClick: w,
                                size: "medium"
                            }))), n.length > 1 && s.createElement(ji, {
                                tabs: n.map((e => ({
                                    key: e,
                                    label: e
                                }))),
                                active: b,
                                onChange: e => E(e)
                            }))
                        })(), s.createElement(_i.Body, {
                            className: Bm.objectWindowBody
                        }, (() => {
                            if (m[d] && b) {
                                const e = [],
                                    t = m[d][b].split("<h1");
                                t.shift();
                                for (const n of t) {
                                    const t = n.match(/data-title="([^"]+)".+h1>/i);
                                    if (t) {
                                        const a = n.replace(t[0], "").replace(/<h4/gi, "¶<h4").replace(/\/table>/gi, "/table>¶").replace(/white-space:nowrap/gi, "").split("¶"),
                                            i = [];
                                        for (const [e, t] of a.entries())
                                            if (t.startsWith("<h4")) {
                                                const [n, a] = t.split("h4>"), r = a.replace(/<td><\/td>/gi, ""), o = n.match(/data-title="([^"]+)">(.+)</i);
                                                o && i.push(s.createElement(Qm, {
                                                    key: e + b,
                                                    header: o[2],
                                                    title: o[1],
                                                    tableHTML: r
                                                }))
                                            } else i.push(s.createElement("div", {
                                                key: e,
                                                dangerouslySetInnerHTML: {
                                                    __html: t
                                                }
                                            }));
                                        e.push({
                                            name: t[1],
                                            element: s.createElement(s.Fragment, null, i)
                                        })
                                    }
                                }
                                return s.createElement(Zi, {
                                    scrollableNodeProps: {
                                        onScroll: S,
                                        ref: a
                                    }
                                }, s.createElement(Oi, {
                                    key: b,
                                    items: e
                                }))
                            }
                            return null
                        })()), s.createElement(_i.Footer, {
                            className: Bm.objectWindowFooter
                        }, s.createElement(pi, {
                            icon: s.createElement(dc.DownloadLine, null),
                            variant: "secondary",
                            onClick: () => window.open(`${h.json.statistic.items[b].pdf}${l.ZP.language}/`, "_blank"),
                            style: {
                                flex: 1
                            }
                        }, e("Скачать PDF")))), g && s.createElement("div", {
                            className: Bm.objectWindowSidebar
                        }, s.createElement("div", {
                            className: Bm.objectWindowSidebarHeader
                        }, s.createElement(ua.Title, {
                            variant: "H3"
                        }, e("Оглавление"))), s.createElement("div", {
                            className: Bm.objectWindowSidebarHeadersList
                        }, s.createElement(Zi, null, (() => {
                            const e = [];
                            let t = 0,
                                n = 1;
                            if (m[d] && b) {
                                const a = [...m[d][b].matchAll(/<h[14] data-title="([^"]+)"/gi)];
                                for (const i of a) i[0].startsWith("<h1") ? (t++, n = 1, e.push({
                                    name: i[1],
                                    level: 0,
                                    number: t
                                })) : (e.push({
                                    name: i[1],
                                    level: 1,
                                    number: `${t}.${n}`
                                }), n++)
                            }
                            return e
                        })().map((e => {
                            let t = "bold";
                            return 1 === e.level ? t = "medium" : e.level > 1 && (t = "normal"), s.createElement(ua.Text, {
                                key: e.number,
                                className: (0, Yn.Z)(Bm.objectWindowSidebarItem, {
                                    [Bm.active]: f === e.name
                                }, {
                                    [Bm.h1]: 0 === e.level
                                }),
                                variant: t,
                                style: {
                                    paddingLeft: 1.5 + 1.5 * e.level + "rem"
                                },
                                onClick: () => (e => {
                                    const t = document.querySelector(`[data-title='${e}']`) || document.querySelector(`[title='${e}']`);
                                    null == t || t.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                })(e.name)
                            }, `${e.number} ${e.name}`)
                        })))))))
                    },
                    tu = "desktopHeader",
                    nu = "desktopHeaderName";
                let au;
                const iu = () => {
                        const e = (0, r.v9)((e => e.app.config)),
                            {
                                name: t
                            } = (0, r.v9)((t => T(t, `MAP_${e.mapCode}`))),
                            [n, a] = (0, s.useState)(null),
                            i = (0, Gn.TH)();
                        (0, s.useEffect)((() => {
                            n ? (i.pathname.includes("search") || pn(cn.search), clearTimeout(au), au = setTimeout((() => {
                                An.search(n)
                            }), 500)) : (null !== n || i.pathname.includes("search")) && pn(cn.sections)
                        }), [n]);
                        const {
                            name: o,
                            searchEnabled: c
                        } = (0, s.useMemo)((() => {
                            var n;
                            const {
                                customWidgets: a
                            } = e.publication.settings;
                            return {
                                name: t,
                                searchEnabled: null === (n = a.search) || void 0 === n ? void 0 : n.enabled
                            }
                        }), [e]);
                        return s.createElement(_i.Container, {
                            className: tu
                        }, s.createElement(ua.Title, {
                            variant: "H3",
                            onClick: () => pn(cn.sections, {
                                container: ""
                            }),
                            className: nu
                        }, o), c && s.createElement(Wa.Text, {
                            value: n || "",
                            placeholder: (0, l.t)("Поиск"),
                            onChange: e => a(e),
                            prefixIcon: s.createElement(dc.SearchIcon, null)
                        }))
                    },
                    su = "sidebarWrapper",
                    ru = "mainWrapper",
                    ou = e => {
                        const {
                            refBottom: t
                        } = e, n = (0, r.v9)((e => e.ui.mainWindow)), [a] = (0, o.lr)(), i = (0, s.useMemo)((() => a.get("object")), [a]), l = (0, s.useMemo)((() => a.get("stats")), [a]);
                        return (0, s.useEffect)((() => {
                            n && un({
                                stats: ""
                            })
                        }), [n]), s.createElement(s.Fragment, null, s.createElement("div", {
                            className: su
                        }, s.createElement(iu, null), s.createElement(Cm, null)), s.createElement("div", {
                            className: ru,
                            ref: e => Xt.setElement(e)
                        }, i && s.createElement(Wm, {
                            refBottom: t
                        }), l && s.createElement(eu, null), "filter" === n && s.createElement(xm, null), "site_selection" === n && s.createElement(Um, null)))
                    },
                    lu = "mobileHeader",
                    cu = "mobileSearchInput";
                let du;
                const mu = () => {
                        const e = (0, r.v9)((e => e.app.config)),
                            {
                                name: t
                            } = (0, r.v9)((t => T(t, `MAP_${e.mapCode}`))),
                            [n, a] = (0, s.useState)(""),
                            i = (0, Gn.TH)();
                        return (0, s.useEffect)((() => {
                            i.pathname.includes("search") || a("")
                        }), [i]), (0, s.useEffect)((() => {
                            i.pathname.includes("search") && !n.trim() && wn.setSwipeableState(tn.min)
                        }), [n]), (0, s.useEffect)((() => {
                            n.trim() && (clearTimeout(du), du = setTimeout((() => {
                                An.search(n.trim()), wn.setSwipeableState(tn.prevMax)
                            }), 500))
                        }), [n]), s.createElement(_i.Container, {
                            className: lu
                        }, i.pathname.includes("search") ? s.createElement(Wa.Text, {
                            value: n,
                            autoFocus: !0,
                            onChange: e => a(e),
                            prefixIcon: s.createElement(dc.SearchIcon, null),
                            className: cu
                        }) : s.createElement(ua.Title, {
                            variant: "H3",
                            onClick: () => pn(cn.sections, {
                                container: ""
                            })
                        }, t), s.createElement(hd, null))
                    },
                    uu = e => {
                        const {
                            refBottom: t
                        } = e, n = (0, r.v9)((e => e.ui.swipeableState)), a = (0, r.v9)((e => e.ui.mainWindow)), i = (0, r.v9)((e => e.ui.minHeightSwipe)), [l] = (0, o.lr)(), c = (0, s.useMemo)((() => l.get("object")), [l]), d = (0, s.useMemo)((() => l.get("stats")), [l]);
                        (0, s.useEffect)((() => {
                            a && un({
                                stats: ""
                            })
                        }), [a]);
                        const m = (0, s.useMemo)((() => document.querySelector("#app-root")), []);
                        return s.createElement(s.Fragment, null, s.createElement(mu, null), s.createElement("div", {
                            className: "mainWrapper",
                            ref: e => Xt.setElement(e)
                        }), m && (0, Ya.createPortal)(s.createElement(s.Fragment, null, c && s.createElement(Wm, {
                            refBottom: t
                        }), d && s.createElement(eu, null), "filter" === a && s.createElement(xm, null), "site_selection" === a && s.createElement(Um, null)), m), s.createElement(Vi, {
                            state: n,
                            onStateChange: e => wn.setSwipeableState(e),
                            minHeight: "number" == typeof i ? i : void 0
                        }, s.createElement(Cm, null)))
                    },
                    pu = {
                        absoluteCenterBlock: "absoluteCenterBlock",
                        verticalCentering: "verticalCentering",
                        horizontalCentering: "horizontalCentering",
                        focus: "focus",
                        error: "error",
                        notifyWrapper: "notifyWrapper",
                        "common-styles": "common-styles",
                        notify_danger: "notify_danger",
                        notify_info: "notify_info",
                        notify_success: "notify_success",
                        notify_warning: "notify_warning",
                        "wrapper-icon": "wrapper-icon",
                        notifyText: "notifyText"
                    };
                let hu;
                const gu = () => {
                        const e = (0, r.v9)((e => e.ui.notify)),
                            [t, n] = (0, s.useState)(!1),
                            a = (0, s.useMemo)((() => document.querySelector("#app-root")), []);
                        (0, s.useEffect)((() => {
                            clearTimeout(hu), e ? (n(!0), hu = setTimeout((() => {
                                wn.setNotify(null)
                            }), e.duration || 5e3)) : n(!1)
                        }), [null == e ? void 0 : e.revision]);
                        const i = (0, s.useMemo)((() => {
                            switch (null == e ? void 0 : e.type) {
                                case "danger":
                                    return s.createElement(dc.NotifyDanger, null);
                                case "warning":
                                    return s.createElement(dc.NotifyWarning, null);
                                case "success":
                                    return s.createElement(dc.NotifySuccess, null);
                                default:
                                    return s.createElement(dc.NotifyInfo, null)
                            }
                        }), [null == e ? void 0 : e.type]);
                        return t && e && a ? Ya.createPortal((o = e.type, l = e.text, s.createElement("div", {
                            className: pu.notifyWrapper
                        }, s.createElement("div", {
                            className: (0, Yn.Z)(pu[`notify_${o}`])
                        }, i, s.createElement("span", {
                            className: pu.notifyText
                        }, l)))), a) : null;
                        var o, l
                    },
                    vu = () => {
                        const {
                            data: e,
                            meta: t
                        } = (0, r.v9)((e => _(e, "INFO_WINDOW"))), [n, a] = (0, s.useState)(!1), [i, o] = (0, s.useState)(""), c = xi(), d = (0, s.useMemo)((() => {
                            const n = {};
                            if (!(null == t ? void 0 : t.structure) || !e) return n;
                            t.structure.filter((t => "orbis_id" !== t.code && "geom" !== t.code && ("title" === t.type || null !== (null == e ? void 0 : e.fields[t.code])))).forEach((e => {
                                e.parent_id in n || (n[e.parent_id] = []), n[e.parent_id].push(e)
                            }));
                            const a = n[0].find((e => "title" === e.type));
                            return a && o(a.code), n
                        }), [null == t ? void 0 : t.structure, e]), m = (0, s.useMemo)((() => {
                            const e = [];
                            if (c.xs) return e;
                            let t = "0";
                            const n = (a, i) => {
                                var s;
                                null === (s = d[a]) || void 0 === s || s.forEach((a => {
                                    var s;
                                    if ("title" === a.type && (null === (s = d[a.id]) || void 0 === s ? void 0 : s.length)) {
                                        let s = t.split(".").map((e => Number(e)));
                                        s[i] = "number" == typeof s[i] ? s[i] + 1 : 1, s = s.slice(0, i + 1), t = s.join("."), e.push(Object.assign(Object.assign({}, a), {
                                            level: i,
                                            number: t
                                        })), n(a.id, i + 1)
                                    }
                                }))
                            };
                            return n(0, 0), e
                        }), [d]), u = e => {
                            const t = e.target.getElementsByClassName("subheader"),
                                n = e.target.scrollTop,
                                a = e.target.scrollTop + e.target.clientHeight;
                            for (const e of t)
                                if (e.offsetTop >= n && e.offsetTop <= a) {
                                    o(e.id);
                                    break
                                }
                        }, p = t => {
                            const n = e;
                            return null == t ? void 0 : t.map((e => {
                                var t;
                                const a = n.fields[`#${e.code}`] || n.fields[e.code],
                                    i = String(a).length < 7;
                                return "title" === e.type ? (null === (t = d[e.id]) || void 0 === t ? void 0 : t.length) ? s.createElement("div", {
                                    key: e.code,
                                    className: Bm.objectColumn
                                }, s.createElement(ua.Text, {
                                    variant: "bold",
                                    id: e.code,
                                    className: "subheader"
                                }, e.name), p(d[e.id])) : null : s.createElement("div", {
                                    key: e.code,
                                    className: (0, Yn.Z)(Bm.objectColumn, {
                                        [Bm.oneRow]: i
                                    })
                                }, s.createElement(ua.Text, {
                                    dangerouslySetInnerHTML: {
                                        __html: a
                                    }
                                }))
                            }))
                        }, h = e => ({
                            name: (0, l.t)("Разное"),
                            id: "info",
                            className: "subheader",
                            element: s.createElement(s.Fragment, null, p(e))
                        });
                        return e && Ya.createPortal(s.createElement(Ti, null, s.createElement(_i.Container, {
                            className: Bm.objectWindow,
                            size: n ? "xl" : "m",
                            style: {
                                width: "100%"
                            }
                        }, s.createElement("div", {
                            className: Bm.objectWindowMain
                        }, s.createElement(_i.Header, {
                            className: Bm.objectWindowHeader
                        }, s.createElement(ua.Title, {
                            className: Bm.objectName,
                            variant: "H3"
                        }, null == t ? void 0 : t.name), s.createElement("div", {
                            className: Bm.objectHeaderSide
                        }, !c.xs && m.length > 0 && s.createElement(pi, {
                            icon: s.createElement(dc.ListOrdered2, null),
                            variant: n ? "active" : "ghost",
                            size: "medium",
                            onClick: () => a(!n)
                        }), s.createElement(Ci, {
                            onClick: () => U.clear("INFO_WINDOW"),
                            size: "medium"
                        }))), s.createElement(_i.Body, {
                            className: (0, Yn.Z)(Bm.objectWindowBody, Bm.about, {
                                [Bm.materials]: (null == t ? void 0 : t.type) === Nn.materials
                            })
                        }, (() => {
                            const e = [];
                            let t = [],
                                n = !0;
                            return (d[0] || []).forEach(((a, i) => {
                                "title" === a.type ? (t.length > 0 && (e.push(h(t)), t = []), n = !1, e.push({
                                    name: a.name,
                                    id: a.code,
                                    className: "subheader",
                                    element: s.createElement(s.Fragment, null, p(d[a.id]))
                                })) : t.push(a), i === d[0].length - 1 && t.length > 0 && e.push(h(t))
                            })), s.createElement(Zi, {
                                scrollableNodeProps: {
                                    onScroll: u
                                }
                            }, n ? e.map((e => e.element)) : s.createElement(Oi, {
                                items: e
                            }))
                        })())), n && s.createElement("div", {
                            className: Bm.objectWindowSidebar
                        }, s.createElement("div", {
                            className: Bm.objectWindowSidebarHeader
                        }, s.createElement(ua.Title, {
                            variant: "H3"
                        }, (0, l.t)("Оглавление"))), s.createElement("div", {
                            className: Bm.objectWindowSidebarHeadersList
                        }, s.createElement(Zi, null, m.map((e => {
                            let t = "bold";
                            return 1 === e.level ? t = "medium" : e.level > 1 && (t = "normal"), s.createElement("div", {
                                key: e.code,
                                className: (0, Yn.Z)(Bm.objectWindowSidebarItem, "l" + e.level, {
                                    [Bm.active]: i === e.code
                                }),
                                onClick: () => (e => {
                                    const t = document.querySelector(`#${e}`);
                                    null == t || t.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                })(e.code),
                                style: {
                                    paddingLeft: `${1.5+e.level}rem`
                                }
                            }, s.createElement(ua.Text, {
                                variant: t
                            }, e.name))
                        }))))))), document.body)
                    },
                    fu = e => {
                        const {
                            host: t,
                            project_id: n,
                            map_code: a
                        } = e, i = (0, r.v9)((e => k(e, "INITIALIZE"))), c = (0, r.v9)((e => k(e, "INFO_WINDOW"))), {
                            linkModal: d
                        } = (0, r.v9)((e => e.ui)), m = (0, s.useRef)(null), u = (0, s.useRef)(null), [p, h] = (0, o.lr)();
                        cn.navigate = (0, Gn.s0)(), cn.location = (0, Gn.TH)(), cn.searchParams = p, cn.setSearchParams = h;
                        const g = xi();
                        return Wn().locale(l.ZP.language), (0, s.useEffect)((() => {
                            const e = p.get("lng") || "ru";
                            l.ZP.changeLanguage(e), Pt.langs = On, un({
                                lng: e
                            }), Tn.initialize({
                                host: t,
                                project_id: n,
                                map_code: a
                            })
                        }), []), [A.UNKNOWN, A.PENDING].includes(i) ? s.createElement("div", {
                            className: "rootLoader"
                        }, s.createElement(Ii, null)) : i === A.SUCCESS ? s.createElement(Bn.a3, {
                            i18n: l.ZP
                        }, s.createElement("div", {
                            className: "appWrapper"
                        }, s.createElement(wd, {
                            appContainer: m.current,
                            refBottom: u
                        }), s.createElement("div", {
                            className: (0, Yn.Z)("gridsWrapper", "grids"),
                            id: "grids",
                            ref: m
                        }, g.xs ? s.createElement(uu, {
                            refBottom: u
                        }) : s.createElement(ou, {
                            refBottom: u
                        }))), d && s.createElement(Ri, {
                            link: d.link,
                            windowName: d.name,
                            onClose: () => wn.setLinkModal(null),
                            onCopy: () => wn.setNotify({
                                type: en.success,
                                text: "Ссылка скопирована!"
                            })
                        }), c === A.SUCCESS && s.createElement(vu, null), s.createElement(gu, null)) : null
                    },
                    yu = new Set,
                    bu = (e, t, n) => (0, i.mG)(void 0, void 0, void 0, (function*() {
                        yield Promise.all([(0, i.mG)(void 0, void 0, void 0, (function*() {})), c]), yield l.ZP.changeLanguage(window.mapLng || (() => {
                            const e = `${window.location.search}`.match(/[^\w]lng=(\w{2})([^\w]|$)/);
                            return e && e[1] ? e[1] : "ru"
                        })()), l.ZP.on("missingKey", ((e, t, n) => {
                            yu.add(n), window.localStorage.setItem("dict", [...yu].join("\n"))
                        }));
                        const a = (() => {
                                const e = Vn.reduce(((e, t) => Object.assign(Object.assign({}, e), t.getReducer())), {}),
                                    {
                                        store: t
                                    } = g(e);
                                return (e => {
                                    for (const t of e) t.start()
                                })(Vn), t
                            })(),
                            d = document.getElementById("app-root");
                        if (d) {
                            (0, Un.s)(d).render(s.createElement(r.zt, {
                                store: a
                            }, s.createElement(o.UT, null, s.createElement(fu, {
                                host: e,
                                project_id: t,
                                map_code: n
                            }))))
                        }
                    }))
            }
        },
        i = {};

    function s(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var n = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return a[e].call(n.exports, n, n.exports, s), n.loaded = !0, n.exports
    }
    s.m = a, e = [], s.O = (t, n, a, i) => {
        if (!n) {
            var r = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [n, a, i] = e[d], o = !0, l = 0; l < n.length; l++)(!1 & i || r >= i) && Object.keys(s.O).every((e => s.O[e](n[l]))) ? n.splice(l--, 1) : (o = !1, i < r && (r = i));
                if (o) {
                    e.splice(d--, 1);
                    var c = a();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        i = i || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > i; d--) e[d] = e[d - 1];
        e[d] = [n, a, i]
    }, s.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return s.d(t, {
            a: t
        }), t
    }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(e, a) {
        if (1 & a && (e = this(e)), 8 & a) return e;
        if ("object" == typeof e && e) {
            if (4 & a && e.__esModule) return e;
            if (16 & a && "function" == typeof e.then) return e
        }
        var i = Object.create(null);
        s.r(i);
        var r = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var o = 2 & a && e;
            "object" == typeof o && !~t.indexOf(o); o = n(o)) Object.getOwnPropertyNames(o).forEach((t => r[t] = () => e[t]));
        return r.default = () => e, s.d(i, r), i
    }, s.d = (e, t) => {
        for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), s.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e = {
            826: 0
        };
        s.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var a, i, [r, o, l] = n,
                    c = 0;
                if (r.some((t => 0 !== e[t]))) {
                    for (a in o) s.o(o, a) && (s.m[a] = o[a]);
                    if (l) var d = l(s)
                }
                for (t && t(n); c < r.length; c++) i = r[c], s.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                return s.O(d)
            },
            n = self.webpackChunkrun = self.webpackChunkrun || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var r = s.O(void 0, [792], (() => s(8375)));
    r = s.O(r), run = r
})();
