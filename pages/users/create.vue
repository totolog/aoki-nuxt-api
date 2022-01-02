<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        CREATE USERS
      </h1>
      <form @submit.prevent="createUser" method="post">
        <dl>
          <dt>名前</dt>
          <dt>
            <input
              v-model="state.form.name"
            />
          </dt>
        </dl>
        <dl>
          <dt>
            年齢
          </dt>
          <dt>
            <input name="name" v-model="state.form.age" required />
          </dt>
        </dl>
        <dl>
          <dt>
            正社員
          </dt>
          <dt>
            <input
              type="checkbox"
              name="permanent_staff"
              v-model="state.form.permanent_staff"
            />
          </dt>
        </dl>
        <!-- <button @click="createUser">新規作成</button> -->
        <button type='submit'>新規作成</button>
      </form>
      <nuxt-link class="button" to="/users">
        ユーザー一覧
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
          age: 0,
          permanent_staff: true
        }
      }
    }
  },

  head () {
    return {
      title: 'Users'
    }
  },

  methods: {
    createUser () {
      axios.post('/api/users/', {
        name: this.state.form.name,
        age: this.state.form.age
      })
        .then((response) => {
          console.log('create success:', response.data)
          this.$router.push('/users')
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
