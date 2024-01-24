const toast = useToast()

export let useFetchHandler = (message: string, isError: boolean = false): void => {
    isLoading.value = false;
    toast.add({
        title: !isError ? "Temos um problema" : "Sucesso",
        description: message,
        color: !isError ? "red" : "green"
    })
}