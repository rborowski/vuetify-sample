<template>
  <div class="todo">
    <v-text-field
      class="pa-3"
      label="Add task"
      append-inner-icon="mdi-plus"
      variant="outlined"
      hide-details
      clearable
      v-model="newTaskTitle"
      @click:append-inner="addTask"
      @keydown.enter.exact="addTask"
    />
    <div v-if="tasks.length === 0" class="text-primary no-tasks text-center">
      <v-icon
        icon="mdi-check"
        size="100"
      ></v-icon>  
      <h1>No tasks. Let's add some</h1> 
    </div>
    <v-list v-else  select-strategy="classic" class="px-0">
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          
          @click="doneTask(task.id)"
          :class="{'bg-blue-lighten-5' : task.done}"
        >
        <template v-slot:prepend>

          <v-list-item-action start>
            <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title
        :class="{'text-decoration-line-through text-disabled' : task.done}"
        >{{ task.title }}</v-list-item-title>

        <template v-slot:append>
          <v-btn
            @click.stop="deleteTask(task.id)"
            color="blue-lighten-1"
            icon="mdi-delete"
            variant="text"
            
          ></v-btn>
        </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
      
      
    </v-list>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newTaskTitle = ref('')
const tasks = ref([
  // {
  // id: "1a",
  // title: "Wake up",
  // done: false
  // }, 
  // {
  // id: "2a",
  // title: "Clean",
  // done: false
  // }
])

function doneTask(taskId) {
  let task = tasks.value.filter((task) => task.id === taskId)[0]
  task.done = !task.done
}

function deleteTask(taskId) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}

function addTask() {
  if (!newTaskTitle) return
  tasks.value.push({
    id: new Date().getTime(),
    title: newTaskTitle.value,
    done: false
  })
  newTaskTitle.value = ""
}

</script>


<style lang="sass">
  .no-tasks
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5


</style>