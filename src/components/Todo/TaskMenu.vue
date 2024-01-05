<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          color="primary"
          icon="mdi-dots-vertical"
          variant="text"
        ></v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="item.click()">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>  
    <dialog-delete
      v-if="showDialog.delete"
      @close="showDialog.delete = false"
    />
    <dialog-edit
      v-if="showDialog.edit"
      @close="showDialog.edit = false"
    />
    <dialog-due-date
      v-if="showDialog.dueDate"
      @close="showDialog.dueDate = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DialogDelete from './Dialogs/DialogDelete.vue'
import DialogEdit from './Dialogs/DialogEdit.vue'
import DialogDueDate from "./Dialogs/DialogDueDate.vue";
import { useTasksStore } from "../../store/TasksStore.js";

const tasksStore = useTasksStore()

const showDialog = ref({
  delete: false,
  edit: false,
  dueDate: false
})

const items = [
        { title: 'Edit',
          icon: 'mdi-pencil', 
          click(){
            showDialog.value.edit = true
          }
        },
        { title: 'Due date' ,
          icon: 'mdi-calendar',
          click(){
            showDialog.value.dueDate = true
          }
        },
        { title: 'Reorder' ,
          icon: 'mdi-arrow-split-horizontal',
          click(){
            tasksStore.draggable = !tasksStore.draggable
          }
        },
        { title: 'Delete',
          icon: 'mdi-delete',
          click(){
            showDialog.value.delete = true
          } 
        },
      ]
</script>