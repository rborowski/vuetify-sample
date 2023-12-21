<template >
  <div class="text-primary no-tasks text-center">
    <v-icon
      icon="mdi-check"
      size="100"
    ></v-icon>  
    <h1>No tasks. Let's add some</h1> 
  </div>
</template>

<style lang="sass">
  .no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>