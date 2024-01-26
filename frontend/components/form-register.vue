<template>
    <div class="border rounded-lg bg-gray-50 p-4">
        <div class="flex space-x-2 items-center mb-5">
            <UButton
                to="/"
                variant="ghost"
                color="indigo"
                icon="i-heroicons-arrow-left-16-solid"
            />
            <h1 class="text-2xl font-semibold text-indigo-500">Registrar</h1>
        </div>
        <UForm :schema="schema" :state="state" @submit="onSubmit" class="grid grid-cols-2 gap-2">
            <div class="space-y-2">
                <UFormGroup name="login">
                    <UInput
                        size="lg"
                        v-model="state.login" 
                        icon="i-heroicons-users-16-solid"
                        color="indigo"
                        placeholder="Login"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="email">
                    <UInput
                        size="lg"
                        v-model="state.email" 
                        icon="i-heroicons-at-symbol-16-solid"
                        color="indigo"
                        placeholder="E-mail"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="password">
                    <UInput 
                        size="lg"
                        v-model="state.password" 
                        icon="i-heroicons-key-16-solid"
                        color="indigo" 
                        placeholder="Senha"
                        type="password"/>
                </UFormGroup>
                <UFormGroup name="full_name">
                    <UInput
                        size="lg"
                        v-model="state.full_name" 
                        icon="i-heroicons-user-16-solid"
                        color="indigo"
                        placeholder="Nome completo"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="phone">
                    <UInput 
                        size="lg"
                        v-model="state.phone" 
                        icon="i-heroicons-phone-16-solid"
                        color="indigo" 
                        placeholder="Celular com DDD"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="birth">
                    <UInput
                        size="lg"
                        v-model="state.birth" 
                        icon="i-heroicons-calendar-days-16-solid"
                        color="indigo"
                        placeholder="Data de nascimento"
                        type="date"/>
                </UFormGroup>
            </div>

            <div class="space-y-2">
                <UFormGroup name="cep">
                    <UInput
                        size="lg"
                        v-model="state.cep" 
                        icon="i-heroicons-map-pin-16-solid"
                        color="indigo"
                        placeholder="CEP"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="address">
                    <UInput 
                        size="lg"
                        v-model="state.address" 
                        icon="i-heroicons-map-16-solid"
                        color="indigo" 
                        placeholder="Endereço"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="district">
                    <UInput 
                        size="lg"
                        v-model="state.district" 
                        icon="i-heroicons-key-16-solid"
                        color="indigo" 
                        placeholder="Bairro"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="city">
                    <UInput 
                        size="lg"
                        v-model="state.city" 
                        icon="i-heroicons-key-16-solid"
                        color="indigo" 
                        placeholder="Cidade"
                        type="text"/>
                </UFormGroup>
                
                <UFormGroup name="state">
                    <UInput 
                        size="lg"
                        v-model="state.state" 
                        icon="i-heroicons-key-16-solid"
                        color="indigo" 
                        placeholder="Estado"
                        type="text"/>
                </UFormGroup>
            </div>

            <div class="col-span-3 mt-2">
                <UButton
                    :loading="isLoading"
                    size="lg"
                    type="submit" 
                    color="indigo"
                    variant="solid"
                    icon="i-heroicons-arrow-right-end-on-rectangle"
                    class="flex justify-center items-center w-full">
                    Criar conta
                </UButton>
            </div>
        </UForm>
    </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
import { z } from "zod";
import { baseURL } from "~/constants";

const onlyNumber = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const onlyString = new RegExp(
  /^([+]?[\sa-z]+)?(\d{3}|[(]?[a-z]+[)])?([-]?[\s]?[a-z])+$/
);

const schema = z.object({
    login: z.string({required_error: "Necessário preencher campo"}).min(5, "Mínimo de 5 caractéres").regex(onlyString, 'Apenas letras minúsculas são permitidas'),
    email: z.string({required_error: "Necessário preencher campo"}).email('E-mail inválido'),
    password: z.string({required_error: "Necessário preencher campo"}).min(8, 'Mínimo 8 caracters, números e letras'),
    full_name: z.string({required_error: "Necessário preencher campo"}).min(4, 'Nome inválido'),
    phone: z.string({required_error: "Necessário preencher campo"}).regex(onlyNumber, 'Apenas números').length(11, "Celular inválido"),
    birth: z.string({required_error: "Necessário preencher campo"}),
    cep: z.string({required_error: "Necessário preencher campo"}).regex(onlyNumber, 'Apenas números').length(8, 'Cep inválido'),
    address: z.string({required_error: "Necessário preencher campo"}).min(2, "Campo inválido"),
    district: z.string({required_error: "Necessário preencher campo"}).min(2, "Campo inválido"),
    city: z.string({required_error: "Necessário preencher campo"}).min(2, "Campo inválido"),
    state: z.string({required_error: "Necessário preencher campo"}).min(2, "Campo inválido"),
})

type Schema = z.output<typeof schema>

const state = reactive({
    login: undefined,
    email: undefined,
    password: undefined,
    full_name: undefined,
    phone: undefined,
    birth: undefined,
    cep: undefined,
    address: undefined,
    district: undefined,
    city: undefined,
    state: undefined
});


let onSubmit = async (event: FormSubmitEvent<Schema>) => {
    isLoading.value = true;
    await $fetch(`${baseURL}/auth/signUp`, {
        method: "POST",
        body: state,
        credentials: "include",
        onResponseError: (error) => useFetchHandler(error.response._data.error)
    })
    isLoading.value = false;

    useFetchHandler("Conta registrada", true)

    
}

</script>