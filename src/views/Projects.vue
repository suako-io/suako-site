<script lang="ts">
import ProjectList from "../components/projects/ProjectList.vue";
export default {
  name: "Projects",
  components: {
    ProjectList,
  },
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <p class="text-h2 font-weight-bold text-uppercase">Projects</p>
        <p class="text-subtitle-1 font-weight-medium font-italic">
          All of my past and present projects.
        </p>
      </v-col>
    </v-row>

    <ProjectList />
  </v-container>
</template>
