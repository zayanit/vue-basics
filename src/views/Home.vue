<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--{{ title }}-->
    <!--<input type="text" v-bind:value="formData.name">-->
    <!--{{ brandNewTitle }}
    <input type="text" v-model="title">-->
    <br>
    <label>Frist Name: </label><input type="text" v-model="firstName">
    <br>
    <label>Last Name: </label><input type="text" v-model="lastName">
    <br>
    <p>The fullName is: {{ fullName }}</p>
    <HelloWorld :msg="title"/>
    <button v-on:click="changeTitle('This is a new changed title')">Change Title</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { globalMixin } from '@/mixins/myMixin.js'

export default {
  name: 'Home',
  mixins: [globalMixin],
  components: {
    HelloWorld
  },
  data () {
    return {
      // title: 'This is a good title for Vue.js',
      brandNewTitle: '',
      formData: { name: 'Mohammed', address: '' },
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    /* changeTitle (newTitle) {
      console.log('I am from Home')
      this.title = newTitle
    } */
  },
  watch: {
    title: function (val, oldVal) {
      // console.log('The value changed from: ' + oldVal + ' to: ' + val)
      this.brandNewTitle = '{' + val + '}'
    }/* ,
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    } */
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>
