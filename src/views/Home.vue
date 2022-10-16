<script lang="ts">
import { defineComponent } from "vue";
import ProjectList from "../components/projects/ProjectList.vue";
import SocialLinks from "../components/SocialLinks.vue";

export default defineComponent({
  name: "Home",
  components: {
    ProjectList,
    SocialLinks,
  },
});
</script>

<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col sm="12" md="10" lg="6">
        <p class="text-h2 font-weight-bold">Hello I'm Suako</p>
        <p class="text-subtitle-1 font-weight-medium">
          Welcome to my project site!
        </p>
        <p class="mt-12 text-body-1">
          I'm a passionate frontend software engineer, constantly in search for
          new ways to develop, expand and consolidate my skillset when
          developing webapps. I also occasionally work on other projects such as
          videos or photography. As this site expands more will be put on
          display here.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-12">
      <v-col sm="12" md="10" lg="6">
        <v-divider />
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-12">
      <v-col sm="12" md="10" lg="6">
        <p class="text-h2 font-weight-bold text-uppercase">Projects</p>
        <p class="text-subtitle-1 font-weight-medium font-italic">
          All of my past and present projects.
        </p>
      </v-col>
    </v-row>

    <ProjectList />

    <v-row justify="center" class="mt-12">
      <v-col sm="12" md="10" lg="6">
        <v-divider />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col sm="12" md="10" lg="6">
        <SocialLinks />
      </v-col>
    </v-row>
  </v-container>
</template>
