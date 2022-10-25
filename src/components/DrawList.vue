<template>
  <div>
    <ul
      class="draw-list"
      v-for="(list, listIndex) in renderList"
      :key="listIndex"
    >
      List
      {{
        listIndex
      }}
      <li
        class="draw-list__item"
        v-for="(item, itemIndex) in list"
        :key="itemIndex"
      >
        <div>Item {{ itemIndex + 1 }}</div>
        <div class="draw-list__item-colors">
          <the-cell
            v-for="number in item.size"
            :key="number"
            :color="item.color"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import TheCell from "./TheCell.vue";

export default defineComponent({
  components: { TheCell },
  name: "DrawList",
  props: ["renderList"],
  setup() {},
});
</script>
<style lang="scss" scoped>
.draw-list {
  border: 1px solid #000;

  &__item-colors {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
}
</style>

