<template>
  <div>
    <GwiHeading markup-level="1" styling-level="1">gwi-vue-components demo</GwiHeading>
    <GwiDemoMenu :componentNames="componentNames" hide-toggles/>
  </div>
</template>

<script>
import GwiHeading from 'gwi-vue-components/GwiHeading'

import GwiDemoMenu from '../tooling/GwiDemoMenu'

export default {
  name: 'Home',
  components: {
    GwiDemoMenu,
    GwiHeading
  },
  data () {
    return {
      componentNames: Object.keys(this.$demoComponents).map(fullName => fullName.replace(/Demo/, ''))
    }
  }
}
</script>
