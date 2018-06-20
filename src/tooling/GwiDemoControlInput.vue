<template>
  <span>
    <label class="label" :for="label">{{label}}:</label>
    <input :id="label" :type="type" :value="value" @change="change" />
  </span>
</template>

<script>
export default {
  name: 'GwiDemoControlInput',
  props: {
    value: {},
    type: {
      type: String,
      default () {
        return 'text'
      }
    },
    label: {
      type: String,
      default () {
        return 'Control label'
      }
    }
  },
  methods: {
    change (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>
