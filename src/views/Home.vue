<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--{{ title }}-->
    <!--<input type="text" v-bind:value="formData.name">-->
    <input type="text" v-model="title">
    <HelloWorld :msg="title"/>
    <button v-on:click="changeTitle('This is a new changed title')">Change Title</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      title: 'This is a good title for Vue.js',
      formData: { name: 'Mohammed', address: '' }
    }
  },
  methods: {
    changeTitle (newTitle) {
      this.title = newTitle
    }
  }
}
</script>
