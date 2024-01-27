import { _ as _sfc_main$1 } from './asyncData-ETC16-sh.mjs';
import { _ as _sfc_main$2 } from './list-courses-FXZjSw8Y.mjs';
import { e as useUserSession } from '../server.mjs';
import { u as useFetch } from './fetch-dXjDr7bN.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { b as baseURL } from './constants-sYltW3Y6.mjs';
import 'tailwind-merge';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './Badge-JWjp_P31.mjs';
import './Model-YHdrhj5m.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const userSession = useUserSession.value;
    const { data, pending, error } = useFetch(`${baseURL}/courses/subscribe/user/${userSession.id}`, {
      method: "GET",
      credentials: "include"
    }, "$fjfGyqo8Kc");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$1;
      const _component_ListCourses = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<h1 class="font-bold text-2xl mt-5"> Minhas inscri\xE7\xF5es </h1>`);
      if (unref(pending)) {
        _push(`<div> Carregando... </div>`);
      } else if (unref(error)) {
        _push(`<div> Ocorreu algum problema de conex\xE3o. Tente novamente </div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(data), (subscribe) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_ListCourses, {
            course: {},
            subscribe
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/courses/subscribes/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-aEWKGH6d.mjs.map
