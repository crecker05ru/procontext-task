<template>
  <div class="main">
    <the-header />
    <body-layout>
      <color-lists/>
    </body-layout>
    <the-footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";
import BodyLayout from "./layouts/BodyLayout.vue";
import TheFooter from "./components/TheFooter.vue";
import ColorLists from "./components/ColorLists.vue";
export default defineComponent({
  name: "App",
  components: {
    TheHeader,
    BodyLayout,
    TheFooter,
    ColorLists
  },
  setup() {},
});
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
}
</style>
