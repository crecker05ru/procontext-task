<template>
  <div class="item">
    <label for="item1">{{}}</label>
    <input type="checkbox" id="item1" value="item1"/>
    <input type="number" v-model="size"/>
    <input type="color" v-model="color"/>
    <div class="item-cell">Color</div>
  </div>
</template>
<script>
import { defineComponent,reactive,ref } from 'vue'

export default defineComponent({
  
  setup(props, ctx) {
    const color = ref("#ff00ee")
    const size = ref(5)
    const item = reactive({
      size,
      color
    })
  },
})
</script>
<style lang="scss" scoped>

</style>