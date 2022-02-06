<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        商品情報の更新
      </h1>
      <p>商品名</p>
      <input v-model="product.name">
      <br>
      <p>価格</p>
      <input v-model="product.price">
      <br>
      <p>公開/非公開</p>
      <input type="checkbox" v-model="product.isStatus" />
      <br>

      <button @click="hundleUpdate(product._id)">
        更新する
      </button>
      <nuxt-link class="button" to="/products">
        商品一覧
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ params, error }) {
    return axios.get(`/api/products/${params.id}`)
      .then((response) => {
        return { product: response.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },

  data () {
    return {
      product: {}
    }
  },

  head () {
    return {
      title: `Product: ${this.product.name}`
    }
  },

  methods: {
    hundleUpdate (id) {
      axios.put(`/api/products/${id}`, {
        name: this.product.name,
        price: this.product.price,
        isStatus: this.product.isStatus
      })
        .then((response) => {
          this.$router.push('/products')
        })
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
dl {
  margin-bottom: 1rem;
}
</style>
