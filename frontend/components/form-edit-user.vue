<template>
    <div class="grip grid-cols-1 space-y-3">
        <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-2">
            <UFormGroup name="full_name">
                <UInput
                    size="xl"
                    v-model="state.full_name"
                    color="indigo"
                    type="text"
                />
            </UFormGroup>
            
            <UFormGroup name="email">
                <UTextarea
                    size="xl"
                    color="indigo"
                    v-model="state.email" 
                    autoresize
                />
            </UFormGroup>

            <UButton
                :loading="isLoading"
                class="w-full flex justify-center items-center"
                size="xl"
                color="indigo"
                label="Salvar"
                type="submit"
            />
        </UForm>
    </div>
</template>
<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { z } from 'zod';
import { baseURL } from '~/constants';

const props = defineProps({
    id: Number,
    is_administrator: String,
    full_name: String,
    email: String,
    login: String,
    birth: String,
    phone: String,
    address: String,
    cep: String,
    state: String,
    district: String,
    city: String
})

const schema = z.object({
    id: z.number(),
    name: 
        z.string({required_error: "Necessário preencher o campo"})
        .min(10, "Nome deve conter mais de 10 caracteres")
        .max(50, "Nome ultrapassou o limite de 50 caracteres"),

    description: 
        z.string({required_error: "Necessário preencher o campo"})
        .min(50, "Nome deve conter mais de 50 caracteres")
        .max(763, "Nome ultrapassou o limite de 763 caracteres"),
})

type Schema = z.output<typeof schema>

const state = reactive({
    id: props.id,
    login: props.login,
    email: props.email,
    full_name: props.full_name,
    is_administrator: props.is_administrator,
    phone: props.phone,
    birth: props.birth,
    cep: props.cep,
    address: props.address,
    district: props.district,
    city: props.city,
    state: props.state,
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    isLoading.value = true
    await $fetch(`${baseURL}/users/update/${state.id}`, {
        method: "PATCH",
        body: state,
        credentials: "include",
        onRequestError: (error) => useFetchHandler(error.response?._data.error),
    })
    isLoading.value = false

    useFetchHandler("Atualizado", true)

}
    
</script>