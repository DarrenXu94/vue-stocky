<template>
  <div class="character" :id="charRenderDivId">
    <div>{{ char.name }}</div>
    <img :src="char.img" :alt="char.name">
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CharacterNodeType, TimelineCharacter } from '../../models/timelineCharacter.type';

export default defineComponent({
  name: 'Character',
  components: {
  },
  props: {
    char: {
      type: Object as PropType<TimelineCharacter>,
      required: true,
    }
  },
  computed: {
    charRenderDivId(): string {
      return this.char.name + '_render'
    }
  },
  data() {
    return {
      offsetTop: this.char.room * 75 + 'px'
    };
  },
});
</script>
<style lang="scss">
.character {
  position: absolute;
  top: v-bind(offsetTop);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;

  img {
    width: 75px;
    height: 75px;
    object-fit: scale-down;
  }
}
</style>