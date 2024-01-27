<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>

  <UNotifications />
</template>

<script setup>
import 'dotenv/config'
onMounted(() => {
  useUserSession;
})
</script>