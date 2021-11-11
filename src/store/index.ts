import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: "Coca-cola 2l",
        image:
          "https://media.istockphoto.com/photos/cola-glass-with-ice-cubes-picture-id530428650?k=20&m=530428650&s=612x612&w=0&h=I5HJCAovm-Ok3hFdmmwh3kurV0xsdIar4fAQ8FxkexI=",
      }
    ],
  },
  getters: {
    getProductById: (state) => (id : number) => {
      return state.products.find(product => product.id == id)
    }
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product)
    }
  },
  actions: {},
  modules: {},
});
