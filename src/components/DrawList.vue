<template>
  <div class="draw-list">
    List
    {{ listIndex + 1 }}
    <button @click="handleSorting" class="draw-list__button">
      {{ isShufle ? "Сортировать" : "Перемешать" }}
    </button>
    <ul>
      <li
        class="draw-list__item"
        v-if="!isShufle"
        v-for="(item, itemIndex) in list.items"
        :key="itemIndex"
      >
        <div class="draw-list__item-colors">
          <the-cell
            v-for="number in item.size"
            :key="number"
            :color="item.color"
          />
        </div>
      </li>
      <li v-else>
        <div class="draw-list__item-colors">
          <the-cell
            v-for="(color, colorIndex) in shufleList"
            :key="colorIndex"
            :color="color"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import TheCell from "./TheCell.vue";

export default defineComponent({
  components: { TheCell },
  name: "DrawList",
  props: ["list", "listIndex"],
  setup(props, ctx) {
    const isShufle = ref(false);

    const selectedItems = computed(() => {
      let filteredItems = props.list.items.filter(
        (item) => item.isSelected === true
      );

      return filteredItems;
    });

    const handleSorting = () => {
      isShufle.value = !isShufle.value;
    };

    const shufleList = computed(() => {
      const shufleArr = [];
      selectedItems.value.forEach((item) => {
        for (let i = 1; i <= item.size; i++) {
          shufleArr.push(item.color);
        }
      });

      return isShufle.value
        ? shufleArr.sort(() => Math.random() - 0.5)
        : selectedItems;
    });
    return {
      isShufle,
      shufleList,
      selectedItems,
      handleSorting,
    };
  },
});
</script>
<style lang="scss" scoped>
.draw-list {
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

