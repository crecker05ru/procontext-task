<template>
  <div class="main">
    <the-header />
    <default-layout>
      <color-lists />
    </default-layout>
    <the-footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheHeader from "./components/TheHeader.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import TheFooter from "./components/TheFooter.vue";
import ColorLists from "./components/ColorLists.vue";
export default defineComponent({
  name: "App",
  components: {
    TheHeader,
    DefaultLayout,
    TheFooter,
    ColorLists,
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
