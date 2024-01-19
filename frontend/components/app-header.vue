<template>
    <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold">Olá</h1>
        <AvatarProfile />
    </div>
</template>

<script setup lang="ts">
let data = await $fetch("http://127.0.0.1:8000/api/auth/session", {
    method: "GET",
    credentials: "include",
    cache: "no-cache"
}); 
</script>