<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        ユーザー情報の更新
      </h1>
      <p>氏名</p>
      <input v-model="user.name">
      <br>
      <p>年齢</p>
      <input v-model="user.age">
      <br>

      <button @click="hundleUpdate(user._id)">
        更新する
      </button>
      <nuxt-link class="button" to="/users">
        ユーザー一覧
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ params, query, error }) {
    return axios.get(`/api/users/${query.id}`)
      .then((response) => {
        return { user: response.data }
      })
      .catch((e) => {
        console.log('失敗')
        console.log(e)
        // error({ statusCode: 404, message: 'Post not found' })
      })
  },

  data () {
    return {
      user: {}
    }
  },

  head () {
    return {
      title: `User: ${this.user.name}`
    }
  },

  methods: {
    hundleUpdate (id) {
      axios.put(`/api/users/${id}`, {
        name: this.user.name,
        age: this.user.age
      })
        .then((response) => {
          this.$router.push('/users')
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
</style>
