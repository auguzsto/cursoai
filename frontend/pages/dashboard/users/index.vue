<template>
    <AppHeader />
    <div class="grid sm:grid-cols-2 gap-5 py-5">
        <div v-if="error">
            Ocorreu um problema. Tente novamente.
        </div>

        <div v-else-if="pending">
            Carregando...
        </div>

        <div v-else v-for="user in data" :key="user.id">
            <ListUsers 
                :id="user.id"
                :full_name="user.full_name"
                :is_administrator="user.is_administrator"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { baseURL } from '~/constants';

const { data, pending, error }: any = useFetch(`${baseURL}/users/all`, {
    method: "GET",
    credentials: "include",
})

</script>