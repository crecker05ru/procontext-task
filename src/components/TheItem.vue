<template>
  <div class="item">
    <label :for="itemIndex">Item {{ itemIndex + 1 }}</label>
    <input
      type="checkbox"
      :id="itemIndex"
      v-model="isSelected"
      @input="$emit('update:isSelected', $event.target.checked)"
    />
    <input type="number" v-model="size" @input="$emit('update:size', size)" />
    <input type="color" v-model="color" @input="$emit('update:color', color)" />
    <div class="item-cell">Color {{ item.color }}</div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "TheItem",
  props: ["item", "itemIndex", "modelValue"],
  emits: ["update:modelValue"],
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
      ctx.emit("update:modelValue", color); // раньше было `this.$emit('input', title)`
    }
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
</style>