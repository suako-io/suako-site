<script lang="ts" setup>
import type { Ref } from "vue";
import { ref } from "vue";
import suako_calc_preview from "../../assets/project_previews/suako_calc.png";
import suako_download_preview from "../../assets/project_previews/suako_download.png";
import suako_site_preview from "../../assets/project_previews/suako_site.png";

interface Project {
  name: string;
  path: string;
  github?: string;
  img: string;
  title: string;
  sub_title: string;
  desc: string;
}

const projects: Ref<Project[]> = ref([
  {
    name: "suako-site",
    path: "",
    github: "https://github.com/NotSuako/suako-site",
    title: "Project Portfolio Site",
    img: suako_site_preview,
    sub_title: "Built with Vue, Vite, Typescript and Vuetify 3.0 Beta.",
    desc: "Sleek and simple portfolio website to show off my work as it progresses. Will be updated over time as I add more functionality.",
  },
  {
    name: "suako-download",
    path: "/suako-download",
    github: "https://github.com/NotSuako/suako-download",
    title: "Download Time Calculator",
    img: suako_download_preview,
    sub_title: "Built with Vue, Vite, Typescript and Vuetify 3.0 Beta.",
    desc: "Calculates download times with given input. Can work with different units of file size / download speed. Will give a proper human readable output.",
  },
  {
    name: "suako-calc",
    path: "",
    github: "https://github.com/NotSuako/suako-calc",
    img: suako_calc_preview,
    title: "Calculator",
    sub_title: "Built with Vue, Vite, Typescript, Tailwind CSS and math.js",
    desc: "A scientific calculator that has the ability to do trigonometric calculations as well as calculate with exponents and even factorials.",
  },
]);
</script>

<script lang="ts">
export default {
  name: "ProjectVue",
};
</script>

<template>
  <v-row v-for="project in projects" justify="center">
    <v-col sm="12" md="10" lg="6">
      <v-card rounded>
        <v-img :src="project.img" height="400px" cover />
        <v-card-title>{{ project.title }}</v-card-title>
        <v-card-subtitle>{{ project.sub_title }}</v-card-subtitle>
        <v-card-text>{{ project.desc }}</v-card-text>
        <v-card-actions>
          <v-btn
            v-show="project.path"
            :to="project.path"
            prepend-icon="mdi:mdi-open-in-new"
            variant="tonal"
            >Open</v-btn
          >
          <v-btn
            v-show="project.github"
            :href="project.github"
            prepend-icon="mdi:mdi-github"
            variant="tonal"
            >Github</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style></style>
