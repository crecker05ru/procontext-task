<template>
  <footer class="the-footer">
    <section class="the-footer__section">
      <div>Developed by Anvar</div>
    </section>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheFooter",
  components: {},
  setup() {},
});
</script>
<style lang="scss">
.the-footer {
  min-height: 80px;
  &__section {
    margin: 0 auto;
    text-align: center;
    padding-top: 30px;
  }
}
</style>
