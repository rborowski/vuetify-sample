<template>
  <v-app id="inspire">
    <v-navigation-drawer mobile-breakpoint="sm" v-model="drawer">
      <v-img
      class="pa-4"
      gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      cover
      height="150"
      src="/mountains.jpg"
      >
      <v-avatar
        alt="avatar"
        image="/sample_avatar.jpg"
        size="64"
      ></v-avatar>
      <v-list-item
        class="text-white pl-1 mt-2"
        title="User Name"
        subtitle="@username"
      ></v-list-item>
      </v-img>
      
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
      :height="$route.path === '/' ? '110' : '75' "
    >
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>
      
      <v-container class="d-flex flex-column h-100 max-width-none">
        <v-row class="height20px">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search/>
        </v-row>
        <v-row >
          <v-app-bar-title class="ml-4 text-h4">{{ $route.name }}</v-app-bar-title>
        </v-row>
        <v-row class="height20px">
          <live-date-time/>
        </v-row>
        <v-row class="height90px">
          <v-fade-transition hide-on-leave>
            <add-task-field v-if="$route.path == '/'" />
          </v-fade-transition>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-container class="d-flex pa-0 main-container">
      <v-main>
        <router-view />
        <snackbar/>
      </v-main>
    </v-container>
  </v-app>
</template>

<style lang="sass" scoped>
.height20px 
  height: 20px
.height60px 
  height: 60px

.max-width-none 
  max-width: none
.main-container 
  max-width: 1600px
  position: relative
</style>

<script setup>
import { ref } from 'vue'
import Snackbar from "./components/Shared/Snackbar.vue";
import Search from "./components/Tools/Search.vue";
import LiveDateTime from "./components/Tools/LiveDateTime.vue";
import AddTaskField from "./components/Todo/AddTaskField.vue";

const drawer = ref(null)
</script>
