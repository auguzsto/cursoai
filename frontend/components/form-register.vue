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
                        icon="i-heroicons-at-symbol-16-solid"
                        color="indigo"
                        placeholder="Nome completo"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="phone">
                    <UInput 
                        size="lg"
                        v-model="state.phone" 
                        icon="i-heroicons-key-16-solid"
                        color="indigo" 
                        placeholder="Celular"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="birth">
                    <UInput
                        size="lg"
                        v-model="state.brith" 
                        icon="i-heroicons-at-symbol-16-solid"
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
                        icon="i-heroicons-at-symbol-16-solid"
                        color="indigo"
                        placeholder="CEP"
                        type="text"/>
                </UFormGroup>

                <UFormGroup name="address">
                    <UInput 
                        size="lg"
                        v-model="state.address" 
                        icon="i-heroicons-key-16-solid"
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
import { any, z } from "zod";

const schema = z.object({
    email: z.string({required_error: "Necessário preencher campo"}).email('E-mail inválido'),
    password: z.string({required_error: "Necessário preencher campo"}).min(1, 'Necessário preencher campo'),
    full_name: z.string({required_error: "Necessário preencher campo"}).min(4, 'Nome inválido'),
    phone: z.string({required_error: "Necessário preencher campo"}).min(16, "Celular inválido"),
});

type Schema = z.output<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined,
    full_name: undefined,
    phone: undefined,
    brith: undefined,
    cep: undefined,
    address: undefined,
    district: undefined,
    city: undefined,
    state: undefined
});

let onSubmit = async (event: FormSubmitEvent<Schema>) => {
    console.log(event.data.email)
}
</script>