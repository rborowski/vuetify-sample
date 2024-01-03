<template>
  <div class="todo">
    <add-task-field />
    <no-tasks v-if="tasksStore.tasks.length === 0" />
    <no-tasks v-else-if="tasksStore.getTasks.length === 0" :emptyList="false"/>
    <task-list v-else />
  </div>
</template>

<script setup>
import { useTasksStore } from "../store/TasksStore";
import AddTaskField from "../components/Todo/AddTaskField.vue";
import TaskList from "../components/Todo/TaskList.vue";
import NoTasks from "../components/Todo/NoTasks.vue";

const tasksStore = useTasksStore()
</script>