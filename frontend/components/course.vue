<template>
    <div v-if="error">
        <h1>
            Ocorreu um problema... Tenta novamente.
        </h1>
    </div>

    <div v-else-if="pending">
        <h1>
            Carregando...
        </h1>
    </div>
    <div v-else>
        <div class="flex justify-between items-center">
            <h1 class="font-bold text-4xl py-5">{{ data.course.name }}</h1>
            <UButton
                :loading="isLoading"
                color="indigo"
                :label="isSubscribe ? 'Desinscrever' : 'Inscrever'"
                v-on:click = actionSubscribe()
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

const { data, pending, error, refresh } = useAsyncData(
    "courses-subscribe",
    async () => {
        const [course, subscribe] = await Promise.all([
        $fetch(`${baseURL}/courses/id/${route.params.id}`, {
                method: "GET",
                credentials: "include"
            }),
        $fetch(`${baseURL}/courses/subscribe/user/${useSession.id}`, {
                method: "GET",
                credentials: "include"
            })
        ])

        return { course, subscribe }
    }
)

const isSubscribe = ref(false)
const isLoading = ref(false)

watch(async () => {
    await data.value.subscribe.map((subs) => {
        if(subs.course_id == route.params.id) {
            isSubscribe.value = true;
        }
    })
})

const actionSubscribe = async () => {
    if(isSubscribe.value) {
        isLoading.value = true;
        await $fetch(`${baseURL}/courses/unsubscribe/${route.params.id}`, {
            method: "POST",
            credentials: "include",
        })
        isLoading.value = false;
        return isSubscribe.value = false;
    }

    if(!isSubscribe.value) {
        isLoading.value = true;
        await $fetch(`${baseURL}/courses/subscribe/${route.params.id}`, {
            method: "POST",
            credentials: "include"
        })
        isLoading.value = false;
        return isSubscribe.value = true;
    }
}

</script>