<template>
    <AppHeader />
    <h1 class="font-bold text-2xl mt-5">
        Cursos adicionados recentemente
    </h1>
    <div v-if="pending">
        Carregando...
    </div>

    <div v-else-if="error">
        Ocorreu algum problema de conexão. Tente novamente
    </div>

    <div v-else v-for="course in data" :key="course.id">
        <ListCourses 
            :id="course.id"
            :name="course.name"
            :author="course.author"
            :description="course.description"
        />
        </div>
</template>

<script setup lang="ts">
import { baseURL } from '~/constants';

const { data, pending, error }: any = useFetch(`${baseURL}/courses/all`, {
    method: "GET",
    credentials: "include",
})

</script>