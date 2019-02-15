<template>
  <div>
    <GwiDemoCase name="Without props" :readme="defaultReadme">
      <GwiCard>default</GwiCard>
    </GwiDemoCase>
    <GwiDemoCase :readme="levelReadme" name="Elevation level" :controls="elevationControls">
      <template slot-scope="slotProps">
        <GwiCard :level="slotProps.controlValues.level">elevation level</GwiCard>
      </template>
    </GwiDemoCase>
    <GwiDemoCase name="Hover level" :controls="[...hoverControls, ...elevationControls]" :readme="hoverReadme">
      <template slot-scope="slotProps">
        <GwiCard :level="slotProps.controlValues.level" :hover-level="slotProps.controlValues.hover">hover level</GwiCard>
      </template>
    </GwiDemoCase>
    <GwiDemoCase name="Spacings" :controls="spacingControls" :readme="spacingReadme">
      <template slot-scope="slotProps">
        <GwiCard :padding="slotProps.controlValues.padding" :margin-top="slotProps.controlValues['margin-top']"
                 :margin-bottom="slotProps.controlValues['margin-bottom']" layout="fill" level="3">
          <img class="image"
               src="https://res.cloudinary.com/gwildu/image/upload/s--L0cn6Pjw--/v1528171787/common/duck1.jpg">
        </GwiCard>
      </template>
    </GwiDemoCase>
    <GwiDemoCase name="Layout" :controls="layoutControls" :readme="layoutReadme">
      <template slot-scope="slotProps">
        <GwiCard :layout="slotProps.controlValues.layout" :padding="false" level="3">
          <img class="image"
               src="https://res.cloudinary.com/gwildu/image/upload/s--A0n5WYxO--/c_scale,h_333,w_500/v1528171785/common/duck2.jpg"/>
        </GwiCard>
      </template>
    </GwiDemoCase>
  </div>
</template>

<script>
import GwiCard from 'gwi-vue-components/GwiCard'
import GwiHeading from 'gwi-vue-components/GwiHeading'
import GwiDemoCase from '../tooling/GwiDemoCase'
import defaultReadme from 'gwi-vue-components/GwiCard/default.md'
import levelReadme from 'gwi-vue-components/GwiCard/level.md'
import hoverReadme from 'gwi-vue-components/GwiCard/hover.md'
import spacingReadme from 'gwi-vue-components/GwiCard/padding.md'
import layoutReadme from 'gwi-vue-components/GwiCard/layout.md'

export default {
  name: 'GwiCardDemo',
  components: {
    GwiCard,
    GwiHeading,
    GwiDemoCase
  },
  data () {
    return {
      defaultReadme,
      elevationControls: [
        {
          name: 'level',
          type: 'number',
          defaultValue: 3
        }
      ],
      levelReadme,
      hoverControls: [
        {
          name: 'hover',
          type: 'number',
          defaultValue: 4
        }
      ],
      hoverReadme,
      spacingControls: [
        {
          name: 'padding',
          type: 'boolean',
          defaultValue: false
        },
        {
          name: 'margin-top',
          type: 'boolean',
          defaultValue: false
        },
        {
          name: 'margin-bottom',
          type: 'boolean',
          defaultValue: true
        }
      ],
      spacingReadme,
      layoutControls: [
        {
          name: 'layout',
          type: 'enum',
          defaultValue: 'fill',
          controlData: {
            options: [
              'fill',
              'stretch'
            ]
          }
        }
      ],
      layoutReadme
    }
  }
}
</script>

<style lang="scss">
  .image {
    width: 100%;
    display: block;
  }
</style>
