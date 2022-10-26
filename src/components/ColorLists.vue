<template>
  <div class="left-side">
    <the-select-list @selectAll="handleSelectAll" :lists="lists" />
  </div>
  <div class="right-side">
    <draw-lists :renderList="lists" />
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import DrawLists from "./DrawLists.vue";
import TheSelectList from "./TheSelectList.vue";

export default defineComponent({
  name: "ColorLists",
  components: {
    TheSelectList,
    DrawLists,
  },
  setup() {
    const lists = reactive([
      {
        isSelected: false,
        items: [
          {
            size: 7,
            color: "#00f05c",
            isSelected: false,
          },
          {
            size: 10,
            color: "#192fd7",
            isSelected: false,
          },
          {
            size: 15,
            color: "#fcba03",
            isSelected: false,
          },
          {
            size: 30,
            color: "#b700ff",
            isSelected: false,
          },
        ],
      },
      {
        isSelected: false,
        items: [
          {
            size: 7,
            color: "#00f05c",
            isSelected: false,
          },
          {
            size: 10,
            color: "#192fd7",
            isSelected: false,
          },
          {
            size: 15,
            color: "#fcba03",
            isSelected: false,
          },
          {
            size: 30,
            color: "#b700ff",
            isSelected: false,
          },
        ],
      },{
        isSelected: false,
        items: [
          {
            size: 7,
            color: "#00f05c",
            isSelected: false,
          },
          {
            size: 10,
            color: "#192fd7",
            isSelected: false,
          },
          {
            size: 15,
            color: "#fcba03",
            isSelected: false,
          },
          {
            size: 30,
            color: "#b700ff",
            isSelected: false,
          },
        ],
      },{
        isSelected: false,
        items: [
          {
            size: 7,
            color: "#00f05c",
            isSelected: false,
          },
          {
            size: 10,
            color: "#192fd7",
            isSelected: false,
          },
          {
            size: 15,
            color: "#fcba03",
            isSelected: false,
          },
          {
            size: 30,
            color: "#b700ff",
            isSelected: false,
          },
        ],
      },{
        isSelected: false,
        items: [
          {
            size: 7,
            color: "#00f05c",
            isSelected: false,
          },
          {
            size: 10,
            color: "#192fd7",
            isSelected: false,
          },
          {
            size: 15,
            color: "#fcba03",
            isSelected: false,
          },
          {
            size: 30,
            color: "#b700ff",
            isSelected: false,
          },
        ],
      },
    ]);
    // const list1 = reactive([
    //   {
    //     size: 10,
    //     color: "#fdddee",
    //     isSelected: false,
    //   },
    //   {
    //     size: 16,
    //     color: "#f00dee",
    //     isSelected: false,
    //   },
    //   {
    //     size: 40,
    //     color: "#f00dвe",
    //     isSelected: false,
    //   },
    //   {
    //     size: 0,
    //     color: "#fа0dee",
    //     isSelected: false,
    //   },
    // ]);
      const handleSelectAll = (val) => {
        console.log(val)
      }
    return {
      lists,
      handleSelectAll
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
