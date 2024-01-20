<template>
    <div v-for="user in data" :key="user.id">
        <div class="border border-indigo-500 p-2 rounded-md bg-indigo-500 grid grid-cols-3">
             <div class="col-end-1 p-1">
                <UAvatar
                    icon="i-heroicons-user-16-solid"
                    size="xl"
                />
             </div>
             <div class="flex justify-start items-center px-2 col-span-2">
                Content
             </div>
             <div class="flex justify-end items-center px-2 col-start-3">
                <UButton
                    color="ghost"
                    size="sm"
                    icon="i-heroicons-pencil-square-16-solid"
                />
                <UButton
                    color="ghost"
                    size="sm"
                    icon="i-heroicons-trash-16-solid"
                />
             </div>
        </div>
    </div>
</template>

<script setup>
import { baseURL } from '~/constants';

const { data, pending, error } = await useFetch(`${baseURL}/users/all`, {
    method: "GET",
    credentials: "include",
})

</script>