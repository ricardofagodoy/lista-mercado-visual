<template>
  <div>
    <b-card :img-src="getProductImage()" img-top>
      <b-card-text>
        {{ product.title }}
      </b-card-text>
      <template #footer>
        <small class="text-muted">-------</small>
      </template>
    </b-card>

    <b-button class="bottom-btn" @click="$router.push('/')" variant="danger">Voltar</b-button>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Product from "@/models/Product";

@Component
export default class Item extends Vue {
  @Prop() private id!: number;

  private product!: Product;

  created() {
    this.product = this.$store.getters.getProductById(this.id);
  }

  getProductImage() {
    return this.product.image || require("@/assets/no-image.jpeg");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card img {
  max-height: 65vh;
}
</style>