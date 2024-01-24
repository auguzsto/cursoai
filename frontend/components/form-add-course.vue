<template>
    <div class="border rounded-md bg-gray-100 p-5">
        <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-2">
            <UFormGroup name="name">
                <UInput
                    size="xl"
                    v-model="state.name"
                    color="indigo"
                    placeholder="Título do curso"
                    type="text"
                />
            </UFormGroup>

            <UFormGroup name="description">
                <UTextarea
                    size="xl"
                    v-model="state.description"
                    color="indigo"
                    placeholder="Descrição do curso"
                />
            </UFormGroup>
            <UButton
                class="w-full flex items-center justify-center"
                color="indigo"
                label="Adicionar"
            />
        </UForm>
    </div>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';
import { z } from 'zod';
import { baseURL } from '~/constants';

const schema = z.object({
    name: z.string(
        {required_error: "Necessário preencher este campo"})
        .min(4, "Mínimo de 4 caracteres")
        .max(16, "Você ultrapassou o limite permitido"),
    description: z.string(
        {required_error: "Necessário preencher este campo"})
        .min(36, "Mínimo de 36 caracteres")
        .max(225, "Você ultrapassou o limite permitido"),
})

type Schema = z.output<typeof schema>

const state = reactive({
    name: undefined,
    description: undefined,
})

const isError = ref({
    active: false,
    message: ''
})

const isLoading = ref(false);

let onSubmit = async (event: FormSubmitEvent<Schema>) => {
    isLoading.value = true;
    const { data, pending, error } = useAsyncData(
        "add-course",
        async () => await $fetch(`${baseURL}/courses/create`, {
            method: "POST",
            body: state,
            credentials: "include"
        })
    )
    isLoading.value = false;

    if(error.value != null) {
        isError.value.active = true;
        isError.value.message = error.value.data as string;
        return;
    }
}

</script>