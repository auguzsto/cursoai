<template>
    <div v-show="userSession.is_administrator" class="space-x-2">
        <UButton 
            color="indigo"
            label="Gerenciar usuários"
            to="/dashboard/users"
        />

        <UButton 
            color="indigo"
            label="Gerenciar cursos"
            to="/dashboard/courses/manager"
        />
    </div>
</template>

<script setup>
const userSession = useUserSession.value;
</script>