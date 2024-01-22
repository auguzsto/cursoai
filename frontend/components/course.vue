<template>
    <div v-if="error">
        <h1>
            Ocorreu um problema... Tenta novamente.
        </h1>
    </div>
    <div class="flex justify-between items-center">
        <h1 class="font-bold text-4xl py-5">{{ course.name }}</h1>
        <UButton
            color="indigo"
            :label="isSubscribe ? 'Desinscrever' : 'Inscrever'"
        />
    </div>
    <div class="flex-">
        <img 
            src="/public/images/thumbnail-courses.svg"
            class="sm:w-full"
        />
    </div>
</template>

<script setup>
import { baseURL } from '~/constants';

const route = useRoute();
const useSession = useUserSession.value

const { data: course, pending, error } = await useFetch(`${baseURL}/courses/id/${route.params.id}`, {
    method: "GET",
    credentials: "include"
})

const { data: subscribe, pending: subscribePending, error: subscribeError } = await useFetch(`${baseURL}/courses/subscribe/user/${useSession.id}`, {
    method: "GET",
    credentials: "include"
})

const isSubscribe = ref(false)
onMounted(() => {
    subscribe.value.map((subs) => {
       if(subs.course_id == route.params.id) {
            return isSubscribe.value = true;
       }
    })
})

</script>