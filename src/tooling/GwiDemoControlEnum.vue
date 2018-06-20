<template>
  <span>
    <label class="label" :for="label">{{label}}:</label>
    <select :id="label" v-model="value" @change="change">
      <option v-for="option in options" :key="option">{{option}}</option>
    </select>
  </span>
</template>

<script>
export default{
  name: 'GwiDemoControlEnum',
  props: {
    label: {
      type: String,
      required: true
    },
    defaultValue: {
      required: true
    },
    controlData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      value: this.defaultValue,
      options: this.controlData.options
    }
  },
  methods: {
    change (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>
