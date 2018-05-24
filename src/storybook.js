import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import withReadme from 'storybook-readme/with-readme'
import GwiGlobals from 'gwi-vue-components/GwiGlobals/index.vue'


const req = require.context('./stories', true, /\.story\.js$/)

const knobs = {
  number,
  boolean,
  select,
  text
}

req.keys().forEach(filename => {
  const addStory = req(filename).default
  const name = filename.split('.')[1]
  addStory(storiesOf(name, module)
    .addDecorator(withKnobs)
    .addDecorator(story => {
      const Stories = story()
      return {
          components: { GwiGlobals, Stories },
          template: `<GwiGlobals><div style="margin: 20px; border: 2px dotted rgba(255, 100, 0, .25)"><stories/></div></GwiGlobals>`
        }
      }
    ), knobs, withReadme)
})
