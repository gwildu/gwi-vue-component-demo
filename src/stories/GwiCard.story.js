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
    .add('Basic example without props', () => ({
      components: { GwiCard },
      template: `<GwiCard>Default</GwiCard>`
    }))
    .addDecorator(withReadme(readmeLevel))
    .add('card with different levels', () => ({
      components: { GwiCard },
      template: `<GwiCard level="${knobs.number('level', 5)}">Level 5</GwiCard>`
    }))
    .addDecorator(withReadme(readmePadding))
    .add('card with or without padding', () => ({
      components: { GwiCard },
      template: `<div style="padding: 50px; width: 50%; box-sizing: border-box;"><GwiCard :padding="${knobs.boolean('padding', true)}" level="3"><img style="width: 100%; display: block;" src="${nicePicBig}"/></GwiCard></div>`
    }))
    .addDecorator(withReadme(readmeLayout))
    .add('card with different layouts', () => ({
      components: { GwiCard },
      template: `<GwiCard layout="${knobs.select('layout', selectValues, 'fill')}" :no-padding="true" level="3"><img style="width: 100%; display: block;" src="${nicePicSmall}"/></GwiCard>`
    }))
}

export default addStory
