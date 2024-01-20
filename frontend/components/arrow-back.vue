<template>
    <UButton
        to="/dashboard"
        variant="ghost"
        color="indigo"
        icon="i-heroicons-arrow-left-16-solid"
        :to="back()"
    />
</template>

<script setup>

const back = () => {
    const router = useRouter();
    router.back();
}
</script>