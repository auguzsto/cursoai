<template>
    <AppHeader />
    <h1 class="font-bold text-2xl mt-5">
        Gerenciar cursos
    </h1>

    <div v-if="pending">
        Carregando...
    </div>

    <div v-else-if="error">
        Ocorreu um problema. Tente novamente
    </div>

    <div v-else v-for="course in data">
        <ListCourses 
            :id="course.id"
            :name="course.name"
            :description="course.description"
            :author="course.author"
        />
    </div>
</template>

<script setup lang="ts">
import { baseURL } from '~/constants';

const userSession = useUserSession.value;

const { data, pending, error }: any = useAsyncData(
    "manager-courses",
    async () => await $fetch(`${baseURL}/courses/manager/${userSession.id}`, {
        method: "GET",
        credentials: "include",
    })
)
</script>