<template>
  <div>
    <GwiDemoCase name="Without props" :readme="defaultReadme">
      <GwiHeading>Default</GwiHeading>
    </GwiDemoCase>
    <GwiDemoCase name="Markup levels" :controls="markupControls" :readme="markupReadme">
      <template slot-scope="slotProps">
        <GwiHeading :markup-level="slotProps.controlValues['markup-level']">Markup levels</GwiHeading>
      </template>
    </GwiDemoCase>
    <GwiDemoCase name="Styling levels" :controls="stylingControls" :readme="stylingReadme">
      <template slot-scope="slotProps">
        <GwiHeading :styling-level="slotProps.controlValues['styling-level']">Styling levels</GwiHeading>
      </template>
    </GwiDemoCase>
    <GwiDemoCase name="Spacing" :controls="spacingControls">
      <template slot-scope="slotProps">
        <GwiHeading :margin-top="slotProps.controlValues['margin-top']">First with margin-top by default</GwiHeading>
        <GwiHeading :margin-top="slotProps.controlValues['margin-top']">Following never have margin-top</GwiHeading>
        <GwiHeading :margin-top="slotProps.controlValues['margin-top']">...</GwiHeading>
      </template>
    </GwiDemoCase>
  </div>
</template>

<script>
import GwiHeading from 'gwi-vue-components/GwiHeading/index'
import defaultReadme from 'gwi-vue-components/GwiHeading/default.md'
import markupReadme from 'gwi-vue-components/GwiHeading/markup-level.md'
import stylingReadme from 'gwi-vue-components/GwiHeading/styling-level.md'

import GwiDemoCase from '../tooling/GwiDemoCase'

export default {
  name: 'GwiHeadingDemo',
  components: { GwiDemoCase, GwiHeading },
  data () {
    return {
      defaultReadme,
      markupControls: [
        {
          name: 'markup-level',
          type: 'number',
          defaultValue: 3
        }
      ],
      markupReadme,
      stylingControls: [
        {
          name: 'styling-level',
          type: 'number',
          defaultValue: 3
        }
      ],
      stylingReadme,
      spacingControls: [
        {
          name: 'margin-top',
          type: 'boolean',
          defaultValue: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
