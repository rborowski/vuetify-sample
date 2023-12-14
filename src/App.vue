<template>
  <v-app id="inspire">
    <v-navigation-drawer :width="231" v-model="drawer">
      <v-list-item title="Vuetify Todo App" subtitle="Best Todo Ever"></v-list-item>
      <v-divider></v-divider>
      <v-list-item :to="{ name: 'Home' }" title="Todo"></v-list-item>
      <v-list-item :to="{ name: 'About' }" title="About"></v-list-item>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>{{ $route.name }}</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>
