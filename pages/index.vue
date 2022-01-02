<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-iexpress
      </h1>
      <div>
        <input v-model="name">
        <input v-model="age">
        <button @click="createUser">新規作成</button>
        <ul>
          <li v-for="(user, key) in users" :key="key">
            {{ user.name }}
          </li>
        </ul>
        <div class="links">
          <a
            href="/users"
            class="button--green"
          >
            Users List
          </a>
        </div>
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data () {
    return {
      users: [],
      name: '',
      age: 0
    }
  },

  mounted () {
    axios.get('/api/users/')
      .then((response) => {
        this.users = response.data
        console.log('response:', response.data)
      })
      .catch(error => console.log(error))
  },

  methods: {
    createUser () {
      console.log('name:', this.name)
      console.log('age:', this.age)

      axios.post('/api/users/', {
        name: this.name,
        age: this.age
      })
        .then((response) => {
          // this.users.unshift(response.data)
          console.log('create success:', response.data)
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

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
