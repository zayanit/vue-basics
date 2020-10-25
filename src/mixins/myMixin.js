export const globalMixin = {
  data: () => ({
    title: 'This title from mixin'
  }),
  methods: {
    changeTitle (newTitle) {
      console.log('I am from Mixin')
      this.title = newTitle
    }
  }
}
