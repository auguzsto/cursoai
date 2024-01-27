import { a as __nuxt_component_0$3 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './Badge-JWjp_P31.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { M as Model } from './Model-YHdrhj5m.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class Course extends Model {
  constructor() {
    super(...arguments);
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "author");
    __publicField(this, "description");
  }
}
class CourseSubscribe {
  constructor() {
    __publicField(this, "user_id");
    __publicField(this, "course_id");
    __publicField(this, "subscribe_created_at");
    __publicField(this, "subscribe_updated_at");
    __publicField(this, "subscribe_deleted_at");
    __publicField(this, "course_name");
    __publicField(this, "course_description");
    __publicField(this, "course_author");
    __publicField(this, "course_created_at");
    __publicField(this, "course_updated_at");
    __publicField(this, "course_deleted_at");
  }
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list-courses",
  __ssrInlineRender: true,
  props: {
    course: Course,
    subscribe: CourseSubscribe
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_UBadge = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-1 gap-3 py-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/dashboard/courses/${props.course.id || props.subscribe.course_id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-2"${_scopeId}><div class="col-end-1 border border-indigo-600 rounded-l-md bg-indigo-600"${_scopeId}><div class="flex items-center justify-center h-36 px-4"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="sm:w-20 sm:h-20 h-20 w-20" viewBox="0 0 16 16"${_scopeId}><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-.847-9.766A.75.75 0 0 0 6 5.866v4.268a.75.75 0 0 0 1.153.633l3.353-2.134a.75.75 0 0 0 0-1.266z" clip-rule="evenodd"${_scopeId}></path></svg></div></div><div class="col-span-2"${_scopeId}><div class="border rounded-r-md border-gray-800 bg-gray-800 h-36 p-3"${_scopeId}><h1 class="text-xl font-semibold text-gray-400 truncate"${_scopeId}>${ssrInterpolate(props.course.name || props.subscribe.course_name)}</h1><h1 class="text-sm text-gray-400 line-clamp-3"${_scopeId}>${ssrInterpolate(props.course.description || props.subscribe.course_description)}</h1><div class="flex justify-between items-center mt-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UBadge, {
              size: "sm",
              color: "ghost",
              variant: "outline",
              label: props.course.author || props.subscribe.course_author
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-2" }, [
                createVNode("div", { class: "col-end-1 border border-indigo-600 rounded-l-md bg-indigo-600" }, [
                  createVNode("div", { class: "flex items-center justify-center h-36 px-4" }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "sm:w-20 sm:h-20 h-20 w-20",
                      viewBox: "0 0 16 16"
                    }, [
                      createVNode("path", {
                        fill: "currentColor",
                        "fill-rule": "evenodd",
                        d: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-.847-9.766A.75.75 0 0 0 6 5.866v4.268a.75.75 0 0 0 1.153.633l3.353-2.134a.75.75 0 0 0 0-1.266z",
                        "clip-rule": "evenodd"
                      })
                    ]))
                  ])
                ]),
                createVNode("div", { class: "col-span-2" }, [
                  createVNode("div", { class: "border rounded-r-md border-gray-800 bg-gray-800 h-36 p-3" }, [
                    createVNode("h1", { class: "text-xl font-semibold text-gray-400 truncate" }, toDisplayString(props.course.name || props.subscribe.course_name), 1),
                    createVNode("h1", { class: "text-sm text-gray-400 line-clamp-3" }, toDisplayString(props.course.description || props.subscribe.course_description), 1),
                    createVNode("div", { class: "flex justify-between items-center mt-2" }, [
                      createVNode(_component_UBadge, {
                        size: "sm",
                        color: "ghost",
                        variant: "outline",
                        label: props.course.author || props.subscribe.course_author
                      }, null, 8, ["label"])
                    ])
                  ])
                ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list-courses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Course as C, _sfc_main as _ };
//# sourceMappingURL=list-courses-FXZjSw8Y.mjs.map
