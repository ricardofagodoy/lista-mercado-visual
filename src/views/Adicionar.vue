<template>
  <div>
    <b-card :img-src="product.image" img-top>

      <b-card-text>

        <b-container class="bv-example-row">
          <b-row>
            <b-col cols="10">
              <b-form-input type="search" v-model="product.title" :maxlength="25" placeholder="Nome do produto"></b-form-input>
            </b-col>

            <b-col cols="2" align-self="center">
              <b-icon @click="buscarProdutoAudio" icon="soundwave" font-scale="2" :animation="voiceAnimation"></b-icon>
            </b-col>
          </b-row>
        </b-container>

      </b-card-text>

      <template #footer>
          <b-button @click="buscarProduto" :disabled="product.title.length < 3" class="w-100" variant="primary">Buscar</b-button>
          <b-button @click="proximaImagem" :disabled="images.length < 2" class="w-100 mt-1" variant="secondary">Trocar imagem</b-button>
          <b-button @click="salvar" :disabled="product.title.length < 3" class="w-100 mt-1" variant="success">Salvar</b-button>
      </template>
    </b-card>

    <b-button class="bottom-btn" @click="$router.push('/')" variant="danger">Cancelar</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import imageRepository from '@/repository/PaoImageRepository' 

@Component({
  components: {
  },
})
export default class Adicionar extends Vue {

  private product = {
    id: new Date().getTime(),
    title: '',
    image: require("@/assets/no-image.jpeg")
  }

  private images : string[] = []
  private image_index = 0
  private voiceAnimation = ''

  async buscarProduto() {
    this.images = (await imageRepository.getImagesFromQuery(this.product.title))
    this.image_index = 0
    this.proximaImagem()
  }

  buscarProdutoAudio() {

      const recognition = new (window as any).webkitSpeechRecognition()

      recognition.interimResults = true
      recognition.lang = "pt-BR"
      recognition.continuous = false

      // This event happens when you talk in the microphone
      recognition.onresult = (event : any) => {
          for (let i = event.resultIndex; i < event.results.length; i++)
              if (event.results[i].isFinal) {
                  this.product.title = event.results[i][0].transcript.trim()
                  this.buscarProduto()
              }
      }

      recognition.onstart = () => {
          this.voiceAnimation = 'throb'
      }

      recognition.onend = () => {
          this.voiceAnimation = ''
      }

      recognition.start()
  }

  proximaImagem() {
    this.product.image = this.images[this.image_index++%this.images.length]
  }

  salvar() {
    this.$store.commit('addProduct', this.product)
    this.$router.push('/')
  }
}
</script>

<style scoped lang="scss">
.card img {
  max-height: 65vh;
}
</style>