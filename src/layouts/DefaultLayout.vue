<template>
  <main class="body wrapper">
    <slot></slot>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultLayout",
  setup() {},
});
</script>
<style lang="scss">
.body {
  flex: 1 1 calc(100vh - 160px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 100px;
}
.wrapper {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
