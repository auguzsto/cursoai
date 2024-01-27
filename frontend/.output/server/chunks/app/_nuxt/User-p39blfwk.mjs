import { M as Model } from './Model-YHdrhj5m.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class User extends Model {
  constructor() {
    super(...arguments);
    __publicField(this, "id");
    __publicField(this, "full_name");
    __publicField(this, "is_administrator");
    __publicField(this, "password");
    __publicField(this, "email");
    __publicField(this, "login");
    __publicField(this, "birth");
    __publicField(this, "phone");
    __publicField(this, "address");
    __publicField(this, "cep");
    __publicField(this, "city");
    __publicField(this, "district");
    __publicField(this, "state");
  }
}

export { User as U };
//# sourceMappingURL=User-p39blfwk.mjs.map
