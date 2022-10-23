<template>
  <div class="character">
    <div>{{char.name}}</div>
    <img :src="char.img" :alt="char.name">
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CharacterNodeType } from '../../models/timelineCharacter.type';

export default defineComponent({
  name: 'Character',
  components: {
  },
  props: {
    char: {
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
.character {
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