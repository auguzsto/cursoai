<template>

    <div v-if="pending">
        <h1>
            Carregando...
        </h1>
    </div>

    <div v-else-if="error">
        <h1>
            Ocorreu algum problema de conexão. Tente novamente
        </h1>
    </div>

    <div v-else v-for="course in data" :key="course.id">
        <NuxtLink :to="`/dashboard/courses/${course.id}`">
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
        </NuxtLink>
    </div>
     
</template>

<script setup>
import { baseURL } from '~/constants';

const { data, pending, error } = useFetch(`${baseURL}/courses/all`, {
    method: "GET",
    credentials: "include",
})

</script>