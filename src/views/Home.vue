<template>
  <div class="home">

    <b-container class="actions mb-4">
      <b-button @click="$router.push('adicionar')" variant="primary">Adicionar item</b-button>
    </b-container>

    <ListView id="item-list" />

    <div>
      <b-button class="bottom-btn" @click="$router.push('adicionar')" variant="success">Iniciar compra</b-button>
    </div>
  </div>
</template>

<style scoped lang="scss">

#item-list {
  height: 70vh;
  width: 100%;
  overflow: scroll;
}

.actions .btn {
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ListView from "@/components/ListView.vue";

@Component({
  components: {
    ListView,
  },
})
export default class Home extends Vue {}
</script>
