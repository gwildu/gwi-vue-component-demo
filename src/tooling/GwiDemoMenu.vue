<template>
  <section id="menu" :class="`menu${active ? ' active' : ''}${hideToggles ? ' hide-toggles' : ''}`">
    <div v-if="!hideToggles" class="toggle" @click="active = !active">{{active ? '╳' : '🍔'}}</div>
    <ul v-if="active || hideToggles">
      <li class="item" :key="name" v-for="name in componentNames" @click="active = !active" >
        <router-link @click="active = !active" class="link" :to="`/${name}`">{{name.replace(/Demo/, '')}}</router-link>
      </li>
    </ul>
    <div v-if="!active && !hideToggles">&nbsp;</div>
  </section>
</template>

<script>
export default {
  name: 'GwiDemoMenu',
  props: {
    componentNames: {
      type: Array
    },
    hideToggles: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~gwi-vue-components/theme/attributes/common/colors';
  @import '~gwi-vue-components/theme/attributes/common/breakpoints';

  .menu {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background-color: white;
    padding: 20px;
    min-width: 64px;
    &.active {
      padding-top: 60px;
      @media screen and (max-width: $breakpoint__s) {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }
    &.hide-toggles {
      position: relative;
      text-align: center;
    }
  }

  .toggle {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    cursor: pointer;
  }

  .item {
    @media screen and (max-width: $breakpoint__s) {
      border-bottom: 1px dashed rgba(0, 0, 0, .3);
      &:last-of-type {
        border-bottom: none;
      }
    }
  }

  .link {
    color: $color__text--link;
    text-decoration: none;
    line-height: 1.8;
    display: inline-block;
    width: 100%;
    @media screen and (max-width: $breakpoint__s) {
      line-height: 2.5;
    }
  }
</style>
