import GwiMarkdown from 'gwi-vue-components/GwiMarkdown/index.vue'

const markdown = '# header 1\n## header 2\n### header 3\n#### header 4\n\nLorem **ipsum** _dolor_ ~~sit~~ [amet](https://toon-thaicuisine.ch), consectetuer adipiscing elit. \n\n> Aenean commodo ligula eget dolor. Aenean massa. \n\nLorem ipsum dolor sit amet, consectetuer `https://toon-thaicuisine.ch` adipiscing elit. \n\n```javascript\nimport something from \'somewhere\'\n\nconst somethingElse = () => {\n  const somethingElse = something.doSomething().doSomething().doSomething().doSomething()\n  return somethingElse + \' asdfasdfa\'\n}\n\nexport default somethingElse\n```\n![some image description](https://firebasestorage.googleapis.com/v0/b/toon-thaicuisine.appspot.com/o/flamelink%2Fmedia%2F1520491291630_5071392-nice-picture.jpg?alt=media&token=bc5d58ac-3554-4cad-b552-efbda7f50daa)\n\n- asdfasd\n- asdasd\n- asdfasdfasd\n\n1. asdfasd\n2. asdfasd\n3. asdasdfa \n\n [ ] to be done\n [ ] to be done too\n [ ] also to be done'

const addStory = (storiesOf, knobs, withReadme) => {
  storiesOf
    .add('basic', () => ({
      components: {GwiMarkdown},
      template: `<GwiMarkdown :markdown="markdown" />`,
      data() {
        return {
          markdown
        }
      }
    }))
}

export default addStory
