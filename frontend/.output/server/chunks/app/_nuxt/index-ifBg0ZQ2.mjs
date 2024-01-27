import { _ as _sfc_main$2 } from './asyncData-ETC16-sh.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3 } from './Input-4PBRS7hr.mjs';
import { d as useRoute, b as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, unref, reactive, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { i as isLoading, u as useFetchHandler } from './useFetchHandler-w15X1Dxl.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { b as baseURL } from './constants-sYltW3Y6.mjs';
import { U as User } from './User-p39blfwk.mjs';
import { U as UserValidator } from './UserValidator-9fyFh8tK.mjs';
import { u as useFetch } from './fetch-dXjDr7bN.mjs';
import 'tailwind-merge';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '@vueuse/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './Model-YHdrhj5m.mjs';
import 'zod';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "form-edit-user",
  __ssrInlineRender: true,
  props: {
    user: User
  },
  setup(__props) {
    const props = __props;
    const schema = UserValidator.schema;
    const state = reactive(props.user);
    let onSubmit = async (event) => {
      isLoading.value = true;
      await $fetch(`${baseURL}/users/update/${props.user.id}`, {
        method: "PATCH",
        body: state,
        credentials: "include",
        onResponseError: (error) => useFetchHandler(error.response._data.error)
      });
      isLoading.value = false;
      useFetchHandler("Atualizado", true);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_1;
      const _component_UFormGroup = __nuxt_component_2;
      const _component_UInput = __nuxt_component_3;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded-lg bg-gray-50 p-4" }, _attrs))}><div class="flex space-x-2 items-center mb-5">`);
      _push(ssrRenderComponent(_component_UForm, {
        schema: unref(schema),
        state: unref(state),
        onSubmit: unref(onSubmit),
        class: "w-full"
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
              size: "xl",
              type: "submit",
              color: "indigo",
              variant: "solid",
              class: "flex justify-center items-center w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Salvar `);
                } else {
                  return [
                    createTextVNode(" Salvar ")
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
                  size: "xl",
                  type: "submit",
                  color: "indigo",
                  variant: "solid",
                  class: "flex justify-center items-center w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Salvar ")
                  ]),
                  _: 1
                }, 8, ["loading"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form-edit-user.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRoute();
    const { data: user, pending, error } = useFetch(`${baseURL}/users/id/${router.params.id}`, {
      method: "GET",
      credentials: "include"
    }, "$2RdRn28umm");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$2;
      const _component_FormEditUser = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex justify-between items-center mt-5"><h1 class="font-bold text-2xl"> Editar usu\xE1rio </h1></div><div class="py-5">`);
      if (unref(error)) {
        _push(`<div> Ocorreu um problema. Tente novamente. ${ssrInterpolate(unref(error))}</div>`);
      } else if (unref(pending)) {
        _push(`<div> Carregando... </div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_FormEditUser, {
          user: unref(user)
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/users/manager/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ifBg0ZQ2.mjs.map
