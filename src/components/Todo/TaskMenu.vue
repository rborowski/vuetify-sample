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
  </div>

</template>

<script setup>
import { ref } from "vue";
import DialogDelete from './Dialogs/DialogDelete.vue'

const showDialog = ref({
  delete: false
})

const items = [
        { title: 'Edit',
          icon: 'mdi-pencil', 
          click(){
            console.log("edit")
          }
        },
        { title: 'Due date' ,
          icon: 'mdi-calendar',
          click(){
            console.log("date")
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