import{_ as b}from"./asyncData.sW88j4Uv.js";import{_ as v,a as z,b as $}from"./index.MnnfilkM.js";import{g as h,z as E,o as r,c as m,a as d,b as l,w as i,h as e,d as k,i as C,j as F,t as w,F as B}from"./entry.Bn6fpZtb.js";import{i as f,u as V}from"./useFetchHandler.GoSQu35s.js";import{b as y}from"./constants.Cn0qLSFg.js";import{U as D}from"./User.AJJs8PC_.js";import{U as L}from"./UserValidator.XnGbwWLr.js";import{u as R}from"./fetch.ZpmcI1jy.js";import"./Model.k2ZW1gmz.js";const S={class:"border rounded-lg bg-gray-50 p-4"},N={class:"flex space-x-2 items-center mb-5"},T={class:"space-y-2"},j={class:"space-y-2"},A={class:"col-span-3 mt-2"},H=h({__name:"form-edit-user",props:{user:D},setup(g){const u=g,_=L.schema,o=E(u.user);let c=async p=>{f.value=!0,await $fetch(`${y}/users/update/${u.user.id}`,{method:"PATCH",body:o,credentials:"include",onResponseError:t=>V(t.response._data.error)}),f.value=!1,V("Atualizado",!0)};return(p,t)=>{const n=v,a=z,x=C,U=$;return r(),m("div",S,[d("div",N,[l(U,{schema:e(_),state:e(o),onSubmit:e(c),class:"w-full"},{default:i(()=>[d("div",T,[l(a,{name:"login"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).login,"onUpdate:modelValue":t[0]||(t[0]=s=>e(o).login=s),icon:"i-heroicons-users-16-solid",color:"indigo",placeholder:"Login",type:"text"},null,8,["modelValue"])]),_:1}),l(a,{name:"email"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).email,"onUpdate:modelValue":t[1]||(t[1]=s=>e(o).email=s),icon:"i-heroicons-at-symbol-16-solid",color:"indigo",placeholder:"E-mail",type:"text"},null,8,["modelValue"])]),_:1}),l(a,{name:"full_name"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).full_name,"onUpdate:modelValue":t[2]||(t[2]=s=>e(o).full_name=s),icon:"i-heroicons-user-16-solid",color:"indigo",placeholder:"Nome completo",type:"text"},null,8,["modelValue"])]),_:1}),l(a,{name:"phone"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).phone,"onUpdate:modelValue":t[3]||(t[3]=s=>e(o).phone=s),icon:"i-heroicons-phone-16-solid",color:"indigo",placeholder:"Celular com DDD",type:"text"},null,8,["modelValue"])]),_:1}),l(a,{name:"birth"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).birth,"onUpdate:modelValue":t[4]||(t[4]=s=>e(o).birth=s),icon:"i-heroicons-calendar-days-16-solid",color:"indigo",placeholder:"Data de nascimento",type:"date"},null,8,["modelValue"])]),_:1})]),d("div",j,[l(a,{name:"cep"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).cep,"onUpdate:modelValue":t[5]||(t[5]=s=>e(o).cep=s),icon:"i-heroicons-map-pin-16-solid",color:"indigo",placeholder:"CEP",type:"text"},null,8,["modelValue"])]),_:1}),l(a,{name:"address"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).address,"onUpdate:modelValue":t[6]||(t[6]=s=>e(o).address=s),icon:"i-heroicons-map-16-solid",color:"indigo",placeholder:"Endereço",type:"text"},null,8,["modelValue"])]),_:1}),l(a,{name:"district"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).district,"onUpdate:modelValue":t[7]||(t[7]=s=>e(o).district=s),icon:"i-heroicons-key-16-solid",color:"indigo",placeholder:"Bairro",type:"text"},null,8,["modelValue"])]),_:1}),l(a,{name:"city"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).city,"onUpdate:modelValue":t[8]||(t[8]=s=>e(o).city=s),icon:"i-heroicons-key-16-solid",color:"indigo",placeholder:"Cidade",type:"text"},null,8,["modelValue"])]),_:1}),l(a,{name:"state"},{default:i(()=>[l(n,{size:"lg",modelValue:e(o).state,"onUpdate:modelValue":t[9]||(t[9]=s=>e(o).state=s),icon:"i-heroicons-key-16-solid",color:"indigo",placeholder:"Estado",type:"text"},null,8,["modelValue"])]),_:1})]),d("div",A,[l(x,{loading:"isLoading"in p?p.isLoading:e(f),size:"xl",type:"submit",color:"indigo",variant:"solid",class:"flex justify-center items-center w-full"},{default:i(()=>[k(" Salvar ")]),_:1},8,["loading"])])]),_:1},8,["schema","state","onSubmit"])])])}}}),G=d("div",{class:"flex justify-between items-center mt-5"},[d("h1",{class:"font-bold text-2xl"}," Editar usuário ")],-1),P={class:"py-5"},I={key:0},O={key:1},q={key:2},oe=h({__name:"index",setup(g){const u=F(),{data:_,pending:o,error:c}=R(`${y}/users/id/${u.params.id}`,{method:"GET",credentials:"include"},"$2RdRn28umm");return(p,t)=>{const n=b,a=H;return r(),m(B,null,[l(n),G,d("div",P,[e(c)?(r(),m("div",I," Ocorreu um problema. Tente novamente. "+w(e(c)),1)):e(o)?(r(),m("div",O," Carregando... ")):(r(),m("div",q,[l(a,{user:e(_)},null,8,["user"])]))])],64)}}});export{oe as default};
