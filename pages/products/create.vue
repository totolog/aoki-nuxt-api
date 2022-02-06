<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        CREATE Products
      </h1>
      <form @submit.prevent="createProduct" method="post">
        <dl>
          <dt>商品名</dt>
          <dt>
            <input name="name" v-model="state.form.name" />
          </dt>
        </dl>
        <dl>
          <dt>
            価格
          </dt>
          <dt>
            <input name="name" v-model="state.form.price" required />
          </dt>
        </dl>
        <dl>
          <dt>
            公開/非公開
          </dt>
          <dt>
            <input
              type="checkbox"
              name="name"
              v-model="state.form.isStatus"
            />
          </dt>
        </dl>
        <!-- <button @click="createUser">新規作成</button> -->
        <button type='submit'>新規作成</button>
      </form>
      <nuxt-link class="button" to="/products">
        商品一覧
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
      state: {
        form: {
          name: '',
          price: 0,
          isStatus: false
        }
      }
    }
  },

  head () {
    return {
      title: 'Products'
    }
  },

  methods: {
    createProduct () {
      console.log('state:', this.state.form)
      axios.post('/api/products/', {
        name: this.state.form.name,
        price: this.state.form.price,
        isStatus: this.state.form.isStatus
      })
        .then((response) => {
          console.log('create success:', response.data)
          this.$router.push('/products')
        })
        .catch((error) => {
          console.log(error)
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
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
.button
{
  display: inline-block;
  margin-top: 50px;
}

dl {
  margin-bottom: 1rem;
}
</style>
