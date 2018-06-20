<template>
  <component class="control" :is="`GwiDemoControl${capitalizeFirst(type)}`" :type="type" :label="name" :defaultValue="defaultValue" :controlData="controlData" @change="change"/>
</template>

<script>
import GwiDemoControlString from './GwiDemoControlString'
import GwiDemoControlBoolean from './GwiDemoControlBoolean'
import GwiDemoControlNumber from './GwiDemoControlNumber'
import GwiDemoControlEnum from './GwiDemoControlEnum'
import GwiDemoControlTextarea from './GwiDemoControlTextarea'

const supportedTypes = ['string', 'boolean', 'number', 'enum', 'textarea']
export default {
  name: 'GwiDemoControl',
  components: {
    GwiDemoControlString,
    GwiDemoControlBoolean,
    GwiDemoControlNumber,
    GwiDemoControlEnum,
    GwiDemoControlTextarea
  },
  props: {
    type: {
      type: String,
      default () {
        return 'string'
      },
      required: true,
      validator (type) {
        return supportedTypes.indexOf(type) > -1
      }
    },
    name: {
      type: String,
      required: true
    },
    defaultValue: {
      required: true
    },
    controlData: {
      required: false
    }
  },
  methods: {
    change (value) {
      this.$emit('change', {name: this.name, value})
    },
    capitalizeFirst (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<style lang="scss">
  .control {
    margin-right: 10px;
  }
  .label {
    margin-right: 10px;
  }
</style>
