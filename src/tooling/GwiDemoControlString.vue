<template>
  <GwiDemoControlInput type="text" v-model="defaultValue" @change="change" :label="label"/>
</template>

<script>
import GwiDemoControlInput from './GwiDemoControlInput'

export default {
  name: 'GwiDemoControlString',
  components: {
    GwiDemoControlInput
  },
  props: {
    label: {
      type: String,
      required: true
    },
    defaultValue: {
      type: String,
      required: true
    }
  },
  methods: {
    change (e) {
      this.$emit('change', e)
    }
  }
}
</script>
