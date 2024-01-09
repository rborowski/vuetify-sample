<template>
  <v-slide-x-reverse-transition>
      <v-text-field
      autofocus
      v-click-outside="onClickOutside"
      v-model="tasksStore.searchInput"
      class="ma-2"
      density="compact"
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      clearable
      hide-details
      single-line
      v-if="showSearch"
    >
    </v-text-field>
  </v-slide-x-reverse-transition>
    <v-btn v-if="!showSearch" icon :disabled="tasksStore.draggable">
      <v-icon
        @click="enableSearch"
        >
        mdi-magnify
      </v-icon>
    </v-btn>
</template>

<script setup>
import {ref} from 'vue'
import { useTasksStore } from "../../store/TasksStore";

const tasksStore = useTasksStore()

const showSearch = ref(false)

function enableSearch() {
  showSearch.value = true
  tasksStore.draggable = false
}

function onClickOutside() {
  if (tasksStore.searchInput) return
  showSearch.value = false
}
</script>

