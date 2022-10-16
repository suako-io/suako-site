<script lang="ts">
export default {
  name: "Navbar",
};
</script>

<template>
  <v-app-bar :elevation="1" collapse>
    <template v-slot:prepend>
      <v-btn variant="plain" icon="mdi:mdi-home" to="/" :ripple="false" />
    </template>

    <v-app-bar-title>Suako</v-app-bar-title>
    <!-- <template v-slot:append>
      <v-btn variant="text" to="/"> Home </v-btn>
      <v-btn variant="text" to="/projects"> Projects </v-btn>
      <v-btn variant="text" to="/contact"> Contact </v-btn>
    </template> -->

    <template v-slot:append>
      <v-btn
        variant="plain"
        icon="mdi:mdi-github"
        href="https://github.com/NotSuako"
      />
    </template>
  </v-app-bar>
</template>

<style></style>
