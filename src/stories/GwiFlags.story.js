import GwiSwissFlag from "gwi-vue-components/GwiSwissFlag/index.vue";
import GwiThaiFlag from "gwi-vue-components/GwiThaiFlag/index.vue";

export default (storiesOf, knobs, withReadme) => {
  storiesOf.add("Swiss", () => ({
    components: { GwiSwissFlag },
    template: `<GwiSwissFlag height="${knobs.number('height', 200)}"/>`
  }));
  storiesOf.add("Thai", () => ({
    components: { GwiThaiFlag },
    template: `<GwiThaiFlag height="${knobs.number('height', 200)}"/>`
  }));
};
