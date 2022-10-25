<template>
  <div class="left-side">
    <the-select-list />
  </div>
  <div class="right-side">
    <draw-list :renderList="lists" />
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import DrawList from "./DrawList.vue";
import TheSelectList from "./TheSelectList.vue";

export default defineComponent({
  name: "ColorLists",
  components: {
    TheSelectList,
    DrawList,
  },
  setup() {
    const selectedItems = ref([]);
    const lists = reactive({
      list1: [
        {
          size: 10,
          color: "#fff000",
          isSelected: false,
        },
        {
          size: 16,
          color: "#f0f000",
          isSelected: false,
        },
      ],
      list2: [
        {
          size: 13,
          color: "#fff000",
          isSelected: false,
        },
        {
          size: 12,
          color: "#f0f000",
          isSelected: false,
        },
      ],
      list3: [selectedItems],
    });
    const list1 = reactive([
      {
        size: 10,
        color: "#fdddee",
        isSelected: false,
      },
      {
        size: 16,
        color: "#f00dee",
        isSelected: false,
      },
      {
        size: 40,
        color: "#f00dвe",
        isSelected: false,
      },
      {
        size: 0,
        color: "#fа0dee",
        isSelected: false,
      },
    ]);

    return {
      list1,
      lists,
    };
  },
});
</script>
<style lang="scss" scoped>
.left-side {
  border: 1px solid #000;
  width: 100%;
  max-width: 600px;
}
.right-side {
  border: 1px solid #000;
  width: 100%;
  max-width: 600px;
}
</style>
