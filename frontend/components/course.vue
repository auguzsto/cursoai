<template>
    <div v-if="error || subscribeError">
        <h1>
            Ocorreu um problema... Tenta novamente.
        </h1>
    </div>

    <div v-else-if="pending || subscribePending">
        <h1>
            Carregando...
        </h1>
    </div>
    <div v-else>
        <div class="flex justify-between items-center">
            <h1 class="font-bold text-4xl py-5">{{ course.name }}</h1>
            <UButton
                color="indigo"
                :label="isSubscribe ? 'Desinscrever' : 'Inscrever'"
            />
        </div>
        <div class="flex-">
            <img 
                src="/images/thumbnail-courses.svg"
                class="sm:w-full"
            />
        </div>
    </div>

</template>

<script setup>
import { baseURL } from '~/constants';

const route = useRoute();
const useSession = useUserSession.value

const { data: course, pending, error } = useFetch(`${baseURL}/courses/id/${route.params.id}`, {
    method: "GET",
    credentials: "include"
})

const { data: subscribe, pending: subscribePending, error: subscribeError } = useFetch(`${baseURL}/courses/subscribe/user/${useSession.id}`, {
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