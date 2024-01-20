<template>
    <UDropdown
        mode="click"
        :items="items"
        :popper="{ placement: 'bottom-start' }"
    >
        <UAvatar
            icon="i-heroicons-user-16-solid"
            size="md"
        />
    </UDropdown>
</template>

<script setup>
const items = [
    [{
        label: "Editar",
        icon: "i-heroicons-pencil-square-20-solid",
    },
    {
        label: "Cursos",
        icon: "i-heroicons-video-camera-16-solid",
    },
    {
        label: "Sair",
        icon: "i-heroicons-arrow-left-start-on-rectangle-16-solid",
        click: () => {
            const cookie = useCookie('cursoai_session');
            cookie.value = null
            return navigateTo('/')
        }
    }]
]
</script>