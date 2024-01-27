import { z } from 'zod';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const _UserValidator = class _UserValidator2 {
};
__publicField(_UserValidator, "_onlyNumber", new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
));
__publicField(_UserValidator, "_onlyString", new RegExp(
  /^([+]?[\sa-z]+)?(\d{3}|[(]?[a-z]+[)])?([-]?[\s]?[a-z])+$/
));
__publicField(_UserValidator, "schema", z.object({
  login: z.string({ required_error: "Necess\xE1rio preencher campo" }).min(5, "M\xEDnimo de 5 caract\xE9res").regex(_UserValidator._onlyString, "Apenas letras min\xFAsculas s\xE3o permitidas"),
  email: z.string({ required_error: "Necess\xE1rio preencher campo" }).email("E-mail inv\xE1lido"),
  password: z.string({ required_error: "Necess\xE1rio preencher campo" }).min(8, "M\xEDnimo 8 caracters, n\xFAmeros e letras"),
  full_name: z.string({ required_error: "Necess\xE1rio preencher campo" }).min(4, "Nome inv\xE1lido"),
  phone: z.string({ required_error: "Necess\xE1rio preencher campo" }).regex(_UserValidator._onlyNumber, "Apenas n\xFAmeros").length(11, "Celular inv\xE1lido"),
  birth: z.string({ required_error: "Necess\xE1rio preencher campo" }),
  cep: z.string({ required_error: "Necess\xE1rio preencher campo" }).regex(_UserValidator._onlyNumber, "Apenas n\xFAmeros").length(8, "Cep inv\xE1lido"),
  address: z.string({ required_error: "Necess\xE1rio preencher campo" }).min(2, "Campo inv\xE1lido"),
  district: z.string({ required_error: "Necess\xE1rio preencher campo" }).min(2, "Campo inv\xE1lido"),
  city: z.string({ required_error: "Necess\xE1rio preencher campo" }).min(2, "Campo inv\xE1lido"),
  state: z.string({ required_error: "Necess\xE1rio preencher campo" }).min(2, "Campo inv\xE1lido")
}));
let UserValidator = _UserValidator;

export { UserValidator as U };
//# sourceMappingURL=UserValidator-9fyFh8tK.mjs.map
