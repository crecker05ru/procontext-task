<template>
  <div class="select-list">
    <ul
      class="select-list__list"
      v-for="(list, listIndex) in lists"
      :key="listIndex"
    >
      <label :for="listIndex">List {{ listIndex + 1}} checked = {{list.isSelected}}</label>
      <input :class="{'select-list__list-checkbox': true, 'partially': list.addStyle }"  ref="input" :id="listIndex" type="checkbox" v-bind="list.isSelected" :checked="list.isSelected" @change="handleChange({listIndex, checked: $event.target.checked})" />
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

import { computed, defineComponent, ref, watch } from "vue";
import TheItem from "./TheItem.vue";

export default defineComponent({
  components: { TheItem },
  name: "TheSelectList",
  props: ["lists"],
  emits: ['selectAll'],
  setup(props, ctx) {
    const input = ref()
    const checkedItems = ref([]);
    const checkedLists = computed(() => {
      lists
    })
    const isListChecked = computed(() => {
      return props.lists.filter(list => list.isSelected === true
      ? list.items.forEach((item) => item.isSelected = true )
      : list
      )
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
      if(props.lists[params.listIndex].isSelected === false){
        props.lists[params.listIndex].isSelected = params.checked
      props.lists[params.listIndex].items.forEach(item => {
        item.isSelected = true
      })
      } else if (props.lists[params.listIndex].isSelected === true){
        props.lists[params.listIndex].isSelected = params.checked
      props.lists[params.listIndex].items.forEach(item => {
        item.isSelected = false
      })
      }

    }

    // watch(() => props.lists,() => {
      
    //   props.lists.forEach(list => {
    //     if(list.isSelected === true){
    //       list.items.forEach(item => {
    //         item.isSelected = true
    //       })
    //     } 
    //     // else if(list.isSelected === false){
    //     //   list.items.forEach(item => {
    //     //     item.isSelected = false
    //     //   })
    //     // }
    //   })
    //   console.log('props.lists',props.lists)
    //   console.log('isListChecked',isListChecked)
    // },
    // { deep: true })

    watch(() => props.lists, (newVal, oldVal) => {
      console.log('(newVal, oldVal)',newVal, " /n" ,oldVal)
      console.log('input',input.value)
      props.lists.forEach(list => {
        if (list.items.some(item => item.isSelected === true)){
        list.addStyle = true
      }
      if (list.items.every(item => item.isSelected === false)){
        list.addStyle = false
      }
        if(list.items.every(item => item.isSelected === true)){
          list.addStyle = false
        list.isSelected = true
      }  else if (list.items.some(item => item.isSelected === false)) {
        list.isSelected = false
        // list.addStyle = false
      }

      })
    },{deep: true})
    return {
      input,
      checkedItems,
      handleChange
    };
  },
});
</script>
<style lang="scss" scoped>
.select-list {
  &__list-checkbox {
    position: relative;
    min-width: 0;
    padding: 0;
    transition: all ease-in .2s;
  }
}
.partially {
  &::after {
    position: absolute;
    content: '';
  left: 3px;
  top: 2px;
  width: 6px;
  height: 7px;
  background-color: rgb(0, 153, 153);
  // border-radius: 50%;
  }
}
</style>
