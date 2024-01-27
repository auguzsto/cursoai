import { defineComponent, onUnmounted, ref, provide, useSSRContext, toRef, inject, computed, mergeProps } from 'vue';
import { useEventBus, useDebounceFn } from '@vueuse/core';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { m as mergeConfig, f as appConfig, g as useUI, y as input, q as __nuxt_component_0$4, i as useInjectButtonGroup, _ as _export_sfc, l as looseToNumber } from '../server.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import { t as defu } from '../../nitro/node-server.mjs';

const formGroup = {
  wrapper: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
  },
  size: {
    "2xs": "text-xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-sm",
    lg: "text-sm",
    xl: "text-base"
  },
  container: "mt-1 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm"
  }
};
let _id = 0;
function uid() {
  _id = (_id + 1) % Number.MAX_SAFE_INTEGER;
  return `nuid-${_id}`;
}
class FormException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, FormException.prototype);
  }
}
const _sfc_main$2 = defineComponent({
  props: {
    schema: {
      type: Object,
      default: void 0
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    },
    validateOn: {
      type: Array,
      default: () => ["blur", "input", "change", "submit"]
    }
  },
  emits: ["submit", "error"],
  setup(props, { expose, emit }) {
    const bus = useEventBus(`form-${uid()}`);
    onUnmounted(() => {
      bus.reset();
    });
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    const inputs = ref({});
    provide("form-inputs", inputs);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        if (isZodSchema(props.schema)) {
          errs = errs.concat(await getZodErrors(props.state, props.schema));
        } else if (isYupSchema(props.schema)) {
          errs = errs.concat(await getYupErrors(props.state, props.schema));
        } else if (isJoiSchema(props.schema)) {
          errs = errs.concat(await getJoiErrors(props.state, props.schema));
        } else if (isValibotSchema(props.schema)) {
          errs = errs.concat(await getValibotError(props.state, props.schema));
        } else {
          throw new Error("Form validation failed: Unsupported form schema");
        }
      }
      return errs;
    }
    async function validate(path, opts = { silent: false }) {
      if (path) {
        const otherErrors = errors.value.filter(
          (error) => error.path !== path
        );
        const pathErrors = (await getErrors()).filter(
          (error) => error.path === path
        );
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      if (!opts.silent && errors.value.length > 0) {
        throw new FormException(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    async function onSubmit(payload) {
      var _a;
      const event = payload;
      try {
        if ((_a = props.validateOn) == null ? void 0 : _a.includes("submit")) {
          await validate();
        }
        const submitEvent = {
          ...event,
          data: props.state
        };
        emit("submit", submitEvent);
      } catch (error) {
        if (!(error instanceof FormException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: errors.value.map((err) => ({
            ...err,
            id: inputs.value[err.path]
          }))
        };
        emit("error", errorEvent);
      }
    }
    expose({
      validate,
      errors,
      setErrors(errs, path) {
        errors.value = errs;
        if (path) {
          errors.value = errors.value.filter(
            (error) => error.path !== path
          ).concat(errs);
        } else {
          errors.value = errs;
        }
      },
      async submit() {
        await onSubmit(new Event("submit"));
      },
      getErrors(path) {
        if (path) {
          return errors.value.filter((err) => err.path === path);
        }
        return errors.value;
      },
      clear(path) {
        if (path) {
          errors.value = errors.value.filter((err) => err.path !== path);
        } else {
          errors.value = [];
        }
      }
    });
    return {
      onSubmit
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
async function getYupErrors(state, schema) {
  try {
    await schema.validate(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isYupError(error)) {
      return error.inner.map((issue) => {
        var _a;
        return {
          path: (_a = issue.path) != null ? _a : "",
          message: issue.message
        };
      });
    } else {
      throw error;
    }
  }
}
function isZodSchema(schema) {
  return schema.parse !== void 0;
}
async function getZodErrors(state, schema) {
  const result = await schema.safeParseAsync(state);
  if (result.success === false) {
    return result.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message
    }));
  }
  return [];
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
async function getJoiErrors(state, schema) {
  try {
    await schema.validateAsync(state, { abortEarly: false });
    return [];
  } catch (error) {
    if (isJoiError(error)) {
      return error.details.map((detail) => ({
        path: detail.path.join("."),
        message: detail.message
      }));
    } else {
      throw error;
    }
  }
}
function isValibotSchema(schema) {
  return schema._parse !== void 0;
}
async function getValibotError(state, schema) {
  const result = await schema._parse(state);
  if (result.issues) {
    return result.issues.map((issue) => {
      var _a;
      return {
        path: ((_a = issue.path) == null ? void 0 : _a.map((p) => p.key).join(".")) || "",
        message: issue.message
      };
    });
  }
  return [];
}
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Form.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.formGroup, formGroup);
const _sfc_main$1 = defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
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
    eagerValidation: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("formGroup", toRef(props, "ui"), config$1, toRef(props, "class"));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a, _b;
      return props.error && typeof props.error === "string" || typeof props.error === "boolean" ? props.error : (_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error2) => error2.path === props.name)) == null ? void 0 : _b.message;
    });
    const size = computed(() => {
      var _a;
      return ui.value.size[(_a = props.size) != null ? _a : config$1.default.size];
    });
    const inputId = ref();
    provide("form-group", {
      error,
      inputId,
      name: computed(() => props.name),
      size: computed(() => props.size),
      eagerValidation: computed(() => props.eagerValidation)
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      size,
      // eslint-disable-next-line vue/no-dupe-keys
      error
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.label.wrapper, _ctx.size])}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass([_ctx.ui.label.base, _ctx.required ? _ctx.ui.label.required : ""])}">`);
    if (_ctx.$slots.label) {
      ssrRenderSlot(_ctx.$slots, "label", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.label)}<!--]-->`);
    }
    _push(`</label>`);
    if (_ctx.hint || _ctx.$slots.hint) {
      _push(`<span class="${ssrRenderClass([_ctx.ui.hint])}">`);
      if (_ctx.$slots.hint) {
        ssrRenderSlot(_ctx.$slots, "hint", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
      } else {
        _push(`<!--[-->${ssrInterpolate(_ctx.hint)}<!--]-->`);
      }
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.description, _ctx.size])}">`);
    if (_ctx.$slots.description) {
      ssrRenderSlot(_ctx.$slots, "description", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.description)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([_ctx.label ? _ctx.ui.container : ""])}">`);
  ssrRenderSlot(_ctx.$slots, "default", { error: _ctx.error }, null, _push, _parent);
  if (typeof _ctx.error === "string" && _ctx.error || _ctx.$slots.error) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.error, _ctx.size])}">`);
    if (_ctx.$slots.error) {
      ssrRenderSlot(_ctx.$slots, "error", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.error)}<!--]-->`);
    }
    _push(`</p>`);
  } else if (_ctx.help || _ctx.$slots.help) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.help, _ctx.size])}">`);
    if (_ctx.$slots.help) {
      ssrRenderSlot(_ctx.$slots, "help", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.help)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const useFormGroup = (inputProps, config2) => {
  const formBus = inject("form-events", void 0);
  const formGroup2 = inject("form-group", void 0);
  inject("form-inputs", void 0);
  const inputId = ref(inputProps == null ? void 0 : inputProps.id);
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup2 == null ? void 0 : formGroup2.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup2 == null ? void 0 : formGroup2.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup2 == null ? void 0 : formGroup2.eagerValidation.value)) {
      emitFormEvent("input", formGroup2 == null ? void 0 : formGroup2.name.value);
    }
  }, 300);
  return {
    inputId,
    name: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.name) != null ? _a : formGroup2 == null ? void 0 : formGroup2.name.value;
    }),
    size: computed(() => {
      var _a2, _b;
      var _a;
      const formGroupSize = config2.size[formGroup2 == null ? void 0 : formGroup2.size.value] ? formGroup2 == null ? void 0 : formGroup2.size.value : null;
      return (_b = (_a2 = inputProps == null ? void 0 : inputProps.size) != null ? _a2 : formGroupSize) != null ? _b : (_a = config2 == null ? void 0 : config2.default) == null ? void 0 : _a.size;
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup2 == null ? void 0 : formGroup2.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const _sfc_main = defineComponent({
  components: {
    UIcon: __nuxt_component_0$4
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
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
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
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
    inputClass: {
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
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormInput, size: sizeFormGroup, color, inputId, name } = useFormGroup(props, config);
    const size = computed(() => sizeButtonGroup.value || sizeFormGroup.value);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false }));
    const input2 = ref(null);
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number || props.type === "number") {
        value = looseToNumber(value);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
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
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      input: input2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    ref: "input",
    name: _ctx.name,
    value: _ctx.modelValue,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: _ctx.inputClass
  }, _ctx.attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_3 as b, useFormGroup as u };
//# sourceMappingURL=Input-4PBRS7hr.mjs.map
