<template>
    <AppHeader />
    <h1 class="font-bold text-2xl mt-5">
        Minhas inscrições
    </h1>
    
    <div v-if="pending">
        Carregando...
    </div>

    <div v-else-if="error">
        Ocorreu algum problema de conexão. Tente novamente
    </div>

    <div v-else v-for="subscribe in data" :key="subscribe.course_id">
        <ListCourses 
            :id="subscribe.course_id"
            :name="subscribe.course_name"
            :description="subscribe.course_description"
            :author="subscribe.course_author"
        /> 
    </div>
</template>

<script setup lang="ts">
import { baseURL } from '~/constants';

const userSession = useUserSession.value
const {data, pending, error }: any = useFetch(`${baseURL}/courses/subscribe/user/${userSession.id}`, {
    method: "GET",
    credentials: "include"
})

</script>