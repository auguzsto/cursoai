<template>
    <div class="grid sm:grid-cols-1 gap-3 py-3">
        <NuxtLink :to="`/dashboard/courses/${props.id}`">
            <div class="grid grid-cols-2">
    
                <div class="col-end-1 border border-indigo-600 rounded-l-md bg-indigo-600">
                    <div class="flex items-center justify-center h-36 px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="sm:w-20 sm:h-20 h-20 w-20" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-.847-9.766A.75.75 0 0 0 6 5.866v4.268a.75.75 0 0 0 1.153.633l3.353-2.134a.75.75 0 0 0 0-1.266z" clip-rule="evenodd"/></svg>
                    </div>
                </div>

                <div class="col-span-2">
                    <div class="border rounded-r-md border-gray-800 bg-gray-800 h-36 p-3">
                        <h1 class="text-xl font-semibold text-gray-400 truncate">
                            {{ props.name }}
                        </h1>
                        <h1 class="text-sm text-gray-400 line-clamp-3">
                            {{ props.description }}
                        </h1>
                        <div class="flex justify-start items-center mt-2"> 
                            <UBadge
                                size="sm"
                                color="ghost"
                                variant="outline"
                                :label="$props.author"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </NuxtLink>
    </div>
     
</template>

<script setup lang="ts">

const props = defineProps({
    id: String,
    name: String,
    author: String,
    description: String,
})

</script>