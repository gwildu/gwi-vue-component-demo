<template>
  <div>
    <label class="label" :for="label">{{label}}:</label>
    <textarea :id="label" class="field" v-model="value" @change="change" @keyup="change"/>
  </div>
</template>

<script>
export default {
  name: 'GwiDemoControlTextarea',
  data () {
    return {
      value: this.defaultValue
    }
  },
  props: {
    defaultValue: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    change (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style scoped>
.field {
  display: block;
  width: 100%;
  height: 150px;
}
</style>
