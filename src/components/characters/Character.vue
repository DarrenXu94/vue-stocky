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
      offsetTop: (this.char.room - 1) * 70 + 'px'
    };
  },
});
</script>
<style lang="scss">
@import '../../styles/mixins';

.character {
  position: absolute;
  top: v-bind(offsetTop);

  @include for-tablet-portrait-up {
    top: calc(1.5 * v-bind(offsetTop));
    right: 15vw;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;

  img {
    width: 40px;
    height: 40px;
    object-fit: scale-down;
  }

  @include for-tablet-portrait-up {
    img {
      width: 75px;
      height: 75px;
      object-fit: scale-down;
    }
  }
}
</style>