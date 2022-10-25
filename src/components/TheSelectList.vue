<template>
  <div class="select-list">
    <ul
      class="select-list__list"
      v-for="(list, listIndex) in lists"
      :key="listIndex"
    >
      <label :for="listIndex">List {{ listIndex + 1}}</label>
      <input :id="listIndex" type="checkbox" v-model="list.isSelected" @change="handleChange({listIndex, checked: $event.target.checked})" />
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
import { computed, defineComponent, ref, reactive } from "vue";
import TheItem from "./TheItem.vue";

export default defineComponent({
  components: { TheItem },
  name: "TheSelectList",
  props: ["lists"],
  emits: ['selectAll'],
  setup(props, ctx) {
    const checkedItems = ref([]);
    const checkedLists = computed(() => {
      lists
    })

    // const lists = reactive([
    //   {
    //     isSelected: false,
    //     items: [
    //       {
    //         size: 10,
    //         color: "#00f05c",
    //         isSelected: false,
    //       },
    //       {
    //         size: 16,
    //         color: "#192fd7",
    //         isSelected: false,
    //       },
    //     ],
    //   },
    //  {
    //     isSelected: false,
    //     items: [
    //       {
    //         size: 13,
    //         color: "#fff000",
    //         isSelected: false,
    //       },
    //       {
    //         size: 12,
    //         color: "#f0f000",
    //         isSelected: false,
    //       },
    //     ],
    //   },
    // ]);

    const handleChange = (params) => {
      ctx.emit('selectAll', params)
    }

    return {
      checkedItems,
      handleChange
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
