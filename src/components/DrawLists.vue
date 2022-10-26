<template>
  <div class="draw-lists">
    <draw-list
      v-for="(list, listIndex) in selectedItems"
      :key="listIndex"
      :list="list"
      :listIndex="listIndex"
    />
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import DrawList from "./DrawList.vue";
import TheCell from "./TheCell.vue";

export default defineComponent({
  components: { TheCell, DrawList },
  name: "DrawLists",
  props: ["renderList"],
  setup(props, ctx) {
    const checkedLists = computed(() => {
      let newLists = props.renderList.filter(
        (list) => list.isSelected === true
      );
      console.log("newLists", newLists);

      return newLists;
    });

    const selectedItems = computed(() => {
      // let copObj = JSON.parse(JSON.stringify(props.renderList))

      let filteredItems = props.renderList.map((list) => ({
        ...list,
        items: list.items.filter((item) => item.isSelected === true),
      }));
      // let  newLists = props.renderList.filter( list => list.items = filteredItems)
      console.log("filteredItems", filteredItems);
      // console.log('newLists',newLists)

      return filteredItems;
    });

    return {
      checkedLists,
      selectedItems,
    };
  },
});
</script>
<style lang="scss" scoped>
.draw-lists {
  border: 1px solid #000;
  position: relative;
  min-height: 40px;
  padding: 10px;

  &__item {
    margin-bottom: 5px;
  }

  &__item-colors {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  &__button {
    position: absolute;
    background-color: rgb(0, 106, 255);
    height: 20px;
    font-size: 14px;
    line-height: 10px;
    right: 0;
    top: 0;
  }
}
</style>

