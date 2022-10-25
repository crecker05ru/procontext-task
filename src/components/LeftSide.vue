<template>
  <div class="left-side">
    <the-select-list/>
  </div>
</template>
<script>
import { defineComponent,ref } from "vue";
import TheSelectList from "./TheSelectList.vue"

export default defineComponent({
  components: {TheSelectList},
  name: "LeftSide",
  setup(props, ctx) {
    // const checkedItems = ref([])

    return {
      // checkedItems
    }
  },
});
</script>
<style lang="scss" scoped>
.left-side {
  border: 1px solid #000;
  width: 100%;
  max-width: 600px;
}
</style>
