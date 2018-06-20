<template>
  <span>
    <label class="label" :for="label">{{label}}:</label>
    <input :id="label" :checked="defaultValue" type="checkbox" @change="change"/>
  </span>
</template>

<script>
export default {
  name: 'GwiDemoControlBoolean',
  props: {
    label: {
      type: String,
      required: true
    },
    defaultValue: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    change (e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>
