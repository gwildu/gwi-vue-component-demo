import GwiCard from 'gwi-vue-components/GwiCard/index.vue'
const nicePicSmall = 'nice_pic_small.jpg'
const nicePicBig = 'nice_pic_big.jpg'
const selectValues = {
  'fill': 'fill',
  'stretch': 'stretch'
}
const readme = require('gwi-vue-components/GwiCard/default.md')
const readmeLevel = require('gwi-vue-components/GwiCard/level.md')
const readmePadding = require('gwi-vue-components/GwiCard/padding.md')
const readmeLayout = require('gwi-vue-components/GwiCard/layout.md')

const addStory = (storiesOf, knobs, withReadme) => {
  storiesOf
    .addDecorator(withReadme(readme))
    .add('without props', () => ({
      components: { GwiCard },
      template: `<GwiCard>Default</GwiCard>`
    }))
    .addDecorator(withReadme(readmeLevel))
    .add('elevation levels', () => ({
      components: { GwiCard },
      template: `<GwiCard level="${knobs.number('level', 5)}">Level 5</GwiCard>`
    }))
    .addDecorator(withReadme(readmePadding))
    .add('spacings', () => ({
      components: { GwiCard },
      template: `<GwiCard :padding="${knobs.boolean('padding', true)}" :margin-bottom="${knobs.boolean('margin-bottom', true)}" :margin-top="${knobs.boolean('margin-top', false)}" level="3"><img style="width: 100%; display: block;" src="${nicePicBig}"/></GwiCard>`
    }))
    .addDecorator(withReadme(readmeLayout))
    .add('layouts', () => ({
      components: { GwiCard },
      template: `<GwiCard layout="${knobs.select('layout', selectValues, 'fill')}" :no-padding="true" level="3"><img style="width: 100%; display: block;" src="${nicePicSmall}"/></GwiCard>`
    }))
}

export default addStory
