<template>
  <div class="cell" :style="{ 'background-color': color }">Cell</div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["color"],
  setup() {},
});
</script>
<style lang="scss" scoped>
.cell {
  width: 16px;
  height: 16px;
}
</style>
