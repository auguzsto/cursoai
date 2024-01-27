import { _ as __nuxt_component_1$2, a as __nuxt_component_2, b as __nuxt_component_3 } from './Input-4PBRS7hr.mjs';
import { m as mergeConfig, f as appConfig, q as __nuxt_component_0$4, h as __nuxt_component_1$1, g as useUI, _ as _export_sfc, x as checkSession, n as navigateTo, b as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, toRef, computed, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { i as isLoading, u as useFetchHandler } from './useFetchHandler-w15X1Dxl.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { b as baseURL } from './constants-sYltW3Y6.mjs';
import { z } from 'zod';
import { twMerge, twJoin } from 'tailwind-merge';
import '@vueuse/core';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const divider = {
  wrapper: {
    base: "flex items-center align-center text-center w-full",
    horizontal: "flex-row",
    vertical: "flex-col"
  },
  container: {
    base: "font-medium text-gray-700 dark:text-gray-200 flex",
    horizontal: "mx-3 whitespace-nowrap",
    vertical: "my-2"
  },
  border: {
    base: "flex border-gray-200 dark:border-gray-800",
    horizontal: "w-full",
    vertical: "h-full",
    size: {
      horizontal: "border-t",
      vertical: "border-s"
    },
    type: {
      solid: "border-solid",
      dotted: "border-dotted",
      dashed: "border-dashed"
    }
  },
  icon: {
    base: "flex-shrink-0 w-5 h-5"
  },
  avatar: {
    base: "flex-shrink-0",
    size: "2xs"
  },
  label: "text-sm"
};
class AuthValidator {
}
__publicField(AuthValidator, "schema", z.object({
  email: z.string({ required_error: "Necess\xE1rio preencher campo" }).email("E-mail inv\xE1lido"),
  password: z.string({ required_error: "Necess\xE1rio preencher campo" }).min(1, "Necess\xE1rio preencher campo")
}));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "form-login",
  __ssrInlineRender: true,
  setup(__props) {
    const schema = AuthValidator.schema;
    const state = reactive({});
    let onSubmit = async (event) => {
      isLoading.value = true;
      await $fetch(`${baseURL}/auth/signIn`, {
        method: "POST",
        body: state,
        credentials: "include",
        onResponseError: (error) => useFetchHandler(error.response._data.error)
      });
      isLoading.value = false;
      useFetchHandler("Tudo certo!", true);
      checkSession();
      return navigateTo("/dashboard");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_1$2;
      const _component_UFormGroup = __nuxt_component_2;
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 border rounded-lg bg-gray-50 p-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        onSubmit: unref(onSubmit),
        class: "space-y-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "email" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    icon: "i-heroicons-at-symbol-16-solid",
                    color: "indigo",
                    placeholder: "E-mail",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).email,
                      "onUpdate:modelValue": ($event) => unref(state).email = $event,
                      icon: "i-heroicons-at-symbol-16-solid",
                      color: "indigo",
                      placeholder: "E-mail",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "password" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).password,
                    "onUpdate:modelValue": ($event) => unref(state).password = $event,
                    icon: "i-heroicons-key-16-solid",
                    color: "indigo",
                    placeholder: "Senha",
                    type: "password"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).password,
                      "onUpdate:modelValue": ($event) => unref(state).password = $event,
                      icon: "i-heroicons-key-16-solid",
                      color: "indigo",
                      placeholder: "Senha",
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, {
              loading: "isLoading" in _ctx ? _ctx.isLoading : unref(isLoading),
              size: "lg",
              type: "submit",
              color: "black",
              variant: "solid",
              icon: "i-heroicons-arrow-right-end-on-rectangle",
              class: "flex justify-center items-center w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Entrar `);
                } else {
                  return [
                    createTextVNode(" Entrar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, { name: "email" }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).email,
                    "onUpdate:modelValue": ($event) => unref(state).email = $event,
                    icon: "i-heroicons-at-symbol-16-solid",
                    color: "indigo",
                    placeholder: "E-mail",
                    type: "text"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, { name: "password" }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).password,
                    "onUpdate:modelValue": ($event) => unref(state).password = $event,
                    icon: "i-heroicons-key-16-solid",
                    color: "indigo",
                    placeholder: "Senha",
                    type: "password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, {
                loading: "isLoading" in _ctx ? _ctx.isLoading : unref(isLoading),
                size: "lg",
                type: "submit",
                color: "black",
                variant: "solid",
                icon: "i-heroicons-arrow-right-end-on-rectangle",
                class: "flex justify-center items-center w-full"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Entrar ")
                ]),
                _: 1
              }, 8, ["loading"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-login.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.divider, divider);
const _sfc_main$1 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$4,
    UAvatar: __nuxt_component_1$1
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    avatar: {
      type: Object,
      default: null
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    type: {
      type: String,
      default: "solid",
      validator: (value) => ["solid", "dotted", "dashed"].includes(value)
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
    const { ui, attrs } = useUI("divider", toRef(props, "ui"), config);
    const wrapperClass = computed(() => {
      return twMerge(twJoin(
        ui.value.wrapper.base,
        ui.value.wrapper[props.orientation]
      ), props.class);
    });
    const containerClass = computed(() => {
      return twJoin(
        ui.value.container.base,
        ui.value.container[props.orientation]
      );
    });
    const borderClass = computed(() => {
      return twJoin(
        ui.value.border.base,
        ui.value.border[props.orientation],
        ui.value.border.size[props.orientation],
        ui.value.border.type[props.type]
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      containerClass,
      borderClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$4;
  const _component_UAvatar = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: _ctx.wrapperClass }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.borderClass)}"></div>`);
  if (_ctx.label || _ctx.icon || _ctx.avatar || _ctx.$slots.default) {
    _push(`<!--[--><div class="${ssrRenderClass(_ctx.containerClass)}">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, () => {
      if (_ctx.label) {
        _push(`<span class="${ssrRenderClass(_ctx.ui.label)}">${ssrInterpolate(_ctx.label)}</span>`);
      } else if (_ctx.icon) {
        _push(ssrRenderComponent(_component_UIcon, {
          name: _ctx.icon,
          class: _ctx.ui.icon.base
        }, null, _parent));
      } else if (_ctx.avatar) {
        _push(ssrRenderComponent(_component_UAvatar, mergeProps({ size: _ctx.ui.avatar.size, ..._ctx.avatar }, {
          class: _ctx.ui.avatar.base
        }), null, _parent));
      } else {
        _push(`<!---->`);
      }
    }, _push, _parent);
    _push(`</div><div class="${ssrRenderClass(_ctx.borderClass)}"></div><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/layout/Divider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FormLogin = _sfc_main$2;
  const _component_UDivider = __nuxt_component_1;
  const _component_UButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-full" }, _attrs))}><div class="grid grid-rows-1 gap-2"><div class="flex justify-center items-center"><h1 class="font-bold text-4xl">CursoA\xED</h1></div><div class="flex justify-center items-center"><h1 class="text-xl text-gray-400">Sua plataforma de ensino a dist\xE2ncia</h1></div><div>`);
  _push(ssrRenderComponent(_component_FormLogin, null, null, _parent));
  _push(ssrRenderComponent(_component_UDivider, {
    class: "py-4",
    label: "N\xE3o possuo acesso"
  }, null, _parent));
  _push(ssrRenderComponent(_component_UButton, {
    to: "/register",
    size: "lg",
    type: "submit",
    color: "indigo",
    variant: "solid",
    icon: "i-heroicons-arrow-right-end-on-rectangle",
    class: "flex justify-center items-center w-full"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Criar conta `);
      } else {
        return [
          createTextVNode(" Criar conta ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CXbxINpu.mjs.map
