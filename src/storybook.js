import { withKnobs, number, boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/vue'
import withReadme from 'storybook-readme/with-readme'

const req = require.context('./stories', true, /\.story\.js$/)

const knobs = {
  number,
  boolean,
  select
}

req.keys().forEach(filename => {
  const addStory = req(filename).default
  const name = filename.split('.')[1]
  addStory(storiesOf(name, module).addDecorator(withKnobs), knobs, withReadme)
})
