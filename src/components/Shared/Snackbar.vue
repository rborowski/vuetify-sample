<template>
  <v-snackbar
  v-model="mainStore.snackbar.show"
  :timeout="mainStore.snackbar.timeout"
  >
  {{ mainStore.snackbar.message}}
  
  <template v-slot:actions>
    <v-btn
      color="blue"
      variant="text"
      @click="mainStore.snackbar.show = false"
    >
      Close
    </v-btn>
  </template>
  </v-snackbar>
</template>

<script setup>
import { useMainStore } from "../../store/MainStore";

const mainStore = useMainStore();
</script>

<style scoped lang="sass">
div.v-snack:not(.v-snack--absolute) 
  height: 100%
</style>