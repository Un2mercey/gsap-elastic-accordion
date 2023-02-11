function Kt(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
function ti(t) {
  if (H(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = he(r) ? dc(r) : ti(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else {
    if (he(t))
      return t;
    if (oe(t))
      return t;
  }
}
const cc = /;(?![^(]*\))/g, uc = /:([^]+)/, fc = /\/\*.*?\*\//gs;
function dc(t) {
  const e = {};
  return t.replace(fc, "").split(cc).forEach((n) => {
    if (n) {
      const r = n.split(uc);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function xs(t) {
  let e = "";
  if (he(t))
    e = t;
  else if (H(t))
    for (let n = 0; n < t.length; n++) {
      const r = xs(t[n]);
      r && (e += r + " ");
    }
  else if (oe(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const pc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", hc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", _c = /* @__PURE__ */ Kt(pc), mc = /* @__PURE__ */ Kt(hc), gc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vc = /* @__PURE__ */ Kt(gc);
function rl(t) {
  return !!t || t === "";
}
const ie = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Dn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], xe = () => {
}, il = () => !1, yc = /^on[^a-z]/, _r = (t) => yc.test(t), Br = (t) => t.startsWith("onUpdate:"), pe = Object.assign, Os = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Ec = Object.prototype.hasOwnProperty, X = (t, e) => Ec.call(t, e), H = Array.isArray, Cn = (t) => ni(t) === "[object Map]", bc = (t) => ni(t) === "[object Set]", W = (t) => typeof t == "function", he = (t) => typeof t == "string", Ns = (t) => typeof t == "symbol", oe = (t) => t !== null && typeof t == "object", ws = (t) => oe(t) && W(t.then) && W(t.catch), xc = Object.prototype.toString, ni = (t) => xc.call(t), Ts = (t) => ni(t).slice(8, -1), Oc = (t) => ni(t) === "[object Object]", Ds = (t) => he(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Cr = /* @__PURE__ */ Kt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nc = /* @__PURE__ */ Kt("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), ri = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, wc = /-(\w)/g, An = ri((t) => t.replace(wc, (e, n) => n ? n.toUpperCase() : "")), Tc = /\B([A-Z])/g, Bt = ri((t) => t.replace(Tc, "-$1").toLowerCase()), ii = ri((t) => t.charAt(0).toUpperCase() + t.slice(1)), Jt = ri((t) => t ? `on${ii(t)}` : ""), tr = (t, e) => !Object.is(t, e), zn = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, jr = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Dc = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let co;
const sl = () => co || (co = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Li(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let it;
class Cc {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = it, !e && it && (this.index = (it.scopes || (it.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = it;
      try {
        return it = this, e();
      } finally {
        it = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Li("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    it = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    it = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Pc(t, e = it) {
  e && e.active && e.effects.push(t);
}
function Sc() {
  return it;
}
const nr = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, ol = (t) => (t.w & jt) > 0, ll = (t) => (t.n & jt) > 0, Vc = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= jt;
}, Mc = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      ol(i) && !ll(i) ? i.delete(t) : e[n++] = i, i.w &= ~jt, i.n &= ~jt;
    }
    e.length = n;
  }
}, Bi = /* @__PURE__ */ new WeakMap();
let Wn = 0, jt = 1;
const ji = 30;
let Pe;
const rn = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ui = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Cs {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Pc(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = Pe, n = Ft;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = Pe, Pe = this, Ft = !0, jt = 1 << ++Wn, Wn <= ji ? Vc(this) : uo(this), this.fn();
    } finally {
      Wn <= ji && Mc(this), jt = 1 << --Wn, Pe = this.parent, Ft = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Pe === this ? this.deferStop = !0 : this.active && (uo(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function uo(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let Ft = !0;
const al = [];
function _n() {
  al.push(Ft), Ft = !1;
}
function mn() {
  const t = al.pop();
  Ft = t === void 0 ? !0 : t;
}
function Ve(t, e, n) {
  if (Ft && Pe) {
    let r = Bi.get(t);
    r || Bi.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = nr());
    const s = process.env.NODE_ENV !== "production" ? { effect: Pe, target: t, type: e, key: n } : void 0;
    zi(i, s);
  }
}
function zi(t, e) {
  let n = !1;
  Wn <= ji ? ll(t) || (t.n |= jt, n = !ol(t)) : n = !t.has(Pe), n && (t.add(Pe), Pe.deps.push(t), process.env.NODE_ENV !== "production" && Pe.onTrack && Pe.onTrack(Object.assign({ effect: Pe }, e)));
}
function wt(t, e, n, r, i, s) {
  const o = Bi.get(t);
  if (!o)
    return;
  let l = [];
  if (e === "clear")
    l = [...o.values()];
  else if (n === "length" && H(t)) {
    const c = Number(r);
    o.forEach((u, f) => {
      (f === "length" || f >= c) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(o.get(n)), e) {
      case "add":
        H(t) ? Ds(n) && l.push(o.get("length")) : (l.push(o.get(rn)), Cn(t) && l.push(o.get(Ui)));
        break;
      case "delete":
        H(t) || (l.push(o.get(rn)), Cn(t) && l.push(o.get(Ui)));
        break;
      case "set":
        Cn(t) && l.push(o.get(rn));
        break;
    }
  const a = process.env.NODE_ENV !== "production" ? { target: t, type: e, key: n, newValue: r, oldValue: i, oldTarget: s } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? xn(l[0], a) : xn(l[0]));
  else {
    const c = [];
    for (const u of l)
      u && c.push(...u);
    process.env.NODE_ENV !== "production" ? xn(nr(c), a) : xn(nr(c));
  }
}
function xn(t, e) {
  const n = H(t) ? t : [...t];
  for (const r of n)
    r.computed && fo(r, e);
  for (const r of n)
    r.computed || fo(r, e);
}
function fo(t, e) {
  (t !== Pe || t.allowRecurse) && (process.env.NODE_ENV !== "production" && t.onTrigger && t.onTrigger(pe({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const Ac = /* @__PURE__ */ Kt("__proto__,__v_isRef,__isVue"), cl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Ns)
), kc = /* @__PURE__ */ si(), Rc = /* @__PURE__ */ si(!1, !0), Fc = /* @__PURE__ */ si(!0), Ic = /* @__PURE__ */ si(!0, !0), po = /* @__PURE__ */ $c();
function $c() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = Y(this);
      for (let s = 0, o = this.length; s < o; s++)
        Ve(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(Y)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      _n();
      const r = Y(this)[e].apply(this, n);
      return mn(), r;
    };
  }), t;
}
function Lc(t) {
  const e = Y(this);
  return Ve(e, "has", t), e.hasOwnProperty(t);
}
function si(t = !1, e = !1) {
  return function(r, i, s) {
    if (i === "__v_isReactive")
      return !t;
    if (i === "__v_isReadonly")
      return t;
    if (i === "__v_isShallow")
      return e;
    if (i === "__v_raw" && s === (t ? e ? gl : ml : e ? _l : hl).get(r))
      return r;
    const o = H(r);
    if (!t) {
      if (o && X(po, i))
        return Reflect.get(po, i, s);
      if (i === "hasOwnProperty")
        return Lc;
    }
    const l = Reflect.get(r, i, s);
    return (Ns(i) ? cl.has(i) : Ac(i)) || (t || Ve(r, "get", i), e) ? l : ve(l) ? o && Ds(i) ? l : l.value : oe(l) ? t ? vl(l) : Ss(l) : l;
  };
}
const Bc = /* @__PURE__ */ ul(), jc = /* @__PURE__ */ ul(!0);
function ul(t = !1) {
  return function(n, r, i, s) {
    let o = n[r];
    if (Ut(o) && ve(o) && !ve(i))
      return !1;
    if (!t && (!Ur(i) && !Ut(i) && (o = Y(o), i = Y(i)), !H(n) && ve(o) && !ve(i)))
      return o.value = i, !0;
    const l = H(n) && Ds(r) ? Number(r) < n.length : X(n, r), a = Reflect.set(n, r, i, s);
    return n === Y(s) && (l ? tr(i, o) && wt(n, "set", r, i, o) : wt(n, "add", r, i)), a;
  };
}
function Uc(t, e) {
  const n = X(t, e), r = t[e], i = Reflect.deleteProperty(t, e);
  return i && n && wt(t, "delete", e, void 0, r), i;
}
function zc(t, e) {
  const n = Reflect.has(t, e);
  return (!Ns(e) || !cl.has(e)) && Ve(t, "has", e), n;
}
function Hc(t) {
  return Ve(t, "iterate", H(t) ? "length" : rn), Reflect.ownKeys(t);
}
const fl = {
  get: kc,
  set: Bc,
  deleteProperty: Uc,
  has: zc,
  ownKeys: Hc
}, dl = {
  get: Fc,
  set(t, e) {
    return process.env.NODE_ENV !== "production" && Li(`Set operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  },
  deleteProperty(t, e) {
    return process.env.NODE_ENV !== "production" && Li(`Delete operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  }
}, Kc = /* @__PURE__ */ pe({}, fl, {
  get: Rc,
  set: jc
}), Wc = /* @__PURE__ */ pe({}, dl, {
  get: Ic
}), Ps = (t) => t, oi = (t) => Reflect.getPrototypeOf(t);
function br(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = Y(t), s = Y(e);
  n || (e !== s && Ve(i, "get", e), Ve(i, "get", s));
  const { has: o } = oi(i), l = r ? Ps : n ? Vs : rr;
  if (o.call(i, e))
    return l(t.get(e));
  if (o.call(i, s))
    return l(t.get(s));
  t !== i && t.get(e);
}
function xr(t, e = !1) {
  const n = this.__v_raw, r = Y(n), i = Y(t);
  return e || (t !== i && Ve(r, "has", t), Ve(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Or(t, e = !1) {
  return t = t.__v_raw, !e && Ve(Y(t), "iterate", rn), Reflect.get(t, "size", t);
}
function ho(t) {
  t = Y(t);
  const e = Y(this);
  return oi(e).has.call(e, t) || (e.add(t), wt(e, "add", t, t)), this;
}
function _o(t, e) {
  e = Y(e);
  const n = Y(this), { has: r, get: i } = oi(n);
  let s = r.call(n, t);
  s ? process.env.NODE_ENV !== "production" && pl(n, r, t) : (t = Y(t), s = r.call(n, t));
  const o = i.call(n, t);
  return n.set(t, e), s ? tr(e, o) && wt(n, "set", t, e, o) : wt(n, "add", t, e), this;
}
function mo(t) {
  const e = Y(this), { has: n, get: r } = oi(e);
  let i = n.call(e, t);
  i ? process.env.NODE_ENV !== "production" && pl(e, n, t) : (t = Y(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, o = e.delete(t);
  return i && wt(e, "delete", t, void 0, s), o;
}
function go() {
  const t = Y(this), e = t.size !== 0, n = process.env.NODE_ENV !== "production" ? Cn(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && wt(t, "clear", void 0, void 0, n), r;
}
function Nr(t, e) {
  return function(r, i) {
    const s = this, o = s.__v_raw, l = Y(o), a = e ? Ps : t ? Vs : rr;
    return !t && Ve(l, "iterate", rn), o.forEach((c, u) => r.call(i, a(c), a(u), s));
  };
}
function wr(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = Y(i), o = Cn(s), l = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, c = i[t](...r), u = n ? Ps : e ? Vs : rr;
    return !e && Ve(s, "iterate", a ? Ui : rn), {
      // iterator protocol
      next() {
        const { value: f, done: d } = c.next();
        return d ? { value: f, done: d } : {
          value: l ? [u(f[0]), u(f[1])] : u(f),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Pt(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${ii(t)} operation ${n}failed: target is readonly.`, Y(this));
    }
    return t === "delete" ? !1 : this;
  };
}
function Yc() {
  const t = {
    get(s) {
      return br(this, s);
    },
    get size() {
      return Or(this);
    },
    has: xr,
    add: ho,
    set: _o,
    delete: mo,
    clear: go,
    forEach: Nr(!1, !1)
  }, e = {
    get(s) {
      return br(this, s, !1, !0);
    },
    get size() {
      return Or(this);
    },
    has: xr,
    add: ho,
    set: _o,
    delete: mo,
    clear: go,
    forEach: Nr(!1, !0)
  }, n = {
    get(s) {
      return br(this, s, !0);
    },
    get size() {
      return Or(this, !0);
    },
    has(s) {
      return xr.call(this, s, !0);
    },
    add: Pt(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Pt(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Pt(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Pt(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Nr(!0, !1)
  }, r = {
    get(s) {
      return br(this, s, !0, !0);
    },
    get size() {
      return Or(this, !0);
    },
    has(s) {
      return xr.call(this, s, !0);
    },
    add: Pt(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: Pt(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: Pt(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: Pt(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Nr(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = wr(s, !1, !1), n[s] = wr(s, !0, !1), e[s] = wr(s, !1, !0), r[s] = wr(s, !0, !0);
  }), [
    t,
    n,
    e,
    r
  ];
}
const [qc, Xc, Gc, Jc] = /* @__PURE__ */ Yc();
function li(t, e) {
  const n = e ? t ? Jc : Gc : t ? Xc : qc;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(X(n, i) && i in r ? n : r, i, s);
}
const Zc = {
  get: /* @__PURE__ */ li(!1, !1)
}, Qc = {
  get: /* @__PURE__ */ li(!1, !0)
}, eu = {
  get: /* @__PURE__ */ li(!0, !1)
}, tu = {
  get: /* @__PURE__ */ li(!0, !0)
};
function pl(t, e, n) {
  const r = Y(n);
  if (r !== n && e.call(t, r)) {
    const i = Ts(t);
    console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const hl = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap(), ml = /* @__PURE__ */ new WeakMap(), gl = /* @__PURE__ */ new WeakMap();
function nu(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ru(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : nu(Ts(t));
}
function Ss(t) {
  return Ut(t) ? t : ai(t, !1, fl, Zc, hl);
}
function iu(t) {
  return ai(t, !1, Kc, Qc, _l);
}
function vl(t) {
  return ai(t, !0, dl, eu, ml);
}
function On(t) {
  return ai(t, !0, Wc, tu, gl);
}
function ai(t, e, n, r, i) {
  if (!oe(t))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const o = ru(t);
  if (o === 0)
    return t;
  const l = new Proxy(t, o === 2 ? r : n);
  return i.set(t, l), l;
}
function sn(t) {
  return Ut(t) ? sn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Ut(t) {
  return !!(t && t.__v_isReadonly);
}
function Ur(t) {
  return !!(t && t.__v_isShallow);
}
function Hi(t) {
  return sn(t) || Ut(t);
}
function Y(t) {
  const e = t && t.__v_raw;
  return e ? Y(e) : t;
}
function yl(t) {
  return jr(t, "__v_skip", !0), t;
}
const rr = (t) => oe(t) ? Ss(t) : t, Vs = (t) => oe(t) ? vl(t) : t;
function El(t) {
  Ft && Pe && (t = Y(t), process.env.NODE_ENV !== "production" ? zi(t.dep || (t.dep = nr()), {
    target: t,
    type: "get",
    key: "value"
  }) : zi(t.dep || (t.dep = nr())));
}
function bl(t, e) {
  t = Y(t);
  const n = t.dep;
  n && (process.env.NODE_ENV !== "production" ? xn(n, {
    target: t,
    type: "set",
    key: "value",
    newValue: e
  }) : xn(n));
}
function ve(t) {
  return !!(t && t.__v_isRef === !0);
}
function su(t) {
  return ou(t, !1);
}
function ou(t, e) {
  return ve(t) ? t : new lu(t, e);
}
class lu {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : Y(e), this._value = n ? e : rr(e);
  }
  get value() {
    return El(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Ur(e) || Ut(e);
    e = n ? e : Y(e), tr(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : rr(e), bl(this, e));
  }
}
function Ms(t) {
  return ve(t) ? t.value : t;
}
const au = {
  get: (t, e, n) => Ms(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return ve(i) && !ve(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function xl(t) {
  return sn(t) ? t : new Proxy(t, au);
}
var Ol;
class cu {
  constructor(e, n, r, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ol] = !1, this._dirty = !0, this.effect = new Cs(e, () => {
      this._dirty || (this._dirty = !0, bl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = Y(this);
    return El(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
Ol = "__v_isReadonly";
function uu(t, e, n = !1) {
  let r, i;
  const s = W(t);
  s ? (r = t, i = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : xe) : (r = t.get, i = t.set);
  const o = new cu(r, i, s || !i, n);
  return process.env.NODE_ENV !== "production" && e && !n && (o.effect.onTrack = e.onTrack, o.effect.onTrigger = e.onTrigger), o;
}
const on = [];
function Pr(t) {
  on.push(t);
}
function Sr() {
  on.pop();
}
function M(t, ...e) {
  if (process.env.NODE_ENV === "production")
    return;
  _n();
  const n = on.length ? on[on.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = fu();
  if (r)
    Nt(r, n, 11, [
      t + e.join(""),
      n && n.proxy,
      i.map(({ vnode: s }) => `at <${_i(n, s.type)}>`).join(`
`),
      i
    ]);
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...du(i)), console.warn(...s);
  }
  mn();
}
function fu() {
  let t = on[on.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function du(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...pu(n));
  }), e;
}
function pu({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${_i(t.component, t.type, r)}`, s = ">" + n;
  return t.props ? [i, ...hu(t.props), s] : [i + s];
}
function hu(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...Nl(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function Nl(t, e, n) {
  return he(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : ve(e) ? (e = Nl(t, Y(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : W(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = Y(e), n ? e : [`${t}=`, e]);
}
const As = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [
    0
    /* ErrorCodes.SETUP_FUNCTION */
  ]: "setup function",
  [
    1
    /* ErrorCodes.RENDER_FUNCTION */
  ]: "render function",
  [
    2
    /* ErrorCodes.WATCH_GETTER */
  ]: "watcher getter",
  [
    3
    /* ErrorCodes.WATCH_CALLBACK */
  ]: "watcher callback",
  [
    4
    /* ErrorCodes.WATCH_CLEANUP */
  ]: "watcher cleanup function",
  [
    5
    /* ErrorCodes.NATIVE_EVENT_HANDLER */
  ]: "native event handler",
  [
    6
    /* ErrorCodes.COMPONENT_EVENT_HANDLER */
  ]: "component event handler",
  [
    7
    /* ErrorCodes.VNODE_HOOK */
  ]: "vnode hook",
  [
    8
    /* ErrorCodes.DIRECTIVE_HOOK */
  ]: "directive hook",
  [
    9
    /* ErrorCodes.TRANSITION_HOOK */
  ]: "transition hook",
  [
    10
    /* ErrorCodes.APP_ERROR_HANDLER */
  ]: "app errorHandler",
  [
    11
    /* ErrorCodes.APP_WARN_HANDLER */
  ]: "app warnHandler",
  [
    12
    /* ErrorCodes.FUNCTION_REF */
  ]: "ref function",
  [
    13
    /* ErrorCodes.ASYNC_COMPONENT_LOADER */
  ]: "async component loader",
  [
    14
    /* ErrorCodes.SCHEDULER */
  ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Nt(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t();
  } catch (s) {
    ci(s, e, n);
  }
  return i;
}
function Ze(t, e, n, r) {
  if (W(t)) {
    const s = Nt(t, e, n, r);
    return s && ws(s) && s.catch((o) => {
      ci(o, e, n);
    }), s;
  }
  const i = [];
  for (let s = 0; s < t.length; s++)
    i.push(Ze(t[s], e, n, r));
  return i;
}
function ci(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy, l = process.env.NODE_ENV !== "production" ? As[n] : n;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](t, o, l) === !1)
            return;
      }
      s = s.parent;
    }
    const a = e.appContext.config.errorHandler;
    if (a) {
      Nt(a, null, 10, [t, o, l]);
      return;
    }
  }
  _u(t, n, i, r);
}
function _u(t, e, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const i = As[e];
    if (n && Pr(n), M(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Sr(), r)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let ir = !1, Ki = !1;
const Oe = [];
let ft = 0;
const Pn = [];
let ut = null, St = 0;
const wl = /* @__PURE__ */ Promise.resolve();
let ks = null;
const mu = 100;
function gu(t) {
  const e = ks || wl;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function vu(t) {
  let e = ft + 1, n = Oe.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    sr(Oe[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function ui(t) {
  (!Oe.length || !Oe.includes(t, ir && t.allowRecurse ? ft + 1 : ft)) && (t.id == null ? Oe.push(t) : Oe.splice(vu(t.id), 0, t), Tl());
}
function Tl() {
  !ir && !Ki && (Ki = !0, ks = wl.then(Pl));
}
function yu(t) {
  const e = Oe.indexOf(t);
  e > ft && Oe.splice(e, 1);
}
function Dl(t) {
  H(t) ? Pn.push(...t) : (!ut || !ut.includes(t, t.allowRecurse ? St + 1 : St)) && Pn.push(t), Tl();
}
function vo(t, e = ir ? ft + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); e < Oe.length; e++) {
    const n = Oe[e];
    if (n && n.pre) {
      if (process.env.NODE_ENV !== "production" && Rs(t, n))
        continue;
      Oe.splice(e, 1), e--, n();
    }
  }
}
function Cl(t) {
  if (Pn.length) {
    const e = [...new Set(Pn)];
    if (Pn.length = 0, ut) {
      ut.push(...e);
      return;
    }
    for (ut = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), ut.sort((n, r) => sr(n) - sr(r)), St = 0; St < ut.length; St++)
      process.env.NODE_ENV !== "production" && Rs(t, ut[St]) || ut[St]();
    ut = null, St = 0;
  }
}
const sr = (t) => t.id == null ? 1 / 0 : t.id, Eu = (t, e) => {
  const n = sr(t) - sr(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function Pl(t) {
  Ki = !1, ir = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Oe.sort(Eu);
  const e = process.env.NODE_ENV !== "production" ? (n) => Rs(t, n) : xe;
  try {
    for (ft = 0; ft < Oe.length; ft++) {
      const n = Oe[ft];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(n))
          continue;
        Nt(
          n,
          null,
          14
          /* ErrorCodes.SCHEDULER */
        );
      }
    }
  } finally {
    ft = 0, Oe.length = 0, Cl(t), ir = !1, ks = null, (Oe.length || Pn.length) && Pl(t);
  }
}
function Rs(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > mu) {
      const r = e.ownerInstance, i = r && aa(r.type);
      return M(`Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      t.set(e, n + 1);
  }
}
let ln = !1;
const bn = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (sl().__VUE_HMR_RUNTIME__ = {
  createRecord: bi(Sl),
  rerender: bi(Ou),
  reload: bi(Nu)
});
const pn = /* @__PURE__ */ new Map();
function bu(t) {
  const e = t.type.__hmrId;
  let n = pn.get(e);
  n || (Sl(e, t.type), n = pn.get(e)), n.instances.add(t);
}
function xu(t) {
  pn.get(t.type.__hmrId).instances.delete(t);
}
function Sl(t, e) {
  return pn.has(t) ? !1 : (pn.set(t, {
    initialDef: Gn(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Gn(t) {
  return ca(t) ? t.__vccOpts : t;
}
function Ou(t, e) {
  const n = pn.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, Gn(r.type).render = e), r.renderCache = [], ln = !0, r.update(), ln = !1;
  }));
}
function Nu(t, e) {
  const n = pn.get(t);
  if (!n)
    return;
  e = Gn(e), yo(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = Gn(i.type);
    bn.has(s) || (s !== n.initialDef && yo(s, e), bn.add(s)), i.appContext.optionsCache.delete(i.type), i.ceReload ? (bn.add(s), i.ceReload(e.styles), bn.delete(s)) : i.parent ? ui(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Dl(() => {
    for (const i of r)
      bn.delete(Gn(i.type));
  });
}
function yo(t, e) {
  pe(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function bi(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let dt, Yn = [], Wi = !1;
function mr(t, ...e) {
  dt ? dt.emit(t, ...e) : Wi || Yn.push({ event: t, args: e });
}
function Vl(t, e) {
  var n, r;
  dt = t, dt ? (dt.enabled = !0, Yn.forEach(({ event: i, args: s }) => dt.emit(i, ...s)), Yn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Vl(s, e);
  }), setTimeout(() => {
    dt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Wi = !0, Yn = []);
  }, 3e3)) : (Wi = !0, Yn = []);
}
function wu(t, e) {
  mr("app:init", t, e, {
    Fragment: qe,
    Text: vr,
    Comment: Se,
    Static: kr
  });
}
function Tu(t) {
  mr("app:unmount", t);
}
const Du = /* @__PURE__ */ Fs(
  "component:added"
  /* DevtoolsHooks.COMPONENT_ADDED */
), Ml = /* @__PURE__ */ Fs(
  "component:updated"
  /* DevtoolsHooks.COMPONENT_UPDATED */
), Cu = /* @__PURE__ */ Fs(
  "component:removed"
  /* DevtoolsHooks.COMPONENT_REMOVED */
), Pu = (t) => {
  dt && typeof dt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !dt.cleanupBuffer(t) && Cu(t);
};
function Fs(t) {
  return (e) => {
    mr(t, e.appContext.app, e.uid, e.parent ? e.parent.uid : void 0, e);
  };
}
const Su = /* @__PURE__ */ Al(
  "perf:start"
  /* DevtoolsHooks.PERFORMANCE_START */
), Vu = /* @__PURE__ */ Al(
  "perf:end"
  /* DevtoolsHooks.PERFORMANCE_END */
);
function Al(t) {
  return (e, n, r) => {
    mr(t, e.appContext.app, e.uid, e, n, r);
  };
}
function Mu(t, e, n) {
  mr("component:emit", t.appContext.app, t, e, n);
}
function Au(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || ie;
  if (process.env.NODE_ENV !== "production") {
    const { emitsOptions: u, propsOptions: [f] } = t;
    if (u)
      if (!(e in u))
        (!f || !(Jt(e) in f)) && M(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Jt(e)}" prop.`);
      else {
        const d = u[e];
        W(d) && (d(...n) || M(`Invalid event arguments: event validation failed for event "${e}".`));
      }
  }
  let i = n;
  const s = e.startsWith("update:"), o = s && e.slice(7);
  if (o && o in r) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`, { number: f, trim: d } = r[u] || ie;
    d && (i = n.map((_) => he(_) ? _.trim() : _)), f && (i = n.map(Dc));
  }
  if (process.env.NODE_ENV !== "production" && Mu(t, e, i), process.env.NODE_ENV !== "production") {
    const u = e.toLowerCase();
    u !== e && r[Jt(u)] && M(`Event "${u}" is emitted in component ${_i(t, t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Bt(e)}" instead of "${e}".`);
  }
  let l, a = r[l = Jt(e)] || // also try camelCase event handler (#2249)
  r[l = Jt(An(e))];
  !a && s && (a = r[l = Jt(Bt(e))]), a && Ze(a, t, 6, i);
  const c = r[l + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[l])
      return;
    t.emitted[l] = !0, Ze(c, t, 6, i);
  }
}
function kl(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let o = {}, l = !1;
  if (!W(t)) {
    const a = (c) => {
      const u = kl(c, e, !0);
      u && (l = !0, pe(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a);
  }
  return !s && !l ? (oe(t) && r.set(t, null), null) : (H(s) ? s.forEach((a) => o[a] = null) : pe(o, s), oe(t) && r.set(t, o), o);
}
function fi(t, e) {
  return !t || !_r(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), X(t, e[0].toLowerCase() + e.slice(1)) || X(t, Bt(e)) || X(t, e));
}
let je = null, di = null;
function zr(t) {
  const e = je;
  return je = t, di = t && t.type.__scopeId || null, e;
}
function ku(t) {
  di = t;
}
function Ru() {
  di = null;
}
function Fu(t, e = je, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && So(-1);
    const s = zr(e);
    let o;
    try {
      o = t(...i);
    } finally {
      zr(s), r._d && So(1);
    }
    return process.env.NODE_ENV !== "production" && Ml(e), o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Yi = !1;
function Hr() {
  Yi = !0;
}
function xi(t) {
  const { type: e, vnode: n, proxy: r, withProxy: i, props: s, propsOptions: [o], slots: l, attrs: a, emit: c, render: u, renderCache: f, data: d, setupState: _, ctx: g, inheritAttrs: h } = t;
  let v, b;
  const x = zr(t);
  process.env.NODE_ENV !== "production" && (Yi = !1);
  try {
    if (n.shapeFlag & 4) {
      const O = i || r;
      v = st(u.call(O, O, f, s, _, d, g)), b = a;
    } else {
      const O = e;
      process.env.NODE_ENV !== "production" && a === s && Hr(), v = st(O.length > 1 ? O(s, process.env.NODE_ENV !== "production" ? {
        get attrs() {
          return Hr(), a;
        },
        slots: l,
        emit: c
      } : { attrs: a, slots: l, emit: c }) : O(
        s,
        null
        /* we know it doesn't need it */
      )), b = e.props ? a : $u(a);
    }
  } catch (O) {
    Jn.length = 0, ci(
      O,
      t,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), v = It(Se);
  }
  let N = v, E;
  if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && ([N, E] = Iu(v)), b && h !== !1) {
    const O = Object.keys(b), { shapeFlag: R } = N;
    if (O.length) {
      if (R & 7)
        o && O.some(Br) && (b = Lu(b, o)), N = _t(N, b);
      else if (process.env.NODE_ENV !== "production" && !Yi && N.type !== Se) {
        const k = Object.keys(a), w = [], T = [];
        for (let L = 0, z = k.length; L < z; L++) {
          const q = k[L];
          _r(q) ? Br(q) || w.push(q[2].toLowerCase() + q.slice(3)) : T.push(q);
        }
        T.length && M(`Extraneous non-props attributes (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), w.length && M(`Extraneous non-emits event listeners (${w.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Eo(N) && M("Runtime directive used on component with non-element root node. The directives will not function as intended."), N = _t(N), N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Eo(N) && M("Component inside <Transition> renders non-element root node that cannot be animated."), N.transition = n.transition), process.env.NODE_ENV !== "production" && E ? E(N) : v = N, zr(x), v;
}
const Iu = (t) => {
  const e = t.children, n = t.dynamicChildren, r = Rl(e);
  if (!r)
    return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, o = (l) => {
    e[i] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (t.dynamicChildren = [...n, l]));
  };
  return [st(r), o];
};
function Rl(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Bs(r)) {
      if (r.type !== Se || r.children === "v-if") {
        if (e)
          return;
        e = r;
      }
    } else
      return;
  }
  return e;
}
const $u = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || _r(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Lu = (t, e) => {
  const n = {};
  for (const r in t)
    (!Br(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, Eo = (t) => t.shapeFlag & 7 || t.type === Se;
function Bu(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: o, children: l, patchFlag: a } = e, c = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (i || l) && ln || e.dirs || e.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? bo(r, o, c) : !!o;
    if (a & 8) {
      const u = e.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        if (o[d] !== r[d] && !fi(c, d))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? bo(r, o, c) : !0 : !!o;
  return !1;
}
function bo(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !fi(n, s))
      return !0;
  }
  return !1;
}
function ju({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const Uu = (t) => t.__isSuspense;
function zu(t, e) {
  e && e.pendingBranch ? H(t) ? e.effects.push(...t) : e.effects.push(t) : Dl(t);
}
function Hu(t, e) {
  if (!de)
    process.env.NODE_ENV !== "production" && M("provide() can only be used inside setup().");
  else {
    let n = de.provides;
    const r = de.parent && de.parent.provides;
    r === n && (n = de.provides = Object.create(r)), n[t] = e;
  }
}
function Vr(t, e, n = !1) {
  const r = de || je;
  if (r) {
    const i = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && W(e) ? e.call(r.proxy) : e;
    process.env.NODE_ENV !== "production" && M(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
const Tr = {};
function Oi(t, e, n) {
  return process.env.NODE_ENV !== "production" && !W(e) && M("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Fl(t, e, n);
}
function Fl(t, e, { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: o } = ie) {
  process.env.NODE_ENV !== "production" && !e && (n !== void 0 && M('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && M('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (E) => {
    M("Invalid watch source: ", E, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, a = Sc() === (de == null ? void 0 : de.scope) ? de : null;
  let c, u = !1, f = !1;
  if (ve(t) ? (c = () => t.value, u = Ur(t)) : sn(t) ? (c = () => t, r = !0) : H(t) ? (f = !0, u = t.some((E) => sn(E) || Ur(E)), c = () => t.map((E) => {
    if (ve(E))
      return E.value;
    if (sn(E))
      return Nn(E);
    if (W(E))
      return Nt(
        E,
        a,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
    process.env.NODE_ENV !== "production" && l(E);
  })) : W(t) ? e ? c = () => Nt(
    t,
    a,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : c = () => {
    if (!(a && a.isUnmounted))
      return d && d(), Ze(t, a, 3, [_]);
  } : (c = xe, process.env.NODE_ENV !== "production" && l(t)), e && r) {
    const E = c;
    c = () => Nn(E());
  }
  let d, _ = (E) => {
    d = x.onStop = () => {
      Nt(
        E,
        a,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, g;
  if (ar)
    if (_ = xe, e ? n && Ze(e, a, 3, [
      c(),
      f ? [] : void 0,
      _
    ]) : c(), i === "sync") {
      const E = Zf();
      g = E.__watcherHandles || (E.__watcherHandles = []);
    } else
      return xe;
  let h = f ? new Array(t.length).fill(Tr) : Tr;
  const v = () => {
    if (x.active)
      if (e) {
        const E = x.run();
        (r || u || (f ? E.some((O, R) => tr(O, h[R])) : tr(E, h))) && (d && d(), Ze(e, a, 3, [
          E,
          // pass undefined as the old value when it's changed for the first time
          h === Tr ? void 0 : f && h[0] === Tr ? [] : h,
          _
        ]), h = E);
      } else
        x.run();
  };
  v.allowRecurse = !!e;
  let b;
  i === "sync" ? b = v : i === "post" ? b = () => Ae(v, a && a.suspense) : (v.pre = !0, a && (v.id = a.uid), b = () => ui(v));
  const x = new Cs(c, b);
  process.env.NODE_ENV !== "production" && (x.onTrack = s, x.onTrigger = o), e ? n ? v() : h = x.run() : i === "post" ? Ae(x.run.bind(x), a && a.suspense) : x.run();
  const N = () => {
    x.stop(), a && a.scope && Os(a.scope.effects, x);
  };
  return g && g.push(N), N;
}
function Ku(t, e, n) {
  const r = this.proxy, i = he(t) ? t.includes(".") ? Il(r, t) : () => r[t] : t.bind(r, r);
  let s;
  W(e) ? s = e : (s = e.handler, n = e);
  const o = de;
  kn(this);
  const l = Fl(i, s.bind(r), n);
  return o ? kn(o) : cn(), l;
}
function Il(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function Nn(t, e) {
  if (!oe(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), ve(t))
    Nn(t.value, e);
  else if (H(t))
    for (let n = 0; n < t.length; n++)
      Nn(t[n], e);
  else if (bc(t) || Cn(t))
    t.forEach((n) => {
      Nn(n, e);
    });
  else if (Oc(t))
    for (const n in t)
      Nn(t[n], e);
  return t;
}
function Wu() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ul(() => {
    t.isMounted = !0;
  }), zl(() => {
    t.isUnmounting = !0;
  }), t;
}
const Ke = [Function, Array], Yu = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: Ke,
    onEnter: Ke,
    onAfterEnter: Ke,
    onEnterCancelled: Ke,
    // leave
    onBeforeLeave: Ke,
    onLeave: Ke,
    onAfterLeave: Ke,
    onLeaveCancelled: Ke,
    // appear
    onBeforeAppear: Ke,
    onAppear: Ke,
    onAfterAppear: Ke,
    onAppearCancelled: Ke
  },
  setup(t, { slots: e }) {
    const n = zf(), r = Wu();
    let i;
    return () => {
      const s = e.default && Ll(e.default(), !0);
      if (!s || !s.length)
        return;
      let o = s[0];
      if (s.length > 1) {
        let h = !1;
        for (const v of s)
          if (v.type !== Se) {
            if (process.env.NODE_ENV !== "production" && h) {
              M("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (o = v, h = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const l = Y(t), { mode: a } = l;
      if (process.env.NODE_ENV !== "production" && a && a !== "in-out" && a !== "out-in" && a !== "default" && M(`invalid <transition> mode: ${a}`), r.isLeaving)
        return Ni(o);
      const c = xo(o);
      if (!c)
        return Ni(o);
      const u = qi(c, l, r, n);
      Xi(c, u);
      const f = n.subTree, d = f && xo(f);
      let _ = !1;
      const { getTransitionKey: g } = c.type;
      if (g) {
        const h = g();
        i === void 0 ? i = h : h !== i && (i = h, _ = !0);
      }
      if (d && d.type !== Se && (!en(c, d) || _)) {
        const h = qi(d, l, r, n);
        if (Xi(d, h), a === "out-in")
          return r.isLeaving = !0, h.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Ni(o);
        a === "in-out" && c.type !== Se && (h.delayLeave = (v, b, x) => {
          const N = $l(r, d);
          N[String(d.key)] = d, v._leaveCb = () => {
            b(), v._leaveCb = void 0, delete u.delayedLeave;
          }, u.delayedLeave = x;
        });
      }
      return o;
    };
  }
}, qu = Yu;
function $l(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(e.type, r)), r;
}
function qi(t, e, n, r) {
  const { appear: i, mode: s, persisted: o = !1, onBeforeEnter: l, onEnter: a, onAfterEnter: c, onEnterCancelled: u, onBeforeLeave: f, onLeave: d, onAfterLeave: _, onLeaveCancelled: g, onBeforeAppear: h, onAppear: v, onAfterAppear: b, onAppearCancelled: x } = e, N = String(t.key), E = $l(n, t), O = (w, T) => {
    w && Ze(w, r, 9, T);
  }, R = (w, T) => {
    const L = T[1];
    O(w, T), H(w) ? w.every((z) => z.length <= 1) && L() : w.length <= 1 && L();
  }, k = {
    mode: s,
    persisted: o,
    beforeEnter(w) {
      let T = l;
      if (!n.isMounted)
        if (i)
          T = h || l;
        else
          return;
      w._leaveCb && w._leaveCb(
        !0
        /* cancelled */
      );
      const L = E[N];
      L && en(t, L) && L.el._leaveCb && L.el._leaveCb(), O(T, [w]);
    },
    enter(w) {
      let T = a, L = c, z = u;
      if (!n.isMounted)
        if (i)
          T = v || a, L = b || c, z = x || u;
        else
          return;
      let q = !1;
      const ee = w._enterCb = (le) => {
        q || (q = !0, le ? O(z, [w]) : O(L, [w]), k.delayedLeave && k.delayedLeave(), w._enterCb = void 0);
      };
      T ? R(T, [w, ee]) : ee();
    },
    leave(w, T) {
      const L = String(t.key);
      if (w._enterCb && w._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      O(f, [w]);
      let z = !1;
      const q = w._leaveCb = (ee) => {
        z || (z = !0, T(), ee ? O(g, [w]) : O(_, [w]), w._leaveCb = void 0, E[L] === t && delete E[L]);
      };
      E[L] = t, d ? R(d, [w, q]) : q();
    },
    clone(w) {
      return qi(w, e, n, r);
    }
  };
  return k;
}
function Ni(t) {
  if (gr(t))
    return t = _t(t), t.children = null, t;
}
function xo(t) {
  return gr(t) ? t.children ? t.children[0] : void 0 : t;
}
function Xi(t, e) {
  t.shapeFlag & 6 && t.component ? Xi(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Ll(t, e = !1, n) {
  let r = [], i = 0;
  for (let s = 0; s < t.length; s++) {
    let o = t[s];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === qe ? (o.patchFlag & 128 && i++, r = r.concat(Ll(o.children, e, l))) : (e || o.type !== Se) && r.push(l != null ? _t(o, { key: l }) : o);
  }
  if (i > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
function Bl(t) {
  return W(t) ? { setup: t, name: t.name } : t;
}
const Mr = (t) => !!t.type.__asyncLoader, gr = (t) => t.type.__isKeepAlive;
function Xu(t, e) {
  jl(t, "a", e);
}
function Gu(t, e) {
  jl(t, "da", e);
}
function jl(t, e, n = de) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (pi(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      gr(i.parent.vnode) && Ju(r, e, n, i), i = i.parent;
  }
}
function Ju(t, e, n, r) {
  const i = pi(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Hl(() => {
    Os(r[e], i);
  }, n);
}
function pi(t, e, n = de, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      _n(), kn(n);
      const l = Ze(e, n, t, o);
      return cn(), mn(), l;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const i = Jt(As[t].replace(/ hook$/, ""));
    M(`${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const Ct = (t) => (e, n = de) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!ar || t === "sp") && pi(t, (...r) => e(...r), n)
), Zu = Ct(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), Ul = Ct(
  "m"
  /* LifecycleHooks.MOUNTED */
), Qu = Ct(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), ef = Ct(
  "u"
  /* LifecycleHooks.UPDATED */
), zl = Ct(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), Hl = Ct(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), tf = Ct(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), nf = Ct(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), rf = Ct(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function sf(t, e = de) {
  pi("ec", t, e);
}
function Kl(t) {
  Nc(t) && M("Do not use built-in directive ids as custom directive id: " + t);
}
function Yt(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    s && (l.oldValue = s[o].value);
    let a = l.dir[r];
    a && (_n(), Ze(a, n, 8, [
      t.el,
      l,
      t,
      e
    ]), mn());
  }
}
const of = Symbol();
function lf(t, e, n, r) {
  let i;
  const s = n && n[r];
  if (H(t) || he(t)) {
    i = new Array(t.length);
    for (let o = 0, l = t.length; o < l; o++)
      i[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(t) && M(`The v-for range expect an integer value but got ${t}.`), i = new Array(t);
    for (let o = 0; o < t; o++)
      i[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (oe(t))
    if (t[Symbol.iterator])
      i = Array.from(t, (o, l) => e(o, l, void 0, s && s[l]));
    else {
      const o = Object.keys(t);
      i = new Array(o.length);
      for (let l = 0, a = o.length; l < a; l++) {
        const c = o[l];
        i[l] = e(t[c], c, l, s && s[l]);
      }
    }
  else
    i = [];
  return n && (n[r] = i), i;
}
const Gi = (t) => t ? sa(t) ? Us(t) || t.proxy : Gi(t.parent) : null, an = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => process.env.NODE_ENV !== "production" ? On(t.props) : t.props,
    $attrs: (t) => process.env.NODE_ENV !== "production" ? On(t.attrs) : t.attrs,
    $slots: (t) => process.env.NODE_ENV !== "production" ? On(t.slots) : t.slots,
    $refs: (t) => process.env.NODE_ENV !== "production" ? On(t.refs) : t.refs,
    $parent: (t) => Gi(t.parent),
    $root: (t) => Gi(t.root),
    $emit: (t) => t.emit,
    $options: (t) => $s(t),
    $forceUpdate: (t) => t.f || (t.f = () => ui(t.update)),
    $nextTick: (t) => t.n || (t.n = gu.bind(t.proxy)),
    $watch: (t) => Ku.bind(t)
  })
), Is = (t) => t === "_" || t === "$", wi = (t, e) => t !== ie && !t.__isScriptSetup && X(t, e), Wl = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: l, appContext: a } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let c;
    if (e[0] !== "$") {
      const _ = o[e];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (wi(r, e))
          return o[e] = 1, r[e];
        if (i !== ie && X(i, e))
          return o[e] = 2, i[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = t.propsOptions[0]) && X(c, e)
        )
          return o[e] = 3, s[e];
        if (n !== ie && X(n, e))
          return o[e] = 4, n[e];
        Ji && (o[e] = 0);
      }
    }
    const u = an[e];
    let f, d;
    if (u)
      return e === "$attrs" && (Ve(t, "get", e), process.env.NODE_ENV !== "production" && Hr()), u(t);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[e])
    )
      return f;
    if (n !== ie && X(n, e))
      return o[e] = 4, n[e];
    if (
      // global properties
      d = a.config.globalProperties, X(d, e)
    )
      return d[e];
    process.env.NODE_ENV !== "production" && je && (!he(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (i !== ie && Is(e[0]) && X(i, e) ? M(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : t === je && M(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return wi(i, e) ? (i[e] = n, !0) : process.env.NODE_ENV !== "production" && i.__isScriptSetup && X(i, e) ? (M(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== ie && X(r, e) ? (r[e] = n, !0) : X(t.props, e) ? (process.env.NODE_ENV !== "production" && M(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && M(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[e] = n, !0);
  },
  has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s } }, o) {
    let l;
    return !!n[o] || t !== ie && X(t, o) || wi(e, o) || (l = s[0]) && X(l, o) || X(r, o) || X(an, o) || X(i.config.globalProperties, o);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : X(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
process.env.NODE_ENV !== "production" && (Wl.ownKeys = (t) => (M("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(t)));
function af(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(an).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => an[n](t),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: xe
    });
  }), e;
}
function cf(t) {
  const { ctx: e, propsOptions: [n] } = t;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r],
      set: xe
    });
  });
}
function uf(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(Y(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Is(r[0])) {
        M(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(e, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: xe
      });
    }
  });
}
function ff() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? M(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let Ji = !0;
function df(t) {
  const e = $s(t), n = t.proxy, r = t.ctx;
  Ji = !1, e.beforeCreate && Oo(
    e.beforeCreate,
    t,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: d,
    beforeUpdate: _,
    updated: g,
    activated: h,
    deactivated: v,
    beforeDestroy: b,
    beforeUnmount: x,
    destroyed: N,
    unmounted: E,
    render: O,
    renderTracked: R,
    renderTriggered: k,
    errorCaptured: w,
    serverPrefetch: T,
    // public API
    expose: L,
    inheritAttrs: z,
    // assets
    components: q,
    directives: ee,
    filters: le
  } = e, Q = process.env.NODE_ENV !== "production" ? ff() : null;
  if (process.env.NODE_ENV !== "production") {
    const [B] = t.propsOptions;
    if (B)
      for (const U in B)
        Q("Props", U);
  }
  if (c && pf(c, r, Q, t.appContext.config.unwrapInjectedRef), o)
    for (const B in o) {
      const U = o[B];
      W(U) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, B, {
        value: U.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[B] = U.bind(n), process.env.NODE_ENV !== "production" && Q("Methods", B)) : process.env.NODE_ENV !== "production" && M(`Method "${B}" has type "${typeof U}" in the component definition. Did you reference the function correctly?`);
    }
  if (i) {
    process.env.NODE_ENV !== "production" && !W(i) && M("The data option must be a function. Plain object usage is no longer supported.");
    const B = i.call(n, n);
    if (process.env.NODE_ENV !== "production" && ws(B) && M("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !oe(B))
      process.env.NODE_ENV !== "production" && M("data() should return an object.");
    else if (t.data = Ss(B), process.env.NODE_ENV !== "production")
      for (const U in B)
        Q("Data", U), Is(U[0]) || Object.defineProperty(r, U, {
          configurable: !0,
          enumerable: !0,
          get: () => B[U],
          set: xe
        });
  }
  if (Ji = !0, s)
    for (const B in s) {
      const U = s[B], ye = W(U) ? U.bind(n, n) : W(U.get) ? U.get.bind(n, n) : xe;
      process.env.NODE_ENV !== "production" && ye === xe && M(`Computed property "${B}" has no getter.`);
      const et = !W(U) && W(U.set) ? U.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        M(`Write operation failed: computed property "${B}" is readonly.`);
      } : xe, tt = Gf({
        get: ye,
        set: et
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: (Me) => tt.value = Me
      }), process.env.NODE_ENV !== "production" && Q("Computed", B);
    }
  if (l)
    for (const B in l)
      Yl(l[B], r, n, B);
  if (a) {
    const B = W(a) ? a.call(n) : a;
    Reflect.ownKeys(B).forEach((U) => {
      Hu(U, B[U]);
    });
  }
  u && Oo(
    u,
    t,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function Z(B, U) {
    H(U) ? U.forEach((ye) => B(ye.bind(n))) : U && B(U.bind(n));
  }
  if (Z(Zu, f), Z(Ul, d), Z(Qu, _), Z(ef, g), Z(Xu, h), Z(Gu, v), Z(sf, w), Z(rf, R), Z(nf, k), Z(zl, x), Z(Hl, E), Z(tf, T), H(L))
    if (L.length) {
      const B = t.exposed || (t.exposed = {});
      L.forEach((U) => {
        Object.defineProperty(B, U, {
          get: () => n[U],
          set: (ye) => n[U] = ye
        });
      });
    } else
      t.exposed || (t.exposed = {});
  O && t.render === xe && (t.render = O), z != null && (t.inheritAttrs = z), q && (t.components = q), ee && (t.directives = ee);
}
function pf(t, e, n = xe, r = !1) {
  H(t) && (t = Zi(t));
  for (const i in t) {
    const s = t[i];
    let o;
    oe(s) ? "default" in s ? o = Vr(
      s.from || i,
      s.default,
      !0
      /* treat default function as factory */
    ) : o = Vr(s.from || i) : o = Vr(s), ve(o) ? r ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (l) => o.value = l
    }) : (process.env.NODE_ENV !== "production" && M(`injected property "${i}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), e[i] = o) : e[i] = o, process.env.NODE_ENV !== "production" && n("Inject", i);
  }
}
function Oo(t, e, n) {
  Ze(H(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Yl(t, e, n, r) {
  const i = r.includes(".") ? Il(n, r) : () => n[r];
  if (he(t)) {
    const s = e[t];
    W(s) ? Oi(i, s) : process.env.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${t}"`, s);
  } else if (W(t))
    Oi(i, t.bind(n));
  else if (oe(t))
    if (H(t))
      t.forEach((s) => Yl(s, e, n, r));
    else {
      const s = W(t.handler) ? t.handler.bind(n) : e[t.handler];
      W(s) ? Oi(i, s, t) : process.env.NODE_ENV !== "production" && M(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && M(`Invalid watch option: "${r}"`, t);
}
function $s(t) {
  const e = t.type, { mixins: n, extends: r } = e, { mixins: i, optionsCache: s, config: { optionMergeStrategies: o } } = t.appContext, l = s.get(e);
  let a;
  return l ? a = l : !i.length && !n && !r ? a = e : (a = {}, i.length && i.forEach((c) => Kr(a, c, o, !0)), Kr(a, e, o)), oe(e) && s.set(e, a), a;
}
function Kr(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Kr(t, s, n, !0), i && i.forEach((o) => Kr(t, o, n, !0));
  for (const o in e)
    if (r && o === "expose")
      process.env.NODE_ENV !== "production" && M('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const l = hf[o] || n && n[o];
      t[o] = l ? l(t[o], e[o]) : e[o];
    }
  return t;
}
const hf = {
  data: No,
  props: Zt,
  emits: Zt,
  // objects
  methods: Zt,
  computed: Zt,
  // lifecycle
  beforeCreate: Ce,
  created: Ce,
  beforeMount: Ce,
  mounted: Ce,
  beforeUpdate: Ce,
  updated: Ce,
  beforeDestroy: Ce,
  beforeUnmount: Ce,
  destroyed: Ce,
  unmounted: Ce,
  activated: Ce,
  deactivated: Ce,
  errorCaptured: Ce,
  serverPrefetch: Ce,
  // assets
  components: Zt,
  directives: Zt,
  // watch
  watch: mf,
  // provide / inject
  provide: No,
  inject: _f
};
function No(t, e) {
  return e ? t ? function() {
    return pe(W(t) ? t.call(this, this) : t, W(e) ? e.call(this, this) : e);
  } : e : t;
}
function _f(t, e) {
  return Zt(Zi(t), Zi(e));
}
function Zi(t) {
  if (H(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Ce(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Zt(t, e) {
  return t ? pe(pe(/* @__PURE__ */ Object.create(null), t), e) : e;
}
function mf(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = pe(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Ce(t[r], e[r]);
  return n;
}
function gf(t, e, n, r = !1) {
  const i = {}, s = {};
  jr(s, hi, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), ql(t, e, i, s);
  for (const o in t.propsOptions[0])
    o in i || (i[o] = void 0);
  process.env.NODE_ENV !== "production" && Gl(e || {}, i, t), n ? t.props = r ? i : iu(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function vf(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function yf(t, e, n, r) {
  const { props: i, attrs: s, vnode: { patchFlag: o } } = t, l = Y(i), [a] = t.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && vf(t)) && (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let d = u[f];
        if (fi(t.emitsOptions, d))
          continue;
        const _ = e[d];
        if (a)
          if (X(s, d))
            _ !== s[d] && (s[d] = _, c = !0);
          else {
            const g = An(d);
            i[g] = Qi(
              a,
              l,
              g,
              _,
              t,
              !1
              /* isAbsent */
            );
          }
        else
          _ !== s[d] && (s[d] = _, c = !0);
      }
    }
  } else {
    ql(t, e, i, s) && (c = !0);
    let u;
    for (const f in l)
      (!e || // for camelCase
      !X(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Bt(f)) === f || !X(e, u))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[f] = Qi(
        a,
        l,
        f,
        void 0,
        t,
        !0
        /* isAbsent */
      )) : delete i[f]);
    if (s !== l)
      for (const f in s)
        (!e || !X(e, f)) && (delete s[f], c = !0);
  }
  c && wt(t, "set", "$attrs"), process.env.NODE_ENV !== "production" && Gl(e || {}, i, t);
}
function ql(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let o = !1, l;
  if (e)
    for (let a in e) {
      if (Cr(a))
        continue;
      const c = e[a];
      let u;
      i && X(i, u = An(a)) ? !s || !s.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : fi(t.emitsOptions, a) || (!(a in r) || c !== r[a]) && (r[a] = c, o = !0);
    }
  if (s) {
    const a = Y(n), c = l || ie;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      n[f] = Qi(i, a, f, c[f], t, !X(c, f));
    }
  }
  return o;
}
function Qi(t, e, n, r, i, s) {
  const o = t[n];
  if (o != null) {
    const l = X(o, "default");
    if (l && r === void 0) {
      const a = o.default;
      if (o.type !== Function && W(a)) {
        const { propsDefaults: c } = i;
        n in c ? r = c[n] : (kn(i), r = c[n] = a.call(null, e), cn());
      } else
        r = a;
    }
    o[
      0
      /* BooleanFlags.shouldCast */
    ] && (s && !l ? r = !1 : o[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (r === "" || r === Bt(n)) && (r = !0));
  }
  return r;
}
function Xl(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, o = {}, l = [];
  let a = !1;
  if (!W(t)) {
    const u = (f) => {
      a = !0;
      const [d, _] = Xl(f, e, !0);
      pe(o, d), _ && l.push(..._);
    };
    !n && e.mixins.length && e.mixins.forEach(u), t.extends && u(t.extends), t.mixins && t.mixins.forEach(u);
  }
  if (!s && !a)
    return oe(t) && r.set(t, Dn), Dn;
  if (H(s))
    for (let u = 0; u < s.length; u++) {
      process.env.NODE_ENV !== "production" && !he(s[u]) && M("props must be strings when using array syntax.", s[u]);
      const f = An(s[u]);
      wo(f) && (o[f] = ie);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !oe(s) && M("invalid props options", s);
    for (const u in s) {
      const f = An(u);
      if (wo(f)) {
        const d = s[u], _ = o[f] = H(d) || W(d) ? { type: d } : Object.assign({}, d);
        if (_) {
          const g = Do(Boolean, _.type), h = Do(String, _.type);
          _[
            0
            /* BooleanFlags.shouldCast */
          ] = g > -1, _[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = h < 0 || g < h, (g > -1 || X(_, "default")) && l.push(f);
        }
      }
    }
  }
  const c = [o, l];
  return oe(t) && r.set(t, c), c;
}
function wo(t) {
  return t[0] !== "$" ? !0 : (process.env.NODE_ENV !== "production" && M(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function es(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function To(t, e) {
  return es(t) === es(e);
}
function Do(t, e) {
  return H(e) ? e.findIndex((n) => To(n, t)) : W(e) && To(e, t) ? 0 : -1;
}
function Gl(t, e, n) {
  const r = Y(e), i = n.propsOptions[0];
  for (const s in i) {
    let o = i[s];
    o != null && Ef(s, r[s], o, !X(t, s) && !X(t, Bt(s)));
  }
}
function Ef(t, e, n, r) {
  const { type: i, required: s, validator: o } = n;
  if (s && r) {
    M('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !n.required)) {
    if (i != null && i !== !0) {
      let l = !1;
      const a = H(i) ? i : [i], c = [];
      for (let u = 0; u < a.length && !l; u++) {
        const { valid: f, expectedType: d } = xf(e, a[u]);
        c.push(d || ""), l = f;
      }
      if (!l) {
        M(Of(t, e, c));
        return;
      }
    }
    o && !o(e) && M('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const bf = /* @__PURE__ */ Kt("String,Number,Boolean,Function,Symbol,BigInt");
function xf(t, e) {
  let n;
  const r = es(e);
  if (bf(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = oe(t) : r === "Array" ? n = H(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function Of(t, e, n) {
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(ii).join(" | ")}`;
  const i = n[0], s = Ts(e), o = Co(e, i), l = Co(e, s);
  return n.length === 1 && Po(i) && !Nf(i, s) && (r += ` with value ${o}`), r += `, got ${s} `, Po(s) && (r += `with value ${l}.`), r;
}
function Co(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function Po(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function Nf(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const Jl = (t) => t[0] === "_" || t === "$stable", Ls = (t) => H(t) ? t.map(st) : [st(t)], wf = (t, e, n) => {
  if (e._n)
    return e;
  const r = Fu((...i) => (process.env.NODE_ENV !== "production" && de && M(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Ls(e(...i))), n);
  return r._c = !1, r;
}, Zl = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (Jl(i))
      continue;
    const s = t[i];
    if (W(s))
      e[i] = wf(i, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && M(`Non-function value encountered for slot "${i}". Prefer function slots for better performance.`);
      const o = Ls(s);
      e[i] = () => o;
    }
  }
}, Ql = (t, e) => {
  process.env.NODE_ENV !== "production" && !gr(t.vnode) && M("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Ls(e);
  t.slots.default = () => n;
}, Tf = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = Y(e), jr(e, "_", n)) : Zl(e, t.slots = {});
  } else
    t.slots = {}, e && Ql(t, e);
  jr(t.slots, hi, 1);
}, Df = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, o = ie;
  if (r.shapeFlag & 32) {
    const l = e._;
    l ? process.env.NODE_ENV !== "production" && ln ? pe(i, e) : n && l === 1 ? s = !1 : (pe(i, e), !n && l === 1 && delete i._) : (s = !e.$stable, Zl(e, i)), o = e;
  } else
    e && (Ql(t, e), o = { default: 1 });
  if (s)
    for (const l in i)
      !Jl(l) && !(l in o) && delete i[l];
};
function ea() {
  return {
    app: null,
    config: {
      isNativeTag: il,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Cf = 0;
function Pf(t, e) {
  return function(r, i = null) {
    W(r) || (r = Object.assign({}, r)), i != null && !oe(i) && (process.env.NODE_ENV !== "production" && M("root props passed to app.mount() must be an object."), i = null);
    const s = ea(), o = /* @__PURE__ */ new Set();
    let l = !1;
    const a = s.app = {
      _uid: Cf++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Ao,
      get config() {
        return s.config;
      },
      set config(c) {
        process.env.NODE_ENV !== "production" && M("app.config cannot be replaced. Modify individual options instead.");
      },
      use(c, ...u) {
        return o.has(c) ? process.env.NODE_ENV !== "production" && M("Plugin has already been applied to target app.") : c && W(c.install) ? (o.add(c), c.install(a, ...u)) : W(c) ? (o.add(c), c(a, ...u)) : process.env.NODE_ENV !== "production" && M('A plugin must either be a function or an object with an "install" function.'), a;
      },
      mixin(c) {
        return s.mixins.includes(c) ? process.env.NODE_ENV !== "production" && M("Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")) : s.mixins.push(c), a;
      },
      component(c, u) {
        return process.env.NODE_ENV !== "production" && rs(c, s.config), u ? (process.env.NODE_ENV !== "production" && s.components[c] && M(`Component "${c}" has already been registered in target app.`), s.components[c] = u, a) : s.components[c];
      },
      directive(c, u) {
        return process.env.NODE_ENV !== "production" && Kl(c), u ? (process.env.NODE_ENV !== "production" && s.directives[c] && M(`Directive "${c}" has already been registered in target app.`), s.directives[c] = u, a) : s.directives[c];
      },
      mount(c, u, f) {
        if (l)
          process.env.NODE_ENV !== "production" && M("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && M("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const d = It(r, i);
          return d.appContext = s, process.env.NODE_ENV !== "production" && (s.reload = () => {
            t(_t(d), c, f);
          }), u && e ? e(d, c) : t(d, c, f), l = !0, a._container = c, c.__vue_app__ = a, process.env.NODE_ENV !== "production" && (a._instance = d.component, wu(a, Ao)), Us(d.component) || d.component.proxy;
        }
      },
      unmount() {
        l ? (t(null, a._container), process.env.NODE_ENV !== "production" && (a._instance = null, Tu(a)), delete a._container.__vue_app__) : process.env.NODE_ENV !== "production" && M("Cannot unmount an app that is not mounted.");
      },
      provide(c, u) {
        return process.env.NODE_ENV !== "production" && c in s.provides && M(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`), s.provides[c] = u, a;
      }
    };
    return a;
  };
}
function ts(t, e, n, r, i = !1) {
  if (H(t)) {
    t.forEach((d, _) => ts(d, e && (H(e) ? e[_] : e), n, r, i));
    return;
  }
  if (Mr(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? Us(r.component) || r.component.proxy : r.el, o = i ? null : s, { i: l, r: a } = t;
  if (process.env.NODE_ENV !== "production" && !l) {
    M("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const c = e && e.r, u = l.refs === ie ? l.refs = {} : l.refs, f = l.setupState;
  if (c != null && c !== a && (he(c) ? (u[c] = null, X(f, c) && (f[c] = null)) : ve(c) && (c.value = null)), W(a))
    Nt(a, l, 12, [o, u]);
  else {
    const d = he(a), _ = ve(a);
    if (d || _) {
      const g = () => {
        if (t.f) {
          const h = d ? X(f, a) ? f[a] : u[a] : a.value;
          i ? H(h) && Os(h, s) : H(h) ? h.includes(s) || h.push(s) : d ? (u[a] = [s], X(f, a) && (f[a] = u[a])) : (a.value = [s], t.k && (u[t.k] = a.value));
        } else
          d ? (u[a] = o, X(f, a) && (f[a] = o)) : _ ? (a.value = o, t.k && (u[t.k] = o)) : process.env.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
      };
      o ? (g.id = -1, Ae(g, n)) : g();
    } else
      process.env.NODE_ENV !== "production" && M("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let Hn, Mt;
function yt(t, e) {
  t.appContext.config.performance && Wr() && Mt.mark(`vue-${e}-${t.uid}`), process.env.NODE_ENV !== "production" && Su(t, e, Wr() ? Mt.now() : Date.now());
}
function Et(t, e) {
  if (t.appContext.config.performance && Wr()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    Mt.mark(r), Mt.measure(`<${_i(t, t.type)}> ${e}`, n, r), Mt.clearMarks(n), Mt.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && Vu(t, e, Wr() ? Mt.now() : Date.now());
}
function Wr() {
  return Hn !== void 0 || (typeof window < "u" && window.performance ? (Hn = !0, Mt = window.performance) : Hn = !1), Hn;
}
function Sf() {
  const t = [];
  if (process.env.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(`Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const Ae = zu;
function Vf(t) {
  return Mf(t);
}
function Mf(t, e) {
  Sf();
  const n = sl();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Vl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: r, remove: i, patchProp: s, createElement: o, createText: l, createComment: a, setText: c, setElementText: u, parentNode: f, nextSibling: d, setScopeId: _ = xe, insertStaticContent: g } = t, h = (p, m, y, C = null, D = null, V = null, F = !1, S = null, A = process.env.NODE_ENV !== "production" && ln ? !1 : !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !en(p, m) && (C = Er(p), nt(p, D, V, !0), p = null), m.patchFlag === -2 && (A = !1, m.dynamicChildren = null);
    const { type: P, ref: $, shapeFlag: I } = m;
    switch (P) {
      case vr:
        v(p, m, y, C);
        break;
      case Se:
        b(p, m, y, C);
        break;
      case kr:
        p == null ? x(m, y, C, F) : process.env.NODE_ENV !== "production" && N(p, m, y, F);
        break;
      case qe:
        ee(p, m, y, C, D, V, F, S, A);
        break;
      default:
        I & 1 ? R(p, m, y, C, D, V, F, S, A) : I & 6 ? le(p, m, y, C, D, V, F, S, A) : I & 64 || I & 128 ? P.process(p, m, y, C, D, V, F, S, A, vn) : process.env.NODE_ENV !== "production" && M("Invalid VNode type:", P, `(${typeof P})`);
    }
    $ != null && D && ts($, p && p.ref, V, m || p, !m);
  }, v = (p, m, y, C) => {
    if (p == null)
      r(m.el = l(m.children), y, C);
    else {
      const D = m.el = p.el;
      m.children !== p.children && c(D, m.children);
    }
  }, b = (p, m, y, C) => {
    p == null ? r(m.el = a(m.children || ""), y, C) : m.el = p.el;
  }, x = (p, m, y, C) => {
    [p.el, p.anchor] = g(p.children, m, y, C, p.el, p.anchor);
  }, N = (p, m, y, C) => {
    if (m.children !== p.children) {
      const D = d(p.anchor);
      O(p), [m.el, m.anchor] = g(m.children, y, D, C);
    } else
      m.el = p.el, m.anchor = p.anchor;
  }, E = ({ el: p, anchor: m }, y, C) => {
    let D;
    for (; p && p !== m; )
      D = d(p), r(p, y, C), p = D;
    r(m, y, C);
  }, O = ({ el: p, anchor: m }) => {
    let y;
    for (; p && p !== m; )
      y = d(p), i(p), p = y;
    i(m);
  }, R = (p, m, y, C, D, V, F, S, A) => {
    F = F || m.type === "svg", p == null ? k(m, y, C, D, V, F, S, A) : L(p, m, D, V, F, S, A);
  }, k = (p, m, y, C, D, V, F, S) => {
    let A, P;
    const { type: $, props: I, shapeFlag: j, transition: K, dirs: G } = p;
    if (A = p.el = o(p.type, V, I && I.is, I), j & 8 ? u(A, p.children) : j & 16 && T(p.children, A, null, C, D, V && $ !== "foreignObject", F, S), G && Yt(p, null, C, "created"), w(A, p, p.scopeId, F, C), I) {
      for (const te in I)
        te !== "value" && !Cr(te) && s(A, te, null, I[te], V, p.children, C, D, vt);
      "value" in I && s(A, "value", null, I.value), (P = I.onVnodeBeforeMount) && ct(P, C, p);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(A, "__vnode", {
      value: p,
      enumerable: !1
    }), Object.defineProperty(A, "__vueParentComponent", {
      value: C,
      enumerable: !1
    })), G && Yt(p, null, C, "beforeMount");
    const ne = (!D || D && !D.pendingBranch) && K && !K.persisted;
    ne && K.beforeEnter(A), r(A, m, y), ((P = I && I.onVnodeMounted) || ne || G) && Ae(() => {
      P && ct(P, C, p), ne && K.enter(A), G && Yt(p, null, C, "mounted");
    }, D);
  }, w = (p, m, y, C, D) => {
    if (y && _(p, y), C)
      for (let V = 0; V < C.length; V++)
        _(p, C[V]);
    if (D) {
      let V = D.subTree;
      if (process.env.NODE_ENV !== "production" && V.patchFlag > 0 && V.patchFlag & 2048 && (V = Rl(V.children) || V), m === V) {
        const F = D.vnode;
        w(p, F, F.scopeId, F.slotScopeIds, D.parent);
      }
    }
  }, T = (p, m, y, C, D, V, F, S, A = 0) => {
    for (let P = A; P < p.length; P++) {
      const $ = p[P] = S ? Vt(p[P]) : st(p[P]);
      h(null, $, m, y, C, D, V, F, S);
    }
  }, L = (p, m, y, C, D, V, F) => {
    const S = m.el = p.el;
    let { patchFlag: A, dynamicChildren: P, dirs: $ } = m;
    A |= p.patchFlag & 16;
    const I = p.props || ie, j = m.props || ie;
    let K;
    y && qt(y, !1), (K = j.onVnodeBeforeUpdate) && ct(K, y, m, p), $ && Yt(m, p, y, "beforeUpdate"), y && qt(y, !0), process.env.NODE_ENV !== "production" && ln && (A = 0, F = !1, P = null);
    const G = D && m.type !== "foreignObject";
    if (P ? (z(p.dynamicChildren, P, S, y, C, G, V), process.env.NODE_ENV !== "production" && y && y.type.__hmrId && Ar(p, m)) : F || ye(p, m, S, null, y, C, G, V, !1), A > 0) {
      if (A & 16)
        q(S, m, I, j, y, C, D);
      else if (A & 2 && I.class !== j.class && s(S, "class", null, j.class, D), A & 4 && s(S, "style", I.style, j.style, D), A & 8) {
        const ne = m.dynamicProps;
        for (let te = 0; te < ne.length; te++) {
          const _e = ne[te], rt = I[_e], yn = j[_e];
          (yn !== rt || _e === "value") && s(S, _e, rt, yn, D, p.children, y, C, vt);
        }
      }
      A & 1 && p.children !== m.children && u(S, m.children);
    } else
      !F && P == null && q(S, m, I, j, y, C, D);
    ((K = j.onVnodeUpdated) || $) && Ae(() => {
      K && ct(K, y, m, p), $ && Yt(m, p, y, "updated");
    }, C);
  }, z = (p, m, y, C, D, V, F) => {
    for (let S = 0; S < m.length; S++) {
      const A = p[S], P = m[S], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (A.type === qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !en(A, P) || // - In the case of a component, it could contain anything.
        A.shapeFlag & 70) ? f(A.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          y
        )
      );
      h(A, P, $, null, C, D, V, F, !0);
    }
  }, q = (p, m, y, C, D, V, F) => {
    if (y !== C) {
      if (y !== ie)
        for (const S in y)
          !Cr(S) && !(S in C) && s(p, S, y[S], null, F, m.children, D, V, vt);
      for (const S in C) {
        if (Cr(S))
          continue;
        const A = C[S], P = y[S];
        A !== P && S !== "value" && s(p, S, P, A, F, m.children, D, V, vt);
      }
      "value" in C && s(p, "value", y.value, C.value);
    }
  }, ee = (p, m, y, C, D, V, F, S, A) => {
    const P = m.el = p ? p.el : l(""), $ = m.anchor = p ? p.anchor : l("");
    let { patchFlag: I, dynamicChildren: j, slotScopeIds: K } = m;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ln || I & 2048) && (I = 0, A = !1, j = null), K && (S = S ? S.concat(K) : K), p == null ? (r(P, y, C), r($, y, C), T(m.children, y, $, D, V, F, S, A)) : I > 0 && I & 64 && j && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (z(p.dynamicChildren, j, y, D, V, F, S), process.env.NODE_ENV !== "production" && D && D.type.__hmrId ? Ar(p, m) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (m.key != null || D && m === D.subTree) && Ar(
        p,
        m,
        !0
        /* shallow */
      )
    )) : ye(p, m, y, $, D, V, F, S, A);
  }, le = (p, m, y, C, D, V, F, S, A) => {
    m.slotScopeIds = S, p == null ? m.shapeFlag & 512 ? D.ctx.activate(m, y, C, F, A) : Q(m, y, C, D, V, F, A) : Z(p, m, A);
  }, Q = (p, m, y, C, D, V, F) => {
    const S = p.component = Uf(p, C, D);
    if (process.env.NODE_ENV !== "production" && S.type.__hmrId && bu(S), process.env.NODE_ENV !== "production" && (Pr(p), yt(S, "mount")), gr(p) && (S.ctx.renderer = vn), process.env.NODE_ENV !== "production" && yt(S, "init"), Kf(S), process.env.NODE_ENV !== "production" && Et(S, "init"), S.asyncDep) {
      if (D && D.registerDep(S, B), !p.el) {
        const A = S.subTree = It(Se);
        b(null, A, m, y);
      }
      return;
    }
    B(S, p, m, y, D, V, F), process.env.NODE_ENV !== "production" && (Sr(), Et(S, "mount"));
  }, Z = (p, m, y) => {
    const C = m.component = p.component;
    if (Bu(p, m, y))
      if (C.asyncDep && !C.asyncResolved) {
        process.env.NODE_ENV !== "production" && Pr(m), U(C, m, y), process.env.NODE_ENV !== "production" && Sr();
        return;
      } else
        C.next = m, yu(C.update), C.update();
    else
      m.el = p.el, C.vnode = m;
  }, B = (p, m, y, C, D, V, F) => {
    const S = () => {
      if (p.isMounted) {
        let { next: $, bu: I, u: j, parent: K, vnode: G } = p, ne = $, te;
        process.env.NODE_ENV !== "production" && Pr($ || p.vnode), qt(p, !1), $ ? ($.el = G.el, U(p, $, F)) : $ = G, I && zn(I), (te = $.props && $.props.onVnodeBeforeUpdate) && ct(te, K, $, G), qt(p, !0), process.env.NODE_ENV !== "production" && yt(p, "render");
        const _e = xi(p);
        process.env.NODE_ENV !== "production" && Et(p, "render");
        const rt = p.subTree;
        p.subTree = _e, process.env.NODE_ENV !== "production" && yt(p, "patch"), h(
          rt,
          _e,
          // parent may have changed if it's in a teleport
          f(rt.el),
          // anchor may have changed if it's in a fragment
          Er(rt),
          p,
          D,
          V
        ), process.env.NODE_ENV !== "production" && Et(p, "patch"), $.el = _e.el, ne === null && ju(p, _e.el), j && Ae(j, D), (te = $.props && $.props.onVnodeUpdated) && Ae(() => ct(te, K, $, G), D), process.env.NODE_ENV !== "production" && Ml(p), process.env.NODE_ENV !== "production" && Sr();
      } else {
        let $;
        const { el: I, props: j } = m, { bm: K, m: G, parent: ne } = p, te = Mr(m);
        if (qt(p, !1), K && zn(K), !te && ($ = j && j.onVnodeBeforeMount) && ct($, ne, m), qt(p, !0), I && Ei) {
          const _e = () => {
            process.env.NODE_ENV !== "production" && yt(p, "render"), p.subTree = xi(p), process.env.NODE_ENV !== "production" && Et(p, "render"), process.env.NODE_ENV !== "production" && yt(p, "hydrate"), Ei(I, p.subTree, p, D, null), process.env.NODE_ENV !== "production" && Et(p, "hydrate");
          };
          te ? m.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && _e()
          ) : _e();
        } else {
          process.env.NODE_ENV !== "production" && yt(p, "render");
          const _e = p.subTree = xi(p);
          process.env.NODE_ENV !== "production" && Et(p, "render"), process.env.NODE_ENV !== "production" && yt(p, "patch"), h(null, _e, y, C, p, D, V), process.env.NODE_ENV !== "production" && Et(p, "patch"), m.el = _e.el;
        }
        if (G && Ae(G, D), !te && ($ = j && j.onVnodeMounted)) {
          const _e = m;
          Ae(() => ct($, ne, _e), D);
        }
        (m.shapeFlag & 256 || ne && Mr(ne.vnode) && ne.vnode.shapeFlag & 256) && p.a && Ae(p.a, D), p.isMounted = !0, process.env.NODE_ENV !== "production" && Du(p), m = y = C = null;
      }
    }, A = p.effect = new Cs(
      S,
      () => ui(P),
      p.scope
      // track it in component's effect scope
    ), P = p.update = () => A.run();
    P.id = p.uid, qt(p, !0), process.env.NODE_ENV !== "production" && (A.onTrack = p.rtc ? ($) => zn(p.rtc, $) : void 0, A.onTrigger = p.rtg ? ($) => zn(p.rtg, $) : void 0, P.ownerInstance = p), P();
  }, U = (p, m, y) => {
    m.component = p;
    const C = p.vnode.props;
    p.vnode = m, p.next = null, yf(p, m.props, C, y), Df(p, m.children, y), _n(), vo(), mn();
  }, ye = (p, m, y, C, D, V, F, S, A = !1) => {
    const P = p && p.children, $ = p ? p.shapeFlag : 0, I = m.children, { patchFlag: j, shapeFlag: K } = m;
    if (j > 0) {
      if (j & 128) {
        tt(P, I, y, C, D, V, F, S, A);
        return;
      } else if (j & 256) {
        et(P, I, y, C, D, V, F, S, A);
        return;
      }
    }
    K & 8 ? ($ & 16 && vt(P, D, V), I !== P && u(y, I)) : $ & 16 ? K & 16 ? tt(P, I, y, C, D, V, F, S, A) : vt(P, D, V, !0) : ($ & 8 && u(y, ""), K & 16 && T(I, y, C, D, V, F, S, A));
  }, et = (p, m, y, C, D, V, F, S, A) => {
    p = p || Dn, m = m || Dn;
    const P = p.length, $ = m.length, I = Math.min(P, $);
    let j;
    for (j = 0; j < I; j++) {
      const K = m[j] = A ? Vt(m[j]) : st(m[j]);
      h(p[j], K, y, null, D, V, F, S, A);
    }
    P > $ ? vt(p, D, V, !0, !1, I) : T(m, y, C, D, V, F, S, A, I);
  }, tt = (p, m, y, C, D, V, F, S, A) => {
    let P = 0;
    const $ = m.length;
    let I = p.length - 1, j = $ - 1;
    for (; P <= I && P <= j; ) {
      const K = p[P], G = m[P] = A ? Vt(m[P]) : st(m[P]);
      if (en(K, G))
        h(K, G, y, null, D, V, F, S, A);
      else
        break;
      P++;
    }
    for (; P <= I && P <= j; ) {
      const K = p[I], G = m[j] = A ? Vt(m[j]) : st(m[j]);
      if (en(K, G))
        h(K, G, y, null, D, V, F, S, A);
      else
        break;
      I--, j--;
    }
    if (P > I) {
      if (P <= j) {
        const K = j + 1, G = K < $ ? m[K].el : C;
        for (; P <= j; )
          h(null, m[P] = A ? Vt(m[P]) : st(m[P]), y, G, D, V, F, S, A), P++;
      }
    } else if (P > j)
      for (; P <= I; )
        nt(p[P], D, V, !0), P++;
    else {
      const K = P, G = P, ne = /* @__PURE__ */ new Map();
      for (P = G; P <= j; P++) {
        const De = m[P] = A ? Vt(m[P]) : st(m[P]);
        De.key != null && (process.env.NODE_ENV !== "production" && ne.has(De.key) && M("Duplicate keys found during update:", JSON.stringify(De.key), "Make sure keys are unique."), ne.set(De.key, P));
      }
      let te, _e = 0;
      const rt = j - G + 1;
      let yn = !1, oo = 0;
      const Un = new Array(rt);
      for (P = 0; P < rt; P++)
        Un[P] = 0;
      for (P = K; P <= I; P++) {
        const De = p[P];
        if (_e >= rt) {
          nt(De, D, V, !0);
          continue;
        }
        let at;
        if (De.key != null)
          at = ne.get(De.key);
        else
          for (te = G; te <= j; te++)
            if (Un[te - G] === 0 && en(De, m[te])) {
              at = te;
              break;
            }
        at === void 0 ? nt(De, D, V, !0) : (Un[at - G] = P + 1, at >= oo ? oo = at : yn = !0, h(De, m[at], y, null, D, V, F, S, A), _e++);
      }
      const lo = yn ? Af(Un) : Dn;
      for (te = lo.length - 1, P = rt - 1; P >= 0; P--) {
        const De = G + P, at = m[De], ao = De + 1 < $ ? m[De + 1].el : C;
        Un[P] === 0 ? h(null, at, y, ao, D, V, F, S, A) : yn && (te < 0 || P !== lo[te] ? Me(
          at,
          y,
          ao,
          2
          /* MoveType.REORDER */
        ) : te--);
      }
    }
  }, Me = (p, m, y, C, D = null) => {
    const { el: V, type: F, transition: S, children: A, shapeFlag: P } = p;
    if (P & 6) {
      Me(p.component.subTree, m, y, C);
      return;
    }
    if (P & 128) {
      p.suspense.move(m, y, C);
      return;
    }
    if (P & 64) {
      F.move(p, m, y, vn);
      return;
    }
    if (F === qe) {
      r(V, m, y);
      for (let I = 0; I < A.length; I++)
        Me(A[I], m, y, C);
      r(p.anchor, m, y);
      return;
    }
    if (F === kr) {
      E(p, m, y);
      return;
    }
    if (C !== 2 && P & 1 && S)
      if (C === 0)
        S.beforeEnter(V), r(V, m, y), Ae(() => S.enter(V), D);
      else {
        const { leave: I, delayLeave: j, afterLeave: K } = S, G = () => r(V, m, y), ne = () => {
          I(V, () => {
            G(), K && K();
          });
        };
        j ? j(V, G, ne) : ne();
      }
    else
      r(V, m, y);
  }, nt = (p, m, y, C = !1, D = !1) => {
    const { type: V, props: F, ref: S, children: A, dynamicChildren: P, shapeFlag: $, patchFlag: I, dirs: j } = p;
    if (S != null && ts(S, null, y, p, !0), $ & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const K = $ & 1 && j, G = !Mr(p);
    let ne;
    if (G && (ne = F && F.onVnodeBeforeUnmount) && ct(ne, m, p), $ & 6)
      ac(p.component, y, C);
    else {
      if ($ & 128) {
        p.suspense.unmount(y, C);
        return;
      }
      K && Yt(p, null, m, "beforeUnmount"), $ & 64 ? p.type.remove(p, m, y, D, vn, C) : P && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (V !== qe || I > 0 && I & 64) ? vt(P, m, y, !1, !0) : (V === qe && I & 384 || !D && $ & 16) && vt(A, m, y), C && $e(p);
    }
    (G && (ne = F && F.onVnodeUnmounted) || K) && Ae(() => {
      ne && ct(ne, m, p), K && Yt(p, null, m, "unmounted");
    }, y);
  }, $e = (p) => {
    const { type: m, el: y, anchor: C, transition: D } = p;
    if (m === qe) {
      process.env.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && D && !D.persisted ? p.children.forEach((F) => {
        F.type === Se ? i(F.el) : $e(F);
      }) : gt(y, C);
      return;
    }
    if (m === kr) {
      O(p);
      return;
    }
    const V = () => {
      i(y), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (p.shapeFlag & 1 && D && !D.persisted) {
      const { leave: F, delayLeave: S } = D, A = () => F(y, V);
      S ? S(p.el, V, A) : A();
    } else
      V();
  }, gt = (p, m) => {
    let y;
    for (; p !== m; )
      y = d(p), i(p), p = y;
    i(m);
  }, ac = (p, m, y) => {
    process.env.NODE_ENV !== "production" && p.type.__hmrId && xu(p);
    const { bum: C, scope: D, update: V, subTree: F, um: S } = p;
    C && zn(C), D.stop(), V && (V.active = !1, nt(F, p, m, y)), S && Ae(S, m), Ae(() => {
      p.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve()), process.env.NODE_ENV !== "production" && Pu(p);
  }, vt = (p, m, y, C = !1, D = !1, V = 0) => {
    for (let F = V; F < p.length; F++)
      nt(p[F], m, y, C, D);
  }, Er = (p) => p.shapeFlag & 6 ? Er(p.component.subTree) : p.shapeFlag & 128 ? p.suspense.next() : d(p.anchor || p.el), so = (p, m, y) => {
    p == null ? m._vnode && nt(m._vnode, null, null, !0) : h(m._vnode || null, p, m, null, null, null, y), vo(), Cl(), m._vnode = p;
  }, vn = {
    p: h,
    um: nt,
    m: Me,
    r: $e,
    mt: Q,
    mc: T,
    pc: ye,
    pbc: z,
    n: Er,
    o: t
  };
  let yi, Ei;
  return e && ([yi, Ei] = e(vn)), {
    render: so,
    hydrate: yi,
    createApp: Pf(so, yi)
  };
}
function qt({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Ar(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (H(r) && H(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = Vt(i[s]), l.el = o.el), n || Ar(o, l)), l.type === vr && (l.el = o.el), process.env.NODE_ENV !== "production" && l.type === Se && !l.el && (l.el = o.el);
    }
}
function Af(t) {
  const e = t.slice(), n = [0];
  let r, i, s, o, l;
  const a = t.length;
  for (r = 0; r < a; r++) {
    const c = t[r];
    if (c !== 0) {
      if (i = n[n.length - 1], t[i] < c) {
        e[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, t[n[l]] < c ? s = l + 1 : o = l;
      c < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = e[o];
  return n;
}
const kf = (t) => t.__isTeleport, qe = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : void 0), vr = Symbol(process.env.NODE_ENV !== "production" ? "Text" : void 0), Se = Symbol(process.env.NODE_ENV !== "production" ? "Comment" : void 0), kr = Symbol(process.env.NODE_ENV !== "production" ? "Static" : void 0), Jn = [];
let ot = null;
function Rr(t = !1) {
  Jn.push(ot = t ? null : []);
}
function Rf() {
  Jn.pop(), ot = Jn[Jn.length - 1] || null;
}
let or = 1;
function So(t) {
  or += t;
}
function ta(t) {
  return t.dynamicChildren = or > 0 ? ot || Dn : null, Rf(), or > 0 && ot && ot.push(t), t;
}
function Ti(t, e, n, r, i, s) {
  return ta(lr(
    t,
    e,
    n,
    r,
    i,
    s,
    !0
    /* isBlock */
  ));
}
function Ff(t, e, n, r, i) {
  return ta(It(
    t,
    e,
    n,
    r,
    i,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function Bs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function en(t, e) {
  return process.env.NODE_ENV !== "production" && e.shapeFlag & 6 && bn.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const If = (...t) => ra(...t), hi = "__vInternal", na = ({ key: t }) => t ?? null, Fr = ({ ref: t, ref_key: e, ref_for: n }) => t != null ? he(t) || ve(t) || W(t) ? { i: je, r: t, k: e, f: !!n } : t : null;
function lr(t, e = null, n = null, r = 0, i = null, s = t === qe ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && na(e),
    ref: e && Fr(e),
    scopeId: di,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: je
  };
  return l ? (js(a, n), s & 128 && t.normalize(a)) : n && (a.shapeFlag |= he(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && M("VNode created with invalid key (NaN). VNode type:", a.type), or > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ot.push(a), a;
}
const It = process.env.NODE_ENV !== "production" ? If : ra;
function ra(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === of) && (process.env.NODE_ENV !== "production" && !t && M(`Invalid vnode type when creating vnode: ${t}.`), t = Se), Bs(t)) {
    const l = _t(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && js(l, n), or > 0 && !s && ot && (l.shapeFlag & 6 ? ot[ot.indexOf(t)] = l : ot.push(l)), l.patchFlag |= -2, l;
  }
  if (ca(t) && (t = t.__vccOpts), e) {
    e = $f(e);
    let { class: l, style: a } = e;
    l && !he(l) && (e.class = xs(l)), oe(a) && (Hi(a) && !H(a) && (a = pe({}, a)), e.style = ti(a));
  }
  const o = he(t) ? 1 : Uu(t) ? 128 : kf(t) ? 64 : oe(t) ? 4 : W(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && o & 4 && Hi(t) && (t = Y(t), M("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, t)), lr(t, e, n, r, i, o, s, !0);
}
function $f(t) {
  return t ? Hi(t) || hi in t ? pe({}, t) : t : null;
}
function _t(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: o } = t, l = e ? Lf(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: l,
    key: l && na(l),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? H(i) ? i.concat(Fr(e)) : [i, Fr(e)] : Fr(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && H(o) ? o.map(ia) : o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== qe ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && _t(t.ssContent),
    ssFallback: t.ssFallback && _t(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function ia(t) {
  const e = _t(t);
  return H(t.children) && (e.children = t.children.map(ia)), e;
}
function ns(t = " ", e = 0) {
  return It(vr, null, t, e);
}
function st(t) {
  return t == null || typeof t == "boolean" ? It(Se) : H(t) ? It(
    qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? Vt(t) : It(vr, null, String(t));
}
function Vt(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : _t(t);
}
function js(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (H(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), js(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(hi in e) ? e._ctx = je : i === 3 && je && (je.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    W(e) ? (e = { default: e, _ctx: je }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [ns(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Lf(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = xs([e.class, r.class]));
      else if (i === "style")
        e.style = ti([e.style, r.style]);
      else if (_r(i)) {
        const s = e[i], o = r[i];
        o && s !== o && !(H(s) && s.includes(o)) && (e[i] = s ? [].concat(s, o) : o);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function ct(t, e, n, r = null) {
  Ze(t, e, 7, [
    n,
    r
  ]);
}
const Bf = ea();
let jf = 0;
function Uf(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || Bf, s = {
    uid: jf++,
    vnode: t,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Cc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Xl(r, i),
    emitsOptions: kl(r, i),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = af(s) : s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Au.bind(null, s), t.ce && t.ce(s), s;
}
let de = null;
const zf = () => de || je, kn = (t) => {
  de = t, t.scope.on();
}, cn = () => {
  de && de.scope.off(), de = null;
}, Hf = /* @__PURE__ */ Kt("slot,component");
function rs(t, e) {
  const n = e.isNativeTag || il;
  (Hf(t) || n(t)) && M("Do not use built-in or reserved HTML elements as component id: " + t);
}
function sa(t) {
  return t.vnode.shapeFlag & 4;
}
let ar = !1;
function Kf(t, e = !1) {
  ar = e;
  const { props: n, children: r } = t.vnode, i = sa(t);
  gf(t, n, i, e), Tf(t, r);
  const s = i ? Wf(t, e) : void 0;
  return ar = !1, s;
}
function Wf(t, e) {
  var n;
  const r = t.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && rs(r.name, t.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let o = 0; o < s.length; o++)
        rs(s[o], t.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let o = 0; o < s.length; o++)
        Kl(s[o]);
    }
    r.compilerOptions && oa() && M('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = yl(new Proxy(t.ctx, Wl)), process.env.NODE_ENV !== "production" && cf(t);
  const { setup: i } = r;
  if (i) {
    const s = t.setupContext = i.length > 1 ? Yf(t) : null;
    kn(t), _n();
    const o = Nt(i, t, 0, [process.env.NODE_ENV !== "production" ? On(t.props) : t.props, s]);
    if (mn(), cn(), ws(o)) {
      if (o.then(cn, cn), e)
        return o.then((l) => {
          Vo(t, l, e);
        }).catch((l) => {
          ci(
            l,
            t,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      if (t.asyncDep = o, process.env.NODE_ENV !== "production" && !t.suspense) {
        const l = (n = r.name) !== null && n !== void 0 ? n : "Anonymous";
        M(`Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Vo(t, o, e);
  } else
    la(t, e);
}
function Vo(t, e, n) {
  W(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : oe(e) ? (process.env.NODE_ENV !== "production" && Bs(e) && M("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = xl(e), process.env.NODE_ENV !== "production" && uf(t)) : process.env.NODE_ENV !== "production" && e !== void 0 && M(`setup() should return an object. Received: ${e === null ? "null" : typeof e}`), la(t, n);
}
let is;
const oa = () => !is;
function la(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && is && !r.render) {
      const i = r.template || $s(t).template;
      if (i) {
        process.env.NODE_ENV !== "production" && yt(t, "compile");
        const { isCustomElement: s, compilerOptions: o } = t.appContext.config, { delimiters: l, compilerOptions: a } = r, c = pe(pe({
          isCustomElement: s,
          delimiters: l
        }, o), a);
        r.render = is(i, c), process.env.NODE_ENV !== "production" && Et(t, "compile");
      }
    }
    t.render = r.render || xe;
  }
  kn(t), _n(), df(t), mn(), cn(), process.env.NODE_ENV !== "production" && !r.render && t.render === xe && !e && (r.template ? M(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : M("Component is missing template or render function."));
}
function Mo(t) {
  return new Proxy(t.attrs, process.env.NODE_ENV !== "production" ? {
    get(e, n) {
      return Hr(), Ve(t, "get", "$attrs"), e[n];
    },
    set() {
      return M("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return M("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(e, n) {
      return Ve(t, "get", "$attrs"), e[n];
    }
  });
}
function Yf(t) {
  const e = (r) => {
    if (process.env.NODE_ENV !== "production" && (t.exposed && M("expose() should be called only once per setup()."), r != null)) {
      let i = typeof r;
      i === "object" && (H(r) ? i = "array" : ve(r) && (i = "ref")), i !== "object" && M(`expose() should be passed a plain object, received ${i}.`);
    }
    t.exposed = r || {};
  };
  let n;
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = Mo(t));
    },
    get slots() {
      return On(t.slots);
    },
    get emit() {
      return (r, ...i) => t.emit(r, ...i);
    },
    expose: e
  }) : {
    get attrs() {
      return n || (n = Mo(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Us(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(xl(yl(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in an)
          return an[n](t);
      },
      has(e, n) {
        return n in e || n in an;
      }
    }));
}
const qf = /(?:^|[-_])(\w)/g, Xf = (t) => t.replace(qf, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function aa(t, e = !0) {
  return W(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function _i(t, e, n = !1) {
  let r = aa(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && t && t.parent) {
    const i = (s) => {
      for (const o in s)
        if (s[o] === e)
          return o;
    };
    r = i(t.components || t.parent.type.components) || i(t.appContext.components);
  }
  return r ? Xf(r) : n ? "App" : "Anonymous";
}
function ca(t) {
  return W(t) && "__vccOpts" in t;
}
const Gf = (t, e) => uu(t, e, ar), Jf = Symbol(process.env.NODE_ENV !== "production" ? "ssrContext" : ""), Zf = () => {
  {
    const t = Vr(Jf);
    return t || process.env.NODE_ENV !== "production" && M("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), t;
  }
};
function Di(t) {
  return !!(t && t.__v_isShallow);
}
function Qf() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(f) {
      return oe(f) ? f.__isVue ? ["div", t, "VueInstance"] : ve(f) ? [
        "div",
        {},
        ["span", t, u(f)],
        "<",
        l(f.value),
        ">"
      ] : sn(f) ? [
        "div",
        {},
        ["span", t, Di(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${Ut(f) ? " (readonly)" : ""}`
      ] : Ut(f) ? [
        "div",
        {},
        ["span", t, Di(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...s(f.$)
        ];
    }
  };
  function s(f) {
    const d = [];
    f.type.props && f.props && d.push(o("props", Y(f.props))), f.setupState !== ie && d.push(o("setup", f.setupState)), f.data !== ie && d.push(o("data", Y(f.data)));
    const _ = a(f, "computed");
    _ && d.push(o("computed", _));
    const g = a(f, "inject");
    return g && d.push(o("injected", g)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), d;
  }
  function o(f, d) {
    return d = pe({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((_) => [
          "div",
          {},
          ["span", r, _ + ": "],
          l(d[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, d = !0) {
    return typeof f == "number" ? ["span", e, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : oe(f) ? ["object", { object: d ? Y(f) : f }] : ["span", n, String(f)];
  }
  function a(f, d) {
    const _ = f.type;
    if (W(_))
      return;
    const g = {};
    for (const h in f.ctx)
      c(_, h, d) && (g[h] = f.ctx[h]);
    return g;
  }
  function c(f, d, _) {
    const g = f[_];
    if (H(g) && g.includes(d) || oe(g) && d in g || f.extends && c(f.extends, d, _) || f.mixins && f.mixins.some((h) => c(h, d, _)))
      return !0;
  }
  function u(f) {
    return Di(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Ao = "3.2.47", ed = "http://www.w3.org/2000/svg", tn = typeof document < "u" ? document : null, ko = tn && /* @__PURE__ */ tn.createElement("template"), td = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e ? tn.createElementNS(ed, t) : tn.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (t) => tn.createTextNode(t),
  createComment: (t) => tn.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => tn.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, i, s) {
    const o = n ? n.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      ko.innerHTML = r ? `<svg>${t}</svg>` : t;
      const l = ko.content;
      if (r) {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      e.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
};
function nd(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
function rd(t, e, n) {
  const r = t.style, i = he(n);
  if (n && !i) {
    if (e && !he(e))
      for (const s in e)
        n[s] == null && ss(r, s, "");
    for (const s in n)
      ss(r, s, n[s]);
  } else {
    const s = r.display;
    i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (r.display = s);
  }
}
const id = /[^\\];\s*$/, Ro = /\s*!important$/;
function ss(t, e, n) {
  if (H(n))
    n.forEach((r) => ss(t, e, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && id.test(n) && M(`Unexpected semicolon at the end of '${e}' style value: '${n}'`), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = sd(t, e);
    Ro.test(n) ? t.setProperty(Bt(r), n.replace(Ro, ""), "important") : t[r] = n;
  }
}
const Fo = ["Webkit", "Moz", "ms"], Ci = {};
function sd(t, e) {
  const n = Ci[e];
  if (n)
    return n;
  let r = An(e);
  if (r !== "filter" && r in t)
    return Ci[e] = r;
  r = ii(r);
  for (let i = 0; i < Fo.length; i++) {
    const s = Fo[i] + r;
    if (s in t)
      return Ci[e] = s;
  }
  return e;
}
const Io = "http://www.w3.org/1999/xlink";
function od(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(Io, e.slice(6, e.length)) : t.setAttributeNS(Io, e, n);
  else {
    const s = vc(e);
    n == null || s && !rl(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function ld(t, e, n, r, i, s, o) {
  if (e === "innerHTML" || e === "textContent") {
    r && o(r, i, s), t[e] = n ?? "";
    return;
  }
  if (e === "value" && t.tagName !== "PROGRESS" && // custom elements may use _value internally
  !t.tagName.includes("-")) {
    t._value = n;
    const a = n ?? "";
    (t.value !== a || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    t.tagName === "OPTION") && (t.value = a), n == null && t.removeAttribute(e);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const a = typeof t[e];
    a === "boolean" ? n = rl(n) : n == null && a === "string" ? (n = "", l = !0) : a === "number" && (n = 0, l = !0);
  }
  try {
    t[e] = n;
  } catch (a) {
    process.env.NODE_ENV !== "production" && !l && M(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`, a);
  }
  l && t.removeAttribute(e);
}
function ad(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function cd(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
function ud(t, e, n, r, i = null) {
  const s = t._vei || (t._vei = {}), o = s[e];
  if (r && o)
    o.value = r;
  else {
    const [l, a] = fd(e);
    if (r) {
      const c = s[e] = hd(r, i);
      ad(t, l, c, a);
    } else
      o && (cd(t, l, o, a), s[e] = void 0);
  }
}
const $o = /(?:Once|Passive|Capture)$/;
function fd(t) {
  let e;
  if ($o.test(t)) {
    e = {};
    let r;
    for (; r = t.match($o); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Bt(t.slice(2)), e];
}
let Pi = 0;
const dd = /* @__PURE__ */ Promise.resolve(), pd = () => Pi || (dd.then(() => Pi = 0), Pi = Date.now());
function hd(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ze(_d(r, n.value), e, 5, [r]);
  };
  return n.value = t, n.attached = pd(), n;
}
function _d(t, e) {
  if (H(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return e;
}
const Lo = /^on[a-z]/, md = (t, e, n, r, i = !1, s, o, l, a) => {
  e === "class" ? nd(t, r, i) : e === "style" ? rd(t, n, r) : _r(e) ? Br(e) || ud(t, e, n, r, o) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : gd(t, e, r, i)) ? ld(t, e, r, s, o, l, a) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), od(t, e, r, i));
};
function gd(t, e, n, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in t && Lo.test(e) && W(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || Lo.test(e) && he(n) ? !1 : e in t;
}
const vd = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
qu.props;
const yd = /* @__PURE__ */ pe({ patchProp: md }, td);
let Bo;
function Ed() {
  return Bo || (Bo = Vf(yd));
}
const bd = (...t) => {
  const e = Ed().createApp(...t);
  process.env.NODE_ENV !== "production" && (xd(e), Od(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = Nd(r);
    if (!i)
      return;
    const s = e._component;
    !W(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const o = n(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, e;
};
function xd(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => _c(e) || mc(e),
    writable: !1
  });
}
function Od(t) {
  if (oa()) {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        M("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = t.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return M(r), n;
      },
      set() {
        M(r);
      }
    });
  }
}
function Nd(t) {
  if (he(t)) {
    const e = document.querySelector(t);
    return process.env.NODE_ENV !== "production" && !e && M(`Failed to mount app: mount target selector "${t}" returned null.`), e;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && M('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), t;
}
function wd() {
  Qf();
}
process.env.NODE_ENV !== "production" && wd();
function bt(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function ua(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ue = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Rn = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, zs, we, me, Xe = 1e8, se = 1 / Xe, os = Math.PI * 2, Td = os / 4, Dd = 0, fa = Math.sqrt, Cd = Math.cos, Pd = Math.sin, Ee = function(e) {
  return typeof e == "string";
}, ue = function(e) {
  return typeof e == "function";
}, Tt = function(e) {
  return typeof e == "number";
}, Hs = function(e) {
  return typeof e > "u";
}, mt = function(e) {
  return typeof e == "object";
}, Re = function(e) {
  return e !== !1;
}, da = function() {
  return typeof window < "u";
}, Dr = function(e) {
  return ue(e) || Ee(e);
}, pa = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, Te = Array.isArray, ls = /(?:-?\.?\d|\.)+/gi, ha = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, wn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Si = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _a = /[+-]=-?[.\d]+/, ma = /[^,'"\[\]\s]+/gi, Sd = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ae, Ye, as, Ks, ze = {}, Yr = {}, ga, va = function(e) {
  return (Yr = hn(e, ze)) && He;
}, Ws = function(e, n) {
  return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()");
}, qr = function(e, n) {
  return !n && console.warn(e);
}, ya = function(e, n) {
  return e && (ze[e] = n) && Yr && (Yr[e] = n) || ze;
}, cr = function() {
  return 0;
}, Vd = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ir = {
  suppressEvents: !0,
  kill: !1
}, Md = {
  suppressEvents: !0
}, Ys = {}, $t = [], cs = {}, Ea, Le = {}, Vi = {}, jo = 30, $r = [], qs = "", Xs = function(e) {
  var n = e[0], r, i;
  if (mt(n) || ue(n) || (e = [e]), !(r = (n._gsap || {}).harness)) {
    for (i = $r.length; i-- && !$r[i].targetTest(n); )
      ;
    r = $r[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new Ua(e[i], r))) || e.splice(i, 1);
  return e;
}, un = function(e) {
  return e._gsap || Xs(Ge(e))[0]._gsap;
}, ba = function(e, n, r) {
  return (r = e[n]) && ue(r) ? e[n]() : Hs(r) && e.getAttribute && e.getAttribute(n) || r;
}, Fe = function(e, n) {
  return (e = e.split(",")).forEach(n) || e;
}, fe = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, be = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, Sn = function(e, n) {
  var r = n.charAt(0), i = parseFloat(n.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, Ad = function(e, n) {
  for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Xr = function() {
  var e = $t.length, n = $t.slice(0), r, i;
  for (cs = {}, $t.length = 0, r = 0; r < e; r++)
    i = n[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, xa = function(e, n, r, i) {
  $t.length && !we && Xr(), e.render(n, r, i || we && n < 0 && (e._initted || e._startAt)), $t.length && !we && Xr();
}, Oa = function(e) {
  var n = parseFloat(e);
  return (n || n === 0) && (e + "").match(ma).length < 2 ? n : Ee(e) ? e.trim() : e;
}, Na = function(e) {
  return e;
}, Qe = function(e, n) {
  for (var r in n)
    r in e || (e[r] = n[r]);
  return e;
}, kd = function(e) {
  return function(n, r) {
    for (var i in r)
      i in n || i === "duration" && e || i === "ease" || (n[i] = r[i]);
  };
}, hn = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, Uo = function t(e, n) {
  for (var r in n)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = mt(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
  return e;
}, Gr = function(e, n) {
  var r = {}, i;
  for (i in e)
    i in n || (r[i] = e[i]);
  return r;
}, Zn = function(e) {
  var n = e.parent || ae, r = e.keyframes ? kd(Te(e.keyframes)) : Qe;
  if (Re(e.inherit))
    for (; n; )
      r(e, n.vars.defaults), n = n.parent || n._dp;
  return e;
}, Rd = function(e, n) {
  for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
    ;
  return r < 0;
}, wa = function(e, n, r, i, s) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var o = e[i], l;
  if (s)
    for (l = n[s]; o && o[s] > l; )
      o = o._prev;
  return o ? (n._next = o._next, o._next = n) : (n._next = e[r], e[r] = n), n._next ? n._next._prev = n : e[i] = n, n._prev = o, n.parent = n._dp = e, n;
}, mi = function(e, n, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var s = n._prev, o = n._next;
  s ? s._next = o : e[r] === n && (e[r] = o), o ? o._prev = s : e[i] === n && (e[i] = s), n._next = n._prev = n.parent = null;
}, zt = function(e, n) {
  e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0;
}, fn = function(e, n) {
  if (e && (!n || n._end > e._dur || n._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, Fd = function(e) {
  for (var n = e.parent; n && n.parent; )
    n._dirty = 1, n.totalDuration(), n = n.parent;
  return e;
}, us = function(e, n, r, i) {
  return e._startAt && (we ? e._startAt.revert(Ir) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i));
}, Id = function t(e) {
  return !e || e._ts && t(e.parent);
}, zo = function(e) {
  return e._repeat ? Fn(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Fn = function(e, n) {
  var r = Math.floor(e /= n);
  return e && r === e ? r - 1 : r;
}, Jr = function(e, n) {
  return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur);
}, gi = function(e) {
  return e._end = be(e._start + (e._tDur / Math.abs(e._ts || e._rts || se) || 0));
}, vi = function(e, n) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = be(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)), gi(e), r._dirty || fn(r, e)), e;
}, Ta = function(e, n) {
  var r;
  if ((n._time || n._initted && !n._dur) && (r = Jr(e.rawTime(), n), (!n._dur || yr(0, n.totalDuration(), r) - n._tTime > se) && n.render(r, !0)), fn(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -se;
  }
}, pt = function(e, n, r, i) {
  return n.parent && zt(n), n._start = be((Tt(r) ? r : r || e !== ae ? We(e, r, n) : e._time) + n._delay), n._end = be(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)), wa(e, n, "_first", "_last", e._sort ? "_start" : 0), fs(n) || (e._recent = n), i || Ta(e, n), e._ts < 0 && vi(e, e._tTime), e;
}, Da = function(e, n) {
  return (ze.ScrollTrigger || Ws("scrollTrigger", n)) && ze.ScrollTrigger.create(n, e);
}, Ca = function(e, n, r, i, s) {
  if (Js(e, n, s), !e._initted)
    return 1;
  if (!r && e._pt && !we && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ea !== Be.frame)
    return $t.push(e), e._lazy = [s, i], 1;
}, $d = function t(e) {
  var n = e.parent;
  return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
}, fs = function(e) {
  var n = e.data;
  return n === "isFromStart" || n === "isStart";
}, Ld = function(e, n, r, i) {
  var s = e.ratio, o = n < 0 || !n && (!e._start && $d(e) && !(!e._initted && fs(e)) || (e._ts < 0 || e._dp._ts < 0) && !fs(e)) ? 0 : 1, l = e._rDelay, a = 0, c, u, f;
  if (l && e._repeat && (a = yr(0, e._tDur, n), u = Fn(a, l), e._yoyo && u & 1 && (o = 1 - o), u !== Fn(e._tTime, l) && (s = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== s || we || i || e._zTime === se || !n && e._zTime) {
    if (!e._initted && Ca(e, n, i, r, a))
      return;
    for (f = e._zTime, e._zTime = n || (r ? se : 0), r || (r = n && !f), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = a, c = e._pt; c; )
      c.r(o, c.d), c = c._next;
    n < 0 && us(e, n, r, !0), e._onUpdate && !r && Je(e, "onUpdate"), a && e._repeat && !r && e.parent && Je(e, "onRepeat"), (n >= e._tDur || n < 0) && e.ratio === o && (o && zt(e, 1), !r && !we && (Je(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else
    e._zTime || (e._zTime = n);
}, Bd = function(e, n, r) {
  var i;
  if (r > n)
    for (i = e._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > n)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < n)
        return i;
      i = i._prev;
    }
}, In = function(e, n, r, i) {
  var s = e._repeat, o = be(n) || 0, l = e._tTime / e._tDur;
  return l && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = s ? s < 0 ? 1e10 : be(o * (s + 1) + e._rDelay * s) : o, l > 0 && !i && vi(e, e._tTime = e._tDur * l), e.parent && gi(e), r || fn(e.parent, e), e;
}, Ho = function(e) {
  return e instanceof ke ? fn(e) : In(e, e._dur);
}, jd = {
  _start: 0,
  endTime: cr,
  totalDuration: cr
}, We = function t(e, n, r) {
  var i = e.labels, s = e._recent || jd, o = e.duration() >= Xe ? s.endTime(!1) : e._dur, l, a, c;
  return Ee(n) && (isNaN(n) || n in i) ? (a = n.charAt(0), c = n.substr(-1) === "%", l = n.indexOf("="), a === "<" || a === ">" ? (l >= 0 && (n = n.replace(/=/, "")), (a === "<" ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (c ? (l < 0 ? s : r).totalDuration() / 100 : 1)) : l < 0 ? (n in i || (i[n] = o), i[n]) : (a = parseFloat(n.charAt(l - 1) + n.substr(l + 1)), c && r && (a = a / 100 * (Te(r) ? r[0] : r).totalDuration()), l > 1 ? t(e, n.substr(0, l - 1), r) + a : o + a)) : n == null ? o : +n;
}, Qn = function(e, n, r) {
  var i = Tt(n[1]), s = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = n[s], l, a;
  if (i && (o.duration = n[1]), o.parent = r, e) {
    for (l = o, a = r; a && !("immediateRender" in l); )
      l = a.vars.defaults || {}, a = Re(a.vars.inherit) && a.parent;
    o.immediateRender = Re(l.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = n[s - 1];
  }
  return new ge(n[0], o, n[s + 1]);
}, Wt = function(e, n) {
  return e || e === 0 ? n(e) : n;
}, yr = function(e, n, r) {
  return r < e ? e : r > n ? n : r;
}, Ne = function(e, n) {
  return !Ee(e) || !(n = Sd.exec(e)) ? "" : n[1];
}, Ud = function(e, n, r) {
  return Wt(r, function(i) {
    return yr(e, n, i);
  });
}, ds = [].slice, Pa = function(e, n) {
  return e && mt(e) && "length" in e && (!n && !e.length || e.length - 1 in e && mt(e[0])) && !e.nodeType && e !== Ye;
}, zd = function(e, n, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var s;
    return Ee(i) && !n || Pa(i, 1) ? (s = r).push.apply(s, Ge(i)) : r.push(i);
  }) || r;
}, Ge = function(e, n, r) {
  return me && !n && me.selector ? me.selector(e) : Ee(e) && !r && (as || !$n()) ? ds.call((n || Ks).querySelectorAll(e), 0) : Te(e) ? zd(e, r) : Pa(e) ? ds.call(e, 0) : e ? [e] : [];
}, ps = function(e) {
  return e = Ge(e)[0] || qr("Invalid scope") || {}, function(n) {
    var r = e.current || e.nativeElement || e;
    return Ge(n, r.querySelectorAll ? r : r === e ? qr("Invalid scope") || Ks.createElement("div") : e);
  };
}, Sa = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Va = function(e) {
  if (ue(e))
    return e;
  var n = mt(e) ? e : {
    each: e
  }, r = dn(n.ease), i = n.from || 0, s = parseFloat(n.base) || 0, o = {}, l = i > 0 && i < 1, a = isNaN(i) || l, c = n.axis, u = i, f = i;
  return Ee(i) ? u = f = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !l && a && (u = i[0], f = i[1]), function(d, _, g) {
    var h = (g || n).length, v = o[h], b, x, N, E, O, R, k, w, T;
    if (!v) {
      if (T = n.grid === "auto" ? 0 : (n.grid || [1, Xe])[1], !T) {
        for (k = -Xe; k < (k = g[T++].getBoundingClientRect().left) && T < h; )
          ;
        T--;
      }
      for (v = o[h] = [], b = a ? Math.min(T, h) * u - 0.5 : i % T, x = T === Xe ? 0 : a ? h * f / T - 0.5 : i / T | 0, k = 0, w = Xe, R = 0; R < h; R++)
        N = R % T - b, E = x - (R / T | 0), v[R] = O = c ? Math.abs(c === "y" ? E : N) : fa(N * N + E * E), O > k && (k = O), O < w && (w = O);
      i === "random" && Sa(v), v.max = k - w, v.min = w, v.v = h = (parseFloat(n.amount) || parseFloat(n.each) * (T > h ? h - 1 : c ? c === "y" ? h / T : T : Math.max(T, h / T)) || 0) * (i === "edges" ? -1 : 1), v.b = h < 0 ? s - h : s, v.u = Ne(n.amount || n.each) || 0, r = r && h < 0 ? La(r) : r;
    }
    return h = (v[d] - v.min) / v.max || 0, be(v.b + (r ? r(h) : h) * v.v) + v.u;
  };
}, hs = function(e) {
  var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = be(Math.round(parseFloat(r) / e) * e * n);
    return (i - i % 1) / n + (Tt(r) ? 0 : Ne(r));
  };
}, Ma = function(e, n) {
  var r = Te(e), i, s;
  return !r && mt(e) && (i = r = e.radius || Xe, e.values ? (e = Ge(e.values), (s = !Tt(e[0])) && (i *= i)) : e = hs(e.increment)), Wt(n, r ? ue(e) ? function(o) {
    return s = e(o), Math.abs(s - o) <= i ? s : o;
  } : function(o) {
    for (var l = parseFloat(s ? o.x : o), a = parseFloat(s ? o.y : 0), c = Xe, u = 0, f = e.length, d, _; f--; )
      s ? (d = e[f].x - l, _ = e[f].y - a, d = d * d + _ * _) : d = Math.abs(e[f] - l), d < c && (c = d, u = f);
    return u = !i || c <= i ? e[u] : o, s || u === o || Tt(o) ? u : u + Ne(o);
  } : hs(e));
}, Aa = function(e, n, r, i) {
  return Wt(Te(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
    return Te(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) * r * i) / i;
  });
}, Hd = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return function(i) {
    return n.reduce(function(s, o) {
      return o(s);
    }, i);
  };
}, Kd = function(e, n) {
  return function(r) {
    return e(parseFloat(r)) + (n || Ne(r));
  };
}, Wd = function(e, n, r) {
  return Ra(e, n, 0, 1, r);
}, ka = function(e, n, r) {
  return Wt(r, function(i) {
    return e[~~n(i)];
  });
}, Yd = function t(e, n, r) {
  var i = n - e;
  return Te(e) ? ka(e, t(0, e.length), n) : Wt(r, function(s) {
    return (i + (s - e) % i) % i + e;
  });
}, qd = function t(e, n, r) {
  var i = n - e, s = i * 2;
  return Te(e) ? ka(e, t(0, e.length - 1), n) : Wt(r, function(o) {
    return o = (s + (o - e) % s) % s || 0, e + (o > i ? s - o : o);
  });
}, ur = function(e) {
  for (var n = 0, r = "", i, s, o, l; ~(i = e.indexOf("random(", n)); )
    o = e.indexOf(")", i), l = e.charAt(i + 7) === "[", s = e.substr(i + 7, o - i - 7).match(l ? ma : ls), r += e.substr(n, i - n) + Aa(l ? s : +s[0], l ? 0 : +s[1], +s[2] || 1e-5), n = o + 1;
  return r + e.substr(n, e.length - n);
}, Ra = function(e, n, r, i, s) {
  var o = n - e, l = i - r;
  return Wt(s, function(a) {
    return r + ((a - e) / o * l || 0);
  });
}, Xd = function t(e, n, r, i) {
  var s = isNaN(e + n) ? 0 : function(_) {
    return (1 - _) * e + _ * n;
  };
  if (!s) {
    var o = Ee(e), l = {}, a, c, u, f, d;
    if (r === !0 && (i = 1) && (r = null), o)
      e = {
        p: e
      }, n = {
        p: n
      };
    else if (Te(e) && !Te(n)) {
      for (u = [], f = e.length, d = f - 2, c = 1; c < f; c++)
        u.push(t(e[c - 1], e[c]));
      f--, s = function(g) {
        g *= f;
        var h = Math.min(d, ~~g);
        return u[h](g - h);
      }, r = n;
    } else
      i || (e = hn(Te(e) ? [] : {}, e));
    if (!u) {
      for (a in n)
        Gs.call(l, e, a, "get", n[a]);
      s = function(g) {
        return eo(g, l) || (o ? e.p : e);
      };
    }
  }
  return Wt(r, s);
}, Ko = function(e, n, r) {
  var i = e.labels, s = Xe, o, l, a;
  for (o in i)
    l = i[o] - n, l < 0 == !!r && l && s > (l = Math.abs(l)) && (a = o, s = l);
  return a;
}, Je = function(e, n, r) {
  var i = e.vars, s = i[n], o = me, l = e._ctx, a, c, u;
  if (s)
    return a = i[n + "Params"], c = i.callbackScope || e, r && $t.length && Xr(), l && (me = l), u = a ? s.apply(c, a) : s.call(c), me = o, u;
}, qn = function(e) {
  return zt(e), e.scrollTrigger && e.scrollTrigger.kill(!!we), e.progress() < 1 && Je(e, "onInterrupt"), e;
}, Tn, Gd = function(e) {
  e = !e.name && e.default || e;
  var n = e.name, r = ue(e), i = n && !r && e.init ? function() {
    this._props = [];
  } : e, s = {
    init: cr,
    render: eo,
    add: Gs,
    kill: dp,
    modifier: fp,
    rawVars: 0
  }, o = {
    targetTest: 0,
    get: 0,
    getSetter: Qs,
    aliases: {},
    register: 0
  };
  if ($n(), e !== i) {
    if (Le[n])
      return;
    Qe(i, Qe(Gr(e, s), o)), hn(i.prototype, hn(s, Gr(e, o))), Le[i.prop = n] = i, e.targetTest && ($r.push(i), Ys[n] = 1), n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin";
  }
  ya(n, i), e.register && e.register(He, i, Ie);
}, re = 255, Xn = {
  aqua: [0, re, re],
  lime: [0, re, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, re],
  navy: [0, 0, 128],
  white: [re, re, re],
  olive: [128, 128, 0],
  yellow: [re, re, 0],
  orange: [re, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [re, 0, 0],
  pink: [re, 192, 203],
  cyan: [0, re, re],
  transparent: [re, re, re, 0]
}, Mi = function(e, n, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? n + (r - n) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * re + 0.5 | 0;
}, Fa = function(e, n, r) {
  var i = e ? Tt(e) ? [e >> 16, e >> 8 & re, e & re] : 0 : Xn.black, s, o, l, a, c, u, f, d, _, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Xn[e])
      i = Xn[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (s = e.charAt(1), o = e.charAt(2), l = e.charAt(3), e = "#" + s + s + o + o + l + l + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & re, i & re, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & re, e & re];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(ls), !n)
        a = +i[0] % 360 / 360, c = +i[1] / 100, u = +i[2] / 100, o = u <= 0.5 ? u * (c + 1) : u + c - u * c, s = u * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = Mi(a + 1 / 3, s, o), i[1] = Mi(a, s, o), i[2] = Mi(a - 1 / 3, s, o);
      else if (~e.indexOf("="))
        return i = e.match(ha), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(ls) || Xn.transparent;
    i = i.map(Number);
  }
  return n && !g && (s = i[0] / re, o = i[1] / re, l = i[2] / re, f = Math.max(s, o, l), d = Math.min(s, o, l), u = (f + d) / 2, f === d ? a = c = 0 : (_ = f - d, c = u > 0.5 ? _ / (2 - f - d) : _ / (f + d), a = f === s ? (o - l) / _ + (o < l ? 6 : 0) : f === o ? (l - s) / _ + 2 : (s - o) / _ + 4, a *= 60), i[0] = ~~(a + 0.5), i[1] = ~~(c * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, Ia = function(e) {
  var n = [], r = [], i = -1;
  return e.split(Lt).forEach(function(s) {
    var o = s.match(wn) || [];
    n.push.apply(n, o), r.push(i += o.length + 1);
  }), n.c = r, n;
}, Wo = function(e, n, r) {
  var i = "", s = (e + i).match(Lt), o = n ? "hsla(" : "rgba(", l = 0, a, c, u, f;
  if (!s)
    return e;
  if (s = s.map(function(d) {
    return (d = Fa(d, n, 1)) && o + (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), r && (u = Ia(e), a = r.c, a.join(i) !== u.c.join(i)))
    for (c = e.replace(Lt, "1").split(wn), f = c.length - 1; l < f; l++)
      i += c[l] + (~a.indexOf(l) ? s.shift() || o + "0,0,0,0)" : (u.length ? u : s.length ? s : r).shift());
  if (!c)
    for (c = e.split(Lt), f = c.length - 1; l < f; l++)
      i += c[l] + s[l];
  return i + c[f];
}, Lt = function() {
  var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Xn)
    t += "|" + e + "\\b";
  return new RegExp(t + ")", "gi");
}(), Jd = /hsl[a]?\(/, $a = function(e) {
  var n = e.join(" "), r;
  if (Lt.lastIndex = 0, Lt.test(n))
    return r = Jd.test(n), e[1] = Wo(e[1], r), e[0] = Wo(e[0], r, Ia(e[1])), !0;
}, fr, Be = function() {
  var t = Date.now, e = 500, n = 33, r = t(), i = r, s = 1e3 / 240, o = s, l = [], a, c, u, f, d, _, g = function h(v) {
    var b = t() - i, x = v === !0, N, E, O, R;
    if (b > e && (r += b - n), i += b, O = i - r, N = O - o, (N > 0 || x) && (R = ++f.frame, d = O - f.time * 1e3, f.time = O = O / 1e3, o += N + (N >= s ? 4 : s - N), E = 1), x || (a = c(h)), E)
      for (_ = 0; _ < l.length; _++)
        l[_](O, d, R, v);
  };
  return f = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(v) {
      return d / (1e3 / (v || 60));
    },
    wake: function() {
      ga && (!as && da() && (Ye = as = window, Ks = Ye.document || {}, ze.gsap = He, (Ye.gsapVersions || (Ye.gsapVersions = [])).push(He.version), va(Yr || Ye.GreenSockGlobals || !Ye.gsap && Ye || {}), u = Ye.requestAnimationFrame), a && f.sleep(), c = u || function(v) {
        return setTimeout(v, o - f.time * 1e3 + 1 | 0);
      }, fr = 1, g(2));
    },
    sleep: function() {
      (u ? Ye.cancelAnimationFrame : clearTimeout)(a), fr = 0, c = cr;
    },
    lagSmoothing: function(v, b) {
      e = v || 1 / 0, n = Math.min(b || 33, e);
    },
    fps: function(v) {
      s = 1e3 / (v || 240), o = f.time * 1e3 + s;
    },
    add: function(v, b, x) {
      var N = b ? function(E, O, R, k) {
        v(E, O, R, k), f.remove(N);
      } : v;
      return f.remove(v), l[x ? "unshift" : "push"](N), $n(), N;
    },
    remove: function(v, b) {
      ~(b = l.indexOf(v)) && l.splice(b, 1) && _ >= b && _--;
    },
    _listeners: l
  }, f;
}(), $n = function() {
  return !fr && Be.wake();
}, J = {}, Zd = /^[\d.\-M][\d.\-,\s]/, Qd = /["']/g, ep = function(e) {
  for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], s = 1, o = r.length, l, a, c; s < o; s++)
    a = r[s], l = s !== o - 1 ? a.lastIndexOf(",") : a.length, c = a.substr(0, l), n[i] = isNaN(c) ? c.replace(Qd, "").trim() : +c, i = a.substr(l + 1).trim();
  return n;
}, tp = function(e) {
  var n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n);
  return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, np = function(e) {
  var n = (e + "").split("("), r = J[n[0]];
  return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [ep(n[1])] : tp(e).split(",").map(Oa)) : J._CE && Zd.test(e) ? J._CE("", e) : r;
}, La = function(e) {
  return function(n) {
    return 1 - e(1 - n);
  };
}, Ba = function t(e, n) {
  for (var r = e._first, i; r; )
    r instanceof ke ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next;
}, dn = function(e, n) {
  return e && (ue(e) ? e : J[e] || np(e)) || n;
}, gn = function(e, n, r, i) {
  r === void 0 && (r = function(a) {
    return 1 - n(1 - a);
  }), i === void 0 && (i = function(a) {
    return a < 0.5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2;
  });
  var s = {
    easeIn: n,
    easeOut: r,
    easeInOut: i
  }, o;
  return Fe(e, function(l) {
    J[l] = ze[l] = s, J[o = l.toLowerCase()] = r;
    for (var a in s)
      J[o + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = J[l + "." + a] = s[a];
  }), s;
}, ja = function(e) {
  return function(n) {
    return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
  };
}, Ai = function t(e, n, r) {
  var i = n >= 1 ? n : 1, s = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1), o = s / os * (Math.asin(1 / i) || 0), l = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * Pd((u - o) * s) + 1;
  }, a = e === "out" ? l : e === "in" ? function(c) {
    return 1 - l(1 - c);
  } : ja(l);
  return s = os / s, a.config = function(c, u) {
    return t(e, c, u);
  }, a;
}, ki = function t(e, n) {
  n === void 0 && (n = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((n + 1) * o + n) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(s) {
    return 1 - r(1 - s);
  } : ja(r);
  return i.config = function(s) {
    return t(e, s);
  }, i;
};
Fe("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
  var n = e < 5 ? e + 1 : e;
  gn(t + ",Power" + (n - 1), e ? function(r) {
    return Math.pow(r, n);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, n);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2;
  });
});
J.Linear.easeNone = J.none = J.Linear.easeIn;
gn("Elastic", Ai("in"), Ai("out"), Ai());
(function(t, e) {
  var n = 1 / e, r = 2 * n, i = 2.5 * n, s = function(l) {
    return l < n ? t * l * l : l < r ? t * Math.pow(l - 1.5 / e, 2) + 0.75 : l < i ? t * (l -= 2.25 / e) * l + 0.9375 : t * Math.pow(l - 2.625 / e, 2) + 0.984375;
  };
  gn("Bounce", function(o) {
    return 1 - s(1 - o);
  }, s);
})(7.5625, 2.75);
gn("Expo", function(t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
gn("Circ", function(t) {
  return -(fa(1 - t * t) - 1);
});
gn("Sine", function(t) {
  return t === 1 ? 1 : -Cd(t * Td) + 1;
});
gn("Back", ki("in"), ki("out"), ki());
J.SteppedEase = J.steps = ze.SteppedEase = {
  config: function(e, n) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (n ? 0 : 1), s = n ? 1 : 0, o = 1 - se;
    return function(l) {
      return ((i * yr(0, o, l) | 0) + s) * r;
    };
  }
};
Rn.ease = J["quad.out"];
Fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
  return qs += t + "," + t + "Params,";
});
var Ua = function(e, n) {
  this.id = Dd++, e._gsap = this, this.target = e, this.harness = n, this.get = n ? n.get : ba, this.set = n ? n.getSetter : Qs;
}, Ln = /* @__PURE__ */ function() {
  function t(n) {
    this.vars = n, this._delay = +n.delay || 0, (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0, this._yoyo = !!n.yoyo || !!n.yoyoEase), this._ts = 1, In(this, +n.duration, 1, 1), this.data = n.data, me && (this._ctx = me, me.data.push(this)), fr || Be.wake();
  }
  var e = t.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, In(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if ($n(), !arguments.length)
      return this._tTime;
    var s = this._dp;
    if (s && s.smoothChildTiming && this._ts) {
      for (vi(this, r), !s._dp || s.parent || Ta(s, this); s && s.parent; )
        s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) && s.totalTime(s._tTime, !0), s = s.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && pt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === se || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), xa(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + zo(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + zo(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, e.iteration = function(r, i) {
    var s = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * s, i) : this._repeat ? Fn(this._tTime, s) + 1 : 1;
  }, e.timeScale = function(r) {
    if (!arguments.length)
      return this._rts === -se ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var i = this.parent && this._ts ? Jr(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -se ? 0 : this._rts, this.totalTime(yr(-this._delay, this._tDur, i), !0), gi(this), Fd(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : ($n(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== se && (this._tTime -= se)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && pt(i, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (Re(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Jr(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = Md);
    var i = we;
    return we = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), we = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, s = arguments.length ? r : i.rawTime(); i; )
      s = i._start + s / (i._ts || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(r) : s;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Ho(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, Ho(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(We(this, r), Re(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, Re(i));
  }, e.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -se : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -se, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, i = this._start, s;
    return !!(!r || this._ts && this._initted && r.isActive() && (s = r.rawTime(!0)) >= i && s < this.endTime(!0) - se);
  }, e.eventCallback = function(r, i, s) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[r] = i, s && (o[r + "Params"] = s), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r];
  }, e.then = function(r) {
    var i = this;
    return new Promise(function(s) {
      var o = ue(r) ? r : Na, l = function() {
        var c = i.then;
        i.then = null, ue(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), s(o), i.then = c;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l;
    });
  }, e.kill = function() {
    qn(this);
  }, t;
}();
Qe(Ln.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -se,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ke = /* @__PURE__ */ function(t) {
  ua(e, t);
  function e(r, i) {
    var s;
    return r === void 0 && (r = {}), s = t.call(this, r) || this, s.labels = {}, s.smoothChildTiming = !!r.smoothChildTiming, s.autoRemoveChildren = !!r.autoRemoveChildren, s._sort = Re(r.sortChildren), ae && pt(r.parent || ae, bt(s), i), r.reversed && s.reverse(), r.paused && s.paused(!0), r.scrollTrigger && Da(bt(s), r.scrollTrigger), s;
  }
  var n = e.prototype;
  return n.to = function(i, s, o) {
    return Qn(0, arguments, this), this;
  }, n.from = function(i, s, o) {
    return Qn(1, arguments, this), this;
  }, n.fromTo = function(i, s, o, l) {
    return Qn(2, arguments, this), this;
  }, n.set = function(i, s, o) {
    return s.duration = 0, s.parent = this, Zn(s).repeatDelay || (s.repeat = 0), s.immediateRender = !!s.immediateRender, new ge(i, s, We(this, o), 1), this;
  }, n.call = function(i, s, o) {
    return pt(this, ge.delayedCall(0, i, s), o);
  }, n.staggerTo = function(i, s, o, l, a, c, u) {
    return o.duration = s, o.stagger = o.stagger || l, o.onComplete = c, o.onCompleteParams = u, o.parent = this, new ge(i, o, We(this, a)), this;
  }, n.staggerFrom = function(i, s, o, l, a, c, u) {
    return o.runBackwards = 1, Zn(o).immediateRender = Re(o.immediateRender), this.staggerTo(i, s, o, l, a, c, u);
  }, n.staggerFromTo = function(i, s, o, l, a, c, u, f) {
    return l.startAt = o, Zn(l).immediateRender = Re(l.immediateRender), this.staggerTo(i, s, l, a, c, u, f);
  }, n.render = function(i, s, o) {
    var l = this._time, a = this._dirty ? this.totalDuration() : this._tDur, c = this._dur, u = i <= 0 ? 0 : be(i), f = this._zTime < 0 != i < 0 && (this._initted || !c), d, _, g, h, v, b, x, N, E, O, R, k;
    if (this !== ae && u > a && i >= 0 && (u = a), u !== this._tTime || o || f) {
      if (l !== this._time && c && (u += this._time - l, i += this._time - l), d = u, E = this._start, N = this._ts, b = !N, f && (c || (l = this._zTime), (i || !s) && (this._zTime = i)), this._repeat) {
        if (R = this._yoyo, v = c + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(v * 100 + i, s, o);
        if (d = be(u % v), u === a ? (h = this._repeat, d = c) : (h = ~~(u / v), h && h === u / v && (d = c, h--), d > c && (d = c)), O = Fn(this._tTime, v), !l && this._tTime && O !== h && (O = h), R && h & 1 && (d = c - d, k = 1), h !== O && !this._lock) {
          var w = R && O & 1, T = w === (R && h & 1);
          if (h < O && (w = !w), l = w ? 0 : c, this._lock = 1, this.render(l || (k ? 0 : be(h * v)), s, !c)._lock = 0, this._tTime = u, !s && this.parent && Je(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), l && l !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (c = this._dur, a = this._tDur, T && (this._lock = 2, l = w ? c : -1e-4, this.render(l, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !b)
            return this;
          Ba(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = Bd(this, be(l), be(d)), x && (u -= d - (d = x._start))), this._tTime = u, this._time = d, this._act = !N, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, l = 0), !l && d && !s && (Je(this, "onStart"), this._tTime !== u))
        return this;
      if (d >= l && i >= 0)
        for (_ = this._first; _; ) {
          if (g = _._next, (_._act || d >= _._start) && _._ts && x !== _) {
            if (_.parent !== this)
              return this.render(i, s, o);
            if (_.render(_._ts > 0 ? (d - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (d - _._start) * _._ts, s, o), d !== this._time || !this._ts && !b) {
              x = 0, g && (u += this._zTime = -se);
              break;
            }
          }
          _ = g;
        }
      else {
        _ = this._last;
        for (var L = i < 0 ? i : d; _; ) {
          if (g = _._prev, (_._act || L <= _._end) && _._ts && x !== _) {
            if (_.parent !== this)
              return this.render(i, s, o);
            if (_.render(_._ts > 0 ? (L - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (L - _._start) * _._ts, s, o || we && (_._initted || _._startAt)), d !== this._time || !this._ts && !b) {
              x = 0, g && (u += this._zTime = L ? -se : se);
              break;
            }
          }
          _ = g;
        }
      }
      if (x && !s && (this.pause(), x.render(d >= l ? 0 : -se)._zTime = d >= l ? 1 : -1, this._ts))
        return this._start = E, gi(this), this.render(i, s, o);
      this._onUpdate && !s && Je(this, "onUpdate", !0), (u === a && this._tTime >= this.totalDuration() || !u && l) && (E === this._start || Math.abs(N) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (u === a && this._ts > 0 || !u && this._ts < 0) && zt(this, 1), !s && !(i < 0 && !l) && (u || l || !a) && (Je(this, u === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < a && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, n.add = function(i, s) {
    var o = this;
    if (Tt(s) || (s = We(this, s, i)), !(i instanceof Ln)) {
      if (Te(i))
        return i.forEach(function(l) {
          return o.add(l, s);
        }), this;
      if (Ee(i))
        return this.addLabel(i, s);
      if (ue(i))
        i = ge.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? pt(this, i, s) : this;
  }, n.getChildren = function(i, s, o, l) {
    i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), l === void 0 && (l = -Xe);
    for (var a = [], c = this._first; c; )
      c._start >= l && (c instanceof ge ? s && a.push(c) : (o && a.push(c), i && a.push.apply(a, c.getChildren(!0, s, o)))), c = c._next;
    return a;
  }, n.getById = function(i) {
    for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
      if (s[o].vars.id === i)
        return s[o];
  }, n.remove = function(i) {
    return Ee(i) ? this.removeLabel(i) : ue(i) ? this.killTweensOf(i) : (mi(this, i), i === this._recent && (this._recent = this._last), fn(this));
  }, n.totalTime = function(i, s) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = be(Be.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), t.prototype.totalTime.call(this, i, s), this._forcing = 0, this) : this._tTime;
  }, n.addLabel = function(i, s) {
    return this.labels[i] = We(this, s), this;
  }, n.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, n.addPause = function(i, s, o) {
    var l = ge.delayedCall(0, s || cr, o);
    return l.data = "isPause", this._hasPause = 1, pt(this, l, We(this, i));
  }, n.removePause = function(i) {
    var s = this._first;
    for (i = We(this, i); s; )
      s._start === i && s.data === "isPause" && zt(s), s = s._next;
  }, n.killTweensOf = function(i, s, o) {
    for (var l = this.getTweensOf(i, o), a = l.length; a--; )
      At !== l[a] && l[a].kill(i, s);
    return this;
  }, n.getTweensOf = function(i, s) {
    for (var o = [], l = Ge(i), a = this._first, c = Tt(s), u; a; )
      a instanceof ge ? Ad(a._targets, l) && (c ? (!At || a._initted && a._ts) && a.globalTime(0) <= s && a.globalTime(a.totalDuration()) > s : !s || a.isActive()) && o.push(a) : (u = a.getTweensOf(l, s)).length && o.push.apply(o, u), a = a._next;
    return o;
  }, n.tweenTo = function(i, s) {
    s = s || {};
    var o = this, l = We(o, i), a = s, c = a.startAt, u = a.onStart, f = a.onStartParams, d = a.immediateRender, _, g = ge.to(o, Qe({
      ease: s.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: l,
      overwrite: "auto",
      duration: s.duration || Math.abs((l - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || se,
      onStart: function() {
        if (o.pause(), !_) {
          var v = s.duration || Math.abs((l - (c && "time" in c ? c.time : o._time)) / o.timeScale());
          g._dur !== v && In(g, v, 0, 1).render(g._time, !0, !0), _ = 1;
        }
        u && u.apply(g, f || []);
      }
    }, s));
    return d ? g.render(0) : g;
  }, n.tweenFromTo = function(i, s, o) {
    return this.tweenTo(s, Qe({
      startAt: {
        time: We(this, i)
      }
    }, o));
  }, n.recent = function() {
    return this._recent;
  }, n.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Ko(this, We(this, i));
  }, n.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Ko(this, We(this, i), 1);
  }, n.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + se);
  }, n.shiftChildren = function(i, s, o) {
    o === void 0 && (o = 0);
    for (var l = this._first, a = this.labels, c; l; )
      l._start >= o && (l._start += i, l._end += i), l = l._next;
    if (s)
      for (c in a)
        a[c] >= o && (a[c] += i);
    return fn(this);
  }, n.invalidate = function(i) {
    var s = this._first;
    for (this._lock = 0; s; )
      s.invalidate(i), s = s._next;
    return t.prototype.invalidate.call(this, i);
  }, n.clear = function(i) {
    i === void 0 && (i = !0);
    for (var s = this._first, o; s; )
      o = s._next, this.remove(s), s = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), fn(this);
  }, n.totalDuration = function(i) {
    var s = 0, o = this, l = o._last, a = Xe, c, u, f;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (f = o.parent; l; )
        c = l._prev, l._dirty && l.totalDuration(), u = l._start, u > a && o._sort && l._ts && !o._lock ? (o._lock = 1, pt(o, l, u - l._delay, 1)._lock = 0) : a = u, u < 0 && l._ts && (s -= u, (!f && !o._dp || f && f.smoothChildTiming) && (o._start += u / o._ts, o._time -= u, o._tTime -= u), o.shiftChildren(-u, !1, -1 / 0), a = 0), l._end > s && l._ts && (s = l._end), l = c;
      In(o, o === ae && o._time > s ? o._time : s, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(i) {
    if (ae._ts && (xa(ae, Jr(i, ae)), Ea = Be.frame), Be.frame >= jo) {
      jo += Ue.autoSleep || 120;
      var s = ae._first;
      if ((!s || !s._ts) && Ue.autoSleep && Be._listeners.length < 2) {
        for (; s && !s._ts; )
          s = s._next;
        s || Be.sleep();
      }
    }
  }, e;
}(Ln);
Qe(ke.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var rp = function(e, n, r, i, s, o, l) {
  var a = new Ie(this._pt, e, n, 0, 1, qa, null, s), c = 0, u = 0, f, d, _, g, h, v, b, x;
  for (a.b = r, a.e = i, r += "", i += "", (b = ~i.indexOf("random(")) && (i = ur(i)), o && (x = [r, i], o(x, e, n), r = x[0], i = x[1]), d = r.match(Si) || []; f = Si.exec(i); )
    g = f[0], h = i.substring(c, f.index), _ ? _ = (_ + 1) % 5 : h.substr(-5) === "rgba(" && (_ = 1), g !== d[u++] && (v = parseFloat(d[u - 1]) || 0, a._pt = {
      _next: a._pt,
      p: h || u === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: v,
      c: g.charAt(1) === "=" ? Sn(v, g) - v : parseFloat(g) - v,
      m: _ && _ < 4 ? Math.round : 0
    }, c = Si.lastIndex);
  return a.c = c < i.length ? i.substring(c, i.length) : "", a.fp = l, (_a.test(i) || b) && (a.e = 0), this._pt = a, a;
}, Gs = function(e, n, r, i, s, o, l, a, c, u) {
  ue(i) && (i = i(s || 0, e, o));
  var f = e[n], d = r !== "get" ? r : ue(f) ? c ? e[n.indexOf("set") || !ue(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](c) : e[n]() : f, _ = ue(f) ? c ? ap : Wa : Zs, g;
  if (Ee(i) && (~i.indexOf("random(") && (i = ur(i)), i.charAt(1) === "=" && (g = Sn(d, i) + (Ne(d) || 0), (g || g === 0) && (i = g))), !u || d !== i || _s)
    return !isNaN(d * i) && i !== "" ? (g = new Ie(this._pt, e, n, +d || 0, i - (d || 0), typeof f == "boolean" ? up : Ya, 0, _), c && (g.fp = c), l && g.modifier(l, this, e), this._pt = g) : (!f && !(n in e) && Ws(n, i), rp.call(this, e, n, d, i, _, a || Ue.stringFilter, c));
}, ip = function(e, n, r, i, s) {
  if (ue(e) && (e = er(e, s, n, r, i)), !mt(e) || e.style && e.nodeType || Te(e) || pa(e))
    return Ee(e) ? er(e, s, n, r, i) : e;
  var o = {}, l;
  for (l in e)
    o[l] = er(e[l], s, n, r, i);
  return o;
}, za = function(e, n, r, i, s, o) {
  var l, a, c, u;
  if (Le[e] && (l = new Le[e]()).init(s, l.rawVars ? n[e] : ip(n[e], i, s, o, r), r, i, o) !== !1 && (r._pt = a = new Ie(r._pt, s, e, 0, 1, l.render, l, 0, l.priority), r !== Tn))
    for (c = r._ptLookup[r._targets.indexOf(s)], u = l._props.length; u--; )
      c[l._props[u]] = a;
  return l;
}, At, _s, Js = function t(e, n, r) {
  var i = e.vars, s = i.ease, o = i.startAt, l = i.immediateRender, a = i.lazy, c = i.onUpdate, u = i.onUpdateParams, f = i.callbackScope, d = i.runBackwards, _ = i.yoyoEase, g = i.keyframes, h = i.autoRevert, v = e._dur, b = e._startAt, x = e._targets, N = e.parent, E = N && N.data === "nested" ? N.vars.targets : x, O = e._overwrite === "auto" && !zs, R = e.timeline, k, w, T, L, z, q, ee, le, Q, Z, B, U, ye;
  if (R && (!g || !s) && (s = "none"), e._ease = dn(s, Rn.ease), e._yEase = _ ? La(dn(_ === !0 ? s : _, Rn.ease)) : 0, _ && e._yoyo && !e._repeat && (_ = e._yEase, e._yEase = e._ease, e._ease = _), e._from = !R && !!i.runBackwards, !R || g && !i.stagger) {
    if (le = x[0] ? un(x[0]).harness : 0, U = le && i[le.prop], k = Gr(i, Ys), b && (b._zTime < 0 && b.progress(1), n < 0 && d && l && !h ? b.render(-1, !0) : b.revert(d && v ? Ir : Vd), b._lazy = 0), o) {
      if (zt(e._startAt = ge.set(x, Qe({
        data: "isStart",
        overwrite: !1,
        parent: N,
        immediateRender: !0,
        lazy: !b && Re(a),
        startAt: null,
        delay: 0,
        onUpdate: c,
        onUpdateParams: u,
        callbackScope: f,
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (we || !l && !h) && e._startAt.revert(Ir), l && v && n <= 0 && r <= 0) {
        n && (e._zTime = n);
        return;
      }
    } else if (d && v && !b) {
      if (n && (l = !1), T = Qe({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: l && !b && Re(a),
        immediateRender: l,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: N
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
      }, k), U && (T[le.prop] = U), zt(e._startAt = ge.set(x, T)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (we ? e._startAt.revert(Ir) : e._startAt.render(-1, !0)), e._zTime = n, !l)
        t(e._startAt, se, se);
      else if (!n)
        return;
    }
    for (e._pt = e._ptCache = 0, a = v && Re(a) || a && !v, w = 0; w < x.length; w++) {
      if (z = x[w], ee = z._gsap || Xs(x)[w]._gsap, e._ptLookup[w] = Z = {}, cs[ee.id] && $t.length && Xr(), B = E === x ? w : E.indexOf(z), le && (Q = new le()).init(z, U || k, e, B, E) !== !1 && (e._pt = L = new Ie(e._pt, z, Q.name, 0, 1, Q.render, Q, 0, Q.priority), Q._props.forEach(function(et) {
        Z[et] = L;
      }), Q.priority && (q = 1)), !le || U)
        for (T in k)
          Le[T] && (Q = za(T, k, e, B, z, E)) ? Q.priority && (q = 1) : Z[T] = L = Gs.call(e, z, T, "get", k[T], B, E, 0, i.stringFilter);
      e._op && e._op[w] && e.kill(z, e._op[w]), O && e._pt && (At = e, ae.killTweensOf(z, Z, e.globalTime(n)), ye = !e.parent, At = 0), e._pt && a && (cs[ee.id] = 1);
    }
    q && Xa(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = c, e._initted = (!e._op || e._pt) && !ye, g && n <= 0 && R.render(Xe, !0, !0);
}, sp = function(e, n, r, i, s, o, l) {
  var a = (e._pt && e._ptCache || (e._ptCache = {}))[n], c, u, f, d;
  if (!a)
    for (a = e._ptCache[n] = [], f = e._ptLookup, d = e._targets.length; d--; ) {
      if (c = f[d][n], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== n && c.fp !== n; )
          c = c._next;
      if (!c)
        return _s = 1, e.vars[n] = "+=0", Js(e, l), _s = 0, 1;
      a.push(c);
    }
  for (d = a.length; d--; )
    u = a[d], c = u._pt || u, c.s = (i || i === 0) && !s ? i : c.s + (i || 0) + o * c.c, c.c = r - c.s, u.e && (u.e = fe(r) + Ne(u.e)), u.b && (u.b = c.s + Ne(u.b));
}, op = function(e, n) {
  var r = e[0] ? un(e[0]).harness : 0, i = r && r.aliases, s, o, l, a;
  if (!i)
    return n;
  s = hn({}, n);
  for (o in i)
    if (o in s)
      for (a = i[o].split(","), l = a.length; l--; )
        s[a[l]] = s[o];
  return s;
}, lp = function(e, n, r, i) {
  var s = n.ease || i || "power1.inOut", o, l;
  if (Te(n))
    l = r[e] || (r[e] = []), n.forEach(function(a, c) {
      return l.push({
        t: c / (n.length - 1) * 100,
        v: a,
        e: s
      });
    });
  else
    for (o in n)
      l = r[o] || (r[o] = []), o === "ease" || l.push({
        t: parseFloat(e),
        v: n[o],
        e: s
      });
}, er = function(e, n, r, i, s) {
  return ue(e) ? e.call(n, r, i, s) : Ee(e) && ~e.indexOf("random(") ? ur(e) : e;
}, Ha = qs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Ka = {};
Fe(Ha + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
  return Ka[t] = 1;
});
var ge = /* @__PURE__ */ function(t) {
  ua(e, t);
  function e(r, i, s, o) {
    var l;
    typeof i == "number" && (s.duration = i, i = s, s = null), l = t.call(this, o ? i : Zn(i)) || this;
    var a = l.vars, c = a.duration, u = a.delay, f = a.immediateRender, d = a.stagger, _ = a.overwrite, g = a.keyframes, h = a.defaults, v = a.scrollTrigger, b = a.yoyoEase, x = i.parent || ae, N = (Te(r) || pa(r) ? Tt(r[0]) : "length" in i) ? [r] : Ge(r), E, O, R, k, w, T, L, z;
    if (l._targets = N.length ? Xs(N) : qr("GSAP target " + r + " not found. https://greensock.com", !Ue.nullTargetWarn) || [], l._ptLookup = [], l._overwrite = _, g || d || Dr(c) || Dr(u)) {
      if (i = l.vars, E = l.timeline = new ke({
        data: "nested",
        defaults: h || {},
        targets: x && x.data === "nested" ? x.vars.targets : N
      }), E.kill(), E.parent = E._dp = bt(l), E._start = 0, d || Dr(c) || Dr(u)) {
        if (k = N.length, L = d && Va(d), mt(d))
          for (w in d)
            ~Ha.indexOf(w) && (z || (z = {}), z[w] = d[w]);
        for (O = 0; O < k; O++)
          R = Gr(i, Ka), R.stagger = 0, b && (R.yoyoEase = b), z && hn(R, z), T = N[O], R.duration = +er(c, bt(l), O, T, N), R.delay = (+er(u, bt(l), O, T, N) || 0) - l._delay, !d && k === 1 && R.delay && (l._delay = u = R.delay, l._start += u, R.delay = 0), E.to(T, R, L ? L(O, T, N) : 0), E._ease = J.none;
        E.duration() ? c = u = 0 : l.timeline = 0;
      } else if (g) {
        Zn(Qe(E.vars.defaults, {
          ease: "none"
        })), E._ease = dn(g.ease || i.ease || "none");
        var q = 0, ee, le, Q;
        if (Te(g))
          g.forEach(function(Z) {
            return E.to(N, Z, ">");
          }), E.duration();
        else {
          R = {};
          for (w in g)
            w === "ease" || w === "easeEach" || lp(w, g[w], R, g.easeEach);
          for (w in R)
            for (ee = R[w].sort(function(Z, B) {
              return Z.t - B.t;
            }), q = 0, O = 0; O < ee.length; O++)
              le = ee[O], Q = {
                ease: le.e,
                duration: (le.t - (O ? ee[O - 1].t : 0)) / 100 * c
              }, Q[w] = le.v, E.to(N, Q, q), q += Q.duration;
          E.duration() < c && E.to({}, {
            duration: c - E.duration()
          });
        }
      }
      c || l.duration(c = E.duration());
    } else
      l.timeline = 0;
    return _ === !0 && !zs && (At = bt(l), ae.killTweensOf(N), At = 0), pt(x, bt(l), s), i.reversed && l.reverse(), i.paused && l.paused(!0), (f || !c && !g && l._start === be(x._time) && Re(f) && Id(bt(l)) && x.data !== "nested") && (l._tTime = -se, l.render(Math.max(0, -u) || 0)), v && Da(bt(l), v), l;
  }
  var n = e.prototype;
  return n.render = function(i, s, o) {
    var l = this._time, a = this._tDur, c = this._dur, u = i < 0, f = i > a - se && !u ? a : i < se ? 0 : i, d, _, g, h, v, b, x, N, E;
    if (!c)
      Ld(this, i, s, o);
    else if (f !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
      if (d = f, N = this.timeline, this._repeat) {
        if (h = c + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(h * 100 + i, s, o);
        if (d = be(f % h), f === a ? (g = this._repeat, d = c) : (g = ~~(f / h), g && g === f / h && (d = c, g--), d > c && (d = c)), b = this._yoyo && g & 1, b && (E = this._yEase, d = c - d), v = Fn(this._tTime, h), d === l && !o && this._initted)
          return this._tTime = f, this;
        g !== v && (N && this._yEase && Ba(N, b), this.vars.repeatRefresh && !b && !this._lock && (this._lock = o = 1, this.render(be(h * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Ca(this, u ? i : d, o, s, f))
          return this._tTime = 0, this;
        if (l !== this._time)
          return this;
        if (c !== this._dur)
          return this.render(i, s, o);
      }
      if (this._tTime = f, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (E || this._ease)(d / c), this._from && (this.ratio = x = 1 - x), d && !l && !s && (Je(this, "onStart"), this._tTime !== f))
        return this;
      for (_ = this._pt; _; )
        _.r(x, _.d), _ = _._next;
      N && N.render(i < 0 ? i : !d && b ? -se : N._dur * N._ease(d / this._dur), s, o) || this._startAt && (this._zTime = i), this._onUpdate && !s && (u && us(this, i, s, o), Je(this, "onUpdate")), this._repeat && g !== v && this.vars.onRepeat && !s && this.parent && Je(this, "onRepeat"), (f === this._tDur || !f) && this._tTime === f && (u && !this._onUpdate && us(this, i, !0, !0), (i || !c) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && zt(this, 1), !s && !(u && !l) && (f || l || b) && (Je(this, f === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < a && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, n.targets = function() {
    return this._targets;
  }, n.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), t.prototype.invalidate.call(this, i);
  }, n.resetTo = function(i, s, o, l) {
    fr || Be.wake(), this._ts || this.play();
    var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || Js(this, a), c = this._ease(a / this._dur), sp(this, i, s, o, l, c, a) ? this.resetTo(i, s, o, l) : (vi(this, 0), this.parent || wa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, n.kill = function(i, s) {
    if (s === void 0 && (s = "all"), !i && (!s || s === "all"))
      return this._lazy = this._pt = 0, this.parent ? qn(this) : this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, s, At && At.vars.overwrite !== !0)._first || qn(this), this.parent && o !== this.timeline.totalDuration() && In(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var l = this._targets, a = i ? Ge(i) : l, c = this._ptLookup, u = this._pt, f, d, _, g, h, v, b;
    if ((!s || s === "all") && Rd(l, a))
      return s === "all" && (this._pt = 0), qn(this);
    for (f = this._op = this._op || [], s !== "all" && (Ee(s) && (h = {}, Fe(s, function(x) {
      return h[x] = 1;
    }), s = h), s = op(l, s)), b = l.length; b--; )
      if (~a.indexOf(l[b])) {
        d = c[b], s === "all" ? (f[b] = s, g = d, _ = {}) : (_ = f[b] = f[b] || {}, g = s);
        for (h in g)
          v = d && d[h], v && ((!("kill" in v.d) || v.d.kill(h) === !0) && mi(this, v, "_pt"), delete d[h]), _ !== "all" && (_[h] = 1);
      }
    return this._initted && !this._pt && u && qn(this), this;
  }, e.to = function(i, s) {
    return new e(i, s, arguments[2]);
  }, e.from = function(i, s) {
    return Qn(1, arguments);
  }, e.delayedCall = function(i, s, o, l) {
    return new e(s, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: s,
      onReverseComplete: s,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: l
    });
  }, e.fromTo = function(i, s, o) {
    return Qn(2, arguments);
  }, e.set = function(i, s) {
    return s.duration = 0, s.repeatDelay || (s.repeat = 0), new e(i, s);
  }, e.killTweensOf = function(i, s, o) {
    return ae.killTweensOf(i, s, o);
  }, e;
}(Ln);
Qe(ge.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
Fe("staggerTo,staggerFrom,staggerFromTo", function(t) {
  ge[t] = function() {
    var e = new ke(), n = ds.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var Zs = function(e, n, r) {
  return e[n] = r;
}, Wa = function(e, n, r) {
  return e[n](r);
}, ap = function(e, n, r, i) {
  return e[n](i.fp, r);
}, cp = function(e, n, r) {
  return e.setAttribute(n, r);
}, Qs = function(e, n) {
  return ue(e[n]) ? Wa : Hs(e[n]) && e.setAttribute ? cp : Zs;
}, Ya = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
}, up = function(e, n) {
  return n.set(n.t, n.p, !!(n.s + n.c * e), n);
}, qa = function(e, n) {
  var r = n._pt, i = "";
  if (!e && n.b)
    i = n.b;
  else if (e === 1 && n.e)
    i = n.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
    i += n.c;
  }
  n.set(n.t, n.p, i, n);
}, eo = function(e, n) {
  for (var r = n._pt; r; )
    r.r(e, r.d), r = r._next;
}, fp = function(e, n, r, i) {
  for (var s = this._pt, o; s; )
    o = s._next, s.p === i && s.modifier(e, n, r), s = o;
}, dp = function(e) {
  for (var n = this._pt, r, i; n; )
    i = n._next, n.p === e && !n.op || n.op === e ? mi(this, n, "_pt") : n.dep || (r = 1), n = i;
  return !r;
}, pp = function(e, n, r, i) {
  i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
}, Xa = function(e) {
  for (var n = e._pt, r, i, s, o; n; ) {
    for (r = n._next, i = s; i && i.pr > n.pr; )
      i = i._next;
    (n._prev = i ? i._prev : o) ? n._prev._next = n : s = n, (n._next = i) ? i._prev = n : o = n, n = r;
  }
  e._pt = s;
}, Ie = /* @__PURE__ */ function() {
  function t(n, r, i, s, o, l, a, c, u) {
    this.t = r, this.s = s, this.c = o, this.p = i, this.r = l || Ya, this.d = a || this, this.set = c || Zs, this.pr = u || 0, this._next = n, n && (n._prev = this);
  }
  var e = t.prototype;
  return e.modifier = function(r, i, s) {
    this.mSet = this.mSet || this.set, this.set = pp, this.m = r, this.mt = s, this.tween = i;
  }, t;
}();
Fe(qs + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
  return Ys[t] = 1;
});
ze.TweenMax = ze.TweenLite = ge;
ze.TimelineLite = ze.TimelineMax = ke;
ae = new ke({
  sortChildren: !1,
  defaults: Rn,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
Ue.stringFilter = $a;
var Bn = [], Lr = {}, hp = [], Yo = 0, Ri = function(e) {
  return (Lr[e] || hp).map(function(n) {
    return n();
  });
}, ms = function() {
  var e = Date.now(), n = [];
  e - Yo > 2 && (Ri("matchMediaInit"), Bn.forEach(function(r) {
    var i = r.queries, s = r.conditions, o, l, a, c;
    for (l in i)
      o = Ye.matchMedia(i[l]).matches, o && (a = 1), o !== s[l] && (s[l] = o, c = 1);
    c && (r.revert(), a && n.push(r));
  }), Ri("matchMediaRevert"), n.forEach(function(r) {
    return r.onMatch(r);
  }), Yo = e, Ri("matchMedia"));
}, Ga = /* @__PURE__ */ function() {
  function t(n, r) {
    this.selector = r && ps(r), this.data = [], this._r = [], this.isReverted = !1, n && this.add(n);
  }
  var e = t.prototype;
  return e.add = function(r, i, s) {
    ue(r) && (s = i, i = r, r = ue);
    var o = this, l = function() {
      var c = me, u = o.selector, f;
      return c && c !== o && c.data.push(o), s && (o.selector = ps(s)), me = o, f = i.apply(o, arguments), ue(f) && o._r.push(f), me = c, o.selector = u, o.isReverted = !1, f;
    };
    return o.last = l, r === ue ? l(o) : r ? o[r] = l : l;
  }, e.ignore = function(r) {
    var i = me;
    me = null, r(this), me = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof ge && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, i) {
    var s = this;
    if (r) {
      var o = this.getTweens();
      this.data.forEach(function(a) {
        a.data === "isFlip" && (a.revert(), a.getChildren(!0, !0, !1).forEach(function(c) {
          return o.splice(o.indexOf(c), 1);
        }));
      }), o.map(function(a) {
        return {
          g: a.globalTime(0),
          t: a
        };
      }).sort(function(a, c) {
        return c.g - a.g || -1;
      }).forEach(function(a) {
        return a.t.revert(r);
      }), this.data.forEach(function(a) {
        return !(a instanceof Ln) && a.revert && a.revert(r);
      }), this._r.forEach(function(a) {
        return a(r, s);
      }), this.isReverted = !0;
    } else
      this.data.forEach(function(a) {
        return a.kill && a.kill();
      });
    if (this.clear(), i) {
      var l = Bn.indexOf(this);
      ~l && Bn.splice(l, 1);
    }
  }, e.revert = function(r) {
    this.kill(r || {});
  }, t;
}(), _p = /* @__PURE__ */ function() {
  function t(n) {
    this.contexts = [], this.scope = n;
  }
  var e = t.prototype;
  return e.add = function(r, i, s) {
    mt(r) || (r = {
      matches: r
    });
    var o = new Ga(0, s || this.scope), l = o.conditions = {}, a, c, u;
    this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
    for (c in r)
      c === "all" ? u = 1 : (a = Ye.matchMedia(r[c]), a && (Bn.indexOf(o) < 0 && Bn.push(o), (l[c] = a.matches) && (u = 1), a.addListener ? a.addListener(ms) : a.addEventListener("change", ms)));
    return u && i(o), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, t;
}(), Zr = {
  registerPlugin: function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    n.forEach(function(i) {
      return Gd(i);
    });
  },
  timeline: function(e) {
    return new ke(e);
  },
  getTweensOf: function(e, n) {
    return ae.getTweensOf(e, n);
  },
  getProperty: function(e, n, r, i) {
    Ee(e) && (e = Ge(e)[0]);
    var s = un(e || {}).get, o = r ? Na : Oa;
    return r === "native" && (r = ""), e && (n ? o((Le[n] && Le[n].get || s)(e, n, r, i)) : function(l, a, c) {
      return o((Le[l] && Le[l].get || s)(e, l, a, c));
    });
  },
  quickSetter: function(e, n, r) {
    if (e = Ge(e), e.length > 1) {
      var i = e.map(function(u) {
        return He.quickSetter(u, n, r);
      }), s = i.length;
      return function(u) {
        for (var f = s; f--; )
          i[f](u);
      };
    }
    e = e[0] || {};
    var o = Le[n], l = un(e), a = l.harness && (l.harness.aliases || {})[n] || n, c = o ? function(u) {
      var f = new o();
      Tn._pt = 0, f.init(e, r ? u + r : u, Tn, 0, [e]), f.render(1, f), Tn._pt && eo(1, Tn);
    } : l.set(e, a);
    return o ? c : function(u) {
      return c(e, a, r ? u + r : u, l, 1);
    };
  },
  quickTo: function(e, n, r) {
    var i, s = He.to(e, hn((i = {}, i[n] = "+=0.1", i.paused = !0, i), r || {})), o = function(a, c, u) {
      return s.resetTo(n, a, c, u);
    };
    return o.tween = s, o;
  },
  isTweening: function(e) {
    return ae.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = dn(e.ease, Rn.ease)), Uo(Rn, e || {});
  },
  config: function(e) {
    return Uo(Ue, e || {});
  },
  registerEffect: function(e) {
    var n = e.name, r = e.effect, i = e.plugins, s = e.defaults, o = e.extendTimeline;
    (i || "").split(",").forEach(function(l) {
      return l && !Le[l] && !ze[l] && qr(n + " effect requires " + l + " plugin.");
    }), Vi[n] = function(l, a, c) {
      return r(Ge(l), Qe(a || {}, s), c);
    }, o && (ke.prototype[n] = function(l, a, c) {
      return this.add(Vi[n](l, mt(a) ? a : (c = a) && {}, this), c);
    });
  },
  registerEase: function(e, n) {
    J[e] = dn(n);
  },
  parseEase: function(e, n) {
    return arguments.length ? dn(e, n) : J;
  },
  getById: function(e) {
    return ae.getById(e);
  },
  exportRoot: function(e, n) {
    e === void 0 && (e = {});
    var r = new ke(e), i, s;
    for (r.smoothChildTiming = Re(e.smoothChildTiming), ae.remove(r), r._dp = 0, r._time = r._tTime = ae._time, i = ae._first; i; )
      s = i._next, (n || !(!i._dur && i instanceof ge && i.vars.onComplete === i._targets[0])) && pt(r, i, i._start - i._delay), i = s;
    return pt(ae, r, 0), r;
  },
  context: function(e, n) {
    return e ? new Ga(e, n) : me;
  },
  matchMedia: function(e) {
    return new _p(e);
  },
  matchMediaRefresh: function() {
    return Bn.forEach(function(e) {
      var n = e.conditions, r, i;
      for (i in n)
        n[i] && (n[i] = !1, r = 1);
      r && e.revert();
    }) || ms();
  },
  addEventListener: function(e, n) {
    var r = Lr[e] || (Lr[e] = []);
    ~r.indexOf(n) || r.push(n);
  },
  removeEventListener: function(e, n) {
    var r = Lr[e], i = r && r.indexOf(n);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: Yd,
    wrapYoyo: qd,
    distribute: Va,
    random: Aa,
    snap: Ma,
    normalize: Wd,
    getUnit: Ne,
    clamp: Ud,
    splitColor: Fa,
    toArray: Ge,
    selector: ps,
    mapRange: Ra,
    pipe: Hd,
    unitize: Kd,
    interpolate: Xd,
    shuffle: Sa
  },
  install: va,
  effects: Vi,
  ticker: Be,
  updateRoot: ke.updateRoot,
  plugins: Le,
  globalTimeline: ae,
  core: {
    PropTween: Ie,
    globals: ya,
    Tween: ge,
    Timeline: ke,
    Animation: Ln,
    getCache: un,
    _removeLinkedListItem: mi,
    reverting: function() {
      return we;
    },
    context: function(e) {
      return e && me && (me.data.push(e), e._ctx = me), me;
    },
    suppressOverwrites: function(e) {
      return zs = e;
    }
  }
};
Fe("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
  return Zr[t] = ge[t];
});
Be.add(ke.updateRoot);
Tn = Zr.to({}, {
  duration: 0
});
var mp = function(e, n) {
  for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
    r = r._next;
  return r;
}, gp = function(e, n) {
  var r = e._targets, i, s, o;
  for (i in n)
    for (s = r.length; s--; )
      o = e._ptLookup[s][i], o && (o = o.d) && (o._pt && (o = mp(o, i)), o && o.modifier && o.modifier(n[i], e, r[s], i));
}, Fi = function(e, n) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, s, o) {
      o._onInit = function(l) {
        var a, c;
        if (Ee(s) && (a = {}, Fe(s, function(u) {
          return a[u] = 1;
        }), s = a), n) {
          a = {};
          for (c in s)
            a[c] = n(s[c]);
          s = a;
        }
        gp(l, s);
      };
    }
  };
}, He = Zr.registerPlugin({
  name: "attr",
  init: function(e, n, r, i, s) {
    var o, l, a;
    this.tween = r;
    for (o in n)
      a = e.getAttribute(o) || "", l = this.add(e, "setAttribute", (a || 0) + "", n[o], i, s, 0, 0, o), l.op = o, l.b = a, this._props.push(o);
  },
  render: function(e, n) {
    for (var r = n._pt; r; )
      we ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(e, n) {
    for (var r = n.length; r--; )
      this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
  }
}, Fi("roundProps", hs), Fi("modifiers"), Fi("snap", Ma)) || Zr;
ge.version = ke.version = He.version = "3.11.4";
ga = 1;
da() && $n();
J.Power0;
J.Power1;
J.Power2;
J.Power3;
J.Power4;
J.Linear;
J.Quad;
J.Cubic;
J.Quart;
J.Quint;
J.Strong;
J.Elastic;
J.Back;
J.SteppedEase;
J.Bounce;
J.Sine;
J.Expo;
J.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var qo, kt, Vn, to, nn, Xo, no, vp = function() {
  return typeof window < "u";
}, Dt = {}, Qt = 180 / Math.PI, Mn = Math.PI / 180, En = Math.atan2, Go = 1e8, ro = /([A-Z])/g, yp = /(left|right|width|margin|padding|x)/i, Ep = /[\s,\(]\S/, Ot = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, gs = function(e, n) {
  return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, bp = function(e, n) {
  return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
}, xp = function(e, n) {
  return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n);
}, Op = function(e, n) {
  var r = n.s + n.c * e;
  n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
}, Ja = function(e, n) {
  return n.set(n.t, n.p, e ? n.e : n.b, n);
}, Za = function(e, n) {
  return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
}, Np = function(e, n, r) {
  return e.style[n] = r;
}, wp = function(e, n, r) {
  return e.style.setProperty(n, r);
}, Tp = function(e, n, r) {
  return e._gsap[n] = r;
}, Dp = function(e, n, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, Cp = function(e, n, r, i, s) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(s, o);
}, Pp = function(e, n, r, i, s) {
  var o = e._gsap;
  o[n] = r, o.renderTransform(s, o);
}, ce = "transform", lt = ce + "Origin", Sp = function(e, n) {
  var r = this, i = this.target, s = i.style;
  if (e in Dt) {
    if (this.tfm = this.tfm || {}, e !== "transform" && (e = Ot[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
      return r.tfm[o] = xt(i, o);
    }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : xt(i, e)), this.props.indexOf(ce) >= 0)
      return;
    i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(lt, n, "")), e = ce;
  }
  (s || n) && this.props.push(e, n, s[e]);
}, Qa = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Vp = function() {
  var e = this.props, n = this.target, r = n.style, i = n._gsap, s, o;
  for (s = 0; s < e.length; s += 3)
    e[s + 1] ? n[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty(e[s].replace(ro, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), n.setAttribute("data-svg-origin", this.svgo || "")), s = no(), s && !s.isStart && !r[ce] && (Qa(r), i.uncache = 1);
  }
}, ec = function(e, n) {
  var r = {
    target: e,
    props: [],
    revert: Vp,
    save: Sp
  };
  return n && n.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, tc, vs = function(e, n) {
  var r = kt.createElementNS ? kt.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : kt.createElement(e);
  return r.style ? r : kt.createElement(e);
}, ht = function t(e, n, r) {
  var i = getComputedStyle(e);
  return i[n] || i.getPropertyValue(n.replace(ro, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, jn(n) || n, 1) || "";
}, Jo = "O,Moz,ms,Ms,Webkit".split(","), jn = function(e, n, r) {
  var i = n || nn, s = i.style, o = 5;
  if (e in s && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(Jo[o] + e in s); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Jo[o] : "") + e;
}, ys = function() {
  vp() && window.document && (qo = window, kt = qo.document, Vn = kt.documentElement, nn = vs("div") || {
    style: {}
  }, vs("div"), ce = jn(ce), lt = ce + "Origin", nn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", tc = !!jn("perspective"), no = He.core.reverting, to = 1);
}, Ii = function t(e) {
  var n = vs("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, s = this.style.cssText, o;
  if (Vn.appendChild(n), n.appendChild(this), this.style.display = "block", e)
    try {
      o = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t;
    } catch {
    }
  else
    this._gsapBBox && (o = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Vn.removeChild(n), this.style.cssText = s, o;
}, Zo = function(e, n) {
  for (var r = n.length; r--; )
    if (e.hasAttribute(n[r]))
      return e.getAttribute(n[r]);
}, nc = function(e) {
  var n;
  try {
    n = e.getBBox();
  } catch {
    n = Ii.call(e, !0);
  }
  return n && (n.width || n.height) || e.getBBox === Ii || (n = Ii.call(e, !0)), n && !n.width && !n.x && !n.y ? {
    x: +Zo(e, ["x", "cx", "x1"]) || 0,
    y: +Zo(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : n;
}, rc = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && nc(e));
}, dr = function(e, n) {
  if (n) {
    var r = e.style;
    n in Dt && n !== lt && (n = ce), r.removeProperty ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n), r.removeProperty(n.replace(ro, "-$1").toLowerCase())) : r.removeAttribute(n);
  }
}, Rt = function(e, n, r, i, s, o) {
  var l = new Ie(e._pt, n, r, 0, 1, o ? Za : Ja);
  return e._pt = l, l.b = i, l.e = s, e._props.push(r), l;
}, Qo = {
  deg: 1,
  rad: 1,
  turn: 1
}, Mp = {
  grid: 1,
  flex: 1
}, Ht = function t(e, n, r, i) {
  var s = parseFloat(r) || 0, o = (r + "").trim().substr((s + "").length) || "px", l = nn.style, a = yp.test(n), c = e.tagName.toLowerCase() === "svg", u = (c ? "client" : "offset") + (a ? "Width" : "Height"), f = 100, d = i === "px", _ = i === "%", g, h, v, b;
  return i === o || !s || Qo[i] || Qo[o] ? s : (o !== "px" && !d && (s = t(e, n, r, "px")), b = e.getCTM && rc(e), (_ || o === "%") && (Dt[n] || ~n.indexOf("adius")) ? (g = b ? e.getBBox()[a ? "width" : "height"] : e[u], fe(_ ? s / g * f : s / 100 * g)) : (l[a ? "width" : "height"] = f + (d ? o : i), h = ~n.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode, b && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === kt || !h.appendChild) && (h = kt.body), v = h._gsap, v && _ && v.width && a && v.time === Be.time && !v.uncache ? fe(s / v.width * f) : ((_ || o === "%") && !Mp[ht(h, "display")] && (l.position = ht(e, "position")), h === e && (l.position = "static"), h.appendChild(nn), g = nn[u], h.removeChild(nn), l.position = "absolute", a && _ && (v = un(h), v.time = Be.time, v.width = h[u]), fe(d ? g * s / f : g && s ? f / g * s : 0))));
}, xt = function(e, n, r, i) {
  var s;
  return to || ys(), n in Ot && n !== "transform" && (n = Ot[n], ~n.indexOf(",") && (n = n.split(",")[0])), Dt[n] && n !== "transform" ? (s = hr(e, i), s = n !== "transformOrigin" ? s[n] : s.svg ? s.origin : ei(ht(e, lt)) + " " + s.zOrigin + "px") : (s = e.style[n], (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) && (s = Qr[n] && Qr[n](e, n, r) || ht(e, n) || ba(e, n) || (n === "opacity" ? 1 : 0))), r && !~(s + "").trim().indexOf(" ") ? Ht(e, n, s, r) + r : s;
}, Ap = function(e, n, r, i) {
  if (!r || r === "none") {
    var s = jn(n, e, 1), o = s && ht(e, s, 1);
    o && o !== r ? (n = s, r = o) : n === "borderColor" && (r = ht(e, "borderTopColor"));
  }
  var l = new Ie(this._pt, e.style, n, 0, 1, qa), a = 0, c = 0, u, f, d, _, g, h, v, b, x, N, E, O;
  if (l.b = r, l.e = i, r += "", i += "", i === "auto" && (e.style[n] = i, i = ht(e, n) || i, e.style[n] = r), u = [r, i], $a(u), r = u[0], i = u[1], d = r.match(wn) || [], O = i.match(wn) || [], O.length) {
    for (; f = wn.exec(i); )
      v = f[0], x = i.substring(a, f.index), g ? g = (g + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (g = 1), v !== (h = d[c++] || "") && (_ = parseFloat(h) || 0, E = h.substr((_ + "").length), v.charAt(1) === "=" && (v = Sn(_, v) + E), b = parseFloat(v), N = v.substr((b + "").length), a = wn.lastIndex - N.length, N || (N = N || Ue.units[n] || E, a === i.length && (i += N, l.e += N)), E !== N && (_ = Ht(e, n, h, N) || 0), l._pt = {
        _next: l._pt,
        p: x || c === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: _,
        c: b - _,
        m: g && g < 4 || n === "zIndex" ? Math.round : 0
      });
    l.c = a < i.length ? i.substring(a, i.length) : "";
  } else
    l.r = n === "display" && i === "none" ? Za : Ja;
  return _a.test(i) && (l.e = 0), this._pt = l, l;
}, el = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, kp = function(e) {
  var n = e.split(" "), r = n[0], i = n[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), n[0] = el[r] || r, n[1] = el[i] || i, n.join(" ");
}, Rp = function(e, n) {
  if (n.tween && n.tween._time === n.tween._dur) {
    var r = n.t, i = r.style, s = n.u, o = r._gsap, l, a, c;
    if (s === "all" || s === !0)
      i.cssText = "", a = 1;
    else
      for (s = s.split(","), c = s.length; --c > -1; )
        l = s[c], Dt[l] && (a = 1, l = l === "transformOrigin" ? lt : ce), dr(r, l);
    a && (dr(r, ce), o && (o.svg && r.removeAttribute("transform"), hr(r, 1), o.uncache = 1, Qa(i)));
  }
}, Qr = {
  clearProps: function(e, n, r, i, s) {
    if (s.data !== "isFromStart") {
      var o = e._pt = new Ie(e._pt, n, r, 0, 0, Rp);
      return o.u = i, o.pr = -10, o.tween = s, e._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, pr = [1, 0, 0, 1, 0, 0], ic = {}, sc = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, tl = function(e) {
  var n = ht(e, ce);
  return sc(n) ? pr : n.substr(7).match(ha).map(fe);
}, io = function(e, n) {
  var r = e._gsap || un(e), i = e.style, s = tl(e), o, l, a, c;
  return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, s = [a.a, a.b, a.c, a.d, a.e, a.f], s.join(",") === "1,0,0,1,0,0" ? pr : s) : (s === pr && !e.offsetParent && e !== Vn && !r.svg && (a = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent) && (c = 1, l = e.nextElementSibling, Vn.appendChild(e)), s = tl(e), a ? i.display = a : dr(e, "display"), c && (l ? o.insertBefore(e, l) : o ? o.appendChild(e) : Vn.removeChild(e))), n && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
}, Es = function(e, n, r, i, s, o) {
  var l = e._gsap, a = s || io(e, !0), c = l.xOrigin || 0, u = l.yOrigin || 0, f = l.xOffset || 0, d = l.yOffset || 0, _ = a[0], g = a[1], h = a[2], v = a[3], b = a[4], x = a[5], N = n.split(" "), E = parseFloat(N[0]) || 0, O = parseFloat(N[1]) || 0, R, k, w, T;
  r ? a !== pr && (k = _ * v - g * h) && (w = E * (v / k) + O * (-h / k) + (h * x - v * b) / k, T = E * (-g / k) + O * (_ / k) - (_ * x - g * b) / k, E = w, O = T) : (R = nc(e), E = R.x + (~N[0].indexOf("%") ? E / 100 * R.width : E), O = R.y + (~(N[1] || N[0]).indexOf("%") ? O / 100 * R.height : O)), i || i !== !1 && l.smooth ? (b = E - c, x = O - u, l.xOffset = f + (b * _ + x * h) - b, l.yOffset = d + (b * g + x * v) - x) : l.xOffset = l.yOffset = 0, l.xOrigin = E, l.yOrigin = O, l.smooth = !!i, l.origin = n, l.originIsAbsolute = !!r, e.style[lt] = "0px 0px", o && (Rt(o, l, "xOrigin", c, E), Rt(o, l, "yOrigin", u, O), Rt(o, l, "xOffset", f, l.xOffset), Rt(o, l, "yOffset", d, l.yOffset)), e.setAttribute("data-svg-origin", E + " " + O);
}, hr = function(e, n) {
  var r = e._gsap || new Ua(e);
  if ("x" in r && !n && !r.uncache)
    return r;
  var i = e.style, s = r.scaleX < 0, o = "px", l = "deg", a = getComputedStyle(e), c = ht(e, lt) || "0", u, f, d, _, g, h, v, b, x, N, E, O, R, k, w, T, L, z, q, ee, le, Q, Z, B, U, ye, et, tt, Me, nt, $e, gt;
  return u = f = d = h = v = b = x = N = E = 0, _ = g = 1, r.svg = !!(e.getCTM && rc(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[ce] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[ce] !== "none" ? a[ce] : "")), i.scale = i.rotate = i.translate = "none"), k = io(e, r.svg), r.svg && (r.uncache ? (U = e.getBBox(), c = r.xOrigin - U.x + "px " + (r.yOrigin - U.y) + "px", B = "") : B = !n && e.getAttribute("data-svg-origin"), Es(e, B || c, !!B || r.originIsAbsolute, r.smooth !== !1, k)), O = r.xOrigin || 0, R = r.yOrigin || 0, k !== pr && (z = k[0], q = k[1], ee = k[2], le = k[3], u = Q = k[4], f = Z = k[5], k.length === 6 ? (_ = Math.sqrt(z * z + q * q), g = Math.sqrt(le * le + ee * ee), h = z || q ? En(q, z) * Qt : 0, x = ee || le ? En(ee, le) * Qt + h : 0, x && (g *= Math.abs(Math.cos(x * Mn))), r.svg && (u -= O - (O * z + R * ee), f -= R - (O * q + R * le))) : (gt = k[6], nt = k[7], et = k[8], tt = k[9], Me = k[10], $e = k[11], u = k[12], f = k[13], d = k[14], w = En(gt, Me), v = w * Qt, w && (T = Math.cos(-w), L = Math.sin(-w), B = Q * T + et * L, U = Z * T + tt * L, ye = gt * T + Me * L, et = Q * -L + et * T, tt = Z * -L + tt * T, Me = gt * -L + Me * T, $e = nt * -L + $e * T, Q = B, Z = U, gt = ye), w = En(-ee, Me), b = w * Qt, w && (T = Math.cos(-w), L = Math.sin(-w), B = z * T - et * L, U = q * T - tt * L, ye = ee * T - Me * L, $e = le * L + $e * T, z = B, q = U, ee = ye), w = En(q, z), h = w * Qt, w && (T = Math.cos(w), L = Math.sin(w), B = z * T + q * L, U = Q * T + Z * L, q = q * T - z * L, Z = Z * T - Q * L, z = B, Q = U), v && Math.abs(v) + Math.abs(h) > 359.9 && (v = h = 0, b = 180 - b), _ = fe(Math.sqrt(z * z + q * q + ee * ee)), g = fe(Math.sqrt(Z * Z + gt * gt)), w = En(Q, Z), x = Math.abs(w) > 2e-4 ? w * Qt : 0, E = $e ? 1 / ($e < 0 ? -$e : $e) : 0), r.svg && (B = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !sc(ht(e, ce)), B && e.setAttribute("transform", B))), Math.abs(x) > 90 && Math.abs(x) < 270 && (s ? (_ *= -1, x += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (g *= -1, x += x <= 0 ? 180 : -180)), n = n || r.uncache, r.x = u - ((r.xPercent = u && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = d + o, r.scaleX = fe(_), r.scaleY = fe(g), r.rotation = fe(h) + l, r.rotationX = fe(v) + l, r.rotationY = fe(b) + l, r.skewX = x + l, r.skewY = N + l, r.transformPerspective = E + o, (r.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[lt] = ei(c)), r.xOffset = r.yOffset = 0, r.force3D = Ue.force3D, r.renderTransform = r.svg ? Ip : tc ? oc : Fp, r.uncache = 0, r;
}, ei = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, $i = function(e, n, r) {
  var i = Ne(n);
  return fe(parseFloat(n) + parseFloat(Ht(e, "x", r + "px", i))) + i;
}, Fp = function(e, n) {
  n.z = "0px", n.rotationY = n.rotationX = "0deg", n.force3D = 0, oc(e, n);
}, Xt = "0deg", Kn = "0px", Gt = ") ", oc = function(e, n) {
  var r = n || this, i = r.xPercent, s = r.yPercent, o = r.x, l = r.y, a = r.z, c = r.rotation, u = r.rotationY, f = r.rotationX, d = r.skewX, _ = r.skewY, g = r.scaleX, h = r.scaleY, v = r.transformPerspective, b = r.force3D, x = r.target, N = r.zOrigin, E = "", O = b === "auto" && e && e !== 1 || b === !0;
  if (N && (f !== Xt || u !== Xt)) {
    var R = parseFloat(u) * Mn, k = Math.sin(R), w = Math.cos(R), T;
    R = parseFloat(f) * Mn, T = Math.cos(R), o = $i(x, o, k * T * -N), l = $i(x, l, -Math.sin(R) * -N), a = $i(x, a, w * T * -N + N);
  }
  v !== Kn && (E += "perspective(" + v + Gt), (i || s) && (E += "translate(" + i + "%, " + s + "%) "), (O || o !== Kn || l !== Kn || a !== Kn) && (E += a !== Kn || O ? "translate3d(" + o + ", " + l + ", " + a + ") " : "translate(" + o + ", " + l + Gt), c !== Xt && (E += "rotate(" + c + Gt), u !== Xt && (E += "rotateY(" + u + Gt), f !== Xt && (E += "rotateX(" + f + Gt), (d !== Xt || _ !== Xt) && (E += "skew(" + d + ", " + _ + Gt), (g !== 1 || h !== 1) && (E += "scale(" + g + ", " + h + Gt), x.style[ce] = E || "translate(0, 0)";
}, Ip = function(e, n) {
  var r = n || this, i = r.xPercent, s = r.yPercent, o = r.x, l = r.y, a = r.rotation, c = r.skewX, u = r.skewY, f = r.scaleX, d = r.scaleY, _ = r.target, g = r.xOrigin, h = r.yOrigin, v = r.xOffset, b = r.yOffset, x = r.forceCSS, N = parseFloat(o), E = parseFloat(l), O, R, k, w, T;
  a = parseFloat(a), c = parseFloat(c), u = parseFloat(u), u && (u = parseFloat(u), c += u, a += u), a || c ? (a *= Mn, c *= Mn, O = Math.cos(a) * f, R = Math.sin(a) * f, k = Math.sin(a - c) * -d, w = Math.cos(a - c) * d, c && (u *= Mn, T = Math.tan(c - u), T = Math.sqrt(1 + T * T), k *= T, w *= T, u && (T = Math.tan(u), T = Math.sqrt(1 + T * T), O *= T, R *= T)), O = fe(O), R = fe(R), k = fe(k), w = fe(w)) : (O = f, w = d, R = k = 0), (N && !~(o + "").indexOf("px") || E && !~(l + "").indexOf("px")) && (N = Ht(_, "x", o, "px"), E = Ht(_, "y", l, "px")), (g || h || v || b) && (N = fe(N + g - (g * O + h * k) + v), E = fe(E + h - (g * R + h * w) + b)), (i || s) && (T = _.getBBox(), N = fe(N + i / 100 * T.width), E = fe(E + s / 100 * T.height)), T = "matrix(" + O + "," + R + "," + k + "," + w + "," + N + "," + E + ")", _.setAttribute("transform", T), x && (_.style[ce] = T);
}, $p = function(e, n, r, i, s) {
  var o = 360, l = Ee(s), a = parseFloat(s) * (l && ~s.indexOf("rad") ? Qt : 1), c = a - i, u = i + c + "deg", f, d;
  return l && (f = s.split("_")[1], f === "short" && (c %= o, c !== c % (o / 2) && (c += c < 0 ? o : -o)), f === "cw" && c < 0 ? c = (c + o * Go) % o - ~~(c / o) * o : f === "ccw" && c > 0 && (c = (c - o * Go) % o - ~~(c / o) * o)), e._pt = d = new Ie(e._pt, n, r, i, c, bp), d.e = u, d.u = "deg", e._props.push(r), d;
}, nl = function(e, n) {
  for (var r in n)
    e[r] = n[r];
  return e;
}, Lp = function(e, n, r) {
  var i = nl({}, r._gsap), s = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, l, a, c, u, f, d, _, g;
  i.svg ? (c = r.getAttribute("transform"), r.setAttribute("transform", ""), o[ce] = n, l = hr(r, 1), dr(r, ce), r.setAttribute("transform", c)) : (c = getComputedStyle(r)[ce], o[ce] = n, l = hr(r, 1), o[ce] = c);
  for (a in Dt)
    c = i[a], u = l[a], c !== u && s.indexOf(a) < 0 && (_ = Ne(c), g = Ne(u), f = _ !== g ? Ht(r, a, c, g) : parseFloat(c), d = parseFloat(u), e._pt = new Ie(e._pt, l, a, f, d - f, gs), e._pt.u = g || 0, e._props.push(a));
  nl(l, i);
};
Fe("padding,margin,Width,Radius", function(t, e) {
  var n = "Top", r = "Right", i = "Bottom", s = "Left", o = (e < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function(l) {
    return e < 2 ? t + l : "border" + l + t;
  });
  Qr[e > 1 ? "border" + t : t] = function(l, a, c, u, f) {
    var d, _;
    if (arguments.length < 4)
      return d = o.map(function(g) {
        return xt(l, g, c);
      }), _ = d.join(" "), _.split(d[0]).length === 5 ? d[0] : _;
    d = (u + "").split(" "), _ = {}, o.forEach(function(g, h) {
      return _[g] = d[h] = d[h] || d[(h - 1) / 2 | 0];
    }), l.init(a, _, f);
  };
});
var lc = {
  name: "css",
  register: ys,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, n, r, i, s) {
    var o = this._props, l = e.style, a = r.vars.startAt, c, u, f, d, _, g, h, v, b, x, N, E, O, R, k, w;
    to || ys(), this.styles = this.styles || ec(e), w = this.styles.props, this.tween = r;
    for (h in n)
      if (h !== "autoRound" && (u = n[h], !(Le[h] && za(h, n, r, i, e, s)))) {
        if (_ = typeof u, g = Qr[h], _ === "function" && (u = u.call(r, i, e, s), _ = typeof u), _ === "string" && ~u.indexOf("random(") && (u = ur(u)), g)
          g(this, e, h, u, r) && (k = 1);
        else if (h.substr(0, 2) === "--")
          c = (getComputedStyle(e).getPropertyValue(h) + "").trim(), u += "", Lt.lastIndex = 0, Lt.test(c) || (v = Ne(c), b = Ne(u)), b ? v !== b && (c = Ht(e, h, c, b) + b) : v && (u += v), this.add(l, "setProperty", c, u, i, s, 0, 0, h), o.push(h), w.push(h, 0, l[h]);
        else if (_ !== "undefined") {
          if (a && h in a ? (c = typeof a[h] == "function" ? a[h].call(r, i, e, s) : a[h], Ee(c) && ~c.indexOf("random(") && (c = ur(c)), Ne(c + "") || (c += Ue.units[h] || Ne(xt(e, h)) || ""), (c + "").charAt(1) === "=" && (c = xt(e, h))) : c = xt(e, h), d = parseFloat(c), x = _ === "string" && u.charAt(1) === "=" && u.substr(0, 2), x && (u = u.substr(2)), f = parseFloat(u), h in Ot && (h === "autoAlpha" && (d === 1 && xt(e, "visibility") === "hidden" && f && (d = 0), w.push("visibility", 0, l.visibility), Rt(this, l, "visibility", d ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)), h !== "scale" && h !== "transform" && (h = Ot[h], ~h.indexOf(",") && (h = h.split(",")[0]))), N = h in Dt, N) {
            if (this.styles.save(h), E || (O = e._gsap, O.renderTransform && !n.parseTransform || hr(e, n.parseTransform), R = n.smoothOrigin !== !1 && O.smooth, E = this._pt = new Ie(this._pt, l, ce, 0, 1, O.renderTransform, O, 0, -1), E.dep = 1), h === "scale")
              this._pt = new Ie(this._pt, O, "scaleY", O.scaleY, (x ? Sn(O.scaleY, x + f) : f) - O.scaleY || 0, gs), this._pt.u = 0, o.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              w.push(lt, 0, l[lt]), u = kp(u), O.svg ? Es(e, u, 0, R, 0, this) : (b = parseFloat(u.split(" ")[2]) || 0, b !== O.zOrigin && Rt(this, O, "zOrigin", O.zOrigin, b), Rt(this, l, h, ei(c), ei(u)));
              continue;
            } else if (h === "svgOrigin") {
              Es(e, u, 1, R, 0, this);
              continue;
            } else if (h in ic) {
              $p(this, O, h, d, x ? Sn(d, x + u) : u);
              continue;
            } else if (h === "smoothOrigin") {
              Rt(this, O, "smooth", O.smooth, u);
              continue;
            } else if (h === "force3D") {
              O[h] = u;
              continue;
            } else if (h === "transform") {
              Lp(this, u, e);
              continue;
            }
          } else
            h in l || (h = jn(h) || h);
          if (N || (f || f === 0) && (d || d === 0) && !Ep.test(u) && h in l)
            v = (c + "").substr((d + "").length), f || (f = 0), b = Ne(u) || (h in Ue.units ? Ue.units[h] : v), v !== b && (d = Ht(e, h, c, b)), this._pt = new Ie(this._pt, N ? O : l, h, d, (x ? Sn(d, x + f) : f) - d, !N && (b === "px" || h === "zIndex") && n.autoRound !== !1 ? Op : gs), this._pt.u = b || 0, v !== b && b !== "%" && (this._pt.b = c, this._pt.r = xp);
          else if (h in l)
            Ap.call(this, e, h, c, x ? x + u : u);
          else if (h in e)
            this.add(e, h, c || e[h], x ? x + u : u, i, s);
          else if (h !== "parseTransform") {
            Ws(h, u);
            continue;
          }
          N || (h in l ? w.push(h, 0, l[h]) : w.push(h, 1, c || e[h])), o.push(h);
        }
      }
    k && Xa(this);
  },
  render: function(e, n) {
    if (n.tween._time || !no())
      for (var r = n._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      n.styles.revert();
  },
  get: xt,
  aliases: Ot,
  getSetter: function(e, n, r) {
    var i = Ot[n];
    return i && i.indexOf(",") < 0 && (n = i), n in Dt && n !== lt && (e._gsap.x || xt(e, "x")) ? r && Xo === r ? n === "scale" ? Dp : Tp : (Xo = r || {}) && (n === "scale" ? Cp : Pp) : e.style && !Hs(e.style[n]) ? Np : ~n.indexOf("-") ? wp : Qs(e, n);
  },
  core: {
    _removeProperty: dr,
    _getMatrix: io
  }
};
He.utils.checkPrefix = jn;
He.core.getStyleSaver = ec;
(function(t, e, n, r) {
  var i = Fe(t + "," + e + "," + n, function(s) {
    Dt[s] = 1;
  });
  Fe(e, function(s) {
    Ue.units[s] = "deg", ic[s] = 1;
  }), Ot[i[13]] = t + "," + e, Fe(r, function(s) {
    var o = s.split(":");
    Ot[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
  Ue.units[t] = "px";
});
He.registerPlugin(lc);
var bs = He.registerPlugin(lc) || He;
bs.core.Tween;
const Bp = (t) => (ku("data-v-e63bb0fe"), t = t(), Ru(), t), jp = { class: "elastic-accordion" }, Up = /* @__PURE__ */ Bp(() => /* @__PURE__ */ lr("h1", { class: "unselectable" }, [
  /* @__PURE__ */ ns(" Elastic accordion "),
  /* @__PURE__ */ lr("br"),
  /* @__PURE__ */ ns(" with Vue & GSAP ")
], -1)), zp = { class: "elastic-accordion-wrapper" }, Hp = ["onClick"], Kp = /* @__PURE__ */ Bl({
  __name: "ElasticAccordion",
  setup(t) {
    const e = su([]), n = { itemRefs: e }, r = Array.from({ length: 12 }, (s, o) => ({
      background: `url('/assets/img/photo-${o + 1}.jpg')`,
      clicked: !1
    }));
    function i(s, o) {
      r.forEach((l, a) => {
        o !== a && (l.clicked = !1);
      }), bs.to(e.value, {
        width: s.clicked ? "15vw" : "8vw",
        duration: 2,
        ease: "elastic(1, .6)"
      }), s.clicked = !s.clicked, bs.to(e.value[o], {
        width: s.clicked ? "42vw" : "15vw",
        duration: 2.5,
        ease: "elastic(1, .3)"
      });
    }
    return (s, o) => (Rr(), Ti("section", jp, [
      Up,
      lr("div", zp, [
        (Rr(!0), Ti(qe, null, lf(Ms(r).slice(9), (l, a) => (Rr(), Ti("div", {
          key: l.background,
          ref_for: !0,
          ref: n.itemRefs,
          style: ti(`background-image: ${l.background}`),
          class: "elastic-accordion-item",
          onClick: (c) => i(l, a)
        }, null, 12, Hp))), 128))
      ])
    ]));
  }
});
const Wp = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, i] of e)
    n[r] = i;
  return n;
}, Yp = /* @__PURE__ */ Wp(Kp, [["__scopeId", "data-v-e63bb0fe"]]), qp = /* @__PURE__ */ Bl({
  __name: "App",
  setup(t) {
    return (e, n) => (Rr(), Ff(Ms(Yp)));
  }
});
bd(qp).mount("#app");
