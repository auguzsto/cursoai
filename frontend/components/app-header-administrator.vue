<template>
    <div v-show="userSession.is_administrator" class="space-x-2">
        <UButton 
            color="indigo"
            label="Usuários"
            to="/dashboard/users"
        />

        <UButton 
            color="indigo"
            label="Cursos"
        />
    </div>
</template>

<script setup>
const userSession = useUserSession.value;
</script>