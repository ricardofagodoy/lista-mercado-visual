<template>

  <b-list-group-item class="d-flex align-items-center">
    <b-avatar :src="product.image" icon="question-circle-fill"></b-avatar>
    <span class="title">{{ product.title }}</span>

    <span class="edit-buttons">
      <b-icon icon="x-circle-fill" font-scale="2" variant="danger"></b-icon>
    </span>
  </b-list-group-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Product from "@/models/Product";

@Component
export default class ItemCompact extends Vue {
  @Prop() private product!: Product;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  text-align: left;
  overflow: hidden;
  max-width: 65%;
}
.b-avatar {
  margin-right: 5%;
}
.edit-buttons {
  position: absolute;
  right: 4%;
}
</style>
