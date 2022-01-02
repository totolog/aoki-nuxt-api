<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        User
      </h1>
      <h2 class="info">ユーザー情報</h2>
      <p>氏名：{{ user.name }}</p>
      <p>年齢：{{ user.age }}</p>
      <nuxt-link class="button" to="/users">
        Users
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ params, error }) {
    console.log(params.id)
    return axios.get(`/api/users/${params.id}`)
      .then((response) => {
        return { user: response.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },

  data () {
    return {
      user: {},
      name: ''
    }
  },

  head () {
    return {
      title: `User: ${this.user.name}`
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
