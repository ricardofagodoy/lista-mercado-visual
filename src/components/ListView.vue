<template>
  <b-list-group class="list-view">
    
    <ItemCompact
      class="item"
      @click.native="$router.push(`item/${product.id}`)"
      v-for="product in $store.state.products"
      v-bind:key="product.id"
      v-bind:product="product"
    />
  </b-list-group>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemCompact from "@/components/ItemCompact.vue";

@Component({
  components: {
    ItemCompact
  },
})
export default class ListView extends Vue {}
</script>
