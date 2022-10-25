<template>
      <left-side @itemHandler="() => {}"/>
      <right-side :renderList="list1"/>
</template>
<script>
import { defineComponent,reactive,ref } from 'vue'
import LeftSide from "./LeftSide.vue";
import RightSide from "./Rightside.vue";

export default defineComponent({
  name: "ColorLists",
  components: {
    LeftSide,
    RightSide
  },
  setup() {
    const list1 = reactive([
      {
        size: 10,
        color: "#fdddee"
      },      {
        size: 16,
        color: "#f00dee"
      },
       {
        size: 40,
        color: "#f00dвe"
      },{
        size: 0,
        color: "#fа0dee"
      },
    ])
    const selectedItems = ref([])
    return {
      list1
    }
  },
})
</script>
