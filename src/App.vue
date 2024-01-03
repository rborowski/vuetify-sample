<template>
  <v-app id="inspire">
    <v-navigation-drawer :width="231" v-model="drawer">
      <v-list-item title="Vuetify Todo App" subtitle="Best Todo Ever"></v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item :to="{ name: 'Todo' }" prepend-icon="mdi-format-list-checks" title="Todo"></v-list-item>
        <v-list-item :to="{ name: 'About' }" prepend-icon="mdi-help-box" title="About"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="teal-darken-4"
      density="prominent"
      image="/mountains.jpg"
    >
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>
      
      <v-container class="d-flex flex-column h-100">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search/>
        </v-row>
        <v-row class="mt-3 align-center">
          <v-app-bar-title class="ml-4">{{ $route.name }}</v-app-bar-title>
        </v-row>
      </v-container>

    </v-app-bar>

    <v-main>
      <router-view />
      <snackbar/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Snackbar from "./components/Shared/Snackbar.vue";
import Search from "./components/Tools/Search.vue";

const drawer = ref(null)
</script>
