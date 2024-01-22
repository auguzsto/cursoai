<template>
    <div class="grid grid-rows-1 space-y-2">
        <div class="flex justify-between items-center">
            <div class="flex gap-3">
                <div v-show="isBackArrow()">
                    <ArrowBack />
                </div>
                <h1 class="text-2xl font-semibold">Olá, {{ userName }}</h1>
                <UButton
                    color="indigo"
                    icon="i-heroicons-home-16-solid"
                    to="/dashboard"
                />
            </div>
            <AvatarProfile />
        </div>
        <div class="flex justify-between items-center">
            <AppHeaderAdministrator />
        </div>
    </div>
</template>

<script setup lang="ts">

const isBackArrow = () => {
    const route = useRoute();
    if(route.path != "/dashboard") {
        return true;
    }

    return false;
}

const userSession = useUserSession.value;
const userName = userSession.full_name.split(" ")[0]
</script>