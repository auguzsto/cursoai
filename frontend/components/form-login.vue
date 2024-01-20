<template>
    <div class="grid grid-cols-1 border rounded-lg bg-gray-50 p-4">
        <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-2">
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
            <UButton
                :loading="isLoading"
                size="lg"
                type="submit" 
                color="black"
                variant="solid"
                icon="i-heroicons-arrow-right-end-on-rectangle"
                class="flex justify-center items-center w-full">
                Entrar
            </UButton>
        </UForm>
    </div>
    <div v-show="isError" class="py-5">
        <UNotification
            :id="1"
            color="red"
            icon="i-heroicons-x-circle"
            description="Email ou senha inválidos"
            title="Temos um problema!"
            :timeout="0"
            :callback = "() => isError = false"/>
    </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";
import { z } from "zod";
import { baseURL } from "~/constants";
import { checkSession } from "~/middleware/auth.global";

const schema = z.object({
    email: z.string({required_error: "Necessário preencher campo"}).email('E-mail inválido'),
    password: z.string({required_error: "Necessário preencher campo"}).min(1, 'Necessário preencher campo'),
});

type Schema = z.output<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined,
});

const isLoading = ref(false)
const isError = ref(false)

let onSubmit = async (event: FormSubmitEvent<Schema>) => {
    isLoading.value = true;
    const { data, pending, error } = await useAsyncData('auth', 
        () => $fetch(`${baseURL}/auth/signIn`, {
            method: 'POST',
            body: state,
            credentials: "include"
        })
    )
    isLoading.value = false;
    
    if(error.value != null) return isError.value = true;

    checkSession();

    return navigateTo("/dashboard")
    
}

</script>