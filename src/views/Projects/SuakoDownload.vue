<script lang="ts">
import DownloadCalc from "../../components/suako-download/DownloadCalc.vue";
export default {
  name: "SuakoDownload",
  components: { DownloadCalc },
};
</script>

<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-col cols="12" align-self="center">
        <DownloadCalc />
      </v-col>
    </v-row>
  </v-container>
</template>
