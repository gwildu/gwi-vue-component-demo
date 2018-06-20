<template>
  <GwiDemoControlInput type="number" v-model="defaultValue" @change="change" :label="label"/>
</template>

<script>
import GwiDemoControlInput from './GwiDemoControlInput'

export default {
  name: 'GwiDemoControlNumber',
  components: {
    GwiDemoControlInput
  },
  props: {
    label: {
      type: String,
      required: true
    },
    defaultValue: {
      type: Number,
      required: true
    }
  },
  methods: {
    change (e) {
      this.$emit('change', Number(e))
    }
  }
}
</script>
