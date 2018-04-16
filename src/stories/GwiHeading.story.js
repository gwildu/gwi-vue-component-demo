import GwiHeading from 'gwi-vue-components/GwiHeading/index.vue'
import readme from 'gwi-vue-components/GwiHeading/default.md'

const addStory = (storiesOf, knobs, withReadme) => {
  storiesOf
    .addDecorator(withReadme(readme))
    .add('basic', () => ({
      components: { GwiHeading },
      template: `<GwiHeading>Basic</GwiHeading>`
    }))
    .add('markup levels', () => ({
      components: { GwiHeading },
      template: `<GwiHeading markup-level="${knobs.number('level', 1)}">Markup levels</GwiHeading>`
    }))
    .add('styling levels', () => ({
      components: { GwiHeading },
      template: `<GwiHeading styling-level="${knobs.number('level', 1)}">Styling levels</GwiHeading>`
    }))
}

export default addStory
