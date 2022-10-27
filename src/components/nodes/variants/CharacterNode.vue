<template>
  <div class="character-node" v-intersection-observer="[onIntersectionObserver, {
    rootMargin: '-50% 0% -50% 0%',
    threshold: 0
  }]">
    <div class="character-node-padding"></div>
    <div class="character-node-text">
      <div class="character-node-text-content">

        <h3>{{ nodeData.name }}</h3>
        <p v-if="nodeData.status === 'leaving'">Farewell</p>
        <p v-else>Welcome</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CharacterNodeType } from '../../../models/timelineCharacter.type';
import { useCharacterStore } from '../../../stores/character.store';

export default defineComponent({
  name: 'CharacterNode',
  components: {
  },
  props: {
    nodeData: {
      type: Object as PropType<CharacterNodeType>,
      required: true,
    }
  },
  setup() {
    const characterStore = useCharacterStore()

    return { characterStore }
  },
  methods: {
    onIntersectionObserver([{ isIntersecting }]: any) {
      if (isIntersecting && this.nodeData.status !== 'leaving') {
        console.log(this.nodeData.name, 'is on screen')
        this.characterStore.setCharacter(this.nodeData)
      }

      if (isIntersecting && this.nodeData.status == 'leaving') {
        this.characterStore.removeCharacter(this.nodeData)

      }
    }
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
@import '../../../styles/mixins';

.character-node {
  width: 80%;
  margin: auto;
  display: flex;

  &:after {
    @include border-line;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    height: 100%;
    transform: translate(-50%);
  }

  &-text,
  &-padding {
    width: 50%;
  }

  &-text {
    position: relative;

    &-content {
      padding-left: var(--timeline-spacing);
    }

    &::before {
      @include timeline-dot;
    }
  }
}
</style>