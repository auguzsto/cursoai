export default defineNuxtRouteMiddleware(async (to, from) => {
    checkSession();
    if(to.path != "/"  && useUserSession.value == null) {
        return navigateTo("/");
    }
})

const checkSession = async () => {
    const cookie = useCookie('cursoai_session');
    if(cookie.value != null) {
        const decode = atob(cookie.value)
        const object = JSON.parse(decode)
        return useUserSession.value = object;
    }

    return useUserSession.value = null
}