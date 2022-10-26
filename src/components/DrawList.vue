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
      <button @click="handleSorting" class="draw-list__button">{{isShufle? 'Сортировать' : 'Перемешать'}}</button>
      <li
        class="draw-list__item"
        v-for="(item, itemIndex) in list.items"
        :key="itemIndex"
      >

        <div class="draw-list__item-colors" v-if="!isShufle">
          <the-cell
            v-for="number in item.size"
            :key="number"
            :color="item.color"
          />
        </div>
        <div class="draw-list__item-colors" v-else>
          <the-cell
            v-for="color in shufleList"
            :key="color"
            :color="color"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { computed, defineComponent,ref } from "vue";
import TheCell from "./TheCell.vue";

export default defineComponent({
  components: { TheCell },
  name: "DrawList",
  props: ["renderList"],
  setup(props, ctx) {
    const isShufle = ref(false)
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

    const handleSorting = () => {
      isShufle.value = !isShufle.value
    }

    const shufleList = computed(() => {
      const shufleArr = []
      // props.renderList.forEach(lists => {
      //   // lists.forEach(item => {
      //   //   shufleArr.push(lists)
      //   // })
      //   let {items} = lists
      //   shufleArr.push(items)
      // });

      // props.renderList.map( list => {
      //   list.map(item => {
      //     console.log('item',item)
      //   })
      // })
      selectedItems.value.forEach(lists => {
        lists.items.forEach( item => {
          for(let i = 0; i <= item.size; i++){
            shufleArr.push(item.color)
          }
          
        })
      })
      console.log('shufleArr',shufleArr)

      return isShufle.value ? shufleArr.sort( () => Math.random() - 0.5)
      : selectedItems
    })
    return {
      checkedLists,
      selectedItems,
      isShufle,
      shufleList,
      handleSorting
    }
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

