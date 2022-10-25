<template>
  <div class="right-side">
    <ul class="right-side__list" v-for="item in renderList" :key="item.color">
      <div>{{item.color}}</div>
      <li class="right-side__list-item">Item 1</li>

    </ul>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "RightSide",
  props: ["renderList"],
  setup() {
    
  },
})
</script>
<style lang="scss" scoped>
.right-side {
  border: 1px solid #000;
  width: 100%;
  max-width: 600px;
}
</style>
