<template>
  <div class="demoCase">
    <GwiHeading markup-level="2" styling-level="3">{{name}}</GwiHeading>
    <div class="controls">
      <GwiDemoControl v-for="control in controls" :key="control.name" :type="control.type" :name="control.name" :defaultValue="control.defaultValue" :controlData="control.controlData" @change="change" />
    </div>
    <div class="wrapper"><slot :controlValues="controlValues"></slot></div>
    <div class="readme">
      <GwiMarkdown :markdown="readme" />
    </div>
  </div>
</template>

<script>
import GwiHeading from 'gwi-vue-components/GwiHeading/index'
import GwiMarkdown from 'gwi-vue-components/GwiMarkdown/index'
import GwiDemoControl from './GwiDemoControl'

export default {
  name: 'GwiDemoCase',
  components: {
    GwiDemoControl,
    GwiHeading,
    GwiMarkdown
  },
  props: {
    name: {
      type: String,
      default () {
        return 'Component name'
      },
      required: true
    },
    controls: {
      type: Array,
      default () {
        return []
      },
      required: false
    },
    readme: {
      type: String,
      required: false
    }
  },
  data () {
    const controlValues = {}
    this.controls.forEach(control => {
      controlValues[control.name] = control.defaultValue
    })
    return {
      controlValues: {...controlValues}
    }
  },
  methods: {
    change (data) {
      this.controlValues[data.name] = data.value
    }
  }
}
</script>

<style scoped lang="scss">
  .demoCase {
    padding-bottom: 20px;
    border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
  }
  .wrapper {
    margin: 20px;
    border: 2px dotted rgba(255, 100, 0, 0.25);
    padding: 0;
    //line-height: 0;
  }
  .readme {
    margin: 0 20px;
  }
  .controls {
    margin: 20px;
  }
</style>
