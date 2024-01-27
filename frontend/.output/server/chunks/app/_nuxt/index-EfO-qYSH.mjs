import { H as H$1, m as m$3, S as S$1, o as o$1, t as t$3, p as p$2$1, l as l$2, a as u$2, y, N as N$1$1, C as C$1, b as S$1$1, c as c$2, d as c$1, T as T$1, u as useAsyncData, w as w$1, P as P$1, e as N$2, f as T, g as o$2, _ as _sfc_main$6 } from './asyncData-ETC16-sh.mjs';
import { m as mergeConfig, f as appConfig, g as useUI, t as textarea, e as useUserSession, b as __nuxt_component_0$1, _ as _export_sfc, l as looseToNumber } from '../server.mjs';
import { C as Course, _ as _sfc_main$7 } from './list-courses-FXZjSw8Y.mjs';
import { defineComponent, ref, computed, onMounted, onUnmounted, h as h$1, Fragment, watchEffect, watch, provide, inject, Teleport, reactive, unref, normalizeClass, toRef, useSSRContext, nextTick, isRef, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, mergeProps, shallowRef, resolveComponent, renderSlot, resolveDynamicComponent } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { twMerge, twJoin } from 'tailwind-merge';
import { u as useFormGroup, _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3$2 } from './Input-4PBRS7hr.mjs';
import { t as defu } from '../../nitro/node-server.mjs';
import { i as isLoading, u as useFetchHandler } from './useFetchHandler-w15X1Dxl.mjs';
import { b as baseURL } from './constants-sYltW3Y6.mjs';
import { z as z$1 } from 'zod';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './Badge-JWjp_P31.mjs';
import './Model-YHdrhj5m.mjs';
import '@vueuse/core';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const slideover = {
  wrapper: "fixed inset-0 flex z-50",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: "ease-in-out duration-500",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  base: "relative flex-1 flex flex-col w-full focus:outline-none",
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "",
  padding: "",
  shadow: "shadow-xl",
  width: "w-screen max-w-md",
  translate: {
    base: "translate-x-0",
    left: "-translate-x-full",
    right: "translate-x-full"
  },
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: "transform transition ease-in-out duration-300",
    leave: "transform transition ease-in-out duration-200"
  }
};
var a$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(a$2 || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r, { slots: t2, attrs: d2 }) {
  return () => {
    let { features: e2, ...o2 } = r, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return H$1({ ourProps: n2, theirProps: o2, slot: {}, attrs: d2, slots: t2, name: "Hidden" });
  };
} });
function t$2() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function t$1(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o() {
  let a2 = [], s = { addEventListener(e2, t2, r, i2) {
    return e2.addEventListener(t2, r, i2), s.add(() => e2.removeEventListener(t2, r, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s.requestAnimationFrame(() => {
      s.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$1(() => {
      t2.current && e2[0]();
    }), s.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0)
        for (let r of a2.splice(t2, 1))
          r();
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  } };
  return s;
}
var d$2 = ((r) => (r[r.Forwards = 0] = "Forwards", r[r.Backwards = 1] = "Backwards", r))(d$2 || {});
function n() {
  let o2 = ref(0);
  return w$1("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function E$2(n2, e2, o2, r) {
  c$1.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r), t2(() => n2.removeEventListener(e2, o2, r));
  });
}
function B(e2) {
  if (!e2)
    return /* @__PURE__ */ new Set();
  if (typeof e2 == "function")
    return new Set(e2());
  let t2 = /* @__PURE__ */ new Set();
  for (let l2 of e2.value) {
    let o2 = o$1(l2);
    o2 instanceof HTMLElement && t2.add(o2);
  }
  return t2;
}
var A = ((n2) => (n2[n2.None = 1] = "None", n2[n2.InitialFocus = 2] = "InitialFocus", n2[n2.TabLock = 4] = "TabLock", n2[n2.FocusLock = 8] = "FocusLock", n2[n2.RestoreFocus = 16] = "RestoreFocus", n2[n2.All = 30] = "All", n2))(A || {});
let ce$1 = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e2, { attrs: t2, slots: l2, expose: o2 }) {
  let r = ref(null);
  o2({ el: r, $el: r });
  let i2 = computed(() => m$3(r)), n$1 = ref(false);
  onMounted(() => n$1.value = true), onUnmounted(() => n$1.value = false), z({ ownerDocument: i2 }, computed(() => n$1.value && Boolean(e2.features & 16)));
  let m2 = J({ ownerDocument: i2, container: r, initialFocus: computed(() => e2.initialFocus) }, computed(() => n$1.value && Boolean(e2.features & 2)));
  Q$1({ ownerDocument: i2, container: r, containers: e2.containers, previousActiveElement: m2 }, computed(() => n$1.value && Boolean(e2.features & 8)));
  let c2 = n();
  function u2(a2) {
    let d2 = o$1(r);
    if (!d2)
      return;
    ((g2) => g2())(() => {
      u$2(c2.value, { [d$2.Forwards]: () => {
        P$1(d2, N$2.First, { skipElements: [a2.relatedTarget] });
      }, [d$2.Backwards]: () => {
        P$1(d2, N$2.Last, { skipElements: [a2.relatedTarget] });
      } });
    });
  }
  let s = ref(false);
  function H$1$1(a2) {
    a2.key === "Tab" && (s.value = true, requestAnimationFrame(() => {
      s.value = false;
    }));
  }
  function M2(a2) {
    if (!n$1.value)
      return;
    let d2 = B(e2.containers);
    o$1(r) instanceof HTMLElement && d2.add(o$1(r));
    let E2 = a2.relatedTarget;
    E2 instanceof HTMLElement && E2.dataset.headlessuiFocusGuard !== "true" && (N$1(d2, E2) || (s.value ? P$1(o$1(r), u$2(c2.value, { [d$2.Forwards]: () => N$2.Next, [d$2.Backwards]: () => N$2.Previous }) | N$2.WrapAround, { relativeTo: a2.target }) : a2.target instanceof HTMLElement && S$1(a2.target)));
  }
  return () => {
    let a2 = {}, d2 = { ref: r, onKeydown: H$1$1, onFocusout: M2 }, { features: E2, initialFocus: g2, containers: X, ...O } = e2;
    return h$1(Fragment, [Boolean(E2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u2, features: a$2.Focusable }), H$1({ ourProps: d2, theirProps: { ...t2, ...O }, slot: a2, attrs: t2, slots: l2, name: "FocusTrap" }), Boolean(E2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u2, features: a$2.Focusable })]);
  };
} }), { features: A }), L$2 = [];
function x(e2) {
  let t2 = ref(L$2.slice());
  return watch([e2], ([l2], [o2]) => {
    o2 === true && l2 === false ? t$1(() => {
      t2.value.splice(0);
    }) : o2 === false && l2 === true && (t2.value = L$2.slice());
  }, { flush: "post" }), () => {
    var l2;
    return (l2 = t2.value.find((o2) => o2 != null && o2.isConnected)) != null ? l2 : null;
  };
}
function z({ ownerDocument: e2 }, t2) {
  let l2 = x(t2);
  onMounted(() => {
    watchEffect(() => {
      var o2, r;
      t2.value || ((o2 = e2.value) == null ? void 0 : o2.activeElement) === ((r = e2.value) == null ? void 0 : r.body) && S$1(l2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    t2.value && S$1(l2());
  });
}
function J({ ownerDocument: e2, container: t2, initialFocus: l2 }, o2) {
  let r = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([t2, l2, o2], (n2, m2) => {
      if (n2.every((u2, s) => (m2 == null ? void 0 : m2[s]) === u2) || !o2.value)
        return;
      let c2 = o$1(t2);
      c2 && t$1(() => {
        var H2, M2;
        if (!i2.value)
          return;
        let u2 = o$1(l2), s = (H2 = e2.value) == null ? void 0 : H2.activeElement;
        if (u2) {
          if (u2 === s) {
            r.value = s;
            return;
          }
        } else if (c2.contains(s)) {
          r.value = s;
          return;
        }
        u2 ? S$1(u2) : P$1(c2, N$2.First | N$2.NoScroll) === T.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r.value = (M2 = e2.value) == null ? void 0 : M2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), r;
}
function Q$1({ ownerDocument: e2, container: t2, containers: l2, previousActiveElement: o2 }, r) {
  var i2;
  E$2((i2 = e2.value) == null ? void 0 : i2.defaultView, "focus", (n2) => {
    if (!r.value)
      return;
    let m2 = B(l2);
    o$1(t2) instanceof HTMLElement && m2.add(o$1(t2));
    let c2 = o2.value;
    if (!c2)
      return;
    let u2 = n2.target;
    u2 && u2 instanceof HTMLElement ? N$1(m2, u2) ? (o2.value = u2, S$1(u2)) : (n2.preventDefault(), n2.stopPropagation(), S$1(c2)) : S$1(o2.value);
  }, true);
}
function N$1(e2, t2) {
  for (let l2 of e2)
    if (l2.contains(t2))
      return true;
  return false;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E$1(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value)
      return;
    let e2 = o$1(d2);
    if (!e2)
      return;
    o2(function() {
      var u2;
      if (!e2)
        return;
      let r = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r === 1 ? t.delete(e2) : t.set(e2, r - 1), r !== 1)
        return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
let e = Symbol("ForcePortalRootContext");
function u$1() {
  return inject(e, false);
}
let P = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return H$1({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r, name: "ForcePortalRoot" });
  };
} });
function E(t2) {
  let e2 = m$3(t2);
  if (!e2) {
    if (t2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t2}`);
  }
  let u2 = e2.getElementById("headlessui-portal-root");
  if (u2)
    return u2;
  let r = e2.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(r);
}
let U = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t2, { slots: e2, attrs: u2 }) {
  let r = ref(null), i2 = computed(() => m$3(r)), l2 = u$1(), n2 = inject(h, null), o2 = ref(l2 === true || n2 == null ? E(r.value) : n2.resolveTarget());
  watchEffect(() => {
    l2 || n2 != null && (o2.value = n2.resolveTarget());
  });
  let d2 = inject(f, null);
  return onMounted(() => {
    let a2 = o$1(r);
    a2 && d2 && onUnmounted(d2.register(a2));
  }), onUnmounted(() => {
    var v2, P2;
    let a2 = (v2 = i2.value) == null ? void 0 : v2.getElementById("headlessui-portal-root");
    a2 && o2.value === a2 && o2.value.children.length <= 0 && ((P2 = o2.value.parentElement) == null || P2.removeChild(o2.value));
  }), () => {
    if (o2.value === null)
      return null;
    let a2 = { ref: r, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: o2.value }, H$1({ ourProps: a2, theirProps: t2, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
  };
} }), f = Symbol("PortalParentContext");
function V() {
  let t2 = inject(f, null), e2 = ref([]);
  function u2(l2) {
    return e2.value.push(l2), t2 && t2.register(l2), () => r(l2);
  }
  function r(l2) {
    let n2 = e2.value.indexOf(l2);
    n2 !== -1 && e2.value.splice(n2, 1), t2 && t2.unregister(l2);
  }
  let i2 = { register: u2, unregister: r, portals: e2 };
  return [e2, defineComponent({ name: "PortalWrapper", setup(l2, { slots: n2 }) {
    return provide(f, i2), () => {
      var o2;
      return (o2 = n2.default) == null ? void 0 : o2.call(n2);
    };
  } })];
}
let h = Symbol("PortalGroupContext"), _ = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t2, { attrs: e2, slots: u2 }) {
  let r = reactive({ resolveTarget() {
    return t2.target;
  } });
  return provide(h, r), () => {
    let { target: i2, ...l2 } = t2;
    return H$1({ theirProps: l2, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
  };
} });
let u = Symbol("StackContext");
var p$2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(p$2 || {});
function v() {
  return inject(u, () => {
  });
}
function S({ type: o2, enabled: r, element: e2, onUpdate: i2 }) {
  let a2 = v();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r.value && t2(1, o2, e2);
  }), provide(u, t2);
}
let p$1 = Symbol("DescriptionContext");
function b() {
  let t2 = inject(p$1, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function M$1({ slot: t2 = ref({}), name: i2 = "Description", props: o2 = {} } = {}) {
  let e2 = ref([]);
  function s(n2) {
    return e2.value.push(n2), () => {
      let r = e2.value.indexOf(n2);
      r !== -1 && e2.value.splice(r, 1);
    };
  }
  return provide(p$1, { register: s, slot: t2, name: i2, props: o2 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t$3()}` } }, setup(t2, { attrs: i2, slots: o2 }) {
  let e2 = b();
  return onMounted(() => onUnmounted(e2.register(t2.id))), () => {
    let { name: s = "Description", slot: n2 = ref({}), props: r = {} } = e2, { id: d2, ...l2 } = t2, c2 = { ...Object.entries(r).reduce((f2, [a2, g2]) => Object.assign(f2, { [a2]: unref(g2) }), {}), id: d2 };
    return H$1({ ourProps: c2, theirProps: l2, slot: n2.value, attrs: i2, slots: o2, name: s });
  };
} });
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$1(o2, r) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s) {
    let i2 = r[e2].call(t2, ...s);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r = o2 - l2;
    n2.style(t2, "paddingRight", `${r}px`);
  } };
}
function w() {
  if (!t$2())
    return {};
  let r;
  return { before() {
    r = (void 0).pageYOffset;
  }, after({ doc: n2, d: o$12, meta: s }) {
    function i2(e2) {
      return s.containers.flatMap((t2) => t2()).some((t2) => t2.contains(e2));
    }
    if ((void 0).getComputedStyle(n2.documentElement).scrollBehavior !== "auto") {
      let e2 = o();
      e2.style(n2.documentElement, "scroll-behavior", "auto"), o$12.add(() => o$12.microTask(() => e2.dispose()));
    }
    o$12.style(n2.body, "marginTop", `-${r}px`), (void 0).scrollTo(0, 0);
    let l2 = null;
    o$12.addEventListener(n2, "click", (e2) => {
      if (e2.target instanceof HTMLElement)
        try {
          let t2 = e2.target.closest("a");
          if (!t2)
            return;
          let { hash: c2 } = new URL(t2.href), a2 = n2.querySelector(c2);
          a2 && !i2(a2) && (l2 = a2);
        } catch {
        }
    }, true), o$12.addEventListener(n2, "touchmove", (e2) => {
      e2.target instanceof HTMLElement && !i2(e2.target) && e2.preventDefault();
    }, { passive: false }), o$12.add(() => {
      (void 0).scrollTo(0, (void 0).pageYOffset + r), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
    });
  } };
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2)
    Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o$12;
  let t2 = (o$12 = this.get(e2)) != null ? o$12 : { doc: e2, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w(), c(), l$1()];
  c$12.forEach(({ before: r }) => r == null ? void 0 : r(o2)), c$12.forEach(({ after: r }) => r == null ? void 0 : r(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$1(t2, a$12, n2) {
  let i2 = m$2(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$12], ([e2, m2], [r], o2) => {
    if (!e2 || !m2)
      return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r != null ? r : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
function p({ defaultContainers: t2 = [], portals: o2, mainTreeNodeRef: s } = {}) {
  let i2 = ref(null), r = m$3(i2);
  function u2() {
    var l2;
    let n2 = [];
    for (let e2 of t2)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (o2 != null && o2.value)
      for (let e2 of o2.value)
        n2.push(e2);
    for (let e2 of (l2 = r == null ? void 0 : r.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(i2)) || n2.some((c2) => e2.contains(c2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: i2, MainTreeNode() {
    return s != null ? null : h$1(f$1, { features: a$2.Hidden, ref: i2 });
  } };
}
var Oe = ((t2) => (t2[t2.Open = 0] = "Open", t2[t2.Closed = 1] = "Closed", t2))(Oe || {});
let F$1 = Symbol("DialogContext");
function C(o2) {
  let n2 = inject(F$1, null);
  if (n2 === null) {
    let t2 = new Error(`<${o2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, C), t2;
  }
  return n2;
}
let M = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ue = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: M }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${t$3()}` } }, emits: { close: (o2) => true }, setup(o2, { emit: n2, attrs: t2, slots: u2, expose: i2 }) {
  var N2;
  let r = ref(false);
  onMounted(() => {
    r.value = true;
  });
  let s = ref(0), p$12 = p$2$1(), m2 = computed(() => o2.open === M && p$12 !== null ? (p$12.value & l$2.Open) === l$2.Open : o2.open), v2 = ref(null), T2 = computed(() => m$3(v2));
  if (i2({ el: v2, $el: v2 }), !(o2.open !== M || p$12 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof m2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m2.value === M ? void 0 : o2.open}`);
  let c2 = computed(() => r.value && m2.value ? 0 : 1), R2 = computed(() => c2.value === 0), E2 = computed(() => s.value > 1), $ = inject(F$1, null) !== null, [G, V$1] = V(), { resolveContainers: x2, mainTreeNodeRef: j, MainTreeNode: W2 } = p({ portals: G, defaultContainers: [computed(() => {
    var e2;
    return (e2 = y$1.panelRef.value) != null ? e2 : v2.value;
  })] }), J2 = computed(() => E2.value ? "parent" : "leaf"), H$1$1 = computed(() => p$12 !== null ? (p$12.value & l$2.Closing) === l$2.Closing : false), Q2 = computed(() => $ || H$1$1.value ? false : R2.value), X = computed(() => {
    var e2, l2, f2;
    return (f2 = Array.from((l2 = (e2 = T2.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? l2 : []).find((d2) => d2.id === "headlessui-portal-root" ? false : d2.contains(o$1(j)) && d2 instanceof HTMLElement)) != null ? f2 : null;
  });
  E$1(X, Q2);
  let Z = computed(() => E2.value ? true : R2.value), ee = computed(() => {
    var e2, l2, f2;
    return (f2 = Array.from((l2 = (e2 = T2.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? l2 : []).find((d2) => d2.contains(o$1(j)) && d2 instanceof HTMLElement)) != null ? f2 : null;
  });
  E$1(ee, Z), S({ type: "Dialog", enabled: computed(() => c2.value === 0), element: v2, onUpdate: (e2, l2) => {
    if (l2 === "Dialog")
      return u$2(e2, { [p$2.Add]: () => s.value += 1, [p$2.Remove]: () => s.value -= 1 });
  } });
  let te = M$1({ name: "DialogDescription", slot: computed(() => ({ open: m2.value })) }), k = ref(null), y$1 = { titleId: k, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    k.value !== e2 && (k.value = e2);
  }, close() {
    n2("close", false);
  } };
  provide(F$1, y$1);
  let le = computed(() => !(!R2.value || E2.value));
  y(x2, (e2, l2) => {
    y$1.close(), nextTick(() => l2 == null ? void 0 : l2.focus());
  }, le);
  let oe = computed(() => !(E2.value || c2.value !== 0));
  E$2((N2 = T2.value) == null ? void 0 : N2.defaultView, "keydown", (e2) => {
    oe.value && (e2.defaultPrevented || e2.key === o$2.Escape && (e2.preventDefault(), e2.stopPropagation(), y$1.close()));
  });
  let re = computed(() => !(H$1$1.value || c2.value !== 0 || $));
  return d$1(T2, re, (e2) => {
    var l2;
    return { containers: [...(l2 = e2.containers) != null ? l2 : [], x2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0)
      return;
    let l2 = o$1(v2);
    if (!l2)
      return;
    let f2 = new ResizeObserver((d2) => {
      for (let A2 of d2) {
        let D = A2.target.getBoundingClientRect();
        D.x === 0 && D.y === 0 && D.width === 0 && D.height === 0 && y$1.close();
      }
    });
    f2.observe(l2), e2(() => f2.disconnect());
  }), () => {
    let { id: e2, open: l2, initialFocus: f2, ...d2 } = o2, A2 = { ...t2, ref: v2, id: e2, role: "dialog", "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": k.value, "aria-describedby": te.value }, D = { open: c2.value === 0 };
    return h$1(P, { force: true }, () => [h$1(U, () => h$1(_, { target: v2.value }, () => h$1(P, { force: false }, () => h$1(ce$1, { initialFocus: f2, containers: x2, features: R2.value ? u$2(J2.value, { parent: ce$1.features.RestoreFocus, leaf: ce$1.features.All & ~ce$1.features.FocusLock }) : ce$1.features.None }, () => h$1(V$1, {}, () => H$1({ ourProps: A2, theirProps: { ...d2, ...t2 }, slot: D, attrs: t2, slots: u2, visible: c2.value === 0, features: N$1$1.RenderStrategy | N$1$1.Static, name: "Dialog" })))))), h$1(W2)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${t$3()}` } }, setup(o2, { attrs: n2, slots: t2 }) {
  let u2 = C("DialogOverlay");
  function i2(r) {
    r.target === r.currentTarget && (r.preventDefault(), r.stopPropagation(), u2.close());
  }
  return () => {
    let { id: r, ...s } = o2;
    return H$1({ ourProps: { id: r, "aria-hidden": true, onClick: i2 }, theirProps: s, slot: { open: u2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${t$3()}` } }, inheritAttrs: false, setup(o2, { attrs: n2, slots: t2, expose: u2 }) {
  let i2 = C("DialogBackdrop"), r = ref(null);
  return u2({ el: r, $el: r }), onMounted(() => {
    if (i2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s, ...p2 } = o2, m2 = { id: s, ref: r, "aria-hidden": true };
    return h$1(P, { force: true }, () => h$1(U, () => H$1({ ourProps: m2, theirProps: { ...n2, ...p2 }, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${t$3()}` } }, setup(o2, { attrs: n2, slots: t2, expose: u2 }) {
  let i2 = C("DialogPanel");
  u2({ el: i2.panelRef, $el: i2.panelRef });
  function r(s) {
    s.stopPropagation();
  }
  return () => {
    let { id: s, ...p2 } = o2, m2 = { id: s, ref: i2.panelRef, onClick: r };
    return H$1({ ourProps: m2, theirProps: p2, slot: { open: i2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${t$3()}` } }, setup(o2, { attrs: n2, slots: t2 }) {
  let u2 = C("DialogTitle");
  return onMounted(() => {
    u2.setTitleId(o2.id), onUnmounted(() => u2.setTitleId(null));
  }), () => {
    let { id: i2, ...r } = o2;
    return H$1({ ourProps: { id: i2 }, theirProps: r, slot: { open: u2.dialogState.value === 0 }, attrs: n2, slots: t2, name: "DialogTitle" });
  };
} });
function l(r) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o();
  if (!e2)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r) => r.includes("ms") ? parseFloat(r) : parseFloat(r) * 1e3).sort((r, c2) => c2 - r);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s = o(), o$12 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o$12(u2))));
  }), s.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s.add(() => o$12("cancelled")), s.dispose;
}
function g(e2 = "") {
  return e2.split(" ").filter((t2) => t2.trim().length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s(n2, r = S$1$1.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$2(r, { [S$1$1.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S$1$1.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r = t2.value.find(({ id: l2 }) => l2 === n2);
    return r ? r.state !== "visible" && (r.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s(n2, S$1$1.Unmount);
  }
  return { children: t2, register: h2, unregister: s };
}
let W = N$1$1.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s, expose: h2 }) {
  let n2 = ref(0);
  function r() {
    n2.value |= l$2.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~l$2.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= l$2.Closing, t2("beforeLeave");
  }
  function S2() {
    n2.value &= ~l$2.Closing, t2("afterLeave");
  }
  if (!me() && C$1())
    return () => h$1(Se, { ...e2, onBeforeEnter: r, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S2 }, s);
  let d2 = ref(null), b2 = computed(() => e2.unmount ? S$1$1.Unmount : S$1$1.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H$1$1 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I = { value: true }, c2 = t$3(), y2 = { value: false }, P2 = Q(() => {
    !y2.value && i2.value !== "hidden" && (i2.value = "hidden", H$1$1(c2), S2());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (b2.value === S$1$1.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$2(i2.value, { ["hidden"]: () => H$1$1(c2), ["visible"]: () => D(c2) });
    }
  });
  let j = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _2 = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$1(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I.value && !A2.value, p2 = o$1(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (y2.value = true, v2.value && r(), v2.value || f2(), o2(v2.value ? L$1(p2, j, M2, X, _2, (V2) => {
      y2.value = false, V2 === g$1.Finished && l2();
    }) : L$1(p2, Y, Z, ee, _2, (V2) => {
      y2.value = false, V2 === g$1.Finished && (L(P2) || (i2.value = "hidden", H$1$1(c2), S2()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p2) => {
      te(p2), I.value = false;
    }, { immediate: true });
  }), provide(N, P2), c$2(computed(() => u$2(i2.value, { ["visible"]: l$2.Open, ["hidden"]: l$2.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V2, enterTo: Ce, entered: be, leave: ye, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$1.isServer ? { class: normalizeClass([a2.class, U2.class, ...j, ...M2]) } : {} };
    return H$1({ theirProps: re, ourProps: ne, slot: {}, slots: s, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s }) {
  let h2 = p$2$1(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & l$2.Open) === l$2.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r.value = "visible" : L(l2) || (r.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b2 = { unmount: e2.unmount };
    return H$1({ ourProps: { ...b2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...b2, ...d2 }, s.default)] }, attrs: {}, features: W, visible: r.value === "visible", name: "Transition" });
  };
} });
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.slideover, slideover);
const _sfc_main$5 = defineComponent({
  components: {
    HDialog: Ue,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: "right",
      validator: (value) => ["left", "right"].includes(value)
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("slideover", toRef(props, "ui"), config$2, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition,
        enterFrom: props.side === "left" ? ui.value.translate.left : ui.value.translate.right,
        enterTo: ui.value.translate.base,
        leaveFrom: ui.value.translate.base,
        leaveTo: props.side === "left" ? ui.value.translate.left : ui.value.translate.right
      };
    });
    function close(value) {
      isOpen.value = value;
      emit("close");
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      close
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    as: "template",
    appear: _ctx.appear,
    show: _ctx.isOpen
  }, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }]
        }, _ctx.attrs, {
          onClose: (e2) => !_ctx.preventClose && _ctx.close(e2)
        }), {
          default: withCtx((_3, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear"])) : createCommentVNode("", true),
                createVNode(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.transitionClass), {
                  default: withCtx(() => [
                    createVNode(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                }, 16, ["appear"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }]
          }, _ctx.attrs, {
            onClose: (e2) => !_ctx.preventClose && _ctx.close(e2)
          }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear"])) : createCommentVNode("", true),
              createVNode(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass), {
                default: withCtx(() => [
                  createVNode(_component_HDialogPanel, {
                    class: [_ctx.ui.base, _ctx.ui.width, _ctx.ui.background, _ctx.ui.ring, _ctx.ui.padding]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 16, ["appear"])
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Slideover.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$4 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config$1);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          createVNode("div", {
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.textarea, textarea);
const _sfc_main$3 = defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    autoresize: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    resize: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    textareaClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("textarea", toRef(props, "ui"), config, toRef(props, "class"));
    const { emitFormBlur, emitFormInput, inputId, color, size, name } = useFormGroup(props, config);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false }));
    const textarea2 = ref(null);
    const autoResize = () => {
      if (props.autoresize) {
        if (!textarea2.value) {
          return;
        }
        textarea2.value.rows = props.rows;
        const styles = (void 0).getComputedStyle(textarea2.value);
        const paddingTop = parseInt(styles.paddingTop);
        const paddingBottom = parseInt(styles.paddingBottom);
        const padding = paddingTop + paddingBottom;
        const lineHeight = parseInt(styles.lineHeight);
        const { scrollHeight } = textarea2.value;
        const newRows = (scrollHeight - padding) / lineHeight;
        if (newRows > props.rows) {
          textarea2.value.rows = newRows;
        }
      }
    };
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number) {
        value = looseToNumber(value);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      autoResize();
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      const value = event.target.value;
      if (modelModifiers.value.lazy) {
        updateInput(value);
      }
      if (modelModifiers.value.trim) {
        event.target.value = value.trim();
      }
    };
    const onBlur = (event) => {
      emit("blur", event);
      emitFormBlur();
    };
    watch(() => props.modelValue, () => {
      nextTick(autoResize);
    });
    const textareaClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        ui.value.rounded,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        !props.resize && "resize-none"
      ), props.textareaClass);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      textarea: textarea2,
      // eslint-disable-next-line vue/no-dupe-keys
      textareaClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><textarea${ssrRenderAttrs(_temp0 = mergeProps({
    id: _ctx.inputId,
    ref: "textarea",
    value: _ctx.modelValue,
    name: _ctx.name,
    rows: _ctx.rows,
    required: _ctx.required,
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    class: _ctx.textareaClass
  }, _ctx.attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Textarea.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
class CourseValidator {
}
__publicField(CourseValidator, "schema", z$1.object({
  name: z$1.string({ required_error: "Necess\xE1rio preencher o campo" }).min(10, "Nome deve conter mais de 10 caracteres").max(50, "Nome ultrapassou o limite de 50 caracteres"),
  description: z$1.string({ required_error: "Necess\xE1rio preencher o campo" }).min(50, "Descri\xE7\xE3o deve conter mais de 50 caracteres").max(763, "Descri\xE7\xE3o ultrapassou o limite de 763 caracteres")
}));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "form-edit-course",
  __ssrInlineRender: true,
  props: {
    course: Course
  },
  setup(__props) {
    const props = __props;
    const schema = CourseValidator.schema;
    const state = reactive(props.course);
    const onSubmit = async (event) => {
      isLoading.value = true;
      await $fetch(`${baseURL}/courses/update/${state.id}`, {
        method: "PATCH",
        body: state,
        credentials: "include",
        onRequestError: (error) => {
          var _a;
          return useFetchHandler((_a = error.response) == null ? void 0 : _a._data.error);
        }
      });
      isLoading.value = false;
      useFetchHandler("Atualizado", true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_2;
      const _component_UInput = __nuxt_component_3$2;
      const _component_UTextarea = __nuxt_component_3;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grip grid-cols-1 space-y-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        onSubmit,
        class: "space-y-2"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "name" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "xl",
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    color: "indigo",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "xl",
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event,
                      color: "indigo",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "description" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    size: "xl",
                    color: "indigo",
                    modelValue: unref(state).description,
                    "onUpdate:modelValue": ($event) => unref(state).description = $event,
                    autoresize: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      size: "xl",
                      color: "indigo",
                      modelValue: unref(state).description,
                      "onUpdate:modelValue": ($event) => unref(state).description = $event,
                      autoresize: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: "isLoading" in _ctx ? _ctx.isLoading : unref(isLoading),
              class: "w-full flex justify-center items-center",
              size: "xl",
              color: "indigo",
              label: "Salvar",
              type: "submit"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, { name: "name" }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    size: "xl",
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    color: "indigo",
                    type: "text"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, { name: "description" }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    size: "xl",
                    color: "indigo",
                    modelValue: unref(state).description,
                    "onUpdate:modelValue": ($event) => unref(state).description = $event,
                    autoresize: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: "isLoading" in _ctx ? _ctx.isLoading : unref(isLoading),
                class: "w-full flex justify-center items-center",
                size: "xl",
                color: "indigo",
                label: "Salvar",
                type: "submit"
              }, null, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-edit-course.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "form-add-course",
  __ssrInlineRender: true,
  setup(__props) {
    const schema = CourseValidator.schema;
    const state = reactive({});
    const onSubmit = async (event) => {
      isLoading.value = true;
      await $fetch(`${baseURL}/courses/create`, {
        method: "POST",
        body: state,
        credentials: "include",
        onRequestError: (error) => {
          var _a;
          return useFetchHandler((_a = error.response) == null ? void 0 : _a._data.error);
        }
      });
      isLoading.value = false;
      useFetchHandler("Adicionado", true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_2;
      const _component_UInput = __nuxt_component_3$2;
      const _component_UTextarea = __nuxt_component_3;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grip grid-cols-1 space-y-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        onSubmit,
        class: "space-y-2"
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "name" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "xl",
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    color: "indigo",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "xl",
                      modelValue: unref(state).name,
                      "onUpdate:modelValue": ($event) => unref(state).name = $event,
                      color: "indigo",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "description" }, {
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UTextarea, {
                    size: "xl",
                    color: "indigo",
                    modelValue: unref(state).description,
                    "onUpdate:modelValue": ($event) => unref(state).description = $event,
                    autoresize: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UTextarea, {
                      size: "xl",
                      color: "indigo",
                      modelValue: unref(state).description,
                      "onUpdate:modelValue": ($event) => unref(state).description = $event,
                      autoresize: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: "isLoading" in _ctx ? _ctx.isLoading : unref(isLoading),
              class: "w-full flex justify-center items-center",
              size: "xl",
              color: "indigo",
              label: "Adicionar",
              type: "submit"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, { name: "name" }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    size: "xl",
                    modelValue: unref(state).name,
                    "onUpdate:modelValue": ($event) => unref(state).name = $event,
                    color: "indigo",
                    type: "text"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, { name: "description" }, {
                default: withCtx(() => [
                  createVNode(_component_UTextarea, {
                    size: "xl",
                    color: "indigo",
                    modelValue: unref(state).description,
                    "onUpdate:modelValue": ($event) => unref(state).description = $event,
                    autoresize: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: "isLoading" in _ctx ? _ctx.isLoading : unref(isLoading),
                class: "w-full flex justify-center items-center",
                size: "xl",
                color: "indigo",
                label: "Adicionar",
                type: "submit"
              }, null, 8, ["loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-add-course.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userSession = useUserSession.value;
    const isOpen = ref(false);
    const chooseOption = ref({ option: 0 });
    let courseRef = reactive({});
    const { data, pending, error, refresh } = useAsyncData(
      "manager-courses",
      async () => await $fetch(`${baseURL}/courses/manager/${userSession.id}`, {
        method: "GET",
        credentials: "include"
      })
    );
    const deleteCourse = async (id) => {
      isLoading.value = true;
      await $fetch(`${baseURL}/courses/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
        onRequestError: (error2) => {
          var _a;
          return useFetchHandler((_a = error2.response) == null ? void 0 : _a._data.error);
        }
      });
      isLoading.value = false;
      useFetchHandler("Deletado", true);
    };
    const openEdit = (course) => {
      chooseOption.value.option = 1;
      isOpen.value = true;
      courseRef = course;
    };
    const openAdd = () => {
      chooseOption.value.option = 2;
      isOpen.value = true;
    };
    const closeSlideover = () => {
      chooseOption.value.option = 0;
      isOpen.value = false;
      return refresh();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$6;
      const _component_UButton = __nuxt_component_0$1;
      const _component_ListCourses = _sfc_main$7;
      const _component_USlideover = __nuxt_component_3$1;
      const _component_UCard = __nuxt_component_4;
      const _component_FormEditCourse = _sfc_main$2;
      const _component_FormAddCourse = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex justify-between items-center mt-5"><h1 class="font-bold text-2xl"> Gerenciar cursos </h1>`);
      _push(ssrRenderComponent(_component_UButton, {
        label: "Adicionar",
        color: "indigo",
        onClick: openAdd
      }, null, _parent));
      _push(`</div>`);
      if (unref(pending)) {
        _push(`<div> Carregando... </div>`);
      } else if (unref(error)) {
        _push(`<div> Ocorreu um problema. Tente novamente </div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(data), (course) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_ListCourses, {
            course
          }, null, _parent));
          _push(`<div class="flex justify-start items-center gap-2">`);
          _push(ssrRenderComponent(_component_UButton, {
            class: "bg-indigo-900",
            color: "indigo",
            size: "sm",
            icon: "i-heroicons-pencil-square-16-solid",
            onClick: ($event) => openEdit(course)
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(ssrRenderComponent(_component_USlideover, {
        modelValue: unref(isOpen),
        "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
        "prevent-close": ""
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, {
              class: "flex flex-col flex-1",
              ui: { body: { base: "flex-1" }, ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" }
            }, {
              header: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}>`);
                  if (unref(chooseOption).option == 1) {
                    _push3(`<div${_scopeId2}>${ssrInterpolate(unref(courseRef).name)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(chooseOption).option == 2) {
                    _push3(`<div${_scopeId2}> Adicionar curso </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</h3>`);
                  _push3(ssrRenderComponent(_component_UButton, {
                    color: "gray",
                    variant: "ghost",
                    icon: "i-heroicons-x-mark-20-solid",
                    class: "-my-1",
                    onClick: closeSlideover
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, [
                        unref(chooseOption).option == 1 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(unref(courseRef).name), 1)) : createCommentVNode("", true),
                        unref(chooseOption).option == 2 ? (openBlock(), createBlock("div", { key: 1 }, " Adicionar curso ")) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_UButton, {
                        color: "gray",
                        variant: "ghost",
                        icon: "i-heroicons-x-mark-20-solid",
                        class: "-my-1",
                        onClick: closeSlideover
                      })
                    ])
                  ];
                }
              }),
              default: withCtx((_22, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(chooseOption).option == 1) {
                    _push3(`<div class="space-y-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_FormEditCourse, {
                      class: "h-full",
                      course: unref(courseRef)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UButton, {
                      size: "xl",
                      class: "w-full flex justify-center items-center",
                      color: "red",
                      label: "Deletar",
                      onClick: ($event) => deleteCourse(unref(courseRef).id)
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(chooseOption).option == 2) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_FormAddCourse, { class: "h-full" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(chooseOption).option == 1 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-2"
                    }, [
                      createVNode(_component_FormEditCourse, {
                        class: "h-full",
                        course: unref(courseRef)
                      }, null, 8, ["course"]),
                      createVNode(_component_UButton, {
                        size: "xl",
                        class: "w-full flex justify-center items-center",
                        color: "red",
                        label: "Deletar",
                        onClick: ($event) => deleteCourse(unref(courseRef).id)
                      }, null, 8, ["onClick"])
                    ])) : createCommentVNode("", true),
                    unref(chooseOption).option == 2 ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_FormAddCourse, { class: "h-full" })
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, {
                class: "flex flex-col flex-1",
                ui: { body: { base: "flex-1" }, ring: "", divide: "divide-y divide-gray-100 dark:divide-gray-800" }
              }, {
                header: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("h3", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, [
                      unref(chooseOption).option == 1 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(unref(courseRef).name), 1)) : createCommentVNode("", true),
                      unref(chooseOption).option == 2 ? (openBlock(), createBlock("div", { key: 1 }, " Adicionar curso ")) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UButton, {
                      color: "gray",
                      variant: "ghost",
                      icon: "i-heroicons-x-mark-20-solid",
                      class: "-my-1",
                      onClick: closeSlideover
                    })
                  ])
                ]),
                default: withCtx(() => [
                  unref(chooseOption).option == 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "space-y-2"
                  }, [
                    createVNode(_component_FormEditCourse, {
                      class: "h-full",
                      course: unref(courseRef)
                    }, null, 8, ["course"]),
                    createVNode(_component_UButton, {
                      size: "xl",
                      class: "w-full flex justify-center items-center",
                      color: "red",
                      label: "Deletar",
                      onClick: ($event) => deleteCourse(unref(courseRef).id)
                    }, null, 8, ["onClick"])
                  ])) : createCommentVNode("", true),
                  unref(chooseOption).option == 2 ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_FormAddCourse, { class: "h-full" })
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/courses/manager/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-EfO-qYSH.mjs.map
