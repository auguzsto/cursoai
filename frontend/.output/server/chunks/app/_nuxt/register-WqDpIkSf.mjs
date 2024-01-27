import { _ as _export_sfc, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3 } from './Input-4PBRS7hr.mjs';
import { useSSRContext, defineComponent, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { i as isLoading, u as useFetchHandler } from './useFetchHandler-w15X1Dxl.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { b as baseURL } from './constants-sYltW3Y6.mjs';
import { U as UserValidator } from './UserValidator-9fyFh8tK.mjs';
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
import 'tailwind-merge';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vueuse/core';
import 'zod';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "form-register",
  __ssrInlineRender: true,
  setup(__props) {
    const schema = UserValidator.schema;
    const state = reactive({});
    let onSubmit = async (event) => {
      isLoading.value = true;
      await $fetch(`${baseURL}/auth/signUp`, {
        method: "POST",
        body: state,
        credentials: "include",
        onResponseError: (error) => useFetchHandler(error.response._data.error)
      });
      isLoading.value = false;
      useFetchHandler("Conta registrada", true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      const _component_UForm = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_2;
      const _component_UInput = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded-lg bg-gray-50 p-4" }, _attrs))}><div class="flex space-x-2 items-center mb-5">`);
      _push(ssrRenderComponent(_component_UButton, {
        to: "/",
        variant: "ghost",
        color: "indigo",
        icon: "i-heroicons-arrow-left-16-solid"
      }, null, _parent));
      _push(`<h1 class="text-2xl font-semibold text-indigo-500">Registrar</h1></div>`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        onSubmit: unref(onSubmit),
        class: "grid grid-cols-2 gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "login" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).login,
                    "onUpdate:modelValue": ($event) => unref(state).login = $event,
                    icon: "i-heroicons-users-16-solid",
                    color: "indigo",
                    placeholder: "Login",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).login,
                      "onUpdate:modelValue": ($event) => unref(state).login = $event,
                      icon: "i-heroicons-users-16-solid",
                      color: "indigo",
                      placeholder: "Login",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "full_name" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).full_name,
                    "onUpdate:modelValue": ($event) => unref(state).full_name = $event,
                    icon: "i-heroicons-user-16-solid",
                    color: "indigo",
                    placeholder: "Nome completo",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).full_name,
                      "onUpdate:modelValue": ($event) => unref(state).full_name = $event,
                      icon: "i-heroicons-user-16-solid",
                      color: "indigo",
                      placeholder: "Nome completo",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "phone" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).phone,
                    "onUpdate:modelValue": ($event) => unref(state).phone = $event,
                    icon: "i-heroicons-phone-16-solid",
                    color: "indigo",
                    placeholder: "Celular com DDD",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).phone,
                      "onUpdate:modelValue": ($event) => unref(state).phone = $event,
                      icon: "i-heroicons-phone-16-solid",
                      color: "indigo",
                      placeholder: "Celular com DDD",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "birth" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).birth,
                    "onUpdate:modelValue": ($event) => unref(state).birth = $event,
                    icon: "i-heroicons-calendar-days-16-solid",
                    color: "indigo",
                    placeholder: "Data de nascimento",
                    type: "date"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).birth,
                      "onUpdate:modelValue": ($event) => unref(state).birth = $event,
                      icon: "i-heroicons-calendar-days-16-solid",
                      color: "indigo",
                      placeholder: "Data de nascimento",
                      type: "date"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "cep" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).cep,
                    "onUpdate:modelValue": ($event) => unref(state).cep = $event,
                    icon: "i-heroicons-map-pin-16-solid",
                    color: "indigo",
                    placeholder: "CEP",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).cep,
                      "onUpdate:modelValue": ($event) => unref(state).cep = $event,
                      icon: "i-heroicons-map-pin-16-solid",
                      color: "indigo",
                      placeholder: "CEP",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "address" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).address,
                    "onUpdate:modelValue": ($event) => unref(state).address = $event,
                    icon: "i-heroicons-map-16-solid",
                    color: "indigo",
                    placeholder: "Endere\xE7o",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).address,
                      "onUpdate:modelValue": ($event) => unref(state).address = $event,
                      icon: "i-heroicons-map-16-solid",
                      color: "indigo",
                      placeholder: "Endere\xE7o",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "district" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).district,
                    "onUpdate:modelValue": ($event) => unref(state).district = $event,
                    icon: "i-heroicons-key-16-solid",
                    color: "indigo",
                    placeholder: "Bairro",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).district,
                      "onUpdate:modelValue": ($event) => unref(state).district = $event,
                      icon: "i-heroicons-key-16-solid",
                      color: "indigo",
                      placeholder: "Bairro",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "city" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).city,
                    "onUpdate:modelValue": ($event) => unref(state).city = $event,
                    icon: "i-heroicons-key-16-solid",
                    color: "indigo",
                    placeholder: "Cidade",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).city,
                      "onUpdate:modelValue": ($event) => unref(state).city = $event,
                      icon: "i-heroicons-key-16-solid",
                      color: "indigo",
                      placeholder: "Cidade",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, { name: "state" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    size: "lg",
                    modelValue: unref(state).state,
                    "onUpdate:modelValue": ($event) => unref(state).state = $event,
                    icon: "i-heroicons-key-16-solid",
                    color: "indigo",
                    placeholder: "Estado",
                    type: "text"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).state,
                      "onUpdate:modelValue": ($event) => unref(state).state = $event,
                      icon: "i-heroicons-key-16-solid",
                      color: "indigo",
                      placeholder: "Estado",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="col-span-3 mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UButton, {
              loading: "isLoading" in _ctx ? _ctx.isLoading : unref(isLoading),
              size: "lg",
              type: "submit",
              color: "indigo",
              variant: "solid",
              icon: "i-heroicons-arrow-right-end-on-rectangle",
              class: "flex justify-center items-center w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Criar conta `);
                } else {
                  return [
                    createTextVNode(" Criar conta ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-2" }, [
                createVNode(_component_UFormGroup, { name: "login" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).login,
                      "onUpdate:modelValue": ($event) => unref(state).login = $event,
                      icon: "i-heroicons-users-16-solid",
                      color: "indigo",
                      placeholder: "Login",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
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
                createVNode(_component_UFormGroup, { name: "full_name" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).full_name,
                      "onUpdate:modelValue": ($event) => unref(state).full_name = $event,
                      icon: "i-heroicons-user-16-solid",
                      color: "indigo",
                      placeholder: "Nome completo",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { name: "phone" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).phone,
                      "onUpdate:modelValue": ($event) => unref(state).phone = $event,
                      icon: "i-heroicons-phone-16-solid",
                      color: "indigo",
                      placeholder: "Celular com DDD",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { name: "birth" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).birth,
                      "onUpdate:modelValue": ($event) => unref(state).birth = $event,
                      icon: "i-heroicons-calendar-days-16-solid",
                      color: "indigo",
                      placeholder: "Data de nascimento",
                      type: "date"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "space-y-2" }, [
                createVNode(_component_UFormGroup, { name: "cep" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).cep,
                      "onUpdate:modelValue": ($event) => unref(state).cep = $event,
                      icon: "i-heroicons-map-pin-16-solid",
                      color: "indigo",
                      placeholder: "CEP",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { name: "address" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).address,
                      "onUpdate:modelValue": ($event) => unref(state).address = $event,
                      icon: "i-heroicons-map-16-solid",
                      color: "indigo",
                      placeholder: "Endere\xE7o",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { name: "district" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).district,
                      "onUpdate:modelValue": ($event) => unref(state).district = $event,
                      icon: "i-heroicons-key-16-solid",
                      color: "indigo",
                      placeholder: "Bairro",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { name: "city" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).city,
                      "onUpdate:modelValue": ($event) => unref(state).city = $event,
                      icon: "i-heroicons-key-16-solid",
                      color: "indigo",
                      placeholder: "Cidade",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UFormGroup, { name: "state" }, {
                  default: withCtx(() => [
                    createVNode(_component_UInput, {
                      size: "lg",
                      modelValue: unref(state).state,
                      "onUpdate:modelValue": ($event) => unref(state).state = $event,
                      icon: "i-heroicons-key-16-solid",
                      color: "indigo",
                      placeholder: "Estado",
                      type: "text"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "col-span-3 mt-2" }, [
                createVNode(_component_UButton, {
                  loading: "isLoading" in _ctx ? _ctx.isLoading : unref(isLoading),
                  size: "lg",
                  type: "submit",
                  color: "indigo",
                  variant: "solid",
                  icon: "i-heroicons-arrow-right-end-on-rectangle",
                  class: "flex justify-center items-center w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Criar conta ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-register.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_FormRegister = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-full" }, _attrs))}><div class="grid grid-rows-1 gap-2"><div>`);
  _push(ssrRenderComponent(_component_FormRegister, null, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { register as default };
//# sourceMappingURL=register-WqDpIkSf.mjs.map
