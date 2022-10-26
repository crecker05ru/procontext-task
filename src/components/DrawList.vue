<template>
  <div>
    <ul
      class="draw-list"
      v-for="(list, listIndex) in selectedItems"
      :key="listIndex"
    >
      List
      {{
        listIndex + 1
      }}
      <li
        class="draw-list__item"
        v-for="(item, itemIndex) in list.items"
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
import { computed, defineComponent } from "vue";
import TheCell from "./TheCell.vue";

export default defineComponent({
  components: { TheCell },
  name: "DrawList",
  props: ["renderList"],
  setup(props, ctx) {
    const checkedLists = computed(() => {
      let newLists = props.renderList.filter( list => list.isSelected === true)
      console.log('newLists',newLists)
      
      return newLists
    })

    const selectedItems = computed(() => {
      // let copObj = JSON.parse(JSON.stringify(props.renderList))

      let filteredItems = props.renderList.map( list => ({...list, items: list.items.filter(item => item.isSelected === true)}))
      // let  newLists = props.renderList.filter( list => list.items = filteredItems)
      console.log('filteredItems',filteredItems)
      // console.log('newLists',newLists)

      return filteredItems
    })

    return {
      checkedLists,
      selectedItems
    }
  },
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

