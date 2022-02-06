<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        PRODUCTS
      </h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>id番号</th>
            <th>商品名</th>
            <th>価格</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index" class="product">
            <td>{{ index + 1 }}</td>
            <td>
              <nuxt-link :to="{ name: 'products-id', params: { id: product._id }}">
                {{ product._id }}
              </nuxt-link>
            </td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button type="button" @click="toDeletePage(product._id)">
                削除ページへ
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <nuxt-link class="button" to="/products/create">
        商品を作成する
      </nuxt-link>
      <nuxt-link class="button" to="/">
        トップへ戻る
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      products: []
    }
  },

  head () {
    return {
      title: 'Products'
    }
  },

  mounted () {
    axios.get('/api/products/')
      .then((response) => {
        this.products = response.data
      })
  },

  methods: {
    toDeletePage (id) {
      console.log(id)
      this.$router.push({ path: '/products/delete', query: { id: `${id}` } })
    }
  }

}
</script>

<style scoped>
table {
  border-top: 1px solid #98989898;
  border-left: 1px solid #98989898;
  border-spacing: 0;
  border-collapse: separate;
}

table th, td {
  padding: 0.5rem;
  text-align: left;
  border-right: 1px solid #989898;
  border-bottom: 1px solid #989898;
  white-space: nowrap;
  text-align: center;
}
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
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.product
{
  margin: 10px 0;
}
.button
{
  display: inline-block;
  margin-top: 50px;
}
</style>
