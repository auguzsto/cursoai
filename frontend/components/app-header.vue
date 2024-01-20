<template>
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold">Olá, {{ userSession.full_name }}</h1>
        <AvatarProfile />
    </div>
</template>

<script setup lang="ts">
const userSession = useUserSession.value;
</script>