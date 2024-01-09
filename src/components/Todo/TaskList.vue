<template>
  <v-list select-strategy="classic" class="px-0">
    <Sortable
      :list="tasksStore.computedTasks"
      item-key="id"
      :options="options"
      @update="tasksStore.onOrderUpdate($event)"
    >
      <template #item="{element, index}">
        <div class="draggable" :key="element.id">
          <task :task="element"/>
        </div>
      </template>
    </Sortable>
  </v-list>
</template>

<script setup>
import { useTasksStore } from "../../store/TasksStore";
import Task from "./Task.vue";
import { Sortable } from "sortablejs-vue3"
import { computed } from "vue";

const tasksStore = useTasksStore()

const options = computed(() => {
  return {
    draggable: ".draggable",
    animation: 150,
    ghostClass: "ghost",
    dragClass: "drag",
    handle: ".handle",
    scroll: true,
    forceFallback: true,
    bubbleScroll: true,
  };
});
</script>
<style lang="sass" scoped>
.draggable
  cursor: move

.ghost
  opacity: 0

.drag
  background: #f5f5f5
  box-shadow: 0 0 3px rgba(0,0,0,0.3)
  border-radius: 5px
</style>