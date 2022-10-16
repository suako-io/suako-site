<script lang="ts" setup>
import type { Ref } from "vue";
import { ref } from "vue";

interface linkItem {
  text: string;
  icon: string;
  link: string;
}

const links: Ref<linkItem[]> = ref([
  {
    text: "GitHub",
    icon: "mdi:mdi-github",
    link: "https://github.com/NotSuako",
  },
  {
    text: "Twitter",
    icon: "mdi:mdi-twitter",
    link: "https://twitter.com/NotSuako",
  },
  {
    text: "YouTube",
    icon: "mdi:mdi-youtube",
    link: "https://www.youtube.com/channel/UChXhVUrdu4ySRFN_tSb5ZQA",
  },
  {
    text: "Twitch",
    icon: "mdi:mdi-twitch",
    link: "https://www.twitch.tv/suako",
  },
  {
    text: "Discord",
    icon: "mdi:mdi-discord",
    link: "https://discord.gg/ZQqDgx54Cc",
  },
]);
</script>

<script lang="ts">
export default {
  name: "SocialLinks",
};
</script>

<template>
  <v-row justify="center">
    <v-col v-for="link in links" md="4" lg="2">
      <v-btn
        block
        variant="plain"
        :prepend-icon="link.icon"
        :href="link.link"
        >{{ link.text }}</v-btn
      >
    </v-col>
  </v-row>
</template>

<style></style>
