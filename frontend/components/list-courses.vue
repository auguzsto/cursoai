<template>

    <div class="bord" v-if="pending">
        <UProgress  
            color="indigo"
        />
    </div>

    <div v-else-if="error">Ocorreu algum problema de conexão. Tente novamente</div>

    <div v-else v-for="course in data" :key="course.id">
        <div class="grid grid-cols-1 border rounded-md p-2 sm:h-[315px]">
            <div>
                <img 
                    class="sm:w-50 sm:h-50"
                    src="/images/thumbnail-courses.svg" 
                />
            </div>
            <h1 class="text-lg text-gray-400">{{ course.name }}</h1>
            <h1 class="text-sm text-gray-400">Desc</h1>
                <div class="flex justify-end">
                <UBadge
                    color="indigo"
                    :label="course.author"
                />
            </div>
        </div>
    </div>
     
</template>

<script setup>
import { baseURL } from '~/constants';

const { data, pending, error } = await useFetch(`${baseURL}/courses/all`, {
    method: "GET",
    credentials: "include",
})

</script>