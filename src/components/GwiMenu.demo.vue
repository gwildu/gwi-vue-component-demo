<template>
  <div>
    <GwiDemoCase name="only items props">
      <GwiMenu :items="dummyItems" />
    </GwiDemoCase>
  </div>
</template>

<script>
import GwiMenu from 'gwi-vue-components/GwiMenu/GwiMenu'
import GwiDemoCase from '../tooling/GwiDemoCase'

export default {
  name: 'GwiMenuDemo',
  components: {GwiMenu, GwiDemoCase},
  data () {
    return {
      dummyItems: [
        {
          displayName: 'Home',
          url: '/home'
        },
        {
          displayName: 'Some other page',
          url: '/something',
          items: [
            {
              displayName: 'Something else',
              url: '/something/else'
            },
            {
              displayName: 'Something completely different',
              url: '/something/different'
            }
          ]
        },
        {
          displayName: 'Some other page',
          url: '/something',
          items: [
            {
              displayName: 'Something else',
              url: '/something/else'
            },
            {
              displayName: 'Something completely different',
              url: '/something/different'
            }
          ]
        },
        {
          displayName: 'Last',
          url: '/last'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
