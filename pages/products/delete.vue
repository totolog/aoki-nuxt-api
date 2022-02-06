<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        商品削除
      </h1>
      <p>氏名</p>
      <p>{{ product.name }}</p>
      <br>
      <p>年齢</p>
      <p>{{ product.price }}</p>
      <br>
      <p>公開/非公開</p>
      <p>{{ product.isStatus ? 'Yes' : 'No' }}</p>
      <br>

      <button @click="handleDelete(product._id)">
        削除
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
  asyncData ({ query, error }) {
    return axios.get(`/api/products/${query.id}`)
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
    handleDelete (id) {
      console.log(id)
      axios.delete(`/api/products/${id}`)
        .then((response) => {
          console.log('削除できました')
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
