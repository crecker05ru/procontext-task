<template>
  <div class="select-lists" v-for="(list, listIndex) in lists" :key="listIndex">
    <div
      :class="{
        'select-lists__arrow-open': true,
        'arrow-close': isVisibleList[listIndex],
      }"
      @click="handleOpenList(listIndex)"
    ></div>

    <input
      :class="{ 'select-lists__list-checkbox': true, partially: list.addStyle }"
      ref="input"
      :id="listIndex"
      type="checkbox"
      v-bind="list.isSelected"
      :checked="list.isSelected"
      @change="handleChange({ listIndex, checked: $event.target.checked })"
    />
    <label :for="listIndex" class="select-lists__label"
      >List {{ listIndex + 1 }}</label
    >
    <ul class="select-lists__list" v-show="isVisibleList[listIndex]">
      <li v-for="(item, itemIndex) in list.items" :key="itemIndex">
        <the-item
          :item="item"
          :itemIndex="itemIndex"
          :listIndex="listIndex"
          v-model:color="item.color"
          v-model:size="item.size"
          v-model:isSelected="item.isSelected"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { defineComponent, ref, watch } from "vue";
import TheItem from "./TheItem.vue";

export default defineComponent({
  components: { TheItem },
  name: "TheSelectList",
  props: ["lists"],
  emits: ["selectAll"],
  setup(props, ctx) {
    const input = ref();
    const isVisibleList = ref([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);

    const handleOpenList = (indx) => {
      isVisibleList.value[indx] = !isVisibleList.value[indx];
    };

    const handleChange = (params) => {
      ctx.emit("selectAll", params);
      if (props.lists[params.listIndex].isSelected === false) {
        props.lists[params.listIndex].isSelected = params.checked;
        props.lists[params.listIndex].items.forEach((item) => {
          item.isSelected = true;
        });
      } else if (props.lists[params.listIndex].isSelected === true) {
        props.lists[params.listIndex].isSelected = params.checked;
        props.lists[params.listIndex].items.forEach((item) => {
          item.isSelected = false;
        });
      }
    };

    watch(
      () => props.lists,
      (newVal, oldVal) => {
        console.log('List newVal, oldVal',newVal, oldVal)
        props.lists.forEach((list) => {
          if (list.items.some((item) => item.isSelected === true)) {
            list.addStyle = true;
          }
          if (list.items.every((item) => item.isSelected === false)) {
            list.addStyle = false;
          }
          if (list.items.every((item) => item.isSelected === true)) {
            list.addStyle = false;
            list.isSelected = true;
          } else if (list.items.some((item) => item.isSelected === false)) {
            list.isSelected = false;
          }
        });
      },
      { deep: true }
    );
    return {
      input,
      isVisibleList,
      handleOpenList,
      handleChange,
    };
  },
});
</script>
<style lang="scss" scoped>
.select-lists {
  padding: 10px;
  position: relative;
  &__list-checkbox {
    position: relative;
    min-width: 0;
    padding: 0;
    padding-left: 30px;
    margin-left: 20px;
    transition: all ease-in 0.2s;
  }

  &__arrow-open {
    position: absolute;
    width: 10px;
    height: 10px;
    left: 10px;
    top: 15px;
    padding: 5px;
    border-bottom: 2px solid #000;
    border-right: 2px solid #000;
    transform: rotate(-45deg);
    cursor: pointer;
    transition: all ease-in 0.2s;
  }
}

.arrow-close {
  transform: rotate(45deg);
}
.partially {
  &::after {
    position: absolute;
    content: "";
    left: 3px;
    top: 3px;
    width: 6px;
    height: 6px;
    background-color: rgb(0, 153, 153);
  }
}
</style>
