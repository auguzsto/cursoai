var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class Model {
  constructor() {
    __publicField(this, "created_at");
    __publicField(this, "updated_at");
    __publicField(this, "deleted_at");
  }
}

export { Model as M };
//# sourceMappingURL=Model-YHdrhj5m.mjs.map
