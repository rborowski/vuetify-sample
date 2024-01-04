import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMainStore = defineStore("main", () => {
  const snackbar = ref({show: false, message: "", timeout: 1500})

  function showSnackbar(message, timeout=1500) {
    if (snackbar.value.show) {
      snackbar.value.show === false
    }
    snackbar.value = {show: true, message, timeout}
  }

  const appTitle = computed(() => import.meta.env.VITE_APP_TITLE)

  return {
    snackbar,
    showSnackbar,
    appTitle
  };
});
