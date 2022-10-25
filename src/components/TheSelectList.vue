<template>
  <div class="select-list">
    <ul class="select-list__list">
      <label for="list1">List 1</label>
      <input id="list1" type="checkbox" />

        <the-item />

    </ul>
  </div>
</template>
<script>
import { defineComponent,ref } from "vue";
import TheItem from "./TheItem.vue";

export default defineComponent({
  components: { TheItem },
  name: "TheSelectList",
  setup(props, ctx) {
    const checkedItems = ref([])

    return {
      checkedItems
    }
  },
});
</script>
<style lang="scss" scoped>

</style>
