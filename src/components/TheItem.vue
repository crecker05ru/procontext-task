<template>
  <div class="item">
    <div>
      <input
        class="item__checkbox"
        type="checkbox"
        :id="String(listIndex)+String(itemIndex)"
        v-model="isSelected"
        @input="$emit('update:isSelected', $event.target.checked)"
      />
      <label :for="String(listIndex)+String(itemIndex)" class="item__label" 
        >Item {{ itemIndex + 1 }}</label
      >
    </div>
    <div>
      <input
        class="item__number"
        type="number"
        v-model="size"
        @input="$emit('update:size', size)"
      />
      <input
        class="item__color"
        type="color"
        v-model="color"
        @change="$emit('update:color', color)"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref, watch } from "vue";

export default defineComponent({
  name: "TheItem",
  props: ["item", "itemIndex", "modelValue","listIndex"],
  emits: ["update:modelValue","update:isSelected"],
  setup(props, ctx) {
    const color = ref(props.item.color);
    const size = ref(props.item.size);
    const isSelected = ref(props.item.isSelected);
    const itemData = reactive({
      size,
      color,
      isSelected,
    });

    function changeItemColor(color) {
      ctx.emit("update:modelValue", color);
    }
    watch(
      () => props.item.isSelected,
      (newVal, oldVal) => {
        console.log('Item newVal, oldVal',newVal, oldVal)
        isSelected.value = newVal;
      }
    );

    return {
      itemData,
      color,
      size,
      isSelected,
    };
  },
});
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-around;
  &__number {
    width: 30px;
    padding: 2px;
    text-align: center;
  }

  &__checkbox {
    width: auto;
    min-width: 0;
  }
  &__label {
    margin-right: 10px;
  }
  &__color {
    width: auto;
    height: 25px;
    padding: 0;
  }
}
</style>