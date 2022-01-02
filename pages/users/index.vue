<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        USERS
      </h1>
      <table>
        <thead>
          <tr>
            <th>番号</th>
            <th>id番号</th>
            <th>名前</th>
            <th>年齢</th>
            <th>正社員</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index" class="user">
            <td>{{ index+1 }}</td>
            <td>
              <nuxt-link :to="{ name: 'users-id', params: { id: user._id }}">
                {{ user._id }}
              </nuxt-link>
            </td>
            <td>{{ user.name}}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.permanent_staff ? 'Yes' : 'No' }}</td>
            <td>
              <button type='button' @click="handleDelete(user._id)">
                削除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <nuxt-link class="button" to="/users/create">
        ユーザーを作成する
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
      users: []
    }
  },

  head () {
    return {
      title: 'Users'
    }
  },

  mounted () {
    axios.get('/api/users/')
      .then((response) => {
        this.users = response.data
      })
  },

  methods: {
    handleDelete (id) {
      console.log(id)
      axios.delete(`/api/users/${id}`)
        .then((response) => {
          console.log('削除できました')
          this.$router.push('/')
        })
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
.user
{
  margin: 10px 0;
}
.button
{
  display: inline-block;
  margin-top: 50px;
}
</style>
