import GwiHeading from 'gwi-vue-components/GwiHeading/index.vue'
import readme from 'gwi-vue-components/GwiHeading/default.md'

const addStory = (storiesOf, knobs, withReadme) => {
  storiesOf
    .addDecorator(withReadme(readme))
    .add('basic', () => ({
      components: { GwiHeading },
      template: `<GwiHeading>something</GwiHeading>`
    }))
}

export default addStory
