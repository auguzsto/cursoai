<template>
    <AppHeader />
    <div class="flex justify-between items-center mt-5">
        <h1 class="font-bold text-2xl">
            Gerenciar usuários
        </h1>
    </div>

    <div class="grid sm:grid-cols-2 gap-5 py-5">
        <div v-if="error">
            Ocorreu um problema. Tente novamente. {{ error }}
        </div>

        <div v-else-if="pending">
            Carregando...
        </div>

        <div v-else v-for="user in data" :key="user.id">
            <ListUsers 
                :id="user.id"
                :full_name="user.full_name"
                :is_administrator="user.is_administrator"
                :is-open="isOpen"
            />
        </div>
    </div>
    <USlideover v-model="isOpen" prevent-close>
            <UCard 
                class="flex flex-col flex-1" 
                :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header>
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                            {{ userRef.full_name }}
                        </h3>
                        <UButton 
                            color="gray" 
                            variant="ghost" 
                            icon="i-heroicons-x-mark-20-solid" class="-my-1" 
                            @click="closeSlideover" 
                        />
                    </div>
                </template>
                        <FormEditUser
                            class="h-full"
                            :id="userRef.id"
                            :full_name="userRef.full_name"
                            :email="userRef.email"
                        />
                        <UButton 
                            size="xl"
                            class="w-full flex justify-center items-center"
                            color="red"
                            label="Deletar"
                            @click=""
                        />
            </UCard>
        </USlideover>
</template>

<script setup lang="ts">
import { baseURL } from '~/constants';
const isOpen = ref(false)

const userRef = ref({
    id: Number,
    is_administrator: String,
    full_name: String,
    email: String,
    login: String,
    birth: String,
    phone: String,
    address: String,
    cep: String,
    state: String,
    district: String,
    city: String
})

const { data, pending, error, refresh }: any = useFetch(`${baseURL}/users/all`, {
    method: "GET",
    credentials: "include",
})

const closeSlideover = (): void => {
    isOpen.value = true
    refresh()
}

</script>