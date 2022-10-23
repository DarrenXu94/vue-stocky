<template>
  <div class="character-node">
    <div class="character-node-padding"></div>
    <div class="character-node-text">
      <h3>{{nodeData.name}}</h3>
      <p v-if="nodeData.status === 'leaving'">Farewell</p>
      <p v-else>Welcome</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CharacterNodeType } from '../../../models/timelineCharacter.type';

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

  &-text,
  &-padding {
    width: 50%;
  }

  &-padding {
    padding-right: 20px;
  }

  &-text {
    @include border-line;
    position: relative;

    &::before {
      @include timeline-dot;
    }
  }
}
</style>