<template >
  <div class="text-primary no-tasks text-center">
    <v-icon
      :icon="emptyList ? 'mdi-check' : 'mdi-close'"
      size="100"
    ></v-icon>  
    <h1>{{emptyList ? "No tasks. Let's add some" : "No tasks matching"}}</h1> 
  </div>
</template>

<script setup>
const props = defineProps({emptyList: {type: Boolean, default: true}})
</script>

<style lang="sass">
  .no-tasks
    opacity: 0.5
</style>