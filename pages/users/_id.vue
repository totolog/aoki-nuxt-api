<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        ユーザー情報
      </h1>
      <p>氏名：{{ user.name }}</p>
      <p>年齢：{{ user.age }}</p>
      <p>正社員：{{ user.permanent_staff ? 'Yes' : 'No' }}</p>
      <br>
      <button class="button" @click="toUpdatePage(user._id)">
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
  asyncData ({ params, error }) {
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
      user: {}
    }
  },

  head () {
    return {
      title: `User: ${this.user.name}`
    }
  },

  methods: {
    toUpdatePage (id) {
      this.$router.push({ path: '/users/update', query: { id: `${id}` } })
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
