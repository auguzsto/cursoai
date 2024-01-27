import { z as useToast } from '../server.mjs';
import { ref } from 'vue';

const isLoading = ref(false);
ref({
  active: false,
  message: ""
});
let useFetchHandler = (message, isError2 = false) => {
  const toast = useToast();
  isLoading.value = false;
  toast.add({
    title: !isError2 ? "Temos um problema" : "Sucesso",
    description: message,
    color: !isError2 ? "red" : "green"
  });
};

export { isLoading as i, useFetchHandler as u };
//# sourceMappingURL=useFetchHandler-w15X1Dxl.mjs.map
