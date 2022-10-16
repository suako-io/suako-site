<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/nav/Navbar.vue";

export default defineComponent({
  name: "App",
  components: { Navbar },
});
</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-fade-transition>
        <router-view />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
