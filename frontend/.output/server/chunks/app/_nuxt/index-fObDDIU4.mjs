import { _ as _sfc_main$2 } from './asyncData-ETC16-sh.mjs';
import { n as navigateTo, h as __nuxt_component_1, b as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_1$1 } from './Badge-JWjp_P31.mjs';
import { useSSRContext, defineComponent, unref } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { U as User } from './User-p39blfwk.mjs';
import { u as useFetch } from './fetch-dXjDr7bN.mjs';
import { b as baseURL } from './constants-sYltW3Y6.mjs';
import 'tailwind-merge';
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
import './Model-YHdrhj5m.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "list-users",
  __ssrInlineRender: true,
  props: {
    user: User,
    action: Function
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UAvatar = __nuxt_component_1;
      const _component_UBadge = __nuxt_component_1$1;
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="border border-indigo-500 p-2 rounded-md bg-indigo-500 grid grid-cols-3"><div class="col-end-1 p-1">`);
      _push(ssrRenderComponent(_component_UAvatar, {
        icon: "i-heroicons-user-16-solid",
        size: "xl"
      }, null, _parent));
      _push(`</div><div class="flex flex-col justify-center px-2 col-span-2"><h1 class="text-gray-100">${ssrInterpolate(props.user.full_name)}</h1><div style="${ssrRenderStyle(props.user.is_administrator ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_UBadge, {
        size: "sm",
        label: "Administrador",
        class: "bg-gray-900"
      }, null, _parent));
      _push(`</div></div><div class="flex justify-end items-center px-2 col-start-3 gap-2">`);
      _push(ssrRenderComponent(_component_UButton, {
        color: "ghost",
        size: "sm",
        icon: "i-heroicons-pencil-square-16-solid",
        onClick: props.action
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list-users.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { data, pending, error } = useFetch(`${baseURL}/users/all`, {
      method: "GET",
      credentials: "include"
    }, "$rG8GJ0dVeT");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$2;
      const _component_ListUsers = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<div class="flex justify-between items-center mt-5"><h1 class="font-bold text-2xl"> Gerenciar usu\xE1rios </h1></div><div class="grid sm:grid-cols-2 gap-5 py-5">`);
      if (unref(error)) {
        _push(`<div> Ocorreu um problema. Tente novamente. </div>`);
      } else if (unref(pending)) {
        _push(`<div> Carregando... </div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(data), (user) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_ListUsers, {
            user,
            action: () => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/dashboard/users/manager/${user.id}`)
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/users/manager/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-fObDDIU4.mjs.map
