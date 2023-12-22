import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
  const snackbar = ref({show: false, message: "", timeout: 1500})

  function showSnackbar(message, timeout=1500) {
    if (snackbar.value.show) {
      snackbar.value.show === false
    }
    snackbar.value = {show: true, message, timeout}
  }

  return {
    snackbar,
    showSnackbar
  };
});
