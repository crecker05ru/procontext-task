<template>
  <div class="select-list">
    <ul
      class="select-list__list"
      v-for="(list, listIndex) in lists"
      :key="listIndex"
    >
      <label :for="list">{{ listIndex }}</label>
      <input :id="list" type="checkbox" v-model="list.isSelected" />
      <li v-for="(item, itemIndex) in list.items" :key="itemIndex">
        <the-item
          :item="item"
          :itemIndex="itemIndex"
          v-model:color="item.color"
          v-model:size="item.size"
          v-model:isSelected="item.isSelected"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
import TheItem from "./TheItem.vue";

export default defineComponent({
  components: { TheItem },
  name: "TheSelectList",
  // props: ["selectLists", "selectedItems"],
  setup(props, ctx) {
    const checkedItems = ref([]);

    const lists = reactive({
      list1: {
        isSelected: false,
        items: [
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
      },
      list2: {
        isSelected: false,
        items: [
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
      },
      list3: [],
    });

    return {
      checkedItems,
      lists,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
