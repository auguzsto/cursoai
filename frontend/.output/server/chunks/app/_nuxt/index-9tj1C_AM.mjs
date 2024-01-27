import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { u as useAsyncData, _ as _sfc_main$2 } from './asyncData-ETC16-sh.mjs';
import { d as useRoute, e as useUserSession, b as __nuxt_component_0$1 } from '../server.mjs';
import { i as isLoading, u as useFetchHandler } from './useFetchHandler-w15X1Dxl.mjs';
import { useSSRContext, defineComponent, ref, watchEffect, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { b as baseURL } from './constants-sYltW3Y6.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'tailwind-merge';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _imports_0 = "" + publicAssetsURL("images/thumbnail-courses.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "course",
  __ssrInlineRender: true,
  props: {
    id: Number,
    name: String,
    description: String,
    author: String,
    isSubscribe: Boolean,
    actionSubscribe: Function
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center"><h1 class="font-bold text-4xl py-5">${ssrInterpolate(props.name)}</h1>`);
      _push(ssrRenderComponent(_component_UButton, {
        loading: "isLoading" in _ctx ? _ctx.isLoading : unref(isLoading),
        color: "indigo",
        label: props.isSubscribe ? "Desinscrever" : "Inscrever",
        onClick: props.actionSubscribe
      }, null, _parent));
      _push(`</div><div class="flex w-full border rounded-md border-gray-950 bg-gray-800 p-2 mb-5"><div class="grid grid-cols-1"><h1 class="font-semibold text-xl">Descri\xE7\xE3o</h1> ${ssrInterpolate(props.description)}</div></div><div><img${ssrRenderAttr("src", _imports_0)} class="sm:w-full"></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/course.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const useSession = useUserSession.value;
    const { data, pending, error } = useAsyncData(
      "courses-subscribe",
      async () => {
        const [course, subscribe] = await Promise.all([
          $fetch(`${baseURL}/courses/id/${route.params.id}`, {
            method: "GET",
            credentials: "include"
          }),
          $fetch(`${baseURL}/courses/subscribe/user/${useSession.id}`, {
            method: "GET",
            credentials: "include"
          })
        ]);
        return { course, subscribe };
      }
    );
    const isSubscribe = ref(false);
    watchEffect(async () => {
      await data.value.subscribe.map((subs) => {
        if (subs.course_id == route.params.id) {
          isSubscribe.value = true;
        }
      });
    });
    const actionSubscribe = async () => {
      if (isSubscribe.value) {
        isLoading.value = true;
        await $fetch(`${baseURL}/courses/unsubscribe/${route.params.id}`, {
          method: "POST",
          credentials: "include",
          onResponseError: (error2) => useFetchHandler(error2.response._data.error)
        });
        isLoading.value = false;
        return isSubscribe.value = false;
      }
      if (!isSubscribe.value) {
        isLoading.value = true;
        await $fetch(`${baseURL}/courses/subscribe/${route.params.id}`, {
          method: "POST",
          credentials: "include",
          onResponseError: (error2) => useFetchHandler(error2.response._data.error)
        });
        isLoading.value = false;
        return isSubscribe.value = true;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = _sfc_main$2;
      const _component_Course = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      if (unref(pending)) {
        _push(`<div> Carregando... </div>`);
      } else if (unref(error)) {
        _push(`<div> Ocorreu algum problema de conex\xE3o. Tente novamente </div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Course, {
          name: unref(data).course.name,
          description: unref(data).course.description,
          "is-subscribe": unref(isSubscribe),
          "action-subscribe": actionSubscribe
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/courses/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-9tj1C_AM.mjs.map
