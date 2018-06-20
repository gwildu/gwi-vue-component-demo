<template>
  <div>
    <GwiMenu :componentNames="componentNames" />
    <section id="content" class="content">
      <GwiHeading markup-level="1" styling-level="2">{{component}}</GwiHeading>
      <GwiGlobals>
        <component :is="`${component}Demo`"/>
      </GwiGlobals>
    </section>
  </div>
</template>

<script>
import GwiGlobals from 'gwi-vue-components/GwiGlobals/index'
import GwiHeading from 'gwi-vue-components/GwiHeading/index'

import GwiMenu from '../tooling/GwiDemoMenu'

export default {
  name: 'ComponentDemo',
  data () {
    return {
      componentNames: Object.keys(this.$demoComponents).map(fullName => fullName.replace(/Demo/, ''))
    }
  },
  components: {
    GwiGlobals,
    GwiHeading,
    GwiMenu
  },
  computed: {
    component () {
      return this.$route.params.component
    }
  }
}
</script>

<style scoped>
  .content {
    position: absolute;
    width: 100%;
  }
</style>
